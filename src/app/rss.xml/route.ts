import { SITE_DESCRIPTION, SITE_TITLE } from "@/consts";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '\"': "&quot;" })[character] ?? character);
}

export async function GET() {
  const baseUrl = "https://jovidalao.com";
  const [englishPosts, chinesePosts] = await Promise.all([getAllPosts("en"), getAllPosts("zh")]);
  const items = [...englishPosts, ...chinesePosts]
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf())
    .map((post) => {
      const localePath = post.locale === "zh" ? "/zh" : "";
      const link = `${baseUrl}${localePath}/blog/${post.slug}`;
      return `<item><title>${escapeXml(post.title)}</title><description>${escapeXml(post.description)}</description><link>${link}</link><guid>${link}</guid><pubDate>${post.pubDate.toUTCString()}</pubDate></item>`;
    })
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${SITE_TITLE}</title><description>${escapeXml(SITE_DESCRIPTION)}</description><link>${baseUrl}</link>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
