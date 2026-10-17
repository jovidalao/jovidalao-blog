import type { ReactNode } from "react";
import type { Site } from "@/consts";
import type { Locale } from "@/i18n";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteShell({ locale, site = "home", children }: { locale: Locale; site?: Site; children: ReactNode }) {
  return <><Header locale={locale} site={site} />{children}<Footer locale={locale} site={site} /></>;
}
