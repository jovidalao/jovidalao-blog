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
				body: "There are no ads, no analytics or telemetry SDK, and no third-party tracking, and we never sell your data. The app never asks for your name, email address, phone number, or Apple Account (we see your email address only if you email us), and we collect no advertising identifier, location, contacts, calendar, or health data. We keep no copy of your conversation history, corrections, mastery records, or learner profile; a Converloop AI request carries only the part a task needs, as described below. If you use Apple Intelligence or your own API key and never connect Converloop AI, the app sends nothing to our server.",
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
					"On the way: requests reach our server through Cloudflare, which runs the secure entry point to it and so handles the traffic in transit. Our server then sends each request through our relay to whichever model provider answers it: OpenAI, Google, Anthropic, or Moonshot (Kimi). When the relay fails, the request goes to DeepSeek's own API instead. These providers handle the data under their own terms, and we do not promise that they keep none of it. Our relay reaches them through accounts we hold with each provider, and under those accounts' terms a provider may keep the content and may use it to improve its models; we cannot turn that off for you, so do not send through Converloop AI anything you would not share with these providers. They operate internationally, so your text may be processed outside your country: in the United States when OpenAI, Google, or Anthropic handles it, and in China when Moonshot or DeepSeek handles it. Like any internet request, it also reveals your device's IP address to Cloudflare and to our server, which uses it only to deliver the response and keep the service secure.",
					"What our server keeps: your service identity and App Attest key; whether you allowed data processing, and which version of the disclosure you agreed to; your allowance and, if you subscribe, your subscription record (see Purchases); and, for each request, a usage record — request ID, task type, which model answered, time, duration, tokens used, and allowance charged. It does not keep the text of your requests or of the replies once a request has finished, with one exception: when a request fails inside our relay, the relay keeps a copy of that request, including its text, for troubleshooting. Only the 10 most recent failed requests are kept; each new failure deletes the oldest. We use these records only to run Converloop AI: to verify the device, count allowance, check subscriptions, keep the service secure, and answer your support requests.",
					"How long: these records are kept while your service identity exists. If you ask us to delete it (see Your Controls), we delete the identity, its usage records, and its consent record, keeping only the minimum subscription transaction records we are required to retain. Our server backups are overwritten after 14 days, so deleted data leaves them within that time.",
					"Turning it off: switch off Allow AI data processing (Settings → AI Services → Language Model → Converloop AI) at any time. The app stops sending immediately, cancels requests in progress, and records the withdrawal on our server. You can keep using Converloop with Apple Intelligence or your own key.",
					"Speech is separate: Converloop AI's model service does not process audio. Recording and reading aloud keep their own settings, described below.",
				],
			},
			{
				title: "Purchases",
				body: "Purchases are processed by Apple under the App Store's terms; we never see your payment details or your Apple Account. The 7-day free trial and the one-time Lifetime Full Version purchase are checked on your device, and the app sends nothing about them to our server. When you subscribe to Converloop AI, the app sends Apple's signed record of the transaction to our server, which checks Apple's signature and stores the product, transaction identifiers, dates, and subscription status to provide the service. Restoring with the same Apple Account on another installation sends its signed transaction too, and links that installation to the original subscription and shared allowance without granting the allowance again. Each installation keeps its own device identity, processing consent and request records; restoring a purchase does not give consent to send learning content. Apple also notifies our server when the subscription renews, ends, or is refunded. You can cancel or manage it at any time in your App Store subscriptions.",
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
				body: "iOS records Converloop's own crashes and hangs. Those reports are kept on your device, at most fourteen of them, and are never uploaded automatically. To share them, tap Send Feedback under Settings → Support: the email draft it opens carries them as an attachment, which you can remove before sending. The reports contain Apple-generated call stacks and system information — no conversation text, learning records, or API keys. Developer Mode also shows a log of your recent AI requests, which can include excerpts of requests that failed; it stays on your device unless you copy it out yourself.",
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
					"Delete your Converloop AI data: email us from Settings → Support → Send Feedback, which includes this device's service identity when it is connected to Converloop AI. We will delete the identity and the records linked to it as described above.",
					"Keep AI and speech on your device: choose Apple Intelligence with the On-device model, Apple's speech recognition, and Apple's voices.",
					"Third-party data: anything already sent to Apple, to a provider you configured, to Xiaomi MiMo, or to the model providers behind Converloop AI is handled under that provider's policy — we have no ability to delete it on your behalf.",
				],
			},
			{
				title: "Changes to This Policy",
				body: 'If this policy changes materially, we will update the "Last updated" date on this page and note it in the release notes of the new version. Before Converloop AI sends your data to any recipient not named here, we will update this page and the disclosure in the app and ask for your permission again.',
			},
			{
				title: "Feedback and Support Email",
				body: "Send Feedback (Settings → Support) and Report This Problem (on an error) open an email draft to us in your own mail app. Below the space for your message, the draft lists: the app and iOS versions and the device model; the app language, the language you are learning, your level, and your native language; the model and voice services you use, their model names, and the host name of any address you entered; if this device is connected to Converloop AI, its service identity and last request ID; and the time, task, error message, and log ID of up to five recent failed AI requests. Crash reports kept on the device are attached. It contains no conversation text, nothing that was sent to a model, and no API keys. The app sends nothing itself: you can edit or delete any of it, and only what you send reaches us. If the service identity is included, your email address becomes linked to that device's Converloop AI records, which is what lets us answer subscription and deletion requests. We keep support email in our mailbox to answer you, and delete it on request.",
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
				body: "没有广告、没有埋点或分析 SDK、没有第三方追踪，我们也从不出售你的数据。App 从不索要你的姓名、邮箱、电话或 Apple 账户（只有你给我们发邮件时，我们才会看到你的邮箱地址）；我们不收集广告标识符、位置、通讯录、日历或健康数据。我们不保存你的对话记录、纠错记录、掌握度或学习档案的副本；Converloop AI 的每次请求只带上那项任务需要的部分，详见下文。如果你只用 Apple 智能或自带密钥、从不连接 Converloop AI，App 不会向我们的服务器发送任何东西。",
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
					"经过谁：请求经 Cloudflare 到达我们的服务器；Cloudflare 运营通往服务器的加密入口，因此会经手传输中的数据。服务器再把每个请求经中转发给当时作答的模型服务商：OpenAI、Google、Anthropic 或月之暗面（Kimi）。中转失败时改用 DeepSeek 自己的接口。这些服务商按各自的条款处理数据，我们不承诺它们不留存任何内容。中转通过我们在各家服务商持有的账号访问它们，按这些账号适用的条款，服务商可能保存内容，并可能用来改进模型；我们无法替你关闭这一点，所以不愿让这些服务商看到的内容，请不要通过 Converloop AI 发送。它们在多个国家和地区运营，你的文字可能在你所在地之外被处理：由 OpenAI、Google 或 Anthropic 处理时在美国，由月之暗面或 DeepSeek 处理时在中国。和任何联网请求一样，你设备的 IP 地址也会被 Cloudflare 和我们的服务器看到，服务器只用它来送回结果和保障服务安全。",
					"我们保存什么：服务身份与 App Attest 密钥；你是否同意处理数据，以及你同意的是哪一版说明；额度，以及订阅后的订阅记录（见「购买」）；每次请求的用量记录——请求 ID、任务类型、作答的模型、时间、耗时、Token 数和扣除的额度。请求完成后，服务器不保存你的请求原文，也不保存回复内容，只有一个例外：请求在中转环节失败时，中转会保留这次请求的副本（包括其中的文字）用于排查，只保留最近 10 次失败，每新增一次就删除最早的一次。这些记录只用于运行 Converloop AI：验证设备、计算额度、核对订阅、保障服务安全，以及处理你的支持请求。",
					"保存多久：这些记录在你的服务身份存在期间一直保留。你要求删除时（见「你的控制权」），我们会删除服务身份、用量记录和同意记录，只保留我们依规必须保留的最少订阅交易记录。服务器备份 14 天后覆盖，已删除的数据最迟在这段时间内从备份中消失。",
					"随时关闭：在「设置 → AI 服务 → 语言模型 → Converloop AI」里关掉「允许 AI 处理学习内容」，App 会立即停止发送、取消正在进行的请求，并在服务器上记下你已撤回同意。之后你仍然可以用 Apple 智能或自带密钥继续使用 Converloop。",
					"语音另行处理：Converloop AI 的模型服务不处理音频。录音和朗读有各自的设置，见下文。",
				],
			},
			{
				title: "购买",
				body: "所有购买都由 Apple 按 App Store 的条款处理，我们看不到你的付款信息或 Apple 账户。7 天免费试用和「永久解锁完整版」一次买断只在设备上校验，App 不会把它们发送给我们的服务器。订阅 Converloop AI 时，App 会把 Apple 签名的交易记录发送给我们的服务器，服务器核对签名后保存商品、交易标识、日期和订阅状态，用于提供服务。在另一台设备或重装后的 App 上，用同一 Apple 账户恢复购买时，也会发送签名交易，将这次安装关联到原订阅及共享余额，不会重复发放额度。每次安装的设备身份、处理同意和请求记录保持独立；恢复购买不会自动同意发送学习内容。订阅续期、到期或退款时，Apple 也会通知我们的服务器。你可以随时在 App Store 的订阅管理中取消或管理订阅。",
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
				body: "iOS 会记录 Converloop 自身的崩溃与卡顿。这些报告保存在设备本地，最多 14 份，不会自动上传。要分享报告，在「设置 → 支持」里点「反馈问题」：它打开的邮件草稿会把报告作为附件带上，发送前你可以删掉。报告内容是 Apple 生成的调用栈与系统信息，不包含对话内容、学习记录或 API 密钥。开发者模式还会显示最近 AI 请求的运行日志，其中可能有失败请求的片段；它同样只保存在本机，除非你自己复制出去。",
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
					"删除 Converloop AI 数据：在「设置 → 支持 → 反馈问题」里给我们发邮件——这台设备连接了 Converloop AI 时，邮件会自动带上它的服务身份。我们会按上文所述删除服务身份及与之关联的记录。",
					"让 AI 和语音都留在本机：选择 Apple 智能的「本机模型」、Apple 系统语音识别和 Apple 系统朗读。",
					"第三方数据：已经发送给 Apple、你配置的服务商、小米 MiMo 或 Converloop AI 背后模型服务商的内容，按各自的政策处理，我们没有能力代为删除。",
				],
			},
			{
				title: "政策变更",
				body: "如果本政策发生实质变化，我们会更新本页顶部的「最后更新」日期，并在新版本的更新说明中提示。在 Converloop AI 把你的数据发送给本页未列出的接收方之前，我们会先更新本页和 App 内的说明，并重新征求你的同意。",
			},
			{
				title: "反馈与支持邮件",
				body: "「反馈问题」（设置 → 支持）和出错时的「报告这个问题」会在你自己的邮件 App 里打开一封发给我们的草稿。在留给你描述问题的位置下方，草稿会列出：App 与 iOS 版本、设备型号；界面语言、学习语言、水平与母语；你在用的模型与语音服务、模型名称，以及你自填接口地址的主机名；这台设备连接了 Converloop AI 时，它的服务身份和最近一次请求 ID；最近最多五次失败 AI 请求的时间、任务、错误信息和日志编号。设备上保存的崩溃报告会作为附件。草稿不含对话内容、发给模型的内容和任何 API 密钥。App 自己不会发送任何东西：你可以修改或删掉其中任何部分，只有你发出的内容才会到达我们。如果邮件里带有服务身份，你的邮箱地址就会与那台设备的 Converloop AI 记录关联起来，这正是我们处理订阅和删除请求所需要的。支持邮件保存在我们的邮箱里用于回复你，你要求时我们会删除。",
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
			"In the app, tap Settings → Support → Send Feedback, or Report This Problem on an error: it opens an email to us with your app version, device, the services you use, and recent errors already filled in, so all you need to add is what happened. Without the app at hand, email jovidalao@gmail.com.",
		sections: [
			{
				title: "Getting Started",
				body: "During setup, choose Converloop AI or Lifetime Full Version. Converloop AI is a yearly subscription that includes all learning features and hosted AI. Lifetime Full Version is a one-time purchase for use with Apple Intelligence on supported devices or your own AI service key, and has a separate 7-day app trial. The final setup action can enable the free Converloop AI reading voices after showing the data disclosure; you can choose Apple voices or your own voice service under Settings → AI Services. Model and voice choices can be changed there at any time.",
			},
			{
				title: "Apple Intelligence Is Greyed Out",
				body: "Apple Intelligence needs a device that supports it, Apple Intelligence turned on in iOS Settings → Apple Intelligence & Siri, its model fully downloaded, and a country or region where Apple offers it; the card shows the reason iOS gives. Private Cloud Compute also needs iOS 27 or later and a connection, and comes with a daily allowance set by Apple — when it runs out, Automatic switches to the on-device model.",
			},
			{
				title: "AI Features Ask Me to Start a Free Trial or Buy",
				body: "AI features need an active trial, Lifetime Full Version, or an active Converloop AI subscription. Tap Free Trial or Buy, or open Lifetime Full Version at the top of Settings. Your conversations, learning records, and backup export stay available whatever you decide.",
			},
			{
				title: "Restoring Purchases on Another Device",
				body: "Tap Restore Purchases on the Lifetime Full Version page or during setup. Use the Apple Account that made the purchase; reinstalling does not restart the trial. For Converloop AI, restoring connects this installation to the original subscription and shared allowance, without granting credits again. Restoring does not authorize AI processing: read the data notice and choose Start using Converloop during setup, or turn on Allow AI data processing in Settings → AI Services → Language Model → Converloop AI. If the service is temporarily unavailable, use Check again on the purchase page. You can also restore from the Converloop AI settings page after connecting the device. Contact us if a verified purchase still does not appear.",
			},
			{
				title: "Converloop AI Will Not Connect",
				body: "Connecting uses Apple's App Attest, which works only on a real iPhone or iPad with a connection to both Apple and our service. Wait a moment and try again; if it keeps failing, tap Reconnect this device on the Converloop AI page, and if the error comes back, open View Details on it and tap Report This Problem.",
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
				body: "Tap Settings → Support → Send Feedback. Crash reports iOS kept on your device are attached to the email draft; they leave your device only if you send it, and contain no conversation text, learning records, or API keys.",
			},
			{
				title: "Deleting Everything",
				body: "Deleting the app removes its local data. If you used Converloop AI, email us from Settings → Support → Send Feedback on that device (the draft includes its service identity) and we will delete the data linked to it. Anything already sent to a third-party provider must be deleted through that provider under their policy, and a Converloop AI subscription must be cancelled separately in the App Store.",
			},
			{
				title: "Feedback",
				body: "Feature requests, translation problems, and UI bugs are all welcome through Send Feedback in the app, or at jovidalao@gmail.com.",
			},
		],
	},
	zh: {
		intro:
			"在 App 里点「设置 → 支持 → 反馈问题」，或在出错的地方点「报告这个问题」：它会打开一封发给我们的邮件，App 版本、设备、在用的服务和最近的错误都已写好，你只需补充发生了什么。手边没有 App 时，也可以直接发邮件到 jovidalao@gmail.com。",
		sections: [
			{
				title: "开始使用",
				body: "引导里可以选择 Converloop AI 或永久解锁完整版。Converloop AI 是年订阅，包含全部学习功能和托管 AI；永久解锁完整版是一次买断，搭配支持设备上的 Apple 智能或你自己的 AI 服务密钥使用，也提供独立的 7 天 App 免费试用。引导最后的操作会在显示数据说明后启用免费的 Converloop AI 朗读；之后可以在「设置 → AI 服务」里换成 Apple 系统朗读或自己的语音服务，模型与声音都能随时更改。",
			},
			{
				title: "Apple 智能是灰的、选不了",
				body: "Apple 智能需要支持它的设备、在系统「设置 → Apple 智能与 Siri」里已开启、模型已下载完成，并且所在国家或地区提供这项服务；卡片上会显示系统给出的原因。私有云计算还需要 iOS 27 或更高版本和网络连接，并有 Apple 设定的每日额度——用完后，「自动」会改用本机模型。",
			},
			{
				title: "AI 功能提示「免费试用或买断」",
				body: "AI 功能需要试用期内、已买断「永久解锁完整版」，或 Converloop AI 订阅有效。点「免费试用或买断」，或打开设置顶部的「永久解锁完整版」，即可开始试用或买断。无论是否购买，已有的对话、学习记录和备份导出都可以照常使用。",
			},
			{
				title: "换设备后怎么恢复购买",
				body: "在「永久解锁完整版」页或引导中点「恢复购买」，使用当初购买的 Apple 账户；重装不会重新开始试用。恢复 Converloop AI 时，会把这次安装关联到原订阅和共享余额，不会再次发放额度。恢复购买不会自动授权 AI 处理：请先阅读资料说明，再在引导中点「开始使用」，或到「设置 → AI 服务 → 语言模型 → Converloop AI」打开「允许 AI 处理学习内容」。服务暂时不可用时，可在购买页点「再查一次」；连接设备后，也可从 Converloop AI 设置页恢复。购买已验证却仍未显示时，请联系我们。",
			},
			{
				title: "Converloop AI 连接失败",
				body: "连接使用 Apple 的 App Attest，只能在 iPhone 或 iPad 真机上进行，并且需要能同时连上 Apple 和我们的服务。请稍后重试；如果一直失败，在 Converloop AI 页点「重新连接这台设备」；还是出错的话，展开错误上的「查看详情」，点「报告这个问题」。",
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
				body: "说明本机数据库损坏了。App 已经用一个空数据库启动，原来的数据没有被删除，而是完整保留在应用容器里。如果你之前导出过备份，可以直接导入恢复。请通过「反馈问题」把这个情况告诉我们，诊断报告会一并附上。",
			},
			{
				title: "怎么把崩溃报告发给你们",
				body: "点「设置 → 支持 → 反馈问题」。iOS 保存在设备上的崩溃报告会作为附件带在邮件草稿里；只有你发出邮件，报告才会离开设备，内容不含对话内容、学习记录或 API 密钥。",
			},
			{
				title: "怎么彻底删除我的数据",
				body: "删除 App 即可清除设备上的本地数据。如果你用过 Converloop AI，请在那台设备上通过「设置 → 支持 → 反馈问题」给我们发邮件（草稿里带有它的服务身份），我们会删除与它关联的数据。已经发送给第三方服务商的内容，需要按该服务商的政策向他们申请删除；Converloop AI 订阅需要另外在 App Store 里取消。",
			},
			{
				title: "反馈与建议",
				body: "功能建议、翻译问题、界面 bug 都欢迎通过 App 里的「反馈问题」告诉我们，或发到 jovidalao@gmail.com。",
			},
		],
	},
} as const;

