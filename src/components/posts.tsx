import { Post } from '@/posts';
import Link from 'next/link';

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map(({ slug, title, publishDate, categories }) => (
        <li key={slug}>
          <h2>
            <Link
              className="no-underline hover:text-gray-500"
              href={`/${slug}`}
            >
              {title}
            </Link>
          </h2>
          <p>
            <strong>Published:</strong>{' '}
            {new Date(publishDate).toLocaleDateString()}{' '}
            <strong>Categories:</strong>{' '}
            {categories?.map((cat, i) => `${i ? ', ' : ''}${cat}`)}
          </p>
        </li>
      ))}
    </ul>
  );
}
