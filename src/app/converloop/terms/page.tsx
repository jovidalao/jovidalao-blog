import type { Metadata } from "next";
import { ConverloopLegalPage } from "@/components/ConverloopLegalPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Terms of Use — Converloop", alternates: { canonical: "/converloop/terms", languages: { en: "/converloop/terms", zh: "/zh/converloop/terms" } } };
export default function Page() { return <SiteShell locale="en"><ConverloopLegalPage locale="en" type="terms" /></SiteShell>; }
