import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "隐私政策 — 贴贴手账", alternates: { canonical: "/zh/peelday/privacy", languages: { en: "/peelday/privacy", zh: "/zh/peelday/privacy" } } };
export default function Page() { return <SiteShell locale="zh"><LegalPage locale="zh" type="privacy" /></SiteShell>; }
