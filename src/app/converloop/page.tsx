import type { Metadata } from "next";
import { ConverloopPage } from "@/components/converloop/ConverloopPage";
import { getConverloop } from "@/components/converloop/copy";
import { SiteShell } from "@/components/SiteShell";
import { CONVERLOOP } from "@/consts";

const c = getConverloop("en");
export const metadata: Metadata = {
  title: "Converloop",
  description: c.meta.description,
  openGraph: { title: c.meta.title, description: c.meta.description, images: ["/converloop/icon.png"] },
  twitter: { card: "summary", images: ["/converloop/icon.png"] },
  alternates: { canonical: "/converloop", languages: { en: "/converloop", zh: "/zh/converloop" } },
};

export default function Page() {
  return <SiteShell locale="en"><ConverloopPage locale="en" assetBase="/converloop" officialUrl={`${CONVERLOOP.url}`} /></SiteShell>;
}
