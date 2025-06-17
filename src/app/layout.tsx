import '@/styles/tailwind.css'
import { Providers } from './providers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GeGarron - AI Engineer & Independent Developer',
  description: 'AI Engineer, Independent Developer, AI Explorer, AI Automation Expert. Focused on AI automation solutions and independent product development.',
  keywords: 'AI, Full-stack Engineer, Independent Developer, AI Explorer, AI Automation, Next.js, React, TypeScript',
  authors: [{ name: 'GeGarron' }],
  creator: 'GeGarron',
  publisher: 'GeGarron',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://gegarron.com',
    title: 'GeGarron - AI Engineer & Independent Developer',
    description: 'AI Engineer, Independent Developer, AI Explorer, AI Automation Expert',
    siteName: 'GeGarron Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GeGarron - AI Engineer & Independent Developer',
    description: 'AI Engineer, Independent Developer, AI Explorer, AI Automation Expert',
    creator: '@gejialun88',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  )
}
