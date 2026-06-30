// Mock data utilities for the dashboard
// Replace these with actual API calls when backend is ready

export const mockUser = {
  name: "John Doe",
  email: "john.doe@email.com",
  avatar: undefined,
}

export const mockStats = [
  {
    title: "Total Orders",
    value: 26,
    trend: { value: "+7% from last month", positive: true }
  },
  {
    title: "Total Spent",
    value: "$1,245",
    trend: { value: "+8% from last month", positive: true }
  },
  {
    title: "Wishlist Items",
    value: 8,
    trend: { value: "+2 new items", positive: true }
  },
  {
    title: "Reward Points",
    value: 3200,
    trend: { value: "+350 this month", positive: true }
  },
]

export const mockRecentOrders = [
  {
    id: "ZTR-2562",
    product: {
      name: "Tech Hoodie",
      image: "/products/product-4.png"
    },
    date: "May 28, 2024",
    status: "delivered" as const,
    amount: 129.00
  },
  {
    id: "ZTR-2561",
    product: {
      name: "Performance Runner",
      image: "/products/product-5.png"
    },
    date: "May 25, 2024",
    status: "delivered" as const,
    amount: 89.00
  },
  {
    id: "ZTR-2560",
    product: {
      name: "Essential Logo Tee",
      image: "/products/product-3.png"
    },
    date: "May 22, 2024",
    status: "processing" as const,
    amount: 159.00
  },
  {
    id: "ZTR-2559",
    product: {
      name: "Cropped Windbreaker",
      image: "/products/product-2.png"
    },
    date: "May 18, 2024",
    status: "shipped" as const,
    amount: 79.00
  },
]

export const mockWishlistItems = [
  {
    id: "1",
    name: "Tech Hoodie",
    price: 83.00,
    image: "/products/product-4.png"
  },
  {
    id: "2",
    name: "Performance Runner",
    price: 33.00,
    image: "/products/product-5.png"
  },
  {
    id: "3",
    name: "Essential Logo Tee",
    price: 29.00,
    image: "/products/product-3.png"
  },
  {
    id: "4",
    name: "Cropped Windbreaker",
    price: 35.00,
    image: "/products/product-2.png"
  },
]

export const mockRecentlyViewedItems = [
  {
    id: "1",
    name: "Tech Hoodie",
    image: "/products/product-4.png"
  },
  {
    id: "2",
    name: "Performance Runner",
    image: "/products/product-5.png"
  },
  {
    id: "3",
    name: "Essential Logo Tee",
    image: "/products/product-3.png"
  },
  {
    id: "4",
    name: "Cropped Windbreaker",
    image: "/products/product-2.png"
  },
]

export const mockMembership = {
  memberSince: "Jan 2024",
  currentLevel: "6",
  currentXP: 3200,
  maxXP: 5000,
  nextLevel: "Level 7"
}

export const mockOrderDetails = {
  id: "ZTR-2562",
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

// Utility function to simulate API delay
export const simulateApiDelay = (ms: number = 500) => 
  new Promise(resolve => setTimeout(resolve, ms))

// Example usage with Server Actions
export async function getUserData() {
  await simulateApiDelay()
  return mockUser
}

export async function getOrdersData() {
  await simulateApiDelay()
  return mockRecentOrders
}

export async function getWishlistData() {
  await simulateApiDelay()
  return mockWishlistItems
}
