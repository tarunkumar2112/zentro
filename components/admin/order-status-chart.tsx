"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Card } from "@/components/ui/card"

interface OrderStatusChartProps {
  data: Array<{
    status: string
    count: number
    percentage: number
  }>
}

const COLORS = {
  pending: "#F59E0B",
  processing: "#3B82F6",
  shipped: "#8B5CF6",
  delivered: "#22C55E",
  cancelled: "#EF4444"
}

export function OrderStatusChart({ data }: OrderStatusChartProps) {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold">Order Status Distribution</h3>
        <p className="text-sm text-muted-foreground">Current order status breakdown</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="count"
            label={(props: any) => `${props.percentage.toFixed(0)}%`}
            labelLine={{ stroke: "#FAFAFA" }}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[entry.status.toLowerCase() as keyof typeof COLORS] || "#A1A1AA"} 
              />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: "#18181B",
              border: "1px solid #27272A",
              borderRadius: "16px",
              color: "#FAFAFA"
            }}
            formatter={(value: any, name: any, props: any) => [
              `${value} orders (${props.payload.percentage.toFixed(1)}%)`,
              props.payload.status
            ]}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            iconType="circle"
            formatter={(value) => <span className="text-sm text-muted-foreground capitalize">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  )
}
