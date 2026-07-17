// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "jovidalao";
export const SITE_DESCRIPTION =
	"Personal homepage of jovidalao — a Hobart-based indie developer building Peelday and Converloop.";

export const PEELDAY = {
	name: "Peelday",
	tagline: "A visual diary for everyday joy",
	// Storefront-neutral URL lets Apple route visitors to their local App Store.
	appStoreUrl: "https://apps.apple.com/app/id6774051647",
	contactEmail: "jovidalao@gmail.com",
	lastUpdated: "May 13, 2026",
} as const;

export const CONVERLOOP = {
	name: "Converloop",
	tagline: "A local-first AI language tutor",
	repoUrl: "https://github.com/jovidalao/Converloop",
	releaseUrl: "https://github.com/jovidalao/Converloop/releases/latest",
	version: "0.1.1",
} as const;
