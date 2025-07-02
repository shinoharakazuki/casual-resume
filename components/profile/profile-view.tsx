"use client"

import { useProfile } from '@/hooks/use-profile'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { formatDate, formatPhoneNumber } from '@/lib/utils'

export function ProfileView() {
  const { profile, loading, error } = useProfile()

  if (loading) {
    return <div className="text-center py-8">プロフィールを読み込み中...</div>
  }

  if (error) {
    return <div className="text-red-600 text-center py-8">エラー: {error}</div>
  }

  if (!profile) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 mb-4">プロフィールが見つかりません</p>
        <a href="/profile/create" className="text-blue-600 hover:underline">
          プロフィールを作成する
        </a>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* 基本情報 */}
      <Card>
        <CardHeader>
          <CardTitle>基本情報</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">氏名</label>
              <p className="text-gray-900">{profile.full_name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">フリガナ</label>
              <p className="text-gray-900">{profile.full_name_kana}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">生年月日</label>
              <p className="text-gray-900">{formatDate(profile.birth_date)}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">性別</label>
              <p className="text-gray-900">
                {profile.gender === 'male' ? '男性' : 
                 profile.gender === 'female' ? '女性' : 
                 profile.gender === 'other' ? 'その他' : '回答しない'}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">電話番号</label>
              <p className="text-gray-900">{formatPhoneNumber(profile.phone)}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">メールアドレス</label>
              <p className="text-gray-900">{profile.email}</p>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">住所</label>
            <p className="text-gray-900">〒{profile.postal_code} {profile.address}</p>
          </div>
        </CardContent>
      </Card>

      {/* スキル・趣味 */}
      <div className="grid md:grid-cols-2 gap-6">
        {profile.skills && profile.skills.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>スキル</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {profile.hobbies && profile.hobbies.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>趣味</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profile.hobbies.map((hobby, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm">
                    {hobby}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* 自己PR */}
      {profile.self_introduction && (
        <Card>
          <CardHeader>
            <CardTitle>自己PR</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 whitespace-pre-wrap">{profile.self_introduction}</p>
          </CardContent>
        </Card>
      )}

      {/* 志望動機 */}
      {profile.motivation && (
        <Card>
          <CardHeader>
            <CardTitle>志望動機・目標</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 whitespace-pre-wrap">{profile.motivation}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}