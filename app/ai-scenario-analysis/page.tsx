"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Brain, TrendingUp, AlertTriangle, Zap, Target } from "lucide-react"
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
              <h1 className="text-2xl font-bold text-gray-900">AI分析・施策提案</h1>
            </div>
            <div className="flex items-center space-x-4">
               <p className="text-sm text-gray-500">（β版）</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 mr-2" />
                  AIによる施策提案
                </CardTitle>
                <CardDescription>
                  AIが貴社の状況を分析し、売上向上のための具体的なアクションを提案します。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg bg-green-50">
                  <h4 className="font-medium text-green-800 mb-2">提案1：高ROIチャネルへの広告費集中</h4>
                  <p className="text-sm text-green-700">
                    データによれば、SNS広告、特にFacebook広告は他のチャネルに比べて高い投資収益率（ROI）を示している可能性があります。
                    これらの効果的なチャネルに広告予算を集中させることで、効率的に新規顧客を獲得し、売上を向上させることが期待できます。
                  </p>
                </div>
                <div className="p-4 border rounded-lg bg-blue-50">
                  <h4 className="font-medium text-blue-800 mb-2">提案2：クロスセル促進による平均注文額（AOV）の向上</h4>
                  <p className="text-sm text-blue-700">
                    「スマートフォンケース」と「画面保護フィルム」など、特定の商品が一緒に購入される傾向が見られます。
                    これらの商品をカート画面や商品ページで一緒に提案（レコメンド）することで、顧客一人あたりの購入単価を引き上げるチャンスがあります。
                  </p>
                </div>
                <div className="p-4 border rounded-lg bg-purple-50">
                  <h4 className="font-medium text-purple-800 mb-2">提案3：カゴ落ち顧客へのリターゲティング</h4>
                  <p className="text-sm text-purple-700">
                    商品をカートに入れたものの購入に至らなかった顧客に対し、フォローアップのメールや広告を配信することは非常に効果的です。
                    「お買い忘れはありませんか？」といったリマインダーや、小さな割引クーポンを提供することで、購入の後押しができます。
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  ※これらの提案は、一般的なECサイトの成功事例に基づいたサンプルです。実際のデータ連携により、よりパーソナライズされた提案が可能になります。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  AIによる固定シナリオ分析
                </CardTitle>
                <CardDescription>
                  典型的なビジネスシナリオに基づき、AIが将来の売上を予測・解説します。
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">楽観シナリオ：大型セールが成功</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <span className="font-bold text-green-600">予測：売上 +30%</span>
                  </p>
                  <p className="text-xs text-gray-600">
                    季節の大型セールが成功し、新規顧客が大幅に増加した場合の予測です。
                    AIは、この勢いを維持するために、獲得した新規顧客へのリピート促進策が重要だと指摘しています。
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">悲観シナリオ：競合の値下げ攻勢</h4>
                   <p className="text-sm text-gray-700 mb-2">
                    <span className="font-bold text-red-600">予測：売上 -15%</span>
                  </p>
                  <p className="text-xs text-gray-600">
                    主要な競合他社が大幅な値下げキャンペーンを開始した場合の予測です。
                    AIは、価格競争に巻き込まれるのではなく、品質やサポートといった付加価値で差別化を図ることを推奨しています。
                  </p>
                </div>
                 <p className="text-xs text-gray-500 mt-2 md:col-span-2">
                  ※これらのシナリオと予測は、代表的なモデルケースに基づくサンプルです。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
