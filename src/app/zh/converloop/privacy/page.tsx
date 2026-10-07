import type { Metadata } from "next";
import { ConverloopLegalPage } from "@/components/ConverloopLegalPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "隐私政策 — Converloop", alternates: { canonical: "/zh/converloop/privacy", languages: { en: "/converloop/privacy", zh: "/zh/converloop/privacy" } } };
export default function Page() { return <SiteShell locale="zh"><ConverloopLegalPage locale="zh" type="privacy" /></SiteShell>; }
