"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ShoppingCart, DollarSign, TrendingUp, Gift, Repeat, Filter, Download } from "lucide-react"
import Link from "next/link"

export default function AOVAnalysis() {
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
              <h1 className="text-2xl font-bold text-gray-900">平均注文額(AOV)分析</h1>
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
                <CardTitle className="text-sm font-medium">全体AOV</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
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
                <CardTitle className="text-sm font-medium">クロスセル率</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23.4%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  前月比 +2.3%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">バンドル購入率</CardTitle>
                <Gift className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15.8%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  前月比 +1.2%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">定期購入比率</CardTitle>
                <Repeat className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.6%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  前月比 +3.4%
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="basket" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basket">バスケット分析</TabsTrigger>
              <TabsTrigger value="coupons">クーポン影響度</TabsTrigger>
              <TabsTrigger value="segments">ステージ別AOV</TabsTrigger>
              <TabsTrigger value="subscription">サブスクリプション</TabsTrigger>
            </TabsList>

            {/* バスケット分析 */}
            <TabsContent value="basket" className="space-y-6">
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
                        lift: 3.4,
                        aov: 12400,
                        potential: "high",
                      },
                      {
                        productA: "美容液",
                        productB: "化粧水",
                        frequency: 189,
                        lift: 4.2,
                        aov: 8900,
                        potential: "high",
                      },
                      {
                        productA: "コーヒー豆",
                        productB: "ドリッパー",
                        frequency: 156,
                        lift: 2.8,
                        aov: 6700,
                        potential: "medium",
                      },
                      {
                        productA: "ノートパソコン",
                        productB: "マウス",
                        frequency: 134,
                        lift: 5.1,
                        aov: 89000,
                        potential: "high",
                      },
                      {
                        productA: "サプリメント",
                        productB: "プロテイン",
                        frequency: 98,
                        lift: 2.3,
                        aov: 5400,
                        potential: "medium",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">
                              {item.productA} + {item.productB}
                            </span>
                            <Badge
                              variant={
                                item.potential === "high"
                                  ? "default"
                                  : item.potential === "medium"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {item.frequency}回
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold">¥{item.aov.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">平均AOV</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-xs text-gray-600">
                          <span>リフト値: {item.lift}倍</span>
                          <Badge variant="outline">
                            {item.potential === "high" ? "高ポテンシャル" : "中ポテンシャル"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>クロスセル施策\
