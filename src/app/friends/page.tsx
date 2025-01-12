import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/layout/SimpleLayout'

import { friendsHeadLine, friendsIntro, friends } from '@/config/infoConfig'

import { FriendCard } from '@/components/friends/FriendCard'

export const metadata: Metadata = {
  title: 'garron的朋友',
  description: friendsHeadLine,
}

export default function FriendsPage() {
  return (
    <SimpleLayout title={friendsHeadLine} intro={friendsIntro}>
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
