"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowLeft,
  MessageCircle,
  Clock,
  CheckCircle,
  AlertCircle,
  Send,
  Bot,
  User,
  Phone,
  Mail,
  Settings,
} from "lucide-react"
import Link from "next/link"

export default function Support() {
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
              <h1 className="text-2xl font-bold text-gray-900">カスタマーサポート</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                設定
              </Button>
              <Button>
                <MessageCircle className="h-4 w-4 mr-2" />
                新規チャット
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Support Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">アクティブチャット</CardTitle>
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">3</div>
                <p className="text-xs text-muted-foreground">対応中</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">待機中</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">7</div>
                <p className="text-xs text-muted-foreground">問い合わせ</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">平均応答時間</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.3分</div>
                <p className="text-xs text-muted-foreground">目標: 3分以内</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">顧客満足度</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.7/5</div>
                <p className="text-xs text-muted-foreground">今月の平均</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chat List */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>チャット一覧</CardTitle>
                <CardDescription>進行中および待機中の問い合わせ</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {[
                    {
                      id: 1,
                      customer: "田中 花子",
                      message: "商品の返品について質問があります",
                      time: "2分前",
                      status: "active",
                      unread: 2,
                    },
                    {
                      id: 2,
                      customer: "佐藤 太郎",
                      message: "配送状況を確認したいです",
                      time: "5分前",
                      status: "active",
                      unread: 1,
                    },
                    {
                      id: 3,
                      customer: "山田 美咲",
                      message: "サイズ交換は可能でしょうか？",
                      time: "8分前",
                      status: "active",
                      unread: 0,
                    },
                    {
                      id: 4,
                      customer: "鈴木 一郎",
                      message: "支払い方法について",
                      time: "12分前",
                      status: "waiting",
                      unread: 3,
                    },
                    {
                      id: 5,
                      customer: "高橋 恵子",
                      message: "商品の詳細を教えてください",
                      time: "15分前",
                      status: "waiting",
                      unread: 1,
                    },
                  ].map((chat) => (
                    <div
                      key={chat.id}
                      className="flex items-center space-x-3 p-3 hover:bg-gray-50 cursor-pointer border-b"
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/placeholder-user.jpg`} />
                        <AvatarFallback>{chat.customer.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900 truncate">{chat.customer}</p>
                          <div className="flex items-center space-x-2">
                            {chat.unread > 0 && (
                              <Badge variant="destructive" className="text-xs">
                                {chat.unread}
                              </Badge>
                            )}
                            <Badge variant={chat.status === "active" ? "default" : "secondary"}>
                              {chat.status === "active" ? "対応中" : "待機中"}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 truncate">{chat.message}</p>
                        <p className="text-xs text-gray-400">{chat.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chat Interface */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>田</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">田中 花子</CardTitle>
                      <CardDescription className="flex items-center space-x-2">
                        <Badge variant="default">対応中</Badge>
                        <span>顧客ID: #12847</span>
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      通話
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4 mr-2" />
                      メール
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col h-96">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  <div className="flex items-start space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>田</AvatarFallback>
                    </Avatar>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">こんにちは。先日購入した商品の返品について質問があります。</p>
                      <p className="text-xs text-gray-500 mt-1">14:32</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 justify-end">
                    <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs">
                      <p className="text-sm">こんにちは！返品に関するお問い合わせですね。どちらの商品でしょうか？</p>
                      <p className="text-xs text-blue-100 mt-1">14:33</p>
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>田</AvatarFallback>
                    </Avatar>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">注文番号#ORD-2024-0315の白いワンピースです。サイズが合わなくて...</p>
                      <p className="text-xs text-gray-500 mt-1">14:35</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-yellow-800">
                        <strong>AI提案:</strong>{" "}
                        注文番号#ORD-2024-0315は返品可能期間内です。返品手続きのリンクを送信しますか？
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 justify-end">
                    <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs">
                      <p className="text-sm">
                        承知いたしました。その商品は購入から7日以内でしたら返品可能です。返品手続きのご案内をお送りしますね。
                      </p>
                      <p className="text-xs text-blue-100 mt-1">14:36</p>
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                {/* Message Input */}
                <div className="flex items-center space-x-2">
                  <Input placeholder="メッセージを入力..." className="flex-1" />
                  <Button size="sm">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Analytics */}
          <div className="mt-8">
            <Tabs defaultValue="today" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="today">今日</TabsTrigger>
                <TabsTrigger value="week">今週</TabsTrigger>
                <TabsTrigger value="month">今月</TabsTrigger>
                <TabsTrigger value="analytics">分析</TabsTrigger>
              </TabsList>

              <TabsContent value="today" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>今日の問い合わせ</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-2">23件</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>解決済み</span>
                          <span className="font-medium">18件</span>
                        </div>
                        <div className="flex justify-between">
                          <span>対応中</span>
                          <span className="font-medium">3件</span>
                        </div>
                        <div className="flex justify-between">
                          <span>待機中</span>
                          <span className="font-medium">2件</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>問い合わせカテゴリ</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">配送・返品</span>
                          <span className="text-sm font-medium">35%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">商品について</span>
                          <span className="text-sm font-medium">28%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">支払い</span>
                          <span className="text-sm font-medium">22%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">その他</span>
                          <span className="text-sm font-medium">15%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>AI自動応答</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-2">67%</div>
                      <p className="text-sm text-gray-600 mb-4">自動解決率</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>FAQ自動回答</span>
                          <span className="font-medium">12件</span>
                        </div>
                        <div className="flex justify-between">
                          <span>注文状況確認</span>
                          <span className="font-medium">8件</span>
                        </div>
                        <div className="flex justify-between">
                          <span>営業時間案内</span>
                          <span className="font-medium">3件</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>サポート品質分析</CardTitle>
                    <CardDescription>過去30日間のサポートパフォーマンス</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">4.7</div>
                        <div className="text-sm text-gray-600">平均満足度</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">2.3分</div>
                        <div className="text-sm text-gray-600">平均応答時間</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">89%</div>
                        <div className="text-sm text-gray-600">初回解決率</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">456</div>
                        <div className="text-sm text-gray-600">総問い合わせ数</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
