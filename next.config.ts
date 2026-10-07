import type { NextConfig } from "next";

// Pages serves static assets; local development and Vercel keep the Next.js runtime.
const isCloudflarePages = process.env.CF_PAGES === "1";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  ...(isCloudflarePages ? {
    output: "export",
    images: { unoptimized: true },
  } : {}),
};

export default nextConfig;
