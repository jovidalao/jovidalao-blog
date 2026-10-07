import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "用户协议 — 贴贴手帐", alternates: { canonical: "/zh/peelday/terms", languages: { en: "/peelday/terms", zh: "/zh/peelday/terms" } } };
export default function Page() { return <SiteShell locale="zh"><LegalPage locale="zh" type="terms" /></SiteShell>; }
