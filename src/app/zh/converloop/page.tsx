import type { Metadata } from "next";
import { ConverloopLanding } from "@/components/ConverloopLanding";
import { SiteShell } from "@/components/SiteShell";
import { CONVERLOOP } from "@/consts";
import { getUi } from "@/i18n";

const c = getUi("zh").converloop;
export const metadata: Metadata = {
  title: `${CONVERLOOP.name} — ${c.tagline}`,
  description: c.metaDescription,
  openGraph: { images: ["/converloop-icon.png"] },
  twitter: { card: "summary", images: ["/converloop-icon.png"] },
  alternates: { canonical: "/zh/converloop", languages: { en: "/converloop", zh: "/zh/converloop" } },
};

const softwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: CONVERLOOP.name,
  description: c.metaDescription,
  applicationCategory: "EducationalApplication",
  operatingSystem: "macOS",
  softwareVersion: CONVERLOOP.version,
  downloadUrl: CONVERLOOP.releaseUrl,
  codeRepository: CONVERLOOP.repoUrl,
  license: "https://www.gnu.org/licenses/agpl-3.0.html",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function Page() {
  return <SiteShell locale="zh"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }} /><ConverloopLanding locale="zh" /></SiteShell>;
}