/**
 * Converloop's terms of use, linked from the About page and from every screen
 * that sells a plan, as App Review asks of apps with auto-renewable
 * subscriptions (3.1.2). They supplement Apple's standard EULA rather than
 * replace it: App Store Connect keeps the standard licence agreement, and these
 * add only what is Converloop's own — the trial and the purchases, the
 * Converloop AI subscription, AI-generated content, and acceptable use. Plan
 * facts mirror the iOS repo's docs/PRODUCT_DESIGN.md (购买与权益).
 */
export const converloopTerms = {
	en: {
		intro:
			"These terms cover Converloop for iPhone and iPad and Converloop AI, the model service we run. By downloading or using Converloop, you agree to them. Please read them together with the Privacy Policy, which explains what is sent where.",
		sections: [
			{
				title: "Apple's Standard EULA",
				body: "Converloop is licensed to you, not sold, under Apple's Licensed Application End User License Agreement. These terms add what is specific to Converloop. Where the two differ on your licence to use the app itself, Apple's agreement governs.",
				link: {
					label: "Apple's Licensed Application End User License Agreement",
					href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
				},
			},
			{
				title: "Free Trial and Purchases",
				bullets: [
					"Converloop is free to download. Conversations, scene practice, corrections, explanations, and other AI features are unlocked by the 7-day free trial, by Lifetime Full Version, or by an active Converloop AI subscription.",
					"The separate 7-day app trial for Lifetime Full Version starts when you tap to start it and ends by itself after 7 days. It never charges you and never turns into a purchase. It is available once per Apple Account: restoring it on another device or reinstalling does not start it again.",
					"Lifetime Full Version is a one-time purchase that keeps the app's features unlocked for good when you use Apple Intelligence or your own API key. It does not include Converloop AI, and it can be shared with your Family Sharing group.",
					"Prices are shown in the app and the App Store before you pay. All payments are processed by Apple, and refunds are handled by Apple under its own policies.",
					"Whatever you decide, your conversations, learning records, and backup export stay available.",
				],
			},
			{
				title: "Converloop AI Subscription",
				bullets: [
					"Converloop AI is an auto-renewable yearly subscription. It includes the whole app and the use of Converloop AI, with no API key of your own; AI requests draw on the allowance that comes with it, and the Converloop AI page in Settings shows what is left.",
					"If the App Store confirms that you are eligible, Converloop AI starts with a 7-day free trial. It then becomes a paid yearly subscription at the price shown before purchase unless you cancel at least 24 hours before the trial ends. Without an introductory trial, payment is charged to your Apple Account when you confirm the purchase. The subscription renews automatically each year at the price then in effect unless you turn off auto-renewal at least 24 hours before the end of the current period; your account is charged for renewal within the 24 hours before that period ends.",
					"You can manage or cancel the subscription at any time in your App Store account settings (iOS Settings → your name → Subscriptions). Cancelling stops the next renewal; you keep Converloop AI until the end of the period you have paid for. Deleting the app does not cancel the subscription.",
					"Converloop AI sends nothing for processing until you agree, and you can withdraw that permission at any time; the Privacy Policy explains what is sent and to whom.",
				],
			},
			{
				title: "AI-Generated Content",
				body: "Replies, corrections, polished versions, explanations, translations, and lookups are written by AI models — Apple's, those of a provider you choose, or those behind Converloop AI. They can be wrong, incomplete, or unnatural, and their quality varies between services. Treat them as a learning aid, not as an authority on the language or as legal, medical, financial, or other professional advice.",
			},
			{
				title: "Your Content and Acceptable Use",
				bullets: [
					"You keep all rights in what you write or say in Converloop. It is processed only to provide the features you use, as the Privacy Policy describes.",
					"Do not use Converloop to create or send content that is unlawful, infringes the rights of others, harasses anyone, or sexualises minors.",
					"Do not try to disrupt, overload, reverse-engineer, or get around the limits of Converloop AI — for example by automating requests or using it for anything other than your own language learning.",
					"Keep sensitive personal details about yourself or others out of your conversations.",
				],
			},
			{
				title: "Your Own API Key and Other Services",
				body: "If you use your own API key, requests go from your device straight to that provider, under the provider's own terms and prices; your account with them and any charges it incurs are yours. Apple Intelligence is provided by Apple under Apple's terms. We are not responsible for the availability, content, or charges of services we do not run.",
			},
			{
				title: "Availability and Changes",
				body: "We work to keep Converloop AI running, but it depends on network and model providers outside our control, so we cannot promise it will always be available or free of errors. We may update the app and change how Converloop AI is provided, including which model providers it uses; before your data goes to a recipient the Privacy Policy does not name, we will update it and ask for your permission again.",
			},
			{
				title: "Disclaimer and Limitation of Liability",
				body: 'Converloop is provided "as is", without warranties of accuracy, availability, or fitness for a particular purpose. To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, Converloop. Nothing in these terms limits rights you have under consumer protection laws that cannot be excluded.',
			},
			{
				title: "Termination",
				body: "You can stop using Converloop at any time by deleting it; cancel any subscription separately in the App Store. If you seriously or repeatedly break these terms, in particular by abusing Converloop AI, we may suspend this device's access to Converloop AI.",
			},
			{
				title: "Changes to These Terms",
				body: 'If these terms change, we will update the "Last updated" date on this page, and note material changes in the release notes of the new version. Continuing to use Converloop after a change means you accept the updated terms.',
			},
			{
				title: "Contact Us",
				body: "For any question about these terms, please email jovidalao@gmail.com.",
			},
		],
	},
	zh: {
		intro:
			"本条款适用于 Converloop（iPhone 与 iPad 版）以及我们运行的模型服务 Converloop AI。下载或使用 Converloop，即表示你同意本条款。请与隐私政策一起阅读，那里写明了什么内容会发往哪里。",
		sections: [
			{
				title: "Apple 标准最终用户许可协议",
				body: "Converloop 以许可而非出售的方式提供给你，适用 Apple 的《许可应用程序最终用户许可协议》（标准 EULA）。本条款只补充 Converloop 自己的部分；在你使用 App 本身的许可上，两者如有不同，以 Apple 的协议为准。",
				link: {
					label: "Apple《许可应用程序最终用户许可协议》",
					href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
				},
			},
			{
				title: "免费试用与购买",
				bullets: [
					"Converloop 可以免费下载。对话、场景训练、批改、讲解等 AI 功能，需要 7 天免费试用、「永久解锁完整版」或有效的 Converloop AI 订阅才能使用。",
					"永久解锁完整版的独立 App 免费试用在你点开始时开始，7 天后自动结束，不会扣费，也不会自动转为购买。每个 Apple 账户只能试用一次：在别的设备上恢复或重装 App 都不会重新开始。",
					"「永久解锁完整版」是一次买断，买断后搭配 Apple 智能或自带 API 密钥一直可用；它不含 Converloop AI，可以通过家庭共享与家人共用。",
					"价格在付款前显示在 App 和 App Store 里。所有付款都由 Apple 处理，退款按 Apple 的政策办理。",
					"无论是否购买，你已有的对话、学习记录和备份导出都可以照常使用。",
				],
			},
			{
				title: "Converloop AI 订阅",
				bullets: [
					"Converloop AI 是按年自动续订的订阅，订阅期内 App 全部可用，并可以使用 Converloop AI 的模型服务，不需要自己的 API 密钥。AI 请求会使用订阅附带的额度，剩余额度显示在「设置」的 Converloop AI 页。",
					"如果 App Store 确认你有推介试用资格，Converloop AI 的首 7 天免费；除非在试用结束前至少 24 小时取消，之后会按购买前显示的价格转为付费年订阅。没有推介试用时，确认购买即从你的 Apple 账户扣费。除非在当前订阅期结束前至少 24 小时关闭自动续订，订阅会按届时的价格每年自动续订；续订费用会在当前订阅期结束前 24 小时内扣除。",
					"你可以随时在 App Store 的账户设置（系统「设置 → 你的名字 → 订阅」）里管理或取消订阅。取消后不再续订，已付费的期限内仍可使用 Converloop AI。删除 App 不会取消订阅。",
					"在你同意之前，Converloop AI 不会发送任何内容去处理，你也可以随时撤回同意；发送什么、发给谁，见隐私政策。",
				],
			},
			{
				title: "AI 生成的内容",
				body: "回复、批改、润色、讲解、翻译和查词都由 AI 模型生成——来自 Apple、你选择的服务商，或 Converloop AI 背后的模型服务商。它们可能出错、不完整或不够地道，不同服务的质量也不一样。请把它们当作学习辅助，而不是语言上的权威，也不是法律、医疗、财务或其他专业意见。",
			},
			{
				title: "你的内容与使用规范",
				bullets: [
					"你在 Converloop 里写下或说出的内容，权利都归你。这些内容只会按隐私政策所述，用于提供你正在使用的功能。",
					"请勿用 Converloop 创作或发送违法、侵犯他人权利、骚扰他人或涉及未成年人色情的内容。",
					"请勿干扰、过载、逆向工程或绕过 Converloop AI 的限制——例如自动化批量请求，或把它用于你自己学语言以外的用途。",
					"请不要在对话里填写你自己或他人的敏感个人信息。",
				],
			},
			{
				title: "自带 API 密钥与其他服务",
				body: "如果你使用自己的 API 密钥，请求会从设备直接发给该服务商，适用该服务商自己的条款和价格；你在那里的账户以及由此产生的费用由你负责。Apple 智能由 Apple 按其条款提供。对于不由我们运行的服务，其可用性、内容和收费我们不承担责任。",
			},
			{
				title: "服务可用性与变更",
				body: "我们会尽力让 Converloop AI 稳定运行，但它依赖我们无法控制的网络和模型服务商，因此无法保证始终可用或没有错误。我们可能更新 App，并调整 Converloop AI 的提供方式，包括所使用的模型服务商；在你的数据发往隐私政策未列出的接收方之前，我们会先更新隐私政策并重新征求你的同意。",
			},
			{
				title: "免责声明与责任限制",
				body: "Converloop 按「现状」提供，不对准确性、可用性或特定用途适用性作任何保证。在法律允许的最大范围内，我们不对因使用或无法使用 Converloop 而产生的任何间接、附带或后果性损害承担责任。本条款不限制你依据消费者保护法享有的、不可排除的权利。",
			},
			{
				title: "终止",
				body: "你可以随时删除 App 停止使用；订阅需要另外在 App Store 里取消。如果你严重或反复违反本条款，尤其是滥用 Converloop AI，我们可能暂停这台设备使用 Converloop AI。",
			},
			{
				title: "条款变更",
				body: "本条款如有变更，我们会更新本页的「最后更新」日期；实质性变更会在新版本的更新说明里提示。变更后继续使用 Converloop，即表示你接受更新后的条款。",
			},
			{
				title: "联系我们",
				body: "对本条款有任何疑问，请发送邮件至 jovidalao@gmail.com。",
			},
		],
	},
} as const;

/** Page chrome, kept beside the documents so Converloop's legal pages are one file. */
export const converloopLegalUi = {
	en: {
		privacyTitle: "Privacy Policy — Converloop",
		termsTitle: "Terms of Use — Converloop",
		supportTitle: "Support — Converloop",
		back: "← Back to Converloop",
		privacy: "Privacy Policy",
		terms: "Terms of Use",
		support: "Support",
		contact: "Contact",
	},
	zh: {
		privacyTitle: "隐私政策 — Converloop",
		termsTitle: "使用条款 — Converloop",
		supportTitle: "支持 — Converloop",
		back: "← 返回 Converloop",
		privacy: "隐私政策",
		terms: "使用条款",
		support: "支持",
		contact: "联系我们",
	},
} as const;

export function getConverloopLegal(locale: Locale | string | undefined) {
	const key = locale === "zh" ? "zh" : "en";
	return {
		privacy: converloopPrivacy[key],
		terms: converloopTerms[key],
		support: converloopSupport[key],
		ui: converloopLegalUi[key],
	};
}
