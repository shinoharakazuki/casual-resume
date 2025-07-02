"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Input, Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { useProfile } from '@/hooks/use-profile'

export function ProfileForm() {
  const router = useRouter()
  const { profile, createProfile, updateProfile } = useProfile()

  const [formData, setFormData] = useState({
    full_name: profile?.full_name || '',
    full_name_kana: profile?.full_name_kana || '',
    birth_date: profile?.birth_date || '',
    gender: profile?.gender || 'prefer_not_to_say',
    phone: profile?.phone || '',
    address: profile?.address || '',
    postal_code: profile?.postal_code || '',
    self_introduction: profile?.self_introduction || '',
    motivation: profile?.motivation || '',
    skills: profile?.skills?.join(', ') || '',
    hobbies: profile?.hobbies?.join(', ') || ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const profileData = {
        ...formData,
        skills: formData.skills.split(',').map(s => s.trim()).filter(s => s),
        hobbies: formData.hobbies.split(',').map(s => s.trim()).filter(s => s),
        education: profile?.education || [],
        work_experience: profile?.work_experience || [],
        certifications: profile?.certifications || [],
        special_skills: profile?.special_skills || []
      }

      if (profile) {
        await updateProfile(profileData)
      } else {
        await createProfile(profileData)
      }

      router.push('/profile')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'プロフィールの保存に失敗しました')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 基本情報 */}
      <Card>
        <CardHeader>
          <CardTitle>基本情報</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
                氏名 *
              </label>
              <Input
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="山田 太郎"
                required
              />
            </div>
            <div>
              <label htmlFor="full_name_kana" className="block text-sm font-medium text-gray-700 mb-1">
                フリガナ *
              </label>
              <Input
                id="full_name_kana"
                name="full_name_kana"
                value={formData.full_name_kana}
                onChange={handleChange}
                placeholder="ヤマダ タロウ"
                required
              />
            </div>
            <div>
              <label htmlFor="birth_date" className="block text-sm font-medium text-gray-700 mb-1">
                生年月日 *
              </label>
              <Input
                id="birth_date"
                name="birth_date"
                type="date"
                value={formData.birth_date}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                性別
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="male">男性</option>
                <option value="female">女性</option>
                <option value="other">その他</option>
                <option value="prefer_not_to_say">回答しない</option>
              </select>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                電話番号 *
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="090-1234-5678"
                required
              />
            </div>
            <div>
              <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700 mb-1">
                郵便番号 *
              </label>
              <Input
                id="postal_code"
                name="postal_code"
                value={formData.postal_code}
                onChange={handleChange}
                placeholder="123-4567"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              住所 *
            </label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="東京都渋谷区..."
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* スキル・趣味 */}
      <Card>
        <CardHeader>
          <CardTitle>スキル・趣味</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
              スキル
            </label>
            <Input
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="JavaScript, React, Python（カンマ区切り）"
            />
            <p className="text-xs text-gray-500 mt-1">カンマ区切りで入力してください</p>
          </div>
          <div>
            <label htmlFor="hobbies" className="block text-sm font-medium text-gray-700 mb-1">
              趣味
            </label>
            <Input
              id="hobbies"
              name="hobbies"
              value={formData.hobbies}
              onChange={handleChange}
              placeholder="読書, 映画鑑賞, プログラミング（カンマ区切り）"
            />
            <p className="text-xs text-gray-500 mt-1">カンマ区切りで入力してください</p>
          </div>
        </CardContent>
      </Card>

      {/* 自己PR */}
      <Card>
        <CardHeader>
          <CardTitle>自己PR</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="self_introduction" className="block text-sm font-medium text-gray-700 mb-1">
              自己紹介
            </label>
            <textarea
              id="self_introduction"
              name="self_introduction"
              value={formData.self_introduction}
              onChange={handleChange}
              rows={4}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="あなたの強みや経験について教えてください..."
            />
          </div>
          <div>
            <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
              志望動機・目標
            </label>
            <textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              rows={4}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="将来の目標や志望動機について教えてください..."
            />
          </div>
        </CardContent>
      </Card>

      {error && (
        <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
          {error}
        </div>
      )}

      <div className="flex gap-4">
        <Button type="submit" disabled={loading} className="flex-1">
          {loading ? '保存中...' : profile ? 'プロフィール更新' : 'プロフィール作成'}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          キャンセル
        </Button>
      </div>
    </form>
  )
}