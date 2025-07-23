"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Star, TrendingUp, Users, Eye, Settings, Zap, Target, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Recommendations() {
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
              <h1 className="text-2xl font-bold text-gray-900">商品レコメンデーション</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                設定
              </Button>
              <Button>
                <Zap className="h-4 w-4 mr-2" />
                モデル更新
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Performance Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">レコメンデーション精度</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">92.3%</div>
                <p className="text-xs text-muted-foreground">前月比 +2.1%</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">今日の提案数</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">個別提案</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">クリック率</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15.8%</div>
                <p className="text-xs text-muted-foreground">業界平均: 12.4%</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">売上貢献</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">¥890K</div>
                <p className="text-xs text-muted-foreground">今月の売上</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="performance" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="performance">パフォーマンス</TabsTrigger>
              <TabsTrigger value="products">商品分析</TabsTrigger>
              <TabsTrigger value="customers">顧客分析</TabsTrigger>
              <TabsTrigger value="settings">設定</TabsTrigger>
            </TabsList>

            <TabsContent value="performance" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      レコメンデーション効果
                    </CardTitle>
                    <CardDescription>過去30日間のパフォーマンス推移</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">表示回数</span>
                        <span className="text-sm text-gray-600">45,678回</span>
                      </div>
                      <Progress value={85} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">クリック数</span>
                        <span className="text-sm text-gray-600">7,234回</span>
                      </div>
                      <Progress value={72} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">購入転換</span>
                        <span className="text-sm text-gray-600">1,456件</span>
                      </div>
                      <Progress value={65} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">売上貢献</span>
                        <span className="text-sm text-gray-600">¥2,890,000</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>レコメンデーションタイプ別効果</CardTitle>
                    <CardDescription>タイプ別のパフォーマンス比較</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">関連商品</div>
                          <div className="text-xs text-gray-600">「この商品を見た人はこちらも」</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-blue-600">18.2%</div>
                          <div className="text-xs text-gray-500">CTR</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">パーソナライズ</div>
                          <div className="text-xs text-gray-600">「あなたにおすすめ」</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">22.5%</div>
                          <div className="text-xs text-gray-500">CTR</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">トレンド</div>
                          <div className="text-xs text-gray-600">「人気商品」</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-yellow-600">14.8%</div>
                          <div className="text-xs text-gray-500">CTR</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">クロスセル</div>
                          <div className="text-xs text-gray-600">「一緒に購入されている」</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-purple-600">16.3%</div>
                          <div className="text-xs text-gray-500">CTR</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="products" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>人気レコメンデーション商品</CardTitle>
                    <CardDescription>最もクリックされている推奨商品</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          name: "ワイヤレスイヤホン Pro",
                          clicks: 1234,
                          conversion: 8.5,
                          image: "/placeholder.svg?height=60&width=60",
                        },
                        {
                          name: "スマートウォッチ Series 5",
                          clicks: 987,
                          conversion: 12.3,
                          image: "/placeholder.svg?height=60&width=60",
                        },
                        {
                          name: "ノートパソコン 15インチ",
                          clicks: 756,
                          conversion: 15.7,
                          image: "/placeholder.svg?height=60&width=60",
                        },
                        {
                          name: "ワイヤレス充電器",
                          clicks: 654,
                          conversion: 6.8,
                          image: "/placeholder.svg?height=60&width=60",
                        },
                      ].map((product, index) => (
                        <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={60}
                            height={60}
                            className="rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="font-medium text-sm">{product.name}</div>
                            <div className="text-xs text-gray-600">
                              クリック: {product.clicks}回 | 転換率: {product.conversion}%
                            </div>
                          </div>
                          <Badge variant="outline">#{index + 1}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>カテゴリ別レコメンデーション効果</CardTitle>
                    <CardDescription>商品カテゴリ別のパフォーマンス</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">電子機器</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">19.2%</span>
                            <Badge variant="default">高効果</Badge>
                          </div>
                        </div>
                        <Progress value={92} className="h-2" />

                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">ファッション</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">16.8%</span>
                            <Badge variant="secondary">中効果</Badge>
                          </div>
                        </div>
                        <Progress value={78} className="h-2" />

                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">美容・コスメ</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">14.5%</span>
                            <Badge variant="secondary">中効果</Badge>
                          </div>
                        </div>
                        <Progress value={65} className="h-2" />

                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">食品・飲料</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">11.3%</span>
                            <Badge variant="outline">標準</Badge>
                          </div>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="customers" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      顧客セグメント別効果
                    </CardTitle>
                    <CardDescription>セグメント別のレコメンデーション反応</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">VIP顧客</div>
                          <div className="text-xs text-gray-600">購入頻度: 月4回以上</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">28.5%</div>
                          <div className="text-xs text-gray-500">CTR</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">レギュラー顧客</div>
                          <div className="text-xs text-gray-600">購入頻度: 月2-3回</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-blue-600">18.7%</div>
                          <div className="text-xs text-gray-500">CTR</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">新規顧客</div>
                          <div className="text-xs text-gray-600">初回購入から3ヶ月以内</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-yellow-600">12.3%</div>
                          <div className="text-xs text-gray-500">CTR</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">休眠顧客</div>
                          <div className="text-xs text-gray-600">3ヶ月以上購入なし</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-red-600">8.9%</div>
                          <div className="text-xs text-gray-500">CTR</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>年齢層別レコメンデーション傾向</CardTitle>
                    <CardDescription>年齢層別の商品嗜好分析</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">20-29歳</span>
                          <Badge variant="outline">トレンド重視</Badge>
                        </div>
                        <div className="text-xs text-gray-600">人気: ファッション、美容、電子機器</div>
                        <div className="text-xs text-gray-600">平均CTR: 16.8%</div>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">30-39歳</span>
                          <Badge variant="outline">実用性重視</Badge>
                        </div>
                        <div className="text-xs text-gray-600">人気: 家電、インテリア、健康用品</div>
                        <div className="text-xs text-gray-600">平均CTR: 19.2%</div>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">40-49歳</span>
                          <Badge variant="outline">品質重視</Badge>
                        </div>
                        <div className="text-xs text-gray-600">人気: 高級品、健康食品、書籍</div>
                        <div className="text-xs text-gray-600">平均CTR: 21.5%</div>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">50歳以上</span>
                          <Badge variant="outline">安心重視</Badge>
                        </div>
                        <div className="text-xs text-gray-600">人気: 健康用品、園芸、伝統工芸</div>
                        <div className="text-xs text-gray-600">平均CTR: 18.7%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>レコメンデーション設定</CardTitle>
                  <CardDescription>AIモデルとアルゴリズムの設定</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">アルゴリズム設定</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-2 border rounded">
                            <span className="text-sm">協調フィルタリング</span>
                            <Badge variant="default">有効</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 border rounded">
                            <span className="text-sm">コンテンツベース</span>
                            <Badge variant="default">有効</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 border rounded">
                            <span className="text-sm">ディープラーニング</span>
                            <Badge variant="secondary">無効</Badge>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">表示設定</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">商品ページ表示数</span>
                            <span className="text-sm font-medium">6個</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">メール表示数</span>
                            <span className="text-sm font-medium">4個</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">更新頻度</span>
                            <span className="text-sm font-medium">1時間</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">パフォーマンス設定</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">最小信頼度</span>
                            <span className="text-sm font-medium">70%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">学習データ期間</span>
                            <span className="text-sm font-medium">90日</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">A/Bテスト</span>
                            <Badge variant="default">実行中</Badge>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">除外設定</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">在庫切れ商品</span>
                            <Badge variant="default">除外</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">販売終了商品</span>
                            <Badge variant="default">除外</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">既購入商品</span>
                            <Badge variant="secondary">含める</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <Button variant="outline">設定をリセット</Button>
                    <Button>設定を保存</Button>
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
