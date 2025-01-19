'use client'

import { socialLinks } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { CustomIcon } from '@/components/shared/CustomIcon'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

export const SocialLinks = ({ className }: { className?: string }) => {
  const personalT = useTranslations('personal')
  // console.log(t('title'))
  return (
    <div className={cn('mt-6 flex items-center', className)}>
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={`${link.href}?utm_source=${utm_source}`}
          target="_blank"
          rel="noreferrer"
          aria-label={link.ariaLabel ?? `Follow on ${link.name}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
        >
          <CustomIcon name={link.icon} />
          <span className="sr-only">{link.name}</span>
        </Link>
      ))}
      <Link
        href={`mailto:${personalT('email')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Email"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
      >
        <CustomIcon name="email" />
        <span className="sr-only">email</span>
      </Link>
    </div>
  )
}

export default SocialLinks
