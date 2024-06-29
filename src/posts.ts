import { readdir, stat } from 'fs/promises';

export interface Post {
  slug: string;
  title: string;
  publishDate: string;
  categories?: string[];
}

export async function getPosts(): Promise<Post[]> {
  const slugs = (
    await readdir('./src/app/posts', { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./app/posts/${name}/page.mdx`);
      const publishDate =
        metadata?.publishDate ??
        (
          await getFileBirthDate(`./src/app/posts/${name}/page.mdx`)
        ).toISOString();

      return { ...metadata, slug: `posts/${name}`, publishDate };
    })
  );
  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}

async function getFileBirthDate(path: string) {
  const stats = await stat(path);
  return stats.birthtime;
}
