'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Sidebar } from '@/components/Sidebar'
import {
  projectsList,
  type ProjectItemType
} from '@/config/infoConfig'
import { Breadcrumb } from '@/components/Breadcrumb'
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Box
} from 'lucide-react'

const productFilters = ['全部', 'AI 工具', '自动化', '网站', 'SaaS', '生成式']

const highlights = [
  {
    title: '专注 AI 自动化',
    description: '将复杂流程封装成可复用的自动化链路',
    icon: Sparkles
  },
  {
    title: '多场景交付',
    description: '从 SaaS 到工具站，覆盖产品落地全链路',
    icon: Layers
  },
  {
    title: '稳定可扩展',
    description: '构建可迭代架构，让产品持续增长',
    icon: Box
  }
]

export default function ProductsPage() {
  const projects = projectsList as ProjectItemType[]

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f4f0] text-slate-900 dark:bg-[#0b0c0f] dark:text-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-44 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-200/60 via-orange-200/30 to-transparent blur-3xl dark:from-amber-500/20 dark:via-orange-400/10" />
        <div className="pointer-events-none absolute right-[-160px] top-32 h-[320px] w-[320px] rounded-full bg-gradient-to-br from-emerald-200/50 to-cyan-200/30 blur-3xl dark:from-emerald-500/15 dark:to-cyan-400/10" />
        <div className="pointer-events-none absolute left-[-200px] bottom-[-120px] h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-purple-200/50 to-indigo-200/30 blur-3xl dark:from-purple-500/15 dark:to-indigo-500/10" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,880px)] lg:justify-center">
          <Sidebar  />

          <div className="space-y-8">
            <section className="rounded-3xl border border-black/5 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/5 dark:bg-[#141518]/80 dark:shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <Breadcrumb items={[{ label: '首页', href: '/' }, { label: '产品', href: '/products' }]} />
                 
                  <h1 className="mt-2 text-2xl font-semibold tracking-tight">我的产品</h1>
                  <p className="mt-2 text-sm text-slate-600 dark:text-white/60">
                    这里展示我近期打造的 AI 产品与工具合集，覆盖自动化、SaaS 与内容增长。
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {productFilters.map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-slate-600 transition hover:border-amber-400/40 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white"
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              
            </section>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project:any) => (
                <article
                  key={project.name}
                  className="group rounded-2xl border border-black/5 bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-black/10 dark:border-white/5 dark:bg-[#141518]/90 dark:shadow-[0_14px_40px_rgba(0,0,0,0.35)] dark:hover:border-white/15"
                >
                  <div className="relative h-40 w-full overflow-hidden rounded-xl border border-black/10 bg-slate-100 dark:border-white/10 dark:bg-[#0f1012]">
                    {project.logo ? (
                      <Image
                        src={project.logo}
                        alt={project.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-slate-400 dark:text-white/40">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold">{project.name}</h3>
                      <ArrowUpRight
                        size={14}
                        className="text-slate-400 transition group-hover:text-slate-900 dark:text-white/40 dark:group-hover:text-white"
                      />
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
                  <div className="mt-4 flex items-center gap-2">
                    <Link
                      href={project.link?.href || '#'}
                      className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-3 py-1 text-xs font-medium text-black transition hover:-translate-y-0.5"
                    >
                      Website
                      <ArrowUpRight size={12} />
                    </Link>
                    <span className="text-xs text-slate-400 dark:text-white/40">{project.link?.label}</span>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
