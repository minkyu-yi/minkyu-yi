import { Posts } from '@/components/posts';
import { getPosts } from '@/posts';

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <div className="flex items-center justify-between">
        <h1>Posts</h1>
      </div>
      <Posts posts={posts} />
    </>
  );
}
