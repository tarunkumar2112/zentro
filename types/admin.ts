// Admin Data Types
export interface AdminUser {
  id: string
  name: string
  email: string
  role: "admin" | "manager" | "staff"
  avatar?: string
}

export interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: "active" | "inactive" | "outofstock"
  image: string
  sku: string
  createdAt: string
}

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  totalOrders: number
  totalSpent: number
  status: "active" | "inactive"
  joinedAt: string
}

export interface OrderItem {
  id: string
  productId: string
  productName: string
  productImage: string
  quantity: number
  price: number
  total: number
}

export interface Order {
  id: string
  customerId: string
  customerName: string
  customerEmail: string
  status: "pending" | "paid" | "processing" | "shipped" | "delivered" | "cancelled"
  paymentStatus: "pending" | "paid" | "failed" | "refunded"
  total: number
  subtotal: number
  tax: number
  shipping: number
  discount: number
  items: OrderItem[]
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: string
  createdAt: string
  paidAt?: string
  shippedAt?: string
  deliveredAt?: string
}

export interface Address {
  name: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  phone: string
}

export interface Category {
  id: string
  name: string
  slug: string
  productCount: number
  status: "active" | "inactive"
}

export interface Brand {
  id: string
  name: string
  slug: string
  productCount: number
  status: "active" | "inactive"
}

export interface AnalyticsData {
  revenue: {
    total: number
    change: number
    trend: "up" | "down"
  }
  orders: {
    total: number
    change: number
    trend: "up" | "down"
  }
  customers: {
    total: number
    change: number
    trend: "up" | "down"
  }
  conversion: {
    rate: number
    change: number
    trend: "up" | "down"
  }
}

export interface RevenueData {
  date: string
  revenue: number
}

export interface OrderStatusData {
  status: string
  count: number
  percentage: number
}

export interface Review {
  id: string
  productId: string
  productName: string
  customerId: string
  customerName: string
  rating: number
  comment: string
  status: "pending" | "approved" | "rejected"
  createdAt: string
}

export interface Coupon {
  id: string
  code: string
  type: "percentage" | "fixed"
  value: number
  minPurchase: number
  maxDiscount?: number
  usageLimit: number
  usageCount: number
  status: "active" | "inactive" | "expired"
  expiresAt: string
}

export interface InventoryItem {
  id: string
  productId: string
  productName: string
  sku: string
  currentStock: number
  lowStockThreshold: number
  reorderPoint: number
  status: "in-stock" | "low-stock" | "out-of-stock"
  lastRestocked?: string
}

export interface User {
  id: string
  name: string
  email: string
  role: string
  avatar?: string
  status: "active" | "inactive"
  createdAt: string
}

export interface Role {
  id: string
  name: string
  description: string
  permissions: string[]
  userCount: number
}

export interface PaymentMethod {
  id: string
  name: string
  type: "card" | "bank" | "wallet" | "cod"
  enabled: boolean
  config: Record<string, any>
}

export interface ShippingMethod {
  id: string
  name: string
  description: string
  price: number
  estimatedDays: string
  enabled: boolean
}

export interface TaxRate {
  id: string
  name: string
  country: string
  state?: string
  rate: number
  type: "percentage" | "fixed"
  enabled: boolean
}
