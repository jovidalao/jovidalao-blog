import { PEELDAY } from "@/consts";

export const dynamic = "force-static";

export function GET() {
  const urls = ["", "/zh", "/privacy", "/zh/privacy", "/terms", "/zh/terms"]
    .map((path) => `<url><loc>${PEELDAY.url}${path}</loc></url>`)
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
