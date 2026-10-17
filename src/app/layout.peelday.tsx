import type { Metadata } from "next";
import { PEELDAY } from "@/consts";
import { getPeelday } from "@/i18n";

// peelday.jovidalao.com shares the home site's document, fonts and theme script.
export { default } from "./layout";

const { meta } = getPeelday("en");

export const metadata: Metadata = {
  metadataBase: new URL(PEELDAY.url),
  title: { default: meta.title, template: "%s" },
  description: meta.description,
  icons: { icon: "/peelday/app-icon.png", apple: "/peelday/app-icon.png" },
  openGraph: { type: "website", siteName: PEELDAY.name, title: meta.title, description: meta.description, images: ["/peelday/app-icon.png"] },
  twitter: { card: "summary", title: meta.title, description: meta.description, images: ["/peelday/app-icon.png"] },
};
