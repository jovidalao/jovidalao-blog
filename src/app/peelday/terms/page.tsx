import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Terms of Use — Peelday", alternates: { canonical: "/peelday/terms", languages: { en: "/peelday/terms", zh: "/zh/peelday/terms" } } };
export default function Page() { return <SiteShell locale="en"><LegalPage locale="en" type="terms" /></SiteShell>; }
