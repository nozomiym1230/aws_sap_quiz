# -*- coding: utf-8 -*-

QUESTIONS_BASIC = [
    {
        "id": "basic-01",
        "category": "basic",
        "question": "「安全でサイズ変更可能なコンピューティング容量をクラウド内で提供し、多様なワークロードに合わせて柔軟にインスタンスタイプを選択できる仮想サーバーサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "Amazon ECS",
            "Amazon EC2",
            "AWS Lambda",
            "Amazon EMR"
        ],
        "answerIndex": 1,
        "explanation": "Amazon EC2 (Elastic Compute Cloud) は、安全でサイズ変更可能なコンピューティング容量をクラウド内で提供する、最も基本的な仮想サーバーサービスです。",
        "keywords": ["EC2", "仮想サーバー", "コンピューティング"],
        "domain": None
    },
    {
        "id": "basic-02",
        "category": "basic",
        "question": "「業界をリードするスケーラビリティ、データ可用性、セキュリティ、およびパフォーマンスを提供する、静的ウェブホスティングやデータレイクの構築にも適したオブジェクトストレージサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "Amazon EBS",
            "Amazon EFS",
            "Amazon S3",
            "Amazon FSx"
        ],
        "answerIndex": 2,
        "explanation": "Amazon S3 (Simple Storage Service) は、業界をリードするスケーラビリティ、データ可用性、セキュリティ、およびパフォーマンスを提供するオブジェクトストレージサービスです。",
        "keywords": ["S3", "オブジェクトストレージ", "データレイク"],
        "domain": None
    },
    {
        "id": "basic-03",
        "category": "basic",
        "question": "「クラウドにおけるリレーショナルデータベース（MySQL, PostgreSQL, Oracle, SQL Server等）のセットアップ、運用、およびスケーリングを自動化・簡素化するマネージドサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Aurora",
            "Amazon DocumentDB"
        ],
        "answerIndex": 0,
        "explanation": "Amazon RDS (Relational Database Service) は、クラウド上の各種リレーショナルデータベースエンジンの運用管理タスク（バックアップ、パッチ、パッチ適用等）を自動化するマネージドデータベースサービスです。",
        "keywords": ["RDS", "リレーショナルデータベース", "SQL"],
        "domain": None
    },
    {
        "id": "basic-04",
        "category": "basic",
        "question": "「規模に関わらず1桁ミリ秒単位の遅延時間を実現し、ドキュメントやキーバリュースキーマをサポートするフルマネージドなNoSQL分散データベースサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "Amazon RDS",
            "Amazon DocumentDB",
            "Amazon Keyspaces",
            "Amazon DynamoDB"
        ],
        "answerIndex": 3,
        "explanation": "Amazon DynamoDBは、任意の規模で1桁ミリ秒単位のパフォーマンスを実現する、フルマネージドなNoSQL（ドキュメント/キーバリュー型）データベースサービスです。",
        "keywords": ["DynamoDB", "NoSQL", "ミリ秒レスポンス"],
        "domain": None
    },
    {
        "id": "basic-05",
        "category": "basic",
        "question": "「サーバーのプロビジョニングや管理を行うことなくコードを実行でき、イベントトリガーに応じてミリ秒単位で課金されるサーバーレスコンピューティングサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "AWS Lambda",
            "Amazon ECS",
            "AWS App Runner",
            "AWS Elastic Beanstalk"
        ],
        "answerIndex": 0,
        "explanation": "AWS Lambdaは、サーバーの管理を必要とせず、イベント駆動でコードを実行できる、FaaS（Function-as-a-Service）タイプのサーバーレスコンピューティングサービスです。",
        "keywords": ["Lambda", "サーバーレス", "イベント駆動型"],
        "domain": None
    },
    {
        "id": "basic-06",
        "category": "basic",
        "question": "「AWSクラウド内の論理的に隔離されたセクションを仮想ネットワークとしてプロビジョニングし、ルートテーブルやサブネット、セキュリティグループを細かく制御できるサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "AWS Direct Connect",
            "Amazon Route 53",
            "Amazon VPC",
            "AWS Transit Gateway"
        ],
        "answerIndex": 2,
        "explanation": "Amazon VPC (Virtual Private Cloud) は、AWSアカウント専用の論理的に隔離された仮想ネットワーク環境を構成できるサービスです。",
        "keywords": ["VPC", "仮想ネットワーク", "プライベートクラウド"],
        "domain": None
    },
    {
        "id": "basic-07",
        "category": "basic",
        "question": "「AWSリソースへのアクセスを安全に管理し、ユーザーやロールに対する権限ポリシーを割り当てることで認証と認可を一元制御するアイデンティティ管理サービス」に該当するAWSサービスはどれですか？",
        "options": [
            "AWS Directory Service",
            "Amazon Cognito",
            "AWS IAM",
            "AWS SSO"
        ],
        "answerIndex": 2,
        "explanation": "AWS IAM (Identity and Access Management) は、AWSのユーザー、グループ、ロールを管理し、各種リソースに対する安全なアクセス権限（ポリシー）を制御する基盤サービスです。",
        "keywords": ["IAM", "アイデンティティ認可", "アクセス制御"],
        "domain": None
    },
    {
        "id": "basic-08",
        "category": "basic",
        "question": "「可用性とスケーラビリティに優れたドメインネームシステム (DNS) サービスで、加重ルーティングやレイテンシールーティングなどの高度なトラフィック制御を提供するサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "Amazon Route 53",
            "AWS Direct Connect",
            "Amazon CloudFront",
            "Amazon API Gateway"
        ],
        "answerIndex": 0,
        "explanation": "Amazon Route 53は、高可用性で信頼性の高いDNS（ドメイン名解決）ウェブサービスであり、各種ヘルスチェックや柔軟なルーティングポリシーをサポートしています。",
        "keywords": ["Route 53", "DNS", "トラフィック制御"],
        "domain": None
    },
    {
        "id": "basic-09",
        "category": "basic",
        "question": "「静的・動的なウェブコンテンツを低レイテンシーかつ高速にグローバルに配信する、エッジロケーションを利用したコンテンツ配信ネットワーク (CDN) サービス」に該当するAWSサービスはどれですか？",
        "options": [
            "Amazon VPC",
            "Amazon Route 53",
            "AWS Global Accelerator",
            "Amazon CloudFront"
        ],
        "answerIndex": 3,
        "explanation": "Amazon CloudFrontは、エッジサーバーネットワークを使用して、エンドユーザーに対して静的・動的なアセットのキャッシュ配信を高速化するグローバルCDNサービスです。",
        "keywords": ["CloudFront", "CDN", "エッジキャッシュ"],
        "domain": None
    },
    {
        "id": "basic-10",
        "category": "basic",
        "question": "「受信したアプリケーションのトラフィックを、複数のターゲット（EC2インスタンス、コンテナ、IPアドレス等）へ自動的に分散して可用性を高める負荷分散サービス」に該当するAWSサービスはどれですか？",
        "options": [
            "Amazon Route 53",
            "Elastic Load Balancing (ELB)",
            "AWS Transit Gateway",
            "AWS Global Accelerator"
        ],
        "answerIndex": 1,
        "explanation": "Elastic Load Balancing (ELB) は、負荷（トラフィック）を複数のコンピューティングリソースに自動分散させ、アプリケーションの耐障害性を向上させるサービスです（ALB, NLB, GLB等があります）。",
        "keywords": ["ELB", "ロードバランサー", "負荷分散"],
        "domain": None
    },
    {
        "id": "basic-11",
        "category": "basic",
        "question": "「アプリケーションの負荷や事前に定義したポリシーに従って、EC2インスタンスなどの容量を自動的に拡張または縮小して適切なパフォーマンスとコストを維持するサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "Amazon EC2 Auto Scaling",
            "AWS Elastic Beanstalk",
            "AWS Systems Manager",
            "AWS Lambda"
        ],
        "answerIndex": 0,
        "explanation": "Amazon EC2 Auto Scalingは、あらかじめ定義された条件（CPU使用率、リクエスト数など）に基づいて、稼働するEC2インスタンスの数を自動で増減させるスケーリングサービスです。",
        "keywords": ["Auto Scaling", "スケーリング", "自動調整"],
        "domain": None
    },
    {
        "id": "basic-12",
        "category": "basic",
        "question": "「複数のAWSアカウントを統合し、組織単位（OU）での管理や一元請求（コンソリデーティッドビリング）、サービスコントロールポリシー（SCP）による一括統制を可能にするアカウント管理サービス」に該当するAWSサービスはどれですか？",
        "options": [
            "AWS Control Tower",
            "AWS Systems Manager",
            "AWS Directory Service",
            "AWS Organizations"
        ],
        "answerIndex": 3,
        "explanation": "AWS Organizationsは、複数のAWSアカウントをツリー構造（OU）にまとめ、 consolidated billing (一元請求) や SCP (サービスコントロールポリシー) による統制を一元適用できるマルチアカウント管理サービスです。",
        "keywords": ["Organizations", "マルチアカウント", "SCP"],
        "domain": None
    },
    {
        "id": "basic-13",
        "category": "basic",
        "question": "「安全なマルチアカウントのAWS環境（ランディングゾーン）のセットアップを自動化し、ベストプラクティスに基づくガードレールを適用して組織の統制を容易にするサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "AWS Control Tower",
            "AWS Organizations",
            "AWS CloudTrail",
            "AWS Config"
        ],
        "answerIndex": 0,
        "explanation": "AWS Control Towerは、安全なマルチアカウント環境である「ランディングゾーン」の新規立ち上げと継続的管理を自動化し、コンプライアンス（ガードレール）の適用を支援するサービスです。",
        "keywords": ["Control Tower", "ランディングゾーン", "ガードレール"],
        "domain": None
    },
    {
        "id": "basic-14",
        "category": "basic",
        "question": "「AWSおよびオンプレミスのインフラストラクチャを一元管理し、OSパッチ適用、リモートコマンド実行、構成管理を安全かつ自動で行える統合運用管理サービス」に該当するAWSサービスはどれですか？",
        "options": [
            "AWS Config",
            "AWS Systems Manager (SSM)",
            "AWS CloudTrail",
            "AWS OpsWorks"
        ],
        "answerIndex": 1,
        "explanation": "AWS Systems Manager (SSM) は、リソースの可視化と制御を提供する統合コンソールサービスです。パッチマネージャー、Run Command、Session Managerなどの機能群を用いてサーバーの管理作業を自動化します。",
        "keywords": ["Systems Manager", "SSM", "パッチ管理"],
        "domain": None
    },
    {
        "id": "basic-15",
        "category": "basic",
        "question": "「データベースの認証情報やAPIキーなどのシークレット情報を暗号化して安全に保管し、自動的なキーローテーション機能を提供するシークレット管理サービス」に該当するAWSサービスはどれですか？",
        "options": [
            "AWS Systems Manager Parameter Store",
            "AWS Artifact",
            "AWS Secrets Manager",
            "AWS KMS"
        ],
        "answerIndex": 2,
        "explanation": "AWS Secrets Managerは、パスワードやAPIキーなどの機密情報を安全に保存・管理し、プログラムから動的に取得可能にするほか、パスワードの定期的な自動ローテーション機能を備えています。",
        "keywords": ["Secrets Manager", "資格情報保管", "キーローテーション"],
        "domain": None
    },
    {
        "id": "basic-16",
        "category": "basic",
        "question": "「データの暗号化に使用する暗号化キーを簡単に作成・管理・制御でき、他の多くのAWSサービスとネイティブに統合されたフルマネージド暗号化キー管理サービス」に該当するAWSサービスはどれですか？",
        "options": [
            "AWS Secrets Manager",
            "AWS CloudHSM",
            "AWS KMS (Key Management Service)",
            "AWS Certificate Manager"
        ],
        "answerIndex": 2,
        "explanation": "AWS KMS (Key Management Service) は、暗号化データの制御に用いる暗号化マスターキー (KMSキー) の一元的な管理・作成・ポリシー適用を行うフルマネージドサービスです。",
        "keywords": ["KMS", "暗号化キー", "エンベロープ暗号化"],
        "domain": None
    },
    {
        "id": "basic-17",
        "category": "basic",
        "question": "「マイクロサービス、分散システム、およびサーバーレスアプリケーションを疎結合化し、メッセージの損失なしに非同期通信を仲介するフルマネージドなメッセージキューサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EventBridge",
            "Amazon MQ"
        ],
        "answerIndex": 1,
        "explanation": "Amazon SQS (Simple Queue Service) は、信頼性が高くスケーラブルなメッセージキューを提供し、バッファリングや非同期なデータ中継を通じてマイクロサービス間を疎結合化するサービスです。",
        "keywords": ["SQS", "メッセージキュー", "疎結合"],
        "domain": None
    },
    {
        "id": "basic-18",
        "category": "basic",
        "question": "「アプリケーション対アプリケーション（A2A）および個人向け（A2P）のプッシュ通知やEメール、SMS配信に対応した、パブリッシュ/サブスクライブ型の完全マネージドメッセージングサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "Amazon SQS",
            "Amazon SES",
            "Amazon Pinpoint",
            "Amazon SNS"
        ],
        "answerIndex": 3,
        "explanation": "Amazon SNS (Simple Notification Service) は、パブリッシャーから複数のサブスクライバー（SQS, Lambda, モバイルプッシュ, メール等）に対してファンアウト（一斉送信）可能なPub/Sub型メッセージングサービスです。",
        "keywords": ["SNS", "Pub/Sub", "プッシュ通知"],
        "domain": None
    },
    {
        "id": "basic-19",
        "category": "basic",
        "question": "「自社アプリケーション、SaaS、AWSサービスからのリアルタイムイベントデータを収集し、柔軟なルールに基づいてターゲットへ非同期ルーティングを行うサーバーレスイベントバスサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "Amazon EventBridge",
            "Amazon SNS",
            "Amazon SQS",
            "AWS AppSync"
        ],
        "answerIndex": 0,
        "explanation": "Amazon EventBridgeは、多様なイベントソースからのイベントを受け取り、ルールでマッチングしてターゲット（Lambda, Step Functions等）にルーティングする、イベント駆動型サーバーレスハブです。",
        "keywords": ["EventBridge", "イベントバス", "スキーマ検出"],
        "domain": None
    },
    {
        "id": "basic-20",
        "category": "basic",
        "question": "「複数のAWSサービス（Lambda, ECS, DynamoDB等）を組み合わせたビジュアルなワークフローを構築し、エラー処理や条件分岐を含む状態遷移を管理するオーケストレーションサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "AWS Lambda Destinations",
            "AWS Step Functions",
            "Amazon EventBridge Pipes",
            "AWS Flow Framework"
        ],
        "answerIndex": 1,
        "explanation": "AWS Step Functionsは、サーバーレスな分散アプリケーションの状態（ワークフロー）を定義・制御できるオーケストレーターです。分岐、並列、リトライ、例外処理などの状態遷移をASLで宣言・追跡できます。",
        "keywords": ["Step Functions", "ワークフロー", "オーケストレーション"],
        "domain": None
    },
    {
        "id": "basic-21",
        "category": "basic",
        "question": "「オンプレミスの物理・仮想サーバーを、OSやインストール済みの設定を変更することなくブロックレベルで継続的レプリケーションし、AWSへ最小限のダウンタイムで迅速に移行（リホスト）するサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "VM Import/Export",
            "AWS DataSync",
            "AWS Database Migration Service",
            "AWS Application Migration Service (MGN)"
        ],
        "answerIndex": 3,
        "explanation": "AWS Application Migration Service (AWS MGN) は、物理や仮想のサーバーを、元のアプリケーションや設定を保ったままブロックレベルレプリケーションによってEC2にリホストする移行サービスです。",
        "keywords": ["AWS MGN", "Rehost", "レプリケーション移行"],
        "domain": None
    },
    {
        "id": "basic-22",
        "category": "basic",
        "question": "「リレーショナルデータベースやNoSQL、データウェアハウスを、最小限のダウンタイムで安全にAWSへ移行、または継続的レプリケーションによるデータ同期を実行するデータベース移行サービス」に該当するAWSサービスはどれですか？",
        "options": [
            "AWS Database Migration Service (DMS)",
            "AWS Schema Conversion Tool",
            "AWS Application Migration Service",
            "AWS DataSync"
        ],
        "answerIndex": 0,
        "explanation": "AWS Database Migration Service (AWS DMS) は、移行中のダウンタイムを最小限にしつつ、データベースやデータウェアハウスを安全にAWSに移行・レプリケートするマネージドサービスです。",
        "keywords": ["DMS", "データベース移行", "データレプリケーション"],
        "domain": None
    },
    {
        "id": "basic-23",
        "category": "basic",
        "question": "「オンプレミスストレージ（NFS/SMB）とAWSストレージサービス（S3/EFS/FSx）の間での大容量データのオンライン転送・同期処理を自動化および高速化するデータ転送サービス」に該当するAWSサービスはどれですか？",
        "options": [
            "AWS Direct Connect",
            "AWS Transfer Family",
            "AWS DataSync",
            "AWS Storage Gateway"
        ],
        "answerIndex": 2,
        "explanation": "AWS DataSyncは、オンプレミスとAWSのストレージ、あるいはAWS内のストレージサービス間で大量のデータファイルをオンライン経由で高速かつ自動的に同期・転送するサービスです。",
        "keywords": ["DataSync", "データ同期", "オンライン転送"],
        "domain": None
    },
    {
        "id": "basic-24",
        "category": "basic",
        "question": "「標準的なSQLクエリを使用してAmazon S3内の大容量データを直接分析でき、サーバーのプロビジョニングが不要で実行したクエリのスキャンデータ量のみで課金されるインタラクティブなクエリサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "Amazon EMR",
            "Amazon Redshift",
            "Amazon OpenSearch Service",
            "Amazon Athena"
        ],
        "answerIndex": 3,
        "explanation": "Amazon Athenaは、サーバー管理が不要なアドホッククエリサービスです。S3上の各種テキスト、JSON、Parquetなどのファイルに対して標準SQLを実行し、その結果をS3に自動出力します。",
        "keywords": ["Athena", "SQLクエリ", "サーバーレス分析"],
        "domain": None
    },
    {
        "id": "basic-25",
        "category": "basic",
        "question": "「ペタバイト規模の構造化データを高いパフォーマンスで並列分析できる、ビジネスインテリジェンス（BI）ツールとの連携に適したフルマネージドクラウドデータウェアハウスサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "Amazon Athena",
            "Amazon OpenSearch Service",
            "Amazon Redshift",
            "Amazon Aurora"
        ],
        "answerIndex": 2,
        "explanation": "Amazon Redshiftは、高速でフルマネージドなクラウドデータウェアハウス（DWH）です。カラムナー（列指向）ストレージや並列クエリエンジン（MPP）を使用して、大規模なデータ分析ワークロードをサポートします。",
        "keywords": ["Redshift", "DWH", "列指向ストレージ"],
        "domain": None
    },
    {
        "id": "basic-26",
        "category": "basic",
        "question": "「分析用データの検出、準備、移動、統合（ETL）を簡単にするサーバーレスデータ統合サービスで、データカタログの自動構築やデータ準備用のDataBrewを提供するサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "AWS Glue",
            "Amazon EMR",
            "AWS Lake Formation",
            "Amazon Kinesis"
        ],
        "answerIndex": 0,
        "explanation": "AWS Glueは、サーバーレスのデータ統合（ETL）サービスです。メタデータをスキャンして管理する「データカタログ」や、ビジュアルなETL開発インターフェース、ノンコードクレンジングの「DataBrew」などを含みます。",
        "keywords": ["Glue", "ETL", "データカタログ"],
        "domain": None
    },
    {
        "id": "basic-27",
        "category": "basic",
        "question": "「Apache Spark、Hadoop、Hive、Prestoなどのオープンソースツールを使用した大規模なビッグデータ分散処理および分析クラスターを迅速に実行・スケールできるマネージドフレームワークサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "AWS Glue",
            "Amazon EMR",
            "Amazon OpenSearch Service",
            "Amazon MSK"
        ],
        "answerIndex": 1,
        "explanation": "Amazon EMR (Elastic MapReduce) は、SparkやHadoopなどの分散処理ビッグデータツールを、マネージドなEC2またはサーバーレス環境で迅速に実行するためのフレームワークプラットフォームです。",
        "keywords": ["EMR", "Hadoop", "Sparkクラスター"],
        "domain": None
    },
    {
        "id": "basic-28",
        "category": "basic",
        "question": "「オープンソースの Apache Kafka を使用したリアルタイムストリーミングデータの収集・処理を容易にする、インフラ管理不要のフルマネージドなストリーミングデータプラットフォームサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "Amazon Kinesis Data Streams",
            "Amazon MQ",
            "Amazon Managed Streaming for Apache Kafka (Amazon MSK)",
            "Amazon EventBridge"
        ],
        "answerIndex": 2,
        "explanation": "Amazon MSK (Managed Streaming for Apache Kafka) は、Apache Kafka用のフルマネージドサービスで、既存 of Kafkaツールやクライアントコードを修正することなくリアルタイムストリーム処理を構築できます。",
        "keywords": ["MSK", "Apache Kafka", "ストリーミングデータ"],
        "domain": None
    },
    {
        "id": "basic-29",
        "category": "basic",
        "question": "「クラウド規模で動作し、高速なインメモリ計算エンジン（SPICE）を搭載した、対話的なダッシュボードの構築や機械学習によるインサイト検知を提供するサーバーレスビジネスインテリジェンス (BI) サービス」に該当するAWSサービスはどれですか？",
        "options": [
            "Amazon QuickSight",
            "AWS Glue Studio",
            "Amazon Athena",
            "Amazon Redshift"
        ],
        "answerIndex": 0,
        "explanation": "Amazon QuickSightは、フルマネージドなサーバーレスBIサービスで、SPICEエンジンによる高速なインメモリ分析や、Webポータルへのダッシュボードの埋め込み、各種データソースとの統合を容易にします。",
        "keywords": ["QuickSight", "BI", "SPICE"],
        "domain": None
    },
    {
        "id": "basic-30",
        "category": "basic",
        "question": "「ログ分析、アプリケーション監視、および全文検索をインタラクティブかつリアルタイムで実行する、オープンソースの検索・分析エンジンをAWS上で容易に展開・スケールできるサービス」に該当するAWSサービスはどれですか？",
        "options": [
            "Amazon OpenSearch Service",
            "Amazon Athena",
            "Amazon CloudWatch Logs",
            "Amazon DocumentDB"
        ],
        "answerIndex": 0,
        "explanation": "Amazon OpenSearch Serviceは、大量のログデータ等をミリ秒単位の低レイテンシーでインデックス化し、Kibana等と統合して全文検索や監視ダッシュボードを可視化するフルマネージドサービスです。",
        "keywords": ["OpenSearch", "ログ分析", "全文検索"],
        "domain": None
    }
]
