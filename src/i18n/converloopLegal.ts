import type { Locale } from "./ui";

/**
 * Converloop's privacy policy and support page.
 *
 * Kept apart from `legal.ts` (Peelday's) because the two products make very
 * different promises: Peelday collects nothing full stop, while Converloop
 * sends your text to an AI provider *you* configured. Saying only "we collect
 * nothing" here would be true of us and misleading about what actually happens
 * to the words you type.
 *
 * Two disclosures a template would miss, both load-bearing:
 * the bundled free MiMo key sends the text to be spoken to Xiaomi's service
 * even when you never entered a key; and the local database has no app-level
 * encryption on top of iOS file protection, which the product design doc is
 * explicit we must not claim.
 */
export const converloopPrivacy = {
	en: {
		intro:
			"Converloop has no servers, requires no account, and collects nothing about you. Your conversations and learning records stay on your device. The only things that leave it are the text and audio you send to an AI provider you configured yourself.",
		sections: [
			{
				title: "What We Do Not Collect",
				body: "The developer of Converloop operates no servers and receives none of your data. There are no accounts, no sign-in, no analytics or telemetry SDK, no advertising, and no third-party tracking. We collect no device identifiers, location, contacts, calendar, or health data, and your conversations, corrections, mastery records, and learner profile are never visible to us.",
			},
			{
				title: "Where Your Data Lives",
				bullets: [
					"Conversations, correction evidence, mastery records, and your learner profile are stored in a database on your device.",
					"Interface preferences — language, appearance, accent colour — are stored in local preferences on your device.",
					"API keys are stored in the iOS Keychain with AfterFirstUnlockThisDeviceOnly protection, and are never included in exported backup files.",
					"This data is protected by iOS's own file protection. Converloop does not apply additional whole-database encryption on top, and we make no such claim.",
				],
			},
			{
				title: "AI Model Services You Choose",
				body: "Converloop provides no AI of its own. You pick a provider in Settings and enter your own API key. To generate replies, corrections, explanations, and translations, the text you type or dictate — along with recent conversation context and a summary of your learning records — is then sent from your device directly to the provider you chose. These requests do not pass through us; we cannot see their contents and cannot control how the provider handles them. That use is governed by the provider's own privacy policy and terms, so please read them before entering a key. Selectable providers currently include OpenAI-compatible endpoints, Anthropic, Google Gemini, DeepSeek, OpenRouter, Qwen, Moonshot (Kimi), Zhipu GLM, and any compatible endpoint whose address you supply.",
			},
			{
				title: "Voice Input and Speech",
				bullets: [
					"By default, Apple's speech recognition runs on your device and no audio is sent anywhere.",
					"Audio reaches a provider only if you deliberately switch to a remote transcription service — an OpenAI-compatible STT endpoint, or Soniox — in Settings.",
					"With Apple's system voices, speech is produced on your device. With a remote text-to-speech service, the text to be spoken is sent to that provider.",
					"Please note: the app ships with a free MiMo (Xiaomi) speech-synthesis key so you can try speech without entering one. If you use that built-in key, the text to be spoken is sent to MiMo's service. You can turn the built-in key off at any time and use your own key or Apple's system voices instead.",
				],
			},
			{
				title: "iCloud",
				body: "If you enable iCloud sync, only your learner profile — native and target language, current level, learning goals and practice preferences — syncs between your own devices through your own iCloud account. Conversations and mastery records are not synced. The data sits in your iCloud, which we cannot access.",
			},
			{
				title: "Diagnostic Reports",
				body: "iOS records Converloop's own crashes and hangs. Those reports are kept on your device, at most fourteen of them, and are never uploaded automatically. They leave your device only if you tap Share under Settings → Diagnostics, and where they go is entirely your choice in the system share sheet. The reports contain Apple-generated call stacks and system information — no conversation text, learning records, or API keys.",
			},
			{
				title: "Children",
				body: "Converloop is not directed at children under 13 and does not knowingly collect information from them. Because the app sends your input to a third-party AI provider of your choosing, and AI-generated content is not fully under our control, we recommend that minors use it with guardian guidance.",
			},
			{
				title: "Your Controls",
				bullets: [
					"Export: Settings → Backup → Export Backup produces a JSON file with all your learning data, keys excluded.",
					"Delete: deleting the app removes all local data. You can also delete individual conversations, learning records, and diagnostic reports inside the app.",
					"Stop all outbound traffic: remove your API keys in Settings, and switch speech back to Apple's on-device options to keep audio entirely local.",
					"Third-party data: anything already sent to an AI provider must be deleted under their policy — we have no ability to do that on your behalf.",
				],
			},
			{
				title: "Changes to This Policy",
				body: 'If this policy changes materially, we will update the "Last updated" date on this page and note it in the release notes of the new version.',
			},
			{
				title: "Contact Us",
				body: "For any privacy question, complaint, or rights request, please email jovidalao@gmail.com.",
			},
		],
	},
	zh: {
		intro:
			"Converloop 没有服务器，不需要注册，也不收集你的任何数据。你的对话和学习记录保存在这台设备上。唯一会离开设备的，是你主动发给你自己配置的 AI 服务商的那些文字和语音。",
		sections: [
			{
				title: "我们不收集什么",
				body: "Converloop 的开发者不运营任何服务器，也不接收你的数据。没有账号、没有注册、没有登录；没有埋点、没有分析 SDK、没有广告、没有第三方追踪。我们不收集设备标识符、位置、通讯录、日历或健康数据；你的对话内容、纠错记录、掌握度和学习档案，我们一概看不到。",
			},
			{
				title: "数据保存在哪里",
				bullets: [
					"对话、纠错证据、掌握度和学习档案保存在设备本地的数据库中。",
					"界面偏好（语言、外观、强调色）保存在设备本地的偏好设置中。",
					"API 密钥保存在 iOS 系统钥匙串，访问级别为 AfterFirstUnlockThisDeviceOnly，并且不会包含在导出的备份文件里。",
					"这些数据受 iOS 自身的文件保护机制保护。Converloop 没有在应用层对本地数据库做额外的整体加密，我们不作此宣称。",
				],
			},
			{
				title: "由你选择的 AI 模型服务",
				body: "Converloop 本身不提供 AI 能力。你需要在设置里选择一家服务商并填入你自己的 API 密钥。之后，为了生成回复、批改、讲解和翻译，你输入或口述的文字，连同为了让模型理解上下文而附带的近期对话内容与学习记录摘要，会直接从你的设备发送给你选择的那家服务商。这些请求不经过我们，我们看不到内容，也无法控制对方如何处理；相关使用受该服务商自己的隐私政策和条款约束，请在填写密钥前阅读。当前可选的服务商包括 OpenAI 兼容端点、Anthropic、Google Gemini、DeepSeek、OpenRouter、Qwen、Moonshot (Kimi)、Zhipu GLM，以及任何你自填地址的兼容端点。",
			},
			{
				title: "语音输入与朗读",
				bullets: [
					"默认使用 Apple 的系统语音识别，在设备上完成，音频不外发。",
					"只有当你主动在设置里切换到远程转写服务（OpenAI 兼容 STT 或 Soniox）时，录音才会发送给该服务商。",
					"使用 Apple 系统语音时，朗读在设备上完成；使用远程 TTS 时，待朗读的文字会发送给该服务商。",
					"请特别注意：App 内置了一个 MiMo（小米）语音合成的免费 Key，方便你不填密钥就能试用朗读。如果你使用这个内置 Key，待朗读的文字会发送给 MiMo 的服务。你可以随时在设置里关闭内置 Key，改用自己的密钥或 Apple 系统语音。",
				],
			},
			{
				title: "iCloud",
				body: "如果你打开 iCloud 同步开关，只有学习档案（母语与学习语言、当前水平、学习目标与练习偏好）会通过你自己的 iCloud 账户在你的设备之间同步。对话内容和掌握度记录不会同步。数据存放在你的 iCloud 里，我们无法访问。",
			},
			{
				title: "诊断报告",
				body: "iOS 会记录 Converloop 自身的崩溃与卡顿。这些报告保存在设备本地，最多 14 份，不会自动上传。只有当你在「设置 → 诊断」里主动点击分享，它们才会离开设备，而且发给谁完全由你在系统分享面板里决定。报告内容是 Apple 生成的调用栈与系统信息，不包含对话内容、学习记录或 API 密钥。",
			},
			{
				title: "儿童",
				body: "Converloop 不面向 13 岁以下儿童，也不会有意收集他们的信息。由于 App 会把你的输入发送给你选择的第三方 AI 服务商，且 AI 生成内容不受我们完全控制，建议未成年人在监护人指导下使用。",
			},
			{
				title: "你的控制权",
				bullets: [
					"导出：设置 → 备份 → 导出备份，得到一个包含你全部学习数据的 JSON 文件（不含密钥）。",
					"删除：删除 App 即清除设备上的全部本地数据；你也可以在应用内单独删除对话、学习记录和诊断报告。",
					"停止外发：删除设置里的 API 密钥即可停止一切对外请求；把语音切回 Apple 系统方案即可让语音完全留在本机。",
					"第三方数据：已经发送给 AI 服务商的内容需要按他们的政策申请删除，我们没有能力代为处理。",
				],
			},
			{
				title: "政策变更",
				body: "如果本政策发生实质变化，我们会更新本页顶部的「最后更新」日期，并在新版本的更新说明中提示。",
			},
			{
				title: "联系我们",
				body: "隐私相关问题、投诉或权利请求，请发送邮件至 jovidalao@gmail.com。",
			},
		],
	},
} as const;

