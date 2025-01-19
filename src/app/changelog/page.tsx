import { SimpleLayout } from '@/components/layout/SimpleLayout'

import ChangelogBlock from '@/components/changelog/Changelog'
import { useTranslations } from 'next-intl'

export const metadata = {
  title: '网站日志',
  description: '网站日志',
}

const ChangelogPage = () => {
  const changelogT = useTranslations('changelog')

  return (
    <SimpleLayout
      title={changelogT('changelogHeadLine')}
      intro={changelogT('changelogIntro')}
    >
      <div className="space-y-20">
        <ChangelogBlock />
      </div>
    </SimpleLayout>
  )
}

export default ChangelogPage
