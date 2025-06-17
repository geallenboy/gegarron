import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gegarron.com'
  
  // 静态页面
  const staticPages = [
    '',
    '/about',
    '/projects',
    '/blogs',
    '/changelog',
    '/friends',
  ]

  // 生成静态页面的sitemap条目
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))



  return [
    ...staticEntries,
    // ...blogEntries,
  ]
} 