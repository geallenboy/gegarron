import { type Metadata } from 'next'
import Image from 'next/image'
import { aboutParagraphs } from '@/config/infoConfig'
import { Container } from '@/components/layout/Container'
import portraitImage from '@/images/portrait.jpg'
import SocialLinks from '@/components/about/SocialLinks'
import { useLocale, useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: '关于',
  description: '我是garron,AI 全栈工程师,AI Agrent开发',
}

const AboutPage = () => {
  const about = useTranslations('about')
  const locale = useLocale()

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl  ">
            {about('aboutMeHeadline')}
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            {aboutParagraphs[locale].map((item: any, index: number) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="lg:pl-20">
          <SocialLinks />
        </div>
      </div>
    </Container>
  )
}

export default AboutPage
