import '@/app/globals.css'
import { Providers } from './providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { name } from '@/config/infoConfig'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${name} | AI Developer & Creator`,
  description: `Portfolio of ${name}, an independent developer passionate about creating innovative solutions with AI. Specializing in AI automation, full-stack development, and open source.`,
  keywords: ['AI', 'Developer', 'Portfolio', 'Next.js', 'React', 'TypeScript', 'TailwindCSS', 'n8n', 'Automation', 'Gegarron', '独立开发者', 'AI工程师', '全栈', '开源'],
  authors: [{ name: name, url: 'https://gegarron.com' }],
  creator: name,
  publisher: name,
  openGraph: {
    title: `${name} | AI Developer & Creator`,
    description: `Explore the work of ${name}, an expert in AI automation and innovative application development.`,
    url: 'https://gegarron.com',
    siteName: `${name}'s Portfolio`,
    images: [
      {
        url: 'https://gegarron.com/og-image.png', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: `Portfolio of ${name}`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${name} | AI Developer & Creator`,
    description: `Portfolio of ${name}, an independent developer passionate about creating innovative solutions with AI.`,
    creator: '@gejialun88',
    images: ['https://gegarron.com/og-image.png'], // Must be an absolute URL
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
