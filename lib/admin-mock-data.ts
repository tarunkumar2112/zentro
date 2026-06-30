import {
  Product,
  Order,
  Customer,
  AnalyticsData,
  RevenueData,
  OrderStatusData,
  Category,
  Brand,
  Review,
  Coupon,
  InventoryItem,
  User,
  Role,
  PaymentMethod,
  ShippingMethod,
  TaxRate
} from "@/types/admin"

// Analytics Data
export const mockAnalytics: AnalyticsData = {
  revenue: {
    total: 845231.89,
    change: 18.7,
    trend: "up"
  },
  orders: {
    total: 1245,
    change: 14.1,
    trend: "up"
  },
  customers: {
    total: 856,
    change: 10.2,
    trend: "up"
  },
  conversion: {
    rate: 3.42,
    change: 6.9,
    trend: "up"
  }
}

// Revenue Chart Data
export const mockRevenueData: RevenueData[] = [
  { date: "Mar 13", revenue: 15000 },
  { date: "Mar 14", revenue: 22000 },
  { date: "Mar 15", revenue: 18000 },
  { date: "Mar 16", revenue: 25000 },
  { date: "Mar 17", revenue: 20000 },
  { date: "Mar 18", revenue: 32349 },
  { date: "Mar 19", revenue: 28000 },
  { date: "Mar 20", revenue: 35000 },
]

// Order Status Data
export const mockOrderStatus: OrderStatusData[] = [
  { status: "Delivered", count: 450, percentage: 45 },
  { status: "Processing", count: 298, percentage: 30 },
  { status: "Shipped", count: 248, percentage: 20 },
  { status: "Cancelled", count: 50, percentage: 5 }
]

// Top Products Sales Data
export const mockTopProducts = [
  { name: "Zentro Runner", sales: 234 },
  { name: "Tech Hoodie", sales: 189 },
  { name: "Street Joggers", sales: 156 },
  { name: "Classic Tee", sales: 143 },
  { name: "Sport Shorts", sales: 98 }
]

// Products Data
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Zentro Performance Runner",
    category: "Shoes",
    price: 129.00,
    stock: 155,
    status: "active",
    image: "/products/product-5.png",
    sku: "ZPR-001",
    createdAt: "2024-03-15"
  },
  {
    id: "2",
    name: "Zentro Tech Hoodie",
    category: "Hoodies",
    price: 89.00,
    stock: 95,
    status: "active",
    image: "/products/product-4.png",
    sku: "ZTH-002",
    createdAt: "2024-03-14"
  },
  {
    id: "3",
    name: "Zentro Cap",
    category: "Accessories",
    price: 32.00,
    stock: 200,
    status: "active",
    image: "/products/product-1.png",
    sku: "ZCP-003",
    createdAt: "2024-03-13"
  },
  {
    id: "4",
    name: "Zentro Gym Bottle",
    category: "Accessories",
    price: 25.00,
    stock: 500,
    status: "active",
    image: "/products/product-2.png",
    sku: "ZGB-004",
    createdAt: "2024-03-12"
  },
  {
    id: "5",
    name: "Zentro Track Pants",
    category: "Apparel",
    price: 65.00,
    stock: 10,
    status: "active",
    image: "/products/product-3.png",
    sku: "ZTP-005",
    createdAt: "2024-03-11"
  },
  {
    id: "6",
    name: "Zentro Backpack",
    category: "Accessories",
    price: 99.00,
    stock: 45,
    status: "inactive",
    image: "/products/product-4.png",
    sku: "ZBP-006",
    createdAt: "2024-03-10"
  }
]

