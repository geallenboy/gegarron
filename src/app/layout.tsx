import { type Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout/Layout'
import { Analytics } from '@/components/analytics/analytics'
import { name } from '@/config/infoConfig'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: `%s - ${name}`,
    default: `AI全栈工程师｜独立开发者`,
  },
  description: `我是GeGarron，AI全栈工程师,独立开发者。`,
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed`,
    },
  },
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <div className="flex w-full">
              <Layout>{children}</Layout>
            </div>
            <Analytics />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