export const converloopSupport = {
	en: {
		intro:
			"Email jovidalao@gmail.com with your device model, iOS version, app version (Settings → About), and roughly how to reproduce the problem.",
		sections: [
			{
				title: "Getting Started",
				body: "Converloop ships with no AI service of its own; it uses your own API key. Open Settings → AI Services, pick a provider, enter the API key you obtained from them, and choose a model. Then go back to the conversation screen and start talking. Speech output can be tried with the app's built-in free MiMo key, so you need no key of your own for that.",
			},
			{
				title: "It Keeps Asking Me to Choose a Model and Enter a Key",
				body: "No usable API key has been saved yet. Check under Settings → AI Services that the key for your chosen provider is filled in and saved. The service-status section at the top of Settings shows which parts are still unconfigured.",
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
				body: "Confirm that Converloop is allowed to use the microphone and speech recognition in iOS Settings. Apple's on-device recognition is the default; if your target language is not supported on-device, switch to a remote transcription service under Settings → Speech, which requires a key.",
			},
			{
				title: "Backing Up and Moving Your Data",
				body: "Settings → Backup → Export Backup produces a JSON file containing your conversations, correction records, and learner profile. For safety, API keys are not included, so you will re-enter them on a new device. Use Import Backup there to restore.",
			},
			{
				title: "On Launch It Says My Learning Data Could Not Be Opened",
				body: "The local database was damaged. The app started on an empty one, and your original data was not deleted — it is kept intact inside the app container. If you have an exported backup, import it to restore. Please send us the diagnostic report along with a description of what happened.",
			},
			{
				title: "Sending a Crash Report",
				body: "Open Settings → Diagnostics → Diagnostic Reports and tap Share at the top right. Reports leave your device only when you share them, and contain no conversation text, learning records, or API keys.",
			},
			{
				title: "Deleting Everything",
				body: "Deleting the app removes all local data. Anything already sent to a third-party AI provider must be deleted through that provider under their policy.",
			},
			{
				title: "Feedback",
				body: "Feature requests, translation problems, and UI bugs are all welcome at jovidalao@gmail.com.",
			},
		],
	},
	zh: {
		intro:
			"遇到问题请发邮件到 jovidalao@gmail.com，写清楚你用的机型、系统版本、App 版本（设置 → 关于）和大致的复现步骤。",
		sections: [
			{
				title: "开始使用",
				body: "Converloop 不自带 AI 服务，需要你用自己的 API 密钥。打开设置 → AI 服务，选择一家服务商，填入你在该服务商申请的 API 密钥并选择模型，然后回到对话页开始聊天。朗读功能可以先用 App 内置的 MiMo 免费 Key 试用，无需自己申请。",
			},
			{
				title: "一直提示「请先在设置里选择模型并填写密钥」",
				body: "说明还没有保存可用的 API 密钥。请在设置 → AI 服务里确认所选服务商下方的密钥已填写并保存；设置顶部的「服务状态」会告诉你哪一项还缺配置。",
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
				body: "部分中转服务的流式接口实现不完整。可以先换一个模型或换一家服务商验证；Base URL 请填到 /v1 这一级。",
			},
			{
				title: "语音输入没反应",
				body: "请确认已在系统设置里允许 Converloop 使用麦克风和语音识别。默认使用 Apple 的设备端识别；如果你的学习语言在本机不受支持，可以在设置 → 语音里换成远程转写服务（需要相应密钥）。",
			},
			{
				title: "怎么备份和迁移数据",
				body: "设置 → 备份 → 导出备份会生成一个 JSON 文件，包含对话、纠错记录和学习档案。出于安全考虑，API 密钥不会包含在备份里，换设备后需要重新填写。在新设备上用「导入备份」恢复。",
			},
			{
				title: "启动时提示「上次的学习数据没能打开」",
				body: "说明本机数据库损坏了。App 已经用一个空数据库启动，原来的数据没有被删除，而是完整保留在应用容器里。如果你之前导出过备份，可以直接导入恢复。请把这个情况连同诊断报告发给我们。",
			},
			{
				title: "怎么把崩溃报告发给你们",
				body: "打开设置 → 诊断 → 诊断报告，点右上角分享。报告只在你点分享时才会离开设备，内容不含对话内容、学习记录或 API 密钥。",
			},
			{
				title: "怎么彻底删除我的数据",
				body: "删除 App 即可清除设备上的全部本地数据。已经发送给第三方 AI 服务商的内容，需要按该服务商的政策向他们申请删除。",
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
