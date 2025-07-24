"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Upload } from "lucide-react"
import Link from "next/link"

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-xl w-full">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">データ連携</CardTitle>
            <CardDescription>
              まずは、お使いのECプラットフォーム（Shopify, BASE, STORES.jp）から注文データをCSV形式でエクスポートし、ここにアップロードしてください。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="csv-upload">注文データ (CSVファイル)</Label>
              <Input id="csv-upload" type="file" accept=".csv" />
            </div>
            <Button className="w-full" disabled>
              <Upload className="h-4 w-4 mr-2" />
              アップロードして分析を開始する
            </Button>
            <p className="text-xs text-gray-500 text-center">
              (β版では、アップロード機能はダミーです。ボタンを押すとサンプルデータで分析が開始されます。)
            </p>
            <div className="text-center">
              <Link href="/">
                <Button variant="link">ダッシュボードに戻る</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
