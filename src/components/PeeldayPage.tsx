import Link from "next/link";
import { PEELDAY } from "@/consts";
import { getPeelday, getUi, localeBase, peeldayLibrary, type Locale } from "@/i18n";
import { Arrow, pad, revealWords, vars } from "./ConverloopPage";
import s from "./ConverloopPage.module.css";
import { Icon } from "./Icon";
import p from "./PeeldayPage.module.css";
import { ShotSlot } from "./Shot";
import site from "./site.module.css";

/** Simulator captures of the Debug build, Dynamic Island already painted in, so frames skip their own. */
const shot = (name: string) => `/peelday/${name}.webp`;

export function PeeldayPage({ locale }: { locale: Locale }) {
	const c = getPeelday(locale);
	const { name, legal } = getUi(locale).peelday;
	const base = localeBase(locale);
	const zh = locale === "zh";
	const mail = `mailto:${PEELDAY.contactEmail}`;
	const { hero } = c;
	const suffix = zh ? "，" : "";

	const appStoreButton = (
		<a className={`${site.btn} ${s.btnInk}`} href={PEELDAY.appStoreUrl} target="_blank" rel="noreferrer">
			{c.appStore}
			<Arrow />
		</a>
	);

	const visuals = [
		<div className={`${s.app} ${p.menu}`} aria-hidden="true" key="pick">
			<div className={p.menuList}>
				<p className={p.menuTitle}>{c.make.menuTitle}</p>
				{c.make.menu.map((item) => (
					<span className={p.menuItem} key={item.label}>
						{item.label}
						<Icon name={item.icon} />
					</span>
				))}
			</div>
			<span className={p.plus} />
		</div>,
		<div className={p.peek} key="style">
			<ShotSlot index="02" title={hero.shots.maker} frame="phone" ratio="9 / 12" crop island={false} src={shot("maker")} />
		</div>,
		<div className={p.peek} key="read">
			<ShotSlot index="03" title={hero.shots.ticket} frame="phone" ratio="9 / 12" crop island={false} src={shot("ticket")} />
		</div>,
		<div className={p.sheet} key="place">
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src={shot("page")} alt={hero.shots.page} loading="lazy" />
		</div>,
	];

	return (
		<main className={`${p.page} ${zh ? s.zh : ""}`}>
			{/* ---------- hero ---------- */}
			<section className={s.hero}>
				<div className={s.heroBackdrop} aria-hidden="true" />
				<div className={`${site.shell} ${s.heroInner}`}>
					<p className={s.pill}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img className={p.icon} src="/peelday/app-icon.png" alt="" width={24} height={24} />
						<b>{name}</b>
						<span className={s.pillSep} aria-hidden="true" />
						<span className={`${s.dot} ${p.live}`} aria-hidden="true" />
						{c.status}
					</p>

					<h1 className={s.heroTitle}>
						<span className="sr-only">
							{zh ? `${hero.lead}${hero.words[0]}${suffix}${hero.tail}` : `${hero.lead} ${hero.words[0]} ${hero.tail}`}
						</span>
						<span aria-hidden="true">
							{hero.lead}
							{zh ? null : " "}
							<span className={`${s.rotator} ${p.rotator}`}>
								{hero.words.map((word, i) => (
									<span key={word} style={vars({ "--i": i })}><mark>{word}</mark>{suffix}</span>
								))}
							</span>
							<br />
							{hero.tail}
						</span>
					</h1>

					<p className={s.heroBody}>
						{hero.bodyBefore}
						<mark className={s.marker}>{hero.bodyMark}</mark>
						{hero.bodyAfter}
					</p>

					<div className={s.actions}>
						{appStoreButton}
						<a className={`${site.btn} ${site.btnGhost}`} href="#make">{c.howItWorks}</a>
					</div>
					<p className={s.requirement}>{c.requirement}</p>

					<ul className={`${s.strip} ${p.strip}`}>
						{hero.strip.map((item) => (
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
						<ShotSlot index="02" title={hero.shots.maker} frame="phone" crop island={false} src={shot("maker")} />
					</div>
					<div className={`${s.stagePhone} ${s.stageCenter}`}>
						<ShotSlot index="01" title={hero.shots.page} frame="phone" crop island={false} priority src={shot("page")} />
					</div>
					<div className={`${s.stagePhone} ${s.stageSide} ${s.stageRight}`}>
						<ShotSlot index="03" title={hero.shots.ticket} frame="phone" crop island={false} src={shot("ticket")} />
					</div>

					<div className={`${s.chip} ${s.chipCorrection}`} aria-hidden="true">
						<span className={s.chipLabel}>{hero.chipTicket.label}</span>
						<span className={p.miniTicket}>
							<b>{hero.chipTicket.title}</b>
							<small>{hero.chipTicket.meta}</small>
						</span>
					</div>
					<div className={`${s.chip} ${s.chipReview}`} aria-hidden="true">
						<span className={s.chipLabel}>{hero.chipPage.label}</span>
						<span className={`${s.app} ${s.chipStats}`}>
							{hero.chipPage.stats.map((stat) => <span key={stat.label}><b>{stat.n}</b>{stat.label}</span>)}
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

			{/* ---------- how a page happens ---------- */}
			<section className={s.loop} id="make">
				<div className={`${site.shell} ${s.loopGrid}`}>
					<div className={s.loopAside}>
						<h2 className={s.h2}>{c.make.heading}</h2>
						<p className={s.flow}>{c.make.flow.join("  →  ")}</p>
						<ol className={s.loopIndex}>
							{c.make.steps.map((step, i) => (
								<li key={step.label}>
									<a href={`#step-${i + 1}`}><span>{pad(i + 1)}</span>{step.label}</a>
								</li>
							))}
						</ol>
					</div>

					<div className={s.loopCards}>
						{c.make.steps.map((step, i) => (
							<article className={`${s.loopCard} ${s.rise}`} id={`step-${i + 1}`} key={step.label}>
								<div className={s.loopCopy}>
									<p className={s.stepTag}><span>step {i + 1}</span>{step.label}</p>
									<h3>{step.title}</h3>
									<p>{step.body}</p>
								</div>
								<div className={`${s.loopVisual} ${p.visual}`} data-tone={i}>{visuals[i]}</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* ---------- styles & stickers ---------- */}
			<section className={`${s.scenes} ${p.library}`}>
				<div className={site.shell}>
					<header className={`${s.headCenter} ${s.rise}`}>
						<p className={s.eyebrow}>{c.library.kicker}</p>
						<h2 className={s.h2}>{c.library.heading}</h2>
						<p className={s.lede}>{c.library.body}</p>
					</header>
				</div>

				<div className={s.marquee}>
					{peeldayLibrary.map((row, r) => (
						<div className={`${s.marqueeTrack} ${r === 1 ? s.marqueeReverse : ""}`} key={r}>
							{[...row, ...row].map((item, k) => (
								<span className={s.sceneChip} data-c={r} key={k} aria-hidden={k >= row.length || undefined}>
									<span className={s.sceneChipEmoji}>{item.e}</span>
									{zh ? item.zh : item.en}
								</span>
							))}
						</div>
					))}
				</div>
			</section>

			{/* ---------- calendar & search ---------- */}
			<section className={s.scenes}>
				<div className={`${site.shell} ${p.split}`}>
					<div className={s.rise}>
						<p className={s.eyebrow}>{c.find.kicker}</p>
						<h2 className={s.h2}>{c.find.heading}</h2>
						<p className={s.lede}>{c.find.body}</p>
						<ol className={`${s.shelves} ${p.points}`}>
							{c.find.points.map((point, i) => (
								<li key={point.title}>
									<span>{pad(i + 1)}</span>
									<div>
										<h3>{point.title}</h3>
										<p>{point.body}</p>
									</div>
								</li>
							))}
						</ol>
					</div>
					<div className={`${p.pair} ${s.rise}`}>
						<div>
							<ShotSlot index="04" title={c.find.shots.calendar} frame="phone" crop island={false} src={shot("calendar")} />
						</div>
						<div>
							<ShotSlot index="05" title={c.find.shots.search} frame="phone" crop island={false} src={shot("search")} />
						</div>
					</div>
				</div>
			</section>

			{/* ---------- widget ---------- */}
			<section className={s.scenes}>
				<div className={`${site.shell} ${p.split} ${p.splitFlip}`}>
					<div className={s.rise}>
						<p className={s.eyebrow}>{c.widget.kicker}</p>
						<h2 className={s.h2}>{c.widget.heading}</h2>
						<p className={s.lede}>{c.widget.body}</p>
						<ul className={`${site.checks} ${p.checks}`}>
							{c.widget.points.map((point) => <li key={point}>{point}</li>)}
						</ul>
					</div>
					<div className={`${p.solo} ${s.rise}`}>
						<ShotSlot index="06" title={c.widget.shot} frame="phone" ratio="9 / 15" crop island={false} src={shot("widget")} />
					</div>
				</div>
			</section>

			{/* ---------- privacy ---------- */}
			<section className={`${s.memory} ${p.privacy}`}>
				<div className={site.shell}>
					<div className={s.memoryGrid}>
						<header className={s.rise}>
							<p className={s.eyebrow}>{c.privacy.kicker}</p>
							<h2 className={s.h2}>{c.privacy.heading}</h2>
							<p className={s.lede}>{c.privacy.body}</p>
						</header>
						<div className={s.boundary}>
							<article className={`${s.boundaryCard} ${s.boundaryKept} ${s.rise}`}>
								<h3><span aria-hidden="true">✓</span>{c.privacy.keptTitle}</h3>
								<ul>{c.privacy.kept.map((item) => <li key={item}>{item}</li>)}</ul>
							</article>
							<article className={`${s.boundaryCard} ${s.boundaryNever} ${s.rise}`}>
								<h3><span aria-hidden="true">✕</span>{c.privacy.neverTitle}</h3>
								<ul>{c.privacy.never.map((item) => <li key={item}>{item}</li>)}</ul>
							</article>
						</div>
					</div>
					<ul className={s.facts}>
						{c.privacy.facts.map((fact) => <li key={fact.text}><Icon name={fact.icon} />{fact.text}</li>)}
					</ul>
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
							<article className={`${s.plan} ${plan.featured ? `${s.planFeatured} ${p.featured}` : ""} ${s.rise}`} key={plan.name}>
								<h3>{plan.name}</h3>
								<p className={s.planFor}>{plan.for}</p>
								<p className={s.price}><b>{plan.price}</b>{plan.unit ? <span>{plan.unit}</span> : null}</p>
								<ul className={`${site.checks} ${s.planPoints} ${p.checks}`}>
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
							<Link className={`${site.btn} ${site.btnGhost}`} href={`${base}/peelday/privacy`}>{legal.privacy}</Link>
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
								<p>{item.a}</p>
							</details>
						))}
					</div>
				</div>
			</section>

			{/* ---------- closing ---------- */}
			<section className={s.final}>
				<div className={site.shell}>
					<div className={`${s.finalCard} ${p.finalCard}`}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img className={p.finalIcon} src="/peelday/app-icon.png" alt="" width={104} height={104} loading="lazy" />
						<h2>{c.final.heading}</h2>
						<p>{c.final.body}</p>
						<div className={s.actions}>
							{appStoreButton}
							<a className={`${site.btn} ${site.btnGhost}`} href={mail}>{c.faq.email}</a>
						</div>
					</div>
					<p className={s.wordmark} aria-hidden="true">{name}</p>
					<nav className={s.legal} aria-label={name}>
						<Link href={`${base}/peelday/privacy`}>{legal.privacy}</Link>
						<Link href={`${base}/peelday/terms`}>{legal.terms}</Link>
						<a href={mail}>{legal.contact}</a>
					</nav>
				</div>
			</section>
		</main>
	);
}
