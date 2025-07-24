"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { toast } from "sonner"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) {
      toast.error(error.message)
    } else if (data.user) {
      const { error: insertError } = await supabase.from('users').insert([{ id: data.user.id, email: data.user.email }])
      if (insertError) {
        toast.error(insertError.message)
      } else {
        toast.success("確認メールを送信しました。")
        router.push("/login")
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">サインアップ</CardTitle>
            <CardDescription>
              新しいアカウントを作成します。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input id="email" type="email" placeholder="m@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">パスワード</Label>
              <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button onClick={handleSignup} className="w-full">
              サインアップ
            </Button>
            <div className="text-center text-sm">
              すでにアカウントをお持ちですか？{" "}
              <Link href="/login" className="underline">
                ログイン
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
