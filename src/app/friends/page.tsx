import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/layout/SimpleLayout'

import { friends } from '@/config/infoConfig'

import { FriendCard } from '@/components/friends/FriendCard'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'garron的朋友',
  description: 'garron 朋友',
}

const FriendsPage = () => {
  const friendsT = useTranslations('friends')
  return (
    <SimpleLayout
      title={friendsT('friendsHeadLine')}
      intro={friendsT('friendsIntro')}
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-12 pb-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {friends.map((friend) => (
          <FriendCard key={friend.name} friend={friend} />
        ))}
      </ul>
    </SimpleLayout>
  )
}
export default FriendsPage
