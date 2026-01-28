'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Sidebar } from '@/components/Sidebar'
import { Breadcrumb } from '@/components/Breadcrumb'
import {
  ArrowRight
} from 'lucide-react'

type PageProps = {
  params: {
    slug: string
  }
}

type PostDetail = {
  slug: string
  title: string
  date: string
  excerpt: string
  cover?: string
  tags: string[]
  readingTime: string
  content: string
  toc: Array<{ id: string; text: string; level: number }>
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[\s/]+/g, '-')
    .replace(/[^a-z0-9\-一-龥]/g, '')

const getTextFromChildren = (children: ReactNode): string => {
  if (typeof children === 'string' || typeof children === 'number') {
    return String(children)
  }
  if (Array.isArray(children)) {
    return children.map(getTextFromChildren).join('')
  }
  if (children && typeof children === 'object' && 'props' in children) {
    return getTextFromChildren((children as { props?: { children?: React.ReactNode } }).props?.children)
  }
  return ''
}

export default function PostDetailPage(_props: PageProps) {
  const params = useParams()
  const slug = Array.isArray(params?.slug) ? params.slug[0] : (params?.slug as string | undefined)
  const [post, setPost] = useState<PostDetail | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (!slug) return
    const controller = new AbortController()
    setIsLoading(true)
    fetch(`/api/posts/${encodeURIComponent(slug)}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Post not found')
        }
        return response.json()
      })
      .then((data) => {
        setPost(data.post as PostDetail)
        setHasError(false)
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false))

    return () => controller.abort()
  }, [slug])

  const tocItems = useMemo(() => post?.toc ?? [], [post])

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

          <div className="grid gap-6 lg:grid-cols-[1fr_260px]">
            <section className="space-y-6">
              <div className="rounded-3xl border border-black/5 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/5 dark:bg-[#141518]/80 dark:shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
                <Breadcrumb
                  items={[
                    { label: '首页', href: '/' },
                    { label: '文章', href: '/posts' }
                  ]}
                />
                
                <h1 className="mt-3 text-2xl font-semibold tracking-tight">
                  {post?.title || '正在加载文章'}
                </h1>
                <div className="mt-3 flex items-center gap-3 text-xs text-slate-500 dark:text-white/50">
                  <span>{post?.date || '—'}</span>
                  <span>·</span>
                  <span>{post?.readingTime || '—'}</span>
                </div>
                {post?.tags && post.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 bg-black/5 px-2.5 py-1 text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {post?.cover && (
                  <div className="relative mt-5 h-48 w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-black/5 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/5 dark:bg-[#141518]/80 dark:shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
                {isLoading && <p className="text-sm text-slate-600 dark:text-white/60">正在加载文章内容...</p>}
                {!isLoading && hasError && (
                  <div className="space-y-3 text-sm text-slate-600 dark:text-white/60">
                    <p>文章不存在或读取失败。</p>
                    <Link
                      href="/posts"
                      className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-300"
                    >
                      返回文章列表
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                )}
                {!isLoading && !hasError && post && (
                  <>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-white/70">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 space-y-6">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h2: ({ children, ...props }) => {
                            const text = getTextFromChildren(children)
                            return (
                              <h2
                                id={slugify(text)}
                                className="scroll-mt-24 text-base font-semibold text-slate-900 dark:text-white/90"
                                {...props}
                              >
                                {children}
                              </h2>
                            )
                          },
                          h3: ({ children, ...props }) => {
                            const text = getTextFromChildren(children)
                            return (
                              <h3
                                id={slugify(text)}
                                className="scroll-mt-24 text-sm font-semibold text-slate-800 dark:text-white/80"
                                {...props}
                              >
                                {children}
                              </h3>
                            )
                          },
                          p: ({ children, ...props }) => (
                            <p className="text-sm leading-relaxed text-slate-700 dark:text-white/70" {...props}>
                              {children}
                            </p>
                          ),
                          ul: ({ children, ...props }) => (
                            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-white/70" {...props}>
                              {children}
                            </ul>
                          ),
                          ol: ({ children, ...props }) => (
                            <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700 dark:text-white/70" {...props}>
                              {children}
                            </ol>
                          ),
                          li: ({ children, ...props }) => (
                            <li className="text-sm text-slate-700 dark:text-white/70" {...props}>
                              {children}
                            </li>
                          ),
                          blockquote: ({ children, ...props }) => (
                            <blockquote
                              className="border-l-2 border-amber-400/50 pl-4 text-sm text-slate-600 dark:text-white/60"
                              {...props}
                            >
                              {children}
                            </blockquote>
                          ),
                          a: ({ children, ...props }) => (
                            <a className="text-amber-600 underline-offset-4 hover:underline dark:text-amber-300" {...props}>
                              {children}
                            </a>
                          ),
                          code: ({ children, ...props }) => (
                            <code
                              className="rounded bg-black/10 px-1.5 py-0.5 text-xs text-amber-600 dark:bg-white/10 dark:text-amber-200"
                              {...props}
                            >
                              {children}
                            </code>
                          ),
                          pre: ({ children, ...props }) => (
                            <pre
                              className="overflow-x-auto rounded-xl border border-black/10 bg-slate-100 p-4 text-xs text-slate-700 dark:border-white/10 dark:bg-[#0f1012] dark:text-white/70"
                              {...props}
                            >
                              {children}
                            </pre>
                          )
                        }}
                      >
                        {post.content}
                      </ReactMarkdown>
                    </div>
                  </>
                )}
              </div>
            </section>

            <aside className="lg:sticky lg:top-8">
              <div className="rounded-2xl border border-black/5 bg-white/90 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/5 dark:bg-[#141518]/80 dark:shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-white/40">目录</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-white/60">
                  {tocItems.length === 0 && <li className="text-slate-400 dark:text-white/40">暂无目录</li>}
                  {tocItems.map((section) => (
                    <li
                      key={section.id}
                      className={section.level === 3 ? 'pl-4 text-slate-500 dark:text-white/50' : undefined}
                    >
                      <Link href={`#${section.id}`} className="transition hover:text-slate-900 dark:hover:text-white">
                        {section.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  )
}
