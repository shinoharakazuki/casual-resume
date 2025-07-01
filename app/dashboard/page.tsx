import { Card } from '@/components/ui'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">ダッシュボード</h1>
        <p className="text-gray-600">履歴書作成の進捗を確認しましょう</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 card-hover">
          <h3 className="text-lg font-semibold mb-2">プロフィール</h3>
          <p className="text-gray-600 mb-4">基本情報の入力状況</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
          </div>
          <Link href="/profile" className="text-blue-600 hover:underline text-sm">
            プロフィールを見る →
          </Link>
        </Card>

        <Card className="p-6 card-hover">
          <h3 className="text-lg font-semibold mb-2">性格診断</h3>
          <p className="text-gray-600 mb-4">あなたの性格タイプ</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
          </div>
          <Link href="/personality" className="text-blue-600 hover:underline text-sm">
            診断結果を見る →
          </Link>
        </Card>

        <Card className="p-6 card-hover">
          <h3 className="text-lg font-semibold mb-2">履歴書</h3>
          <p className="text-gray-600 mb-4">履歴書の作成状況</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-purple-600 h-2 rounded-full" style={{width: '50%'}}></div>
          </div>
          <Link href="/resume" className="text-blue-600 hover:underline text-sm">
            履歴書を作成 →
          </Link>
        </Card>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">最近の活動</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <div>
              <p className="font-medium">プロフィールを更新しました</p>
              <p className="text-sm text-gray-600">2時間前</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <div>
              <p className="font-medium">性格診断を完了しました</p>
              <p className="text-sm text-gray-600">1日前</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            <div>
              <p className="font-medium">履歴書テンプレートを選択しました</p>
              <p className="text-sm text-gray-600">3日前</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}