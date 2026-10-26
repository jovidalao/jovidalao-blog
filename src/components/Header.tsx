"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getUi, localeBase, type Locale } from "@/i18n";
import { PEELDAY, SITE_TITLE, SITE_URL, type Site } from "@/consts";
import styles from "./converloop/Header.module.css";

type Theme = "light" | "dark" | "system";

function languagePath(pathname: string, target: Locale) {
  const englishPath = pathname === "/zh" ? "/" : pathname.replace(/^\/zh(?=\/)/, "");
  return target === "zh" ? (englishPath === "/" ? "/zh" : `/zh${englishPath}`) : englishPath;
}

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === "light") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>;
  }
  if (theme === "dark") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M9 21h6M12 17v4" /></svg>;
}

export function Header({ locale, site }: { locale: Locale; site: Site }) {
  const pathname = usePathname() ?? "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");
  const t = getUi(locale);
  const base = localeBase(locale);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    setTheme(saved ?? "system");
    const media = matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = () => {
      if ((localStorage.getItem("theme") ?? "system") === "system") applyTheme("system");
    };
    media.addEventListener("change", syncSystemTheme);
    return () => media.removeEventListener("change", syncSystemTheme);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function applyTheme(value: Theme) {
    const dark = value === "dark" || (value === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
    const root = document.documentElement;
    root.classList.add("theme-switching");
    root.dataset.theme = dark ? "dark" : "light";
    void root.offsetHeight; // flush the new colours while transitions are off
    root.classList.remove("theme-switching");
    localStorage.setItem("theme", value);
    setTheme(value);
  }

  // Converloop has a local showcase on the personal site.
  const home = site === "home" ? base || "/" : `${SITE_URL}${base}`;
  const converloop = `${site === "home" ? "" : SITE_URL}${base}/converloop`;
  const links = [
    { href: home, label: t.nav.home, active: site === "home" && pathname === home },
    { href: site === "peelday" ? base || "/" : `${PEELDAY.url}${base}`, label: t.nav.peelday, active: site === "peelday" },
    { href: converloop, label: t.nav.converloop, active: site === "home" && pathname === `${base}/converloop` },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label={t.nav.menu}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <h2 className={styles.brand}><Link href={home}><img src="/brand-mark.svg" alt="" width={28} height={28} />{SITE_TITLE}</Link></h2>

        <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`} id="nav-menu">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} aria-current={link.active ? "page" : undefined} className={`${styles.link} ${link.active ? styles.linkActive : ""}`}>{link.label}</Link>
          ))}
        </div>

        <div className={styles.tools}>
          <details className={styles.dropdown}>
            <summary aria-label={t.theme[theme]}><ThemeIcon theme={theme} /></summary>
            <div className={styles.menu}>
              {(["light", "dark", "system"] as const).map((value) => (
                <button key={value} type="button" className={theme === value ? styles.selected : ""} onClick={() => applyTheme(value)}>
                  <ThemeIcon theme={value} /><span>{t.theme[value]}</span>
                </button>
              ))}
            </div>
          </details>

          <details className={styles.dropdown}>
            <summary>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg>
              <span>{locale === "zh" ? "中文" : "EN"}</span>
            </summary>
            <div className={styles.menu}>
              <Link href={languagePath(pathname, "en")} className={locale === "en" ? styles.selected : ""}>English</Link>
              <Link href={languagePath(pathname, "zh")} className={locale === "zh" ? styles.selected : ""}>简体中文</Link>
            </div>
          </details>

          <Link className={styles.cta} href={`${home}#apps`}>{t.nav.apps}</Link>

          <button className={styles.menuButton} type="button" aria-expanded={menuOpen} aria-controls="nav-menu" aria-label={t.nav.menu} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen
              ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
              : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" /></svg>}
          </button>
        </div>
      </nav>
    </header>
  );
}
