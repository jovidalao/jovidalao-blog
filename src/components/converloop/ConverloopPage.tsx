/* Synced from converloopai; update with pnpm sync:converloop. */
import Link from "next/link";
import type { ReactNode } from "react";
import { CONVERLOOP, MAKER, SITE_URL } from "./consts";
import { converloopScenes, getConverloop } from "./copy";
import { localeBase, type Locale } from "@/i18n";
import s from "./ConverloopPage.module.css";
import { HeroStage } from "./HeroStage";
import { Icon } from "./Icon";
import { CorrectionPreview, DictationPreview, ExplanationPreview, ExpressionPreview, LearningPreview, ListeningPreview, SceneLibraryPreview, ScenePreview } from "./ProductPreviews";
import { ShotSlot } from "./Shot";
import site from "./site.module.css";

const heroPreviews = { correction: CorrectionPreview, explanation: ExplanationPreview, scene: ScenePreview };

/** The app icon's C-shaped speech loop (AppLogo/SVG in the iOS repo). */
const MARK_PATH =
	"M 972 405 C 899 295 777 240 643 240 C 420 240 241 400 241 608 C 241 700 275 780 339 843 C 356 860 360 879 350 907 L 328 975 C 318 1007 340 1023 371 1010 L 486 956 C 505 947 518 945 539 950 C 721 994 904 908 999 758 C 1026 716 1012 679 974 662 C 932 644 893 660 867 699 C 808 781 721 817 634 817 C 503 817 402 732 402 609 C 402 487 503 397 635 397 C 729 397 797 437 835 510 C 858 551 897 564 939 543 C 994 516 1012 466 972 405 Z";

function Mark({ className }: { className?: string }) {
	return <svg className={className} viewBox="200 200 860 860" aria-hidden="true"><path fill="currentColor" d={MARK_PATH} /></svg>;
}

function Arrow({ down }: { down?: boolean }) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d={down ? "M12 5v14M6 13l6 6 6-6" : "M5 12h14M13 6l6 6-6 6"} />
		</svg>
	);
}

/** Card caption: a tag chip, then title and body (Lumno's bento cards). */
function Copy({ icon, tag, title, body }: { icon: string; tag: string; title: string; body: string }) {
	return (
		<div className={s.copy}>
			<span className={s.chip}><Icon name={icon} />{tag}</span>
			<h3>{title}</h3>
			<p>{body}</p>
		</div>
	);
}

/** A small app window with traffic lights, for the settings-style mock-ups. */
function Window({ title, children }: { title: string; children: ReactNode }) {
	return (
		<div className={s.window} aria-hidden="true">
			<div className={s.windowBar}><i /><i /><i /><span>{title}</span></div>
			{children}
		</div>
	);
}

