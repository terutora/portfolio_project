# Cheese'folio - ポートフォリオサイト

## プロジェクト概要

Cheese'folioは、Next.jsを使用して構築された個人ポートフォリオサイトです。プロジェクト一覧、スキルセット、ブログ、お問い合わせフォームなどの機能を備えています。

## 主な機能

- レスポンシブデザイン
- ダークモード/ライトモード切り替え
- プロジェクト一覧表示
- スキルセットの視覚化
- ブログ投稿（Zenn、Noteの記事一覧）
- お問い合わせフォーム（メール送信機能付き）

## 使用技術

- Next.js
- React
- Tailwind CSS
- Framer Motion (アニメーション)
- Nodemailer (メール送信)

## セットアップ

1. リポジトリのクローン:
   ```
   git clone https://github.com/yourusername/cheesefolio.git
   cd cheesefolio
   ```

2. 依存関係のインストール:
   ```
   npm install
   ```

3. 環境変数の設定:
   `.env.local`ファイルをプロジェクトルートに作成し、以下の変数を設定:
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=recipient-email@example.com
   ```

4. 開発サーバーの起動:
   ```
   npm run dev
   ```

5. ブラウザで`http://localhost:3000`にアクセス

## デプロイ

このプロジェクトはVercelにデプロイすることを推奨します。

1. [Vercel](https://vercel.com/)でアカウントを作成
2. Vercelダッシュボードで「New Project」を選択
3. GitHubリポジトリをインポート
4. 環境変数を設定
5. デプロイボタンをクリック

## コンタクト

問い合わせやフィードバックは以下のメールアドレスまで:
cheese877engineer@gmail.com

## ライセンス

このプロジェクトは[MITライセンス](LICENSE)の下で公開されています。