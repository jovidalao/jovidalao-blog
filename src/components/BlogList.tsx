import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { localeBase, type Locale } from "@/i18n";
import styles from "./Blog.module.css";

function formattedDate(date: Date) {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function BlogList({ locale, posts }: { locale: Locale; posts: BlogPost[] }) {
  const base = localeBase(locale);
  return (
    <main className={styles.page}>
      <section>
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`${base}/blog/${post.slug}`}>
                {post.heroImage ? <Image width={720} height={360} src={post.heroImage} alt="" /> : null}
                <h4 className={styles.title}>{post.title}</h4>
                <p className={styles.date}><time dateTime={post.pubDate.toISOString()}>{formattedDate(post.pubDate)}</time></p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
