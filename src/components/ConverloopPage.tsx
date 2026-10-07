import Link from "next/link";
import type { CSSProperties } from "react";
import { CONVERLOOP } from "@/consts";
import { converloopScenes, getConverloop, localeBase, type Locale } from "@/i18n";
import s from "./ConverloopPage.module.css";
import { Icon } from "./Icon";
import { ShotSlot } from "./Shot";
import site from "./site.module.css";

/** Custom properties for inline styles; React's CSSProperties has no index signature. */
export const vars = (values: Record<string, string | number>) => values as CSSProperties;

export const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Splits the statement into words (CJK included, via ICU) so each one can light up
 * on its own as the paragraph scrolls past. Runs at build time; the browser only
 * gets spans and a CSS scroll timeline.
 */
export function revealWords(text: string, locale: Locale) {
	const parts = [...new Intl.Segmenter(locale, { granularity: "word" }).segment(text)];
	return parts.map(({ segment }, i) =>
		segment.trim() ? <span key={i} style={vars({ "--t": (i / parts.length).toFixed(3) })}>{segment}</span> : segment,
	);
}

export function Arrow({ down }: { down?: boolean }) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d={down ? "M12 5v14M6 13l6 6 6-6" : "M5 12h14M13 6l6 6-6 6"} />
		</svg>
	);
}

function Chevron() {
	return <svg className={s.chevron} viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>;
}

function Play() {
	return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" stroke="none" d="M8 5.5v13a1 1 0 0 0 1.5.86l10.6-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" /></svg>;
}

function Skip({ back }: { back?: boolean }) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" style={back ? { transform: "scaleX(-1)" } : undefined}>
			<path fill="currentColor" stroke="none" d="M4 6.2v11.6a.8.8 0 0 0 1.2.7l8.3-5.8a.8.8 0 0 0 0-1.4L5.2 5.5a.8.8 0 0 0-1.2.7Zm9 0v11.6a.8.8 0 0 0 1.2.7l8.3-5.8a.8.8 0 0 0 0-1.4l-8.3-5.8a.8.8 0 0 0-1.2.7Z" />
		</svg>
	);
}

