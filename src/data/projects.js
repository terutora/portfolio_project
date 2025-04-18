export const projects = [
  {
    id: 1,
    title: "IRfinder",
    description: "財務諸表チェックシステム",
    longDescription:
      "このプロジェクトでは、株式の財務諸表を自動的にチェックするシステムを開発しました。Pythonで財務諸表を自動的に入手します。フロントエンドはVue.jsで開発されています。バックエンドはExpress.jsで構築され、MySQLデータベースに財務データを保存しています。このシステムにより、株式投資家の財務分析プロセスが効率化され、投資判断の精度が向上しました。",
    imageUrl: "/images/IRfinder.png",
    category: "株式サイト",
    technologies: ["Python", "JavaScript", "Express.js", "Vue.js", "MySQL", "Heroku"],
    features: [],
    githubUrl: "https://github.com/terutora/jquants_checker",
    liveUrl: "https://irfinder-39e9cd03a7da.herokuapp.com/",
    startDate: "2024-02-15",
    endDate: "2024-06-12",
    teamSize: 1,
    role: "すべての開発",
  },
  {
    id: 2,
    title: "x_word_splitter",
    description: "文章140字分割システム",
    longDescription: "このプロジェクトでは、長い文章を140字に分割するシステムを開発しました。このシステムにより、Twitterなどの140字制限のあるサービスでの文章投稿が容易になりました。",
    imageUrl: "/images/x_split.png",
    category: "ツール",
    technologies: ["JavaScript", "HTML", "CSS"],
    features: ["長い文章を140字に分割", "Twitterなどの140字制限のあるサービスでの文章投稿が容易になりました"],
    githubUrl: "https://github.com/terutora/x_word_split",
    liveUrl: "https://terutora.github.io/x_word_split/",
    teamSize: 1,
    role: "すべての開発",
  },
  {
    id: 3,
    title: "AniHub - アニメファンのための総合プラットフォーム",
    description: "Next.jsとTailwind CSSを活用した、アニメの最新情報、放送スケジュール、詳細情報を一か所で提供するウェブアプリケーション。アニメファンのためのワンストップ情報源です。",
    longDescription:
      "AniHubは、アニメファンが求める全ての情報を一か所で見つけられるように設計された総合プラットフォームです。Annict APIとしょぼいカレンダーAPIを連携させ、現在放送中のアニメやシーズン情報、キャスト情報などを網羅的に提供。Next.js 14のApp Routerアーキテクチャを採用し、高速なページ遷移とSEO最適化を実現しています。Tailwind CSSによるレスポンシブデザインにより、あらゆるデバイスで快適に閲覧可能。また、検索機能を実装し、ユーザーが膨大なアニメカタログから簡単に目的の作品を見つけられるようにしています。将来的には、ユーザープロフィール、視聴管理機能、レビュー投稿機能などのコミュニティ機能も実装予定です。",
    imageUrl: "/images/anihub-showcase.png",
    category: "ウェブアプリケーション",
    technologies: ["Next.js", "React", "Tailwind CSS", "API統合", "SWR", "MongoDB"],
    features: ["アニメの最新情報とリリース", "リアルタイム放送スケジュール", "詳細な作品情報とキャスト情報", "高度な検索機能", "レスポンシブデザイン", "将来実装予定：ユーザー認証とプロフィール管理"],
    githubUrl: "https://github.com/terutora/anihub",
    liveUrl: "https://anihub-phi.vercel.app/",
    teamSize: 1,
    role: "フルスタック開発者",
  },
  {
    id: 4,
    title: "リアルタイムトレンドビューアー",
    description: "最新のニュースとトレンドトピックを一度に確認できるレスポンシブなウェブアプリケーション。さまざまなカテゴリのニュースとソーシャルメディアのトレンドを集約して表示します。",
    longDescription:
      "このプラットフォームは、ユーザーが複数のニュースソースとトレンドを単一のインターフェースで閲覧できるよう設計されています。Next.jsとTailwind CSSを使用したモダンなUI設計により、デスクトップからモバイルまであらゆるデバイスで最適な表示が可能です。GNews APIを活用して様々なカテゴリ（総合、ビジネス、テクノロジー、エンタメなど）のニュースを取得し、同時にYahoo!リアルタイム検索からトレンドトピックをスクレイピングしています。バックエンドAPIルートでCheerioを活用し、堅牢なエラーハンドリング機能を実装することで、外部APIやスクレイピングの信頼性を確保。APIの使用制限やアクセス不能時には自動的にモックデータにフォールバックし、常に情報を表示できる仕組みとなっています。",
    imageUrl: "/images/trend-viewer.png",
    category: "ウェブアプリケーション",
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Cheerio", "REST API"],
    features: ["カテゴリ別ニュース表示機能", "リアルタイムトレンドトピック表示", "レスポンシブデザイン", "API制限時の優雅なフォールバック"],
    githubUrl: "https://github.com/terutora/news-trend",
    liveUrl: "https://news-trend-xi.vercel.app/",
    teamSize: 1,
    role: "フルスタック開発者",
  },
  {
    id: 5,
    title: "FullStudy - 学習管理プラットフォーム",
    description: "学習時間の追跡、タスク管理、メモ作成、進捗分析を一元化した総合的な学習管理アプリケーション。ポモドーロテクニックを活用した効率的な学習をサポートします。",
    longDescription:
      "FullStudyは、学生や自己学習者向けの包括的な学習管理プラットフォームです。Next.js 15とTailwind CSSを採用したモダンなUIにより、直感的な操作性と美しいデザインを実現しています。主要機能として、ポモドーロテクニックに基づくタイマー機能、カテゴリ分けと優先度設定が可能なタスク管理、マークダウン対応のメモ機能、そして詳細な学習データ分析機能を提供。Clerkによる安全な認証システムを実装し、Supabaseをデータベースとして活用することで、オフライン時にはローカルストレージにフォールバックする堅牢な設計となっています。rechartライブラリを使用した視覚的に分かりやすいグラフ表示により、日次・週次・月次の学習進捗を確認できるほか、学習ストリークやポモドーロ完了数などの統計も一目で把握できます。",
    imageUrl: "/images/fullstudy.png",
    category: "Web アプリケーション",
    technologies: ["Next.js 15", "React 19", "JavaScript", "Tailwind CSS 4", "Clerk", "Supabase", "recharts"],
    features: ["ポモドーロタイマーによる学習時間管理", "優先度とカテゴリ分けに対応したタスク管理", "マークダウン対応のメモ機能", "詳細な学習データ分析とグラフ表示", "オフライン対応（ローカルストレージフォールバック）", "レスポンシブデザイン"],
    githubUrl: "https://full-study.vercel.app/",
    liveUrl: "https://full-study.vercel.app/",
    teamSize: 1,
    role: "フルスタック開発者",
  },
];
