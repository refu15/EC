"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  TrendingUp,
  Users,
  ShoppingCart,
  MessageCircle,
  Target,
  ArrowUpRight,
  DollarSign,
  Brain,
  Zap,
  Star,
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
              <Button variant="outline" disabled>設定</Button>
              <Button variant="outline" disabled>アカウント</Button>
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
            <p className="text-gray-600">EC事業の成長をサポートする5つの主要機能（MVP）</p>
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
                  +12.5% (サンプル値)
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
                  +8.2% (サンプル値)
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
                <p className="text-xs text-muted-foreground">
                  (サンプル値)
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
                <p className="text-xs text-muted-foreground">
                  (サンプル値)
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-3">
                <CardHeader>
                    <CardTitle>主要機能</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    <Link href="/analytics">
                        <Button variant="outline" className="h-32 flex flex-col w-full bg-transparent">
                            <BarChart3 className="h-8 w-8 mb-2 text-blue-600" />
                            <span className="text-sm text-center">顧客分析ダッシュボード</span>
                        </Button>
                    </Link>
                    <Link href="/prediction">
                        <Button variant="outline" className="h-32 flex flex-col w-full bg-transparent">
                            <TrendingUp className="h-8 w-8 mb-2 text-green-600" />
                            <span className="text-sm text-center">AI売上予測</span>
                        </Button>
                    </Link>
                    <Link href="/campaigns">
                        <Button variant="outline" className="h-32 flex flex-col w-full bg-transparent">
                            <Target className="h-8 w-8 mb-2 text-purple-600" />
                            <span className="text-sm text-center">マーケティング自動化</span>
                        </Button>
                    </Link>
                    <Link href="/recommendations">
                        <Button variant="outline" className="h-32 flex flex-col w-full bg-transparent">
                            <Star className="h-8 w-8 mb-2 text-yellow-600" />
                            <span className="text-sm text-center">商品レコメンデーション</span>
                        </Button>
                    </Link>
                    <Link href="/support">
                        <Button variant="outline" className="h-32 flex flex-col w-full bg-transparent">
                            <MessageCircle className="h-8 w-8 mb-2 text-red-600" />
                            <span className="text-sm text-center">リアルタイム顧客サポート</span>
                        </Button>
                    </Link>
                </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-indigo-600" />
                  AIシナリオ分析
                </CardTitle>
                <CardDescription>もしもの状況をAIでシミュレーション</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  「広告費を増やしたら？」「競合がセールを始めたら？」といったシナリオをAIが分析し、ビジネス判断をサポートします。
                </p>
                <Link href="/ai-scenario-analysis">
                  <Button className="w-full" variant="outline">
                    <Zap className="h-4 w-4 mr-2" />
                    シナリオ分析を試す
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
