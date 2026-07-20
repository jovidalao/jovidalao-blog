import "server-only";

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import type { Locale } from "@/i18n";

export type BlogPost = {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  heroImage?: string;
  content: string;
};

async function markdownFiles(directory: string, prefix = ""): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const relativePath = path.join(prefix, entry.name);
    if (entry.isDirectory()) return markdownFiles(path.join(directory, entry.name), relativePath);
    return entry.isFile() && entry.name.endsWith(".md") ? [relativePath] : [];
  }));
  return files.flat();
}

function publicImage(value: unknown) {
  return typeof value === "string" ? `/blog/${path.basename(value)}` : undefined;
}

export const getAllPosts = cache(async (locale: Locale): Promise<BlogPost[]> => {
  const directory = path.join(process.cwd(), "content", "blog", locale);
  const files = await markdownFiles(directory);
  const posts = await Promise.all(files.map(async (file) => {
    const raw = await readFile(path.join(directory, file), "utf8");
    const { data, content } = matter(raw);
    const slug = file.replace(/\.md$/, "").split(path.sep).join("/");
    return {
      slug,
      locale,
      title: String(data.title),
      description: String(data.description),
      pubDate: new Date(String(data.pubDate)),
      updatedDate: data.updatedDate ? new Date(String(data.updatedDate)) : undefined,
      heroImage: publicImage(data.heroImage),
      content: content.replace(/(?:\.\.\/)+assets\/([^\s)]+)/g, "/blog/$1"),
    } satisfies BlogPost;
  }));
  return posts.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
});

export async function getPost(locale: Locale, slug: string) {
  const posts = await getAllPosts(locale);
  return posts.find((post) => post.slug === slug);
}
