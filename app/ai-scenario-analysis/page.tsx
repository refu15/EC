"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Brain, TrendingUp, AlertTriangle, Zap, Target, Play, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

export default function AIScenarioAnalysis() {
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
              <h1 className="text-2xl font-bold text-gray-900">AIシナリオ分析・予測</h1>
            </div>
            <div className="flex items-center space-x-4">
               <p className="text-sm text-gray-500">（β版：一部機能は今後実装予定）</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Tabs defaultValue="scenarios" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="scenarios">多変数シナリオ分析</TabsTrigger>
              <TabsTrigger value="optimization">マーケティング予算最適化</TabsTrigger>
              <TabsTrigger value="proposals">AI施策提案</TabsTrigger>
            </TabsList>

            {/* 多変数シナリオ分析 */}
            <TabsContent value="scenarios" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      シナリオ設定
                    </CardTitle>
                    <CardDescription>複数要因を組み合わせて詳細予測</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium">マーケティング予算変動</Label>
                        <Slider defaultValue={[0]} max={50} min={-30} step={5} className="mt-2" />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>-30%</span>
                          <span>現状</span>
                          <span>+50%</span>
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-medium">競合価格変動</Label>
                        <Slider defaultValue={[0]} max={20} min={-20} step={5} className="mt-2" />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>-20%</span>
                          <span>現状</span>
                          <span>+20%</span>
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-medium">季節要因</Label>
                        <Select defaultValue="normal">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="peak">繁忙期</SelectItem>
                            <SelectItem value="normal">通常期</SelectItem>
                            <SelectItem value="low">閑散期</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button className="w-full" disabled>
                        <Play className="h-4 w-4 mr-2" />
                        シナリオ実行 (ダミー)
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>シナリオ予測結果</CardTitle>
                    <CardDescription>AIによる売上予測</CardDescription>
                  </CardHeader>
                  <CardContent>
                       <p className="text-gray-800">
                        このシナリオでは、売上は通常期に比べて<span className="font-bold text-green-600">15%〜25%向上</span>する可能性が高いと予測されます。
                        ただし、競合のキャンペーン内容によっては、効果が相殺されるリスクも考慮に入れるべきです。
                        AIは、繁忙期により「清涼飲料」「エアコン」「日焼け止め」カテゴリの需要が特に高まると分析しています。
                      </p>
                      <p className="text-xs text-gray-500 mt-4">※この文章はGemini APIによって生成されたサンプルです。</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* マーケティング予算最適化 */}
            <TabsContent value="optimization" className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Zap className="h-5 w-5 mr-2" />
                            マーケティング予算最適化
                        </CardTitle>
                        <CardDescription>
                            チャネル別ROIを最大化するための予算配分を提案します。
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-medium">現在の予算配分とROI</h4>
                          {[
                            { channel: "Google広告", current: 30, roi: 320 },
                            { channel: "Facebook広告", current: 25, roi: 450 },
                            { channel: "Instagram広告", current: 20, roi: 380 },
                            { channel: "SEO", current: 15, roi: 280 },
                            { channel: "メール", current: 10, roi: 180 },
                          ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex-1">
                                <div className="font-medium text-sm">{item.channel}</div>
                                <div className="text-xs text-gray-600">ROI: {item.roi}%</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium">{item.current}%</div>
                                <div className="text-xs text-gray-500">現在配分</div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-medium">AIによる最適化提案</h4>
                           {[
                            { channel: "Google広告", optimal: 25 },
                            { channel: "Facebook広告", optimal: 35 },
                            { channel: "Instagram広告", optimal: 25 },
                            { channel: "SEO", optimal: 10 },
                            { channel: "メール", optimal: 5 },
                          ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                              <div className="font-medium text-sm">{item.channel}</div>
                              <div className="text-right">
                                <div className="font-medium text-blue-600">{item.optimal}%</div>
                                <div className="text-xs text-gray-500">最適配分</div>
                              </div>
                            </div>
                          ))}
                           <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">最適化効果予測</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-center mb-2">
                                        <p className="text-2xl font-bold text-green-600">+¥1.2M</p>
                                        <p className="text-sm text-gray-600">月間売上向上予測</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-xs text-center">
                                        <p>現在ROI: 312%</p>
                                        <p className="text-green-600">最適化後ROI: 428%</p>
                                        <p>CPA改善: -23%</p>
                                        <p className="text-green-600">獲得数向上: +34%</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

            {/* AI施策提案 */}
            <TabsContent value="proposals" className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Brain className="h-5 w-5 mr-2" />
                            AIによる施策提案
                        </CardTitle>
                        <CardDescription>
                            分析結果に基づき、AIが具体的なアクションを3つ以上提案します。
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 border rounded-lg bg-green-50">
                            <h4 className="font-medium text-green-800 mb-2">提案1：広告予算の再配分</h4>
                            <p className="text-sm text-green-700">
                                Facebook広告とInstagram広告のROIが非常に高いため、これらのチャネルへの予算をそれぞれ10%、5%増額します。
                                比較的ROIの低いGoogle広告とメールの予算を削減し、全体の広告効果を最大化します。
                            </p>
                        </div>
                        <div className="p-4 border rounded-lg bg-blue-50">
                            <h4 className="font-medium text-blue-800 mb-2">提案2：高ROIチャネル向けクリエイティブ強化</h4>
                            <p className="text-sm text-blue-700">
                                最も効果の高いFacebook広告向けに、動画広告やカルーセル広告など、エンゲージメントを高める新しいクリエイティブを3パターン以上テストし、さらなるROI向上を目指します。
                            </p>
                        </div>
                        <div className="p-4 border rounded-lg bg-purple-50">
                            <h4 className="font-medium text-purple-800 mb-2">提案3：クロスセル促進キャンペーン</h4>
                            <p className="text-sm text-purple-700">
                                AI分析で特定された「同時購入されやすい商品ペア」に基づき、セット割引やレコメンドを強化するキャンペーンを実施します。これにより、平均注文額（AOV）の5%向上を目指します。
                            </p>
                        </div>
                         <div className="p-4 border rounded-lg bg-yellow-50">
                            <h4 className="font-medium text-yellow-800 mb-2">提案4：SEOコンテンツの拡充</h4>
                            <p className="text-sm text-yellow-700">
                                ROIが安定しているSEOについて、「商品名 + 使い方」「カテゴリ名 + おすすめ」などのキーワードでブログコンテンツを作成し、オーガニック検索からの流入をさらに増やします。
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
          </Tabs>
          <Card key="1" className="w-full max-w-2xl mx-auto">
            <CardHeader className="flex flex-col gap-1">
              <CardTitle className="text-xl">AI-Powered Business Simulator</CardTitle>
              <CardDescription>
                Test the potential impact of your business decisions before you make them. Our AI will simulate the
                effects on your key metrics.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="price-change">Price Change (%)</Label>
                  <Input id="price-change" placeholder="e.g., -10 for 10% decrease" type="number" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="marketing-budget">Marketing Budget ($)</Label>
                  <Input id="marketing-budget" placeholder="e.g., 5000" type="number" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="new-feature">New Feature Launch</Label>
                <Select id="new-feature">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a feature" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="loyalty-program">Loyalty Program</SelectItem>
                    <SelectItem value="referral-program">Referral Program</SelectItem>
                    <SelectItem value="free-shipping">Free Shipping over $50</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Run Simulation</Button>
            </CardContent>
            <CardFooter className="grid gap-4">
              <div className="text-center text-sm">
                <p className="font-medium">Predicted Impact</p>
                <p className="text-gray-500">Based on the simulation, here's the potential impact on your business.</p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-bold text-green-500">+5.2%</p>
                  <p className="text-xs text-gray-500">Revenue</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-bold text-green-500">+3.1%</p>
                  <p className="text-xs text-gray-500">Conversion Rate</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-bold text-red-500">-1.5%</p>
                  <p className="text-xs text-gray-500">Customer Churn</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
