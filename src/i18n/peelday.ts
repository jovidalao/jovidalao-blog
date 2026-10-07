import type { Locale } from "./ui";

/**
 * Copy for the Peelday page. Every claim is checked against the iOS app (1.0.3): the
 * labels quoted here ("Make Sticker", "Today's Stub", "Stick them all"…) are the app's own
 * strings, and the screenshots on the page are captures of the Debug build in the
 * simulator, so the page and the App Store listing describe the same product.
 */

/** Built-in material, in the app's own order (StyleGroup, WeatherCondition, TravelStickerCatalog). */
export const peeldayLibrary = [
	[
		{ e: "✉️", en: "Postage Stamp", zh: "邮票" },
		{ e: "🖼️", en: "Photo Frame", zh: "照片相框" },
		{ e: "🔲", en: "Stamp Border", zh: "邮票边框" },
		{ e: "✂️", en: "Colored Border", zh: "彩色边框" },
		{ e: "🎨", en: "Color Backing", zh: "立体底色" },
		{ e: "🌈", en: "Rainbow", zh: "彩虹" },
		{ e: "✨", en: "Sparkle", zh: "闪光" },
		{ e: "✏️", en: "Doodle", zh: "涂鸦" },
		{ e: "🎊", en: "Confetti", zh: "彩纸" },
		{ e: "💡", en: "Neon", zh: "霓虹" },
		{ e: "🎟️", en: "Ticket Card", zh: "票据卡片" },
		{ e: "🎞️", en: "Film Frame", zh: "胶片画" },
		{ e: "🎬", en: "Movie Stub", zh: "电影票根" },
		{ e: "😀", en: "Emoji", zh: "Emoji" },
	],
	[
		{ e: "☀️", en: "Sunny", zh: "晴" },
		{ e: "☁️", en: "Cloudy", zh: "阴" },
		{ e: "🌧️", en: "Rain", zh: "雨" },
		{ e: "❄️", en: "Snow", zh: "雪" },
		{ e: "🌫️", en: "Fog", zh: "雾" },
		{ e: "🌈", en: "Rainbow", zh: "彩虹" },
		{ e: "⛈️", en: "Storm", zh: "雷雨" },
		{ e: "💨", en: "Wind", zh: "风" },
		{ e: "🌼", en: "Pressed daisy", zh: "压花雏菊" },
		{ e: "🌸", en: "Sakura sprig", zh: "樱花枝" },
		{ e: "🌷", en: "Tulip", zh: "郁金香" },
	],
	[
		{ e: "🇯🇵", en: "Japan", zh: "日本" },
		{ e: "🇨🇳", en: "China", zh: "中国" },
		{ e: "🇰🇷", en: "South Korea", zh: "韩国" },
		{ e: "🇹🇭", en: "Thailand", zh: "泰国" },
		{ e: "🇮🇳", en: "India", zh: "印度" },
		{ e: "🇻🇳", en: "Vietnam", zh: "越南" },
		{ e: "🇮🇩", en: "Indonesia", zh: "印度尼西亚" },
		{ e: "🇸🇬", en: "Singapore", zh: "新加坡" },
		{ e: "🇫🇷", en: "France", zh: "法国" },
		{ e: "🇮🇹", en: "Italy", zh: "意大利" },
		{ e: "🇬🇧", en: "United Kingdom", zh: "英国" },
		{ e: "🇩🇪", en: "Germany", zh: "德国" },
		{ e: "🇳🇱", en: "Netherlands", zh: "荷兰" },
		{ e: "🇨🇭", en: "Switzerland", zh: "瑞士" },
		{ e: "🇪🇸", en: "Spain", zh: "西班牙" },
		{ e: "🇵🇹", en: "Portugal", zh: "葡萄牙" },
		{ e: "🇬🇷", en: "Greece", zh: "希腊" },
		{ e: "🇳🇴", en: "Norway", zh: "挪威" },
		{ e: "🇺🇸", en: "United States", zh: "美国" },
		{ e: "🇲🇽", en: "Mexico", zh: "墨西哥" },
		{ e: "🇦🇺", en: "Australia", zh: "澳大利亚" },
		{ e: "🇳🇿", en: "New Zealand", zh: "新西兰" },
		{ e: "🇨🇦", en: "Canada", zh: "加拿大" },
		{ e: "🇧🇷", en: "Brazil", zh: "巴西" },
		{ e: "🇵🇪", en: "Peru", zh: "秘鲁" },
		{ e: "🇦🇷", en: "Argentina", zh: "阿根廷" },
		{ e: "🇹🇷", en: "Türkiye", zh: "土耳其" },
		{ e: "🇦🇪", en: "United Arab Emirates", zh: "阿联酋" },
		{ e: "🇪🇬", en: "Egypt", zh: "埃及" },
		{ e: "🇿🇦", en: "South Africa", zh: "南非" },
		{ e: "🇲🇦", en: "Morocco", zh: "摩洛哥" },
		{ e: "🇷🇺", en: "Russia", zh: "俄罗斯" },
	],
] as const;

