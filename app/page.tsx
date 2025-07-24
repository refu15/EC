"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  Users,
  Target,
  ArrowUpRight,
  DollarSign,
  Brain,
  Lightbulb,
  Check,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { PolicyModal } from "@/components/ui/policy-modal"

export default function Dashboard() {
  const [proposals, setProposals] = useState([
    {
      id: 1,
      title: "リピーター向けクーポンを発行する",
      type: "すぐできる",
      cost: "低",
      roi: "高",
      tried: false,
    },
    {
      id: 2,
      title: "SNSキャンペーンを実施する",
      type: "やや労力",
      cost: "中",
      roi: "高",
      tried: false,
    },
    {
      id: 3,
      title: "サイトTOPの訴求バナーを変更",
      type: "インパクト大",
      cost: "中",
      roi: "中",
      tried: false,
    }
  ])

  const handleTryIt = (id: number) => {
    setProposals(proposals.map(p => p.id === id ? { ...p, tried: true } : p))
  }

  const triedProposalsCount = proposals.filter(p => p.tried).length

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
            <div className="flex justify-between items-center mb-2">
                 <h2 className="text-3xl font-bold text-gray-900">メインダッシュボード</h2>
                 <Link href="/upload">
                    <Button variant="outline">データ更新</Button>
                 </Link>
            </div>
            <p className="text-gray-600">主要なKPIとAIによるワンポイント解説</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">売上</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">¥2,450,000</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  +12.5% (前月比)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">新規顧客</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+234人</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  +8.2% (前月比)
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
                  -0.3% (前月比)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">平均注文額</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">¥8,750</div>
                <p className="text-xs text-muted-foreground">
                  +5.1% (前月比)
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-indigo-600" />
                    AIによるワンポイント解説
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    売上と新規顧客数が順調に増加しており、特にSNS経由の流入が貢献しているようです。一方で、コンバージョン率がわずかに低下しています。
                    カートから決済への導線に課題がないか、一度確認してみることをお勧めします。
                  </p>
                   <p className="text-xs text-gray-500 mt-4">
                    ※この解説はAIが生成したサンプルです。
                  </p>
                </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
                  今週のおすすめ施策
                </CardTitle>
                <CardDescription>AIがあなたのECサイトの状況に合わせて、効果的な施策を提案します。</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {proposals.map((proposal) => (
                  <PolicyModal key={proposal.id} proposal={proposal} onTryIt={handleTryIt}>
                    <Card className={proposal.tried ? "bg-green-50" : ""}>
                      <CardHeader>
                        <CardTitle className="text-base">{proposal.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between text-xs mb-4">
                          <span className="font-semibold">コスト: <span className="text-blue-600">¥{proposal.cost.toLocaleString()}</span></span>
                          <span className="font-semibold">ROI: <span className="text-green-600">{proposal.expectedROI}倍</span></span>
                        </div>
                        <Button className="w-full" onClick={() => handleTryIt(proposal.id)} disabled={proposal.tried}>
                          <Check className="h-4 w-4 mr-2" />
                          {proposal.tried ? "実施済み" : "やってみる"}
                        </Button>
                      </CardContent>
                    </Card>
                  </PolicyModal>
                ))}
              </CardContent>
               {triedProposalsCount > 0 && (
                <CardFooter>
                    <p className="text-sm text-green-600 font-semibold">
                        今週は{triedProposalsCount}個の施策に挑戦しました！素晴らしいです！
                    </p>
                </CardFooter>
               )}
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                        あなたの成長記録
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center">
                        <p className="text-4xl font-bold">{triedProposalsCount}</p>
                        <p className="text-sm text-muted-foreground">今月のチャレンジ数</p>
                    </div>
                    <p className="text-xs text-center text-gray-500 mt-4">
                        先月より{triedProposalsCount > 1 ? triedProposalsCount - 1 : 0}個多く挑戦しています！
                    </p>
                </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
