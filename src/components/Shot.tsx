import type { ReactNode } from "react";
import styles from "./site.module.css";

type Tint = "peelday" | "desktop" | "ios" | "neutral";
type Frame = "mac" | "phone" | "ipad" | "plain";

const tintClass: Record<Tint, string> = {
	peelday: styles.stagePeelday,
	desktop: styles.stageDesktop,
	ios: styles.stageIos,
	neutral: "",
};

/** Default screen proportions per device, so callers rarely pass a ratio. */
const frameRatio: Record<Frame, string> = {
	mac: "16 / 10",
	phone: "9 / 19.5",
	ipad: "4 / 3",
	plain: "16 / 10",
};

/** The tinted panel screenshots sit on. Compose `ShotSlot` children inside it. */
export function ShotStage({
	tint = "neutral",
	layout = "single",
	tall,
	bleed,
	className,
	children,
}: {
	tint?: Tint;
	/**
	 * `single` one shot · `two`/`three` equal columns · `pair` a wide shot beside a
	 * phone · `overlap` a phone sitting over the corner of a wide shot · `fan` three
	 * phones with the middle one raised.
	 */
	layout?: "single" | "two" | "three" | "pair" | "overlap" | "fan";
	tall?: boolean;
	/** Let the stage run wider than the 960px text column. */
	bleed?: boolean;
	className?: string;
	children: ReactNode;
}) {
	const stage = [
		styles.stage,
		tintClass[tint],
		tall && styles.stageTall,
		bleed && styles.stageBleed,
		className,
	]
		.filter(Boolean)
		.join(" ");

	const inner = {
		single: "",
		two: styles.stageTwo,
		three: styles.stageThree,
		pair: styles.stagePair,
		overlap: styles.stageOverlap,
		fan: styles.stageFan,
	}[layout];

	return <div className={stage}>{inner ? <div className={inner}>{children}</div> : children}</div>;
}

export type ShotSlotProps = {
	/** Two-digit ordinal shown on the placeholder, e.g. "01". */
	index: string;
	/** What to capture. Shown as the placeholder heading. */
	title: string;
	/** Framing guidance: which screen, which state, what has to be readable. */
	note?: string;
	/** Source surface and suggested export size, e.g. "macOS · 1600×1000". */
	meta?: string;
	/** Capture convention shown on the placeholder, e.g. "content only, no title bar". */
	hint?: string;
	/** Device chrome drawn around the screen. */
	frame?: Frame;
	/** Text in the macOS title bar. Ignored by other frames. */
	bar?: string;
	/** Overrides the frame's default screen proportions. */
	ratio?: string;
	/** Fill this in to replace the placeholder with the real screenshot. */
	src?: string;
	alt?: string;
	priority?: boolean;
	/** Crops a tall screenshot to the frame instead of letting it set the height. */
	crop?: boolean;
	/** Set false when the screenshot already includes iOS's own status bar and island. */
	island?: boolean;
	className?: string;
};

function MacBar({ title }: { title?: string }) {
	return (
		<div className={styles.macBar} aria-hidden="true">
			<span className={styles.macDots}>
				<i style={{ background: "#ff5f57" }} />
				<i style={{ background: "#febc2e" }} />
				<i style={{ background: "#28c840" }} />
			</span>
			{title ? <span className={styles.macTitle}>{title}</span> : null}
		</div>
	);
}

/**
 * One screenshot in its device chrome. Until `src` is filled in the screen shows a
 * labelled placeholder describing exactly which capture belongs there — so the page
 * reads as finished before the assets exist, and stays composed once they land.
 */
export function ShotSlot({
	index,
	title,
	note,
	meta,
	hint,
	frame = "plain",
	bar,
	ratio,
	src,
	alt,
	priority,
	crop,
	island = true,
	className,
}: ShotSlotProps) {
	const screenRatio = ratio ?? frameRatio[frame];

	const screen = src ? (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			className={crop ? styles.screenImgCrop : styles.screenImg}
			src={src}
			alt={alt ?? title}
			style={crop ? { aspectRatio: screenRatio } : undefined}
			loading={priority ? "eager" : "lazy"}
			fetchPriority={priority ? "high" : undefined}
		/>
	) : (
		<div className={styles.placeholder} style={{ aspectRatio: screenRatio }}>
			<div className={styles.placeholderInner}>
				<span className={styles.placeholderIndex}>Shot {index}</span>
				<span className={styles.placeholderTitle}>{title}</span>
				{note ? <p className={styles.placeholderNote}>{note}</p> : null}
				{meta ? <p className={styles.placeholderMeta}>{meta}</p> : null}
				{hint ? <p className={styles.placeholderHint}>{hint}</p> : null}
			</div>
		</div>
	);

	if (frame === "mac") {
		return (
			<div className={[styles.mac, className].filter(Boolean).join(" ")}>
				<MacBar title={bar} />
				<div className={styles.macScreen}>{screen}</div>
			</div>
		);
	}

	if (frame === "phone") {
		return (
			<div className={[styles.phone, className].filter(Boolean).join(" ")}>
				<div className={styles.phoneScreen}>
					{island ? <span className={styles.phoneIsland} aria-hidden="true" /> : null}
					{screen}
				</div>
			</div>
		);
	}

	if (frame === "ipad") {
		return (
			<div className={[styles.ipad, className].filter(Boolean).join(" ")}>
				<div className={styles.ipadScreen}>{screen}</div>
			</div>
		);
	}

	return <div className={[styles.plainShot, className].filter(Boolean).join(" ")}>{screen}</div>;
}
