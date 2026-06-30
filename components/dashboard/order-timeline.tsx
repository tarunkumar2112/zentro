"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Check, Package, Truck, CircleCheck } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineStep {
  label: string
  date: string
  completed: boolean
}

interface OrderTimelineProps {
  steps: TimelineStep[]
}

export function OrderTimeline({ steps }: OrderTimelineProps) {
  const icons = [Package, Package, Truck, CircleCheck]

  return (
    <Card className="rounded-3xl border-border">
      <CardContent className="p-6">
        <h3 className="font-heading text-lg mb-6">Order Timeline</h3>
        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = icons[index] || Package
            const isLast = index === steps.length - 1
            
            return (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full border-2",
                      step.completed
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted bg-background text-muted-foreground"
                    )}
                  >
                    {step.completed ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </div>
                  {!isLast && (
                    <div
                      className={cn(
                        "w-0.5 h-12 mt-2",
                        step.completed ? "bg-primary" : "bg-border"
                      )}
                    />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p
                    className={cn(
                      "font-medium",
                      step.completed ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {step.label}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{step.date}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
