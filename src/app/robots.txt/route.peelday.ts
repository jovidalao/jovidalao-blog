import { PEELDAY } from "@/consts";

export const dynamic = "force-static";

// A route handler, not robots.ts: Next exports metadata files only under the default extensions.
export function GET() {
  return new Response(`User-Agent: *\nAllow: /\n\nSitemap: ${PEELDAY.url}/sitemap.xml\n`, { headers: { "Content-Type": "text/plain" } });
}
