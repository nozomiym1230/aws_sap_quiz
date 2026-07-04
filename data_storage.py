# -*- coding: utf-8 -*-

QUESTIONS_STORAGE = [
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
        "keywords": ["S3 Intelligent-Tiering", "ストレージクラス", "コスト最適化"],
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
        "keywords": ["S3ライフサイクル", "Glacier移行制限", "早期削除料金"],
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
        "keywords": ["S3オブジェクトロック", "コンプライアンスモード", "WORMストレージ"],
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
        "keywords": ["S3 CRR", "バージョニング", "レプリケーション"],
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
        "keywords": ["S3アクセスポイント", "バケットポリシー", "アクセス制御"],
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
        "keywords": ["MFA Delete", "バージョニング", "削除保護"],
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
        "keywords": ["EBS io2 Block Express", "IOPS", "高性能ブロックストレージ"],
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
        "keywords": ["FSR", "EBSスナップショット", "ウォームアップ"],
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
        "keywords": ["EFS", "共有ファイルシステム", "ライフサイクル管理"],
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
        "keywords": ["FSx for Lustre", "HPC", "S3統合"],
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
        "keywords": ["FSx for Windows", "SMB", "Active Directory"],
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
        "keywords": ["FSx for NetApp ONTAP", "NetApp", "データ移行"],
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
        "keywords": ["S3 File Gateway", "S3オブジェクト", "キャッシュ"],
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
        "keywords": ["保管型ボリュームゲートウェイ", "iSCSI", "オンプレミス保持"],
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
        "keywords": ["Tape Gateway", "仮想テープライブラリ", "Glacierアーカイブ"],
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
        "keywords": ["AWS Backup", "クロスアカウントコピー", "一元管理"],
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
        "keywords": ["S3 Transfer Acceleration", "エッジロケーション", "高速アップロード"],
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
        "keywords": ["S3一貫性モデル", "強力な整合性", "仕様"],
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
        "keywords": ["EBS暗号化", "KMS", "スナップショット継承"],
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
        "keywords": ["EFSセキュリティグループ", "NFSポート2049", "マウントターゲット"],
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
        "keywords": ["Amazon Macie", "S3機密データ検出", "データ保護監査"],
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
        "keywords": ["非現行バージョン", "S3ライフサイクル", "コストスケーリング"],
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
        "keywords": ["S3 PrivateLink", "インターフェイスエンドポイント", "オンプレミスS3アクセス"],
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
        "keywords": ["Presigned URL", "S3アクセスエラー", "IAM権限"],
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
        "keywords": ["EFSスループット", "エラスティックモード", "従量課金"],
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
        "keywords": ["FSx for Lustre", "スクラッチストレージ", "コスト削減"],
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
        "keywords": ["AWS Backup", "クロスアカウント暗号化", "KMSキーポリシー"],
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
        "keywords": ["DataSync", "Storage Gateway", "使い分け"],
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
        "keywords": ["S3バケットポリシー", "aws:SecureTransport", "暗号化強制"],
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
        "keywords": ["Vault Lock", "ボールトロック", "ランサムウェア対策"],
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
        "keywords": ["DataSync", "POSIXメタデータ", "EFS同期"],
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
        "keywords": ["マルチパートアップロード", "S3アップロード", "並列処理"],
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
        "keywords": ["aws:sourceVpce", "VPCエンドポイントポリシー", "S3プライベート接続"],
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
        "keywords": ["S3インベントリ", "オブジェクト監査", "メタデータレポート"],
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
        "keywords": ["AbortIncompleteMultipartUpload", "S3コスト削減", "マルチパートクリーンアップ"],
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
        "keywords": ["S3 Express One Zone", "超低遅延ストレージ", "機械学習キャッシュ"],
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
        "keywords": ["DFS", "FSx for Windows", "ハイブリッドファイルサーバー"],
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
        "keywords": ["Modify Volume", "ファイルシステム拡張", "オンラインサイズ変更"],
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
        "keywords": ["S3 Access Grants", "AD ID連携", "データディレクトリ認可"],
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
        "keywords": ["EFSアクセスポイント", "コンテナ永続ストレージ", "コンテナマウント制限"],
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
        "keywords": ["Object Ownership", "ACL無効化", "クロスアカウントS3コピー"],
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
        "keywords": ["FabricPool", "FSx for NetApp ONTAP", "階層化ストレージ"],
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
        "keywords": ["EBSマルチアタッチ", "クラスタファイルシステム", "データ破損防止"],
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
        "keywords": ["S3 Select", "SQLフィルタリング", "データスキャンの最適化"],
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
        "keywords": ["ブロックパブリックアクセス", "S3パブリック公開禁止", "アカウントガードレール"],
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
        "keywords": ["S3ライフサイクルコスト", "最小オブジェクトサイズ制限", "移行手数料"],
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
        "keywords": ["AWS Backup", "クロスリージョンコピー", "災害対策 DR"],
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
        "keywords": ["AWS DataSync", "SFTPロケーション", "エージェントレスデータ転送"],
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
        "keywords": ["S3バケットキー", "SSE-KMS", "KMSスロットリング回避"],
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
        "keywords": ["EFSスループット", "プロビジョニングスループット", "EFSパフォーマンス最適化"],
        "domain": "domain-3"
    }
]
