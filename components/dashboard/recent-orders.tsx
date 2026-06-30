"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { OrderStatusBadge } from "./order-status-badge"
import { Eye } from "lucide-react"
import Image from "next/image"

interface Order {
  id: string
  product: {
    name: string
    image: string
  }
  date: string
  status: "delivered" | "processing" | "shipped" | "cancelled" | "pending"
  amount: number
}

interface RecentOrdersProps {
  orders: Order[]
}

export function RecentOrders({ orders }: RecentOrdersProps) {
  return (
    <Card className="rounded-3xl border-border">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="font-heading text-xl">Recent Orders</CardTitle>
        <Link href="/dashboard/orders">
          <Button variant="ghost" size="sm" className="rounded-2xl">
            View All Orders
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order Number</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">#{order.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={order.product.image}
                          alt={order.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm">{order.product.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{order.date}</TableCell>
                  <TableCell>
                    <OrderStatusBadge status={order.status} />
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    ${order.amount.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href={`/dashboard/orders/${order.id}`}>
                      <Button variant="ghost" size="icon" className="rounded-2xl">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
