"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  TrendingUp,
  Users,
  ShoppingCart,
  MessageCircle,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Eye,
  Star,
  Brain,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">EC Growth Hub</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">設定</Button>
              <Button>アカウント</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">ダッシュボード</h2>
            <p className="text-gray-600">EC事業の成長をサポートする統合プラットフォーム</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">今月の売上</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">¥2,450,000</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  前月比 +12.5%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">新規顧客</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+234</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  前月比 +8.2%
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
                  <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
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
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  前月比 +5.1%
                </p>
              </CardContent>
            </Card>
          </div>

          {/* AI Analysis Section */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-purple-600" />
                  AI分析・シナリオ予測
                </CardTitle>
                <CardDescription>高度なAI分析による詳細な売上予測とシナリオ分析</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">94.2%</div>
                    <div className="text-sm text-gray-600">AI予測精度</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">¥3.2M</div>
                    <div className="text-sm text-gray-600">来月予測売上</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">12</div>
                    <div className="text-sm text-gray-600">自動最適化実行中</div>
                  </div>
                </div>
                <Link href="/ai-scenario-analysis">
                  <Button className="w-full">
                    <Zap className="h-4 w-4 mr-2" />
                    AIシナリオ分析・予測を見る
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Analysis Links */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Analysis */}
            <Card className="col-span-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                      売上深掘り分析
                    </CardTitle>
                    <CardDescription>チャネル・カテゴリ・地域・時系列別の詳細分析</CardDescription>
                  </div>
                  <Link href="/revenue-analysis">
                    <Button variant="outline" size="sm">
                      詳細を見る
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Webサイト</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">55.3%</span>
                      <Badge variant="default">+18.5%</Badge>
                    </div>
                  </div>
                  <Progress value={55.3} className="h-2" />

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">SNS広告</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">18.8%</span>
                      <Badge variant="default">+32.1%</Badge>
                    </div>
                  </div>
                  <Progress value={18.8} className="h-2" />

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Google広告</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">15.2%</span>
                      <Badge variant="secondary">+8.2%</Badge>
                    </div>
                  </div>
                  <Progress value={15.2} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Customer Acquisition */}
            <Card className="col-span-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-green-600" />
                      新規顧客獲得分析
                    </CardTitle>
                    <CardDescription>CPA・ファーストオーダー・コホート分析</CardDescription>
                  </div>
                  <Link href="/customer-acquisition">
                    <Button variant="outline" size="sm">
                      詳細を見る
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">¥2,450</div>
                    <p className="text-sm text-gray-500">平均CPA</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold">68.5%</div>
                      <div className="text-xs text-gray-500">初回購入率</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">42.3%</div>
                      <div className="text-xs text-gray-500">30日継続率</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">1,234</div>
                      <div className="text-xs text-gray-500">今月獲得数</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Secondary Analysis Links */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Conversion Analysis */}
            <Card className="col-span-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-orange-600" />
                      コンバージョン率分析
                    </CardTitle>
                    <CardDescription>デバイス・LP・セグメント・A/Bテスト分析</CardDescription>
                  </div>
                  <Link href="/conversion-analysis">
                    <Button variant="outline" size="sm">
                      詳細を見る
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">4.12%</div>
                      <div className="text-xs text-gray-500">デスクトップ</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">2.89%</div>
                      <div className="text-xs text-gray-500">モバイル</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>A/Bテスト実行中</span>
                      <span className="font-medium">4件</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>勝利パターン</span>
                      <span className="font-medium text-green-600">2件</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AOV Analysis */}
            <Card className="col-span-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <ShoppingCart className="h-5 w-5 mr-2 text-purple-600" />
                      平均注文額分析
                    </CardTitle>
                    <CardDescription>バスケット・クーポン・セグメント・サブスク分析</CardDescription>
                  </div>
                  <Link href="/aov-analysis">
                    <Button variant="outline" size="sm">
                      詳細を見る
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">¥8,750</div>
                    <p className="text-sm text-gray-500">平均注文額</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold">23.4%</div>
                      <div className="text-xs text-gray-500">クロスセル率</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">15.8%</div>
                      <div className="text-xs text-gray-500">バンドル率</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">12.6%</div>
                      <div className="text-xs text-gray-500">定期購入率</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Original Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Marketing Campaigns */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-purple-600" />
                  マーケティング自動化
                </CardTitle>
                <CardDescription>パーソナライズされたキャンペーン管理</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">春のセールキャンペーン</span>
                    <Badge variant="secondary">実行中</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">新商品紹介メール</span>
                    <Badge variant="outline">準備中</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">リピーター向け特典</span>
                    <Badge variant="secondary">実行中</Badge>
                  </div>
                </div>
                <Link href="/campaigns">
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    キャンペーン管理
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Product Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-600" />
                  商品レコメンデーション
                </CardTitle>
                <CardDescription>AIによるパーソナライズ提案</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">92%</div>
                    <p className="text-xs text-gray-500">レコメンデーション精度</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center text-sm">
                    <div>
                      <div className="font-semibold">1,234</div>
                      <div className="text-gray-500">今日の提案数</div>
                    </div>
                    <div>
                      <div className="font-semibold">15.8%</div>
                      <div className="text-gray-500">クリック率</div>
                    </div>
                  </div>
                </div>
                <Link href="/recommendations">
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    レコメンデーション設定
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Customer Support */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
                  カスタマーサポート
                </CardTitle>
                <CardDescription>リアルタイムチャットサポート</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">アクティブチャット</span>
                    <Badge variant="default">3</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">待機中の問い合わせ</span>
                    <Badge variant="secondary">7</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">平均応答時間</span>
                    <span className="text-sm font-medium">2.3分</span>
                  </div>
                </div>
                <Link href="/support">
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    サポート管理
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>クイックアクション</CardTitle>
                <CardDescription>よく使用される機能への素早いアクセス</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link href="/analytics">
                    <Button variant="outline" className="h-20 flex flex-col bg-transparent">
                      <Eye className="h-6 w-6 mb-2" />
                      <span className="text-sm">データ分析</span>
                    </Button>
                  </Link>
                  <Link href="/campaigns">
                    <Button variant="outline" className="h-20 flex flex-col bg-transparent">
                      <Target className="h-6 w-6 mb-2" />
                      <span className="text-sm">新規キャンペーン</span>
                    </Button>
                  </Link>
                  <Link href="/prediction">
                    <Button variant="outline" className="h-20 flex flex-col bg-transparent">
                      <TrendingUp className="h-6 w-6 mb-2" />
                      <span className="text-sm">売上レポート</span>
                    </Button>
                  </Link>
                  <Link href="/support">
                    <Button variant="outline" className="h-20 flex flex-col bg-transparent">
                      <MessageCircle className="h-6 w-6 mb-2" />
                      <span className="text-sm">サポート対応</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
