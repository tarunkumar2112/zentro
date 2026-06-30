"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { StatCard } from "@/components/admin/stat-card"
import { StatusBadge } from "@/components/admin/status-badge"
import { RevenueChart } from "@/components/admin/revenue-chart"
import { OrderStatusChart } from "@/components/admin/order-status-chart"
import { SalesChart } from "@/components/admin/sales-chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  DollarSign, 
  ShoppingBag, 
  Users, 
  TrendingUp,
  Download
} from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  mockAnalytics, 
  mockOrders, 
  mockProducts, 
  mockOrderStatus, 
  mockRevenueData,
  mockTopProducts 
} from "@/lib/admin-mock-data"
import Image from "next/image"
import Link from "next/link"

export default function AdminDashboardPage() {
  // Top Selling Products (first 5)
  const topProducts = mockProducts.slice(0, 5)

  // Recent Orders (first 5)
  const recentOrders = mockOrders.slice(0, 5)

  return (
    <AdminLayout 
      title="Dashboard" 
      subtitle="Overview of your store performance"
    >
      <div className="space-y-6">
        {/* Date Range Selector */}
        <div className="flex items-center justify-between">
          <div />
          <div className="flex items-center gap-3">
            <select className="h-10 rounded-2xl border border-border bg-background px-4 text-sm">
              <option>May 13 - May 20, 2024</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
            <Button className="rounded-2xl">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Revenue"
            value={`$${mockAnalytics.revenue.total.toLocaleString()}`}
            change={mockAnalytics.revenue.change}
            trend={mockAnalytics.revenue.trend}
            icon={DollarSign}
          />
          <StatCard
            title="Orders"
            value={mockAnalytics.orders.total.toLocaleString()}
            change={mockAnalytics.orders.change}
            trend={mockAnalytics.orders.trend}
            icon={ShoppingBag}
          />
          <StatCard
            title="Customers"
            value={mockAnalytics.customers.total}
            change={mockAnalytics.customers.change}
            trend={mockAnalytics.customers.trend}
            icon={Users}
          />
          <StatCard
            title="Conversion Rate"
            value={`${mockAnalytics.conversion.rate}%`}
            change={mockAnalytics.conversion.change}
            trend={mockAnalytics.conversion.trend}
            icon={TrendingUp}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Overview Chart */}
          <RevenueChart data={mockRevenueData} />

          {/* Orders by Status Chart */}
          <OrderStatusChart data={mockOrderStatus} />
        </div>

        {/* Top Products Sales Chart */}
        <SalesChart data={mockTopProducts} />

        {/* Top Selling Products & Recent Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Selling Products */}
          <Card className="rounded-3xl border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="font-heading text-xl">Top Selling Products</CardTitle>
              <Link href="/ecommerce-admin/products">
                <Button variant="ghost" size="sm" className="rounded-2xl text-primary">
                  View All
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product) => (
                  <div key={product.id} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-muted/30 transition-colors">
                    <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground truncate">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">${product.price}</p>
                      <p className="text-sm text-muted-foreground">{product.stock} sold</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card className="rounded-3xl border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="font-heading text-xl">Recent Orders</CardTitle>
              <Link href="/ecommerce-admin/orders">
                <Button variant="ghost" size="sm" className="rounded-2xl text-primary">
                  View All
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">#{order.id}</TableCell>
                      <TableCell>{order.customerName}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="font-medium">${order.total.toFixed(2)}</TableCell>
                      <TableCell>
                        <StatusBadge status={order.status} type="order" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
