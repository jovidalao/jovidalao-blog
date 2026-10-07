import type { Locale } from "./ui";

/**
 * Copy for the home page. Product facts mirror the product pages and the apps
 * themselves — Peelday 1.0.3 on the App Store, Converloop for iPhone & iPad in
 * TestFlight, and the open-source desktop build at v0.1.1 — so keep them in step.
 */
const content = {
	en: {
		pill: "Hobart, Tasmania",
		titleLead: "Small apps",
		titleAccent: "that stay yours.",
		bodyBefore: "I'm jovidalao, an indie developer. I make ",
		bodyMark: "Peelday",
		bodyMiddle: ", a sticker diary for iPhone, and ",
		bodyMark2: "Converloop",
		bodyAfter: ", an AI partner for practising a language. Neither asks you to sign up, and what you make in them lives on your device.",
		seeApps: "See the apps",
		writing: "Read the blog",
		shots: {
			peelday: "A Peelday diary page with photo, ticket, weather and emoji stickers",
			converloop: "A Converloop conversation with an inline correction",
		},
		apps: {
			kicker: "Apps",
			heading: "Two products, three ways in.",
			body: "One keeps your days, one helps you speak. Each is built to do that one thing well.",
			peelday: {
				status: "On the App Store",
				tagline: "A sticker diary for iPhone",
				body: "Photos, ticket stubs and notes become stickers on your iPhone — cut out and read on device — and you lay each day out by hand on dotted paper.",
				facts: ["iPhone · iOS 18+", "Free · Pro is a one-time purchase", "No account · optional iCloud sync"],
				cta: "Explore Peelday",
				store: "App Store",
			},
			converloop: {
				status: "Coming soon · in TestFlight",
				tagline: "AI conversation practice for iPhone & iPad",
				body: "Type or speak and every sentence comes back corrected inline, then said the way a native speaker would. Your mistakes return in 54 role-play scenes, listening and dictation.",
				facts: ["iPhone & iPad · iOS 26+", "7-day free trial", "Learning-only memory · no account"],
				cta: "Explore Converloop",
			},
			desktop: {
				status: "v0.1.1 for macOS",
				tagline: "Converloop for Desktop",
				body: "The open-source learning workspace: inline corrections, an evidence timeline you can inspect and edit, focused lessons and drills, and the model provider of your choice.",
				facts: ["macOS · Windows from source", "Free · AGPL-3.0", "Records in local SQLite"],
				cta: "About the desktop app",
				download: "Download",
			},
		},
		principles: {
			kicker: "How I build",
			heading: "A few rules every app keeps.",
			items: [
				{ icon: "key", title: "No sign-up", body: "No accounts, no passwords. Open the app and start." },
				{
					icon: "database",
					title: "Your data, on your device",
					body: "Diary pages and learning records are stored locally. Sync, where offered, runs through your own iCloud.",
				},
				{
					icon: "shield",
					title: "You decide what leaves",
					body: "Peelday has no server to send anything to. Converloop sends text only to the AI service you picked, and asks before using its own.",
				},
				{ icon: "eye", title: "No ads, no tracking", body: "No ad networks and no third-party trackers, in any of them." },
			],
		},
		posts: {
			kicker: "Writing",
			heading: "Notes on learning and building.",
			all: "All posts",
		},
		hello: {
			heading: "Say hello.",
			body: "I read every email. Source code and works in progress live on GitHub.",
			email: "Email me",
		},
	},
	zh: {
		pill: "塔斯马尼亚 · 霍巴特",
		titleLead: "小小的 App，",
		titleAccent: "始终属于你。",
		bodyBefore: "我是 jovidalao，一名独立开发者。我做了",
		bodyMark: "贴贴手帐",
		bodyMiddle: "——iPhone 上的贴纸手帐，还有",
		bodyMark2: "Converloop",
		bodyAfter: "——陪你练外语的 AI 伙伴。两个都不用注册，你在里面留下的东西都存在自己的设备上。",
		seeApps: "看看这些 App",
		writing: "读读博客",
		shots: {
			peelday: "贴贴手帐的一页，贴着照片、票据、天气和 Emoji 贴纸",
			converloop: "Converloop 对话，句子里带着当场批改",
		},
		apps: {
			kicker: "应用",
			heading: "两个产品，三种用法。",
			body: "一个帮你留住日子，一个帮你开口说话。每个都只把一件事做好。",
			peelday: {
				status: "App Store 已上架",
				tagline: "iPhone 上的贴纸手帐",
				body: "照片、票根和文字在 iPhone 上直接做成贴纸——抠图和识别都在设备上完成——再由你亲手把每一天排在点阵纸上。",
				facts: ["iPhone · iOS 18+", "免费 · Pro 一次买断", "无需账号 · iCloud 同步可选"],
				cta: "了解贴贴手帐",
				store: "App Store",
			},
			converloop: {
				status: "即将上架 · TestFlight 测试中",
				tagline: "iPhone 与 iPad 上的 AI 外语陪练",
				body: "打字或开口说，每一句都当场批改，再给你一句母语者的说法。说错的地方会在 54 个情景对练、听力和听写里反复回来。",
				facts: ["iPhone 与 iPad · iOS 26+", "7 天免费试用", "只记语言的记忆 · 无需账号"],
				cta: "了解 Converloop",
			},
			desktop: {
				status: "macOS 版 v0.1.1",
				tagline: "Converloop 桌面端",
				body: "开源的学习工作区：行内纠错、能查能改的证据时间线、专项课和训练，模型服务商由你自己选。",
				facts: ["macOS · Windows 可从源码运行", "免费 · AGPL-3.0", "记录存在本地 SQLite"],
				cta: "了解桌面端",
				download: "下载",
			},
		},
		principles: {
			kicker: "我怎么做 App",
			heading: "每个 App 都守着这几条。",
			items: [
				{ icon: "key", title: "不用注册", body: "没有账号，也没有密码。打开就能用。" },
				{ icon: "database", title: "数据在你的设备上", body: "手帐页面和学习记录都存在本地。需要同步的，走你自己的 iCloud。" },
				{
					icon: "shield",
					title: "发出去什么，由你决定",
					body: "贴贴手帐没有可以上传的服务器。Converloop 只把文字发给你选的 AI 服务，用我们自己的服务前会先征得你同意。",
				},
				{ icon: "eye", title: "没有广告，没有追踪", body: "不接广告网络，也没有第三方追踪。" },
			],
		},
		posts: {
			kicker: "写作",
			heading: "关于学习与构建的笔记。",
			all: "全部文章",
		},
		hello: {
			heading: "打个招呼。",
			body: "每封邮件我都会看。源代码和还在做的东西都在 GitHub 上。",
			email: "给我写邮件",
		},
	},
} as const;

export function getHome(locale: Locale | string | undefined) {
	return content[locale === "zh" ? "zh" : "en"];
}
