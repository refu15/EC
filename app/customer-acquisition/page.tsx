"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  Users,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Target,
  ShoppingCart,
  Mail,
  Filter,
  Download,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function CustomerAcquisition() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="mr-4">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  戻る
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">新規顧客獲得分析</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Select defaultValue="30days">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">過去7日</SelectItem>
                  <SelectItem value="30days">過去30日</SelectItem>
                  <SelectItem value="90days">過去90日</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                フィルター
              </Button>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                レポート出力
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* KPI Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">新規顧客数</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  前月比 +18.5%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">平均CPA</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">¥2,450</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingDown className="h-3 w-3 text-green-500 mr-1" />
                  前月比 -8.2%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">初回購入率</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68.5%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  前月比 +3.2%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">30日継続率</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42.3%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  前月比 +5.1%
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="channels" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="channels">獲得チャネル別</TabsTrigger>
              <TabsTrigger value="products">ファーストオーダー</TabsTrigger>
              <TabsTrigger value="funnel">購入ファネル</TabsTrigger>
              <TabsTrigger value="cohort">コホート分析</TabsTrigger>
            </TabsList>

            {/* 獲得チャネル別分析 */}
            <TabsContent value="channels" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>チャネル別CPA・コスパ分析</CardTitle>
                    <CardDescription>獲得効率の良いチャネルを特定</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        channel: "Google広告",
                        customers: 456,
                        cpa: 2890,
                        ltv: 45600,
                        roi: 1578,
                        quality: "high",
                      },
                      {
                        channel: "Facebook広告",
                        customers: 234,
                        cpa: 3450,
                        ltv: 38900,
                        roi: 1128,
                        quality: "medium",
                      },
                      {
                        channel: "Instagram広告",
                        customers: 189,
                        cpa: 2100,
                        ltv: 52300,
                        roi: 2490,
                        quality: "high",
                      },
                      {
                        channel: "自然検索",
                        customers: 167,
                        cpa: 0,
                        ltv: 67800,
                        roi: 0,
                        quality: "premium",
                      },
                      {
                        channel: "紹介・口コミ",
                        customers: 98,
                        cpa: 890,
                        ltv: 78900,
                        roi: 8865,
                        quality: "premium",
                      },
                      {
                        channel: "アフィリエイト",
                        customers: 67,
                        cpa: 4200,
                        ltv: 23400,
                        roi: 557,
                        quality: "low",
                      },
                      {
                        channel: "メール",
                        customers: 23,
                        cpa: 1200,
                        ltv: 34500,
                        roi: 2875,
                        quality: "medium",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{item.channel}</span>
                            <Badge
                              variant={
                                item.quality === "premium"
                                  ? "default"
                                  : item.quality === "high"
                                    ? "secondary"
                                    : item.quality === "medium"
                                      ? "outline"
                                      : "destructive"
                              }
                            >
                              {item.customers}人
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold">
                              CPA ¥{item.cpa === 0 ? "無料" : item.cpa.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500">ROI {item.roi === 0 ? "∞" : item.roi + "%"}</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                          <div>LTV: ¥{item.ltv.toLocaleString()}</div>
                          <div>効率: {item.cpa === 0 ? "最高" : (item.ltv / item.cpa).toFixed(1) + "倍"}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>チャネル別最適化提案</CardTitle>
                    <CardDescription>コスパの良い獲得源への予算集中</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">高効率チャネル</span>
                        <Badge variant="default">予算増額</Badge>
                      </div>
                      <p className="text-sm text-green-700 mb-2">Instagram広告・紹介口コミ・自然検索</p>
                      <ul className="text-xs text-green-600 space-y-1">
                        <li>• Instagram広告予算を50%増額</li>
                        <li>• 紹介プログラムの報酬アップ</li>
                        <li>• SEO対策の強化継続</li>
                        <li>• インフルエンサー連携拡大</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">安定チャネル</span>
                        <Badge variant="secondary">現状維持</Badge>
                      </div>
                      <p className="text-sm text-blue-700 mb-2">Google広告・Facebook広告</p>
                      <ul className="text-xs text-blue-600 space-y-1">
                        <li>• キーワード最適化継続</li>
                        <li>• ターゲティング精度向上</li>
                        <li>• クリエイティブA/Bテスト</li>
                        <li>• ランディングページ改善</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        <span className="font-medium text-red-800">低効率チャネル</span>
                        <Badge variant="destructive">予算削減</Badge>
                      </div>
                      <p className="text-sm text-red-700 mb-2">アフィリエイト</p>
                      <ul className="text-xs text-red-600 space-y-1">
                        <li>• 成果報酬の見直し</li>
                        <li>• パートナー選定の厳格化</li>
                        <li>• 予算を他チャネルに移行</li>
                        <li>• 品質重視の運用に転換</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* ファーストオーダー分析 */}
            <TabsContent value="products" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>初回購入商品ランキング</CardTitle>
                    <CardDescription>「入口商品」の把握と最適化</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        product: "お試しセット（美容）",
                        orders: 234,
                        price: 1980,
                        repeat: 78.5,
                        category: "entry",
                      },
                      {
                        product: "ワイヤレスイヤホン",
                        orders: 189,
                        price: 3980,
                        repeat: 45.2,
                        category: "standard",
                      },
                      {
                        product: "スマートウォッチ",
                        orders: 156,
                        price: 12800,
                        repeat: 62.3,
                        category: "premium",
                      },
                      {
                        product: "サプリメント30日分",
                        orders: 134,
                        price: 2480,
                        repeat: 89.6,
                        category: "entry",
                      },
                      {
                        product: "ファッション小物",
                        orders: 98,
                        price: 1580,
                        repeat: 34.7,
                        category: "low",
                      },
                      {
                        product: "書籍・雑誌",
                        orders: 67,
                        price: 1200,
                        repeat: 23.4,
                        category: "low",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{item.product}</span>
                            <Badge variant="outline">#{index + 1}</Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold">¥{item.price.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">{item.orders}件</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs text-gray-600">リピート率: {item.repeat}%</div>
                          <Badge
                            variant={
                              item.category === "entry"
                                ? "default"
                                : item.category === "premium"
                                  ? "secondary"
                                  : item.category === "standard"
                                    ? "outline"
                                    : "destructive"
                            }
                          >
                            {item.category === "entry"
                              ? "入口商品"
                              : item.category === "premium"
                                ? "高単価"
                                : item.category === "standard"
                                  ? "標準"
                                  : "要改善"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>入口商品戦略</CardTitle>
                    <CardDescription>お試し商品の拡充提案</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">優秀な入口商品</span>
                      </div>
                      <p className="text-sm text-green-700 mb-2">お試しセット・サプリメント</p>
                      <ul className="text-xs text-green-600 space-y-1">
                        <li>• 低価格でハードル下げ</li>
                        <li>• 高いリピート率を実現</li>
                        <li>• 商品ラインナップ拡充</li>
                        <li>• 季節限定版の投入</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">新規入口商品候補</span>
                      </div>
                      <ul className="text-xs text-blue-600 space-y-1">
                        <li>• ¥1,000以下のお試し商品</li>
                        <li>• サンプルセット・ミニサイズ</li>
                        <li>• 初回限定特価商品</li>
                        <li>• 送料無料の小物商品</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertCircle className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800">改善が必要</span>
                      </div>
                      <p className="text-sm text-yellow-700 mb-2">ファッション小物・書籍雑誌</p>
                      <ul className="text-xs text-yellow-600 space-y-1">
                        <li>• リピート率が低い</li>
                        <li>• セット商品化を検討</li>
                        <li>• アフターフォロー強化</li>
                        <li>• 関連商品レコメンド</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 購入ファネル分析 */}
            <TabsContent value="funnel" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>登録→購入ファネル</CardTitle>
                    <CardDescription>ボトルネック検出と離脱防止</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                          <span className="text-sm font-medium">サイト訪問</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">10,000</div>
                          <div className="text-xs text-gray-500">100%</div>
                        </div>
                      </div>
                      <Progress value={100} className="h-3" />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium">会員登録</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">1,800</div>
                          <div className="text-xs text-gray-500">18.0%</div>
                        </div>
                      </div>
                      <Progress value={18} className="h-3" />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                          <span className="text-sm font-medium">カート追加</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">1,234</div>
                          <div className="text-xs text-gray-500">12.3%</div>
                        </div>
                      </div>
                      <Progress value={12.3} className="h-3" />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                          <span className="text-sm font-medium">決済開始</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">987</div>
                          <div className="text-xs text-gray-500">9.9%</div>
                        </div>
                      </div>
                      <Progress value={9.9} className="h-3" />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                          <span className="text-sm font-medium">購入完了</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">845</div>
                          <div className="text-xs text-gray-500">8.5%</div>
                        </div>
                      </div>
                      <Progress value={8.5} className="h-3" />
                    </div>

                    <div className="mt-6 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        <span className="font-medium text-red-800">最大のボトルネック</span>
                      </div>
                      <p className="text-sm text-red-700">決済開始→購入完了の離脱率が14.4%と高い</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>離脱防止施策</CardTitle>
                    <CardDescription>メール・LINE ドリップで離脱防止</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Mail className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">カート放棄対策</span>
                      </div>
                      <ul className="text-xs text-blue-600 space-y-1">
                        <li>• 30分後: カート内容確認メール</li>
                        <li>• 24時間後: 限定クーポン付きリマインド</li>
                        <li>• 3日後: 類似商品レコメンド</li>
                        <li>• 7日後: 最終リマインド</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">決済離脱対策</span>
                      </div>
                      <ul className="text-xs text-green-600 space-y-1">
                        <li>• 決済方法の多様化</li>
                        <li>• ゲスト購入オプション</li>
                        <li>• 送料無料ライン明示</li>
                        <li>• セキュリティ証明表示</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800">登録促進施策</span>
                      </div>
                      <ul className="text-xs text-yellow-600 space-y-1">
                        <li>• 会員限定特典の訴求</li>
                        <li>• ソーシャルログイン導入</li>
                        <li>• 登録フォーム簡素化</li>
                        <li>• 初回購入クーポン</li>
                      </ul>
                    </div>

                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium mb-2">期待効果</div>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <div className="text-gray-600">カート放棄率</div>
                          <div className="font-medium">87.7% → 75.0%</div>
                        </div>
                        <div>
                          <div className="text-gray-600">決済完了率</div>
                          <div className="font-medium">85.6% → 92.0%</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* コホート分析 */}
            <TabsContent value="cohort" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>月次新規顧客コホート分析</CardTitle>
                  <CardDescription>質の高い顧客を評価・長期価値の高いチャネルに注力</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">獲得月</th>
                          <th className="text-center p-2">顧客数</th>
                          <th className="text-center p-2">1ヶ月</th>
                          <th className="text-center p-2">2ヶ月</th>
                          <th className="text-center p-2">3ヶ月</th>
                          <th className="text-center p-2">6ヶ月</th>
                          <th className="text-center p-2">12ヶ月</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { month: "2024年1月", users: 234, m1: 68.5, m2: 45.2, m3: 32.1, m6: 18.7, m12: null },
                          { month: "2024年2月", users: 189, m1: 72.3, m2: 48.7, m3: 35.4, m6: 21.2, m12: null },
                          { month: "2024年3月", users: 298, m1: 65.4, m2: 42.8, m3: 29.8, m6: null, m12: null },
                          { month: "2024年4月", users: 267, m1: 69.7, m2: 46.1, m3: null, m6: null, m12: null },
                          { month: "2024年5月", users: 312, m1: 74.2, m2: null, m3: null, m6: null, m12: null },
                          { month: "2024年6月", users: 345, m1: null, m2: null, m3: null, m6: null, m12: null },
                        ].map((row, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-2 font-medium">{row.month}</td>
                            <td className="p-2 text-center">{row.users}</td>
                            <td className="p-2 text-center">
                              {row.m1 ? (
                                <span
                                  className={`px-2 py-1 rounded text-xs ${
                                    row.m1 > 70
                                      ? "bg-green-100 text-green-800"
                                      : row.m1 > 60
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {row.m1}%
                                </span>
                              ) : (
                                "-"
                              )}
                            </td>
                            <td className="p-2 text-center">
                              {row.m2 ? (
                                <span
                                  className={`px-2 py-1 rounded text-xs ${
                                    row.m2 > 45
                                      ? "bg-green-100 text-green-800"
                                      : row.m2 > 35
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {row.m2}%
                                </span>
                              ) : (
                                "-"
                              )}
                            </td>
                            <td className="p-2 text-center">
                              {row.m3 ? (
                                <span
                                  className={`px-2 py-1 rounded text-xs ${
                                    row.m3 > 30
                                      ? "bg-green-100 text-green-800"
                                      : row.m3 > 25
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {row.m3}%
                                </span>
                              ) : (
                                "-"
                              )}
                            </td>
                            <td className="p-2 text-center">
                              {row.m6 ? (
                                <span
                                  className={`px-2 py-1 rounded text-xs ${
                                    row.m6 > 20
                                      ? "bg-green-100 text-green-800"
                                      : row.m6 > 15
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {row.m6}%
                                </span>
                              ) : (
                                "-"
                              )}
                            </td>
                            <td className="p-2 text-center">
                              {row.m12 ? (
                                <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                                  {row.m12}%
                                </span>
                              ) : (
                                "-"
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">高品質月</span>
                      </div>
                      <p className="text-sm text-green-700 mb-2">2024年2月・5月</p>
                      <ul className="text-xs text-green-600 space-y-1">
                        <li>• 1ヶ月継続率70%超</li>
                        <li>• 獲得施策を分析</li>
                        <li>• 成功パターンを横展開</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertCircle className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800">要改善月</span>
                      </div>
                      <p className="text-sm text-yellow-700 mb-2">2024年1月・3月</p>
                      <ul className="text-xs text-yellow-600 space-y-1">
                        <li>• 継続率が平均以下</li>
                        <li>• 獲得チャネル見直し</li>
                        <li>• オンボーディング強化</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">全体傾向</span>
                      </div>
                      <ul className="text-xs text-blue-600 space-y-1">
                        <li>• 1ヶ月継続率: 69.7%</li>
                        <li>• 3ヶ月継続率: 32.4%</li>
                        <li>• 6ヶ月継続率: 20.0%</li>
                        <li>• 改善トレンド継続中</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
