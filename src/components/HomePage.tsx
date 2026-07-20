import Link from "next/link";
import { CONVERLOOP } from "@/consts";
import { getUi, localeBase, type Locale } from "@/i18n";
import converloopStyles from "./Converloop.module.css";
import peeldayStyles from "./Peelday.module.css";

export function HomePage({ locale }: { locale: Locale }) {
  const t = getUi(locale);
  const base = localeBase(locale);
  return (
    <main>
      <section className={peeldayStyles["home-intro"]}>
        <h1>{t.home.greeting}</h1>
        <p className={peeldayStyles.lead}>{t.home.intro}</p>
      </section>
      <section>
        <h2 className={peeldayStyles["home-section-title"]}>{t.home.appsHeading}</h2>
        <div className={converloopStyles["home-app-cards"]}>
          <Link className={peeldayStyles["app-card"]} href={`${base}/peelday`}>
            <div className={peeldayStyles["app-card-top"]}>
              <img className={peeldayStyles["app-card-icon"]} src="/peelday/app-icon.png" alt="" width="64" height="64" />
              <div className={peeldayStyles["app-card-meta"]}><span className={peeldayStyles["app-card-badge"]}>{t.home.peeldayBadge}</span><h3>{t.home.peeldayTitle}</h3></div>
            </div>
            <p className={peeldayStyles["app-card-desc"]}>{t.home.peeldayDescription}</p>
            <span className={peeldayStyles["app-card-cta"]}>{t.home.peeldayCta} →</span>
          </Link>
          <Link className={converloopStyles["cl-card"]} href={`${base}/converloop`}>
            <div className={converloopStyles["cl-card-top"]}>
              <span className={converloopStyles["cl-card-icon"]} aria-hidden="true"></span>
              <div className={converloopStyles["cl-card-meta"]}><span className={converloopStyles["cl-card-badge"]}>{t.home.converloopBadge}</span><h3>{CONVERLOOP.name}</h3></div>
            </div>
            <p className={converloopStyles["cl-card-desc"]}>{t.home.converloopDescription}</p>
            <span className={converloopStyles["cl-card-cta"]}>{t.home.converloopCta} →</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
