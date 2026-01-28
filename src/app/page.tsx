'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  projectsList,
  type ProjectItemType
} from '@/config/infoConfig'
import { Sidebar } from '@/components/Sidebar'
import {
  ArrowUpRight
} from 'lucide-react'

type PostMeta = {
  slug: string
  title: string
  date: string
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

export default function HomePage() {
  const projects = projectsList as ProjectItemType[]
  const [recentArticles, setRecentArticles] = useState<PostMeta[]>([])

  useEffect(() => {
    fetchPosts()
      .then((data) => setRecentArticles(data.slice(0, 10)))
      .catch(() => setRecentArticles([]))
  }, [])

  return (
    <main
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#f6f4f0] text-slate-900 dark:bg-[#0f1012] dark:text-slate-100"
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-200/60 via-orange-200/30 to-transparent blur-3xl dark:from-amber-500/10 dark:via-orange-500/5" />
        <div className="pointer-events-none absolute right-[-120px] top-32 h-[320px] w-[320px] rounded-full bg-gradient-to-br from-emerald-200/50 to-cyan-200/30 blur-3xl dark:from-emerald-400/10 dark:to-cyan-500/5" />
        <div className="pointer-events-none absolute left-[-180px] bottom-[-120px] h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-purple-200/50 to-indigo-200/30 blur-3xl dark:from-purple-400/10 dark:to-indigo-500/10" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,880px)] lg:justify-center">
          <Sidebar  />

          <div className="space-y-10">
            <section className="rounded-3xl border border-black/5 bg-white/90 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/5 dark:bg-[#15161a] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-[620px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500/80 dark:text-amber-400/80">关于我</p>
                 
                  <p className="mt-2 text-sm text-slate-600 dark:text-white/60">
                    我专注于做一件事： 把 AI 从“工具”和“噱头”，变成普通人真正能用、能长期依赖的理性助手—— 用于工作效率、人生决策、长期规划与自我管理。
                    我相信，未来最重要的资产，不在你名下，而在你身上。
                  </p>
                </div>
                <Link
                  href="/about"
                  className="inline-flex  items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-slate-600 transition hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:text-white"
                >
                  查看详情
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </section>

            <section id="products" className="rounded-3xl border border-black/5 bg-white/90 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/5 dark:bg-[#15161a] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500/80 dark:text-amber-400/80">我的产品</p>
                  <h2 className="mt-2 text-xl font-semibold">精选作品</h2>
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-slate-600 transition hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:text-white"
                >
                  查看更多
                  <ArrowUpRight size={12} />
                </Link>
              </div>

              <div className="mt-5">
                <div className="grid gap-4 sm:grid-cols-2 lg:flex lg:gap-4 lg:overflow-x-auto lg:pb-4">
                  {projects.slice(0, 6).map((project:any) => (
                  <article
                    key={project.name}
                    className="group w-full rounded-2xl border border-black/5 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-black/10 dark:border-white/5 dark:bg-[#111216] dark:shadow-[0_12px_30px_rgba(0,0,0,0.35)] dark:hover:border-white/15 lg:w-[260px] lg:flex-shrink-0"
                  >
                    <div className="relative h-40 w-full overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
                      {project.logo ? (
                        <Image
                          src={project.logo}
                          alt={project.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-black/5 text-xs text-slate-500 dark:bg-white/5 dark:text-white/50">
                          No Image
                        </div>
                      )}
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-semibold">{project.name}</h3>
                        <ArrowUpRight size={14} className="text-slate-400 transition group-hover:text-slate-900 dark:text-white/40 dark:group-hover:text-white/80" />
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-white/60">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(project.category ?? project.tags ?? []).slice(0, 3).map((tag:any) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/10 bg-black/5 px-2.5 py-1 text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.link?.href || '#'}
                      className="mt-4 inline-flex items-center gap-2 text-xs text-amber-600 transition group-hover:text-amber-700 dark:text-amber-300/90 dark:group-hover:text-amber-200"
                    >
                      {project.link?.label || '查看详情'}
                      <ArrowUpRight size={12} />
                    </Link>
                  </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="posts" className="rounded-3xl border border-black/5 bg-white/90 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/5 dark:bg-[#15161a] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500/80 dark:text-amber-400/80">近期文章</p>
                  <h2 className="mt-2 text-xl font-semibold">我在思考的内容</h2>
                </div>
                <Link
                  href="/posts"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-slate-600 transition hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:text-white"
                >
                  阅读更多
                  <ArrowUpRight size={12} />
                </Link>
              </div>
              <div className="mt-5 divide-y divide-black/5 dark:divide-white/5">
                {recentArticles.map((article, index) => (
                  <div
                    key={`${article.title}-${index}`}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3"
                  >
                    <span className="text-xs font-semibold text-slate-400 dark:text-white/40">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <Link
                      href={`/posts/${article.slug}`}
                      className="text-left text-sm text-slate-700 transition hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
                    >
                      {article.title}
                    </Link>
                    <span className="text-xs text-slate-400 dark:text-white/40">
                      {article.date} · {article.readingTime}
                    </span>
                  </div>
                ))}
                {recentArticles.length === 0 && (
                  <div className="py-4 text-sm text-slate-500 dark:text-white/50">
                    暂无文章，请稍后再来。
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
