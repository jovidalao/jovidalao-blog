import type { CSSProperties } from "react";
import type { Locale } from "@/i18n";

/** Custom properties for inline styles; React's CSSProperties has no index signature. */
export const vars = (values: Record<string, string | number>) => values as CSSProperties;

export const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Splits the statement into words (CJK included, via ICU) so each one can light up
 * on its own as the paragraph scrolls past. Runs at build time; the browser only
 * gets spans and a CSS scroll timeline.
 */
export function revealWords(text: string, locale: Locale) {
	const parts = [...new Intl.Segmenter(locale, { granularity: "word" }).segment(text)];
	return parts.map(({ segment }, i) =>
		segment.trim() ? <span key={i} style={vars({ "--t": (i / parts.length).toFixed(3) })}>{segment}</span> : segment,
	);
}

export function Arrow({ down }: { down?: boolean }) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d={down ? "M12 5v14M6 13l6 6 6-6" : "M5 12h14M13 6l6 6-6 6"} />
		</svg>
	);
}