export function ConverloopPage({ locale }: { locale: Locale }) {
	const c = getConverloop(locale);
	const base = localeBase(locale);
	const zh = locale === "zh";
	const live = Boolean(CONVERLOOP.appStoreUrl);
	const shot = (name: string) => `/converloop/${name}-${zh ? "zh" : "en"}.webp`;
	const mail = `mailto:${CONVERLOOP.contactEmail}`;
	const sceneRows = [0, 1, 2].map((row) => converloopScenes.slice(row * 18, row * 18 + 18));
	const { express, notice, remember, reuse } = c.loop;

	const appStoreButton = live ? (
		<a className={`${site.btn} ${s.btnInk}`} href={CONVERLOOP.appStoreUrl} target="_blank" rel="noreferrer">
			{c.appStore}
			<Arrow />
		</a>
	) : (
		<span className={`${site.btn} ${site.btnGhost} ${s.btnStatic}`}>
			<span className={s.dot} aria-hidden="true" />
			{c.appStoreSoon}
		</span>
	);

	const visuals = [
		<div className={`${s.app} ${s.vExpress}`} aria-hidden="true" key="express">
			<span className={s.vCaption}>{express.caption}</span>
			<div className={s.bubble}>
				{express.ask}
				<span className={s.bubbleSub}><Icon name="translate" />{express.askAnswer}</span>
			</div>
			<p className={s.aiReply}>{express.reply}</p>
			<div className={s.composer}>
				<span className={s.recDot} />
				<span className={s.recTime}>0:04</span>
				<span className={s.wave}>
					{Array.from({ length: 24 }, (_, k) => <i key={k} style={vars({ "--k": k })} />)}
				</span>
				<span className={s.micBtn}><Icon name="mic" /></span>
			</div>
		</div>,

		<div className={`${s.app} ${s.vNotice}`} aria-hidden="true" key="notice">
			<div className={`${s.bubble} ${s.bubbleLg}`}>
				I <del>goed</del> <ins>went</ins> to the library yesterday and <del>buyed</del> <ins>bought</ins> two <del>book</del> <ins>books</ins>.
				<span className={s.bubbleSub}><Icon name="sparkle" />Yesterday I stopped by the library and picked up two books.</span>
			</div>
			<div className={s.styleRow}>
				{notice.styles.map((style, i) => <span key={style} className={i === notice.selected ? s.styleOn : undefined}>{style}</span>)}
			</div>
		</div>,

		<div className={`${s.app} ${s.vList}`} aria-hidden="true" key="remember">
			<p className={s.vListTitle}>{remember.title}</p>
			{remember.rows.map((row) => (
				<div className={s.vRow} key={row.key}>
					<div>
						<b>{row.key}</b>
						<small>{row.example}</small>
					</div>
					<div className={s.vRowEnd}>
						{row.pips ? (
							<span className={s.pips}>{[...row.pips].map((pip, k) => <i key={k} data-pip={pip} />)}</span>
						) : null}
						<span className={s.status} data-tone={row.tone}>{row.status}</span>
					</div>
				</div>
			))}
		</div>,

		<div className={`${s.app} ${s.vReuse}`} aria-hidden="true" key="reuse">
			<span className={s.shelfPill}>{reuse.shelf}</span>
			<div className={s.sceneCard}>
				<span className={s.sceneEmoji}>{reuse.scene.emoji}</span>
				<b>{reuse.scene.title}</b>
				<small>{reuse.scene.hint}</small>
				<span className={s.whyLine}><Icon name="target" /><span><b>{reuse.why}</b> · {reuse.reason}</span></span>
			</div>
			<div className={s.rowCard}>
				<div className={s.rowItem}>
					<span className={s.rowIcon} data-tone="teal"><Icon name="headphones" /></span>
					<span><b>{reuse.listening}</b><small>{reuse.listeningMeta}</small></span>
					<Chevron />
				</div>
				<div className={s.rowItem}>
					<span className={s.rowIcon} data-tone="orange"><Icon name="edit" /></span>
					<span><b>{reuse.dictation}</b><small>{reuse.dictationMeta}</small></span>
					<Chevron />
				</div>
			</div>
		</div>,
	];

	return (
		<main className={`${s.page} ${zh ? s.zh : ""}`}>
			{/* ---------- hero ---------- */}
			<section className={s.hero}>
				<div className={s.heroBackdrop} aria-hidden="true" />
				<div className={`${site.shell} ${s.heroInner}`}>
					<p className={s.pill}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src="/converloop/icon.webp" alt="" width={22} height={22} />
						<b>{CONVERLOOP.name}</b>
						<span className={s.pillSep} aria-hidden="true" />
						<span className={s.dot} aria-hidden="true" />
						{c.status}
					</p>

					<h1 className={s.heroTitle}>
						<span className="sr-only">{[c.hero.lead, `${c.hero.words[0]}${c.hero.wordSuffix}${c.hero.tail}`].filter(Boolean).join(" ")}</span>
						<span aria-hidden="true">
							{c.hero.lead ? <>{c.hero.lead}<br /></> : null}
							<span className={s.rotator}>
								{c.hero.words.map((word, i) => (
									<span key={word} style={vars({ "--i": i })}><mark>{word}</mark>{c.hero.wordSuffix}</span>
								))}
							</span>
							{c.hero.tail}
						</span>
					</h1>

					<p className={s.heroBody}>
						{c.hero.bodyBefore}
						<mark className={s.marker}>{c.hero.bodyMark}</mark>
						{c.hero.bodyAfter}
					</p>

					<div className={s.actions}>
						{live ? appStoreButton : (
							<a className={`${site.btn} ${s.btnInk}`} href="#loop">
								{c.howItWorks}
								<Arrow down />
							</a>
						)}
						{live ? <a className={`${site.btn} ${site.btnGhost}`} href="#loop">{c.howItWorks}</a> : appStoreButton}
					</div>
					<p className={s.requirement}>{c.requirement}</p>

					<ul className={s.strip}>
						{c.hero.strip.map((item) => (
							<li key={item.title}>
								<span className={s.stripIcon}><Icon name={item.icon} /></span>
								<span>
									<b>{item.title}</b>
									<small>{item.body}</small>
								</span>
							</li>
						))}
					</ul>
				</div>

				<div className={s.stage}>
					<div className={`${s.stagePhone} ${s.stageSide} ${s.stageLeft}`}>
						<ShotSlot index="02" title={c.hero.shots.scenes} frame="phone" crop src={shot("scenes")} />
					</div>
					<div className={`${s.stagePhone} ${s.stageCenter}`}>
						<ShotSlot index="01" title={c.hero.shots.conversation} frame="phone" crop priority src="/converloop/conversation.webp" />
					</div>
					<div className={`${s.stagePhone} ${s.stageSide} ${s.stageRight}`}>
						<ShotSlot index="03" title={c.hero.shots.detail} frame="phone" crop src={shot("scene-detail")} />
					</div>

					<div className={`${s.chip} ${s.chipCorrection}`} aria-hidden="true">
						<span className={s.chipLabel}>{c.hero.chipCorrection}</span>
						<span className={`${s.app} ${s.chipText}`}>I <del>goed</del> <ins>went</ins> · <del>buyed</del> <ins>bought</ins></span>
					</div>
					<div className={`${s.chip} ${s.chipReview}`} aria-hidden="true">
						<span className={s.chipLabel}>{c.hero.chipReview}</span>
						<span className={`${s.app} ${s.chipStats}`}>
							{c.hero.chipStats.map((stat) => <span key={stat.label}><b>{stat.n}</b>{stat.label}</span>)}
						</span>
					</div>
				</div>
			</section>

			{/* ---------- why ---------- */}
			<section className={s.why}>
				<div className={site.shell}>
					<p className={s.eyebrow}>{c.why.kicker}</p>
					<p className={s.whyText}>{revealWords(c.why.text, locale)}</p>
				</div>
			</section>

			{/* ---------- the loop ---------- */}
			<section className={s.loop} id="loop">
				<div className={`${site.shell} ${s.loopGrid}`}>
					<div className={s.loopAside}>
						<h2 className={s.h2}>{c.loop.heading}</h2>
						<p className={s.flow}>{c.loop.flow.join("  →  ")}</p>
						<ol className={s.loopIndex}>
							{c.loop.steps.map((step, i) => (
								<li key={step.label}>
									<a href={`#step-${i + 1}`}><span>{pad(i + 1)}</span>{step.label}</a>
								</li>
							))}
						</ol>
					</div>

					<div className={s.loopCards}>
						{c.loop.steps.map((step, i) => (
							<article className={`${s.loopCard} ${s.rise}`} id={`step-${i + 1}`} key={step.label}>
								<div className={s.loopCopy}>
									<p className={s.stepTag}><span>step {i + 1}</span>{step.label}</p>
									<h3>{step.title}</h3>
									<p>{step.body}</p>
								</div>
								<div className={s.loopVisual} data-tone={i}>{visuals[i]}</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* ---------- scenes ---------- */}
			<section className={s.scenes}>
				<div className={site.shell}>
					<header className={`${s.headCenter} ${s.rise}`}>
						<p className={s.eyebrow}>{c.scenes.kicker}</p>
						<h2 className={s.h2}>{c.scenes.heading}</h2>
						<p className={s.lede}>{c.scenes.body}</p>
					</header>
				</div>

				<div className={s.marquee}>
					{sceneRows.map((row, r) => (
						<div className={`${s.marqueeTrack} ${r === 1 ? s.marqueeReverse : ""}`} key={r}>
							{[...row, ...row].map((scene, k) => (
								<span className={s.sceneChip} data-c={scene.c} key={k} aria-hidden={k >= row.length || undefined}>
									<span className={s.sceneChipEmoji}>{scene.e}</span>
									{zh ? scene.zh : scene.en}
								</span>
							))}
						</div>
					))}
				</div>

				<div className={`${site.shell} ${s.scenesSplit}`}>
					<ol className={s.shelves}>
						{c.scenes.points.map((point, i) => (
							<li key={point.title}>
								<span>{pad(i + 1)}</span>
								<div>
									<h3>{point.title}</h3>
									<p>{point.body}</p>
								</div>
							</li>
						))}
					</ol>
					<figure className={`${s.ipadFigure} ${s.rise}`}>
						<ShotSlot index="04" title={c.scenes.ipadAlt} frame="ipad" ratio="3 / 4" crop src={shot("ipad-scenes")} />
						<figcaption>{c.scenes.ipadNote}</figcaption>
					</figure>
				</div>
			</section>

			{/* ---------- on every message ---------- */}
			<section className={s.toolkit}>
				<div className={site.shell}>
					<header className={`${s.head} ${s.rise}`}>
						<p className={s.eyebrow}>{c.toolkit.kicker}</p>
						<h2 className={s.h2}>{c.toolkit.heading}</h2>
						<p className={s.lede}>{c.toolkit.body}</p>
					</header>

					<div className={s.bento}>
						<article className={`${s.tile} ${s.tileLookup} ${s.rise}`}>
							<div>
								<span className={s.tileIcon}><Icon name="sparkle" /></span>
								<h3>{c.toolkit.lookup.title}</h3>
								<p>{c.toolkit.lookup.body}</p>
							</div>
							<div className={`${s.app} ${s.lookupCard}`} aria-hidden="true">
								<span className={s.lookupCat}>{c.toolkit.lookup.card.category}</span>
								<p className={s.lookupTerm}>{c.toolkit.lookup.card.term}</p>
								<div className={s.lookupMeaning}>
									<small>{c.toolkit.lookup.card.meaningLabel}</small>
									{c.toolkit.lookup.card.meaning}
								</div>
								<div className={s.lookupBlock}>
									<small>{c.toolkit.lookup.card.collocationsLabel}</small>
									<span className={s.lookupChips}>
										{c.toolkit.lookup.card.collocations.map((item) => <span key={item}>{item}</span>)}
									</span>
								</div>
								<div className={s.lookupBlock}>
									<small>{c.toolkit.lookup.card.exampleLabel}</small>
									{c.toolkit.lookup.card.example}
								</div>
							</div>
						</article>

						{c.toolkit.items.map((item) => (
							<article className={`${s.tile} ${s.rise}`} key={item.title}>
								<span className={s.tileIcon}><Icon name={item.icon} /></span>
								<h3>{item.title}</h3>
								<p>{item.body}</p>
							</article>
						))}

						<article className={`${s.tile} ${s.tileReview} ${s.rise}`}>
							<div>
								<span className={s.tileIcon}><Icon name="list" /></span>
								<h3>{c.toolkit.review.title}</h3>
								<p>{c.toolkit.review.body}</p>
							</div>
							<div className={`${s.app} ${s.reviewCard}`} aria-hidden="true">
								<div className={s.reviewStats}>
									{c.toolkit.review.stats.map((stat) => <span key={stat.label}><b>{stat.n}</b><small>{stat.label}</small></span>)}
								</div>
								<div className={s.reviewLine}><small>{c.toolkit.review.patternLabel}</small>{c.toolkit.review.pattern}</div>
								<div className={s.reviewLine}><small>{c.toolkit.review.nextLabel}</small>{c.toolkit.review.next}</div>
							</div>
						</article>
					</div>
				</div>
			</section>

			{/* ---------- listening & dictation ---------- */}
			<section className={s.listen}>
				<div className={site.shell}>
					<header className={`${s.headCenter} ${s.rise}`}>
						<p className={s.eyebrow}>{c.listen.kicker}</p>
						<h2 className={s.h2}>{c.listen.heading}</h2>
						<p className={s.lede}>{c.listen.body}</p>
					</header>

					<div className={s.duo}>
						<article className={`${s.duoCard} ${s.rise}`}>
							<div className={s.duoStage} data-tone="teal">
								<div className={`${s.app} ${s.player}`} aria-hidden="true">
									<div>
										<p className={s.playerLine}>{c.listen.listening.now}</p>
										<p className={s.playerTrans}>{c.listen.listening.nowTranslation}</p>
									</div>
									<div className={s.scrub}><i /></div>
									<div className={s.controls}>
										<Skip back />
										<span className={s.playBtn}><Play /></span>
										<Skip />
									</div>
									<ul className={s.queue}>
										{c.listen.listening.queue.map((line) => <li key={line}>{line}</li>)}
									</ul>
									<div className={s.playerChips}>
										{c.listen.listening.chips.map((chip, i) => <span key={chip} data-on={i === 0 || undefined}>{chip}</span>)}
									</div>
								</div>
							</div>
							<h3>{c.listen.listening.title}</h3>
							<p>{c.listen.listening.body}</p>
						</article>

						<article className={`${s.duoCard} ${s.rise}`}>
							<div className={s.duoStage} data-tone="orange">
								<div className={`${s.app} ${s.dictation}`} aria-hidden="true">
									<div className={s.dictTop}>
										<span className={s.dictPlay}><Play /></span>
										<span className={s.dictCount}>3 / 12</span>
									</div>
									<p className={s.dictLine}>
										This whole <del>set up</del> <ins>setup</ins> <del>feel</del> <ins>feels</ins> like <ins>a</ins> rat race.
									</p>
									<p className={s.dictResult}>{c.listen.dictation.result}</p>
									<div className={s.dictActions}>
										{c.listen.dictation.actions.map((action) => <span key={action}>{action}</span>)}
									</div>
								</div>
							</div>
							<h3>{c.listen.dictation.title}</h3>
							<p>{c.listen.dictation.body}</p>
						</article>
					</div>
					<p className={`${s.note} ${s.noteCenter}`}>{c.listen.note}</p>
				</div>
			</section>

			{/* ---------- memory boundary ---------- */}
			<section className={s.memory}>
				<div className={site.shell}>
					<div className={s.memoryGrid}>
						<header className={s.rise}>
							<p className={s.eyebrow}>{c.memory.kicker}</p>
							<h2 className={s.h2}>{c.memory.heading}</h2>
							<p className={s.lede}>{c.memory.body}</p>
						</header>
						<div className={s.boundary}>
							<article className={`${s.boundaryCard} ${s.boundaryKept} ${s.rise}`}>
								<h3><span aria-hidden="true">✓</span>{c.memory.keptTitle}</h3>
								<ul>{c.memory.kept.map((item) => <li key={item}>{item}</li>)}</ul>
							</article>
							<article className={`${s.boundaryCard} ${s.boundaryNever} ${s.rise}`}>
								<h3><span aria-hidden="true">✕</span>{c.memory.neverTitle}</h3>
								<ul>{c.memory.never.map((item) => <li key={item}>{item}</li>)}</ul>
							</article>
						</div>
					</div>
					<ul className={s.facts}>
						{c.memory.facts.map((fact) => <li key={fact.text}><Icon name={fact.icon} />{fact.text}</li>)}
					</ul>
				</div>
			</section>

			{/* ---------- models ---------- */}
			<section className={s.models}>
				<div className={site.shell}>
					<div className={s.modelsTop}>
						<header className={s.rise}>
							<p className={s.eyebrow}>{c.models.kicker}</p>
							<h2 className={s.h2}>{c.models.heading}</h2>
							<p className={s.lede}>{c.models.body}</p>
						</header>
						<div className={s.orbit} aria-hidden="true">
							<span className={s.ring}>
								{c.models.orbitOuter.map((name, i, all) => (
									<span key={name} style={vars({ "--a": `${(360 / all.length) * i}deg` })}><b>{name}</b></span>
								))}
							</span>
							<span className={`${s.ring} ${s.ringInner}`}>
								{c.models.orbitInner.map((name, i, all) => (
									<span key={name} style={vars({ "--a": `${(360 / all.length) * i + 30}deg` })}><b>{name}</b></span>
								))}
							</span>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img className={s.orbitMark} src="/converloop/mark.webp" alt="" width={128} height={128} loading="lazy" />
						</div>
					</div>

					<div className={s.options}>
						{c.models.options.map((option, i) => (
							<article className={`${s.option} ${s.rise}`} key={option.name}>
								<span className={s.optionNum}>{pad(i + 1)}</span>
								<span className={s.optionTag}>{option.tag}</span>
								<h3>{option.name}</h3>
								<p>{option.body}</p>
							</article>
						))}
					</div>
					<p className={s.note}>{c.models.voices}</p>
				</div>
			</section>

			{/* ---------- pricing ---------- */}
			<section className={s.pricing}>
				<div className={site.shell}>
					<header className={`${s.headCenter} ${s.rise}`}>
						<p className={s.eyebrow}>{c.pricing.kicker}</p>
						<h2 className={s.h2}>{c.pricing.heading}</h2>
						<p className={s.lede}>{c.pricing.body}</p>
					</header>
					<div className={s.plans}>
						{c.pricing.plans.map((plan) => (
							<article className={`${s.plan} ${plan.featured ? s.planFeatured : ""} ${s.rise}`} key={plan.name}>
								<h3>{plan.name}</h3>
								<p className={s.planFor}>{plan.for}</p>
								<p className={s.price}><b>{plan.price}</b><span>{plan.unit}</span></p>
								<ul className={`${site.checks} ${s.planPoints}`}>
									{plan.points.map((point) => <li key={point}>{point}</li>)}
								</ul>
							</article>
						))}
					</div>
					<p className={`${s.note} ${s.noteCenter}`}>{c.pricing.note}</p>
				</div>
			</section>

			{/* ---------- faq ---------- */}
			<section className={s.faq}>
				<div className={`${site.shell} ${s.faqGrid}`}>
					<div className={s.faqAside}>
						<h2 className={s.h2}>{c.faq.heading}</h2>
						<p className={s.lede}>{c.faq.body}</p>
						<div className={`${s.actions} ${s.actionsStart}`}>
							<a className={`${site.btn} ${s.btnInk}`} href={mail}>{c.faq.email}</a>
							<Link className={`${site.btn} ${site.btnGhost}`} href={`${base}/converloop/support`}>{c.faq.support}</Link>
						</div>
					</div>
					<div className={s.faqList}>
						{c.faq.items.map((item, i) => (
							<details className={s.faqItem} key={item.q}>
								<summary>
									<span className={s.faqNum}>{pad(i + 1)}</span>
									<span className={s.faqQ}>{item.q}</span>
									<span className={s.faqPlus} aria-hidden="true" />
								</summary>
								<p>
									{item.a}
									{"link" in item ? <> <Link href={`${base}/converloop/desktop`}>{item.link} →</Link></> : null}
								</p>
							</details>
						))}
					</div>
				</div>
			</section>

			{/* ---------- closing ---------- */}
			<section className={s.final}>
				<div className={site.shell}>
					<div className={s.finalCard}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img className={s.finalMark} src="/converloop/mark.webp" alt="" width={128} height={128} loading="lazy" />
						<h2>{c.final.heading}</h2>
						<p>{c.final.body}</p>
						<div className={s.actions}>
							{appStoreButton}
							<a className={`${site.btn} ${live ? site.btnGhost : s.btnInk}`} href={mail}>{c.faq.email}</a>
						</div>
					</div>
					<p className={s.wordmark} aria-hidden="true">{CONVERLOOP.name}</p>
					<nav className={s.legal} aria-label={CONVERLOOP.name}>
						<Link href={`${base}/converloop/privacy`}>{c.legal.privacy}</Link>
						<Link href={`${base}/converloop/support`}>{c.legal.support}</Link>
						<Link href={`${base}/converloop/desktop`}>{c.legal.desktop}</Link>
					</nav>
				</div>
			</section>
		</main>
	);
}