export function ConverloopPage({ locale, assetBase = "", officialUrl }: { locale: Locale; assetBase?: string; officialUrl?: string }) {
	const c = getConverloop(locale);
	const base = officialUrl ?? localeBase(locale);
	const zh = locale === "zh";
	const live = Boolean(CONVERLOOP.appStoreUrl);
	const shot = (device: string, name: string) => `${assetBase}/shots/${zh ? "zh" : "en"}/${device}-${name}.webp?v=20261024`;
	const mail = `mailto:${CONVERLOOP.contactEmail}`;
	const sceneRows = [0, 1, 2].map((row) => converloopScenes.slice(row * 18, row * 18 + 18));
	const { message: m, scenes, listen, learning, devices, models, privacy, pricing, faq } = c;
	const latest = c.changelog.releases[0];
	// Search engines should credit the official site, so the personal-site showcase
	// (which passes officialUrl) leaves structured data out.
	const jsonLd = officialUrl ? null : {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "MobileApplication",
				name: CONVERLOOP.name,
				description: c.meta.description,
				url: `${SITE_URL}${base}`,
				image: `${SITE_URL}/icon.png`,
				applicationCategory: "EducationalApplication",
				operatingSystem: "iOS 26.0 or later",
				softwareVersion: latest.version,
				installUrl: CONVERLOOP.appStoreUrl,
				offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
				author: { "@type": "Person", name: MAKER.name, url: MAKER.url },
			},
			{
				"@type": "FAQPage",
				mainEntity: faq.items.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
			},
		],
	};

	const primary = live ? (
		<a className={`${site.btn} ${s.btnInk}`} href={CONVERLOOP.appStoreUrl} target="_blank" rel="noreferrer">{c.appStore}<Arrow /></a>
	) : (
		<a className={`${site.btn} ${s.btnInk}`} href="#features">{c.howItWorks}<Arrow down /></a>
	);
	const secondary = officialUrl
		? <a className={`${site.btn} ${site.btnGhost}`} href={officialUrl}>{c.website}<Arrow /></a>
		: live ? <a className={`${site.btn} ${site.btnGhost}`} href="#features">{c.howItWorks}</a> : null;

	return (
		<main className={`${s.page} ${zh ? s.zh : ""}`}>
			{jsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /> : null}
			{/* ---------- hero ---------- */}
			<section className={s.hero}>
				<div className={`${site.shell} ${s.heroCopy}`}>
					<p className={s.badge}>
						<span className={s.dot} aria-hidden="true" />
						{c.status}
						<span className={s.badgeSep} aria-hidden="true" />
						<span className={s.badgeSoft}>{c.platforms}</span>
					</p>
					<h1 className={s.heroTitle}>
						{c.hero.title[0]}<br />
						{c.hero.title[1]}
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img className={s.heroIcon} src={`${assetBase}/icon.webp?v=20261027`} alt="" width={64} height={64} />
					</h1>
					<p className={s.heroBody}>{c.hero.body}</p>
					<div className={s.actions}>{primary}{secondary}</div>
					<p className={s.requirement}>{c.requirement}</p>
				</div>

				<HeroStage
					label={c.hero.tabs}
					items={c.hero.features.map((feature) => {
						const Preview = heroPreviews[feature.kind];
						return { ...feature, preview: <Preview locale={locale} /> };
					})}
				/>
			</section>

			{/* ---------- on every message ---------- */}
			<section className={s.section} id="features">
				<div className={site.shell}>
					<header className={s.head}>
						<p className={s.eyebrow}>{m.kicker}</p>
						<h2 className={s.h2}>{m.heading}</h2>
						<p className={s.lede}>{m.body}</p>
					</header>

					<div className={s.bento}>
						<article className={s.card}>
							<Copy icon="chat" tag={m.ask.tag} title={m.ask.title} body={m.ask.body} />
							<div className={s.art}>
								<ExpressionPreview locale={locale} />
							</div>
						</article>

						<article className={s.card}>
							<Copy icon="sparkle" tag={m.lookup.tag} title={m.lookup.title} body={m.lookup.body} />
							<div className={s.art}>
								<div className={`${s.app} ${s.lookupCard}`} aria-hidden="true">
									<p className={s.aiReply}>This whole setup feels like a <mark className={s.selection}>rat race</mark>.</p>
									<div className={s.lookupPop}>
										<span className={s.lookupCat}>{m.lookup.card.category}</span>
										<p className={s.lookupTerm}>{m.lookup.card.term}</p>
										<small>{m.lookup.card.meaningLabel}</small>
										<p>{m.lookup.card.meaning}</p>
										<small>{m.lookup.card.collocationsLabel}</small>
										<span className={s.lookupChips}>
											{m.lookup.card.collocations.map((item) => <span key={item}>{item}</span>)}
										</span>
									</div>
								</div>
							</div>
						</article>
					</div>

					<ul className={s.minis}>
						{m.items.map((item) => (
							<li key={item.title}>
								<span className={s.miniIcon}><Icon name={item.icon} /></span>
								<b>{item.title}</b>
								<p>{item.body}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* ---------- scene training ---------- */}
			<section className={`${s.section} ${s.scenes}`} id="scenes">
				<div className={site.shell}>
					<header className={`${s.head} ${s.headCenter}`}>
						<p className={s.eyebrow}>{scenes.kicker}</p>
						<h2 className={s.h2}>{scenes.heading}</h2>
						<p className={s.lede}>{scenes.body}</p>
					</header>
				</div>

				<div className={s.marquee} aria-hidden="true">
					{sceneRows.map((row, r) => (
						<div className={`${s.marqueeTrack} ${r === 1 ? s.marqueeReverse : ""}`} key={r}>
							{[...row, ...row].map((scene, k) => (
								<span className={s.sceneChip} data-c={scene.c} key={k}>
									<span>{scene.e}</span>
									{zh ? scene.zh : scene.en}
								</span>
							))}
						</div>
					))}
				</div>

				<div className={`${site.shell} ${s.scenesGrid}`}>
					<article className={s.card}>
						<Copy icon="book" tag={scenes.library.tag} title={scenes.library.title} body={scenes.library.body} />
						<div className={s.libraryArt}><SceneLibraryPreview locale={locale} /></div>
					</article>
					<article className={`${s.card} ${s.shotCard}`}>
						<Copy icon="edit" tag={scenes.forYou.tag} title={scenes.forYou.title} body={scenes.forYou.body} />
						<div className={`${s.app} ${s.genFlow}`} aria-hidden="true">
							<div className={s.appCard}>
								<p className={s.appCardTitle}>{scenes.forYou.itemsTitle}</p>
								<div className={s.vRow}>
									<div><b>{scenes.forYou.item.key}</b><small>{scenes.forYou.item.example}</small></div>
									<span className={s.status}>{scenes.forYou.item.status}</span>
								</div>
							</div>
							<span className={s.genStep}><Icon name="sparkle" />{scenes.forYou.generating}</span>
							<div className={s.appCard}>
								<p className={s.appCardTitle}>{scenes.forYou.shelf}</p>
								<div className={s.sceneCard}>
									<span className={s.sceneEmoji}>{scenes.forYou.scene.emoji}</span>
									<b>{scenes.forYou.scene.title}</b>
									<small>{scenes.forYou.scene.hint}</small>
									<span className={s.whyLine}><Icon name="target" /><span><b>{scenes.forYou.why}</b> · {scenes.forYou.reason}</span></span>
								</div>
							</div>
						</div>
					</article>
				</div>
			</section>

			{/* ---------- listening & dictation ---------- */}
			<section className={s.section}>
				<div className={site.shell}>
					<header className={`${s.head} ${s.headCenter}`}>
						<p className={s.eyebrow}>{listen.kicker}</p>
						<h2 className={s.h2}>{listen.heading}</h2>
						<p className={s.lede}>{listen.body}</p>
					</header>
					<div className={s.duo}>
						<article className={s.card}>
							<Copy icon="headphones" tag={listen.listening.tag} title={listen.listening.title} body={listen.listening.body} />
							<div className={s.practiceArt}><ListeningPreview locale={locale} /></div>
						</article>
						<article className={s.card}>
							<Copy icon="edit" tag={listen.dictation.tag} title={listen.dictation.title} body={listen.dictation.body} />
							<div className={s.practiceArt}><DictationPreview locale={locale} /></div>
						</article>
					</div>
				</div>
			</section>

			{/* ---------- learning items ---------- */}
			<section className={s.section}>
				<div className={`${site.shell} ${s.split}`}>
					<div className={s.splitCopy}>
						<p className={s.eyebrow}>{learning.kicker}</p>
						<h2 className={s.h2}>{learning.heading}</h2>
						<p className={s.lede}>{learning.body}</p>
						<ul className={`${site.checks} ${s.points}`}>
							{learning.points.map((point) => <li key={point}>{point}</li>)}
						</ul>
					</div>
					<div className={s.learningArt}><LearningPreview locale={locale} /></div>
				</div>
			</section>

			{/* ---------- devices ---------- */}
			<section className={s.section}>
				<div className={site.shell}>
					<header className={`${s.head} ${s.headCenter}`}>
						<p className={s.eyebrow}>{devices.kicker}</p>
						<h2 className={s.h2}>{devices.heading}</h2>
						<p className={s.lede}>{devices.body}</p>
					</header>
					<div className={s.duo}>
						<article className={`${s.card} ${s.deviceCard}`}>
							<Copy icon="book" tag={devices.duo.tag} title={devices.duo.title} body={devices.duo.body} />
							<a className={s.deviceShot} href={shot("duo", "explanation")} target="_blank" rel="noreferrer" aria-label={`${devices.duo.tag} · ${devices.zoom}`}>
								<ShotSlot index="11" title={devices.duo.alt} frame="duo" src={shot("duo", "explanation")} assetBase={assetBase} />
								<span className={s.zoomHint}>{devices.zoom}<Arrow /></span>
							</a>
						</article>
						<article className={`${s.card} ${s.deviceCard}`}>
							<div className={s.copy}>
								<span className={s.chip}><Icon name="list" />{devices.mac.tag}<em className={s.soon}>{devices.mac.soon}</em></span>
								<h3>{devices.mac.title}</h3>
								<p>{devices.mac.body}</p>
							</div>
							<a className={s.deviceShot} href={shot("mac", "01-conversation")} target="_blank" rel="noreferrer" aria-label={`${devices.mac.tag} · ${devices.zoom}`}>
								<ShotSlot index="12" title={devices.mac.alt} frame="plain" src={shot("mac", "01-conversation")} assetBase={assetBase} />
								<span className={s.zoomHint}>{devices.zoom}<Arrow /></span>
							</a>
						</article>
					</div>
				</div>
			</section>

			{/* ---------- choose your AI ---------- */}
			<section className={s.section} id="ai">
				<div className={site.shell}>
					<header className={s.head}>
						<p className={s.eyebrow}>{models.kicker}</p>
						<h2 className={s.h2}>{models.heading}</h2>
						<p className={s.lede}>{models.body}</p>
					</header>
					<div className={s.modelsLayout}>
						<a className={s.modelDetail} href={shot("iphone", "09-ai-services")} target="_blank" rel="noreferrer">
							<div className={s.modelCrop}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src={shot("iphone", "09-ai-services")} alt={zh ? "语言模型设置中的 Converloop AI、Apple 智能与自带 API 密钥选项" : "Language Model settings showing Converloop AI, Apple Intelligence and Bring Your Own API Key"} width={960} height={2086} loading="lazy" />
							</div>
							<span className={s.zoomHint}>{models.screenshot}<Arrow /></span>
						</a>
						<div className={s.modelChoices}>
							{models.options.map((option) => (
								<article className={`${s.card} ${s.windowCard}`} key={option.name}>
									<div className={s.windowHead}>
										<h3>{option.name}</h3>
										<span className={s.tag}>{option.tag}</span>
									</div>
									<p className={s.windowBody}>{option.body}</p>
								</article>
							))}
						</div>
					</div>
					<p className={s.note}>{models.voices}</p>
				</div>
			</section>

			{/* ---------- privacy ---------- */}
			<section className={s.section}>
				<div className={site.shell}>
					<header className={s.head}>
						<p className={s.eyebrow}>{privacy.kicker}</p>
						<h2 className={s.h2}>{privacy.heading}</h2>
						<p className={s.lede}>{privacy.body}</p>
					</header>
					<div className={s.trio}>
						{[privacy.never, privacy.kept].map((group, g) => (
							<article className={`${s.card} ${s.windowCard}`} key={group.title}>
								<div className={s.windowHead}><h3>{group.title}</h3></div>
								<Window title={group.window}>
									{group.rows.map((row) => (
										<div className={s.row} data-struck={g === 0 || undefined} key={row}>
											<Icon name={g === 0 ? "close" : "check"} />
											<span className={s.rowText}><b>{row}</b></span>
											<span className={s.rowBadge}>{group.badge}</span>
										</div>
									))}
								</Window>
							</article>
						))}
						<article className={`${s.card} ${s.windowCard}`}>
							<div className={s.windowHead}><h3>{privacy.data.title}</h3></div>
							<Window title={privacy.data.window}>
								<pre className={s.code}>{`{
  "kind": "converloop.portable-backup",
  "version": 1,
  "data": {
    "profile": { … },
    "conversations": [ … ],
    "masteryItems": [ … ]
  }
}`}</pre>
								<ul className={s.facts}>
									{privacy.data.facts.map((fact) => <li key={fact.text}><Icon name={fact.icon} />{fact.text}</li>)}
								</ul>
							</Window>
						</article>
					</div>
				</div>
			</section>

			{/* ---------- pricing ---------- */}
			<section className={s.section} id="pricing">
				<div className={site.shell}>
					<header className={`${s.head} ${s.headCenter}`}>
						<p className={s.eyebrow}>{pricing.kicker}</p>
						<h2 className={s.h2}>{pricing.heading}</h2>
						<p className={s.lede}>{pricing.body}</p>
					</header>
					<div className={s.plans}>
						{pricing.plans.map((plan) => (
							<article className={s.plan} key={plan.name}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img className={s.planIcon} src={`${assetBase}/plan-${plan.icon}.webp`} alt="" width={48} height={48} loading="lazy" />
								<h3>{plan.name}</h3>
								<p className={s.planFor}>{plan.for}</p>
								<p className={s.price}><b>{plan.price}</b><span>{plan.unit}</span></p>
								<ul className={`${site.checks} ${s.points}`}>
									{plan.points.map((point) => <li key={point}>{point}</li>)}
								</ul>
							</article>
						))}
					</div>
					<p className={`${s.note} ${s.noteCenter}`}>{pricing.note}</p>
				</div>
			</section>

			{/* ---------- faq ---------- */}
			<section className={s.section} id="faq">
				<div className={`${site.shell} ${s.faq}`}>
					<div className={s.faqAside}>
						<h2 className={s.h2}>{faq.heading}</h2>
						<p className={s.lede}>{faq.body}</p>
						<div className={s.faqActions}>
							<a className={`${s.smallBtn} ${s.smallBtnOn}`} href={mail}><Icon name="chat" />{faq.email}</a>
							<Link className={s.smallBtn} href={`${base}/support`}>{faq.support}</Link>
						</div>
					</div>
					<div className={s.faqList}>
						{faq.items.map((item) => (
							<details className={s.faqItem} key={item.q}>
								<summary>{item.q}<span className={s.faqPlus} aria-hidden="true" /></summary>
								<p>{item.a}</p>
							</details>
						))}
					</div>
				</div>
			</section>

			{/* ---------- closing ---------- */}
			<section className={s.final} id="download">
				<div className={site.shell}>
					<div className={s.finalCard}>
						<Mark className={s.finalMark} />
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img className={s.finalIcon} src={`${assetBase}/icon.webp?v=20261027`} alt="" width={72} height={72} loading="lazy" />
						<h2>{c.final.heading}</h2>
						<p>{c.final.body}</p>
						<div className={s.actions}>
							{live ? (
								<a className={`${site.btn} ${s.btnIvory}`} href={CONVERLOOP.appStoreUrl} target="_blank" rel="noreferrer">{c.appStore}<Arrow /></a>
							) : officialUrl ? (
								<a className={`${site.btn} ${s.btnIvory}`} href={officialUrl}>{c.website}<Arrow /></a>
							) : (
								<a className={`${site.btn} ${s.btnIvory}`} href="#features">{c.howItWorks}<Arrow /></a>
							)}
						</div>
					</div>
				</div>
			</section>

			<Link className={s.versionPill} href={`${base}/changelog`}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={`${assetBase}/icon.webp?v=20261027`} alt="" width={20} height={20} />
				<b>v{latest.version}</b>{c.changelog.pill}
			</Link>
		</main>
	);
}
