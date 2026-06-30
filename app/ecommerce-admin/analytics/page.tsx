"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <AdminLayout title="Analytics" subtitle="Detailed analytics and insights">
      <Card className="rounded-3xl border-border">
        <CardContent className="p-12">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-6 rounded-full bg-muted">
                <BarChart3 className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-heading text-foreground">Analytics Coming Soon</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Advanced analytics and reporting features will be available here
            </p>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  )
}
