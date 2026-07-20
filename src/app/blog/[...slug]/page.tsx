import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPost } from "@/components/BlogPost";
import { SiteShell } from "@/components/SiteShell";
import { getAllPosts, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  return (await getAllPosts("en")).map(({ slug }) => ({ slug: slug.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const post = await getPost("en", (await params).slug.join("/"));
  if (!post) return {};
  return {
    title: { absolute: post.title },
    description: post.description,
    openGraph: post.heroImage ? { images: [post.heroImage] } : undefined,
    alternates: { canonical: `/blog/${post.slug}`, languages: { en: `/blog/${post.slug}`, zh: `/zh/blog/${post.slug}` } },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const post = await getPost("en", (await params).slug.join("/"));
  if (!post) notFound();
  return <SiteShell locale="en"><BlogPost post={post} /></SiteShell>;
}
