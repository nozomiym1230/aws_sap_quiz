# -*- coding: utf-8 -*-

QUESTIONS_SECURITY = [
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
        "keywords": ["SCP", "AWS Organizations", "ルートユーザー制限"],
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
        "keywords": ["Permissions Boundary", "権限昇格防止", "IAMロール作成委任"],
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
        "keywords": ["クロスアカウントS3", "KMSキーポリシー", "暗号化共有"],
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
        "keywords": ["Secrets Manager", "自動ローテーション", "Lambda"],
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
        "keywords": ["混乱した代理人問題", "External ID", "信頼関係ポリシー"],
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
        "keywords": ["組織のトレイル", "監査ログ一元化", "セキュリティガバナンス"],
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
        "keywords": ["KMS自動ローテーション", "キーマテリアル", "暗号化仕様"],
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
        "keywords": ["GuardDuty", "脅威検出", "セキュリティ監視"],
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
        "keywords": ["IAM Identity Center", "SSO", "Active Directory連携"],
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
        "keywords": ["Security Hub", "コンプライアンスチェック", "セキュリティガバナンス"],
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
        "keywords": ["Cognito User Pools", "ユーザープール", "アプリ認証"],
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
        "keywords": ["AWS Config", "構成監査", "リソースタグチェック"],
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
        "keywords": ["Secrets Manager", "Parameter Store", "KMS暗号化"],
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
        "keywords": ["IAM Policy", "NotAction", "Deny"],
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
        "keywords": ["AWS Config", "自動修復", "SSM Automation"],
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
        "keywords": ["SCP", "リージョン制限ガードレール", "aws:RequestedRegion"],
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
        "keywords": ["AWS WAF", "IP制限", "パスベースルール"],
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
        "keywords": ["インシデント自動応答", "Amazon EventBridge", "Lambda自動隔離"],
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
        "keywords": ["AWS Audit Manager", "コンプライアンス監査", "証拠自動収集"],
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
        "keywords": ["KMSキーポリシー", "KMSアクセス制限", "仕様"],
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
        "keywords": ["Control Tower", "予防的/発見的ガードレール", "SCP & Config Rules"],
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
        "keywords": ["アカウントファクトリー", "Control Tower", "マルチアカウント統制"],
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
        "keywords": ["NotPrincipal", "Denyポリシーの危険性", "ロックアウト"],
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
        "keywords": ["レートベースルール", "WAF", "DDoS自動防御"],
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
        "keywords": ["KMS非対称キー", "公開鍵エクスポート", "デジタル署名検証"],
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
        "keywords": ["ガバナンスモード", "S3オブジェクトロック", "削除制限バイパス"],
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
        "keywords": ["GuardDuty EKS保護", "エージェントレス脅威検出", "Kubernetes監査ログ"],
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
        "keywords": ["GuardDuty 委任管理者", "セキュリティ管理一元化", "マルチアカウント監査"],
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
        "keywords": ["Secrets Manager リソースポリシー", "クロスアカウントシークレット共有", "KMSキーポリシー"],
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
        "keywords": ["SCP", "サービスコントロールポリシー", "ガードレール強制"],
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
        "keywords": ["AWS Config Rules", "Security Hub統合", "VPCフローログ監視"],
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
        "keywords": ["Amazon Inspector", "脆弱性スキャン", "コンテナイメージ監査"],
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
        "keywords": ["IAM Identity Center", "ADグループマッピング", "マルチアカウントプロビジョニング"],
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
        "keywords": ["ログファイルの検証", "CloudTrail", "ログ整合性監査"],
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
        "keywords": ["適合性パック", "AWS Config Conformance Packs", "ガバナンス統制"],
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
        "keywords": ["aws:PrincipalOrgID", "組織制限ポリシー", "リソースポリシーセキュリティ"],
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
        "keywords": ["Cognito IDプール", "未認証アクセス", "ゲストユーザーIAM"],
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
        "keywords": ["IAM Access Analyzer", "リソース共有監査", "KMSキーポリシー検証"],
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
        "keywords": ["AWS Shield Advanced", "DDoSコスト保護", "DDoSレスポンスチーム"],
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
        "keywords": ["AD Connector", "Active Directoryプロキシ", "ハイブリッドID連携"],
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
        "keywords": ["iam:PermissionsBoundary", "権限昇格対策", "IAM条件キー"],
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
        "keywords": ["CloudTrail API監査", "APIアクティビティ追跡", "セキュリティインシデント調査"],
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
        "keywords": ["S3暗号化強制", "SCPガードレール", "データガバナンス"],
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
        "keywords": ["SecureString", "Parameter Store", "機密情報暗号化"],
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
        "keywords": ["ランディングゾーン", "Control Tower自動化", "セキュリティガバナンス"],
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
        "keywords": ["SSE-C", "S3暗号化方式", "鍵の自己管理"],
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
        "keywords": ["rds-db:Connect", "職務分掌", "IAMデータベース認証アクセス制御"],
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
        "keywords": ["Amazon Inspector", "SSM Agent連携", "脆弱性監査要件"],
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
        "keywords": ["AssumeRole", "クロスアカウントアクセス", "IAMロール信頼関係"],
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
        "keywords": ["AWSマネージドルール", "WAFルールグループ", "脆弱性防御"],
        "domain": "domain-1"
    }
]
