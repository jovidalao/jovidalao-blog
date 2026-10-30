import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "隐私政策 — 贴贴手帐", alternates: { canonical: "/zh/privacy", languages: { en: "/privacy", zh: "/zh/privacy", "x-default": "/privacy" } } };
export default function Page() { return <SiteShell locale="zh" site="peelday"><LegalPage locale="zh" type="privacy" /></SiteShell>; }
