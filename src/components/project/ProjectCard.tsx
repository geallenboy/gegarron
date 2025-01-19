'use client'

import { HashIcon } from 'lucide-react'
import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react'
import { ProjectItemType } from '@/config/infoConfig'
import Link from 'next/link'

export const ProjectCard = ({
  project,
  titleAs,
}: {
  project: ProjectItemType
  titleAs?: keyof JSX.IntrinsicElements
}) => {
  let Component = titleAs ?? 'h2'
  return (
    <div className="group relative flex h-full flex-col items-start">
      <div className="relative flex h-full w-full flex-col justify-between rounded-2xl border border-muted-foreground/20 p-4 shadow-sm transition-all group-hover:scale-[1.03] group-hover:bg-muted/5 group-hover:shadow-md">
        <div className="">
          <div className="flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-center sm:justify-start">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
              <Image
                src={project.logo ?? project.link.href}
                alt={`${project.name} favicon`}
                width={36}
                height={36}
                sizes="36px"
                className="rounded-full"
              />
            </div>
            <Component className="text-base font-semibold">
              {project.name}
            </Component>
          </div>
          <p className="relative z-10 ml-2 mt-2 text-sm text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 ml-1 mt-auto pt-4">
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-2">
              {project.tags.map((tag, index) => (
                <div
                  key={index + 1}
                  className="group flex items-center justify-center space-x-0.5"
                >
                  <HashIcon className="icon-scale h-3 w-3 text-muted-foreground" />
                  <span className="text-xs tracking-tighter text-muted-foreground">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <Link
          href={project.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute h-full w-full"
        >
          <ArrowUpRight
            size={32}
            weight="duotone"
            className="absolute right-8 top-2 h-4 w-4 group-hover:text-primary"
          />
        </Link>
      </div>
    </div>
  )
}
