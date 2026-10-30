import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "用户协议 — 贴贴手帐", alternates: { canonical: "/zh/terms", languages: { en: "/terms", zh: "/zh/terms", "x-default": "/terms" } } };
export default function Page() { return <SiteShell locale="zh" site="peelday"><LegalPage locale="zh" type="terms" /></SiteShell>; }
