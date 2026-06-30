"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Award, ArrowRight } from "lucide-react"

interface RewardsCardProps {
  currentXP: number
  totalXP: number
  currentLevel: string
  nextLevel: string
}

export function RewardsCard({ currentXP, totalXP, currentLevel, nextLevel }: RewardsCardProps) {
  const progress = (currentXP / totalXP) * 100
  const remaining = totalXP - currentXP

  return (
    <Card className="rounded-3xl border-border">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg">Rewards Progress</h3>
              <p className="text-sm text-muted-foreground">
                {currentXP} / {totalXP} XP
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-heading text-primary">{currentLevel}</p>
            <p className="text-xs text-muted-foreground">Current</p>
          </div>
        </div>

        <div className="space-y-4">
          <Progress value={progress} className="h-2" />
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              Earn {remaining} XP to reach {nextLevel}
            </span>
            <Button variant="link" className="h-auto p-0 text-primary">
              View Rewards
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
