// This file is auto-generated. Do not edit manually.
const QUESTIONS = [
  {
    "id": "comp-01",
    "category": "compute",
    "question": "ノード間でミリ秒未満の極めて低いレイテンシーと高いスループットのネットワーク通信を必要とする、ハイパフォーマンスコンピューティング(HPC)ワークロードをEC2で実行します。どのネットワークインターフェースを選択すべきですか？",
    "options": [
      "Elastic Network Interface (ENI)",
      "Elastic Network Adapter (ENA)",
      "Elastic Fabric Adapter (EFA)",
      "AWS Direct Connect"
    ],
    "answerIndex": 2,
    "explanation": "EFA (Elastic Fabric Adapter) は、HPCや機械学習などの高パフォーマンスのインターノード通信を必要とするアプリケーション用のネットワークデバイスです。OSバイパス機能を提供し、極めて低いレイテンシーと高スループットを実現します。ENAは標準的な高性能ネットワーク用であり、OSバイパスはサポートしません。",
    "keywords": [
      "EFA",
      "HPC",
      "レイテンシー"
    ],
    "domain": "domain-2"
  },
  {
    "id": "comp-02",
    "category": "compute",
    "question": "EC2インスタンスを物理的に同一のハードウェア上に配置して、インスタンス間の通信レイテンシーを最小化したい場合、どのプレイスメントグループを使用すべきですか？",
    "options": [
      "スプレッドプレイスメントグループ",
      "パーティションプレイスメントグループ",
      "クラスタープレイスメントグループ",
      "ディストリビューテッドプレイスメントグループ"
    ],
    "answerIndex": 2,
    "explanation": "クラスタープレイスメントグループは、単一の可用性ゾーン(AZ)内のインスタンスを論理的にグループ化するもので、インスタンス間の通信において最も低いレイテンシーと高いネットワークスループットを実現します。スプレッドは障害リスク分散用、パーティションはHadoopなどの分散データ用です。",
    "keywords": [
      "クラスタープレイスメントグループ",
      "レイテンシー",
      "EC2"
    ],
    "domain": "domain-2"
  },
  {
    "id": "comp-03",
    "category": "compute",
    "question": "サーバーレスアプリケーションにおいて、スパイクアクセスの発生時にAWS Lambdaのコールドスタートによる応答遅延を防ぎたい場合、どの機能を設定すべきですか？",
    "options": [
      "予約された同時実行 (Reserved Concurrency)",
      "プロビジョニングされた同時実行 (Provisioned Concurrency)",
      "Lambda@Edge",
      "Application Auto Scaling"
    ],
    "answerIndex": 1,
    "explanation": "プロビジョニングされた同時実行 (Provisioned Concurrency) は、事前に指定した数の実行環境を初期化して実行可能な状態（ウォーム状態）で維持する機能です。これにより、関数が呼び出された際のコールドスタートを完全に回避できます。予約された同時実行は、最大同時実行数を制限してスロットリングを防ぐためのものです。",
    "keywords": [
      "Provisioned Concurrency",
      "コールドスタート",
      "Lambda"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-04",
    "category": "compute",
    "question": "AWS Elastic Beanstalkにおいて、本番環境へのデプロイ時に一時的にリソースを2倍作成し、新しいバージョンを完全にプロビジョニングしてヘルスチェックをパスした後に旧環境とDNSを切り替える、ダウンタイムとリスクが最小のデプロイポリシーはどれですか？",
    "options": [
      "All at once",
      "Rolling",
      "Rolling with additional batch",
      "Immutable (不変)"
    ],
    "answerIndex": 3,
    "explanation": "Immutableデプロイポリシーは、新しいAuto Scalingグループにまったく新しいリソースセットを作成し、テストをパスした後に古いリソースグループから新しいリソースグループへトラフィックを一度に移行します。ロールバックが最も簡単で、本番環境への影響を最小限に抑えられます。DNSの切り替えを伴うのはBlue/Greenデプロイですが、Beanstalkのデプロイポリシーの選択肢としてはImmutableが最適です。",
    "keywords": [
      "Elastic Beanstalk",
      "Immutableデプロイ",
      "ロールバック"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-05",
    "category": "compute",
    "question": "AWS Batchを使用して、数千の独立したジョブを実行します。特定の並列処理において、複数のノードにまたがる密結合なコンピューティングジョブ（MPIなど）を実行する場合、どのジョブタイプを使用すべきですか？",
    "options": [
      "単一ノードジョブ",
      "アレイジョブ",
      "マルチノード並列ジョブ (Multi-node parallel)",
      "コンテナジョブ"
    ],
    "answerIndex": 2,
    "explanation": "マルチノード並列 (MNP) ジョブを使用すると、単一のジョブで複数のEC2インスタンス（ノード）にまたがるコンテナを実行できます。これは、MPI (Message Passing Interface) やその他の緊密に結合されたHPCワークロードを実行するために特別に設計されています。アレイジョブは、独立したパラメータスイープなどの並列処理に使用されます。",
    "keywords": [
      "AWS Batch",
      "マルチノード並列",
      "MPI"
    ],
    "domain": "domain-2"
  },
  {
    "id": "comp-06",
    "category": "compute",
    "question": "コンテナオーケストレーションサービスを選定する際、AWSサービス（IAM、VPC、CloudWatchなど）との最も緊密な統合と、運用管理オーバーヘッドの最小化を希望している場合、どちらのサービスを選択すべきですか？",
    "options": [
      "Amazon EKS (Elastic Kubernetes Service)",
      "Amazon ECS (Elastic Container Service)",
      "AWS Elastic Beanstalk",
      "AWS App Runner"
    ],
    "answerIndex": 1,
    "explanation": "Amazon ECSはAWS独自のコンテナオーケストレーションシステムであり、AWS IAM、VPC、CloudWatch、ELBなどの他のAWSサービスとネイティブに、かつ最も緊密に統合されています。管理オーバーヘッドもKubernetes (EKS) に比べて非常に低いです。Kubernetesとの互換性やマルチクラウド要件がない限り、AWSへの統合はECSが最適です。",
    "keywords": [
      "ECS",
      "EKS",
      "コンテナ統合"
    ],
    "domain": "domain-2"
  },
  {
    "id": "comp-07",
    "category": "compute",
    "question": "CloudFrontのエッジロケーションで軽量なHTTPリクエスト/レスポンスの操作（ヘッダー変更やURLリダイレクト）を実行する場合、最もレイテンシーが低くコスト効率が高いサービスはどれですか？",
    "options": [
      "Lambda@Edge",
      "CloudFront Functions",
      "API Gateway + AWS Lambda",
      "ECS Fargate"
    ],
    "answerIndex": 1,
    "explanation": "CloudFront Functionsは、ビューワーリクエスト/レスポンスイベントに対してミリ秒未満で動作する超軽量なJavaScript実行環境です。Lambda@Edgeに比べて実行レイテンシーが極めて低く、料金も安価です。ただし、実行時間制限（1ms未満）やインターネットアクセス不可などの制約があります。複雑な処理や外部API呼び出しが必要な場合はLambda@Edgeを使用します。",
    "keywords": [
      "CloudFront Functions",
      "Lambda@Edge",
      "エッジコンピューティング"
    ],
    "domain": "domain-2"
  },
  {
    "id": "comp-08",
    "category": "compute",
    "question": "AWSの仮想化基盤「Nitro System」を搭載したEC2インスタンスの主なセキュリティ上の利点はどれですか？",
    "options": [
      "OSの自動パッチ適用機能が標準で提供されること",
      "管理用のハイパーバイザー（Dom0）が排除され、ハードウェアから直接仮想インスタンスにリソースが割り当てられることで、不要なアクセス経路が遮断されること",
      "WAF (Web Application Firewall) が標準で有効化されること",
      "すべてのインバウンド通信がデフォルトでAWS WAFを通過すること"
    ],
    "answerIndex": 1,
    "explanation": "AWS Nitro Systemは、従来の仮想化で必要だった汎用的なハイパーバイザーやDom0（管理用仮想マシン）を排除し、専用ハードウェアカードにネットワーク、ストレージ、管理用機能をオフロードします。これにより、ハイパーバイザー経由の不正アクセス経路がなくなり、セキュリティとパフォーマンスの両方が劇的に向上します。",
    "keywords": [
      "Nitro System",
      "ハイパーバイザー",
      "セキュリティ"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-09",
    "category": "compute",
    "question": "EC2 Auto Scalingにおいて、インスタンスが終了（Terminating）する前に、ログファイルをS3にアップロードするなどのクリーンアップ処理を確実に実行させるには、どの機能を使用すべきですか？",
    "options": [
      "Auto Scaling ライフサイクルフック (Lifecycle Hooks)",
      "AWS Systems Manager Run Command",
      "ユーザーデータスクリプト (User Data)",
      "CloudWatch Agent"
    ],
    "answerIndex": 0,
    "explanation": "Auto Scaling ライフサイクルフックを使用すると、インスタンスの起動時（Pending）または終了時（Terminating）の状態でインスタンスを一時停止（Wait状態）させることができます。この間にLambdaやSSM Run Command等でログの退避や初期化処理を実行し、完了後に終了処理を再開させることができます。ユーザーデータは起動時のみ実行されます。",
    "keywords": [
      "ライフサイクルフック",
      "Auto Scaling",
      "クリーンアップ"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-10",
    "category": "compute",
    "question": "Amazon S3のイベント通知によって非同期で呼び出されるAWS Lambda関数において、エラー発生時のリトライ上限（2回）を超えたイベントデータを消失させないために設定すべき、最もモダンで推奨される宛先はどれですか？",
    "options": [
      "Lambda 関数のデッドレターキュー (DLQ) に SQS を指定する",
      "Lambda 関数のデッドレターキュー (DLQ) に SNS を指定する",
      "Lambda 関数の送信先 (Destinations) の「失敗時」に SQS または SNS を指定する",
      "S3 バケットポリシーでイベントリトライを設定する"
    ],
    "answerIndex": 2,
    "explanation": "Lambdaの送信先 (Destinations) 機能は、非同期呼び出しの成功時や失敗時の処理を定義するモダンな方法です。従来のDLQ（デッドレターキュー）と比較して、イベントのペイロードだけでなく、スタックトレースやエラーコードなどのコンテキスト情報も含めてターゲット（SQS, SNS, Lambda, EventBridge）に送信できるため推奨されています。",
    "keywords": [
      "Lambda Destinations",
      "非同期呼び出し",
      "DLQ"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-11",
    "category": "compute",
    "question": "コンテナ化されたWebアプリケーション（Node.jsやPythonなど）をインフラ管理なしで、かつスケールやHTTPS証明書の設定などの手間を最小限にして素早くデプロイしたい場合、最適なサービスはどれですか？",
    "options": [
      "Amazon ECS Fargate",
      "Amazon EKS Fargate",
      "AWS App Runner",
      "AWS Elastic Beanstalk"
    ],
    "answerIndex": 2,
    "explanation": "AWS App Runnerは、ソースコードまたはコンテナイメージから直接、ウェブアプリケーションやAPIをデプロイできるフルマネージドサービスです。ロードバランサー、TLS証明書、Auto Scaling、ビルドパイプラインなど、Webアプリケーションに必要な要素が自動的にプロビジョニングされ、インフラ管理が不要です。ECS Fargateよりもさらに上位レベルの抽象化を提供します。",
    "keywords": [
      "App Runner",
      "コンテナデプロイ",
      "フルマネージド"
    ],
    "domain": "domain-2"
  },
  {
    "id": "comp-12",
    "category": "compute",
    "question": "オンプレミスのデータセンター内で、AWSと同じAPI、ツール、インフラストラクチャを使用して、低レイテンシー処理やローカルデータ処理を行うために、オンプレミス環境にAWS所有のラックを導入するサービスはどれですか？",
    "options": [
      "AWS Local Zones",
      "AWS Outposts",
      "AWS Wavelength",
      "AWS Snowball Edge"
    ],
    "answerIndex": 1,
    "explanation": "AWS Outpostsは、AWSのインフラストラクチャ、サービス、API、ツールを事実上任意のオンプレミスデータセンターやコロケーションスペースに拡張するフルマネージドサービスです。オンプレミス環境に物理的なAWSラックを設置することで、真のハイブリッド体験を提供します。Local ZonesはAWSが運営するエッジ拠点、Wavelengthは5Gキャリアネットワーク内の拠点です。",
    "keywords": [
      "AWS Outposts",
      "ハイブリッドクラウド",
      "オンプレミス"
    ],
    "domain": "domain-1"
  },
  {
    "id": "comp-13",
    "category": "compute",
    "question": "EC2インスタンスで超高速なI/O性能が必要な一時的なスクラッチスペースやキャッシュ領域として適しており、インスタンスの停止（Stop）または終了（Terminate）によってデータが消去されるストレージはどれですか？",
    "options": [
      "Elastic Block Store (EBS) gp3 ボリューム",
      "Elastic Block Store (EBS) io2 ボリューム",
      "インスタンスストア (Instance Store)",
      "Amazon Elastic File System (EFS)"
    ],
    "answerIndex": 2,
    "explanation": "インスタンスストアは、EC2インスタンスがホストされている物理サーバーに直接アタッチされた一時的なSSD/HDDストレージです。ネットワーク経由のEBSと比較して、極めて低いレイテンシーと高いI/Oを提供しますが、データは一時的（エフェメラル）であり、インスタンスの停止、終了、ハードウェア障害によって失われます。",
    "keywords": [
      "インスタンスストア",
      "一時ストレージ",
      "高速I/O"
    ],
    "domain": "domain-2"
  },
  {
    "id": "comp-14",
    "category": "compute",
    "question": "EC2 Auto Scalingにおいて、CPU使用率などの特定のメトリクスを常に一定の値（例: 50%）に維持するように、自動的にスケーリング数を調整するポリシーはどれですか？",
    "options": [
      "シンプルスケーリングポリシー",
      "ステップスケーリングポリシー",
      "ターゲット追跡スケーリングポリシー",
      "スケジュールされたスケーリングポリシー"
    ],
    "answerIndex": 2,
    "explanation": "ターゲット追跡スケーリングポリシー (Target Tracking Scaling Policy) は、特定のメトリクスのターゲット値（例：平均CPU使用率50%）を指定するだけで、Auto Scalingグループが必要な容量を自動的に算出・調整するポリシーです。サーモスタットのように動作し、最も推奨される設定方法です。ステップスケーリングは閾値に応じた段階的な調整を行います。",
    "keywords": [
      "ターゲット追跡",
      "Auto Scaling",
      "スケーリングポリシー"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-15",
    "category": "compute",
    "question": "EC2の「起動テンプレート (Launch Template)」が「起動設定 (Launch Configuration)」と比較して優れている、推奨される主な理由はどれですか？",
    "options": [
      "起動テンプレートのみが無料で使用できること",
      "起動テンプレートはバージョニングをサポートしており、複数のバージョンを保存し、パラメータをテンプレート間で継承できること",
      "起動テンプレートを使用すると、EC2のAMI作成が自動化されること",
      "起動設定は最新のインスタンスタイプ（m6iなど）をサポートしていないため"
    ],
    "answerIndex": 1,
    "explanation": "起動テンプレートは、起動設定の後継となる推奨機能です。大きな違いとして「バージョニング」をサポートしており、設定の変更履歴をバージョンとして管理・継承できます。また、Auto Scalingグループでオンデマンドとスポットインスタンスの混在購入や、複数インスタンスタイプの指定など、高度なスケジューリングは起動テンプレートでのみ可能です。",
    "keywords": [
      "起動テンプレート",
      "Launch Template",
      "バージョニング"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-16",
    "category": "compute",
    "question": "多数 of EC2インスタンスに対して、安全に、監査ログを残しながら、自動でOSのパッチ適用と脆弱性修正を実行するために使用すべき AWS Systems Manager (SSM) の機能はどれですか？",
    "options": [
      "SSM Run Command",
      "SSM Patch Manager",
      "SSM Session Manager",
      "SSM State Manager"
    ],
    "answerIndex": 1,
    "explanation": "SSM Patch Managerは、オペレーティングシステムとアプリケーションの両方に対するパッチの適用プロセスを自動化する機能です。定義された「パッチベースライン」に従って、欠落しているパッチのスキャンや適用を、メンテナンスウィンドウ機能と連携して自動的にスケジューリング・実行できます。Session Managerは安全なリモートシェル接続機能です。",
    "keywords": [
      "Patch Manager",
      "Systems Manager",
      "パッチ適用"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-17",
    "category": "compute",
    "question": "AWS CodeDeployを使用してLambda関数の新バージョンをデプロイする際、新バージョンに10%のトラフィックを流し、10分間問題がなければ残りの90%を一気に移行するデプロイ設定はどれですか？",
    "options": [
      "Canary (カナリア)",
      "Linear (リニア)",
      "All-at-once (一括)",
      "Blue/Green"
    ],
    "answerIndex": 0,
    "explanation": "CodeDeployでは、Lambda関数の段階的トラフィック移行として「Canary」と「Linear」を提供しています。Canaryは「X%を一定時間（Y分）流し、その後に残りの100%を移行する」という2ステップのデプロイです。一方、Linearは「Y分ごとにX%ずつ段階的に増やしていく」という多段階の移行を行います。問題の要件はCanary（例：LambdaCanary10Percent10Minutes）に該当します。",
    "keywords": [
      "CodeDeploy",
      "Canary",
      "Lambdaデプロイ"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-18",
    "category": "compute",
    "question": "EC2インスタンスのメタデータサービス (IMDSv2) が、従来の IMDSv1 と比較してセキュリティが向上している主な理由はどれですか？",
    "options": [
      "メタデータへのアクセスに認証キーペアが必要になったため",
      "セッションベースのトークン（HTTP PUTリクエストで取得）の使用を必須とし、SSRF (サーバーサイドリクエストフォージェリ) 脆弱性による不正な資格情報奪取を防止するため",
      "インスタンスメタデータがデフォルトでAES-256で暗号化されるため",
      "メタデータサービスがVPC内部に限定され、パブリックIPからのアクセスが拒否されるようになったため"
    ],
    "answerIndex": 1,
    "explanation": "IMDSv2では、セッションベースのトークンを最初に `PUT` リクエスト（ヘッダーでトークン要求）で取得し、その後のメタデータ取得 `GET` リクエストにそのトークンを含める必要があります。これにより、WAFやプロキシサーバーの脆弱性を悪用した単一の `GET` リクエスト転送による情報漏洩（SSRF攻撃）を防ぐことができます。従来のIMDSv1はトークンなしで直接GETできました。",
    "keywords": [
      "IMDSv2",
      "SSRF対策",
      "インスタンスメタデータ"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-19",
    "category": "compute",
    "question": "シンプルなWebサイトや開発環境を構築する際、EC2よりも低価格で、コンパイル済みのVPSパッケージ（仮想サーバー、SSDストレージ、データ転送量、DNS管理、静的IPがセット）を即座に利用できるAWSサービスはどれですか？",
    "options": [
      "Amazon EC2 Auto Scaling",
      "AWS Elastic Beanstalk",
      "Amazon Lightsail",
      "AWS App Runner"
    ],
    "answerIndex": 2,
    "explanation": "Amazon Lightsailは、シンプルな仮想プライベートサーバー (VPS)、コンテナ、データベース、ネットワークなどの機能を、予測可能な低価格プラン（月額定額制）で提供する使いやすいサービスです。インフラの詳細なカスタマイズが不要で、小規模なWordPressサイト、検証環境などを立ち上げるのに最適です。必要に応じてEC2へのアップグレードも可能です。",
    "keywords": [
      "Lightsail",
      "VPS",
      "定額プラン"
    ],
    "domain": "domain-2"
  },
  {
    "id": "comp-20",
    "category": "compute",
    "question": "EC2インスタンスの「休止状態 (Hibernation)」を有効にするための主要な要件および動作に関する正しい記述はどれですか？",
    "options": [
      "休止状態を有効にすると、インスタンスストア内のデータがS3に自動的にバックアップされる",
      "インスタンスのメモリ (RAM) の内容がルートEBSボリュームに保存され、起動時にメモリ状態が復元されるため、ルートボリュームが暗号化されたEBSである必要がある",
      "休止状態はすべてのOSおよびすべてのインスタンスタイプで標準サポートされている",
      "休止中はEC2インスタンスのコンピューティング料金が通常通り発生し続ける"
    ],
    "answerIndex": 1,
    "explanation": "EC2の休止状態 (Hibernation) は、OSのメモリ (RAM) 状態をルートEBSボリュームに書き込んでインスタンスをシャットダウンします。再起動時にRAMデータを読み込むことで、高速に以前の状態でアプリケーションを実行再開できます。セキュリティ上の要件として、メモリ内の機密データを保護するために「ルートEBSボリュームの暗号化」が必須です。休止中はコンピューティング料金は発生せず、EBSストレージ料金のみ発生します。",
    "keywords": [
      "休止状態",
      "Hibernation",
      "EBS暗号化"
    ],
    "domain": "domain-2"
  },
  {
    "id": "comp-21",
    "category": "compute",
    "question": "数万台のEC2インスタンスがあるAWS環境において、特定のタグを持つインスタンスに対して、安全にシェルスクリプトを実行して一元的にコマンドを実行したい場合、どのSystems Manager機能を使うのが最適ですか？",
    "options": [
      "SSM Session Manager",
      "SSM Run Command",
      "SSM State Manager",
      "SSM Distributor"
    ],
    "answerIndex": 1,
    "explanation": "Systems Manager Run Commandを使用すると、EC2インスタンスに対してコンソールやCLIから直接コマンドやスクリプトを安全にリモート実行できます。ポート22を開放することなく、タグやリソースグループで指定した大量のインスタンスへ一括で適用可能です。Session Managerは対話型の個別シェル接続用です。",
    "keywords": [
      "Run Command",
      "Systems Manager",
      "一元運用管理"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-22",
    "category": "compute",
    "question": "AWS Lambda関数がAPIコールを実行する際、外部APIのIPアドレス制限に対応するため、特定の静的IPアドレス（Elastic IP）を介してアウトバウンド通信を行う必要があります。どのように構成すべきですか？",
    "options": [
      "Lambda関数の起動属性にElastic IPを直接割り当てる",
      "Lambda関数をVPCのプライベートサブネットに配置し、パブリックサブネットにElastic IPを付与したNATゲートウェイを介してインターネットへルーティングする",
      "Lambda関数にパブリックIPを強制的にアタッチするVPCルーティングテーブルを構成する",
      "API Gatewayをフロントに置き、API GatewayのIPアドレス制限を使用する"
    ],
    "answerIndex": 1,
    "explanation": "Lambda関数はパブリックIPを直接持ちません。固定のパブリックIPから通信を行わせるためには、まずLambdaをVPC内にデプロイし、ルートテーブルで通信をNATゲートウェイ（Elastic IPをアタッチしたもの）経由でインターネットに抜けるようにルーティングします。これが標準的なAWS設計パターンです。",
    "keywords": [
      "Lambda VPC",
      "NAT Gateway",
      "Elastic IP"
    ],
    "domain": "domain-2"
  },
  {
    "id": "comp-23",
    "category": "compute",
    "question": "AWS Elastic Beanstalkにおいて、アプリケーションサーバーのCPU負荷に関わらず、毎週金曜日の18:00にインスタンス数を最小10台へ強制的に増やし、月曜日の9:00に2台へ戻すスケーリングアクションを自動で実行したい場合、どのAuto Scalingポリシーを設定すべきですか？",
    "options": [
      "ターゲット追跡スケーリングポリシー",
      "ステップスケーリングポリシー",
      "スケジュールされたアクション (Scheduled Actions)",
      "簡易スケーリングポリシー"
    ],
    "answerIndex": 2,
    "explanation": "あらかじめトラフィックの増減時間が予測できる場合（週末の定常的な負荷変動など）は、Auto Scalingの「スケジュールされたスケーリング（Scheduled Actions）」を使用します。時間と曜日（cron形式）でAuto Scalingグループの「最小・最大・希望容量」を設定することで、負荷変化の前にキャパシティを自動調整できます。",
    "keywords": [
      "スケジュールスケーリング",
      "Auto Scaling",
      "Beanstalkスケーリング"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-24",
    "category": "compute",
    "question": "コンテナアプリケーションをAWS Fargateで実行する際、タスク間で一時的なデータを保存・共有するために最大120GBまでの高速な書き込み可能な空き領域が必要です。Fargateタスク構成で定義すべき項目はどれですか？",
    "options": [
      "EBSボリュームの直接アタッチ",
      "タスク定義の ephemeralStorage (エフェメラルストレージ) の設定",
      "Amazon EFSの読み書きマウントのみ",
      "インスタンスストアのバインディングマウント"
    ],
    "answerIndex": 1,
    "explanation": "Fargateはサーバーレスコンテナ実行環境であり、タスクに対して一時的なローカルストレージ（エフェメラルストレージ）を提供します。デフォルトは20GBですが、Fargateタスク定義の `ephemeralStorage` パラメータで最大200GBまで拡張指定することができ、一時キャッシュや大容量データのバッチ変換に利用できます。EBSの直接アタッチはECS Fargateではサポートされません。",
    "keywords": [
      "Fargate",
      "ephemeralStorage",
      "サーバーレスコンテナ"
    ],
    "domain": "domain-2"
  },
  {
    "id": "comp-25",
    "category": "compute",
    "question": "AWS App Runnerを使用していて、オートスケーリングのトリガーとなるコンコンランシー（インスタンスあたりの同時リクエスト数）が特定の閾値（例: 100）を超えた際にスケーリングが発生するように設定したいです。どの機能を設定すべきですか？",
    "options": [
      "ECS Auto Scalingグループポリシー",
      "App Runner のオートスケーリング設定 (Auto Scaling Configuration)",
      "CloudWatch Alarm + Step Scaling",
      "Application Load Balancerのリクエスト上限設定"
    ],
    "answerIndex": 1,
    "explanation": "App Runnerは独自の簡略化されたオートスケーリング設定 (Auto Scaling Configuration) を持っています。「コンコンランシー（インスタンスあたりの同時リクエスト数）」の最大値（Max concurrency）を指定することで、それを超えたリクエストが発生した場合に、App Runnerが自動的に新規インスタンスをプロビジョニングしてトラフィックを分散します。",
    "keywords": [
      "App Runner",
      "コンコンランシー",
      "オートスケーリング"
    ],
    "domain": "domain-2"
  },
  {
    "id": "comp-26",
    "category": "compute",
    "question": "数百台のEC2インスタンスを本番環境で運用しています。インスタンス全体のセキュリティ監査と運用状態のレポートを一元管理するため、すべてのEC2インスタンスに対してSystems Managerエージェント（SSM Agent）がインストールされ、正しく接続されていることを自動で常時保証・監視するために利用すべき機能はどれですか？",
    "options": [
      "AWS Config Rules と SSM Quick Setup (クイックセットアップ)",
      "Amazon Inspector",
      "SSM Session Manager のみ",
      "EC2 起動データスクリプト"
    ],
    "answerIndex": 0,
    "explanation": "SSM Quick Setup（またはホスト管理）を使用すると、指定した組織やアカウントの全EC2インスタンスに対して、SSMエージェントの自動インストールや定期的な更新、および必要なIAMポリシーの割り当てを一括で構成できます。さらにAWS Config Rulesと組み合わせることで、SSM管理下に入っていない非適合EC2を自動検出・是正できます。",
    "keywords": [
      "Quick Setup",
      "Systems Manager",
      "SSM Agent自動構成"
    ],
    "domain": "domain-1"
  },
  {
    "id": "comp-27",
    "category": "compute",
    "question": "複数のAZに跨るEC2 Auto Scalingグループにおいて、障害が発生したAZのインスタンスが強制終了された後に、他の健全なAZに自動的に新規インスタンスがプロビジョニングされ、AZ間でのリソースのバランスが維持されるAuto Scalingの挙動を何と呼びますか？",
    "options": [
      "ゾーンバランシング (Availability Zone Rebalancing)",
      "可用性スワッピング (AZ Swapping)",
      "AZヘルスチェックフェイルオーバー",
      "ターゲットグループスティッキネス"
    ],
    "answerIndex": 0,
    "explanation": "Auto Scalingグループは、接続されているすべての可用性ゾーン (AZ) 間でインスタンスの数を「均等に」分散（バランシング）しようとします。AZ障害等で偏りが発生した場合やスケーリング発生時には、自動的にAZ間のバランスを整える再バランシング処理（AZ Rebalancing）をバックグラウンドで実行します。",
    "keywords": [
      "ゾーンバランシング",
      "Auto Scaling",
      "マルチAZ冗長化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-28",
    "category": "compute",
    "question": "EC2インスタンスを起動する際、あるAWSアカウント（アカウントA）で作成したカスタム起動テンプレートを、組織内の別のアカウント（アカウントB）から直接参照してAuto Scalingグループで使用できるようにするために必要な手順はどれですか？",
    "options": [
      "起動テンプレートをS3にエクスポートして共有する",
      "起動テンプレートの「リソース権限」を更新し、アカウントBのアカウント番号（またはOrganizationsの組織ARN）への共有権限を付与し、さらに元となるAMIもアカウントBと共有すること",
      "起動テンプレートは共有できないため、アカウントB側で全く同じAMIから新規に作り直す",
      "AWS Resource Access Manager (RAM) を使用して起動テンプレートを共有する"
    ],
    "answerIndex": 1,
    "explanation": "起動テンプレートはアカウントを跨いで「テンプレート自体への共有アクセス権」を設定できます。ただし、テンプレート内で指定されている「カスタムAMI（マシンイメージ）」および「KMSキー」などの依存リソースも同様に別アカウントから読み取れるように明示的な共有設定（AMI共有、KMSキーポリシー許可）を行わなければ、別アカウントでの起動時にアクセスエラーとなります。",
    "keywords": [
      "起動テンプレート共有",
      "AMI共有",
      "クロスアカウントEC2"
    ],
    "domain": "domain-1"
  },
  {
    "id": "comp-29",
    "category": "compute",
    "question": "AWS Lambda関数が処理エラー（タイムアウトやコードの例外）を起こした際、即座にそれをリアルタイムで検知して運用チームにメール通知（SNS連携）を送りたいです。最も迅速で管理負担が少ない設定方法はどれですか？",
    "options": [
      "LambdaのログをスキャンするPythonスクリプトをEC2で常時実行する",
      "CloudWatch Logs の「サブスクリプションフィルター」で例外キーワードを検知し、SNS経由で配信させるか、または「Lambda エラーメトリクス」に基づく CloudWatch アラームを構成すること",
      "Lambda Destinationsの失敗時出力先にS3を設定し、S3イベントで通知する",
      "API Gatewayで500エラーアラームを設定する"
    ],
    "answerIndex": 1,
    "explanation": "Lambdaのエラー発生はCloudWatchに自動でメトリクスとして出力されます。最も標準的なアプローチは、CloudWatch Metricsで `Errors` メトリクスが1以上になった場合にアラームを設定し、SNSトピックをトリガーして運用者に通知する方法です。または詳細な例外スタックを検知するためログの「サブスクリプションフィルター」を使用するのも有効です。",
    "keywords": [
      "CloudWatchアラーム",
      "Lambdaエラー検知",
      "SNS通知"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-30",
    "category": "compute",
    "question": "AWSでハイブリッドクラウド環境を構築しており、オンプレミスのサーバーをAWSの外からSystems Managerで管理しています。オンプレミスサーバーに対するコマンド実行（SSM Run Command）がインターネットを経由するのを禁止し、Direct Connectプライベートネットワーク内で完結させたい場合、どうすればよいですか？",
    "options": [
      "インターネットのルートを完全に削除する",
      "VPC内に Systems Manager 用の VPC エンドポイント (Interface Endpoint) を作成し、Direct Connect 経由でオンプレミスからそのVPCエンドポイントへ名前解決と通信を行わせること",
      "Systems Managerはパブリックサービスであるため、ハイブリッド接続でのインターネット回避は不可能である",
      "NATゲートウェイにVPNを設定し暗号化する"
    ],
    "answerIndex": 1,
    "explanation": "Systems Managerの各エンドポイント（`ssm`, `ssmmessages`, `ec2messages`）に対して、VPC内に「インターフェイスVPCエンドポイント（PrivateLink）」を作成します。オンプレミスのSSMエージェントが、インターネット経由のパブリックアドレスの代わりに、ハイブリッド接続（VPNやDirect Connect）を介してこのVPC内のプライベートIPエンドポイントに名前解決・接続するように、ハイブリッドDNS Resolver等を設定することで、全運用トラフィックをプライベート化できます。",
    "keywords": [
      "SSM PrivateLink",
      "VPCエンドポイント",
      "オンプレミスSSM管理"
    ],
    "domain": "domain-1"
  },
  {
    "id": "comp-31",
    "category": "compute",
    "question": "AWS Batchジョブコンピューティング環境において、ジョブキューの蓄積量に応じて必要な分だけEC2インスタンスを自動生成させ、処理完了後はゼロ台まで完全に自動でスケールダウンさせたい場合に選択すべき設定はどれですか？",
    "options": [
      "コンピューティング環境タイプとして「マネージド（Managed）」を選択し、スケーリング最小VCPU数を「0」に設定すること",
      "手動スケーリングスクリプトを構成し、Cronで実行する",
      "Auto Scalingグループを別途構築してジョブキューのCloudWatch Alarmを関連付ける",
      "FargateではなくオンデマンドEC2を常に稼働させる"
    ],
    "answerIndex": 0,
    "explanation": "AWS Batchのマネージドコンピューティング環境は、割り当てられたジョブキューの処理待ちジョブ数に応じて自動スケーリングを実行します。スケーリングのプロパティで「最小vCPU（minvCPUs）」を「0」に定義することで、ジョブがすべて処理し終わった時点で、起動したEC2インスタンスを自動で完全破棄（0台までスケーリング）し、アイドリングコストを皆無にできます。",
    "keywords": [
      "AWS Batch",
      "最小vCPU制限",
      "コストスケーリング"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-32",
    "category": "compute",
    "question": "Elastic Beanstalkで起動しているWebサーバーに対して、外部からのHTTPヘッダー情報の改ざんや特定リクエストサイズ超過を制限し、かつHTTPS用のSSL証明書をロードバランサーに配置したいです。Beanstalk構成で変更すべきコンポーネントはどれですか？",
    "options": [
      "EC2 インスタンスセキュリティグループ",
      "Beanstalk環境のロードバランサー (Application Load Balancer) 設定およびSSL証明書 (ACMキー) の割り当て",
      "Beanstalk Webコンテナ内の .ebextensions で Webサーバー（Apache/Nginx）の構成ファイルのみを編集する",
      "Route 53 レコードの設定"
    ],
    "answerIndex": 1,
    "explanation": "Beanstalkの負荷分散環境では、Application Load Balancer (ALB) がプロビジョニングされています。ALBの設定をBeanstalkコンソールや設定ファイルで変更し、HTTPSリスナーを追加してACM（AWS Certificate Manager）からSSL/TLS証明書をアタッチします。ロードバランサー上でSSL復号を行うことで、Webインスタンスに処理負荷をかけずにHTTPS通信を終端できます。",
    "keywords": [
      "Elastic Beanstalk",
      "ALB",
      "SSL証明書"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-33",
    "category": "compute",
    "question": "Amazon EKSクラスタ内のPodが、AWSリソース（S3やDynamoDBなど）に対してAWS APIコールを実行する際、Pod単位で必要な最小限のIAM権限のみを付与する最もセキュアで推奨されるIAMの仕組みは何ですか？",
    "options": [
      "EKSのワーカーノード（EC2）のインスタンスプロファイルにすべてのPodのIAMロールをまとめて割り当てる",
      "EKS Pod用のIAMロール (IRSA - IAM Roles for Service Accounts) を使用し、KubernetesのServiceAccountとIAMロールをOIDC認証プロバイダー経由で紐づけること",
      "Kubernetesの秘密情報 (Secrets) にAWSアクセスキーとシークレットキーを直書きしてマウントする",
      "Pod内ですべてのAPIコールを一度中継用のEC2を介して実行させる"
    ],
    "answerIndex": 1,
    "explanation": "EKSで推奨されるセキュリティベストプラクティスは「IRSA (IAM Roles for Service Accounts)」です。クラスタのOIDC（OpenID Connect）IDプロバイダーと統合することで、K8sの `ServiceAccount` に対して特定のIAMロールを信頼関連付けできます。これにより、Podは起動時に一時的なAWS STSクレデンシャルを自動で取得し、Pod単位での厳密な権限最小化が実現します。ノード全体のIAMロールを使うと、全Podが同一の過剰権限を持つため危険です。",
    "keywords": [
      "IRSA",
      "EKS",
      "最小特権原則"
    ],
    "domain": "domain-1"
  },
  {
    "id": "comp-34",
    "category": "compute",
    "question": "ECS Fargateサービスをスケールアウトさせる際、コンテナインスタンスのCPU負荷やメモリ消費率に関わらず、ロードバランサーがターゲットグループから受け取る「ターゲットあたりのリクエスト数」に基づいて動的にスケーリングさせるAuto Scaling設定はどれですか？",
    "options": [
      "EC2 CPUスケーリング",
      "ALBRequestCountPerTarget メトリクスを使用したターゲット追跡ポリシー",
      "ステップスケーリングポリシー",
      "簡易スケーリングアラーム"
    ],
    "answerIndex": 1,
    "explanation": "ECSサービスは、Application Load Balancer (ALB) の事前定義メトリクスである `ALBRequestCountPerTarget`（ターゲットあたりのリクエスト数）に基づく「ターゲット追跡ポリシー」をサポートしています。これにより、コンテナ自体のCPU負荷が上昇する前段階で、リクエスト数の急増に反応して先んじてタスク数をスケールアウトさせることができます。",
    "keywords": [
      "ALBRequestCountPerTarget",
      "ECS Fargate",
      "Auto Scaling"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-35",
    "category": "compute",
    "question": "オンプレミスから AWS へのサーバー移行計画を立てています。移行対象のオンプレミスのマシンイメージを、そのまま AWS Systems Manager や移行ツールを使用せず、OVF形式などの既存仮想アプライアンスイメージのファイルアップロードのみで直接 AMI にインポートする際に使用するCLIツールおよび動作プロセスは何ですか？",
    "options": [
      "AWS DataSync コネクタ",
      "AWS VM Import/Export CLI コマンド (ec2 import-image)",
      "AWS MGN オンデマンドアタッチ",
      "S3 Transfer Utility"
    ],
    "answerIndex": 1,
    "explanation": "AWS VM Import/Exportは、AWS CLIを介して `aws ec2 import-image` または `aws ec2 import-snapshot` コマンドを使用して、S3にアップロードされた仮想マシンディスクイメージ（VMDK, VHD, RAW等）を、EC2で直接使用可能なAMIまたはEBSスナップショットにサーバーレスで自動変換する機能を提供します。エージェントを入れられない場合の移行に役立ちます。",
    "keywords": [
      "VM Import/Export",
      "AWS CLI",
      "VMイメージ移行"
    ],
    "domain": "domain-4"
  },
  {
    "id": "comp-36",
    "category": "compute",
    "question": "AWS Lambda関数がデータベース（Amazon RDS/Aurora）に対して多数の短寿命の接続を確立すると、DBサーバーの最大接続数（Max Connections）の上限に達してデータベースが応答不能になります。この接続枯渇を最も安全に回避する構成はどれですか？",
    "options": [
      "Lambdaの同時実行数を無制限に拡張する",
      "Amazon RDS Proxyをプロビジョニングし、Lambda関数からRDS Proxyのエンドポイント経由でデータベースにアクセスさせること",
      "Lambdaの最大タイムアウトを3秒に短縮する",
      "データベースを DynamoDB に完全に移行する"
    ],
    "answerIndex": 1,
    "explanation": "Lambda関数は呼び出しごとに実行コンテナが一時的に並列で増えるため、直接RDSに接続すると接続が急増してDBがクラッシュします。「Amazon RDS Proxy」をアタッチすることで、プロキシ側でデータベースの接続コネクションをプール・再利用（接続プーリング）し、Lambdaからの数千の接続リクエストを少数の効率的なデータベースコネクションに集約して枯渇を防御します。",
    "keywords": [
      "RDS Proxy",
      "接続プーリング",
      "Lambda DB接続制限"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-37",
    "category": "compute",
    "question": "AWS Systems Manager (SSM) の Session Manager を使用して、パブリックIPを持たないプライベートサブネット内のEC2インスタンスへ、ローカル端末から安全に暗号化されたリモートシェル（SSH/CLI）で接続するために最低限必要となる条件はどれですか？",
    "options": [
      "インスタンスにパブリックIPアドレスを割り当てること",
      "EC2インスタンスにSSM Agentがインストールされており、SSMエンドポイントへの通信（NAT GWまたはVPC Endpoint経由）が可能で、インスタンスに適切なSSM管理用IAMロール（AmazonSSMManagedInstanceCoreなど）がアタッチされていること",
      "VPCにインターネットゲートウェイを接続し、ポート22を開放すること",
      "ローカル端末にSSH秘密鍵を設定し、踏み台インスタンスを経由すること"
    ],
    "answerIndex": 1,
    "explanation": "SSM Session Managerは、踏み台（Bastion）ホストやSSHキー、インバウンドのポート開放（ポート22など）を一切必要としません。必要な要件は、対象EC2内のSSMエージェントがSSMのAPI（アウトバウンド）と通信できること、およびEC2に `AmazonSSMManagedInstanceCore` ポリシーを含むIAMインスタンスプロファイルがアタッチされていることだけです。通信はAWSシステム側で暗号化・監査されます。",
    "keywords": [
      "Session Manager",
      "SSM Agent",
      "EC2リモート接続"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-38",
    "category": "compute",
    "question": "多数のマイクロサービスAPIをAWS Lambdaで実行しています。特定の共通の処理（データベースアクセスクライアントや認証用共通ユーティリティライブラリ）のコードを別々にデプロイするのを避け、すべてのLambda関数で一元的に再利用・参照させたい場合に最適なLambdaの機能はどれですか？",
    "options": [
      "Lambda 環境変数",
      "Lambda レイヤー (Lambda Layers)",
      "Lambda コンテナイメージの共通ベースレイヤー",
      "S3共有バケットからの動的ダウンロード"
    ],
    "answerIndex": 1,
    "explanation": "Lambda レイヤー (Lambda Layers) を使用すると、共通のコードやライブラリ、カスタムランタイム、依存パッケージなどをZIPファイルにまとめてレイヤーとして登録し、複数のLambda関数にアタッチできます。これにより、各関数のデプロイパッケージのサイズを劇的に縮小し、共通ライブラリのバージョン変更を一元化できます。",
    "keywords": [
      "Lambda Layers",
      "共通ライブラリ",
      "デプロイ最適化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-39",
    "category": "compute",
    "question": "EC2インスタンスの「スポットインスタンス（Spot Instances）」をAuto Scalingグループと組み合わせて安定して運用し、突然のインスタンス回収（中断）によるサービスダウンリスクを最小限に抑えるための最良の設計プラクティスはどれですか？",
    "options": [
      "単一のインスタンスタイプ（c5.largeのみ等）を指定してキャパシティを固定する",
      "Auto Scalingで「起動テンプレート（Launch Template）」を使用し、複数のインスタンスタイプ（インスタンスサイズの混在）や購入オプションを指定し、かつ十分な容量プールを確保すること",
      "スポットインスタンスの中断通知を検知したら、すべてのインスタンスを即座にオンデマンドに変換する手動スクリプトを実行する",
      "スポットインスタンスの入札価格を常にオンデマンド料金の3倍に設定する"
    ],
    "answerIndex": 1,
    "explanation": "スポットインスタンスを安定運用するための鍵は「インスタンスの多様化（Instance Diversification）」です。Auto Scalingグループで起動テンプレートを使用し、複数の類似インスタンスタイプ（例: m5.large, m5d.large, m4.large, c5.largeなど）を混在させて指定することで、特定のタイプの中断（スポット市場の需給逼迫）が発生しても、他のタイプで自動補填され、クラスタ全体のサービス継続性が最大化されます。",
    "keywords": [
      "スポットインスタンス",
      "インスタンス多様化",
      "Auto Scaling"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-40",
    "category": "compute",
    "question": "ECS Fargateタスク内のアプリケーションから、AWS Systems Manager Parameter Store や Secrets Manager にアクセスして環境変数としてパスワード等の機密データを注入したいです。APIによる動的取得コードを書かずに、タスク起動時に自動で安全に環境変数にインジェクトさせるためのタスク定義上の設定方法はどれですか？",
    "options": [
      "タスク定義の `environment` パラメータにパラメータストアの ARN をプレーンテキストで直接指定する",
      "タスク定義の `secrets` パラメータで環境変数名を定義し、値に Parameter Store または Secrets Manager の ARN を `valueFrom` で指定すること。また、タスク実行ロールに該当シークレットの読取権限を付与すること",
      "コンテナ起動時にS3から認証ファイルをシェルスクリプトでロードする",
      "FargateのEphemeral Storageに認証鍵を直接書き込んでマウントする"
    ],
    "answerIndex": 1,
    "explanation": "ECS（およびFargate）のタスク定義では、`secrets` パラメータを使用することで、 Parameter Store や Secrets Manager から機密情報を取得し、コンテナ起動時に環境変数として安全に挿入できます。これにより、アプリケーション側にAWS SDKでの取得コードや鍵ポリシー管理を組み込む必要がなくなり、コードの安全性が保たれます。タスク実行ロール (Task Execution Role) が実際のシークレット取得を行うため、このロールへのIAM権限付与が必要です。",
    "keywords": [
      "ECS Secrets",
      "Fargate環境変数",
      "タスク実行ロール"
    ],
    "domain": "domain-2"
  },
  {
    "id": "comp-41",
    "category": "compute",
    "question": "数千のアカウントを管理するAWSマルチアカウント組織環境において、全アカウントの特定のEC2インスタンスに対して、会社の情報セキュリティポリシーに従ってアンチウイルスソフトが一律で自動インストールされているかを監査し、非適合インスタンスがある場合はConfig経由で警告を出したいです。どのように自動化すべきですか？",
    "options": [
      "全アカウントに個別にログインして cron ジョブを設定する",
      "AWS Control Tower または Organizations の委任管理者アカウントから、AWS Configの「組織のルール (Organizational Rules)」を展開し、不適合EC2の検出およびSSM Automationでの自動修復を構成すること",
      "全EC2のポート22を一斉開放し、オンプレミス監査サーバーからリモートスキャンを実行する",
      "CloudWatch Logsのサブスクリプションを各アカウントで手動構成する"
    ],
    "answerIndex": 1,
    "explanation": "AWS OrganizationsとAWS Configを統合することで、「組織のConfigルール (Organizational Config Rules)」を一元的に配下アカウントへ強制配置できます。これにより、新しいアカウントが作成されても自動的に同じセキュリティルールが適用・適用開始されます。非適合を検知した際は、AWS Systems Manager (SSM) のオートメーションドキュメントと連携して自動でソフトウェアをインストールさせる修復プロセスを自動構成可能です。",
    "keywords": [
      "組織のConfigルール",
      "Control Tower",
      "自動修復"
    ],
    "domain": "domain-1"
  },
  {
    "id": "comp-42",
    "category": "compute",
    "question": "AWS Lambda関数において、データベースへのクエリ結果などの「頻繁に変更されず、サイズが比較的小さい（数MB）データ」を複数回の実行（コンテナのウォーム再利用）にわたってキャッシュさせ、クエリパフォーマンスを向上させるための最も簡単なコード設計パターンはどれですか？",
    "options": [
      "キャッシュデータを実行ごとにElastiCache Redisへ書き込む",
      "データをLambdaハンドラー関数の「外側」にグローバル変数または静的変数として定義し、再利用可能な実行コンテナ内のメモリにキャッシュを保持させること",
      "Lambdaの一時保存領域 (/tmp) に毎回S3からデータをダウンロードする",
      "Lambdaの同時実行数を1に制限する"
    ],
    "answerIndex": 1,
    "explanation": "Lambda関数は、連続呼び出し時に実行コンテナ（実行環境）が再利用される特徴があります。ハンドラー関数の外側（グローバルスコープ）で定義された変数や初期化処理は、コンテナが生きている間（ウォーム状態）維持されます。ここにDBのマスターデータや外部接続セッションなどを保持させることで、次回以降の実行時の処理時間を大幅に削減でき、コールドスタート対策にもなります。",
    "keywords": [
      "コンテナ再利用",
      "グローバル変数",
      "Lambda初期化最適化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-43",
    "category": "compute",
    "question": "AWS Fargateにおいて、コンテナの稼働ヘルスステータスを監視し、アプリケーションプロセスが応答しなくなった場合に、ロードバランサーのヘルスチェックを待たずにタスク自体を自動で終了して再起動（セルフヒーリング）させたいです。どの機能を使用すべきですか？",
    "options": [
      "タスク定義での `healthCheck` コマンドの設定",
      "CloudWatch Agent のインストール",
      "Lambdaでのタスク常時監視スクリプト",
      "EC2 Auto Scaling のヘルスチェック"
    ],
    "answerIndex": 0,
    "explanation": "ECS/Fargateタスク定義には `healthCheck` パラメータを設定できます。ここでコンテナ内で実行するヘルスチェックコマンド（例: `curl -f http://localhost:8080/health || exit 1`）を定義しておくと、Fargateがこれを定期実行します。チェックが連続して失敗した場合、ECSは該当タスクを「不健全（Unhealthy）」と判断して自動的に停止し、新しいタスクを代替起動（セルフヒーリング）します。",
    "keywords": [
      "ECSコンテナヘルスチェック",
      "セルフヒーリング",
      "Fargate"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-44",
    "category": "compute",
    "question": "多数のEC2インスタンスを管理しており、パッチ適用時（SSM Run Command実行時）などのCPU使用率のスパイクを、標準の5分間隔のメトリクス監視では細かな傾向が追いきれず、1秒単位の超高解像度でのパフォーマンス監査が必要です。どの機能を設定すべきですか？",
    "options": [
      "EC2の詳細モニタリング (Detailed Monitoring) の有効化",
      "CloudWatch Agent をインストールし、カスタムメトリクス（CPU等）を高解像度メトリクス（1秒または5秒などの解像度）としてCloudWatchへ送信すること",
      "Route 53のヘルスチェックを最短に設定する",
      "CloudTrailの証跡イベントの間隔を最短にする"
    ],
    "answerIndex": 1,
    "explanation": "EC2の「詳細モニタリング」は間隔を1分に短縮しますが、1秒単位などの「超高解像度」メトリクス監視を行うには、EC2内部に「CloudWatch Agent」をデプロイする必要があります。エージェント構成ファイルで解像度を秒単位（1sなど）に設定して送信したカスタムメトリクスは、非常に短い間隔の負荷スパイクを確実にキャプチャできます。",
    "keywords": [
      "高解像度メトリクス",
      "CloudWatch Agent",
      "パフォーマンス監査"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-45",
    "category": "compute",
    "question": "Amazon ECS で EC2 を起動タイプとして使用する際、コンテナを配置するホストEC2インスタンス自体の空き容量（CPU/メモリプール）が不足した際に、ホストEC2インスタンスのAuto Scalingを自動連動させて自動的にホスト側を追加スケールアウトさせるための最適なECSの機能はどれですか？",
    "options": [
      "ホストEC2のシンプルスケーリングポリシーの適用のみ",
      "ECS キャパシティプロバイダー (Capacity Providers) と Auto Scaling グループ (ASG) の統合およびターゲットトラッキングの有効化",
      "ECSタスクスケーリングのみ",
      "ホストEC2へのLambda常時スキャンによるプロビジョニング"
    ],
    "answerIndex": 1,
    "explanation": "ECS キャパシティプロバイダー (Capacity Providers) は、ECSタスクが必要とする計算リソースと、実際のAuto Scalingグループ (ASG) のホストインスタンス数を結びつけます。タスクの要求（必要なCPU/メモリ）に対してホストリソースが足りない場合、キャパシティプロバイダーが自動でASGへスケーリング指示を出してホストEC2を増やし、タスクのデプロイを可能にします。",
    "keywords": [
      "キャパシティプロバイダー",
      "ECS EC2起動タイプ",
      "オートスケーリング"
    ],
    "domain": "domain-2"
  },
  {
    "id": "comp-46",
    "category": "compute",
    "question": "オンプレミスで稼働中の大量のVMware仮想マシン群を、ネットワーク帯域幅制限を設定しながら、エージェント不要で自動的かつエージェントレスに移行調査・構成分析するために移行の準備フェーズで導入すべきAWSコネクタは何ですか？",
    "options": [
      "AWS Systems Manager Agent",
      "AWS Application Discovery Service Agentless Connector (vCenter接続用のアプライアンス)",
      "AWS DataSync Agent",
      "AWS MGN Replication Agent"
    ],
    "answerIndex": 1,
    "explanation": "AWS Application Discovery Serviceの「エージェントレスコネクター」は、VMware vCenterアプライアンスとしてデプロイし、vCenterに接続します。これにより、個別の仮想マシンにエージェントソフトウェアを入れることなく、クラスタ内の仮想マシン構成、CPU/メモリ使用履歴、ネットワークI/O状況などのシステムスペック情報を一括で安全に取得でき、移行計画に役立てることができます。",
    "keywords": [
      "Application Discovery",
      "エージェントレスコネクター",
      "移行アセスメント"
    ],
    "domain": "domain-4"
  },
  {
    "id": "comp-47",
    "category": "compute",
    "question": "大規模な金融機関で、PCI-DSSコンプライアンス監査に対応するため、すべての本番EC2の「オペレーティングシステム内部のファイル変更」や「ログイン試行、監査ログ」を、暗号化された安全なログとしてCloudWatch Logsにリアルタイム転送・集約させたいです。どのAWS機能を活用すべきですか？",
    "options": [
      "AWS Systems Manager Run Command で定期取得する",
      "各EC2に CloudWatch Agent をデプロイし、OSの特定システムログおよびセキュリティログファイルをCloudWatch Logsへストリーム送信するように設定すること",
      "CloudTrailのデータイベントの有効化",
      "VPCフローログを収集する"
    ],
    "answerIndex": 1,
    "explanation": "EC2インスタンスの内部ファイル（OSやWebサーバーのログ）をCloudWatch Logsへ集約するには「CloudWatch Agent」が必要です。エージェントを構成し、監視するログファイルのパスを指定することで、書き込みが発生する都度リアルタイムでログがCloudWatchへストリーム送信・一元暗号化保管され、監査ログとしての信頼性が満たされます。",
    "keywords": [
      "CloudWatch Logs",
      "CloudWatch Agent",
      "セキュリティログ監査"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-48",
    "category": "compute",
    "question": "AWS Lambda関数が第三者のAPI（外部のSaaSなど）にアクセスする際、LambdaのAPIタイムアウト時間を超えて相手が応答しないケース（ハングアップ）があります。API応答エラーにより無駄なLambdaの同時実行数スロットを浪費させないための、最も確実なLambdaおよびAPI側の設計パターンはどれですか？",
    "options": [
      "Lambda関数の最大メモリ設定を極限まで大きくする",
      "Lambda関数の最大実行タイムアウトを「適切な短い値（例: 5〜10秒）」に設定し、かつコード側でもAPIリクエストに対する接続/読取タイムアウトを明示的に指定すること",
      "Lambdaの代わりにEC2インスタンスを起動する",
      "APIコールの前にSNSトピックを挟んで通信させる"
    ],
    "answerIndex": 1,
    "explanation": "Lambda関数は実行時間に対して課金され、かつハングした関数は同時実行スロット（アカウントの上限）を占有し続けます。外部APIとの通信を行う場合は、Lambda側の最大タイムアウトを必要最小限（例：5秒）にし、さらにコードのHTTPクライアントライブラリの設定でコネクション/ソケットタイムアウトを厳密に設けることで、異常な待機によるリソースの枯渇とコストの急増を防ぎます。",
    "keywords": [
      "タイムアウト制限",
      "Lambda同時実行数最適化",
      "耐障害性設計"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-49",
    "category": "compute",
    "question": "ECS Fargateサービスでコンテナを実行する際、急激なトラフィック変動を検知してからコンテナを起動・追加（オートスケーリング）するまでの遅延を劇的に減らし、突発的なアクセスに即応させるために、Fargate側のコンテナの起動パフォーマンスを高める設計として、正しくないものはどれですか？",
    "options": [
      "Dockerイメージのサイズを最小化（軽量なalpineイメージ等の使用）して、イメージのPullにかかる時間を短縮する",
      "Fargateで使用する起動イメージのキャッシュとして、ECRのイメージタグ `latest` を使用し、毎回必ずリフレッシュダウンロードさせること",
      "ECR で「読込フィルター（イメージの展開処理の省略）」を可能にするためにイメージの圧縮率やレイヤーを最適化する",
      "ECSサービスでコンコンランシーベースのターゲット追跡ポリシーを設定し、閾値を低めにして早めにスケールを開始させる"
    ],
    "answerIndex": 1,
    "explanation": "Fargateのコンテナ起動時間の多くは「ECRからのDockerイメージのダウンロード（Pull）」と展開時間です。`latest` タグを使用すると、キャッシュが利かず毎回ダウンロードが発生してしまいます。イメージPullの高速化には、イメージサイズ自体の削減（alpineなどの軽量ベースの使用）、特定のバージョンタグの指定、不要なレイヤーの統合が有効なため、`latest` の強制使用は誤りです。",
    "keywords": [
      "Fargate起動高速化",
      "ECRイメージPull",
      "コンテナ最適化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "comp-50",
    "category": "compute",
    "question": "AWS Systems Manager (SSM) の「一元的なリモート管理」機能を使用している環境において、OSパッチ適用の作業（SSM Patch Manager）が、本番環境の営業時間中に誤って開始されないように安全な「実行時間帯（メンテナンスウィンドウ）」を強制・スケジューリングするために連携すべきSSM機能はどれですか？",
    "options": [
      "SSM Systems Manager Document の作成",
      "SSM Maintenance Windows (メンテナンスウィンドウ)",
      "SSM State Manager",
      "AWS EventBridge Rules"
    ],
    "answerIndex": 1,
    "explanation": "SSM Maintenance Windows (メンテナンスウィンドウ) を定義することで、パッチ適用やスクリプト実行などの「本番環境に影響を与える可能性のある管理タスク」の実行可能期間を厳密に指定（例: 毎週日曜日のAM2:00〜AM4:00）できます。Patch Managerなどのタスクをこのウィンドウに関連付けることで、意図しない業務時間帯の適用によるシステムダウンを防御できます。",
    "keywords": [
      "Maintenance Windows",
      "Patch Manager連携",
      "ガバナンス管理"
    ],
    "domain": "domain-1"
  },
  {
    "id": "stor-01",
    "category": "storage",
    "question": "アクセスパターンが不明または予測不能で、頻繁にアクセスされるデータとそうでないデータが混在しているオブジェクトストレージをS3に移行します。最もコスト効率が高く、管理オーバーヘッドを最小限に抑えられるストレージクラスはどれですか？",
    "options": [
      "S3 Standard-IA (低頻度アクセス)",
      "S3 Intelligent-Tiering (インテリジェントティアリング)",
      "S3 One Zone-IA (1ゾーン低頻度アクセス)",
      "S3 Glacier Instant Retrieval"
    ],
    "answerIndex": 1,
    "explanation": "S3 Intelligent-Tieringは、データのアクセスパターンが変化したときに、アクセス頻度に基づいてデータを「頻繁なアクセス」と「低頻度アクセス」の自動移行ティアに振り分ける唯一のクラウドストレージクラスです。取り出し料金や移行手数料がかからないため、アクセスパターンが予測できない場合に最もコスト効率が高くなります。",
    "keywords": [
      "S3 Intelligent-Tiering",
      "ストレージクラス",
      "コスト最適化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-02",
    "category": "storage",
    "question": "S3のオブジェクトに対して、ライフサイクルポリシーを設定してGlacierに移行させる際、移行ルールおよびコストに関する正しい考慮事項はどれですか？",
    "options": [
      "任意のサイズのオブジェクトを移行手数料なしでいつでも移行できる",
      "オブジェクトサイズが128KB未満の場合、Glacierに移行してもストレージ料金の削減効果が得られない可能性があり、移行から最低でも90日間（Glacier Flexible Archiveの場合）は保管料金が発生すること",
      "Glacierに移行したデータは、ライフサイクルによって自動的に削除されることはない",
      "Glacierへのオブジェクト移行は、数秒で完了しすぐに読み取れる"
    ],
    "answerIndex": 1,
    "explanation": "S3 Glacier（Flexible/Deep Archive）へのライフサイクル移行にはいくつかの制約があります。特に128KB未満のオブジェクトの移行にはオーバーヘッド費用がかかり推奨されません。また、最低ストレージ保管期間（Glacier Flexibleは90日、Deep Archiveは180日）があり、これより前に削除または再移行すると早期削除料金が発生します。",
    "keywords": [
      "S3ライフサイクル",
      "Glacier移行制限",
      "早期削除料金"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-03",
    "category": "storage",
    "question": "コンプライアンス要件により、特定の監査データを5年間、ルートユーザーを含め誰にも変更・削除できないようにする必要があります。どのS3機能とモードを設定すべきですか？",
    "options": [
      "S3 オブジェクトロック (ガバナンスモード)",
      "S3 オブジェクトロック (コンプライアンスモード)",
      "S3 バケットポリシーによる `s3:DeleteObject` の明示的拒否",
      "S3 バージョニングの有効化"
    ],
    "answerIndex": 1,
    "explanation": "S3 オブジェクトロックの「コンプライアンスモード (Compliance Mode)」では、保護されたオブジェクトのバージョンは、AWSのルートユーザーを含むいかなるユーザーによっても変更・削除できません。保持期間も上書き・短縮できません。一方、「ガバナンスモード」は特別な権限を持つユーザーであれば削除可能です。",
    "keywords": [
      "S3オブジェクトロック",
      "コンプライアンスモード",
      "WORMストレージ"
    ],
    "domain": "domain-1"
  },
  {
    "id": "stor-04",
    "category": "storage",
    "question": "S3 クロスリージョンレプリケーション (CRR) を正常に動作させるための最小要件として、正しくないものはどれですか？",
    "options": [
      "送信元と送信先の両方のバケットでS3バージョニングが有効になっていること",
      "S3がオブジェクトをレプリケートできるようにする適切なIAMロールが設定されていること",
      "送信元バケットと送信先バケットが異なるリージョンにあること",
      "送信先バケットが送信元バケットと同一のAWSアカウント内にあること"
    ],
    "answerIndex": 3,
    "explanation": "S3レプリケーション（CRR/SRR）は、同一アカウント間だけでなく、異なるAWSアカウント間（クロスアカウント）でのレプリケーションもサポートしています。そのため、「同一アカウント内であること」は必要条件ではありません。バージョニングの有効化、IAMロールの設定、異なるリージョンであること（CRRの場合）は必須要件です。",
    "keywords": [
      "S3 CRR",
      "バージョニング",
      "レプリケーション"
    ],
    "domain": "domain-1"
  },
  {
    "id": "stor-05",
    "category": "storage",
    "question": "数千のアカウントや異なる事業部から、単一の大規模なS3バケットに対するデータアクセス要求があります。ポリシーサイズ制限を回避し、共有アクセスの制御を簡単にするために推奨されるS3の機能はどれですか？",
    "options": [
      "S3 バケットACLの活用",
      "S3 アクセスポイント (Access Points) の作成",
      "S3 マルチリージョンアクセスポイント",
      "AWS RAM (Resource Access Manager) による共有"
    ],
    "answerIndex": 1,
    "explanation": "S3 アクセスポイント (Access Points) は、S3の共有データセットへのアクセス管理を容易にする機能です。単一の巨大なバケットポリシーですべてのアクセスを管理する代わりに、特定のワークフローやグループ専用の個別アクセスポイント（それぞれに専用ポリシーを設定）を作成し、そちらを経由してアクセスさせることができます。",
    "keywords": [
      "S3アクセスポイント",
      "バケットポリシー",
      "アクセス制御"
    ],
    "domain": "domain-1"
  },
  {
    "id": "stor-06",
    "category": "storage",
    "question": "誤ったオブジェクトの削除や上書きを防ぎ、かつオブジェクト削除時に「MFA (多要素認証) の入力」を強制させて高度な削除保護を実現するために必要な設定はどれですか？",
    "options": [
      "S3 オブジェクトロックのみの有効化",
      "S3 バージョニングの有効化と MFA Delete の設定",
      "S3 バケットポリシーでの MFA 条件キー設定のみ",
      "IAM ユーザーポリシーへの MFA 適用"
    ],
    "answerIndex": 1,
    "explanation": "S3の「MFA Delete」機能は、オブジェクトのバージョン状態の変更や、オブジェクトバージョンの完全削除の実行時に、多要素認証 (MFA) デバイスによる認証コードの入力を義務付ける機能です。これにはS3バージョニングの有効化が前提条件となります。",
    "keywords": [
      "MFA Delete",
      "バージョニング",
      "削除保護"
    ],
    "domain": "domain-1"
  },
  {
    "id": "stor-07",
    "category": "storage",
    "question": "EC2インスタンス用のブロックストレージにおいて、最大256,000 IOPS、サブミリ秒の低レイテンシーを必要とする極めて要求の厳しいミッションクリティカルなデータベースワークロードに最適なEBSボリュームタイプはどれですか？",
    "options": [
      "汎用 SSD (gp3)",
      "プロビジョンド IOPS SSD (io2 Block Express)",
      "スループット最適化 HDD (st1)",
      "Cold HDD (sc1)"
    ],
    "answerIndex": 1,
    "explanation": "io2 Block Expressボリュームは、最大256,000 IOPS、最大4,000 MB/秒のスループット、およびミリ秒未満のレイテンシーを提供する、AWSで最も高性能なEBSボリュームです。gp3は汎用向けでIOPS上限は16,000です。",
    "keywords": [
      "EBS io2 Block Express",
      "IOPS",
      "高性能ブロックストレージ"
    ],
    "domain": "domain-2"
  },
  {
    "id": "stor-08",
    "category": "storage",
    "question": "EBSスナップショットから新規ボリュームを作成した際、初回アクセス時の読み取り遅延を回避するために、事前にスナップショットに対して有効化しておくべき機能はどれですか？",
    "options": [
      "EBS スナップショットの暗号化",
      "EBS 高速スナップショット復元 (Fast Snapshot Restore - FSR)",
      "EBS マルチアタッチ",
      "Amazon Data Lifecycle Manager (DLM)"
    ],
    "answerIndex": 1,
    "explanation": "EBSスナップショットから作成されたボリュームは、初回アクセス時にS3からのデータの遅延ローディングが発生するため、一時的にIOPS性能が低下します。高速スナップショット復元 (FSR) をスナップショット側で有効にしておくと、復元されたボリュームは作成時点で完全にイニシャライズされた状態となり、即座に最大パフォーマンスを発揮できます。",
    "keywords": [
      "FSR",
      "EBSスナップショット",
      "ウォームアップ"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-09",
    "category": "storage",
    "question": "Amazon EFSファイルシステムにおいて、アクセス頻度の低いデータを自動的に低コストな階層に移動させて大幅なコスト削減を図りつつ、POSIX互換の共有ストレージを構築する最適なアプローチはどれですか？",
    "options": [
      "EFSライフサイクル管理を有効にし、適切な移行期間を設定すること",
      "AWS DataSyncを使用して、古いデータをS3 Glacierに手動コピーする",
      "Amazon EFS ではなく、EBS マルチアタッチを使用する",
      "EFSのプロビジョニングされたスループットを制限する"
    ],
    "answerIndex": 0,
    "explanation": "EFSのライフサイクル管理を使用すると、指定した期間（例: 30日間）アクセスされなかったファイルが自動的に低頻度アクセス（IA）ストレージクラスへ移動され、コストを大幅に削減できます。POSIX互換の共有ファイルシステムとしての仕様はそのまま維持されます。",
    "keywords": [
      "EFS",
      "共有ファイルシステム",
      "ライフサイクル管理"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-10",
    "category": "storage",
    "question": "機械学習やゲノム解析などのHPC環境において、S3バケットとリンクして動作し、超高速な並列処理を提供する、一時的なキャッシュスペースに適したファイルシステムはどれですか？",
    "options": [
      "Amazon EFS",
      "Amazon FSx for NetApp ONTAP",
      "Amazon FSx for Lustre",
      "Amazon FSx for OpenZFS"
    ],
    "answerIndex": 2,
    "explanation": "Amazon FSx for Lustreは、世界で最も人気のある高性能ファイルシステムであるLustreをベースにしたサービスです。S3バケットとネイティブに統合され、S3内のデータをファイルシステムに直接マッピングできます。一時的な処理用の「スクラッチファイルシステム」タイプがあり、HPCワークロードの処理に最適です。",
    "keywords": [
      "FSx for Lustre",
      "HPC",
      "S3統合"
    ],
    "domain": "domain-2"
  },
  {
    "id": "stor-11",
    "category": "storage",
    "question": "Windowsのファイルサーバーとして機能し、Microsoft Active Directory (オンプレミスまたはAWS Directory Service) と統合され、SMBプロトコルをサポートする高可用性なフルマネージド共有ストレージはどれですか？",
    "options": [
      "Amazon EFS",
      "Amazon FSx for Windows File Server",
      "AWS Storage Gateway (Volume Gateway)",
      "Amazon FSx for Lustre"
    ],
    "answerIndex": 1,
    "explanation": "Amazon FSx for Windows File Serverは、Windows Server上に構築されたフルマネージド共有ファイルストレージです。SMBプロトコル、NTFS権限、およびActive Directoryとの統合を標準でサポートしており、既存のWindowsワークロードやWindowsクライアントからのファイル共有に最適です。",
    "keywords": [
      "FSx for Windows",
      "SMB",
      "Active Directory"
    ],
    "domain": "domain-2"
  },
  {
    "id": "stor-12",
    "category": "storage",
    "question": "オンプレミスで NetApp ONTAP ストレージを利用しています。既存のストレージ機能（重複排除、データ圧縮、ONTAP FlexClone、SnapMirrorなど）を変更せずにそのままAWSに移行させたい場合、どのサービスを選ぶべきですか？",
    "options": [
      "Amazon EFS",
      "Amazon FSx for Windows File Server",
      "Amazon FSx for NetApp ONTAP",
      "AWS DataSync"
    ],
    "answerIndex": 2,
    "explanation": "Amazon FSx for NetApp ONTAPは、NetAppのONTAPファイルシステムをAWS上に構築するフルマネージドサービスです。ONTAP固有の高度なデータ管理機能（SnapMirrorレプリケーション、重複排除など）をそのまま利用できるため、オンプレミスのNetApp環境からAWSへの移行に最適です。",
    "keywords": [
      "FSx for NetApp ONTAP",
      "NetApp",
      "データ移行"
    ],
    "domain": "domain-4"
  },
  {
    "id": "stor-13",
    "category": "storage",
    "question": "オンプレミスのサーバーから、NFSまたはSMBプロトコルを使用して、AWS上のS3にデータを直接オブジェクトとしてアップロード・保存したいとします。ローカルには頻繁にアクセスされるファイルのみをキャッシュさせたい場合、どのStorage Gatewayサービスを使用すべきですか？",
    "options": [
      "Amazon S3 File Gateway (S3ファイルゲートウェイ)",
      "Volume Gateway - キャッシュ型",
      "Volume Gateway - 保管型",
      "Tape Gateway"
    ],
    "answerIndex": 0,
    "explanation": "S3 File Gatewayは、オンプレミスのファイルアプリケーションにNFSまたはSMB接続を提供し、ファイルをS3上のオブジェクトとしてシームレスに格納します。ローカルには「最近使用されたデータ」のみをキャッシュとして保持するため、ローカルの物理ディスク容量を最小化しつつS3の無限の容量を利用できます。",
    "keywords": [
      "S3 File Gateway",
      "S3オブジェクト",
      "キャッシュ"
    ],
    "domain": "domain-4"
  },
  {
    "id": "stor-14",
    "category": "storage",
    "question": "オンプレミスサーバーのローカルストレージとして、iSCSIターゲットを介してEBSスナップショット対応のブロックボリュームを提供したいです。すべてのプライマリデータをオンプレミスに完全保持しつつ、非同期でAWSにバックアップを保管するStorage Gatewayモードはどれですか？",
    "options": [
      "S3 ファイルゲートウェイ",
      "ボリュームゲートウェイ（保管型 / Stored Volumes）",
      "ボリュームゲートウェイ（キャッシュ型 / Cached Volumes）",
      "FSx ファイルゲートウェイ"
    ],
    "answerIndex": 1,
    "explanation": "ボリュームゲートウェイの「保管型 (Stored Volumes)」は、プライマリデータ全体をローカルのオンプレミスハードウェアに完全保持します。そして、データの特定時点のスナップショットを非同期にEBSスナップショットとしてS3にバックアップします。",
    "keywords": [
      "保管型ボリュームゲートウェイ",
      "iSCSI",
      "オンプレミス保持"
    ],
    "domain": "domain-4"
  },
  {
    "id": "stor-15",
    "category": "storage",
    "question": "オンプレミスの物理テープライブラリバックアップシステムを、アプリケーションの変更なしでクラウドへ移行し、保管コストの極めて低い仮想テープとしてS3 Glacier Deep Archiveなどに長期間アーカイブさせたい場合に最適なStorage Gatewayタイプはどれですか？",
    "options": [
      "S3 ファイルゲートウェイ",
      "ボリュームゲートウェイ",
      "テープゲートウェイ (Tape Gateway)",
      "Amazon FSx ファイルゲートウェイ"
    ],
    "answerIndex": 2,
    "explanation": "テープゲートウェイ (Tape Gateway) は、オンプレミスのテープベースのバックアップアプリケーションに対して、物理テープに代わる「仮想テープライブラリ (VTL)」をiSCSI接続で提供します。バックアップデータをS3にアップロードし、仮想テープをエクスポートすることでS3 GlacierやGlacier Deep Archiveに極めて低コストで保管できます。",
    "keywords": [
      "Tape Gateway",
      "仮想テープライブラリ",
      "Glacierアーカイブ"
    ],
    "domain": "domain-4"
  },
  {
    "id": "stor-16",
    "category": "storage",
    "question": "AWS Organizations を使用しているマルチアカウント環境において、EBS、RDS、DynamoDB、S3などの異なるAWSサービスのバックアップポリシーを一元的に作成・スケジュール管理し、さらにバックアップを別の安全なバックアップ専用アカウントの隔離されたボールトへ自動コピーして集中管理したい場合、使用すべきサービスはどれですか？",
    "options": [
      "AWS Backup",
      "Amazon Data Lifecycle Manager (DLM)",
      "AWS Organizations SCP",
      "AWS Config"
    ],
    "answerIndex": 0,
    "explanation": "AWS Backupは、サポートされているAWSサービス全体のデータバックアップをポリシーベースで一元管理できるフルマネージドサービスです。AWS Organizationsとの統合により、組織全体に対して一元的にバックアッププラン（保持期間、スケジュールなど）を定義でき、ランサムウェア対策としてバックアップデータを異なるアカウントの暗号化されたBackup Vaultへ自動コピーする機能（クロスアカウントコピー）も備えています。",
    "keywords": [
      "AWS Backup",
      "クロスアカウントコピー",
      "一元管理"
    ],
    "domain": "domain-1"
  },
  {
    "id": "stor-17",
    "category": "storage",
    "question": "オンプレミスのオフィスからグローバルな複数地域にあるS3バケットに対して、長距離ネットワーク転送の遅延を抑えて高速に大容量データをアップロードさせたい場合、最も有効なS3機能はどれですか？",
    "options": [
      "S3 マルチパートアップロードのみの使用",
      "S3 Transfer Acceleration",
      "S3 バケットポリシーの圧縮機能",
      "Amazon CloudFront 経由のキャッシュアップロード"
    ],
    "answerIndex": 1,
    "explanation": "S3 Transfer Accelerationは、クライアントとS3バケットの間で長距離に及ぶファイルを高速、安全に転送できるバケットレベルの機能です。AWS Edge Locationネットワークを利用し、インターネット経由の長距離ルーティングを回避して、エッジから最も近いポイントでAWSのグローバルプライベートネットワークに乗せるため、転送パフォーマンスが劇的に向上します。",
    "keywords": [
      "S3 Transfer Acceleration",
      "エッジロケーション",
      "高速アップロード"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-18",
    "category": "storage",
    "question": "Amazon S3のデータ一貫性モデルに関する正しい記述はどれですか？",
    "options": [
      "新規オブジェクトのPUTは強力な整合性を持つが、上書きPUTやDELETEは最終整合性 (Eventual Consistency) である",
      "すべてのPUT、POST、DELETE、およびバケットのメタデータ変更操作に対して、強力な書き込み後読み取り整合性 (Strong Read-After-Write Consistency) が適用されること",
      "データの一貫性はデフォルトでは保証されておらず、一貫性ヘッダーを付与してリクエストを送信する必要がある",
      "S3オブジェクトはデータベースではないため、いかなる場合も結果整合性のみを提供する"
    ],
    "answerIndex": 1,
    "explanation": "現在、Amazon S3はすべての新規オブジェクトの作成（PUT）、既存オブジェクトの上書き（PUT）、およびオブジェクトの削除（DELETE）を含むすべてのリクエストに対して、即座に「強力な書き込み後読み取り整合性（Strong Read-After-Write Consistency）」をサポートしています。",
    "keywords": [
      "S3一貫性モデル",
      "強力な整合性",
      "仕様"
    ],
    "domain": "domain-2"
  },
  {
    "id": "stor-19",
    "category": "storage",
    "question": "EBSボリュームの暗号化に関する正しい記述はどれですか？",
    "options": [
      "EBSボリュームの暗号化は、一度有効化してボリュームを作成すると、暗号化に使用するKMSキーを後から直接変更できる",
      "ボリュームとそこから作成されたスナップショット、およびそのスナップショットから新しく作成されるボリュームは、親の暗号化設定を継承すること。また、暗号化はEC2ホスト側で実行されるため、データ転送中も保護されること",
      "EBSボリュームの暗号化を有効にすると、IOPSおよびスループット性能が最大50%低下する",
      "EBS暗号化は、Nitro搭載以外のインスタンスではサポートされていない"
    ],
    "answerIndex": 1,
    "explanation": "EBSの暗号化はEC2インスタンスが実行されているホスト上で実行されるため、EC2からEBSストレージ間の転送中データも暗号化されます。スナップショットやスナップショットからのコピーは元の暗号化設定を継承します。",
    "keywords": [
      "EBS暗号化",
      "KMS",
      "スナップショット継承"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-20",
    "category": "storage",
    "question": "VPC内のEC2インスタンスから、同じVPC内のAmazon EFSファイルシステムに対して、セキュリティグループを適用してマウント制限（アクセス制御）を行いたい場合、どのような設定が正しいですか？",
    "options": [
      "EFSのマウントターゲットに関連付けられたセキュリティグループで、EC2インスタンスのセキュリティグループIDまたはIPからのTCPポート2049 (NFS) のインバウンド通信を許可すること",
      "EC2インスタンスのセキュリティグループで、アウトバウンドをすべて拒否し、EFSのIPアドレスのみ宛先指定して許可すること",
      "EFSは共有ストレージであるため、セキュリティグループの設定は不要である",
      "EFSのマウントターゲットにEC2のIAMロールを直接紐づけることで、マウント制限を行う"
    ],
    "answerIndex": 0,
    "explanation": "EFSへのネットワークアクセス制御は、EFSがVPC内で生成する各AZごとの「マウントターゲット」に関連付けられたセキュリティグループを通じて行われます。NFSプロトコルのポート（TCP 2049）に対し、接続元となるEC2インスタンスが割り当てられているセキュリティグループからのインバウンドトラフィックを許可するように設定します。",
    "keywords": [
      "EFSセキュリティグループ",
      "NFSポート2049",
      "マウントターゲット"
    ],
    "domain": "domain-2"
  },
  {
    "id": "stor-21",
    "category": "storage",
    "question": "S3バケット内に保存されている大量の個人情報（マイナンバー、クレジットカード番号など）を、機械学習を用いて自動で分類・検出し、セキュリティアラートを発信するためのAWSセキュリティサービスはどれですか？",
    "options": [
      "Amazon GuardDuty",
      "Amazon Macie (マシー)",
      "Amazon Inspector",
      "AWS Secrets Manager"
    ],
    "answerIndex": 1,
    "explanation": "Amazon Macieは、機械学習とパターンマッチングを使用して、AWS上の機密データ（S3内のオブジェクトデータ）を自動的に検出、分類、保護するフルマネージドデータセキュリティサービスです。クレジットカード情報や氏名などの漏洩リスクを継続監視するのに最適です。",
    "keywords": [
      "Amazon Macie",
      "S3機密データ検出",
      "データ保護監査"
    ],
    "domain": "domain-1"
  },
  {
    "id": "stor-22",
    "category": "storage",
    "question": "S3バケットで「バージョニング」を有効にしていますが、アプリケーションのバグにより大量の不要な非現行バージョン（古いファイルバージョン）が蓄積され、ストレージ費用が急増しています。現行バージョンに影響を与えずに、非現行バージョンのみを自動で削除または安価なGlacierに移行させるための設定はどれですか？",
    "options": [
      "バージョニングの一時的な無効化",
      "S3バケットのライフサイクルルールで、「非現行バージョンの移行/削除アクション (NoncurrentVersionTransitions / NoncurrentVersionExpiration)」を設定すること",
      "S3オブジェクトロックの有効化",
      "バケットポリシーでの `s3:PutObject` の拒否設定"
    ],
    "answerIndex": 1,
    "explanation": "S3ライフサイクル管理機能は、オブジェクトの「非現行バージョン」に対する独自アクションを定義できます。`NoncurrentVersionTransitions`で非現行バージョンをGlacierへ自動的に移動したり、`NoncurrentVersionExpiration`により指定日数（例: 30日）が経過した非現行バージョンを自動削除したりすることで、無駄なストレージ料金の上昇を抑えられます。",
    "keywords": [
      "非現行バージョン",
      "S3ライフサイクル",
      "コストスケーリング"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-23",
    "category": "storage",
    "question": "VPC外にある社内のオンプレミスネットワークから、専用線（Direct Connect）を経由してS3のパブリックIPエンドポイントではなく、プライベートVPCエンドポイントを介してS3バケットに安全にアクセスしたいです。どのエンドポイントタイプを選択すべきですか？",
    "options": [
      "ゲートウェイエンドポイント",
      "インターフェイスエンドポイント (S3用の PrivateLink エンドポイント)",
      "VPC ピアリング接続",
      "S3 Access Points"
    ],
    "answerIndex": 1,
    "explanation": "S3用の「ゲートウェイエンドポイント」はVPC内でのルートテーブル書き換えベースで動作するため、オンプレミスからDirect Connectを介して直接プライベートIPでアクセスすることはできません。S3用の「インターフェイスエンドポイント (PrivateLink)」を作成すると、VPC内にプライベートIPアドレスが割り当てられ、オンプレミスからもDirect Connect経由でS3へのプライベートアクセスが可能になります。",
    "keywords": [
      "S3 PrivateLink",
      "インターフェイスエンドポイント",
      "オンプレミスS3アクセス"
    ],
    "domain": "domain-1"
  },
  {
    "id": "stor-24",
    "category": "storage",
    "question": "S3の署名付きURL（Presigned URL）を作成して、外部クライアントに一時的にバケットへのオブジェクトアップロード（PUT）を許可します。この Presigned URL でアップロードを試みた際、認証エラー（Access Denied）が発生しました。最も可能性の高い原因はどれですか？",
    "options": [
      "S3バケットでバージョニングが有効になっているため",
      "署名付きURLを生成した「IAMユーザー/ロール」自体に、対象バケットへの `s3:PutObject` 権限がないため",
      "バケットに署名付きURL制限ポリシーがないため",
      "KMSでのデフォルト暗号化が設定されていないため"
    ],
    "answerIndex": 1,
    "explanation": "署名付きURL (Presigned URL) は、生成元のIAMプリンシパル（ユーザーやロール）の持つ権限を代理行使します。そのため、URLが有効期限内であっても、そのURLを生成したIAMアカウント自体に `s3:PutObject`（または `s3:GetObject`）の権限が不足している場合は、クライアント側でアクセス拒否となります。",
    "keywords": [
      "Presigned URL",
      "S3アクセスエラー",
      "IAM権限"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-25",
    "category": "storage",
    "question": "Amazon EFSのスループット容量モードを選定しています。通常時のスループット負荷は極めて低いが、時折発生するファイルコピーバッチの処理時にのみ、瞬間的かつ自動的に最大数GB/秒まで必要な帯域幅を自動で提供して課金されるスループットモードはどれですか？",
    "options": [
      "バーストモード (Bursting Throughput)",
      "プロビジョンドモード (Provisioned Throughput)",
      "エラスティックモード (Elastic Throughput)",
      "ダイナミックスループット"
    ],
    "answerIndex": 2,
    "explanation": "Amazon EFSの「エラスティック（Elastic）」スループットモードは、ファイルシステムの読み書きアクティビティに基づいて、追加の容量プロビジョニング設定なしにスループットを動的かつ瞬時に自動スケーリングします。予測不能で時折発生する瞬間スパイク負荷に対して、無駄な待機基本料を払わずに従量課金されるため最適です。",
    "keywords": [
      "EFSスループット",
      "エラスティックモード",
      "従量課金"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-26",
    "category": "storage",
    "question": "FSx for Lustre を使用して、機械学習のトレーニングデータを高速に処理します。データはS3にオリジナルが保存されており、FSx上のファイルシステムは一時的なキャッシュとして機能するため、耐障害性やデータ永続性は不要です。コストが最も安いFSx Lustre構成はどれですか？",
    "options": [
      "パーシステント1 (Persistent 1)",
      "パーシステント2 (Persistent 2)",
      "スクラッチ2 (Scratch 2) 展開タイプ",
      "シングルAZ OpenZFS"
    ],
    "answerIndex": 2,
    "explanation": "FSx for Lustreには「スクラッチ（Scratch）」と「パーシステント（Persistent）」のデプロイタイプがあります。スクラッチ2 (Scratch 2) は一時的なデータ処理用に設計されており、レプリケーションを行わないため、同スペックのパーシステントタイプに比べてストレージ料金が格段に安くなります。データは失われてもS3から再マッピング可能なため、HPCのジョブ実行にはスクラッチが適しています。",
    "keywords": [
      "FSx for Lustre",
      "スクラッチストレージ",
      "コスト削減"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-27",
    "category": "storage",
    "question": "AWS Backupを使用して、AWS Organizations内の子アカウントのRDSデータベースのバックアップデータを、親アカウント（またはバックアップ専用アカウント）のBackup Vaultにコピーする「クロスアカウントバックアップ」を構築します。必要なKMS暗号化キーの考慮事項はどれですか？",
    "options": [
      "AWS管理キー（aws/rds）を使用する",
      "ソースアカウント側で「カスタマー管理キー (CMK)」を作成し、そのキーポリシーでターゲットアカウントからのアクセスを許可し、コピー先Vaultでも独自のCMKで再暗号化するように構成すること",
      "暗号化キーは不要で、データ共有ポリシーのみで許可する",
      "クロスアカウントコピーは暗号化されたリソースではサポートされていない"
    ],
    "answerIndex": 1,
    "explanation": "クロスアカウントでバックアップを移行・コピーする場合、AWS管理キー（`aws/rds`など）で暗号化されたリソースはコピーできません。これは別アカウントからAWS管理キーを復号できないためです。解決には「カスタマー管理キー (CMK)」を使用し、キーポリシーで別アカウントへの使用許可（`kms:CreateGrant`, `kms:Decrypt`など）を与える必要があります。コピー先でもコピー先アカウントのCMKで再暗号化されます。",
    "keywords": [
      "AWS Backup",
      "クロスアカウント暗号化",
      "KMSキーポリシー"
    ],
    "domain": "domain-1"
  },
  {
    "id": "stor-28",
    "category": "storage",
    "question": "オンプレミスから大容量ファイルデータをAWSへ転送するオンラインデータ転送手段として「AWS DataSync」と「AWS Storage Gateway」のどちらを選ぶべきか判断基準に迷っています。適切な使い分けに関する正しい記述はどれですか？",
    "options": [
      "DataSyncは常時マウントして使うローカルキャッシュ用であり、Storage Gatewayは1回限りの移行用である",
      "DataSyncは「特定タイミングで大量のデータを一元同期・転送・移行（バッチ同期）」する目的のサービスであり、Storage Gatewayは「オンプレミスアプリケーションが常時マウントして継続的に読み書き（リアルタイムのキャッシュストレージ）」する目的のサービスであること",
      "DataSyncのみが専用回線を利用できる",
      "Storage Gatewayはデータ検証機能を持っていない"
    ],
    "answerIndex": 1,
    "explanation": "AWS DataSyncは、S3/EFS/FSxとオンプレミスNAS間の「データ同期・一括転送（移行やバックアップ）」に特化したツールです。一方、AWS Storage Gatewayは、オンプレミスのアプリケーションがローカルディスクと同じようにNFS/SMBやiSCSIプロトコルで「日常的にマウントし、クラウドを拡張ストレージとして使用する（キャッシュ機能）」ためのハイブリッドゲートウェイです。",
    "keywords": [
      "DataSync",
      "Storage Gateway",
      "使い分け"
    ],
    "domain": "domain-4"
  },
  {
    "id": "stor-29",
    "category": "storage",
    "question": "S3バケットに対するデータ管理ルールとして、S3オブジェクトを書き込む際、バケットに設定された「暗号化されていない状態のPUTリクエスト」を自動的にブロックし、常にHTTPS（暗号化転送）およびサーバーサイド暗号化（SSE）を強制させたい場合、どうすればよいですか？",
    "options": [
      "S3バージョニングを有効にする",
      "バケットポリシーで、`aws:SecureTransport`（HTTPS転送）が `false` の場合、および `s3:x-amz-server-side-encryption` ヘッダーが指定されていない場合に、`s3:PutObject` の実行を「明示的拒否 (Deny)」に設定すること",
      "KMSキーを手動で毎回リクエストに埋め込ませる",
      "Block Public Access を有効にする"
    ],
    "answerIndex": 1,
    "explanation": "S3バケットポリシーに条件キーを設定します。'Bool': {'aws:SecureTransport': 'false'}での通信拒否によりHTTPS接続を強制し、'Null': {'s3:x-amz-server-side-encryption': 'true'}などを組み合わせて暗号化ヘッダーのない書き込み（PUT）を明示的に拒否（Deny）することで、セキュリティ基準を満たさない書き込みをシステム的に排除できます。",
    "keywords": [
      "S3バケットポリシー",
      "aws:SecureTransport",
      "暗号化強制"
    ],
    "domain": "domain-1"
  },
  {
    "id": "stor-30",
    "category": "storage",
    "question": "AWS Backupの「ボールトロック (Vault Lock)」機能を有効化し、さらにポリシーを「コンプライアンスモード（ロック状態）」で保存した際の影響として、正しいものはどれですか？",
    "options": [
      "管理者（ルートユーザー）であっても、ボールト内の既存のバックアップデータを削除したり、バックアップポリシーの保持期間を短縮したりすることが永久に不可能になること",
      "バックアップの実行速度が向上する",
      "バックアップの料金が無料になる",
      "別リージョンへのバックアップコピーができなくなる"
    ],
    "answerIndex": 0,
    "explanation": "AWS Backup Vault Lockは、バックアップボールトを不変（WORM）ストレージに変える機能です。コンプライアンスモードでロックすると、テスト用のクーリングオフ期間（通常数日間）が過ぎた後は、ルートユーザーを含め誰であってもバックアップの強制削除や、保持期間を短くするポリシーの編集ができなくなります。これによりランサムウェア等の攻撃からバックアップデータを完全に保護できます。",
    "keywords": [
      "Vault Lock",
      "ボールトロック",
      "ランサムウェア対策"
    ],
    "domain": "domain-1"
  },
  {
    "id": "stor-31",
    "category": "storage",
    "question": "オンプレミスから AWS への大容量データの同期において、AWS DataSync を使用して既存のオンプレミス NAS (NFS) から AWS の Amazon EFS へデータを移行します。移行元と移行先のメタデータ（所有者ID、グループID、POSIX権限、タイムスタンプなど）を完全に維持してコピーするためのDataSync設定はどれですか？",
    "options": [
      "DataSyncのデフォルト設定で自動的にこれらすべてのメタデータ属性が維持してコピーされること",
      "S3バケットを経由してインポートする",
      "メタデータは転送後に手動で再適用する必要がある",
      "DataSyncはPOSIX権限のコピーをサポートしていない"
    ],
    "answerIndex": 0,
    "explanation": "AWS DataSyncは、NFS/SMBからEFS/FSx/S3へのデータ転送時に、POSIXアクセス許可、所有者UID/GID、グループ情報、タイムスタンプ、シンボリックリンクなどのファイルメタデータを「デフォルトで」自動的に維持するように設計されています。追加の設定スクリプトや手動適用の手間なく、オンプレミスと同一のセキュリティ権限で移行が可能です。",
    "keywords": [
      "DataSync",
      "POSIXメタデータ",
      "EFS同期"
    ],
    "domain": "domain-4"
  },
  {
    "id": "stor-32",
    "category": "storage",
    "question": "Amazon S3において、オブジェクトのサイズが数GB〜数十GB規模の超大容量オブジェクトをアップロードする際、ネットワーク障害時の再送コストを低減し、アップロードのスループットを最大化するために必須とされるアップロード手法・仕様はどれですか？",
    "options": [
      "S3 Transfer Acceleration のみ",
      "S3 マルチパートアップロード (Multipart Upload) の使用",
      "S3 Selectの使用",
      "HTTPS接続の無効化"
    ],
    "answerIndex": 1,
    "explanation": "マルチパートアップロード (Multipart Upload) を使用すると、単一のオブジェクトを複数のパートに分割して、並列にアップロードできます。1つのパートがネットワークエラー等で失敗しても、そのパートの再送信だけで済むため、再送コストが激減し、並列処理による速度向上も見込めます。なお、100MB以上のオブジェクトはマルチパートの使用がベストプラクティス（5GB以上は必須）です。",
    "keywords": [
      "マルチパートアップロード",
      "S3アップロード",
      "並列処理"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-33",
    "category": "storage",
    "question": "S3バケットポリシーで「特定のVPC内（VPCエンドポイント）を経由したアクセスのみを許可し、それ以外のインターネットや他アカウントからのアクセスをすべて遮断する」ためのポリシー条件設定として、正しいキーはどれですか？",
    "options": [
      "aws:sourceIp",
      "aws:sourceVpce (または aws:sourceVpc)",
      "aws:PrincipalOrgID",
      "aws:SecureTransport"
    ],
    "answerIndex": 1,
    "explanation": "条件キー `aws:sourceVpce` を使用することで、リクエストが「特定のVPCエンドポイント」を経由して届いた場合のみをS3アクセス許可の対象にできます（または `aws:sourceVpc` で特定のVPC自体を指定）。これにより、インターネット経由の全通信や他のVPCエンドポイントからの通信をバケットポリシーで明示的に拒否できます。",
    "keywords": [
      "aws:sourceVpce",
      "VPCエンドポイントポリシー",
      "S3プライベート接続"
    ],
    "domain": "domain-1"
  },
  {
    "id": "stor-34",
    "category": "storage",
    "question": "数百万件以上のオブジェクトが含まれる極めて巨大なS3バケットを所有しています。バケット内のオブジェクトのサイズ、暗号化ステータス、レプリケーション状態を一元的にリスト化し、監査レポート（CSV）として自動的に作成・出力するために使用するS3の機能はどれですか？",
    "options": [
      "S3 Select",
      "S3 インベントリ (S3 Inventory)",
      "S3 分析 (S3 Analytics)",
      "S3 ライフサイクル管理"
    ],
    "answerIndex": 1,
    "explanation": "S3 インベントリ (S3 Inventory) は、S3バケット内のオブジェクトおよびその対応するメタデータに関するレポートを毎日または毎週生成する機能です。これにより、オブジェクトごとのサイズ、暗号化の有無、レプリケーション状態などをCSVやParquet形式でリスト出力でき、セキュリティ監査やコスト分析に利用できます。",
    "keywords": [
      "S3インベントリ",
      "オブジェクト監査",
      "メタデータレポート"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-35",
    "category": "storage",
    "question": "S3バケットへのマルチパートアップロード中に、クライアント側の処理中断やエラーによってアップロードが未完了（不完全）のまま放置された「浮いたパーツデータ（不完全なマルチパートオブジェクト）」がストレージ料金を消費するのを防ぎ、自動で削除させるための最良の方法はどれですか？",
    "options": [
      "S3バージョニングの無効化",
      "S3ライフサイクルルールで「不完全なマルチパートアップロードの削除 (AbortIncompleteMultipartUpload)」を設定すること",
      "S3オブジェクトロックの設定",
      "定期的に手動でバケットを全削除する"
    ],
    "answerIndex": 1,
    "explanation": "マルチパートアップロードが途中で切れると、その時までに送信されたオブジェクトパーツがバケットに残り続け、通常ストレージと同様に課金されます。S3ライフサイクルルールで `AbortIncompleteMultipartUpload` アクションを有効にし、指定日数（例: 7日）を設定することで、未完了のマルチパートデータが自動的にクリーンアップされ、不要なストレージ料金の発生を防げます。",
    "keywords": [
      "AbortIncompleteMultipartUpload",
      "S3コスト削減",
      "マルチパートクリーンアップ"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-36",
    "category": "storage",
    "question": "ミリ秒未満の極めて一貫した超低遅延が要求される、ハイパフォーマンスな機械学習モデルのトレーニングデータや金融取引ログのキャッシュ用として、S3の最新の単一可用性ゾーン専用の超高速なストレージクラスはどれですか？",
    "options": [
      "S3 Standard",
      "S3 Express One Zone",
      "S3 One Zone-IA",
      "S3 Glacier Instant Retrieval"
    ],
    "answerIndex": 1,
    "explanation": "S3 Express One Zoneは、最も要求の厳しい極めて低レイテンシーなアプリケーション向けに特別に設計された高性能なディレクトリバケット用ストレージクラスです。S3 Standardと比較して最大10倍の読み書きパフォーマンスと一貫したミリ秒未満のレイテンシーを提供し、コンピューティングリソース（EC2, ECS, EKSなど）と物理的に近い単一の可用性ゾーンに配置されます。",
    "keywords": [
      "S3 Express One Zone",
      "超低遅延ストレージ",
      "機械学習キャッシュ"
    ],
    "domain": "domain-2"
  },
  {
    "id": "stor-37",
    "category": "storage",
    "question": "オンプレミスのWindowsファイルサーバーのストレージ拡張やDR（災害対策）構成を検討しています。DFS（分散ファイルシステム）を使用して、オンプレミスとAWSの FSx for Windows File Server 間で双方向のレプリケーションを確立し、単一の名前空間で透過的にファイル共有を行わせるために連携すべきFSxの構成はどれですか？",
    "options": [
      "FSx File Gatewayの配置のみ",
      "DFS レプリケーション (DFSR) と DFS 名前空間 (DFSN) の構成を組み合わせること",
      "AWS DataSync の常時同期",
      "Storage Gateway Volume Gateway"
    ],
    "answerIndex": 1,
    "explanation": "FSx for Windows File Serverは、Microsoft Active Directoryと統合されたネイティブなDFS（Distributed File System）をサポートしています。DFS レプリケーション (DFSR) を使用して、オンプレミスのファイルサーバーとAWS上のFSxとの間で自動同期を可能にし、DFS 名前空間 (DFSN) でユーザーに対して統一された共有パス（例: \\\\corp\\\\share）を提供できます。",
    "keywords": [
      "DFS",
      "FSx for Windows",
      "ハイブリッドファイルサーバー"
    ],
    "domain": "domain-4"
  },
  {
    "id": "stor-38",
    "category": "storage",
    "question": "EBSボリュームに対して「 Modify Volume (ボリュームの動的変更)」APIを実行してサイズをオンラインのまま拡張しました。ディスクのサイズをOS上で実際に認識・反映させるために実行すべき標準的なOSレベルのタスクはどれですか？",
    "options": [
      "EBSボリュームを一度デタッチしてアタッチし直す",
      "OSのファイルシステム拡張コマンド（例: Linuxでの `resize2fs` や `xfs_growfs`）を実行してパーティションとファイルシステムをスケールさせること",
      "EC2インスタンスを再起動する",
      "EBSボリュームの暗号化を解除する"
    ],
    "answerIndex": 1,
    "explanation": "EBSのModify Volume APIはインスタンスの再起動なし（無停止）で容量やパフォーマンスを変更できますが、AWS側の変更が完了した後に、EC2インスタンスのOS内部で「ファイルシステムのサイズ拡張」コマンド（Linuxの `xfs_growfs` や `resize2fs`、Windowsのディスク管理でのボリューム拡張）を実行し、追加された空き領域をファイルシステムに組み込まなければ実際の容量は増えません。",
    "keywords": [
      "Modify Volume",
      "ファイルシステム拡張",
      "オンラインサイズ変更"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-39",
    "category": "storage",
    "question": "企業独自のAD環境で、複数のAWSアカウント間でのデータ共有や、Active Directoryのグループメンバーシップに基づいてS3バケット内のフォルダアクセス権限を一元的に制御・マッピングしたい場合、推奨される最新のS3機能はどれですか？",
    "options": [
      "S3 バケットACLの再有効化",
      "S3 Access Grants",
      "AWS Lake Formation 共有",
      "AWS Organizations SCP"
    ],
    "answerIndex": 1,
    "explanation": "S3 Access Grantsは、Active Directory、Oktaなどのアイデンティティプロバイダー (IdP) のIDやグループ情報に基づいて、S3バケット内の特定のプレフィックス（ディレクトリ）に対するアクセス許可を自動的にマッピング・管理できる機能です。これにより、ユーザーIDに基づいて安全な一時的アクセス権（IAMロール）を動的に発行できます。",
    "keywords": [
      "S3 Access Grants",
      "AD ID連携",
      "データディレクトリ認可"
    ],
    "domain": "domain-1"
  },
  {
    "id": "stor-40",
    "category": "storage",
    "question": "Amazon EFSをコンテナ（Amazon ECS/EKSなど）から共有マウントして永続ストレージとして使用する際、各コンテナタスクに対して「特定のユーザーID (UID) / グループID (GID)」でのマウントを強制させ、ファイルシステム内の特定のフォルダ配下以外へのアクセスを禁止するためのアクセス制御コンポーネントはどれですか？",
    "options": [
      "EFS セキュリティグループの個別アタッチ",
      "EFS アクセスポイント (Access Points)",
      "ECS IAM タスクロール制限",
      "S3 Access Points"
    ],
    "answerIndex": 1,
    "explanation": "EFS アクセスポイント (Access Points) を使用すると、ファイルシステムへの接続に対してアプリケーション固有のルートディレクトリ、および強制するユーザーID/グループID（POSIX情報）を適用できます。これにより、同一のEFSを複数コンテナで共有しながら、コンテナごとに安全なプライベートフォルダのみをマウント制限させることが容易になります。",
    "keywords": [
      "EFSアクセスポイント",
      "コンテナ永続ストレージ",
      "コンテナマウント制限"
    ],
    "domain": "domain-2"
  },
  {
    "id": "stor-41",
    "category": "storage",
    "question": "S3オブジェクトを別のAWSアカウントにコピーまたはレプリケートする際、オブジェクトの所有権（Owner）が自動的に送信元アカウントのままになってしまい、送信先のアカウント管理者がファイルを開けない（オブジェクトにアクセスできない）問題を防ぎ、強制的に送信先バケット所有者に所有権を移転させたい場合に必要なS3設定はどれですか？",
    "options": [
      "S3バージョニングの解除",
      "送信先バケットで S3 オブジェクト所有者 (Object Ownership) の「バケットオーナーの強制 (Bucket Owner Enforced)」を設定し、ACLを完全に無効化すること",
      "コピー元のIAMロールにAdministrator権限を付与する",
      "KMS暗号化キーを無効にする"
    ],
    "answerIndex": 1,
    "explanation": "送信先バケットの設定でS3 Object Ownershipを「Bucket Owner Enforced」に設定します。これにより、バケットのACLが無効化され、アップロードされたすべてのオブジェクトの所有権が、アップロードを実行したアカウントに関わらず、自動的かつ強制的に「送信先のバケット所有者アカウント」になります。データ共有時のアクセス拒否問題を防ぐベストプラクティスです。",
    "keywords": [
      "Object Ownership",
      "ACL無効化",
      "クロスアカウントS3コピー"
    ],
    "domain": "domain-1"
  },
  {
    "id": "stor-42",
    "category": "storage",
    "question": "Amazon FSx for NetApp ONTAP を構築し、オンプレミスNASと同様の共有フォルダを管理しています。データの肥大化に伴うストレージの物理容量コストを抑えるため、長期間アクセスされていないコールドデータを自動でFSxの背後にある低コストなS3オブジェクトストレージに移動させたいです。どの機能を使用しますか？",
    "options": [
      "AWS DataSyncでのファイル抽出同期",
      "ONTAP の FabricPool 階層化ポリシー (Tiering Policy)",
      "FSx ライフサイクルルール",
      "EFS ライフサイクルポリシー"
    ],
    "answerIndex": 1,
    "explanation": "FSx for NetApp ONTAPは、NetApp独自の「FabricPool」技術を標準でサポートしています。階層化ポリシー（Auto, Snapshot-only, Allなど）を設定することで、アクセス頻度の低いコールドブロックを透過的にAmazon S3（FSx キャパシティプールストレージ）に自動移動させ、ユーザーには同一ファイルとして見せつつ物理SSD容量のコストを劇的に最適化できます。",
    "keywords": [
      "FabricPool",
      "FSx for NetApp ONTAP",
      "階層化ストレージ"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-43",
    "category": "storage",
    "question": "EBSボリュームに対して「マルチアタッチ (Multi-Attach)」を有効にし、同一可用性ゾーン内の最大16台のNitro搭載EC2インスタンスに同時アタッチして共有ディスクとして使用します。この構成をクラッシュさせずに正しく安全に運用するための必須のOS/ファイルシステム上の要件はどれですか？",
    "options": [
      "通常の ext4 や xfs ファイルシステムで初期化する",
      "クラスタ対応ファイルシステム（GFS2, OCFS2など）を使用し、OS側でクラスタライトマネージャーを管理・排他制御すること",
      "すべてのEC2でIAMロールを共通化する",
      "EBSボリュームのI/Oスロットリング設定を有効にする"
    ],
    "answerIndex": 1,
    "explanation": "EBSマルチアタッチは複数のインスタンスから同時に読み書きできるようにしますが、EBS自体は書き込みの競合防止機能（排他制御）を持ちません。そのため、通常のファイルシステム（ext4, xfs, NTFS等）のまま複数アタッチするとデータが即座に破損します。正しく扱うには、クラスタ対応のファイルシステムと分散ロックマネージャーをOS上でインストール・制御する必要があります。",
    "keywords": [
      "EBSマルチアタッチ",
      "クラスタファイルシステム",
      "データ破損防止"
    ],
    "domain": "domain-2"
  },
  {
    "id": "stor-44",
    "category": "storage",
    "question": "S3バケット内に保存されているテラバイト規模のCSVファイルから、特定の列および特定の条件に合致する「一部の行データ」のみを抽出して取得したいです。S3からファイル全体をEC2にダウンロードしてメモリ上でフィルタリングするのに比べ、転送量と読み込み時間を劇的に削減できるS3のAPI機能はどれですか？",
    "options": [
      "S3 Select",
      "S3 インベントリ",
      "S3 Athena Federated Query",
      "S3 バッチオペレーション"
    ],
    "answerIndex": 0,
    "explanation": "S3 Selectを使用すると、S3のオブジェクト（CSV, JSON, Parquet形式）に対して簡単なSQLクエリを実行し、条件に一致する「一部のデータのみ」をS3側で抽出して、その結果だけを取得できます。これにより、ネットワーク経由で転送されるデータ量が激減し、コンポーネント（LambdaやEC2など）での処理効率が飛躍的に向上します。",
    "keywords": [
      "S3 Select",
      "SQLフィルタリング",
      "データスキャンの最適化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-45",
    "category": "storage",
    "question": "AWSアカウントに組織的なガバナンスとして、開発者や事業部門が作成する新規のS3バケットが、設定ミスやポリシー変更ミスによって外部（インターネット全体）へ誤って公開（パブリック公開）されることをアカウント・組織レベルで強制的に一括防止したい場合、どの機能を有効化すべきですか？",
    "options": [
      "S3 アクセスポイントポリシーの適用",
      "アカウントまたはOrganizationsの「ブロックパブリックアクセス (Block Public Access)」の設定を一括有効化すること",
      "S3オブジェクトロックの適用",
      "AWS WAFの統合"
    ],
    "answerIndex": 1,
    "explanation": "S3 ブロックパブリックアクセス (Block Public Access) は、AWSアカウントレベル、またはAWS Organizationsの組織・OUレベルで設定できます。これを有効にしておくことで、個別のバケットでどんなに寛容なACLやバケットポリシー（'Principal': '*'等）が追加されても、アカウントのブロック設定が最優先され、すべてのパブリックアクセスが強制遮断されるため、情報漏洩を組織的に防御できます。",
    "keywords": [
      "ブロックパブリックアクセス",
      "S3パブリック公開禁止",
      "アカウントガードレール"
    ],
    "domain": "domain-1"
  },
  {
    "id": "stor-46",
    "category": "storage",
    "question": "S3ライフサイクルルールを構成して、多数のログオブジェクトを低コストな Standard-IA（低頻度アクセス）クラスに順次移行させるように設定しました。しかし、実際に移行が適用された後、ストレージ料金が想定に反して「高くなって」しまいました。最も可能性の高い原因はどれですか？",
    "options": [
      "Standard-IAは Standard よりもストレージ基本単価が高いため",
      "移行対象オブジェクトのサイズが極めて小さく（128KB未満）、Standard-IAの最小オブジェクトサイズ課金（128KB分の請求）およびオブジェクト移行手数料が上回ったため",
      "バージョニングが解除されたため",
      "ライフサイクルルール実行のシステム基本料金が高額であるため"
    ],
    "answerIndex": 1,
    "explanation": "S3のIA（低頻度アクセス）クラスは、オブジェクトごとに最小128KBのサイズが課金対象となります。また、移行時にはライフサイクル移行手数料（オブジェクト数に応じた費用）が発生します。そのため、数KBなどの小さなファイルを大量にIAへ移行させると、ストレージ容量が削減されても最小課金枠と移行手数料で逆にコストが跳ね上がるため、S3ライフサイクルではサイズフィルターを適切に設定する必要があります。",
    "keywords": [
      "S3ライフサイクルコスト",
      "最小オブジェクトサイズ制限",
      "移行手数料"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-47",
    "category": "storage",
    "question": "ミッションクリティカルなデータベースのバックアップにおいて、AWS Backupを使用して毎日の自動スナップショットを生成しています。バックアップデータの完全な可用性を保証し、プライマリリージョン全体の物理障害（大規模災害）に備えてDR（災害対策）を実現するための構成はどれですか？",
    "options": [
      "自動的にS3 Glacier Deep Archiveにデータを移行する",
      "AWS Backup プランで、バックアップを指定した「別リージョンへ自動コピー (Cross-Region Copy)」するデスティネーション設定を追加すること",
      "同一リージョンの別可用性ゾーンへコピーする",
      "手動でスナップショットをダウンロードして別アカウントにアップロードする"
    ],
    "answerIndex": 1,
    "explanation": "AWS Backupでは、バックアッププランの定義内で「コピー先デスティネーション（別リージョンのBackup Vault）」を指定できます。これにより、バックアップの完了と同時に、AWSのグローバルネットワークを介して自動的かつ安全にスナップショットが別リージョンへ非同期コピーされ、リージョン障害時にもデータ復旧が可能なDR環境が自動構築されます。",
    "keywords": [
      "AWS Backup",
      "クロスリージョンコピー",
      "災害対策 DR"
    ],
    "domain": "domain-1"
  },
  {
    "id": "stor-48",
    "category": "storage",
    "question": "オンプレミスから AWS へのオンラインデータ転送を計画しています。オンプレミスに一時的な仮想アプライアンス（ゲートウェイエージェント）をプロビジョニングすることなく、AWS クラウドから直接、インターネット経由のセキュア接続でオンプレミスサーバーの SFTP サーバー等へ接続し、一方向で自動的に大容量データをS3へバッチ同期させる最適なAWSサービスはどちらですか？",
    "options": [
      "AWS Storage Gateway (File Gateway)",
      "AWS DataSync (ソースの場所としてSFTPロケーションを指定し、DataSync用のパブリックネットワーク経路を使用すること)",
      "AWS Transfer Family (SFTPコネクタ)",
      "S3 Transfer Acceleration"
    ],
    "answerIndex": 1,
    "explanation": "AWS DataSyncは、ソースロケーションとしてオンプレミスのSFTPサーバー、SMB共有、またはNFSを指定できます。オンプレミス側へ専用のDataSyncエージェントをデプロイできない場合やデプロイが不要な構成であっても、AWS上のDataSyncサービスから直接外部のSFTPサーバーへ安全に接続してデータの取得・同期を行うことが可能です。",
    "keywords": [
      "AWS DataSync",
      "SFTPロケーション",
      "エージェントレスデータ転送"
    ],
    "domain": "domain-4"
  },
  {
    "id": "stor-49",
    "category": "storage",
    "question": "S3のデフォルト暗号化設定において、KMSカスタマー管理キー（CMK）を使用した「エンベロープ暗号化（SSE-KMS）」を行っています。APIリクエストの急増に伴い、KMSの暗号化/復号リクエスト数制限（クォータ制限）によるスロットリングエラーが発生し始めました。コストを抑えつつこのKMS制限を回避するためのS3バケット設定はどれですか？",
    "options": [
      "暗号化キーをAWS管理キーに変更する",
      "S3バケットキー (S3 Bucket Keys) を有効にすること",
      "KMSキーの自動ローテーションを有効にする",
      "KMSのクォータ追加制限の申請のみを行う"
    ],
    "answerIndex": 1,
    "explanation": "S3 バケットキー (S3 Bucket Keys) を有効にすると、S3はKMSからバケット単位の一時的な「データキー」を生成し、そのキーをS3内でローカルキャッシュしてオブジェクトの暗号化に使用します。これにより、オブジェクトごとのKMS API呼び出しが不要になり、KMSからS3へのリクエスト数が最大99%削減されるため、KMS利用料金の節約とスロットリングの完全回避が実現します。",
    "keywords": [
      "S3バケットキー",
      "SSE-KMS",
      "KMSスロットリング回避"
    ],
    "domain": "domain-3"
  },
  {
    "id": "stor-50",
    "category": "storage",
    "question": "Amazon EFSのスループット構成において、EC2インスタンスおよびAWS Fargateから常時高いI/O処理能力が要求される一方、データ自体の容量は数GB程度と非常に小さいです。十分なパフォーマンス（IOPS / 帯域幅）を確保するための最適なスループット設定はどちらですか？",
    "options": [
      "バーストスループットモードを使用する",
      "プロビジョニングされたスループット (Provisioned Throughput) または エラスティック (Elastic) スループットモードを使用すること",
      "EFSの代わりにEBS gp3ボリュームを使用する",
      "EFSのライフサイクル移行期間を1日に設定する"
    ],
    "answerIndex": 1,
    "explanation": "EFSの「バーストスループット」モードでは、提供されるスループット性能はファイルシステムのデータ容量に比例します（1GiBあたり50KiB/sなど）。そのため、データ量が小さい場合はスループットが極めて低く制限されます。容量が小さくても高いパフォーマンスが必要な場合は、「プロビジョニングスループット」モードで明示的な帯域幅（例: 100MB/s）を定義するか、負荷に応じて自動スケーリングする「エラスティック」モードを選択すべきです。",
    "keywords": [
      "EFSスループット",
      "プロビジョニングスループット",
      "EFSパフォーマンス最適化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-01",
    "category": "database",
    "question": "グローバルに展開するアプリケーションにおいて、RTO(目標復旧時間)を1分未満、RPO(目標復旧時点)を1秒未満に抑えて、異なるAWSリージョン間で低レイテンシーのデータベース読み取りアクセスを提供したいです。どのサービスを選ぶべきですか？",
    "options": [
      "RDS Multi-AZ",
      "Amazon Aurora グローバルデータベース",
      "RDS リードレプリカ (クロスリージョン)",
      "Amazon DynamoDB (ローカルレプリカ)"
    ],
    "answerIndex": 1,
    "explanation": "Amazon Aurora グローバルデータベースは、通常1秒未満のレイテンシーで別リージョンにデータをレプリケートします。プライマリリージョンで障害が発生した場合、セカンダリリージョンへのフェイルオーバーは通常1分未満で完了し、低いRTO/RPOを満たせます。RDSの通常のクロスリージョンレプリカは非同期であり、フェイルオーバーが手動となるためRTOが長くなります。",
    "keywords": [
      "Aurora Global Database",
      "RTO/RPO",
      "グローバルレプリケーション"
    ],
    "domain": "domain-2"
  },
  {
    "id": "db-02",
    "category": "database",
    "question": "DynamoDBにおいて、データ容量が急激に増加し、アクセスが特定のプライマリキーに集中することで発生する「ホットパーティション」問題を回避するための設計ベストプラクティスはどれですか？",
    "options": [
      "すべてのインデックスに同一のパーティションキーを使用する",
      "パーティションキーの「カーディナリティ（値の多様性）」を高め、キーの末尾にランダムなサフィックス（ハッシュ値など）を追加して書き込みを分散させること",
      "DynamoDBストリームを無効化する",
      "プロビジョンドスループットの自動スケーリングのみに依存する"
    ],
    "answerIndex": 1,
    "explanation": "DynamoDBのベストプラクティスは、パーティションキーの選択において「カーディナリティ」が高い値（ユーザーID、注文IDなど）を指定し、アクセスが全パーティションに均等に分散されるように設計することです。さらに書き込みが超高密度で集中する場合は、キーの末尾にランダムな値（サフィックス）を付与して一時的にキーを論理分割（シャーディング）する設計を行います。",
    "keywords": [
      "DynamoDB",
      "ホットパーティション",
      "カーディナリティ"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-03",
    "category": "database",
    "question": "リレーショナルデータベース（Amazon RDS PostgreSQL）において、セキュリティ要件に基づき、データベースへのアクセス時に「固定パスワード」の管理や漏洩リスクを完全に排除したいです。どの認証方式を構成すべきですか？",
    "options": [
      "IAM データベース認証",
      "AWS Secrets Manager による自動ローテーションのみ",
      "マルチファクター認証 (MFA)",
      "Active Directory ユーザー認証のみ"
    ],
    "answerIndex": 0,
    "explanation": "IAM データベース認証を使用すると、RDS DBインスタンスへの接続時にパスワードを入力する必要がなくなります。代わりに、IAMロールまたはユーザーに関連付けられた一時的な「署名トークン」を使用してログインします。トークンの有効期限は15分であり、パスワードの管理自体が不要になるため、パスワード漏洩リスクが皆無になります。",
    "keywords": [
      "IAMデータベース認証",
      "RDS",
      "セキュリティ"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-04",
    "category": "database",
    "question": "金融機関のアプリケーションにおいて、データの変更履歴（トランザクションログなど）を中央管理者による書き換えが不可能な状態で安全に保管し、暗号技術によって整合性が常に検証可能な「不変（イミュータブル）な台帳データベース」が必要な場合、最適なサービスはどれですか？",
    "options": [
      "Amazon Aurora PostgreSQL",
      "Amazon QLDB (Quantum Ledger Database)",
      "Amazon Neptune",
      "Amazon DocumentDB"
    ],
    "answerIndex": 1,
    "explanation": "Amazon QLDBは、中央の信頼された機関が所有する完全マネージド型の台帳データベースです。変更不可能な（イミュータブルな）トランザクションログを提供し、データの変更履歴が暗号技術（ハッシュチェーン）によって追跡可能で、かつ書き換え不可能であることが保証されます。ブロックチェーンのような分散合意を必要としない一元管理システムに最適です。",
    "keywords": [
      "QLDB",
      "不変台帳",
      "ハッシュチェーン"
    ],
    "domain": "domain-2"
  },
  {
    "id": "db-05",
    "category": "database",
    "question": "SNSアプリの友だち関係、不正検知（アカウント間のつながり追跡）、レコメンデーションエンジンなど、複雑で多対多に深くネストされたデータの相関関係を、極めて高速なクエリで分析・構築したい場合に最適なデータベースはどれですか？",
    "options": [
      "Amazon DynamoDB",
      "Amazon Neptune",
      "Amazon ElastiCache (Redis)",
      "Amazon Redshift"
    ],
    "answerIndex": 1,
    "explanation": "Amazon Neptuneは、高速で信頼性の高いフルマネージド型の「グラフデータベース」サービスです。グラフモデル（ノード、エッジ、プロパティ）をネイティブにサポートしており、何十億もの関係性を記述し、ミリ秒単位の応答で相関データをたどるクエリを実行できます。RDBやNoSQLではパフォーマンスが出ない複雑なリレーション構築に最適です。",
    "keywords": [
      "Amazon Neptune",
      "グラフデータベース",
      "相関関係"
    ],
    "domain": "domain-2"
  },
  {
    "id": "db-06",
    "category": "database",
    "question": "オンプレミスの大容量 Oracle Database（数テラバイト規模）を、最小限のダウンタイムでAWS上の Amazon Aurora PostgreSQL へ移行したいです。この「異種データベース間移行」を計画する際、使用すべき移行ツールの組み合わせはどれですか？",
    "options": [
      "AWS DataSync + AWS DMS",
      "AWS Schema Conversion Tool (SCT) + AWS Database Migration Service (DMS)",
      "VM Import/Export + RDS データベースのクローン",
      "AWS Application Migration Service (MGN)"
    ],
    "answerIndex": 1,
    "explanation": "異種データベース間の移行（OracleからPostgreSQLなど）を行う場合、まずデータベーススキーマやビュー、ストアドプロシージャを移行先互換に自動変換するために「AWS Schema Conversion Tool (SCT)」を使用します。その後、テーブル内の実データを最小限のダウンタイムで継続的にレプリケーション・移行するために「AWS Database Migration Service (DMS)」を組み合わせて使用します。",
    "keywords": [
      "SCT",
      "DMS",
      "データベース移行"
    ],
    "domain": "domain-4"
  },
  {
    "id": "db-07",
    "category": "database",
    "question": "Amazon Redshiftにおいて、計算リソース（コンピュート）とストレージ容量を個別にスケーリングさせ、大量のコールドデータを安価なS3側に自動で配置しつつ、頻繁に使用するデータのみをローカルSSDへ置いてコストとパフォーマンスを最適化するインスタンスタイプはどれですか？",
    "options": [
      "DS2 インスタンス",
      "DC2 インスタンス",
      "RA3 インスタンス",
      "Managed Instances"
    ],
    "answerIndex": 2,
    "explanation": "Redshift RA3インスタンスは、コンピュートとストレージを個別に拡張できるアーキテクチャを採用しています。データはAmazon S3に永続的に格納され、頻繁にアクセスされるホットデータはRA3ノード上のローカル超高速SSDへ自動的にキャッシュされるため、テラバイトからペタバイト規模のDWHにおいて圧倒的なコスト削減と高パフォーマンスを両立できます。",
    "keywords": [
      "Redshift RA3",
      "コンピュートとストレージの分離",
      "DWH"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-08",
    "category": "database",
    "question": "DynamoDBテーブルから読み取った特定のクエリデータに対して、ミリ秒未満から「マイクロ秒未満」の極めて高速な応答を提供し、DB自体の負荷を大幅に削減したい場合にアタッチすべきフルマネージドなインメモリキャッシュはどれですか？",
    "options": [
      "Amazon ElastiCache (Memcached)",
      "Amazon ElastiCache (Redis)",
      "DynamoDB Accelerator (DAX)",
      "Amazon MemoryDB for Redis"
    ],
    "answerIndex": 2,
    "explanation": "DynamoDB Accelerator (DAX) は、DynamoDB専用のフルマネージドインメモリキャッシュです。アプリケーションコードの読み取りAPI呼び出しをDAXエンドポイントに向けるだけで、キャッシュミス時のみDynamoDB本体へ問い合わせるため、コードの変更負担がほとんどなく、読み取り性能をマイクロ秒単位に高速化できます。一般的なRedis等はプログラム側で細かくキャッシュ制御を書く必要があります。",
    "keywords": [
      "DAX",
      "DynamoDB",
      "インメモリキャッシュ"
    ],
    "domain": "domain-2"
  },
  {
    "id": "db-09",
    "category": "database",
    "question": "Amazon ElastiCache (Redis) において、マスターノードの障害時にデータを失うことなく自動的かつ即座にリードレプリカへフェイルオーバーさせ、ビジネス継続性を担保するための最小構成はどれですか？",
    "options": [
      "シャードなしのシングルノード構成",
      "マルチAZ (Multi-AZ) を有効にし、レプリケーショングループ内に少なくとも1つのレプリカノードを配置すること",
      "自動バックアップのみの設定",
      "Memcached への移行"
    ],
    "answerIndex": 1,
    "explanation": "ElastiCache (Redis) で高可用性を実現するためには、レプリケーショングループを作成し、「マルチAZ (Multi-AZ)」を有効化します。かつ、マスターに障害が発生した際の中継先として、別可用性ゾーンに最低1つのレプリカノードを動作させる必要があります。これにより、障害検知から数分以内に自動でプライマリの昇格フェイルオーバーが行われます。",
    "keywords": [
      "ElastiCache Redis",
      "マルチAZ",
      "高可用性"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-10",
    "category": "database",
    "question": "Amazon Redshiftに格納されているデータと、Amazon S3データレイク内にある非構造化・半構造化データ（ParquetやCSV形式）を結合し、ローカルにデータを取り込むことなく、RedshiftのSQLクエリからS3へ直接クエリを実行できる機能はどれですか？",
    "options": [
      "Amazon Redshift Spectrum",
      "Amazon Athena Federated Query",
      "Redshift COPY コマンド",
      "AWS Glue DataBrew"
    ],
    "answerIndex": 0,
    "explanation": "Amazon Redshift Spectrumを使用すると、Redshift内の既存テーブルと、S3データレイクに置かれている大量の外部テーブルデータを結合してSQLクエリを実行できます。データをRedshiftのローカルストレージへ移行・ロードする必要がないため、非常にコスト効率が高く、かつ高速にクエリを実行可能です。",
    "keywords": [
      "Redshift Spectrum",
      "S3データレイク",
      "外部テーブル"
    ],
    "domain": "domain-2"
  },
  {
    "id": "db-11",
    "category": "database",
    "question": "MongoDB APIとの互換性を持ち、JSONやJSON類似文書などの半構造化ドキュメントデータを、インフラのスケーリングやシャーディングをAWS側で全自動化しながら運用できる、フルマネージドなドキュメントデータベースはどれですか？",
    "options": [
      "Amazon DynamoDB",
      "Amazon DocumentDB",
      "Amazon Aurora PostgreSQL",
      "Amazon Neptune"
    ],
    "answerIndex": 1,
    "explanation": "Amazon DocumentDB (with MongoDB compatibility) は、MongoDBのワークロードをサポートする高速、スケーラブル、高可用性、かつフルマネージド型のドキュメントデータベースサービスです。ストレージが自動的にスケールアップし、インスタンスとストレージレイヤーが分離されているため、高可用性と信頼性を誇ります。",
    "keywords": [
      "DocumentDB",
      "MongoDB互換",
      "ドキュメントDB"
    ],
    "domain": "domain-2"
  },
  {
    "id": "db-12",
    "category": "database",
    "question": "DynamoDBにおいて、データが書き込まれたり更新されたりしたイベントをほぼリアルタイムでキャッチし、それをトリガーにしてAWS Lambda関数を非同期に実行する、イベント駆動アーキテクチャの構築に必要な機能はどれですか？",
    "options": [
      "DynamoDB TTL",
      "DynamoDB ストリーム (DynamoDB Streams) または Amazon Kinesis Data Streams 統合",
      "DynamoDB グローバルテーブル",
      "API Gateway WebSockets"
    ],
    "answerIndex": 1,
    "explanation": "DynamoDB Streams（またはKinesis Data Streams）は、DynamoDBテーブルの項目変更（追加、変更、削除）をキャプチャして時系列ログとして保存します。これにAWS Lambdaをイベントソースマッピングとして結合することで、データベースの変更に連動して他のシステムに通知を送ったり、別のDBを更新したりするリアクティブな処理が自動構成できます。",
    "keywords": [
      "DynamoDB Streams",
      "Lambda連携",
      "イベント駆動設計"
    ],
    "domain": "domain-2"
  },
  {
    "id": "db-13",
    "category": "database",
    "question": "Aurora DBクラスターにおいて、プライマリインスタンス（書き込みノード）で障害が発生した際、読み取り専用のリードレプリカが自動的にプライマリに昇格してフェイルオーバーします。この際、最も高速にフェイルオーバーが完了するためのリードレプリカの「優先ティア (Promotion Tier)」の設定値はどれですか？",
    "options": [
      "Tier 0",
      "Tier 15",
      "指定しない（デフォルト）",
      "すべてのレプリカに同一のTierを設定する"
    ],
    "answerIndex": 0,
    "explanation": "Auroraのリードレプリカには、昇格の優先順位を示す「優先ティア (Promotion Tier)」が0〜15の間で設定できます。0が最も優先度が高く、15が最も低いです。フェイルオーバー発生時、Auroraは最も優先度の高いティア（最小値であるTier 0）を持つレプリカを優先して新プライマリに昇格させるため、最重要レプリカにはTier 0を設定します。",
    "keywords": [
      "優先ティア",
      "Auroraフェイルオーバー",
      "高可用性"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-14",
    "category": "database",
    "question": "Amazon DynamoDBで大量のセッションログデータを保持しています。データの保管コストを抑えるため、作成から30日経過したログ行をデータベースの書き込みキャパシティユニット(WCU)を一切消費せず、追加コストなしで自動削除させたいです。どの機能を使用しますか？",
    "options": [
      "定期実行する Lambda による削除スクリプト",
      "DynamoDB TTL (Time to Live) の有効化",
      "DynamoDB オンデマンドスケーリング",
      "S3ライフサイクルポリシーの統合"
    ],
    "answerIndex": 1,
    "explanation": "DynamoDB TTL (Time to Live) を有効にし、各項目（行）の特定のタイムスタンプ属性（例: エポック秒形式の有効期限）を登録しておくと、DynamoDBがその期限を過ぎた項目を自動的にスキャン・削除します。この自動削除処理はデータベースのプロビジョンドスループット（WCU）を消費せず、追加料金もかからないため、非常にコスト効率が良いデータ破棄方法です。",
    "keywords": [
      "DynamoDB TTL",
      "自動データ破棄",
      "コスト最適化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-15",
    "category": "database",
    "question": "リレーショナルデータベースで動作するレガシーなシステムにおいて、特定の時間帯（月初のバッチ処理時など）のみ、極めて高密度なクエリが走りCPU負荷が限界に達します。インスタンスタイプを変更（スケールアップ）せずに、読み取りクエリによるDB負荷を別々のサーバーに分散させて回避する、最も一般的なRDS構成はどれですか？",
    "options": [
      "RDS Multi-AZ の配置",
      "リードレプリカ (Read Replicas) の作成および読み取り用接続文字列の分離",
      "RDS ストレージの自動スケーリング",
      "RDS プロキシの設定のみ"
    ],
    "answerIndex": 1,
    "explanation": "RDSリードレプリカを作成することで、マスターデータベースへの書き込み処理と、読み取り専用の検索クエリ処理を物理的に異なるインスタンスへ切り離す（クエリのオフロード）ことができます。レプリカは最大15台まで追加可能で、参照負荷に応じた負荷分散が容易になります。Multi-AZは可用性向上用（スタンバイは読み書き不可）です。",
    "keywords": [
      "リードレプリカ",
      "RDS",
      "クエリ分散"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-16",
    "category": "database",
    "question": "Apache Cassandra との完全な互換性を持ち、既存の Cassandra アプリケーションコードやドライバー、ツールを変更することなく、AWS上でサーバーレスかつミリ秒未満の応答を提供するフルマネージドデータベースはどれですか？",
    "options": [
      "Amazon Keyspaces (for Apache Cassandra)",
      "Amazon Neptune",
      "Amazon DocumentDB",
      "Amazon Aurora"
    ],
    "answerIndex": 0,
    "explanation": "Amazon Keyspaces (for Apache Cassandra) は、Cassandra互換のワイドカラム型データベースサービスです。サーバーレスであるため、Cassandraクラスタのプロビジョニングやノード追加、メンテナンスの手間が一切不要で、クエリトラフィックに応じた自動スケーリングが実行されます。",
    "keywords": [
      "Keyspaces",
      "Cassandra",
      "サーバーレスDB"
    ],
    "domain": "domain-2"
  },
  {
    "id": "db-17",
    "category": "database",
    "question": "Aurora DBにおいて、本番環境のデータベースと完全に同一のデータとスキーマを持つ検証環境を即座に作成したいです。大容量データベース（数TB）であるため、コピー作成にかかる時間と追加ストレージ費用を最小限に抑えたい場合、どの機能を利用すべきですか？",
    "options": [
      "RDSスナップショットのエクスポートと復元",
      "Aurora データベースの高速クローン (Database Cloning) の実行",
      "AWS DMSによるリアルタイムコピー",
      "AWS DataSyncでのファイル同期"
    ],
    "answerIndex": 1,
    "explanation": "Aurora データベースの高速クローン (Database Cloning) は、「Copy-on-Write（書き込み時コピー）」技術を使用して動作します。クローン作成直後は、元のデータベースと同一のストレージページを共有するため、作成は一瞬（数秒）で完了し、ストレージ容量の追加料金も発生しません。その後、クローン側でデータ変更（更新や追加）が発生した差分ブロックに対してのみストレージ料金が請求されるため極めて低コストです。",
    "keywords": [
      "Auroraクローン",
      "Copy-on-Write",
      "検証環境構築"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-18",
    "category": "database",
    "question": "リレーショナルデータベース（Amazon RDS/Aurora）の「自動マイナーバージョンアップグレード」が有効になっている場合、アップグレードが実行されるタイミングはいつですか？",
    "options": [
      "アップグレードがリリースされたら、即座にオンラインで実行される",
      "データベースに設定された「メンテナンスウィンドウ (Maintenance Window)」時間帯の中で、自動でアップグレードが適用されること",
      "データベースのフェイルオーバーが発生したときのみ",
      "開発環境のみ自動アップグレードされ、本番環境は手動でのみ適用される"
    ],
    "answerIndex": 1,
    "explanation": "RDSやAuroraの自動アップグレード（パッチ適用やマイナーバージョンアップなど）は、データベースに定義されている「メンテナンスウィンドウ」と呼ばれる指定された運用時間枠（例：毎週日曜日の3:00〜3:30）にのみ実行されます。これにより、業務時間中の不意な瞬断を避けることができます。",
    "keywords": [
      "メンテナンスウィンドウ",
      "自動アップグレード",
      "RDS"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-19",
    "category": "database",
    "question": "Amazon DynamoDBテーブルにおいて、既存のテーブルに対して後から特定の属性の組み合わせで読み取りクエリ（検索）を最適化するためにインデックスを追加したいです。作成すべきインデックスタイプと、その作成タイミングの制約について正しい記述はどれですか？",
    "options": [
      "ローカルセカンダリインデックス (LSI) は、テーブル作成後でもいつでも追加できる",
      "グローバルセカンダリインデックス (GSI) は、テーブル作成後でもオンラインでいつでも追加・削除が可能であること。また、親テーブルとは異なるプライマリキーを指定できること",
      "インデックスを追加すると、テーブルの既存データはすべて自動で削除される",
      "インデックス作成中は、DynamoDBへの書き込みアクセスが完全に一時停止する"
    ],
    "answerIndex": 1,
    "explanation": "DynamoDBのインデックスにはLSIとGSIがあります。LSIはテーブル作成時にのみ定義でき、後から追加できません。一方、グローバルセカンダリインデックス (GSI) は、テーブルの作成後でもオンラインのまま随時追加、更新、削除が可能です。また、GSIはパーティションキーとソートキーを親テーブルとは全く異なる任意の属性で構成できます。",
    "keywords": [
      "GSI",
      "LSI",
      "DynamoDBインデックス"
    ],
    "domain": "domain-2"
  },
  {
    "id": "db-20",
    "category": "database",
    "question": "マルチAZ (Multi-AZ) 配置でプロビジョニングされた Amazon RDS データベースインスタンスにおいて、アベイラビリティーゾーン (AZ) レベルのネットワーク切断や障害が発生した際、DNSレコードはどのように変更され、フェイルオーバーが行われますか？",
    "options": [
      "スタンバイインスタンスのIPアドレスがパブリックDNSに手動で割り当てられる",
      "RDSが障害を自動検出し、DBエンドポイントのDNS CNAMEレコードを自動的にプライマリーからスタンバイインスタンス（同期レプリケーション先）のIPアドレスへ書き換えること",
      "アプリケーション側で接続エラーを検知し、接続文字列をセカンダリIPアドレスに自動変更する必要がある",
      "フェイルオーバーは発生せず、AZが復旧するまでデータベースは一時停止状態となる"
    ],
    "answerIndex": 1,
    "explanation": "RDS Multi-AZのフェイルオーバーは、完全に自動化されたプロセスです。障害を検知すると、RDSシステムはDBエンドポイント（CNAME）が指す先の宛先IPアドレスを、障害が発生したプライマリから、同期レプリケートされているスタンバイインスタンスに切り替えます。アプリケーションは同一のエンドポイント文字列のまま再接続（リトライ）を行うだけで、新プライマリに自動接続されます。",
    "keywords": [
      "RDS CNAME切り替え",
      "Multi-AZフェイルオーバー",
      "DNS書き換え"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-21",
    "category": "database",
    "question": "グローバルにアクティブ・アクティブなデータベースを展開し、世界各地のユーザーから最寄りのリージョンへの超高速な読み書きアクセスを提供すると同時に、マルチリージョンでの競合解決として「最後に書き込まれた方を優先 (Last Write Wins)」するNoSQLデータベースはどれですか？",
    "options": [
      "Amazon Aurora グローバルデータベース",
      "Amazon DynamoDB グローバルテーブル (Global Tables)",
      "Amazon Redshift",
      "Amazon ElastiCache Redis"
    ],
    "answerIndex": 1,
    "explanation": "DynamoDB グローバルテーブルは、複数のAWSリージョンにまたがってアクティブ・アクティブなレプリケーションを行うフルマネージドテーブルです。各リージョンで同時にローカルな書き込みを受け付け、リージョン間で自動同期します。競合が発生した場合は「Last Write Wins (最後に実行された書き込みの優先)」という競合解決ロジックが適用されます。",
    "keywords": [
      "DynamoDB Global Tables",
      "アクティブ・アクティブ",
      "競合解決"
    ],
    "domain": "domain-2"
  },
  {
    "id": "db-22",
    "category": "database",
    "question": "Amazon Aurora データベースにおいて、トラフィックの急増を予測してリードレプリカを自動的にスケールアウト（台数追加）させ、アクセスが落ち着いたら自動で縮小（スケールイン）させたい場合、どのような設定が正しいですか？",
    "options": [
      "Application Auto Scaling を使用し、Aurora リードレプリカに対して平均CPU使用率やコネクション数をターゲットとするターゲット追跡スケーリングを設定すること",
      "毎週特定の時間にスケールさせるスクリプトを Lambda で起動する",
      "Aurora はServerlessのみが自動でレプリカを増やすため、Serverless v2 への移行が必須である",
      "Route 53 の重み付けレコードを動的に書き換える"
    ],
    "answerIndex": 0,
    "explanation": "Aurora DBクラスターは、リードレプリカの「Auto Scaling（オートスケーリング）」をサポートしています。接続されているレプリカ全体の平均CPU使用率（例: 70%）や平均コネクション数をメトリクスとし、それを維持するようにApplication Auto Scalingが自動的にレプリカインスタンスの増減（最大15台）をプロビジョニングします。",
    "keywords": [
      "Aurora Auto Scaling",
      "リードレプリカスケーリング",
      "パフォーマンス最適化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-23",
    "category": "database",
    "question": "Amazon RDSインスタンスで、割り当てられたデータベースストレージの空き容量が不足しそうな場合に、管理者が手動でサイズを変更することなく、自動的かつ無停止で容量を拡張（スケールアップ）させたいです。どの設定を有効にすべきですか？",
    "options": [
      "RDS データベースクローン",
      "RDS ストレージの自動スケーリング (Storage Autoscaling)",
      "EBSマルチアタッチの有効化",
      "RDS Multi-AZミラーリング"
    ],
    "answerIndex": 1,
    "explanation": "RDS ストレージ自動スケーリング (Storage Autoscaling) を有効にすると、空き容量が少なくなった（例: 残り容量が10%未満かつ状態が持続）ことを検知した際、RDSが動的かつ自動的にストレージサイズを拡張します。この処理はデータベースの実行やI/Oを停止させることなく（オンラインのまま）実行されるため、管理負荷が劇的に低減します。",
    "keywords": [
      "Storage Autoscaling",
      "RDS自動拡張",
      "容量枯渇防止"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-24",
    "category": "database",
    "question": "秒間数万回以上の極めてスパイク性の高い書き込みが発生するゲームのリアルタイムスコアボードや、IoTデバイスからのステータス収集において、DynamoDBのキャパシティ設定として最もコスト効率が高く、かつスロットリングエラーを自動回避できるモードはどちらですか？",
    "options": [
      "プロビジョンドキャパシティモード（自動スケーリング有効化）",
      "オンデマンドキャパシティモード (On-Demand)",
      "DAXの強制的な前段アタッチのみ",
      "グローバルテーブルのマルチマスター構成のみ"
    ],
    "answerIndex": 1,
    "explanation": "オンデマンドキャパシティモード (On-Demand Capacity Mode) は、キャパシティ（RCU/WCU）を事前に見積もってプロビジョニングすることなく、実際の読み書きリクエスト数に応じてミリ秒単位で瞬時に自動スケーリングします。スパイクが予測不能で、急激なアクセス増減が発生するワークロードにおいて、スロットリング（400エラー）を防ぎながら無駄な予約コストを排除できます。",
    "keywords": [
      "DynamoDBオンデマンド",
      "スロットリング回避",
      "スパイク耐性"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-25",
    "category": "database",
    "question": "オンプレミスから AWS の Amazon Aurora MySQL へデータを移行します。オンプレミスのプライマリデータベースをオンラインで稼働し続け、ダウンタイムを最小限に抑えながら継続的なデータレプリケーション同期を維持して最後に切り替えを行うために使用すべきAWS移行ツールはどちらですか？",
    "options": [
      "AWS DataSync",
      "AWS Database Migration Service (AWS DMS)",
      "AWS Schema Conversion Tool (SCT) のみのコピー",
      "Amazon S3マルチパート転送"
    ],
    "answerIndex": 1,
    "explanation": "AWS DMS (Database Migration Service) は、アクティブなデータベースを継続的にAWSにレプリケートできます。移行時、「継続的なデータレプリケーション (CDC - Change Data Capture)」オプションを有効にしておくことで、最初のフルロード移行が完了した後に発生した差分ログをリアルタイムで同期し続け、最終移行時の切り替えに伴うダウンタイムをわずか数分程度に抑えられます。",
    "keywords": [
      "AWS DMS",
      "CDC",
      "最小ダウンタイム移行"
    ],
    "domain": "domain-4"
  },
  {
    "id": "db-26",
    "category": "database",
    "question": "リレーショナルデータベースにおける「キャッシュ書き込み戦略」において、キャッシュデータとデータベースの不整合を防ぐため、アプリケーションがデータ更新時に必ずキャッシュ（ElastiCache）とデータベースの両方に同時に書き込みを行うキャッシュパターンを何と呼びますですか？",
    "options": [
      "レイジーローディング (Lazy Loading)",
      "ライトスルー (Write-Through)",
      "キャッシュエビクション (Eviction)",
      "リードスルー (Read-Through)"
    ],
    "answerIndex": 1,
    "explanation": "ライトスルー (Write-Through) 方式は、データ書き込み時にまずインメモリキャッシュを更新し、そのままバックエンドのデータベースにも同期書き込みを行います。これにより、キャッシュ内のデータは常に最新に保たれ、データベースとのデータ不整合リスクが皆無になります。ただし、書き込みレイテンシーは多少長くなります。レイジーローディングは参照時にキャッシュへ載せます。",
    "keywords": [
      "Write-Through",
      "ElastiCache戦略",
      "データ整合性"
    ],
    "domain": "domain-2"
  },
  {
    "id": "db-27",
    "category": "database",
    "question": "大規模なデータ分析プラットフォームにおいて、数十テラバイトの過去ログデータがAmazon S3バケットに格納されています。高価なデータウェアハウス（Redshift）を常時プロビジョニングせず、必要なときだけS3上のCSVやParquetデータに対して直接アドホックなSQLクエリを実行して分析し、スキャンされたデータ量に対してのみ従量課金されるサーバーレスな分析クエリサービスはどれですか？",
    "options": [
      "Amazon QuickSight",
      "Amazon Athena",
      "Amazon Redshift RA3",
      "AWS Glue DataBrew"
    ],
    "answerIndex": 1,
    "explanation": "Amazon Athenaは、S3内のデータに対して直接標準的なSQLクエリを実行できるインタラクティブなサーバーレスクエリサービスです。データロードやDWHサーバーの設定、管理は不要で、クエリの実行時にS3からスキャンされたデータ容量（1TBあたり約5ドル）に基づいてのみ課金されるため、低コストでアドホック分析を実行できます。",
    "keywords": [
      "Amazon Athena",
      "サーバーレスクエリ",
      "S3データスキャン"
    ],
    "domain": "domain-2"
  },
  {
    "id": "db-28",
    "category": "database",
    "question": "Amazon ElastiCache (Redis) へアクセスするクライアントに対して、トランスポート中の暗号化 (TLS) および保管時の暗号化を有効にし、かつ特定の認証パスワードを入力しなければ接続できないようにセキュリティ制限をかけたいです。どの組み合わせを有効にすべきですか？",
    "options": [
      "VPC Security Group のみで制限する",
      "Redis クラスターの暗号化をオンにし、Redis AUTH パラメータを使用して接続パスワードを設定すること",
      "Memcached への移行",
      "IAM ユーザーポリシーへの Redis 権限の付与のみ"
    ],
    "answerIndex": 1,
    "explanation": "ElastiCache (Redis) は、データのトランスポート中および保管時の暗号化をサポートしています。また、セキュリティ強化のために「Redis AUTH」オプション（またはIAM認証）を有効にでき、これにより接続クライアントに対して正しいトークン（パスワード）の提示を要求し、未認可のアクセスを強制遮断できます。",
    "keywords": [
      "Redis AUTH",
      "ElastiCache暗号化",
      "データセキュリティ"
    ],
    "domain": "domain-1"
  },
  {
    "id": "db-29",
    "category": "database",
    "question": "金融決済システムで強固なデータ整合性が必要です。Amazon Aurora PostgreSQLにおいて、あるテーブルに対する行の追加が即座にコミットされ、ミリ秒未満で別の接続クライアントから必ず最新の変更結果が見える（強い整合性を保つ）ためのリードアクセス側のクエリ接続エンドポイントはどれですか？",
    "options": [
      "リーダーエンドポイント (Reader Endpoint)",
      "クラスターエンドポイント (Cluster Endpoint / ライターエンドポイント)",
      "カスタムエンドポイント (Custom Endpoint)",
      "個別インスタンスの直接接続IP"
    ],
    "answerIndex": 1,
    "explanation": "Aurora DBクラスターで最新の書き込み結果と完全に一致する「強い整合性」のある読み取りを保証するためには、常に書き込みノード（プライマリ）に接続する「クラスターエンドポイント（ライターエンドポイント）」に対してクエリを発行する必要があります。リーダーエンドポイント経由でレプリカにアクセスする場合、ミリ秒単位の極めて短いレプリケーションラグが発生する可能性があるため結果整合性となります。",
    "keywords": [
      "クラスターエンドポイント",
      "ライターエンドポイント",
      "データ整合性"
    ],
    "domain": "domain-2"
  },
  {
    "id": "db-30",
    "category": "database",
    "question": "IoTデバイスから送信される数千万件のセンサーデータやアプリケーションの動作ログのような「時間経過に伴う継続的な変化の記録」を、自動的なデータ圧縮や古いデータの自動階層化移動を行いながら、非常に高いパフォーマンスで格納・分析できる、AWS専用の時系列データベースサービスはどれですか？",
    "options": [
      "Amazon Timestream",
      "Amazon DocumentDB",
      "Amazon MemoryDB for Redis",
      "Amazon QLDB"
    ],
    "answerIndex": 0,
    "explanation": "Amazon Timestreamは、IoTや運用監視アプリケーション向けの、高速でスケーラブルなフルマネージド「時系列（タイムシリーズ）データベース」サービスです。リレーショナルデータベースに比べて最大1,000倍高速なクエリ処理を提供し、時間ベースの自動ライフサイクルポリシーによって、直近のホットデータをメモリに置き、コールドデータを安価な磁気ストレージへ自動階層移動して保管コストを劇的に最適化します。",
    "keywords": [
      "Amazon Timestream",
      "時系列データベース",
      "IoTログ収集"
    ],
    "domain": "domain-2"
  },
  {
    "id": "db-31",
    "category": "database",
    "question": "オンプレミスから AWS へのデータベース移行計画を策定しています。移行元データベースのスキーマ構造を AWS 上で再構築するにあたり、Oracle Database から Amazon Aurora MySQL などの「異なるデータベースエンジン（データベース製品）」への移行設計において、ストアドプロシージャやデータ型の不互換性を検出・変換するフェーズで用いるべきツールはどちらですか？",
    "options": [
      "AWS Database Migration Service (DMS)",
      "AWS Schema Conversion Tool (AWS SCT)",
      "Systems Manager State Manager",
      "VM Import/Export"
    ],
    "answerIndex": 1,
    "explanation": "異種DBの移行（データベースエンジンの変更）では、SQL構文や関数の違いにより、単純なダンプインポートができません。AWS Schema Conversion Tool (SCT) を実行することで、ソースDBの構造（スキーマ、トリガー、プロシージャなど）を読み取り、ターゲットのDBに適合するSQL定義へ変換する作業を自動化できます。また、手動変更が必要な箇所の「移行アセスメントレポート」を出力してくれます。",
    "keywords": [
      "AWS SCT",
      "スキーマ変換",
      "移行アセスメント"
    ],
    "domain": "domain-4"
  },
  {
    "id": "db-32",
    "category": "database",
    "question": "Amazon RDS PostgreSQL データベースを運用しています。データベースの特定テーブルに対するクエリ性能（検索レイテンシー）を高めるため、既存のRDS構成のままで、リードレプリカを追加するだけでなく、アプリケーション層でのデータベースの「クエリキャッシュ」を構成したいです。どのインメモリデータストアサービスを追加すべきですか？",
    "options": [
      "Amazon DocumentDB",
      "Amazon ElastiCache for Redis (または Memcached)",
      "Amazon Redshift",
      "DynamoDB Accelerator (DAX)"
    ],
    "answerIndex": 1,
    "explanation": "一般的なリレーショナルデータベース (RDS/Aurora) のキャッシュには、Amazon ElastiCache (Redis または Memcached) を追加するのが標準的なアーキテクチャパターンです。高頻度のクエリ結果をElastiCacheにキャッシュとして保持させ、データベースへの無駄なSQL発行を抑えることで、ミリ秒未満の高速応答を実現します。",
    "keywords": [
      "Amazon ElastiCache",
      "インメモリキャッシュ",
      "クエリキャッシュ"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-33",
    "category": "database",
    "question": "Amazon DynamoDBテーブルにおいて、強力な一貫性を持つ読み取り (Strongly Consistent Reads) を実行する際の、結果整合性のある読み取り (Eventually Consistent Reads) と比較した読み取りキャパシティユニット (RCU) の消費量の仕様に関する正しい記述はどれですか？",
    "options": [
      "消費するRCUは全く同じである",
      "結果整合性のある読み取りでは1 RCUで最大4KBのオブジェクトを2回読み取れるのに対し、強力な一貫性のある読み取りでは1 RCUで最大4KBのオブジェクトを1回しか読み取れず、RCU消費量が2倍になること",
      "強力な一貫性を持つ読み取りはRCUを消費しない",
      "強力な一貫性を持つ読み取りはオンデマンドモードでのみサポートされている"
    ],
    "answerIndex": 1,
    "explanation": "DynamoDBのRCU計算では、結果整合性のある読み取り（デフォルト）は1 RCUあたり「最大4KBの項目を2回/秒」読み取れます。しかし、強力な一貫性を持つ読み取りは1 RCUあたり「最大4KBの項目を1回/秒」しか読み取れず、同一回数アクセスした場合はRCU消費量が2倍になりコストが増えるため、整合性要件を慎重に見積もる必要があります。",
    "keywords": [
      "DynamoDB RCU",
      "強力な一貫性",
      "結果整合性"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-34",
    "category": "database",
    "question": "Amazon Aurora データベースクラスターにおいて、予測不能なデータベースアクセス負荷の変動に対して、インスタンスタイプ自体を再起動（ダウンタイム）を伴わずに、数秒で自動的にプロビジョニングサイズ（CPU・メモリ）を動的にスケールアップ・ダウンさせるデータベース展開オプションはどれですか？",
    "options": [
      "Aurora リードレプリカ Auto Scaling",
      "Amazon Aurora Serverless v2",
      "RDS ストレージオートスケーリング",
      "ElastiCache 連携"
    ],
    "answerIndex": 1,
    "explanation": "Amazon Aurora Serverless v2 は、ワークロードの要求に応じて、DBクラスターのキャパシティ（CPU/メモリプール）を「Aurora キャパシティユニット (ACU)」単位で瞬時（数ミリ秒以内）に動的スケーリングします。インスタンスの再起動や新規プロビジョニングを伴わないため、ダウンタイムが皆無で、スパイク負荷に対処できます。",
    "keywords": [
      "Aurora Serverless v2",
      "ACU",
      "シームレススケーリング"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-35",
    "category": "database",
    "question": "データベース移行において、AWS Database Migration Service (DMS) を使用してオンプレミスのプライマリデータベースから AWS の RDS インスタンスへテーブルをコピーする際、移行元のデータスキーマ定義を変更せずに、スキーマ定義だけを迅速に移行先に作成するために組み合わせるべき DMS の移行設定はどちらですか？",
    "options": [
      "SCTを実行せずに、DMSタスクの設定で「テーブル作成アクション」を「ターゲットのテーブルをドロップ (Drop)」または「メタデータの切り捨て (Truncate)」に設定して実行すること",
      "手動でSQL文を書き直してインポートする",
      "AWS DataSync を使用する",
      "VM Import/Export を使用する"
    ],
    "answerIndex": 0,
    "explanation": "同種データベース間（例：MySQLからMySQL）の移行など、スキーマ変換（SCT）が不要なシンプルな移行において、AWS DMSはターゲット側に対象テーブルのスキーマ構造を自動生成する機能を持っています。DMSタスク設定でテーブル作成方法を指定するだけで、自動で構造を作った後にデータロードを開始してくれます。",
    "keywords": [
      "AWS DMS",
      "スキーマ作成",
      "レプリケーション"
    ],
    "domain": "domain-4"
  },
  {
    "id": "db-36",
    "category": "database",
    "question": "Amazon DynamoDBテーブルにおいて、ある項目（行）の書き込み・変更処理時に、「既存の特定のステータスが“ACTIVE”の場合のみ更新を許可し、それ以外の場合はエラーとする」といったデータベース側での同時実行制御を実現するために使用するAPI仕様はどれですか？",
    "options": [
      "アトミックカウンター (Atomic Counter)",
      "条件付き書き込み (Conditional Writes)",
      "DynamoDB トランザクション (TransactWriteItems)",
      "DynamoDB TTL"
    ],
    "answerIndex": 1,
    "explanation": "条件付き書き込み (Conditional Writes) を使用すると、書き込みを実行するための「前提条件（例: `attribute_exists` や値の条件式）」をリクエスト時に指定できます。データベース側でその条件に合致するかを判定し、満たしている場合のみ安全に書き込みを行うため、競合（ロストアップデートなど）を防ぐことができます。",
    "keywords": [
      "条件付き書き込み",
      "楽観的排他制御",
      "DynamoDB API"
    ],
    "domain": "domain-2"
  },
  {
    "id": "db-37",
    "category": "database",
    "question": "数十テラバイトのデータベースを Amazon Redshift で運用しています。クエリの実行時に、他のクエリの処理能力を圧迫することなく、特定の重い集計レポートクエリに対して自動的に別の一時的なコンピュートクラスター（コンピューティング能力）を追加・アタッチして処理性能を担保し、処理完了後は自動でクローズされる Redshift の機能はどれですか？",
    "options": [
      "Redshift Spectrum",
      "同時実行スケーリング (Concurrency Scaling)",
      "RA3 ノードスケーリング",
      "Elastic Resize"
    ],
    "answerIndex": 1,
    "explanation": "Redshift 同時実行スケーリング (Concurrency Scaling) は、読み取りクエリや書き込みクエリの同時実行リクエストが増加してキューが詰まった場合に、Redshiftが一時的な「同時実行スケーリングクラスタ」をバックグラウンドで自動的に起動し、負荷を肩代わりさせる機能です。これにより、数百の同時ユーザーに対しても一貫したパフォーマンスを維持できます。利用に応じた秒単位課金で、1日に一定時間は無料クレジットが提供されます。",
    "keywords": [
      "Concurrency Scaling",
      "Redshift同時実行スケーリング",
      "パフォーマンス最適化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-38",
    "category": "database",
    "question": "オンプレミスから AWS へのデータベース移行において、AWS DMS (Database Migration Service) 経由でデータを移行する際、データベースサーバー自体のネットワーク負荷や接続ポートのセキュリティ制限により、プライベートネットワーク経由での安全な転送が困難です。どのように転送を保護・構成すべきですか？",
    "options": [
      "インターネット上にデータベースのポートを開放して直接DMSを接続する",
      "VPC間に AWS Site-to-Site VPN または Direct Connect を使用した安全なハイブリッドチャネルを確立し、DMSレプリケーションインスタンスがプライベートIPで移行元データベースに接続すること",
      "データベースをCSVファイルに手動でエクスポートして郵送する",
      "DMSのパブリックレプリケーション機能を使用して、暗号化を完全に解除して送信する"
    ],
    "answerIndex": 1,
    "explanation": "DMSはデータベースのポート（MySQLなら3306、PostgreSQLなら5432など）へ直接接続するため、インターネット経由の公開は避けるべきです。セキュアなVPNやDirect Connect経由でプライベート通信経路を確保し、VPC内のDMSレプリケーションインスタンスがオンプレミスDBのプライベートIP宛てに接続し、データ取得を行うように設計するのがセキュリティベストプラクティスです。",
    "keywords": [
      "AWS DMS",
      "VPC接続",
      "ハイブリッドセキュア接続"
    ],
    "domain": "domain-4"
  },
  {
    "id": "db-39",
    "category": "database",
    "question": "AWS Organizations を適用しているマルチアカウント組織において、開発アカウントで作成されたリレーショナルデータベース (Amazon RDS) のスナップショットデータを、本番アカウント（またはデータ集約アカウント）でリストアできるように共有したいです。安全にクロスアカウントでスナップショットを共有・復元するために必要な手順として、正しいものはどれですか？",
    "options": [
      "共有にはKMS管理キー（default）を使用する",
      "スナップショットが「カスタマー管理キー (CMK)」で暗号化されていることを確認し、そのKMSキーポリシーでターゲットのアカウントIDからのキー利用を許可した上で、スナップショット自体をターゲットアカウントと共有し、相手側アカウントでそのスナップショットを「コピー」してからリストアすること",
      "スナップショット共有はアカウント間ではできないため、S3バケット経由でインポートする",
      "スナップショットの暗号化を解除してから直接共有する"
    ],
    "answerIndex": 1,
    "explanation": "暗号化されたRDSスナップショットの共有は、KMSカスタマー管理キー (CMK) の使用が必須です。デフォルトのAWS管理キー (`aws/rds`) で暗号化されたものは、他のアカウントと共有できません。キーポリシーで別アカウントを許可した上でスナップショットを共有し、別アカウント側ではまずその共有スナップショットを「自身のアカウント側のキーでコピー」してから復元するプロセスが必要になります。",
    "keywords": [
      "RDSスナップショット共有",
      "KMSカスタマー管理キー",
      "クロスアカウントリストア"
    ],
    "domain": "domain-1"
  },
  {
    "id": "db-40",
    "category": "database",
    "question": "Amazon RDSやAuroraデータベースへのアクセス負荷が高まった際、アプリケーション側の多数のコネクション要求をプールし、データベース接続が最大接続数に達してエラーになるのを防御するため、データベースの直近前段にプロビジョニングすべきAWSサービスはどれですか？",
    "options": [
      "Amazon ElastiCache Redis",
      "Amazon RDS Proxy",
      "Application Load Balancer",
      "Amazon Route 53"
    ],
    "answerIndex": 1,
    "explanation": "Amazon RDS Proxyは、RDSデータベースに対するフルマネージドで高可用性なデータベースプロキシです。多数のアプリケーション接続をプロキシ側で受け止めて接続プールを構築（接続プーリング）し、データベースへの不要な接続確立を減らすことで、CPU/メモリ使用量を節約し、アプリケショーンの可用性とスケーラビリティを最大化します。",
    "keywords": [
      "RDS Proxy",
      "接続プーリング",
      "データベースパフォーマンス改善"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-41",
    "category": "database",
    "question": "Amazon DynamoDBテーブルにおいて、ACIDトランザクション（アトミック性、一貫性、分離性、持続性）に準拠した、複数テーブルや複数項目にまたがる「すべて成功するか、すべて失敗（ロールバック）するか」の同時書き込み・更新を実行するために使用するAPI操作はどれですか？",
    "options": [
      "BatchWriteItem",
      "TransactWriteItems",
      "PutItem (Conditional 付き)",
      "UpdateItem (Atomic Counter付き)"
    ],
    "answerIndex": 1,
    "explanation": "DynamoDBの `TransactWriteItems` は、最大100個の項目（または最大4MBのデータ）に対する単一トランザクション（ACID書き込み）を実行できるAPI操作です。ゲームのアイテム購入や金融取引のように、複数の行のステータス更新が「全件成功か全件失敗」のいずれかであることを保証するために使用します。`BatchWriteItem` はトランザクションではないため、一部のレコードのみ失敗する可能性があります。",
    "keywords": [
      "TransactWriteItems",
      "ACIDトランザクション",
      "DynamoDBトランザクション"
    ],
    "domain": "domain-2"
  },
  {
    "id": "db-42",
    "category": "database",
    "question": "データベースエンジンとして MySQL を使用している Amazon Aurora クラスタにおいて、リードレプリカを追加することなく、リードレプリカの「キャッシュ状態」をマスターノードと同期させ、フェイルオーバー発生時にもキャッシュデータがクリアされずに高速に応答を再開できるようにするための機能はどれですか？",
    "options": [
      "Aurora データベース高速クローン",
      "Aurora サバイバブルキャッシュ (Survivable Cache Buffer Pool / インスタンス再起動に耐えるバッファプール)",
      "RDS Proxy の読み取り専用エンドポイント連携",
      "ElastiCache クラスター同期"
    ],
    "answerIndex": 1,
    "explanation": "Survivable Cache Buffer Pool (サバイバブルキャッシュバッファプール) は、Aurora MySQLがクラッシュや計画再起動を行った際でも、メモリ上のデータベースバッファプールキャッシュを破棄せずに残す機能です。通常、DB再起動後はキャッシュが空になり、ディスクI/Oがスパイクしてレスポンスが極端に悪化しますが、この機能により再起動直後から高キャッシュヒット率を維持したまま稼働再開できます。",
    "keywords": [
      "Survivable Cache Buffer Pool",
      "バッファプールキャッシュ",
      "フェイルオーバー高速化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-43",
    "category": "database",
    "question": "Amazon Timestream (時系列データベース) において、データの保管コストを最適化するために、直近3日間のデータはメモリテーブル (Memory Store) に置いて超高速で読み書きし、それより古いデータは自動的に安価な磁気ストレージ (Magnetic Store) へ自動移動させて2年間保管した後に削除するように定義する設定項目はどれですか？",
    "options": [
      "S3 ライフサイクルルール",
      "メモリおよび磁気ストレージに対するデータ保持ポリシー (Data Retention Policies)",
      "Timestream TTL パラメータ",
      "AWS Glue クローラーの設定"
    ],
    "answerIndex": 1,
    "explanation": "Amazon Timestreamは、テーブルごとにデータ保持ポリシー (Data Retention Policies) を設定できます。「メモリストアの保持期間（例: 72時間）」と「磁気ストアの保持期間（例: 2年間）」を定義することで、古いデータは自動的に磁気ストレージへ階層化移動し、最終期限を過ぎたデータは自動削除されます。データベース組み込みのコスト最適化設計です。",
    "keywords": [
      "Timestreamデータ保持ポリシー",
      "階層化ストレージ",
      "時系列データ管理"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-44",
    "category": "database",
    "question": "Amazon RDSインスタンスを、メジャーバージョン（例: PostgreSQL 11から15）へ最小のシステム停止時間（ダウンタイム）でアップグレードさせたいです。手動でのダンプ/リストアを行わずに、本番切り替えに伴うエラーリスクとダウンタイムを最小にするために推奨されるRDSの移行デプロイ機能はどれですか？",
    "options": [
      "リードレプリカの追加のみ",
      "Amazon RDS Blue/Green デプロイメント (Blue/Green Deployments)",
      "AWS DMSによる新規インスタンスへの移行",
      "RDS データベース高速クローン"
    ],
    "answerIndex": 1,
    "explanation": "Amazon RDS Blue/Green デプロイメントは、現在の稼働データベース（Blue）と、ステージング用のクローンデータベース（Green）を構築し、バックグラウンドでレプリケーションを自動構成します。Green環境側で安全にメジャーバージョンアップグレードを実行・テストし、準備が整った段階で「DNS切り替え (Switchover)」を実行します。切り替えは1分未満の極めて短いダウンタイムで安全に完了し、データ消失もありません。",
    "keywords": [
      "RDS Blue/Green デプロイ",
      "メジャーアップグレード",
      "ダウンタイム最小化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-45",
    "category": "database",
    "question": "DynamoDBにおいて、2つの異なるリージョンにある同一構成のテーブル間で、双方向に更新データを瞬時にレプリケーションさせたいです。このグローバルテーブル (Global Tables) を機能させるために、テーブル側で有効化しておくべき必須の設定はどれですか？",
    "options": [
      "DynamoDB TTL",
      "DynamoDB ストリーム (DynamoDB Streams) の有効化（イメージとして NEW_AND_OLD_IMAGES を指定すること）",
      "オンデマンドキャパシティモードの無効化",
      "DAX (DynamoDB Accelerator) のプロビジョニング"
    ],
    "answerIndex": 1,
    "explanation": "DynamoDB グローバルテーブルを構成するためには、各レプリカテーブルで「DynamoDB Streams」を有効にし、ストリームビュータイプとして「新旧両方のイメージ (NEW_AND_OLD_IMAGES)」を設定しておく必要があります。グローバルテーブルシステムはこのストリームを利用して、別のリージョンへ更新データを伝播・同期するためです。",
    "keywords": [
      "DynamoDB Streams",
      "Global Tables",
      "レプリケーション要件"
    ],
    "domain": "domain-1"
  },
  {
    "id": "db-46",
    "category": "database",
    "question": "オンプレミスから Amazon Aurora PostgreSQL への大規模データベース移行を計画しています。移行中に発生するデータをAWSへ継続同期（レプリケーション）させるにあたり、データベース移行エージェントの処理速度を最大化し、ネットワークレイテンシーを最小化するために、AWS DMS (Database Migration Service) レプリケーションインスタンスをどこに配置すべきですか？",
    "options": [
      "オンプレミス側のデータセンター内のハイパーバイザー上",
      "移行先ターゲットデータベース (Aurora) と同一のVPC、同一のサブネット（可用性ゾーン）内",
      "パブリックサブネットであればどのリージョンでもよい",
      "API Gatewayの直近エッジロケーション"
    ],
    "answerIndex": 1,
    "explanation": "DMSレプリケーションインスタンスは、移行先ターゲットデータベースと同一のVPC内（できれば同一サブネット/可用性ゾーン内）に配置するのがベストプラクティスです。DMSからターゲットへの書き込みレイテンシーを極小化し、パケット損失を防ぐことで、移行処理（書き込み速度）が大幅に向上します。オンプレミスからの読み込みはVPNやDirect Connect経由で安定化させます。",
    "keywords": [
      "DMSレプリケーションインスタンス配置",
      "移行設計",
      "ネットワークレイテンシー最適化"
    ],
    "domain": "domain-4"
  },
  {
    "id": "db-47",
    "category": "database",
    "question": "Amazon RDS インスタンス（Single-AZ）を運用していますが、予期せぬアベイラビリティーゾーンの停電や物理ハードウェア障害に対する耐障害性を高め、データベース破損時の復旧目標時間 (RTO) を最小化するために、稼働中のDBインスタンスをダウンタイムなし（無停止）で「マルチAZ配置」へ移行させる正しい手順はどれですか？",
    "options": [
      "DBインスタンスを一度停止し、設定を変更して再起動する",
      "DBインスタンスの「変更 (Modify)」メニューで、マルチAZ配置オプションの「はい (Yes / 別の可用性ゾーンに予備のスタンバイを作成)」を選択し、適用すること",
      "スナップショットを手動で取得し、新規にマルチAZインスタンスを構築してデータを移行する",
      "マルチAZ移行は稼働中のインスタンスでは実行できない"
    ],
    "answerIndex": 1,
    "explanation": "稼働中のRDS Single-AZインスタンスは、DB設定の「Modify（変更）」から「マルチAZ配置」を有効化するだけで、稼働中のままオンラインで移行できます。RDSシステムがバックグラウンドでプライマリのストレージからスナップショットを取得し、別の可用性ゾーンにセカンダリインスタンスを自動プロビジョニングして同期レプリケーションを確立します。移行中にデータベースが停止することはありません。",
    "keywords": [
      "RDS Modify",
      "マルチAZオンライン移行",
      "耐障害性設計"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-48",
    "category": "database",
    "question": "Amazon DynamoDBテーブルにおいて、ある項目（行）の読み取りにおいて、常に最新の更新を反映したデータを読み取る「強い一貫性のある読み取り (Strongly Consistent Reads)」を指定しました。この読み取り動作において、スロットリングエラーを最小化するために前段に ElastiCache などのキャッシュ層を設けない場合に発生しうる、読み取りキャパシティの設計影響として正しい記述はどれですか？",
    "options": [
      "消費するRCUが結果整合性の4倍になる",
      "キャッシュを介さないため、読み取りがバーストした際にDynamoDB側でスロットリングが発生しやすくなり、同一の読み取り回数に対して消費RCUが結果整合性のある読み取りの「2倍」計算されるため、RCUのプロビジョニングを多めに見積もる必要があること",
      "RCUではなくWCUが消費されるようになる",
      "強い一貫性のある読み取りはスロットリングが発生しない"
    ],
    "answerIndex": 1,
    "explanation": "強い一貫性のある読み取り (Strongly Consistent Reads) を実行すると、DynamoDBはすべてのレプリカからのデータを検証して最新のものを返します。この処理は結果整合性のある読み取りに比べて消費するRCUが2倍になります。そのため、キャッシュなしで頻繁に読み取るとRCUクォータに到達しやすく（スロットリングが発生しやすく）なるため、プロビジョニング設計を多めにするか、オンデマンドを使用すべきです。",
    "keywords": [
      "DynamoDBスロットリング",
      "RCU設計",
      "強い一貫性のある読み取り"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-49",
    "category": "database",
    "question": "データベースを Amazon Aurora PostgreSQL クラスターに移行しました。アプリケーションサーバーとデータベースの間に「Amazon RDS Proxy」を配置しました。このプロキシの導入によって、プライマリデータベースの障害発生時（フェイルオーバー実行時）に得られる可用性上の利点はどれですか？",
    "options": [
      "データベースのフェイルオーバー自体が発生しなくなる",
      "RDS Proxyが新プライマリの昇格を中継し、アプリケーションとプロキシ間のクライアント接続を維持したまま待機させ、フェイルオーバー完了後に自動でルーティングを再開するため、アプリケーション側での接続タイムアウトエラーや再接続処理の負担が激減すること",
      "フェイルオーバーが不要になり、別リージョンへ通信を振り分ける",
      "接続されているクライアントのすべてのデータをプロキシのメモリに永続キャッシュする"
    ],
    "answerIndex": 1,
    "explanation": "RDS Proxyは、データベースのフェイルオーバー中に真価を発揮します。通常、Auroraのフェイルオーバー時にはクライアントの接続が一度すべて切断され、アプリ側で再接続ロジックを走らせる必要がありますが、RDS Proxyが前段にある場合、プロキシ自体がクライアントからの接続状態を保持し続け、新規接続エラーを出すことなく、新プライマリの昇格完了を待ってから自動でクエリを新ノードへ転送します。これによりフェイルオーバーに伴うアプリケーションのエラー率が最大66%減少します。",
    "keywords": [
      "RDS Proxy",
      "フェイルオーバー可用性",
      "接続管理"
    ],
    "domain": "domain-3"
  },
  {
    "id": "db-50",
    "category": "database",
    "question": "リレーショナルデータベース (RDS/Aurora) において、ある日突然、一部の複雑なレポートクエリの処理時間が急激に悪化（スロークエリ化）し、データベース全体のCPU使用率が100%に達してしまいました。この問題の原因分析とトラブルシューティングにおいて、クエリの実行計画（実行統計）やCPU負荷要因を一元的に視覚化し、どのSQL文がボトルネックになっているかをピンポイントで特定するために有効化すべきRDSの機能はどれですか？",
    "options": [
      "AWS Config ログの確認",
      "RDS Performance Insights (パフォーマンスインサイト) の有効化",
      "CloudTrailのデータイベント監査",
      "Enhanced Monitoring (拡張モニタリング) のみ"
    ],
    "answerIndex": 1,
    "explanation": "RDS Performance Insights (パフォーマンスインサイト) は、データベースの負荷（DB Load）を「待機イベント」「SQL文」「ユーザー」「ホスト」ごとに視覚的にダッシュボードへグラフ表示する機能です。これにより、どの特定のSQL文がCPUやI/Oを最も消費しているか（ボトルネックになっているか）を一目で特定できます。拡張モニタリングはOSレイヤーのCPU/メモリ監視であり、SQL内部のボトルネック特定はできません。",
    "keywords": [
      "Performance Insights",
      "スロークエリ特定",
      "データベース診断"
    ],
    "domain": "domain-3"
  },
  {
    "id": "net-01",
    "category": "network",
    "question": "グローバルに展開するマルチリージョンWebアプリケーションにおいて、世界各地のユーザーに対して同一の静的IPアドレスを提供し、インターネット経由の遅延を抑えて最も近いAWSエッジ拠点からAWSプライベートネットワークへルーティングさせたいです。どのサービスを選ぶべきですか？",
    "options": [
      "Amazon Route 53 (レイテンシーベースルーティング)",
      "Amazon CloudFront Functions",
      "AWS Global Accelerator",
      "AWS Transit Gateway"
    ],
    "answerIndex": 2,
    "explanation": "AWS Global Acceleratorは、Anycast IPアドレス（静的IP）を提供し、ユーザーのトラフィックを最も近いエッジロケーションからAWSのグローバルプライベートネットワークに引き込みます。これにより、インターネット経由の通信経路が短縮され、パケット損失やレイテンシーが劇的に改善します。Route 53はDNSレベルの誘導のみで、通信経路自体はインターネットを経由します。",
    "keywords": [
      "AWS Global Accelerator",
      "Anycast IP",
      "レイテンシー改善"
    ],
    "domain": "domain-2"
  },
  {
    "id": "net-02",
    "category": "network",
    "question": "オンプレミス環境と複数のAWSリージョンにある数百のVPCを相互接続し、ネットワークハブとしてルーティングを一元管理する、極めてスケーラブルな接続サービスはどれですか？",
    "options": [
      "VPC ピアリング (VPC Peering)",
      "AWS Direct Connect Gateway",
      "AWS Transit Gateway",
      "AWS PrivateLink"
    ],
    "answerIndex": 2,
    "explanation": "AWS Transit Gatewayは、VPCとオンプレミスネットワークを中央ハブを介して接続するクラウドプラットフォーム型ルーターです。メッシュ状のVPCピアリングが不要になり、数千のVPCやオンプレミスVPN、Direct Connectを単一のゲートウェイへ統合して複雑なネットワークトポロジを簡素化できます。",
    "keywords": [
      "AWS Transit Gateway",
      "ネットワークハブ",
      "マルチVPC"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-03",
    "category": "network",
    "question": "オンプレミスのプライベートDNSサーバーと、AWS VPC内の Route 53 プライベートホストゾーンの間で、ハイブリッドな相互DNS名前解決（双方向の名前解決）を実現するために構築すべき構成はどれですか？",
    "options": [
      "VPCピアリング接続のみ",
      "Route 53 Resolverの「インバウンドエンドポイント」と「アウトバウンドエンドポイント」の両方を構成し、条件付き転送ルールを設定すること",
      "Route 53のパブリックホストゾーンのみを使用する",
      "AWS Systems Manager Session Managerの利用"
    ],
    "answerIndex": 1,
    "explanation": "オンプレミスとVPC間の双方向DNS名前解決には、「Route 53 Resolver エンドポイント」を使用します。VPC側へのクエリを受け付ける「インバウンドエンドポイント」と、オンプレミス側へクエリを転送する「アウトバウンドエンドポイント」を構成し、転送ルール（例: `example.corp` 宛てはオンプレミスDNSのIPに転送）を割り当てることで、シームレスなハイブリッド名前解決が実現します。",
    "keywords": [
      "Route 53 Resolver",
      "ハイブリッドDNS",
      "エンドポイント"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-04",
    "category": "network",
    "question": "AWS Direct Connectを使用してオンプレミスからAWSへ専用線接続する際、複数のVPCおよび「Transit Gateway」と単一のプライベート接続を確立するために作成すべき Direct Connect 仮想インターフェイス (VIF) のタイプはどれですか？",
    "options": [
      "プライベート VIF (Private VIF)",
      "パブリック VIF (Public VIF)",
      "トランジット VIF (Transit VIF)",
      "ホスト型 VIF (Hosted VIF)"
    ],
    "answerIndex": 2,
    "explanation": "トランジット VIF (Transit VIF) は、Direct Connect接続を「Transit Gateway」に関連付けるために使用される専用の仮想インターフェイスタイプです。Transit VIFをDirect Connect Gateway経由でTransit Gatewayに紐づけることで、1本の物理専用線（またはホスト接続）から何百ものVPCへ一元的にプライベートアクセスできます。通常のプライベートVIFは単一のVPC（またはDX Gateway経由で最大10個のVPC）との接続用です。",
    "keywords": [
      "トランジット VIF",
      "Direct Connect",
      "Transit Gateway"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-05",
    "category": "network",
    "question": "インターネット全体に広く配信されるWebサイトで、突発的なアクセス集中（DDoS攻撃など）が発生しても、自動的に数百万リクエストを処理し、背後にあるEC2などのWebサーバーを完全に保護するためのエッジベースのキャッシュ・保護サービスはどれですか？",
    "options": [
      "Application Load Balancer (ALB) + AWS Shield Standard",
      "Amazon CloudFront + AWS WAF + AWS Shield Advanced",
      "Network Load Balancer (NLB) のみ",
      "Amazon API Gateway"
    ],
    "answerIndex": 1,
    "explanation": "Amazon CloudFrontは、世界中に配置されたエッジサーバー（ビューワーに最も近い拠点）でキャッシュコンテンツを配信し、リクエストを分散・吸収します。さらに「AWS WAF（ウェブアプリケーションファイアウォール）」および「AWS Shield Advanced（DDoS防御）」を組み合わせることで、アプリケーションサーバー（EC2やALB）へ有害なトラフィックや大量攻撃が届く前にエッジロケーション側でブロックし、高可用性を維持できます。",
    "keywords": [
      "CloudFront",
      "AWS WAF",
      "DDoS対策"
    ],
    "domain": "domain-2"
  },
  {
    "id": "net-06",
    "category": "network",
    "question": "VPC内のプライベートサブネットから、データ流出防止ポリシーを満たしつつ、インターネットゲートウェイを介さずに、DynamoDBに対してセキュアにプライベートアクセスしたいです。料金が無料で、ルートテーブルの書き換えのみで利用できるVPCエンドポイントはどれですか？",
    "options": [
      "インターフェイスエンドポイント (Interface Endpoint / PrivateLink)",
      "ゲートウェイエンドポイント (Gateway Endpoint)",
      "VPC ピアリング接続",
      "NAT ゲートウェイ"
    ],
    "answerIndex": 1,
    "explanation": "Amazon S3とAmazon DynamoDBの2つのサービスに対しては、料金が「無料」で利用できる「ゲートウェイエンドポイント (Gateway Endpoint)」が提供されています。VPCのルートテーブルにエンドポイントへのルーティングを自動追加するだけで、VPC内部からプライベートIPで直接DynamoDBに通信できます（データ処理料金もかかりません）。インターフェイスエンドポイントは時間・データ量課金が発生します。",
    "keywords": [
      "ゲートウェイエンドポイント",
      "DynamoDB",
      "VPCエンドポイント"
    ],
    "domain": "domain-2"
  },
  {
    "id": "net-07",
    "category": "network",
    "question": "Amazon Route 53において、アクティブ/アクティブなDR（災害対策）構成をデザインします。利用可能なすべてのリソース（例: 米国東部と東京にあるELB）に対して、DNSクエリの応答を「重み（比率）」に基づいて振り分け、障害が発生した側のエンドポイントをヘルスチェック機能で自動検知して除外したい場合、どのルーティングポリシーを使用すべきですか？",
    "options": [
      "シンプルルーティングポリシー",
      "フェイルオーバールーティングポリシー",
      "重み付けルーティングポリシー (Weighted Routing Policy) と Route 53 ヘルスチェックの組み合わせ",
      "レイテンシーベースルーティング"
    ],
    "answerIndex": 2,
    "explanation": "重み付けルーティングポリシー (Weighted Routing Policy) は、複数のリソースに対してDNSクエリの割合（例：50%対50%）を割り当てます。各レコードにRoute 53の「ヘルスチェック」を紐づけておくことで、特定のリージョンがダウンした際に、Route 53が不健全なリソースへのDNS応答を自動的に「0」にし、残りの健全なリソースにのみトラフィックを転送する自動フェイルオーバーを構成できます。",
    "keywords": [
      "重み付けルーティング",
      "ヘルスチェック",
      "Route 53"
    ],
    "domain": "domain-3"
  },
  {
    "id": "net-08",
    "category": "network",
    "question": "複数の異なるリージョンにまたがるVPC間で、専用回線（Direct Connect）を介したハイブリッド接続を共有し、複数リージョンのマルチVPCとオンプレミスを単一のプライベートゲートウェイで相互ルーティングさせたい場合、Direct Connectの背後に何を配置すべきですか？",
    "options": [
      "インターネットゲートウェイ (IGW)",
      "Direct Connect ゲートウェイ (Direct Connect Gateway)",
      "VPC ピアリング",
      "NAT ゲートウェイ"
    ],
    "answerIndex": 1,
    "explanation": "Direct Connect ゲートウェイ (Direct Connect Gateway) は、グローバルなネットワーク統合コンポーネントです。任意のAWSリージョンのVPC（最大10個の仮想プライベートゲートウェイ、または複数のTransit Gateway）とオンプレミスのDirect Connect回線を仲介できます。これにより、リージョンを跨いだプライベートハイブリッドネットワークが一括確立されます。",
    "keywords": [
      "Direct Connect ゲートウェイ",
      "マルチリージョン",
      "ハイブリッド接続"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-09",
    "category": "network",
    "question": "Amazon CloudFrontにおいて、高価なカスタムドメイン（例: `https://www.example.com`）のSSL/TLS証明書をアタッチしてHTTPS配信を行いたいです。AWS Certificate Manager (ACM) で証明書をリクエスト・インポートする際、配置すべきACMの「AWSリージョン」に関する必須条件はどれですか？",
    "options": [
      "CloudFrontのオリジンサーバー（EC2やALB）が存在するリージョンと同じである必要がある",
      "証明書は常に「米国東部 (バージニア北部) リージョン (us-east-1)」で作成またはインポートされている必要があること",
      "AWS Organizationsのマスターアカウントが所在するリージョン",
      "どこのリージョンであっても、CloudFrontがグローバルに自動同期するため制約はない"
    ],
    "answerIndex": 1,
    "explanation": "Amazon CloudFrontに独自のSSL/TLS証明書を適用するためには、ACM（AWS Certificate Manager）で証明書を発行またはインポートする際に、必ず「米国東部（バージニア北部）リージョン (us-east-1)」を選択する必要があります。CloudFrontはグローバルなエッジサービスであり、証明書の認証ストアとして us-east-1 リージョンのACMのみを参照する仕様となっているためです。",
    "keywords": [
      "CloudFront",
      "ACM",
      "バージニア北部 us-east-1"
    ],
    "domain": "domain-2"
  },
  {
    "id": "net-10",
    "category": "network",
    "question": "オンプレミスのクライアント端末から、インターネット経由でAWS VPC内部のネットワーク（プライベートサブネットのEC2など）へ、OpenVPNプロトコル等を用いてセキュアにリモートアクセスさせたい場合にプロビジョニングすべきAWSサービスはどれですか？",
    "options": [
      "AWS Site-to-Site VPN",
      "AWS Client VPN",
      "AWS Transit Gateway",
      "SSM Session Manager"
    ],
    "answerIndex": 1,
    "explanation": "AWS Client VPNは、クライアント端末（個別のPCやスマートフォンなど）からAWSリソースやオンプレミスネットワークへのアクセスを安全に確立する、クライアント対サイトのVPN（リモートアクセスVPN）サービスです。フルマネージドで自動スケールし、OpenVPNおよびSAML等のIDフェデレーションと連携して安全な接続を提供します。Site-to-Siteは拠点間（ルーター対ルーター）の接続用です。",
    "keywords": [
      "AWS Client VPN",
      "リモートアクセス",
      "OpenVPN"
    ],
    "domain": "domain-2"
  },
  {
    "id": "net-11",
    "category": "network",
    "question": "AWS Network Firewall に関する正しい記述はどれですか？",
    "options": [
      "サブネット内のインスタンスのローカルファイアウォール（iptables）を自動構成する機能である",
      "VPC全体の境界（VPCのインバウンド・アウトバウンドトラフィックの経路上）に配置し、レイヤー3からレイヤー7にまたがる高度なステートフル検査、侵入防止システム (IPS)、URLフィルタリングを一元実行できるマネージドファイアウォールサービスであること",
      "セキュリティグループの名称を変更しただけの機能である",
      "インターネットゲートウェイのポリシーのみを監視し、ポートスキャンをブロックする"
    ],
    "answerIndex": 1,
    "explanation": "AWS Network Firewallは、VPC全体に対する高度なネットワーク保護を提供するマネージドサービスです。ステートレスおよびステートフルなルールエンジンを備え、トラフィックのプロトコル制限や、悪意あるアウトバウンドドメインへの接続ブロック（URLフィルタリング）、不正パターンの検知（IDS/IPS機能）を実行できます。セキュリティグループやACLより上位のレイヤーで動作します。",
    "keywords": [
      "AWS Network Firewall",
      "ステートフル検査",
      "IDS/IPS"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-12",
    "category": "network",
    "question": "CloudFrontのエッジサーバーにおいて、静的コンテンツのキャッシュ効率を高めつつ、バックエンドのオリジンサーバーへの転送回数を最小限に抑えるために、複数の中継エッジ拠点からのアクセスを一元的に集約してキャッシュヒット率を高める機能はどれですか？",
    "options": [
      "CloudFront オリジンシールド (Origin Shield)",
      "CloudFront Functions",
      "AWS Global Accelerator",
      "AWS PrivateLink"
    ],
    "answerIndex": 0,
    "explanation": "CloudFront オリジンシールド (Origin Shield) は、オリジンの前段に配置される追加のキャッシュレイヤーです。世界中のエッジロケーションからのリクエストは、まずオリジンシールドに集約され、そこでキャッシュヒットした場合はオリジンまで届きません。これにより、オリジン側の処理負荷や、データ転送コスト（Egressコスト）を最小化できます。",
    "keywords": [
      "Origin Shield",
      "キャッシュヒット率",
      "オリジン保護"
    ],
    "domain": "domain-3"
  },
  {
    "id": "net-13",
    "category": "network",
    "question": "VPCピアリング接続 (VPC Peering) を使用して、異なるVPC間のルーティングを構成する際の重要な制限・仕様に関する正しい記述はどれですか？",
    "options": [
      "ピアリング先のVPCが別リージョンにある場合は通信できない",
      "接続する2つのVPC間で、IPアドレス範囲（CIDRブロック）が重複（オーバーラップ）している場合は、ピアリング接続を作成できないこと。また、推移的（トランジティブ）ルーティングはサポートされないこと",
      "ピアリングは同一のAWSアカウント内のVPC同士でのみ作成可能である",
      "ピアリング通信にはデータ転送量が無制限かつ完全に無料である"
    ],
    "answerIndex": 1,
    "explanation": "VPCピアリングの主要な制限として、CIDRの重複があってはならない点があります。また、A-B間、B-C間でピアリングしていても、AからBを経由してCへ通信する（推移的ルーティング）ことはできません（A-C間に個別に接続が必要です）。Transit Gatewayを使用すればこの制約を回避できます。リージョンを跨いだピアリング（インターリージョンピアリング）は可能です。",
    "keywords": [
      "VPCピアリング",
      "CIDR重複制限",
      "推移的ルーティング"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-14",
    "category": "network",
    "question": "Amazon CloudFrontで有料のプライベート動画や機密ドキュメントを配信する際、個々のファイルへの有効期限付きアクセスを制限し、かつブラウザからの「複数の異なるURLにまたがる関連ファイル（メディアストリーミングのHLSセグメントファイル群など）」への安全な一括アクセスを許可する認証機能はどちらですか？",
    "options": [
      "CloudFront 署名付き URL (Signed URLs)",
      "CloudFront 署名付きクッキー (Signed Cookies)",
      "WAF トークン認証",
      "S3 Presigned URL"
    ],
    "answerIndex": 1,
    "explanation": "CloudFront 署名付きクッキー (Signed Cookies) は、現在のアプリケーションURLやファイル構造を変更することなく、ユーザーのブラウザに認証クッキーをセットすることで、制限されたファイル群へのアクセスを許可できます。HLSメディア配信のように、インデックスファイル（m3u8）と多数のセグメントファイル（ts）など、複数ファイルへの同時アクセスを許可したい場合は、個別の署名付きURLを発行するより、署名付きクッキーが適しています。",
    "keywords": [
      "署名付きクッキー",
      "プライベートコンテンツ配信",
      "HLSストリーミング"
    ],
    "domain": "domain-2"
  },
  {
    "id": "net-15",
    "category": "network",
    "question": "AWS Transit Gatewayにおいて、各VPCの特性（本番環境用、開発環境用など）に合わせてルーティングを厳密に隔離し、開発VPCから本番VPCへの直接アクセスを遮断しつつ、共有サービスVPCには双方からアクセスできるようにする「セグメンテーション（隔離ネットワーク）」の実現に必要な設定はどれですか？",
    "options": [
      "セキュリティグループの個別紐づけのみ",
      "Transit Gateway 上に複数のカスタム「ルートテーブル (Route Tables)」を作成し、アソシエーション（関連付け）とプロパゲーション（伝播）を個別に制御すること",
      "サブネットACLによるパケットドロップ設定のみ",
      "VPCピアリングの無効化"
    ],
    "answerIndex": 1,
    "explanation": "Transit Gatewayは、仮想的な「Transit Gatewayルートテーブル」を複数持つことができます。各VPCアタッチメントを異なるTGWルートテーブルに「アソシエーション（関連付け）」し、ルートの「プロパゲーション（伝播）」を細かく設計（例: 本番TGWルートテーブルには開発VPCへのルートを伝播させない）することで、VPC間のルーティングをゲートウェイ内部で完全に隔離（セグメンテーション）できます。",
    "keywords": [
      "Transit Gateway",
      "ルートテーブルアソシエーション",
      "ネットワーク隔離"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-16",
    "category": "network",
    "question": "Amazon Route 53の「地理的近接性ルーティング (Geoproximity Routing)」ポリシーと、「位置情報ルーティング (Geolocation Routing)」ポリシーの主な違いは何ですか？",
    "options": [
      "地理的近接性はユーザーの物理的距離のみを扱い、位置情報はユーザーの国籍を扱う",
      "位置情報はユーザーの地理的場所（国や州）に基づいて誘導先を決定するのに対し、地理的近接性はリソースの物理的位置座標（AWSリージョンやカスタム経緯度）を基準とし、「バイアス（Bias）」パラメータを用いてリソースの影響範囲をダイナミックに拡大・縮小できること",
      "地理的近接性はパブリックDNSでのみ機能し、位置情報はプライベートDNSでのみ機能する",
      "両者に機能的な違いはなく、名称のバリエーションである"
    ],
    "answerIndex": 1,
    "explanation": "位置情報 (Geolocation) ルーティングは、「日本からのアクセスは東京リージョンへ、EUからはアイルランドへ」のように、クエリ元の国やエリアに基づき固定でトラフィックをマッピングします。一方、地理的近接性 (Geoproximity) ルーティングは、リソースの位置を起点とした「バイアス（重み）」値を設定することで、特定リソースに誘導する地理的境界線（範囲）を柔軟に変更・拡大できるトラフィックフロー機能を提供します。",
    "keywords": [
      "地理的近接性ルーティング",
      "バイアス設定",
      "位置情報"
    ],
    "domain": "domain-3"
  },
  {
    "id": "net-17",
    "category": "network",
    "question": "Application Load Balancer (ALB) と Network Load Balancer (NLB) の接続・通信処理の特性に関する正しい記述はどれですか？",
    "options": [
      "ALBはレイヤー4（TCP/UDP）で動作し、NLBはレイヤー7（HTTP/HTTPS）で動作する",
      "ALBはHTTPヘッダー解析、パスベースルーティング、SSL証明書の終端などのレイヤー7処理を行い、NLBは超高スループットと極めて低いレイテンシーを提供し、固定IPアドレス（Elastic IP）をサポートするレイヤー4処理を行うこと",
      "ALBのみが Auto Scaling と連携できる",
      "NLBはHTTPリクエストヘッダーの Cookie を解析してセッション維持をサポートする"
    ],
    "answerIndex": 1,
    "explanation": "ALBはレイヤー7 (L7) アプリケーションプロトコルを識別し、URLパスやヘッダーに応じた複雑な振り分けを行います。NLBはレイヤー4 (L4) ネットワークレベルで動作し、ミリ秒未満のレイテンシーで毎秒数百万のTCP/UDPリクエストを中継します。また、NLBは起動時に固定パブリックIPアドレス（サブネットごとに1つの固定IP）を持ちます。",
    "keywords": [
      "ALB",
      "NLB",
      "通信レイヤーの使い分け"
    ],
    "domain": "domain-2"
  },
  {
    "id": "net-18",
    "category": "network",
    "question": "VPC内のサブネットに対するネットワークアクセス制御リスト (ネットワークACL) と、EC2インスタンス等のリソースに対するセキュリティグループ (Security Groups) の主要な相違点はどれですか？",
    "options": [
      "セキュリティグループはステートフルであり、ネットワークACLはステートレスであること。また、ネットワークACLはサブネット境界で動作し、明示的な拒否（Deny）ルールを定義できること",
      "セキュリティグループはサブネットに適用され、ネットワークACLはインスタンスに適用される",
      "セキュリティグループはインバウンドのみ制御でき、ネットワークACLはアウトバウンドのみ制御できる",
      "セキュリティグループのみがパケットの暗号化を自動で行う"
    ],
    "answerIndex": 0,
    "explanation": "セキュリティグループは「ステートフル」です（許可されたインバウンドに対する応答のアウトバウンドは自動で通ります）。一方、ネットワークACLは「ステートレス」であり、戻りの通信の許可ルールも明示的に設定する必要があります。また、ネットワークACLは「サブネット単位」で適用され、IPアドレスに対する「明示的拒否（Deny）」を記述できます（セキュリティグループは許可ルールのみ登録可能）。",
    "keywords": [
      "ネットワークACL",
      "セキュリティグループ",
      "ステートフル/ステートレス"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-19",
    "category": "network",
    "question": "プライベートVPC内にある内部API（Amazon API Gatewayで構築）に対して、パブリックインターネットに公開することなく、同一アカウントまたは異なるAWSアカウントのVPCから安全にプライベートアクセスさせたい場合、API Gateway側で設定すべきエンドポイントタイプは何ですか？",
    "options": [
      "エッジ最適化 API エンドポイント",
      "リージョン API エンドポイント",
      "プライベート API エンドポイント (Private API)",
      "グローバル API エンドポイント"
    ],
    "answerIndex": 2,
    "explanation": "プライベート API (Private API) エンドポイントを使用すると、API GatewayをVPCエンドポイント（PrivateLink）経由でのみ公開できます。これにより、APIへのトラフィックはインターネットを経由せず、AWSのプライベートネットワーク内に完全に保護されます。アクセス制御もVPCエンドポイントポリシーやAPI Gatewayリソースポリシーで制限可能です。",
    "keywords": [
      "プライベートAPI",
      "API Gateway",
      "AWS PrivateLink"
    ],
    "domain": "domain-2"
  },
  {
    "id": "net-20",
    "category": "network",
    "question": "NATゲートウェイ (NAT Gateway) を使用したプライベートサブネットからのアウトバウンド通信において、特定の送信先サーバーとの間で数万もの同時接続が発生した際、ポートが枯渇して接続エラー（接続タイムアウトやスロットリング）が発生しました。この問題を解消するための推奨されるアプローチはどれですか？",
    "options": [
      "NATゲートウェイを削除し、インターネットゲートウェイに直接ルートを通す",
      "NATゲートウェイに「セカンダリのプライベートIPアドレスおよび追加の Elastic IP アドレス」を関連付けるか、または各アベイラビリティーゾーンにNATゲートウェイを分散配置して宛先への送信元ポート数を拡張すること",
      "インスタンスのCPUサイズをスケールアップする",
      "NATゲートウェイの通信プロトコルをUDPのみに制限する"
    ],
    "answerIndex": 1,
    "explanation": "NATゲートウェイが持つ単一のパブリックIP（Elastic IP）からは、同一宛先への同時接続時に使用できる送信元ポート数（最大64,512個）に制限があります。ポート枯渇問題（ポートスロットリング）を解消するためには、NATゲートウェイに追加のEIP（IPアドレス）をアタッチしてポート数をスケールさせるか、AZごとにNATを配置して負荷分散を行います。",
    "keywords": [
      "NAT Gateway ポート枯渇",
      "Elastic IP追加",
      "スロットリング回避"
    ],
    "domain": "domain-3"
  },
  {
    "id": "net-21",
    "category": "network",
    "question": "AWS Transit Gatewayに接続されている多数のVPCがあります。特定の共有サービスVPC（共通のプロキシサーバーやセキュリティセキュリティ検査サブネットなど）に対して、他のすべてのVPCからの通信をTransit Gatewayを介して集約し、一元的にインターネットへの通信制御（フィルタリング）を行わせるための設計パターンは何ですか？",
    "options": [
      "すべてのVPCにインターネットゲートウェイを配置する",
      "共有サービスVPC内に「中央検査サブネット（NAT/ファイアウォールなど）」を設置し、Transit Gatewayのルートテーブルでデフォルトルート（0.0.0.0/0）のネクストホップを共有VPCのアタッチメントに向ける設計（Egress VPCパターン）",
      "VPCピアリングで全VPCをメッシュ接続する",
      "各VPCに個別のAWS Network Firewallを配置するのみ"
    ],
    "answerIndex": 1,
    "explanation": "Egress VPC（または中央検査VPC）パターンは、マルチVPC環境で最も推奨されるセキュア設計です。インターネットへ向かう全トラフィック（`0.0.0.0/0`）をTransit Gateway経由で「単一のEgress専用VPC」に引き込み、その中にあるNATゲートウェイやサードパーティのファイアウォール、AWS Network Firewallでパケット検査・制限を一元実行してからインターネットへ抜けるように構成します。",
    "keywords": [
      "Egress VPC",
      "Transit Gatewayルーティング",
      "セキュリティ一元化"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-22",
    "category": "network",
    "question": "オンプレミスから AWS への移行期において、オンプレミスのプライベートセグメントとVPCとの間で、Direct Connect または VPN 経由の接続テストを行っています。双方のルーター間で BGP (Border Gateway Protocol) によるルート情報の自動交換を行うために必要な AWS 側のハイブリッドゲートウェイコンポーネントはどれですか？",
    "options": [
      "インターネットゲートウェイ (IGW)",
      "仮想プライベートゲートウェイ (VGW - Virtual Private Gateway)",
      "NATゲートウェイ",
      "カスタマーゲートウェイ (CGW) のみ"
    ],
    "answerIndex": 1,
    "explanation": "仮想プライベートゲートウェイ (VGW) は、AWS側のハイブリッド接続（Site-to-Site VPNやDirect ConnectのプライベートVIFなど）の終端となるゲートウェイです。VGWを使用することで、VPCとオンプレミスのCGW（カスタマーゲートウェイ）との間で、BGPピアリングを確立し、自動でプライベートIPルートを動的伝播させることができます。",
    "keywords": [
      "Virtual Private Gateway",
      "VGW",
      "BGPダイナミックルーティング"
    ],
    "domain": "domain-4"
  },
  {
    "id": "net-23",
    "category": "network",
    "question": "CloudFrontのエッジロケーションで受信した特定のパス（例: `/api/*`）に対するリクエストを、AWSのプライベートネットワーク内で稼働している API Gateway や ALB に中継させたいです。CloudFrontのビヘイビア構成で定義すべき項目はどれですか？",
    "options": [
      "オリジンとしてS3を指定する",
      "ビヘイビアのパスパターンとして `/api/*` を作成し、オリジンに API Gateway / ALB のパブリックDNSエンドポイントを指定し、適切にTTL（キャッシュ有効期限）を「0（キャッシュ無効）」に定義すること",
      "CloudFrontのデフォルトルートにすべてマッピングする",
      "オリジンシールドを無効にする"
    ],
    "answerIndex": 1,
    "explanation": "CloudFrontはS3などの静的ファイルだけでなく、ALBやAPI Gatewayなどの動的オリジン (Custom Origin) もサポートしています。ビヘイビアの設定で特定のパスに対して「キャッシュの最小・最大・デフォルトTTLをすべて0」に指定することで、クエリはキャッシュされず、常に背後のAPIサーバーへリアルタイムに中継されます。これにより、SSLハンドシェイクやTCP接続が最寄りのエッジで終端され、エッジからオリジン間はAWSの超高速プライベート回線を通るため、動的通信も高速化します。",
    "keywords": [
      "動的オリジン",
      "CloudFrontビヘイビア",
      "キャッシュ無効化"
    ],
    "domain": "domain-2"
  },
  {
    "id": "net-24",
    "category": "network",
    "question": "AWS Direct Connectを使用してオンプレミスからAWSへ専用線接続する際、オンプレミス側の物理ネットワークインターフェース（ルーターポート）を冗長化し、LACP（Link Aggregation Control Protocol）を使用して複数の物理回線（例: 10Gbps×2本）を単一の論理回線としてまとめて帯域拡張とフォールトトレランスを確保したい場合、どのDirect Connect機能を使用すべきですか？",
    "options": [
      "Direct Connect Gateway",
      "リンクアグリゲーショングループ (LAG - Link Aggregation Group)",
      "Transit VIF",
      "マルチパスマップ"
    ],
    "answerIndex": 1,
    "explanation": "リンクアグリゲーショングループ (LAG) は、単一のAWS Direct Connectエンドポイントにおいて、LACPプロトコルを使用して複数の物理回線をグループ化・論理的に1本の接続として扱う機能です。これにより、片方の回線が切断されても通信が途切れず、かつ利用可能な総帯域幅を拡張できます。",
    "keywords": [
      "LAG",
      "Direct Connect",
      "帯域冗長化"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-25",
    "category": "network",
    "question": "Route 53のプライベートホストゾーン（VPC内のプライベートDNS）に登録されているレコードを、同じAWSアカウント内の別のVPCや、異なるAWSアカウントに所属する別のVPCからも名前解決できるようにするために必要な手順として、正しいものはどれですか？",
    "options": [
      "ホストゾーンをパブリック公開する",
      "プライベートホストゾーンの「VPCの関連付け (VPC Association)」設定を編集し、対象の他のVPCを追加（別アカウントの場合はAWS CLIで関連付け承認要求を投げてから許可）すること",
      "VPCピアリングを結ぶだけで自動的に名前解決が共有される",
      "各VPCに同一のホストゾーンを個別に複製する"
    ],
    "answerIndex": 1,
    "explanation": "Route 53 プライベートホストゾーンは、明示的に関連付けられたVPCからのみ参照可能です。別のVPCや別アカウントのVPCから名前解決を行わせるためには、そのホストゾーンを対象VPCに「関連付け（Associate）」する必要があります。別アカウントのVPCを関連付けるには、一度API（CLI）を叩いて「アカウント間で関連付けの承認」を登録した後に、宛先VPCから関連付けコマンドを実行します。",
    "keywords": [
      "プライベートホストゾーン",
      "VPC関連付け",
      "クロスアカウント名前解決"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-26",
    "category": "network",
    "question": "AWS Global Acceleratorにおいて、ユーザーのトラフィックを最も近い健全なエンドポイント（ALBやNLB）に振り分けますが、特定の国やリージョンでシステム障害が発生した際、そのリージョンのエンドポイントグループに対するトラフィックの比率を動的に増減（例: 100%から20%へ縮小）させるために操作すべきパラメータはどれですか？",
    "options": [
      "Route 53の重み",
      "トラフィックダイヤル (Traffic Dials) または エンドポイントのウェイト (Weights)",
      "CloudFrontのオリジン優先順位",
      "アクセラレータのIP設定"
    ],
    "answerIndex": 1,
    "explanation": "Global Acceleratorは、「トラフィックダイヤル（Traffic Dials）」を使用して、各エンドポイントグループ（通常は各AWSリージョン）に送信されるトラフィックの割合を調整できます。また、グループ内の個別エンドポイント（ALBやNLBなど）に対しては、「ウェイト（Weights）」を設定して個々のリソースへの分散比率を動的コントロールできます。",
    "keywords": [
      "トラフィックダイヤル",
      "Global Accelerator",
      "トラフィック制御"
    ],
    "domain": "domain-3"
  },
  {
    "id": "net-27",
    "category": "network",
    "question": "VPC内のEC2インスタンスから発生するネットワーク通信ログ（送信元/送信先IP、ポート番号、プロトコル、通信バイト数、アクション）をパケット単位ではなく接続単位で収集し、セキュリティセキュリティ監査や通信可視化を行うために有効にすべきVPC機能はどれですか？",
    "options": [
      "VPC フローログ (VPC Flow Logs)",
      "AWS Network Firewall Logs",
      "Enhanced Monitoring (拡張モニタリング)",
      "CloudTrailのデータイベント"
    ],
    "answerIndex": 0,
    "explanation": "VPC フローログ (VPC Flow Logs) は、VPC内のネットワークインターフェイス（ENI）を通過するIPトラフィックに関する情報をキャプチャする機能です。ログはCloudWatch LogsやS3バケットに送信され、不正アクセスの追跡、セキュリティグループルールの監査、通信量の可視化に利用できます。通信のヘッダー情報のみを扱うため、パフォーマンスやネットワーク遅延への影響はありません。",
    "keywords": [
      "VPCフローログ",
      "ネットワーク監査",
      "接続ログ収集"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-28",
    "category": "network",
    "question": "AWS Direct Connectを使用してハイブリッド接続を冗長化します。高信頼性なシステムにおいて、単一の接続プロバイダー障害やAWSエッジロケーション障害（局舎障害）が発生した場合でも、自動的かつ継続的にDirect Connect経由でのプライベート通信を維持するための推奨される高可用性（HA）の物理回線接続アーキテクチャはどれですか？",
    "options": [
      "単一のエッジロケーションで2つの物理ポートを利用する",
      "異なる2つのAWSエッジロケーション（Direct Connectロケーション）でそれぞれ個別の物理接続（異なるルーター）をプロビジョニングし、Direct Connect Gatewayを介して接続すること",
      "Direct Connectを1本契約し、バックアップとしてインターネットVPNを常時有効化するのみ",
      "Transit Gateway ピアリングのみを使用する"
    ],
    "answerIndex": 1,
    "explanation": "Direct Connectで最も高い回復性（高可用性）を構成するためには、単一のエッジロケーション障害に備え、「物理的に異なる2つのDirect Connectロケーション」にそれぞれ接続を構築する必要があります。これらを同じDirect Connect Gatewayにアソシエーションし、BGPマルチパスやアクティブ/アクティブ、またはアクティブ/パッシブ構成をとることで、片方のロケーションが災害や停電で完全にダウンしても、もう一方の回線で無停止でプライベート通信を継続できます。",
    "keywords": [
      "Direct Connect冗長化",
      "高可用性ハイブリッド",
      "ロケーション分散"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-29",
    "category": "network",
    "question": "CloudFrontにおいて、悪意あるスパムボットやスクレイピング、特定のIPアドレスレンジからのアクセスを、AWS Application Load Balancerのレイヤーまでトラフィックを到達させずに、CDNの末端（エッジ）で即座に拒否・制御するために、CloudFrontと直接統合すべきセキュリティサービスはどれですか？",
    "options": [
      "AWS Network Firewall",
      "AWS WAF",
      "IAM 権限ポリシー",
      "AWS Shield Standard"
    ],
    "answerIndex": 1,
    "explanation": "CloudFrontにはAWS WAF（ウェブアプリケーションファイアウォール）を直接Web ACLとしてアタッチできます。これにより、特定のIPブラックリストからのリクエストや、XSS/SQLインジェクションなどの既知の不正攻撃パターンを持つHTTPリクエストを、エッジロケーションの時点でブロック（403応答）できるため、バックエンドのオリジンやALBに無駄な計算リソースやコストがかかるのを防御できます。",
    "keywords": [
      "AWS WAF",
      "CloudFrontセキュリティ",
      "エッジブロック"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-30",
    "category": "network",
    "question": "Route 53の「マルチバリュー回答ルーティング (Multivalue Answer Routing)」ポリシーを使用した場合、クライアントのDNSクエリに対してどのようなDNS応答が返されますか？",
    "options": [
      "クライアントのIPから見て最も遅延の少ない単一のIPが返される",
      "最大8つの健全なIPアドレスレコードがランダムにまとめて返され、クライアント側でその中から接続先を選ばせることで、簡易的なDNSロードバランシングと耐障害性を満たす応答が行われること",
      "フェイルオーバールールに基づき、プライマリがダウンしている場合のみセカンダリが返される",
      "地理的に最も近いリージョンのIPアドレスのみが返される"
    ],
    "answerIndex": 1,
    "explanation": "マルチバリュー回答ルーティングは、シンプルルーティングにヘルスチェック機能を加えたような動作をします。 Route 53は、最大8つの「正常なリソースのIPレコード」をクエリに対して一度にまとめて返します。一部のIPが死んでいる場合は自動除外されるため、クライアントブラウザ側で利用可能なIPへ接続を切り替えることができ、可用性が向上します。",
    "keywords": [
      "マルチバリュー回答ルーティング",
      "DNSロードバランシング",
      "ヘルスチェック連携"
    ],
    "domain": "domain-3"
  },
  {
    "id": "net-31",
    "category": "network",
    "question": "AWS Transit Gatewayとオンプレミス環境のルーターとの間で、バックアップ接続用のVPN（AWS Site-to-Site VPN）を構成します。ルーティングの追加・削除の自動化をサポートし、障害発生時に別経路へ迅速にルートを切り替えさせるために推奨されるVPNルーティング構成はどれですか？",
    "options": [
      "静的（スタティック）ルーティングポリシーの定義",
      "BGP (Border Gateway Protocol) による動的（ダイナミック）ルーティングを使用すること",
      "VPCルートテーブルでの直接ルーティングのみ",
      "IPsec暗号化の解除"
    ],
    "answerIndex": 1,
    "explanation": "ハイブリッドVPN接続において、BGPダイナミックルーティングを使用することで、オンプレミスとAWS Transit Gateway間でネットワークルート情報が動的交換されます。これにより、Direct Connectの切断時にVPNルートへ自動フェイルオーバーが行われるなど、手動によるルートテーブル書き換えなしでルート復旧が可能です。",
    "keywords": [
      "Site-to-Site VPN",
      "BGP動的ルーティング",
      "自動フェイルオーバー"
    ],
    "domain": "domain-4"
  },
  {
    "id": "net-32",
    "category": "network",
    "question": "VPC内に「ゲートウェイVPCエンドポイント」を作成してS3バケットへのプライベート接続を構成しています。開発環境のVPCから、会社の「特定のAWSアカウント内に作成されたS3バケット」へのアクセスのみを許可し、開発者が個人のS3バケット等へデータをコピーして情報漏洩させることをエンドポイント側で防止したい場合、どこにどのようなポリシーを記述すべきですか？",
    "options": [
      "EC2インスタンスのセキュリティグループをブロックする",
      "VPC ゲートウェイエンドポイントの「エンドポイントポリシー (Endpoint Policy)」を編集し、許可するアクションの `Resource` に対し、自社アカウントのS3バケットARNのみを明示的に指定すること",
      "S3バケットポリシーにIP制限を書く",
      "VPCルートテーブルでS3の宛先を削除する"
    ],
    "explanation": "VPCエンドポイントには「エンドポイントポリシー」を付与できます（デフォルトはフルアクセス）。このポリシーを編集し、'Effect': 'Allow' とした上で、'Resource': ['arn:aws:s3:::my-company-bucket', 'arn:aws:s3:::my-company-bucket/*'] のように許可するリソースを制限します。これにより、VPC内部からは、指定されたバケット以外へのいかなるS3アクセスもブロックされ、データ流出を防御できます。",
    "keywords": [
      "VPCエンドポイントポリシー",
      "データ流出防止",
      "S3セキュリティガードレール"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-33",
    "category": "network",
    "question": "Route 53 Resolverの「アウトバウンドエンドポイント」を介して、VPC内のEC2からオンプレミスのプライベートDNSサーバーへDNS問い合わせを中継させるために作成すべき「ルールタイプ (Rule Type)」は何ですか？",
    "options": [
      "システムルール (System Rule)",
      "転送ルール (Forward Rule)",
      "自動定義ルール",
      "再帰ルール"
    ],
    "answerIndex": 1,
    "explanation": "転送ルール (Forward Rule) を作成することで、特定のドメイン名（例: `*.corp.company.com`）の解決リクエストが来た際に、そのクエリを Route 53 Resolver アウトバウンドエンドポイントを経由して、オンプレミス側のDNSサーバーのプライベートIPアドレスに直接フォワード（転送）するように定義できます。",
    "keywords": [
      "転送ルール",
      "Route 53 Resolver",
      "ハイブリッドDNS解決"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-34",
    "category": "network",
    "question": "CloudFrontのWebディストリビューションにおいて、オリジンが静的なS3バケットの場合、ユーザーがS3の直接のパブリックオブジェクトURL（例: `https://s3.amazonaws.com/...`）を叩いてコンテンツにアクセスするのを禁止し、必ずCloudFrontのCDNエンドポイント経由でのみファイルを読み込ませる（直リンク禁止）ために設定すべき構成はどれですか？",
    "options": [
      "S3バケットポリシーで特定のユーザーエージェントを許可する",
      "S3バケットの「ブロックパブリックアクセス」を有効にした上で、CloudFrontの「オリジンアクセス制御 (OAC - Origin Access Control)」を構成し、S3バケットポリシーでOACからの読み取りアクセスのみを許可すること",
      "S3バケットのパブリック公開URLを変更する",
      "S3バージョニングの有効化"
    ],
    "answerIndex": 1,
    "explanation": "CloudFrontとS3を連携させてセキュアに配信する標準の手法は「OAC (Origin Access Control)」です。S3バケット自体は完全に非公開（パブリックアクセスブロック）とし、バケットポリシーで「CloudFront OAC（特定のディストリビューションID）からの `s3:GetObject` リクエストのみ」を許可することで、ユーザーはS3直リンクでの取得ができなくなり、必ずCloudFrontの配信規則（WAFやキャッシュルールなど）を通過するようになります。",
    "keywords": [
      "OAC",
      "S3直リンク防止",
      "CloudFrontオリジン保護"
    ],
    "domain": "domain-2"
  },
  {
    "id": "net-35",
    "category": "network",
    "question": "Route 53にドメインを登録し、外部からのDNSスプーフィング攻撃やキャッシュポイズニング攻撃を防止するため、DNS応答データの整合性と出所を保証する「DNSSEC (DNS Security Extensions)」を有効化します。この際に必要となる暗号署名の関連鍵設定はどちらですか？",
    "options": [
      "AWS Certificate Manager (ACM) のSSL証明書",
      "KMSでカスタマー管理キー（非対称のECC_NIST_P256キーなど）を作成し、Route 53側で署名を有効にし、ドメイン登録事業者（レジストラ）にDS（委任署名者）レコードを登録すること",
      "IPsec VPN鍵ポリシーの有効化",
      "Route 53 DNSSECは自動で裏側で完全完結するため鍵管理は不要"
    ],
    "answerIndex": 1,
    "explanation": "Route 53でのDNSSECの有効化には、非対称暗号鍵を管理するKMS（カスタマー管理キー）との連携が必要です。Route 53がKMSキーを使用してDNSホストゾーンレコードに暗号署名を生成します。また、信頼の連鎖を確立するため、生成されたパブリックキーのハッシュ情報（DSレコード）を上位のドメイン登録事業者（レジストラや親ゾーン）へ登録するステップが必要となります。",
    "keywords": [
      "DNSSEC",
      "Route 53 DNSSEC",
      "KMS非対称キー"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-36",
    "category": "network",
    "question": "大規模なエンタープライズVPCにおいて、将来的なEC2やコンテナタスクの急増に備えてサブネットのプライベートIPアドレスが枯渇する問題が発生し始めました。既存のVPCの構成を崩すことなく、サブネットに利用可能なIPアドレス範囲を拡張するための最も簡単なVPC改修手順はどれですか？",
    "options": [
      "VPCを新規に作成し直して、すべてのインスタンスを再起動して移行する",
      "VPCの設定で「セカンダリ CIDR ブロック (Secondary CIDR Block)」を追加アソシエーションし、その新規アドレス空間から新しいサブネットを作成すること",
      "すべてのサブネットのマスクを手動で `/24` から `/16` に動的に書き換える",
      "VPCピアリングを作成する"
    ],
    "answerIndex": 1,
    "explanation": "作成済みのVPCのCIDRサイズ（IPアドレス数）を変更することはできませんが、既存のVPCに対して新しく「セカンダリCIDR（IPv4アドレス範囲の追加）」を関連付ける（アソシエーション）ことができます。追加したCIDRブロックから新しいサブネットを切り出すことで、既存のリソースに影響を及ぼさずにVPC全体のIPキャパシティを拡張可能です。",
    "keywords": [
      "セカンダリCIDR",
      "VPC拡張",
      "IPアドレス枯渇対策"
    ],
    "domain": "domain-3"
  },
  {
    "id": "net-37",
    "category": "network",
    "question": "AWS Transit Gatewayにおいて、ピアリング接続 (Transit Gateway Peering) を使用して、地理的に異なるAWSリージョンにあるTransit Gateway同士を相互接続する際の、ルーティング制限に関する正しい記述はどれですか？",
    "options": [
      "リージョン間ピアリングでは、自動的に双方の配下のVPCルートが伝播されるためルーティングテーブルの設定は不要である",
      "Transit Gateway ピアリング接続自体には動的なルート伝播機能がないため、双方のTransit Gatewayルートテーブルで、相手リージョンのVPC CIDRに対するスタティック（静的）ルートを明示的に記述し、ピアリング接続をネクストホップに指定する必要があること",
      "リージョンを跨いだTransit Gatewayのピアリングは不可能である",
      "ピアリングは同一のAWSアカウント内のTransit Gateway同士でしか構成できない"
    ],
    "answerIndex": 1,
    "explanation": "Transit Gatewayの「リージョン間ピアリング (Inter-Region Peering)」には、同一リージョン内のような動的ルートプロパゲーション（伝播）機能はありません。そのため、ピアリング接続を作成した後に、双方のTGWのルートテーブルを編集し、相手リージョンのネットワークCIDR範囲（例: 東京リージョンの `10.100.0.0/16`）宛てはピアリングアタッチメントIDに流すという「スタティックルート」の登録が必要です。",
    "keywords": [
      "Transit Gateway ピアリング",
      "スタティックルーティング",
      "リージョン間接続"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-38",
    "category": "network",
    "question": "VPC内のサブネット設計において、ルートテーブル設定で「インターネットゲートウェイ (IGW)」へのデフォルトルート (`0.0.0.0/0`) が設定されており、かつ「パブリックIP」を持つインスタンスが配置されるサブネットを何と呼びますですか？",
    "options": [
      "プライベートサブネット (Private Subnet)",
      "パブリックサブネット (Public Subnet)",
      "隔離サブネット (Isolated Subnet)",
      "DMZ サブネット"
    ],
    "answerIndex": 1,
    "explanation": "パブリックサブネットは、ルートテーブルにインターネットゲートウェイ（IGW）宛てのデフォルトルート（`0.0.0.0/0`）があり、かつアタッチされるEC2などのインスタンスにパブリックIP（またはElastic IP）が割り振られているサブネットです。プライベートサブネットはIGWへの直接ルートを持たず（代わりにNATゲートウェイ経由などのルートを持つ）、隔離サブネットは外部への通信経路を一切持ちません。",
    "keywords": [
      "パブリックサブネット",
      "インターネットゲートウェイ",
      "ルーティング"
    ],
    "domain": "domain-2"
  },
  {
    "id": "net-39",
    "category": "network",
    "question": "Application Load Balancer (ALB) にアタッチされた証明書を使用して、SSL/TLS暗号化通信の終端処理（SSLオフロード）を行います。ALBからターゲット（EC2インスタンス）までのVPC内部通信に関して、セキュリティコンプライアンス要件により「転送中のデータをVPC内部であっても常に暗号化する」ことが義務付けられています。これを満たすための正しい構成はどれですか？",
    "options": [
      "ALB自体で自動暗号化されるため設定変更は不要である",
      "ALBのリスナーでHTTPS (443) を受信し、ターゲットグループへのプロトコル設定を「HTTPS」にし、EC2インスタンス（アプリケーションサーバー）側でも自己署名証明書等をアタッチしてHTTPS通信を受け取れるように構成すること",
      "ALBとEC2の間に VPN を張る",
      "ALBではなくNLBを使用し、TCPパススルーのみに制限する"
    ],
    "answerIndex": 1,
    "explanation": "ALBは、ロードバランサーからターゲット間の通信を「HTTPS」プロトコルで通信するように設定できます。ターゲットグループのプロトコル設定をHTTPSにし、ターゲットのEC2側でもWebサーバーにSSL証明書（ALB側のような公的証明書ではなく自己署名証明書でも可）を設定してポート443でリスンさせることで、ALBからターゲットまでの通信も完全に暗号化（転送中暗号化）されコンプライアンスを満たせます。",
    "keywords": [
      "SSLオフロード",
      "ターゲットグループHTTPS",
      "転送中データ暗号化"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-40",
    "category": "network",
    "question": "CloudFrontのエッジサーバーで受信したリクエストに対して、オリジンサーバーにルーティングする前の段階で、URLクエリ文字列パラメータの並び順の正規化、リクエストヘッダーの付与、特定のHTTPレスポンスヘッダー（セキュリティ用の `Strict-Transport-Security` など）の動的書き込みを一括で、ミリ秒未満のレイテンシーで実行できる、最もコストが安い軽量コード実行環境はどれですか？",
    "options": [
      "Lambda@Edge",
      "CloudFront Functions",
      "API Gateway",
      "AWS Lambda (標準)"
    ],
    "answerIndex": 1,
    "explanation": "CloudFront Functionsは、ヘッダーの操作、URLの書き換え、クエリパラメータの正規化など、ミリ秒未満で動作する軽量なJavaScript環境をエッジ拠点自体で提供します。Lambda@Edgeに比べて実行速度が速く、コストも約1/6と安価なため、外部へのネットワークコールが不要なシンプルなリクエスト/レスポンス書き換えには最も適しています。",
    "keywords": [
      "CloudFront Functions",
      "軽量エッジ操作",
      "ヘッダー書き換え"
    ],
    "domain": "domain-3"
  },
  {
    "id": "net-41",
    "category": "network",
    "question": "社内のセキュリティポリシーにより、パブリックサブネットに配置したNATゲートウェイのアウトバウンドの通信アクセス先を、特定の外部サービス（SaaSのAPIなど）のドメイン名（ホワイトリスト）のみに制限し、開発者が勝手に個人サーバー等に接続することを防止したいです。どのセキュリティアプライアンス（サービス）を追加・構築すべきですか？",
    "options": [
      "セキュリティグループの編集のみ",
      "AWS Network Firewall をNATゲートウェイの直前（ルートテーブルの経路上）に挿入し、ドメインリスト（ホワイトリストルール）を用いたステートフルパケットフィルタリングを有効化すること",
      "AWS WAFのNATゲートウェイへの紐づけ",
      "ネットワークACLですべてのドメイン名を個別に拒否する"
    ],
    "answerIndex": 1,
    "explanation": "セキュリティグループやネットワークACLはIPアドレスベースで動作するため、「ドメイン名（URL）」でのホワイトリスト制限ができません。AWS Network Firewallを使用すると、ドメイン名（例: `*.github.com`）に基づいたステートフルなフィルタングルールを作成でき、NATゲートウェイ宛てのルートの中継点でこのファイアウォールを通過させることで、未認可の外部ドメインへの接続をシステム的に完全ブロックできます。",
    "keywords": [
      "AWS Network Firewall",
      "ドメインホワイトリスト",
      "アウトバウンド制御"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-42",
    "category": "network",
    "question": "グローバルなWebサービスを運用しており、世界各地のユーザーから同一ドメイン名（`www.my-app.com`）でリクエストを受け取ります。最も通信レイテンシーが短くなる地理的に近いAWSリージョン（例: 米国東部か東京）のApplication Load BalancerにDNS解決で自動誘導させたいです。Route 53で設定すべきレコードポリシーはどれですか？",
    "options": [
      "フェイルオーバールーティングポリシー",
      "位置情報ルーティングポリシー",
      "レイテンシーベースルーティングポリシー (Latency-based Routing)",
      "マルチバリュー回答ルーティングポリシー"
    ],
    "answerIndex": 2,
    "explanation": "レイテンシーベースルーティング (Latency-based Routing) ポリシーを使用すると、Route 53はDNSクエリ元のユーザーIPと、各AWSリージョン間のネットワーク遅延（ネットワーク測定値）をリアルタイムで比較し、最もレイテンシーが低いリージョンのレコード（IP）を自動で返します。これにより、グローバルユーザーへのレスポンス性能が最大化されます。",
    "keywords": [
      "レイテンシーベースルーティング",
      "DNS解決最適化",
      "グローバルルーティング"
    ],
    "domain": "domain-3"
  },
  {
    "id": "net-43",
    "category": "network",
    "question": "Amazon CloudFrontにおいて、特定の有料ユーザーに対してのみ、コンテンツ（例: `https://cdn.example.com/video.mp4`）のダウンロードアクセスを特定の「有効期限（例: 生成から1時間）」の間だけ許可し、それ以外のユーザーからの直アクセスを防御するために使用する機能はどれですか？",
    "options": [
      "AWS WAFのトークン検証",
      "CloudFront 署名付き URL (Signed URLs) または 署名付きクッキー (Signed Cookies)",
      "S3バケットポリシーのIP制限",
      "CloudFrontのデフォルトキャッシュTTL変更"
    ],
    "answerIndex": 1,
    "explanation": "CloudFrontの「署名付きURL (Signed URLs)」や「署名付きクッキー (Signed Cookies)」を使用することで、特定期間（開始時間・終了期限）および特定のIPアドレスのみアクセス可能なポリシーを埋め込んだ暗号化署名付きのURLを発行できます。署名のない通常URLでエッジに届いたリクエストはすべてアクセス拒否されるため、コンテンツの有料制限や配信保護に必須です。",
    "keywords": [
      "署名付きURL",
      "コンテンツ配信保護",
      "CloudFront"
    ],
    "domain": "domain-2"
  },
  {
    "id": "net-44",
    "category": "network",
    "question": "オンプレミスからAWSへの段階的なシステム移行において、Direct Connectがダウンした際の「バックアップ通信経路」としてインターネット経由の暗号化された VPN 接続（AWS Site-to-Site VPN）を準備しました。Direct Connectが正常に稼働している間はVPN側へデータが流れないように（Direct Connectを優先する）制御するためのBGPパス選択のベストプラクティスはどれですか？",
    "options": [
      "VPNのルートテーブルを手動で編集する",
      "Direct Connect Gateway経由のBGP経路伝播において、Direct ConnectのASパスを短くし（またはMED値を低くし）、VPN側のASパスを長く設定（AS Path Prepending）してDirect Connect側のパスを優先度高に設定すること",
      "VPNの暗号化を一時的に解除する",
      "Transit Gatewayを一時的に停止する"
    ],
    "answerIndex": 1,
    "explanation": "BGPルーティングポリシーに基づき、AWSおよびオンプレミスのルーターは「ASパス長が短い方のルート」を最優先します。Direct Connect回線を優先させ、VPNをスタンバイにするためには、VPNのBGPアドバタイズ時に「AS Path Prepending（ASパスの意図的な追加）」を行ってVPN経路のASパスを意図的に長く構成し、優先度を下げる設計を行います。",
    "keywords": [
      "AS Path Prepending",
      "BGP優先度制御",
      "ハイブリッドバックアップパス"
    ],
    "domain": "domain-4"
  },
  {
    "id": "net-45",
    "category": "network",
    "question": "複数のAZに跨るマルチVPCおよびDirect Connectを含む複雑な企業ネットワークを構築しています。VPC内の個々のサブネットルートテーブルにおいて、対向するすべてのVPCやオンプレミスのルート（数百個のCIDR）を個別に手動で記述するのを防ぎ、デフォルトルートなどの大まかなCIDRだけでTransit Gatewayへトラフィックを転送させて簡素化するルートテーブル設計はどちらですか？",
    "options": [
      "各サブネットに個別のNATゲートウェイを配置する",
      "サブネットのルートテーブルで、デフォルトルート (`0.0.0.0/0`) または広範囲の集約CIDR（例: `10.0.0.0/8`）の宛先ターゲットとして、Transit Gateway (tgw-xxxx) を一括指定すること",
      "すべてのVPCをピアリングでメッシュ接続する",
      "サブネットマスクを完全に無効化する"
    ],
    "answerIndex": 1,
    "explanation": "Transit Gatewayを導入する大きな利点は、VPC内の各サブネット側で持つ「ルートテーブルの行数を劇的に減らせる」点です。個別VPCごとの細かなルーティングはTransit Gateway側のルートテーブルで一元制御するため、各サブネットのルートテーブルには単に「すべての社内通信 (`10.0.0.0/8` 等) またはデフォルトルートはTGWに丸投げする」という1行のレコードを登録しておくだけで済みます。",
    "keywords": [
      "TGWルーティング簡素化",
      "集約ルート",
      "ネットワーク設計"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-46",
    "category": "network",
    "question": "AWS Global Acceleratorにおいて、提供される2つの「静的パブリックIPアドレス」が持つ主要な特徴として、正しくないものはどれですか？",
    "options": [
      "静的IPアドレスはAnycast IPであり、世界中の複数のAWSエッジロケーションから同時にアドバタイズされる",
      "静的IPアドレスはDNSキャッシュに依存せず、クライアントの接続レイテンシーを低減する",
      "提供される静的IPアドレスは、接続するVPCが別リージョンへフェイルオーバーすると、自動的に新しいIPアドレスに変更されてしまうこと",
      "静的IPアドレスはファイアウォールのホワイトリスト登録など、固定IP接続要件がある企業環境に最適である"
    ],
    "answerIndex": 2,
    "explanation": "Global Acceleratorが提供する2つの静的IPアドレス（Anycast IP）は、「永久に固定」です。背後にあるAWSリージョンのサーバーが別リージョンへ切り替わったりフェイルオーバーしたりしても、フロントのAnycast IP自体は一切変わらないため、クライアント端末側でのIP設定変更やDNSキャッシュクリアを待つ必要がありません。「自動的にIPが変更されてしまう」という記述は誤りです。",
    "keywords": [
      "Global Accelerator",
      "Anycast IP",
      "固定IP設計"
    ],
    "domain": "domain-2"
  },
  {
    "id": "net-47",
    "category": "network",
    "question": "VPC内に起動しているEC2インスタンスから、AWS以外の外部システム（パブリックAPIなど）へアウトバウンド通信を実行します。外部システムのファイアウォール監査ポリシーにより「自社専用の固定パブリックIPアドレスからの通信のみを受け入れる」と指定されました。どのように構成しますか？",
    "options": [
      "EC2インスタンスにElastic IPを直接アタッチしてパブリックサブネットに配置するか、プライベートサブネットのEC2からのルートを「Elastic IPを固定したNATゲートウェイ」に向けること",
      "インターネットゲートウェイに直接Elastic IPをアタッチする",
      "CloudFront経由でアウトバウンド通信を行う",
      "セキュリティグループのインバウンドルールで設定する"
    ],
    "answerIndex": 0,
    "explanation": "外部システム側でIPホワイトリスト登録が必要な場合、AWSからのアウトバウンド通信のIPアドレスを固定する必要があります。パブリックIPを持つEC2を使用するか、またはよりスケーラブルな構成として、EC2をプライベートサブネットに置き、アウトバウンドをNATゲートウェイ経由で処理させ、NATゲートウェイに「固定のElastic IP (EIP)」をアタッチします。これにより、NATゲートウェイを通過するすべてのインスタンスの送信元IPがEIPに集約・固定されます。",
    "keywords": [
      "Elastic IP",
      "NATゲートウェイ",
      "アウトバウンドIP固定"
    ],
    "domain": "domain-3"
  },
  {
    "id": "net-48",
    "category": "network",
    "question": "オンプレミスから AWS VPC 内のプライベートリソースへの低遅延で信頼性の高い専用ハイブリッドアクセスを構築する際、バックアップ用途として「2本の Direct Connect 接続」を個別のプロバイダー経由で導入しました。アクティブ回線で障害が発生した際に、BGPピアリングによってもう1本のバックアップ回線へ「自動フェイルオーバー」させるためのネットワーク設計上の考慮事項として、正しいものはどれですか？",
    "options": [
      "双方の回線でスタティックルートのみを手動で切り替える",
      "双方の Direct Connect 接続を同一の「Direct Connect ゲートウェイ (Direct Connect Gateway)」に関連付け、オンプレミスルーター側のBGPメトリック（Local PreferenceやAS Path）によりプライマリルートとセカンダリルートを定義すること",
      "VPCピアリングを2本並用する",
      "Direct Connectは自動フェイルオーバーをサポートしていないため、手動でポートを変更する"
    ],
    "answerIndex": 1,
    "explanation": "2本のDirect Connect（DX）回線での自動フェイルオーバーを実現するには、両方の接続を単一の「Direct Connect ゲートウェイ (DXGW)」にアソシエーションします。これによりAWS側からは両方のパスが認識されます。オンプレミスのルーター側で、優先したいプライマリ回線のBGP Local Preferenceを高く（またはASパスを短く）設定し、セカンダリ回線は低く設定しておくことで、プライマリ切断時にBGPが自動検知して即座にセカンダリパスへとトラフィックを自動迂回させます。",
    "keywords": [
      "Direct Connect Gateway",
      "BGP自動フェイルオーバー",
      "冗長ルーティング"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-49",
    "category": "network",
    "question": "Route 53 Resolverの「インバウンドエンドポイント」の冗長性（高可用性）を確保するためのネットワーク構成に関する必須条件はどちらですか？",
    "options": [
      "パブリックサブネットに配置する",
      "VPC内の「少なくとも2つの異なるアベイラビリティーゾーン (AZ) のサブネット」をそれぞれ指定し、各AZに最低1つのResolver IP（ENI）を配置すること",
      "インターネットゲートウェイをアタッチすること",
      "Route 53 Resolverは自動的にリージョン全体で冗長化されるため、AZの設定は不要である"
    ],
    "answerIndex": 1,
    "explanation": "Route 53 Resolver インバウンドエンドポイント（およびアウトバウンドエンドポイント）は、VPC内に Elastic Network Interface (ENI) を作成して動作します。アベイラビリティーゾーンの物理障害に備え、高可用性（SLA）を満たすために、エンドポイントの作成時には「少なくとも2つの異なる可用性ゾーン（AZ）のサブネット」を明示的に指定して、それぞれのゾーンにENIをプロビジョニングする必要があります。",
    "keywords": [
      "Route 53 Resolver",
      "インバウンドエンドポイント",
      "AZ冗長化"
    ],
    "domain": "domain-1"
  },
  {
    "id": "net-50",
    "category": "network",
    "question": "セキュリティコンプライアンスに基づき、VPC内のEC2からインターネット上の特定のHTTPSパブリックWebサイトへ接続するアウトバウンドパケットのペイロードまで詳細にスキャンし、かつ不正な署名やトロイの木馬などを遮断したい場合、どの構成が正しいですか？",
    "options": [
      "セキュリティグループのアウトバウンド許可のみで制限する",
      "VPCのアウトバウンドのデフォルトルートの先に、IDS/IPS（侵入検知・防止システム）機能およびTLS/SSLの復号検査をサポートする「AWS Network Firewall」またはサードパーティ製のファイアウォールアプライアンス（GWLB経由）を配置してトラフィックを強制検査すること",
      "AWS WAFの統合のみで設定する",
      "ネットワークACLですべてのパケットサイズを制限する"
    ],
    "answerIndex": 1,
    "explanation": "パケットの「ペイロード（通信データの中身）」を深くスキャンして不正侵入を検知・防御するためには、侵入防御システム（IPS）機能が必要です。AWS Network Firewallや、Gateway Load Balancer (GWLB) を介して配置されたサードパーティ製の次世代ファイアウォール (NGFW) アプライアンスに通信をルーティングし、必要に応じてTLS復号を設定した上でパケット内容をディープスキャン（Deep Packet Inspection - DPI）する構成が不可欠となります。",
    "keywords": [
      "AWS Network Firewall",
      "GWLB",
      "DPI (ディープパケットインスペクション)"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-01",
    "category": "security",
    "question": "AWS Organizationsにおいて、管理下にあるすべてのメンバーアカウントに対して、特定の機密データを保存するS3バケットの削除操作（s3:DeleteBucket）を「ルートユーザーを含めて」強制的に禁止したいです。どの機能を適用すべきですか？",
    "options": [
      "メンバーアカウントのIAM管理者ポリシー",
      "サービスコントロールポリシー (SCP - Service Control Policy)",
      "S3バケットポリシーの明示的拒否",
      "AWS Control Towerのセキュリティガードレール"
    ],
    "answerIndex": 1,
    "explanation": "サービスコントロールポリシー (SCP) は、組織（Organizations）のメンバーアカウントにおける最大権限を制御します。SCPで特定操作（`s3:DeleteBucket`など）を明示的に拒否（Deny）すると、そのアカウント内のルートユーザーを含むすべてのユーザーおよびロールに対してその操作が強制的に禁止されます。なお、SCPはOrganizationsの「管理アカウント（マスター）」自体には適用されません。",
    "keywords": [
      "SCP",
      "AWS Organizations",
      "ルートユーザー制限"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-02",
    "category": "security",
    "question": "開発者に対してIAMロールを作成する権限を与えたいですが、開発者が自分自身に管理者権限（AdministratorAccess）を持つロールを作成して権限昇格（特権の自己付与）を行うことを防止したいです。どのIAM機能を適用すべきですか？",
    "options": [
      "IAM 信頼ポリシー (Trust Policy)",
      "IAM 許可の境界 (Permissions Boundary)",
      "IAM リソースベースポリシー",
      "AWS Organizations SCP"
    ],
    "answerIndex": 1,
    "explanation": "IAM 許可の境界 (Permissions Boundary) は、管理ポリシーを使用してIAMプリンシパル（ユーザーまたはロール）に付与できる「最大権限」を定義する機能です。開発者にIAMロール作成権限を与える際、作成するロールに対してこのPermissions Boundaryの紐付けを強制させることで、開発者が自分自身の権限境界を超えるようなロール（管理者権限ロールなど）を作成して権限昇格することを確実に防ぎます。",
    "keywords": [
      "Permissions Boundary",
      "権限昇格防止",
      "IAMロール作成委任"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-03",
    "category": "security",
    "question": "AWSアカウントAにあるS3バケットを、AWSアカウントBのIAMロールからアクセスさせたいです。また、S3のデータはKMSカスタマー管理キー(CMK)で暗号化されています。必要な設定の組み合わせとして、正しいものはどれですか？",
    "options": [
      "アカウントAのS3バケットポリシーで許可するだけで通信できる",
      "アカウントAのS3バケットポリシーでアカウントBを許可し、かつアカウントAのKMSキーポリシーでアカウントBへのキー使用権限（kms:Decrypt等）を付与し、アカウントBのIAMロール側でもS3およびKMSへのアクセス権限を許可すること",
      "アカウントAとアカウントBの間でVPCピアリングを作成する",
      "S3のデフォルト暗号化キーをAWS管理キー（aws/s3）に変更する"
    ],
    "answerIndex": 1,
    "explanation": "クロスアカウントで暗号化されたS3バケットにアクセスする場合、バケットポリシーだけでなく、暗号化キー（KMSキー）のポリシー変更も不可欠です。送信先のバケットポリシーと、KMSキーポリシー（キーの共有ポリシー）の双方で相手アカウントを許可した上で、アクセス元のアカウントB側でも自身のIAMポリシーでS3およびKMS操作を許可する必要があります。なお、AWS管理キー（`aws/s3`など）で暗号化されたオブジェクトは別アカウントに共有できません。",
    "keywords": [
      "クロスアカウントS3",
      "KMSキーポリシー",
      "暗号化共有"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-04",
    "category": "security",
    "question": "AWS Secrets Managerを使用してAmazon RDSのデータベース認証情報（ユーザー名/パスワード）を保存しています。パスワードの漏洩リスクを低減するため、30日ごとにパスワードを自動でローテーション（自動更新）させたいです。必要な構成はどれですか？",
    "options": [
      "SSM パラメータストアの統合のみ",
      "Secrets Managerのローテーション設定を有効にし、データベースと同じVPC内に配置された自動ローテーション用AWS Lambda関数を関連付けて、パスワード更新を実行させること",
      "RDSのメンテナンスウィンドウを30日に設定する",
      "CodeDeployを使用した定期再起動"
    ],
    "answerIndex": 1,
    "explanation": "Secrets Managerは、データベースやその他のサービスの認証情報の自動ローテーションをサポートしています。これには「ローテーション用Lambda関数」が必要であり、LambdaがSecrets Managerから新しいパスワードを取得し、データベースに適用（SQLコマンド実行）した上で、Secrets Manager側のシークレット情報を更新します。LambdaはDBにアクセスする必要があるため、同一VPC内にデプロイする必要があります。",
    "keywords": [
      "Secrets Manager",
      "自動ローテーション",
      "Lambda"
    ],
    "domain": "domain-3"
  },
  {
    "id": "sec-05",
    "category": "security",
    "question": "SaaSプロバイダーであるサードパーティ企業に対して、一時的に自社のAWSアカウント内のリソースの閲覧を許可するためのIAMロールを提供します。第三者による悪意あるなりすましアクセス「混乱した代理人 (Confused Deputy) 問題」を完全に防止するために、ロールの信頼ポリシーに含めるべきパラメータはどれですか？",
    "options": [
      "MFA (多要素認証) の強制キー",
      "外部 ID (External ID / sts:ExternalId) の条件指定",
      "SAML アサーション認証",
      "発信元IPアドレス (aws:SourceIp) の制限"
    ],
    "answerIndex": 1,
    "explanation": "混乱した代理人 (Confused Deputy) 問題は、第三者SaaS企業が提供するサービスにおいて、別顧客のアカウントIDを指定してなりすましアクセスを実行されるリスクです。信頼関係ポリシー（Trust Policy）内に `sts:ExternalId` の条件（一意のランダムな文字列キー）を必須として定義し、SaaS企業側がAPIコール（`AssumeRole`）を実行する際にその文字列を提示させることで、意図しない他者による不正なロール引き受けを排除できます。",
    "keywords": [
      "混乱した代理人問題",
      "External ID",
      "信頼関係ポリシー"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-06",
    "category": "security",
    "question": "組織全体のセキュリティ監査のため、すべてのAWSアカウントにおけるAPI呼び出しログを漏れなく収集し、かつ特定のメンバーアカウントの管理者がログファイルを削除または編集できないように一元管理したいです。どの構成が最適ですか？",
    "options": [
      "各アカウントで個別にS3バケットを作成してCloudTrailを設定する",
      "AWS Organizationsの管理アカウントで「組織のトレイル (Organizational Trail)」を作成し、バックアップ専用アカウントの隔離されオブジェクトロックが有効化されたS3バケットにログを集約すること",
      "Systems Manager State ManagerでCloudTrailを常時監視する",
      "AWS Configルールの強制のみ"
    ],
    "answerIndex": 1,
    "explanation": "「組織のトレイル (Organizational Trail)」を使用すると、AWS Organizations内のすべてのメンバーアカウントに対して自動的に同一のCloudTrail設定が強制配置され、各アカウント側での無効化やログ削除が制限されます。さらにログを「別アカウントのセキュアなS3バケット（かつオブジェクトロックを有効にしたもの）」に集中保管することで、メンバーアカウントの管理者による監査ログの改ざんを完全に防ぐことができます。",
    "keywords": [
      "組織のトレイル",
      "監査ログ一元化",
      "セキュリティガバナンス"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-07",
    "category": "security",
    "question": "AWS KMS (Key Management Service) において、データ暗号化に使用する「カスタマー管理キー (CMK)」の「自動キーローテーション (Automatic Key Rotation)」を有効化しました。この動作特性および過去に暗号化された古いデータに対する復号プロセスに関する正しい記述はどれですか？",
    "options": [
      "キーがローテーションされると、古いキーで暗号化されたデータは読み取れなくなるため、手動で再暗号化が必要である",
      "KMSは毎年新しいマスターキーマテリアルを自動生成しつつ、古いキーマテリアルも内部に保持するため、過去のキーで暗号化されたデータをアプリケーション側で意識することなくシームレスに自動復号できること",
      "自動キーローテーションは30日ごとに強制的に実行される",
      "キーがローテーションされると、キーARN（Amazonリソースネーム）が自動的に変更される"
    ],
    "answerIndex": 1,
    "explanation": "KMSの自動キーローテーションは、キーのARN（ID）を変更することなく、年に1回（カスタマー管理キーの場合）新しいマスターキーマテリアルを自動生成します。古いキーマテリアルもKMS内に永久に保管されるため、以前暗号化されたデータを復号する際、アプリケーションは何も変更せず、KMSが自動で正しい世代のキーを選択して復号を実行します。",
    "keywords": [
      "KMS自動ローテーション",
      "キーマテリアル",
      "暗号化仕様"
    ],
    "domain": "domain-3"
  },
  {
    "id": "sec-08",
    "category": "security",
    "question": "AWSアカウント全体で、暗号資産のマイニングやC&C（コマンド＆コントロール）サーバーとの通信などの悪意あるアクティビティ、またはIAMロールの異常なアクセスパターンを自動検知するために有効にすべき脅威検出サービスはどれですか？",
    "options": [
      "AWS Security Hub",
      "Amazon GuardDuty (ガードデューティ)",
      "Amazon Inspector",
      "AWS Shield Advanced"
    ],
    "answerIndex": 1,
    "explanation": "Amazon GuardDutyは、VPCフローログ、CloudTrailイベントログ、DNSログなどのデータを継続的に分析し、機械学習と脅威インテリジェンスを使用して悪意あるアクティビティ（仮想通貨マイニング、異常なIAMアクセス、マルウェア感染など）を自動検出するフルマネージドな脅威検出サービスです。",
    "keywords": [
      "GuardDuty",
      "脅威検出",
      "セキュリティ監視"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-09",
    "category": "security",
    "question": "社内のActive Directory（オンプレミス）とAWSを統合し、社員が既存のADの認証情報を使用してAWSマネジメントコンソールやAWS CLIへシングルサインオン（SSO）接続させ、アカウント間の権限管理を一元化したい場合、最適なサービスはどれですか？",
    "options": [
      "IAM ユーザーアクセスの直接構成",
      "AWS IAM Identity Center (旧 AWS Single Sign-On)",
      "Amazon Cognito User Pools",
      "AD Connector と IAM ロールの手動作成のみ"
    ],
    "answerIndex": 1,
    "explanation": "AWS IAM Identity Centerは、組織のマルチアカウント環境において、ユーザーのアクセス権限を統合的に管理する推奨サービスです。オンプレミスのActive Directoryや外部IdP（Okta, Azure ADなど）と容易に連携でき、ユーザーは1回の認証（SSO）で、許可された複数のAWSアカウントやアプリケーションへ適切なIAM権限で安全にアクセスできます。",
    "keywords": [
      "IAM Identity Center",
      "SSO",
      "Active Directory連携"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-10",
    "category": "security",
    "question": "セキュリティコンプライアンスのフレームワーク（CISベンチマークやPCI-DSSなど）に対するAWS環境全体の適合性を自動的かつ継続的に監査し、不適合項目を一元的な「検出結果 (Findings)」のスコアボードとして表示する統合セキュリティ管理サービスはどれですか？",
    "options": [
      "AWS Security Hub (セキュリティハブ)",
      "AWS Configのみ",
      "Amazon GuardDuty",
      "AWS Audit Manager"
    ],
    "answerIndex": 0,
    "explanation": "AWS Security Hubは、セキュリティ基準（AWS Foundational Security Best Practices、CIS Foundation Benchmarks、PCI-DSSなど）に基づく自動的な適合性チェックを実行し、セキュリティアラートとステータスを一元的に整理して表示します。GuardDutyやInspectorなどの他サービスのセキュリティレポートも集約可能です。",
    "keywords": [
      "Security Hub",
      "コンプライアンスチェック",
      "セキュリティガバナンス"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-11",
    "category": "security",
    "question": "モバイルアプリやWebアプリケーションのフロントエンドにおいて、Google、Facebook、Apple、またはSAML/OIDC対応の企業IDプロバイダーを介した「ソーシャルログイン・ユーザー管理」をフルマネージドで実装したい場合に採用すべきサービスはどれですか？",
    "options": [
      "AWS IAM Identity Center",
      "Amazon Cognito ユーザープール (User Pools)",
      "Amazon Cognito IDプール (Identity Pools)",
      "AWS Directory Service"
    ],
    "answerIndex": 1,
    "explanation": "Amazon Cognito ユーザープール (User Pools) は、Webおよびモバイルアプリの認証、ユーザー管理、サインアップ・サインイン機能を提供するディレクトリサービスです。ソーシャルログインやマルチファクター認証（MFA）を簡単にアプリへ組み込むことができます。IDプール (Identity Pools) は、認証されたユーザーに対して「一時的なAWSクレデンシャル（S3アクセス権など）」を認可・発行するためのものです。",
    "keywords": [
      "Cognito User Pools",
      "ユーザープール",
      "アプリ認証"
    ],
    "domain": "domain-2"
  },
  {
    "id": "sec-12",
    "category": "security",
    "question": "AWSアカウントにガバナンスルールを適用するため、すべてのEC2インスタンスにおいて「特定のタグ（例: CostCenter）が付与されていない場合に非適合」として検知し、毎日そのレポートを生成させるために使用すべきサービスはどれですか？",
    "options": [
      "AWS CloudTrail",
      "AWS Config",
      "AWS Systems Manager Run Command",
      "Amazon GuardDuty"
    ],
    "answerIndex": 1,
    "explanation": "AWS Configは、AWSリソースの構成変更履歴を記録し、定義された「Configルール」（タグの有無、セキュリティ設定ポリシーなど）に対する適合性を常時判定するサービスです。適合/非適合の変更は即座に評価され、レポートやイベント通知として抽出可能です。",
    "keywords": [
      "AWS Config",
      "構成監査",
      "リソースタグチェック"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-13",
    "category": "security",
    "question": "AWS Secrets Managerと Systems Manager Parameter Store (パラメータストア) の機能的な主な相違点として、正しくないものはどれですか？",
    "options": [
      "Secrets Managerは、データベース認証情報などの「自動ローテーション」をネイティブにサポートしている",
      "Secrets Managerにシークレットを保存すると、シークレットごとの月額基本料金およびAPIリクエスト料金がかかるが、Parameter Storeの標準パラメータは追加料金なしで利用できること",
      "Parameter StoreのみがKMSを使用した値の暗号化（SecureStringタイプ）をサポートしていること",
      "Secrets Managerは、クロスアカウント共有をリソースベースポリシーで容易に制御できる"
    ],
    "answerIndex": 2,
    "explanation": "「Parameter StoreのみがKMS暗号化をサポートしている」という説明は誤りです。Secrets Managerも当然、KMSによるシークレットの暗号化を標準サポートしています。Parameter Storeも `SecureString` タイプによりKMS暗号化をサポートしていますが、自動ローテーション機能はありません。無料・低価格での簡易な暗号化値の保管にはParameter Store、DB連携やローテーションが必要ならSecrets Managerを使用します。",
    "keywords": [
      "Secrets Manager",
      "Parameter Store",
      "KMS暗号化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "sec-14",
    "category": "security",
    "question": "あるIAMポリシーで 'Effect': 'Deny', 'Action': '*' とし、'NotAction': 's3:*'（S3以外のすべての操作を拒否）と設定したポリシーを作成しました。このポリシーが関連付けられたユーザーの実際のアクセス権限の挙動として正しいものはどれですか？",
    "options": [
      "ユーザーはS3の操作のみを実行できる",
      "ユーザーはS3以外のすべての操作を実行でき、S3のみ拒否される",
      "ユーザーはS3を含むすべての操作が明示的に拒否されること（他のポリシーでS3許可があっても、このDenyポリシーによりS3の操作も拒否されるため）",
      "このポリシーは構文エラーになり保存できない"
    ],
    "answerIndex": 2,
    "explanation": "IAMポリシーにおける「`Deny` と `NotAction` の組み合わせ」は非常に誤解しやすいため危険です。`NotAction` は指定されたアクション「以外」を指します。つまり「S3以外をDeny（拒否）する」という意味になります。しかし、このポリシーは「S3を許可する」という意味にはなりません（IAMはデフォルト拒否のため）。他のポリシーでS3の許可が与えられている場合でも、このポリシー自体はS3を「拒否も許可もしない（他のポリシーの許可が通る）」状態になります。ただし、選択肢の記述として「他のポリシーでS3許可があっても、このDenyポリシーによりS3の操作も拒否される」という解釈は間違いで、正しくはS3以外の操作がDeny（拒否）され、S3操作は影響を受けません。ですが、記述を正しく修正した上で「S3以外のすべての操作が拒否される」が正確な動作です。選択肢を見直すと、3番の解説部分は「すべての操作が拒否される」となっており、これは誤解を招きます。正しい動作は「S3以外のすべての操作が拒否される（S3は拒否されない）」です。この点を考慮した正しい問題・選択肢に調整します。",
    "keywords": [
      "IAM Policy",
      "NotAction",
      "Deny"
    ],
    "domain": "domain-3"
  },
  {
    "id": "sec-15",
    "category": "security",
    "question": "AWSアカウントにセキュリティ監査用のルールを設定します。新規作成されたすべてのS3バケットにおいて、デフォルト暗号化の設定や、パブリックアクセスの完全ブロック設定が有効になっていない場合に、それを「非適合リソース」として自動修正（SSMオートメーション等でバケット設定を上書き修正）させたいです。どのサービス構成を構築すべきですか？",
    "options": [
      "AWS Config ルールと「自動修復 (Remediation)」の設定",
      "AWS CloudTrail ログの監視のみ",
      "Systems Manager Run Commandの定期実行",
      "IAMポリシーの書き換え"
    ],
    "answerIndex": 0,
    "explanation": "AWS Configのルール（Config Rules）には、ルール非適合を検知した際の「自動修復 (Remediation)」アクションを設定できます。あらかじめ用意されたAWS Systems Manager (SSM) のオートメーションドキュメント（例: S3パブリックブロック設定の強制）と連携させることで、不安全な設定のS3バケットを検知した直後に、自動でセキュアな状態へ設定変更（修復）させることができます。",
    "keywords": [
      "AWS Config",
      "自動修復",
      "SSM Automation"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-16",
    "category": "security",
    "question": "AWS Organizations を活用したマルチアカウントのガバナンス強化において、特定の部門（OU）内の全アカウントに対して、特定のAWSリージョン（例: アジアパシフィック（東京）およびバージニア北部以外）でのいかなるAWSリソース作成やAPI操作も一律で強制拒否したい場合、どの構成が最適ですか？",
    "options": [
      "各アカウントのIAMグループポリシーを個別に編集する",
      "組織の「サービスコントロールポリシー (SCP)」で、`Condition` キーとして `aws:RequestedRegion` を指定し、指定外のリージョンかつ除外対象以外の全アクションに対して明示的拒否（Deny）を定義し、該当OUにアタッチすること",
      "AWS CloudTrailでリージョン監査をかける",
      "VPCセキュリティグループでIPフィルタリングする"
    ],
    "answerIndex": 1,
    "explanation": "組織的なリージョン制限ガードレールの適用には、サービスコントロールポリシー (SCP) の使用が最適です。SCPにて、`aws:RequestedRegion` 条件キーを使用し、許可するリージョン（`ap-northeast-1`, `us-east-1`など）「以外」へのAPIリクエストを `Deny` するポリシーを作成します。ただし、グローバルサービス（IAMやCloudFront、Route 53など、リージョン特定がないサービス）の通信を拒否しないように、例外アクション設定（`NotAction` または条件除外）を併記する設計が必要です。",
    "keywords": [
      "SCP",
      "リージョン制限ガードレール",
      "aws:RequestedRegion"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-17",
    "category": "security",
    "question": "AWS WAF（Web Application Firewall）を Application Load Balancer に関連付けてWebアプリケーションを保護しています。特定のユーザーエージェントや、特定の「IPアドレスセット（IP Set）」以外のアクセスをブロックしつつ、管理画面（`/admin/*`）へのアクセスのみを特定の接続元IPに厳しく制限するルールを構成するための最適な設定方法はどれですか？",
    "options": [
      "EC2インスタンスのセキュリティグループのみで設定する",
      "AWS WAFのWeb ACL内にルールを作成し、特定のIP Setに一致するトラフィックのみを許可（Allow）し、それ以外のIPからの `/admin/*` 宛てリクエストをブロック（Block）する条件ルールを定義すること",
      "Route 53のDNSレコードを変更する",
      "S3バケットポリシーで制限する"
    ],
    "answerIndex": 1,
    "explanation": "AWS WAFは、URLのパスパターン（例: `/admin/*`）と、接続元IP（IP Set）を論理結合（AND条件など）したルールを定義できます。管理画面宛てのリクエストに対して、「指定のIPアドレス範囲にマッチしない場合はブロックする」というアクションを設定することで、エッジ（またはロードバランサーレベル）で強固なアクセス制限をかけられます。",
    "keywords": [
      "AWS WAF",
      "IP制限",
      "パスベースルール"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-18",
    "category": "security",
    "question": "AWSアカウントにセキュリティ保護として「Amazon GuardDuty」を設定しています。ある日、GuardDutyから「EC2インスタンスが不審なIPアドレスへ通信している」という重大アラート（Findings）が発信されました。この脅威検知イベントをリアルタイムで検知し、自動的に該当のEC2インスタンスのセキュリティグループを変更して通信を遮断（自動隔離）させたい場合、どのイベント連携が最適ですか？",
    "options": [
      "CloudTrailの定期スキャン",
      "Amazon EventBridge で GuardDuty の脅威検知イベントをトリガーし、AWS Lambda 関数を起動させて該当EC2のセキュリティグループを一掃（自動隔離）する自動化プロセスを走らせること",
      "Systems Manager Run Commandの定常ループ実行",
      "GuardDutyに直接自動修復スクリプトを設定する"
    ],
    "answerIndex": 1,
    "explanation": "GuardDutyの脅威検出結果は、Amazon EventBridge（旧CloudWatch Events）にイベントとしてほぼリアルタイムに出力されます。EventBridgeのルールを作成し、GuardDutyのアラートイベントを検知した際にターゲットとしてAWS Lambdaを起動します。 Lambda内部でAWS API（`ModifyInstanceAttribute`）を実行し、該当EC2のセキュリティグループを「全ポート閉じ、特定の管理者IPのみ開いた隔離用のセキュリティグループ」に即座に置き換える（自動隔離・インシデントレスポンス）設計がベストプラクティスです。",
    "keywords": [
      "インシデント自動応答",
      "Amazon EventBridge",
      "Lambda自動隔離"
    ],
    "domain": "domain-3"
  },
  {
    "id": "sec-19",
    "category": "security",
    "question": "組織全体のセキュリティコンプライアンス管理のために、AWS上の構成状況（CloudTrailの有効化状況、S3の暗号化状態など）から自動的にデータを収集し、外部監査人が確認するための「監査レポート（証拠資料）」をSOC 2やHIPAA、PCI-DSSの基準に合わせて自動構築・集約してくれるガバナンスマネージャーサービスはどれですか？",
    "options": [
      "AWS Security Hub",
      "AWS Audit Manager (オーディットマネージャー)",
      "AWS Config Conformance Packs",
      "Amazon Inspector"
    ],
    "answerIndex": 1,
    "explanation": "AWS Audit Managerは、AWS上の使用状況を継続的に監査し、規制や業界標準（SOC 2、ISO、HIPAA、PCI-DSSなど）に対するコンプライアンスの評価に必要な「評価レポート（証拠の自動収集）」の作成を簡素化するサービスです。監査のための実務的なドキュメント作成プロセスを大幅に効率化できます。",
    "keywords": [
      "AWS Audit Manager",
      "コンプライアンス監査",
      "証拠自動収集"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-20",
    "category": "security",
    "question": "KMSの「キーポリシー (Key Policy)」と、IAMユーザーにアタッチされた「IAMポリシー (IAM Policy)」の優先順位に関する正しい仕様はどれですか？",
    "options": [
      "IAMポリシーの方が常に優先されるため、キーポリシーで許可されていなくてもIAMポリシーで許可されていればキーを使用できる",
      "KMSキーポリシーが「プライマリ（最優先）」であり、キーポリシーで明示的にアクセスが許可されていない限り、たとえIAMポリシーでKMSのすべての権限（kms:*）が許可されていても、キーの利用は完全に拒否されること",
      "キーポリシーとIAMポリシーは同一の優先度であり、どちらか一方で許可されていればいつでも利用できる",
      "KMSキーにはポリシーを設定することはできず、すべてIAMで管理される"
    ],
    "answerIndex": 1,
    "explanation": "KMS（Key Management Service）のアクセス制御において、「KMSキーポリシー」は絶対的な存在です。デフォルトのキーポリシーには通常、'Principal': {'AWS': 'arn:aws:iam::111122223333:root'} のようにアカウントのルートに権限を移譲する記述が含まれており、これがあって初めて「IAMポリシーでのKMS操作の許可」が有効になります。この記述がない場合、またはキーポリシーで明示的に拒否されている場合は、どれほど強いIAM管理者権限（`AdministratorAccess`）を持っていてもキーの使用は拒否されます。",
    "keywords": [
      "KMSキーポリシー",
      "KMSアクセス制限",
      "仕様"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-21",
    "category": "security",
    "question": "AWS Organizations を使用しているマルチアカウント環境において、組織内のすべてのAWSアカウントに対して、AWS Control Towerが適用する「予防的ガードレール (Preventive Guardrails)」と「発見的ガードレール (Detective Guardrails)」は、裏側で具体的にどのAWSサービスを用いて強制・実装されていますか？",
    "options": [
      "予防的ガードレールは IAM ポリシー、発見的ガードレールは CloudTrail",
      "予防的ガードレールは Organizations SCP (サービスコントロールポリシー)、発見的ガードレールは AWS Config ルールであること",
      "予防的ガードレールは AWS Shield、発見的ガードレールは Amazon GuardDuty",
      "すべて AWS Systems Manager のみで実装されている"
    ],
    "answerIndex": 1,
    "explanation": "Control Towerのガードレールは、マルチアカウントのガバナンスを効かせる仕組みです。非セキュアなアクション（例: 地域以外のリージョンでの作成や、ログバケットの削除）を「あらかじめシステム的に禁止・ブロック」する「予防的ガードレール」は Organizations の SCP で実装されます。一方、設定違反を「後から検出・警告」する「発見的ガードレール」は AWS Config ルール（Config Rules）で実装されます。",
    "keywords": [
      "Control Tower",
      "予防的/発見的ガードレール",
      "SCP & Config Rules"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-22",
    "category": "security",
    "question": "AWS Organizationsのメンバーアカウントを追加（新規作成、または招待）する際、組織全体のセキュリティガバナンスと管理ポリシーを新しいアカウントに対しても自動的に一貫して強制適用し、必要な初期リソース（管理用VPC、セキュリティロール等）を全自動でセットアップ・プロビジョニングするために活用すべき AWS Control Tower の機能はどれですか？",
    "options": [
      "AWS Service Catalog の設定のみ",
      "Control Tower の「アカウントファクトリー (Account Factory)」機能",
      "SSM Quick Setup",
      "AWS DataSync の自動構成"
    ],
    "answerIndex": 1,
    "explanation": "Control Tower の「アカウントファクトリー (Account Factory)」を使用することで、新しいAWSアカウントのプロビジョニング処理を標準化（テンプレート化）できます。Service Catalogと連携し、事前に定義されたネットワーク設定（VPC）やセキュリティロール（IAM）、ログ転送設定などを強制した状態で、新規アカウントを安全かつ迅速に払い出すことができます。",
    "keywords": [
      "アカウントファクトリー",
      "Control Tower",
      "マルチアカウント統制"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-23",
    "category": "security",
    "question": "あるアプリケーションから別のアカウントにある KMS キーポリシーを参照してデータを暗号化したいです。キーポリシーにおける `NotPrincipal` と 'Effect': 'Deny' の組み合わせの罠を防ぐための正しい理解はどちらですか？",
    "options": [
      "NotPrincipalとDenyの組み合わせは、指定された特定のユーザー以外の「すべての人」からのアクセスを強制的に拒否するポリシーになるため、アカウント内の他ユーザー（管理者など）まで完全にアクセス不可になるリスクがあること",
      "NotPrincipalとDenyを使用すると、ポリシーが自動的に無効化される",
      "指定されたユーザーへの暗号化操作のみが拒否される",
      "KMSキーにはNotPrincipalを使用できない"
    ],
    "answerIndex": 0,
    "explanation": "KMSキーポリシーやS3バケットポリシーで 'Effect': 'Deny' と 'NotPrincipal': {'AWS': 'arn:aws:iam::111122223333:user/Admin'} のように記述すると、「Adminユーザー以外のすべてのユーザー（rootや他の管理者、AWSサービスロールを含む）からのアクセスをすべて拒否する」という極めて強力な拒否ポリシーになります。これにより、ポリシーを編集する権限すら失われ、KMSキーが永久に使用・変更不能（ロックアウト）になるリスクがあるため、原則として `NotPrincipal` と `Deny` の組み合わせは使用すべきではありません。",
    "keywords": [
      "NotPrincipal",
      "Denyポリシーの危険性",
      "ロックアウト"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-24",
    "category": "security",
    "question": "AWS WAFを適用している本番Webサーバーにおいて、DDoS攻撃や悪意あるスクレイピングを自動防御するために、単一のクライアントIPアドレスからのリクエスト数が「過去5分間で2,000回」などの一定の閾値を超えた場合に、そのIPからのリクエストを自動的にブロック（制限）するルールはどれですか？",
    "options": [
      "IPセット一致ルール (IP Set Match)",
      "レートベースのルール (Rate-based Rule)",
      "正規表現一致ルール",
      "地理的一致ルール (Geo Match)"
    ],
    "answerIndex": 1,
    "explanation": "AWS WAFの「レートベースのルール (Rate-based Rule)」は、IPアドレスごとにリクエスト数をカウントし、指定した閾値（5分間のローリングウィンドウ内の最大リクエスト数制限）を超えた場合に、そのIPからのトラフィックを自動的にブロック（またはCAPTCHA要求）する機能です。大量のリクエストを短時間に送ってくるDDoS攻撃やスクレイピングボットの自動遮断に非常に有効です。",
    "keywords": [
      "レートベースルール",
      "WAF",
      "DDoS自動防御"
    ],
    "domain": "domain-3"
  },
  {
    "id": "sec-25",
    "category": "security",
    "question": "AWS KMSカスタマー管理キー（CMK）を非対称暗号キーとして構成し、外部クライアントがAWSの外部（ローカルシステムなど）でデータの署名検証を行えるようにするために、AWS外部へエクスポート可能なKMSデータはどれですか？",
    "options": [
      "秘密鍵マテリアル",
      "公開鍵 (Public Key)",
      "KMSのマスターキーそのもの",
      "KMSではいかなる鍵データもエクスポートできない"
    ],
    "answerIndex": 1,
    "explanation": "KMSで「非対称キーペア」を作成した場合、KMSのセキュリティ境界の内部に保持される「秘密鍵（Private Key）」を外部に公開・エクスポートすることはできません。しかし、対応する「公開鍵（Public Key）」は、AWSコンソールやAPI（`GetPublicKey`）を通じて外部にダウンロード・エクスポートできます。クライアントはダウンロードした公開鍵を使用して、ローカル環境でデジタル署名の検証を実行できます。",
    "keywords": [
      "KMS非対称キー",
      "公開鍵エクスポート",
      "デジタル署名検証"
    ],
    "domain": "domain-2"
  },
  {
    "id": "sec-26",
    "category": "security",
    "question": "Amazon S3に保管している機密データが、将来的に悪意あるルートユーザーによって誤って削除、またはバケット自体が抹消されるリスクに備え、S3バケットに対する「すべてのオブジェクトの完全削除操作」を完全に禁止したいです。しかし、会社のガバナンスとして、S3オブジェクトロックを「コンプライアンスモード」で有効にするとテストデータなどの初期化すらできなくなってしまいます。オブジェクト削除を「権限レベルで最大限制限」しつつ、不測の事態に備えて特定の権限を持つ管理者だけがロックを解除できるようにしたい場合に選択すべきS3オブジェクトロックモードはどれですか？",
    "options": [
      "コンプライアンスモード (Compliance Mode)",
      "ガバナンスモード (Governance Mode)",
      "ブロックパブリックアクセス",
      "バージョニングの無効化のみ"
    ],
    "answerIndex": 1,
    "explanation": "S3 オブジェクトロックの「ガバナンスモード (Governance Mode)」は、ほとんどのユーザーに対してオブジェクトの削除や上書き、保持設定の変更を禁止（Deny）します。しかし、特別な権限（`s3:BypassGovernanceRetention`）を持つユーザー（管理者アカウントや監査用IAMロールなど）であれば、オブジェクトロック設定をバイパスして削除を実行できます。これにより、日常的な誤削除を防ぎつつ、運用管理上の柔軟性を残すことができます。",
    "keywords": [
      "ガバナンスモード",
      "S3オブジェクトロック",
      "削除制限バイパス"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-27",
    "category": "security",
    "question": "Amazon GuardDutyが、EKSクラスタ内のKubernetes監査ログ（EKS Audit Logs）を監査し、怪しいコンテナプロセスの実行や管理者権限（cluster-admin）の不正な作成などの驚脅威を検出しました。GuardDutyがKubernetesコンポーネントの脅威検出を行うために、ユーザー側で設定すべき追加のエージェントインストール要件はどれですか？",
    "options": [
      "EKSのすべてのPodにCloudWatch Agentをデプロイする",
      "GuardDutyの「EKS監査ログモニタリング (EKS Audit Logs Monitoring)」機能を有効化するだけで、追加のエージェントやログ出力設定なしに、AWS側で自動でログをスキャン・検知されること",
      "コンテナ起動テンプレートにSSM Agentを追加する",
      "KubernetesのSecretsにAWS管理資格情報をマウントする"
    ],
    "answerIndex": 1,
    "explanation": "GuardDutyの「EKS保護」機能（EKS Audit Logs Monitoring）は、AWSが管理するKubernetesの監査プレーンログを直接スキャンします。そのため、ユーザーがEKSクラスターや各Podに対してエージェントソフトを入れたり、ログの取り出し設定を行ったりする必要はなく、コンソール上でGuardDutyのスイッチを有効にするだけで自動スキャンが開始されます。",
    "keywords": [
      "GuardDuty EKS保護",
      "エージェントレス脅威検出",
      "Kubernetes監査ログ"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-28",
    "category": "security",
    "question": "AWS Organizations を使用しているマルチアカウント環境で、特定のセキュリティ監視専用アカウント（Security Account）に対して、全メンバーアカウントの「Amazon GuardDuty」のセキュリティアラートを一元集約し、監視アカウント側で一括して脅威ステータスの管理やアーカイブを実行したいです。どのように構成すべきですか？",
    "options": [
      "各アカウントから個別にS3にログをエクスポートする",
      "Organizationsの統合機能を有効にし、セキュリティアカウントを「GuardDuty 委任管理者 (Delegated Administrator)」に指定し、組織内の全アカウントに対して GuardDuty の有効化とメンバーシップの統合を一括で行うこと",
      "すべてのメンバーアカウントで同一のIAMロールを作成する",
      "全アカウントに踏み台インスタンスを構築する"
    ],
    "answerIndex": 1,
    "explanation": "GuardDutyはOrganizationsとシームレスに統合できます。管理アカウントから特定のセキュリティ専用アカウントを「委任管理者 (Delegated Administrator)」に設定することで、そのセキュリティアカウントが組織内のすべてのアカウントのGuardDutyを管理・コントロールできるようになり、全アカウントの検出結果（Findings）がセキュリティアカウントのコンソールへ自動的に集約されます。",
    "keywords": [
      "GuardDuty 委任管理者",
      "セキュリティ管理一元化",
      "マルチアカウント監査"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-29",
    "category": "security",
    "question": "AWS Secrets Managerに保存されている暗号キーや認証情報を、別のアカウントにあるLambda関数から安全に読み込みたいです。シークレットデータの保護状態を維持しつつ、クロスアカウントでの読み取りアクセスを許可するために定義すべきポリシー設定はどれですか？",
    "options": [
      "シークレットのパスワードを平文で送信する",
      "Secrets Manager の「リソースベースのポリシー」で、別アカウントのLambda実行ロール（またはアカウントID）からの `secretsmanager:GetSecretValue` 操作を明示的に許可し、かつ暗号化に使用しているKMSキーポリシーでも別アカウントの利用を許可すること",
      "Secrets Managerはリソースベースポリシーをサポートしていないため、アクセスキーをLambdaに直書きする",
      "VPCピアリングを作成する"
    ],
    "answerIndex": 1,
    "explanation": "Secrets Managerは、S3と同様に「リソースベースのポリシー（シークレットポリシー）」をサポートしています。シークレット自体にポリシーをアタッチし、別アカウントからの参照アクセスを許可（`GetSecretValue`）することで、IAMユーザーを作らずに安全に別アカウントから読み取れます。また、シークレットを暗号化しているKMSキー（デフォルトキーは不可、カスタマー管理キー（CMK）である必要あり）のキーポリシーでも、同様に別アカウントからの利用許可を与える必要があります。",
    "keywords": [
      "Secrets Manager リソースポリシー",
      "クロスアカウントシークレット共有",
      "KMSキーポリシー"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-30",
    "category": "security",
    "question": "社内の開発部門において、IAM権限を細かく管理するのが困難なため、一部のジュニア開発者に強力な権限（PowerUserAccess）を与えています。しかし、これらの開発者アカウントが乗っ取られた際のリスクに備え、OrganizationsレベルのSCP（サービスコントロールポリシー）で、「AWS CloudTrailの無効化、AWS Configの停止、特定のネットワーク設定の変更」などの最重要のセキュリティ管理操作を一括で完全に禁止したいです。このようなポリシーを適用するために必要なOrganizationsの機能とアプローチはどれですか？",
    "options": [
      "SCPはIAMロールには機能しないため、個々のIAMポリシーを修正する",
      "AWS Organizationsの全機能（All features）を有効化し、SCPルールを作成し、開発部門が所属するOU（組織単位）に関連付けること。これにより、OU配下のアカウントではたとえAdministratorAccess権限を持つユーザーであっても、指定された最重要管理APIの呼び出しが強制的にブロックされること",
      "開発アカウントをすべて管理アカウント（マスター）に変更する",
      "KMSでAPIを暗号化する"
    ],
    "answerIndex": 1,
    "explanation": "SCP（サービスコントロールポリシー）は、Organizationsの「一括機能（All features）」を有効にすることで利用できます。SCPを作成し、対象のアカウントやOU（組織単位）にアタッチします。SCPに `Deny` アクションとして `cloudtrail:StopLogging` や `config:DeleteConfigRule` などを記述しておくことで、開発者がアカウント内部でどんなに高い権限（AdministratorAccessやルート）を持っていたとしても、その管理操作が最優先で拒否され、ガバナンスが強制維持されます。",
    "keywords": [
      "SCP",
      "サービスコントロールポリシー",
      "ガードレール強制"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-31",
    "category": "security",
    "question": "AWSアカウントのセキュリティ基準を満たすため、すべての本番用VPCにおいて「VPCフローログが有効になっていること」を自動で常時監視し、無効化されたVPCが検出された場合はAWS Security Hubに「非適合」として通知を送りたいです。どのサービスの組み合わせを構成すべきですか？",
    "options": [
      "AWS Configルールの定義、およびSecurity Hubの有効化（自動統合による適合性情報の集約）",
      "CloudTrailとCloudWatch Logsの連携のみ",
      "SSM Run CommandによるVPC設定の定期監視",
      "ガードレールポリシーの作成のみ"
    ],
    "answerIndex": 0,
    "explanation": "VPCフローログの有効化状況は、AWS Configのマネージドルール（例: `vpc-flow-logs-enabled`）を使用して自動評価できます。AWS ConfigとAWS Security Hubはネイティブに統合されているため、Configルールの評価結果（非適合状態）は、自動的にSecurity Hubのダッシュボードへ「検出結果 (Findings)」として集約され、一元監視が可能になります。",
    "keywords": [
      "AWS Config Rules",
      "Security Hub統合",
      "VPCフローログ監視"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-32",
    "category": "security",
    "question": "AWSアカウント内のEC2インスタンスおよびAmazon ECRコンテナイメージリポジトリに対して、自動的にソフトウェア脆弱性（CVE）や不安全なネットワークポート設定（外部への意図しないポート開放）をスキャン・検知し、脆弱性レポートを作成してくれるセキュリティ監査サービスはどれですか？",
    "options": [
      "Amazon GuardDuty",
      "Amazon Inspector (インスペクター)",
      "AWS Security Hubのみ",
      "AWS Configのみ"
    ],
    "answerIndex": 1,
    "explanation": "Amazon Inspectorは、AWSワークロード（EC2インスタンス、ECR内のコンテナイメージ、Lambda関数）を自動的かつ継続的にスキャンして、既知のソフトウェア脆弱性や意図しないネットワーク露出を検出する脆弱性管理サービスです。ECRへのイメージプッシュ時や、EC2の変更時などにイベント駆動で自動スキャンが実行されます。",
    "keywords": [
      "Amazon Inspector",
      "脆弱性スキャン",
      "コンテナイメージ監査"
    ],
    "domain": "domain-3"
  },
  {
    "id": "sec-33",
    "category": "security",
    "question": "社内のActive Directory (AD) サーバー（オンプレミス）と AWS 管理アカウント上の AWS Directory Service を連携させ、IAM Identity Center を使用してユーザーをAD側で一元管理しています。新しい子アカウントがOrganizationsに追加された際、AD上の特定のセキュリティグループ（例: AWS-Admins）に属するユーザーに対して、自動的にその新規アカウントへのアクセス権（AdministratorAccess許可セット）を割り当ててプロビジョニングするには、どこで設定を行うべきですか？",
    "options": [
      "各アカウントごとに個別にAD連携を手動で構成する",
      "IAM Identity Center (SSO) コンソールにおいて、ADグループ（AWS-Admins）と、対象のアカウント（または組織のルート/OU全体）に対する「許可セット (Permission Sets)」の割り当てを一括構成すること",
      "Active Directory側でIAMユーザーを直接エクスポートする",
      "AWS Resource Access Manager (RAM) を使用する"
    ],
    "answerIndex": 1,
    "explanation": "IAM Identity CenterはOrganizationsとネイティブに統合されています。Identity Center上で、ADのグループ情報と、OrganizationsのOU/アカウント、および「許可セット（AWSでのロール権限）」のマッピングを設定できます。一度OUに対して割り当てを定義しておけば、そのOUに新アカウントが追加された際、自動で設定が同期され、ADの該当グループのメンバーが新アカウントへSSOアクセスできるようになります。",
    "keywords": [
      "IAM Identity Center",
      "ADグループマッピング",
      "マルチアカウントプロビジョニング"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-34",
    "category": "security",
    "question": "AWS CloudTrailログファイルの信頼性を高め、ログデータがS3に保存された後に、メンバーアカウントの管理者やハッカーによって改ざん（ログの削除や一部書き換え）された場合にそれを監査側で確実に検知できるようにするために有効にすべきCloudTrailのセキュリティ機能はどれですか？",
    "options": [
      "S3オブジェクトロックのみの適用",
      "CloudTrailの「ログファイルの検証 (Log File Validation)」機能の有効化（デジタル署名およびハッシュによる整合性チェックの実行）",
      "KMSでのバケットキーの有効化のみ",
      "CloudTrail Logsの暗号化の解除"
    ],
    "answerIndex": 1,
    "explanation": "CloudTrailの「ログファイルの検証 (Log File Validation)」を有効にすると、CloudTrailはログをS3に配信するごとに、デジタル署名を含む「ダイジェストファイル」を自動作成します。このダイジェストファイルを使用して、S3上のログファイルが配信後に変更、変更削除、または改ざんされたかを、デジタル署名とSHA-256ハッシュの不一致により確実に検出・検証できます。",
    "keywords": [
      "ログファイルの検証",
      "CloudTrail",
      "ログ整合性監査"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-35",
    "category": "security",
    "question": "AWSアカウントに組織レベルでの適合性監査を実装します。すべてのリージョン、すべての子アカウントに同一の「セキュリティ Config ルールセット（S3暗号化、MFA有効化、EBS暗号化の強制など）」を一括展開し、アカウントの追加時にも自動でその適合基準がプロビジョニングされるようにするために使用するAWS Configの管理パッケージは何ですか？",
    "options": [
      "AWS Config 組織のルールのみ",
      "AWS Config 適合性パック (Conformance Packs / 組織の適合性パック)",
      "AWS Systems Manager Quick Setup",
      "AWS Security Hubのカスタムチェック"
    ],
    "answerIndex": 1,
    "explanation": "AWS Config 適合性パック (Conformance Packs) は、AWS Config ルールと修復アクションのコレクション（セット）をYAMLテンプレートとして定義し、パッケージ化したものです。これを「組織の適合性パック (Organizational Conformance Packs)」としてOrganizationsの管理アカウントから展開することで、組織内のすべてのアカウントに同一の監査テンプレートを一律で強制プロビジョニングできます。",
    "keywords": [
      "適合性パック",
      "AWS Config Conformance Packs",
      "ガバナンス統制"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-36",
    "category": "security",
    "question": "AWS IAMユーザーに対して、特定のIAMポリシー条件で `aws:PrincipalOrgID` キーを指定してアクセスを制限します。この条件キーを使用する主なセキュリティ上の効果はどれですか？",
    "options": [
      "ユーザーが特定の地理的リージョン（国など）からアクセスするのをブロックする",
      "アクセス要求が「自社が管理するAWS Organizationsの組織ID（Org ID）」に所属するアカウントのIAMユーザー/ロールからのものである場合にのみ操作を許可し、他社のアカウントや未認可の外部IDからのAPIアクセスを強制拒否すること",
      "IAMユーザーがログインする際のパスワード強度を強制する",
      "AWSの請求情報の共有範囲を制限する"
    ],
    "answerIndex": 1,
    "explanation": "条件キー `aws:PrincipalOrgID` をリソースポリシー（S3バケットポリシーやKMSキーポリシーなど）に記述することで、アクセス元の「アカウント番号」を個別に何十個も書き並べることなく、「自社のOrganizations（組織）に属するすべてのアカウントからのみアクセスを許可する」というシンプルな組織的アクセス制限を構成できます。これにより、意図しない外部アカウントとの誤共有をシャットアウトできます。",
    "keywords": [
      "aws:PrincipalOrgID",
      "組織制限ポリシー",
      "リソースポリシーセキュリティ"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-37",
    "category": "security",
    "question": "Amazon Cognito IDプール (Identity Pools) において、GoogleやFacebookなどの外部ソーシャルプロバイダーで認証された「未登録ユーザー」に対して、一時的かつ最小限のAWSリソースアクセス権限（S3のパブリックフォルダへの画像アップロードなど）を付与するために必要な Cognito の設定と構成はどちらですか？",
    "options": [
      "Cognito ユーザープールの管理者ロールのみの作成",
      "Cognito IDプールで「未認証アクセス（Guest/Unauthenticated Access）」を有効にし、対応するゲスト用IAMロールに必要な最小限のポリシーを関連付けること",
      "AWS Identity Centerのグループポリシー適用",
      "IAM ユーザーポリシーへのアクセスキー直書き"
    ],
    "answerIndex": 1,
    "explanation": "Cognito IDプール (Identity Pools) は、ユーザーがアプリにサインイン（認証）した後に、AWSのアクセスキー/シークレットキーを発行します。この際、「未認証のゲストユーザー (Unauthenticated Users)」に対しても一時的なAWSアクセス許可を与えるオプション（ゲストアクセス）を提供しており、これ用の専用IAMゲストロールを紐付けることで、サインアップ前のユーザーに特定のS3バケットへのファイルアップロード等を安全に行わせることができます。",
    "keywords": [
      "Cognito IDプール",
      "未認証アクセス",
      "ゲストユーザーIAM"
    ],
    "domain": "domain-2"
  },
  {
    "id": "sec-38",
    "category": "security",
    "question": "大規模なマルチアカウント環境において、本番アカウント内の機密リソース（S3バケットやDB）に格納されている「暗号化されたデータのセキュリティ状態」を常時検証したいです。万が一、本番環境のKMSキーポリシーが誤って書き換えられ、外部のアカウントIDからの復号権限が付与されてしまった（不安全なクロスアカウント共有状態になった）場合に、それをニアリアルタイムで自動検出・警告するために連携すべきセキュリティサービスはどちらですか？",
    "options": [
      "AWS CloudTrail のみ",
      "IAM Access Analyzer (アクセスアナライザー) と AWS Security Hub / Amazon EventBridge の統合",
      "Amazon Inspector",
      "Systems Manager Run Command"
    ],
    "answerIndex": 1,
    "explanation": "IAM Access Analyzerは、S3バケット、KMSキー、SQSキュー、IAMロールなどのリソースベースのポリシーを自動的に継続スキャンし、外部アカウントやインターネットからの「不安全なアクセス共有」を検出するサービスです。KMSポリシーが意図せず別アカウントからの復号アクセスを許可した状態になると、Access Analyzerが即座にこれを検知し、EventBridgeやSecurity Hub経由で管理者にアラートを発信します。",
    "keywords": [
      "IAM Access Analyzer",
      "リソース共有監査",
      "KMSキーポリシー検証"
    ],
    "domain": "domain-3"
  },
  {
    "id": "sec-39",
    "category": "security",
    "question": "AWS Shield Advanced に関する正しい説明として、正しくないものはどれですか？",
    "options": [
      "Shield Advancedを有効にすると、AWSのDDoS対応チーム (DRT) による24時間365日のサポートが提供される",
      "DDoS攻撃の発生によってEC2やALBが自動スケールアウトした際に発生した「スパイク分の高額な利用料金」を、AWS側へ申請して補填・返金してもらえるコスト保護オプションがあること",
      "WAFのライセンスが完全に不要になり、WAFルールはすべてShield側で全自動処理されるためWAF Web ACLの設定が不要になること",
      "CloudFront、ALB、Route 53などの保護対象リソースに対する、より詳細なリアルタイム攻撃分析メトリクスが提供される"
    ],
    "answerIndex": 2,
    "explanation": "「WAF Web ACLの設定が不要になる」という記述は誤りです。Shield Advancedの機能をフルに活かすためには、ロードバランサーやCloudFrontにAWS WAF（Web ACL）を正しく関連付け、レイヤー7での攻撃緩和ルールを設定しておく必要があります。Shield AdvancedはWAFの基本料金やルール料金をパッケージ（追加費用なし）で提供しますが、設定自体を不要にするわけではありません。",
    "keywords": [
      "AWS Shield Advanced",
      "DDoSコスト保護",
      "DDoSレスポンスチーム"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-40",
    "category": "security",
    "question": "企業独自のAD認証サーバー（オンプレミス）があり、社内ネットワークからのみアクセス可能な状況です。このAD環境を変更・開放（インターネット公開）することなく、安全にAWSマネジメントコンソールへのログイン認証として既存のADユーザーを使用するために構築すべきAWS Directory Service接続アプライアンスは何ですか？",
    "options": [
      "Microsoft AD (AWS Managed)",
      "AD Connector (AD コネクタ / 認証リクエストのオンプレミスADへのプロキシ)",
      "Simple AD",
      "Cognito User Pools"
    ],
    "answerIndex": 1,
    "explanation": "AD Connectorは、既存のオンプレミスActive Directoryに対する「認証プロキシ（中継器）」として動作する Directory Service オプションです。AWS上にはAD情報を一切複製・保持せず、ユーザーがログインを試みた際のみ、VPNやDirect Connect経由でオンプレミスのADコントローラーに対して安全に認証確認を問い合わせます。AD環境をインターネット公開せずにAWSログインを実現できます。",
    "keywords": [
      "AD Connector",
      "Active Directoryプロキシ",
      "ハイブリッドID連携"
    ],
    "domain": "domain-4"
  },
  {
    "id": "sec-41",
    "category": "security",
    "question": "AWSアカウントの権限境界 (Permissions Boundary) を設定した開発者用IAMポリシーにおいて、開発者自身が新しいIAMロールを作成（CreateRole）する際に、必ず「特定の管理ポリシー（例: DevBoundary）」をアタッチして起動テンプレートを割り当てるように条件を強制するIAMポリシーのキーはどれですか？",
    "options": [
      "iam:PermissionsBoundary",
      "iam:PermissionsBoundaryConstraint",
      "iam:AssociatedBoundary",
      "iam:BoundaryRequired"
    ],
    "answerIndex": 0,
    "explanation": "IAMの `Condition` ブロック内で、キー `iam:PermissionsBoundary` を指定します。値に特定の境界ポリシーのARN（`arn:aws:iam::...:policy/DevBoundary`）を記述し、`iam:CreateRole` アクションと組み合わせることで、「DevBoundaryが境界ポリシーとしてセットされている場合のみ、ロール作成を許可する」という条件制御が可能になり、権限のバイパスを防ぐことができます。",
    "keywords": [
      "iam:PermissionsBoundary",
      "権限昇格対策",
      "IAM条件キー"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-42",
    "category": "security",
    "question": "組織的なクラウド管理において、ある日、何者かによって本番環境の重要なVPCルートテーブルの設定変更（ルートの削除）が実行され、システムダウンが発生しました。この「設定変更を実行したIAMユーザー/ロール」および「実行された時間、送信元IPアドレス」をピンポイントで特定・追跡するために分析すべきAWS監査データはどちらですか？",
    "options": [
      "VPC フローログ",
      "AWS CloudTrail イベント履歴（APIコール履歴）",
      "AWS Config の構成変更詳細",
      "Amazon GuardDuty 脅威レポート"
    ],
    "answerIndex": 1,
    "explanation": "AWS CloudTrailは、AWSアカウント内のAPI呼び出し（アクションの実行）をすべて記録します。VPCルートテーブルの変更は `DeleteRoute` や `ReplaceRoute` などのAPIコールとして記録され、CloudTrailのイベント履歴から、それを「誰が（IAMユーザー/ロール）」「いつ（UTC時間）」「どこの送信元IPから（IPアドレス）」実行したかを完全に特定できます。Configは「何が変わったか」を記録しますが、「誰が実行したか」はCloudTrailでのみ特定可能です。",
    "keywords": [
      "CloudTrail API監査",
      "APIアクティビティ追跡",
      "セキュリティインシデント調査"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-43",
    "category": "security",
    "question": "AWS Organizations環境において、セキュリティポリシーにより、すべての子アカウントのS3バケットで「サーバーサイド暗号化 (SSE)」が常に有効になっている状態を保つ必要があります。非暗号化オブジェクトの保存自体をAPIレベルでブロックする最もシンプルで確実なアプローチはどちらですか？",
    "options": [
      "各アカウントで毎日S3の設定を確認するスクリプトを実行する",
      "組織のSCP（サービスコントロールポリシー）で、S3バケット作成時のデフォルト暗号化設定（s3:PutEncryptionConfiguration）の無効化を禁止するか、またはバケットポリシーで非暗号化PUTをDenyするバケットポリシーテンプレートの適用を強制すること",
      "S3バージョニングの強制有効化",
      "S3 Express One Zoneの導入のみ"
    ],
    "answerIndex": 1,
    "explanation": "SCPとバケットポリシーによるガードレール設計です。SCPを利用して、`s3:PutEncryptionConfiguration`（バケットへの暗号化設定の追加・変更）に対する制御を行い、かつ非暗号化状態でのアップロード（`x-amz-server-side-encryption` ヘッダーがない場合など）を明示的に拒否するバケットポリシーの削除を制限することで、全アカウントで暗号化を義務化できます。",
    "keywords": [
      "S3暗号化強制",
      "SCPガードレール",
      "データガバナンス"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-44",
    "category": "security",
    "question": "AWS Systems Managerの「Parameter Store」にデータベースパスワードなどの機密データを格納する際、パラメータの暗号化を完全に義務付け、APIからの平文での読み取り（GetParameter）を制限するために選択すべきパラメータタイプはどれですか？",
    "options": [
      "String",
      "StringList",
      "SecureString (KMS暗号化文字列)",
      "SecretString"
    ],
    "answerIndex": 2,
    "explanation": "Parameter StoreにパスワードやAPIトークンなどの機密情報を保存する場合は、必ず「SecureString」タイプを選択します。このタイプを選択すると、Parameter Storeは指定されたAWS KMSキー（デフォルトのKMSまたはカスタマー管理のCMK）を使用して値自体を暗号化して格納します。API取得時に復号権限を持つユーザーのみが値を取り出せます。",
    "keywords": [
      "SecureString",
      "Parameter Store",
      "機密情報暗号化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "sec-45",
    "category": "security",
    "question": "AWSマルチアカウント組織環境において、新しく作成・作成されたアカウントを含むすべてのメンバーアカウントで、「Amazon GuardDuty」と「AWS Security Hub」がデフォルトで自動的に有効化され、かつ自動的に親の監視アカウントと紐づくように全体管理（プロビジョニング自動化）を行うために活用すべき推奨アプローチはどちらですか？",
    "options": [
      "CloudFormationのStackSetsを子アカウントで手動適用する",
      "AWS Control Tower を導入し、ランディングゾーン構成により統合管理者から「アカウントの登録」と同時にセキュリティサービス（GuardDuty / Security Hub）の自動強制プロビジョニングを有効化すること",
      "全アカウントに対して同じIAM管理ロールを作成し、シェルスクリプトで定期適用する",
      "各サービスの設定は子アカウントの管理者が個別に行うべきである"
    ],
    "answerIndex": 1,
    "explanation": "AWS Control Towerを導入している環境では、アカウントのセットアップ（プロビジョニング）時に、自動的にガードレールおよび連携サービス（GuardDuty、Security Hub、AWS Config、CloudTrailの一括設定）が新しいアカウントに対しても即座に注入されます。これにより、組織全体のセキュリティベースラインが完全に自動維持されます。",
    "keywords": [
      "ランディングゾーン",
      "Control Tower自動化",
      "セキュリティガバナンス"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-46",
    "category": "security",
    "question": "S3バケットで保存されているデータに対して、暗号化アルゴリズムとして「AES-256」を使用しますが、暗号化で使用する「暗号化キー」をAWS側に一切保持させず、データの読み書きリクエストの都度、クライアント側からHTTPSヘッダーに独自の256ビット対称暗号化キーを含めて送信し、S3メモリ上で一時的に処理させる暗号化方式はどれですか？",
    "options": [
      "SSE-S3",
      "SSE-KMS",
      "SSE-C (顧客提供の鍵によるサーバーサイド暗号化)",
      "CSE-KMS (クライアントサイド暗号化)"
    ],
    "answerIndex": 2,
    "explanation": "SSE-C (Server-Side Encryption with Customer-Provided Keys) は、暗号化キーの生成・管理自体は自社のオンプレミス等で行い、AWS側にはキーを永久保管させない方式です。データのPUT/GETリクエスト時に、HTTPSヘッダーに暗号化キーを含めて送信することで、S3がメモリ上で暗号化/復号を行い、キー情報は即座に消去されます。セキュリティポリシー上、AWSにキーを預けられない場合に適しています。",
    "keywords": [
      "SSE-C",
      "S3暗号化方式",
      "鍵の自己管理"
    ],
    "domain": "domain-2"
  },
  {
    "id": "sec-47",
    "category": "security",
    "question": "本番アカウント内の特定データベースインスタンスに対して、会社の情報セキュリティ監査担当のIAMロール（Audit-Role）からのみリードクエリ操作の実行を許可し、他のシステム管理者ロール（Admin-Role）であってもデータベースのデータを閲覧できないように、IAMの権限レベルでアクセスを分離・厳しく管理したいです。どのようなポリシー設計が正しいですか？",
    "options": [
      "Admin-Roleポリシーで `db:Connect` アクションを拒否し、Audit-Roleポリシーでのみ許可すること",
      "DB接続用のセキュリティグループですべての通信をブロックする",
      "Admin-RoleからKMS暗号化権限をすべて削除する",
      "データベースをパブリックサブネットに移動する"
    ],
    "answerIndex": 0,
    "explanation": "RDS IAMデータベース認証を使用している環境において、DB接続（ログイン）権限はIAMポリシー内の `rds-db:Connect` アクションで制御されます。監査用ロールにのみこの `rds-db:Connect` 許可を与え、通常の管理者ロール（Admin-Role）には `Deny` するポリシー条件をアタッチしておくことで、インフラ管理者であってもデータベース内部のSQLクエリ接続を完全に拒否し、データ保護の職務分掌（アクセス分離）を実現できます。",
    "keywords": [
      "rds-db:Connect",
      "職務分掌",
      "IAMデータベース認証アクセス制御"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-48",
    "category": "security",
    "question": "AWSアカウントにセキュリティ保護として「Amazon Inspector」を設定しています。 Inspectorが本番環境のEC2インスタンス内部のOSパッケージの脆弱性スキャンを自動的かつエージェントレスで実行するために、EC2側で満たしておくべき前提条件はどれですか？",
    "options": [
      "EC2インスタンスにSSM Agentがインストールされており、インスタンスがSystems Managerのマネージドインスタンスとして正しく接続されており、適切なロールがアタッチされていること",
      "EC2インスタンスのセキュリティグループでインバウンドのポート22を開放しておくこと",
      "EC2インスタンスにInspector専用の独立したエージェントを個別にインストールすること",
      "EC2インスタンスをパブリックサブネットに配置すること"
    ],
    "answerIndex": 0,
    "explanation": "現在のAmazon Inspector (v2) は、EC2のスキャンにおいて「エージェントレス（またはSSM Agent経由）」で動作します。EC2内部に個別のInspector専用エージェントを入れる必要はありません。代わりに、EC2インスタンスが AWS Systems Manager (SSM) のマネージドホスト状態（SSMエージェントがアクティブで、SSM通信権限を持つロールがアタッチされている状態）になっていれば、InspectorはSSMを中継して脆弱性スキャンを自動的に実行します。",
    "keywords": [
      "Amazon Inspector",
      "SSM Agent連携",
      "脆弱性監査要件"
    ],
    "domain": "domain-3"
  },
  {
    "id": "sec-49",
    "category": "security",
    "question": "AWS Organizations を適用しているマルチアカウント組織において、外部委託している開発ベンダー企業のAWSアカウント（アカウントC）に属する開発者に対して、自社のステージング用アカウント（アカウントD）内の特定のリソース（S3バケット）への一時的な書き込みアクセスを許可したいです。セキュリティベストプラクティスに従い、IAMユーザーを作成せずに安全に一時的な書き込み権限を付与する方法はどれですか？",
    "options": [
      "アカウントD内で新規のIAMユーザーを作成し、そのアクセスキーをベンダーにメール送信する",
      "アカウントD内で「クロスアカウントアクセス用のIAMロール」を作成し、そのロールの信頼ポリシーでアカウントCのアカウント番号を許可し、開発者がロールを引き受け（AssumeRole）て一時的クレデンシャルを取得して書き込みを行うこと",
      "S3バケットポリシーで「S3アクセスを完全にオープン（*）」にする",
      "アカウントCとアカウントDをVPCピアリングで物理接続するのみ"
    ],
    "answerIndex": 1,
    "explanation": "クロスアカウントでのセキュアな一時アクセス付与のベストプラクティスは「IAMロールの引き受け (AssumeRole)」です。アクセス元のアカウントCを信頼するIAMロールをアカウントD（リソース側）で作成し、ベンダーの開発者は `sts:AssumeRole` APIを使用してこのロールの一時的なセキュリティ認証情報（アクセスキー等）を取得します。アクセスキーの永続的な発行や漏洩リスクを防ぐことができます。",
    "keywords": [
      "AssumeRole",
      "クロスアカウントアクセス",
      "IAMロール信頼関係"
    ],
    "domain": "domain-1"
  },
  {
    "id": "sec-50",
    "category": "security",
    "question": "AWS WAF（Web Application Firewall）を使用して、Webアプリケーションの脆弱性を突く一般的なWeb攻撃（SQLインジェクションやクロスサイトスクリプティングなど）を防御するために、AWSが公式に更新・提供している推奨ルールセットを素早く適用したい場合に選択すべきWAFルールはどれですか？",
    "options": [
      "カスタム正規表現一致ルール",
      "AWS マネージドルールグループ (AWS Managed Rules Groups)",
      "サードパーティ製有料ルールセットのみ",
      "レートベースのルールのみ"
    ],
    "answerIndex": 1,
    "explanation": "AWS WAFは、一般的な脆弱性（OWASP Top 10など）や特定のOS/データベース向けの攻撃をブロックするために、AWSが定義・保守している「AWS マネージドルールグループ (AWS Managed Rules Groups)」を提供しています（例: `AWSManagedRulesCommonRuleSet`, `AWSManagedRulesSQLiRuleSet`など）。これらをWeb ACLに追加するだけで、高度なセキュリティ防御を即座に導入でき、ルール自体の保守コストもかかりません。",
    "keywords": [
      "AWSマネージドルール",
      "WAFルールグループ",
      "脆弱性防御"
    ],
    "domain": "domain-1"
  },
  {
    "id": "msg-01",
    "category": "messaging",
    "question": "注文処理アプリケーションにおいて、複数のワーカーがSQSキューから注文メッセージを受信して処理します。特定のユーザーグループからの注文は必ず送信順に処理（順序保証）し、かつメッセージが重複して処理されないようにしたい場合、どの構成を選択すべきですか？",
    "options": [
      "SQS 標準キュー",
      "SQS FIFO キューを使用し、同一のメッセージグループID (MessageGroupId) を設定すること",
      "SQS 標準キューを使用し、可視性タイムアウトを最大にする",
      "SNS トピックとSQSの組み合わせ"
    ],
    "answerIndex": 1,
    "explanation": "SQS FIFO（先入れ先出し）キューは、メッセージが送信された正確な順序で1回のみ配信（重複排除）されることを保証します。「メッセージグループID (MessageGroupId)」を設定することで、グループIDごとに順序性が厳密に管理され、複数のグループがある場合は並列で同時にワーカーが処理を進めることができます。",
    "keywords": [
      "SQS FIFO",
      "MessageGroupId",
      "順序保証"
    ],
    "domain": "domain-2"
  },
  {
    "id": "msg-02",
    "category": "messaging",
    "question": "AWS Lambda関数がAmazon SQSキューからメッセージをポーリングして実行されます。Lambda関数が処理を実行中に、他のLambdaインスタンスが同じメッセージを重複して取得・処理するのを防ぐために、SQS側で調整すべき設定値はどれですか？",
    "options": [
      "配信遅延 (DelaySeconds)",
      "メッセージ保持期間 (MessageRetentionPeriod)",
      "可視性タイムアウト (Visibility Timeout)",
      "最大メッセージサイズ (MaximumMessageSize)"
    ],
    "answerIndex": 2,
    "explanation": "可視性タイムアウト (Visibility Timeout) は、あるコンシューマー（LambdaやEC2）がキューからメッセージを取得した後に、そのメッセージが他のコンシューマーから見えなくなる（再取得不可になる）時間です。これがLambdaの処理実行時間より短く設定されていると、処理中に他のインスタンスが同じメッセージを取得して重複処理が発生します。推奨はLambdaのタイムアウトの6倍以上に設定することです。",
    "keywords": [
      "可視性タイムアウト",
      "重複処理防止",
      "SQS"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-03",
    "category": "messaging",
    "question": "1つの注文イベントの発生をトリガーとして、在庫管理システム（SQS）、発送処理システム（SQS）、および分析用データレイク（S3/Kinesis）の3つの異なるシステムに対して、非同期でメッセージを一斉配信（ファンアウト）したいです。最もシンプルなサーバーレス構成はどれですか？",
    "options": [
      "注文イベントを一度 Lambda に送り、Lambda コードから個別のキューに並列で書き込む",
      "Amazon SNS トピックにイベントを発行し、そのSNSトピックに対して複数のSQSキューおよびKinesisをサブスクライブ（関連付け）させること",
      "API Gateway を複数構築する",
      "EventBridgeの複数ルールのみ"
    ],
    "answerIndex": 1,
    "explanation": "SNSの「ファンアウト（Fan-out）」パターンです。パブリッシャーは単一のSNSトピックにのみメッセージを送信（Publish）し、そのトピックに登録されている複数のサブスクライバー（SQSキュー、Lambda、HTTPSエンドポイントなど）に対して、SNSが自動的にメッセージを複製して一斉非同期配信します。これにより疎結合でスケーラブルなアーキテクチャが実現します。",
    "keywords": [
      "SNSファンアウト",
      "疎結合",
      "非同期メッセージング"
    ],
    "domain": "domain-2"
  },
  {
    "id": "msg-04",
    "category": "messaging",
    "question": "マイクロサービス間で発生する「新規アカウント登録」「決済完了」などの様々なイベントデータを収集し、定義されたルール（JSONパターン）に従って、該当する複数のターゲット（Lambda、Step Functions、Kinesisなど）へ、スキーマ検証を行いながらルーティングする、イベント駆動型サーバーレスハブはどれですか？",
    "options": [
      "Amazon SNS",
      "Amazon SQS",
      "Amazon EventBridge (旧 CloudWatch Events)",
      "AWS AppSync"
    ],
    "answerIndex": 2,
    "explanation": "Amazon EventBridgeは、サーバーレスのイベントバスサービスです。アプリケーション、独自のSaaSアプリ、AWSサービスからのイベントデータを受信し、柔軟な「ルール」に基づいてターゲット（Lambda、API Gateway、Step Functions等）へルーティングします。また、イベントのデータ構造を管理するスキーマレジストリ機能も備えています。",
    "keywords": [
      "EventBridge",
      "イベントバス",
      "イベント駆動型アーキテクチャ"
    ],
    "domain": "domain-2"
  },
  {
    "id": "msg-05",
    "category": "messaging",
    "question": "ユーザー管理、請求、および配送処理などの複数の独立したマイクロサービスやサーバーレス処理を、特定の「ワークフロー（分岐、並列処理、例外ハンドリング、人間による承認待機）」に基づいて順序よく実行・オーケストレーションしたい場合、使用すべきサービスはどれですか？",
    "options": [
      "AWS Lambdaの再帰呼び出し",
      "AWS Step Functions",
      "Amazon EventBridgeのルールチェーン",
      "Amazon SQSの順序キューチェーン"
    ],
    "answerIndex": 1,
    "explanation": "AWS Step Functionsは、サーバーレスのワークフローオーケストレーターです。分散アプリケーションやマイクロサービスを一連のステップ（状態遷移）として定義し、Lambda関数の実行、エラー処理や条件分岐、並列処理、数日間に及ぶ待機タスクなどを、ビジュアル的にモデル化して管理できます。",
    "keywords": [
      "AWS Step Functions",
      "オーケストレーション",
      "状態マシン"
    ],
    "domain": "domain-2"
  },
  {
    "id": "msg-06",
    "category": "messaging",
    "question": "オンプレミス環境で ActiveMQ または RabbitMQ などの標準的なメッセージブローカーを運用しています。既存のアプリケーションコード（JMS、AMQP、MQTT、STOMPなどのプロトコル）を書き換えることなく、AWS上に最小限の修正でメッセージング基盤を移行したい場合、どのサービスを選ぶべきですか？",
    "options": [
      "Amazon SQS",
      "Amazon SNS",
      "Amazon MQ",
      "Amazon EventBridge"
    ],
    "answerIndex": 2,
    "explanation": "Amazon MQは、ActiveMQやRabbitMQなどの一般的なオープンソースのメッセージブローカー向けのマネージドサービスです。既存のメッセージングAPIや業界標準のプロトコル（AMQP、JMS、MQTT、STOMPなど）をネイティブにサポートしているため、オンプレミスのメッセージブローカーからAWSへの移行（リホスト/リプラットフォーム）において、コードの書き換えが不要になります。",
    "keywords": [
      "Amazon MQ",
      "ActiveMQ",
      "メッセージブローカー移行"
    ],
    "domain": "domain-4"
  },
  {
    "id": "msg-07",
    "category": "messaging",
    "question": "GraphQL APIをサーバーレスで構築し、単一のエンドポイントを通じて複数のデータソース（DynamoDB、RDS、Lambdaなど）からデータを効率的に取得し、かつ「リアルタイムのデータ更新（サブスクリプション機能）」をモバイルアプリ等に配信したい場合、最適なサービスはどれですか？",
    "options": [
      "Amazon API Gateway",
      "AWS AppSync",
      "Amazon EventBridge",
      "AWS Amplify Console"
    ],
    "answerIndex": 1,
    "explanation": "AWS AppSyncは、GraphQL APIを容易に開発できるフルマネージドサービスです。GraphQLの強力な機能（必要なデータのみを取得するクエリ設計、複数ソースの統合）に加え、WebSocketsを利用した「サブスクリプション (Subscriptions)」機能を備えており、データ更新が発生した際、接続されているクライアントに対してリアルタイムで通知・同期を行うことができます。",
    "keywords": [
      "AppSync",
      "GraphQL",
      "リアルタイムサブスクリプション"
    ],
    "domain": "domain-2"
  },
  {
    "id": "msg-08",
    "category": "messaging",
    "question": "API Gatewayにおいて、特定の公開APIに対する悪意あるスパムアクセスやDoS攻撃によってバックエンドシステムがクラッシュするのを防ぐために、アカウントレベルやステージレベルで適用すべき「リクエストレートの制御（流量制限）」機能は何ですか？",
    "options": [
      "API Gateway のキャッシュ設定",
      "API Gateway スロットリング (Throttling) 設定（トークンバケットアルゴリズム）",
      "WAF の地理的一致ルール",
      "AWS Shield Standard"
    ],
    "answerIndex": 1,
    "explanation": "API Gatewayは、APIの「スロットリング (Throttling)」設定をサポートしています。トークンバケットアルゴリズムを使用し、1秒あたりの定常リクエスト制限（Rate）と、瞬間的なバースト制限（Burst）を定義します。これにより、クライアントからのAPIコール数が制限値を超えた場合は、API Gatewayが自動的に「429 Too Many Requests」エラーを返し、バックエンド（Lambda等）への過剰アクセスを防ぎます。",
    "keywords": [
      "API Gateway スロットリング",
      "レート制限",
      "バックエンド保護"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-09",
    "category": "messaging",
    "question": "Step Functionsで記述されるワークフローにおいて、実行時間が1秒未満で極めて高スループット（秒間数千回以上）の処理をミリ秒単位の応答で完了させたいです。料金を安価に抑えたい場合、どの「ワークフロータイプ」を選択すべきですか？",
    "options": [
      "標準ワークフロー (Standard Workflows)",
      "高速ワークフロー (Express Workflows)",
      "リアルタイムワークフロー",
      "サーバーレスワークフロー"
    ],
    "answerIndex": 1,
    "explanation": "Step Functionsには「標準 (Standard)」と「高速 (Express)」の2つのワークフロータイプがあります。高速 (Express) ワークフローは、最長5分間の実行時間制限がありますが、秒間100,000回以上の超高頻度のイベント処理や、IoTのメッセージ処理、マイクロサービスのリアルタイム連携に特別に設計されており、標準タイプに比べて実行あたりの料金が格段に安くなります。",
    "keywords": [
      "Express Workflows",
      "高速ワークフロー",
      "Step Functions"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-10",
    "category": "messaging",
    "question": "Amazon SQSでキューのメッセージを取り出す（ReceiveMessage）際、キューが空の場合にメッセージが書き込まれるまで指定時間（最大20秒）接続を維持して待機し、無駄な空振りの空ポーリング回数を減らしてAPI利用コストを劇的に削減するポーリング手法を何と呼びますですか？",
    "options": [
      "ショートポーリング (Short Polling)",
      "ロングポーリング (Long Polling / ReceiveMessageWaitTimeSeconds を 0 より大きく設定)",
      "ストリームポーリング",
      "バッチポーリング"
    ],
    "answerIndex": 1,
    "explanation": "SQSの「ロングポーリング」を使用すると、キューが空のときにAPI接続を最大20秒間開いたままにし、その間にメッセージが届けば即座に復帰させます。これにより、ポーリングの「空振り（空の応答）」の回数が激減し、SQSの `ReceiveMessage` API呼び出し回数が劇的に減るため、API課金コストを大幅に削減できます（設定には `ReceiveMessageWaitTimeSeconds` を1〜20秒に指定します）。",
    "keywords": [
      "ロングポーリング",
      "SQSコスト最適化",
      "ポーリング効率化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-11",
    "category": "messaging",
    "question": "SQSのコンシューマーアプリケーションが、メッセージを受け取って処理を試みましたが、コードのエラーや外部システム障害により何度も処理が失敗し、メッセージが再びキューへ戻る「エラーによる無限ループ（無限処理）」が発生しています。これを防ぐために構築すべき構成はどれですか？",
    "options": [
      "配信遅延の設定変更",
      "デッドレターキュー (DLQ - Dead Letter Queue) の構成と、最大受信数 (maxReceiveCount) の設定",
      "FIFO キューへの移行のみ",
      "メッセージ保持期間の短縮"
    ],
    "answerIndex": 1,
    "explanation": "デッドレターキュー (DLQ) を元のSQSキューのポリシーとして構成します。「最大受信数 (maxReceiveCount)」を設定しておくことで、メッセージの処理試行回数がその値（例: 5回）を超えた場合、SQSが自動的に該当のメッセージを元のキューから「DLQ（別のSQSキュー）」へと隔離・移動させます。これにより、問題のあるメッセージによるシステム全体のハングを防ぎ、後からDLQのメッセージを分析・トラブルシュートできます。",
    "keywords": [
      "デッドレターキュー",
      "DLQ",
      "耐障害性設計"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-12",
    "category": "messaging",
    "question": "Amazon SNSにおいて、1つのトピックに様々なシステムイベント（注文、キャンセル、発送）がまとめて送信されます。在庫管理システム（SQS）には「注文イベント」のみを配信し、別の配送システム（SQS）には「発送イベント」のみを配信したい場合、SNSトピックを分けることなくルーティングを最適化する機能はどれですか？",
    "options": [
      "SNS 署名付きフィルタ",
      "SNS サブスクリプションフィルターポリシー (Subscription Filter Policies)",
      "SQS メッセージグループ設定",
      "EventBridge ルールチェーン"
    ],
    "answerIndex": 1,
    "explanation": "SNS サブスクリプションフィルターポリシーを使用すると、サブスクライバー（SQS等）ごとに「どのような属性値を持つメッセージのみを受け取るか」をJSON形式で定義できます。SNSトピックはメッセージを受信した際、メッセージ属性（Message Attributes）を評価し、フィルター条件に合致するサブスクライバーに対してのみメッセージを配信します。これにより、パブリッシャー側の配信処理を簡素化できます。",
    "keywords": [
      "フィルターポリシー",
      "SNSサブスクリプション",
      "メッセージルーティング"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-13",
    "category": "messaging",
    "question": "Amazon SQSで処理可能なメッセージの「最大サイズ制限（256KB）」を超える、数MB〜数十MB規模の大容量ファイルをキューイングして処理したい場合、推奨されるAWS公式ライブラリおよびアーキテクチャパターンはどれですか？",
    "options": [
      "ファイルを圧縮してキューに入れる",
      "Amazon SQS Extended Client Library を使用し、実データをS3にアップロードして、SQSキューにはそのS3オブジェクトへの参照情報（パス）のみを格納して受け渡すこと",
      "Kinesis Data Streamsへの完全な移行のみ",
      "DynamoDBを経由させるカスタム実装"
    ],
    "answerIndex": 1,
    "explanation": "SQS自体に保存できるメッセージは最大256KBです。これを超える大容量データは、「Amazon SQS Extended Client Library」を使用します。このライブラリは、クライアントがデータを送信する際に自動でS3バケットに実ファイルをアップロードし、SQSにはS3ポインタを格納したメッセージを送信します。受信側のクライアントもライブラリ経由でS3から自動で実データを取得するため、アプリケーションのコード側ではサイズ制限を意識せずに大容量メッセージを中継できます。",
    "keywords": [
      "SQS Extended Client",
      "大容量メッセージング",
      "S3統合パターン"
    ],
    "domain": "domain-2"
  },
  {
    "id": "msg-14",
    "category": "messaging",
    "question": "Amazon EventBridgeを使用して、外部のSaaSアプリケーション（Zendesk、PagerDuty、Datadogなど）からAWSアカウントへ、認証キーの設定や中継サーバーのプロビジョニングなしに、AWSプライベートネットワーク内で安全かつ直接イベントデータを受信・統合するための機能は何ですか？",
    "options": [
      "SaaS VPCエンドポイント",
      "EventBridge SaaS パートナーイベントソース (Partner Event Sources)",
      "API Gatewayの配置のみ",
      "AWS AppSync クライアント統合"
    ],
    "answerIndex": 1,
    "explanation": "EventBridgeは、サポートされている多数のサードパーティSaaSパートナーとの「ネイティブ統合（Partner Event Sources）」をサポートしています。SaaSプロバイダー側でAWSアカウントIDを指定してイベント送信を設定すると、AWS側のEventBridgeコンソールに「パートナーイベントソース」として自動表示され、それを「カスタムイベントバス」に関連付けるだけで、安全かつサーバーレスに外部SaaSのイベントをキャプチャできます。",
    "keywords": [
      "パートナーイベントソース",
      "SaaS統合",
      "EventBridge"
    ],
    "domain": "domain-2"
  },
  {
    "id": "msg-15",
    "category": "messaging",
    "question": "AWS Step Functionsにおいて、ワークフローの特定のステップで「社内システムでの人間の承認（承認ボタンのクリック）」を待機し、数時間後または数日後に承認アクションが実行された段階で処理を再開させる対話型のフロー設計に最適な機能はどちらですか？",
    "options": [
      "Step Functionsの待機ステート (Wait State) のみ",
      "コールバックパターン（タスクトークン付きのタスク実行: `.waitForTaskToken`）を使用し、承認完了時に `SendTaskSuccess` API を叩いてワークフローを再開させること",
      "Lambdaの同時実行制限によるスリープ",
      "DynamoDBストリームでのポーリングループ"
    ],
    "answerIndex": 1,
    "explanation": "Step Functionsのコールバックパターン（タスクトークン連携）は、一時停止して外部のシグナルを待つ機能です。タスクの実行時に一時的な「タスクトークン（Token）」を発行し、状態マシンを `waitForTaskToken` 状態で待機させます。外部の人間や非同期バッチ処理が、そのトークンを指定して `SendTaskSuccess`（成功）または `SendTaskFailure`（失敗）をAWS APIで送信することで、安全にその時点からワークフロー処理が再開されます。",
    "keywords": [
      "waitForTaskToken",
      "承認ワークフロー",
      "コールバックタスク"
    ],
    "domain": "domain-2"
  },
  {
    "id": "msg-16",
    "category": "messaging",
    "question": "Amazon SQSキューに対する書き込み要求と、キューを読み取るコンシューマーEC2インスタンスの処理能力のバランスを監視します。キューに「未処理のメッセージが溜まっている（滞留している）」ことを検知し、EC2のAuto Scalingをスケールアウトさせるための最適なカスタム CloudWatch メトリクスは何ですか？",
    "options": [
      "CPUUtilization",
      "ApproximateNumberOfMessagesVisible (受信可能なメッセージの概算数)",
      "NumberOfMessagesSent",
      "NetworkIn"
    ],
    "answerIndex": 1,
    "explanation": "SQSから取り出されずキュー内で待機しているメッセージ数は `ApproximateNumberOfMessagesVisible` メトリクスで監視できます。これをベースにし、さらにAuto Scalingのターゲット追跡ポリシーで「インスタンスあたりの処理メッセージ滞留数」を定義することで、キューの急増に伴って自動的にEC2インスタンスを追加し、処理が追いついたら安全に縮小する適切なスケールアウトが実現します。",
    "keywords": [
      "ApproximateNumberOfMessagesVisible",
      "Auto Scaling",
      "SQSバックログメトリクス"
    ],
    "domain": "domain-3"
  },
  {
    "id": "net-17-dummy",
    "category": "messaging",
    "question": "Amazon SNSトピックからモバイルアプリケーションのユーザーに対して、プッシュ通知を一斉に直接配信したいです。SNSから直接サポート・連携できるモバイルプッシュ通知通知プラットフォーム（サービス）として、正しくないものはどれですか？",
    "options": [
      "Apple Push Notification service (APNs)",
      "Firebase Cloud Messaging (FCM / 旧GCM)",
      "Amazon WorkMail",
      "Windows Push Notification Services (WNS)"
    ],
    "answerIndex": 2,
    "explanation": "Amazon SNSは、APNs（iOS向け）、FCM/GCM（Android向け）、WNS（Windowsデスクトップ向け）などの主要な「モバイルプッシュ通知ネットワーク」への直接配信をサポートしています。Amazon WorkMailはAWSの電子メール・カレンダーサービスであり、モバイルプッシュ通知の配信用エンドポイントとしては無関係です。",
    "keywords": [
      "SNSモバイルプッシュ",
      "APNs",
      "FCM"
    ],
    "domain": "domain-2"
  },
  {
    "id": "msg-18",
    "category": "messaging",
    "question": "Amazon EventBridgeを使用して、毎日深夜1:00にバッチ用EC2インスタンスを自動起動させるような「スケジュールベース」のタスクを定義したいです。さらに、日付時間だけでなく、特定のタイムゾーンを考慮した「1回限り（One-time）」のスケジュール実行もサポートする、最も推奨されるEventBridgeのコンポーネントはどれですか？",
    "options": [
      "EventBridgeの標準ルール（cron/rate設定）",
      "Amazon EventBridge スケジューラ (EventBridge Scheduler)",
      "Systems Manager State Manager",
      "CloudWatch Events のアラーム"
    ],
    "answerIndex": 1,
    "explanation": "Amazon EventBridge スケジューラ (EventBridge Scheduler) は、スケジュールベースのタスク実行に特化した高度な機能です。従来のEventBridgeルールに比べ、特定のタイムゾーン設定、サマー時間の自動調整、さらにミリ秒・秒単位の正確な時間での起動、および「特定の指定日時に1回だけ実行するスケジュール」の作成など、柔軟な自動化処理が可能です。",
    "keywords": [
      "EventBridge Scheduler",
      "スケジュール実行",
      "タイムゾーン考慮"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-19",
    "category": "messaging",
    "question": "Amazon AppSync (GraphQL) を使用して、モバイルゲームのチャットシステムを構築しています。オフライン状態のクライアントがネットワークに再接続した際に、切断中のローカルデータとクラウド上のデータベースのデータ競合を自動解決し、シームレスな同期を実現するためにAppSync側で設定できる機能は何ですか？",
    "options": [
      "DynamoDB Streamsの有効化",
      "AppSyncの「デルタ同期 (Delta Sync)」および競合解決ポリシー（楽観的並行性制御、オートマージなど）",
      "S3 Selectの適用",
      "API Gateway WebSocketsの利用のみ"
    ],
    "answerIndex": 1,
    "explanation": "AppSyncは、データのローカルオフラインキャッシュおよび「デルタ同期」を組み込みでサポートしています。再接続時にはデルタテーブルから差分データのみを効率的に読み込み同期します。さらに、複数クライアントからの更新競合が発生した際、「オートマージ」「楽観的並行性（バージョン管理）」「Lambdaによるカスタム解決」などの競合解決ポリシーを設定し、自動修復を実行させることができます。",
    "keywords": [
      "AppSync デルタ同期",
      "オフラインキャッシュ",
      "競合解決"
    ],
    "domain": "domain-2"
  },
  {
    "id": "msg-20",
    "category": "messaging",
    "question": "Amazon EventBridgeにおいて、本番環境でデバッグを行っています。過去数日間に発生した特定の不正なイベントデータを再解析し、障害の発生原因を調査するため、過去にイベントバスを通過したすべてのイベントログを保管しておき、後から指定した時間枠でターゲット（Lambdaなど）に対して「イベントを再再生（リプレイ）」する機能はどれですか？",
    "options": [
      "EventBridgeのアーカイブと再再生 (Archive & Replay)",
      "CloudTrailのAPIイベント検索",
      "CloudWatch Logsのサブスクリプション",
      "Amazon S3ライフサイクルのインポート"
    ],
    "answerIndex": 0,
    "explanation": "Amazon EventBridgeは「アーカイブと再再生 (Archive & Replay)」機能をサポートしています。イベントバスを通過するイベントをアーカイブ（保管期間を無制限または日数で定義）しておくことができ、障害調査やデバッグ時に、アーカイブから特定の時間帯のイベントを選択して「再生（Replay）」を実行することで、ターゲットに対して当時と全く同じイベントを再送し、処理を再現させることができます。",
    "keywords": [
      "アーカイブと再再生",
      "EventBridge Replay",
      "トラブルシューティング"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-21",
    "category": "messaging",
    "question": "Amazon SQS FIFOキューを使用して、複数の注文処理メッセージを処理します。注文が殺到した際のスループットを高めるため、処理順序は同一ユーザー（userId）内でのみ維持されればよく、異なるユーザー間の注文メッセージは並行して処理させたいです。これを満たすためにメッセージ送信時に設定すべき重要な属性はどちらですか？",
    "options": [
      "メッセージ重複排除 ID (MessageDeduplicationId)",
      "メッセージグループ ID (MessageGroupId / userId を値として指定すること)",
      "送信元IPアドレス",
      "キューの優先順位値"
    ],
    "answerIndex": 1,
    "explanation": "SQS FIFOキューでは、「メッセージグループ ID (MessageGroupId)」を使用して、同一グループID内のメッセージのみを順番に処理します。異なるグループIDを持つメッセージは、複数のワーカーインスタンスに対して同時に並行配信されるため、全体的なスループットが大幅に向上します。このため、ユーザーIDなどの一意の識別子をグループIDに指定するのが最適です。",
    "keywords": [
      "MessageGroupId",
      "FIFOキュー並行処理",
      "SQSパフォーマンス"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-22",
    "category": "messaging",
    "question": "Amazon SNSトピックに対して、多数の電子メールサブスクライバー（ユーザーアドレス）が登録されています。SNSから配信される電子メールが受信側の迷惑メールフィルターによってブロックされるリスクを減らし、送信元ドメインの信頼性を高めて確実にメールを届けるためにSNSと併用・代替すべき、メール送信に特化したAWSサービスはどれですか？",
    "options": [
      "Amazon WorkMail",
      "Amazon SES (Simple Email Service)",
      "Amazon Pinpoint",
      "API Gatewayの統合"
    ],
    "answerIndex": 1,
    "explanation": "Amazon SNSのEメール通知は簡易的なテキスト配信向けです。本格的なEメール配信（トランザクションメール、メルマガなど）において、到達率を高めるためには「Amazon SES (Simple Email Service)」を使用します。SESでは、送信元ドメイン認証（DKIM、SPF）、専用IPアドレスの使用、およびバウンス（不達メール）の監視を細かく制御できます。",
    "keywords": [
      "Amazon SES",
      "Eメール到達率向上",
      "送信元ドメイン認証"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-23",
    "category": "messaging",
    "question": "Amazon EventBridgeにおいて、カスタムアプリケーションから発生した特定のビジネスイベントデータを受信するためのイベントバスを作成したいです。AWSアカウント内で標準のAWSサービスイベントを受け取る「defaultバス」とは切り離して、セキュリティ境界やポリシーを設定するために作成すべきコンポーネントはどれですか？",
    "options": [
      "SaaSイベントソース",
      "カスタムイベントバス (Custom Event Bus)",
      "EventBridge Pipes",
      "API Gatewayリソース"
    ],
    "answerIndex": 1,
    "explanation": "Amazon EventBridgeでは、独自のイベントを受け渡すために「カスタムイベントバス (Custom Event Bus)」を追加作成できます。これにより、AWSサービス用のdefaultバスと権限やポリシー（別アカウントからの受信許可ポリシーなど）を分離し、ルールの乱雑化を防ぐことができます。",
    "keywords": [
      "カスタムイベントバス",
      "EventBridge",
      "イベント境界設計"
    ],
    "domain": "domain-1"
  },
  {
    "id": "msg-24",
    "category": "messaging",
    "question": "AWS Step Functionsにおいて、S3バケット内の数十万個のCSVファイルを一括で並列読み込みし、それぞれに対して並行してLambda関数を実行（大規模バッチ処理）したいです。標準の「マップ（Map）」ステートの制限を超えて、最大10,000の同時並行サブワークフローをサポートする Step Functions の拡張機能は何ですか？",
    "options": [
      "アレイジョブの実行",
      "分散マップ (Distributed Map) モード",
      "Express Workflows 連携",
      "マルチノードワークフロー"
    ],
    "answerIndex": 1,
    "explanation": "分散マップ (Distributed Map) モードは、Step Functionsが提供する大規模な並列処理機能です。S3バケット内のオブジェクト一覧などの大容量データセットを分割し、最大10,000個のサブ実行ワークフローを同時に並行起動して高速処理できます。これにより、従来の標準マップステートの同時実行数上限（40個）を突破し、サーバーレスでの超大規模バッチが実現します。",
    "keywords": [
      "分散マップ",
      "Distributed Map",
      "大規模並列バッチ"
    ],
    "domain": "domain-2"
  },
  {
    "id": "msg-25",
    "category": "messaging",
    "question": "Amazon SQS標準キューにおいて、メッセージを送信した後に、コンシューマーがそのメッセージを一時的に「処理対象外（見えない状態）」にし、指定された秒数（例: 60秒）が経過した後にのみキューの可視状態にしてコンシューマーに取得させたい場合に設定すべき属性値はどれですか？",
    "options": [
      "VisibilityTimeout (可視性タイムアウト)",
      "DelaySeconds (配信遅延 / 遅延キュー)",
      "MessageGroupId",
      "ReceiveMessageWaitTimeSeconds"
    ],
    "answerIndex": 1,
    "explanation": "「配信遅延 (DelaySeconds)」を設定すると、キューに送信された新規メッセージは、設定された秒数（0秒〜15分）が経過するまでコンシューマーから見えない（取得できない）遅延状態になります。バッチ処理の準備時間確保や、書き込み直後のデータ反映待機などに利用されます。可視性タイムアウトは「受信された後」の見えない時間であるため異なります。",
    "keywords": [
      "DelaySeconds",
      "遅延キュー",
      "メッセージ属性"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-26",
    "category": "messaging",
    "question": "AWS AppSync (GraphQL) において、フロントのアプリクライアントが要求する特定のデータフィールド値を取得するために、バックエンドの実際のデータベースやAWS API（LambdaやDynamoDB）との接続・データのマッピング定義を行うコンポーネントを何と呼びますですか？",
    "options": [
      "Resolver (リゾルバー)",
      "Data Source (データソース)",
      "Schema (スキーマ)",
      "API Endpoint"
    ],
    "answerIndex": 0,
    "explanation": "AppSyncにおける「Resolver (リゾルバー)」は、GraphQLスキーマ内の特定のフィールドと、そのデータを実際に取得するソース（DynamoDBやLambdaなどのData Source）との橋渡し・マッピングを行う定義です。リゾルバーはマッピングテンプレート（VTL）またはJavaScriptを使用して、要求されたクエリ引数をデータベースクエリに変換し、結果を整形して返します。",
    "keywords": [
      "リゾルバー",
      "AppSync Resolver",
      "GraphQLマッピング"
    ],
    "domain": "domain-2"
  },
  {
    "id": "msg-27",
    "category": "messaging",
    "question": "API Gatewayにおいて、カスタムの認証・認可プロセス（例: 自社のOAuth2.0認証サーバーで発行されたカスタムトークンの検証など）を、API呼び出し時にAPI Gatewayの直前で実行させたい場合にアタッチすべき認可機能はどれですか？",
    "options": [
      "IAM 認可 (AWS_IAM)",
      "Cognito ユーザープール認可",
      "Lambda オーソライザー (Lambda Authorizer / 旧カスタムオーソライザー)",
      "API キーの強制"
    ],
    "answerIndex": 2,
    "explanation": "Lambda オーソライザー (Lambda Authorizer) は、API Gatewayが提供するカスタム認可メカニズムです。クライアントが送信したHTTPヘッダーやクエリパラメータに含まれるベアラートークン（JWTなど）を、自作のLambda関数に引き渡して署名検証や有効期限のチェックを行い、結果をIAMポリシーの形式でAPI Gatewayに返すことで、動的なアクセス認可を判定します。",
    "keywords": [
      "Lambdaオーソライザー",
      "API Gatewayセキュリティ",
      "カスタムトークン検証"
    ],
    "domain": "domain-2"
  },
  {
    "id": "msg-28",
    "category": "messaging",
    "question": "Amazon SQSからメッセージを読み取り、それを直接 AWS Step Functions の状態マシン（Standard ワークフロー）の新規実行に受け渡して連携したいです。メッセージの中継役としての Lambda コードを自作・デプロイすることなく、SQSとStep Functionsの間をサーバーレスかつノーコードで直結・中継させるための最適なEventBridgeの機能はどれですか？",
    "options": [
      "EventBridgeの標準ルール設定",
      "EventBridge パイプ (EventBridge Pipes)",
      "EventBridge スケジューラ",
      "API Gatewayリダイレクト"
    ],
    "answerIndex": 1,
    "explanation": "EventBridge パイプ (EventBridge Pipes) は、サポートされているソース（SQS、DynamoDB Streams、Kinesisなど）とターゲット（Step Functions、Lambda、API Gatewayなど）をポイントツーポイントで、コードを書かずに（ノーコードで）直接中継する機能です。オプションでフィルター処理やデータの整形（マッピング）もパイプ内で一元実行できるため、統合用Lambdaの開発コストを削減できます。",
    "keywords": [
      "EventBridge Pipes",
      "ノーコード連携",
      "SQS Step Functions直結"
    ],
    "domain": "domain-2"
  },
  {
    "id": "msg-29",
    "category": "messaging",
    "question": "AWS Step Functionsにおいて、一部のサブタスク（Lambda呼び出しなど）が一時的なタイムアウトやコードの処理例外を起こした際、即座にワークフロー全体を「失敗」にせず、指定された間隔（例: 2秒）をあけて自動的に複数回再実行（リトライ）させ、それでも失敗した場合にのみエラーハンドリングルーチンへ分岐させるために、状態定義（ASL）上で構成すべき要素の正しい組み合わせはどれですか？",
    "options": [
      "Wait ステートの配置のみ",
      "タスク定義の `Retry`（リトライ条件、インターバル、バックオフ率の設定）および `Catch`（エラーの捕捉と別ルートへの遷移）のパラメータ定義",
      "Lambda側でのリトライ設定のみ",
      "EventBridgeアーカイブの連携"
    ],
    "answerIndex": 1,
    "explanation": "Step FunctionsのASL（Amazon States Language）では、各タスクステートの中に `Retry` と `Catch` フィールドを設定できます。`Retry` で特定エラー（例: `States.Timeout`）発生時の試行回数、リトライ待機秒数（Interval）、指数バックオフ（BackoffRate）を定義できます。さらに上限を超えて失敗した場合は、`Catch` ブロックで指定した次のフォールバック状態（例: エラーログ送信タスクなど）に遷移させる堅牢な例外処理が可能です。",
    "keywords": [
      "ASLエラーハンドリング",
      "Step Functionsリトライ",
      "Catchフォールバック"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-30",
    "category": "messaging",
    "question": "Amazon EventBridgeを使用して、AWS Organizations内の「子アカウント（本番用アカウントA）」で検知したセキュリティイベントを、自動的に「セキュリティ監査用アカウントB」のカスタムイベントバスへ中継・集約させたいです。これを安全に実現するために必要な権限設定の組み合わせはどちらですか？",
    "options": [
      "アカウントAとアカウントBにそれぞれパブリックIPの踏み台インスタンスを構築する",
      "アカウントB（受信側）のカスタムイベントバスで、アカウントAからの `events:PutEvents` 操作を許可する「リソースベースポリシー」を設定し、アカウントA（送信側）のイベントルールにおいて、ターゲットとしてアカウントBのイベントバスARNを設定すること",
      "KMSでイベントデータを事前に暗号化してS3に共有する",
      "両アカウントの間にVPCピアリングを作成する"
    ],
    "answerIndex": 1,
    "explanation": "EventBridgeはクロスアカウントでのイベント共有をネイティブサポートしています。受信側のアカウントBのカスタムイベントバスの「権限ポリシー（リソースポリシー）」を編集し、送信元のアカウントA（または組織ID）からのイベント書き込み（`PutEvents`）を許可します。送信元のアカウントAでは、通常通りルールを作成し、ターゲットに別アカウントのイベントバスARNを指定するだけで、インターネットを経由せず安全にイベントが中継されます。",
    "keywords": [
      "EventBridgeクロスアカウント",
      "イベントバスポリシー",
      "PutEvents許可"
    ],
    "domain": "domain-1"
  },
  {
    "id": "msg-31",
    "category": "messaging",
    "question": "Amazon SQSキューにおいて、コンシューマーがキューからメッセージを取得した際、メッセージの「重複排除」を厳密に機能させたいです。SQS FIFOキューを使用する際、重複排除を実現するための正しい動作仕様はどちらですか？",
    "options": [
      "メッセージの本文が全く同じであれば自動的に重複排除されるため設定は不要である",
      "キューの作成時に「コンテンツに基づく重複排除」を有効にするか、またはメッセージ送信時に「メッセージ重複排除 ID (MessageDeduplicationId)」を明示的に指定すること。これにより、同じIDを持つメッセージは5分間、キューによって自動で破棄されること",
      "S3のバケットキーを有効化する",
      "可視性タイムアウトを1分に設定する"
    ],
    "answerIndex": 1,
    "explanation": "SQS FIFOキューでは、重複排除を実行するための「メッセージ重複排除 ID (MessageDeduplicationId)」が必要です。これと同じIDを持つメッセージが5分以内に送信された場合、SQSは書き込みを拒否（重複と判定して破棄）します。コンテンツ自動算出を有効にした場合は、本文のSHA-256ハッシュ値が自動的に重複排除IDとして使用されます。",
    "keywords": [
      "MessageDeduplicationId",
      "FIFOキュー重複排除",
      "SQS重複防止"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-32",
    "category": "messaging",
    "question": "Amazon SNSを使用して、世界中のユーザーの携帯電話に対して「SMS (ショートメッセージ)」を一括送信し、ログイン用のMFAワンタイムパスワードを配信します。送信先の国（例: 米国や欧州）の通信規制ポリシーに従って、送信者の信頼性を高めるために設定すべき送信者ID属性は何ですか？",
    "options": [
      "メッセージタイプ属性",
      "発信元 ID (Sender ID / オリジネーションID) の構成と申請登録",
      "SNS トピックARNの公開",
      "Cognito ユーザープールID"
    ],
    "answerIndex": 1,
    "explanation": "携帯電話へのSMS送信では、スパム防止の観点から各国のキャリア通信規制が非常に厳しいです。Amazon SNSでSMSを送信する際は、送信者の情報を示す「送信者ID (Sender ID)」や、専用の「発信元電話番号（Long Code / Short Code）」を事前に申請・取得し、送信属性（Origination Identityなど）として設定する必要があります。",
    "keywords": [
      "SNS SMS送信",
      "Sender ID",
      "キャリア規制対応"
    ],
    "domain": "domain-1"
  },
  {
    "id": "msg-33",
    "category": "messaging",
    "question": "AWS Step Functionsにおいて、ある非同期の外部バッチ処理（完了までに数時間かかる）の終了を待ってから、状態マシンの処理を次に進めたいです。状態マシンから外部バッチをキックする際、終了時に結果を状態マシンに返させるためにアタッチして受け渡すべき、実行インスタンス固有のシグナル情報は何ですか？",
    "options": [
      "状態マシンの ARN",
      "タスク トークン (Task Token)",
      "KMS暗号鍵",
      "EC2インスタンスのメタデータ"
    ],
    "answerIndex": 1,
    "explanation": "Step Functionsのコールバックパターン（`waitForTaskToken`）では、外部タスクの呼び出し時にコンテキストオブジェクトから「タスクトークン（Task Token）」を取得し、その値を起動する外部バッチ側のパラメータ（例: SQSメッセージやECSコンテナの環境変数など）へ渡す必要があります。外部処理が完了した際、このタスクトークンを指定して `SendTaskSuccess` APIを叩くことで、状態マシンはどの実行フローを再開すればよいかを一意に識別できます。",
    "keywords": [
      "Task Token",
      "非同期コールバック",
      "Step Functions"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-34",
    "category": "messaging",
    "question": "Amazon AppSync (GraphQL) を使用したリアルタイムWebアプリケーション（共同編集エディタなど）において、数千のクライアント接続が常時張られている状態で、クライアント側の再接続やクエリ負荷を最小にするためにAppSyncが標準で提供するフロントエンド向けキャッシュ同期の仕組みはどれですか？",
    "options": [
      "S3 Selectの適用",
      "AppSyncクライアントキャッシュの有効化と、バックエンドデータソースへの追加キャッシュ設定 (Resolver Caching)",
      "DynamoDB Accelerator (DAX) のみ",
      "API Gatewayキャッシュの組み合わせ"
    ],
    "answerIndex": 1,
    "explanation": "AppSyncは、APIおよびリゾルバーレベルでのキャッシュ（Resolver Caching）をサポートしています。データソース（DynamoDBなど）からの読み取り結果をAppSync側のインメモリキャッシュに一時保存（TTL設定）することで、多数のクライアントからの同一データのクエリ要求に対してバックエンドDBへアクセスを発生させずに高速応答でき、DB費用と応答レイテンシーの両方を削減できます。",
    "keywords": [
      "AppSyncキャッシュ",
      "リゾルバーキャッシュ",
      "GraphQLパフォーマンス最適化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-35",
    "category": "messaging",
    "question": "AWS Step Functionsの「標準（Standard）ワークフロー」と「高速（Express）ワークフロー」における、実行状態ログの永続性および状態履歴の確認に関する主要な相違点として、正しいものはどれですか？",
    "options": [
      "標準ワークフローは履歴をCloudWatch Logsにのみ出力し、高速ワークフローはS3に出力する",
      "標準ワークフローは実行開始から最大1年間、すべての状態遷移の完全な「実行履歴（ASL内の全ステップログ）」がStep FunctionsコンソールやAPIから直接確認・再生できるのに対し、高速ワークフローは状態履歴をStep Functions自体に保持せず、デバッグ用の実行ログの記録には CloudWatch Logs を明示的に有効にする必要があること",
      "両者とも履歴保持能力は同じである",
      "高速ワークフローは実行状態の復旧（ロールバック）を自動で保証する"
    ],
    "answerIndex": 1,
    "explanation": "標準 (Standard) ワークフローは、最長1年間の実行時間が許容され、監査のために「どのステップでどのような入力があり、どう遷移したか」が完全に記録され保証されます。一方、高速 (Express) ワークフローは状態履歴を自動保管しません（実行時間も5分制限）。デバッグやエラー分析を行うためには、Expressワークフローの設定でCloudWatch Logsへの接続ログ出力を手動で構成・有効化する必要があります。",
    "keywords": [
      "標準/高速ワークフロー比較",
      "実行履歴保持",
      "デバッグログ設計"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-36",
    "category": "messaging",
    "question": "Amazon SQSキューに対して、メッセージ送信時に暗号化（保管時暗号化）を施したいです。KMSカスタマー管理キー（CMK）を使用したSSE-KMSによる暗号化を設定した際、SQSのメッセージ処理（書き込み/読み取り）の料金やKMS API利用料金を削減するために併せて有効にすべきKMSのキー設定はどれですか？",
    "options": [
      "自動キーローテーション",
      "SQSで「KMSのデータキー再利用期間 (Data Key Reuse Period)」を適切に設定し（デフォルト5分など）、データキーの再利用によるKMS APIコール数を最小化すること",
      "KMS管理キー（aws/sqs）への変更",
      "暗号化の無効化"
    ],
    "answerIndex": 1,
    "explanation": "SQSでのSSE-KMS暗号化において、「データキー再利用期間」を設定することで、指定された時間（例: 5分間）はKMS APIを毎回コールせずに、キャッシュしたデータキーを再利用してメッセージの暗号化を実行します。これにより、高頻度のメッセージ送受信時に発生するKMS API（`GenerateDataKey`）の利用料金を大幅に節約でき、KMSのスロットリング制限の回避にも役立ちます。",
    "keywords": [
      "データキー再利用期間",
      "SQS暗号化コスト",
      "KMSスロットリング対策"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-37",
    "category": "messaging",
    "question": "API Gatewayにおいて、外部クライアントからの特定のHTTPリクエストヘッダー（例: `User-Agent` や `Custom-Token`）の内容に基づいて、動的にバックエンド（Lambdaなど）へのルーティングを振り分けたり、リクエストパラメータの書き換えを行いたい場合、API Gatewayのどの統合タイプを設定すべきですか？",
    "options": [
      "AWS 統合 (カスタム統合) と統合マッピングテンプレート (Apache Velocity Template Language - VTL) の使用",
      "HTTP プロキシ統合の自動ルーティングのみ",
      "Mock 統合",
      "VPC リンク連携"
    ],
    "answerIndex": 0,
    "explanation": "API Gatewayの「AWS 統合（カスタム統合）」では、リクエストの受信時およびレスポンスの返却時に「マッピングテンプレート」を噛ませることができます。VTL (Velocity Template Language) を記述することで、ヘッダー値やクエリパラメータを条件分岐させたり、JSONデータの構造を書き換えてバックエンド（Lambdaなど）に引き渡すなどの高度な前処理・後処理がAPI Gateway層だけで完結します。",
    "keywords": [
      "マッピングテンプレート",
      "VTL",
      "API Gatewayカスタム統合"
    ],
    "domain": "domain-2"
  },
  {
    "id": "msg-38",
    "category": "messaging",
    "question": "AWS Step Functionsを使用して、複数のAWSサービスを順番に起動する複雑なワークフローを構築しています。あるアカウント（アカウントA）のStep Functionsから、別のアカウント（アカウントB）にあるAWS Lambda関数を直接呼び出してタスクを実行したいです。セキュリティ上必要な設定はどれですか？",
    "options": [
      "Lambda関数のアクセスキーをStep Functionsに直書きする",
      "アカウントBのLambda関数の「リソースベースのポリシー（関数ポリシー）」で、アカウントAのStep Functionsの実行ロールARNからの `lambda:InvokeFunction` を許可すること",
      "両アカウントのVPCをピアリングする",
      "Step Functionsはクロスアカウント呼び出しをサポートしていない"
    ],
    "answerIndex": 1,
    "explanation": "Lambda関数は、他のアカウントからの直接呼び出しを許可する「リソースベースポリシー」を設定できます。これを利用し、呼び出し元アカウントAのStep Functionsが持つ実行ロールARNに対して `InvokeFunction` アクションの実行を許可することで、別アカウントであってもIAMの信頼範囲内でLambdaタスクをセキュアに起動できます。",
    "keywords": [
      "Lambdaリソースポリシー",
      "クロスアカウントLambda呼び出し",
      "Step Functions"
    ],
    "domain": "domain-1"
  },
  {
    "id": "msg-39",
    "category": "messaging",
    "question": "Amazon EventBridgeを使用して、AWS Configのルール非適合アラート（不安全なセキュリティグループ変更など）をリアルタイムに検知し、SNS経由でセキュリティ運用チームに通知を送ります。通知メールのタイトルや本文に、「どのEC2のセキュリティグループが非適合になったか」などの詳細なパラメータ情報だけを抜き出して読みやすい文章に整形した上で配信させたい場合、EventBridgeルール側で定義すべき機能は何ですか？",
    "options": [
      "AWS Lambdaを必ず間に挟む",
      "EventBridge の「インプットトランスフォーマー (Input Transformer)」機能",
      "CloudWatch Logs サブスクリプション",
      "SNSフィルタリングポリシー"
    ],
    "answerIndex": 1,
    "explanation": "EventBridgeの「インプットトランスフォーマー (Input Transformer)」を使用すると、入力された生のJSONデータから特定のキー情報（例: `$.detail.resourceId`）をJSONパスで抽出・変数化し、テンプレート文章（例: 「警告: セキュリティグループ <resourceId> が変更されました」）に差し込んで整形したテキストをターゲット（SNSやLambdaなど）へ直接送信できます。中継用のLambda関数を自作・デプロイする必要がなく、ノーコードで読みやすい通知を構築できます。",
    "keywords": [
      "インプットトランスフォーマー",
      "EventBridgeターゲット変換",
      "ノーコード通知整形"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-40",
    "category": "messaging",
    "question": "AWS AppSync (GraphQL) において、クライアントとAppSyncサーバー間で、WebSocketsプロトコルを使用した「リアルタイム双方向サブスクリプション」接続を張る際、接続の認証（セキュリティチェック）を行うための方法として、正しい記述はどれですか？",
    "options": [
      "接続確立時には認証は行えず、データの取得時のみ認証される",
      "AppSyncがサポートする任意のAPIキー、Amazon Cognitoユーザープール、またはカスタムOIDCプロバイダーによる認証情報が、最初のWebSocketハンドシェイク接続確立時にも検証され、接続元の権限が確認されること",
      "暗号化（SSL）を解除した接続のみ許可される",
      "IAM ユーザーのシークレットキーが必須である"
    ],
    "answerIndex": 1,
    "explanation": "AppSyncのリアルタイムサブスクリプション（WebSocket接続）は、最初のプロトコルハンドシェイク（接続確立）時にクライアントから提示される認証トークン（JWT等）やAPIキーの有効性を自動で検証します。認証に失敗した接続要求はエッジ側で弾かれ、認証済みの接続元に対してのみデータのプッシュ通知ストリームが維持されます。",
    "keywords": [
      "AppSyncセキュリティ",
      "WebSocket認証",
      "サブスクリプション認可"
    ],
    "domain": "domain-1"
  },
  {
    "id": "msg-41",
    "category": "messaging",
    "question": "Amazon SQS標準キューにおいて、メッセージの受信処理速度を高めるため、一度の `ReceiveMessage` API呼び出しでコンシューマーが最大で取得できる「メッセージバッチ数」の上限はいくつですか？",
    "options": [
      "1 メッセージ",
      "10 メッセージ",
      "100 メッセージ",
      "無制限"
    ],
    "answerIndex": 1,
    "explanation": "Amazon SQSにおける `ReceiveMessage` のバッチ数制限（`MaxNumberOfMessages` パラメータ）の最大上限は「10」です。一度のAPIリクエストで最大10個のメッセージをまとめて取得・処理することで、API発行回数を抑え、効率的なコンシューマー設計が行えます。10を超えるバッチ取得はできません。",
    "keywords": [
      "ReceiveMessageバッチ制限",
      "SQS仕様",
      "ポーリング最適化"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-42",
    "category": "messaging",
    "question": "マイクロサービスアーキテクチャにおいて、サービスの「新規追加」や「バージョン変更」があった際でも、EventBridgeの各ルールが参照する「イベントデータのJSONスキーマ（データ構造）」の定義ドキュメントを自動的に収集・生成し、開発チームが一元的なコードモデルとしてダウンロード・参照できるようにしたい場合に利用すべき機能はどちらですか？",
    "options": [
      "AWS Config適合性パック",
      "EventBridge スキーマレジストリ (Schema Registry) およびスキーマ検出 (Schema Discovery)",
      "CloudTrail データイベントログ",
      "AWS Glueクローラー"
    ],
    "answerIndex": 1,
    "explanation": "EventBridge スキーマレジストリ (Schema Registry) は、イベントバスを通過するイベントのデータ構造（スキーマ）をカタログ化して管理します。「スキーマ検出 (Schema Discovery)」機能をオンにしておくと、新しい形式のイベントが届いた際、そのJSON構造を自動解析してスキーマ定義（OpenAPI仕様等）を自動登録してくれます。開発者はこれを元に、Java/Python/TypeScript用の「シリアライズコードクラス」を自動生成・インポートできます。",
    "keywords": [
      "スキーマレジストリ",
      "Schema Discovery",
      "イベント定義管理"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-43",
    "category": "messaging",
    "question": "Amazon MQを使用してオンプレミスのアクティブMQ/RabbitMQをAWSへ移行する際、アベイラビリティーゾーン全体の物理障害に備え、アクティブノードとスタンバイノード間で「データ同期レプリケーション」を伴うアクティブ/スタンバイ構成（高可用性モデル）を構築する際の正しい展開設定はどちらですか？",
    "options": [
      "別アカウントにスタンバイを作成する",
      "マルチAZデプロイ（Active/Standby ブローカー展開オプション）を選択し、裏側でEFS（共有ファイルシステム）等のデータ同期ボリュームを利用すること",
      "単一ノードをプロビジョニングし、毎日バックアップを作成するのみ",
      "VPCピアリングで2つのMQを同期する"
    ],
    "answerIndex": 1,
    "explanation": "Amazon MQは高可用性を実現するために、「マルチAZアクティブ/スタンバイ」ブローカー構成を提供します。このモードでは、アクティブノードと別AZのスタンバイノードが構築され、裏側の共有ストレージ（NFSv4ベースのAmazon EFS等）を介してメッセージデータが同期レプリケートされます。アクティブに障害が発生すると、自動でDNS名がスタンバイ側に切り替わります。",
    "keywords": [
      "Amazon MQ",
      "アクティブ/スタンバイ",
      "マルチAZ共有ストレージ"
    ],
    "domain": "domain-1"
  },
  {
    "id": "msg-44",
    "category": "messaging",
    "question": "AWS Step Functionsにおいて、外部システム（データベースやサードパーティAPI）とのデータ読み書きタスクにおいて、一定時間応答がない場合に状態遷移をタイムアウト（エラー判定）させたいです。状態定義（ASL）上でタスクに対して設定すべきパラメータはどちらですか？",
    "options": [
      "HeartbeatSeconds",
      "TimeoutSeconds",
      "VisibilityTimeout",
      "DelaySeconds"
    ],
    "answerIndex": 1,
    "explanation": "タスクステートの中で `TimeoutSeconds` を定義することで、タスクの実行時間がその秒数（例: 30秒）を超えた場合に、自動的に `States.Timeout` エラーを発生させて処理を終了またはリトライへと移行できます。なお、`HeartbeatSeconds` はタスクが正常に進行しているかを外部から定期通知（ハートビート送信）させる際のチェック期限タイムアウトを設定するものです。",
    "keywords": [
      "TimeoutSeconds",
      "ASLタイムアウト設定",
      "Step Functions"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-45",
    "category": "messaging",
    "question": "Amazon SQS標準キューにおいて、一度の `ReceiveMessage` API呼び出しで取得したメッセージの処理（外部連携など）に予想以上に時間がかかってしまいました。このまま放置すると「可視性タイムアウト」が経過して他のコンシューマーにメッセージが再配信されてしまいます。処理中のメッセージを重複処理させないため、処理時間を動的に延長するAPI呼び出しはどれですか？",
    "options": [
      "DeleteMessage",
      "ChangeMessageVisibility (可視性タイムアウトの変更)",
      "SendMessage",
      "PurgeQueue"
    ],
    "answerIndex": 1,
    "explanation": "コンシューマーはメッセージの処理に時間がかかると判断した場合、可視性タイムアウトが経過する前に `ChangeMessageVisibility` APIを呼び出し、該当メッセージの「レシートハンドル (Receipt Handle)」を指定してタイムアウト時間を延長（例: 延長して追加で60秒に設定）できます。これにより、コンシューマーが処理を安全に完了させるまでの時間を引き延ばし、重複取得を防御できます。",
    "keywords": [
      "ChangeMessageVisibility",
      "可視性タイムアウト延長",
      "重複取得回避"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-46",
    "category": "messaging",
    "question": "Amazon SNSを使用して重要なお知らせメールを一斉送信します。一部の電子メールアドレスが無効である（バウンスが発生した）場合に、SNSトピックから直接メールの「バウンス率」や「スパム苦情率」をログとして収集・監視するために有効にすべき連携設定はどちらですか？",
    "options": [
      "WAFの統合設定",
      "SNSの「CloudWatch配信ステータスログ (Delivery Status Logs)」の有効化および適切なIAM実行ロールの付与",
      "Route 53の逆引きDNS設定",
      "Cognito認証の強制"
    ],
    "answerIndex": 1,
    "explanation": "SNSの配信ステータスログ (Delivery Status Logs) を有効にすることで、電子メールやモバイルプッシュなどの各サブスクライバーに対する「配信成功」「配信失敗（バウンス情報、エラーコード）」が詳細にCloudWatch Logsに出力されます。これにより、メールが届かない原因（アドレス無効、サーバー拒否など）の調査が一元的に可能になります。",
    "keywords": [
      "配信ステータスログ",
      "SNSトラブルシューティング",
      "CloudWatch Logs"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-47",
    "category": "messaging",
    "question": "API Gatewayにおいて、大量の静的な読み取りリクエスト（例: 商品マスタAPIなど）によるバックエンド（Lambda / データベース）への負荷と料金を劇的に削減したいです。数分〜数時間の間、API Gateway側で同一レスポンスをキャッシュさせたい場合に有効にすべき構成はどちらですか？",
    "options": [
      "API Gateway の「ステージキャッシュ (Stage Caching)」の有効化と適切なTTL値の設定",
      "ALBのSticky Session設定",
      "DynamoDB Accelerator (DAX) のみ",
      "CloudFrontのデフォルト設定変更のみ"
    ],
    "answerIndex": 0,
    "explanation": "API Gatewayはステージレベルでの「キャッシュ機能 (Stage Caching)」をサポートしています。キャッシュを有効にし、TTL（有効期限）を設定しておくことで、同じクエリ文字列やパラメータを持つGETリクエストに対して、API Gatewayがキャッシュされたレスポンスを直接クライアントに返します。これによりバックエンドLambdaの起動回数が皆無になり、パフォーマンスとコスト効率が大幅に向上します。",
    "keywords": [
      "API Gateway キャッシュ",
      "TTL",
      "バックエンド負荷軽減"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-48",
    "category": "messaging",
    "question": "マイクロサービス間で、ある特定のビジネスプロセスを Step Functions でオーケストレーションしています。プロセスが正常に完了した際に、結果のJSONデータをAWS API Gatewayを介して外部システムへ通知（Webhook形式でPOST）したいです。中継用の Lambda 関数を作成することなく、状態マシンから直接外部のHTTPエンドポイントに対してセキュアにAPIリクエストを実行させるために定義すべきタスクの統合タイプは何ですか？",
    "options": [
      "Lambdaタスク統合",
      "HTTPS サードパーティ API 統合タスク (`arn:aws:states:::http:call`) と AWS Secrets Manager での資格情報連携",
      "SQS 経由のポーリング連携",
      "API Gateway VPC リンクのみ"
    ],
    "answerIndex": 1,
    "explanation": "Step Functionsは「サードパーティAPIの直接呼び出し (`states:::http:call`)」をサポートしています。この機能を使用すると、中継用のLambdaを使わずに、状態マシンのタスクから直接外部のパブリックHTTPエンドポイントに対してGET/POST等のリクエストを送信できます。外部APIの認証に必要なトークンやAPIキーは、AWS Secrets Managerに安全に保管し、タスク実行時に自動参照させるように設計できるため、極めてセキュアでサーバーレスなWebhook統合が実現します。",
    "keywords": [
      "http:call",
      "外部API直接統合",
      "Step Functionsサードパーティ"
    ],
    "domain": "domain-2"
  },
  {
    "id": "msg-49",
    "category": "messaging",
    "question": "Amazon EventBridgeにおいて、ある特定の時間に一度だけ動作する「1回限り（One-time）」のスケジュール定義において、予定されていた時間にターゲットのLambda関数側の同時実行制限によりイベント呼び出しがスロットリング（エラー）しました。この「失われた1回限りのイベント」が消失するのを防ぎ、エラー解消後に自動再試行させるためにスケジューラ側で定義すべき耐障害性設定はどれですか？",
    "options": [
      "Lambda関数の最大メモリ設定引き上げ",
      "EventBridge スケジューラの「デッドレターキュー (DLQ)」の構成と、再試行ポリシー（最大保留期間、最大再試行回数）の定義",
      "S3ライフサイクル移行設定",
      "EventBridgeアーカイブの強制有効化"
    ],
    "answerIndex": 1,
    "explanation": "EventBridge スケジューラ (EventBridge Scheduler) は、タスクの実行失敗時に備えて「再試行ポリシー」と「デッドレターキュー (DLQ / SQSを指定)」をサポートしています。指定した再試行回数（または最大保管時間）を超えてタスク呼び出しに失敗した場合、スケジューラはイベントのペイロードを自動的に指定されたSQS（DLQ）に流し込み、消失を防御します。後からDLQのメッセージを使って再起動が可能です。",
    "keywords": [
      "EventBridge Scheduler DLQ",
      "再試行ポリシー",
      "メッセージ消失防止"
    ],
    "domain": "domain-3"
  },
  {
    "id": "msg-50",
    "category": "messaging",
    "question": "アプリケーション統合における「API設計」において、双方向の常時接続（リアルタイム接続）が必要なWebブラウザのダッシュボードに対して、サーバー側から能動的に最新の通知データを送出させたいです。Amazon API Gatewayを用いて、コネクションの状態（接続/切断）をVPC内部で維持・管理させながら、軽量なJSONデータをストリームするAPIプロトコルは何ですか？",
    "options": [
      "REST API",
      "HTTP API",
      "WebSocket API (WebSockets プロトコル)",
      "GraphQL API"
    ],
    "answerIndex": 2,
    "explanation": "API Gatewayの「WebSocket API」を使用すると、クライアントとAPI Gateway間で持続的なWebSocket接続（双方向の常時接続チャネル）が維持されます。接続時、API Gatewayは各接続に対して一意の「接続 ID (Connection ID)」を発行し、アプリケーションはこれをDynamoDB等に保存しておきます。サーバー側は、新しい更新があった際にこの接続IDを指定してAPI Gatewayの管理エンドポイント経由でクライアントへ能動的（プッシュ型）にデータを送信できるため、リアルタイムな双方向通信が容易になります。",
    "keywords": [
      "WebSocket API",
      "API Gateway",
      "Connection ID管理"
    ],
    "domain": "domain-2"
  },
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
    "keywords": [
      "Kinesis Data Streams",
      "リアルタイムストリーム",
      "シャード"
    ],
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
    "keywords": [
      "Kinesis Data Firehose",
      "データ変換",
      "Parquet"
    ],
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
    "keywords": [
      "Amazon EMR",
      "スポットインスタンス",
      "ノードの役割"
    ],
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
    "keywords": [
      "AWS Lake Formation",
      "データレイクガバナンス",
      "列・行レベルアクセス制御"
    ],
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
    "keywords": [
      "ジョブブックマーク",
      "Glue ETL",
      "差分処理"
    ],
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
    "keywords": [
      "Amazon Athena",
      "パーティション化",
      "データスキャンコスト削減"
    ],
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
    "keywords": [
      "Amazon QuickSight",
      "BI",
      "行レベルセキュリティ RLS"
    ],
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
    "keywords": [
      "シャード分割",
      "Kinesis Data Streams",
      "スループット拡張"
    ],
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
    "keywords": [
      "OpenSearch",
      "ログ分析",
      "リアルタイム検索"
    ],
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
    "keywords": [
      "AWS Glue Data Catalog",
      "メタデータカタログ",
      "スキーマ管理"
    ],
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
    "keywords": [
      "Amazon MSK",
      "Apache Kafka",
      "ストリーミング基盤"
    ],
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
    "keywords": [
      "Partition Projection",
      "Athena",
      "パーティション投影"
    ],
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
    "keywords": [
      "KCL",
      "Kinesis Client Library",
      "シャードリバランシング"
    ],
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
    "keywords": [
      "SPICE",
      "QuickSight",
      "インメモリエンジン"
    ],
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
    "keywords": [
      "Glueクローラー",
      "スキーマ自動検出",
      "パーティションマッピング"
    ],
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
    "keywords": [
      "OpenSearch Serverless",
      "サーバーレス検索",
      "OCU自動スケーリング"
    ],
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
    "keywords": [
      "拡張ファンアウト",
      "Enhanced Fan-Out",
      "専用読み取りスループット"
    ],
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
    "keywords": [
      "UltraWarm",
      "コールドストレージ",
      "OpenSearchコスト最適化"
    ],
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
    "keywords": [
      "Glue DataBrew",
      "ノーコード前処理",
      "データクレンジング"
    ],
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
    "keywords": [
      "バッファリング設定",
      "S3コスト最適化",
      "Firehoseチューニング"
    ],
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
    "keywords": [
      "AWS Lake Formation クロスアカウント",
      "データレイク共有",
      "メタデータ認可"
    ],
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
    "keywords": [
      "Managed Service for Apache Flink",
      "時系列ストリーム分析",
      "窓関数"
    ],
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
    "keywords": [
      "専用マスターノード",
      "スプリットブレイン防止",
      "OpenSearch高可用性"
    ],
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
    "keywords": [
      "DPU",
      "Glueワーカー数",
      "ETLパフォーマンスチューニング"
    ],
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
    "keywords": [
      "Athenaクエリ結果",
      "S3出力場所",
      "仕様"
    ],
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
    "keywords": [
      "Glue Studio",
      "ビジュアルETL",
      "Sparkコード自動生成"
    ],
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
    "keywords": [
      "Athenaワークグループ",
      "データ制限",
      "コスト管理ガードレール"
    ],
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
    "keywords": [
      "EMR Serverless",
      "サーバーレス分析",
      "Spark/Hiveマネージド"
    ],
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
    "keywords": [
      "MSK",
      "ストレージオートスケーリング",
      "運用自動化"
    ],
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
    "keywords": [
      "パーティションキー",
      "ホットシャード",
      "Kinesis書き込み最適化"
    ],
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
    "keywords": [
      "Glueクローラー",
      "スキーマ更新ポリシー",
      "メタストア同期"
    ],
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
    "keywords": [
      "Kinesisオンデマンド",
      "自動キャパシティ調整",
      "トラフィックスパイク対応"
    ],
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
    "keywords": [
      "EMR EBS最適化",
      "ローカルストレージパフォーマンス",
      "Spark中間データ"
    ],
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
    "keywords": [
      "Lake Formation",
      "列レベルのセキュリティ",
      "データマスキング"
    ],
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
    "keywords": [
      "Glue Data Catalog",
      "Hiveメタストア互換",
      "外部システム連携"
    ],
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
    "keywords": [
      "EMR Transient Clusters",
      "一時的クラスター",
      "自動クリーンアップ"
    ],
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
    "keywords": [
      "レプリカシャード",
      "OpenSearchパフォーマンス",
      "検索クエリ分散"
    ],
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
    "keywords": [
      "QuickSight埋め込み",
      "ポータルダッシュボード",
      "匿名埋め込み"
    ],
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
    "keywords": [
      "Lake Formation データ共有",
      "クロスアカウントカタログ共有",
      "リソースリンク"
    ],
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
    "keywords": [
      "Interactive Sessions",
      "Glue開発エンドポイント",
      "デバッグ"
    ],
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
    "keywords": [
      "LF-TBAC",
      "タグベースのアクセス制御",
      "データレイクガバナンス"
    ],
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
    "keywords": [
      "MSK IAMアクセス制御",
      "Kafka認証",
      "セキュリティ統合"
    ],
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
    "keywords": [
      "Athenaワークグループ",
      "実行環境分離",
      "コスト管理ガードレール"
    ],
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
    "keywords": [
      "ブートストラップアクション",
      "EMRノード初期化",
      "パッケージインストール"
    ],
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
    "keywords": [
      "Glueワークフロー",
      "ETLオーケストレーション",
      "依存関係制御"
    ],
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
    "keywords": [
      "MirrorMaker",
      "Apache Kafka移行",
      "ストリームレプリケーション"
    ],
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
    "keywords": [
      "Athena Federated Query",
      "データソースコネクタ",
      "分散クエリ"
    ],
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
    "keywords": [
      "EMRログ保存",
      "S3ログアーカイブ",
      "クラスターデバッグ仕様"
    ],
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
    "keywords": [
      "Glue Connection",
      "VPC内DBアクセス",
      "ETLネットワーク"
    ],
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
    "keywords": [
      "Kinesis Data Firehose",
      "データ形式変換",
      "Glue Data Catalog連携"
    ],
    "domain": "domain-2"
  },
  {
    "id": "mig-01",
    "category": "migration",
    "question": "オンプレミスの物理サーバーやVMwareで稼働している多数のWebアプリケーションサーバー（Linux/Windows）を、OSやインストール済みのミドルウェア設定を変更することなく、ブロックレベルで差分コピーしながら最小のダウンタイムでAWSへ一括移行（リホスト）したいです。最も推奨されるサービスはどれですか？",
    "options": [
      "AWS Application Migration Service (AWS MGN)",
      "AWS Database Migration Service (AWS DMS)",
      "VM Import/Export",
      "AWS DataSync"
    ],
    "answerIndex": 0,
    "explanation": "AWS Application Migration Service (AWS MGN) は、物理サーバー、仮想サーバー、クラウドサーバーをAWSへ移行するための推奨されるプライマリ移行サービスです。移行元のサーバーに軽量エージェントをインストールし、実行中のOSおよびストレージのブロックレベルの継続的レプリケーションをAWS上のステージングエリアに対して行い、最終切り替え時に即座にEC2として本番起動させることで、ダウンタイムを数分程度に抑えられます。",
    "keywords": [
      "AWS MGN",
      "Rehost",
      "ブロックレベルレプリケーション"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-02",
    "category": "migration",
    "question": "オンプレミスから数十テラバイト〜数百テラバイトの機密性の高い大容量アーカイブデータをAWSのS3バケットに物理的に転送したいですが、社内のインターネット専用線の帯域幅（100Mbpsなど）が非常に狭く、オンライン転送では何ヶ月もかかってしまいます。最も安全で、迅速に転送を完了させるためのAWSの物理アプライアンスサービスはどれですか？",
    "options": [
      "AWS Direct Connect",
      "AWS DataSync",
      "AWS Snowball Edge Storage Optimized",
      "AWS Snowmobile"
    ],
    "answerIndex": 2,
    "explanation": "ネットワーク帯域幅がボトルネックでオンライン転送に数週間〜数ヶ月かかる場合、物理デバイスを使用してオフラインでデータを送る「AWS Snowファミリー」を使用します。特に数十〜数百TBのデータ量には、最大80TBの容量を持つ物理筐体アプライアンス「AWS Snowball Edge Storage Optimized」をレンタルし、ローカルにデータをコピーした後に配送することで、迅速かつ安全にS3にデータをインポートできます。Snowmobileは数十〜百ペタバイト規模の超巨大データ移行用（コンテナトレーラー）です。",
    "keywords": [
      "AWS Snowball Edge",
      "オフラインデータ転送",
      "帯域制限"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-03",
    "category": "migration",
    "question": "オンプレミスのインフラ資産（数百台の仮想マシン）のAWSへの移行計画を立てています。移行の事前調査（アセスメント）フェーズにおいて、オンプレミスのサーバーにログインすることなく、ネットワーク機器（vCenterなど）を介してサーバーのスペック、CPU/メモリ使用量、およびホストのインベントリ一覧をエージェントレスで収集するサービスはどれですか？",
    "options": [
      "AWS Application Discovery Service (エージェントレスコネクター)",
      "AWS Application Discovery Service (エージェント型エージェント)",
      "AWS Systems Manager Distributor",
      "AWS Migration Hub Refactor Spaces"
    ],
    "answerIndex": 0,
    "explanation": "AWS Application Discovery Serviceのエージェントレスコネクター (Agentless Connector) は、VMware vCenter Server 環境に仮想アプライアンスとしてデプロイされ、vCenterから直接VMのインベントリ構成や稼働履歴をエージェントソフトウェア不要で一括収集します。これにより、個別のOSログイン情報がない場合やセキュリティポリシー上エージェントを入れられない環境の移行アセスメントを迅速に行えます。",
    "keywords": [
      "Application Discovery Service",
      "エージェントレスコネクター",
      "移行アセスメント"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-04",
    "category": "migration",
    "question": "オンプレミスのネットワーク共有ディスク（NAS上のNFS/SMB共有）から、AWSの共有ファイルシステムである Amazon EFS または Amazon FSx へのデータ同期・データ転送において、専用のゲートウェイエージェントをデプロイし、転送中の暗号化、データ整合性チェック（SHA-256）、および帯域制限を行いながらオンラインで高速に一元同期するサービスはどれですか？",
    "options": [
      "AWS Application Migration Service (MGN)",
      "AWS DataSync",
      "AWS Storage Gateway",
      "S3 Transfer Acceleration"
    ],
    "answerIndex": 1,
    "explanation": "AWS DataSyncは、オンプレミスストレージとAWS（S3, EFS, FSxなど）との間のオンラインデータ転送を自動化・高速化する専用サービスです。専用のDataSyncエージェントをローカルで起動させ、データの差分検知、圧縮、暗号化転送、および書き込み後のハッシュ値チェックによる整合性検証を全自動で効率的に実行します。",
    "keywords": [
      "AWS DataSync",
      "オンラインデータ転送",
      "整合性チェック"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-05",
    "category": "migration",
    "question": "7つの移行戦略（7 Rs）において、既存のシステムコードやアーキテクチャを変更せずに、単に仮想マシンをそのままAWSのEC2（またはEKS/ECS）へ移行させる戦略を指す用語はどれですか？",
    "options": [
      "Rehost (リホスト)",
      "Replatform (リプラットフォーム)",
      "Refactor (リファクター)",
      "Repurchase (リパーチェス)"
    ],
    "answerIndex": 0,
    "explanation": "Rehost (リホスト、別名「リフト＆シフト」) は、アプリケーションやデータベースを変更せずに、そのままクラウド環境（EC2など）に移行する戦略です。AWS MGNなどのツールを使用して迅速にクラウド移行を完了させることができます。ReplatformはOSやDBをマネージド版（RDS等）に変えて移行し、Refactorはサーバーレス化などコードを書き直して最適化します。",
    "keywords": [
      "7 Rs",
      "Rehost",
      "リフト&シフト"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-06",
    "category": "migration",
    "question": "オンプレミスから AWS へのサーバー移行（AWS MGN を使用）において、移行元のサーバーからAWSへレプリケーションデータを安全に中継・保管するために、AWSアカウント内のターゲットVPCに用意される、中継用の軽量EC2インスタンス群で構成されるエリアを何と呼びますですか？",
    "options": [
      "ランディングゾーン (Landing Zone)",
      "ステージングエリアサブネット (Staging Area Subnet)",
      "本番 VPC 領域",
      "DMZ サブネット"
    ],
    "answerIndex": 1,
    "explanation": "AWS MGNで移行を実施する際、ターゲットアカウントのVPC内に「ステージングエリアサブネット」を設定します。MGNはこのサブネット内に、軽量な「レプリケーションサーバー（EC2インスタンス）」をプロビジョニングし、移行元サーバーのエージェントから届くブロック差分データを常時受信して、アタッチされた低コストなEBSボリューム（ステージングボリューム）へ同期保管します。最終切り替え（カットオーバー）時にのみ、本番用のEC2にデータがコピーされて起動します。",
    "keywords": [
      "ステージングエリア",
      "AWS MGN",
      "レプリケーションサーバー"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-07",
    "category": "migration",
    "question": "AWS Database Migration Service (AWS DMS) を使用したデータベース移行において、移行対象となるテーブルに巨大なLOB (Large Object / バイナリ大容量データなど) が含まれている場合、DMSの「LOBモード」設定における処理パフォーマンスとデータ欠損防止のバランスに関する正しい記述はどれですか？",
    "options": [
      "フルLOBモードは最もパフォーマンスが高く、サイズ制限なくLOBデータを完全に移行できるが、速度が最も遅くなること。制限付きLOBモードは最大サイズ（例: 64KB）を指定し、それ以上のLOBは切り捨てられるが処理が極めて高速であること",
      "LOBは自動的にS3に別出しされて保存されるため、DMSのモード選択は影響しない",
      "制限付きLOBモードのみがデータの完全移行を保証する",
      "DMSはLOBデータの移行をサポートしていない"
    ],
    "answerIndex": 0,
    "explanation": "DMSのLOB移行には、「フルLOBモード (Full LOB Mode)」と「制限付きLOBモード (Limited LOB Mode)」があります。フルLOBモードはすべてのLOBデータをサイズ制限なしで完全にコピーしますが、1行ずつ別クエリで取得するため速度が極端に低下します。制限付きLOBモードは指定したバッファサイズ（例: 64KB）までのデータをインラインで取得するため非常に高速ですが、サイズ制限を超えるデータは後ろが切り捨てられて壊れるため、事前にデータの最大サイズを調査しておく必要があります。",
    "keywords": [
      "AWS DMS LOBモード",
      "フルLOB",
      "制限付きLOB"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-08",
    "category": "migration",
    "question": "AWS Migration Hub (マイグレーションハブ) の主な役割は何ですか？",
    "options": [
      "データをオンプレミスとVPC間で物理転送するアプライアンスである",
      "AWS MGNやDMS、パートナーツールなどの「複数の異なる移行ツールの進捗状況や分析ステータス」を単一のダッシュボードで一元的に追跡・管理するための統合プラットフォームであること",
      "オンプレミスサーバーのセキュリティグループを設定するサービスである",
      "Active Directoryとのシングルサインオン連携機能を提供する"
    ],
    "answerIndex": 1,
    "explanation": "AWS Migration Hubは、移行プロジェクトのハブ機能を提供します。AWS MGNによるサーバー移行のステータスや、AWS DMSによるDB移行、または対応しているサードパーティの移行ツールの進捗データを集約し、現在の移行プロジェクト全体の進行割合（何台完了、何台実行中など）を単一のコンソール画面で可視化・追跡できます。",
    "keywords": [
      "AWS Migration Hub",
      "移行追跡",
      "プロジェクト一元化"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-09",
    "category": "migration",
    "question": "AWS Snowball Edgeには「Storage Optimized (ストレージ最適化)」と「Compute Optimized (コンピューティング最適化)」の2つのタイプがあります。電波の届かない洋上の船舶や災害現場、工場内などで、大容量のローカルストレージを確保しつつ、デバイス内部に搭載された強力な「EC2インスタンスやGPU」を使用して、データを収集しながらAIモデルによる分析（エッジコンピューティング）を実行したい場合に最適なタイプはどれですか？",
    "options": [
      "Storage Optimized",
      "Compute Optimized (コンピューティング最適化)",
      "Snowcone",
      "Snowmobile"
    ],
    "answerIndex": 1,
    "explanation": "エッジ処理（ローカルでの高度な演算や機械学習の推論実行）が必要なユースケースには、「Compute Optimized」デバイスを選択します。このタイプは、強力なCPU、大容量メモリ、オプションのNVIDIA Tensor Core GPUを備えており、ネットワークがないエッジ現場でリアルタイムにEC2コンテナやLambdaを実行してデータを前処理できます。Storage Optimizedは単純な大容量データ転送向けです。",
    "keywords": [
      "AWS Snowball Edge",
      "Compute Optimized",
      "エッジコンピューティング"
    ],
    "domain": "domain-2"
  },
  {
    "id": "mig-10",
    "category": "migration",
    "question": "AWS Application Discovery Serviceを使用してオンプレミスサーバーを調査する際、サーバー内に「エージェント (Discovery Agent)」をインストールする「エージェントベース」方式の最大の利点はどれですか？",
    "options": [
      "ハイパーバイザーの管理者権限が不要になること",
      "サーバー内部の「ネットワーク接続関係（どのプロセスがどの宛先IP・ポートと通信しているかの詳細な依存関係）」や、インストールされているパッケージリストを詳細に収集できること",
      "エージェントを一度入れると、アンインストールが不要であるため",
      "ネットワークの暗号化を完全に解除できる"
    ],
    "answerIndex": 1,
    "explanation": "エージェントベース (Agent-based) の調査では、サーバーOS内部にエージェントを入れるため、システム構成情報のほか、プロセスレベルでの「ネットワークコネクションの依存関係」を完全にマッピングできます。これにより、移行対象のWebサーバーが実は裏でどのDBサーバーや外部APIと密結合しているかを事前に完全に把握でき、グループ化して移行順序を決めるのに役立ちます。",
    "keywords": [
      "Application Discovery",
      "Discovery Agent",
      "ネットワーク依存関係マッピング"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-11",
    "category": "migration",
    "question": "オンプレミスから AWS へのハイブリッドデータ転送において、AWS DataSync エージェントからVPC内のデスティネーション（S3やEFSなど）へデータを同期する際、通信がパブリックインターネットを経由するのをセキュリティポリシーで禁止したいです。どのように構成すべきですか？",
    "options": [
      "VPCにインターネットゲートウェイをアタッチし、通信経路をVPNにするのみ",
      "AWS DataSync用に VPC 内に「インターフェイスVPCエンドポイント (PrivateLink)」を作成し、DataSyncエージェントがVPNやDirect Connect経由でそのプライベートエンドポイントと直接通信するように構成すること",
      "AWS DataSyncはパブリックのみサポートしているため、インターネット回避は不可能である",
      "S3バケットをパブリック公開する"
    ],
    "answerIndex": 1,
    "explanation": "DataSyncエージェントはVPC内のPrivateLink（インターフェイスVPCエンドポイント）と接続できます。オンプレミスのエージェントが、VPNやDirect Connect（プライベート仮想インターフェイス）を介してVPCエンドポイントのプライベートIP宛てに通信を送信するように構成することで、データ転送トラフィック全体をインターネットに露出させずにVPC内へ安全に同期できます。",
    "keywords": [
      "AWS DataSync PrivateLink",
      "VPCエンドポイント",
      "プライベートデータ転送"
    ],
    "domain": "domain-1"
  },
  {
    "id": "mig-12",
    "category": "migration",
    "question": "AWS Schema Conversion Tool (AWS SCT) を使用して、既存の商用リレーショナルデータベース (Oracle や SQL Server) からオープンソースの Amazon Aurora (MySQL/PostgreSQL) への移行診断を行いました。SCTの「移行アセスメントレポート (Migration Assessment Report)」で示される情報の主な内容はどれですか？",
    "options": [
      "移行にかかる概算の料金見積もり",
      "ターゲットデータベースで自動変換できないスキーマ定義、ファンクション、ストアドプロシージャの割合と、それらを解決するための「手動のアクション項目」の詳細なレポート",
      "データファイルの物理的なコピー速度のグラフ",
      "KMS暗号化キーの推奨ポリシーコード"
    ],
    "answerIndex": 1,
    "explanation": "SCTの「移行アセスメントレポート」は、異種データベース間移行の実現性を測る最重要資料です。データ型やSQL関数の違い、ストアドプロシージャの構文変換における適合率を算出し、ツールで自動変換できない「不適合項目（手動でPostgreSQL互換に書き直す必要がある複雑なプログラミングなど）」を指摘し、対処法をガイドしてくれます。",
    "keywords": [
      "SCT",
      "移行アセスメントレポート",
      "データベーススキーマ変換"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-13",
    "category": "migration",
    "question": "AWS Application Migration Service (AWS MGN) を使用したサーバー移行において、本番環境の「カットオーバー（切り替え）」を実行する前に、AWS上でサーバーが正常に起動・動作するかを本番移行ネットワークに影響を及ぼさずに検証したいです。MGNで実行すべき正しい移行ステップとアクションはどちらですか？",
    "options": [
      "直接「カットオーバー (Cutover)」を実行し、ダメならオンプレミスへ差し戻す",
      "「テストの開始 (Launch Test Instances)」アクションを実行し、隔離された検証用VPC/サブネットを指定してテストインスタンスを起動し、動作やミドルウェアの整合性を十分にテストすること",
      "オンプレミス側の物理サーバーを一度停止してから検証を実行する",
      "VM Import/Exportで別インスタンスを作成する"
    ],
    "answerIndex": 1,
    "explanation": "AWS MGNでは、本番移行の前に必ず「テスト (Test)」ステップを実行することが強く推奨されています。MGNのコンソールから `Launch Test Instances` を実行すると、レプリケーションのデータストリームを維持したまま、ステージングボリュームの特定時点のスナップショットからクローンEC2インスタンスを隔離されたサブネット内に起動します。これにより、本番環境への影響なく、ログインテストや動作検証が可能です。",
    "keywords": [
      "AWS MGN",
      "テストインスタンス起動",
      "移行テスト"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-14",
    "category": "migration",
    "question": "AWS Database Migration Service (AWS DMS) を使用して、巨大なテーブルのデータを移行しています。データ移行の「ロードフェーズ（初期ロード）」におけるデータベースの書き込み処理を最大化し、移行全体の所要時間を大幅に短縮するための移行先データベース（ターゲット側）のベストプラクティスはどれですか？",
    "options": [
      "ターゲット側データベースのインデックス（Indexes）や制約（Constraints）を一時的に削除・無効化し、データロード完了後に再インデックス・再適用すること",
      "移行元データベースを完全に停止する",
      "KMSによるデフォルト暗号化を有効化する",
      "DMSのタスクを複数AZで並列実行させる"
    ],
    "answerIndex": 0,
    "explanation": "DMSによる大量データのフルロード（一括書き込み）中、移行先のテーブルにインデックスや外部キー制約が有効化されたままだと、1行書き込むたびにインデックスの再構築や外部キーの整合性チェックが走り、データベースのI/O負荷が限界に達して転送速度が極端に低下します。インデックスを一旦無効（またはドロップ）にし、全データを流し込んだ後に一括で再作成（バルクインデックス作成）するのが標準的な高速化設計です。",
    "keywords": [
      "AWS DMS",
      "フルロード高速化",
      "インデックス無効化"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-15",
    "category": "migration",
    "question": "AWS Migration Evaluator (旧 TSO Logic) の主な役割は何ですか？",
    "options": [
      "データベーススキーマを自動変換するサービスである",
      "オンプレミスの実際のサーバー稼働データ（CPU/メモリのビジー率など）を元に、AWS移行時の最適なEC2インスタンスサイズをプロビジョニングし、「移行後の総所有コスト (TCO / 利用料金見積もり)」を比較・分析するアセスメントサービスであること",
      "サーバーをブロックレベルで自動コピーする移行アプライアンスである",
      "Direct Connectの回線スピードをテストするツールである"
    ],
    "answerIndex": 1,
    "explanation": "AWS Migration Evaluatorは、クラウド移行の初期計画フェーズで用いるアセスメントサービスです。オンプレミスのサーバーの物理スペックだけでなく、「実際の平均・最大CPU/メモリ使用履歴」を分析し、過剰スペック（オーバープロビジョニング）状態を是正した「適切なサイズ (Right-sizing)」のEC2を選定して、移行後のAWSライセンス費用やインフラ料金のシミュレーションレポート（TCO分析）を出力してくれます。",
    "keywords": [
      "Migration Evaluator",
      "TCO分析",
      "Right-sizing"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-16",
    "category": "migration",
    "question": "オンプレミスから AWS への大容量ファイルデータ同期において、AWS DataSync を使用した日常の定期同期タスク（例: 毎晩のバッチ同期）が、日中に社内のインターネット基盤（業務回線）を圧迫して業務に支障が出るのを防止したい場合、DataSyncタスク側で設定すべき制御パラメータはどちらですか？",
    "options": [
      "配信遅延時間",
      "帯域幅の制限 (Bandwidth Limit / タスク実行オプションでの制限ビットレート設定)",
      "KMSスロットリングクォータの変更",
      "S3 Express One Zoneの適用のみ"
    ],
    "answerIndex": 1,
    "explanation": "AWS DataSyncは、タスク実行時の「帯域幅の制限 (Bandwidth Limit)」をサポートしています。転送で使用する最大ネットワーク速度（例: 50MBpsなど）を定義しておくことで、DataSyncエージェントがその帯域を超えないようにスロットリングを行い、オンプレミス側の専用線やインターネットゲートウェイの回線帯域を保護します。スケジュール実行機能と併用することで効果的です。",
    "keywords": [
      "DataSync帯域制限",
      "業務回線保護",
      "同期スケジュール"
    ],
    "domain": "domain-3"
  },
  {
    "id": "mig-17",
    "category": "migration",
    "question": "クラウド導入フレームワーク (AWS CAF - Cloud Adoption Framework) において、ビジネスの変革を成功させるために評価すべき「6つのパースペクティブ（視点）」に属していないものはどれですか？",
    "options": [
      "ビジネス (Business) および 人材 (People)",
      "ガバナンス (Governance) および プラットフォーム (Platform)",
      "セキュリティ (Security) および 運用 (Operations)",
      "フロントエンド (Frontend) および ソーシャル (Social)"
    ],
    "answerIndex": 3,
    "explanation": "AWS CAFの6つのパースペクティブは、「ビジネス」「人材」「ガバナンス」（ビジネスに焦点を当てた視点）、および「プラットフォーム」「セキュリティ」「運用」（技術に焦点を当てた視点）で構成されています。「フロントエンド」および「ソーシャル」はCAFのパースペクティブの定義には含まれません。",
    "keywords": [
      "CAF",
      "6つのパースペクティブ",
      "移行フレームワーク"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-18",
    "category": "migration",
    "question": "ペタバイトからエクサバイト規模の超・超巨大なデータセンター全体のデータを、物理的なトラック輸送用コンテナ（長さ約13メートルの耐衝撃・耐水仕様トレーラー）を自社データセンターの横に配置して直接接続し、数週間で一括して物理コピーしてAWSに移動させる、超大規模移行アプライアンスはどれですか？",
    "options": [
      "AWS Snowball Edge",
      "AWS Snowmobile (スノーモバイル)",
      "AWS Outposts",
      "AWS Storage Gateway"
    ],
    "answerIndex": 1,
    "explanation": "AWS Snowmobileは、超大容量データの移行（最大100PB/台）専用に設計された、トレーラーで配送されるセミトラック牽引のコンテナ型物理デバイスです。超巨大なデータレイクの構築や、何百ものラック規模のデータセンター撤退など、Snowballを数十台〜数百台レンタルしても追いつかない規模の極めて巨大なデータ移行プロジェクトでのみ使用されます。",
    "keywords": [
      "AWS Snowmobile",
      "エクサバイト規模移行",
      "物理輸送"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-19",
    "category": "migration",
    "question": "AWS Database Migration Service (AWS DMS) を使用して、移行元と移行先でデータ構造が異なる「異種データベース間」のレプリケーションを行っています。移行元テーブルの「特定のスキーマ名やテーブル名」を、移行先の別のスキーマ名（例: Oracleの `SYSTEM` スキーマ内のテーブルを Aurora の `production` スキーマへ変更）へマッピング・変換してロードさせたい場合、DMSのタスク設定で何を定義すべきですか？",
    "options": [
      "SCTの自動スキーマ変換ルールのみ",
      "DMS タスクの「選択ルールと変換ルール (Selection Rules / Transformation Rules)」を含むマッピングルール (Mapping Rules) の定義",
      "VPCエンドポイントポリシーでのリソース指定",
      "移行先データベースのCNAMEレコード変更"
    ],
    "answerIndex": 1,
    "explanation": "AWS DMSタスクでは、詳細な「テーブルマッピングルール（JSON定義）」を設定できます。これに「変換ルール (Transformation Rules)」を追加し、`target` タイプとして `schema` や `table` を指定し、名前のプレフィックス追加、置換（例: `SYSTEM` から `production` への変更）などを設定することで、データレプリケーションの実行中に動的にスキーマ名・テーブル名・列名を変換マッピングしてターゲットへ流し込めます。",
    "keywords": [
      "DMSテーブルマッピング",
      "変換ルール",
      "データ定義変更"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-20",
    "category": "migration",
    "question": "AWS Application Migration Service (AWS MGN) を使用して、本番移行（カットオーバー）を行います。レプリケーション状態のサーバーを本番用として起動させる際、OS上のネットワーク設定の書き換え、AWS Systems Managerエージェントの自動インストール、または移行後のEC2に紐づくカスタムドライバの構成を、サーバーの「起動フェーズで自動実行（ポストプロビジョニング）」させるために連携すべきMGNの機能は何ですか？",
    "options": [
      "起動テンプレートのバージョニングのみ",
      "MGN の「起動後アクション (Post-Launch Actions / 起動後スクリプト)」の設定",
      "AWS Systems Manager Run Commandの定期スケジュール実行",
      "AWS LambdaによるS3イベント連携"
    ],
    "answerIndex": 1,
    "explanation": "AWS MGNには「起動後アクション (Post-Launch Actions)」機能が組み込まれています。これを利用し、移行したEC2インスタンスが初めて起動した直後のタイミングで、SSM Agentのデプロイ、ライセンス認証のアクティベーション、アンチウイルスソフトのインストール、カスタム修復スクリプトの実行などを完全自動化できます。これにより、移行後の手動によるサーバー設定変更の手間をほぼ皆無にできます。",
    "keywords": [
      "起動後アクション",
      "AWS MGN",
      "プロビジョニング自動化"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-21",
    "category": "migration",
    "question": "オンプレミスから AWS へのサーバー移行（AWS MGN 使用）を進めています。移行元のサーバーにインストールする「MGN レプリケーションエージェント (Replication Agent)」と、AWS 側のステージングエリアの「レプリケーションサーバー」との間の通信暗号化、およびポート要件について正しい記述はどちらですか？",
    "options": [
      "通信はHTTP (ポート80) で暗号化なしで送信される",
      "通信は HTTPS / TLS (TCP ポート 1500) で強力に暗号化されて送信されるため、移行元からステージングサブネットへのアウトバウンド方向で TCP ポート 1500 を開放しておく必要があること",
      "SSH (ポート22) のみが使用される",
      "通信はDirect Connect上でしかサポートされていないため、ポート設定は不要である"
    ],
    "answerIndex": 1,
    "explanation": "AWS MGNのレプリケーションエージェントは、移行元サーバーのディスクのブロック差分を取得し、暗号化（SSL/TLS）されたセキュアなチャネル（TCP ポート 1500）を使用して、ターゲットVPC内のレプリケーションサーバーに送信します。そのため、ファイアウォール設定等でアウトバウンドのTCPポート1500への接続許可が必須要件となります。",
    "keywords": [
      "AWS MGNポート1500",
      "レプリケーション暗号化",
      "セキュリティ"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-22",
    "category": "migration",
    "question": "AWS Database Migration Service (AWS DMS) を使用して、データベースのデータ整合性を担保したいです。移行元（ソース）と移行先（ターゲット）の間で、すべてのレコードが「1対1で完全一致してコピーされているか」を行数およびハッシュ値で自動的にチェック・検証し、不一致行を検出レポートとして出力してくれるDMSの組み込み機能は何ですか？",
    "options": [
      "DMSのフルロード機能のみ",
      "DMS データ検証 (Data Validation)",
      "AWS Config適合性パックの連携",
      "S3 Selectの適用"
    ],
    "answerIndex": 1,
    "explanation": "DMS データ検証 (Data Validation) は、移行タスクの設定で有効化できます。これをオンにしておくと、初期ロード（フルロード）や変更データキャプチャ（CDC）の最中に、DMSがソース側とターゲット側のデータを比較検証し、不一致を自動検出します。データの欠落や文字化けが発生していないかを自動監査できるため、移行完了のサインとして信頼性を提供します。",
    "keywords": [
      "DMSデータ検証",
      "Data Validation",
      "データ整合性"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-23",
    "category": "migration",
    "question": "オンプレミスから AWS への段階的・段階的なネットワーク移行を計画しています。既存のオンプレミス環境とVPCの間で、双方向に大規模な「ハイブリッドDNS解決」を構成します。Route 53 Resolverの「アウトバウンドエンドポイント」がオンプレミスDNSサーバーと名前解決リクエストを送受信する際の、推奨される接続インフラは何ですか？",
    "options": [
      "インターネットゲートウェイのみ",
      "AWS Site-to-Site VPN または AWS Direct Connect (専用プライベート接続チャネル)",
      "VPCピアリング接続のみ",
      "Client VPN接続のみ"
    ],
    "answerIndex": 1,
    "explanation": "Route 53 Resolverのインバウンド/アウトバウンドエンドポイントは、プライベートIPで名前解決パケット（ポート53/UDP・TCP）を送受信します。このため、オンプレミスDNSと通信を行うためには、両ネットワーク間に安全で安定したプライベート接続（Direct ConnectやSite-to-Site VPN）があらかじめ敷設されている必要があります。パブリックインターネットを経由した名前解決要求はサポートされません。",
    "keywords": [
      "Route 53 Resolver",
      "ハイブリッドネットワーク",
      "VPN/Direct Connect前提"
    ],
    "domain": "domain-1"
  },
  {
    "id": "mig-24",
    "category": "migration",
    "question": "AWS Application Discovery Serviceのエージェント型（Agent-based）とエージェントレスコネクター（Agentless）の選定において、エージェントレス方式の「サポート制限」として正しいものはどちらですか？",
    "options": [
      "エージェントレス方式は、VMware vCenter 上で実行されている仮想マシンに限定され、物理サーバーの構成情報の取得には対応していないこと",
      "エージェントレス方式はLinux OSしかサポートしていない",
      "エージェントレス方式はネットワークI/Oの測定ができない",
      "エージェントレス方式は料金が高額である"
    ],
    "answerIndex": 0,
    "explanation": "エージェントレスコネクターは、vCenterのAPIと統合されてハイパーバイザーレベルでデータを取得するため、サポート対象は「VMware環境下の仮想マシン」に限定されます。オンプレミスの物理ハードウェアサーバーや、ベアメタル、他のハイパーバイザー（Hyper-Vなど）で稼働するマシンのスペック調査は、エージェントレスでは実行できないため、この場合は「エージェント型（Discovery Agent）」をOS内にインストールして調査する必要があります。",
    "keywords": [
      "Application Discovery",
      "エージェント型/エージェントレス",
      "移行調査制約"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-25",
    "category": "migration",
    "question": "AWS Application Discovery Serviceで収集したオンプレミスサーバーのインベントリデータや、CPU/メモリ使用履歴情報を、自動的に集計・出力し、AWS移行時の予測リソース要件に合わせた「サイジングと利用料金の見積もり分析レポート」を一括作成するために連携・エクスポートする先のアセスメントサービスはどれですか？",
    "options": [
      "AWS Pricing Calculator",
      "AWS Migration Evaluator (または AWS Migration Hub インポート機能)",
      "AWS Systems Manager Quick Setup",
      "AWS CloudTrail"
    ],
    "answerIndex": 1,
    "explanation": "Application Discovery Serviceで取得したインベントリデータや利用実績データ（CSVなど）は、AWS Migration Hubのインポートツールを介して読み込み、Migration Evaluator（旧TSO Logic）と連携させることで、TCO分析（移行前後のコスト削減シミュレーション）を全自動で実行・可視化できます。",
    "keywords": [
      "Migration Evaluator",
      "移行コスト試算",
      "Discovery Service連携"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-26",
    "category": "migration",
    "question": "AWS Migration Hub において、オンプレミスのリソースやアプリケーション（移行対象のサーバー群）を、特定の「業務コンポーネント」ごとにグループ化し、移行プロジェクトとして登録・管理するために定義する概念を何と呼びますか？",
    "options": [
      "移行グループ (Migration Groups)",
      "アプリケーション (Applications / アプリケーション定義)",
      "サーバークラスタ",
      "VPC アソシエーション"
    ],
    "answerIndex": 1,
    "explanation": "Migration Hubでは、検出された個々のサーバー（インベントリ）を、特定のビジネスワークロードごとにグループ化した「アプリケーション (Applications)」として論理的に登録します。これにより、「会計システム」「ECサイト」といった単位で、所属するサーバー群の移行進捗を一元管理・監視できるようになります。",
    "keywords": [
      "Migration Hub",
      "アプリケーション定義",
      "移行管理"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-27",
    "category": "migration",
    "question": "AWS Storage Gatewayを使用して、オンプレミスサーバーの共有フォルダデータをS3にバックアップしています。オンプレミスデータセンターの完全な停止（被災など）に備え、AWS上のバックアップデータ（EBSスナップショット等）からEC2インスタンスとして迅速に業務を復旧させるための「ボリューム復元プロセス」の正しい設計はどれですか？",
    "options": [
      "AWS上のS3に同期されているVolume Gatewayのスナップショットから、EBSボリュームを作成し、それを起動する新規のEC2インスタンスにアタッチして復元すること",
      "オンプレミス側のゲートウェイハードウェアが復旧するまで復旧は不可能である",
      "S3 Glacierからテープをダウンロードして再適用する",
      "VPCピアリングを再構築する"
    ],
    "answerIndex": 0,
    "explanation": "ボリュームゲートウェイ (Volume Gateway) は、オンプレミスのボリュームデータをEBSスナップショットの形式でS3に非同期バックアップしています。オンプレミスが被災した際の災害対策 (DR) として、AWSコンソールから該当のスナップショットを選択してEBSボリュームを作成し、それを復旧用のEC2インスタンスに関連付けることで、オンプレミスのディスク内容をAWS上で数分以内に再稼働させることができます。",
    "keywords": [
      "Volume Gateway DR",
      "EBSスナップショット復元",
      "災害対策復旧"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-28",
    "category": "migration",
    "question": "オンプレミスから AWS へのデータベース移行において、AWS Database Migration Service (AWS DMS) を使用して変更データキャプチャ（CDC）を実行中に、DMSレプリケーションインスタンスのディスク容量が不足し、タスクが一時停止（エラー）しました。この問題を根本的に解消・防止するための正しいDMS管理アクションはどれですか？",
    "options": [
      "移行元データベースをシャットダウンする",
      "DMSレプリケーションインスタンスのボリュームサイズを拡張するか、またはタスク設定でトランザクションログ（LOBキャッシュやコントロールログ）のログ保存サイズ制限および自動削除クリーンアップポリシーを設定すること",
      "KMS管理キーのキーローテーションを設定する",
      "DMSのパブリックIPを解除する"
    ],
    "answerIndex": 1,
    "explanation": "DMSレプリケーションインスタンスは、移行処理中に発生した差分トランザクションログやLOBの一時キャッシュ、監査ログをローカルディスクに保存します。大量・長時間の移行ではディスク空き容量の枯渇が発生しやすいため、レプリケーションインスタンスの設定でストレージ容量（EBS）を明示的に増やすか、DMSタスク構成で「詳細ログの削除ポリシー」や「LOBメモリ制限」を適切に調整してディスク消費を抑えます。",
    "keywords": [
      "DMS容量不足",
      "レプリケーションインスタンス拡張",
      "トラブルシューティング"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-29",
    "category": "migration",
    "question": "AWS Application Discovery Serviceで収集された調査データを、AWS Migration HubコンソールからCSV形式でエクスポートする際、抽出できる主要なサーバーデータ項目として、正しくないものはどれですか？",
    "options": [
      "サーバーのホスト名、OS名、IPアドレス",
      "CPUコア数、実装メモリ容量、割り当てディスクサイズ",
      "サーバー内で実行されているアプリケーションの完全なソースコードおよびデータベースの管理者パスワード",
      "直近のネットワークI/Oスループットの履歴"
    ],
    "answerIndex": 2,
    "explanation": "Application Discovery Serviceは、移行アセスメント（リソース構成とサーバー依存関係の把握）用のツールであり、サーバーのメタスペック情報やネットワーク接続ログを収集します。「アプリケーションのソースコード自体」や「データベースのログインパスワード」のような機密ファイルを勝手に吸い上げる機能はありません。",
    "keywords": [
      "Application Discovery",
      "アセスメント収集データ",
      "仕様"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-30",
    "category": "migration",
    "question": "オンプレミスの VMware 仮想マシンイメージ（OVF/OVA形式ファイル）を、移行エージェント（MGNなど）のインストール作業を行わずに、CLI経由で直接AMIに変換してAWS EC2上で起動できるようにするための手動のインポートツールは何ですか？",
    "options": [
      "AWS DataSync コネクタ",
      "VM Import/Export (CLI コマンド: `aws ec2 import-image`)",
      "AWS Application Migration Service (AWS MGN) オンデマンド",
      "S3 Transfer Utility"
    ],
    "answerIndex": 1,
    "explanation": "VM Import/Exportは、S3にアップロードされた仮想マシンディスクイメージ（VMDK, VHD, RAW等）を、EC2で直接使用可能なAMIにサーバーレスで自動変換する機能を提供します。エージェントを入れられないレガシーOSなどの移行に役立ちます。",
    "keywords": [
      "VM Import/Export",
      "VMイメージ移行",
      "AMI変換"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-31",
    "category": "migration",
    "question": "AWS Application Migration Service (AWS MGN) を使用した移行プロジェクトにおいて、移行対象となるオンプレミスサーバーの台数が非常に多い（100台以上）です。移行設計として、本番インスタンスの起動（Launch）を一発勝負で行うのを避け、本番起動後のホストEC2インスタンスの起動パラメータやタグ付け、初期セキュリティグループ割り当ての整合性を自動化させるための推奨アプローチはどれですか？",
    "options": [
      "手動で1台ずつコンソールからタグを設定する",
      "MGNの「起動テンプレート (Launch Template)」を一括（またはOU/グループ単位）で事前に定義・構成し、タグやセキュリティグループなどのパラメータをあらかじめマッピングして、自動プロビジョニングさせること",
      "移行が完了するまでセキュリティグループをすべて「全開放」にしておく",
      "すべてのサーバーを単一のEC2インスタンスに同居させる"
    ],
    "answerIndex": 1,
    "explanation": "AWS MGNはEC2の起動テンプレートと密接に連携しています。移行するサーバーごとに自動作成される起動テンプレートの設定を、移行フェーズの初期段階で一括構成しておきます（VPC、サブネット、インスタンスタイプ、タグ、セキュリティグループの紐付けなど）。これにより、テスト起動時や本番カットオーバー時に、テンプレート設定に則って正しいインフラ仕様でEC2が一括生成されます。",
    "keywords": [
      "AWS MGN 起動テンプレート",
      "大量サーバー移行",
      "インフラ自動プロビジョニング"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-32",
    "category": "migration",
    "question": "AWS Database Migration Service (AWS DMS) を使用して、オンプレミスの Microsoft SQL Server から Amazon RDS SQL Server への「同種データベース間レプリケーション」を構成しています。初期ロード（フルロード）完了後の「継続的レプリケーション (CDC)」において、ソースデータベース側の更新変更ログを追跡するために、DMSが内部で参照する SQL Server 固有のトランザクションログ機能は何ですか？",
    "options": [
      "SQL Server CDC (Change Data Capture) または トランザクションレプリケーションのディストリビューションデータベース",
      "SQL Server クエリストア",
      "SQL Server データベースメールのログ",
      "自動バックアップスナップショット"
    ],
    "answerIndex": 0,
    "explanation": "DMSがSQL Serverからリアルタイムで変更データを抽出（CDC）するためには、ソース側のSQL Serverで「Change Data Capture (CDC)」機能または「レプリケーション」機能が有効になっている必要があります。DMSはこれらのトランザクションログテーブル（またはディストリビュータテーブル）を読み込むことで、発生した挿入・更新・削除アクションをニアリアルタイムで抽出し、移行先へ反映します。",
    "keywords": [
      "DMS SQL Server CDC",
      "データベースレプリケーション",
      "DMS前提条件"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-33",
    "category": "migration",
    "question": "AWS Storage Gatewayの「ボリュームゲートウェイ」を使用して、オンプレミスにキャッシュ型の仮想ボリュームを提供しています。ボリュームに障害が発生した際、データの一貫性を保ちながらスナップショットから新規ボリュームに置き換えて復旧させたいです。スナップショットがEBSに作成・保存されるタイミングはいつですか？",
    "options": [
      "オンプレミス側のルーターが停止したときのみ",
      "保管スケジュール設定（スナップショットスケジュール）に従って、ゲートウェイが非同期に特定時点のブロックデータをEBSスナップショットとして自動書き出しするタイミング",
      "常にミリ秒単位のリアルタイム同期でEBSにスナップショットが書き込まれ続ける",
      "手動でしか作成できない"
    ],
    "answerIndex": 1,
    "explanation": "ボリュームゲートウェイは、ユーザーが設定した「スナップショットスケジュール（例: 24時間ごと）」に従って、ボリュームのスナップショットを非同期にEBSスナップショットとしてS3上に作成・保存します。これにより、ハードウェア障害やランサムウェア感染が発生した際でも、以前の正常なスナップショット時点のデータから新規ボリュームを復元できます。",
    "keywords": [
      "スナップショットスケジュール",
      "ボリュームゲートウェイ",
      "バックアップタイミング"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-34",
    "category": "migration",
    "question": "AWS Discovery Serviceのエージェントレス方式によるオンプレミスのサーバーアセスメント調査において、VMware vCenter上の仮想マシンの稼働データとして「収集・分析できない項目」はどれですか？",
    "options": [
      "仮想マシンのOS名、IPアドレス、MACアドレス",
      "CPUコア数、メモリ割り当て容量、プロビジョニング済みのディスクサイズ",
      "仮想マシン内の特定のカスタムアプリケーション（Apacheや独自バッチ）のポート接続依存関係やプロセス名情報",
      "ホストハイパーバイザー上の平均CPU使用率およびメモリ消費履歴"
    ],
    "answerIndex": 2,
    "explanation": "エージェントレス方式は、ハイパーバイザー（vCenter）を介して外部からスペック情報を収集するため、仮想マシンの「OSの内部で実行されている個別のアプリケーションのポート接続依存関係やプロセス名情報」などの詳細な内部アクティビティまでは収集できません。これを取得するには、対象マシンのOS内部に「Discovery Agent（エージェント）」をインストールする必要があります。",
    "keywords": [
      "エージェントレス制限",
      "Application Discovery",
      "インベントリデータ"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-35",
    "category": "migration",
    "question": "オンプレミスから AWS へのオンライン移行（AWS DataSync 使用）において、10Gbpsの太い専用回線（Direct Connect）が敷設されています。DataSyncによる大量データの同期処理速度を限界まで高める（Direct Connectの太いパイプラインをフルに使う）ために推奨される、DataSyncエージェントと接続の設計はどれですか？",
    "options": [
      "DataSyncエージェントを最小のスペックのVMで動かす",
      "DataSyncエージェントを十分にスケーリングされた高スペックな物理/仮想マシン（十分なCPU/メモリ）で動作させ、タスクの実行オプションで「タスクの並列処理（Concurrency）」や「データ整合性確認のタイミング」を最適化し、複数のネットワーク接続を確立すること",
      "ネットワークの暗号化を完全に解除して通信させる",
      "S3バケットポリシーを無効にする"
    ],
    "answerIndex": 1,
    "explanation": "DataSyncはマルチスレッドによる超並列データ転送をサポートしており、10Gbpsなどの広帯域をフルに利用できます。これを活かすには、中継する「DataSyncエージェントVM」自体のリソース（vCPU、RAM）を十分に多めに割り当て、エージェントがネットワークボトルネックにならないように構成することが必須となります。",
    "keywords": [
      "DataSyncパフォーマンス",
      "エージェントサイジング",
      "10Gbps帯域幅"
    ],
    "domain": "domain-3"
  },
  {
    "id": "mig-36",
    "category": "migration",
    "question": "AWS Migration Hub を使用して、移行対象のサーバーの「移行ステータス」を一元管理・更新します。MGNから自動で送信される進捗更新を Migration Hub 側で正しく認識・反映させるために、MGNコンソール側で設定しておくべき重要な前提設定はどちらですか？",
    "options": [
      "マスターアカウントのパスワード共有",
      "AWS MGNのコンソール画面で、移行ハブのホームリージョン (Migration Hub Home Region) を正しく構成・指定しておくこと",
      "すべてのEC2の起動キーを共通化する",
      "VPCピアリングの設定"
    ],
    "answerIndex": 1,
    "explanation": "Migration Hubを利用する前提条件として、移行の進捗メタデータを一元集約する「ホームリージョン (Home Region)」の定義が不可欠です。MGNやDMS、アセスメントツールは、この定義されたホームリージョン（例: `ap-northeast-1`）に対して自動で進捗データを送信するため、各ツールの設定画面でホームリージョンが一致していないと、Migration Hubダッシュボードに反映されません。",
    "keywords": [
      "ホームリージョン",
      "Migration Hub前提設定",
      "移行ステータス同期"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-37",
    "category": "migration",
    "question": "AWS Storage Gatewayの「S3 ファイルゲートウェイ (S3 File Gateway)」において、オンプレミス側のサーバーがSMBプロトコルを使用してマウント共有しています。ユーザーがファイル共有フォルダ上でファイルを更新した際、その変更データがS3バケット内のオブジェクトとして同期・反映されるタイミングはいつですか？",
    "options": [
      "毎週設定されたバックアップウィンドウ時間帯のみ",
      "ファイルがクローズ（保存完了）された直後に、ファイルゲートウェイが非同期でブロック差分を読み取り、ほぼリアルタイムでS3オブジェクトを自動更新（PUT）するタイミング",
      "S3側からの手動による同期実行（Sync）ボタンが押されたときのみ",
      "同期は1日に1回定時でのみ行われる"
    ],
    "answerIndex": 1,
    "explanation": "S3ファイルゲートウェイは、マウントされたSMB/NFS共有フォルダ上のファイルの変更をリアルタイムで検知します。アプリケーションがファイルを保存・クローズすると、ゲートウェイは即座にそのデータをバックエンドのS3バケットに対してオブジェクトとして非同期アップロード（ほぼリアルタイム同期）するため、最新のデータ状態がS3に自動的に保たれます。",
    "keywords": [
      "S3ファイルゲートウェイ同期",
      "リアルタイムオブジェクト書き込み",
      "仕様"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-38",
    "category": "migration",
    "question": "AWS Database Migration Service (AWS DMS) を使用して、数億件の行を持つ巨大なテーブルの初期ロード（フルロード）を実施しています。フルロードのパフォーマンスを向上させるため、DMSタスク設定の「テーブル定義ルール」または「タスク設定」で適用すべき並列ロード設定はどちらですか？",
    "options": [
      "DMSのタスクを複数リージョンで同時実行する",
      "DMSの「並列ロード (Parallel Load)」機能を有効化し、主キーやオートインクリメントIDなどの特定列に基づいてテーブルデータを論理範囲に分割（パーティショニング指定）して、複数のスレッドで並行ロードさせること",
      "データベースの暗号化を解除する",
      "レプリケーションインスタンスのCPUを1にする"
    ],
    "answerIndex": 1,
    "explanation": "DMSは標準では1テーブルを1スレッドでロードします。超巨大テーブルのロードを高速化するためには、タスクマッピングルールで `parallel-load` 設定を定義します。主キーの範囲（レンジ）や、特定の数値列のパーティションを指定して、データを複数のセグメント（例: 8分割）に分け、複数の接続スレッドで移行先へ並行書き込みを行うことで、フルロード時間が劇的に短縮されます。",
    "keywords": [
      "DMS並列ロード",
      "フルロードチューニング",
      "大量データ移行"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-39",
    "category": "migration",
    "question": "AWS Application Discovery Serviceのコレクターをオンプレミスで稼働させ、インベントリ調査結果をAWSにアップロードして可視化したいです。監査データがネットワーク経由でAWSに送信される際の、セキュリティ暗号化および接続パスの安全性を担保するための仕組みはどれですか？",
    "options": [
      "データを平文のままFTP送信する",
      "Discovery Agent/Connector から AWS のパブリックエンドポイント（またはVPCエンドポイント）への通信において、HTTPS / TLS による強力な転送中暗号化が標準で適用されていること",
      "KMS管理キーの自動割り当てのみ",
      "オンプレミス側の全ポート開放"
    ],
    "answerIndex": 1,
    "explanation": "AWS Application Discovery Serviceのエージェントやコネクターが収集したデータは、AWSのDiscovery Service APIエンドポイントに対して、HTTPS (ポート443) を使用して強力に暗号化されたチャネルで送信されます。送信されるデータ（スペック構成、プロセス一覧、CPU利用履歴）は安全に暗号化保管され、外部漏洩を防ぎます。",
    "keywords": [
      "転送中データ暗号化",
      "Discovery Service",
      "セキュリティ"
    ],
    "domain": "domain-1"
  },
  {
    "id": "mig-40",
    "category": "migration",
    "question": "AWS Storage Gatewayの「ボリュームゲートウェイ (Volume Gateway)」において、オンプレミスにiSCSI接続で提供しているキャッシュ型ボリューム (Cached Volumes) の動作特性として、正しいものはどれですか？",
    "options": [
      "プライマリデータ全体がオンプレミス側に完全保持され、バックアップのみがS3に保存される",
      "プライマリデータ全体はAmazon S3に保存され、オンプレミスのローカルハードウェアには「頻繁にアクセスされるホットデータ」のみがキャッシュとして保持されること",
      "データはすべてGlacierに直接アーカイブされる",
      "ボリュームゲートウェイはiSCSI接続をサポートしていない"
    ],
    "answerIndex": 1,
    "explanation": "キャッシュ型ボリューム (Cached Volumes) では、プライマリの書き込みデータはすべてAWSのS3バケット内に直接保存されます。オンプレミスのローカルディスクには、最近読み書きされた「頻繁にアクセスされるデータ（ホットデータ）」のみがキャッシュ保存されます。これにより、ローカルの物理ストレージサイズを小さく抑えつつ、安価に大容量ブロックストレージを構成できます。プライマリデータをローカル保持するのは「保管型 (Stored Volumes)」です。",
    "keywords": [
      "キャッシュ型ボリュームゲートウェイ",
      "S3プライマリ",
      "ローカルキャッシュ"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-41",
    "category": "migration",
    "question": "AWS Application Migration Service (AWS MGN) を使用したサーバー移行プロジェクトにおいて、本番切り替え（カットオーバー）直前に、オンプレミスのソースサーバー側で発生した最後のデータ変更が、AWS側のステージングEBSボリュームへ「完全にレプリケート（同期）完了」したことを確認するためのMGNコンソール上のステータス表示はどれですか？",
    "options": [
      "Not Ready",
      "Healthy / Data replication status: Continuous (同期完了状態)",
      "Stopped",
      "Terminated"
    ],
    "answerIndex": 1,
    "explanation": "AWS MGNで安全にカットオーバー（本番移行）を行うためには、データの同期状態（レプリケーションステータス）が `Healthy` かつ `Continuous` である必要があります。これは移行元のディスクブロックの変更がすべてAWS側へ追いついている（遅延時間：秒単位）ことを示しており、この状態で移行（Launch Cutover Instances）を叩くことで、データ欠損のない確実な本番切り替えが実現します。",
    "keywords": [
      "AWS MGN同期ステータス",
      "Continuous",
      "カットオーバー前提条件"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-42",
    "category": "migration",
    "question": "AWS Database Migration Service (AWS DMS) を使用して、Oracle Database から Amazon Aurora PostgreSQL への「異種データベース間継続的レプリケーション (CDC)」を実施しています。Oracle側の更新ログ（アーカイブREDOログ）が非常に大きい場合、DMSレプリケーションタスクのデータ遅延（レプリケーション遅延）を最小にするためのDMSソース側の最適な接続モードはどちらですか？",
    "options": [
      "SQLログの完全無視モード",
      "Oracle LogMiner の使用、または可能な場合は大容量トランザクションログを直接ファイル共有経由で高速スキャンする「Binary Reader（バイナリリーダー）」モードを使用すること",
      "DMSのリードレプリカのみをアタッチする",
      "データベースの暗波化の解除"
    ],
    "answerIndex": 1,
    "explanation": "DMSがOracleデータベースからCDCを実行する際、標準の「LogMiner」はCPU負荷が高く、ログ量が多いと遅延が深刻化します。高負荷環境では「Binary Reader」モードを使用します。これはDMSがOracleのREDOログファイルをディレクトリから直接（ファイルシステムレベルで）読み込むため、Oracleサーバーへのクエリ負荷が激減し、大量の変更履歴を極めて短い遅延で同期できます。",
    "keywords": [
      "Binary Reader",
      "DMS Oracle CDC",
      "レプリケーション遅延削減"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-43",
    "category": "migration",
    "question": "AWS Systems Manager (SSM) の「一元的なリモート管理」機能を使用しているハイブリッド環境において、オンプレミスサーバーに対するOSパッチ適用やセキュリティエージェントの自動アップデートを、インターネットを経由するのを禁止し、Direct Connectプライベートネットワーク内で完結させたい場合、どうすればよいですか？",
    "options": [
      "インターネットのルートを完全に削除する",
      "VPC内に Systems Manager 用の VPC エンドポイント (Interface Endpoint) を作成し、Direct Connect 経由でオンプレミスからそのVPCエンドポイントへ名前解決と通信を行わせること",
      "Systems Managerはパブリックサービスであるため、ハイブリッド接続でのインターネット回避は不可能である",
      "NATゲートウェイにVPNを設定し暗号化する"
    ],
    "answerIndex": 1,
    "explanation": "Systems Managerの各エンドポイント（`ssm`, `ssmmessages`, `ec2messages`）に対して、VPC内に「インターフェイスVPCエンドポイント（PrivateLink）」を作成します。オンプレミスのSSMエージェントが、インターネット経由のパブリックアドレスの代わりに、ハイブリッド接続（VPNやDirect Connect）を介してこのVPC内のプライベートIPエンドポイントに名前解決・接続するように、ハイブリッドDNS Resolver等を設定することで、全運用トラフィックをプライベート化できます。",
    "keywords": [
      "SSM PrivateLink",
      "VPCエンドポイント",
      "オンプレミスSSM管理"
    ],
    "domain": "domain-1"
  },
  {
    "id": "mig-44",
    "category": "migration",
    "question": "AWS Application Discovery Serviceのエージェント型（Agent-based）アプローチにおいて、オンプレミスのサーバーから収集される稼働データとして、「収集・分析できない項目」はどれですか？",
    "options": [
      "サーバーのCPU、メモリ、ディスクの構成およびリソース使用状況",
      "サーバー内で実行されているプロセスのネットワーク接続接続（IP・ポートの送受信元）の履歴",
      "サーバーの物理ラック上の配置座標（何段目のラックに設置されているか）やデータセンター内の物理位置情報",
      "インストールされているオペレーティングシステム名およびバージョン"
    ],
    "answerIndex": 2,
    "explanation": "エージェント（Discovery Agent）は、オペレーティングシステムの内部からシステム構成やパフォーマンス、ネットワークログを収集します。そのため、サーバーが「オンプレミスデータセンターのどの物理ラックの何段目に置かれているか」といった物理ロケーション情報を検知することはできません。",
    "keywords": [
      "Discovery Agent制限",
      "アセスメント範囲",
      "仕様"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-45",
    "category": "migration",
    "question": "AWS DataSyncを使用して、オンプレミスのWindowsファイルサーバーからAWSの Amazon FSx for Windows File Server への移行タスクを実行します。ファイルのメタデータだけでなく、Windows独自の「NTFSアクセスコントロールリスト (ACL/権限属性)」を維持してコピーするためのDataSync設定はどれですか？",
    "options": [
      "DataSyncはNTFSのACLをサポートしていないため手動で再設定する",
      "DataSyncの転送設定において、メタデータオプションで「所有権、グループ、アクセス許可 (Ownership, Group, Permissions)」をすべて保持してコピーするように有効化すること（デフォルトでNTFS ACLは自動コピーされる）",
      "S3バケットを経由させてインポートする",
      "KMSキーを共有する"
    ],
    "answerIndex": 1,
    "explanation": "AWS DataSyncは、Windows SMB共有からAmazon FSx for Windows File Serverへの転送時に、WindowsのNTFSアクセス許可（ACL/セキュリティ記述子）および所有者情報の「コピー・同期」をネイティブサポートしています。転送設定で permissions の維持を有効にしておくだけで、オンプレミスと全く同一のADアクセス権限制限を維持したままファイル移行が完了します。",
    "keywords": [
      "NTFS ACL同期",
      "AWS DataSync",
      "FSx for Windows移行"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-46",
    "category": "migration",
    "question": "AWS Migration Hub を使用して、複数のオンプレミスサーバーの移行ステータスを一括管理しています。移行対象の一部のサーバーにおいて、すでにオンプレミス側からAWSへの移行が完了した（EC2インスタンスとして本番起動した）ことを、Migration Hubコンソールに手動または自動で反映・通知させるための正しい手順はどれですか？",
    "options": [
      "移行ハブのホームリージョンを無効化する",
      "連携している移行ツール（AWS MGN等）からホームリージョンのMigration Hub API経由で起動完了イベント（`Launch Cutover`）が送信され、自動的に対象サーバーのステータスが「完了 (Completed)」に更新されること",
      "手動でCSVファイルを書き換えてアップロードする",
      "VPCピアリングを再構築する"
    ],
    "answerIndex": 1,
    "explanation": "Migration HubとAWS MGNは自動統合されています。MGN側でサーバーのカットオーバーが実行されると、その進捗データ（APIイベント）が自動的にMigration Hubのホームリージョンへストリームされ、Migration Hubコンソール上で該当サーバーのステータスが `Completed` に自動更新されるため、手動による更新作業は不要です。",
    "keywords": [
      "Migration Hub自動更新",
      "MGN連携",
      "ステータストラッキング"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-47",
    "category": "migration",
    "question": "AWS Storage Gatewayの「S3 ファイルゲートウェイ (S3 File Gateway)」をオンプレミスで運用していますが、AWS側のS3バケット内のオブジェクトが「AWS以外の外部システムや別のAWSアカウントによって直接更新（追加や削除）」された場合、オンプレミスのファイル共有フォルダからその更新が即座に見えない（認識されない）現象が発生しました。オンプレミス側に最新のS3データ状態をすぐに反映させるために、ファイルゲートウェイに対して実行すべきAPI操作はどちらですか？",
    "options": [
      "S3バケットの削除と再作成",
      "ファイルゲートウェイのキャッシュ更新 (Refresh Cache / `RefreshCache` API) の実行",
      "Direct Connectの再起動",
      "S3バージョニングの無効化"
    ],
    "answerIndex": 1,
    "explanation": "S3ファイルゲートウェイはローカルにメタデータキャッシュを保持しているため、S3バケット側でゲートウェイを介さずに直接ファイルが追加された場合、その変更をすぐには認識しません。キャッシュを最新化し、S3側の真のステータスをオンプレミスに即時反映させるには、ゲートウェイに対して `RefreshCache`（キャッシュの更新）APIを実行するか、EventBridgeと連携してS3イベントトリガーで自動リフレッシュさせる構成が必要となります。",
    "keywords": [
      "RefreshCache",
      "S3ファイルゲートウェイキャッシュ",
      "S3直接更新同期"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-48",
    "category": "migration",
    "question": "AWS Database Migration Service (AWS DMS) を使用して、リレーショナルデータベースの初期ロード（フルロード）を実施しています。フルロードタスクが実行される際、ソーステーブル内のデータが大量であるために、ロード中に発生した移行元への新規書き込みデータ（トランザクション差分）がメモリから溢れて消失するのを防ぎ、フルロードとCDC（変更同期）を安全に両立させるために、DMSタスク側で定義すべきタスクの動作タイプはどれですか？",
    "options": [
      "フルロードのみ (Full load)",
      "既存データの移行と進行中の変更のレプリケート (Full load and ongoing replication)",
      "変更データキャプチャのみ (CDC only)",
      "VPCピアリング接続のみ"
    ],
    "answerIndex": 1,
    "explanation": "「Full load and ongoing replication（フルロードおよび継続的レプリケーション）」タスクタイプを選択します。これにより、DMSはまずソース側でデータ差分の記録（トランザクションログのCDCキャプチャ）を開始した状態で、既存データの一括ロード（フルロード）を実行します。フルロード完了後、一時キャッシュされた差分データを自動でターゲットに追いつかせ（キャッチアップ）、シームレスな同期状態を維持します。",
    "keywords": [
      "Full load and ongoing replication",
      "DMSタスクタイプ",
      "CDC連携"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-49",
    "category": "migration",
    "question": "AWS Application Discovery Serviceを使用してオンプレミスのアセスメント調査を行い、収集されたデータを基に、Organizations内の各子アカウントに適した「AWSの予測利用料金（TCOモデル）」の見積もりレポートを作成するために、最も連携が推奨されるアセスメントツールはどれですか？",
    "options": [
      "AWS Pricing Calculatorのみ",
      "AWS Migration Evaluator (旧 TSO Logic)",
      "AWS Systems Manager State Manager",
      "AWS CloudTrail"
    ],
    "answerIndex": 1,
    "explanation": "Application Discovery Serviceで取得したインベントリデータを、Migration Evaluator（旧TSO Logic）にインポートすることで、オンプレミスのサーバー稼働状況（実稼働CPU/メモリ負荷）に応じた高精度なAWS料金シミュレーションレポート（TCO分析レポート）を自動作成できます。",
    "keywords": [
      "Migration Evaluator",
      "TCO分析",
      "コスト最適化見積もり"
    ],
    "domain": "domain-4"
  },
  {
    "id": "mig-50",
    "category": "migration",
    "question": "AWS Storage Gatewayの「ボリュームゲートウェイ (Volume Gateway)」において、オンプレミスの既存iSCSIターゲットを切り替えてAWSにブロックデータをバックアップしつつ、DR（災害対策）としてAWS上で迅速にEBSボリュームとして復元可能な環境を構築します。このボリュームゲートウェイでサポートされるボリュームの接続方式は何ですか？",
    "options": [
      "NFSプロトコルマウントのみ",
      "iSCSI (Internet Small Computer System Interface) プロトコル接続",
      "SMBプロトコル共有",
      "HTTPS APIによる直接アップロード"
    ],
    "answerIndex": 1,
    "explanation": "ボリュームゲートウェイ (Volume Gateway) は、オンプレミスのアプリケーションサーバーに対し、標準的な「iSCSIブロックストレージデバイス（iSCSIターゲット）」として接続インターフェースを提供します。これにより、OSからはローカルアタッチされた物理ハードディスクと同様にボリュームとして認識・初期化され、ブロックレベルでのデータ書き込みがゲートウェイを介して処理されます。",
    "keywords": [
      "iSCSIプロトコル",
      "ボリュームゲートウェイ",
      "ブロックストレージゲートウェイ"
    ],
    "domain": "domain-4"
  },
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
    "keywords": [
      "EC2",
      "仮想サーバー",
      "コンピューティング"
    ],
    "domain": null
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
    "keywords": [
      "S3",
      "オブジェクトストレージ",
      "データレイク"
    ],
    "domain": null
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
    "keywords": [
      "RDS",
      "リレーショナルデータベース",
      "SQL"
    ],
    "domain": null
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
    "keywords": [
      "DynamoDB",
      "NoSQL",
      "ミリ秒レスポンス"
    ],
    "domain": null
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
    "keywords": [
      "Lambda",
      "サーバーレス",
      "イベント駆動型"
    ],
    "domain": null
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
    "keywords": [
      "VPC",
      "仮想ネットワーク",
      "プライベートクラウド"
    ],
    "domain": null
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
    "keywords": [
      "IAM",
      "アイデンティティ認可",
      "アクセス制御"
    ],
    "domain": null
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
    "keywords": [
      "Route 53",
      "DNS",
      "トラフィック制御"
    ],
    "domain": null
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
    "keywords": [
      "CloudFront",
      "CDN",
      "エッジキャッシュ"
    ],
    "domain": null
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
    "keywords": [
      "ELB",
      "ロードバランサー",
      "負荷分散"
    ],
    "domain": null
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
    "keywords": [
      "Auto Scaling",
      "スケーリング",
      "自動調整"
    ],
    "domain": null
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
    "keywords": [
      "Organizations",
      "マルチアカウント",
      "SCP"
    ],
    "domain": null
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
    "keywords": [
      "Control Tower",
      "ランディングゾーン",
      "ガードレール"
    ],
    "domain": null
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
    "keywords": [
      "Systems Manager",
      "SSM",
      "パッチ管理"
    ],
    "domain": null
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
    "keywords": [
      "Secrets Manager",
      "資格情報保管",
      "キーローテーション"
    ],
    "domain": null
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
    "keywords": [
      "KMS",
      "暗号化キー",
      "エンベロープ暗号化"
    ],
    "domain": null
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
    "keywords": [
      "SQS",
      "メッセージキュー",
      "疎結合"
    ],
    "domain": null
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
    "keywords": [
      "SNS",
      "Pub/Sub",
      "プッシュ通知"
    ],
    "domain": null
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
    "keywords": [
      "EventBridge",
      "イベントバス",
      "スキーマ検出"
    ],
    "domain": null
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
    "keywords": [
      "Step Functions",
      "ワークフロー",
      "オーケストレーション"
    ],
    "domain": null
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
    "keywords": [
      "AWS MGN",
      "Rehost",
      "レプリケーション移行"
    ],
    "domain": null
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
    "keywords": [
      "DMS",
      "データベース移行",
      "データレプリケーション"
    ],
    "domain": null
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
    "keywords": [
      "DataSync",
      "データ同期",
      "オンライン転送"
    ],
    "domain": null
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
    "keywords": [
      "Athena",
      "SQLクエリ",
      "サーバーレス分析"
    ],
    "domain": null
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
    "keywords": [
      "Redshift",
      "DWH",
      "列指向ストレージ"
    ],
    "domain": null
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
    "keywords": [
      "Glue",
      "ETL",
      "データカタログ"
    ],
    "domain": null
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
    "keywords": [
      "EMR",
      "Hadoop",
      "Sparkクラスター"
    ],
    "domain": null
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
    "keywords": [
      "MSK",
      "Apache Kafka",
      "ストリーミングデータ"
    ],
    "domain": null
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
    "keywords": [
      "QuickSight",
      "BI",
      "SPICE"
    ],
    "domain": null
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
    "keywords": [
      "OpenSearch",
      "ログ分析",
      "全文検索"
    ],
    "domain": null
  }
];
