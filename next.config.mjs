import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

import process from 'node:process';
Object.assign(process.env, { NEXT_TELEMETRY_DISABLED: '1' });

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOpt = {
  // keepBackground: false,
  // theme: 'github-light',
  theme: {
    dark: 'github-dark-dimmed',
    light: 'github-light',
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOpt], rehypeSlug],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
  cleanDistDir: true,
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
};

export default withMDX(nextConfig);
