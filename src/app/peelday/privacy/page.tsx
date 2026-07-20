import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Privacy Policy — Peelday", alternates: { canonical: "/peelday/privacy", languages: { en: "/peelday/privacy", zh: "/zh/peelday/privacy" } } };
export default function Page() { return <SiteShell locale="en"><LegalPage locale="en" type="privacy" /></SiteShell>; }
