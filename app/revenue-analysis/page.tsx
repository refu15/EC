"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  MapPin,
  Calendar,
  Filter,
  Download,
  AlertTriangle,
  CheckCircle,
  Target,
  Users,
  ShoppingCart,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

export default function RevenueAnalysis() {
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
              <h1 className="text-2xl font-bold text-gray-900">売上深掘り分析</h1>
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
                  <SelectItem value="1year">過去1年</SelectItem>
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
                <CardTitle className="text-sm font-medium">総売上</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">¥12,450,000</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  前月比 +15.2%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">新規顧客売上</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">¥3,890,000</div>
                <p className="text-xs text-muted-foreground">全体の31.2%</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">平均注文額</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">¥8,750</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  前月比 +5.1%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">コンバージョン率</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.24%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                  前月比 -0.3%
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="channels" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="channels">チャネル別</TabsTrigger>
              <TabsTrigger value="categories">カテゴリ別</TabsTrigger>
              <TabsTrigger value="segments">顧客セグメント</TabsTrigger>
              <TabsTrigger value="geography">地域別</TabsTrigger>
              <TabsTrigger value="timeline">時系列</TabsTrigger>
            </TabsList>

            {/* チャネル別分析 */}
            <TabsContent value="channels" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      チャネル別売上構成
                    </CardTitle>
                    <CardDescription>各チャネルの売上貢献度と成長率</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { channel: "Webサイト", revenue: 6890000, growth: 18.5, share: 55.3, status: "high" },
                      { channel: "SNS広告", revenue: 2340000, growth: 32.1, share: 18.8, status: "high" },
                      { channel: "Google広告", revenue: 1890000, growth: 8.2, share: 15.2, status: "medium" },
                      { channel: "メール", revenue: 890000, growth: -2.3, share: 7.1, status: "low" },
                      { channel: "アフィリエイト", revenue: 440000, growth: 12.7, share: 3.5, status: "medium" },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">{item.channel}</span>
                            <Badge
                              variant={
                                item.status === "high"
                                  ? "default"
                                  : item.status === "medium"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {item.growth > 0 ? "+" : ""}
                              {item.growth}%
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold">¥{item.revenue.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">{item.share}%</div>
                          </div>
                        </div>
                        <Progress value={item.share} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>チャネル別推奨アクション</CardTitle>
                    <CardDescription>データに基づく次の一手</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">SNS広告</span>
                        <Badge variant="default">高成長</Badge>
                      </div>
                      <p className="text-sm text-green-700">
                        成長率32.1%と好調。予算を20%増額し、類似オーディエンスを拡大することを推奨。
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">Webサイト</span>
                        <Badge variant="secondary">安定成長</Badge>
                      </div>
                      <p className="text-sm text-blue-700">
                        最大の売上源。SEO強化とサイト表示速度改善でさらなる成長を目指す。
                      </p>
                    </div>

                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        <span className="font-medium text-red-800">メール</span>
                        <Badge variant="destructive">要改善</Badge>
                      </div>
                      <p className="text-sm text-red-700">
                        成長率-2.3%と低迷。セグメント配信とパーソナライゼーション強化が必要。
                      </p>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <BarChart3 className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800">Google広告</span>
                        <Badge variant="outline">要分析</Badge>
                      </div>
                      <p className="text-sm text-yellow-700">
                        成長率8.2%と平均的。キーワード分析とランディングページ最適化を実施。
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* カテゴリ別分析 */}
            <TabsContent value="categories" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PieChart className="h-5 w-5 mr-2" />
                      商品カテゴリ別売上・粗利
                    </CardTitle>
                    <CardDescription>稼ぎ頭と重荷の切り分け</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { category: "電子機器", revenue: 4890000, margin: 28.5, orders: 1234, status: "star" },
                      { category: "ファッション", revenue: 3450000, margin: 45.2, orders: 2156, status: "star" },
                      { category: "美容・コスメ", revenue: 2340000, margin: 52.8, orders: 1876, status: "star" },
                      { category: "食品・飲料", revenue: 1120000, margin: 15.3, orders: 987, status: "question" },
                      { category: "書籍・雑誌", revenue: 650000, margin: 8.7, orders: 543, status: "dog" },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{item.category}</span>
                            <Badge
                              variant={
                                item.status === "star"
                                  ? "default"
                                  : item.status === "question"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {item.status === "star" ? "稼ぎ頭" : item.status === "question" ? "要検討" : "重荷"}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold">¥{item.revenue.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">粗利率 {item.margin}%</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                          <div>注文数: {item.orders.toLocaleString()}件</div>
                          <div>客単価: ¥{Math.round(item.revenue / item.orders).toLocaleString()}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>カテゴリ別戦略提案</CardTitle>
                    <CardDescription>BCGマトリックスに基づく施策</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">稼ぎ頭カテゴリ</span>
                      </div>
                      <p className="text-sm text-green-700 mb-2">電子機器・ファッション・美容コスメ</p>
                      <ul className="text-xs text-green-600 space-y-1">
                        <li>• 商品ラインナップ拡充</li>
                        <li>• プレミアム商品の追加</li>
                        <li>• クロスセル・アップセル強化</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800">要検討カテゴリ</span>
                      </div>
                      <p className="text-sm text-yellow-700 mb-2">食品・飲料</p>
                      <ul className="text-xs text-yellow-600 space-y-1">
                        <li>• 高粗利商品への切り替え</li>
                        <li>• 定期購入モデルの導入</li>
                        <li>• 仕入れコスト見直し</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingDown className="h-4 w-4 text-red-600" />
                        <span className="font-medium text-red-800">重荷カテゴリ</span>
                      </div>
                      <p className="text-sm text-red-700 mb-2">書籍・雑誌</p>
                      <ul className="text-xs text-red-600 space-y-1">
                        <li>• 在庫処分セール実施</li>
                        <li>• 電子書籍への移行検討</li>
                        <li>• カテゴリ縮小または撤退</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 顧客セグメント別分析 */}
            <TabsContent value="segments" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      セグメント別ARPU・解約率
                    </CardTitle>
                    <CardDescription>儲かる顧客像の把握</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        segment: "VIP顧客",
                        count: 847,
                        arpu: 45600,
                        churnRate: 2.1,
                        ltv: 234000,
                        status: "premium",
                      },
                      {
                        segment: "ロイヤル顧客",
                        count: 2341,
                        arpu: 28900,
                        churnRate: 5.8,
                        ltv: 156000,
                        status: "good",
                      },
                      {
                        segment: "レギュラー顧客",
                        count: 5678,
                        arpu: 15400,
                        churnRate: 12.3,
                        ltv: 78000,
                        status: "standard",
                      },
                      {
                        segment: "新規顧客",
                        count: 3456,
                        arpu: 8750,
                        churnRate: 28.7,
                        ltv: 32000,
                        status: "potential",
                      },
                      {
                        segment: "低採算顧客",
                        count: 1234,
                        arpu: 3200,
                        churnRate: 45.2,
                        ltv: 12000,
                        status: "low",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{item.segment}</span>
                            <Badge
                              variant={
                                item.status === "premium"
                                  ? "default"
                                  : item.status === "good"
                                    ? "secondary"
                                    : item.status === "standard"
                                      ? "outline"
                                      : item.status === "potential"
                                        ? "secondary"
                                        : "destructive"
                              }
                            >
                              {item.count.toLocaleString()}人
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold">ARPU ¥{item.arpu.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">解約率 {item.churnRate}%</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                          <div>LTV: ¥{item.ltv.toLocaleString()}</div>
                          <div>貢献度: {(((item.count * item.arpu) / 12450000) * 100).toFixed(1)}%</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>セグメント別施策提案</CardTitle>
                    <CardDescription>顧客価値最大化戦略</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        <span className="font-medium text-purple-800">VIP・ロイヤル顧客</span>
                        <Badge variant="default">最優先</Badge>
                      </div>
                      <ul className="text-xs text-purple-600 space-y-1">
                        <li>• 専用VIPプログラム導入</li>
                        <li>• 限定商品・先行販売</li>
                        <li>• パーソナルショッパーサービス</li>
                        <li>• 特別割引・送料無料</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">レギュラー顧客</span>
                        <Badge variant="secondary">育成</Badge>
                      </div>
                      <ul className="text-xs text-blue-600 space-y-1">
                        <li>• ポイント制度の充実</li>
                        <li>• レコメンデーション強化</li>
                        <li>• 定期購入への誘導</li>
                        <li>• ロイヤルティプログラム</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">新規顧客</span>
                        <Badge variant="outline">転換促進</Badge>
                      </div>
                      <ul className="text-xs text-green-600 space-y-1">
                        <li>• オンボーディング強化</li>
                        <li>• 初回購入特典</li>
                        <li>• フォローアップメール</li>
                        <li>• 使い方ガイド提供</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        <span className="font-medium text-red-800">低採算顧客</span>
                        <Badge variant="destructive">獲得抑制</Badge>
                      </div>
                      <ul className="text-xs text-red-600 space-y-1">
                        <li>• 広告ターゲティング見直し</li>
                        <li>• 最低注文金額設定</li>
                        <li>• 送料体系の見直し</li>
                        <li>• 獲得チャネルの最適化</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 地域別分析 */}
            <TabsContent value="geography" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      地域別売上・顧客分析
                    </CardTitle>
                    <CardDescription>地域特性と成長機会の発見</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { region: "関東", revenue: 5890000, customers: 4567, aov: 12900, growth: 18.5 },
                      { region: "関西", revenue: 2340000, customers: 2134, aov: 10970, growth: 22.1 },
                      { region: "中部", revenue: 1890000, customers: 1876, aov: 10080, growth: 15.3 },
                      { region: "九州", revenue: 1120000, customers: 1234, aov: 9080, growth: 28.7 },
                      { region: "東北", revenue: 890000, customers: 987, aov: 9020, growth: 12.4 },
                      { region: "中国", revenue: 650000, customers: 743, aov: 8750, growth: 8.9 },
                      { region: "四国", revenue: 340000, customers: 456, aov: 7460, growth: 5.2 },
                      { region: "北海道", revenue: 330000, customers: 398, aov: 8290, growth: 31.2 },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm">{item.region}</span>
                            <Badge variant={item.growth > 20 ? "default" : item.growth > 10 ? "secondary" : "outline"}>
                              +{item.growth}%
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                            <div>売上: ¥{(item.revenue / 1000000).toFixed(1)}M</div>
                            <div>顧客: {item.customers.toLocaleString()}人</div>
                            <div>AOV: ¥{item.aov.toLocaleString()}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>地域別成長戦略</CardTitle>
                    <CardDescription>地域特性を活かした施策</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">高成長地域</span>
                        <Badge variant="default">北海道・九州</Badge>
                      </div>
                      <ul className="text-xs text-green-600 space-y-1">
                        <li>• 地域限定商品の展開</li>
                        <li>• ローカル広告の強化</li>
                        <li>• 地域イベントとの連携</li>
                        <li>• 配送サービスの充実</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">主力地域</span>
                        <Badge variant="secondary">関東・関西</Badge>
                      </div>
                      <ul className="text-xs text-blue-600 space-y-1">
                        <li>• プレミアム商品の投入</li>
                        <li>• 店舗連携サービス</li>
                        <li>• 当日配送エリア拡大</li>
                        <li>• インフルエンサー活用</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <BarChart3 className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800">成長余地地域</span>
                        <Badge variant="outline">中国・四国</Badge>
                      </div>
                      <ul className="text-xs text-yellow-600 space-y-1">
                        <li>• 認知度向上キャンペーン</li>
                        <li>• 送料無料キャンペーン</li>
                        <li>• 地域密着型マーケティング</li>
                        <li>• 口コミ・紹介制度強化</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 時系列分析 */}
            <TabsContent value="timeline" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      売上トレンド・季節要因
                    </CardTitle>
                    <CardDescription>時系列パターンと異常検知</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="h-64 flex items-end justify-between space-x-1">
                        {[
                          { month: "1月", value: 8900000, anomaly: false },
                          { month: "2月", value: 7800000, anomaly: false },
                          { month: "3月", value: 12400000, anomaly: true },
                          { month: "4月", value: 9800000, anomaly: false },
                          { month: "5月", value: 11200000, anomaly: false },
                          { month: "6月", value: 10500000, anomaly: false },
                          { month: "7月", value: 13800000, anomaly: true },
                          { month: "8月", value: 12100000, anomaly: false },
                          { month: "9月", value: 9900000, anomaly: false },
                          { month: "10月", value: 11800000, anomaly: false },
                          { month: "11月", value: 15600000, anomaly: true },
                          { month: "12月", value: 18900000, anomaly: true },
                        ].map((item, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div
                              className={`rounded-t w-8 transition-all hover:opacity-80 ${
                                item.anomaly ? "bg-red-500" : "bg-blue-500"
                              }`}
                              style={{ height: `${(item.value / 20000000) * 200}px` }}
                            />
                            <div className="text-xs text-gray-500 mt-2 transform -rotate-45 origin-top-left">
                              {item.month}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center space-x-4 text-xs">
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-blue-500 rounded"></div>
                          <span>通常月</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-red-500 rounded"></div>
                          <span>異常値検知</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>キャンペーン効果測定</CardTitle>
                    <CardDescription>施策前後の売上変化</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        campaign: "3月決算セール",
                        period: "3/20-3/31",
                        before: 8900000,
                        after: 12400000,
                        lift: 39.3,
                        roi: 485,
                      },
                      {
                        campaign: "夏のボーナスセール",
                        period: "7/15-7/31",
                        before: 11200000,
                        after: 13800000,
                        lift: 23.2,
                        roi: 312,
                      },
                      {
                        campaign: "ブラックフライデー",
                        period: "11/24-11/30",
                        before: 11800000,
                        after: 15600000,
                        lift: 32.2,
                        roi: 567,
                      },
                      {
                        campaign: "年末年始セール",
                        period: "12/26-1/3",
                        before: 15600000,
                        after: 18900000,
                        lift: 21.2,
                        roi: 423,
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <div className="font-medium text-sm">{item.campaign}</div>
                            <div className="text-xs text-gray-500">{item.period}</div>
                          </div>
                          <Badge variant={item.lift > 30 ? "default" : item.lift > 20 ? "secondary" : "outline"}>
                            +{item.lift}%
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                          <div>
                            <div>施策前</div>
                            <div className="font-medium">¥{(item.before / 1000000).toFixed(1)}M</div>
                          </div>
                          <div>
                            <div>施策後</div>
                            <div className="font-medium">¥{(item.after / 1000000).toFixed(1)}M</div>
                          </div>
                          <div>
                            <div>ROI</div>
                            <div className="font-medium">{item.roi}%</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
