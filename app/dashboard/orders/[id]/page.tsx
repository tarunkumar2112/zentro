"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { OrderStatusBadge } from "@/components/dashboard/order-status-badge"
import { OrderTimeline } from "@/components/dashboard/order-timeline"
import { ArrowLeft, CreditCard, MapPin, RefreshCw, HelpCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface OrderDetailsPageProps {
  params: Promise<{
    id: string
  }>
}

export default function OrderDetailsPage({ params }: OrderDetailsPageProps) {
  const { id } = use(params)

  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    avatar: undefined,
  }

  const order = {
    id: id,
    date: "May 28, 2024 at 10:32 AM",
    status: "delivered" as const,
    items: [
      {
        id: "1",
        name: "Retro Performance Runner",
        color: "Dark Slate",
        size: "Qty: 1",
        quantity: 1,
        price: 119.97,
        image: "/products/product-5.png"
      },
    ],
    summary: {
      subtotal: 75.00,
      shipping: 10.00,
      tax: 10.00,
      discount: 20.00,
      total: 75.00
    },
    paymentMethod: {
      type: "Mastercard",
      last4: "****2928 **M"
    },
    shippingAddress: {
      name: "John Doe",
      street: "145 Russell Street",
      city: "San Francisco, CA 94016",
      phone: "+123-132-1367"
    },
    timeline: [
      {
        label: "Order Placed",
        date: "May 28, 2024",
        completed: true
      },
      {
        label: "Processing",
        date: "May 29, 2024",
        completed: true
      },
      {
        label: "Shipped",
        date: "May 30, 2024",
        completed: true
      },
      {
        label: "Delivered",
        date: "June 1, 2024",
        completed: true
      }
    ]
  }

  return (
    <DashboardLayout user={user}>
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/dashboard/orders">
          <Button variant="ghost" className="rounded-2xl -ml-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Orders
          </Button>
        </Link>
      </div>

      {/* Order Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-heading text-foreground">Order #{order.id}</h1>
            <OrderStatusBadge status={order.status} />
          </div>
          <p className="text-muted-foreground">Placed on {order.date}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-2xl">
            <RefreshCw className="h-4 w-4 mr-2" />
            Buy Again
          </Button>
          <Button variant="outline" className="rounded-2xl">
            <HelpCircle className="h-4 w-4 mr-2" />
            Need Help?
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Order Items and Timeline */}
        <div className="lg:col-span-2 space-y-8">
          {/* Products Purchased */}
          <Card className="rounded-3xl border-border">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Products Purchased</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 rounded-2xl bg-muted/30">
                  <div className="relative h-24 w-24 rounded-2xl overflow-hidden bg-background flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline" className="rounded-lg">
                        {item.color}
                      </Badge>
                      <Badge variant="outline" className="rounded-lg">
                        {item.size}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Order Timeline */}
          <OrderTimeline steps={order.timeline} />
        </div>

        {/* Right Column - Order Summary and Details */}
        <div className="space-y-8">
          {/* Order Summary */}
          <Card className="rounded-3xl border-border">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">${order.summary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">${order.summary.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="text-foreground">${order.summary.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="text-success">-${order.summary.discount.toFixed(2)}</span>
                </div>
                <div className="pt-3 border-t border-border">
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="text-2xl font-heading text-foreground">
                      ${order.summary.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card className="rounded-3xl border-border">
            <CardHeader>
              <CardTitle className="font-heading text-lg flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-muted/30">
                <div className="p-3 rounded-xl bg-background">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{order.paymentMethod.type}</p>
                  <p className="text-sm text-muted-foreground">{order.paymentMethod.last4}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Address */}
          <Card className="rounded-3xl border-border">
            <CardHeader>
              <CardTitle className="font-heading text-lg flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Shipping Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 rounded-2xl bg-muted/30 space-y-2">
                <p className="font-medium text-foreground">{order.shippingAddress.name}</p>
                <p className="text-sm text-muted-foreground">{order.shippingAddress.street}</p>
                <p className="text-sm text-muted-foreground">{order.shippingAddress.city}</p>
                <p className="text-sm text-muted-foreground">{order.shippingAddress.phone}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
