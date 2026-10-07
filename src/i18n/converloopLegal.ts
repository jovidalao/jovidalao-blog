import type { Locale } from "./ui";

/**
 * Converloop's privacy policy and support page.
 *
 * Kept apart from `legal.ts` (Peelday's) because the two products make very
 * different promises: Peelday collects nothing full stop, while Converloop's
 * text goes wherever the chosen model service is — Apple, a provider the user
 * configured, or Converloop AI, our own backend. The facts mirror the iOS
 * repo's docs/RELEASE.md §4.2–4.3 and PrivacyInfo.xcprivacy (user content,
 * user ID, device ID, product interaction, purchase history); change them
 * together.
 *
 * Disclosures a template would miss, all load-bearing: Converloop AI passes
 * through Cloudflare and on to the upstream named in Settings; the free
 * "Converloop AI" voices are Xiaomi MiMo with a bundled key, not our server;
 * and the local database has no app-level encryption on top of iOS file
 * protection, which the product design doc is explicit we must not claim.
 */
export const converloopPrivacy = {
	en: {
		intro:
			"Converloop for iPhone and iPad keeps your conversations and learning records on your device, and there is no Converloop account. To answer you, though, your words have to reach a language model, and where they go depends on the model service you choose: Apple Intelligence, your own API key, or Converloop AI, the service we run. This policy explains what each choice sends, what our own server receives when you use Converloop AI, and how to stop it.",
		sections: [
			{
				title: "What We Do Not Collect",
				body: "There are no ads, no analytics or telemetry SDK, and no third-party tracking, and we never sell your data. The app never asks for your name, email address, phone number, or Apple Account, and we collect no advertising identifier, location, contacts, calendar, or health data. We keep no copy of your conversation history, corrections, mastery records, or learner profile; a Converloop AI request carries only the part a task needs, as described below. If you use Apple Intelligence or your own API key and never connect Converloop AI, the app sends nothing to our server.",
			},
			{
				title: "Where Your Data Lives",
				bullets: [
					"Conversations, correction evidence, mastery records, saved expressions, and your learner profile are stored in a database on your device.",
					"Preferences — interface language, appearance, accent colour, and the model and voice services you chose — are stored in local preferences on your device, along with a cached copy of your purchase and subscription status so the app works offline.",
					"API keys you enter, and the credentials that connect this device to Converloop AI, are stored in the iOS Keychain with AfterFirstUnlockThisDeviceOnly protection: they never sync through iCloud, never move to another device, and are never included in exported backup files.",
					"This data is protected by iOS's own file protection. Converloop does not apply additional whole-database encryption on top, and we make no such claim.",
				],
			},
			{
				title: "AI Model Services You Choose",
				body: "Replies, corrections, explanations, translations, word lookups, and the app's other AI features are written by a language model. For each request, the app sends the text you typed or dictated, the recent part of the conversation, and whatever learning context the task needs — such as your languages and level, learning goals and practice preferences, and relevant items from your learning records. Where it goes depends on the service you pick during setup or under Settings → AI Services → Language Model:",
				bullets: [
					"Apple Intelligence: with the on-device model, nothing leaves your device. Private Cloud Compute sends the request to Apple's servers, where Apple processes it; according to Apple, it is used only to fulfil the request and is not stored. The Automatic setting, the default where available, uses Private Cloud Compute first and the on-device model when the network or the cloud is unavailable; choose On-device model to keep everything local. These requests never pass through us and are covered by Apple's privacy policy.",
					"Your own API key: the request goes from your device straight to the provider you configured, using your key. It never passes through us, we cannot see it, and the provider's own privacy policy and terms apply, so please read them before entering a key. Providers currently include OpenAI and OpenAI-compatible endpoints, Anthropic, Google Gemini, DeepSeek, OpenRouter, Qwen, Moonshot (Kimi), Zhipu GLM, and any compatible endpoint whose address you supply.",
					"Converloop AI: once you agree, the request goes to the service we run and on to the model providers named in Settings. The next section explains it in full.",
				],
			},
			{
				title: "Converloop AI",
				body: "Converloop AI is the model service we run, so you need no key of your own. It is the only part of Converloop that sends data to a server we operate.",
				bullets: [
					"Connecting: when you tap Connect this device, Apple's App Attest confirms the request comes from a genuine copy of the app. Our server then creates a service identity for this device — a random ID — and stores it with the identifier and public key of this installation's App Attest key. No name, email address, or Apple Account is involved, and no conversation content is sent when you connect.",
					"Permission first: Converloop AI sends nothing for processing until you agree — in setup, where the recipients are named before you connect, or with Allow AI data processing on the Converloop AI page in Settings. From then on, each request carries the text and learning context described above, over HTTPS, to our server at api-converloop.617005.xyz.",
					"On the way: requests reach our server through Cloudflare, which runs the secure entry point to it and so handles the traffic in transit. Our server passes each request to the upstream named in Settings: currently a relay that uses Google Antigravity accounts, which means Google processes the text, or, when the relay fails, OpenRouter, which forwards it to the host of the model it selects. These providers handle the data under their own terms, and we do not promise that they keep none of it. They operate internationally, so your text may be processed outside your country, including in the United States. Like any internet request, it also reveals your device's IP address to Cloudflare and to our server, which uses it only to deliver the response and keep the service secure.",
					"What our server keeps: your service identity and App Attest key; whether you allowed data processing, and which version of the disclosure you agreed to; your allowance and, if you subscribe, your subscription record (see Purchases); and, for each request, a usage record — request ID, task type, time, duration, tokens used, and allowance charged. It does not keep the text of your requests or of the replies once a request has finished. We use these records only to run Converloop AI: to verify the device, count allowance, check subscriptions, keep the service secure, and answer your support requests.",
					"How long: these records are kept while your service identity exists. If you ask us to delete it (see Your Controls), we delete the identity, its usage records, and its consent record, keeping only the minimum subscription transaction records we are required to retain. Our server backups are overwritten after 14 days, so deleted data leaves them within that time.",
					"Turning it off: switch off Allow AI data processing (Settings → AI Services → Language Model → Converloop AI) at any time. The app stops sending immediately, cancels requests in progress, and records the withdrawal on our server. You can keep using Converloop with Apple Intelligence or your own key.",
					"Speech is separate: Converloop AI's model service does not process audio. Recording and reading aloud keep their own settings, described below.",
				],
			},
			{
				title: "Purchases",
				body: "Purchases are processed by Apple under the App Store's terms; we never see your payment details or your Apple Account. The 7-day free trial and the one-time Converloop Lifetime purchase are checked on your device, and the app sends nothing about them to our server. The Converloop AI yearly subscription is linked to this device's service identity: when you subscribe, the app sends Apple's signed record of the transaction to our server, which checks Apple's signature and stores the product, transaction identifiers, dates, and subscription status in order to provide the service. Apple also notifies our server when the subscription renews, ends, or is refunded. You can cancel or manage it at any time in your App Store subscriptions.",
			},
			{
				title: "Voice Input and Speech",
				bullets: [
					"By default, Apple's speech recognition runs on your device and no audio is sent anywhere.",
					"Audio reaches a provider only if you deliberately switch to a remote transcription service — an OpenAI-compatible endpoint or Soniox, with your own key — under Settings → AI Services → Speech to Text. Your recording then goes straight to that provider.",
					"With Apple's system voices, speech is produced on your device. With a speech service of your own — OpenAI or a compatible endpoint, Xiaomi MiMo, ElevenLabs, Google Gemini, MiniMax, or Alibaba Cloud Model Studio — the text to be spoken goes straight to that provider.",
					"Please note: the free Converloop AI voices are Xiaomi MiMo voices, using a key built into the app. If you choose them, during setup or under Settings → AI Services → Text to Speech, the text to be spoken is sent to Xiaomi's MiMo service; it does not pass through our server. They are used only if you choose them, and you can switch back to Apple's voices at any time.",
					"Whichever services you use, we never receive your recordings.",
				],
			},
			{
				title: "iCloud",
				body: "If you are signed in to iCloud, Sync Learning Goals and Preferences is on by default. It syncs only your learner profile — native and target language, current level, learning goals, practice preferences, and a short summary of what you are working on — between your own devices through your own iCloud account. Conversations and detailed mastery records are not synced. The data sits in your iCloud, which we cannot access, and you can turn the sync off under Settings → Data and Backup.",
			},
			{
				title: "Diagnostic Reports",
				body: "iOS records Converloop's own crashes and hangs. Those reports are kept on your device, at most fourteen of them, and are never uploaded automatically. To share them, turn on Developer Mode by tapping the app icon five times under Settings → Support → About, then open Diagnostic Reports in the same Support section and tap Share; where they go is entirely your choice in the system share sheet. The reports contain Apple-generated call stacks and system information — no conversation text, learning records, or API keys. Developer Mode also shows a log of your recent AI requests, which can include excerpts of requests that failed; it stays on your device unless you copy it out yourself.",
			},
			{
				title: "Children",
				body: "Converloop is not directed at children under 13 and does not knowingly collect information from them. Because the app sends your input to AI services — Apple's, a provider you choose, or Converloop AI and its model providers — and AI-generated content is not fully under our control, we recommend that minors use it with guardian guidance. If you believe a child under 13 has used Converloop AI, contact us and we will delete the data linked to that device's service identity.",
			},
			{
				title: "Your Controls",
				bullets: [
					"Export: Settings → Data and Backup → Backup and Transfer → Export Backup produces a JSON file with all your learning data; API keys and other credentials are excluded.",
					"Delete on your device: you can delete individual conversations, learning records, and diagnostic reports inside the app, and deleting the app removes its local data. iOS may keep an app's Keychain entries, such as your API keys, after the app is deleted, so clear your keys in Settings first if you want them gone too.",
					"Stop Converloop AI: turn off Allow AI data processing on the Converloop AI page. Nothing more is sent, and requests in progress are cancelled.",
					"Delete your Converloop AI data: email us your service identity — turn on Developer Mode (see Diagnostic Reports), then on the Converloop AI page open Developer Options → Share service identity. We will delete the identity and the records linked to it as described above.",
					"Keep AI and speech on your device: choose Apple Intelligence with the On-device model, Apple's speech recognition, and Apple's voices.",
					"Third-party data: anything already sent to Apple, to a provider you configured, to Xiaomi MiMo, or to the model providers behind Converloop AI is handled under that provider's policy — we have no ability to delete it on your behalf.",
				],
			},
			{
				title: "Changes to This Policy",
				body: 'If this policy changes materially, we will update the "Last updated" date on this page and note it in the release notes of the new version. Before Converloop AI sends your data to any recipient not named here, we will update this page and the disclosure in the app and ask for your permission again.',
			},
			{
				title: "Contact Us",
				body: "For any privacy question, complaint, or rights request — including deleting your Converloop AI data — please email jovidalao@gmail.com. We use your email only to reply to you.",
			},
		],
	},
	zh: {
		intro:
			"Converloop（iPhone 与 iPad 版）把你的对话和学习记录保存在设备上，也没有 Converloop 账号。不过，要得到回复，你写下的话总要交给一个语言模型；它去哪里，取决于你选择的模型服务：Apple 智能、自带 API 密钥，或者我们自己运行的 Converloop AI。本政策逐一说明每种选择会发送什么、使用 Converloop AI 时我们的服务器会收到什么，以及怎样停止发送。",
		sections: [
			{
				title: "我们不收集什么",
				body: "没有广告、没有埋点或分析 SDK、没有第三方追踪，我们也从不出售你的数据。App 从不索要你的姓名、邮箱、电话或 Apple 账户；我们不收集广告标识符、位置、通讯录、日历或健康数据。我们不保存你的对话记录、纠错记录、掌握度或学习档案的副本；Converloop AI 的每次请求只带上那项任务需要的部分，详见下文。如果你只用 Apple 智能或自带密钥、从不连接 Converloop AI，App 不会向我们的服务器发送任何东西。",
			},
			{
				title: "数据保存在哪里",
				bullets: [
					"对话、纠错证据、掌握度、查过的表达和学习档案保存在设备本地的数据库中。",
					"偏好设置（界面语言、外观、强调色，以及你选的模型与朗读服务）保存在设备本地的偏好设置中；为了离线也能使用，购买与订阅状态也在这里缓存一份。",
					"你填写的 API 密钥，以及这台设备连接 Converloop AI 所用的凭据，保存在 iOS 系统钥匙串，访问级别为 AfterFirstUnlockThisDeviceOnly：不会通过 iCloud 同步，不会转移到别的设备，也不会包含在导出的备份文件里。",
					"这些数据受 iOS 自身的文件保护机制保护。Converloop 没有在应用层对本地数据库做额外的整体加密，我们不作此宣称。",
				],
			},
			{
				title: "由你选择的 AI 模型服务",
				body: "回复、批改、讲解、翻译、查词以及 App 里其他 AI 功能，都由语言模型生成。每次请求，App 都会发送你输入或口述的文字、对话里最近的一段，以及这项任务需要的学习上下文——比如你的语言与水平、学习目标与练习偏好，以及学习记录里相关的条目。发给谁，取决于你在引导中或「设置 → AI 服务 → 语言模型」里选择的服务：",
				bullets: [
					"Apple 智能：使用本机模型时，内容不离开这台设备。私有云计算会把请求发到 Apple 的服务器，由 Apple 处理；按 Apple 的说法，这些数据只用于完成这次请求，不会被保存。「自动」（可用时的默认选项）优先使用私有云计算，网络不好或云端不可用时改用本机模型；选择「本机模型」即可让内容完全留在本机。这些请求不经过我们，适用 Apple 的隐私政策。",
					"自带 API 密钥：请求用你的密钥从设备直接发给你配置的服务商，不经过我们，我们也看不到内容；相关使用受该服务商自己的隐私政策和条款约束，请在填写密钥前阅读。当前可选的服务商包括 OpenAI 与 OpenAI 兼容端点、Anthropic、Google Gemini、DeepSeek、OpenRouter、Qwen、Moonshot (Kimi)、Zhipu GLM，以及任何你自填地址的兼容端点。",
					"Converloop AI：经你同意后，请求发送到我们运行的服务，再转给设置页写明的模型服务商。下一节完整说明。",
				],
			},
			{
				title: "Converloop AI",
				body: "Converloop AI 是我们自己运行的模型服务，所以不需要你自己的密钥。它也是 Converloop 唯一会把数据发到我们服务器的部分。",
				bullets: [
					"连接设备：点「连接此设备」时，Apple 的 App Attest 会证明请求来自正版 App。我们的服务器随后为这台设备生成一个服务身份（一串随机 ID），并与这次安装的 App Attest 密钥的标识和公钥一起保存。整个过程不涉及姓名、邮箱或 Apple 账户，连接时也不发送任何对话内容。",
					"先同意，再发送：在你同意之前，Converloop AI 不会发送任何内容去处理——引导里会在你连接之前写明接收方，设置里的 Converloop AI 页则有「允许 AI 处理学习内容」开关。同意之后，每次请求都会通过 HTTPS 把上文所说的文字和学习上下文发送到我们的服务器 api-converloop.617005.xyz。",
					"经过谁：请求经 Cloudflare 到达我们的服务器；Cloudflare 运营通往服务器的加密入口，因此会经手传输中的数据。服务器再把每个请求转给设置页写明的上游：目前是使用 Google Antigravity 账号体系的中转，也就是由 Google 处理文字；中转失败时改用 OpenRouter，由它转给其选定模型的托管方。这些服务商按各自的条款处理数据，我们不承诺它们不留存任何内容。它们在多个国家和地区运营，你的文字可能在你所在地之外（包括美国）被处理。和任何联网请求一样，你设备的 IP 地址也会被 Cloudflare 和我们的服务器看到，服务器只用它来送回结果和保障服务安全。",
					"我们保存什么：服务身份与 App Attest 密钥；你是否同意处理数据，以及你同意的是哪一版说明；额度，以及订阅后的订阅记录（见「购买」）；每次请求的用量记录——请求 ID、任务类型、时间、耗时、Token 数和扣除的额度。请求完成后，服务器不保存你的请求原文，也不保存回复内容。这些记录只用于运行 Converloop AI：验证设备、计算额度、核对订阅、保障服务安全，以及处理你的支持请求。",
					"保存多久：这些记录在你的服务身份存在期间一直保留。你要求删除时（见「你的控制权」），我们会删除服务身份、用量记录和同意记录，只保留我们依规必须保留的最少订阅交易记录。服务器备份 14 天后覆盖，已删除的数据最迟在这段时间内从备份中消失。",
					"随时关闭：在「设置 → AI 服务 → 语言模型 → Converloop AI」里关掉「允许 AI 处理学习内容」，App 会立即停止发送、取消正在进行的请求，并在服务器上记下你已撤回同意。之后你仍然可以用 Apple 智能或自带密钥继续使用 Converloop。",
					"语音另行处理：Converloop AI 的模型服务不处理音频。录音和朗读有各自的设置，见下文。",
				],
			},
			{
				title: "购买",
				body: "所有购买都由 Apple 按 App Store 的条款处理，我们看不到你的付款信息或 Apple 账户。7 天免费试用和「Converloop 完整版」一次买断只在设备上校验，App 不会把它们发送给我们的服务器。Converloop AI 年订阅则与这台设备的服务身份关联：订阅时，App 会把 Apple 签名的交易记录发送给我们的服务器，服务器核对 Apple 的签名后保存商品、交易标识、日期和订阅状态，用于提供服务；订阅续期、到期或退款时，Apple 也会通知我们的服务器。你可以随时在 App Store 的订阅管理中取消或管理订阅。",
			},
			{
				title: "语音输入与朗读",
				bullets: [
					"默认使用 Apple 的系统语音识别，在设备上完成，音频不外发。",
					"只有当你主动在「设置 → AI 服务 → 语音转文字」里切换到远程转写服务（OpenAI 兼容接口或 Soniox，需要你自己的密钥）时，录音才会直接发送给该服务商。",
					"使用 Apple 系统朗读时，朗读在设备上完成；使用自带密钥的朗读服务（OpenAI 或兼容接口、小米 MiMo、ElevenLabs、Google Gemini、MiniMax、阿里云百炼）时，待朗读的文字会直接发送给该服务商。",
					"请特别注意：免费的「Converloop AI」朗读声音其实是小米 MiMo 的声音，使用 App 内置的密钥。如果你在引导中或「设置 → AI 服务 → 文字转语音」里选择它，待朗读的文字会发送给小米 MiMo 的服务，不经过我们的服务器。只有你选择它时才会使用，你也可以随时换回 Apple 系统朗读。",
					"无论使用哪种服务，我们都不会收到你的录音。",
				],
			},
			{
				title: "iCloud",
				body: "如果你登录了 iCloud，「同步学习目标与偏好」默认开启。它只会通过你自己的 iCloud 账户，在你自己的设备之间同步学习档案：母语与学习语言、当前水平、学习目标、练习偏好，以及一段关于你正在练什么的简短摘要。对话内容和详细的掌握度记录不会同步。数据存放在你的 iCloud 里，我们无法访问；你可以在「设置 → 数据与备份」里关闭同步。",
			},
			{
				title: "诊断报告",
				body: "iOS 会记录 Converloop 自身的崩溃与卡顿。这些报告保存在设备本地，最多 14 份，不会自动上传。要分享报告，先在「设置 → 支持 → 关于」里连点五次 App 图标开启开发者模式，再打开同一组里的「诊断报告」点分享；发给谁完全由你在系统分享面板里决定。报告内容是 Apple 生成的调用栈与系统信息，不包含对话内容、学习记录或 API 密钥。开发者模式还会显示最近 AI 请求的运行日志，其中可能有失败请求的片段；它同样只保存在本机，除非你自己复制出去。",
			},
			{
				title: "儿童",
				body: "Converloop 不面向 13 岁以下儿童，也不会有意收集他们的信息。由于 App 会把你的输入发送给 AI 服务——Apple、你选择的服务商，或 Converloop AI 及其模型服务商——且 AI 生成内容不受我们完全控制，建议未成年人在监护人指导下使用。如果你认为有 13 岁以下儿童使用了 Converloop AI，请联系我们，我们会删除与那台设备服务身份关联的数据。",
			},
			{
				title: "你的控制权",
				bullets: [
					"导出：设置 → 数据与备份 → 备份与迁移 → 导出备份，得到一个包含你全部学习数据的 JSON 文件（不含 API 密钥和其他凭据）。",
					"删除本机数据：你可以在应用内单独删除对话、学习记录和诊断报告；删除 App 即清除它的本地数据。iOS 可能在删除 App 后保留它的钥匙串条目（例如 API 密钥），如果希望一并清除，请先在设置里删掉密钥。",
					"停止 Converloop AI：在 Converloop AI 页关掉「允许 AI 处理学习内容」，之后不再发送任何内容，正在进行的请求也会被取消。",
					"删除 Converloop AI 数据：把你的服务身份发邮件给我们——先开启开发者模式（见「诊断报告」），再在 Converloop AI 页打开「开发者选项 → 分享服务身份」。我们会按上文所述删除服务身份及与之关联的记录。",
					"让 AI 和语音都留在本机：选择 Apple 智能的「本机模型」、Apple 系统语音识别和 Apple 系统朗读。",
					"第三方数据：已经发送给 Apple、你配置的服务商、小米 MiMo 或 Converloop AI 背后模型服务商的内容，按各自的政策处理，我们没有能力代为删除。",
				],
			},
			{
				title: "政策变更",
				body: "如果本政策发生实质变化，我们会更新本页顶部的「最后更新」日期，并在新版本的更新说明中提示。在 Converloop AI 把你的数据发送给本页未列出的接收方之前，我们会先更新本页和 App 内的说明，并重新征求你的同意。",
			},
			{
				title: "联系我们",
				body: "隐私相关问题、投诉或权利请求（包括删除你的 Converloop AI 数据），请发送邮件至 jovidalao@gmail.com。你的邮件只用于回复你。",
			},
		],
	},
} as const;

