import '@/app/globals.css'
import { Providers } from './providers'
import type { Metadata } from 'next'
import { Noto_Sans_SC, Noto_Serif_SC } from 'next/font/google'
import { name } from '@/config/infoConfig'
import { TopNav } from '@/components/TopNav'
import { Footer } from '@/components/Footer'

const sans = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-sans',
  display: 'swap',
})

const display = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gegarron.com'),
  title: {
    default: `${name} | AI 创作者与独立开发者`,
    template: `%s | ${name}`,
  },
  description:
    '记录 AI、自媒体、独立开发与个人成长的公开工作台，同时提供 AI 工作流升级、自动化与产品共创服务。',
  keywords: [
    'AI 自媒体',
    '独立开发',
    'AI 工作流',
    'AI 自动化',
    '内容系统',
    '个人品牌',
    '超级个体',
    'Gegarron',
    'AI 创作者',
    'AI 产品',
  ],
  authors: [{ name: name, url: 'https://gegarron.com' }],
  creator: name,
  publisher: name,
  openGraph: {
    title: `${name} | AI 创作者与独立开发者`,
    description:
      '公开记录思考、文章、产品与 AI 工作流实验，持续构建内容、产品和个人成长系统。',
    url: 'https://gegarron.com',
    siteName: `${name} Public Workbench`,
    images: [
      {
        url: 'https://gegarron.com/og-image.png',
        width: 1200,
        height: 630,
        alt: `${name} personal site`,
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${name} | AI 创作者与独立开发者`,
    description:
      '记录 AI、自媒体、独立开发与个人成长，分享产品实验和工作流升级实践。',
    creator: '@gejialun88',
    images: ['https://gegarron.com/og-image.png'],
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
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} font-sans`}>
        <Providers>
          <TopNav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
