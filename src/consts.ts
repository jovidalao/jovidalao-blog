// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Flip to true to put the blog back in the nav, home page, feed, and public URLs.
export const BLOG_PUBLISHED = false;

export const SITE_TITLE = "jovidalao";
export const SITE_DESCRIPTION =
	"Personal homepage of jovidalao — a Hobart-based indie developer building Peelday and Converloop.";

export const SITE_URL = "https://jovidalao.com";

/**
 * This repo builds two sites: jovidalao.com by default, and peelday.jovidalao.com
 * with SITE=peelday (see next.config.ts). Converloop has its own site and repo.
 * Links between sites are absolute; links within one stay relative.
 */
export type Site = "home" | "peelday";

export const PEELDAY = {
	name: "Peelday",
	tagline: "A visual diary for everyday joy",
	url: "https://peelday.jovidalao.com",
	// Storefront-neutral URL lets Apple route visitors to their local App Store.
	appStoreUrl: "https://apps.apple.com/app/id6774051647",
	contactEmail: "jovidalao@gmail.com",
	lastUpdated: "May 13, 2026",
} as const;

export const CONVERLOOP = {
	name: "Converloop",
	url: "https://converloopai.com",
	repoUrl: "https://github.com/jovidalao/Converloop",
	releaseUrl: "https://github.com/jovidalao/Converloop/releases/latest",
} as const;
