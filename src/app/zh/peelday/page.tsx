import type { Metadata } from "next";
import { PeeldayPage } from "@/components/PeeldayPage";
import { SiteShell } from "@/components/SiteShell";
import { getUi } from "@/i18n";

const t = getUi("zh");
export const metadata: Metadata = { title: `${t.peelday.name} — ${t.peelday.tagline}`, description: t.peelday.metaDescription, alternates: { canonical: "/zh/peelday", languages: { en: "/peelday", zh: "/zh/peelday" } } };

export default function Page() { return <SiteShell locale="zh"><PeeldayPage locale="zh" /></SiteShell>; }
