export type Locale = "en" | "zh";

export const ui = {
	en: {
		nav: {
			home: "Home",
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
			moreTitle: "More",
			legalTitle: "Legal",
			converloopDesktop: "Converloop for Desktop",
			converloopIos: "Converloop for iPhone & iPad",
			writing: "Writing",
			source: "Converloop on GitHub",
			email: "Email",
			peeldayPrivacy: "Peelday Privacy",
			peeldayTerms: "Peelday Terms",
			converloopPrivacy: "Converloop Privacy",
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
		converloopDesktop: {
			name: "Converloop for Desktop",
			tagline: "The full learning workspace for macOS and Windows",
			metaDescription:
				"Converloop for Desktop — a local-first AI language tutor for macOS and Windows. Conversation partners, group chat, an auditable evidence timeline, learning projects, and custom Markdown drills, all on local SQLite.",
			status: "macOS available · Windows validated in CI",
			heroEyebrow: "macOS · Windows",
			heroTitle: "A coach beside",
			heroAccent: "your work.",
			heroBody:
				"The roomy build. Longer sessions, side-by-side comparison, a learning record you can actually open and audit, and the tooling to turn a vague goal into a real practice plan.",
			download: "Download for macOS",
			downloadNote: "Apple Silicon + Intel · v0.1.1",
			source: "View source",
			heroChecks: ["Free and open source, AGPL-3.0", "Mastery evidence in local SQLite", "Bring your own model and API keys"],
			shots: {
				// The site draws the macOS window itself, so captures should exclude the app's own chrome.
				chromeHint: "app content only — the site draws the window",
				hero: {
					title: "The conversation workspace",
					note: "A populated ordinary conversation with all three surfaces visible at once: conversation history in the middle, an inline correction on a learner turn, and the Coach panel on the right. Realistic learning content, no empty states or settings.",
					meta: "macOS · 1600×1000",
					alt: "Converloop on macOS showing a conversation with inline corrections, a natural rewrite, and the learning coach",
				},
				correction: {
					title: "One correction, up close",
					note: "Cropped to a single learner turn and its Coach feedback. The error span, the full correction, the natural alternative, and the explanation all have to be readable without opening the image.",
					meta: "macOS · 1400×900",
				},
				group: {
					title: "Group chat with partners",
					note: "A named 2–4 member group conversation mid-thread, with @Name routing visible and two partners having distinct identities. Show the primary speaker and at least one second perspective.",
					meta: "macOS · 1400×900",
				},
				evidence: {
					title: "Evidence timeline for a weak point",
					note: "The learning data view opened on one recurring mastery item, showing its evidence events over time — error, correct, introduced — with the derived status visible.",
					meta: "macOS · 1400×900",
				},
				training: {
					title: "Training Center, populated",
					note: "Scenario practice, dictation, and weak-item quick-drill cards side by side, with a real due count on the quick-drill card.",
					meta: "macOS · 1400×900",
				},
				palette: {
					title: "Command palette open",
					note: "The command palette over a conversation with a fuzzy query typed and several actions matched. Proves the keyboard-first side of the desktop build.",
					meta: "macOS · 1400×900",
				},
			},
			pillarsKicker: "What the desktop build is for",
			pillarsHeading: "Room to actually look at your learning.",
			pillarsBody: "A big screen buys you two things a phone can't: several surfaces at once, and the patience to inspect a record instead of just trusting it.",
			pillars: [
				{ title: "Conversation and Coach together", body: "The reply streams first so practice still feels like a conversation; the tutor works in parallel and its feedback lands beside the turn, not after it." },
				{ title: "An auditable record", body: "Mastery items, their evidence events, and the derived status all sit in local SQLite — open them, inspect them, correct them by hand." },
				{ title: "Plans, not just drills", body: "Turn interview prep or a recurring expression gap into a learning project with observable can-do goals and lesson drafts." },
			],
			partners: {
				kicker: "Conversation partners",
				heading: "Practice with people, not a blank chatbot.",
				body:
					"Choose a distinct partner for an ordinary conversation, or bring 2–4 of them into a group chat with @Name routing, a primary speaker, mute, and leave controls. Each keeps their own identity, voice, accent, register, and pace — while sharing one learning-only profile. No partner builds a private relationship history.",
				points: [
					"Editable built-in partners plus your own, with persistent voice and register",
					"Named 2–4 member group chats with @Name routing and a primary speaker",
					"Shared mastery across every partner; no retained personal facts",
				],
			},
			memory: {
				kicker: "Evidence, not mysterious AI memory",
				heading: "The model observes. Code decides.",
				body:
					"Converloop keeps structured mastery records and the evidence behind them in local SQLite. The model can observe and propose; deterministic code owns counts, state changes, review selection, and persistence. Marking an item known records an explicit override — it does not invent a successful attempt or rewrite the evidence.",
				points: [
					{ title: "Traceable evidence", body: "Error, correct, introduced, and gap events are all recorded with modality, assistance, elicitation, self-repair, and response latency." },
					{ title: "Review that reads the record", body: "Due items come from weakness plus an event-derived FSRS-lite stability and difficulty model, then weave back into conversation and training." },
					{ title: "Editable by hand", body: "Inspect evidence, edit records directly, preview natural-language edits before writeback, and merge likely duplicate keys on confirmation." },
					{ title: "Known items as scaffolds", body: "What you already own gets reused for explanation and transfer, so the system isn't only pointed at your mistakes." },
				],
			},
			training: {
				kicker: "Training and projects",
				heading: "Turn weak spots into the next activity.",
				body:
					"Review is woven back into use rather than parked in a separate tab. Tap a recurring grammar point to diagnose and practise it in chat, run scenario practice, or build listening and dictation out of your own material with Conversation Replay.",
				items: [
					{ title: "Focused lessons", body: "Teacher-style sessions around grammar, an expression gap, daily review, or a goal you define yourself." },
					{ title: "Learning projects", body: "The Task Agent turns interview prep or a business-email need into a project with can-do goals, a first-attempt task, and a transfer task." },
					{ title: "Material import", body: "Bring in text, Markdown, CSV, JSON, or PDF locally to ground a project in a real task you actually have to do." },
					{ title: "Custom drills", body: "Write a drill as a `converloop/drill@1` Markdown document — frontmatter defines mechanics, body sections define prompts — then share it as one file." },
				],
			},
			capabilities: {
				kicker: "Capabilities",
				heading: "Shape the tutor, then audit what it did.",
				body:
					"Every built-in capability — correction, explanation, bilingual reading, selection analysis, conversation actions — can be enabled, extended, or replaced. Write your own observers, conversation actions, and reply transformers, with proposal-based access to long-term memory and auditable runs.",
				points: [
					"Enable, disable, or nudge any built-in capability with your own instructions",
					"Custom observers, actions, and reply transformers with guarded memory writes",
					"Every run is auditable; memory writes stay proposals until code confirms them",
				],
			},
			craftKicker: "Desktop craft",
			craftHeading: "Built like a desktop app.",
			craft: [
				{ title: "Command palette", body: "Fuzzy-find any action without leaving the keyboard." },
				{ title: "Editable shortcuts", body: "Rebind what you use; the defaults stay out of the way." },
				{ title: "Themes and accents", body: "Light, dark, and an accent colour that isn't mine." },
				{ title: "English and Chinese", body: "Full UI in both, including onboarding." },
			],
			providers: {
				kicker: "Bring your own intelligence",
				heading: "You choose the model. It isn't chosen for you.",
				body: "Configure a provider once and it stays separate from your learning data. Local speech options can keep supported workflows on device.",
				rows: [
					{ label: "Models", body: "OpenAI-compatible endpoints, Anthropic, Gemini, plus Claude and ChatGPT subscription sign-in paths." },
					{ label: "Speech in", body: "Soniox streaming, OpenAI-compatible transcription, and local Parakeet or Qwen3-ASR." },
					{ label: "Speech out", body: "Edge Read Aloud and MiMo TTS, with per-partner voices." },
					{ label: "Credentials", body: "Device-bound encrypted storage. API keys and OAuth tokens never enter a backup." },
				],
			},
			data: {
				kicker: "Local-first by design",
				heading: "Your learning history stays inspectable.",
				points: [
					"Conversations, mastery evidence, profiles, and non-secret settings live on your device",
					"Backup and restore as readable JSON; retired personal memories are never exported",
					"Network use is explicit — only what a request needs goes to the provider you configured",
					"AGPL-3.0, so the correction logic and memory boundary can be checked rather than trusted",
				],
			},
			release: {
				kicker: "Get it",
				heading: "macOS today, Windows from source.",
				body: "Packaged releases currently provide macOS builds for Apple Silicon and Intel. Windows is validated in CI and can be run from source.",
				macTitle: "macOS v0.1.1",
				macBody: "Pick the Apple Silicon or Intel disk image from the latest release.",
				winTitle: "Windows",
				winBody: "Validated in CI; build and run from the repository while packaged installers are in progress.",
			},
			final: {
				heading: "Open it beside whatever you're already doing.",
				body: "Free, open source, and yours to inspect.",
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
			moreTitle: "更多",
			legalTitle: "法律",
			converloopDesktop: "Converloop 桌面端",
			converloopIos: "Converloop iPhone 与 iPad 版",
			writing: "写作",
			source: "Converloop 源代码",
			email: "邮件",
			peeldayPrivacy: "贴贴手帐隐私政策",
			peeldayTerms: "贴贴手帐用户协议",
			converloopPrivacy: "Converloop 隐私政策",
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
		converloopDesktop: {
			name: "Converloop 桌面端",
			tagline: "面向 macOS 与 Windows 的完整学习工作区",
			metaDescription:
				"Converloop 桌面端 — 面向 macOS 与 Windows 的本地优先 AI 语言导师。对话伙伴、群聊、可审阅的证据时间线、学习项目和自定义 Markdown 训练，全部跑在本地 SQLite 上。",
			status: "macOS 现已提供 · Windows 已在 CI 验证",
			heroEyebrow: "macOS · Windows",
			heroTitle: "工作旁边的",
			heroAccent: "一位语言教练。",
			heroBody:
				"更宽敞的那一版。适合长时间练习、对照查看，也让你真正能打开、能审阅自己的学习记录，并把一个模糊的目标变成具体的练习计划。",
			download: "下载 macOS 版",
			downloadNote: "Apple 芯片 + Intel · v0.1.1",
			source: "查看源代码",
			heroChecks: ["免费开源，AGPL-3.0", "掌握证据存在本地 SQLite", "自选模型与 API 密钥"],
			shots: {
				// 网站自己会画 macOS 窗口，所以截图不要带 App 自身的标题栏。
				chromeHint: "只截 App 内容——窗口由网站绘制",
				hero: {
					title: "对话工作区",
					note: "一段有内容的普通对话，三个界面同时可见：中间是对话历史，学习者的某一轮上有行内纠错，右侧是学习教练面板。用真实的学习内容，不要空状态或设置页。",
					meta: "macOS · 1600×1000",
					alt: "Converloop macOS 界面，展示对话、行内纠错、地道改写和学习教练",
				},
				correction: {
					title: "一次纠错的特写",
					note: "只裁一轮学习者发言和对应的教练反馈。错误片段、完整订正、地道说法和解释，都要不用点开大图就能看清。",
					meta: "macOS · 1400×900",
				},
				group: {
					title: "多伙伴群聊",
					note: "一个已命名的 2–4 人群聊进行中，能看到 @Name 路由，两位伙伴身份明显不同。展示主要发言者和至少一个第二视角。",
					meta: "macOS · 1400×900",
				},
				evidence: {
					title: "某个弱项的证据时间线",
					note: "学习数据视图打开某一条反复出现的掌握项，按时间展示它的证据事件——出错、用对、新引入——并能看到推导出的状态。",
					meta: "macOS · 1400×900",
				},
				training: {
					title: "有内容的训练中心",
					note: "情景演练、听写和弱项闪练的卡片并排，弱项闪练卡上带一个真实的到期数量。",
					meta: "macOS · 1400×900",
				},
				palette: {
					title: "打开的命令面板",
					note: "命令面板浮在对话上方，已经输入了模糊查询并匹配出若干动作。用来证明桌面端键盘优先的那一面。",
					meta: "macOS · 1400×900",
				},
			},
			pillarsKicker: "桌面端是干什么的",
			pillarsHeading: "有地方真正看清自己的学习。",
			pillarsBody: "大屏幕带来两样手机给不了的东西：多个界面同时在场，以及愿意花时间去查一条记录，而不只是相信它。",
			pillars: [
				{ title: "对话与教练同时在场", body: "回复先流出来，练习依然像对话；导师在旁边并行工作，反馈落在那一轮旁边，而不是等聊完再给。" },
				{ title: "可审阅的记录", body: "掌握项、它们的证据事件和推导状态都在本地 SQLite 里——能打开、能查、能手动改。" },
				{ title: "是计划，不只是刷题", body: "把面试准备或某个反复出现的表达缺口，变成一个带可观察 can-do 目标和课程草稿的学习项目。" },
			],
			partners: {
				kicker: "对话伙伴",
				heading: "跟具体的人练，而不是空白的聊天机器人。",
				body:
					"普通对话里挑一位伙伴，或者把 2–4 位拉进群聊，支持 @Name 路由、主要发言者、静音和退出。每位伙伴保有自己的身份、声音、口音、语域和语速——同时共用同一份纯学习档案。没有伙伴会攒下私人关系历史。",
				points: [
					"内置伙伴可编辑，也可以自己建，声音与语域会持续保持",
					"已命名的 2–4 人群聊，支持 @Name 路由和主要发言者",
					"掌握度在所有伙伴之间共享；不保留任何个人事实",
				],
			},
			memory: {
				kicker: "是证据，不是玄学 AI 记忆",
				heading: "模型负责观察，代码负责决定。",
				body:
					"Converloop 把结构化的掌握记录和背后的证据存在本地 SQLite 里。模型可以观察和提议；计数、状态变化、复习选取和持久化都由确定性的代码说了算。把某项标为「已掌握」记录的是一次显式覆盖——不会伪造一次正确作答，也不会改写底层证据。",
				points: [
					{ title: "可追溯的证据", body: "出错、用对、新引入和缺口事件都会记录下来，并带上模态、辅助程度、引出方式、自我修正和反应时长。" },
					{ title: "读得懂记录的复习", body: "到期项来自弱项，加上由事件推导的 FSRS-lite 稳定性与难度模型，然后编回对话和训练里。" },
					{ title: "可以手动修", body: "查看证据、直接改记录、用自然语言编辑并先预览再写回，确认后合并疑似重复的条目。" },
					{ title: "已掌握的当脚手架", body: "你已经会的东西会被拿来支撑解释和迁移，系统不会只盯着你的错误。" },
				],
			},
			training: {
				kicker: "训练与项目",
				heading: "把弱项变成下一个活动。",
				body:
					"复习被编回使用场景里，而不是停在另一个标签页。点一下反复出错的语法点，就在对话里诊断和练习；也可以跑情景演练，或用「对话回放」把你自己的材料做成听力和听写。",
				items: [
					{ title: "专项课", body: "围绕语法、某个表达缺口、每日复习，或你自己定义的目标，开一段老师式的课。" },
					{ title: "学习项目", body: "任务 Agent 把面试准备或商务邮件这类需求，变成带 can-do 目标、首次尝试任务和迁移任务的项目。" },
					{ title: "材料导入", body: "在本地导入文本、Markdown、CSV、JSON 或 PDF，让项目扎在你真正要做的那件事上。" },
					{ title: "自定义训练", body: "用 `converloop/drill@1` Markdown 文档写训练——frontmatter 定义机制，正文小节定义题目——然后一个文件就能分享。" },
				],
			},
			capabilities: {
				kicker: "能力库",
				heading: "调教这位导师，然后审阅它做了什么。",
				body:
					"每一项内置能力——纠错、解释、双语阅读、选中分析、对话动作——都能开关、扩展或替换。你也可以写自己的观察者、对话动作和回复转换器；它们对长期记忆只有提议权，每次运行都可审阅。",
				points: [
					"任意开关内置能力，或用你自己的话去微调它",
					"自定义观察者、动作与回复转换器，记忆写入受守卫",
					"每次运行可审阅；记忆写入在代码确认之前都只是提议",
				],
			},
			craftKicker: "桌面端的讲究",
			craftHeading: "按桌面应用的标准做。",
			craft: [
				{ title: "命令面板", body: "不离开键盘，模糊搜索任何动作。" },
				{ title: "可改快捷键", body: "常用的自己绑；默认值不碍事。" },
				{ title: "主题与强调色", body: "浅色、深色，以及一个不是我定的强调色。" },
				{ title: "中英文界面", body: "两种语言完整覆盖，包括引导流程。" },
			],
			providers: {
				kicker: "自带智能",
				heading: "模型你自己选，不是替你选好。",
				body: "配置一次服务商，它就和你的学习数据彼此独立。本地语音方案还能让受支持的流程留在设备上。",
				rows: [
					{ label: "模型", body: "OpenAI 兼容端点、Anthropic、Gemini，以及 Claude 和 ChatGPT 的订阅登录路径。" },
					{ label: "语音输入", body: "Soniox 流式、OpenAI 兼容转写，以及本地 Parakeet 或 Qwen3-ASR。" },
					{ label: "语音输出", body: "Edge 朗读与 MiMo TTS，可为每位伙伴配不同声音。" },
					{ label: "凭据", body: "设备绑定的加密存储。API 密钥和 OAuth token 永远不进备份。" },
				],
			},
			data: {
				kicker: "本地优先的设计",
				heading: "你的学习历史始终可查。",
				points: [
					"对话、掌握证据、档案和非敏感设置都留在你的设备上",
					"备份和恢复都是可读的 JSON；已废弃的个人记忆永远不会被导出",
					"网络使用是明确的——只有请求需要的内容会发给你配置的服务商",
					"AGPL-3.0，纠错逻辑和记忆边界可以查，而不用只靠相信",
				],
			},
			release: {
				kicker: "获取",
				heading: "macOS 今天就能用，Windows 从源码跑。",
				body: "当前打包发布提供 Apple 芯片和 Intel 的 macOS 版本。Windows 已在 CI 中验证，可以从源码构建运行。",
				macTitle: "macOS v0.1.1",
				macBody: "在最新发布页选择 Apple 芯片版或 Intel 版磁盘映像。",
				winTitle: "Windows",
				winBody: "已在 CI 验证；打包安装程序仍在推进中，目前可从仓库构建运行。",
			},
			final: {
				heading: "就开在你手头那件事旁边。",
				body: "免费、开源，随你查看。",
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
