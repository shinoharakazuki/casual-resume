import { LoginForm } from '@/components/auth'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">ログイン</h1>
        <p className="text-gray-600">アカウントにログインしてください</p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm">
        <LoginForm />

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            アカウントをお持ちでない方は{' '}
            <Link href="/auth/signup" className="text-blue-600 hover:underline">
              新規登録
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}