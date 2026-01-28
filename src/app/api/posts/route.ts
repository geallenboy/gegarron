import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/posts'

export const runtime = 'nodejs'

export const GET = async () => {
  return NextResponse.json({ posts: getAllPosts() })
}
