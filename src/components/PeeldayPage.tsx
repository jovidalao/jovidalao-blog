import Link from "next/link";
import { PEELDAY } from "@/consts";
import { getUi, localeBase, type Locale } from "@/i18n";
import { Icon } from "./Icon";
import { ShotSlot, ShotStage } from "./Shot";
import product from "./Product.module.css";
import site from "./site.module.css";

// Keyed to the order of `peelday.features` / `peelday.makeSteps` in the i18n file.
const featureIcons = ["page", "cutout", "batch", "calendar", "widget", "cloud"];
const stepIcons = ["ticket", "cutout", "page"];
const privacyIcons = ["shield", "eye", "cloud", "database"];

export function PeeldayPage({ locale }: { locale: Locale }) {
  const t = getUi(locale);
  const p = t.peelday;
  const base = localeBase(locale);

  return (
    <main className={site.page}>
      <section className={product.heroSection}>
        <div className={site.shell}>
          <div className={product.heroGrid}>
            <div className={product.heroCopy}>
              <div className={product.brandRow}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/peelday/app-icon.png" alt="" width={46} height={46} />
                <span className={product.brandName}>{p.name}</span>
              </div>
              <p className={`${site.status} ${site.statusLive} ${product.heroStatus}`}>{p.status}</p>
              <h1 className={product.heroTitle}>
                {p.heroTitle}<br /><span className={site.accent}>{p.heroAccent}</span>
              </h1>
              <p className={product.heroBody}>{p.heroBody}</p>
              <div className={`${site.btnRow} ${product.heroActions}`}>
                <a className={`${site.btn} ${site.btnPrimary}`} href={PEELDAY.appStoreUrl} target="_blank" rel="noreferrer">
                  <span className={site.btnStack}>
                    <strong>{p.download}</strong>
                    <small className={site.btnNote}>{p.downloadNote}</small>
                  </span>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </div>
              <ul className={`${site.checks} ${product.heroChecks}`}>
                {p.heroChecks.map((check) => <li key={check}>{check}</li>)}
              </ul>
            </div>

            <div className={product.heroVisual}>
              {/*
                hero.jpg is a page crop, not a 1290×2796 device capture — a phone frame
                would slice the stickers off its edges. Shown whole until Shot 01 lands.
              */}
              <ShotStage tint="peelday" tall>
                <ShotSlot index="01" frame="plain" priority className={site.shotNarrow} src="/peelday/hero.jpg" {...p.shots.hero} />
              </ShotStage>
            </div>
          </div>
        </div>
      </section>

      <section className={`${site.section} ${site.band}`}>
        <div className={site.shell}>
          <div className={site.headCenter}>
            <p className={site.kicker}>{p.makeKicker}</p>
            <h2>{p.makeHeading}</h2>
            <p className={site.sub}>{p.makeBody}</p>
          </div>
          <div className={`${product.steps} ${product.stepsThree}`}>
            {p.makeSteps.map((step, index) => (
              <article className={product.step} key={step.number}>
                <div className={site.cardIcon}><Icon name={stepIcons[index]} /></div>
                <span className={product.stepNumber}>{step.number}</span>
                <h3 className={product.stepTitle}>{step.title}</h3>
                <p className={product.stepBody}>{step.body}</p>
              </article>
            ))}
          </div>
          <ShotStage tint="peelday" layout="two" tall className={site.stageSpaced}>
            <ShotSlot index="02" frame="phone" {...p.shots.creator} />
            <ShotSlot index="03" frame="phone" {...p.shots.ticket} />
          </ShotStage>
        </div>
      </section>

      <section className={site.section}>
        <div className={site.shell}>
          <div className={site.head}>
            <p className={site.kicker}>{p.featuresKicker}</p>
            <h2>{p.featuresHeading}</h2>
          </div>
          <div className={site.grid3}>
            {p.features.map((feature, index) => (
              <article className={site.card} key={feature.title}>
                <div className={site.cardIcon}><Icon name={featureIcons[index]} /></div>
                <h3 className={site.cardTitle}>{feature.title}</h3>
                <p className={site.cardDesc}>{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${site.sectionTight} ${site.band}`}>
        <div className={site.shell}>
          <div className={`${product.spotlight} ${product.spotlightPeelday}`}>
            <div className={product.spotlightCopy}>
              <p className={product.spotlightEyebrow}>{p.spotlights.calendar.eyebrow}</p>
              <h3>{p.spotlights.calendar.title}</h3>
              <p>{p.spotlights.calendar.body}</p>
              <ul className={`${site.checks} ${product.spotlightList}`}>
                {p.spotlights.calendar.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
            <div className={product.spotlightVisual}>
              <ShotSlot index="04" frame="phone" {...p.shots.calendar} />
            </div>
          </div>

          <div className={`${product.spotlight} ${product.spotlightFlip} ${product.spotlightPeelday}`} style={{ marginTop: 16 }}>
            <div className={product.spotlightCopy}>
              <p className={product.spotlightEyebrow}>{p.spotlights.widget.eyebrow}</p>
              <h3>{p.spotlights.widget.title}</h3>
              <p>{p.spotlights.widget.body}</p>
              <ul className={`${site.checks} ${product.spotlightList}`}>
                {p.spotlights.widget.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
            <div className={product.spotlightVisual}>
              <ShotSlot index="05" frame="phone" {...p.shots.widget} />
            </div>
          </div>
        </div>
      </section>

      <section className={site.section}>
        <div className={site.shell}>
          <div className={product.split}>
            <div className={product.splitCopy}>
              <p className={site.kicker}>{p.privacyKicker}</p>
              <h2>{p.privacyHeading}</h2>
              <p>{p.privacyBody}</p>
            </div>
            <div className={site.grid2} style={{ marginTop: 0 }}>
              {p.privacyPoints.map((point, index) => (
                <article className={`${site.card} ${site.cardInline}`} key={point}>
                  <div className={site.cardIcon}><Icon name={privacyIcons[index]} /></div>
                  <p className={site.cardDesc} style={{ marginTop: 0 }}>{point}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${site.section} ${site.band}`}>
        <div className={site.shell}>
          <div className={product.split}>
            <div className={product.splitCopy}>
              <p className={site.kicker}>{p.priceKicker}</p>
              <h2>{p.priceHeading}</h2>
              <p>{p.priceBody}</p>
            </div>
            <ul className={site.checks}>
              {p.pricePoints.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className={site.section}>
        <div className={site.shell}>
          <div className={product.final}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/peelday/app-icon.png" alt="" width={62} height={62} />
            <h2>{p.finalHeading}</h2>
            <p className={product.finalBody}>{p.finalBody}</p>
            <div className={`${site.btnRow} ${site.btnRowCenter} ${product.finalActions}`}>
              <a className={`${site.btn} ${site.btnPrimary}`} href={PEELDAY.appStoreUrl} target="_blank" rel="noreferrer">
                {p.download}
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>
          </div>

          <nav className={product.legalBar} aria-label="Legal">
            <Link href={`${base}/peelday/privacy`}>{p.legal.privacy}</Link>
            <Link href={`${base}/peelday/terms`}>{p.legal.terms}</Link>
            <a href={`mailto:${PEELDAY.contactEmail}`}>{p.legal.contact}</a>
          </nav>
        </div>
      </section>
    </main>
  );
}
