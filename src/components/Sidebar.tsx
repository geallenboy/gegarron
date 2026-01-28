'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { socialLinks, name, email } from '@/config/infoConfig'
import { defaultNavItems } from '@/config/nav'
import {
  Github,
  Twitter,
  MessageCircle,
  Users,
  ExternalLink,
  Mail,
  Moon,
  Sun
} from 'lucide-react'

type NavItem = {
  label: string
  href: string
}


const getSocialIcon = (icon: string) => {
  switch (icon) {
    case 'github':
      return Github
    case 'x':
      return Twitter
    case 'wechat':
      return MessageCircle
    case 'wechat-official':
      return Users
    default:
      return ExternalLink
  }
}

const defaultDescription =
  '关注普通人如何借助 AI 构建长期稳定、可复利的决策与行动系统。'

export function Sidebar() {
  const { resolvedTheme, setTheme } = useTheme()
  const tags= ['AI 自动化', '独立开发', '产品设计']
  const navItems = defaultNavItems
  return (
    <aside className="space-y-6 lg:sticky lg:top-8">
      <section className="rounded-2xl border border-black/5 bg-white/80 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/5 dark:bg-[#141518] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
            <Image
              src="/2.jpg"
              alt={`${name} portrait`}
              fill
              sizes="64px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">{name}</p>
            <p className="text-sm text-slate-600 dark:text-white/60">独立开发者 · AI 工程师</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-white/70">
          {defaultDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2">
          <Link
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-black"
          >
            <Mail size={14} />
            联系我
          </Link>
          {/* <span className="text-xs text-slate-400 dark:text-white/40">开放合作</span> */}
        </div>
        <div className="mt-4 flex items-center gap-2">
          {socialLinks.map((link) => {
            const Icon = getSocialIcon(link.icon)
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-black/5 text-slate-600 transition hover:-translate-y-0.5 hover:border-black/20 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:border-white/20 dark:hover:text-white"
                aria-label={link.ariaLabel || link.name}
              >
                <Icon size={16} />
              </Link>
            )
          })}
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-black/5 text-slate-600 transition hover:-translate-y-0.5 hover:border-black/20 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:border-white/20 dark:hover:text-white"
            aria-label="Toggle theme"
          >
            {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </section>

      <nav className="rounded-2xl border border-black/5 bg-white/80 p-4 backdrop-blur dark:border-white/5 dark:bg-[#141518]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-white/40">
          导航
        </p>
        <ul className="mt-3 space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-black/5 hover:text-slate-900 dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* <section className="rounded-2xl border border-black/5 bg-white/80 p-4 backdrop-blur dark:border-white/5 dark:bg-[#141518]">
        <p className="text-xs text-slate-400 dark:text-white/40">Built with</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-semibold">ShipAny</p>
          <span className="rounded-full border border-black/10 bg-black/5 px-2 py-1 text-[11px] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-white/60">
            Labs
          </span>
        </div>
      </section> */}
    </aside>
  )
}
