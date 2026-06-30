"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RewardsCard } from "@/components/dashboard/rewards-card"
import { Award, Gift, Star, Trophy } from "lucide-react"

export default function RewardsPage() {
  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    avatar: undefined,
  }

  const benefits = [
    {
      icon: Gift,
      title: "Exclusive Discounts",
      description: "Get special member-only pricing on select items"
    },
    {
      icon: Star,
      title: "Early Access",
      description: "Shop new collections before anyone else"
    },
    {
      icon: Trophy,
      title: "Birthday Rewards",
      description: "Receive a special gift during your birthday month"
    }
  ]

  return (
    <DashboardLayout user={user}>
      <div className="mb-8">
        <h1 className="text-4xl font-heading text-foreground mb-2">Rewards</h1>
        <p className="text-muted-foreground">
          Track your rewards and unlock exclusive benefits
        </p>
      </div>

      <div className="space-y-8">
        {/* Progress Card */}
        <RewardsCard
          currentXP={3200}
          totalXP={5000}
          currentLevel="Level 6"
          nextLevel="Level 7"
        />

        {/* Benefits */}
        <Card className="rounded-3xl border-border">
          <CardHeader>
            <CardTitle className="font-heading text-xl">Your Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 rounded-2xl bg-muted/30 space-y-3">
                  <div className="p-3 rounded-2xl bg-primary/10 w-fit">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How to Earn Points */}
        <Card className="rounded-3xl border-border">
          <CardHeader>
            <CardTitle className="font-heading text-xl">How to Earn Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">Make a purchase</span>
                </div>
                <span className="font-semibold text-primary">1 XP per $1</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">Write a review</span>
                </div>
                <span className="font-semibold text-primary">50 XP</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">Refer a friend</span>
                </div>
                <span className="font-semibold text-primary">200 XP</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
