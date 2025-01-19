'use client'

import { useTranslations } from 'next-intl'
import GitHubCalendar from 'react-github-calendar'

export const GithubContributions = () => {
  const personalT = useTranslations('personal')

  return (
    <div className="w-full overflow-hidden">
      <div className="dark:hidden">
        <GitHubCalendar
          username={personalT('githubUsername')}
          colorScheme="light"
          fontSize={12}
          blockSize={12}
          blockMargin={5}
          blockRadius={4}
        />
      </div>
      <div className="hidden dark:block">
        <GitHubCalendar
          username={personalT('githubUsername')}
          colorScheme="dark"
          fontSize={12}
          blockSize={12}
          blockMargin={5}
          blockRadius={4}
        />
      </div>
    </div>
  )
}

export default GithubContributions
