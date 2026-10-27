/* Synced from converloopai; update with pnpm sync:converloop. */
export const SITE_URL = "https://converloopai.com";
export const SITE_TITLE = "Converloop";
export const SITE_DESCRIPTION =
	"Converloop is a local-first AI language tutor for iPhone and iPad: inline corrections, natural phrasing, and a learning record that stays on your device.";

// The developer's personal site, credited in the footer.
export const MAKER = { name: "jovidalao", url: "https://jovidalao.com" } as const;

export const CONVERLOOP = {
	name: "Converloop",
	// Let the App Store select the visitor's country or region.
	appStoreUrl: "https://apps.apple.com/app/converloop/id6788364286",
	contactEmail: "jovidalao@gmail.com",
	lastUpdated: "October 19, 2026",
	// A date is copy too: "最后更新：August 1, 2026" reads as a half-translated page.
	lastUpdatedZh: "2026 年 10 月 19 日",
	// The terms are dated on their own, so a change to one document does not
	// re-date the other.
	termsLastUpdated: "October 14, 2026",
	termsLastUpdatedZh: "2026 年 10 月 14 日",
} as const;
