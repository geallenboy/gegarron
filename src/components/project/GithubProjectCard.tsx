'use client'

import { ArrowRight, GitFork, Star, BookOpen } from '@phosphor-icons/react'
import { ProjectItemType } from '@/config/infoConfig'
import Link from 'next/link'

export const GithubProjectCard = ({
  project,
  titleAs,
}: {
  project: ProjectItemType
  titleAs?: keyof JSX.IntrinsicElements
}) => {
  let Component = titleAs ?? 'h2'
  return (
    <div className="group relative flex h-full flex-col items-start">
      <div className="relative flex h-full w-full flex-col justify-between rounded-2xl  border border-muted-foreground/20 px-6 py-5 shadow-sm transition-all group-hover:scale-[1.03] group-hover:bg-muted/5 group-hover:shadow-md">
        <div className="">
          <div className="flex flex-col items-start justify-center gap-2 sm:flex-row sm:items-center sm:justify-start">
            <BookOpen size={20} weight="duotone" />
            <Component className="text-sm font-semibold tracking-tight">
              {project.name}
            </Component>
          </div>
          <p className="relative z-10 mt-2 text-sm text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-4">
          <div className="flex flex-row items-center gap-2 text-xs font-semibold opacity-80">
            {/* {project.gitStars && (
              <>
                <Star size={16} weight="duotone" />
                {project.gitStars}
              </>
            )}
            {project.gitForks && (
              <>
                <GitFork size={16} weight="duotone" />
                {project.gitForks}
              </>
            )} */}
          </div>
        </div>
        <Link
          href={project.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute h-full w-full"
        >
          <ArrowRight
            size={32}
            weight="duotone"
            className="absolute bottom-10 right-10 h-4 w-4 group-hover:text-primary"
          />
        </Link>
      </div>
    </div>
  )
}
