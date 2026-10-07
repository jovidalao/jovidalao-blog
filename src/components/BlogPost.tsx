import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { BlogPost as BlogPostData } from "@/lib/blog";
import { getUi, localeBase, type Locale } from "@/i18n";
import { formatDate } from "@/lib/date";
import styles from "./Blog.module.css";
import site from "./site.module.css";

export function BlogPost({ post, locale }: { post: BlogPostData; locale: Locale }) {
  const t = getUi(locale).blog;
  const base = localeBase(locale);

  return (
    <main className={site.page}>
      <article className={site.shell}>
        <div className={styles.article}>
          <Link href={`${base}/blog`} className={styles.back}>{t.back}</Link>
          <div className={styles.articleMeta}>
            <time dateTime={post.pubDate.toISOString()}>{formatDate(post.pubDate, locale)}</time>
            {post.updatedDate ? (
              <span>{t.updated} <time dateTime={post.updatedDate.toISOString()}>{formatDate(post.updatedDate, locale)}</time></span>
            ) : null}
          </div>
          <h1 className={styles.articleTitle}>{post.title}</h1>

          {post.heroImage ? (
            <div className={styles.hero}>
              <Image width={1020} height={510} src={post.heroImage} alt="" priority />
            </div>
          ) : null}

          <div className={styles.prose}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </div>
      </article>
    </main>
  );
}
