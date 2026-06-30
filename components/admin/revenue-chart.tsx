"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"

interface RevenueChartProps {
  data: Array<{
    date: string
    revenue: number
  }>
}

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold">Revenue Overview</h3>
        <p className="text-sm text-muted-foreground">Daily revenue for the last 7 days</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272A" />
          <XAxis 
            dataKey="date" 
            stroke="#A1A1AA"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#A1A1AA"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "#18181B",
              border: "1px solid #27272A",
              borderRadius: "16px",
              color: "#FAFAFA"
            }}
            formatter={(value: any) => [`$${value.toLocaleString()}`, "Revenue"]}
            labelStyle={{ color: "#A1A1AA" }}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#7C3AED" 
            strokeWidth={3}
            dot={{ fill: "#7C3AED", r: 4 }}
            activeDot={{ r: 6, fill: "#8B5CF6" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
