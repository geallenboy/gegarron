'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ArrowRight } from 'lucide-react'

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
    return getTextFromChildren(
      (children as { props?: { children?: React.ReactNode } }).props?.children,
    )
  }
  return ''
}

export default function PostDetailPage() {
  const params = useParams()
  const slug = Array.isArray(params?.slug)
    ? params.slug[0]
    : (params?.slug as string | undefined)
  const [post, setPost] = useState<PostDetail | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (!slug) return
    const controller = new AbortController()
    setIsLoading(true)
    fetch(`/api/posts/${encodeURIComponent(slug)}`, {
      signal: controller.signal,
    })
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
    <main className="page-shell text-[var(--ink)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-44 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#f1c9af]/70 via-[#f4dfd0]/25 to-transparent blur-3xl dark:from-[#d88249]/15 dark:via-[#d88249]/5" />
        <div className="pointer-events-none absolute top-32 right-[-160px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-emerald-200/50 to-cyan-200/30 blur-3xl dark:from-emerald-500/15 dark:to-cyan-400/10" />
        <div className="pointer-events-none absolute bottom-[-120px] left-[-200px] h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-amber-100/70 to-rose-100/35 blur-3xl dark:from-orange-400/10 dark:to-rose-400/5" />
      </div>

      <div className="relative mx-auto w-full max-w-[960px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
            <section className="space-y-6">
              <div className="glass-card rounded-[36px] p-6 sm:p-8 lg:p-10">
                <Breadcrumb
                  items={[
                    { label: '首页', href: '/' },
                    { label: '文章', href: '/posts' },
                  ]}
                />

                <p className="kicker mt-6">Article</p>
                <h1 className="section-title mt-4 text-[var(--ink)] sm:text-[3rem]">
                  {post?.title || '正在加载文章'}
                </h1>
                <div className="mt-4 flex items-center gap-3 text-xs tracking-[0.24em] text-[var(--muted)]/80 uppercase">
                  <span>{post?.date || '—'}</span>
                  <span>·</span>
                  <span>{post?.readingTime || '—'}</span>
                </div>
                {post?.tags && post.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--line)] bg-white/50 px-2.5 py-1 text-[11px] text-[var(--muted)] dark:bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {post?.cover && (
                  <div className="relative mt-6 h-56 w-full overflow-hidden rounded-[28px] border border-[var(--line)]">
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

              <div className="glass-card rounded-[32px] p-6 sm:p-8">
                {isLoading && (
                  <p className="text-sm text-[var(--muted)]">
                    正在加载文章内容...
                  </p>
                )}
                {!isLoading && hasError && (
                  <div className="space-y-3 text-sm text-[var(--muted)]">
                    <p>文章不存在或读取失败。</p>
                    <Link
                      href="/posts"
                      className="inline-flex items-center gap-2 text-[var(--accent)]"
                    >
                      返回文章列表
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                )}
                {!isLoading && !hasError && post && (
                  <>
                    <p className="border-l-2 border-[var(--accent)]/40 pl-4 text-base leading-8 text-[var(--muted)]">
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
                                className="scroll-mt-24 text-xl font-semibold text-[var(--ink)]"
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
                                className="scroll-mt-24 text-base font-semibold text-[var(--ink)]/90"
                                {...props}
                              >
                                {children}
                              </h3>
                            )
                          },
                          p: ({ children, ...props }) => (
                            <p
                              className="text-base leading-8 text-[var(--muted)]"
                              {...props}
                            >
                              {children}
                            </p>
                          ),
                          ul: ({ children, ...props }) => (
                            <ul
                              className="list-disc space-y-2 pl-5 text-base leading-8 text-[var(--muted)]"
                              {...props}
                            >
                              {children}
                            </ul>
                          ),
                          ol: ({ children, ...props }) => (
                            <ol
                              className="list-decimal space-y-2 pl-5 text-base leading-8 text-[var(--muted)]"
                              {...props}
                            >
                              {children}
                            </ol>
                          ),
                          li: ({ children, ...props }) => (
                            <li
                              className="text-base text-[var(--muted)]"
                              {...props}
                            >
                              {children}
                            </li>
                          ),
                          blockquote: ({ children, ...props }) => (
                            <blockquote
                              className="border-l-2 border-[var(--accent)]/45 pl-4 text-base leading-8 text-[var(--muted)]"
                              {...props}
                            >
                              {children}
                            </blockquote>
                          ),
                          a: ({ children, ...props }) => (
                            <a
                              className="text-[var(--accent)] underline-offset-4 hover:underline"
                              {...props}
                            >
                              {children}
                            </a>
                          ),
                          code: ({ children, ...props }) => (
                            <code
                              className="rounded bg-[var(--accent-soft)] px-1.5 py-0.5 text-sm text-[var(--accent)]"
                              {...props}
                            >
                              {children}
                            </code>
                          ),
                          pre: ({ children, ...props }) => (
                            <pre
                              className="overflow-x-auto rounded-[24px] border border-[var(--line)] bg-white/60 p-4 text-sm text-[var(--ink)] dark:bg-white/5"
                              {...props}
                            >
                              {children}
                            </pre>
                          ),
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
              <div className="glass-card rounded-[28px] p-5">
                <p className="kicker">Outline</p>
                <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                  {tocItems.length === 0 && <li>暂无目录</li>}
                  {tocItems.map((section) => (
                    <li
                      key={section.id}
                      className={
                        section.level === 3
                          ? 'pl-4 text-[var(--muted)]/80'
                          : undefined
                      }
                    >
                      <Link
                        href={`#${section.id}`}
                        className="transition hover:text-[var(--ink)]"
                      >
                        {section.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
    </main>
  )
}
