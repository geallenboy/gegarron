import { NextResponse } from 'next/server'
import { getPostBySlug } from '@/lib/posts'

export const runtime = 'nodejs'

export const GET = async (_request: Request, context: { params: Promise<{ slug: string }> }) => {
  const { slug } = await context.params
  const post = getPostBySlug(slug)
  if (!post) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ post })
}
