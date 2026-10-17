import type { MetadataRoute } from "next";
import { SITE_URL } from "@/consts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/zh"];
  return [
    ...staticPaths.map((path) => ({ url: `${SITE_URL}${path}` })),
  ];
}
