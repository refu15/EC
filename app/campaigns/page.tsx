"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Plus, Mail, Target, Users, BarChart3, Play, Pause, Edit } from "lucide-react"
import Link from "next/link"

export default function Campaigns() {
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
              <h1 className="text-2xl font-bold text-gray-900">マーケティング自動化</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                新規キャンペーン
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Campaign Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">アクティブキャンペーン</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">実行中</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">総配信数</CardTitle>
                <Mail className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,678</div>
                <p className="text-xs text-muted-foreground">今月</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">平均開封率</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.5%</div>
                <p className="text-xs text-muted-foreground">業界平均: 21.3%</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">コンバージョン率</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.8%</div>
                <p className="text-xs text-muted-foreground">前月比 +0.5%</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="active" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="active">実行中</TabsTrigger>
              <TabsTrigger value="scheduled">予定</TabsTrigger>
              <TabsTrigger value="completed">完了</TabsTrigger>
              <TabsTrigger value="create">新規作成</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    name: "春のセールキャンペーン",
                    type: "メール",
                    segment: "全顧客",
                    sent: 12847,
                    opened: 3156,
                    clicked: 487,
                    converted: 73,
                    status: "実行中",
                  },
                  {
                    name: "新商品紹介キャンペーン",
                    type: "SNS",
                    segment: "20-30代女性",
                    sent: 5432,
                    opened: 1876,
                    clicked: 234,
                    converted: 45,
                    status: "実行中",
                  },
                  {
                    name: "リピーター向け特典",
                    type: "メール",
                    segment: "VIP顧客",
                    sent: 892,
                    opened: 567,
                    clicked: 123,
                    converted: 34,
                    status: "実行中",
                  },
                  {
                    name: "カート放棄リマインダー",
                    type: "自動メール",
                    segment: "カート放棄者",
                    sent: 2341,
                    opened: 678,
                    clicked: 89,
                    converted: 23,
                    status: "実行中",
                  },
                ].map((campaign, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{campaign.name}</CardTitle>
                          <CardDescription className="flex items-center space-x-2">
                            <Badge variant="outline">{campaign.type}</Badge>
                            <span>対象: {campaign.segment}</span>
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Pause className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{campaign.sent.toLocaleString()}</div>
                          <div className="text-xs text-gray-500">配信数</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {((campaign.opened / campaign.sent) * 100).toFixed(1)}%
                          </div>
                          <div className="text-xs text-gray-500">開封率</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>クリック率</span>
                          <span>{((campaign.clicked / campaign.opened) * 100).toFixed(1)}%</span>
                        </div>
                        <Progress value={(campaign.clicked / campaign.opened) * 100} className="h-2" />

                        <div className="flex justify-between text-sm">
                          <span>コンバージョン率</span>
                          <span>{((campaign.converted / campaign.clicked) * 100).toFixed(1)}%</span>
                        </div>
                        <Progress value={(campaign.converted / campaign.clicked) * 100} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="scheduled" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    name: "ゴールデンウィーク特別セール",
                    type: "メール",
                    segment: "全顧客",
                    scheduledDate: "2024年4月28日",
                    status: "予定",
                  },
                  {
                    name: "母の日ギフト提案",
                    type: "SNS + メール",
                    segment: "30-50代",
                    scheduledDate: "2024年5月10日",
                    status: "予定",
                  },
                  {
                    name: "夏物商品先行案内",
                    type: "メール",
                    segment: "ファッション購入者",
                    scheduledDate: "2024年5月15日",
                    status: "予定",
                  },
                ].map((campaign, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{campaign.name}</CardTitle>
                          <CardDescription className="flex items-center space-x-2">
                            <Badge variant="outline">{campaign.type}</Badge>
                            <span>対象: {campaign.segment}</span>
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Play className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">配信予定日</span>
                          <span className="text-sm text-gray-600">{campaign.scheduledDate}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">ステータス</span>
                          <Badge variant="secondary">{campaign.status}</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">予想配信数</span>
                          <span className="text-sm text-gray-600">
                            約 {Math.floor(Math.random() * 10000 + 5000).toLocaleString()}件
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    name: "3月決算セール",
                    type: "メール + SNS",
                    segment: "全顧客",
                    sent: 15234,
                    revenue: 2450000,
                    roi: 485,
                    completedDate: "2024年3月31日",
                  },
                  {
                    name: "新規会員獲得キャンペーン",
                    type: "広告 + メール",
                    segment: "新規見込み客",
                    sent: 8765,
                    revenue: 890000,
                    roi: 234,
                    completedDate: "2024年3月15日",
                  },
                ].map((campaign, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{campaign.name}</CardTitle>
                          <CardDescription className="flex items-center space-x-2">
                            <Badge variant="outline">{campaign.type}</Badge>
                            <span>完了日: {campaign.completedDate}</span>
                          </CardDescription>
                        </div>
                        <Badge variant="default">完了</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold">¥{campaign.revenue.toLocaleString()}</div>
                          <div className="text-xs text-gray-500">売上</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{campaign.roi}%</div>
                          <div className="text-xs text-gray-500">ROI</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">配信数: {campaign.sent.toLocaleString()}件</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="create" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>新規キャンペーン作成</CardTitle>
                  <CardDescription>パーソナライズされたマーケティングキャンペーンを作成</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="campaign-name">キャンペーン名</Label>
                        <Input id="campaign-name" placeholder="キャンペーン名を入力" />
                      </div>

                      <div>
                        <Label htmlFor="campaign-type">配信タイプ</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="配信タイプを選択" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">メール</SelectItem>
                            <SelectItem value="sms">SMS</SelectItem>
                            <SelectItem value="social">SNS</SelectItem>
                            <SelectItem value="push">プッシュ通知</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="target-segment">ターゲットセグメント</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="セグメントを選択" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">全顧客</SelectItem>
                            <SelectItem value="new">新規顧客</SelectItem>
                            <SelectItem value="vip">VIP顧客</SelectItem>
                            <SelectItem value="inactive">休眠顧客</SelectItem>
                            <SelectItem value="age-20-30">20-30代</SelectItem>
                            <SelectItem value="age-30-40">30-40代</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="schedule-date">配信予定日</Label>
                        <Input id="schedule-date" type="datetime-local" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="subject">件名</Label>
                        <Input id="subject" placeholder="メール件名を入力" />
                      </div>

                      <div>
                        <Label htmlFor="message">メッセージ</Label>
                        <Textarea id="message" placeholder="キャンペーンメッセージを入力" className="min-h-[120px]" />
                      </div>

                      <div>
                        <Label htmlFor="cta">コールトゥアクション</Label>
                        <Input id="cta" placeholder="例: 今すぐ購入" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <Button variant="outline">下書き保存</Button>
                    <Button>キャンペーン作成</Button>
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
