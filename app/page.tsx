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
import { useAppState } from "@/hooks/use-app-state"
import { PolicyModal } from "@/components/ui/policy-modal"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"

export default function Dashboard() {
  const { kpis, proposals, setProposals, previousKpis } = useAppState()
  const [aiCommentary, setAiCommentary] = useState("")
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getUserAndData = async () => {
      setLoading(true)
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push("/login")
        return
      }

      const { data: kpiData, error } = await supabase
        .from('kpi_data')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(2)

      if (error) {
        toast.error(error.message)
        setLoading(false)
        return
      }

      if (kpiData && kpiData.length > 0) {
        setKpis(kpiData[0])
        if (kpiData.length > 1) {
          setPreviousKpis(kpiData[1])
        } else {
            // TODO: Replace with actual previous data logic
            setPreviousKpis({
                sales: 2000000,
                newCustomers: 200,
                conversionRate: 3.5,
                averageOrderValue: 8000,
            })
        }
      }
      setLoading(false)
    }
    getUserAndData()
  }, [])

  useEffect(() => {
    if (kpis && previousKpis) {
      fetch("/api/commentary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ kpis, previousKpis }),
      })
        .then((res) => res.json())
        .then((data) => setAiCommentary(data.commentary))
    }
  }, [kpis, previousKpis])

  const handleTryIt = async (id: number, status: string) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
        toast.error("Please log in to record your action.")
        return
    }

    const { error } = await supabase.from('policy_history').insert([{
        user_id: user.id,
        proposal_id: id,
        status: status,
    }])

    if (error) {
        toast.error(error.message)
    } else {
        if (status === 'tried') {
            toast.success("施策を実行しました！")
            setProposals(proposals.map(p => p.id === id ? { ...p, tried: true } : p))
        } else {
            toast.info("フィードバックを記録しました。")
        }
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }

  const triedProposalsCount = proposals.filter(p => p.tried).length

  if (loading) {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Skeleton className="h-24" />
                <Skeleton className="h-24" />
                <Skeleton className="h-24" />
                <Skeleton className="h-24" />
            </div>
            <Skeleton className="h-48" />
        </div>
    )
  }

  if (!kpis || !previousKpis) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center">
            <Card className="max-w-xl w-full">
                <CardHeader>
                    <CardTitle>ようこそ！</CardTitle>
                    <CardDescription>まずはデータをアップロードして分析を始めましょう。</CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="/upload">
                        <Button>データ連携ページへ</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
  }

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
              <Button variant="outline" onClick={handleLogout}>ログアウト</Button>
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
                <div className="text-2xl font-bold">¥{kpis.sales.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                   {(kpis.sales / previousKpis.sales * 100 - 100).toFixed(1)}% (前月比)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">新規顧客</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+{kpis.newCustomers.toLocaleString()}人</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  {(kpis.newCustomers / previousKpis.newCustomers * 100 - 100).toFixed(1)}% (前月比)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">コンバージョン率</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpis.conversionRate.toFixed(2)}%</div>
                <p className="text-xs text-muted-foreground">
                  {(kpis.conversionRate - previousKpis.conversionRate).toFixed(2)}% (前月比)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">平均注文額</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">¥{kpis.averageOrderValue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                   {(kpis.averageOrderValue / previousKpis.averageOrderValue * 100 - 100).toFixed(1)}% (前月比)
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
                    {aiCommentary}
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
