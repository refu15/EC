"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PolicyModal({ proposal, onTryIt, children }: { proposal: any, onTryIt: (id: number, status: string) => void, children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{proposal.title}</DialogTitle>
          <DialogDescription>
            {proposal.reason}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">効果</h4>
            <p className="text-sm">{proposal.effect}</p>
          </div>
          <div>
            <h4 className="font-semibold">具体的なステップ</h4>
            <ul className="list-disc list-inside text-sm">
              {proposal.steps.map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between">
            <div>
              <h4 className="font-semibold">予想コスト</h4>
              <p className="text-sm">¥{proposal.cost.toLocaleString()}</p>
            </div>
            <div>
              <h4 className="font-semibold">期待ROI</h4>
              <p className="text-sm">{proposal.expectedROI}倍</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-2">
            <Button variant="ghost" onClick={() => onTryIt(proposal.id, 'later')}>あとで</Button>
            <Button variant="outline" onClick={() => onTryIt(proposal.id, 'dismissed')}>見送る</Button>
            <Button onClick={() => onTryIt(proposal.id, 'tried')} disabled={proposal.tried}>
              <Check className="h-4 w-4 mr-2" />
              {proposal.tried ? "実施済み" : "やってみる"}
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
