# -*- coding: utf-8 -*-

QUESTIONS_ANALYTICS = [
    {
        "id": "anal-01",
        "category": "analytics",
        "question": "IoTデバイスから送信される数万のセンサーデータをミリ秒未満の遅延で順序正しく受信し、リアルタイムにストリーミング処理を適用したいです。どのサービスを選ぶべきですか？",
        "options": [
            "Amazon Kinesis Data Streams",
            "Amazon Kinesis Data Firehose",
            "Amazon Athena",
            "Amazon MSK"
        ],
        "answerIndex": 0,
        "explanation": "Amazon Kinesis Data Streamsは、数十万のデータソースから毎秒数ギガバイトのデータをリアルタイムに収集・保管し、シャードによる順序保証とスループットの拡張を提供します。FirehoseはストリーミングデータをS3やRedshiftに「バッファリングしてロード（中継）」するサービスであり、リアルタイム処理のコンシューマーではないため、ストリーム処理の入り口はData Streamsが最適です。",
        "keywords": ["Kinesis Data Streams", "リアルタイムストリーム", "シャード"],
        "domain": "domain-2"
    },
    {
        "id": "anal-02",
        "category": "analytics",
        "question": "ストリーミングデータ（Kinesisなど）を、中継システムを開発することなく、Amazon S3、Redshift、またはOpenSearchに対して、自動で圧縮（GZIPなど）およびデータ形式の変換（JSONからParquet）を施しながら非同期でロードする最適なマネージドサービスはどれですか？",
        "options": [
            "Amazon Kinesis Data Streams",
            "Amazon Kinesis Data Firehose",
            "AWS Glue ETL",
            "Amazon MSK"
        ],
        "answerIndex": 1,
        "explanation": "Amazon Kinesis Data Firehoseは、ストリーミングデータをサポート対象の配信先にロードする最も簡単なフルマネージドサービスです。バッファサイズや時間に基づいてデータをまとめ、かつLambdaと連携してデータの加工や、Parquet/ORCなどの列指向フォーマットへの変換、圧縮処理を自動で実行して保存できます。",
        "keywords": ["Kinesis Data Firehose", "データ変換", "Parquet"],
        "domain": "domain-2"
    },
    {
        "id": "anal-03",
        "category": "analytics",
        "question": "Amazon EMR（Elastic MapReduce）を使用して、数百テラバイトの大規模なHadoop/Sparkデータ分析クラスターを実行します。コストを最小化するためのインスタンスタイプの選定設計として、正しいものはどれですか？",
        "options": [
            "すべてのノードにスポットインスタンスを使用する",
            "マスターノードとコアノードにはオンデマンド（またはリザーブド）を使用し、データの損失リスクがない処理追加用の「タスクノード」に対してのみスポットインスタンスを使用すること",
            "マスターノードにスポットインスタンスを使用し、タスクノードにオンデマンドを使用する",
            "EMR Serverless を使用し、常に一定の容量をプロビジョニングする"
        ],
        "answerIndex": 1,
        "explanation": "EMRでコストを最適化するためのベストプラクティスは、システムのコントロールを失うリスクを避けるために「マスターノード」には必ずオンデマンドインスタンスを使用することです。また、HDFSデータを保持する「コアノード」も、スポットインスタンスの回収によるデータロストを防ぐためオンデマンド（またはリザーブド）を使用します。そして、計算能力の追加にのみ使われる「タスクノード」に対してスポットインスタンスを割り当てることで、最大90%のコスト削減とデータ保全を両立できます。",
        "keywords": ["Amazon EMR", "スポットインスタンス", "ノードの役割"],
        "domain": "domain-3"
    },
    {
        "id": "anal-04",
        "category": "analytics",
        "question": "AWSのデータレイク（Amazon S3）内の多数のフォルダやデータファイルに対して、個々のバケットポリシーを記述する代わりに、中央のガバナンスとして、テーブル、データベース、さらには特定の「列や行レベル」のアクセス権限をIAMポリシーとは独立して一元制御・監査するサービスはどれですか？",
        "options": [
            "AWS Glue Data Catalog",
            "AWS Lake Formation",
            "AWS Resource Access Manager (RAM)",
            "Amazon Athena"
        ],
        "answerIndex": 1,
        "explanation": "AWS Lake Formationを使用すると、S3のデータレイクのセットアップと権限管理を一元化できます。IAMポリシーの代わりに、データベースオブジェクトに対するメタデータアクセス権をセル（行および列）レベルできめ細かく定義でき、認証されたユーザー（Athena等からクエリを実行する人など）に対してその権限に合致するデータのみをフィルタリングして提供します。",
        "keywords": ["AWS Lake Formation", "データレイクガバナンス", "列・行レベルアクセス制御"],
        "domain": "domain-1"
    },
    {
        "id": "anal-05",
        "category": "analytics",
        "question": "AWS Glue の ETL (抽出・変換・ロード) ジョブを実行して、毎日新規に蓄積されるログファイルのみを差分処理したいです。過去に一度処理したS3上のデータファイルを自動でスキップし、重複処理を防ぐために有効化すべきGlueの機能は何ですか？",
        "options": [
            "Glue クローラー",
            "Glue ジョブブックマーク (Job Bookmarks)",
            "Glue スキーマレジストリ",
            "S3バージョニングの連携"
        ],
        "answerIndex": 1,
        "explanation": "AWS Glue ジョブブックマーク (Job Bookmarks) は、ETLジョブの実行状態情報を追跡する機能です。これを有効（Enable）に設定しておくことで、前回のジョブ実行でどこまでのデータファイルを処理したかをGlueが自動記憶し、次回のジョブ実行時には新しく追加された差分ファイルのみを対象として自動で処理を進めるため、無駄な処理コストを削減できます。",
        "keywords": ["ジョブブックマーク", "Glue ETL", "差分処理"],
        "domain": "domain-3"
    },
    {
        "id": "anal-06",
        "category": "analytics",
        "question": "Amazon Athenaで大規模なS3データレイク（Parquet形式など）に対してクエリを実行します。クエリの実行速度を劇的に向上させ、かつクエリ時にスキャンされるデータ容量（コスト）を最小限に抑えるための最良のアプローチはどれですか？",
        "options": [
            "データを事前にすべて単一の巨大なファイルにまとめる",
            "データをS3上で日付やカテゴリ等の属性ごとに「パーティション化（フォルダ分割）」して保存し、Athenaクエリでそのパーティション（WHERE節などでの絞り込み）を適切に指定してスキャン範囲を制限すること",
            "CSV形式などの非圧縮データを優先して使用する",
            "Athenaのワークグループを無効化する"
        ],
        "answerIndex": 1,
        "explanation": "Athenaはスキャンされたデータ量に基づいて課金されます。パフォーマンスの向上とコスト削減のベストプラクティスは、「データのパーティション化」です。日付などでS3フォルダを物理分割（例: `/year=2023/month=10/`）して格納し、クエリ実行時に `WHERE year = '2023'` のように指定することで、Athenaは必要なフォルダ内のオブジェクトのみをスキャンし、不要なテラバイトデータのスキャンを完全に回避できます。",
        "keywords": ["Amazon Athena", "パーティション化", "データスキャンコスト削減"],
        "domain": "domain-3"
    },
    {
        "id": "anal-07",
        "category": "analytics",
        "question": "企業独自のActive Directoryのユーザー認証と統合し、ユーザーごとにアクセス可能な「分析用ダッシュボード（レポート）」の閲覧権限やデータ制限（特定の支店長には自支店のデータのみを見せるなど）をサーバーレスで構成できる、AWSのBI（ビジネスインテリジェンス）サービスはどれですか？",
        "options": [
            "Amazon QuickSight",
            "AWS Glue DataBrew",
            "Amazon Redshift",
            "Amazon Athena"
        ],
        "answerIndex": 0,
        "explanation": "Amazon QuickSightは、フルマネージドでスケーラブルなサーバーレスBIサービスです。Active DirectoryやSAML 2.0などのシングルサインオンとネイティブに統合できます。また、「行レベルのセキュリティ (RLS - Row-Level Security)」機能を使用することで、アクセスするユーザーIDや所属グループに基づいて、同一のダッシュボードであっても表示されるデータ（店舗データなど）を自動でフィルタリングして表示制限できます。",
        "keywords": ["Amazon QuickSight", "BI", "行レベルセキュリティ RLS"],
        "domain": "domain-1"
    },
    {
        "id": "anal-08",
        "category": "analytics",
        "question": "Amazon Kinesis Data Streamsにおいて、プロビジョニングモードを使用して運用しています。データ量が想定を超え、コンシューマー側で `ReadProvisionedThroughputExceeded` エラー（スロットリング）が頻発するようになりました。このストリームのスループット容量（書き込み/読み取り制限）を拡張するために取るべきアクションはどれですか？",
        "options": [
            "コンシューマーのEC2インスタンスをスケールアップする",
            "ストリームの「シャード数 (Shard Count)」を増やしてシャード分割（Shard Splitting）を実行すること",
            "Kinesis Data Firehoseへ移行する",
            "Kinesisストリームの暗号化を解除する"
        ],
        "answerIndex": 1,
        "explanation": "Kinesis Data Streams（プロビジョンドモード）の容量は「シャード数」で決定されます（1シャードあたり書き込み1MB/秒または1000レコード/秒、読み取り2MB/秒）。スロットリングが発生した場合、容量が不足しているため、既存のシャードを2つに「分割（Splitting）」して総シャード数を増やすことで、ストリーム全体の処理能力がシームレスに拡張されます。",
        "keywords": ["シャード分割", "Kinesis Data Streams", "スループット拡張"],
        "domain": "domain-3"
    },
    {
        "id": "anal-09",
        "category": "analytics",
        "question": "大規模なウェブサイトのアクセスログなどのストリーミングデータを、ミリ秒未満のレイテンシーで検索、インデックス作成し、Kibanaやダッシュボードを通じてリアルタイムのセキュリティ監査やエラー解析を行いたい場合に最適なAWSマネージドサービスはどれですか？",
        "options": [
            "Amazon Redshift",
            "Amazon OpenSearch Service (旧 Elasticsearch Service)",
            "Amazon Athena",
            "Amazon EMR"
        ],
        "answerIndex": 1,
        "explanation": "Amazon OpenSearch Serviceは、ログ分析、アプリケーションモニタリング、全文検索などのユースケースに最適化された検索・分析エンジンです。Kinesis等から取り込まれた大量の半構造化データ（JSON等）をほぼリアルタイムでインデックス化し、OpenSearch Dashboards（旧Kibana）を使用して高速なデータの探索・可視化を行えます。",
        "keywords": ["OpenSearch", "ログ分析", "リアルタイム検索"],
        "domain": "domain-2"
    },
    {
        "id": "anal-10",
        "category": "analytics",
        "question": "AWS Glueで構築されるデータカタログ（Data Catalog）の主な役割は何ですか？",
        "options": [
            "S3上の生データを暗号化して別のバケットにコピーする",
            "データレイクや各種データベースの場所、スキーマ情報（データ定義、列名、型など）を格納する一元的な「メタデータリポジトリ（メタストア）」としての役割であること",
            "データをグラフデータベースにインポートするツールである",
            "BIツールへのダッシュボードの表示自体を行う"
        ],
        "answerIndex": 1,
        "explanation": "AWS Glue データカタログは、各種データソースの「メタデータ（物理パス、テーブル名、列名、データ型など）」を保管・管理するマネージドな共有リポジトリです。Glue クローラー等がデータを読み込んでスキーマを自動作成し、Athena、EMR、Redshift Spectrumなどのクエリサービスがこのカタログ情報を参照することで、S3上の生ファイルをあたかもデータベースのテーブルのようにクエリで直接扱えるようになります。",
        "keywords": ["AWS Glue Data Catalog", "メタデータカタログ", "スキーマ管理"],
        "domain": "domain-2"
    },
    {
        "id": "anal-11",
        "category": "analytics",
        "question": "オープンソースの Apache Kafka をマネージドサービスとしてAWS上に構築し、既存の Kafka クライアントコードやツールを変更せずに移行・運用したい場合に選択すべきサービスはどれですか？",
        "options": [
            "Amazon Kinesis Data Streams",
            "Amazon MSK (Managed Streaming for Apache Kafka)",
            "Amazon MQ",
            "Amazon EMR"
        ],
        "answerIndex": 1,
        "explanation": "Amazon MSK (Managed Streaming for Apache Kafka) は、Apache Kafka用のフルマネージドサービスです。既存のKafkaエコシステム（Kafka Connect、Kafka Streams、MirrorMakerなど）をそのまま利用でき、クラスタのプロビジョニング、パッチ適用、高可用性デプロイメントがAWSによって自動化されます。",
        "keywords": ["Amazon MSK", "Apache Kafka", "ストリーミング基盤"],
        "domain": "domain-4"
    },
    {
        "id": "anal-12",
        "category": "analytics",
        "question": "S3に格納されている時系列ログのパーティション情報（例: `/year=YYYY/month=MM/day=DD/`）をAthenaからクエリする際、S3バケット内のファイルスキャンを行わずに、日時データから自動的にパーティションパスを計算してクエリエンジンにマッピングすることで、クエリ起動までの待機時間（オーバーヘッド）をほぼ皆無にするAthenaの高速化機能は何ですか？",
        "options": [
            "Glueカタログクローラー",
            "パーティション投影 (Partition Projection)",
            "Athena ワークグループ設定",
            "S3 Select"
        ],
        "answerIndex": 1,
        "explanation": "パーティション投影 (Partition Projection) は、時系列などでパターンが決まっているパーティション情報（例: 連続する日付や数値）を、S3へのメタデータ取得要求（Glue データカタログの再クエリなど）を発生させずに、設定されたルールからパスを直接計算してクエリを実行します。これにより、超大規模データレイクにおけるAthenaのクエリ開始までの処理が大幅に高速化され、Glueへのリクエストコストも削減されます。",
        "keywords": ["Partition Projection", "Athena", "パーティション投影"],
        "domain": "domain-3"
    },
    {
        "id": "anal-13",
        "category": "analytics",
        "question": "Kinesis Data Streamsをコンシューマーとして処理するアプリケーション（EC2上で実行など）を構築する際、ストリームのシャード数（例: 20個）に応じて自動的に処理インスタンス間でシャードの「所有権（Lease）」を分散・協調し、インスタンス追加時に自動的に担当シャードを再配分（リバランシング）してくれるAWS公式のクライアントライブラリはどれですか？",
        "options": [
            "AWS SDK (標準)",
            "Kinesis Client Library (KCL)",
            "Kinesis Producer Library (KPL)",
            "Kinesis Agent"
        ],
        "answerIndex": 1,
        "explanation": "Kinesis Client Library (KCL) は、コンシューマーアプリケーションの開発を大幅に簡素化するライブラリです。DynamoDBテーブルをバックグラウンドで使用してシャードの追跡とリースの分散ロック管理を行います。KCLを使用することで、EC2インスタンスの増減に伴うシャードの再割り当てやチェックポイント管理がすべて自動化されます。",
        "keywords": ["KCL", "Kinesis Client Library", "シャードリバランシング"],
        "domain": "domain-2"
    },
    {
        "id": "anal-14",
        "category": "analytics",
        "question": "QuickSightで大規模なデータベースやS3からデータを取り込んでビジュアル（ダッシュボード）を作成します。高価なライブデータベースに毎回SQLクエリを投げて負荷をかけるのを防ぎ、かつグラフ切り替え時の表示スピードを極限まで高めるためにQuickSightが提供する超高速なインメモリエンジンはどれですか？",
        "options": [
            "SPICE (Super-fast, Parallel, In-memory Calculation Engine)",
            "ElastiCache Redis",
            "Athena Workgroup Cache",
            "Redshift Spectrum"
        ],
        "answerIndex": 0,
        "explanation": "SPICE (Super-fast, Parallel, In-memory Calculation Engine) は、QuickSight専用の超高速インメモリ計算エンジンです。データを事前にSPICEのメモリプールにロードしておくことで、数百万行の高度な計算や可視化フィルタリングをミリ秒単位で瞬時にレスポンスできます。これにより、オリジンデータベース側へのリアルタイム負荷が皆無になります。",
        "keywords": ["SPICE", "QuickSight", "インメモリエンジン"],
        "domain": "domain-3"
    },
    {
        "id": "anal-15",
        "category": "analytics",
        "question": "AWS GlueでS3のデータレイク内のファイルをテーブル情報として自動登録したいです。新しいファイルが追加された際、自動的に新しい「パーティション」の追加やスキーマ構造の変更（新規列の追加など）を検出してGlueデータカタログを自動更新してくれる機能はどれですか？",
        "options": [
            "Glue トリガー (Triggers)",
            "Glue クローラー (Glue Crawlers)",
            "Glue スキーマカタログ",
            "S3 バケットポリシー"
        ],
        "answerIndex": 1,
        "explanation": "Glue クローラー (Glue Crawlers) は、データソース（S3やDynamoDB、RDSなど）に接続してデータをスキャンし、データ形式を分類してスキーマ定義を抽出します。クロール時に、S3内の新規フォルダを「パーティション」として自動マッピングしたり、列の追加を検出してメタデータカタログを自動で書き換えるため、データレイクのスキーマ同期に不可欠です。",
        "keywords": ["Glueクローラー", "スキーマ自動検出", "パーティションマッピング"],
        "domain": "domain-2"
    },
    {
        "id": "anal-16",
        "category": "analytics",
        "question": "OpenSearch Serviceにおいて、ログ検索や分析インデックスの「インフラ管理（インスタンスタイプの選定、可用性の確保、ディスク容量拡張設定など）」を完全にAWS側へ委ね、書き込み量や検索要求の増減に対して自動で処理容量（OCU - OpenSearch Compute Unit）をスケール調整する展開オプションは何ですか？",
        "options": [
            "OpenSearch Serverless (オープンサーチサーバーレス)",
            "UltraWarm インスタンス",
            "OpenSearch ドメインプロビジョンド",
            "Kibana クラスタの配置のみ"
        ],
        "answerIndex": 0,
        "explanation": "Amazon OpenSearch Serverlessは、OpenSearchのサーバーレス展開オプションです。コレクションと呼ばれる論理的なインデックスグループを作成するだけで、クラスターの設定や保守（パッチ適用、容量調整、ホット/ウォーム階層化）が不要となり、データアクセス要求（検索および書き込み）に応じてOCUが自動的にスループットをスケーリングします。",
        "keywords": ["OpenSearch Serverless", "サーバーレス検索", "OCU自動スケーリング"],
        "domain": "domain-2"
    },
    {
        "id": "anal-17",
        "category": "analytics",
        "question": "Kinesis Data Streamsにおいて、コンシューマー（データ読み取り側）のインスタンス数が非常に多く、各コンシューマーへのメッセージ配信が同一の2MB/秒の共有帯域によって制限され、読み取りの遅延が発生し始めました。この帯域の奪い合いを回避し、コンシューマーごとに専用の「最大2MB/秒の読み取り独立帯域（Push型配信）」をアロケーションする機能は何ですか？",
        "options": [
            "Kinesis Client Library (KCL) の無効化",
            "専用スループットを使用した拡張ファンアウト (Enhanced Fan-Out)",
            "Kinesis Data Firehoseへの中継のみ",
            "シャード分割の連打"
        ],
        "answerIndex": 1,
        "explanation": "拡張ファンアウト (Enhanced Fan-Out) は、Kinesis Data Streamsの機能で、登録されたコンシューマーごとに「専用の読み取りパイプ（シャードあたり最大2MB/秒のPush帯域）」を提供します。これにより、複数の異なるアプリケーション（例: リアルタイムアラートと、S3バックアップジョブ）が同一ストリームから同時にデータを読み込んでも互いに干渉せず、レイテンシーが低く保たれます。",
        "keywords": ["拡張ファンアウト", "Enhanced Fan-Out", "専用読み取りスループット"],
        "domain": "domain-3"
    },
    {
        "id": "anal-18",
        "category": "analytics",
        "question": "OpenSearch Serviceにおいて、過去のログデータを長期間（数ヶ月〜数年）保持しつつ、ストレージ料金を最小限に抑えたいです。アクセス頻度の低いコールドインデックスを、ローカルの高速SSDストレージから、背後にある非常に安価なS3ストレージベースの階層へ透過的に自動移動させて保持する機能はどれですか？",
        "options": [
            "S3ライフサイクル移行のみ",
            "UltraWarm ストレージ (およびコールドストレージ) 階層の適用",
            "OpenSearch Serverlessの配置のみ",
            "EFSのマウント設定"
        ],
        "answerIndex": 1,
        "explanation": "OpenSearch Serviceは「UltraWarm ストレージ」および「コールドストレージ」階層をサポートしています。アクティブなログ（ホット）は高価なSSDで実行し、読み取り頻度が減った過去データは自動的に「UltraWarm」（S3にデータを置き、必要時に自動ロードする読み取り専用ノード）へ移行させます。さらに古いデータは完全にコールド階層（S3に完全退避）に置くことで、ストレージ費用を最大90%削減できます。",
        "keywords": ["UltraWarm", "コールドストレージ", "OpenSearchコスト最適化"],
        "domain": "domain-3"
    },
    {
        "id": "anal-19",
        "category": "analytics",
        "question": "AWS Glue DataBrew に関する正しい説明はどちらですか？",
        "options": [
            "データの圧縮・バックアップを行うシェルスクリプト生成ツールである",
            "ビジュアルなインターフェース（ノーコード）を用いて、アナリストや開発者がデータのクレンジング、異常値の削除、データ型の統一などの「前処理（Data Preparation）」を、250以上の用意されたレシピを利用して簡単に実行できるサービスであること",
            "データベースエンジンのバージョンアップを自動化するサービスである",
            "BIダッシュボードへの直接のインポート機能のみを提供する"
        ],
        "answerIndex": 1,
        "explanation": "AWS Glue DataBrewは、ノーコードでデータを可視化・準備・クレンジングできるビジュアルデータプレパレーションツールです。コードを書かずにGUIで「欠損値の穴埋め」「フォーマット変換」「機密データのマスキング」などのレシピ（前処理ステップ）を定義・実行し、分析やML用の綺麗なデータセットを出力できます。",
        "keywords": ["Glue DataBrew", "ノーコード前処理", "データクレンジング"],
        "domain": "domain-2"
    },
    {
        "id": "anal-20",
        "category": "analytics",
        "question": "Kinesis Data Firehoseを使用してS3にイベントデータを保存していますが、データ量が多い時間帯にS3への小さなファイル書き込み（PUTリクエスト）がミリ秒単位で連発され、S3のAPI利用料金が高騰し、ファイルが細切れになってしまいました。この問題を回避するためのFirehose設定はどれですか？",
        "options": [
            "S3のバケットキーを無効化する",
            "Firehoseの「バッファリング条件（Buffer size を最大128MB、Buffer interval を最大900秒）」を設定し、データを十分にメモリに蓄積してから1つのファイルにまとめてS3へロードさせること",
            "Kinesis Data Streamsを前段から排除する",
            "S3ライフサイクル移行を設定する"
        ],
        "answerIndex": 1,
        "explanation": "Kinesis Data Firehoseは、S3等へのロードにおいて「バッファ（Buffering）」を設定できます。バッファサイズ（例: 5MB〜128MB）またはバッファ間隔（例: 60秒〜900秒）のいずれかの条件に達するまでデータを一時的にバッファリングし、1つの大きなファイルにマージ（結合）してS3に書き込みます。これにより、S3への書き込みリクエスト数とファイル数を減らし、コスト低減と後のクエリ（Athenaなど）の処理効率向上につながります。",
        "keywords": ["バッファリング設定", "S3コスト最適化", "Firehoseチューニング"],
        "domain": "domain-3"
    },
    {
        "id": "anal-21",
        "category": "analytics",
        "question": "AWSのマルチアカウント環境において、アカウントA（データレイク所有）のS3内にあるデータを、アカウントBのAthenaユーザーからクエリさせたいです。バケットポリシーを手動で書き並べることなく、メタデータ権限とデータアクセス権をクロスアカウントで安全かつ一元的に共有・制御するために用いるべきデータ共有手段はどちらですか？",
        "options": [
            "S3 Presigned URL のバッチ生成",
            "AWS Lake Formation のクロスアカウントデータ共有（アカウントBに対する共有データベース/テーブルとしての Grant 許可付与）",
            "VPC ピアリング接続の構成",
            "AWS RAM (Resource Access Manager) でのS3バケット自体の共有"
        ],
        "answerIndex": 1,
        "explanation": "AWS Lake Formationは、クロスアカウントでのデータレイク共有をネイティブサポートしています。アカウントAのLake Formation管理者が、アカウントB（または組織ID）を指定して、特定のテーブルや列のアクセス権を「Grant（付与）」します。アカウントB側では、共有されたテーブルへの「リソースリンク」を作成するだけで、アカウントBのAthenaから通常のローカルテーブルのように安全にクロスアカウントでクエリを実行できるようになります。",
        "keywords": ["AWS Lake Formation クロスアカウント", "データレイク共有", "メタデータ認可"],
        "domain": "domain-1"
    },
    {
        "id": "anal-22",
        "category": "analytics",
        "question": "Kinesis Data Streamsに蓄積される位置情報データストリームに対して、時系列の「1分ごとのローリング窓関数」などのストリーム処理を適用し、リアルタイムの車両の平均速度や特定エリア内のデバイス数を連続集計してDynamoDBに書き出したい場合、最も適したサーバーレス分析サービスはどれですか？",
        "options": [
            "Amazon Managed Service for Apache Flink (旧 Kinesis Data Analytics)",
            "Amazon Athena",
            "AWS Glue Studio",
            "Amazon EMR Spark"
        ],
        "answerIndex": 0,
        "explanation": "Amazon Managed Service for Apache Flink (旧 Kinesis Data Analytics) は、ストリーミングデータに対してApache Flinkフレームワークを使用した本格的なリアルタイムSQLクエリやJava/Scala処理を適用できるサービスです。時系列の「スライディングウィンドウ」や「タンブリングウィンドウ」などの窓関数処理を、ストリームデータの通過と同時に極めて低遅延で実行するのに最も適しています。",
        "keywords": ["Managed Service for Apache Flink", "時系列ストリーム分析", "窓関数"],
        "domain": "domain-2"
    },
    {
        "id": "anal-23",
        "category": "analytics",
        "question": "Amazon OpenSearch Serviceにおいて、マスターノードの可用性を最大化し、ネットワークの分断（スプリットブレイン）によるクラスタデータの不整合を防止するために、マルチAZデプロイ構成で推奨される「専用マスターノード (Dedicated Master Nodes)」の台数は何台ですか？",
        "options": [
            "2 台",
            "3 台 (3つのアベイラビリティーゾーンに1台ずつ配置)",
            "5 台",
            "クラスターの全データノードがマスターを兼ねるため 0 台"
        ],
        "answerIndex": 1,
        "explanation": "OpenSearchのクラスタ管理におけるスプリットブレインを回避するためには、マスターノードの数が「奇数」である必要があります。高可用性（マルチAZ）を満たすための最小推奨は「3」台です。3台の専用マスターノードをそれぞれ異なるアベイラビリティーゾーンに配置することで、1つのAZが完全に停止しても、残る2台でクォーラム（過半数の合意: 3台中の2台）を満たし、クラスタ構成を安全に維持できます。",
        "keywords": ["専用マスターノード", "スプリットブレイン防止", "OpenSearch高可用性"],
        "domain": "domain-1"
    },
    {
        "id": "anal-24",
        "category": "analytics",
        "question": "AWS Glue の ETL ジョブを定期実行してデータロード処理を行っています。ジョブの処理負荷やデータ量が増大し、デフォルトで割り当てられたコンピュートキャパシティ（DPU - Data Processing Units）では処理制限時間（タイムアウト）内にジョブが完了しなくなりました。最も簡単かつ迅速にジョブのスループットを向上させるためのGlue側のジョブ設定の調整はどちらですか？",
        "options": [
            "ジョブで使用する「ワーカータイプ (Worker Type)」をスケールアップし、「ワーカー数 (Number of Workers)」を増やして同時並行処理ユニット（DPU）を拡張すること",
            "AWS Glueのバージョンを 1.0 にダウングレードする",
            "S3のバケット暗号化を解除する",
            "ジョブブックマークを完全に無効化する"
        ],
        "answerIndex": 0,
        "explanation": "AWS GlueのETLジョブ性能は、「DPU（Data Processing Unit）」の割り当て量で決定されます。ジョブプロパティでワーカー数（Number of Workers）を増やしたり、より高スペックなワーカータイプ（G.1X, G.2Xなど）に変更することで、Glueが実行時にプロビジョニングするApache Sparkクラスタの並行処理ノードが動的に増え、ETL処理時間が劇的に短縮されます。",
        "keywords": ["DPU", "Glueワーカー数", "ETLパフォーマンスチューニング"],
        "domain": "domain-3"
    },
    {
        "id": "anal-25",
        "category": "analytics",
        "question": "Amazon Athenaで実行したSQLクエリの結果データは、デフォルトでどこにどのような形式で出力・保存されますか？",
        "options": [
            "Athenaのメモリ上にのみ保持され、ファイルとしては保存されない",
            "設定された「クエリ結果の保存場所」として指定された Amazon S3 バケットに、クエリIDに対応する CSV ファイル（およびメタデータファイル）として自動的に保存されること",
            "RDS PostgreSQLの内部テーブルに自動でインポートされる",
            "CloudWatch Logsの専用ストリームにJSON形式で出力される"
        ],
        "answerIndex": 1,
        "explanation": "Athenaはクエリの実行結果を、バケット設定またはワークグループ設定で指定した「S3出力場所 (Query Result Location)」に自動でCSVファイル（例: `[query-id].csv`）として永続保存します。この結果ファイルを別のコンポーネント（BIツールやLambdaなど）から直接読み込んで後処理に活用することが可能です。",
        "keywords": ["Athenaクエリ結果", "S3出力場所", "仕様"],
        "domain": "domain-2"
    },
    {
        "id": "anal-26",
        "category": "analytics",
        "question": "AWS Glueでビジュアルなワークフローを作成し、データの結合、フィルタリング、値の置換などのETLパイプラインを「コード（PythonやScala）を書かずに」直感的に設計・開発し、自動的にSparkコードを生成させたい場合に利用すべき推奨ツールはどれですか？",
        "options": [
            "Glue Data Catalogのみ",
            "AWS Glue Studio (グリュースタジオ)",
            "AWS CodePipeline",
            "AWS Glue DataBrew"
        ],
        "answerIndex": 1,
        "explanation": "AWS Glue Studioは、GlueでのETLジョブをビジュアルインターフェースでグラフィカルに開発・監視するためのWebツールです。データのソース（S3やJDBCなど）とターゲット、その間での結合（Join）やデータマッピング処理をキャンバス上に配置するだけで、Glueが内部で動作するスケーラブルなApache Sparkコードを自動生成してくれます。",
        "keywords": ["Glue Studio", "ビジュアルETL", "Sparkコード自動生成"],
        "domain": "domain-2"
    },
    {
        "id": "anal-27",
        "category": "analytics",
        "question": "Amazon Athenaで、開発者が誤って大容量データに対する非効率的なスキャンを行うクエリを投げた際、想定外の高額な課金が発生するリスクを組織的に防ぎたいです。アカウント内の「Athenaでのスキャンデータ量制限（クォータ制限）」をワークグループごとに強制するために必要な設定はどれですか？",
        "options": [
            "バケットポリシーでS3スキャンサイズを制限する",
            "Athenaの「ワークグループ (Workgroups)」を作成し、「クエリのデータ制限 (Data Limit / クエリあたりの最大スキャンデータ量)」を設定し、制限超過クエリを自動キャンセルさせること",
            "全開発者のIAMポリシーで `athena:StartQueryExecution` を拒否する",
            "S3 Selectをすべてのファイルに義務付ける"
        ],
        "answerIndex": 1,
        "explanation": "Athenaの「ワークグループ」を使用すると、ユーザーや用途ごとに実行環境を論理分離し、それぞれに対して「クエリ単位のデータスキャン上限（例: 10GB）」または「時間/日単位の累積スキャン上限」を定義できます。この上限に達したクエリは自動で強制終了されるため、クエリバグや不要なフルスキャンによる高額請求リスクを自動防御できます。",
        "keywords": ["Athenaワークグループ", "データ制限", "コスト管理ガードレール"],
        "domain": "domain-3"
    },
    {
        "id": "anal-28",
        "category": "analytics",
        "question": "Amazon EMR Serverless を選択してデータ分析を実行する際の、従来の Amazon EMR (EC2ベース) と比較した運用上の最大の利点はどちらですか？",
        "options": [
            "ライセンス料金が完全に無料になること",
            "ホストEC2インスタンスのプロビジョニング、Auto Scalingポリシーの設定、OSのパッチ適用などのクラスター運用管理が一切不要で、実行するアプリケーションコード（SparkやHiveジョブ）に必要なリソースのみが秒単位で自動調整されること",
            "EFSへのマウントが不要になること",
            "常に高速なネットワーク接続（ENA）が保証されること"
        ],
        "answerIndex": 1,
        "explanation": "EMR Serverlessは、EMRのサーバーレス展開オプションです。EC2ベースのEMRクラスタと異なり、ノード数やインスタンスタイプの管理、ジョブ負荷に応じたAuto Scalingのチューニングが完全に不要です。ジョブの開始と同時に必要な計算リソースが瞬時に払い出され、終了すると即座に破棄されるため、運用の管理オーバーヘッドが劇的に軽減します。",
        "keywords": ["EMR Serverless", "サーバーレス分析", "Spark/Hiveマネージド"],
        "domain": "domain-2"
    },
    {
        "id": "anal-29",
        "category": "analytics",
        "question": "Amazon MSK (Managed Streaming for Apache Kafka) において、ブローカーノードのディスク空き容量が不足しそうな状況を検知し、データが溢れてクラスタが停止するのを防ぐために有効にすべきMSK機能はどれですか？",
        "options": [
            "MSKのストレージ自動スケーリング (Storage Auto Scaling) の有効化",
            "VPCピアリングでのデータ退避",
            "MSK Connectの配置のみ",
            "Kinesis Data Streamsへのフェイルオーバーのみ"
        ],
        "answerIndex": 0,
        "explanation": "Amazon MSKは「ストレージオートスケーリング (Storage Auto Scaling)」をサポートしています。ブローカーごとの空きストレージ容量が減少したことを検知した際、MSKが自動的にストレージサイズを拡張し容量不足によるクラスタ停止を防ぎます（ただし、EBS容量の拡張は24時間に1回の制限があります）。",
        "keywords": ["MSK", "ストレージオートスケーリング", "運用自動化"],
        "domain": "domain-3"
    },
    {
        "id": "anal-30",
        "category": "analytics",
        "question": "Kinesis Data Streamsにおいて、アプリケーションがストリームにレコードを書き込む（PutRecord）際、パーティションキー（Partition Key）をすべてのレコードで「同一の固定値（例: “device-A”）」に固定して送信し続けた結果、特定のシャードのみにデータが偏ってしまい、そのシャードでスロットリングエラー（WriteProvisionedThroughputExceeded）が発生しました。この「ホットシャード」問題を根本的に解決するための正しいデータ書き込み設計はどれですか？",
        "options": [
            "コンシューマーの台数を10倍に増やす",
            "パーティションキーに「一意またはランダムな値（ユーザーID、トランザクションID、デバイスハッシュ値など）」を使用し、データがすべてのシャードへ均等にハッシュ分散されるように設計すること",
            "Kinesis Data Streamsの暗号化を有効化する",
            "Kinesis Data Firehoseへ移行する"
        ],
        "answerIndex": 1,
        "explanation": "Kinesis Data Streamsのルーティングロジックでは、送信された「パーティションキー」のハッシュ値に基づいて、データがどのシャードに格納されるかが決定されます。そのため、同じキーを使い続けると特定のシャードにすべてのデータが集中（ホットシャード）し、ストリーム全体としては空きがあってもスロットリングになります。キーにはカーディナリティ（値の分散度）が高い値を指定し、全シャードを均等に使うのが正しい設計です。",
        "keywords": ["パーティションキー", "ホットシャード", "Kinesis書き込み最適化"],
        "domain": "domain-3"
    },
    {
        "id": "anal-31",
        "category": "analytics",
        "question": "AWS Glue クローラー (Glue Crawlers) を実行してS3上のデータファイルのスキーマを検知する際、既存のメタデータカタログにすでに登録されているテーブルで「新しくカラムが追加された（スキーマが拡張された）」ことを検知しました。既存のデータを壊さずに、自動でカタログテーブルに新しい列の定義を追加させたい場合に設定すべきクローラーの動作ポリシーはどれですか？",
        "options": [
            "テーブルをドロップして新規再作成する",
            "スキーマ更新アクションとして「データストアから新しい列を追加し、既存の列は削除しない (Update the table definition in the data catalog)」を設定すること",
            "エラーを出してクローラーを異常終了させる",
            "スキーマ定義の変更を完全に無視する"
        ],
        "answerIndex": 1,
        "explanation": "Glue クローラーの設定では、スキーマ変更（列の追加や変更）時のアクションを定義できます。「Update the table definition」を選択しておくことで、古いデータを失うことなく、新しく追加された列情報を既存カタログテーブルの末尾に自動でマッピング定義して追記してくれます。",
        "keywords": ["Glueクローラー", "スキーマ更新ポリシー", "メタストア同期"],
        "domain": "domain-3"
    },
    {
        "id": "anal-32",
        "category": "analytics",
        "question": "Kinesis Data Streamsにおいて、ストリームの容量タイプとして「プロビジョンドモード」と「オンデマンドモード (On-Demand Mode)」のどちらを選ぶべきか判断基準に迷っています。オンデマンドモードの選定基準および動作特性として、正しいものはどれですか？",
        "options": [
            "オンデマンドモードは、事前にシャード数を見積もる必要がなく、トラフィックの変動（スパイク）に応じて自動的かつ即座に書き込み/読み取り容量をスケールアップ・ダウンさせるモードであること",
            "オンデマンドモードは手動でのシャード分割のみをサポートする",
            "オンデマンドモードはプロビジョンドモードよりも常に利用料金が安い",
            "オンデマンドモードはデータ保持期間が最大24時間に限定される"
        ],
        "answerIndex": 0,
        "explanation": "Kinesis Data Streamsのオンデマンドモードは、トラフィックが予測困難な場合に最適です。シャード数の事前計算や手動分割管理を行わずに、リクエスト量に応じて自動的にスループットをスケールアップ・ダウンさせます。プロビジョンドモードはトラフィックが予測可能で安定している場合にコスト効率が高くなります。",
        "keywords": ["Kinesisオンデマンド", "自動キャパシティ調整", "トラフィックスパイク対応"],
        "domain": "domain-3"
    },
    {
        "id": "anal-33",
        "category": "analytics",
        "question": "Amazon EMRクラスタで並列分散処理（Sparkジョブなど）を実行する際、一時的なデータの中間出力やノード間のシャッフルデータ用として各ワーカーノードに必要なローカルのI/O処理能力を高めるために、ノードインスタンスに対して行うべきストレージ上の最適化設定はどちらですか？",
        "options": [
            "HDFSのレプリケーション数を最大に増やす",
            "EMRインスタンス構成で「EBS最適化インスタンス」を選択し、必要に応じて大容量の gp3 または io3 ボリュームをアタッチしてI/Oスループットを確保すること",
            "すべてのボリュームを暗号化解除する",
            "S3 Glacierにデータを直接キャッシュさせる"
        ],
        "answerIndex": 1,
        "explanation": "EMRのワーカーノード（EC2）は、中間データの保持や処理キャッシュのために高いローカルストレージパフォーマンスを必要とします。インスタンス起動時にEBS最適化（EBS-optimized）構成を有効化し、高速なEBS（gp3など）をアタッチしてローカルI/Oのボトルネックを解消することが、EMRクラスタ全体の処理時間を短縮するベストプラクティスです。",
        "keywords": ["EMR EBS最適化", "ローカルストレージパフォーマンス", "Spark中間データ"],
        "domain": "domain-3"
    },
    {
        "id": "anal-34",
        "category": "analytics",
        "question": "S3データレイク上のデータを保護するため、AWS Lake Formationによるセキュリティ管理を設定しました。ある特定のユーザーグループに対して、「注文マスターテーブルの『クレジットカード番号』の列だけを非表示にし、それ以外の列の参照クエリ実行を許可する」というデータマスキング（列レベルの制御）を構築するために定義すべき Lake Formation のポリシー設定はどれですか？",
        "options": [
            "S3バケットポリシーで特定のパスを拒否する",
            "対象テーブルのアクセス許可（Permissions）設定において、「列ベースのアクセス許可 (Column-based permissions)」で特定の列（クレジットカード番号）のみを除外（Exclude）してGrantすること",
            "AthenaのSQL文で手動マスクさせる",
            "暗号化キーを無効にする"
        ],
        "answerIndex": 1,
        "explanation": "AWS Lake Formationは、「列レベルのセキュリティ (Column-Level Security)」をきめ細かくサポートしています。テーブルへのGrant権限付与の画面で、列フィルタリング（Exclude / Include）を使用して機密データ列を除外した状態で権限を定義することで、該当ユーザーがAthenaから `SELECT *` クエリを投げても、除外されたクレジットカード番号の列はデータ結果から自動でマスク（除外）され、情報漏洩を防ぎます。",
        "keywords": ["Lake Formation", "列レベルのセキュリティ", "データマスキング"],
        "domain": "domain-1"
    },
    {
        "id": "anal-35",
        "category": "analytics",
        "question": "Apache Flink または Apache Spark ワークロードを実行するデータエンジニアが、AWS環境で構築された「Glueデータカタログ」のスキーマ定義情報を、外部のサードパーティツールやオンプレミスの Hadoop クラスターからも共通のメタストアリポジトリとして参照・連携させたい場合、どのような設定が正しいですか？",
        "options": [
            "データカタログをS3にテキストエクスポートして定期送信する",
            "外部システムの Hive 構成設定（`hive-site.xml`）に AWS Glue Data Catalog 用のメタストア用コネクタクラスを指定し、AWSへのアクセス権限ポリシーを割り当てること",
            "外部からはGlueカタログへの直接アクセスは不可能であるため、オンプレミスに完全複製する",
            "VPCピアリングのみで動作する"
        ],
        "answerIndex": 1,
        "explanation": "AWS Glue データカタログは、Apache Hive メタストアと互換性を持っています。EMRだけでなく、外部のHadoopクラスタやApache Spark/Flinkシステムであっても、設定ファイル（`hive-site.xml`など）を変更してGlue Data Catalogをメタストアクライアントとして指定することで、インターネット/専用線経由でAWS上のデータ定義を一元参照し、データをSQL等で直接扱えるようになります。",
        "keywords": ["Glue Data Catalog", "Hiveメタストア互換", "外部システム連携"],
        "domain": "domain-1"
    },
    {
        "id": "anal-36",
        "category": "analytics",
        "question": "Amazon EMRにおいて、データ処理が完了した段階で自動的にクラスター自体を破棄（終了）させて、無駄なアイドル時間に対するEC2料金の発生を完全に防止するために、ジョブ起動時またはEMR構成上で設定すべき動作モードはどれですか？",
        "options": [
            "EMR Serverlessへの移行のみ",
            "「一時的（ステップ）クラスター (Transient Clusters)」モードで起動し、最後のステップ処理完了時に自動シャットダウンするように設定すること",
            "EC2 Auto Scalingの自動縮小のみ",
            "マスターノードの手動シャットダウン"
        ],
        "answerIndex": 1,
        "explanation": "EMRには「持続的（Persistent）クラスター」と「一時的（Transient）クラスター」があります。バッチジョブのように特定の処理（ステップ）を実行して終了させる場合は、一時的クラスターモードで起動します。これらは、割り当てられたすべての「ステップ」ジョブが正常または異常終了した時点で、EMRが自動的に全リソースをシャットダウン・破棄するため、アイドル状態での放置コストを完全に排除できます。",
        "keywords": ["EMR Transient Clusters", "一時的クラスター", "自動クリーンアップ"],
        "domain": "domain-3"
    },
    {
        "id": "anal-37",
        "category": "analytics",
        "question": "Amazon OpenSearch Serviceにおいて、一部の特定のインデックスに対する検索クエリが急増し、特定のデータノードのCPU負荷が100%に達してしまいました。インデックスの構造を最適化し、クエリ処理を複数のノードに物理的に分散させてスループットを高めるためのOpenSearch側のベストプラクティスはどちらですか？",
        "options": [
            "すべてのインデックスを削除して新規作成する",
            "インデックス作成時に「レプリカ数 (Replicas Count)」を増やして各データノードに複製コピーを配置させ、検索クエリの読み取りアクセスをレプリカ間で負荷分散させること",
            "マスターノードの数を増やす",
            "OpenSearchをシングルノード構成に変更する"
        ],
        "answerIndex": 1,
        "explanation": "OpenSearchのインデックスは「プライマリシャード」と「レプリカシャード（コピー）」に分割されます。検索クエリ（Read）の要求は、プライマリとレプリカのどちらからでも読み取ることができます。そのため、レプリカ数（複製コピー）を増やすことで、クエリが複数のデータノードにあるレプリカシャードに分散され、読み取りの並行処理能力（スループット）が劇的に向上します。",
        "keywords": ["レプリカシャード", "OpenSearchパフォーマンス", "検索クエリ分散"],
        "domain": "domain-3"
    },
    {
        "id": "anal-38",
        "category": "analytics",
        "question": "Amazon QuickSightにおいて、社内用の分析ダッシュボードを社外の顧客や一般のWebサイトのポータル画面に埋め込み（Embed）、ユーザーがQuickSightのコンソールにログインすることなく、グラフを参照できるようにしたい場合に推奨される機能は何ですか？",
        "options": [
            "QuickSightのユーザー資格情報をWebページに直書きする",
            "QuickSight の「匿名埋め込み（Anonymous Embedding）」または「フェデレーションID埋め込み（登録ユーザー埋め込み）」機能を使用すること",
            "ダッシュボードのスクリーンショットをS3に定時エクスポートする",
            "API Gatewayのプロキシ転送のみ"
        ],
        "answerIndex": 1,
        "explanation": "QuickSightは「ダッシュボードの埋め込み (Embedded Dashboards)」をサポートしています。社外公開向けには、ユーザー認証なしで閲覧させる「匿名埋め込み（1セッションごとの従量課金）」や、CognitoやSAMLで認証済みのユーザーに個別のデータを見せる「フェデレーテッド埋め込み（ユーザー登録型）」があり、これらにより安全かつ綺麗なBIダッシュボードを外部ポータルサイト内にシームレスに組み込めます。",
        "keywords": ["QuickSight埋め込み", "ポータルダッシュボード", "匿名埋め込み"],
        "domain": "domain-2"
    },
    {
        "id": "anal-39",
        "category": "analytics",
        "question": "AWS Glueで構築されるデータカタログ（Data Catalog）を他のAWSアカウントに「共有」したいです。アカウント間での共有を最も安全に管理するために利用すべき Lake Formation の共有手段はどちらですか？",
        "options": [
            "データカタログのKMSキーを別アカウントのdefaultキーに書き換える",
            "AWS Lake Formation を使用して、別アカウントの「プリンシパル（アカウントID等）」に対して直接データベースやテーブルの共有アクセス権限（Grant）を定義すること。相手側アカウントではリソースリンクを作成して参照すること",
            "データカタログをCSV形式で別アカウントのS3に定期同期する",
            "AWS RAM (Resource Access Manager) のみの共有"
        ],
        "answerIndex": 1,
        "explanation": "Lake Formationを利用したデータカタログの共有が、クロスアカウントにおける標準の手法です。S3上のデータ実体への直接アクセス許可（バケットポリシー）を別アカウントに開放する手間がなく、Lake Formationがメタデータおよびデータアクセスの権限中継を一括で行うため、一元管理が容易で安全性が高いです。",
        "keywords": ["Lake Formation データ共有", "クロスアカウントカタログ共有", "リソースリンク"],
        "domain": "domain-1"
    },
    {
        "id": "anal-40",
        "category": "analytics",
        "question": "AWS Glue Studioを使用して作成されたETLジョブにおいて、エラー処理やログ出力をカスタマイズしたいです。ビジュアル画面でジョブを作成した後に、自動生成されたコードをローカル環境や開発ノートブック（Jupyter）に取り込んで、データエンジニアが直接編集・テストを実行するために連携すべきGlueの機能はどちらですか？",
        "options": [
            "Glue ジョブブックマークの無効化",
            "AWS Glue 開発エンドポイント (Development Endpoint) または インタラクティブセッション (Interactive Sessions) の設定",
            "CodePipelineとの強制連携",
            "Systems Manager Run Commandのみ"
        ],
        "answerIndex": 1,
        "explanation": "AWS Glue インタラクティブセッション (Interactive Sessions) や開発エンドポイントを使用すると、使い慣れたJupyter NotebookなどのIDEから、AWS上のGlue実行環境に対して直接対話的（インライン）にETLコードのテスト実行、デバッグ、スキーマの確認を迅速に行うことができます。これにより、開発時のトライアンドエラーの時間が劇的に短縮されます。",
        "keywords": ["Interactive Sessions", "Glue開発エンドポイント", "デバッグ"],
        "domain": "domain-3"
    },
    {
        "id": "anal-41",
        "category": "analytics",
        "question": "AWS Lake Formationにおいて、リソース（データベース、テーブルなど）に対して個別のユーザーやグループの権限（Grant）を都度設定する代わりに、メタデータに付与された「タグ名（例: Classification=Confidential）」に基づいてアクセス可否を自動的かつ動的にマッピング・認可させる最新のアクセス制御方式は何ですか？",
        "options": [
            "IAM Permission Boundary",
            "Lake Formation タグベースのアクセス制御 (LF-TBAC - Tag-Based Access Control)",
            "VPCエンドポイントポリシー",
            "Organizations SCP"
        ],
        "answerIndex": 1,
        "explanation": "LF-TBAC (Lake Formation Tag-Based Access Control) は、メタデータ（DBやテーブル、列）に対して定義した「LFタグ（Lake Formation Tags）」に基づいてアクセス権限を一括管理する方式です。ユーザーやロール側にもLFタグの許可条件をアタッチしておくことで、データソースが追加されてもタグを付与するだけで自動的に権限が適用されるため、数千のテーブルを持つ大規模なデータレイクの運用管理コストが劇的に削減されます。",
        "keywords": ["LF-TBAC", "タグベースのアクセス制御", "データレイクガバナンス"],
        "domain": "domain-1"
    },
    {
        "id": "anal-42",
        "category": "analytics",
        "question": "Amazon Managed Streaming for Apache Kafka (Amazon MSK) において、ブローカーノードとの通信（プロデューサーおよびコンシューマーからの接続）におけるアクセス認証に「IAM」を使用して認証情報管理を簡素化したいです。MSK側で構成すべき設定はどれですか？",
        "options": [
            "MSKの暗号化を完全にオフにする",
            "MSKクラスタのセキュリティ設定で「IAM アクセス制御 (IAM Access Control)」を有効にし、クライアント側にも MSK 用の IAM ライブラリを導入して接続認証を行うこと",
            "ブローカーのIPアドレスをセキュリティグループで一括許可するのみ",
            "Cognito認証の有効化のみ"
        ],
        "answerIndex": 1,
        "explanation": "Amazon MSKは、アクセス制御のオプションとして「IAM アクセス制御 (IAM Access Control)」をサポートしています。認証パスワード（SASL/SCRAM）やTLSクライアント証明書を独自管理する代わりに、AWSの標準のIAMポリシーおよび一時的認証情報をそのままKafkaの認証に使用できるため、AWS内のリソース（EC2やFargate等）からの接続管理が劇的に安全になります。",
        "keywords": ["MSK IAMアクセス制御", "Kafka認証", "セキュリティ統合"],
        "domain": "domain-1"
    },
    {
        "id": "anal-43",
        "category": "analytics",
        "question": "Amazon Athenaにおいて、データ分析チームごとに使用できる「クエリの実行予算（最大スキャンデータ量クォータ制限）」を個別に管理し、さらに各チーム専用の「S3結果出力フォルダ」や暗号化設定を強制的にロック・適用させるために作成すべきAthenaコンポーネントはどれですか？",
        "options": [
            "AWS Glue Data Catalogの共有設定",
            "Athena ワークグループ (Workgroups) の個別の作成と設定制限の適用",
            "S3バケットポリシーの分離のみ",
            "IAMグループポリシーの直接編集のみ"
        ],
        "answerIndex": 1,
        "explanation": "Athena ワークグループ (Workgroups) は、クエリ実行環境の分離コンポーネントです。各チームのIAMポリシーで特定のワークグループ（例: `athena:WorkGroup` 条件キー）の使用のみを許可します。ワークグループ設定で「クエリ結果の場所の強制」や「最大スキャンダクォータ」を定義しておくことで、チームメンバーが勝手に設定を変更して勝手な場所に結果を出力したり、巨大なクエリを実行して予算を浪費したりするのを防ぎます。",
        "keywords": ["Athenaワークグループ", "実行環境分離", "コスト管理ガードレール"],
        "domain": "domain-3"
    },
    {
        "id": "anal-44",
        "category": "analytics",
        "question": "Amazon EMRクラスタを起動する際、Hadoopのエコシステムツール（Hue、Ganglia、Zeppelinなど）をマスターノードに追加してインストールさせたいです。クラスター起動テンプレートをカスタマイズして、起動直後のプロビジョニングフェーズでこれらのカスタムアプリケーションやライブラリを全ノードに自動インストールさせるための機能はどれですか？",
        "options": [
            "AWS Systems Manager Run Command",
            "ブートストラップアクション (Bootstrap Actions)",
            "ユーザーデータスクリプトのみ",
            "EMR ステップジョブの追加"
        ],
        "answerIndex": 1,
        "explanation": "EMRの「ブートストラップアクション (Bootstrap Actions)」は、EMRクラスターのノードがプロビジョニングされ、Hadoop等のコアサービスが開始される「直前」に、すべてのノードで実行されるカスタムスクリプトです。S3に置いたシェルスクリプトを指定することで、追加のソフトウェアパッケージのインストール、OS構成ファイルの変更、環境変数の設定などを自動的に実行できます。",
        "keywords": ["ブートストラップアクション", "EMRノード初期化", "パッケージインストール"],
        "domain": "domain-2"
    },
    {
        "id": "anal-45",
        "category": "analytics",
        "question": "S3データレイク上の生ログデータ（CSV/JSON）を分析用に変換します。AWS Glue ETLジョブ（Spark）を使用してデータを「Parquet（列指向フォーマット）」に変換し、日付でパーティション化して再書き出しを行います。この変換ETL処理をスケジュールベースで自動化し、依存関係（クローラー完了後にETLを動かすなど）をフロー図としてビジュアルに管理・監視できるGlueの機能はどれですか？",
        "options": [
            "Glue Studio",
            "AWS Glue ワークフロー (Glue Workflows)",
            "AWS CodePipeline",
            "Step Functionsのみ"
        ],
        "answerIndex": 1,
        "explanation": "AWS Glue ワークフロー (Glue Workflows) を使用すると、複数のクローラー、ETLジョブ、およびトリガーの依存関係をビジュアルにオーケストレーションできます。クローラーが終了したイベント（Success）を検知して次のETLジョブをキックする、といった一連の処理の流れを一元監視でき、再試行や監視の管理コストを大幅に削減できます。",
        "keywords": ["Glueワークフロー", "ETLオーケストレーション", "依存関係制御"],
        "domain": "domain-2"
    },
    {
        "id": "anal-46",
        "category": "analytics",
        "question": "Amazon MSK (Managed Streaming for Apache Kafka) において、既存のオンプレミスの Apache Kafka に蓄積されたストリームデータを、AWS上の MSK クラスタへミラーリング（複製・同期）してリアルタイム移行させたい場合、使用すべき Apache Kafka 標準の連携ツールは何ですか？",
        "options": [
            "AWS DataSync",
            "Apache Kafka MirrorMaker (または MirrorMaker 2.0)",
            "AWS Database Migration Service (DMS)",
            "VM Import/Export"
        ],
        "answerIndex": 1,
        "explanation": "Apache Kafka MirrorMakerは、Kafkaクラスタ間でトピックのデータをレプリケート（ミラーリング）するためのオープンソースツールです。オンプレミスのKafkaとAWS上のAmazon MSKの間にMirrorMaker（MSK Connectなどを介して実行可能）を構成することで、既存のメッセージトリームをダウンタイムなしでリアルタイムにAWS側へ複製同期できます。",
        "keywords": ["MirrorMaker", "Apache Kafka移行", "ストリームレプリケーション"],
        "domain": "domain-4"
    },
    {
        "id": "anal-47",
        "category": "analytics",
        "question": "Amazon Athenaにおいて、データソースがAmazon S3データレイク内だけでなく、別のアカウントのAmazon DocumentDBやオンプレミスのMySQLデータベースにも存在します。これらS3以外の外部データソースに対しても、データのロードを一切行わず、Athenaの使い慣れたSQLクエリから直接 Federated Query を実行して分析するための機能は何ですか？",
        "options": [
            "Redshift Spectrum",
            "Athena データソースコネクタ (Athena Federated Query / Lambda統合)",
            "AWS Glue DataBrew",
            "API Gatewayの統合"
        ],
        "answerIndex": 1,
        "explanation": "Athena Federated Query（データソースコネクタ）を使用すると、S3以外のリレーショナル、NoSQL、グラフ、カスタムデータソースに対してSQLクエリを実行できます。裏側でAWS Lambdaが仲介コネクタとして機能し、対象DBからクエリに合致するデータを抽出してAthenaに引き渡します。これにより、分散したデータソース間の横断クエリが容易になります。",
        "keywords": ["Athena Federated Query", "データソースコネクタ", "分散クエリ"],
        "domain": "domain-2"
    },
    {
        "id": "anal-48",
        "category": "analytics",
        "question": "Amazon EMRクラスターにおいて、Apache Sparkジョブの動作ログやシステムエラーログ、クラスター構成履歴ログが、マスターノードの終了（Terminate）に伴って永久に消失してしまうのを防ぎ、一元的に永続化・デバッグ分析するために設定すべきEMRの標準ログ保存構成はどれですか？",
        "options": [
            "マスターノードに大容量EBSをアタッチするのみ",
            "EMRクラスターの作成時に「ログアーカイブ (Log Archiving) / Amazon S3 への自動ログエクスポート」を設定すること",
            "すべてのワーカーノードで CloudWatch Agent を手動インストールする",
            "EMR Serverlessへの移行のみ"
        ],
        "answerIndex": 1,
        "explanation": "EMRは、クラスター作成時に「Amazon S3 へのログ保存」を設定できます。これを有効にしておくと、各ノードで生成されるHadoop/Sparkの各種実行ログ（YARNログ、Spark履歴など）が定期的に（5分間隔で）指定したS3バケットに同期・アップロードされます。これにより、EC2インスタンスがシャットダウンして破棄された後でも、S3のログを参照してデバッグが可能です。",
        "keywords": ["EMRログ保存", "S3ログアーカイブ", "クラスターデバッグ仕様"],
        "domain": "domain-3"
    },
    {
        "id": "anal-49",
        "category": "analytics",
        "question": "AWS Glue ETLジョブでデータを読み書きする際、インターネットゲートウェイを介さずに、プライベートVPC内にあるJDBC対応データベース（Amazon RDSなど）に接続するために構成すべき Glue の接続設定は何ですか？",
        "options": [
            "VPC ピアリング接続",
            "Glue コネクション (AWS Glue Connection / Network タイプ)",
            "AWS PrivateLink エンドポイントのみ",
            "インターネット上の直接ルート開放"
        ],
        "answerIndex": 1,
        "explanation": "AWS Glue ETLジョブはサーバーレス環境で実行されますが、VPC内のデータベースにアクセスするために「Glue コネクション (AWS Glue Connection)」を作成できます。これにVPCのサブネットとセキュリティグループを指定することで、GlueのクローラーやジョブがVPC内のENI（Elastic Network Interface）を介してプライベート接続できるようになります。",
        "keywords": ["Glue Connection", "VPC内DBアクセス", "ETLネットワーク"],
        "domain": "domain-2"
    },
    {
        "id": "anal-50",
        "category": "analytics",
        "question": "Amazon Kinesis Data FirehoseからS3バケットへストリーミングデータを配信・ロードする際、受信したJSONデータをそのままS3へ落とすのではなく、自動で高効率な列指向の「Apache Parquet」または「Apache ORC」形式へリアルタイムでインライン変換して保存させたいです。この形式変換機能を利用するために必要となるスキーマ定義の連携先はどちらですか？",
        "options": [
            "KMSキーポリシー",
            "AWS Glue データカタログ (Data Catalog) のテーブル定義指定",
            "S3バケットポリシー",
            "API Gatewayの統合"
        ],
        "answerIndex": 1,
        "explanation": "Kinesis Data Firehoseの「データ形式変換 (Data Format Conversion)」を有効にするには、データのスキーマ（データ構造定義）情報が必要です。Firehoseは「AWS Glue データカタログ」と連携し、指定されたテーブルスキーマ情報を読み取って、入力されるJSON行を自動的に対応するParquet/ORC形式のブロックに圧縮・変換してからS3に格納します。クエリ（Athenaなど）のスキャン効率とコストが劇的に改善します。",
        "keywords": ["Kinesis Data Firehose", "データ形式変換", "Glue Data Catalog連携"],
        "domain": "domain-2"
    }
]
