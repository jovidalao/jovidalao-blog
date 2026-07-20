import type { Metadata } from "next";
import { BlogList } from "@/components/BlogList";
import { SiteShell } from "@/components/SiteShell";
import { getAllPosts } from "@/lib/blog";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/consts";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/blog", languages: { en: "/blog", zh: "/zh/blog" } },
};

export default async function Page() {
  const posts = await getAllPosts("en");
  return <SiteShell locale="en"><BlogList locale="en" posts={posts} /></SiteShell>;
}
