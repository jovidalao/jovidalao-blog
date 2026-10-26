import Link from "next/link";
import type { CSSProperties } from "react";
import { BLOG_PUBLISHED, CONVERLOOP, PEELDAY } from "@/consts";
import { getHome, getUi, localeBase, type Locale } from "@/i18n";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/date";
import { peeldayShots } from "@/lib/peelday-shots";
import { converloopShots } from "@/lib/converloop-shots";
import { Arrow } from "./Showcase";
import { Icon } from "./Icon";
import { ShotSlot } from "./converloop/Shot";
import s from "./converloop/ConverloopPage.module.css";
import site from "./converloop/site.module.css";
import h from "./Home.module.css";

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
  const posts = BLOG_PUBLISHED ? (await getAllPosts(locale)).slice(0, 3) : [];
  const { peelday, converloop } = c.apps;

  return (
    <main className={`${s.page} ${zh ? s.zh : ""}`}>
      <section className={s.hero}>
        <div className={`${site.shell} ${s.heroCopy}`}>
          <p className={h.location}>{c.pill}</p>
          <h1 className={s.heroTitle}>
            <span className="sr-only">{greetings[0].text}</span>
            <span className={h.greetings} aria-hidden="true">
              {greetings.map((greeting, i) => <span key={greeting.lang} lang={greeting.lang} dir="auto" style={{ "--i": i } as CSSProperties}>{greeting.text}</span>)}
            </span>
          </h1>
          <p className={s.heroBody}>
            {c.bodyBefore}<Link className={h.productLink} href={`${PEELDAY.url}${base}`}>{c.bodyMark}</Link>
            {c.bodyMiddle}<Link className={h.productLink} href={`${base}/converloop`}>{c.bodyMark2}</Link>{c.bodyAfter}
          </p>
          <div className={s.actions}>
            <a className={`${site.btn} ${s.btnInk}`} href="#apps">{c.seeApps}<Arrow down /></a>
            {BLOG_PUBLISHED ? <Link className={`${site.btn} ${site.btnGhost}`} href={`${base}/blog`}>{c.writing}</Link> : null}
          </div>
        </div>
      </section>

      <section className={s.section} id="apps">
        <div className={site.shell}>
          <header className={s.head}><h2 className={s.h2}>{c.apps.heading}</h2><p className={s.lede}>{c.apps.body}</p></header>
          <div className={h.apps}>
            <article className={`${s.card} ${h.app}`}>
              <div className={h.appCopy}>
                <div className={h.appHead}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/peelday/app-icon.png" alt="" width={44} height={44} loading="lazy" />
                  <span>{ui.peelday.name}</span><small>{peelday.status}</small>
                </div>
                <h3>{peelday.tagline}</h3><p>{peelday.body}</p>
                <div className={h.appActions}>
                  <Link className={`${site.btn} ${s.btnInk}`} href={`${PEELDAY.url}${base}`}>{peelday.cta}<Arrow /></Link>
                  <a className={`${site.btn} ${site.btnGhost}`} href={PEELDAY.appStoreUrl} target="_blank" rel="noreferrer">{peelday.store}</a>
                </div>
              </div>
              <div className={h.appShot}><ShotSlot index="01" title={c.shots.peelday} frame="phone" src={peeldayShots.page} assetBase="/converloop" /></div>
            </article>
            <article className={`${s.card} ${h.app}`}>
              <div className={h.appCopy}>
                <div className={h.appHead}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/converloop/icon.webp" alt="" width={44} height={44} loading="lazy" />
                  <span>{CONVERLOOP.name}</span><small>{converloop.status}</small>
                </div>
                <h3>{converloop.tagline}</h3><p>{converloop.body}</p>
                <div className={h.appActions}><Link className={`${site.btn} ${s.btnInk}`} href={`${base}/converloop`}>{converloop.cta}<Arrow /></Link></div>
              </div>
              <div className={h.appShot}><ShotSlot index="02" title={c.shots.converloop} frame="phone" src={converloopShots[locale].conversation} assetBase="/converloop" /></div>
            </article>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={site.shell}>
          <header className={s.head}><h2 className={s.h2}>{c.principles.heading}</h2></header>
          <ul className={s.minis}>{c.principles.items.map(item => <li key={item.title}><span className={s.miniIcon}><Icon name={item.icon} /></span><b>{item.title}</b><p>{item.body}</p></li>)}</ul>
        </div>
      </section>

      {posts.length ? <section className={s.section}><div className={site.shell}>
        <header className={h.postsHead}><h2 className={s.h2}>{c.posts.heading}</h2><Link className={h.allPosts} href={`${base}/blog`}>{c.posts.all}<Arrow /></Link></header>
        <div className={h.posts}>{posts.map(post => <Link key={post.slug} href={`${base}/blog/${post.slug}`} className={h.post}><div><h3>{post.title}</h3>{post.description ? <p>{post.description}</p> : null}</div><time dateTime={post.pubDate.toISOString()}>{formatDate(post.pubDate, locale)}</time></Link>)}</div>
      </div></section> : null}

      <section className={s.final} id="contact"><div className={site.shell}><div className={s.finalCard}>
        <h2>{c.hello.heading}</h2><p>{c.hello.body}</p>
        <div className={s.actions}>
          <a className={`${site.btn} ${s.btnIvory}`} href={`mailto:${PEELDAY.contactEmail}`}>{c.hello.email}<Arrow /></a>
          <a className={h.contactLink} href="https://github.com/jovidalao" target="_blank" rel="noreferrer">GitHub</a>
          <a className={h.contactLink} href="https://x.com/jovidalao" target="_blank" rel="noreferrer">X</a>
        </div>
      </div></div></section>
    </main>
  );
}
