export type Locale = "en" | "zh";

export const ui = {
	en: {
		nav: {
			home: "Home",
			apps: "See the apps",
			peelday: "Peelday",
			converloop: "Converloop",
			menu: "Menu",
		},
		theme: {
			light: "Light",
			dark: "Dark",
			system: "System",
		},
		footer: {
			blurb: "Indie developer in Hobart, Tasmania. I build small, private, local-first apps.",
			appsTitle: "Apps",
			supportTitle: "Support",
			moreTitle: "More",
			legalTitle: "Legal",
			converloopDesktop: "Converloop for Desktop",
			converloopWebsite: "Converloop website",
			converloopIos: "Converloop for iPhone & iPad",
			writing: "Writing",
			source: "Converloop on GitHub",
			email: "Email",
			peeldayPrivacy: "Peelday Privacy",
			peeldayTerms: "Peelday Terms",
			converloopPrivacy: "Converloop Privacy",
			converloopTerms: "Converloop Terms",
		},
		blog: {
			kicker: "Writing",
			heading: "Notes on learning and building",
			body: "Infrequent posts, in English and Chinese.",
			empty: "Nothing published yet.",
			back: "← All posts",
			updated: "Updated",
		},
		peelday: {
			name: "Peelday",
			legal: {
				privacy: "Privacy Policy",
				terms: "Terms of Use",
				contact: "Contact",
			},
		},
		legal: {
			privacyTitle: "Privacy Policy — Peelday",
			termsTitle: "Terms of Use — Peelday",
			backToPeelday: "← Back to Peelday",
		},
	},
	zh: {
		nav: {
			home: "首页",
			apps: "看看应用",
			peelday: "贴贴手帐",
			converloop: "Converloop",
			menu: "菜单",
		},
		theme: {
			light: "浅色",
			dark: "深色",
			system: "跟随系统",
		},
		footer: {
			blurb: "在塔斯马尼亚霍巴特的独立开发者。做小而私密、本地优先的应用。",
			appsTitle: "应用",
			supportTitle: "支持",
			moreTitle: "更多",
			legalTitle: "法律",
			converloopDesktop: "Converloop 桌面端",
			converloopWebsite: "Converloop 官网",
			converloopIos: "Converloop iPhone 与 iPad 版",
			writing: "写作",
			source: "Converloop 源代码",
			email: "邮件",
			peeldayPrivacy: "贴贴手帐隐私政策",
			peeldayTerms: "贴贴手帐用户协议",
			converloopPrivacy: "Converloop 隐私政策",
			converloopTerms: "Converloop 使用条款",
		},
		blog: {
			kicker: "写作",
			heading: "关于学习与构建的笔记",
			body: "不定期更新，中英文都有。",
			empty: "还没有发布的文章。",
			back: "← 全部文章",
			updated: "更新于",
		},
		peelday: {
			name: "贴贴手帐",
			legal: {
				privacy: "隐私政策",
				terms: "用户协议",
				contact: "联系我们",
			},
		},
		legal: {
			privacyTitle: "隐私政策 — 贴贴手帐",
			termsTitle: "用户协议 — 贴贴手帐",
			backToPeelday: "← 返回贴贴手帐",
		},
	},
} as const;

export function getUi(locale: Locale | string | undefined) {
	return ui[locale === "zh" ? "zh" : "en"];
}

export function localeBase(locale: Locale | string | undefined) {
	return locale === "zh" ? "/zh" : "";
}
