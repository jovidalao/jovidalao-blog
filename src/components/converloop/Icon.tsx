/* Synced from converloopai; update with pnpm sync:converloop. */
import styles from "./site.module.css";

/**
 * One stroke-icon vocabulary for every feature grid on the site. Paths are drawn on a
 * 24×24 box at stroke-width 1.5 so they sit at the same optical weight as the text.
 */
const paths: Record<string, string> = {
	cloud: "M7 18a4 4 0 0 1 .4-8 5.5 5.5 0 0 1 10.5 1.6A3.5 3.5 0 0 1 17.5 18Z",
	chat: "M4 5h16v11H9l-5 4z",
	correct: "M4 7h11M4 12h7M17 13l2 2 4-4M4 17h9",
	sparkle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8ZM19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9Z",
	translate: "M3 6h9M7 4v2c0 4-1.6 7-4 9M6 11c1.4 2.5 3.4 4.2 6 5M13 20l4-10 4 10M14.6 17h4.8",
	edit: "M4 20h4l10-10-4-4L4 16zM14 6l4 4",
	database: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3ZM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
	key: "M15 4a5 5 0 1 1-4.5 7.2L4 17.7V21h3.3l1-1v-2h2v-2h1.8l1.4-1.4A5 5 0 0 1 15 4Zm1.6 3.4a1 1 0 1 0 0 0Z",
	target: "M12 3v3m0 12v3M3 12h3m12 0h3M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
	headphones: "M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H6a2 2 0 0 1-2-2Zm16 0h-3v6h1a2 2 0 0 0 2-2Z",
	mic: "M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3ZM6 11a6 6 0 0 0 12 0M12 17v4M9 21h6",
	book: "M4 5a2 2 0 0 1 2-2h5v18H6a2 2 0 0 1-2-2Zm7-2h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5",
	download: "M12 3v12m0 0 5-5m-5 5-5-5M5 20h14",
	list: "M4 6h2m4 0h10M4 12h2m4 0h10M4 18h2m4 0h10",
	check: "M5 12.5l4.5 4.5L19 7",
	close: "M7 7l10 10M17 7 7 17",
};

export type IconName = keyof typeof paths;

export function Icon({ name, className }: { name: string; className?: string }) {
	const d = paths[name] ?? paths.sparkle;
	return (
		<svg
			className={[styles.icon, className].filter(Boolean).join(" ")}
			viewBox="0 0 24 24"
			aria-hidden="true"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d={d} />
		</svg>
	);
}
