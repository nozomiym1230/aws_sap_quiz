# -*- coding: utf-8 -*-

QUESTIONS_MIGRATION = [
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
        "keywords": ["AWS MGN", "Rehost", "ブロックレベルレプリケーション"],
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
        "keywords": ["AWS Snowball Edge", "オフラインデータ転送", "帯域制限"],
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
        "keywords": ["Application Discovery Service", "エージェントレスコネクター", "移行アセスメント"],
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
        "keywords": ["AWS DataSync", "オンラインデータ転送", "整合性チェック"],
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
        "keywords": ["7 Rs", "Rehost", "リフト&シフト"],
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
        "keywords": ["ステージングエリア", "AWS MGN", "レプリケーションサーバー"],
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
        "keywords": ["AWS DMS LOBモード", "フルLOB", "制限付きLOB"],
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
        "keywords": ["AWS Migration Hub", "移行追跡", "プロジェクト一元化"],
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
        "keywords": ["AWS Snowball Edge", "Compute Optimized", "エッジコンピューティング"],
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
        "keywords": ["Application Discovery", "Discovery Agent", "ネットワーク依存関係マッピング"],
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
        "keywords": ["AWS DataSync PrivateLink", "VPCエンドポイント", "プライベートデータ転送"],
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
        "keywords": ["SCT", "移行アセスメントレポート", "データベーススキーマ変換"],
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
        "keywords": ["AWS MGN", "テストインスタンス起動", "移行テスト"],
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
        "keywords": ["AWS DMS", "フルロード高速化", "インデックス無効化"],
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
        "keywords": ["Migration Evaluator", "TCO分析", "Right-sizing"],
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
        "keywords": ["DataSync帯域制限", "業務回線保護", "同期スケジュール"],
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
        "keywords": ["CAF", "6つのパースペクティブ", "移行フレームワーク"],
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
        "keywords": ["AWS Snowmobile", "エクサバイト規模移行", "物理輸送"],
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
        "keywords": ["DMSテーブルマッピング", "変換ルール", "データ定義変更"],
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
        "keywords": ["起動後アクション", "AWS MGN", "プロビジョニング自動化"],
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
        "keywords": ["AWS MGNポート1500", "レプリケーション暗号化", "セキュリティ"],
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
        "keywords": ["DMSデータ検証", "Data Validation", "データ整合性"],
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
        "keywords": ["Route 53 Resolver", "ハイブリッドネットワーク", "VPN/Direct Connect前提"],
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
        "keywords": ["Application Discovery", "エージェント型/エージェントレス", "移行調査制約"],
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
        "keywords": ["Migration Evaluator", "移行コスト試算", "Discovery Service連携"],
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
        "keywords": ["Migration Hub", "アプリケーション定義", "移行管理"],
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
        "keywords": ["Volume Gateway DR", "EBSスナップショット復元", "災害対策復旧"],
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
        "keywords": ["DMS容量不足", "レプリケーションインスタンス拡張", "トラブルシューティング"],
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
        "keywords": ["Application Discovery", "アセスメント収集データ", "仕様"],
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
        "keywords": ["VM Import/Export", "VMイメージ移行", "AMI変換"],
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
        "keywords": ["AWS MGN 起動テンプレート", "大量サーバー移行", "インフラ自動プロビジョニング"],
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
        "keywords": ["DMS SQL Server CDC", "データベースレプリケーション", "DMS前提条件"],
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
        "keywords": ["スナップショットスケジュール", "ボリュームゲートウェイ", "バックアップタイミング"],
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
        "keywords": ["エージェントレス制限", "Application Discovery", "インベントリデータ"],
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
        "keywords": ["DataSyncパフォーマンス", "エージェントサイジング", "10Gbps帯域幅"],
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
        "keywords": ["ホームリージョン", "Migration Hub前提設定", "移行ステータス同期"],
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
        "keywords": ["S3ファイルゲートウェイ同期", "リアルタイムオブジェクト書き込み", "仕様"],
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
        "keywords": ["DMS並列ロード", "フルロードチューニング", "大量データ移行"],
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
        "keywords": ["転送中データ暗号化", "Discovery Service", "セキュリティ"],
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
        "keywords": ["キャッシュ型ボリュームゲートウェイ", "S3プライマリ", "ローカルキャッシュ"],
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
        "keywords": ["AWS MGN同期ステータス", "Continuous", "カットオーバー前提条件"],
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
        "keywords": ["Binary Reader", "DMS Oracle CDC", "レプリケーション遅延削減"],
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
        "keywords": ["SSM PrivateLink", "VPCエンドポイント", "オンプレミスSSM管理"],
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
        "keywords": ["Discovery Agent制限", "アセスメント範囲", "仕様"],
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
        "keywords": ["NTFS ACL同期", "AWS DataSync", "FSx for Windows移行"],
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
        "keywords": ["Migration Hub自動更新", "MGN連携", "ステータストラッキング"],
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
        "keywords": ["RefreshCache", "S3ファイルゲートウェイキャッシュ", "S3直接更新同期"],
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
        "keywords": ["Full load and ongoing replication", "DMSタスクタイプ", "CDC連携"],
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
        "keywords": ["Migration Evaluator", "TCO分析", "コスト最適化見積もり"],
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
        "keywords": ["iSCSIプロトコル", "ボリュームゲートウェイ", "ブロックストレージゲートウェイ"],
        "domain": "domain-4"
    }
]
