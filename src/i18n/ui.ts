export type Locale = "en" | "zh";

export const ui = {
	en: {
		nav: {
			home: "Home",
			peelday: "Peelday",
			converloop: "Converloop",
		},
		theme: {
			light: "Light",
			dark: "Dark",
			system: "System",
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
			converloopBadge: "Desktop App",
			converloopTitle: "Converloop",
			converloopDescription:
				"A local-first AI language tutor for macOS & Windows. It talks with you, corrects the sentence you just wrote, and remembers every gap — open source.",
			converloopCta: "Learn more",
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
		converloop: {
			metaDescription:
				"Converloop — a local-first AI language tutor for macOS and Windows. It talks with you, corrects the sentence you just wrote, and remembers every gap. Bring your own model keys; nothing leaves your device.",
			tagline: "Local-first AI language tutor · macOS & Windows",
			heroTitleHtml: 'Converse. Correct. <span class="cl-accent">Remember.</span> Repeat.',
			heroSubtitle:
				"An AI tutor that talks with you, corrects the sentence you just wrote, and remembers every gap — so your next conversation already knows where you're weak.",
			viewOnGithub: "View on GitHub",
			heroNote:
				"Free & open source · AGPL-3.0 · bring your own keys · nothing leaves your device",
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
				heading: "More than a chat box",
				intro:
					"The helpers live right where you already are — the line you type in, the replies you read, and any text on the screen.",
				slash: {
					title: "Stuck for words? Help is right where you type",
					body: "The hard part of a new language is often your turn — when you don't know what to say. Converloop puts the help right where you type: when you need it, it hands you an editable draft, shows the natural way to say what you mean, offers a few words to work with, or asks your partner to slow down. You're never staring at an empty box.",
					inputPlaceholder: 'Type a message, or "/" for help…',
					foot: "Customize commands…",
					rows: [
						{ name: "reply", desc: "Draft a reply — a ready-to-edit suggestion in the box" },
						{ name: "how", args: "<what you want to say>", desc: "The natural way to say it" },
						{ name: "keywords", desc: "A few words you could use to reply" },
						{ name: "simpler", desc: "Ask your partner to say it more simply" },
						{ name: "btw", args: "<ask anything>", desc: "Side question — off the record" },
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
					body: "OpenAI-compatible, Anthropic, Gemini, or Claude / ChatGPT subscription login. Runs on macOS and Windows.",
				},
				{
					title: "Local-first & private",
					body: "No account, no cloud. Your data stays encrypted on device, with one-click readable backups you can move.",
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
			peelday: "Peelday",
			converloop: "Converloop",
		},
		theme: {
			light: "浅色",
			dark: "深色",
			system: "跟随系统",
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
			converloopBadge: "桌面应用",
			converloopTitle: "Converloop",
			converloopDescription:
				"一款本地优先的 AI 语言导师，支持 macOS 与 Windows。和你对话、就在你刚写的句子上纠错、记住每个表达缺口——开源。",
			converloopCta: "了解更多",
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
		converloop: {
			metaDescription:
				"Converloop —— 一款本地优先的 AI 语言导师，支持 macOS 与 Windows。它和你对话、就在你刚写的句子上纠错、记住每一个表达缺口。自带模型密钥，数据不出本机。",
			tagline: "本地优先的 AI 语言导师 · macOS & Windows",
			heroTitleHtml: '对话。纠错。<span class="cl-accent">记住。</span>循环。',
			heroSubtitle:
				"一个 AI 语言导师：和你对话、就在你刚写的句子上纠错、记住每一个表达缺口——于是下一次对话，它已经知道你弱在哪里。",
			viewOnGithub: "在 GitHub 查看",
			heroNote: "免费开源 · AGPL-3.0 · 自带模型密钥 · 数据不出本机",
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
				heading: "不只是一个聊天框",
				intro:
					"这些小助手就藏在你本来就在的地方——你打字的那一行、你读的每一句回复，和屏幕上的任意文本。",
				slash: {
					title: "不知道怎么接话？提示就在你打字的地方",
					body: "学一门语言，最卡的往往是轮到你、却不知道该说什么。Converloop 把帮助放在你打字的地方——需要时，它给你一句可以直接改的草稿、告诉你想说的话最地道怎么说、递几个能用上的词，或者让对方说得更简单。对着空白输入框发愣的时刻，被接住了。",
					inputPlaceholder: "输入消息，或按“/”看提示…",
					foot: "自定义命令…",
					rows: [
						{ name: "reply", desc: "起草回复——把一句可改的建议放进输入框" },
						{ name: "how", args: "<你想说的话>", desc: "最地道的说法" },
						{ name: "keywords", desc: "给你几个能用来回复的词" },
						{ name: "simpler", desc: "让对方说得更简单些" },
						{ name: "btw", args: "<随便问点什么>", desc: "小问题——不计入对话" },
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
					body: "OpenAI 兼容、Anthropic、Gemini，或 Claude / ChatGPT 订阅登录。支持 macOS 与 Windows。",
				},
				{
					title: "本地优先，私密",
					body: "无账号、无云端。数据加密保存在设备上，一键导出可读、可迁移的备份。",
				},
			],
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
