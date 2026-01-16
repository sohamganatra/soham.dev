import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBlogPosts } from './data';
import styles from './blog.module.css';

export const metadata: Metadata = {
  title: 'Blog | Soham Ganatra',
  description: 'Thoughts on AI, technology, and building the future.',
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Back to home
        </Link>
        <h1 className={styles.pageTitle}>Blog</h1>
        <p className={styles.pageSubtitle}>
          Thoughts, ideas, and occasional ramblings.
        </p>
      </header>

      <div className={styles.postList}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.postCard}>
            <Link href={`/blog/${post.slug}`} className={styles.postLink}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <time className={styles.postMeta}>{formatDate(post.date)}</time>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
