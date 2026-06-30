"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Users,
  BarChart3,
  FolderTree,
  Tag,
  Archive,
  Ticket,
  Star,
  Settings,
  UserCog,
  Shield,
  CreditCard,
  Truck,
  Receipt,
  LogOut
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Dashboard", href: "/ecommerce-admin/dashboard", icon: LayoutDashboard },
  { name: "Orders", href: "/ecommerce-admin/orders", icon: ShoppingBag },
  { name: "Products", href: "/ecommerce-admin/products", icon: Package },
  { name: "Customers", href: "/ecommerce-admin/customers", icon: Users },
  { name: "Analytics", href: "/ecommerce-admin/analytics", icon: BarChart3 },
]

const catalog = [
  { name: "Categories", href: "/ecommerce-admin/categories", icon: FolderTree },
  { name: "Brands", href: "/ecommerce-admin/brands", icon: Tag },
  { name: "Inventory", href: "/ecommerce-admin/inventory", icon: Archive },
  { name: "Coupons", href: "/ecommerce-admin/coupons", icon: Ticket },
  { name: "Reviews", href: "/ecommerce-admin/reviews", icon: Star },
]

const settings = [
  { name: "Store Settings", href: "/ecommerce-admin/settings", icon: Settings },
  { name: "Users", href: "/ecommerce-admin/users", icon: UserCog },
  { name: "Roles & Permissions", href: "/ecommerce-admin/roles", icon: Shield },
  { name: "Payment Methods", href: "/ecommerce-admin/payment-methods", icon: CreditCard },
  { name: "Shipping", href: "/ecommerce-admin/shipping", icon: Truck },
  { name: "Taxes", href: "/ecommerce-admin/taxes", icon: Receipt },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 h-screen bg-card border-r border-border flex flex-col fixed left-0 top-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link href="/ecommerce-admin/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-xl font-heading text-primary-foreground">Z</span>
          </div>
          <span className="text-xl font-heading text-foreground">ZENTRO</span>
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-4 space-y-6">
        <div className="space-y-1">
          <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Main
          </p>
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="space-y-1">
          <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Catalog
          </p>
          {catalog.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="space-y-1">
          <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Settings
          </p>
          {settings.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-border">
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground rounded-2xl"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </aside>
  )
}
