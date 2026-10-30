import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogList } from "@/components/BlogList";
import { SiteShell } from "@/components/SiteShell";
import { BLOG_PUBLISHED, SITE_DESCRIPTION } from "@/consts";
import { getUi } from "@/i18n";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: getUi("en").blog.heading,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/blog", languages: { en: "/blog", zh: "/zh/blog", "x-default": "/blog" } },
};

export default async function Page() {
  if (!BLOG_PUBLISHED) notFound();
  const posts = await getAllPosts("en");
  return <SiteShell locale="en"><BlogList locale="en" posts={posts} /></SiteShell>;
}
