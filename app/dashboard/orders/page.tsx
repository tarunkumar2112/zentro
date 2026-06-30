"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { OrderStatusBadge } from "@/components/dashboard/order-status-badge"
import { Search, Filter, Eye, ChevronLeft, ChevronRight } from "lucide-react"

type OrderStatus = "delivered" | "processing" | "shipped" | "cancelled" | "pending"

interface Order {
  id: string
  date: string
  items: number
  amount: number
  status: OrderStatus
  products: {
    name: string
    image: string
  }[]
}

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    avatar: undefined,
  }

  const allOrders: Order[] = [
    {
      id: "ZTR-2562",
      date: "May 28, 2024",
      items: 1,
      amount: 129.00,
      status: "delivered",
      products: [{ name: "Tech Hoodie", image: "/products/product-4.png" }]
    },
    {
      id: "ZTR-2561",
      date: "May 25, 2024",
      items: 1,
      amount: 89.00,
      status: "delivered",
      products: [{ name: "Performance Runner", image: "/products/product-5.png" }]
    },
    {
      id: "ZTR-2560",
      date: "May 22, 2024",
      items: 1,
      amount: 159.00,
      status: "processing",
      products: [{ name: "Essential Logo Tee", image: "/products/product-3.png" }]
    },
    {
      id: "ZTR-2559",
      date: "May 18, 2024",
      items: 1,
      amount: 79.00,
      status: "shipped",
      products: [{ name: "Cropped Windbreaker", image: "/products/product-2.png" }]
    },
    {
      id: "ZTR-2558",
      date: "May 15, 2024",
      items: 1,
      amount: 95.00,
      status: "delivered",
      products: [{ name: "Oversized Z Graphic Tee", image: "/products/product-1.png" }]
    },
    {
      id: "ZTR-2557",
      date: "May 12, 2024",
      items: 2,
      amount: 45.00,
      status: "cancelled",
      products: [{ name: "Essential Logo Tee", image: "/products/product-3.png" }]
    },
    {
      id: "ZTR-2556",
      date: "May 8, 2024",
      items: 1,
      amount: 32.00,
      status: "delivered",
      products: [{ name: "Tech Hoodie", image: "/products/product-4.png" }]
    },
  ]

  const filterOrders = (status?: OrderStatus) => {
    let filtered = allOrders

    if (status) {
      filtered = filtered.filter(order => order.status === status)
    }

    if (searchQuery) {
      filtered = filtered.filter(order =>
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.products.some(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    return filtered
  }

  const OrdersTable = ({ orders }: { orders: Order[] }) => (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order Number</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">#{order.id}</TableCell>
              <TableCell className="text-muted-foreground">{order.date}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {order.products.slice(0, 3).map((product, i) => (
                      <div 
                        key={i} 
                        className="relative h-8 w-8 rounded-full overflow-hidden bg-muted ring-2 ring-background"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{order.items}</span>
                </div>
              </TableCell>
              <TableCell className="font-medium">${order.amount.toFixed(2)}</TableCell>
              <TableCell>
                <OrderStatusBadge status={order.status} />
              </TableCell>
              <TableCell className="text-right">
                <Link href={`/dashboard/orders/${order.id}`}>
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
    </div>
  )

  return (
    <DashboardLayout user={user}>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-heading text-foreground mb-2">Orders</h1>
        <p className="text-muted-foreground">
          Track and manage all your orders
        </p>
      </div>

      {/* Orders Card */}
      <Card className="rounded-3xl border-border">
        <CardHeader className="border-b border-border">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
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

          {/* Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-flex rounded-2xl">
              <TabsTrigger value="all" className="rounded-xl">All Orders</TabsTrigger>
              <TabsTrigger value="processing" className="rounded-xl">Processing</TabsTrigger>
              <TabsTrigger value="shipped" className="rounded-xl">Shipped</TabsTrigger>
              <TabsTrigger value="delivered" className="rounded-xl">Delivered</TabsTrigger>
              <TabsTrigger value="cancelled" className="rounded-xl">Cancelled</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <OrdersTable orders={filterOrders()} />
            </TabsContent>

            <TabsContent value="processing" className="mt-6">
              <OrdersTable orders={filterOrders("processing")} />
            </TabsContent>

            <TabsContent value="shipped" className="mt-6">
              <OrdersTable orders={filterOrders("shipped")} />
            </TabsContent>

            <TabsContent value="delivered" className="mt-6">
              <OrdersTable orders={filterOrders("delivered")} />
            </TabsContent>

            <TabsContent value="cancelled" className="mt-6">
              <OrdersTable orders={filterOrders("cancelled")} />
            </TabsContent>
          </Tabs>
        </CardHeader>

        <CardContent className="p-6">
          {/* Pagination */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">1-7</span> of{" "}
              <span className="font-medium text-foreground">23</span> orders
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
    </DashboardLayout>
  )
}
