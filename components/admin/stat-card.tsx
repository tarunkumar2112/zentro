import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  change?: number
  trend?: "up" | "down"
  icon: LucideIcon
  className?: string
}

export function StatCard({ title, value, change, trend, icon: Icon, className }: StatCardProps) {
  return (
    <Card className={cn("rounded-3xl border-border", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{title}</p>
            <p className="text-3xl font-heading text-foreground">{value}</p>
          </div>
          <div className="p-3 rounded-2xl bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        {change !== undefined && trend && (
          <div className="flex items-center gap-1">
            {trend === "up" ? (
              <TrendingUp className="h-4 w-4 text-success" />
            ) : (
              <TrendingDown className="h-4 w-4 text-destructive" />
            )}
            <span className={cn(
              "text-sm font-medium",
              trend === "up" ? "text-success" : "text-destructive"
            )}>
              {change}% from last week
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
