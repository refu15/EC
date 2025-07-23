"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Brain, TrendingUp, AlertTriangle, Zap, Target, Play } from "lucide-react"
import Link from "next/link"

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
          {/* AI Analysis Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">AI予測精度</CardTitle>
                <Brain className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">94.2%</div>
                <p className="text-xs text-muted-foreground">（サンプル値）</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">異常検知</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">3件</div>
                <p className="text-xs text-muted-foreground">（サンプル値）</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">自動最適化</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">12件</div>
                <p className="text-xs text-muted-foreground">（サンプル値）</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">予測売上</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">¥3.2M</div>
                <p className="text-xs text-muted-foreground">（サンプル値）</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="scenarios" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="scenarios">シナリオ分析</TabsTrigger>
              <TabsTrigger value="anomaly">異常検知</TabsTrigger>
              <TabsTrigger value="optimization">自動最適化</TabsTrigger>
            </TabsList>

            {/* シナリオ分析 */}
            <TabsContent value="scenarios" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    シナリオ分析
                  </CardTitle>
                  <CardDescription>
                    マーケティング予算や競合の動向など、様々な要因を組み合わせて将来の売上を予測します。
                    <br />
                    <strong className="text-blue-600">（この機能はGemini APIを利用して、シナリオに基づいた売上予測のサンプルを提示します）</strong>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 border rounded-lg bg-gray-50">
                    <h4 className="font-medium mb-2">シナリオ例：夏のセールキャンペーン</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      - マーケティング予算：+30%<br />
                      - 競合：同様のキャンペーンを実施<br />
                      - 天候：猛暑
                    </p>
                    <Button>
                      <Play className="h-4 w-4 mr-2" />
                      AIに予測させる (ダミー)
                    </Button>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>AIによる予測結果</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <p className="text-gray-800">
                        このシナリオでは、売上は通常期に比べて<span className="font-bold text-green-600">15%〜25%向上</span>する可能性が高いと予測されます。
                        ただし、競合のキャンペーン内容によっては、効果が相殺されるリスクも考慮に入れるべきです。
                        AIは、猛暑により「清涼飲料」「エアコン」「日焼け止め」カテゴリの需要が特に高まると分析しています。
                      </p>
                      <p className="text-xs text-gray-500 mt-4">※この文章はGemini APIによって生成されたサンプルです。</p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 異常検知 */}
            <TabsContent value="anomaly" className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <AlertTriangle className="h-5 w-5 mr-2" />
                            AIによる異常検知
                        </CardTitle>
                        <CardDescription>
                            売上、コンバージョン率、アクセス数などのKPIをリアルタイムで監視し、通常と異なるパターンを検知します。
                            <br />
                            <strong className="text-blue-600">（この機能は、検知された異常のサンプルとその原因分析の例を示します）</strong>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 border rounded-lg bg-red-50">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="font-medium text-red-800">検知された異常：コンバージョン率の急落</h4>
                                <Badge variant="destructive">重要</Badge>
                            </div>
                            <p className="text-sm text-red-700">
                                本日14:30頃から、コンバージョン率が通常より30%低下しています。
                            </p>
                        </div>
                        <Card>
                            <CardHeader>
                                <CardTitle>AIによる原因分析と推奨アクション</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-800">
                                    AI分析の結果、<span className="font-bold">決済ページでのエラーが多発</span>している可能性が指摘されています。
                                    また、特定のブラウザ（Chromeモバイル版）でのみ発生しているようです。
                                    <br /><br />
                                    <span className="font-bold">推奨アクション：</span>決済システムのログを確認し、該当ブラウザでのテストを直ちに実施してください。
                                </p>
                                <p className="text-xs text-gray-500 mt-4">※この文章はGemini APIによって生成されたサンプルです。</p>
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>
            </TabsContent>

            {/* 自動最適化 */}
            <TabsContent value="optimization" className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Zap className="h-5 w-5 mr-2" />
                            AIによる自動最適化
                        </CardTitle>
                        <CardDescription>
                            広告予算の配分、商品の価格設定、レコメンドなどをAIが自動で調整し、売上の最大化を目指します。
                            <br />
                            <strong className="text-blue-600">（この機能は、AIによる最適化提案のサンプルを示します）</strong>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 border rounded-lg bg-green-50">
                            <h4 className="font-medium text-green-800 mb-2">最適化提案：広告予算の再配分</h4>
                            <p className="text-sm text-green-700">
                                現在のデータに基づくと、Instagram広告のROIがGoogle広告を上回っています。
                                予算の一部をGoogleからInstagramにシフトすることで、全体の広告効果が<span className="font-bold">8%向上</span>すると予測されます。
                            </p>
                        </div>
                         <Card>
                            <CardHeader>
                                <CardTitle>AIによるレコメンド最適化</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-800">
                                    AIは「商品A」と「商品B」の同時購入率が高いことを発見しました。
                                    これらの商品をセットで割引販売する、または商品ページでお互いをレコメンドすることで、
                                    平均注文額（AOV）が<span className="font-bold">5%向上</span>する可能性があります。
                                </p>
                                <p className="text-xs text-gray-500 mt-4">※この文章はGemini APIによって生成されたサンプルです。</p>
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
