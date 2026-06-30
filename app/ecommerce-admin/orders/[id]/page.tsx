"use client"

import { use } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { StatusBadge } from "@/components/admin/status-badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Printer, RefreshCcw, X, Truck, Package, Check } from "lucide-react"
import { mockOrders } from "@/lib/admin-mock-data"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface OrderDetailsPageProps {
  params: Promise<{
    id: string
  }>
}

export default function OrderDetailsPage({ params }: OrderDetailsPageProps) {
  const { id } = use(params)
  const order = mockOrders.find(o => o.id === id) || mockOrders[0]

  const timelineSteps = [
    {
      label: "Order Placed",
      date: order.createdAt,
      completed: true,
      icon: Package
    },
    {
      label: "Payment Confirmed",
      date: order.paidAt || "",
      completed: order.paymentStatus === "paid",
      icon: Check
    },
    {
      label: "Processing",
      date: order.createdAt,
      completed: ["processing", "shipped", "delivered"].includes(order.status),
      icon: Package
    },
    {
      label: "Shipped",
      date: order.shippedAt || "",
      completed: ["shipped", "delivered"].includes(order.status),
      icon: Truck
    },
    {
      label: "Delivered",
      date: order.deliveredAt || "",
      completed: order.status === "delivered",
      icon: Check
    }
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <Link href="/ecommerce-admin/orders">
            <Button variant="ghost" className="rounded-2xl -ml-4 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Orders
            </Button>
          </Link>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-heading text-foreground">Order #{order.id}</h1>
                <StatusBadge status={order.status} type="order" />
              </div>
              <p className="text-muted-foreground">
                Placed on {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="rounded-2xl">
                <Printer className="h-4 w-4 mr-2" />
                Print Invoice
              </Button>
              <Button variant="outline" className="rounded-2xl">
                <RefreshCcw className="h-4 w-4 mr-2" />
                Refund
              </Button>
              {order.status !== "delivered" && order.status !== "cancelled" && (
                <Button className="rounded-2xl">
                  <Truck className="h-4 w-4 mr-2" />
                  Mark As Shipped
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Products Purchased */}
            <Card className="rounded-3xl border-border">
              <CardHeader>
                <CardTitle className="font-heading text-xl">Items</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 rounded-2xl bg-muted/30">
                    <div className="relative h-20 w-20 rounded-2xl overflow-hidden bg-background flex-shrink-0">
                      <Image
                        src={item.productImage}
                        alt={item.productName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{item.productName}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Qty: {item.quantity}</span>
                        <span>${item.price.toFixed(2)} each</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">${item.total.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Order Timeline */}
            <Card className="rounded-3xl border-border">
              <CardHeader>
                <CardTitle className="font-heading text-xl">Order Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timelineSteps.map((step, index) => {
                    const isLast = index === timelineSteps.length - 1
                    const Icon = step.icon

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
                            <Icon className="h-5 w-5" />
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
                          {step.date && (
                            <p className="text-sm text-muted-foreground mt-1">
                              {new Date(step.date).toLocaleString()}
                            </p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card className="rounded-3xl border-border">
              <CardHeader>
                <CardTitle className="font-heading text-xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="text-foreground">${order.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground">${order.shipping.toFixed(2)}</span>
                  </div>
                  {order.discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Discount</span>
                      <span className="text-success">-${order.discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="pt-3 border-t border-border">
                    <div className="flex justify-between">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="text-2xl font-heading text-foreground">
                        ${order.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="rounded-3xl border-border">
              <CardHeader>
                <CardTitle className="font-heading text-lg">Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-2xl bg-muted/30 space-y-2">
                  <p className="font-medium text-foreground">{order.paymentMethod}</p>
                  <StatusBadge status={order.paymentStatus} type="payment" />
                  <p className="text-sm text-muted-foreground">
                    Paid on {order.paidAt ? new Date(order.paidAt).toLocaleDateString() : "N/A"}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card className="rounded-3xl border-border">
              <CardHeader>
                <CardTitle className="font-heading text-lg">Shipping Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-2xl bg-muted/30 space-y-2 text-sm">
                  <p className="font-medium text-foreground">{order.shippingAddress.name}</p>
                  <p className="text-muted-foreground">{order.shippingAddress.street}</p>
                  <p className="text-muted-foreground">
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                  </p>
                  <p className="text-muted-foreground">{order.shippingAddress.country}</p>
                  <p className="text-muted-foreground pt-2">{order.shippingAddress.phone}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
