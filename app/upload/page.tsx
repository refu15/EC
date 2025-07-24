"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Upload } from "lucide-react"
import Link from "next/link"
import { useAppState } from "@/hooks/use-app-state"
import Papa from "papaparse"
import { calculateKpis } from "@/lib/kpi"
import { getProposals } from "@/lib/proposals"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"

export default function UploadPage() {
    const { setOrders, setKpis, setPreviousKpis, setProposals } = useAppState()
    const router = useRouter()

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const { data: { user } } = await supabase.auth.getUser()
            if (!user) {
                toast.error("Please log in to upload data.")
                return
            }

            Papa.parse(file, {
                header: true,
                complete: async (results) => {
                    const orders = results.data as any[]
                    setOrders(orders)

                    // TODO: Replace with actual previous data
                    const dummyPreviousKpis = {
                        sales: 2000000,
                        newCustomers: 200,
                        conversionRate: 3.5,
                        averageOrderValue: 8000,
                    }
                    setPreviousKpis(dummyPreviousKpis)

                    const kpis = calculateKpis(orders, 10000) // Assuming 10000 visitors for now
                    setKpis(kpis)

                    const { error } = await supabase.from('kpi_data').insert([{
                        user_id: user.id,
                        sales: kpis.sales,
                        new_customers: kpis.newCustomers,
                        conversion_rate: kpis.conversionRate,
                        average_order_value: kpis.averageOrderValue,
                    }])

                    if (error) {
                        toast.error(error.message)
                        return
                    }

                    const proposals = getProposals(kpis, dummyPreviousKpis)
                    setProposals(proposals)

                    toast.success("データが正常にアップロードされました。")
                    router.push("/")
                },
            });
        }
    };

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
              <Input id="csv-upload" type="file" accept=".csv" onChange={handleFileUpload} />
            </div>
            <Button className="w-full" onClick={() => router.push("/")}>
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
