import type { Metadata } from "next";
import { ConverloopDesktop } from "@/components/ConverloopDesktop";
import { SiteShell } from "@/components/SiteShell";
import { CONVERLOOP } from "@/consts";
import { getUi } from "@/i18n";

const d = getUi("en").converloopDesktop;

export const metadata: Metadata = {
  title: `${d.name} — ${d.tagline}`,
  description: d.metaDescription,
  openGraph: { images: ["/converloop-icon.png"] },
  twitter: { card: "summary", images: ["/converloop-icon.png"] },
  alternates: { canonical: "/converloop/desktop", languages: { en: "/converloop/desktop", zh: "/zh/converloop/desktop" } },
};

const softwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: `${CONVERLOOP.name} for Desktop`,
  description: d.metaDescription,
  applicationCategory: "EducationalApplication",
  operatingSystem: "macOS, Windows",
  softwareVersion: CONVERLOOP.version,
  downloadUrl: CONVERLOOP.releaseUrl,
  codeRepository: CONVERLOOP.repoUrl,
  license: "https://www.gnu.org/licenses/agpl-3.0.html",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function Page() {
  return (
    <SiteShell locale="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }} />
      <ConverloopDesktop locale="en" />
    </SiteShell>
  );
}
