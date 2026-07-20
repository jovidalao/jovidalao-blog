import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "首页", description: "jovidalao 的个人主页与独立应用。", alternates: { canonical: "/zh", languages: { en: "/", zh: "/zh" } } };

export default function Page() {
  return <SiteShell locale="zh"><HomePage locale="zh" /></SiteShell>;
}
