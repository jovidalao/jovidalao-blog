import styles from "./site.module.css";

/**
 * One stroke-icon vocabulary for every feature grid on the site. Paths are drawn on a
 * 24×24 box at stroke-width 1.5 so they sit at the same optical weight as the text.
 */
const paths: Record<string, string> = {
	// Peelday
	page: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h5",
	cutout: "M7 4v9m10-9v9M7 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm10 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
	batch: "M4 8h10v12H4zM8 5h10v12M12 2h8v12",
	calendar: "M4 6h16v15H4zM4 10h16M8 3v4M16 3v4M8 14h2M14 14h2M8 18h2",
	widget: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
	cloud: "M7 18a4 4 0 0 1 .4-8 5.5 5.5 0 0 1 10.5 1.6A3.5 3.5 0 0 1 17.5 18Z",
	ticket: "M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 2 2 0 0 0 0-4ZM10 6v10",
	unlock: "M8 10V7a4 4 0 0 1 8 0M5 10h14v10H5zM12 14v3",

	// Conversation and correction
	chat: "M4 5h16v11H9l-5 4z",
	correct: "M4 7h11M4 12h7M17 13l2 2 4-4M4 17h9",
	sparkle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8ZM19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9Z",
	branch: "M7 4v10a4 4 0 0 0 4 4h6M7 4a2 2 0 1 0 0 0Zm0 16a2 2 0 1 0 0 0Zm12-2a2 2 0 1 0 0 0ZM7 6v12",
	translate: "M3 6h9M7 4v2c0 4-1.6 7-4 9M6 11c1.4 2.5 3.4 4.2 6 5M13 20l4-10 4 10M14.6 17h4.8",
	edit: "M4 20h4l10-10-4-4L4 16zM14 6l4 4",

	// Memory, data, privacy
	memory: "M9 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2ZM4 8h3M4 12h3M4 16h3M17 8h3M17 12h3M17 16h3",
	timeline: "M6 3v18M6 7h5M6 13h9M6 19h4M11 7a1.6 1.6 0 1 0 0 0Zm4 6a1.6 1.6 0 1 0 0 0Zm-5 6a1.6 1.6 0 1 0 0 0Z",
	shield: "M12 3l7 3v6c0 4.2-2.8 7.4-7 9-4.2-1.6-7-4.8-7-9V6ZM9 12l2 2 4-4",
	database: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3ZM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
	key: "M15 4a5 5 0 1 1-4.5 7.2L4 17.7V21h3.3l1-1v-2h2v-2h1.8l1.4-1.4A5 5 0 0 1 15 4Zm1.6 3.4a1 1 0 1 0 0 0Z",

	// Practice
	target: "M12 3v3m0 12v3M3 12h3m12 0h3M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
	headphones: "M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H6a2 2 0 0 1-2-2Zm16 0h-3v6h1a2 2 0 0 0 2-2Z",
	mic: "M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3ZM6 11a6 6 0 0 0 12 0M12 17v4M9 21h6",
	users: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6 9c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M16 5.2a3.5 3.5 0 0 1 0 6.6M18 14.8c2 .8 3 2.6 3 5.2",
	book: "M4 5a2 2 0 0 1 2-2h5v18H6a2 2 0 0 1-2-2Zm7-2h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5",
	folder: "M3 6a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",
	project: "M4 4h16v16H4zM8 4v16M4 10h4M4 15h4M11 8h6M11 12h6M11 16h4",

	// Desktop craft
	command: "M8 4a2 2 0 1 0 2 2v12a2 2 0 1 1-2-2h8a2 2 0 1 0-2-2V6a2 2 0 1 1 2 2Z",
	keyboard: "M3 6h18v12H3zM6 10h1M10 10h1M14 10h1M18 10h1M6 14h1M9 14h6M17 14h1",
	palette: "M12 3a9 9 0 0 0 0 18c1.4 0 2-1 2-2s-.7-1.5-.7-2.3c0-.8.7-1.4 1.6-1.4H17a4 4 0 0 0 4-4c0-4.4-4-8.3-9-8.3ZM7.5 11a1.2 1.2 0 1 0 0 0Zm3-3a1.2 1.2 0 1 0 0 0Zm5 0a1.2 1.2 0 1 0 0 0Z",
	desktop: "M3 5h18v11H3zM9 20h6M12 16v4",
	phone: "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2ZM10 19h4",
	tablet: "M5 3h14a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 19 21H5a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 5 3ZM10.5 18h3",
	download: "M12 3v12m0 0 5-5m-5 5-5-5M5 20h14",
	plug: "M9 3v5m6-5v5M6 8h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6ZM12 17v4",
	layers: "M12 3 3 8l9 5 9-5ZM3 13l9 5 9-5M3 17.5 12 22l9-4.5",
	list: "M4 6h2m4 0h10M4 12h2m4 0h10M4 18h2m4 0h10",
	eye: "M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Zm10-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z",
	clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 7v5l3 2",
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
