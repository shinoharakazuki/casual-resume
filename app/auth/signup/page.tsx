import { SignupForm } from '@/components/auth'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">新規登録</h1>
        <p className="text-gray-600">無料でアカウントを作成しましょう</p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm">
        <SignupForm />

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            すでにアカウントをお持ちの方は{' '}
            <Link href="/auth/login" className="text-blue-600 hover:underline">
              ログイン
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}