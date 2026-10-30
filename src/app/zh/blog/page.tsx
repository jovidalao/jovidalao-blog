import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogList } from "@/components/BlogList";
import { SiteShell } from "@/components/SiteShell";
import { BLOG_PUBLISHED } from "@/consts";
import { getUi } from "@/i18n";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: getUi("zh").blog.heading,
  description: "jovidalao 关于学习与构建的笔记。",
  alternates: { canonical: "/zh/blog", languages: { en: "/blog", zh: "/zh/blog", "x-default": "/blog" } },
};

export default async function Page() {
  if (!BLOG_PUBLISHED) notFound();
  const posts = await getAllPosts("zh");
  return <SiteShell locale="zh"><BlogList locale="zh" posts={posts} /></SiteShell>;
}
