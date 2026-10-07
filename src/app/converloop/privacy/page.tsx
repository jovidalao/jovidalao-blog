import type { Metadata } from "next";
import { ConverloopLegalPage } from "@/components/ConverloopLegalPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Privacy Policy — Converloop", alternates: { canonical: "/converloop/privacy", languages: { en: "/converloop/privacy", zh: "/zh/converloop/privacy" } } };
export default function Page() { return <SiteShell locale="en"><ConverloopLegalPage locale="en" type="privacy" /></SiteShell>; }
