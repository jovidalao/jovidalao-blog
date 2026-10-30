import type { Locale } from "./ui";

/**
 * Copy for the home page. Product facts mirror the product pages and the apps
 * themselves — Peelday and Converloop for iPhone & iPad are on the App Store.
 * Keep availability and download copy in both languages in step with releases.
 */
const content = {
	en: {
		pill: "Hobart, Tasmania",
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
			desktop: "Converloop on macOS showing a conversation with inline corrections, a natural rewrite, and the learning coach",
		},
		apps: {
			kicker: "Apps",
			heading: "Small apps, made with care.",
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
				status: "On the App Store",
				tagline: "An AI partner for language practice",
				body: "Chat by text or voice, get corrections and explanations in context, then practise again with your own sentences.",
				facts: ["iPhone & iPad · iOS 26+", "7-day free trial", "Contextual explanation · no account"],
				cta: "Explore Converloop",
				store: "App Store",
			},
			desktop: {
				status: "v0.1.1 for macOS",
				tagline: "Converloop for Desktop",
				heading: "The full learning workspace for macOS and Windows",
				body: "The open-source learning workspace: inline corrections, an evidence timeline you can inspect and edit, focused lessons and drills, and the model provider of your choice.",
				facts: ["macOS · Windows from source", "Free · AGPL-3.0", "Records in local SQLite"],
				cta: "Source on GitHub",
				download: "Download",
			},
		},
		about: {
			heading: "About me.",
			body: [
				"I live in Hobart, Tasmania, and work on my own. Every app I make starts with something I need myself.",
				"Converloop grew out of how I learn English with AI — first prompts saved in Notes, then agent skills, then an agent I practise listening, speaking, reading and writing with. Peelday came from wanting to keep the small, good parts of each day without posting them anywhere.",
			],
		},
		// Newest first. Dates come from the App Store listings and GitHub releases.
		lately: {
			heading: "Lately.",
			items: [
				{ date: "2026-10", label: "Oct 2026", title: "Converloop arrives on the App Store", body: "The iPhone and iPad app is out, with a 7-day free trial." },
				{
					date: "2026-10-06",
					label: "Oct 6, 2026",
					title: "Peelday 1.0.3",
					body: "A new launch animation, smoother calendar browsing and sticker editing, better photo cutouts and ticket text recognition, and more reliable iCloud sync and widgets.",
				},
				{ date: "2026-06-29", label: "Jun 29, 2026", title: "Converloop Desktop v0.1.1", body: "The open-source macOS app, with inline corrections and learning records kept on your Mac." },
			],
		},
		principles: {
			kicker: "How I build",
			heading: "A few rules every app keeps.",
			// One row per rule, one cell per app; keep each claim true for that app's released version.
			items: [
				{ icon: "key", title: "No sign-up", peelday: "No account, no password.", converloop: "No account. Converloop AI registers a device ID instead." },
				{
					icon: "database",
					title: "Your data, on your device",
					peelday: "Diary pages stay on your iPhone. iCloud sync is optional.",
					converloop: "Conversations and learning records stay on your device. Sync goes through your own iCloud.",
				},
				{
					icon: "shield",
					title: "You decide what leaves",
					peelday: "There is no Peelday server to send anything to.",
					converloop: "Text goes only to the AI service you picked; it asks before using its own.",
				},
				{ icon: "eye", title: "No ads, no tracking", peelday: "No ad networks or third-party trackers.", converloop: "No ad networks or third-party trackers." },
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
			desktop: "Converloop macOS 界面，展示对话、行内纠错、地道改写和学习教练",
		},
		apps: {
			kicker: "应用",
			heading: "把日常的小事，认真做好。",
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
				status: "App Store 已上架",
				tagline: "陪你开口，也陪你练熟。",
				body: "打字或开口聊，纠正与讲解就在对话身边。聊过的句子，还能接着练听力和听写。",
				facts: ["iPhone 与 iPad · iOS 26+", "7 天免费试用", "语境即时讲解 · 无需账号"],
				cta: "了解 Converloop",
				store: "App Store",
			},
			desktop: {
				status: "macOS 版 v0.1.1",
				tagline: "Converloop 桌面端",
				heading: "面向 macOS 与 Windows 的完整学习工作区",
				body: "开源的学习工作区：行内纠错、能查能改的证据时间线、专项课和训练，模型服务商由你自己选。",
				facts: ["macOS · Windows 可从源码运行", "免费 · AGPL-3.0", "记录存在本地 SQLite"],
				cta: "GitHub 源码",
				download: "下载",
			},
		},
		about: {
			heading: "关于我。",
			body: [
				"我住在塔斯马尼亚的霍巴特，一个人做独立开发。我做的每个 App，都是从自己的需要开始的。",
				"Converloop 来自我用 AI 学英语的经历：先是把 Prompt 存在备忘录里，再到 Agent Skills，后来用 Agent 陪我练听说读写。贴贴手帐则是想把每天那些小小的好事留下来，又不必发到任何地方。",
			],
		},
		lately: {
			heading: "最近。",
			items: [
				{ date: "2026-10", label: "2026 年 10 月", title: "Converloop 上架 App Store", body: "iPhone 与 iPad 版正式发布，可免费试用 7 天。" },
				{
					date: "2026-10-06",
					label: "2026 年 10 月 6 日",
					title: "贴贴手帐 1.0.3",
					body: "新的启动动画，日历浏览和贴纸编辑更顺滑，照片抠图和票据文字识别更准，iCloud 同步和小组件更新也更可靠。",
				},
				{ date: "2026-06-29", label: "2026 年 6 月 29 日", title: "Converloop 桌面端 v0.1.1", body: "开源的 macOS 应用，带行内纠错，学习记录存在你自己的 Mac 上。" },
			],
		},
		principles: {
			kicker: "我怎么做 App",
			heading: "每个 App 都守着这几条。",
			items: [
				{ icon: "key", title: "不用注册", peelday: "没有账号，也没有密码。", converloop: "没有账号。用 Converloop AI 时只登记一个设备 ID。" },
				{
					icon: "database",
					title: "数据在你的设备上",
					peelday: "手帐页面存在你的 iPhone 上，iCloud 同步可选。",
					converloop: "对话和学习记录存在本机，同步走你自己的 iCloud。",
				},
				{
					icon: "shield",
					title: "发出去什么，由你决定",
					peelday: "贴贴手帐没有可以上传的服务器。",
					converloop: "文字只发给你选的 AI 服务，用我们自己的服务前先征得你同意。",
				},
				{ icon: "eye", title: "没有广告，没有追踪", peelday: "不接广告网络，没有第三方追踪。", converloop: "不接广告网络，没有第三方追踪。" },
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
