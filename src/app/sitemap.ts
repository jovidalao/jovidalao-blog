import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jovidalao.com";
  const staticPaths = [
    "", "/zh",
    "/peelday", "/zh/peelday",
    "/peelday/privacy", "/zh/peelday/privacy",
    "/peelday/terms", "/zh/peelday/terms",
    "/converloop", "/zh/converloop",
    "/converloop/privacy", "/zh/converloop/privacy",
    "/converloop/support", "/zh/converloop/support",
    "/converloop/desktop", "/zh/converloop/desktop",
  ];
  return [
    ...staticPaths.map((path) => ({ url: `${baseUrl}${path}` })),
  ];
}
