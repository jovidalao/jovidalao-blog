import type { Metadata } from "next";
import { ConverloopLegalPage } from "@/components/ConverloopLegalPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "支持 — Converloop", alternates: { canonical: "/zh/converloop/support", languages: { en: "/converloop/support", zh: "/zh/converloop/support" } } };
export default function Page() { return <SiteShell locale="zh"><ConverloopLegalPage locale="zh" type="support" /></SiteShell>; }
