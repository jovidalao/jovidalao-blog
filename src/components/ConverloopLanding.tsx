import { CONVERLOOP } from "@/consts";
import { getUi, type Locale } from "@/i18n";
import styles from "./Converloop.module.css";

function cn(...values: Array<string | false | undefined>) {
	return values
		.filter(Boolean)
		.flatMap((value) => String(value).split(" "))
		.map((name) => styles[name])
		.filter(Boolean)
		.join(" ");
}

export function ConverloopLanding({ locale }: { locale: Locale }) {
	const t = getUi(locale);
	const c = t.converloop;
	const l = c.launch;
	const d = c.demo;
	const s = c.showcase;
	const reply = s.reply;

	return <main className={cn("converloop-main")}>
	<section className={cn("cl2-hero")}>
		<div className={cn("cl2-glow cl2-glow--one")} aria-hidden="true"></div>
		<div className={cn("cl2-glow cl2-glow--two")} aria-hidden="true"></div>
		<div className={cn("cl2-shell cl2-hero-grid")}>
			<div className={cn("cl2-hero-copy")}>
				<div className={cn("cl2-brand")}>
					<img src="/converloop-icon.png" width="52" height="52" alt="" />
					<span>{CONVERLOOP.name}</span>
				</div>
				<p className={cn("cl2-status")}><span aria-hidden="true"></span>{l.status}</p>
				<p className={cn("cl2-eyebrow")}>{l.heroEyebrow}</p>
				<h1 aria-label={`${l.heroTitle} ${l.heroAccent}`}>
					{l.heroTitle}<br /><span>{l.heroAccent}</span>
				</h1>
				<p className={cn("cl2-hero-body")}>{l.heroBody}</p>
				<div className={cn("cl2-actions")}>
					<a className={cn("cl2-button cl2-button--primary")} href={CONVERLOOP.releaseUrl} target="_blank" rel="noopener noreferrer">
						<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 20h14" /></svg>
						<span><strong>{l.download}</strong><small>{l.downloadNote}</small></span>
					</a>
					<a className={cn("cl2-button cl2-button--secondary")} href={CONVERLOOP.repoUrl} target="_blank" rel="noopener noreferrer">
						<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l6-6-6-6M9 6l-6 6 6 6" /></svg>
						<strong>{l.source}</strong>
					</a>
				</div>
				<p className={cn("cl2-trust")}>{l.trust}</p>
			</div>

			<figure className={cn("cl2-product-stage")} aria-label={l.preview.realScreenshotAlt}>
				<div className={cn("cl2-real-shot-backdrop")} aria-hidden="true"></div>
				<div className={cn("cl2-real-device cl2-real-device--desktop")}>
					<span className={cn("cl2-device-label")}>macOS</span>
					<img
						src="/converloop-desktop-conversation.jpg?v=1"
						width="1040"
						height="720"
						alt={l.preview.desktopScreenshotAlt}
						loading="eager"
						fetchPriority="high"
					/>
				</div>
				<div className={cn("cl2-real-device cl2-real-device--mobile")}>
					<span className={cn("cl2-device-label")}>iPhone</span>
					<img
						src="/converloop-ios-conversation.png?v=1"
						width="1206"
						height="2622"
						alt={l.preview.mobileScreenshotAlt}
						loading="eager"
						fetchPriority="high"
					/>
				</div>
				<figcaption><span aria-hidden="true"></span>{l.preview.realScreenshotLabel}</figcaption>
			</figure>
		</div>
	</section>

	<section className={cn("cl2-section cl2-loop")}>
		<div className={cn("cl2-shell")}>
			<div className={cn("cl2-section-head")}>
				<p className={cn("cl2-kicker")}>{l.loop.kicker}</p>
				<h2>{l.loop.heading}</h2>
				<p>{l.loop.body}</p>
			</div>
			<div className={cn("cl2-loop-grid")}>
				{l.loop.steps.map((step, index) => (
					<article key={step.number}>
						<div className={cn("cl2-step-top")}><span>{step.number}</span><i className={cn(index === l.loop.steps.length - 1 && "last")}></i></div>
						<h3>{step.title}</h3>
						<p>{step.body}</p>
					</article>
				))}
			</div>
		</div>
	</section>

	<section className={cn("cl2-section cl2-interactions-section")}>
		<div className={cn("cl2-shell")}>
			<div className={cn("cl2-section-head cl2-section-head--center")}>
				<p className={cn("cl2-kicker")}>{s.kicker}</p>
				<h2>{s.heading}</h2>
				<p>{s.intro}</p>
			</div>

			<article className={cn("cl2-correction-spotlight")}>
				<div className={cn("cl2-interaction-copy")}>
					<span className={cn("cl2-demo-number")}>01 · correction</span>
					<h3>{s.correction.title}</h3>
					<p>{s.correction.body}</p>
				</div>
				<div className={cn("cl2-correction-demo")} role="group" aria-label={s.correction.title}>
					<div className={cn("cl2-demo-title")}><span>{d.convo}</span><i></i></div>
					<div className={cn("cl2-demo-conversation")}>
						<p className={cn("cl2-demo-ai")}>{d.aiOpen}</p>
						<div className={cn("cl2-demo-user")}>
							<p>{d.userPre}<del>{d.userDel}</del> <ins>{d.userIns}</ins>{d.userPost}</p>
							<div className={cn("cl2-natural-version")}>
								<span aria-hidden="true">✦</span>
								<div><small>{s.correction.naturalLabel}</small><strong>{d.natural}</strong></div>
							</div>
						</div>
						<div className={cn("cl2-grammar-card")}>
							<div><span>{d.issueCat}</span><small>{d.issueSev}</small></div>
							<p><del>{d.userDel}</del><b>→</b><ins>{d.userIns}</ins></p>
							<small>{d.issueExp}</small>
						</div>
						<p className={cn("cl2-demo-ai")}>{d.reply}</p>
					</div>
				</div>
			</article>

			<div className={cn("cl2-interaction-grid")}>
				<article className={cn("cl2-interaction-card cl2-interaction-card--wide")}>
					<div className={cn("cl2-interaction-copy")}>
						<span className={cn("cl2-demo-number")}>02 · compose</span>
						<h3>{s.slash.title}</h3>
						<p>{s.slash.body}</p>
					</div>
					<div className={cn("cl2-slash-demo")} role="group" aria-label={s.slash.title}>
						<div className={cn("cl2-slash-menu")}>
							{s.slash.rows.map((row, index) => (
								<div key={row.name} className={cn("cl2-slash-row", index === 0 && "selected")}>
									<code>/{row.name}</code>
									{'args' in row && row.args && <span>{row.args}</span>}
									<small>{row.desc}</small>
								</div>
							))}
							<p className={cn("cl2-slash-foot")}><span aria-hidden="true">⌁</span>{s.slash.foot}</p>
						</div>
						<div className={cn("cl2-showcase-input")}><b>/</b><i></i><span>{s.slash.inputPlaceholder}</span><strong>↑</strong></div>
					</div>
				</article>

				<article className={cn("cl2-interaction-card")}>
					<div className={cn("cl2-interaction-copy")}>
						<span className={cn("cl2-demo-number")}>03 · understand</span>
						<h3>{reply.title}</h3>
						<p>{reply.body}</p>
					</div>
					<div className={cn("cl2-reply-demo")} role="group" aria-label={reply.title}>
						<div className={cn("cl2-bilingual-bubble")}>
							{reply.bubble.map((line) => <p key={line.target}><span>{line.target}</span><small>{line.native}</small></p>)}
						</div>
						<div className={cn("cl2-reply-actions")}>
							<span>◖)) {reply.actions.speak}</span>
							<span className={cn("active")}>◎ {reply.actions.explain}</span>
							<span className={cn("active")}>文 {reply.actions.bilingual}</span>
						</div>
						<div className={cn("cl2-explain-card")}><b>{reply.explainLabel}</b><p>{reply.explainBody}</p></div>
					</div>
				</article>

				<article className={cn("cl2-interaction-card")}>
					<div className={cn("cl2-interaction-copy")}>
						<span className={cn("cl2-demo-number")}>04 · explore</span>
						<h3>{s.selection.title}</h3>
						<p>{s.selection.body}</p>
					</div>
					<div className={cn("cl2-selection-demo")} role="group" aria-label={s.selection.title}>
						<p>{s.selection.sourcePre}<mark>{s.selection.sourceHl}</mark>{s.selection.sourcePost}</p>
						<div className={cn("cl2-analysis-island")}>
							<div>
								<span className={cn("active")}>⌁ {s.selection.actions.analyze}</span>
								<span>◖)) {s.selection.actions.speak}</span>
								<span>＋ {s.selection.actions.add}</span>
							</div>
							<b>{s.selection.sourceHl}</b>
							<p>{s.selection.analysis}</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>

	<section className={cn("cl2-section cl2-platform-section")}>
		<div className={cn("cl2-shell")}>
			<div className={cn("cl2-section-head cl2-section-head--center")}>
				<p className={cn("cl2-kicker")}>{l.platforms.kicker}</p>
				<h2>{l.platforms.heading}</h2>
				<p>{l.platforms.body}</p>
			</div>
			<div className={cn("cl2-platform-grid")}>
				{l.platforms.items.map((platform, index) => (
					<article key={platform.title} className={cn("cl2-platform-card", `cl2-platform-card--${index + 1}`)}>
						<div className={cn("cl2-platform-icon")} aria-hidden="true">
							{index === 0 && <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>}
							{index === 1 && <svg viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 18h4"/></svg>}
							{index === 2 && <svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M11 18h2"/></svg>}
						</div>
						<span className={cn("cl2-platform-tag")}>{platform.tag}</span>
						<h3>{platform.title}</h3>
						<p>{platform.body}</p>
						<ul>{platform.points.map((point) => <li key={point}>{point}</li>)}</ul>
					</article>
				))}
			</div>
		</div>
	</section>

	<section className={cn("cl2-section cl2-features")}>
		<div className={cn("cl2-shell")}>
			<div className={cn("cl2-section-head")}>
				<p className={cn("cl2-kicker")}>{l.features.kicker}</p>
				<h2>{l.features.heading}</h2>
			</div>
			<div className={cn("cl2-feature-grid")}>
				{l.features.items.map((feature, index) => (
					<article key={feature.title}>
						<span>{String(index + 1).padStart(2, '0')}</span>
						<div><h3>{feature.title}</h3><p>{feature.body}</p></div>
					</article>
				))}
			</div>
		</div>
	</section>

	<section className={cn("cl2-section cl2-continuity-section")}>
		<div className={cn("cl2-shell cl2-continuity-grid")}>
			<div className={cn("cl2-continuity-copy")}>
				<p className={cn("cl2-kicker")}>{l.continuity.kicker}</p>
				<h2>{l.continuity.heading}</h2>
				<p>{l.continuity.body}</p>
				<div className={cn("cl2-file")} aria-hidden="true">
					<span>{'{ }'}</span>
					<div><b>{l.continuity.file}</b><small>converloop.portable-backup · v1</small></div>
					<i>JSON</i>
				</div>
			</div>
			<div className={cn("cl2-continuity-points")}>
				{l.continuity.points.map((point, index) => (
					<article key={point.title}><span>{index + 1}</span><div><h3>{point.title}</h3><p>{point.body}</p></div></article>
				))}
			</div>
		</div>
	</section>

	<section className={cn("cl2-section cl2-privacy-section")}>
		<div className={cn("cl2-shell cl2-privacy")}>
			<div className={cn("cl2-privacy-copy")}>
				<p className={cn("cl2-kicker")}>{l.privacy.badge}</p>
				<h2>{l.privacy.heading}</h2>
				<p>{l.privacy.body}</p>
				<ul className={cn("cl2-privacy-trust")}>{l.privacy.points.map((point) => <li key={point}><span>✓</span>{point}</li>)}</ul>
			</div>
			<div className={cn("cl2-memory-boundary")}>
				<article className={cn("cl2-memory-boundary-card cl2-memory-boundary-card--kept")}>
					<div><span aria-hidden="true">✓</span><h3>{l.privacy.keptTitle}</h3></div>
					<ul>{l.privacy.kept.map((item) => <li key={item}>{item}</li>)}</ul>
				</article>
				<article className={cn("cl2-memory-boundary-card cl2-memory-boundary-card--private")}>
					<div><span aria-hidden="true">—</span><h3>{l.privacy.privateTitle}</h3></div>
					<ul>{l.privacy.private.map((item) => <li key={item}>{item}</li>)}</ul>
				</article>
			</div>
		</div>
	</section>

	<section className={cn("cl2-section cl2-release-section")}>
		<div className={cn("cl2-shell")}>
			<div className={cn("cl2-section-head cl2-section-head--center")}>
				<p className={cn("cl2-kicker")}>{l.release.kicker}</p>
				<h2>{l.release.heading}</h2>
				<p>{l.release.body}</p>
			</div>
			<div className={cn("cl2-release-grid")}>
				<article className={cn("cl2-release-card cl2-release-card--available")}>
					<span className={cn("cl2-release-dot")}></span>
					<div><h3>{l.release.macTitle}</h3><p>{l.release.macBody}</p></div>
					<a href={CONVERLOOP.releaseUrl} target="_blank" rel="noopener noreferrer">{l.download}<span>↗</span></a>
				</article>
				<article className={cn("cl2-release-card")}>
					<span className={cn("cl2-release-icon")}>⌁</span>
					<div><h3>{l.release.roadTitle}</h3><p>{l.release.roadBody}</p></div>
					<a href={CONVERLOOP.repoUrl} target="_blank" rel="noopener noreferrer">{l.source}<span>↗</span></a>
				</article>
			</div>

			<div className={cn("cl2-faq")}>
				<h2>{l.faq.heading}</h2>
				<div>{l.faq.items.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
			</div>
		</div>
	</section>

	<section className={cn("cl2-final")}>
		<div className={cn("cl2-shell")}>
			<img src="/converloop-icon.png" width="80" height="80" alt="" />
			<h2>{l.final.heading}</h2>
			<p>{l.final.body}</p>
			<div className={cn("cl2-actions cl2-actions--center")}>
				<a className={cn("cl2-button cl2-button--primary")} href={CONVERLOOP.releaseUrl} target="_blank" rel="noopener noreferrer"><strong>{l.download}</strong></a>
				<a className={cn("cl2-button cl2-button--secondary")} href={CONVERLOOP.repoUrl} target="_blank" rel="noopener noreferrer"><strong>{l.source}</strong></a>
			</div>
		</div>
	</section>
</main>;
}
