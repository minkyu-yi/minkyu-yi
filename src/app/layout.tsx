import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import classNames from 'classnames';
import { GoogleAnalytics } from '@next/third-parties/google';

const noto_sans_kr = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  authors: { name: '이민규' },
  title: '글 쓰기',
  description: '생각 정리와 글 쓰기',
};

if (typeof window !== 'undefined') {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={classNames([
          noto_sans_kr.className,
          'prose dark:prose-invert max-w-screen-lg',
          'dark:bg-gray-900',
          'container min-h-full',
          'flex flex-col',
          'py-4 sm:p-12',
        ])}
      >
        <header className="border-b border-slate-900/10 dark:border-slate-300/10 px-6">
          <div className="py-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-2xl font-bold">
                  <Link href="/" className="hover:text-gray-400 no-underline">
                    Minkyu Yi
                  </Link>
                </span>
              </div>
              <div>
                <nav className="space-x-4">
                  <Link href="/about" className="hover:text-gray-400">
                    About
                  </Link>
                  <Link href="/" className="hover:text-gray-400">
                    Posts
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <main className="px-6 py-8 flex-1">{children}</main>

        <footer className="mt-8">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-600 dark:text-gray-300">
                © 2024 글 쓰기. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
      <GoogleAnalytics gaId="G-2JF8J4DVF9" />
    </html>
  );
}
