import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Privacy Policy — Peelday", alternates: { canonical: "/privacy", languages: { en: "/privacy", zh: "/zh/privacy", "x-default": "/privacy" } } };
export default function Page() { return <SiteShell locale="en" site="peelday"><LegalPage locale="en" type="privacy" /></SiteShell>; }
