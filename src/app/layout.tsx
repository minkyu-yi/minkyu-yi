import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import classNames from 'classnames';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';

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
      <head>
        <meta
          name="google-site-verification"
          content="uZJu5bfkgkjg4XvNFoWa00VdYhWoA0XtqbxF4rKEexs"
        />
      </head>
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
                  <Link
                    className="hover:text-gray-400"
                    href="https://www.linkedin.com/in/minkyu-yi/"
                    target="_blank"
                    rel="noopener"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                    }}
                  >
                    <LinkedIn />
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
        <Analytics />
      </body>
      {process.env.NODE_ENV !== 'development' ? (
        <GoogleAnalytics gaId="G-2JF8J4DVF9" />
      ) : null}
    </html>
  );
}

function LinkedIn() {
  return (
    <>
      <span style={{ marginRight: 1 }}>LinkedIn</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
      </svg>
    </>
  );
}
