import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Terms of Use — Peelday", alternates: { canonical: "/terms", languages: { en: "/terms", zh: "/zh/terms", "x-default": "/terms" } } };
export default function Page() { return <SiteShell locale="en" site="peelday"><LegalPage locale="en" type="terms" /></SiteShell>; }
