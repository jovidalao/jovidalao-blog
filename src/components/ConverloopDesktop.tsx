import Link from "next/link";
import { CONVERLOOP } from "@/consts";
import { getUi, localeBase, type Locale } from "@/i18n";
import { Icon } from "./Icon";
import { ShotSlot, ShotStage } from "./Shot";
import product from "./Product.module.css";
import site from "./site.module.css";

// Keyed to the order of the matching lists in the i18n file.
const pillarIcons = ["chat", "timeline", "project"];
const memoryIcons = ["database", "clock", "edit", "layers"];
const trainingIcons = ["book", "project", "folder", "list"];
const craftIcons = ["command", "keyboard", "palette", "translate"];
const craftKeys = [["⌘", "K"], ["⌘", "⇧", "P"], null, null];
const capabilityIcons = ["plug", "sparkle", "shield"];

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export function ConverloopDesktop({ locale }: { locale: Locale }) {
  const t = getUi(locale);
  const d = t.converloopDesktop;
  const base = localeBase(locale);
  const bar = `${CONVERLOOP.name} — ${d.name}`;

  return (
    <main className={site.page}>
      <section className={product.heroSection}>
        <div className={site.shell}>
          <div className={product.heroGrid}>
            <div className={product.heroCopy}>
              <div className={product.brandRow}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/converloop-icon.png" alt="" width={46} height={46} />
                <span className={product.brandName}>{d.name}</span>
              </div>
              <p className={`${site.status} ${site.statusLive} ${product.heroStatus}`}>{d.status}</p>
              <h1 className={product.heroTitle}>
                {d.heroTitle}<br /><span className={site.accent}>{d.heroAccent}</span>
              </h1>
              <p className={product.heroBody}>{d.heroBody}</p>
              <div className={`${site.btnRow} ${product.heroActions}`}>
                <a className={`${site.btn} ${site.btnPrimary}`} href={CONVERLOOP.releaseUrl} target="_blank" rel="noreferrer">
                  <span className={site.btnStack}>
                    <strong>{d.download}</strong>
                    <small className={site.btnNote}>{d.downloadNote}</small>
                  </span>
                  <ArrowIcon />
                </a>
                <a className={`${site.btn} ${site.btnGhost}`} href={CONVERLOOP.repoUrl} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l6-6-6-6M9 6l-6 6 6 6" /></svg>
                  {d.source}
                </a>
              </div>
              <ul className={`${site.checks} ${product.heroChecks}`}>
                {d.heroChecks.map((check) => <li key={check}>{check}</li>)}
              </ul>
            </div>

            <div className={product.heroVisual}>
              <ShotStage tint="desktop" tall>
                <ShotSlot index="01" frame="plain" priority src="/converloop-desktop-conversation.jpg" {...d.shots.hero} />
              </ShotStage>
            </div>
          </div>
        </div>
      </section>

      <section className={`${site.section} ${site.band}`}>
        <div className={site.shell}>
          <div className={site.headCenter}>
            <p className={site.kicker}>{d.pillarsKicker}</p>
            <h2>{d.pillarsHeading}</h2>
            <p className={site.sub}>{d.pillarsBody}</p>
          </div>
          <div className={site.grid3}>
            {d.pillars.map((pillar, index) => (
              <article className={site.card} key={pillar.title}>
                <div className={site.cardIcon}><Icon name={pillarIcons[index]} /></div>
                <h3 className={site.cardTitle}>{pillar.title}</h3>
                <p className={site.cardDesc}>{pillar.body}</p>
              </article>
            ))}
          </div>
          <ShotStage tint="desktop" className={site.stageSpaced}>
            <ShotSlot index="02" frame="mac" bar={bar} ratio="14 / 9" hint={d.shots.chromeHint} {...d.shots.correction} />
          </ShotStage>
        </div>
      </section>

      <section className={site.section}>
        <div className={site.shell}>
          <div className={`${product.spotlight} ${product.spotlightFlip} ${product.spotlightDesktop}`}>
            <div className={product.spotlightCopy}>
              <p className={product.spotlightEyebrow}>{d.memory.kicker}</p>
              <h3>{d.memory.heading}</h3>
              <p>{d.memory.body}</p>
            </div>
            <div className={product.spotlightVisual}>
              <ShotSlot index="03" frame="mac" bar={bar} ratio="14 / 9" hint={d.shots.chromeHint} {...d.shots.evidence} />
            </div>
          </div>
          <div className={site.grid4}>
            {d.memory.points.map((point, index) => (
              <article className={site.card} key={point.title}>
                <div className={site.cardIcon}><Icon name={memoryIcons[index]} /></div>
                <h3 className={site.cardTitle}>{point.title}</h3>
                <p className={site.cardDesc}>{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${site.sectionTight} ${site.band}`}>
        <div className={site.shell}>
          <div className={`${product.spotlight} ${product.spotlightDesktop}`}>
            <div className={product.spotlightCopy}>
              <p className={product.spotlightEyebrow}>{d.partners.kicker}</p>
              <h3>{d.partners.heading}</h3>
              <p>{d.partners.body}</p>
              <ul className={`${site.checks} ${product.spotlightList}`}>
                {d.partners.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
            <div className={product.spotlightVisual}>
              <ShotSlot index="04" frame="mac" bar={bar} ratio="14 / 9" hint={d.shots.chromeHint} {...d.shots.group} />
            </div>
          </div>
        </div>
      </section>

      <section className={site.section}>
        <div className={site.shell}>
          <div className={site.headCenter}>
            <p className={site.kicker}>{d.training.kicker}</p>
            <h2>{d.training.heading}</h2>
            <p className={site.sub}>{d.training.body}</p>
          </div>
          <div className={site.grid4}>
            {d.training.items.map((item, index) => (
              <article className={site.card} key={item.title}>
                <div className={site.cardIcon}><Icon name={trainingIcons[index]} /></div>
                <h3 className={site.cardTitle}>{item.title}</h3>
                <p className={site.cardDesc}>{item.body}</p>
              </article>
            ))}
          </div>
          <ShotStage tint="desktop" className={site.stageSpaced}>
            <ShotSlot index="05" frame="mac" bar={bar} ratio="14 / 9" hint={d.shots.chromeHint} {...d.shots.training} />
          </ShotStage>
        </div>
      </section>

      <section className={`${site.section} ${site.band}`}>
        <div className={site.shell}>
          <div className={product.split}>
            <div className={product.splitCopy}>
              <p className={site.kicker}>{d.capabilities.kicker}</p>
              <h2>{d.capabilities.heading}</h2>
              <p>{d.capabilities.body}</p>
            </div>
            <div className={product.splitList}>
              {d.capabilities.points.map((point, index) => (
                <article className={`${site.card} ${site.cardInline}`} key={point}>
                  <div className={site.cardIcon}><Icon name={capabilityIcons[index]} /></div>
                  <p className={site.cardDesc} style={{ marginTop: 0 }}>{point}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={site.section}>
        <div className={site.shell}>
          <div className={site.head}>
            <p className={site.kicker}>{d.craftKicker}</p>
            <h2>{d.craftHeading}</h2>
          </div>
          <div className={site.grid4}>
            {d.craft.map((item, index) => (
              <article className={site.card} key={item.title}>
                <div className={site.cardIcon}><Icon name={craftIcons[index]} /></div>
                <h3 className={site.cardTitle}>{item.title}</h3>
                <p className={site.cardDesc}>{item.body}</p>
                {craftKeys[index] ? (
                  <div className={site.keys}>
                    {craftKeys[index]!.map((key) => <kbd className={site.key} key={key}>{key}</kbd>)}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
          <ShotStage tint="desktop" className={site.stageSpaced}>
            <ShotSlot index="06" frame="mac" bar={bar} ratio="14 / 9" hint={d.shots.chromeHint} {...d.shots.palette} />
          </ShotStage>
        </div>
      </section>

      <section className={`${site.section} ${site.band}`}>
        <div className={site.shell}>
          <div className={site.head}>
            <p className={site.kicker}>{d.providers.kicker}</p>
            <h2>{d.providers.heading}</h2>
            <p className={site.sub}>{d.providers.body}</p>
          </div>
          <div className={site.rows}>
            {d.providers.rows.map((row) => (
              <div className={site.row} key={row.label}>
                <p className={site.rowLabel}>{row.label}</p>
                <p className={site.rowBody}>{row.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={site.section}>
        <div className={site.shell}>
          <div className={product.split}>
            <div className={product.splitCopy}>
              <p className={site.kicker}>{d.data.kicker}</p>
              <h2>{d.data.heading}</h2>
            </div>
            <ul className={site.checks}>
              {d.data.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${site.section} ${site.band}`}>
        <div className={site.shell}>
          <div className={site.headCenter}>
            <p className={site.kicker}>{d.release.kicker}</p>
            <h2>{d.release.heading}</h2>
            <p className={site.sub}>{d.release.body}</p>
          </div>
          <div className={product.releases}>
            <article className={product.release}>
              <span className={`${site.status} ${site.statusLive}`}>{d.release.macTitle}</span>
              <p className={product.releaseBody}>{d.release.macBody}</p>
              <a className={product.releaseLink} href={CONVERLOOP.releaseUrl} target="_blank" rel="noreferrer">{d.download} ↗</a>
            </article>
            <article className={product.release}>
              <span className={site.status}>{d.release.winTitle}</span>
              <p className={product.releaseBody}>{d.release.winBody}</p>
              <a className={product.releaseLink} href={CONVERLOOP.repoUrl} target="_blank" rel="noreferrer">{d.source} ↗</a>
            </article>
          </div>
        </div>
      </section>

      <section className={site.section}>
        <div className={site.shell}>
          <div className={product.final}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/converloop-icon.png" alt="" width={62} height={62} />
            <h2>{d.final.heading}</h2>
            <p className={product.finalBody}>{d.final.body}</p>
            <div className={`${site.btnRow} ${site.btnRowCenter} ${product.finalActions}`}>
              <a className={`${site.btn} ${site.btnPrimary}`} href={CONVERLOOP.releaseUrl} target="_blank" rel="noreferrer">
                {d.download}
                <ArrowIcon />
              </a>
              <Link className={`${site.btn} ${site.btnGhost}`} href={`${base}/converloop`}>{t.footer.converloopIos}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
