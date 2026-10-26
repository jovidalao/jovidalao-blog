import Link from "next/link";
import { BLOG_PUBLISHED, CONVERLOOP, PEELDAY, SITE_TITLE, SITE_URL, type Site } from "@/consts";
import { getUi, localeBase, type Locale } from "@/i18n";
import styles from "./converloop/Footer.module.css";

export function Footer({ locale, site }: { locale: Locale; site: Site }) {
  const t = getUi(locale);
  const f = t.footer;
  const base = localeBase(locale);
  const home = site === "home" ? base : `${SITE_URL}${base}`;
  const peelday = site === "peelday" ? base : `${PEELDAY.url}${base}`;
  const converloop = `${CONVERLOOP.url}${base}`;
  const showcase = `${site === "home" ? "" : SITE_URL}${base}/converloop`;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.about}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <p className={styles.brand}><img src="/brand-mark.svg" alt="" width={32} height={32} />{SITE_TITLE}</p>
          <p>{f.blurb}</p>
          <div className={styles.social}>
            <a href="https://x.com/jovidalao" target="_blank" rel="noreferrer" aria-label="X">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.6.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" /></svg>
            </a>
            <a href="https://github.com/jovidalao" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8Z" /></svg>
            </a>
            <a href={`mailto:${PEELDAY.contactEmail}`} aria-label={f.email}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" d="M3 6h18v12H3zM3 7l9 6 9-6" /></svg>
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>{f.appsTitle}</p>
          <ul>
            <li><Link href={peelday || "/"}>{t.peelday.name}</Link></li>
            <li><Link href={showcase}>Converloop</Link></li>
            <li><a href={converloop}>{f.converloopWebsite}</a></li>
            <li><a href={CONVERLOOP.repoUrl} target="_blank" rel="noreferrer">{f.source}</a></li>
            {BLOG_PUBLISHED ? <li><Link href={`${home}/blog`}>{f.writing}</Link></li> : null}
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>{f.supportTitle}</p>
          <ul>
            <li><a href={`mailto:${PEELDAY.contactEmail}`}>{f.email}</a></li>
            <li><a href={`${peelday}/privacy`}>{f.peeldayPrivacy}</a></li>
            <li><a href={`${peelday}/terms`}>{f.peeldayTerms}</a></li>
            <li><a href={`${converloop}/privacy`}>{f.converloopPrivacy}</a></li>
            <li><a href={`${converloop}/terms`}>{f.converloopTerms}</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>© {new Date().getFullYear()} {SITE_TITLE}</p>
        <nav className={styles.langs} aria-label={locale === "zh" ? "语言" : "Language"}>
          <Link href="/" aria-current={locale === "en" ? "true" : undefined}>English</Link>
          <Link href="/zh" aria-current={locale === "zh" ? "true" : undefined}>简体中文</Link>
        </nav>
      </div>
      <p className={styles.credits}>
        {locale === "zh"
          ? "Apple、Apple 标志、App Store、iPhone、iPad 和 Mac 是 Apple Inc. 在美国及其他国家和地区注册的商标。"
          : "Apple, the Apple logo, App Store, iPhone, iPad, and Mac are trademarks of Apple Inc., registered in the U.S. and other countries."}
      </p>
    </footer>
  );
}
