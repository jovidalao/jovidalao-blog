import Link from "next/link";
import { PEELDAY } from "@/consts";
import { getConverloop, getUi, localeBase, type Locale } from "@/i18n";
import styles from "./Home.module.css";
import site from "./site.module.css";

export function HomePage({ locale }: { locale: Locale }) {
  const t = getUi(locale);
  const h = t.home;
  const base = localeBase(locale);

  const products = [
    {
      key: "peelday",
      href: `${base}/peelday`,
      shot: "/peelday/hero.jpg",
      alt: t.peelday.shots.hero.alt,
      tint: styles.productShotPeelday,
      ...h.products.peelday,
    },
    {
      key: "converloopIos",
      href: `${base}/converloop`,
      shot: "/converloop/conversation.webp",
      // The top third of this screenshot is empty chat; aim the crop at the correction.
      focus: "center 66%",
      alt: getConverloop(locale).hero.shots.conversation,
      tint: styles.productShotIos,
      ...h.products.converloopIos,
    },
    {
      key: "converloopDesktop",
      href: `${base}/converloop/desktop`,
      shot: "/converloop-desktop-conversation.jpg",
      alt: t.converloopDesktop.shots.hero.alt,
      tint: styles.productShotDesktop,
      ...h.products.converloopDesktop,
    },
  ];

  return (
    <main className={site.page}>
      <section className={site.shell}>
        <div className={styles.hero}>
          <div className={styles.mark} aria-hidden="true">j</div>
          <h1 className={styles.heroTitle}>{h.greeting}</h1>
          <p className={styles.heroIntro}>{h.intro}</p>
          <p className={styles.heroBody}>{h.body}</p>
        </div>
      </section>

      <section className={site.section} id="apps">
        <div className={site.shell}>
          <div className={site.head}>
            <p className={site.kicker}>{h.productsKicker}</p>
            <h2>{h.productsHeading}</h2>
            <p className={site.sub}>{h.productsBody}</p>
          </div>

          <div className={styles.products}>
            {products.map((product) => (
              <Link key={product.key} href={product.href} className={styles.product}>
                <div>
                  <div className={styles.productHead}>
                    <span className={styles.productName}>{product.name}</span>
                    <span className={`${site.status} ${product.live ? site.statusLive : ""}`}>{product.status}</span>
                  </div>
                  <p className={styles.productBody}>{product.body}</p>
                  <p className={styles.productPlatform}>{product.platform}</p>
                  <span className={styles.productMeta}>
                    {h.cta}
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </div>
                <div className={`${styles.productShot} ${product.tint}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.shot} alt={product.alt} loading="lazy" style={"focus" in product ? { objectPosition: product.focus } : undefined} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${site.section} ${site.band}`}>
        <div className={site.shell}>
          <div className={site.head}>
            <p className={site.kicker}>{h.aboutKicker}</p>
            <h2>{h.aboutHeading}</h2>
            <p className={site.sub}>{h.aboutBody}</p>
          </div>
          <div className={styles.elsewhere}>
            <a className={`${site.btn} ${site.btnPrimary}`} href={`mailto:${PEELDAY.contactEmail}`}>{t.footer.email}</a>
            <a className={`${site.btn} ${site.btnGhost}`} href="https://github.com/jovidalao" target="_blank" rel="noreferrer">GitHub</a>
            <a className={`${site.btn} ${site.btnGhost}`} href="https://x.com/jovidalao" target="_blank" rel="noreferrer">X</a>
          </div>
        </div>
      </section>
    </main>
  );
}