// Orders Data
export const mockOrders: Order[] = [
  {
    id: "ZTR-2562",
    customerId: "1",
    customerName: "John Smith",
    customerEmail: "john.smith@email.com",
    status: "delivered",
    paymentStatus: "paid",
    total: 129.00,
    subtotal: 109.00,
    tax: 10.00,
    shipping: 10.00,
    discount: 0,
    items: [
      {
        id: "1",
        productId: "1",
        productName: "Zentro Performance Runner",
        productImage: "/products/product-5.png",
        quantity: 1,
        price: 129.00,
        total: 129.00
      }
    ],
    shippingAddress: {
      name: "John Smith",
      street: "145 Russell Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94016",
      country: "United States",
      phone: "+1 (555) 123-4567"
    },
    billingAddress: {
      name: "John Smith",
      street: "145 Russell Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94016",
      country: "United States",
      phone: "+1 (555) 123-4567"
    },
    paymentMethod: "Mastercard **** 2242",
    createdAt: "2024-05-28T10:32:00Z",
    paidAt: "2024-05-28T10:33:00Z",
    shippedAt: "2024-05-29T14:20:00Z",
    deliveredAt: "2024-06-01T09:15:00Z"
  },
  {
    id: "ZTR-2561",
    customerId: "2",
    customerName: "Jane Doe",
    customerEmail: "jane.doe@email.com",
    status: "processing",
    paymentStatus: "paid",
    total: 89.00,
    subtotal: 79.00,
    tax: 10.00,
    shipping: 0,
    discount: 0,
    items: [
      {
        id: "2",
        productId: "2",
        productName: "Zentro Tech Hoodie",
        productImage: "/products/product-4.png",
        quantity: 1,
        price: 89.00,
        total: 89.00
      }
    ],
    shippingAddress: {
      name: "Jane Doe",
      street: "789 Market Street",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90012",
      country: "United States",
      phone: "+1 (555) 987-6543"
    },
    billingAddress: {
      name: "Jane Doe",
      street: "789 Market Street",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90012",
      country: "United States",
      phone: "+1 (555) 987-6543"
    },
    paymentMethod: "Visa **** 4242",
    createdAt: "2024-05-26T14:20:00Z",
    paidAt: "2024-05-26T14:21:00Z"
  },
  {
    id: "ZTR-2560",
    customerId: "3",
    customerName: "Michelle Brown",
    customerEmail: "michelle.b@email.com",
    status: "shipped",
    paymentStatus: "paid",
    total: 115.00,
    subtotal: 105.00,
    tax: 10.00,
    shipping: 0,
    discount: 0,
    items: [
      {
        id: "3",
        productId: "3",
        productName: "Zentro Cap",
        productImage: "/products/product-1.png",
        quantity: 1,
        price: 32.00,
        total: 32.00
      }
    ],
    shippingAddress: {
      name: "Michelle Brown",
      street: "456 Oak Avenue",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
      phone: "+1 (555) 456-7890"
    },
    billingAddress: {
      name: "Michelle Brown",
      street: "456 Oak Avenue",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
      phone: "+1 (555) 456-7890"
    },
    paymentMethod: "Mastercard **** 8888",
    createdAt: "2024-05-24T09:15:00Z",
    paidAt: "2024-05-24T09:16:00Z",
    shippedAt: "2024-05-25T11:30:00Z"
  },
  {
    id: "ZTR-2559",
    customerId: "4",
    customerName: "Daniel Wilson",
    customerEmail: "daniel.w@email.com",
    status: "cancelled",
    paymentStatus: "refunded",
    total: 85.00,
    subtotal: 75.00,
    tax: 10.00,
    shipping: 0,
    discount: 0,
    items: [
      {
        id: "4",
        productId: "5",
        productName: "Zentro Track Pants",
        productImage: "/products/product-3.png",
        quantity: 1,
        price: 65.00,
        total: 65.00
      }
    ],
    shippingAddress: {
      name: "Daniel Wilson",
      street: "321 Pine Street",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      country: "United States",
      phone: "+1 (555) 321-9876"
    },
    billingAddress: {
      name: "Daniel Wilson",
      street: "321 Pine Street",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      country: "United States",
      phone: "+1 (555) 321-9876"
    },
    paymentMethod: "Visa **** 1234",
    createdAt: "2024-05-22T16:45:00Z"
  }
]

// Customers Data
export const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    totalOrders: 12,
    totalSpent: 1547.50,
    status: "active",
    joinedAt: "2024-01-15"
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "jane.doe@email.com",
    phone: "+1 (555) 987-6543",
    totalOrders: 8,
    totalSpent: 892.00,
    status: "active",
    joinedAt: "2024-02-20"
  },
  {
    id: "3",
    name: "Michelle Brown",
    email: "michelle.b@email.com",
    phone: "+1 (555) 456-7890",
    totalOrders: 5,
    totalSpent: 450.25,
    status: "active",
    joinedAt: "2024-03-10"
  },
  {
    id: "4",
    name: "Daniel Wilson",
    email: "daniel.w@email.com",
    phone: "+1 (555) 321-9876",
    totalOrders: 3,
    totalSpent: 215.00,
    status: "inactive",
    joinedAt: "2024-04-05"
  }
]

// Categories Data
export const mockCategories: Category[] = [
  { id: "1", name: "Shoes", slug: "shoes", productCount: 45, status: "active" },
  { id: "2", name: "Hoodies", slug: "hoodies", productCount: 32, status: "active" },
  { id: "3", name: "Apparel", slug: "apparel", productCount: 67, status: "active" },
  { id: "4", name: "Accessories", slug: "accessories", productCount: 89, status: "active" },
]

// Brands Data
export const mockBrands: Brand[] = [
  { id: "1", name: "Zentro", slug: "zentro", productCount: 156, status: "active" },
  { id: "2", name: "Nike", slug: "nike", productCount: 45, status: "active" },
  { id: "3", name: "Adidas", slug: "adidas", productCount: 32, status: "active" },
]

// Reviews Data
export const mockReviews: Review[] = [
  {
    id: "1",
    productId: "1",
    productName: "Zentro Performance Runner",
    customerId: "1",
    customerName: "John Smith",
    rating: 5,
    comment: "Amazing shoes! Very comfortable and great quality.",
    status: "approved",
    createdAt: "2024-05-25"
  },
  {
    id: "2",
    productId: "2",
    productName: "Zentro Tech Hoodie",
    customerId: "2",
    customerName: "Jane Doe",
    rating: 4,
    comment: "Good hoodie, fits well. Would recommend!",
    status: "approved",
    createdAt: "2024-05-24"
  }
]

