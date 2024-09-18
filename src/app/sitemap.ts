import { getPosts } from '@/posts';
import { MetadataRoute } from 'next';

const BASE_URL = 'https://minkyu-yi.vercel.app';

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
  // const start = id * 50000;
  // const end = start + 50000;
  const posts = await getPosts();

  return [
    { url: `${BASE_URL}` },
    { url: `${BASE_URL}/posts` },
    { url: `${BASE_URL}/about`, lastModified: '2024-09-18' },
    ...posts.map((post) => ({
      url: `${BASE_URL}/${post.slug}`,
      lastModified: post.publishDate,
    })),
  ];
}
