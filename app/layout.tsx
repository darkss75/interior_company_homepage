import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '디자인크림 인테리어 DESIGN CREAM | 아파트 인테리어 전문',
  description: '인테리어를 넘어 사람 자체와 맞닿은 공간 디자인 - 아파트 인테리어 전문 회사 디자인크림',
  keywords: ['아파트 인테리어', '인테리어 디자인', '리모델링', '디자인크림', '홈 디자인', '공간 디자인'],
  authors: [{ name: '나경화', url: 'https://blog.naver.com/laillic' }],
  creator: '디자인크림 인테리어',
  publisher: '디자인크림',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.designcream.co.kr',
    title: '디자인크림 인테리어 DESIGN CREAM | 아파트 인테리어 전문',
    description: '인테리어를 넘어 사람 자체와 맞닿은 공간 디자인 - 아파트 인테리어 전문 회사 디자인크림',
    siteName: '디자인크림 인테리어',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
