"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { StatusBadge } from "@/components/admin/status-badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Search, Filter, Eye, ChevronLeft, ChevronRight } from "lucide-react"
import { mockOrders } from "@/lib/admin-mock-data"
import Link from "next/link"

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filterOrders = (status?: string) => {
    let filtered = mockOrders

    if (status && status !== "all") {
      filtered = filtered.filter(order => order.status === status)
    }

    if (searchQuery) {
      filtered = filtered.filter(order =>
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customerName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return filtered
  }

  const OrdersTable = ({ orders }: { orders: typeof mockOrders }) => (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">#{order.id}</TableCell>
              <TableCell>
                <div>
                  <p className="font-medium text-foreground">{order.customerName}</p>
                  <p className="text-sm text-muted-foreground">{order.customerEmail}</p>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {new Date(order.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="font-medium">${order.total.toFixed(2)}</TableCell>
              <TableCell>
                <StatusBadge status={order.paymentStatus} type="payment" />
              </TableCell>
              <TableCell>
                <StatusBadge status={order.status} type="order" />
              </TableCell>
              <TableCell className="text-right">
                <Link href={`/ecommerce-admin/orders/${order.id}`}>
                  <Button variant="ghost" size="sm" className="rounded-2xl">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {orders.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No orders found</p>
        </div>
      )}
    </>
  )

  return (
    <AdminLayout title="Orders" subtitle="Manage customer orders">
      <div className="space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search orders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-2xl"
              />
            </div>
            <Button variant="outline" className="rounded-2xl">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Orders Table with Tabs */}
        <Card className="rounded-3xl border-border">
          <CardContent className="p-0">
            <Tabs defaultValue="all" className="w-full">
              <div className="border-b border-border px-6 pt-6">
                <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-flex rounded-2xl">
                  <TabsTrigger value="all" className="rounded-xl">All</TabsTrigger>
                  <TabsTrigger value="pending" className="rounded-xl">Pending</TabsTrigger>
                  <TabsTrigger value="processing" className="rounded-xl">Processing</TabsTrigger>
                  <TabsTrigger value="shipped" className="rounded-xl">Shipped</TabsTrigger>
                  <TabsTrigger value="delivered" className="rounded-xl">Delivered</TabsTrigger>
                  <TabsTrigger value="cancelled" className="rounded-xl">Cancelled</TabsTrigger>
                </TabsList>
              </div>

              <div className="p-6">
                <TabsContent value="all" className="mt-0">
                  <OrdersTable orders={filterOrders("all")} />
                </TabsContent>
                <TabsContent value="pending" className="mt-0">
                  <OrdersTable orders={filterOrders("pending")} />
                </TabsContent>
                <TabsContent value="processing" className="mt-0">
                  <OrdersTable orders={filterOrders("processing")} />
                </TabsContent>
                <TabsContent value="shipped" className="mt-0">
                  <OrdersTable orders={filterOrders("shipped")} />
                </TabsContent>
                <TabsContent value="delivered" className="mt-0">
                  <OrdersTable orders={filterOrders("delivered")} />
                </TabsContent>
                <TabsContent value="cancelled" className="mt-0">
                  <OrdersTable orders={filterOrders("cancelled")} />
                </TabsContent>
              </div>
            </Tabs>

            {/* Pagination */}
            <div className="flex items-center justify-between p-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">1-{mockOrders.length}</span> of{" "}
                <span className="font-medium text-foreground">{mockOrders.length}</span> orders
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="rounded-2xl">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="rounded-2xl">
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
