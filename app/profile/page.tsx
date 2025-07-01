import { ProfileView } from '@/components/profile'
import { Button } from '@/components/ui'
import Link from 'next/link'

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">プロフィール</h1>
        <Link href="/profile/create">
          <Button>プロフィール編集</Button>
        </Link>
      </div>

      <ProfileView />
    </div>
  )
}