import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/consts";
import "./globals.css";

const atkinson = localFont({
  src: [
    { path: "../assets/fonts/atkinson-regular.woff", weight: "400", style: "normal" },
    { path: "../assets/fonts/atkinson-bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-atkinson",
  display: "swap",
});

const siteUrl = "https://jovidalao.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: SITE_TITLE, template: `%s · ${SITE_TITLE}` },
  description: SITE_DESCRIPTION,
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }] },
  alternates: { types: { "application/rss+xml": "/rss.xml" } },
  openGraph: { type: "website", siteName: SITE_TITLE, title: SITE_TITLE, description: SITE_DESCRIPTION, images: ["/blog-placeholder.jpg"] },
  twitter: { card: "summary_large_image", title: SITE_TITLE, description: SITE_DESCRIPTION, images: ["/blog-placeholder.jpg"] },
};

const themeScript = `
  try {
    document.documentElement.lang = location.pathname === '/zh' || location.pathname.indexOf('/zh/') === 0 ? 'zh' : 'en';
    var preference = localStorage.getItem('theme') || 'system';
    var dark = preference === 'dark' || (preference === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  } catch (_) {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={atkinson.variable} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
