'use client'
import React, { startTransition } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { setUserLocale } from '@/lib/locale'
import { Button } from '../ui/button'

export const ChooseLocale = () => {
  const t = useTranslations('LocaleSwitcher')

  const locale = useLocale()

  const onChange = () => {
    const newLocale = locale === 'zh' ? 'en' : 'zh'

    startTransition(() => {
      setUserLocale(newLocale)
    })
  }

  return (
    <Button variant="ghost" size="icon" onClick={onChange} className="relative">
      {locale === 'zh' ? '英' : '中'}
    </Button>
  )
}

export default ChooseLocale
