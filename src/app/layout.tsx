import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '돈버는 글쓰기 무료 비밀특강 | 3일 만에 수익화 글쓰기 마스터',
  description: '평범한 글쓰기가 돈이 되는 순간을 경험하세요. 누적 수강생 1,000명+, 평균 수익 증가율 300%. 지금 무료 특강 신청하고 글쓰기 템플릿 3종을 받아가세요.',
  keywords: ['글쓰기', '수익화', '블로그', '뉴스레터', '콘텐츠 마케팅', '1인 창업', '지식 창업', '돈버는 글쓰기', '글쓰기 강의', '스토리텔링'],
  authors: [{ name: '돈버는 글쓰기' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://donwriting.com',
    title: '돈버는 글쓰기 무료 비밀특강',
    description: '단 3일 만에 독자를 사로잡고 수익을 만드는 글쓰기 비법. 유튜브 수익화, 스토리텔링 쇼츠 마스터.',
    siteName: '돈버는 글쓰기',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '돈버는 글쓰기 - 유튜브 수익화 스토리텔링 쇼츠',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '돈버는 글쓰기 무료 비밀특강',
    description: '단 3일 만에 독자를 사로잡고 수익을 만드는 글쓰기 비법',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://donwriting.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="dark" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
