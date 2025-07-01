import { ProfileForm } from '@/components/profile'

export default function CreateProfilePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">プロフィール作成</h1>
        <p className="text-gray-600">あなたの情報を入力して、魅力的なプロフィールを作成しましょう</p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm">
        <ProfileForm />
      </div>
    </div>
  )
}