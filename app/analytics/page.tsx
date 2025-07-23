"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Users, ShoppingCart, TrendingUp, MapPin, Calendar, Filter, Download, DollarSign, Target, TrendingDown, CheckCircle, AlertTriangle, PieChart, BarChart3, TestTube, Smartphone, Monitor, MousePointer, Eye, Gift, Repeat } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Analytics() {
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
              <h1 className="text-2xl font-bold text-gray-900">顧客分析ダッシュボード</h1>
            </div>
            <div className="flex items-center space-x-4">
               <p className="text-sm text-gray-500">（β版：表示されているデータはサンプルです）</p>
              <Button variant="outline" disabled>
                <Filter className="h-4 w-4 mr-2" />
                フィルター
              </Button>
              <Button variant="outline" disabled>
                <Download className="h-4 w-4 mr-2" />
                エクスポート
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">全体概要</TabsTrigger>
              <TabsTrigger value="revenue">売上分析</TabsTrigger>
              <TabsTrigger value="acquisition">新規顧客獲得</TabsTrigger>
              <TabsTrigger value="conversion">CVR分析</TabsTrigger>
              <TabsTrigger value="aov">AOV分析</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">総顧客数</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12,847</div>
                    <p className="text-xs text-muted-foreground">前月比 +234人</p>
                  </CardContent>
                </Card>

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
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>年齢層別分析</CardTitle>
                    <CardDescription>顧客の年齢分布と購買傾向</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">20-29歳</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">35%</span>
                          <Badge variant="secondary">¥8,200</Badge>
                        </div>
                      </div>
                      <Progress value={35} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">30-39歳</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">28%</span>
                          <Badge variant="secondary">¥12,400</Badge>
                        </div>
                      </div>
                      <Progress value={28} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">40-49歳</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">22%</span>
                          <Badge variant="secondary">¥15,600</Badge>
                        </div>
                      </div>
                      <Progress value={22} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">50歳以上</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">15%</span>
                          <Badge variant="secondary">¥18,900</Badge>
                        </div>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>地域別顧客分布</CardTitle>
                    <CardDescription>都道府県別の顧客数と売上</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">東京都</span>
                          <Badge variant="default">1位</Badge>
                        </div>
                        <div className="text-sm text-gray-600">顧客数: 2,847人</div>
                        <div className="text-sm text-gray-600">売上: ¥8,450,000</div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">大阪府</span>
                          <Badge variant="secondary">2位</Badge>
                        </div>
                        <div className="text-sm text-gray-600">顧客数: 1,923人</div>
                        <div className="text-sm text-gray-600">売上: ¥5,670,000</div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">神奈川県</span>
                          <Badge variant="secondary">3位</Badge>
                        </div>
                        <div className="text-sm text-gray-600">顧客数: 1,456人</div>
                        <div className="text-sm text-gray-600">売上: ¥4,230,000</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Revenue Tab */}
            <TabsContent value="revenue" className="space-y-6">
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
              </div>
            </TabsContent>

            {/* Acquisition Tab */}
            <TabsContent value="acquisition" className="space-y-6">
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
                        product: "サプリメント30日分",
                        orders: 134,
                        price: 2480,
                        repeat: 89.6,
                        category: "entry",
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
                                : "outline"
                            }
                          >
                            {item.category === "entry"
                              ? "入口商品"
                              : "標準"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* CVR Tab */}
            <TabsContent value="conversion" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>デバイス別CVR</CardTitle>
                    <CardDescription>PC vs モバイル、iOS vs Android</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        device: "デスクトップ",
                        cvr: 4.12,
                        status: "good",
                      },
                      {
                        device: "モバイル (iOS)",
                        cvr: 3.45,
                        status: "medium",
                      },
                      {
                        device: "モバイル (Android)",
                        cvr: 2.34,
                        status: "poor",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-sm">{item.device}</span>
                            <Badge
                              variant={
                                item.status === "good"
                                  ? "default"
                                  : item.status === "medium"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {item.cvr}%
                            </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>リピート客 vs 新規客CVR</CardTitle>
                    <CardDescription>セグメント別の施策根拠</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        segment: "VIP顧客",
                        cvr: 12.45,
                      },
                      {
                        segment: "ロイヤル顧客",
                        cvr: 8.34,
                      },
                      {
                        segment: "新規顧客",
                        cvr: 2.89,
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-sm">{item.segment}</span>
                            <Badge
                              variant={
                                item.cvr > 10
                                  ? "default"
                                  : item.cvr > 5
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              CVR {item.cvr}%
                            </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* AOV Tab */}
            <TabsContent value="aov" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>よく一緒に買われる商品ペア</CardTitle>
                    <CardDescription>クロスセル候補の発見</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        productA: "ワイヤレスイヤホン",
                        productB: "スマホケース",
                        frequency: 234,
                        potential: "high",
                      },
                      {
                        productA: "美容液",
                        productB: "化粧水",
                        frequency: 189,
                        potential: "high",
                      },
                      {
                        productA: "コーヒー豆",
                        productB: "ドリッパー",
                        frequency: 156,
                        potential: "medium",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              {item.productA} + {item.productB}
                            </span>
                            <Badge
                              variant={
                                item.potential === "high"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {item.frequency}回
                            </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>ステージ別AOV</CardTitle>
                    <CardDescription>ロイヤル顧客 vs 新規客</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        segment: "VIP顧客",
                        aov: 18900,
                      },
                      {
                        segment: "ロイヤル顧客",
                        aov: 14500,
                      },
                      {
                        segment: "新規顧客",
                        aov: 6700,
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-sm">{item.segment}</span>
                            <div className="text-sm font-semibold">¥{item.aov.toLocaleString()}</div>
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
