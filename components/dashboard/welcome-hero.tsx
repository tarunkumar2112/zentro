"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MembershipCard } from "./membership-card"

interface WelcomeHeroProps {
  userName: string
  memberSince: string
  currentLevel: string
  currentXP: number
  maxXP: number
  nextLevel?: string
}

export function WelcomeHero({
  userName,
  memberSince,
  currentLevel,
  currentXP,
  maxXP,
  nextLevel
}: WelcomeHeroProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      {/* Welcome Message */}
      <div className="lg:col-span-2">
        <div className="space-y-2 mb-6">
          <h1 className="text-4xl font-heading text-foreground">
            Welcome back,
          </h1>
          <h2 className="text-4xl font-heading text-foreground flex items-center gap-2">
            {userName} 👋
          </h2>
          <p className="text-muted-foreground">
            Here's what's happening with your account today.
          </p>
        </div>
      </div>

      {/* Membership Card */}
      <div className="lg:col-span-1">
        <MembershipCard
          memberSince={memberSince}
          currentLevel={currentLevel}
          currentXP={currentXP}
          maxXP={maxXP}
          nextLevel={nextLevel}
        />
      </div>
    </div>
  )
}
