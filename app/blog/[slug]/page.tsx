import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getBlogPost, getAllBlogPosts } from '../data';
import styles from '../blog.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Soham Ganatra',
    };
  }

  return {
    title: `${post.title} | Soham Ganatra`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];
  let key = 0;

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={key++}>
          {currentList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith('## ')) {
      flushList();
      elements.push(<h2 key={key++}>{trimmedLine.slice(3)}</h2>);
    } else if (trimmedLine.startsWith('- ')) {
      currentList.push(trimmedLine.slice(2));
    } else if (trimmedLine.startsWith('*') && trimmedLine.endsWith('*')) {
      flushList();
      elements.push(<p key={key++}><em>{trimmedLine.slice(1, -1)}</em></p>);
    } else if (trimmedLine) {
      flushList();
      elements.push(<p key={key++}>{trimmedLine}</p>);
    }
  }

  flushList();
  return elements;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/blog" className={styles.backLink}>
          ← Back to blog
        </Link>
      </header>

      <article className={styles.article}>
        <h1 className={styles.articleTitle}>{post.title}</h1>
        <time className={styles.articleMeta}>{formatDate(post.date)}</time>
        <div className={styles.articleContent}>
          {renderContent(post.content)}
        </div>
      </article>
    </div>
  );
}
