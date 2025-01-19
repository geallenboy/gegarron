import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getBlogBySlug } from '@/lib/blogs'
import { getMDXContent } from '@/lib/mdx'
import { BlogLayout } from '@/components/layout/BlogLayout'

export const runtime = process.env.NEXT_RUNTIME === 'edge' ? 'edge' : 'nodejs'

interface Props {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const blog = await getBlogBySlug(params.slug)
  if (!blog) {
    return {
      title: 'Blog not found',
    }
  }

  return {
    title: blog.title,
    description: blog.description,
  }
}

export const BlogPage = async ({ params }: Props) => {
  const blog = await getBlogBySlug(params.slug)

  if (!blog) {
    notFound()
  }

  const content = await getMDXContent(params.slug)

  return (
    <BlogLayout blog={blog}>
      <div className="prose dark:prose-invert mt-8">{content}</div>
    </BlogLayout>
  )
}

export default BlogPage
