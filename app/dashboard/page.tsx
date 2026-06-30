"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { WelcomeHero } from "@/components/dashboard/welcome-hero"
import { StatCard } from "@/components/dashboard/stat-card"
import { PromotionBanner } from "@/components/dashboard/promotion-banner"
import { RecentOrders } from "@/components/dashboard/recent-orders"
import { WishlistPreview } from "@/components/dashboard/wishlist-preview"
import { RecentlyViewed } from "@/components/dashboard/recently-viewed"
import { RewardsCard } from "@/components/dashboard/rewards-card"
import { ShoppingBag, DollarSign, Heart, Award } from "lucide-react"

export default function DashboardPage() {
  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    avatar: undefined,
  }

  const stats = [
    {
      title: "Total Orders",
      value: 26,
      icon: ShoppingBag,
      trend: { value: "+7% from last month", positive: true }
    },
    {
      title: "Total Spent",
      value: "$1,245",
      icon: DollarSign,
      trend: { value: "+8% from last month", positive: true }
    },
    {
      title: "Wishlist Items",
      value: 8,
      icon: Heart,
      trend: { value: "+2 new items", positive: true }
    },
    {
      title: "Reward Points",
      value: 3200,
      icon: Award,
      trend: { value: "+350 this month", positive: true }
    },
  ]

  const recentOrders = [
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

  const wishlistItems = [
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

  const recentlyViewedItems = [
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

  return (
    <DashboardLayout user={user}>
      {/* Welcome Hero Section */}
      <WelcomeHero
        userName="John"
        memberSince="Jan 2024"
        currentLevel="6"
        currentXP={3200}
        maxXP={5000}
        nextLevel="Level 7"
      />

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
          />
        ))}
      </div>

      {/* Promotional Banner */}
      <div className="mb-8">
        <PromotionBanner
          title="New Collection is Live!"
          description="Explore the latest drop before it's gone."
          image="/products/product-5.png"
          link="/shop/new-arrivals"
        />
      </div>

      {/* Recent Orders */}
      <div className="mb-8">
        <RecentOrders orders={recentOrders} />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Wishlist Preview */}
        <WishlistPreview items={wishlistItems} />

        {/* Recently Viewed */}
        <RecentlyViewed items={recentlyViewedItems} />
      </div>

      {/* Rewards Progress */}
      <RewardsCard
        currentXP={3200}
        totalXP={5000}
        currentLevel="Level 6"
        nextLevel="Level 7"
      />
    </DashboardLayout>
  )
}
