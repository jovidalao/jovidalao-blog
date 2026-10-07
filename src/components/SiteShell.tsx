import type { ReactNode } from "react";
import type { Locale } from "@/i18n";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <><Header locale={locale} />{children}<Footer locale={locale} /></>;
}
