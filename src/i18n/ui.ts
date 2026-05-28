export type Locale = "en" | "zh";

export const ui = {
	en: {
		nav: {
			home: "Home",
			peelday: "Peelday",
		},
		home: {
			greeting: "Hi, I'm jovidalao",
			intro:
				"Indie developer. I build thoughtful iOS apps and occasionally write about how I learn and build.",
			appsHeading: "Apps I build",
			peeldayBadge: "iOS App",
			peeldayTitle: "Peelday",
			peeldayDescription:
				"An offline-first visual diary with ticket-stub aesthetics. Collect photos, stickers, and notes on paper that's just yours — one page per day.",
			peeldayCta: "Learn more",
		},
		peelday: {
			metaDescription:
				"Peelday — an offline-first visual diary for iOS. Daily sticker pages, smart cutouts, calendar browse, widget, and optional iCloud sync.",
			heroSubtitle:
				"A diary for the little things. Photos, stickers, and notes — kept on paper that's just yours.",
			heroImageAlt: "Peelday app screenshot",
			download: "Download on the App Store",
			comingSoon: "Coming to the App Store",
			featuresHeading: "What you can do",
			features: [
				{
					title: "Daily canvas",
					body: "Build each day on dotted paper with draggable stickers — stamps, cutouts, tickets, text, and weather.",
				},
				{
					title: "Smart creator",
					body: "Snap or import photos, auto cutout with Vision, OCR for tickets, and polaroid or stamp templates.",
				},
				{
					title: "Batch add",
					body: "Drop many photos at once; Peelday cuts them out and arranges them on your page.",
				},
				{
					title: "Calendar & widget",
					body: "Browse past days on a calendar and pin today's page to your Home Screen widget.",
				},
				{
					title: "Private by default",
					body: "No account, no ads, no analytics. Your journal stays on your device — iCloud sync is optional.",
				},
				{
					title: "One-time unlock",
					body: "Extra styles, full sticker catalog, sharing, and Family Sharing with a single purchase.",
				},
			],
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
			peelday: "Peelday",
		},
		home: {
			greeting: "你好，我是 jovidalao",
			intro: "独立开发者。我在做 iOS 应用，偶尔写写学习和构建的过程。",
			appsHeading: "我开发的应用",
			peeldayBadge: "iOS 应用",
			peeldayTitle: "Peelday",
			peeldayDescription:
				"一款离线优先的视觉日记，带有票根美学。每天一页，收集照片、贴纸和文字——只属于你自己的纸张。",
			peeldayCta: "了解更多",
		},
		peelday: {
			metaDescription:
				"Peelday — 离线优先的 iOS 视觉日记。每日贴纸页、智能抠图、日历浏览、小组件，以及可选的 iCloud 同步。",
			heroSubtitle:
				"记录日常小确幸。照片、贴纸和笔记——保存在只属于你自己的纸张上。",
			heroImageAlt: "Peelday 应用截图",
			download: "在 App Store 下载",
			comingSoon: "即将登陆 App Store",
			featuresHeading: "你可以做什么",
			features: [
				{
					title: "每日画布",
					body: "在点阵纸上自由摆放贴纸——印章、抠图、票根、文字和天气。",
				},
				{
					title: "智能创作",
					body: "拍照或导入图片，Vision 自动抠图，票根 OCR，以及拍立得、印章等模板。",
				},
				{
					title: "批量添加",
					body: "一次拖入多张照片，自动抠图并排列到页面上。",
				},
				{
					title: "日历与小组件",
					body: "在日历中浏览过往日子，把今日页面钉到主屏幕小组件。",
				},
				{
					title: "默认私密",
					body: "无需账号、无广告、无分析。日记保存在本地——iCloud 同步可选。",
				},
				{
					title: "一次买断",
					body: "额外样式、完整贴纸库、分享与家庭共享，一次购买永久拥有。",
				},
			],
			legal: {
				privacy: "隐私政策",
				terms: "用户协议",
				contact: "联系我们",
			},
		},
		legal: {
			privacyTitle: "隐私政策 — Peelday",
			termsTitle: "用户协议 — Peelday",
			backToPeelday: "← 返回 Peelday",
		},
	},
} as const;

export function getUi(locale: Locale | string | undefined) {
	return ui[locale === "zh" ? "zh" : "en"];
}

export function localeBase(locale: Locale | string | undefined) {
	return locale === "zh" ? "/zh" : "";
}
