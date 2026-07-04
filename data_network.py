# -*- coding: utf-8 -*-

QUESTIONS_NETWORK = [
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
        "keywords": ["AWS Global Accelerator", "Anycast IP", "レイテンシー改善"],
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
        "keywords": ["AWS Transit Gateway", "ネットワークハブ", "マルチVPC"],
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
        "keywords": ["Route 53 Resolver", "ハイブリッドDNS", "エンドポイント"],
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
        "keywords": ["トランジット VIF", "Direct Connect", "Transit Gateway"],
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
        "keywords": ["CloudFront", "AWS WAF", "DDoS対策"],
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
        "keywords": ["ゲートウェイエンドポイント", "DynamoDB", "VPCエンドポイント"],
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
        "keywords": ["重み付けルーティング", "ヘルスチェック", "Route 53"],
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
        "keywords": ["Direct Connect ゲートウェイ", "マルチリージョン", "ハイブリッド接続"],
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
        "keywords": ["CloudFront", "ACM", "バージニア北部 us-east-1"],
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
        "keywords": ["AWS Client VPN", "リモートアクセス", "OpenVPN"],
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
        "keywords": ["AWS Network Firewall", "ステートフル検査", "IDS/IPS"],
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
        "keywords": ["Origin Shield", "キャッシュヒット率", "オリジン保護"],
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
        "keywords": ["VPCピアリング", "CIDR重複制限", "推移的ルーティング"],
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
        "keywords": ["署名付きクッキー", "プライベートコンテンツ配信", "HLSストリーミング"],
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
        "keywords": ["Transit Gateway", "ルートテーブルアソシエーション", "ネットワーク隔離"],
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
        "keywords": ["地理的近接性ルーティング", "バイアス設定", "位置情報"],
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
        "keywords": ["ALB", "NLB", "通信レイヤーの使い分け"],
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
        "keywords": ["ネットワークACL", "セキュリティグループ", "ステートフル/ステートレス"],
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
        "keywords": ["プライベートAPI", "API Gateway", "AWS PrivateLink"],
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
        "keywords": ["NAT Gateway ポート枯渇", "Elastic IP追加", "スロットリング回避"],
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
        "keywords": ["Egress VPC", "Transit Gatewayルーティング", "セキュリティ一元化"],
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
        "keywords": ["Virtual Private Gateway", "VGW", "BGPダイナミックルーティング"],
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
        "keywords": ["動的オリジン", "CloudFrontビヘイビア", "キャッシュ無効化"],
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
        "keywords": ["LAG", "Direct Connect", "帯域冗長化"],
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
        "keywords": ["プライベートホストゾーン", "VPC関連付け", "クロスアカウント名前解決"],
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
        "keywords": ["トラフィックダイヤル", "Global Accelerator", "トラフィック制御"],
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
        "keywords": ["VPCフローログ", "ネットワーク監査", "接続ログ収集"],
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
        "keywords": ["Direct Connect冗長化", "高可用性ハイブリッド", "ロケーション分散"],
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
        "keywords": ["AWS WAF", "CloudFrontセキュリティ", "エッジブロック"],
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
        "keywords": ["マルチバリュー回答ルーティング", "DNSロードバランシング", "ヘルスチェック連携"],
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
        "keywords": ["Site-to-Site VPN", "BGP動的ルーティング", "自動フェイルオーバー"],
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
        "keywords": ["VPCエンドポイントポリシー", "データ流出防止", "S3セキュリティガードレール"],
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
        "keywords": ["転送ルール", "Route 53 Resolver", "ハイブリッドDNS解決"],
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
        "keywords": ["OAC", "S3直リンク防止", "CloudFrontオリジン保護"],
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
        "keywords": ["DNSSEC", "Route 53 DNSSEC", "KMS非対称キー"],
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
        "keywords": ["セカンダリCIDR", "VPC拡張", "IPアドレス枯渇対策"],
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
        "keywords": ["Transit Gateway ピアリング", "スタティックルーティング", "リージョン間接続"],
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
        "keywords": ["パブリックサブネット", "インターネットゲートウェイ", "ルーティング"],
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
        "keywords": ["SSLオフロード", "ターゲットグループHTTPS", "転送中データ暗号化"],
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
        "keywords": ["CloudFront Functions", "軽量エッジ操作", "ヘッダー書き換え"],
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
        "keywords": ["AWS Network Firewall", "ドメインホワイトリスト", "アウトバウンド制御"],
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
        "keywords": ["レイテンシーベースルーティング", "DNS解決最適化", "グローバルルーティング"],
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
        "keywords": ["署名付きURL", "コンテンツ配信保護", "CloudFront"],
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
        "keywords": ["AS Path Prepending", "BGP優先度制御", "ハイブリッドバックアップパス"],
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
        "keywords": ["TGWルーティング簡素化", "集約ルート", "ネットワーク設計"],
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
        "keywords": ["Global Accelerator", "Anycast IP", "固定IP設計"],
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
        "keywords": ["Elastic IP", "NATゲートウェイ", "アウトバウンドIP固定"],
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
        "keywords": ["Direct Connect Gateway", "BGP自動フェイルオーバー", "冗長ルーティング"],
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
        "keywords": ["Route 53 Resolver", "インバウンドエンドポイント", "AZ冗長化"],
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
        "keywords": ["AWS Network Firewall", "GWLB", "DPI (ディープパケットインスペクション)"],
        "domain": "domain-1"
    }
]
