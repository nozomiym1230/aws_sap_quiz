# -*- coding: utf-8 -*-

QUESTIONS_DATABASE = [
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
        "keywords": ["Aurora Global Database", "RTO/RPO", "グローバルレプリケーション"],
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
        "keywords": ["DynamoDB", "ホットパーティション", "カーディナリティ"],
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
        "keywords": ["IAMデータベース認証", "RDS", "セキュリティ"],
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
        "keywords": ["QLDB", "不変台帳", "ハッシュチェーン"],
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
        "keywords": ["Amazon Neptune", "グラフデータベース", "相関関係"],
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
        "keywords": ["SCT", "DMS", "データベース移行"],
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
        "keywords": ["Redshift RA3", "コンピュートとストレージの分離", "DWH"],
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
        "keywords": ["DAX", "DynamoDB", "インメモリキャッシュ"],
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
        "keywords": ["ElastiCache Redis", "マルチAZ", "高可用性"],
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
        "keywords": ["Redshift Spectrum", "S3データレイク", "外部テーブル"],
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
        "keywords": ["DocumentDB", "MongoDB互換", "ドキュメントDB"],
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
        "keywords": ["DynamoDB Streams", "Lambda連携", "イベント駆動設計"],
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
        "keywords": ["優先ティア", "Auroraフェイルオーバー", "高可用性"],
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
        "keywords": ["DynamoDB TTL", "自動データ破棄", "コスト最適化"],
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
        "keywords": ["リードレプリカ", "RDS", "クエリ分散"],
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
        "keywords": ["Keyspaces", "Cassandra", "サーバーレスDB"],
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
        "keywords": ["Auroraクローン", "Copy-on-Write", "検証環境構築"],
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
        "keywords": ["メンテナンスウィンドウ", "自動アップグレード", "RDS"],
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
        "keywords": ["GSI", "LSI", "DynamoDBインデックス"],
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
        "keywords": ["RDS CNAME切り替え", "Multi-AZフェイルオーバー", "DNS書き換え"],
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
        "keywords": ["DynamoDB Global Tables", "アクティブ・アクティブ", "競合解決"],
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
        "keywords": ["Aurora Auto Scaling", "リードレプリカスケーリング", "パフォーマンス最適化"],
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
        "keywords": ["Storage Autoscaling", "RDS自動拡張", "容量枯渇防止"],
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
        "keywords": ["DynamoDBオンデマンド", "スロットリング回避", "スパイク耐性"],
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
        "keywords": ["AWS DMS", "CDC", "最小ダウンタイム移行"],
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
        "keywords": ["Write-Through", "ElastiCache戦略", "データ整合性"],
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
        "keywords": ["Amazon Athena", "サーバーレスクエリ", "S3データスキャン"],
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
        "keywords": ["Redis AUTH", "ElastiCache暗号化", "データセキュリティ"],
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
        "keywords": ["クラスターエンドポイント", "ライターエンドポイント", "データ整合性"],
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
        "keywords": ["Amazon Timestream", "時系列データベース", "IoTログ収集"],
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
        "keywords": ["AWS SCT", "スキーマ変換", "移行アセスメント"],
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
        "keywords": ["Amazon ElastiCache", "インメモリキャッシュ", "クエリキャッシュ"],
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
        "keywords": ["DynamoDB RCU", "強力な一貫性", "結果整合性"],
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
        "keywords": ["Aurora Serverless v2", "ACU", "シームレススケーリング"],
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
        "keywords": ["AWS DMS", "スキーマ作成", "レプリケーション"],
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
        "keywords": ["条件付き書き込み", "楽観的排他制御", "DynamoDB API"],
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
        "keywords": ["Concurrency Scaling", "Redshift同時実行スケーリング", "パフォーマンス最適化"],
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
        "keywords": ["AWS DMS", "VPC接続", "ハイブリッドセキュア接続"],
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
        "keywords": ["RDSスナップショット共有", "KMSカスタマー管理キー", "クロスアカウントリストア"],
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
        "keywords": ["RDS Proxy", "接続プーリング", "データベースパフォーマンス改善"],
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
        "keywords": ["TransactWriteItems", "ACIDトランザクション", "DynamoDBトランザクション"],
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
        "keywords": ["Survivable Cache Buffer Pool", "バッファプールキャッシュ", "フェイルオーバー高速化"],
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
        "keywords": ["Timestreamデータ保持ポリシー", "階層化ストレージ", "時系列データ管理"],
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
        "keywords": ["RDS Blue/Green デプロイ", "メジャーアップグレード", "ダウンタイム最小化"],
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
        "keywords": ["DynamoDB Streams", "Global Tables", "レプリケーション要件"],
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
        "keywords": ["DMSレプリケーションインスタンス配置", "移行設計", "ネットワークレイテンシー最適化"],
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
        "keywords": ["RDS Modify", "マルチAZオンライン移行", "耐障害性設計"],
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
        "keywords": ["DynamoDBスロットリング", "RCU設計", "強い一貫性のある読み取り"],
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
        "keywords": ["RDS Proxy", "フェイルオーバー可用性", "接続管理"],
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
        "keywords": ["Performance Insights", "スロークエリ特定", "データベース診断"],
        "domain": "domain-3"
    }
]
