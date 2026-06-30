"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Award } from "lucide-react"

interface MembershipCardProps {
  memberSince: string
  currentLevel: string
  currentXP: number
  maxXP: number
  nextLevel?: string
}

export function MembershipCard({
  memberSince,
  currentLevel,
  currentXP,
  maxXP,
  nextLevel
}: MembershipCardProps) {
  const progress = (currentXP / maxXP) * 100

  return (
    <Card className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 border-primary text-primary-foreground overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      
      <CardContent className="p-8 relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-5 w-5" />
              <span className="text-sm font-medium opacity-90">ZENTRO Premier</span>
            </div>
            <p className="text-xs opacity-75">Member since {memberSince}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-medium">Level {currentLevel}</span>
          </div>

          <div className="space-y-2">
            <Progress value={progress} className="h-2 bg-white/20" />
            <div className="flex justify-between text-xs opacity-90">
              <span>{currentXP} XP</span>
              <span>{maxXP} XP</span>
            </div>
          </div>

          {nextLevel && (
            <p className="text-xs opacity-75">
              {maxXP - currentXP} XP to reach {nextLevel}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
