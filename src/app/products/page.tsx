import Image from 'next/image'
import { projectsList, type ProjectItemType } from '@/config/infoConfig'
import { ArrowUpRight } from 'lucide-react'

export default function ProductsPage() {
  const projects = projectsList as ProjectItemType[]

  return (
    <main className="mx-auto w-full max-w-[960px] px-4 py-12 sm:px-6 lg:py-16">
      {/* ── Page header ── */}
      <section>
        <h1 className="text-2xl font-bold text-(--ink)">产品与项目</h1>
        <p className="mt-2 text-base leading-relaxed text-(--muted)">
          这里汇总我近期在做的 AI 工具、自动化平台和独立产品实验。
        </p>
      </section>

      {/* ── Product grid ── */}
      <section className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link?.href ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-(--line) bg-(--card-bg) p-5 transition hover:border-(--accent)/30"
          >
            {/* Screenshot / logo */}
            {project.logo && (
              <div className="relative h-40 w-full overflow-hidden rounded-lg border border-(--line)">
                <Image
                  src={project.logo}
                  alt={project.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            )}

            {/* Info */}
            <div className={project.logo ? 'mt-4' : ''}>
              <div className="flex items-center justify-between">
                <h2 className="text-base font-medium text-(--ink) group-hover:text-(--accent) transition">
                  {project.name}
                </h2>
                <ArrowUpRight
                  size={16}
                  className="text-(--muted) transition group-hover:text-(--accent)"
                />
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-(--muted)">
                {project.description}
              </p>
            </div>

            {/* Tech stack or category/tags */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {(project.techStack && project.techStack.length > 0
                ? project.techStack
                : (project.category ?? project.tags ?? [])
              )
                .slice(0, 4)
                .map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-(--line) bg-(--card-bg-alt) px-2.5 py-0.5 text-xs text-(--muted)"
                  >
                    {tag}
                  </span>
                ))}
            </div>

            {/* Visit label */}
            <span className="mt-3 inline-block text-xs text-(--accent)">
              {project.link?.label}
            </span>
          </a>
        ))}
      </section>
    </main>
  )
}
