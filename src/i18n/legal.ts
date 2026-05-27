import type { Locale } from "./ui";

export const privacyPolicy = {
	en: {
		intro:
			'Sticko treats "collecting nothing" as the default. This policy explains what we do, do not, and conditionally do with your information when you use Sticko.',
		sections: [
			{
				title: "What We Collect",
				body: "By default we collect no personally identifying information. Sticko requires no account, uploads no contacts, reads no browsing history, and integrates no third-party analytics or advertising SDKs.",
			},
			{
				title: "Device Permissions We Use",
				bullets: [
					'Camera: enabled only when you tap "Take photo"; the resulting image is used for sticker generation or local receipt text recognition.',
					'Photos: we read only the images you pick when you tap "Upload image"; Sticko does not access anything else in your library.',
					'Notifications: sent only after you opt in under "Settings → Notifications", and only for restrained reminders like the year-ago recap.',
				],
			},
			{
				title: "Data Storage",
				body: "Your journal pages, text stickers, and local images are stored on your device. Devices with iCloud enabled sync this content through your private iCloud database. You can wipe local and synced data anytime via Settings → Clear All Data.",
			},
			{
				title: "Purchases",
				body: 'In-app purchases are processed through the Apple App Store / StoreKit. Sticko never receives your payment credentials or banking details — only Apple\'s "you own this product" status flows back to us.',
			},
			{
				title: "Third-Party Services",
				body: "Sticko integrates only Apple StoreKit (in-app purchase billing).",
			},
			{
				title: "Children",
				body: "Sticko is not directed to children under 13. If you believe such data has been processed inadvertently, please contact us to have it deleted.",
			},
			{
				title: "Your Choices and Rights",
				body: 'You can delete all local content at any time from "Settings → Clear all data", or revoke any permission in the iOS "Settings → Sticko" pane. Uninstalling Sticko also withdraws your consent.',
			},
			{
				title: "Changes to This Policy",
				body: 'For material changes, we will update the "Last updated" date on this page and mention the change in the release notes.',
			},
			{
				title: "Contact Us",
				body: "For any privacy questions, complaints, or rights requests, please email jovidalao@gmail.com.",
			},
		],
	},
	zh: {
		intro:
			"Sticko 默认「不收集任何数据」。本政策说明在你使用 Sticko 时，我们如何处理、不处理以及有条件地处理你的信息。",
		sections: [
			{
				title: "我们收集什么",
				body: "默认情况下，我们不收集任何可识别个人身份的信息。Sticko 无需账号，不上传通讯录，不读取浏览记录，也不集成任何第三方分析或广告 SDK。",
			},
			{
				title: "我们使用的设备权限",
				bullets: [
					"相机：仅在你点击「拍照」时启用；生成的图像用于贴纸制作或本地票据文字识别。",
					"照片：仅在你点击「上传图片」时读取你选择的图像；Sticko 不会访问相册中的其他内容。",
					"通知：仅在你于「设置 → 通知」中主动开启后发送，且仅用于「一年前的今天」等克制提醒。",
				],
			},
			{
				title: "数据存储",
				body: "你的日记页面、文字贴纸和本地图像存储在设备上。开启 iCloud 的设备会通过你的私有 iCloud 数据库同步这些内容。你可随时在「设置 → 清除所有数据」中删除本地及同步数据。",
			},
			{
				title: "购买",
				body: "应用内购买通过 Apple App Store / StoreKit 处理。Sticko 不会收到你的支付凭证或银行信息——仅 Apple 返回的「你已拥有此产品」状态会传回给我们。",
			},
			{
				title: "第三方服务",
				body: "Sticko 仅集成 Apple StoreKit（应用内购买结算）。",
			},
			{
				title: "儿童",
				body: "Sticko 不面向 13 岁以下儿童。如你认为相关数据被无意处理，请联系我们删除。",
			},
			{
				title: "你的选择与权利",
				body: "你可随时在「设置 → 清除所有数据」中删除全部本地内容，或在 iOS「设置 → Sticko」中撤销任何权限。卸载 Sticko 亦视为撤回同意。",
			},
			{
				title: "政策变更",
				body: "如有重大变更，我们将更新本页「最后更新」日期，并在版本说明中提及。",
			},
			{
				title: "联系我们",
				body: "如有任何隐私问题、投诉或权利请求，请发送邮件至 jovidalao@gmail.com。",
			},
		],
	},
} as const;

