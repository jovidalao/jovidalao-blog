import type { Metadata } from "next";
import { ConverloopLegalPage } from "@/components/ConverloopLegalPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Support — Converloop", alternates: { canonical: "/converloop/support", languages: { en: "/converloop/support", zh: "/zh/converloop/support" } } };
export default function Page() { return <SiteShell locale="en"><ConverloopLegalPage locale="en" type="support" /></SiteShell>; }
