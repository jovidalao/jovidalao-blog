import Link from "next/link";
import { CONVERLOOP } from "@/consts";
import { getConverloopLegal, localeBase, type Locale } from "@/i18n";
import product from "./Product.module.css";
import site from "./site.module.css";

/**
 * Converloop's privacy and support pages. Shares Peelday's legal styling but
 * not its component: `LegalPage` is bound to Peelday's constants, back link,
 * and two-document footer, and Converloop's pair is privacy + support rather
 * than privacy + terms.
 */
export function ConverloopLegalPage({
  locale,
  type,
}: {
  locale: Locale;
  type: "privacy" | "support";
}) {
  const legal = getConverloopLegal(locale);
  const base = localeBase(locale);
  const document = type === "privacy" ? legal.privacy : legal.support;
  const { ui } = legal;

  return (
    <main className={site.page}>
      <section className={site.shell}>
        <article className={product.legalDoc}>
          <Link className={product.legalBack} href={`${base}/converloop`}>{ui.back}</Link>
          <h1>{type === "privacy" ? ui.privacyTitle : ui.supportTitle}</h1>
          <p className={product.legalMeta}>
            {locale === "zh"
              ? `最后更新：${CONVERLOOP.lastUpdatedZh}`
              : `Last updated: ${CONVERLOOP.lastUpdated}`}
          </p>
          <p className={product.legalIntro}>{document.intro}</p>

          {document.sections.map((section) => (
            <section className={product.legalSection} key={section.title}>
              <h2>{section.title}</h2>
              {"body" in section && section.body ? <p>{section.body}</p> : null}
              {"bullets" in section && section.bullets ? (
                <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              ) : null}
            </section>
          ))}
        </article>

        <nav className={product.legalBar} aria-label="Legal">
          <Link href={`${base}/converloop/privacy`}>{ui.privacy}</Link>
          <Link href={`${base}/converloop/support`}>{ui.support}</Link>
          <a href={`mailto:${CONVERLOOP.contactEmail}`}>{ui.contact}</a>
        </nav>
      </section>
    </main>
  );
}
