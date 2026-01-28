'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { Breadcrumb } from '@/components/Breadcrumb'


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
    const target = `${post.title} ${post.excerpt} ${post.tags.join(' ')}`.toLowerCase()
    return target.includes(searchTerm.toLowerCase())
  })
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize))
  const safePage = Math.min(currentPage, totalPages)
  const pagePosts = filteredPosts.slice((safePage - 1) * pageSize, safePage * pageSize)

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f4f0] text-slate-900 dark:bg-[#0b0c0f] dark:text-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-44 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-200/60 via-orange-200/30 to-transparent blur-3xl dark:from-amber-500/20 dark:via-orange-400/10" />
        <div className="pointer-events-none absolute right-[-160px] top-32 h-[320px] w-[320px] rounded-full bg-gradient-to-br from-emerald-200/50 to-cyan-200/30 blur-3xl dark:from-emerald-500/15 dark:to-cyan-400/10" />
        <div className="pointer-events-none absolute left-[-200px] bottom-[-120px] h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-purple-200/50 to-indigo-200/30 blur-3xl dark:from-purple-500/15 dark:to-indigo-500/10" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,880px)] lg:justify-center">
          <Sidebar />

          <div className="space-y-8">
            <section className="rounded-3xl border border-black/5 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/5 dark:bg-[#141518]/80 dark:shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <Breadcrumb items={[{ label: '首页', href: '/' }, { label: '文章', href: '/posts' }]} />
                 
                  <h1 className="mt-2 text-2xl font-semibold tracking-tight">我的文章</h1>
                  <p className="mt-2 text-sm text-slate-600 dark:text-white/60">
                    分享我的技术实践、产品复盘与日常思考。
                  </p>
                </div>
                
              </div>
            </section>

            <section className="rounded-3xl border border-black/5 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/5 dark:bg-[#141518]/80 dark:shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
              <div className="space-y-4">
                {pagePosts.map((article, index) => (
                  <Link
                    key={article.slug}
                    href={`/posts/${article.slug}`}
                    className="group grid gap-4 rounded-2xl border border-black/5 bg-white p-4 transition hover:border-amber-400/30 dark:border-white/5 dark:bg-[#111216] sm:grid-cols-[150px_1fr]"
                  >
                    <div className="relative h-24 w-full overflow-hidden rounded-xl border border-black/10 bg-slate-100 dark:border-white/10 dark:bg-[#0f1012] sm:h-full">
                      {article.cover ? (
                        <Image
                          src={article.cover}
                          alt={article.title}
                          fill
                          sizes="150px"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs text-slate-400 dark:text-white/40">
                          No Image
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-white/50">
                        <span>
                          {String((safePage - 1) * pageSize + index + 1).padStart(2, '0')}
                        </span>
                        <span>·</span>
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readingTime}</span>
                      </div>
                      <h3 className="text-base font-semibold text-slate-900 transition group-hover:text-slate-900 dark:text-white/90 dark:group-hover:text-white">
                        {article.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-white/60">{article.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-black/10 bg-black/5 px-2 py-1 text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
                {pagePosts.length === 0 && (
                  <div className="py-6 text-sm text-slate-500 dark:text-white/50">暂无匹配文章，请调整搜索条件。</div>
                )}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 dark:text-white/40">
                <span>
                  {filteredPosts.length} 篇文章 · 第 {safePage} / {totalPages} 页
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={safePage === 1}
                    className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-slate-600 transition hover:border-amber-400/50 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:text-white"
                  >
                    上一页
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={safePage === totalPages}
                    className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-slate-600 transition hover:border-amber-400/50 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:text-white"
                  >
                    下一页
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
