import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { changelogIntro, changelogHeadLine } from '@/config/infoConfig'

import ChangelogBlock from '@/components/changelog/Changelog'

export const metadata = {
  title: '网站日志',
  description: changelogHeadLine,
}

export default function ChangelogPage() {
  return (
    <SimpleLayout title={changelogHeadLine} intro={changelogIntro}>
      <div className="space-y-20">
        <ChangelogBlock />
      </div>
    </SimpleLayout>
  )
}
