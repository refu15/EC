"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Users, ShoppingCart, TrendingUp, MapPin, Calendar, Filter, Download } from "lucide-react"
import Link from "next/link"

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
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                フィルター
              </Button>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                エクスポート
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Overview Cards */}
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
                <CardTitle className="text-sm font-medium">アクティブ顧客</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8,432</div>
                <p className="text-xs text-muted-foreground">全体の65.6%</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">平均購買頻度</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.4回</div>
                <p className="text-xs text-muted-foreground">月あたり</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">顧客生涯価値</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">¥45,600</div>
                <p className="text-xs text-muted-foreground">平均LTV</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Analytics */}
          <Tabs defaultValue="demographics" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="demographics">顧客属性</TabsTrigger>
              <TabsTrigger value="behavior">購買行動</TabsTrigger>
              <TabsTrigger value="geography">地域分析</TabsTrigger>
              <TabsTrigger value="trends">トレンド</TabsTrigger>
            </TabsList>

            <TabsContent value="demographics" className="space-y-6">
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
                    <CardTitle>性別・職業分析</CardTitle>
                    <CardDescription>顧客の属性別購買パターン</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-pink-50 rounded-lg">
                        <div className="text-2xl font-bold text-pink-600">58%</div>
                        <div className="text-sm text-gray-600">女性</div>
                        <div className="text-xs text-gray-500 mt-1">平均注文額: ¥9,200</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">42%</div>
                        <div className="text-sm text-gray-600">男性</div>
                        <div className="text-xs text-gray-500 mt-1">平均注文額: ¥11,800</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">会社員</span>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">主婦・主夫</span>
                        <span className="text-sm font-medium">23%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">学生</span>
                        <span className="text-sm font-medium">18%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">自営業</span>
                        <span className="text-sm font-medium">14%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="behavior" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>購買頻度分析</CardTitle>
                    <CardDescription>顧客の購買パターンと頻度</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">ヘビーユーザー（月4回以上）</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">12%</span>
                          <Badge variant="default">高価値</Badge>
                        </div>
                      </div>
                      <Progress value={12} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">レギュラー（月2-3回）</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">35%</span>
                          <Badge variant="secondary">中価値</Badge>
                        </div>
                      </div>
                      <Progress value={35} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">ライト（月1回）</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">38%</span>
                          <Badge variant="outline">標準</Badge>
                        </div>
                      </div>
                      <Progress value={38} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">休眠（3ヶ月以上）</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">15%</span>
                          <Badge variant="destructive">要注意</Badge>
                        </div>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>商品カテゴリ別人気</CardTitle>
                    <CardDescription>カテゴリ別の購買傾向</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">ファッション</span>
                        <span className="text-sm text-gray-500">42%</span>
                      </div>
                      <Progress value={42} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">美容・コスメ</span>
                        <span className="text-sm text-gray-500">28%</span>
                      </div>
                      <Progress value={28} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">家電・デジタル</span>
                        <span className="text-sm text-gray-500">18%</span>
                      </div>
                      <Progress value={18} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">食品・飲料</span>
                        <span className="text-sm text-gray-500">12%</span>
                      </div>
                      <Progress value={12} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="geography" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    地域別顧客分布
                  </CardTitle>
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
            </TabsContent>

            <TabsContent value="trends" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>顧客獲得トレンド</CardTitle>
                  <CardDescription>過去12ヶ月の新規顧客獲得推移</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-between space-x-2">
                    {[120, 145, 132, 178, 165, 189, 203, 187, 234, 256, 278, 234].map((value, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className="bg-blue-500 rounded-t w-8 transition-all hover:bg-blue-600"
                          style={{ height: `${(value / 300) * 200}px` }}
                        />
                        <div className="text-xs text-gray-500 mt-2">{index + 1}月</div>
                      </div>
                    ))}
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
