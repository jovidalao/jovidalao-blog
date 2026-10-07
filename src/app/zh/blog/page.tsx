import type { Metadata } from "next";
import { BlogList } from "@/components/BlogList";
import { SiteShell } from "@/components/SiteShell";
import { getAllPosts } from "@/lib/blog";
import { getUi } from "@/i18n";

export const metadata: Metadata = {
  title: getUi("zh").blog.heading,
  description: "jovidalao 关于学习与构建的笔记。",
  alternates: { canonical: "/zh/blog", languages: { en: "/blog", zh: "/zh/blog" } },
};

export default async function Page() {
  const posts = await getAllPosts("zh");
  return <SiteShell locale="zh"><BlogList locale="zh" posts={posts} /></SiteShell>;
}
