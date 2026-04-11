import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import {
  name,
  profileHeadline,
  profileSummary,
  projectsList,
  socialLinks,
  type ProjectItemType,
} from '@/config/infoConfig'
import { ArrowRight, Github, Twitter, MessageCircle, Users } from 'lucide-react'

const socialIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: Github,
  x: Twitter,
  wechat: MessageCircle,
  'wechat-official': Users,
}

export default function HomePage() {
  const recentArticles = getAllPosts().slice(0, 5)
  const projects = (projectsList as ProjectItemType[]).slice(0, 4)

  return (
    <main className="mx-auto w-full max-w-[960px] px-4 py-12 sm:px-6 lg:py-16">
      {/* ── Hero: personal intro ── */}
      <section className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left sm:gap-8">
        <Image
          src="/2.jpg"
          alt={name}
          width={96}
          height={96}
          className="rounded-full object-cover"
          priority
        />
        <div>
          <h1 className="text-2xl font-bold text-(--ink)">{name}</h1>
          <p className="mt-1 text-base text-(--muted)">{profileHeadline}</p>
          <div className="mt-3 flex items-center gap-3 sm:justify-start justify-center">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon]
              if (!Icon) return null
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.ariaLabel ?? link.name}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-(--muted) transition hover:text-(--accent)"
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Recent articles ── */}
      <section className="mt-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold text-(--ink)">最近文章</h2>
          <Link
            href="/posts"
            className="flex items-center gap-1 text-sm text-(--accent) transition hover:gap-2"
          >
            查看全部 <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-6 divide-y divide-(--line)">
          {recentArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/posts/${article.slug}`}
              className="group block py-5 first:pt-0 last:pb-0 transition hover:opacity-80"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base font-medium text-(--ink) group-hover:text-(--accent) transition">
                  {article.title}
                </h3>
                <time className="shrink-0 text-sm text-(--muted)">{article.date}</time>
              </div>
              {article.excerpt && (
                <p className="mt-1.5 line-clamp-2 text-sm text-(--muted)">
                  {article.excerpt}
                </p>
              )}
            </Link>
          ))}
          {recentArticles.length === 0 && (
            <p className="py-5 text-sm text-(--muted)">
              暂无文章，接下来这里会逐步放上我的思考与实验记录。
            </p>
          )}
        </div>
      </section>

      {/* ── Products / projects ── */}
      <section className="mt-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold text-(--ink)">产品与项目</h2>
          <Link
            href="/products"
            className="flex items-center gap-1 text-sm text-(--accent) transition hover:gap-2"
          >
            查看全部 <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link?.href ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-(--line) bg-(--card-bg) p-5 transition hover:border-(--accent)/30"
            >
              <h3 className="text-base font-medium text-(--ink) group-hover:text-(--accent) transition">
                {project.name}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-(--muted)">
                {project.description}
              </p>
              <span className="mt-3 inline-block text-xs text-(--accent)">
                {project.link?.label}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── About me ── */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold text-(--ink)">关于我</h2>
        <p className="mt-3 text-base leading-relaxed text-(--muted)">
          {profileSummary}
        </p>
        <Link
          href="/about"
          className="mt-4 inline-flex items-center gap-1 text-sm text-(--accent) transition hover:gap-2"
        >
          了解更多 <ArrowRight size={14} />
        </Link>
      </section>
    </main>
  )
}
