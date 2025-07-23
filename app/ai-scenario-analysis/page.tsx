"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  ArrowLeft,
  Brain,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Target,
  Zap,
  Activity,
  Cpu,
  Eye,
  RefreshCw,
  Settings,
  Download,
  Play,
} from "lucide-react"
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
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                モデル設定
              </Button>
              <Button variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                データ更新
              </Button>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                レポート出力
              </Button>
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
                <p className="text-xs text-muted-foreground">過去30日平均</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">異常検知</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">3</div>
                <p className="text-xs text-muted-foreground">要注意項目</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">自動最適化</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">12</div>
                <p className="text-xs text-muted-foreground">実行中施策</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">予測売上</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">¥3.2M</div>
                <p className="text-xs text-muted-foreground">来月予測</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="scenarios" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="scenarios">詳細シナリオ</TabsTrigger>
              <TabsTrigger value="monte-carlo">モンテカルロ</TabsTrigger>
              <TabsTrigger value="anomaly">異常検知</TabsTrigger>
              <TabsTrigger value="prediction">AI予測</TabsTrigger>
              <TabsTrigger value="optimization">最適化</TabsTrigger>
              <TabsTrigger value="simulation">シミュレーション</TabsTrigger>
            </TabsList>

            {/* 詳細シナリオ分析 */}
            <TabsContent value="scenarios" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      多変数シナリオ分析
                    </CardTitle>
                    <CardDescription>複数要因を組み合わせた詳細予測</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* シナリオ設定 */}
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

                      <div>
                        <Label className="text-sm font-medium">経済指標</Label>
                        <Select defaultValue="stable">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="growth">成長期</SelectItem>
                            <SelectItem value="stable">安定期</SelectItem>
                            <SelectItem value="recession">不況期</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button className="w-full">
                        <Play className="h-4 w-4 mr-2" />
                        シナリオ実行
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>シナリオ結果比較</CardTitle>
                    <CardDescription>各シナリオでの予測結果</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        scenario: "最楽観シナリオ",
                        probability: 15,
                        revenue: 4200000,
                        growth: 68.2,
                        risk: "低",
                        color: "green",
                      },
                      {
                        scenario: "楽観シナリオ",
                        probability: 25,
                        revenue: 3600000,
                        growth: 44.0,
                        risk: "低",
                        color: "blue",
                      },
                      {
                        scenario: "標準シナリオ",
                        probability: 35,
                        revenue: 3200000,
                        growth: 28.0,
                        risk: "中",
                        color: "gray",
                      },
                      {
                        scenario: "悲観シナリオ",
                        probability: 20,
                        revenue: 2800000,
                        growth: 12.0,
                        risk: "中",
                        color: "yellow",
                      },
                      {
                        scenario: "最悲観シナリオ",
                        probability: 5,
                        revenue: 2200000,
                        growth: -12.0,
                        risk: "高",
                        color: "red",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full bg-${item.color}-500`}></div>
                            <span className="font-medium text-sm">{item.scenario}</span>
                            <Badge variant="outline">{item.probability}%</Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold">¥{(item.revenue / 1000000).toFixed(1)}M</div>
                            <div className="text-xs text-gray-500">
                              {item.growth > 0 ? "+" : ""}
                              {item.growth}%
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Progress value={item.probability} className="flex-1 mr-4 h-2" />
                          <Badge
                            variant={item.risk === "低" ? "default" : item.risk === "中" ? "secondary" : "destructive"}
                          >
                            リスク{item.risk}
                          </Badge>
                        </div>
                      </div>
                    ))}

                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Brain className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">AI推奨アクション</span>
                      </div>
                      <ul className="text-xs text-blue-600 space-y-1">
                        <li>• マーケティング予算を20%増額（ROI最大化）</li>
                        <li>• 競合価格監視システムの導入</li>
                        <li>• 在庫レベルを15%増加（機会損失防止）</li>
                        <li>• リスクヘッジとして新規チャネル開拓</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 感度分析 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    感度分析・影響度マップ
                  </CardTitle>
                  <CardDescription>各要因が売上に与える影響度の定量化</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">要因別影響度ランキング</h4>
                      {[
                        { factor: "マーケティング予算", impact: 0.85, elasticity: 1.2 },
                        { factor: "競合価格", impact: 0.72, elasticity: -0.8 },
                        { factor: "季節要因", impact: 0.68, elasticity: 0.6 },
                        { factor: "経済指標", impact: 0.45, elasticity: 0.4 },
                        { factor: "在庫レベル", impact: 0.38, elasticity: 0.3 },
                        { factor: "配送コスト", impact: 0.25, elasticity: -0.2 },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <div className="font-medium text-sm">{item.factor}</div>
                            <div className="text-xs text-gray-600">弾力性: {item.elasticity}</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Progress value={item.impact * 100} className="w-20 h-2" />
                            <span className="text-sm font-medium">{(item.impact * 100).toFixed(0)}%</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">リスク・機会マトリックス</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <div className="font-medium text-green-800 text-sm mb-2">高機会・低リスク</div>
                          <ul className="text-xs text-green-600 space-y-1">
                            <li>• SEO強化</li>
                            <li>• メール配信最適化</li>
                            <li>• 既存顧客アップセル</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <div className="font-medium text-yellow-800 text-sm mb-2">高機会・高リスク</div>
                          <ul className="text-xs text-yellow-600 space-y-1">
                            <li>• 新規市場参入</li>
                            <li>• 大型広告キャンペーン</li>
                            <li>• 価格戦略変更</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="font-medium text-blue-800 text-sm mb-2">低機会・低リスク</div>
                          <ul className="text-xs text-blue-600 space-y-1">
                            <li>• 運用効率化</li>
                            <li>• コスト削減</li>
                            <li>• プロセス改善</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <div className="font-medium text-red-800 text-sm mb-2">低機会・高リスク</div>
                          <ul className="text-xs text-red-600 space-y-1">
                            <li>• 不採算事業継続</li>
                            <li>• 過剰在庫保持</li>
                            <li>• 低効率チャネル</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* モンテカルロシミュレーション */}
            <TabsContent value="monte-carlo" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Cpu className="h-5 w-5 mr-2" />
                      モンテカルロシミュレーション
                    </CardTitle>
                    <CardDescription>10,000回シミュレーションによる確率分布</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-blue-600 mb-2">¥3,180,000</div>
                      <div className="text-sm text-gray-600">期待値（平均）</div>
                    </div>

                    {/* 確率分布ヒストグラム */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>¥2.0M</span>
                        <span>¥3.2M</span>
                        <span>¥4.5M</span>
                      </div>
                      <div className="h-32 flex items-end justify-between space-x-1">
                        {[2, 5, 12, 28, 45, 67, 89, 95, 87, 72, 58, 42, 28, 18, 12, 8, 5, 3, 2, 1].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="bg-blue-500 rounded-t flex-1"
                              style={{ height: `${height}%` }}
                            />
                          ),
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <div className="font-bold text-red-600">5%</div>
                        <div className="text-xs text-gray-600">¥2.1M以下</div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="font-bold text-green-600">90%</div>
                        <div className="text-xs text-gray-600">¥2.1M-4.2M</div>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <div className="font-bold text-red-600">5%</div>
                        <div className="text-xs text-gray-600">¥4.2M以上</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>リスク指標・統計値</CardTitle>
                    <CardDescription>VaR・期待ショートフォール等</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 border rounded-lg">
                        <div className="text-xs text-gray-600">標準偏差</div>
                        <div className="text-lg font-bold">¥420K</div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="text-xs text-gray-600">変動係数</div>
                        <div className="text-lg font-bold">13.2%</div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="text-xs text-gray-600">VaR (95%)</div>
                        <div className="text-lg font-bold text-red-600">¥2.1M</div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="text-xs text-gray-600">期待ショートフォール</div>
                        <div className="text-lg font-bold text-red-600">¥1.8M</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-medium text-green-800 text-sm">目標達成確率</span>
                        </div>
                        <div className="text-2xl font-bold text-green-600">78.5%</div>
                        <div className="text-xs text-green-600">¥3.0M以上達成</div>
                      </div>

                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="font-medium text-yellow-800 text-sm">注意レベル確率</span>
                        </div>
                        <div className="text-2xl font-bold text-yellow-600">15.2%</div>
                        <div className="text-xs text-yellow-600">¥2.5M以下</div>
                      </div>

                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="font-medium text-red-800 text-sm">危険レベル確率</span>
                        </div>
                        <div className="text-2xl font-bold text-red-600">6.3%</div>
                        <div className="text-xs text-red-600">¥2.0M以下</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>シナリオ別対策プラン</CardTitle>
                  <CardDescription>確率に応じた事前準備・対応策</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">好調シナリオ (78.5%)</span>
                      </div>
                      <ul className="text-xs text-green-600 space-y-2">
                        <li>• 在庫増強の準備</li>
                        <li>• 追加マーケティング予算確保</li>
                        <li>• スタッフ増員計画</li>
                        <li>• 新商品投入タイミング調整</li>
                        <li>• 配送キャパシティ拡大</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <AlertTriangle className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800">注意シナリオ (15.2%)</span>
                      </div>
                      <ul className="text-xs text-yellow-600 space-y-2">
                        <li>• コスト削減プラン発動</li>
                        <li>• 在庫調整・処分セール</li>
                        <li>• マーケティング効率化</li>
                        <li>• 価格戦略見直し</li>
                        <li>• キャッシュフロー管理強化</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <TrendingDown className="h-4 w-4 text-red-600" />
                        <span className="font-medium text-red-800">危険シナリオ (6.3%)</span>
                      </div>
                      <ul className="text-xs text-red-600 space-y-2">
                        <li>• 緊急コスト削減実行</li>
                        <li>• 不採算事業の停止</li>
                        <li>• 資金調達準備</li>
                        <li>• 事業再構築プラン</li>
                        <li>• ステークホルダー対応</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 異常検知 */}
            <TabsContent value="anomaly" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Eye className="h-5 w-5 mr-2" />
                      リアルタイム異常検知
                    </CardTitle>
                    <CardDescription>機械学習による異常パターン検出</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        metric: "コンバージョン率",
                        current: 2.1,
                        expected: 3.2,
                        anomaly: -34.4,
                        severity: "high",
                        timestamp: "2024-03-15 14:30",
                      },
                      {
                        metric: "平均注文額",
                        current: 12400,
                        expected: 8750,
                        anomaly: +41.7,
                        severity: "medium",
                        timestamp: "2024-03-15 13:45",
                      },
                      {
                        metric: "カート放棄率",
                        current: 78.5,
                        expected: 65.2,
                        anomaly: +20.4,
                        severity: "high",
                        timestamp: "2024-03-15 12:15",
                      },
                      {
                        metric: "新規顧客獲得数",
                        current: 45,
                        expected: 67,
                        anomaly: -32.8,
                        severity: "medium",
                        timestamp: "2024-03-15 11:00",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{item.metric}</span>
                            <Badge variant={item.severity === "high" ? "destructive" : "secondary"}>
                              {item.severity === "high" ? "高" : "中"}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold">
                              {typeof item.current === "number" && item.current > 100
                                ? `¥${item.current.toLocaleString()}`
                                : `${item.current}${item.metric.includes("率") ? "%" : item.metric.includes("数") ? "人" : ""}`}
                            </div>
                            <div className="text-xs text-gray-500">{item.timestamp}</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-600">
                            期待値:{" "}
                            {typeof item.expected === "number" && item.expected > 100
                              ? `¥${item.expected.toLocaleString()}`
                              : `${item.expected}${item.metric.includes("率") ? "%" : item.metric.includes("数") ? "人" : ""}`}
                          </span>
                          <span className={`font-medium ${item.anomaly > 0 ? "text-red-600" : "text-blue-600"}`}>
                            {item.anomaly > 0 ? "+" : ""}
                            {item.anomaly}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>異常原因分析・対策</CardTitle>
                    <CardDescription>AIによる根本原因分析と推奨アクション</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        <span className="font-medium text-red-800">緊急対応必要</span>
                      </div>
                      <div className="text-sm text-red-700 mb-2">コンバージョン率 -34.4%</div>
                      <div className="text-xs text-red-600 mb-3">
                        <strong>推定原因:</strong> 決済システム障害、サイト表示速度低下
                      </div>
                      <ul className="text-xs text-red-600 space-y-1">
                        <li>• 決済システム状況確認</li>
                        <li>• サーバー負荷状況チェック</li>
                        <li>• CDN設定見直し</li>
                        <li>• 緊急メンテナンス実施</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800">要監視</span>
                      </div>
                      <div className="text-sm text-yellow-700 mb-2">平均注文額 +41.7%</div>
                      <div className="text-xs text-yellow-600 mb-3">
                        <strong>推定原因:</strong> 高額商品の大量注文、プロモーション効果
                      </div>
                      <ul className="text-xs text-yellow-600 space-y-1">
                        <li>• 在庫状況確認</li>
                        <li>• 不正注文チェック</li>
                        <li>• キャンペーン効果測定</li>
                        <li>• 配送キャパシティ確認</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Brain className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">AI学習状況</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <div className="text-gray-600">検知精度</div>
                          <div className="font-medium">96.8%</div>
                        </div>
                        <div>
                          <div className="text-gray-600">誤検知率</div>
                          <div className="font-medium">2.1%</div>
                        </div>
                        <div>
                          <div className="text-gray-600">学習データ</div>
                          <div className="font-medium">180日分</div>
                        </div>
                        <div>
                          <div className="text-gray-600">更新頻度</div>
                          <div className="font-medium">1時間毎</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>異常検知履歴・トレンド</CardTitle>
                  <CardDescription>過去の異常パターンと対応結果</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-48 flex items-end justify-between space-x-1">
                      {[
                        { day: "3/1", anomalies: 2, severity: "low" },
                        { day: "3/2", anomalies: 1, severity: "medium" },
                        { day: "3/3", anomalies: 0, severity: "none" },
                        { day: "3/4", anomalies: 3, severity: "high" },
                        { day: "3/5", anomalies: 1, severity: "low" },
                        { day: "3/6", anomalies: 0, severity: "none" },
                        { day: "3/7", anomalies: 2, severity: "medium" },
                        { day: "3/8", anomalies: 4, severity: "high" },
                        { day: "3/9", anomalies: 1, severity: "low" },
                        { day: "3/10", anomalies: 0, severity: "none" },
                        { day: "3/11", anomalies: 2, severity: "medium" },
                        { day: "3/12", anomalies: 1, severity: "low" },
                        { day: "3/13", anomalies: 3, severity: "high" },
                        { day: "3/14", anomalies: 2, severity: "medium" },
                        { day: "3/15", anomalies: 3, severity: "high" },
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div
                            className={`w-6 rounded-t ${
                              item.severity === "high"
                                ? "bg-red-500"
                                : item.severity === "medium"
                                  ? "bg-yellow-500"
                                  : item.severity === "low"
                                    ? "bg-blue-500"
                                    : "bg-gray-300"
                            }`}
                            style={{ height: `${Math.max(item.anomalies * 30, 10)}px` }}
                          />
                          <div className="text-xs text-gray-500 mt-2 transform -rotate-45 origin-top-left">
                            {item.day}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <div className="text-2xl font-bold text-red-600">8</div>
                        <div className="text-xs text-gray-600">高重要度異常</div>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">12</div>
                        <div className="text-xs text-gray-600">中重要度異常</div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">6</div>
                        <div className="text-xs text-gray-600">低重要度異常</div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">92%</div>
                        <div className="text-xs text-gray-600">対応完了率</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* AI予測 */}
            <TabsContent value="prediction" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="h-5 w-5 mr-2" />
                      多次元AI予測モデル
                    </CardTitle>
                    <CardDescription>深層学習による高精度予測</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 border rounded-lg text-center">
                        <div className="text-xs text-gray-600">売上予測精度</div>
                        <div className="text-2xl font-bold text-blue-600">94.2%</div>
                      </div>
                      <div className="p-3 border rounded-lg text-center">
                        <div className="text-xs text-gray-600">顧客行動予測</div>
                        <div className="text-2xl font-bold text-green-600">91.8%</div>
                      </div>
                      <div className="p-3 border rounded-lg text-center">
                        <div className="text-xs text-gray-600">在庫需要予測</div>
                        <div className="text-2xl font-bold text-purple-600">89.5%</div>
                      </div>
                      <div className="p-3 border rounded-lg text-center">
                        <div className="text-xs text-gray-600">チャーン予測</div>
                        <div className="text-2xl font-bold text-orange-600">87.3%</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="font-medium text-blue-800 text-sm mb-1">売上予測 (次月)</div>
                        <div className="text-lg font-bold text-blue-600">¥3,180,000</div>
                        <div className="text-xs text-blue-600">信頼区間: ¥2.8M - ¥3.6M</div>
                      </div>

                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="font-medium text-green-800 text-sm mb-1">新規顧客獲得予測</div>
                        <div className="text-lg font-bold text-green-600">1,245人</div>
                        <div className="text-xs text-green-600">前月比: +18.5%</div>
                      </div>

                      <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="font-medium text-purple-800 text-sm mb-1">チャーン予測</div>
                        <div className="text-lg font-bold text-purple-600">234人</div>
                        <div className="text-xs text-purple-600">リスク顧客: 89人</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>予測要因分析</CardTitle>
                    <CardDescription>予測に影響する主要因子</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">過去売上トレンド</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={85} className="w-20 h-2" />
                          <span className="text-sm">85%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">季節性パターン</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={72} className="w-20 h-2" />
                          <span className="text-sm">72%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">マーケティング効果</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={68} className="w-20 h-2" />
                          <span className="text-sm">68%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">経済指標</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={45} className="w-20 h-2" />
                          <span className="text-sm">45%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">競合動向</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={38} className="w-20 h-2" />
                          <span className="text-sm">38%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">外部イベント</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={25} className="w-20 h-2" />
                          <span className="text-sm">25%</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium mb-2">モデル詳細</div>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <div className="text-gray-600">アルゴリズム</div>
                          <div className="font-medium">LSTM + Transformer</div>
                        </div>
                        <div>
                          <div className="text-gray-600">学習期間</div>
                          <div className="font-medium">24ヶ月</div>
                        </div>
                        <div>
                          <div className="text-gray-600">特徴量数</div>
                          <div className="font-medium">127個</div>
                        </div>
                        <div>
                          <div className="text-gray-600">更新頻度</div>
                          <div className="font-medium">日次</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>顧客行動予測・LTV分析</CardTitle>
                  <CardDescription>個別顧客の将来価値予測</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">高LTV予測顧客</h4>
                      {[
                        { id: "C001", ltv: 89000, probability: 92, segment: "VIP候補" },
                        { id: "C002", ltv: 67000, probability: 88, segment: "ロイヤル候補" },
                        { id: "C003", ltv: 54000, probability: 85, segment: "成長見込み" },
                      ].map((customer, index) => (
                        <div key={index} className="p-3 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-sm">{customer.id}</span>
                            <Badge variant="default">{customer.probability}%</Badge>
                          </div>
                          <div className="text-xs text-green-600">予測LTV: ¥{customer.ltv.toLocaleString()}</div>
                          <div className="text-xs text-gray-600">{customer.segment}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">チャーンリスク顧客</h4>
                      {[
                        { id: "C104", churn: 78, days: 15, value: 23000 },
                        { id: "C105", churn: 65, days: 22, value: 18000 },
                        { id: "C106", churn: 58, days: 30, value: 15000 },
                      ].map((customer, index) => (
                        <div key={index} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-sm">{customer.id}</span>
                            <Badge variant="destructive">{customer.churn}%</Badge>
                          </div>
                          <div className="text-xs text-red-600">{customer.days}日以内にチャーン予測</div>
                          <div className="text-xs text-gray-600">失う価値: ¥{customer.value.toLocaleString()}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">アップセル機会</h4>
                      {[
                        { id: "C201", product: "プレミアムプラン", probability: 84, value: 12000 },
                        { id: "C202", product: "関連商品セット", probability: 76, value: 8500 },
                        { id: "C203", product: "定期購入", probability: 69, value: 15000 },
                      ].map((opportunity, index) => (
                        <div key={index} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-sm">{opportunity.id}</span>
                            <Badge variant="secondary">{opportunity.probability}%</Badge>
                          </div>
                          <div className="text-xs text-blue-600">{opportunity.product}</div>
                          <div className="text-xs text-gray-600">期待収益: ¥{opportunity.value.toLocaleString()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 最適化 */}
            <TabsContent value="optimization" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2" />
                      AI自動最適化
                    </CardTitle>
                    <CardDescription>リアルタイム価格・在庫・広告最適化</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        type: "価格最適化",
                        status: "実行中",
                        products: 234,
                        improvement: "+12.5%",
                        metric: "利益率",
                      },
                      {
                        type: "在庫最適化",
                        status: "実行中",
                        products: 189,
                        improvement: "-23.4%",
                        metric: "在庫コスト",
                      },
                      {
                        type: "広告入札最適化",
                        status: "実行中",
                        products: 67,
                        improvement: "+18.7%",
                        metric: "ROAS",
                      },
                      {
                        type: "レコメンド最適化",
                        status: "実行中",
                        products: 456,
                        improvement: "+8.9%",
                        metric: "CTR",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{item.type}</span>
                            <Badge variant="default">{item.status}</Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold text-green-600">{item.improvement}</div>
                            <div className="text-xs text-gray-500">{item.metric}</div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-600">対象商品: {item.products}個</div>
                      </div>
                    ))}

                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">最適化効果</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <div className="text-gray-600">売上向上</div>
                          <div className="font-medium text-green-600">+¥890K/月</div>
                        </div>
                        <div>
                          <div className="text-gray-600">コスト削減</div>
                          <div className="font-medium text-green-600">-¥340K/月</div>
                        </div>
                        <div>
                          <div className="text-gray-600">利益改善</div>
                          <div className="font-medium text-green-600">+¥1.23M/月</div>
                        </div>
                        <div>
                          <div className="text-gray-600">ROI</div>
                          <div className="font-medium text-green-600">485%</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>動的価格最適化</CardTitle>
                    <CardDescription>需要・競合・在庫に基づく価格調整</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        product: "ワイヤレスイヤホン",
                        current: 3980,
                        optimal: 4280,
                        demand: "高",
                        competition: "中",
                        inventory: "低",
                      },
                      {
                        product: "スマートウォッチ",
                        current: 12800,
                        optimal: 11900,
                        demand: "中",
                        competition: "高",
                        inventory: "高",
                      },
                      {
                        product: "ノートパソコン",
                        current: 89000,
                        optimal: 92000,
                        demand: "高",
                        competition: "低",
                        inventory: "中",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">{item.product}</span>
                          <Badge variant={item.optimal > item.current ? "default" : "secondary"}>
                            {item.optimal > item.current ? "値上げ" : "値下げ"}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div>
                            <div className="text-gray-600">現在価格</div>
                            <div className="font-medium">¥{item.current.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-gray-600">最適価格</div>
                            <div className="font-medium text-blue-600">¥{item.optimal.toLocaleString()}</div>
                          </div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs">
                          <span>需要: {item.demand}</span>
                          <span>競合: {item.competition}</span>
                          <span>在庫: {item.inventory}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>マーケティング予算最適化</CardTitle>
                  <CardDescription>チャネル別ROI最大化配分</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">現在の予算配分</h4>
                      {[
                        { channel: "Google広告", current: 30, optimal: 25, roi: 320 },
                        { channel: "Facebook広告", current: 25, optimal: 35, roi: 450 },
                        { channel: "Instagram広告", current: 20, optimal: 25, roi: 380 },
                        { channel: "SEO", current: 15, optimal: 10, roi: 280 },
                        { channel: "メール", current: 10, optimal: 5, roi: 180 },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <div className="font-medium text-sm">{item.channel}</div>
                            <div className="text-xs text-gray-600">ROI: {item.roi}%</div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-center">
                              <div className="text-xs text-gray-600">現在</div>
                              <div className="font-medium">{item.current}%</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-gray-600">最適</div>
                              <div className="font-medium text-blue-600">{item.optimal}%</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">最適化効果予測</h4>
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="text-center mb-4">
                          <div className="text-2xl font-bold text-blue-600">+¥1.2M</div>
                          <div className="text-sm text-blue-700">月間売上向上予測</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div>
                            <div className="text-gray-600">現在ROI</div>
                            <div className="font-medium">312%</div>
                          </div>
                          <div>
                            <div className="text-gray-600">最適化後ROI</div>
                            <div className="font-medium text-blue-600">428%</div>
                          </div>
                          <div>
                            <div className="text-gray-600">CPA改善</div>
                            <div className="font-medium text-green-600">-23%</div>
                          </div>
                          <div>
                            <div className="text-gray-600">獲得数向上</div>
                            <div className="font-medium text-green-600">+34%</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Target className="h-4 w-4 text-green-600" />
                          <span className="font-medium text-green-800">推奨アクション</span>
                        </div>
                        <ul className="text-xs text-green-600 space-y-1">
                          <li>• Facebook広告予算を10%増額</li>
                          <li>• Instagram広告を5%増額</li>
                          <li>• Google広告を5%削減</li>
                          <li>• メール予算を半減し他に振り分け</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* シミュレーション */}
            <TabsContent value="simulation" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="h-5 w-5 mr-2" />
                      ビジネスシミュレーター
                    </CardTitle>
                    <CardDescription>施策実行前の効果シミュレーション</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium">新商品投入</Label>
                        <Select defaultValue="none">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">なし</SelectItem>
                            <SelectItem value="premium">プレミアム商品</SelectItem>
                            <SelectItem value="budget">低価格商品</SelectItem>
                            <SelectItem value="seasonal">季節商品</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-sm font-medium">価格戦略変更</Label>
                        <Slider defaultValue={[0]} max={20} min={-20} step={5} className="mt-2" />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>-20%</span>
                          <span>現状</span>
                          <span>+20%</span>
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-medium">マーケティング強化</Label>
                        <Slider defaultValue={[0]} max={100} min={0} step={10} className="mt-2" />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>現状</span>
                          <span>+50%</span>
                          <span>+100%</span>
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-medium">配送サービス改善</Label>
                        <Select defaultValue="standard">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">標準配送</SelectItem>
                            <SelectItem value="express">当日配送</SelectItem>
                            <SelectItem value="free">送料無料</SelectItem>
                            <SelectItem value="premium">プレミアム配送</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button className="w-full">
                        <Play className="h-4 w-4 mr-2" />
                        シミュレーション実行
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>シミュレーション結果</CardTitle>
                    <CardDescription>3ヶ月後の予測結果</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-center">
                        <div className="text-lg font-bold text-blue-600">¥4.2M</div>
                        <div className="text-xs text-gray-600">予測売上</div>
                        <div className="text-xs text-green-600">+31.2%</div>
                      </div>
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-center">
                        <div className="text-lg font-bold text-green-600">1,890</div>
                        <div className="text-xs text-gray-600">新規顧客</div>
                        <div className="text-xs text-green-600">+52.4%</div>
                      </div>
                      <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg text-center">
                        <div className="text-lg font-bold text-purple-600">4.8%</div>
                        <div className="text-xs text-gray-600">CVR</div>
                        <div className="text-xs text-green-600">+48.1%</div>
                      </div>
                      <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg text-center">
                        <div className="text-lg font-bold text-orange-600">¥9,800</div>
                        <div className="text-xs text-gray-600">AOV</div>
                        <div className="text-xs text-green-600">+12.0%</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <TrendingUp className="h-4 w-4 text-green-600" />
                          <span className="font-medium text-green-800">ポジティブ効果</span>
                        </div>
                        <ul className="text-xs text-green-600 space-y-1">
                          <li>• 新商品による売上増: +¥890K</li>
                          <li>• マーケティング強化効果: +¥560K</li>
                          <li>• 配送改善によるCVR向上: +1.2%</li>
                          <li>• 顧客満足度向上: +15%</li>
                        </ul>
                      </div>

                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-600" />
                          <span className="font-medium text-yellow-800">リスク要因</span>
                        </div>
                        <ul className="text-xs text-yellow-600 space-y-1">
                          <li>• 初期投資コスト: ¥2.1M</li>
                          <li>• 在庫リスク増加: +23%</li>
                          <li>• 競合反応による価格競争</li>
                          <li>• 運用負荷増加</li>
                        </ul>
                      </div>

                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Target className="h-4 w-4 text-blue-600" />
                          <span className="font-medium text-blue-800">ROI分析</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div>
                            <div className="text-gray-600">投資回収期間</div>
                            <div className="font-medium">4.2ヶ月</div>
                          </div>
                          <div>
                            <div className="text-gray-600">12ヶ月ROI</div>
                            <div className="font-medium text-blue-600">285%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>競合シナリオ分析</CardTitle>
                  <CardDescription>競合の動きに応じた対応戦略</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <TrendingDown className="h-4 w-4 text-red-600" />
                        <span className="font-medium text-red-800">競合価格攻勢</span>
                      </div>
                      <div className="space-y-2 text-xs text-red-600">
                        <div>• 売上影響: -15.2%</div>
                        <div>• 顧客流出: 234人</div>
                        <div>• 対応策: 価格マッチング</div>
                        <div>• 追加コスト: ¥450K</div>
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <AlertTriangle className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800">新規参入</span>
                      </div>
                      <div className="space-y-2 text-xs text-yellow-600">
                        <div>• 市場シェア影響: -8.5%</div>
                        <div>• 新規獲得減: -12%</div>
                        <div>• 対応策: 差別化強化</div>
                        <div>• 投資必要額: ¥1.2M</div>
                      </div>
                    </div>

                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">競合撤退</span>
                      </div>
                      <div className="space-y-2 text-xs text-green-600">
                        <div>• 売上機会: +22.8%</div>
                        <div>• 顧客獲得: +456人</div>
                        <div>• 対応策: 積極攻勢</div>
                        <div>• 追加投資: ¥800K</div>
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
