import type { Metadata } from "next";
import { PeeldayPage } from "@/components/PeeldayPage";
import { SiteShell } from "@/components/SiteShell";
import { getPeelday } from "@/i18n";

const p = getPeelday("zh");

export const metadata: Metadata = {
  title: p.meta.title,
  description: p.meta.description,
  openGraph: { images: ["/peelday/app-icon.png"] },
  twitter: { card: "summary", images: ["/peelday/app-icon.png"] },
  alternates: { canonical: "/zh/peelday", languages: { en: "/peelday", zh: "/zh/peelday" } },
};

export default function Page() {
  return <SiteShell locale="zh"><PeeldayPage locale="zh" /></SiteShell>;
}
