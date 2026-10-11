import Link from "next/link";
import type { CSSProperties } from "react";
import { CONVERLOOP, PEELDAY, SITE_TITLE } from "@/consts";
import { getConverloop, getHome, getUi, localeBase, type Locale } from "@/i18n";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/date";
import { peeldayShots } from "@/lib/peelday-shots";
import { Arrow } from "./ConverloopPage";
import s from "./ConverloopPage.module.css";
import h from "./Home.module.css";
import { Icon } from "./Icon";
import { ShotSlot } from "./Shot";
import site from "./site.module.css";

export async function HomePage({ locale }: { locale: Locale }) {
	const c = getHome(locale);
	const ui = getUi(locale);
	const base = localeBase(locale);
	const zh = locale === "zh";
	const greetings = [
		{ lang: locale, text: zh ? "你好" : "Hello" },
		{ lang: zh ? "en" : "zh", text: zh ? "Hello" : "你好" },
		{ lang: "ja", text: "こんにちは" },
		{ lang: "ko", text: "안녕하세요" },
		{ lang: "fr", text: "Bonjour" },
		{ lang: "es", text: "Hola" },
		{ lang: "it", text: "Ciao" },
		{ lang: "ar", text: "مرحبًا" },
	];
	const posts = (await getAllPosts(locale)).slice(0, 3);
	const { peelday, converloop, desktop } = c.apps;
	const desktopAlt = ui.converloopDesktop.shots.hero.alt;
	const conversationAlt = getConverloop(locale).hero.shots.conversation;

	return (
		<main className={`${s.page} ${zh ? s.zh : ""}`}>
			{/* ---------- hero ---------- */}
			<section className={s.hero}>
				<div className={s.heroBackdrop} aria-hidden="true" />
				<div className={`${site.shell} ${s.heroInner}`}>
					<p className={s.pill}>
						<span className={h.avatar} aria-hidden="true">j</span>
						<b>{SITE_TITLE}</b>
						<span className={s.pillSep} aria-hidden="true" />
						{c.pill}
					</p>

					<h1 className={s.heroTitle}>
						<span className="sr-only">{greetings[0].text}</span>
						<span className={h.greetings} aria-hidden="true">
							{greetings.map((greeting, i) => (
								<span key={greeting.lang} className={h.accent} lang={greeting.lang} dir="auto" style={{ "--i": i } as CSSProperties}>
									{greeting.text}
								</span>
							))}
						</span>
					</h1>

					<p className={s.heroBody}>
						{c.bodyBefore}
						<Link href={`${base}/peelday`}><mark className={`${s.marker} ${h.peel}`}>{c.bodyMark}</mark></Link>
						{c.bodyMiddle}
						<Link href={`${base}/converloop`}><mark className={s.marker}>{c.bodyMark2}</mark></Link>
						{c.bodyAfter}
					</p>

					<div className={s.actions}>
						<a className={`${site.btn} ${s.btnInk}`} href="#apps">
							{c.seeApps}
							<Arrow down />
						</a>
						<Link className={`${site.btn} ${site.btnGhost}`} href={`${base}/blog`}>{c.writing}</Link>
					</div>
				</div>

				<div className={h.stage}>
					<div className={h.window}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src="/converloop-desktop-conversation.jpg" alt={desktopAlt} width={1040} height={720} fetchPriority="high" />
					</div>
					<div className={`${h.phone} ${h.phoneLeft}`}>
						<ShotSlot index="01" title={c.shots.peelday} frame="phone" crop island={false} priority src={peeldayShots.page} />
					</div>
					<div className={`${h.phone} ${h.phoneRight}`}>
						<ShotSlot index="02" title={c.shots.converloop} frame="phone" crop priority src="/converloop/conversation.webp" />
					</div>
				</div>
			</section>

			{/* ---------- apps ---------- */}
			<section className={site.section} id="apps">
				<div className={site.shell}>
					<header className={`${s.head} ${s.rise}`}>
						<p className={s.eyebrow}>{c.apps.kicker}</p>
						<h2 className={s.h2}>{c.apps.heading}</h2>
						<p className={s.lede}>{c.apps.body}</p>
					</header>

					<div className={h.apps}>
						<article className={`${h.app} ${h.appPeelday} ${s.rise}`}>
							<div className={h.appHead}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="/peelday/app-icon.png" alt="" width={44} height={44} loading="lazy" />
								<span className={h.appName}>{ui.peelday.name}</span>
								<span className={h.status}>{peelday.status}</span>
							</div>
							<h3>{peelday.tagline}</h3>
							<p>{peelday.body}</p>
							<ul className={h.facts}>{peelday.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
							<div className={h.appActions}>
								<Link className={`${site.btn} ${s.btnInk}`} href={`${base}/peelday`}>{peelday.cta}<Arrow /></Link>
								<a className={`${site.btn} ${site.btnGhost}`} href={PEELDAY.appStoreUrl} target="_blank" rel="noreferrer">{peelday.store}</a>
							</div>
							<div className={h.appShot}>
								<ShotSlot index="01" title={c.shots.peelday} frame="phone" crop island={false} src={peeldayShots.page} />
							</div>
						</article>

						<article className={`${h.app} ${s.rise}`}>
							<div className={h.appHead}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="/converloop/icon.webp" alt="" width={44} height={44} loading="lazy" />
								<span className={h.appName}>{CONVERLOOP.name}</span>
								<span className={`${h.status} ${h.soon}`}>{converloop.status}</span>
							</div>
							<h3>{converloop.tagline}</h3>
							<p>{converloop.body}</p>
							<ul className={h.facts}>{converloop.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
							<div className={h.appActions}>
								<Link className={`${site.btn} ${s.btnInk}`} href={`${base}/converloop`}>{converloop.cta}<Arrow /></Link>
							</div>
							<div className={h.appShot}>
								<ShotSlot index="02" title={c.shots.converloop} frame="phone" crop src="/converloop/conversation.webp" />
							</div>
						</article>

						<article className={`${h.app} ${h.appDesktop} ${s.rise}`}>
							<div>
								<div className={h.appHead}>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img src="/converloop/icon.webp" alt="" width={44} height={44} loading="lazy" />
									<span className={h.appName}>{desktop.tagline}</span>
									<span className={`${h.status} ${h.desktop}`}>{desktop.status}</span>
								</div>
								<h3>{ui.converloopDesktop.tagline}</h3>
								<p>{desktop.body}</p>
								<ul className={h.facts}>{desktop.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
								<div className={h.appActions}>
									<Link className={`${site.btn} ${s.btnInk}`} href={`${base}/converloop/desktop`}>{desktop.cta}<Arrow /></Link>
									<a className={`${site.btn} ${site.btnGhost}`} href={CONVERLOOP.releaseUrl} target="_blank" rel="noreferrer">{desktop.download}</a>
								</div>
							</div>
							<div className={h.appWindow}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="/converloop-desktop-conversation.jpg" alt={desktopAlt} width={1040} height={720} loading="lazy" />
							</div>
						</article>
					</div>
				</div>
			</section>

			{/* ---------- how I build ---------- */}
			<section className={site.section}>
				<div className={site.shell}>
					<header className={`${s.head} ${s.rise}`}>
						<p className={s.eyebrow}>{c.principles.kicker}</p>
						<h2 className={s.h2}>{c.principles.heading}</h2>
					</header>
					<div className={h.rules}>
						{c.principles.items.map((item) => (
							<article className={`${s.tile} ${s.rise}`} key={item.title}>
								<span className={s.tileIcon}><Icon name={item.icon} /></span>
								<h3>{item.title}</h3>
								<p>{item.body}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* ---------- writing ---------- */}
			{posts.length ? (
				<section className={site.section}>
					<div className={site.shell}>
						<header className={`${h.postsHead} ${s.rise}`}>
							<div>
								<p className={s.eyebrow}>{c.posts.kicker}</p>
								<h2 className={s.h2}>{c.posts.heading}</h2>
							</div>
							<Link className={h.allPosts} href={`${base}/blog`}>
								{c.posts.all}
								<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
							</Link>
						</header>
						<div className={h.posts}>
							{posts.map((post) => (
								<Link key={post.slug} href={`${base}/blog/${post.slug}`} className={`${h.post} ${s.rise}`}>
									<div>
										<h3>{post.title}</h3>
										{post.description ? <p>{post.description}</p> : null}
									</div>
									<time dateTime={post.pubDate.toISOString()}>{formatDate(post.pubDate, locale)}</time>
								</Link>
							))}
						</div>
					</div>
				</section>
			) : null}

			{/* ---------- say hello ---------- */}
			<section className={s.final}>
				<div className={site.shell}>
					<div className={s.finalCard}>
						<h2>{c.hello.heading}</h2>
						<p>{c.hello.body}</p>
						<div className={s.actions}>
							<a className={`${site.btn} ${s.btnInk}`} href={`mailto:${PEELDAY.contactEmail}`}>{c.hello.email}</a>
							<a className={`${site.btn} ${site.btnGhost}`} href="https://github.com/jovidalao" target="_blank" rel="noreferrer">GitHub</a>
							<a className={`${site.btn} ${site.btnGhost}`} href="https://x.com/jovidalao" target="_blank" rel="noreferrer">X</a>
						</div>
					</div>
					<p className={s.wordmark} aria-hidden="true">{SITE_TITLE}</p>
				</div>
			</section>
		</main>
	);
}
