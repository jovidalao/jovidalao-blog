import type { Metadata } from "next";
import { PeeldayPage } from "@/components/PeeldayPage";
import { SiteShell } from "@/components/SiteShell";
import { getPeelday } from "@/i18n";

const p = getPeelday("en");

export const metadata: Metadata = {
  title: p.meta.title,
  description: p.meta.description,
  openGraph: { images: ["/peelday/app-icon.png"] },
  twitter: { card: "summary", images: ["/peelday/app-icon.png"] },
  alternates: { canonical: "/", languages: { en: "/", zh: "/zh" } },
};

export default function Page() {
  return <SiteShell locale="en" site="peelday"><PeeldayPage locale="en" /></SiteShell>;
}
