import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { getUi, localeBase, type Locale } from "@/i18n";
import { formatDate } from "@/lib/date";
import styles from "./Blog.module.css";
import site from "./site.module.css";

export function BlogList({ locale, posts }: { locale: Locale; posts: BlogPost[] }) {
  const t = getUi(locale).blog;
  const base = localeBase(locale);

  return (
    <main className={site.page}>
      <section className={site.shell}>
        <div className={site.head}>
          <p className={site.kicker}>{t.kicker}</p>
          <h1>{t.heading}</h1>
          <p className={site.sub}>{t.body}</p>
        </div>

        {posts.length === 0 ? (
          <p className={site.sub} style={{ marginTop: 40 }}>{t.empty}</p>
        ) : (
          <div className={styles.list}>
            {posts.map((post) => (
              <Link key={post.slug} href={`${base}/blog/${post.slug}`} className={styles.item}>
                <div>
                  <h2 className={styles.itemTitle}>{post.title}</h2>
                  {post.description ? <p className={styles.itemDesc}>{post.description}</p> : null}
                </div>
                <time className={styles.itemDate} dateTime={post.pubDate.toISOString()}>{formatDate(post.pubDate, locale)}</time>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