const content = {
	en: {
		meta: {
			title: "Peelday — a sticker diary for iPhone",
			description:
				"Peelday turns photos, ticket stubs and notes into stickers on your iPhone and lays them on one dotted page a day. Cutouts and ticket reading run on device, there's no account, and iCloud sync is optional.",
		},
		status: "On the App Store",
		appStore: "Download on the App Store",
		howItWorks: "See how a page happens",
		requirement: "iPhone · iOS 18 or later · Free to start",
		hero: {
			lead: "Sticker your",
			words: ["day", "trip", "date", "walk", "gig"],
			tail: "into a page.",
			bodyBefore: "A diary for the little things. Snap a photo or a ticket stub and Peelday turns it into a sticker ",
			bodyMark: "right on your iPhone",
			bodyAfter: " — then you lay the day out by hand on dotted paper. No account, no feed, no one else looking.",
			strip: [
				{ icon: "cutout", title: "Made on device", body: "Stamps, frames and cutouts" },
				{ icon: "ticket", title: "Tickets read for you", body: "Title, venue and date filled in" },
				{ icon: "calendar", title: "One page a day", body: "Flip back by calendar or search" },
				{ icon: "shield", title: "No account", body: "Your pages stay on your iPhone" },
			],
			shots: {
				page: "A Peelday page for 7 October: photos in stamp and frame styles, a Sunny weather stamp, a cinema ticket, emoji and a text sticker on dotted paper",
				maker: "Make Sticker with a photo in the Photo Frame style, the Rectangle, Cutout and Ticket modes, and more styles below",
				ticket: "A cinema ticket read on device: Perfect Days, State Cinema Hobart, 07/10/2026 19:30, filled into a ticket card",
			},
			chipTicket: { label: "Read on device", title: "PERFECT DAYS", meta: "State Cinema Hobart · 19:30" },
			chipPage: {
				label: "Today's page",
				stats: [
					{ n: "9", label: "stickers" },
					{ n: "0", label: "uploads" },
					{ n: "0", label: "accounts" },
				],
			},
		},
		why: {
			kicker: "Why Peelday?",
			text: "Your camera roll keeps everything and remembers nothing. Peelday keeps the few things you chose — the ticket stub, the coffee, the weather, a line you wrote — on the one page that belongs to that day, so a year from now you can still open it.",
		},
		make: {
			heading: "Snap it, style it, stick it down.",
			flow: ["Pick", "Style", "Read", "Place"],
			steps: [
				{
					label: "Pick",
					title: "Start from a photo, a ticket or a thought.",
					body: "Tap + for the camera, up to nine photos from your library, built-in stickers, a line of text or an emoji. Peelday only ever reads the photos you pick.",
				},
				{
					label: "Style",
					title: "Make it look like it belongs in a diary.",
					body: "Choose Rectangle, Cutout or Ticket, then a postage stamp, photo frame, colored border, rainbow, neon or flair. Add a batch, give each photo its look, and stick them all at once.",
				},
				{
					label: "Read",
					title: "Ticket stubs fill themselves in.",
					body: "Photograph a cinema, gig or museum ticket and Peelday reads it on your iPhone: the title, venue and date land on a ticket card, ready to edit. No ticket? Write one by hand.",
				},
				{
					label: "Place",
					title: "Lay the day out by hand.",
					body: "Drag, rotate and layer stickers on dotted paper. Add a weather stamp, undo a step, or drop a photo straight in from another app.",
				},
			],
			menuTitle: "Add to today",
			menu: [
				{ icon: "camera", label: "Camera" },
				{ icon: "photo", label: "Upload photo" },
				{ icon: "seal", label: "Stickers" },
				{ icon: "type", label: "Text" },
				{ icon: "smile", label: "Emoji" },
			],
		},
		library: {
			kicker: "Styles & stickers",
			heading: "Dozens of ways to frame a moment.",
			body: "Every photo can become a stamp, a framed print or a cutout with its own edge. Add a weather stamp or a pressed flower — and with Pro, stamps from 32 countries.",
		},
		find: {
			kicker: "Calendar & search",
			heading: "A year of pages, a tap away.",
			body: "Tap the date to see the month — every day with stickers carries a small dot. Or just search: ticket text, card fields and text stickers are indexed on your iPhone, so “Metropolis” finds the night you saw it.",
			points: [
				{ title: "Month view", body: "Reopen any past day and keep adding to it." },
				{ title: "Search your diary", body: "Ticket text, card fields and text stickers, matched on device." },
				{ title: "Nothing lost by accident", body: "Deleted stickers wait 30 days before they're gone." },
			],
			shots: {
				calendar: "The calendar sheet for October 2026, with dots on the days that have stickers",
				search: "Diary search for “Metro” finding the Metropolis ticket on Wednesday 7 October",
			},
		},
		widget: {
			kicker: "Home Screen & Lock Screen",
			heading: "Today's page, one glance away.",
			body: "Add Today's Stub and the latest stickers from today sit among your apps; tap it to land straight on today's page. A diary only works if it's easy to reach.",
			points: [
				"Small and medium widgets for the Home Screen",
				"Today's date and sticker count on the Lock Screen",
				"Capture a moment in Control Center opens the camera on today",
			],
			shot: "An iPhone Home Screen with the medium Today's Stub widget showing today's croissant, popcorn and photo stickers",
		},
		privacy: {
			kicker: "Private by default",
			heading: "There's nowhere for your diary to go.",
			body: "Peelday has no account system and no server holding your pages. Cutouts and ticket reading run on your iPhone, and the app only ever sees the photos you pick.",
			keptTitle: "Stays on your iPhone",
			kept: [
				"Pages, stickers and the photos you picked",
				"Ticket text and the search index",
				"Sticker images, included in your iPhone backup",
			],
			neverTitle: "Never happens",
			never: [
				"Signing up, signing in, or a profile",
				"Uploading photos to cut out or read",
				"Ads, analytics SDKs or tracking",
			],
			facts: [
				{ icon: "cloud", text: "iCloud sync is opt-in, through your own iCloud" },
				{ icon: "eye", text: "Only the photos you select are read" },
				{ icon: "page", text: "Works offline — on a plane, in a tunnel" },
				{ icon: "database", text: "Clear all data from Settings at any time" },
			],
		},
		pricing: {
			kicker: "Pricing",
			heading: "Free to keep. Pro is yours for good.",
			body: "Everything you need for a page a day is free. Peelday Pro is a single purchase — never a subscription.",
			plans: [
				{
					name: "Peelday",
					price: "Free",
					unit: "",
					for: "Everything for a page a day",
					points: [
						"Photo, ticket, text and emoji stickers",
						"On-device cutouts and ticket reading",
						"Calendar, search and widgets",
						"Share a whole page as an image",
					],
					featured: false,
				},
				{
					name: "Peelday Pro",
					price: "One-time",
					unit: "lifetime unlock",
					for: "The full catalog, sync and sharing",
					points: [
						"Every premium style and color variant",
						"Country stickers and the full built-in catalog",
						"iCloud sync across your iPhones",
						"Share single stickers to other apps",
						"Lined and plain paper",
						"Family Sharing for up to five people",
					],
					featured: true,
				},
			],
			note: "The price is shown in the App Store for your region. Restore Purchases lives in Settings.",
		},
		faq: {
			heading: "Before you start, you might want to know.",
			body: "About privacy, devices and price.",
			email: "Email me",
			items: [
				{ q: "Do I need an account?", a: "No. There's nothing to sign up for or sign in to — open the app and start today's page." },
				{
					q: "Are my photos uploaded anywhere?",
					a: "No. Cutouts and ticket reading run on your iPhone, and Peelday only reads the photos you pick — never the rest of your library.",
				},
				{ q: "Does it work offline?", a: "Yes. Making and browsing pages needs no connection; only iCloud sync and purchases do." },
				{
					q: "What happens when I switch iPhones?",
					a: "Your pages and sticker images are part of your iPhone backup, so restoring it brings them along. With Pro you can also turn on iCloud sync.",
				},
				{ q: "Can I get back something I deleted?", a: "Yes. Deleted stickers stay recoverable for 30 days." },
				{
					q: "Which devices and languages?",
					a: "iPhone with iOS 18 or later. Peelday speaks English, Simplified and Traditional Chinese, Japanese, Korean, French, German and Spanish.",
				},
				{
					q: "What does Pro add?",
					a: "Every premium style and color variant, country stickers and the full built-in catalog, iCloud sync, sharing single stickers, lined and plain paper, and Family Sharing — for one purchase.",
				},
			],
		},
		final: {
			heading: "Keep the little things.",
			body: "Free on the App Store for iPhone. One page a day is enough.",
		},
	},
	zh: {
		meta: {
			title: "贴贴手帐 — iPhone 上的贴纸手帐",
			description:
				"贴贴手帐（Peelday）在 iPhone 上把照片、票根和文字做成贴纸，每天一页点阵纸，由你亲手排。抠图和票据识别都在设备上完成，无需账号，iCloud 同步可选。",
		},
		status: "App Store 已上架",
		appStore: "在 App Store 下载",
		howItWorks: "看看一页怎么贴",
		requirement: "iPhone · iOS 18 及以上 · 免费开始",
		hero: {
			lead: "把",
			words: ["今天", "旅行", "约会", "散步", "演出"],
			tail: "贴成一页。",
			bodyBefore: "记录日常小事的手帐。拍一张照片或票根，贴贴手帐会",
			bodyMark: "直接在你的 iPhone 上",
			bodyAfter: "把它做成贴纸，再由你亲手排在点阵纸上。不用注册、没有信息流，也没有别人在看。",
			strip: [
				{ icon: "cutout", title: "设备上完成", body: "邮票、相框和抠图" },
				{ icon: "ticket", title: "票根自动识别", body: "标题、地点、日期自己填好" },
				{ icon: "calendar", title: "一天一页", body: "按日历或搜索往回翻" },
				{ icon: "shield", title: "无需账号", body: "页面只存在你的 iPhone 上" },
			],
			shots: {
				page: "贴贴手帐 10 月 7 日的一页：邮票和相框风格的照片、“晴”天气贴纸、电影票、Emoji 和文字贴纸，贴在点阵纸上",
				maker: "「制作贴纸」界面：照片套用了照片相框样式，下方是矩形、抠图、票据三种模式和更多样式",
				ticket: "在设备上识别的电影票：Perfect Days、State Cinema Hobart、07/10/2026 19:30，已填进票据卡片",
			},
			chipTicket: { label: "设备上识别", title: "PERFECT DAYS", meta: "State Cinema Hobart · 19:30" },
			chipPage: {
				label: "今天这一页",
				stats: [
					{ n: "9", label: "张贴纸" },
					{ n: "0", label: "次上传" },
					{ n: "0", label: "个账号" },
				],
			},
		},
		why: {
			kicker: "为什么是贴贴手帐？",
			text: "相册什么都存，却什么都记不住。贴贴手帐只留下你挑出来的那几样——一张票根、一杯咖啡、当天的天气、一句随手写的话——贴在属于那一天的那一页上，一年以后还能翻开它。",
		},
		make: {
			heading: "拍下来，选个样式，贴上去。",
			flow: ["挑选", "样式", "识别", "摆放"],
			steps: [
				{
					label: "挑选",
					title: "从一张照片、一张票，或一个念头开始。",
					body: "点 + 可以拍照、从相册里一次挑最多九张、用内置贴纸，或者写一句话、贴一个 Emoji。贴贴手帐只读取你选中的那几张照片。",
				},
				{
					label: "样式",
					title: "让它看起来就该贴在手帐里。",
					body: "先选矩形、抠图或票据，再挑邮票、照片相框、彩色边框、彩虹、霓虹或点缀。一次加一批也行，每张各配一个样子，最后全部贴上。",
				},
				{
					label: "识别",
					title: "票根会自己填好。",
					body: "拍一张电影票、演出票或景点门票，贴贴手帐在 iPhone 上直接读出来：标题、地点和日期落进票据卡片，还能再改。手边没有票？也可以手写一张。",
				},
				{
					label: "摆放",
					title: "亲手把这一天排出来。",
					body: "在点阵纸上拖动、旋转、叠放贴纸。加一枚天气贴纸、撤销一步，或者直接从别的 App 把照片拖进来。",
				},
			],
			menuTitle: "贴到今天",
			menu: [
				{ icon: "camera", label: "拍照" },
				{ icon: "photo", label: "上传图片" },
				{ icon: "seal", label: "贴纸" },
				{ icon: "type", label: "文字" },
				{ icon: "smile", label: "Emoji" },
			],
		},
		library: {
			kicker: "样式与贴纸",
			heading: "几十种方式，框住一个瞬间。",
			body: "每张照片都能变成邮票、带框的相片，或者带边的抠图。再加一枚天气贴纸、一朵压花——升级 Pro 后还有 32 个国家的邮票。",
		},
		find: {
			kicker: "日历与搜索",
			heading: "一整年的页面，点一下就到。",
			body: "点日期就能看到整个月——贴过贴纸的日子下面有个小圆点。也可以直接搜：票据文字、卡片字段和文字贴纸都在 iPhone 上建了索引，搜“Metropolis”就能找到看那场电影的晚上。",
			points: [
				{ title: "月视图", body: "随时翻回过去的某一天，接着往上贴。" },
				{ title: "搜索你的日记", body: "票据文字、卡片字段和文字贴纸，都在设备上匹配。" },
				{ title: "误删也不怕", body: "删掉的贴纸会保留 30 天才真正消失。" },
			],
			shots: {
				calendar: "2026 年 10 月的日历面板，贴过贴纸的日子带着小圆点",
				search: "在日记里搜索“Metro”，找到 10 月 7 日周三的 Metropolis 电影票",
			},
		},
		widget: {
			kicker: "主屏幕与锁定屏幕",
			heading: "今天这一页，抬眼就能看到。",
			body: "添加「今日贴纸」小组件，今天最新的几张贴纸就待在你的 App 中间；点一下直接回到今天这一页。手帐只有足够好拿，才会真的被用起来。",
			points: ["主屏幕的小号和中号小组件", "锁定屏幕显示今天的日期和贴纸数", "控制中心的「拍下此刻」一键打开相机，贴到今天"],
			shot: "iPhone 主屏幕上的中号「今日贴纸」小组件，显示今天的可颂、爆米花和照片贴纸",
		},
		privacy: {
			kicker: "默认私密",
			heading: "你的手帐，根本没有地方可去。",
			body: "贴贴手帐没有账号系统，也没有存放你页面的服务器。抠图和票据识别都在 iPhone 上完成，App 只能看到你选中的那几张照片。",
			keptTitle: "只留在你的 iPhone 上",
			kept: ["页面、贴纸和你选中的照片", "票据文字与搜索索引", "贴纸图片，会随 iPhone 备份一起保存"],
			neverTitle: "从来不会发生",
			never: ["注册、登录，或者建立个人资料", "为了抠图或识别而上传照片", "广告、统计 SDK 或追踪"],
			facts: [
				{ icon: "cloud", text: "iCloud 同步需手动开启，走你自己的 iCloud" },
				{ icon: "eye", text: "只读取你选中的照片" },
				{ icon: "page", text: "离线可用——飞机上、隧道里都行" },
				{ icon: "database", text: "随时在设置里清除所有数据" },
			],
		},
		pricing: {
			kicker: "价格",
			heading: "免费就能记。Pro 买一次，一直是你的。",
			body: "一天一页需要的功能都免费。Peelday Pro 是一次性购买——永远不是订阅。",
			plans: [
				{
					name: "贴贴手帐",
					price: "免费",
					unit: "",
					for: "一天一页需要的全部",
					points: ["照片、票据、文字和 Emoji 贴纸", "设备上抠图与票据识别", "日历、搜索和小组件", "把整页分享成图片"],
					featured: false,
				},
				{
					name: "Peelday Pro",
					price: "一次买断",
					unit: "终身解锁",
					for: "完整贴纸库、同步和分享",
					points: [
						"全部高级样式与配色",
						"国家贴纸与完整内置贴纸库",
						"多台 iPhone 之间的 iCloud 同步",
						"把单张贴纸分享到其他 App",
						"横线纸与空白纸",
						"家人共享，最多五人",
					],
					featured: true,
				},
			],
			note: "具体价格以你所在地区的 App Store 显示为准。「恢复购买」在设置里。",
		},
		faq: {
			heading: "开始之前，你可能想知道。",
			body: "关于隐私、设备和价格。",
			email: "给我写邮件",
			items: [
				{ q: "需要注册账号吗？", a: "不需要。没有什么可注册、也没有什么可登录——打开 App 就能开始贴今天这一页。" },
				{ q: "我的照片会被上传吗？", a: "不会。抠图和票据识别都在 iPhone 上完成，贴贴手帐只读取你选中的照片，从不碰相册里的其他内容。" },
				{ q: "没网能用吗？", a: "能。做页面、翻页面都不需要网络，只有 iCloud 同步和购买需要联网。" },
				{ q: "换新 iPhone 时页面怎么办？", a: "页面和贴纸图片都包含在 iPhone 备份里，恢复备份就会一起回来。升级 Pro 后也可以打开 iCloud 同步。" },
				{ q: "删掉的东西还能找回吗？", a: "能。删掉的贴纸会保留 30 天，期间都可以恢复。" },
				{
					q: "支持哪些设备和语言？",
					a: "需要 iOS 18 或更高版本的 iPhone。界面支持简体中文、繁体中文、英语、日语、韩语、法语、德语和西班牙语。",
				},
				{
					q: "Pro 多了什么？",
					a: "全部高级样式与配色、国家贴纸和完整内置贴纸库、iCloud 同步、单张贴纸分享、横线纸和空白纸，以及家人共享——买一次就够。",
				},
			],
		},
		final: {
			heading: "把小事留下来。",
			body: "App Store 免费下载，适用于 iPhone。一天一页就够了。",
		},
	},
} as const;

export function getPeelday(locale: Locale | string | undefined) {
	return content[locale === "zh" ? "zh" : "en"];
}
