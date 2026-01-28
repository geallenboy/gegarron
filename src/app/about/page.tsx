'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Sidebar } from '@/components/Sidebar'
import { name } from '@/config/infoConfig'
import { ArrowUpRight } from 'lucide-react'
import { Breadcrumb } from '@/components/Breadcrumb'

const aboutGallery = [
  { src: '/2.jpg', alt: '城市远眺' },
  { src: '/1.webp', alt: '工作桌面' },
  { src: '/2.webp', alt: '旅行风景' },
  { src: '/3.webp', alt: '移动办公' },
  { src: '/4.png', alt: '咖啡时刻' },
  { src: '/1.webp', alt: '灵感记录' },
  { src: '/2.webp', alt: '展示页面' },
  { src: '/2.jpg', alt: '街头剪影' }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f4f0] text-slate-900 dark:bg-[#0f1012] dark:text-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-200/60 via-orange-200/30 to-transparent blur-3xl dark:from-amber-500/10 dark:via-orange-500/5" />
        <div className="pointer-events-none absolute right-[-120px] top-32 h-[320px] w-[320px] rounded-full bg-gradient-to-br from-emerald-200/50 to-cyan-200/30 blur-3xl dark:from-emerald-400/10 dark:to-cyan-500/5" />
        <div className="pointer-events-none absolute left-[-180px] bottom-[-120px] h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-purple-200/50 to-indigo-200/30 blur-3xl dark:from-purple-400/10 dark:to-indigo-500/10" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,880px)] lg:justify-center">
          <Sidebar />

          <div className="space-y-10">
            <section className="rounded-3xl border border-black/5 bg-white/90 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/5 dark:bg-[#15161a] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <Breadcrumb items={[{ label: '首页', href: '/' }, { label: '关于', href: '/about' }]} />
                  <h1 className="mt-3 text-2xl font-semibold tracking-tight">关于我</h1>
                  <p className="mt-2 text-sm text-slate-600 dark:text-white/60">有理想的脑子万里挑一</p>
                </div>
                <button
                  type="button"
                  className="hidden items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-slate-600 transition hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:text-white sm:inline-flex"
                >
                  了解更多
                  <ArrowUpRight size={12} />
                </button>
              </div>
              <div className="mt-5 rounded-2xl border border-black/5 bg-[#f7f4ef] p-5 dark:border-white/5 dark:bg-[#111216]">
                <p className="text-sm leading-relaxed text-slate-600 dark:text-white/70">
                  关于我：我是嘉伦，一名程序员出身的 AI 实践者。
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                  我不把 AI 当成风口，也不把自己包装成“成功样本”。
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                  我更关心的是：在一个不确定性越来越高的时代，普通人如何借助 AI，
                  构建长期稳定、可复利的决策能力与个人系统。
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                  过去十多年，我经历过技术红利、行业震荡、中年焦虑，也亲身感受到：
                  技术本身不会拯救任何人，但正确地使用技术，可以放大一个人的判断力、执行力和长期选择。
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                  现在，我专注于做一件事：
                  把 AI 从“工具”和“噱头”，变成普通人真正能用、能长期依赖的理性助手——
                  用于工作效率、人生决策、长期规划与自我管理。
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                  我相信，未来最重要的资产，不在你名下，而在你身上。
                </p>
                <div className="mt-5 rounded-2xl bg-white p-4 dark:bg-white">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {aboutGallery.map((item, index) => (
                      <div key={`${item.src}-${index}`} className="relative overflow-hidden rounded-2xl">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={260}
                          height={200}
                          className="h-28 w-full object-cover sm:h-32"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
