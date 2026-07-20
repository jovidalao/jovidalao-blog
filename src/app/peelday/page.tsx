import type { Metadata } from "next";
import { PeeldayPage } from "@/components/PeeldayPage";
import { SiteShell } from "@/components/SiteShell";
import { getUi } from "@/i18n";

const t = getUi("en");
export const metadata: Metadata = { title: `${t.peelday.name} — ${t.peelday.tagline}`, description: t.peelday.metaDescription, alternates: { canonical: "/peelday", languages: { en: "/peelday", zh: "/zh/peelday" } } };

export default function Page() { return <SiteShell locale="en"><PeeldayPage locale="en" /></SiteShell>; }
