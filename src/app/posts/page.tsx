'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'

type PostMeta = {
  slug: string
  title: string
  date: string
  excerpt: string
  cover?: string
  tags: string[]
  readingTime: string
}

const fetchPosts = async () => {
  const response = await fetch('/api/posts')
  if (!response.ok) {
    return []
  }
  const data = await response.json()
  return (data.posts as PostMeta[]) || []
}

export default function PostsPage() {
  const [posts, setPosts] = useState<PostMeta[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 8

  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data))
      .catch(() => setPosts([]))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const filteredPosts = posts.filter((post) => {
    if (!searchTerm.trim()) return true
    const target =
      `${post.title} ${post.excerpt} ${post.tags.join(' ')}`.toLowerCase()
    return target.includes(searchTerm.toLowerCase())
  })
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize))
  const safePage = Math.min(currentPage, totalPages)
  const pagePosts = filteredPosts.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize,
  )

  return (
    <main className="mx-auto w-full max-w-[960px] px-4 py-12 sm:px-6 lg:py-16">
      {/* ── Page title ── */}
      <section>
        <h1 className="text-2xl font-bold text-(--ink)">文章</h1>
        <p className="mt-2 text-base text-(--muted)">
          关于 AI、产品、工作流、自媒体和个人成长的思考与记录。
        </p>
      </section>

      {/* ── Search ── */}
      <section className="mt-8">
        <label className="relative block max-w-sm">
          <Search
            size={16}
            className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-(--muted)"
          />
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="搜索标题、摘要或标签"
            className="w-full rounded-lg border border-(--line) bg-(--card-bg) py-2.5 pr-4 pl-10 text-sm text-(--ink) transition outline-none placeholder:text-(--muted) focus:border-(--accent)"
          />
        </label>
      </section>

      {/* ── Article list ── */}
      <section className="mt-10">
        <div className="divide-y divide-(--line)">
          {pagePosts.map((article) => (
            <Link
              key={article.slug}
              href={`/posts/${article.slug}`}
              className="group block py-5 first:pt-0 last:pb-0 transition hover:opacity-80"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base font-medium text-(--ink) group-hover:text-(--accent) transition">
                  {article.title}
                </h3>
                <time className="shrink-0 text-sm text-(--muted)">
                  {article.date}
                </time>
              </div>
              {article.excerpt && (
                <p className="mt-1.5 line-clamp-2 text-sm text-(--muted)">
                  {article.excerpt}
                </p>
              )}
              {article.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-(--line) px-1.5 py-0.5 text-xs text-(--muted)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
          {pagePosts.length === 0 && (
            <p className="py-8 text-center text-sm text-(--muted)">
              暂无匹配文章，请调整搜索条件。
            </p>
          )}
        </div>
      </section>

      {/* ── Pagination ── */}
      <section className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-(--muted)">
        <span>
          {filteredPosts.length} 篇文章 · 第 {safePage} / {totalPages} 页
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() =>
              setCurrentPage((prev) => Math.max(1, prev - 1))
            }
            disabled={safePage === 1}
            className="btn-secondary btn-sm disabled:cursor-not-allowed disabled:opacity-40"
          >
            上一页
          </button>
          <button
            type="button"
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={safePage === totalPages}
            className="btn-secondary btn-sm disabled:cursor-not-allowed disabled:opacity-40"
          >
            下一页
          </button>
        </div>
      </section>
    </main>
  )
}
