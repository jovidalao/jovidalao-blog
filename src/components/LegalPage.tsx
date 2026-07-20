import Link from "next/link";
import { PEELDAY } from "@/consts";
import { getLegal, getUi, localeBase, type Locale } from "@/i18n";
import styles from "./Peelday.module.css";

export function LegalPage({ locale, type }: { locale: Locale; type: "privacy" | "terms" }) {
  const legal = getLegal(locale);
  const t = getUi(locale);
  const base = localeBase(locale);
  const document = type === "privacy" ? legal.privacy : legal.terms;
  return (
    <main className={styles["peelday-main"]}>
      <article className={styles["peelday-legal-page"]}>
        <Link className={styles["peelday-back-link"]} href={`${base}/peelday`}>{t.legal.backToPeelday}</Link>
        <h1>{type === "privacy" ? t.legal.privacyTitle : t.legal.termsTitle}</h1>
        <p className={styles["legal-updated"]}>{locale === "zh" ? "最后更新：" : "Last updated: "}{PEELDAY.lastUpdated}</p>
        <p className={styles["legal-intro"]}>{document.intro}</p>
        {document.sections.map((section) => (
          <section className={styles["peelday-legal-section"]} key={section.title}>
            <h2>{section.title}</h2>
            {"body" in section && section.body ? <p>{section.body}</p> : null}
            {"bullets" in section && section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
          </section>
        ))}
      </article>
      <nav className={styles["peelday-legal-bar"]} aria-label="Legal">
        <Link href={`${base}/peelday/privacy`}>{t.peelday.legal.privacy}</Link>
        <Link href={`${base}/peelday/terms`}>{t.peelday.legal.terms}</Link>
        <a href={`mailto:${PEELDAY.contactEmail}`}>{t.peelday.legal.contact}</a>
      </nav>
    </main>
  );
}
