# -*- coding: utf-8 -*-

QUESTIONS_MESSAGING = [
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
        "keywords": ["SQS FIFO", "MessageGroupId", "順序保証"],
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
        "keywords": ["可視性タイムアウト", "重複処理防止", "SQS"],
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
        "keywords": ["SNSファンアウト", "疎結合", "非同期メッセージング"],
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
        "keywords": ["EventBridge", "イベントバス", "イベント駆動型アーキテクチャ"],
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
        "keywords": ["AWS Step Functions", "オーケストレーション", "状態マシン"],
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
        "keywords": ["Amazon MQ", "ActiveMQ", "メッセージブローカー移行"],
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
        "keywords": ["AppSync", "GraphQL", "リアルタイムサブスクリプション"],
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
        "keywords": ["API Gateway スロットリング", "レート制限", "バックエンド保護"],
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
        "keywords": ["Express Workflows", "高速ワークフロー", "Step Functions"],
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
        "keywords": ["ロングポーリング", "SQSコスト最適化", "ポーリング効率化"],
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
        "keywords": ["デッドレターキュー", "DLQ", "耐障害性設計"],
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
        "keywords": ["フィルターポリシー", "SNSサブスクリプション", "メッセージルーティング"],
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
        "keywords": ["SQS Extended Client", "大容量メッセージング", "S3統合パターン"],
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
        "keywords": ["パートナーイベントソース", "SaaS統合", "EventBridge"],
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
        "keywords": ["waitForTaskToken", "承認ワークフロー", "コールバックタスク"],
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
        "keywords": ["ApproximateNumberOfMessagesVisible", "Auto Scaling", "SQSバックログメトリクス"],
        "domain": "domain-3"
    },
    {
        "id": "net-17-dummy", # ID重複を防ぎつつメッセージング用にコンポーネント化
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
        "keywords": ["SNSモバイルプッシュ", "APNs", "FCM"],
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
        "keywords": ["EventBridge Scheduler", "スケジュール実行", "タイムゾーン考慮"],
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
        "keywords": ["AppSync デルタ同期", "オフラインキャッシュ", "競合解決"],
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
        "keywords": ["アーカイブと再再生", "EventBridge Replay", "トラブルシューティング"],
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
        "keywords": ["MessageGroupId", "FIFOキュー並行処理", "SQSパフォーマンス"],
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
        "keywords": ["Amazon SES", "Eメール到達率向上", "送信元ドメイン認証"],
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
        "keywords": ["カスタムイベントバス", "EventBridge", "イベント境界設計"],
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
        "keywords": ["分散マップ", "Distributed Map", "大規模並列バッチ"],
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
        "keywords": ["DelaySeconds", "遅延キュー", "メッセージ属性"],
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
        "keywords": ["リゾルバー", "AppSync Resolver", "GraphQLマッピング"],
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
        "keywords": ["Lambdaオーソライザー", "API Gatewayセキュリティ", "カスタムトークン検証"],
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
        "keywords": ["EventBridge Pipes", "ノーコード連携", "SQS Step Functions直結"],
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
        "keywords": ["ASLエラーハンドリング", "Step Functionsリトライ", "Catchフォールバック"],
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
        "keywords": ["EventBridgeクロスアカウント", "イベントバスポリシー", "PutEvents許可"],
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
        "keywords": ["MessageDeduplicationId", "FIFOキュー重複排除", "SQS重複防止"],
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
        "keywords": ["SNS SMS送信", "Sender ID", "キャリア規制対応"],
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
        "keywords": ["Task Token", "非同期コールバック", "Step Functions"],
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
        "keywords": ["AppSyncキャッシュ", "リゾルバーキャッシュ", "GraphQLパフォーマンス最適化"],
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
        "keywords": ["標準/高速ワークフロー比較", "実行履歴保持", "デバッグログ設計"],
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
        "keywords": ["データキー再利用期間", "SQS暗号化コスト", "KMSスロットリング対策"],
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
        "keywords": ["マッピングテンプレート", "VTL", "API Gatewayカスタム統合"],
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
        "keywords": ["Lambdaリソースポリシー", "クロスアカウントLambda呼び出し", "Step Functions"],
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
        "keywords": ["インプットトランスフォーマー", "EventBridgeターゲット変換", "ノーコード通知整形"],
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
        "keywords": ["AppSyncセキュリティ", "WebSocket認証", "サブスクリプション認可"],
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
        "keywords": ["ReceiveMessageバッチ制限", "SQS仕様", "ポーリング最適化"],
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
        "keywords": ["スキーマレジストリ", "Schema Discovery", "イベント定義管理"],
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
        "keywords": ["Amazon MQ", "アクティブ/スタンバイ", "マルチAZ共有ストレージ"],
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
        "keywords": ["TimeoutSeconds", "ASLタイムアウト設定", "Step Functions"],
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
        "keywords": ["ChangeMessageVisibility", "可視性タイムアウト延長", "重複取得回避"],
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
        "keywords": ["配信ステータスログ", "SNSトラブルシューティング", "CloudWatch Logs"],
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
        "keywords": ["API Gateway キャッシュ", "TTL", "バックエンド負荷軽減"],
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
        "keywords": ["http:call", "外部API直接統合", "Step Functionsサードパーティ"],
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
        "keywords": ["EventBridge Scheduler DLQ", "再試行ポリシー", "メッセージ消失防止"],
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
        "keywords": ["WebSocket API", "API Gateway", "Connection ID管理"],
        "domain": "domain-2"
    }
]
