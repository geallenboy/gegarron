import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/layout/SimpleLayout'

import {
  projectsList,
  githubProjectsList,
  ProjectItemType,
} from '@/config/infoConfig'
import { useLocale, useTranslations } from 'next-intl'
import { ProjectCard } from '@/components/project/ProjectCard'
import { GithubProjectCard } from '@/components/project/GithubProjectCard'
import { CustomIcon } from '@/components/shared/CustomIcon'

export const metadata: Metadata = {
  title: 'garron的项目',
  description: 'AI Image| AI Logo | AI Code | AI...',
}

export const ProjectsPage = () => {
  const projectT = useTranslations('project')
  const personalT = useTranslations('personal')
  return (
    <SimpleLayout
      title={projectT('projectHeadLine')}
      intro={projectT('projectIntro')}
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-12 pb-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projectsList[useLocale()].map(
          (project: ProjectItemType, index: number) => (
            <ProjectCard key={index + 6} project={project} />
          ),
        )}
      </ul>
      <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
        <h2 className="mb-4 flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight opacity-80 md:text-3xl">
          <CustomIcon name="github" size={28} />
          {personalT('sourceCode')}
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {githubProjectsList[useLocale()].map((project: any) => (
            <GithubProjectCard
              key={project.name}
              project={project}
              titleAs="h3"
            />
          ))}
        </ul>
      </div>
    </SimpleLayout>
  )
}

export default ProjectsPage
