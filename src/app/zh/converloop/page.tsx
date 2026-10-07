import type { Metadata } from "next";
import { ConverloopPage } from "@/components/ConverloopPage";
import { SiteShell } from "@/components/SiteShell";
import { getConverloop } from "@/i18n";

const c = getConverloop("zh");

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
  openGraph: { images: ["/converloop-icon.png"] },
  twitter: { card: "summary", images: ["/converloop-icon.png"] },
  alternates: { canonical: "/zh/converloop", languages: { en: "/converloop", zh: "/zh/converloop" } },
};

export default function Page() {
  return <SiteShell locale="zh"><ConverloopPage locale="zh" /></SiteShell>;
}
