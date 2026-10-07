"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getUi, localeBase, type Locale } from "@/i18n";
import { SITE_TITLE } from "@/consts";
import styles from "./Header.module.css";

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

export function Header({ locale }: { locale: Locale }) {
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

  const links = [
    { href: base || "/", label: t.nav.home, exact: true },
    { href: `${base}/peelday`, label: t.nav.peelday, exact: false },
    { href: `${base}/converloop`, label: t.nav.converloop, exact: false },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label={t.nav.menu}>
        <h2 className={styles.brand}><Link href={base || "/"}>{SITE_TITLE}</Link></h2>

        <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`} id="nav-menu">
          {links.map((link) => {
            const active = link.exact ? pathname === link.href : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`${styles.link} ${active ? styles.linkActive : ""}`}>{link.label}</Link>;
          })}
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

          <div className={styles.icons}>
            <a href="https://x.com/jovidalao" target="_blank" rel="noreferrer" aria-label="X"><svg viewBox="0 0 16 16"><path fill="currentColor" d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.6.75Z" /></svg></a>
            <a href="https://github.com/jovidalao" target="_blank" rel="noreferrer" aria-label="GitHub"><svg viewBox="0 0 16 16"><path fill="currentColor" d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 8 0Z" /></svg></a>
          </div>

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