// Coupons Data
export const mockCoupons: Coupon[] = [
  {
    id: "1",
    code: "SUMMER20",
    type: "percentage",
    value: 20,
    minPurchase: 50,
    maxDiscount: 100,
    usageLimit: 1000,
    usageCount: 456,
    status: "active",
    expiresAt: "2024-08-31"
  },
  {
    id: "2",
    code: "WELCOME10",
    type: "fixed",
    value: 10,
    minPurchase: 30,
    usageLimit: 500,
    usageCount: 234,
    status: "active",
    expiresAt: "2024-12-31"
  }
]

// Inventory Data
export const mockInventory = [
  {
    id: "1",
    productId: "1",
    productName: "Zentro Performance Runner",
    sku: "ZNT-RUN-001",
    currentStock: 145,
    lowStockThreshold: 20,
    reorderPoint: 50,
    status: "in-stock" as const,
    lastRestocked: "2024-05-15"
  },
  {
    id: "2",
    productId: "2",
    productName: "Zentro Tech Hoodie",
    sku: "ZNT-HOD-002",
    currentStock: 18,
    lowStockThreshold: 20,
    reorderPoint: 30,
    status: "low-stock" as const,
    lastRestocked: "2024-05-10"
  },
  {
    id: "3",
    productId: "3",
    productName: "Zentro Street Joggers",
    sku: "ZNT-JOG-003",
    currentStock: 0,
    lowStockThreshold: 15,
    reorderPoint: 25,
    status: "out-of-stock" as const,
    lastRestocked: "2024-04-28"
  },
  {
    id: "4",
    productId: "4",
    productName: "Zentro Classic Tee",
    sku: "ZNT-TEE-004",
    currentStock: 230,
    lowStockThreshold: 30,
    reorderPoint: 50,
    status: "in-stock" as const,
    lastRestocked: "2024-05-20"
  }
]

// Users Data
export const mockUsers = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@zentro.com",
    role: "Admin",
    avatar: "/avatars/admin.png",
    status: "active" as const,
    createdAt: "2023-01-15"
  },
  {
    id: "2",
    name: "Sarah Manager",
    email: "sarah@zentro.com",
    role: "Manager",
    avatar: "/avatars/sarah.png",
    status: "active" as const,
    createdAt: "2023-03-20"
  },
  {
    id: "3",
    name: "Mike Staff",
    email: "mike@zentro.com",
    role: "Staff",
    status: "active" as const,
    createdAt: "2024-01-10"
  }
]

// Roles Data
export const mockRoles = [
  {
    id: "1",
    name: "Admin",
    description: "Full system access",
    permissions: ["all"],
    userCount: 1
  },
  {
    id: "2",
    name: "Manager",
    description: "Manage products, orders, and customers",
    permissions: ["products.read", "products.write", "orders.read", "orders.write", "customers.read"],
    userCount: 3
  },
  {
    id: "3",
    name: "Staff",
    description: "View orders and products",
    permissions: ["products.read", "orders.read"],
    userCount: 5
  }
]

// Payment Methods Data
export const mockPaymentMethods = [
  {
    id: "1",
    name: "Credit/Debit Card",
    type: "card" as const,
    enabled: true,
    config: { processor: "Stripe" }
  },
  {
    id: "2",
    name: "PayPal",
    type: "wallet" as const,
    enabled: true,
    config: { clientId: "xxx" }
  },
  {
    id: "3",
    name: "Cash on Delivery",
    type: "cod" as const,
    enabled: true,
    config: {}
  },
  {
    id: "4",
    name: "Bank Transfer",
    type: "bank" as const,
    enabled: false,
    config: { accountNumber: "xxx" }
  }
]

// Shipping Methods Data
export const mockShippingMethods = [
  {
    id: "1",
    name: "Standard Shipping",
    description: "Delivery within 5-7 business days",
    price: 5.99,
    estimatedDays: "5-7",
    enabled: true
  },
  {
    id: "2",
    name: "Express Shipping",
    description: "Delivery within 2-3 business days",
    price: 14.99,
    estimatedDays: "2-3",
    enabled: true
  },
  {
    id: "3",
    name: "Same Day Delivery",
    description: "Delivery within 24 hours",
    price: 29.99,
    estimatedDays: "1",
    enabled: false
  }
]

// Tax Rates Data
export const mockTaxRates = [
  {
    id: "1",
    name: "US Sales Tax",
    country: "United States",
    state: "California",
    rate: 8.5,
    type: "percentage" as const,
    enabled: true
  },
  {
    id: "2",
    name: "EU VAT",
    country: "Germany",
    rate: 19,
    type: "percentage" as const,
    enabled: true
  },
  {
    id: "3",
    name: "UK VAT",
    country: "United Kingdom",
    rate: 20,
    type: "percentage" as const,
    enabled: true
  }
]
