import type { Metadata } from "next";
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import classNames from 'classnames';

const noto_sans_kr = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  authors: { name: '이민규' },
  title: '글 쓰기',
  description: '생각 정리와 글 쓰기',
};

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
          'container min-h-full',
          'prose max-w-screen-lg',
          'flex flex-col',
          'py-4 sm:p-12',
        ])}
      >
        <header>
          <div className="px-6 py-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-2xl font-bold">글 쓰기</span>
              </div>
              <div>
                <nav className="space-x-4">
                  <Link href="/" className="hover:text-gray-600">
                    Home
                  </Link>
                  <Link href="/about" className="hover:text-gray-600">
                    About
                  </Link>
                  <Link href="#" className="hover:text-gray-600">
                    Posts
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <main className="px-6 py-8 flex-1">{children}</main>

        <footer className="bg-white mt-8">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">
                © 2024 글 쓰기. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
