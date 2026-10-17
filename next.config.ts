import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

// SITE=peelday builds peelday.jovidalao.com from the *.peelday.tsx routes alone;
// the default build is jovidalao.com and never sees them.
const peelday = process.env.SITE === "peelday";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  pageExtensions: peelday ? ["peelday.tsx", "peelday.ts"] : ["tsx", "ts"],
};

export default (phase: string): NextConfig => ({
  ...nextConfig,
  // Builds must not overwrite the modules used by a running dev server.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? (peelday ? ".next-dev-peelday" : ".next-dev") : ".next",
});
