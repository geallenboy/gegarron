'use client'

import { Briefcase } from '@phosphor-icons/react'
import { CareerItemType, careerList } from '@/config/infoConfig'
import { CustomIcon } from '@/components/shared/CustomIcon'
import { useLocale, useTranslations } from 'next-intl'

const CareerItem = ({ careerItem }: { careerItem: CareerItemType }) => {
  const personal = useTranslations('personal')

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-muted bg-background shadow-md">
        <CustomIcon name={careerItem.logo} />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">{personal('company')}</dt>
        <dd className="w-full flex-none text-sm font-medium">
          {careerItem.company}
        </dd>
        <dt className="sr-only">{personal('title')}</dt>
        <dd className="text-xs text-muted-foreground">{careerItem.title}</dd>
        <dt className="sr-only">{personal('date')}</dt>
        <dd
          className="ml-auto text-xs text-muted-foreground"
          aria-label={`${careerItem.start} until ${careerItem.end}`}
        >
          {careerItem.start} - {careerItem.end}
        </dd>
      </dl>
    </li>
  )
}

export default function Career() {
  const locale = useLocale()
  return (
    <div className="rounded-2xl border border-muted p-6 shadow-sm">
      <h2 className="flex text-sm font-semibold">
        <Briefcase size={24} weight="duotone" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {careerList[locale].map((careerItem: CareerItemType, index: number) => (
          <CareerItem key={index + 12} careerItem={careerItem} />
        ))}
      </ol>
    </div>
  )
}
