import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = withMDX()({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    // mdxRs: true,
  },
});

export default nextConfig;
