export type OrderStatus = "delivered" | "processing" | "shipped" | "cancelled" | "pending"

export interface User {
  name: string
  email: string
  avatar?: string
}

export interface Order {
  id: string
  date: string
  status: OrderStatus
  amount: number
  items?: number
  products: {
    name: string
    image: string
  }[]
}

export interface OrderDetails extends Order {
  timeline: TimelineStep[]
  summary: OrderSummary
  paymentMethod: PaymentMethod
  shippingAddress: ShippingAddress
}

export interface TimelineStep {
  label: string
  date: string
  completed: boolean
}

export interface OrderSummary {
  subtotal: number
  shipping: number
  tax: number
  discount: number
  total: number
}

export interface PaymentMethod {
  type: string
  last4: string
}

export interface ShippingAddress {
  name: string
  street: string
  city: string
  phone: string
}

export interface Product {
  id: string
  name: string
  price: number
  image: string
  color?: string
  size?: string
  quantity?: number
}

export interface StatCardData {
  title: string
  value: string | number
  icon: React.ComponentType<{ className?: string }>
  trend?: {
    value: string
    positive: boolean
  }
}
