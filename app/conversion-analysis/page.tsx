"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  Smartphone,
  Monitor,
  Target,
  MousePointer,
  Eye,
  ShoppingCart,
  Users,
  TrendingUp,
  TrendingDown,
  Filter,
  Download,
  AlertTriangle,
  CheckCircle,
  TestTube,
} from "lucide-react"
import Link from "next/link"

export default function ConversionAnalysis() {
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
              <h1 className="text-2xl font-bold text-gray-900">コンバージョン率分析</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Select defaultValue="30days">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">過去7日</SelectItem>
                  <SelectItem value="30days">過去30日</SelectItem>
                  <SelectItem value="90days">過去90日</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                フィルター
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
          {/* KPI Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">全体CVR</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.24%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                  前月比 -0.3%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">モバイルCVR</CardTitle>
                <Smartphone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.89%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                  前月比 -0.8%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">デスクトップCVR</CardTitle>
                <Monitor className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.12%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  前月比 +0.2%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">カート追加率</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.3%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  前月比 +1.2%
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="devices" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="devices">デバイス・ブラウザ別</TabsTrigger>
              <TabsTrigger value="pages">LP・キャンペーン別</TabsTrigger>
              <TabsTrigger value="segments">顧客セグメント別</TabsTrigger>
              <TabsTrigger value="testing">A/Bテスト</TabsTrigger>
            </TabsList>

            {/* デバイス・ブラウザ別分析 */}
            <TabsContent value="devices" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>デバイス別CVR・UX課題</CardTitle>
                    <CardDescription>PC vs モバイル、iOS vs Android</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        device: "デスクトップ",
                        sessions: 45678,
                        cvr: 4.12,
                        speed: 2.3,
                        bounce: 32.1,
                        status: "good",
                      },
                      {
                        device: "モバイル (iOS)",
                        sessions: 34567,
                        cvr: 3.45,
                        speed: 3.8,
                        bounce: 45.2,
                        status: "medium",
                      },
                      {
                        device: "モバイル (Android)",
                        sessions: 28934,
                        cvr: 2.34,
                        speed: 4.2,
                        bounce: 52.7,
                        status: "poor",
                      },
                      {
                        device: "タブレット",
                        sessions: 8765,
                        cvr: 3.78,
                        speed: 3.1,
                        bounce: 38.9,
                        status: "medium",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{item.device}</span>
                            <Badge
                              variant={
                                item.status === "good"
                                  ? "default"
                                  : item.status === "medium"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {item.cvr}%
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold">{item.sessions.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">セッション</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                          <div>表示速度: {item.speed}秒</div>
                          <div>直帰率: {item.bounce}%</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>UX改善提案</CardTitle>
                    <CardDescription>表示速度改善・モバイルUI最適化</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        <span className="font-medium text-red-800">緊急改善</span>
                        <Badge variant="destructive">Android</Badge>
                      </div>
                      <ul className="text-xs text-red-600 space-y-1">
                        <li>• 表示速度4.2秒→2.5秒以下に改善</li>
                        <li>• 画像最適化・圧縮実施</li>
                        <li>• CDN導入検討</li>
                        <li>• モバイル専用UI設計</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Eye className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800">改善余地あり</span>
                        <Badge variant="secondary">iOS</Badge>
                      </div>
                      <ul className="text-xs text-yellow-600 space-y-1">
                        <li>• タッチ操作の最適化</li>
                        <li>• フォーム入力の簡素化</li>
                        <li>• 決済フローの改善</li>
                        <li>• プッシュ通知活用</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">良好</span>
                        <Badge variant="default">デスクトップ</Badge>
                      </div>
                      <ul className="text-xs text-green-600 space-y-1">
                        <li>• 現状のUXを維持</li>
                        <li>• さらなる高速化検討</li>
                        <li>• 高解像度対応強化</li>
                        <li>• アクセシビリティ向上</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">タブレット最適化</span>
                      </div>
                      <ul className="text-xs text-blue-600 space-y-1">
                        <li>• タブレット専用レイアウト</li>
                        <li>• 横画面対応強化</li>
                        <li>• 大画面活用UI</li>
                        <li>• マルチタッチ対応</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>ブラウザ別パフォーマンス</CardTitle>
                  <CardDescription>ブラウザ固有の課題と対策</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { browser: "Chrome", sessions: 45678, cvr: 3.45, issues: "軽微" },
                      { browser: "Safari", sessions: 23456, cvr: 3.12, issues: "中程度" },
                      { browser: "Firefox", sessions: 12345, cvr: 3.78, issues: "なし" },
                      { browser: "Edge", sessions: 8765, cvr: 3.23, issues: "軽微" },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg text-center">
                        <div className="font-medium text-sm mb-1">{item.browser}</div>
                        <div className="text-lg font-bold mb-1">{item.cvr}%</div>
                        <div className="text-xs text-gray-500 mb-2">{item.sessions.toLocaleString()} セッション</div>
                        <Badge
                          variant={
                            item.issues === "なし" ? "default" : item.issues === "軽微" ? "secondary" : "destructive"
                          }
                        >
                          {item.issues}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* LP・キャンペーン別分析 */}
            <TabsContent value="pages" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>LP別CVR・ボトルネック</CardTitle>
                    <CardDescription>訪問→カート追加→購入率</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        page: "トップページ",
                        visits: 45678,
                        cartRate: 15.2,
                        cvr: 4.12,
                        status: "good",
                      },
                      {
                        page: "春のセールLP",
                        visits: 23456,
                        cartRate: 18.7,
                        cvr: 6.34,
                        status: "excellent",
                      },
                      {
                        page: "商品詳細ページ",
                        visits: 34567,
                        cartRate: 12.8,
                        cvr: 3.45,
                        status: "medium",
                      },
                      {
                        page: "カテゴリページ",
                        visits: 18765,
                        cartRate: 8.9,
                        cvr: 2.12,
                        status: "poor",
                      },
                      {
                        page: "検索結果ページ",
                        visits: 12345,
                        cartRate: 14.3,
                        cvr: 3.78,
                        status: "good",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{item.page}</span>
                            <Badge
                              variant={
                                item.status === "excellent"
                                  ? "default"
                                  : item.status === "good"
                                    ? "secondary"
                                    : item.status === "medium"
                                      ? "outline"
                                      : "destructive"
                              }
                            >
                              CVR {item.cvr}%
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold">{item.visits.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">訪問</div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>カート追加率</span>
                            <span>{item.cartRate}%</span>
                          </div>
                          <Progress value={item.cartRate} className="h-1" />
                          <div className="flex justify-between text-xs">
                            <span>購入完了率</span>
                            <span>{((item.cvr / item.cartRate) * 100).toFixed(1)}%</span>
                          </div>
                          <Progress value={(item.cvr / item.cartRate) * 100} className="h-1" />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>ページ別改善提案</CardTitle>
                    <CardDescription>ヒートマップ・A/Bテスト活用</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">優秀なLP</span>
                        <Badge variant="default">春のセールLP</Badge>
                      </div>
                      <ul className="text-xs text-green-600 space-y-1">
                        <li>• 成功パターンを他LPに展開</li>
                        <li>• デザイン・コピーを分析</li>
                        <li>• 類似キャンペーンで再現</li>
                        <li>• さらなる最適化テスト</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        <span className="font-medium text-red-800">要改善</span>
                        <Badge variant="destructive">カテゴリページ</Badge>
                      </div>
                      <ul className="text-xs text-red-600 space-y-1">
                        <li>• ヒートマップで離脱位置特定</li>
                        <li>• 商品表示方法の見直し</li>
                        <li>• フィルター機能の改善</li>
                        <li>• レコメンド機能追加</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <MousePointer className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">A/Bテスト候補</span>
                      </div>
                      <ul className="text-xs text-blue-600 space-y-1">
                        <li>• CTAボタンの色・文言</li>
                        <li>• 商品画像のサイズ・配置</li>
                        <li>• 価格表示方法</li>
                        <li>• レビュー表示位置</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Eye className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800">ヒートマップ分析</span>
                      </div>
                      <ul className="text-xs text-yellow-600 space-y-1">
                        <li>• スクロール到達率の確認</li>
                        <li>• クリック集中エリア分析</li>
                        <li>• フォーム離脱ポイント特定</li>
                        <li>• モバイル操作性検証</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 顧客セグメント別分析 */}
            <TabsContent value="segments" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>リピート客 vs 新規客CVR</CardTitle>
                    <CardDescription>セグメント別の施策根拠</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        segment: "VIP顧客",
                        sessions: 8765,
                        cvr: 12.45,
                        aov: 18900,
                        strategy: "premium",
                      },
                      {
                        segment: "ロイヤル顧客",
                        sessions: 15678,
                        cvr: 8.34,
                        aov: 14500,
                        strategy: "upsell",
                      },
                      {
                        segment: "レギュラー顧客",
                        sessions: 23456,
                        cvr: 5.67,
                        aov: 9800,
                        strategy: "recommend",
                      },
                      {
                        segment: "新規顧客",
                        sessions: 34567,
                        cvr: 2.89,
                        aov: 6700,
                        strategy: "trust",
                      },
                      {
                        segment: "休眠顧客",
                        sessions: 12345,
                        cvr: 1.23,
                        aov: 5400,
                        strategy: "reactivate",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{item.segment}</span>
                            <Badge
                              variant={
                                item.cvr > 10
                                  ? "default"
                                  : item.cvr > 5
                                    ? "secondary"
                                    : item.cvr > 2
                                      ? "outline"
                                      : "destructive"
                              }
                            >
                              CVR {item.cvr}%
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold">¥{item.aov.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">AOV</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-xs text-gray-600">
                          <span>セッション: {item.sessions.toLocaleString()}</span>
                          <span>購入: {Math.round((item.sessions * item.cvr) / 100)}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>セグメント別最適化戦略</CardTitle>
                    <CardDescription>既存客レコメンド・新規客保証訴求</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        <span className="font-medium text-purple-800">VIP・ロイヤル顧客</span>
                      </div>
                      <ul className="text-xs text-purple-600 space-y-1">
                        <li>• パーソナライズレコメンド</li>
                        <li>• 限定商品・先行販売</li>
                        <li>• 高単価商品のアップセル</li>
                        <li>• 専用サポート・特典</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">レギュラー顧客</span>
                      </div>
                      <ul className="text-xs text-blue-600 space-y-1">
                        <li>• 購入履歴ベースレコメンド</li>
                        <li>• クロスセル提案</li>
                        <li>• ポイント・割引活用</li>
                        <li>• 定期購入への誘導</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">新規顧客</span>
                      </div>
                      <ul className="text-xs text-green-600 space-y-1">
                        <li>• 返品保証・安心訴求</li>
                        <li>• レビュー・評価の強調</li>
                        <li>• 初回購入特典</li>
                        <li>• 使い方ガイド・サポート</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800">休眠顧客</span>
                      </div>
                      <ul className="text-xs text-yellow-600 space-y-1">
                        <li>• カムバック特別オファー</li>
                        <li>• 新商品・機能の紹介</li>
                        <li>• 限定クーポン配布</li>
                        <li>• パーソナライズメッセージ</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* A/Bテスト */}
            <TabsContent value="testing" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TestTube className="h-5 w-5 mr-2" />
                      実行中A/Bテスト
                    </CardTitle>
                    <CardDescription>価格表記・CTAカラー等の仮説検証</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        test: "CTAボタンカラー",
                        page: "商品詳細ページ",
                        variantA: "青色",
                        variantB: "オレンジ色",
                        cvrA: 3.45,
                        cvrB: 4.12,
                        confidence: 95,
                        status: "winning",
                      },
                      {
                        test: "価格表示方法",
                        page: "カート画面",
                        variantA: "税込価格",
                        variantB: "税抜+税額",
                        cvrA: 8.34,
                        cvrB: 7.89,
                        confidence: 87,
                        status: "winning",
                      },
                      {
                        test: "商品画像サイズ",
                        page: "一覧ページ",
                        variantA: "小サイズ",
                        variantB: "大サイズ",
                        cvrA: 2.67,
                        cvrB: 2.71,
                        confidence: 23,
                        status: "testing",
                      },
                      {
                        test: "レビュー表示位置",
                        page: "商品詳細ページ",
                        variantA: "上部",
                        variantB: "下部",
                        cvrA: 3.45,
                        cvrB: 3.89,
                        confidence: 78,
                        status: "testing",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <div className="font-medium text-sm">{item.test}</div>
                            <div className="text-xs text-gray-500">{item.page}</div>
                          </div>
                          <Badge
                            variant={
                              item.status === "winning"
                                ? "default"
                                : item.status === "testing"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {item.status === "winning" ? "勝利パターン" : "テスト中"}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="p-2 bg-gray-50 rounded">
                            <div className="font-medium">A: {item.variantA}</div>
                            <div>CVR: {item.cvrA}%</div>
                          </div>
                          <div className="p-2 bg-blue-50 rounded">
                            <div className="font-medium">B: {item.variantB}</div>
                            <div>CVR: {item.cvrB}%</div>
                          </div>
                        </div>
                        <div className="mt-2 text-xs text-gray-600">
                          信頼度: {item.confidence}%
                          {item.confidence >= 95 && <span className="ml-2 text-green-600 font-medium">統計的有意</span>}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>勝利パターン展開</CardTitle>
                    <CardDescription>成功した施策の全体展開</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">展開済み</span>
                      </div>
                      <ul className="text-xs text-green-600 space-y-1">
                        <li>• オレンジCTAボタン → 全ページ適用</li>
                        <li>• 税込価格表示 → 全サイト統一</li>
                        <li>• CVR改善効果: +19.4%</li>
                        <li>• 月間売上増加: +¥890,000</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <TestTube className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">次回テスト候補</span>
                      </div>
                      <ul className="text-xs text-blue-600 space-y-1">
                        <li>• 送料無料ライン表示方法</li>
                        <li>• 在庫残数の表示有無</li>
                        <li>• 決済方法の表示順序</li>
                        <li>• レコメンド商品数</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Eye className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800">継続監視</span>
                      </div>
                      <ul className="text-xs text-yellow-600 space-y-1">
                        <li>• 季節要因による変動確認</li>
                        <li>• デバイス別効果測定</li>
                        <li>• 長期的な効果持続性</li>
                        <li>• 競合の動向チェック</li>
                      </ul>
                    </div>

                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium mb-2">A/Bテスト成果サマリー</div>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <div className="text-gray-600">実施テスト数</div>
                          <div className="font-medium">24件</div>
                        </div>
                        <div>
                          <div className="text-gray-600">勝利パターン</div>
                          <div className="font-medium">15件 (62.5%)</div>
                        </div>
                        <div>
                          <div className="text-gray-600">CVR改善</div>
                          <div className="font-medium">+1.2%</div>
                        </div>
                        <div>
                          <div className="text-gray-600">売上インパクト</div>
                          <div className="font-medium">+¥2.1M/月</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
