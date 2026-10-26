/* Synced from converloopai; update with pnpm sync:converloop. */
import styles from "./site.module.css";
import productMedia from "./productMedia.json";

type Frame = "phone" | "ipad" | "duo" | "plain";

/** Default screen proportions per device, so callers rarely pass a ratio. */
const frameRatio: Record<Frame, string> = {
	phone: "9 / 19.5",
	ipad: "4 / 3",
	duo: "2853 / 2007",
	plain: "16 / 10",
};

export type ShotSlotProps = {
	/** Two-digit ordinal shown on the placeholder, e.g. "01". */
	index: string;
	/** What to capture. Shown as the placeholder heading. */
	title: string;
	/** Framing guidance: which screen, which state, what has to be readable. */
	note?: string;
	/** Source surface and suggested export size, e.g. "iPhone · 1206×2622". */
	meta?: string;
	/** Capture convention shown on the placeholder, e.g. "content only, no status bar". */
	hint?: string;
	/** Apple product bezel placed around the screen. */
	frame?: Frame;
	/** Overrides the frame's default screen proportions. */
	ratio?: string;
	/** Fill this in to replace the placeholder with the real screenshot. */
	src?: string;
	alt?: string;
	priority?: boolean;
	/** Asset prefix when the showcase is hosted inside another site. */
	assetBase?: string;
	/** Crops to the requested ratio; phone crops clip the screen and device together. */
	crop?: boolean;
	className?: string;
};

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
	ratio,
	src,
	alt,
	priority,
	assetBase = "",
	crop,
	className,
}: ShotSlotProps) {
	const screenRatio = ratio ?? frameRatio[frame];
	const cropPhone = frame === "phone" && crop && ratio !== undefined && src !== undefined;
	const sourcePath = src?.split("?")[0];
	const dimensions = sourcePath ? (productMedia as Record<string, { width: number; height: number }>)[sourcePath.startsWith(assetBase) ? sourcePath.slice(assetBase.length) : sourcePath] : undefined;

	const screen = src ? (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			className={crop && !cropPhone ? styles.screenImgCrop : styles.screenImg}
			src={src}
			width={dimensions?.width}
			height={dimensions?.height}
			alt={alt ?? title}
			style={crop && !cropPhone ? { aspectRatio: screenRatio } : undefined}
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

	if (frame === "phone") {
		const phone = (
			<div className={[styles.phone, !cropPhone && className].filter(Boolean).join(" ")}>
				<div className={styles.phoneScreen}>
					{screen}
				</div>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img className={styles.deviceBezel} src={`${assetBase}/devices/iphone-16-pro-black-titanium.webp`} alt="" aria-hidden="true" width={1080} height={2208} loading={priority ? "eager" : "lazy"} />
			</div>
		);
		return cropPhone ? (
			<div className={[styles.phoneCrop, className].filter(Boolean).join(" ")} style={{ aspectRatio: screenRatio }}>
				{phone}
			</div>
		) : phone;
	}

	if (frame === "ipad" || frame === "duo") {
		const duo = frame === "duo";
		return (
			<div className={[styles.ipad, duo && styles.duo, className].filter(Boolean).join(" ")}>
				<div className={styles.ipadScreen}>{screen}</div>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img className={styles.deviceBezel} src={`${assetBase}/devices/${duo ? "iphone-duo-night-sky-landscape.webp" : "ipad-pro-13-space-black-landscape.webp"}`} alt="" aria-hidden="true" width={1800} height={duo ? 1308 : 1380} loading={priority ? "eager" : "lazy"} />
			</div>
		);
	}

	return <div className={[styles.plainShot, className].filter(Boolean).join(" ")}>{screen}</div>;
}
