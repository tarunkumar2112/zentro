"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"

interface SalesChartProps {
  data: Array<{
    name: string
    sales: number
  }>
}

export function SalesChart({ data }: SalesChartProps) {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold">Top Products</h3>
        <p className="text-sm text-muted-foreground">Best selling products this month</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272A" />
          <XAxis 
            dataKey="name" 
            stroke="#A1A1AA"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            stroke="#A1A1AA"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "#18181B",
              border: "1px solid #27272A",
              borderRadius: "16px",
              color: "#FAFAFA"
            }}
            formatter={(value: any) => [`${value} units`, "Sales"]}
            labelStyle={{ color: "#A1A1AA" }}
            cursor={{ fill: "rgba(124, 58, 237, 0.1)" }}
          />
          <Bar 
            dataKey="sales" 
            fill="#7C3AED" 
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
