import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { BlogPost as BlogPostData } from "@/lib/blog";
import styles from "./Blog.module.css";

function formattedDate(date: Date) {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function BlogPost({ post }: { post: BlogPostData }) {
  return (
    <main className={styles.articleMain}>
      <article>
        <div className={styles.heroImage}>
          {post.heroImage ? <Image width={1020} height={510} src={post.heroImage} alt="" priority /> : null}
        </div>
        <div className={styles.prose}>
          <div className={styles.articleTitle}>
            <div className={styles.date}>
              <time dateTime={post.pubDate.toISOString()}>{formattedDate(post.pubDate)}</time>
              {post.updatedDate ? <div className={styles.lastUpdated}>Last updated on <time dateTime={post.updatedDate.toISOString()}>{formattedDate(post.updatedDate)}</time></div> : null}
            </div>
            <h1>{post.title}</h1>
            <hr />
          </div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
