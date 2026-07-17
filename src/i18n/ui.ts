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
		home: {
			greeting: "Hi, I'm jovidalao",
			intro:
				"Indie developer based in Hobart. I build thoughtful apps and occasionally write about how I learn and build.",
			appsHeading: "Apps I build",
			peeldayBadge: "Now on the App Store",
			peeldayTitle: "Peelday",
			peeldayDescription:
				"An offline-first visual diary with ticket-stub aesthetics. Collect photos, stickers, and notes on paper that's just yours — one page per day.",
			peeldayCta: "Learn more",
			converloopBadge: "macOS available · More platforms in development",
			converloopTitle: "Converloop",
			converloopDescription:
				"A local-first AI language tutor that turns conversation into correction, learning memory, and targeted practice. macOS available now; iPhone, iPad, and Windows in development.",
			converloopCta: "Learn more",
		},
		peelday: {
			name: "Peelday",
			tagline: "A visual diary for everyday joy",
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
		converloop: {
			metaDescription:
				"Converloop is a local-first AI language tutor that turns every conversation into correction, learning memory, and targeted practice. Download for macOS; iPhone, iPad, and Windows are in development.",
			tagline: "Local-first AI language tutor · macOS available now",
			launch: {
				status: "macOS available now · iPhone, iPad & Windows in development",
				heroEyebrow: "Your conversations become your curriculum",
				heroTitle: "Speak. Notice. Remember.",
				heroAccent: "Reuse.",
				heroBody:
					"Converloop keeps practice moving like a real conversation, corrects you in context, and turns every gap into learning memory that can return when it matters.",
				download: "Download for macOS",
				downloadNote: "Apple Silicon + Intel · v0.1.1",
				source: "View source",
				trust: "Free and open source · bring your own provider · portable learning backup",
				preview: {
					desktopLabel: "Desktop · deep practice",
					sidebar: ["Release roleplay", "Coffee shop", "Weekly recap"],
					conversation: "Release roleplay",
					aiLine: "How did the demo go?",
					userPre: "It went great — I ",
					userWrong: "have fix",
					userRight: "fixed",
					userPost: " the login bug.",
					correction: "Finished action → use the simple past.",
					phoneLabel: "iPhone · quick turns",
					phonePrompt: "Ready for one more turn?",
					phoneReply: "Tell me about the decision in one sentence.",
					chips: ["Give me a topic", "Make it simpler", "Roleplay", "Recap"],
				},
				loop: {
					kicker: "One learning loop",
					heading: "The useful part of a conversation doesn't disappear",
					body: "Every platform follows the same four-step contract, so practice feels familiar even when the interface adapts to the device.",
					steps: [
						{ number: "01", title: "Express", body: "Write or speak naturally. Ask for a topic, simpler wording, a roleplay, or a recap whenever you need momentum." },
						{ number: "02", title: "Notice", body: "See the exact span that needs work, a natural rewrite, and an explanation in the conversation itself." },
						{ number: "03", title: "Remember", body: "Errors, successful uses, expression gaps, and listening misses become structured learning signals." },
						{ number: "04", title: "Reuse", body: "Due material returns through conversation, review, dictation, listening, and focused practice." },
					],
				},
				platforms: {
					kicker: "One product, native rhythms",
					heading: "Familiar logic. The right experience for each screen.",
					body: "You should never relearn the product when you change devices. The learning model stays consistent; navigation, input, and density adapt.",
					items: [
						{
							tag: "macOS · available",
							title: "A coach beside your work",
							body: "A roomy conversation workspace for longer sessions, comparison, configuration, and migration.",
							points: ["Keyboard-first navigation and slash commands", "Persistent context for conversations and learning detail", "Full local backup plus cross-platform portable export"],
						},
						{
							tag: "iPhone · in development",
							title: "Practice in the gaps of your day",
							body: "Fast entry, thumb-friendly actions, and voice make a useful turn possible before the moment passes.",
							points: ["Quick intent chips instead of command memorisation", "Swipe, long-press, dictation, and spoken playback", "Background audio for listening and shadowing"],
						},
						{
							tag: "iPad · in development",
							title: "A focused learning desk",
							body: "A persistent split view keeps conversations visible while the larger canvas supports focused practice.",
							points: ["Sidebar and conversation stay visible together", "Hardware-keyboard shortcuts match the desktop model", "Touch remains first-class when the keyboard is away"],
						},
					],
				},
				features: {
					kicker: "Built around real practice",
					heading: "Everything behind the conversation",
					items: [
						{ title: "Inline correction", body: "The wrong span, the fix, and a natural rewrite stay attached to the sentence you actually wrote." },
						{ title: "Learning memory", body: "The app remembers discrete strengths and gaps instead of treating every conversation as a blank slate." },
						{ title: "Listening and dictation", body: "Turn your own conversations into listening material, then practise the words you genuinely missed." },
						{ title: "Roles and branches", body: "Change the scene, swap roles, adjust difficulty, or branch without losing the original conversation." },
						{ title: "Provider freedom", body: "Use supported remote providers or compatible local endpoints and keep your choice separate from your learning data." },
						{ title: "Readable, portable data", body: "Export a documented JSON backup that both desktop and mobile can understand, with native detail preserved." },
					],
				},
				continuity: {
					kicker: "Carry learning, not friction",
					heading: "One learning history, adapted to every device",
					body: "Converloop's portable backup keeps the shared learning model stable across platforms. Transfer is explicit and user-controlled today — not a hidden cloud sync.",
					file: "converloop-backup.json",
					points: [
						{ title: "Shared core", body: "Conversations, messages, corrections, learning items, review state, and portable preferences move together." },
						{ title: "Safe adaptation", body: "Desktop-only tools and mobile-only settings stay native instead of being flattened or silently deleted." },
						{ title: "Preview before import", body: "See the source platform and import scope, then confirm replace or merge behaviour before data changes." },
					],
				},
				privacy: {
					badge: "Local-first, accurately described",
					heading: "Your learning history stays yours",
					body: "Conversations and learning data are stored on your device by default. When you use a remote model or speech provider, only the content needed for that request is sent to the provider you chose.",
					points: ["No Converloop account required", "Provider credentials stay in secure storage", "Credentials are excluded from portable backups"],
				},
				release: {
					kicker: "Get Converloop",
					heading: "Start on macOS today",
					body: "The current public release includes download assets for Apple Silicon and Intel Macs. The code is open for inspection, contribution, and self-hosted experimentation.",
					macTitle: "macOS v0.1.1",
					macBody: "Choose the Apple Silicon or Intel disk image from the latest release.",
					roadTitle: "iPhone, iPad & Windows",
					roadBody: "Native experiences are in active development. Public installers are not available yet.",
				},
				faq: {
					heading: "Good to know",
					items: [
						{ title: "Does Converloop sync automatically?", body: "Not yet. Use the portable backup to move shared learning data between supported builds with an explicit import preview." },
						{ title: "Does everything stay offline?", body: "Your database is local by default. Requests to a remote AI or speech provider send the content required to complete that request." },
						{ title: "Do I need a Converloop account?", body: "No. You choose and configure the model or speech providers you want to use." },
					],
				},
				final: {
					heading: "Make every conversation teach the next one.",
					body: "Download the macOS app or follow development in the open.",
				},
			},
			heroTitleHtml: 'Converse. Correct. <span class="cl-accent">Remember.</span> Repeat.',
			heroSubtitle:
				"An AI tutor that talks with you, corrects the sentence you just wrote, and remembers every gap — so your next conversation already knows where you're weak.",
			viewOnGithub: "View on GitHub",
			heroNote:
				"Free & open source · AGPL-3.0 · bring your own provider · local data by default",
			demo: {
				convo: "conversation · english b2",
				aiOpen: "How did the demo go?",
				userPre: "It went great — I ",
				userDel: "have fix",
				userIns: "fixed",
				userPost: " the login bug.",
				natural: "It went great — I nailed the login bug.",
				issueCat: "Grammar",
				issueSev: "Minor",
				issueExp: "Simple past for a finished action — “fixed”, not “have fix”.",
				reply: "Nice work — did QA sign off before you shipped it?",
			},
			intro: {
				kicker: "What it is",
				heading: "A chat app built for learning a language",
				body: "Converloop isn't a general-purpose chatbot with a learning skin. It starts from conversation and turns every exchange into precise learning — a chat partner built for language learning, and an AI-native learning app at the same time.",
				pillars: [
					{
						title: "A language-learning-native chatbot",
						body: "Chatting with it is the lesson. Corrections land on the sentence you just wrote, replies come bilingual or fully explained, any text is explained the moment you select it, and when you're stuck the input box suggests how to keep going — all the help lives inside the conversation, never interrupting it.",
					},
					{
						title: "An AI-native language-learning app",
						body: "It remembers you. Every slip, every win, every expression gap is recorded precisely — a real picture of where you're weak — and due items quietly weave back into your conversations and drills. The more you talk, the better it knows you.",
					},
				],
			},
			methodsKicker: "Practice modes",
			methodsHeading: "Many ways to practice — not just chat",
			methodsIntro:
				"Conversation is just the start. Each mode below feeds the same learning memory — so listening, dictation, spin-off chats, and drills all reinforce the exact gaps your conversations turned up.",
			listening: {
				title: "Ear-training, from your own conversations",
				body: "Every chat becomes listening material. The AI's replies and the polished version of your own lines play back in order — so you train on language you've actually used, not a generic audio deck.",
				points: [
					"Repeat a line, slow it down, set a gap to shadow it, and loop.",
					"Reveal the text only once you've caught it by ear.",
					"Built from the conversations you pick — your words, your topics.",
				],
				mock: {
					source: "from 2 conversations · 14 lines",
					side: "Reply",
					line: "Did QA sign off before we shipped the fix?",
					showText: "Show text",
					repeatLabel: "Repeat",
					repeatVal: "2×",
					speedLabel: "Speed",
					speedVal: "0.9×",
					gapLabel: "Gap",
					gapVal: "2s",
					loopLabel: "Loop",
				},
			},
			dictation: {
				title: "Dictation — listen, type it back, see what you missed",
				body: "Pick a theme and Converloop reads out sentences one at a time. Type exactly what you hear, then it marks your transcription against the real sentence and explains the gap — no multiple choice, you produce every word.",
				points: [
					"Replay at normal speed or slowed to 0.7× — as many times as you need.",
					"Your replay count quietly tunes how hard the next sentence is.",
					"Words you mishear are saved to a separate listening memory and woven back into later sentences.",
				],
				mock: {
					prompt: "Listen and type what you hear",
					rate: "0.7×",
					typed: ["Can", "you", "work", "me", "through", "the", "rollback", "plan"],
					missIndex: 2,
					verdict: "Missed 1 word",
					pre: "Can you ",
					miss: "walk",
					post: " me through the rollback plan?",
					note: "“walk” → saved to a separate listening memory, woven back into a later sentence.",
				},
			},
			derive: {
				title: "Derive new conversations — one thread becomes many",
				body: "Reached a good moment? Branch it. From any point you can spin off a fresh conversation — harder or easier, roles reversed, a new scene, or picked up again the next day. The original stays right where it was.",
				points: [
					"Continue from here — branch off without losing the original.",
					"Make it harder or easier — same situation, retuned to your level.",
					"Swap roles, change the scene, or continue the next day.",
				],
				mock: {
					cap: "From this conversation…",
					actions: [
						{ icon: "branch", label: "Continue from here" },
						{ icon: "harder", label: "Make it harder" },
						{ icon: "easier", label: "Make it easier" },
						{ icon: "swap", label: "Swap roles" },
						{ icon: "scene", label: "Change scene" },
						{ icon: "calendar", label: "Continue next day" },
					],
				},
			},
			drills: {
				title: "Focused drills — a training center around your weak spots",
				body: "Open the Practice Center and pick a drill — scenario practice, dictation, or a weak-spot quickfire. Each one builds a session around what's due for review. Or write your own and export it as a single file.",
				points: [
					"Scenario drills — respond inside concrete, on-topic situations.",
					"Weak-spot quickfire — your due items, turned into production tasks.",
					"Write a custom drill and share it as one file.",
				],
				mock: {
					title: "Practice Center",
					drills: [
						{ icon: "zap", name: "Scenario drills", desc: "Respond inside concrete situations" },
						{ icon: "pen", name: "Dictation", desc: "Type exactly what you hear" },
						{ icon: "target", name: "Weak-spot drill", desc: "Your due items as quick tasks", badge: "6 due" },
					],
				},
			},
			flow: {
				kicker: "Under the hood",
				heading: "What happens in one turn",
				intro:
					"Two agents run on every sentence — one keeps the conversation natural and hands you help the moment you're stuck, the other grades and explains in the background. What they find becomes one learning memory, reused across your conversations, reviews, and every practice mode.",
				inParallel: "in parallel",
				signals: "signals",
				whenDue: "reused",
				input: {
					title: "You write or speak",
					body: "A sentence in your target language — typed, or spoken and transcribed on the spot.",
				},
				convAgent: {
					tag: "Conversation agent",
					title: "A natural reply — plus help on tap",
					body: "In character and at your level, so the talk keeps moving. Stuck? It offers a draft, the natural phrasing, or a few words — and any reply can go bilingual or fully explained.",
				},
				tutorAgent: {
					tag: "Tutor agent",
					title: "Correction & explanation, in-line",
					body: "On the exact sentence you wrote: error span, the fix, a natural rewrite, grammar on tap — and any text you select gets explained too.",
				},
				memory: {
					title: "Local learning memory",
					body: "Each turn records discrete signals — error · used correctly · expression gap · newly introduced — gathered into one memory on your device.",
				},
				review: {
					title: "One memory, called on everywhere",
					body: "Due items weave back into your next conversation — and wait for you in review, dictation, listening, and focused drills. The same memory powers every mode.",
				},
				loopback: "↺ and the loop repeats — each turn a little sharper",
			},
			showcase: {
				kicker: "In the conversation",
				heading: "The conversation is the interface",
				intro:
					"Correction, natural phrasing, help composing your turn, bilingual reading, and explanation all live where the learning moment happens — inside the conversation.",
				correction: {
					title: "Correction stays attached to what you wrote",
					body: "The exact error is marked in place. The fix sits beside it, a more natural version appears underneath, and the grammar explanation stays one layer away — no separate report to decode.",
					naturalLabel: "Natural version",
				},
				slash: {
					title: "Stuck for words? Help is right where you type",
					body: "When your turn stalls, help begins in the composer. Type “/” on desktop, or tap the same intent as a chip on iPhone and iPad. Start a topic, simplify the reply, enter a roleplay, recap the thread, or ask how to say exactly what you mean.",
					inputPlaceholder: 'Type a message, or "/" for help…',
					foot: "The same intents become touch chips on iPhone and iPad",
					rows: [
						{ name: "topic", desc: "Suggest a topic and start the next turn" },
						{ name: "simpler", desc: "Ask your partner to say it more simply" },
						{ name: "roleplay", desc: "Move into a concrete scene and role" },
						{ name: "recap", desc: "Summarise what mattered in this thread" },
						{ name: "how", args: "<what you mean>", desc: "Show the natural way to say it" },
					],
				},
				selection: {
					title: "Select anything — explained, not just translated",
					body: "Highlight a word or phrase anywhere in the app and a small island floats up: Analyze, Read aloud, or Add to your learning data. Analyze tells you why the phrase works — the nuance, and how you'd reuse it — then one click saves it to memory for review.",
					actions: { analyze: "Analyze", speak: "Read aloud", add: "Add" },
					sourcePre: "Did QA ",
					sourceHl: "sign off",
					sourcePost: " before we shipped the fix?",
					analysis:
						"A phrasal verb for giving formal approval — here QA “signs off,” i.e. officially OKs the release before it goes out. Stronger than just “agree.” Reuse it: “Can you sign off on this?”",
				},
				reply: {
					title: "Every reply — in two languages, or fully explained",
					body: "Only half-get a reply? Turn on Bilingual reading and each sentence keeps its original text with your native translation tucked underneath — auto-open it on every turn, or toggle it per reply. Or tap Explain for a breakdown pitched to what you’ve already mastered. Both live on the reply itself — never a separate tab.",
					bubble: [
						{ target: "Nice work.", native: "干得漂亮。" },
						{ target: "Did QA sign off before you shipped it?", native: "QA 在你上线之前签字确认了吗？" },
					],
					actions: { speak: "Read aloud", explain: "Explain", bilingual: "Bilingual" },
					explainLabel: "Explanation",
					explainBody:
						"“sign off” = give formal approval. You already use “ship”, so the new piece here is sign off (on) — the official OK before a release goes out.",
				},
			},
			featuresKicker: "Local-first & open",
			featuresHeading: "And the system behind it",
			featuresIntro:
				"The conversation is the star — but everything around it is built to stay private, inspectable, and yours.",
			features: [
				{
					title: "Inline correction",
					body: "No separate report to decode. The wrong span is struck through and the fix sits right beside it, with grammar details and natural rewrites one tap away.",
				},
				{
					title: "Learning memory",
					body: "Every slip, win, and gap becomes a signal in local memory, so due reviews resurface inside your next conversation.",
				},
				{
					title: "Expression gaps",
					body: "Stuck mid-sentence? Type in your own language and get the natural target-language phrasing — explained, not just translated.",
				},
				{
					title: "Capability library",
					body: "See every capability the AI runs, switch any on or off, nudge it with your own instructions, or build a new one — and share it as a single file.",
				},
				{
					title: "Bring your own model",
					body: "OpenAI-compatible, Anthropic, Gemini, or supported subscription login. macOS is available now; mobile and Windows builds are in development.",
				},
				{
					title: "Local-first & private",
					body: "No Converloop account. Learning data stays on your device by default; remote providers receive only the content needed for each request. Backups are readable and portable.",
				},
			],
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
			peelday: "贴贴手账",
			converloop: "Converloop",
			menu: "菜单",
		},
		theme: {
			light: "浅色",
			dark: "深色",
			system: "跟随系统",
		},
		home: {
			greeting: "你好，我是 jovidalao",
			intro: "base 在霍巴特的独立开发者。我在做有意思的应用，偶尔写写学习和构建的过程。",
			appsHeading: "我开发的应用",
			peeldayBadge: "App Store 已上线",
			peeldayTitle: "贴贴手账",
			peeldayDescription:
				"贴贴手账是一款离线优先的视觉日记，带有票根美学。每天一页，收集照片、贴纸和文字——只属于你自己的纸张。",
			peeldayCta: "了解更多",
			converloopBadge: "macOS 现已提供 · 更多平台开发中",
			converloopTitle: "Converloop",
			converloopDescription:
				"一款本地优先的 AI 语言导师，把对话变成纠错、学习记忆和针对性练习。macOS 现已提供，iPhone、iPad 与 Windows 正在开发。",
			converloopCta: "了解更多",
		},
		peelday: {
			name: "贴贴手账",
			tagline: "记录日常小确幸的视觉手账",
			metaDescription:
				"贴贴手账（Peelday）— 离线优先的 iOS 视觉日记。每日贴纸页、智能抠图、日历浏览、小组件，以及可选的 iCloud 同步。",
			heroSubtitle:
				"记录日常小确幸。照片、贴纸和笔记——保存在只属于你自己的纸张上。",
			heroImageAlt: "贴贴手账应用截图",
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
		converloop: {
			metaDescription:
				"Converloop 是一款本地优先的 AI 语言导师，把每次对话变成就地纠错、学习记忆和针对性练习。macOS 版现已可下载，iPhone、iPad 与 Windows 版正在开发。",
			tagline: "本地优先的 AI 语言导师 · macOS 现已提供",
			launch: {
				status: "macOS 现已提供 · iPhone、iPad 与 Windows 正在开发",
				heroEyebrow: "让你的每次对话，都成为下一次学习的素材",
				heroTitle: "表达。发现。记\u2060住。",
				heroAccent: "再用出来。",
				heroBody:
					"Converloop 让练习像真实对话一样自然推进，在语境里纠正你，并把每个表达缺口变成会在恰当时机再次出现的学习记忆。",
				download: "下载 macOS 版",
				downloadNote: "Apple 芯片 + Intel · v0.1.1",
				source: "查看源代码",
				trust: "免费开源 · 自选服务提供商 · 学习数据可迁移",
				preview: {
					desktopLabel: "桌面端 · 深度练习",
					sidebar: ["发布演练", "咖啡店", "每周回顾"],
					conversation: "发布演练",
					aiLine: "How did the demo go?",
					userPre: "It went great — I ",
					userWrong: "have fix",
					userRight: "fixed",
					userPost: " the login bug.",
					correction: "已经结束的动作 → 使用一般过去时。",
					phoneLabel: "iPhone · 随手练一轮",
					phonePrompt: "准备好再说一轮了吗？",
					phoneReply: "用一句话告诉我，你最后做了什么决定。",
					chips: ["给我一个话题", "说简单一点", "角色扮演", "总结一下"],
				},
				loop: {
					kicker: "一套学习闭环",
					heading: "一段对话里真正有用的部分，不会聊完就消失",
					body: "每个平台都遵循同一套四步逻辑；界面会适应设备，但学习方法不需要重新摸索。",
					steps: [
						{ number: "01", title: "表达", body: "自然地写或说。需要推动时，随时要一个话题、简化表达、进入角色扮演或回顾重点。" },
						{ number: "02", title: "发现", body: "直接看到需要改进的片段、地道改写，以及紧贴原句的解释。" },
						{ number: "03", title: "记住", body: "错误、正确运用、表达缺口和听力遗漏，会成为结构化的学习信号。" },
						{ number: "04", title: "再用", body: "到期内容会回到对话、复习、听写、听力和专项练习里。" },
					],
				},
				platforms: {
					kicker: "同一个产品，各自原生的节奏",
					heading: "逻辑始终熟悉，体验真正适合当前屏幕",
					body: "换设备不应该等于重新学习产品。学习模型保持一致，导航、输入方式和信息密度则顺应平台。",
					items: [
						{
							tag: "macOS · 现已提供",
							title: "工作旁边的一位语言教练",
							body: "宽阔的对话工作区适合长时间练习、对照查看、配置和数据迁移。",
							points: ["键盘优先的导航与斜杠命令", "持续可见的对话上下文和学习详情", "完整本地备份，以及跨平台便携导出"],
						},
						{
							tag: "iPhone · 正在开发",
							title: "把一天里的碎片时间变成练习",
							body: "快速进入、拇指友好的操作和语音输入，让转瞬即逝的空档也足够完成有价值的一轮。",
							points: ["快捷意图标签，不必背命令", "滑动、长按、听写和语音播放", "后台音频支持听力与跟读"],
						},
						{
							tag: "iPad · 正在开发",
							title: "一张专注学习的桌面",
							body: "常驻分栏让对话列表一直可见，更大的画布则承载更专注的练习。",
							points: ["侧边栏与当前对话同时可见", "外接键盘快捷键延续桌面端心智模型", "拿开键盘后，触控依然是完整的一等体验"],
						},
					],
				},
				features: {
					kicker: "围绕真实练习设计",
					heading: "支撑每段对话的完整学习系统",
					items: [
						{ title: "就地纠错", body: "错误片段、正确写法和地道改写，都紧贴在你真正写出的那句话上。" },
						{ title: "学习记忆", body: "应用会记住离散的强项与缺口，而不是把每段新对话都当成一张白纸。" },
						{ title: "听力与听写", body: "把你自己的对话变成听力材料，再针对真正听错的词继续练习。" },
						{ title: "角色与分支", body: "换场景、交换角色、调节难度，或从任意节点分支，又不丢掉原对话。" },
						{ title: "模型选择自由", body: "使用受支持的远程服务或兼容的本地端点，让模型选择与学习数据彼此独立。" },
						{ title: "可读、可迁移的数据", body: "导出桌面端与移动端都能理解的 JSON 备份，同时保留各平台自己的原生细节。" },
					],
				},
				continuity: {
					kicker: "带走学习，不带走阻力",
					heading: "一份学习历史，在每台设备上恰当呈现",
					body: "Converloop 的便携备份让跨平台共享的学习模型保持稳定。当前迁移由你明确发起和控制，并不是藏在背后的云同步。",
					file: "converloop-backup.json",
					points: [
						{ title: "共享核心", body: "对话、消息、纠错、学习项、复习状态和可迁移偏好会一起移动。" },
						{ title: "安全适配", body: "桌面端专属工具和移动端专属设置会留在原平台，不会被压平或静默删除。" },
						{ title: "导入前预览", body: "先看来源平台和导入范围，再确认替换或合并行为，然后才真正改变数据。" },
					],
				},
				privacy: {
					badge: "准确描述的本地优先",
					heading: "学习历史始终属于你",
					body: "对话和学习数据默认保存在你的设备上。使用远程模型或语音服务时，只会把完成该次请求所需的内容发送给你选择的服务提供商。",
					points: ["无需 Converloop 账号", "服务凭据保存在系统安全存储中", "凭据不会写入便携备份"],
				},
				release: {
					kicker: "获取 Converloop",
					heading: "现在就从 macOS 开始",
					body: "当前公开版本为 Apple 芯片与 Intel Mac 提供下载文件。源代码完全开放，欢迎检查、贡献或自行构建实验。",
					macTitle: "macOS v0.1.1",
					macBody: "在最新发布页选择 Apple 芯片版或 Intel 版磁盘映像。",
					roadTitle: "iPhone、iPad 与 Windows",
					roadBody: "原生体验正在积极开发，目前尚未提供公开安装包。",
				},
				faq: {
					heading: "开始前你可能想知道",
					items: [
						{ title: "Converloop 会自动同步吗？", body: "目前不会。你可以通过便携备份在受支持的版本间迁移共享学习数据，导入前会先显示预览。" },
						{ title: "所有内容都完全离线吗？", body: "数据库默认保存在本地。调用远程 AI 或语音服务时，会发送完成该次请求所需的内容。" },
						{ title: "需要注册 Converloop 账号吗？", body: "不需要。你可以自行选择和配置想使用的模型或语音服务。" },
					],
				},
				final: {
					heading: "让每次对话，都为下一次学习服务。",
					body: "下载 macOS 版，或在开源仓库中关注开发进展。",
				},
			},
			heroTitleHtml: '对话。纠错。<span class="cl-accent">记住。</span>循环。',
			heroSubtitle:
				"一个 AI 语言导师：和你对话、就在你刚写的句子上纠错、记住每一个表达缺口——于是下一次对话，它已经知道你弱在哪里。",
			viewOnGithub: "在 GitHub 查看",
			heroNote: "免费开源 · AGPL-3.0 · 自选服务提供商 · 数据默认保存在本地",
			demo: {
				convo: "对话 · 英语 b2",
				aiOpen: "How did the demo go?",
				userPre: "It went great — I ",
				userDel: "have fix",
				userIns: "fixed",
				userPost: " the login bug.",
				natural: "It went great — I nailed the login bug.",
				issueCat: "语法",
				issueSev: "轻微",
				issueExp: "已完成的动作用一般过去式：“fixed”，而不是“have fix”。",
				reply: "Nice work — did QA sign off before you shipped it?",
			},
			intro: {
				kicker: "这是什么",
				heading: "一个为学语言而生的聊天应用",
				body: "Converloop 不是套了层学习皮的通用聊天机器人。它从对话出发，又把每一次对话都变成精准的学习——既是为语言学习而生的聊天伙伴，也是一个 AI 原生的学习 app。",
				pillars: [
					{
						title: "对话原生的语言学习",
						body: "和它聊天，就是在学。纠错就落在你刚写的句子上，回复能双语对照或彻底讲透，任意文本选中即解释，卡住时输入框还会提示你怎么往下说——辅助都藏在对话里，从不打断你。",
					},
					{
						title: "AI 原生的学习 app",
						body: "它记得你。每个错误、每次说对、每个表达缺口都被精准记下，拼出你到底弱在哪；到期的内容会自己编回对话和练习里——越聊越懂你。",
					},
				],
			},
			methodsKicker: "练习方式",
			methodsHeading: "不止聊天：多种学习方式",
			methodsIntro:
				"对话只是起点。下面每一种方式都连着同一份学习记忆——听力、听写、衍生对话和专项训练，强化的都是你在对话里暴露出来的那些缺口。",
			listening: {
				title: "磨耳朵——素材就是你自己的对话",
				body: "每段对话都能变成听力素材。AI 的回复，加上你自己句子被润色后的版本，按顺序播放——你练的是真正用过的语言，而不是泛泛的题库。",
				points: [
					"逐句重复、放慢、设一个间隔来跟读，还能循环。",
					"先用耳朵抓，准备好了再显示文字。",
					"素材来自你挑的对话——你的话、你的话题。",
				],
				mock: {
					source: "来自 2 段对话 · 14 句",
					side: "对话",
					line: "Did QA sign off before we shipped the fix?",
					showText: "显示文字",
					repeatLabel: "每句重复",
					repeatVal: "2 遍",
					speedLabel: "语速",
					speedVal: "0.9×",
					gapLabel: "间隔",
					gapVal: "2 秒",
					loopLabel: "循环",
				},
			},
			dictation: {
				title: "听写——听一句、打出来、看看漏了什么",
				body: "选一个主题，Converloop 一句一句念给你听。把听到的原样打出来，然后它拿你的转写和真正的句子逐词对比、讲清楚差在哪——没有选择题，每个词都得自己打出来。",
				points: [
					"可正常重听，也能放慢到 0.7×——想听几遍听几遍。",
					"你重听的次数会悄悄调节下一句的难度。",
					"听错的词会存进一份单独的听力记忆，编回后面的句子里再考你。",
				],
				mock: {
					prompt: "听一句，把听到的打出来",
					rate: "0.7×",
					typed: ["Can", "you", "work", "me", "through", "the", "rollback", "plan"],
					missIndex: 2,
					verdict: "漏了 1 个词",
					pre: "Can you ",
					miss: "walk",
					post: " me through the rollback plan?",
					note: "“walk” → 存进单独的听力记忆，过会儿编回某句话里再考你。",
				},
			},
			derive: {
				title: "衍生新对话——一条线索，长出很多段",
				body: "聊到一个好节点？把它分支出去。你可以从任意位置另起一段新对话——更难或更简单、互换角色、换个场景，或者第二天接着聊。原来那段原封不动留在那儿。",
				points: [
					"从这里继续——分支出去，又不丢原来那段。",
					"更难或更简单——同一个情境，按你的水平重新调。",
					"互换角色、切换场景，或者第二天接着聊。",
				],
				mock: {
					cap: "从这段对话…",
					actions: [
						{ icon: "branch", label: "从这里继续" },
						{ icon: "harder", label: "更难一点" },
						{ icon: "easier", label: "更简单一点" },
						{ icon: "swap", label: "互换角色" },
						{ icon: "scene", label: "换个场景" },
						{ icon: "calendar", label: "第二天继续" },
					],
				},
			},
			drills: {
				title: "专项训练——一个围着你弱项转的训练中心",
				body: "打开训练中心，挑一个训练——情景演练、听写，或者弱项闪练。每一种都会围绕你的到期复习项开一段。也可以写你自己的，导出成一个文件就能分享。",
				points: [
					"情景演练——在具体、贴题的情境里应对。",
					"弱项闪练——把到期项变成要主动产出的小任务。",
					"写一个自定义训练，一个文件就能分享。",
				],
				mock: {
					title: "训练中心",
					drills: [
						{ icon: "zap", name: "情景演练", desc: "在具体情境里应对" },
						{ icon: "pen", name: "听写", desc: "把听到的原样打出来" },
						{ icon: "target", name: "弱项闪练", desc: "把到期项变成小任务", badge: "6 项到期" },
					],
				},
			},
			flow: {
				kicker: "工作原理",
				heading: "一轮对话里发生了什么",
				intro:
					"每一句话，两个 agent 一起跑——一个让对话自然继续、卡住时随手递上帮助，一个在背后批改讲解。它们的发现汇成一份学习记忆，之后在对话、复习和每一种练习里反复调用。",
				inParallel: "并行",
				signals: "信号",
				whenDue: "调用",
				input: {
					title: "你写，或说",
					body: "用目标语言写一句话，或者直接说出来、当场转写。",
				},
				convAgent: {
					tag: "对话 agent",
					title: "一句自然的回复，外加随手的帮助",
					body: "保持角色、贴合你的水平，让对话继续。卡住时随手递上草稿、地道说法、可用的词；回复还能双语对照或讲透。",
				},
				tutorAgent: {
					tag: "导师 agent",
					title: "就地纠错与讲解",
					body: "就落在你写的那句上：错误片段、修正、地道改写、随手点开语法；选中任意文本也能即时解释。",
				},
				memory: {
					title: "本地学习记忆",
					body: "每一轮都记下离散信号——出错 · 用对了 · 表达缺口 · 新引入——汇成你设备上的一份记忆。",
				},
				review: {
					title: "一份记忆，处处调用",
					body: "到期内容编回你的下一段对话，也在复习、听写、听力和专项训练里等着你——同一份记忆，驱动每一种练习。",
				},
				loopback: "↺ 然后循环重来——每一轮都更锋利一点",
			},
			showcase: {
				kicker: "对话之中",
				heading: "对话本身，就是学习界面",
				intro:
					"就地纠错、地道表达、接话提示、双语阅读与详细解释，都留在学习真正发生的地方——对话之中。",
				correction: {
					title: "纠错始终贴着你真正写出的那句话",
					body: "错误片段被原地标出，正确写法就在旁边，更地道的版本紧随其后，语法解释则只隔一层——不用离开对话去读另一份报告。",
					naturalLabel: "地道版本",
				},
				slash: {
					title: "不知道怎么接话？提示就在你打字的地方",
					body: "轮到你却卡住时，帮助直接从输入框开始。桌面端输入“/”，iPhone 与 iPad 则点击同样的快捷意图：开始一个话题、让回复更简单、进入角色扮演、回顾对话，或询问一句话最地道的说法。",
					inputPlaceholder: "输入消息，或按“/”看提示…",
					foot: "在 iPhone 与 iPad 上，同一组意图会变成触控快捷标签",
					rows: [
						{ name: "topic", desc: "建议一个话题，开始下一轮" },
						{ name: "simpler", desc: "让对方说得更简单些" },
						{ name: "roleplay", desc: "进入一个具体场景与角色" },
						{ name: "recap", desc: "总结这段对话里真正重要的内容" },
						{ name: "how", args: "<你想表达的意思>", desc: "给出最地道的说法" },
					],
				},
				selection: {
					title: "选中任意文本——解释，而不只是翻译",
					body: "在 App 里任何地方选中一个词或短语，一个小岛就浮出来：解释、朗读，或加进你的学习数据。“解释”会告诉你这么说为什么成立——语感在哪、以后怎么照着用——点一下就存进记忆，等着复习。",
					actions: { analyze: "解释", speak: "朗读", add: "添加" },
					sourcePre: "Did QA ",
					sourceHl: "sign off",
					sourcePost: " before we shipped the fix?",
					analysis:
						"一个表示“正式批准”的动词短语——这里 QA “sign off”就是在上线前正式点头放行，比单纯的“同意”更重。你也能这么用：“Can you sign off on this?”",
				},
				reply: {
					title: "每一句回复——双语对照，或彻底讲透",
					body: "回复只看懂一半？打开「双语对照」，每句话都保留原文，母语翻译就贴在下面一行——可以设成每轮自动展开，也可以单条切换。或者点「详细解释」，按你已经掌握的程度拆给你看。两个都长在回复本身上——不用切到别处。",
					bubble: [
						{ target: "Nice work.", native: "干得漂亮。" },
						{ target: "Did QA sign off before you shipped it?", native: "QA 在你上线之前签字确认了吗？" },
					],
					actions: { speak: "朗读", explain: "详细解释", bilingual: "双语对照" },
					explainLabel: "详细解释",
					explainBody:
						"“sign off” = 正式点头放行。你已经会用 “ship” 了，这里新的点是 sign off (on)——发布前那一下官方批准。",
				},
			},
			featuresKicker: "本地优先 · 开源",
			featuresHeading: "支撑这一切的系统",
			featuresIntro:
				"对话是主角——但它周围的一切，都为私密、可查、归你所有而设计。",
			features: [
				{
					title: "内联纠错",
					body: "没有另一份要解读的报告。错误片段被划掉，正确写法就紧挨在旁、就在气泡里——语法详解和地道改写，都只差一下点击。",
				},
				{
					title: "学习记忆",
					body: "每个错误、每次说对、每个缺口都成为本地记忆里的信号，到期复习会回到你的下一段对话里。",
				},
				{
					title: "表达缺口",
					body: "话说到一半卡住了？用母语写，直接拿到目标语言的地道说法——讲解，而不只是翻译。",
				},
				{
					title: "能力库",
					body: "AI 运行的每一项能力都看得见：任意开关、用你自己的话微调，或者从头造一个——还能导出成一个文件分享。",
				},
				{
					title: "接入任意模型",
					body: "OpenAI 兼容、Anthropic、Gemini，或受支持的订阅登录。macOS 现已提供，移动端与 Windows 版正在开发。",
				},
				{
					title: "本地优先，私密",
					body: "无需 Converloop 账号。学习数据默认留在设备上；远程服务商只会收到完成当次请求所需的内容。备份可读、可迁移。",
				},
			],
		},
		legal: {
			privacyTitle: "隐私政策 — 贴贴手账",
			termsTitle: "用户协议 — 贴贴手账",
			backToPeelday: "← 返回贴贴手账",
		},
	},
} as const;

export function getUi(locale: Locale | string | undefined) {
	return ui[locale === "zh" ? "zh" : "en"];
}

export function localeBase(locale: Locale | string | undefined) {
	return locale === "zh" ? "/zh" : "";
}
