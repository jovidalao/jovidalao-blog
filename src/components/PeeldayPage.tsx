import Link from "next/link";
import { PEELDAY } from "@/consts";
import { getUi, localeBase, type Locale } from "@/i18n";
import styles from "./Peelday.module.css";

export function PeeldayPage({ locale }: { locale: Locale }) {
  const t = getUi(locale);
  const base = localeBase(locale);
  return (
    <main className={styles["peelday-main"]}>
      <section className={styles["peelday-hero"]}>
        <div className={styles["peelday-hero-copy"]}>
          <p className={styles.tagline}>{t.peelday.tagline}</p>
          <h1>{t.peelday.name}</h1>
          <p className={styles.subtitle}>{t.peelday.heroSubtitle}</p>
          <div className={styles["peelday-cta-row"]}>
            <a className={`${styles["peelday-btn"]} ${styles["peelday-btn-primary"]}`} href={PEELDAY.appStoreUrl} target="_blank" rel="noreferrer">{t.peelday.download}</a>
          </div>
        </div>
        <div className={styles["peelday-hero-visual"]}>
          <div className={styles["peelday-phone-frame"]}>
            <img className={styles["hero-shot"]} src="/peelday/hero.jpg" alt={t.peelday.heroImageAlt} width="296" height="640" />
          </div>
          <img className={styles["peelday-app-icon-float"]} src="/peelday/app-icon.png" alt="" width="88" height="88" />
        </div>
      </section>
      <section className={styles["peelday-features"]}>
        <h2>{t.peelday.featuresHeading}</h2>
        <div className={styles["peelday-feature-grid"]}>
          {t.peelday.features.map((feature) => (
            <article className={styles["peelday-feature-card"]} key={feature.title}><h3>{feature.title}</h3><p>{feature.body}</p></article>
          ))}
        </div>
      </section>
      <nav className={styles["peelday-legal-bar"]} aria-label="Legal">
        <Link href={`${base}/peelday/privacy`}>{t.peelday.legal.privacy}</Link>
        <Link href={`${base}/peelday/terms`}>{t.peelday.legal.terms}</Link>
        <a href={`mailto:${PEELDAY.contactEmail}`}>{t.peelday.legal.contact}</a>
      </nav>
    </main>
  );
}
