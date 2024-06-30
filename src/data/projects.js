export const projects = [
    {
      id: 1,
      title: "IRfinder",
      description: "財務諸表チェックシステム",
      longDescription: "このプロジェクトでは、株式の財務諸表を自動的にチェックするシステムを開発しました。Pythonで財務諸表を自動的に入手します。フロントエンドはVue.jsで開発されています。バックエンドはExpress.jsで構築され、MySQLデータベースに財務データを保存しています。このシステムにより、株式投資家の財務分析プロセスが効率化され、投資判断の精度が向上しました。",
      imageUrl: "/images/ai-medical-diagnosis.jpg",
      category: "株式サイト",
      technologies: ["Python", "JavaScript", "Express.js", "Vue.js", "MySQL", "Heroku"],
      features: [
  
      ],
      githubUrl: "https://github.com/terutora/jquants_checker",
      liveUrl: "https://irfinder-39e9cd03a7da.herokuapp.com/",
      startDate: "2024-02-15",
      endDate: "2024-06-12",
      teamSize: 1,
      role: "すべての開発"
    },
  /*
    {
      id: 5,
      title: "AI駆動型医療診断支援システム",
      description: "機械学習とコンピュータビジョンを活用して、X線画像から肺疾患を自動的に検出・分類するシステムを開発しました。医療従事者の診断プロセスを支援し、早期発見率の向上に貢献しています。",
      longDescription: "このプロジェクトでは、深層学習モデル（CNN）を使用して、胸部X線画像から肺炎、結核、COVID-19などの疾患を高精度で検出します。システムはPythonで実装され、TensorFlowとKerasを使用してモデルを構築しました。フロントエンドはReactで開発し、医師が使いやすいインターフェースを提供しています。バックエンドはDjango RESTフレームワークで構築され、AWSでホストされています。このシステムにより、診断の正確性が15%向上し、診断時間が平均30%短縮されました。",
      imageUrl: "/images/ai-medical-diagnosis.jpg",
      category: "医療テック",
      technologies: ["Python", "TensorFlow", "React", "Django", "AWS"],
      features: [
        "高精度な疾患検出アルゴリズム",
        "直感的なユーザーインターフェース",
        "リアルタイムな結果表示",
        "患者データの安全な管理",
        "医療記録との統合"
      ],
      githubUrl: "https://github.com/yourusername/ai-medical-diagnosis",
      liveUrl: "https://ai-medical-diagnosis-demo.com",
      startDate: "2023-01-15",
      endDate: "2023-08-30",
      teamSize: 5,
      role: "リードデベロッパー & 機械学習エンジニア"
    },
    {
      id: 4,
      title: "ブロックチェーンベースの供給chain管理システム",
      description: "イーサリアムブロックチェーンを活用して、製品の生産から消費者までの全過程を追跡可能にするシステムを開発。透明性の向上と偽造品の削減に貢献しています。",
      longDescription: "この革新的なシステムは、製品の原材料調達から製造、流通、小売りまでの全過程をブロックチェーン上に記録します。Solidityで書かれたスマートコントラクトにより、各段階でのデータの信頼性を保証。Web3.jsを使用してフロントエンドとブロックチェーンを連携させ、ユーザーは簡単に製品の履歴を確認できます。システムはIPFSを利用してオフチェーンデータを保存し、スケーラビリティを確保。導入企業では、偽造品による損失が60%減少し、消費者の信頼度が35%向上しました。",
      imageUrl: "/images/blockchain-supply-chain.jpg",
      category: "ブロックチェーン",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js", "IPFS"],
      features: [
        "製品のリアルタイム追跡",
        "スマートコントラクトによる自動実行プロセス",
        "偽造防止のための暗号化製品ID",
        "消費者向け製品認証アプリ",
        "サプライヤー評価システム"
      ],
      githubUrl: "https://github.com/yourusername/blockchain-supply-chain",
      liveUrl: "https://blockchain-supply-chain-demo.com",
      startDate: "2022-09-01",
      endDate: "2023-05-30",
      teamSize: 7,
      role: "ブロックチェーン開発リード & フルスタック開発者"
    },
    {
      id: 3,
      title: "ARを活用した教育支援プラットフォーム",
      description: "拡張現実（AR）技術を使用して、学習体験を革新的に向上させる教育プラットフォームを開発。抽象的な概念を視覚化し、インタラクティブな学習を促進します。",
      longDescription: "このプラットフォームは、スマートフォンやタブレットのカメラを通じて、教科書や学習材料に3Dモデルやアニメーションを重ねて表示します。Unity with ARCore/ARKitを使用してARエクスペリエンスを構築し、C#でゲーミフィケーション要素を実装しました。バックエンドはASP.NET Coreで開発され、Azure Cognitive ServicesのCustom Vision APIを統合して、画像認識機能を強化しています。導入した学校では、生徒の理解度が平均25%向上し、授業への参加意欲が40%増加しました。",
      imageUrl: "/images/ar-education-platform.jpg",
      category: "教育テック",
      technologies: ["Unity", "ARCore", "ARKit", "C#", "ASP.NET Core", "Azure"],
      features: [
        "リアルタイムAR表示機能",
        "インタラクティブな3Dモデル",
        "課題進捗追跡システム",
        "教師用コンテンツ管理ダッシュボード",
        "学習分析レポート生成"
      ],
      githubUrl: "https://github.com/yourusername/ar-education-platform",
      liveUrl: "https://ar-education-platform-demo.com",
      startDate: "2023-03-01",
      endDate: "2023-11-30",
      teamSize: 6,
      role: "AR開発リード & バックエンド開発者"
    },
    {
      id: 2,
      title: "IoTベーススマートアグリカルチャーシステム",
      description: "IoTセンサーとAIを組み合わせて、農作物の生育状況をリアルタイムでモニタリングし、最適な栽培条件を自動調整するシステムを開発。農業の効率と収穫量の向上に貢献しています。",
      longDescription: "このシステムは、土壌センサー、気象ステーション、ドローンからのデータを統合し、作物の健康状態と環境条件を常時監視します。Raspberry PiとArduinoを使用してIoTデバイスを構築し、MQTTプロトコルでデータを収集。クラウド上でPythonとScikit-learnを使用して機械学習モデルを開発し、最適な灌漑スケジュールや肥料使用量を予測します。フロントエンドはVue.jsで構築され、農家はモバイルアプリを通じてリアルタイムデータと推奨アクションを確認できます。システム導入後、水使用量が30%削減され、収穫量が20%増加しました。",
      imageUrl: "/images/iot-smart-agriculture.jpg",
      category: "アグリテック",
      technologies: ["Python", "Raspberry Pi", "Arduino", "MQTT", "Vue.js", "Scikit-learn", "AWS IoT"],
      features: [
        "リアルタイム環境モニタリング",
        "AI駆動の作物健康診断",
        "自動灌漑システム制御",
        "ドローンベースの空中画像分析",
        "予測分析による収穫量予測"
      ],
      githubUrl: "https://github.com/yourusername/iot-smart-agriculture",
      liveUrl: "https://iot-smart-agriculture-demo.com",
      startDate: "2022-11-01",
      endDate: "2023-09-30",
      teamSize: 8,
      role: "IoTシステムアーキテクト & データサイエンティスト"
    },
    {
      id: 1,
      title: "自然言語処理を用いた多言語カスタマーサポートボット",
      description: "最新のNLP技術を活用して、複数言語に対応し、コンテキストを理解して適切な回答を提供するカスタマーサポートボットを開発。顧客満足度の向上とサポートコストの削減を実現しました。",
      longDescription: "このAIボットは、BERT（Bidirectional Encoder Representations from Transformers）モデルをベースに、ファインチューニングを行い、特定の企業や製品に関する質問に正確に答えられるよう訓練されています。PyTorchを使用してモデルを実装し、FastAPIでRESTful APIを構築。フロントエンドはReactで開発され、WebSocketを使用してリアルタイムチャット機能を実現しています。多言語対応は、Google Cloud Translateを使用して実現。導入企業では、カスタマーサポートの対応時間が50%短縮され、顧客満足度が30%向上しました。",
      imageUrl: "/images/nlp-customer-support-bot.jpg",
      category: "AI & カスタマーサービス",
      technologies: ["Python", "PyTorch", "BERT", "FastAPI", "React", "WebSocket", "Google Cloud"],
      features: [
        "24/7無人対応可能なチャットボット",
        "コンテキスト理解による的確な回答",
        "多言語サポート（10言語以上）",
        "人間のオペレーターへのシームレスな引き継ぎ",
        "会話ログ分析による継続的な改善"
      ],
      githubUrl: "https://github.com/yourusername/nlp-customer-support-bot",
      liveUrl: "https://nlp-customer-support-bot-demo.com",
      startDate: "2023-02-15",
      endDate: "2023-10-31",
      teamSize: 6,
      role: "NLPエンジニア & テクニカルリード"
    }
  */
  ];