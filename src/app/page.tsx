import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { SiteShell } from "@/components/SiteShell";
import { SITE_DESCRIPTION } from "@/consts";

export const metadata: Metadata = { description: SITE_DESCRIPTION, alternates: { canonical: "/", languages: { en: "/", zh: "/zh" } } };

export default function Page() {
  return <SiteShell locale="en"><HomePage locale="en" /></SiteShell>;
}
