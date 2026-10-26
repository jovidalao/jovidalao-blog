import type { Metadata } from "next";
import { ConverloopPage } from "@/components/converloop/ConverloopPage";
import { getConverloop } from "@/components/converloop/copy";
import { SiteShell } from "@/components/SiteShell";
import { CONVERLOOP } from "@/consts";

const c = getConverloop("zh");
export const metadata: Metadata = {
  title: "Converloop",
  description: c.meta.description,
  openGraph: { title: c.meta.title, description: c.meta.description, images: ["/converloop/icon.png"] },
  twitter: { card: "summary", images: ["/converloop/icon.png"] },
  alternates: { canonical: "/zh/converloop", languages: { en: "/converloop", zh: "/zh/converloop" } },
};

export default function Page() {
  return <SiteShell locale="zh"><ConverloopPage locale="zh" assetBase="/converloop" officialUrl={`${CONVERLOOP.url}/zh`} /></SiteShell>;
}
