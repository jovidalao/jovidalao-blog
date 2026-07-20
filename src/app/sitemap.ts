import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://jovidalao.com";
  const staticPaths = ["", "/zh", "/blog", "/zh/blog", "/peelday", "/zh/peelday", "/peelday/privacy", "/zh/peelday/privacy", "/peelday/terms", "/zh/peelday/terms", "/converloop", "/zh/converloop"];
  const [englishPosts, chinesePosts] = await Promise.all([getAllPosts("en"), getAllPosts("zh")]);
  return [
    ...staticPaths.map((path) => ({ url: `${baseUrl}${path}` })),
    ...englishPosts.map((post) => ({ url: `${baseUrl}/blog/${post.slug}`, lastModified: post.updatedDate ?? post.pubDate })),
    ...chinesePosts.map((post) => ({ url: `${baseUrl}/zh/blog/${post.slug}`, lastModified: post.updatedDate ?? post.pubDate })),
  ];
}
