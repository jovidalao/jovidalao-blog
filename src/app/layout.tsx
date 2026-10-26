import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/consts";
import "./globals.css";

// Bundle the same fonts so cloud builds never depend on Google Fonts responses.
// The CJK fallbacks continue to handle the /zh pages.
const sans = localFont({
  src: [{ path: "../fonts/hanken-grotesk/HankenGrotesk[wght].ttf", weight: "400 800", style: "normal" }],
  variable: "--font-sans",
  display: "swap",
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "sans-serif"],
});

const mono = localFont({
  src: [
    { path: "../fonts/ibm-plex-mono/IBMPlexMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-mono/IBMPlexMono-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/ibm-plex-mono/IBMPlexMono-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "PingFang SC", "Microsoft YaHei", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s · ${SITE_TITLE}` },
  description: SITE_DESCRIPTION,
  icons: { icon: [{ url: "/brand-mark.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }] },
  alternates: { types: { "application/rss+xml": "/rss.xml" } },
  openGraph: { type: "website", siteName: SITE_TITLE, title: SITE_TITLE, description: SITE_DESCRIPTION, images: ["/brand-mark.png"] },
  twitter: { card: "summary", title: SITE_TITLE, description: SITE_DESCRIPTION, images: ["/brand-mark.png"] },
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
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
