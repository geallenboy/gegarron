import { Container } from '@/components/layout/Container'
import Feed from '@/components/home/Feed'
import Career from '@/components/home/Career'
import Education from '@/components/home/Education'
import SocialLinks from '@/components/home/SocialLinks'
import {
  githubProjectsList,
  ProjectItemType,
  projectsList,
} from '@/config/infoConfig'
import { ProjectCard } from '@/components/project/ProjectCard'
import { GithubProjectCard } from '@/components/project/GithubProjectCard'
import GithubContributions from '@/components/home/GithubCalendar'
import { CustomIcon } from '@/components/shared/CustomIcon'
import IconCloud from '@/components/layout/IconCloud'
import { useLocale, useTranslations } from 'next-intl'
import BlogList from '@/components/home/BlogList'

export const HomePage = () => {
  const locale = useLocale()
  const personal = useTranslations('personal')
  const project = useTranslations('project')
  const blog = useTranslations('blog')

  return (
    <>
      <Container className="mt-9">
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
          <div className="md:mt-20">
            <h2 className="text-2xl font-semibold tracking-tight opacity-80 sm:text-3xl">
              {personal('headline')}
            </h2>
            <p className="mt-6 text-base text-muted-foreground">
              {personal('introduction')}
            </p>
            <SocialLinks className="md:mt-24" />
          </div>
          <div className="relative ml-auto flex size-full w-full items-center justify-center overflow-hidden md:mr-8">
            <IconCloud />
          </div>
        </div>
        <div className="mt-6 border-t border-zinc-100 py-8 dark:border-zinc-700/40">
          <GithubContributions />
        </div>
        <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
          <h2 className="text-3xl font-semibold tracking-tight opacity-80 md:text-5xl">
            {project('projectHeadLine')}
          </h2>
          <p className="mb-8 max-w-2xl text-base text-muted-foreground">
            {project('projectIntro')}
          </p>
          <div
            // role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {projectsList[locale]?.map(
              (item: ProjectItemType, index: number) => (
                <ProjectCard key={index + 71} project={item} titleAs="h3" />
              ),
            )}
          </div>
        </div>
        <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
          <h2 className="mb-4 flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight opacity-80 md:text-3xl">
            <CustomIcon name="github" size={28} />
            {personal('sourceCode')}
          </h2>
          <div
            // role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {githubProjectsList[locale]?.map(
              (item: ProjectItemType, index: number) => (
                <GithubProjectCard
                  key={index + 12}
                  project={item}
                  titleAs="h3"
                />
              ),
            )}
          </div>
        </div>
        <div className="mx-auto my-8 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
          <h2 className="text-3xl font-semibold tracking-tight opacity-80 md:text-5xl">
            {blog('blogHeadLine')}
          </h2>
          <p className="mb-8 max-w-2xl text-base text-muted-foreground">
            {blog('blogIntro')}
          </p>
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <BlogList />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Career />
            <Education />
            <Feed />
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomePage
