# -*- coding: utf-8 -*-

QUESTIONS_COMPUTE = [
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
        "keywords": ["EFA", "HPC", "レイテンシー"],
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
        "keywords": ["クラスタープレイスメントグループ", "レイテンシー", "EC2"],
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
        "keywords": ["Provisioned Concurrency", "コールドスタート", "Lambda"],
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
        "keywords": ["Elastic Beanstalk", "Immutableデプロイ", "ロールバック"],
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
        "keywords": ["AWS Batch", "マルチノード並列", "MPI"],
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
        "keywords": ["ECS", "EKS", "コンテナ統合"],
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
        "keywords": ["CloudFront Functions", "Lambda@Edge", "エッジコンピューティング"],
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
        "keywords": ["Nitro System", "ハイパーバイザー", "セキュリティ"],
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
        "keywords": ["ライフサイクルフック", "Auto Scaling", "クリーンアップ"],
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
        "keywords": ["Lambda Destinations", "非同期呼び出し", "DLQ"],
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
        "keywords": ["App Runner", "コンテナデプロイ", "フルマネージド"],
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
        "keywords": ["AWS Outposts", "ハイブリッドクラウド", "オンプレミス"],
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
        "keywords": ["インスタンスストア", "一時ストレージ", "高速I/O"],
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
        "keywords": ["ターゲット追跡", "Auto Scaling", "スケーリングポリシー"],
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
        "keywords": ["起動テンプレート", "Launch Template", "バージョニング"],
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
        "keywords": ["Patch Manager", "Systems Manager", "パッチ適用"],
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
        "keywords": ["CodeDeploy", "Canary", "Lambdaデプロイ"],
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
        "keywords": ["IMDSv2", "SSRF対策", "インスタンスメタデータ"],
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
        "keywords": ["Lightsail", "VPS", "定額プラン"],
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
        "keywords": ["休止状態", "Hibernation", "EBS暗号化"],
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
        "keywords": ["Run Command", "Systems Manager", "一元運用管理"],
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
        "keywords": ["Lambda VPC", "NAT Gateway", "Elastic IP"],
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
        "keywords": ["スケジュールスケーリング", "Auto Scaling", "Beanstalkスケーリング"],
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
        "keywords": ["Fargate", "ephemeralStorage", "サーバーレスコンテナ"],
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
        "keywords": ["App Runner", "コンコンランシー", "オートスケーリング"],
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
        "keywords": ["Quick Setup", "Systems Manager", "SSM Agent自動構成"],
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
        "keywords": ["ゾーンバランシング", "Auto Scaling", "マルチAZ冗長化"],
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
        "keywords": ["起動テンプレート共有", "AMI共有", "クロスアカウントEC2"],
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
        "keywords": ["CloudWatchアラーム", "Lambdaエラー検知", "SNS通知"],
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
        "keywords": ["SSM PrivateLink", "VPCエンドポイント", "オンプレミスSSM管理"],
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
        "keywords": ["AWS Batch", "最小vCPU制限", "コストスケーリング"],
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
        "keywords": ["Elastic Beanstalk", "ALB", "SSL証明書"],
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
        "keywords": ["IRSA", "EKS", "最小特権原則"],
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
        "keywords": ["ALBRequestCountPerTarget", "ECS Fargate", "Auto Scaling"],
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
        "keywords": ["VM Import/Export", "AWS CLI", "VMイメージ移行"],
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
        "keywords": ["RDS Proxy", "接続プーリング", "Lambda DB接続制限"],
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
        "keywords": ["Session Manager", "SSM Agent", "EC2リモート接続"],
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
        "keywords": ["Lambda Layers", "共通ライブラリ", "デプロイ最適化"],
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
        "keywords": ["スポットインスタンス", "インスタンス多様化", "Auto Scaling"],
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
        "keywords": ["ECS Secrets", "Fargate環境変数", "タスク実行ロール"],
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
        "keywords": ["組織のConfigルール", "Control Tower", "自動修復"],
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
        "keywords": ["コンテナ再利用", "グローバル変数", "Lambda初期化最適化"],
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
        "keywords": ["ECSコンテナヘルスチェック", "セルフヒーリング", "Fargate"],
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
        "keywords": ["高解像度メトリクス", "CloudWatch Agent", "パフォーマンス監査"],
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
        "keywords": ["キャパシティプロバイダー", "ECS EC2起動タイプ", "オートスケーリング"],
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
        "keywords": ["Application Discovery", "エージェントレスコネクター", "移行アセスメント"],
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
        "keywords": ["CloudWatch Logs", "CloudWatch Agent", "セキュリティログ監査"],
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
        "keywords": ["タイムアウト制限", "Lambda同時実行数最適化", "耐障害性設計"],
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
        "keywords": ["Fargate起動高速化", "ECRイメージPull", "コンテナ最適化"],
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
        "keywords": ["Maintenance Windows", "Patch Manager連携", "ガバナンス管理"],
        "domain": "domain-1"
    }
]
