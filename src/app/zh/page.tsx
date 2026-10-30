import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { SiteShell } from "@/components/SiteShell";

const description = "jovidalao 的个人主页与独立应用。";

export const metadata: Metadata = {
  title: "首页",
  description,
  openGraph: { type: "website", siteName: "jovidalao", locale: "zh_CN", title: "jovidalao", description, images: [{ url: "/og-zh.png?v=20261031", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "jovidalao", description, images: ["/og-zh.png?v=20261031"] },
  alternates: { canonical: "/zh", languages: { en: "/", zh: "/zh", "x-default": "/" } },
};

export default function Page() {
  return <SiteShell locale="zh"><HomePage locale="zh" /></SiteShell>;
}
