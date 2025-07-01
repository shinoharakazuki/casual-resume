# Casual Resume

カジュアル履歴書SNSアプリケーション

## 🚀 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod
- **UI Components**: Radix UI + Lucide React
- **Linting**: ESLint + Prettier

## 📦 セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.example`を`.env.local`にコピーして、必要な環境変数を設定してください。

```bash
cp .env.example .env.local
```

### 3. Supabaseの設定

1. [Supabase](https://supabase.com)でプロジェクトを作成
2. プロジェクトのURLとAPIキーを`.env.local`に設定
3. 必要なテーブルを作成（後述のSQL参照）

### 4. 開発サーバーの起動

```bash
npm run dev
```

## 🏗️ プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # 認証関連ページ
│   ├── (dashboard)/       # ダッシュボード関連ページ
│   ├── api/               # API Routes
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # ホームページ
├── components/            # Reactコンポーネント
│   ├── ui/               # 再利用可能なUIコンポーネント
│   ├── layout/           # レイアウトコンポーネント
│   └── forms/            # フォームコンポーネント
├── hooks/                # カスタムフック
├── lib/                  # ユーティリティ関数
├── store/                # Zustand状態管理
├── types/                # TypeScript型定義
└── utils/                # ヘルパー関数
```

## 🛠️ 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm start

# リンティング
npm run lint

# 型チェック
npm run type-check

# コードフォーマット
npm run format

# フォーマットチェック
npm run format:check
```

## 📋 機能一覧

### Phase 1 (MVP)
- [ ] ユーザー認証（サインアップ/ログイン）
- [ ] プロフィール作成・編集
- [ ] 基本的な履歴書情報入力
- [ ] プロフィール表示

### Phase 2
- [ ] スキル管理
- [ ] 職歴・学歴管理
- [ ] プロフィール検索
- [ ] フォロー機能

### Phase 3
- [ ] 投稿機能
- [ ] コメント・いいね機能
- [ ] 通知機能
- [ ] メッセージ機能

## 🎨 デザインシステム

このプロジェクトでは、Tailwind CSSとRadix UIを使用したデザインシステムを採用しています。

- **カラーパレット**: CSS変数を使用したテーマシステム
- **コンポーネント**: 再利用可能なUIコンポーネント
- **レスポンシブ**: モバイルファーストデザイン

## 🔧 設定ファイル

- `next.config.js` - Next.js設定
- `tailwind.config.js` - Tailwind CSS設定
- `tsconfig.json` - TypeScript設定
- `.eslintrc.json` - ESLint設定
- `.prettierrc.json` - Prettier設定

## 📝 ライセンス

MIT License

## 🤝 コントリビューション

プルリクエストやイシューの報告を歓迎します。

## 📞 サポート

質問や問題がある場合は、GitHubのIssuesでお知らせください。