export const termsOfUse = {
	en: {
		intro:
			"Please read the following terms before using Sticko. By continuing to use Sticko, you agree to them.",
		sections: [
			{
				title: "Scope of License",
				body: "We grant you a revocable, non-exclusive license to install and use Sticko for personal, non-commercial purposes. Please do not reverse-engineer or decompile Sticko, or use it for purposes that infringe the rights of others.",
			},
			{
				title: "Your Content",
				body: "You retain all rights to the content you create in Sticko (pages, text, stickers, uploaded images). You authorize Sticko to process that content solely to the extent necessary to provide the features you use, such as local storage and on-device receipt text recognition. See the Privacy Policy for details.",
			},
			{
				title: "Acceptable Use",
				body: "Do not use Sticko to upload or generate content that violates the law, infringes the rights of others, or contains violent, sexual, or hateful material.",
			},
			{
				title: "Purchases",
				body: 'In-app purchases are billed through the Apple App Store. You can manage or refund them under iOS "Settings → Apple ID" or via Apple\'s refund process.',
			},
			{
				title: "Disclaimer",
				body: 'Sticko is provided "as is", without any express or implied warranty as to accuracy, availability, or fitness for a particular purpose. To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, Sticko.',
			},
			{
				title: "Termination",
				body: "If you violate these terms, we may terminate your license to use Sticko at any time. You can also stop using Sticko at any time by uninstalling it.",
			},
			{
				title: "Changes to These Terms",
				body: 'We may update these terms from time to time and will refresh the "Last updated" date when we do. Continuing to use Sticko means you accept the updated terms.',
			},
			{
				title: "Contact Us",
				body: "For any questions, please email jovidalao@gmail.com.",
			},
		],
	},
	zh: {
		intro: "使用 Sticko 前请阅读以下条款。继续使用 Sticko 即表示你同意这些条款。",
		sections: [
			{
				title: "许可范围",
				body: "我们授予你一项可撤销、非独占的许可，供你在个人、非商业用途下安装和使用 Sticko。请勿对 Sticko 进行逆向工程或反编译，或将其用于侵犯他人权利的目的。",
			},
			{
				title: "你的内容",
				body: "你保留在 Sticko 中创建的全部内容（页面、文字、贴纸、上传的图片）的所有权利。你授权 Sticko 仅在提供你所使用功能所必需的范围内处理该等内容，例如本地存储与设备端票据文字识别。详见隐私政策。",
			},
			{
				title: "可接受使用",
				body: "请勿使用 Sticko 上传或生成违法、侵犯他人权利，或包含暴力、色情、仇恨内容的材料。",
			},
			{
				title: "购买",
				body: "应用内购买通过 Apple App Store 结算。你可在 iOS「设置 → Apple ID」或通过 Apple 退款流程管理或申请退款。",
			},
			{
				title: "免责声明",
				body: "Sticko 按「现状」提供，不对准确性、可用性或特定用途适用性作任何明示或默示保证。在法律允许的最大范围内，我们不对因使用或无法使用 Sticko 而产生的任何间接、附带或后果性损害承担责任。",
			},
			{
				title: "终止",
				body: "如你违反本条款，我们可随时终止你使用 Sticko 的许可。你也可随时卸载 Sticko 停止使用。",
			},
			{
				title: "条款变更",
				body: "我们可能不时更新本条款，并在更新时刷新「最后更新」日期。继续使用 Sticko 即表示你接受更新后的条款。",
			},
			{
				title: "联系我们",
				body: "如有任何问题，请发送邮件至 jovidalao@gmail.com。",
			},
		],
	},
} as const;

export function getLegal(locale: Locale | string | undefined) {
	const key = locale === "zh" ? "zh" : "en";
	return {
		privacy: privacyPolicy[key],
		terms: termsOfUse[key],
	};
}
