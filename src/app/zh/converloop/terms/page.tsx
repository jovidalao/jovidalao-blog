import type { Metadata } from "next";
import { ConverloopLegalPage } from "@/components/ConverloopLegalPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "使用条款 — Converloop", alternates: { canonical: "/zh/converloop/terms", languages: { en: "/converloop/terms", zh: "/zh/converloop/terms" } } };
export default function Page() { return <SiteShell locale="zh"><ConverloopLegalPage locale="zh" type="terms" /></SiteShell>; }