export const converloopSupport = {
	en: {
		intro:
			"Email jovidalao@gmail.com with your device model, iOS version, app version (Settings → Support → About), the model service you use, and roughly how to reproduce the problem.",
		sections: [
			{
				title: "Getting Started",
				body: "During setup you choose a model service: Apple Intelligence (free and keyless on supported devices), your own API key from a provider such as OpenAI or Anthropic, or Converloop AI, the service we run. Then you choose a voice for reading aloud: Apple's voices, the free Converloop AI voices, or your own key. You can change both at any time under Settings → AI Services. With Apple Intelligence or your own key, start the 7-day free trial, then buy Converloop Lifetime once to keep using it; Converloop AI is a yearly subscription that includes the whole app.",
			},
			{
				title: "Apple Intelligence Is Greyed Out",
				body: "Apple Intelligence needs a device that supports it, Apple Intelligence turned on in iOS Settings → Apple Intelligence & Siri, its model fully downloaded, and a country or region where Apple offers it; the card shows the reason iOS gives. Private Cloud Compute also needs iOS 27 or later and a connection, and comes with a daily allowance set by Apple — when it runs out, Automatic switches to the on-device model.",
			},
			{
				title: "AI Features Ask Me to Start a Free Trial or Buy",
				body: "AI features need an active trial, Converloop Lifetime, or an active Converloop AI subscription. Tap Free Trial or Buy, or open Converloop Lifetime at the top of Settings. Your conversations, learning records, and backup export stay available whatever you decide.",
			},
			{
				title: "Restoring Purchases on Another Device",
				body: "Tap Restore Purchases on the Converloop Lifetime page. Purchases restore on every device signed in to the same Apple Account; reinstalling does not restart the free trial. Converloop AI is linked to the service identity of the device you subscribed on, so if it doesn't show as active on another device after you connect it and tap Restore Purchases on the Converloop AI page, email us.",
			},
			{
				title: "Converloop AI Will Not Connect",
				body: "Connecting uses Apple's App Attest, which works only on a real iPhone or iPad with a connection to both Apple and our service. Wait a moment and try again; if it keeps failing, tap Reconnect this device on the Converloop AI page and email us the error code it shows.",
			},
			{
				title: "It Says This Device Has No Allowance Yet",
				body: "The device is connected but has no active Converloop AI subscription. Subscribe on the Converloop AI page. If you have already paid and the app says the service hasn't confirmed it yet, tap Check again a little later — you are never charged twice for the same subscription.",
			},
			{
				title: "Cancelling Converloop AI",
				body: "Converloop AI renews every year until you cancel it in your App Store subscriptions (iOS Settings → your name → Subscriptions); it stays active until the end of the period you paid for. Deleting the app does not cancel it. Refunds are handled by Apple.",
			},
			{
				title: "Invalid Key or No Permission (HTTP 401 / 403)",
				body: "Usually a mistyped or expired key, or a key without access to the selected model. Verify it in your provider's console and confirm the model name is available on your account.",
			},
			{
				title: "Rate Limited or Out of Quota (HTTP 429)",
				body: "That is your provider throttling you. The app retries automatically a few times; if it still fails, wait a moment and check your account balance.",
			},
			{
				title: "My Custom Endpoint Works, but Streaming Does Not",
				body: "Some relay services implement streaming incompletely. Try a different model or provider to confirm, and make sure the Base URL ends at the /v1 level.",
			},
			{
				title: "Voice Input Does Nothing",
				body: "Confirm that Converloop is allowed to use the microphone and speech recognition in iOS Settings. Apple's on-device recognition is the default; if your target language is not supported on-device, switch to a remote transcription service under Settings → AI Services → Speech to Text, which requires a key.",
			},
			{
				title: "Backing Up and Moving Your Data",
				body: "Settings → Data and Backup → Backup and Transfer → Export Backup produces a JSON file containing your conversations, correction records, and learner profile. On the new device, use Import Backup to restore; it merges and erases nothing. For safety, API keys and Converloop AI credentials are not included, so re-enter your keys, connect Converloop AI again, and use Restore Purchases.",
			},
			{
				title: "On Launch It Says My Learning Data Could Not Be Opened",
				body: "The local database was damaged. The app started on an empty one, and your original data was not deleted — it is kept intact inside the app container. If you have an exported backup, import it to restore. Please send us a diagnostic report (see below) along with a description of what happened.",
			},
			{
				title: "Sending a Crash Report",
				body: "Open Settings → Support → About and tap the app icon five times to turn on Developer Mode. Then open Settings → Support → Diagnostic Reports and tap Share at the top right. Reports leave your device only when you share them, and contain no conversation text, learning records, or API keys. You can turn Developer Mode off again at the bottom of the About page.",
			},
			{
				title: "Deleting Everything",
				body: "Deleting the app removes its local data. If you used Converloop AI, email us your service identity (with Developer Mode on: Converloop AI page → Developer Options → Share service identity) and we will delete the data linked to it. Anything already sent to a third-party provider must be deleted through that provider under their policy, and a Converloop AI subscription must be cancelled separately in the App Store.",
			},
			{
				title: "Feedback",
				body: "Feature requests, translation problems, and UI bugs are all welcome at jovidalao@gmail.com.",
			},
		],
	},
	zh: {
		intro:
			"遇到问题请发邮件到 jovidalao@gmail.com，写清楚你用的机型、系统版本、App 版本（设置 → 支持 → 关于）、在用哪种模型服务，以及大致的复现步骤。",
		sections: [
			{
				title: "开始使用",
				body: "引导里会先请你选择模型服务：Apple 智能（支持的设备上免费、无需密钥）、自带 API 密钥（如 OpenAI、Anthropic），或者我们运行的 Converloop AI；再选择朗读声音：Apple 系统朗读、免费的 Converloop AI 声音，或自带密钥。两者之后都可以在「设置 → AI 服务」里随时更改。用 Apple 智能或自带密钥时，可以先开始 7 天免费试用，之后一次买断「Converloop 完整版」；Converloop AI 是年订阅，订阅期内 App 全部可用。",
			},
			{
				title: "Apple 智能是灰的、选不了",
				body: "Apple 智能需要支持它的设备、在系统「设置 → Apple 智能与 Siri」里已开启、模型已下载完成，并且所在国家或地区提供这项服务；卡片上会显示系统给出的原因。私有云计算还需要 iOS 27 或更高版本和网络连接，并有 Apple 设定的每日额度——用完后，「自动」会改用本机模型。",
			},
			{
				title: "AI 功能提示「免费试用或买断」",
				body: "AI 功能需要试用期内、已买断「Converloop 完整版」，或 Converloop AI 订阅有效。点「免费试用或买断」，或打开设置顶部的「Converloop 完整版」，即可开始试用或买断。无论是否购买，已有的对话、学习记录和备份导出都可以照常使用。",
			},
			{
				title: "换设备后怎么恢复购买",
				body: "在「Converloop 完整版」页点「恢复购买」。登录同一 Apple 账户的设备都能恢复；重装不会重新开始免费试用。Converloop AI 与订阅时那台设备的服务身份关联：如果在另一台设备上连接并在 Converloop AI 页点「恢复购买」后仍未生效，请发邮件给我们。",
			},
			{
				title: "Converloop AI 连接失败",
				body: "连接使用 Apple 的 App Attest，只能在 iPhone 或 iPad 真机上进行，并且需要能同时连上 Apple 和我们的服务。请稍后重试；如果一直失败，在 Converloop AI 页点「重新连接这台设备」，并把显示的错误码发邮件给我们。",
			},
			{
				title: "提示「这台设备还没有额度」",
				body: "说明设备已经连接，但还没有有效的 Converloop AI 订阅。请在 Converloop AI 页订阅。如果已经付款、App 提示服务还没确认，请稍后点「再查一次」——同一个订阅不会被重复扣费。",
			},
			{
				title: "怎么取消 Converloop AI",
				body: "Converloop AI 每年自动续订，直到你在 App Store 的订阅管理（系统「设置 → 你的名字 → 订阅」）中取消；取消后在已付费的期限内仍可使用。删除 App 不会取消订阅。退款由 Apple 处理。",
			},
			{
				title: "提示密钥无效或没有权限（HTTP 401 / 403）",
				body: "多半是密钥填错、已失效，或该密钥没有开通所选模型的权限。请到服务商后台核对，并确认所填模型名称在你的账户下可用。",
			},
			{
				title: "提示请求过于频繁或额度已用完（HTTP 429）",
				body: "这是服务商的限流。App 会自动重试几次；如果仍然失败，请稍后再试并检查账户余额。",
			},
			{
				title: "自建或中转地址能用，但流式不行",
				body: "部分中转服务的流式接口实现不完整。可以先换一个模型或换一家服务商验证；接口地址请填到 /v1 这一级。",
			},
			{
				title: "语音输入没反应",
				body: "请确认已在系统设置里允许 Converloop 使用麦克风和语音识别。默认使用 Apple 的设备端识别；如果你的学习语言在本机不受支持，可以在「设置 → AI 服务 → 语音转文字」里换成远程转写服务（需要相应密钥）。",
			},
			{
				title: "怎么备份和迁移数据",
				body: "设置 → 数据与备份 → 备份与迁移 → 导出备份，会生成一个 JSON 文件，包含对话、纠错记录和学习档案。在新设备上用「导入备份」恢复——导入是合并，不会清空任何内容。出于安全考虑，API 密钥和 Converloop AI 的连接凭据不会包含在备份里：换设备后请重新填写密钥、重新连接 Converloop AI，并点「恢复购买」。",
			},
			{
				title: "启动时提示「上次的学习数据没能打开」",
				body: "说明本机数据库损坏了。App 已经用一个空数据库启动，原来的数据没有被删除，而是完整保留在应用容器里。如果你之前导出过备份，可以直接导入恢复。请把这个情况连同诊断报告（见下一条）发给我们。",
			},
			{
				title: "怎么把崩溃报告发给你们",
				body: "打开「设置 → 支持 → 关于」，连点五次 App 图标开启开发者模式；再打开「设置 → 支持 → 诊断报告」，点右上角分享。报告只在你点分享时才会离开设备，内容不含对话内容、学习记录或 API 密钥。之后可以在关于页底部关闭开发者模式。",
			},
			{
				title: "怎么彻底删除我的数据",
				body: "删除 App 即可清除设备上的本地数据。如果你用过 Converloop AI，请把服务身份（开启开发者模式后，在 Converloop AI 页 → 开发者选项 → 分享服务身份）发邮件给我们，我们会删除与它关联的数据。已经发送给第三方服务商的内容，需要按该服务商的政策向他们申请删除；Converloop AI 订阅需要另外在 App Store 里取消。",
			},
			{
				title: "反馈与建议",
				body: "功能建议、翻译问题、界面 bug 都欢迎发到 jovidalao@gmail.com。",
			},
		],
	},
} as const;

/** Page chrome, kept beside the documents so Converloop's legal pages are one file. */
export const converloopLegalUi = {
	en: {
		privacyTitle: "Privacy Policy — Converloop",
		supportTitle: "Support — Converloop",
		back: "← Back to Converloop",
		privacy: "Privacy Policy",
		support: "Support",
		contact: "Contact",
	},
	zh: {
		privacyTitle: "隐私政策 — Converloop",
		supportTitle: "支持 — Converloop",
		back: "← 返回 Converloop",
		privacy: "隐私政策",
		support: "支持",
		contact: "联系我们",
	},
} as const;

export function getConverloopLegal(locale: Locale | string | undefined) {
	const key = locale === "zh" ? "zh" : "en";
	return {
		privacy: converloopPrivacy[key],
		support: converloopSupport[key],
		ui: converloopLegalUi[key],
	};
}
