"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Calendar,
  Target,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function Prediction() {
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
              <h1 className="text-2xl font-bold text-gray-900">AI売上予測</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                期間設定
              </Button>
              <Button>
                <Zap className="h-4 w-4 mr-2" />
                予測更新
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Prediction Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                  来月の売上予測
                </CardTitle>
                <CardDescription>機械学習モデルによる予測結果</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">¥2,890,000</div>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                      前月比 +18.2%
                    </span>
                    <span className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1 text-blue-500" />
                      信頼度 85%
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">予測範囲（下限）</span>
                    <span className="text-sm text-gray-600">¥2,450,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">予測範囲（上限）</span>
                    <span className="text-sm text-gray-600">¥3,330,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">最終更新</span>
                    <span className="text-sm text-gray-600">2024年3月15日 09:30</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>予測精度</CardTitle>
                <CardDescription>過去の予測と実績の比較</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                  <p className="text-sm text-gray-600">平均予測精度</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>先月</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>先々月</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>3ヶ月前</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Analysis */}
          <Tabs defaultValue="monthly" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="monthly">月次予測</TabsTrigger>
              <TabsTrigger value="weekly">週次予測</TabsTrigger>
              <TabsTrigger value="factors">影響要因</TabsTrigger>
              <TabsTrigger value="scenarios">シナリオ分析</TabsTrigger>
            </TabsList>

            <TabsContent value="monthly" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>今後6ヶ月の売上予測</CardTitle>
                  <CardDescription>月次売上予測とトレンド分析</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { month: "4月", predicted: 2890000, confidence: 85, trend: "up" },
                      { month: "5月", predicted: 3120000, confidence: 82, trend: "up" },
                      { month: "6月", predicted: 2950000, confidence: 78, trend: "down" },
                      { month: "7月", predicted: 3350000, confidence: 75, trend: "up" },
                      { month: "8月", predicted: 3180000, confidence: 72, trend: "down" },
                      { month: "9月", predicted: 3420000, confidence: 70, trend: "up" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="font-medium">{item.month}</div>
                          <div className="flex items-center">
                            {item.trend === "up" ? (
                              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                            ) : (
                              <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                            )}
                            <span className="text-lg font-semibold">¥{item.predicted.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={item.confidence >= 80 ? "default" : "secondary"}>
                            信頼度 {item.confidence}%
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="weekly" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>今後4週間の売上予測</CardTitle>
                  <CardDescription>週次売上予測と日別トレンド</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        week: "第1週",
                        predicted: 720000,
                        daily: [95000, 110000, 105000, 120000, 135000, 85000, 70000],
                      },
                      {
                        week: "第2週",
                        predicted: 750000,
                        daily: [98000, 115000, 108000, 125000, 140000, 88000, 76000],
                      },
                      {
                        week: "第3週",
                        predicted: 735000,
                        daily: [96000, 112000, 106000, 122000, 138000, 86000, 75000],
                      },
                      {
                        week: "第4週",
                        predicted: 685000,
                        daily: [92000, 108000, 102000, 118000, 130000, 82000, 73000],
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-medium">{item.week}</span>
                          <span className="text-lg font-semibold">¥{item.predicted.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-end space-x-1 h-16">
                          {item.daily.map((value, dayIndex) => (
                            <div key={dayIndex} className="flex flex-col items-center">
                              <div
                                className="bg-blue-500 rounded-t w-4"
                                style={{ height: `${(value / 150000) * 50}px` }}
                              />
                              <div className="text-xs text-gray-500 mt-1">
                                {["月", "火", "水", "木", "金", "土", "日"][dayIndex]}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="factors" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      主要影響要因
                    </CardTitle>
                    <CardDescription>売上予測に影響する要因の重要度</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">季節性・イベント</span>
                        <span className="text-sm text-gray-500">35%</span>
                      </div>
                      <Progress value={35} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">過去の売上トレンド</span>
                        <span className="text-sm text-gray-500">28%</span>
                      </div>
                      <Progress value={28} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">マーケティング活動</span>
                        <span className="text-sm text-gray-500">22%</span>
                      </div>
                      <Progress value={22} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">外部要因（経済指標等）</span>
                        <span className="text-sm text-gray-500">15%</span>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                      リスク要因
                    </CardTitle>
                    <CardDescription>予測に影響する可能性のあるリスク</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div>
                        <div className="font-medium text-sm">競合他社の新商品発売</div>
                        <div className="text-xs text-gray-600">売上への影響: -5〜10%</div>
                      </div>
                      <Badge variant="outline" className="text-yellow-600">
                        中リスク
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div>
                        <div className="font-medium text-sm">原材料価格の上昇</div>
                        <div className="text-xs text-gray-600">売上への影響: -3〜8%</div>
                      </div>
                      <Badge variant="destructive">高リスク</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <div className="font-medium text-sm">新規顧客獲得の遅れ</div>
                        <div className="text-xs text-gray-600">売上への影響: -2〜5%</div>
                      </div>
                      <Badge variant="secondary">低リスク</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="scenarios" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    シナリオ別予測
                  </CardTitle>
                  <CardDescription>楽観・標準・悲観シナリオでの売上予測</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="text-center">
                        <div className="text-sm font-medium text-green-800 mb-2">楽観シナリオ</div>
                        <div className="text-2xl font-bold text-green-600 mb-2">¥3,330,000</div>
                        <div className="text-xs text-green-700">前月比 +36.2%</div>
                      </div>
                      <div className="mt-3 text-xs text-green-700">
                        <div>• 新商品が大ヒット</div>
                        <div>• マーケティング効果最大</div>
                        <div>• 競合の影響最小</div>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="text-center">
                        <div className="text-sm font-medium text-blue-800 mb-2">標準シナリオ</div>
                        <div className="text-2xl font-bold text-blue-600 mb-2">¥2,890,000</div>
                        <div className="text-xs text-blue-700">前月比 +18.2%</div>
                      </div>
                      <div className="mt-3 text-xs text-blue-700">
                        <div>• 通常の成長率を維持</div>
                        <div>• 予定通りの施策実行</div>
                        <div>• 市場環境は安定</div>
                      </div>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <div className="text-center">
                        <div className="text-sm font-medium text-red-800 mb-2">悲観シナリオ</div>
                        <div className="text-2xl font-bold text-red-600 mb-2">¥2,450,000</div>
                        <div className="text-xs text-red-700">前月比 +0.2%</div>
                      </div>
                      <div className="mt-3 text-xs text-red-700">
                        <div>• 競合の影響が大きい</div>
                        <div>• マーケティング効果低下</div>
                        <div>• 外部要因の悪影響</div>
                      </div>
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
