"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Heart, 
  User, 
  Settings, 
  Award,
  LogOut
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
  { name: "Wishlist", href: "/dashboard/wishlist", icon: Heart },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Rewards", href: "/dashboard/rewards", icon: Award },
]

interface DashboardSidebarProps {
  user?: {
    name: string
    email: string
    avatar?: string
  }
}

export function DashboardSidebar({ user }: DashboardSidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="w-64 h-screen bg-card border-r border-border flex flex-col fixed left-0 top-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-xl font-heading text-primary-foreground">Z</span>
          </div>
          <span className="text-xl font-heading text-foreground">ZENTRO</span>
        </Link>
      </div>

      {/* User Profile Card */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {user?.name?.charAt(0) || "J"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">
              {user?.name || "John Doe"}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {user?.email || "john.doe@email.com"}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
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
      </nav>

      {/* Bottom Promotional Card */}
      <div className="p-4">
        <Card className="bg-gradient-to-br from-primary/20 to-primary/10 border-primary/20 rounded-3xl overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="font-heading text-sm text-foreground">
                Exclusive Member
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Get early access to our exclusive drops before it's gone
              </p>
            </div>
            <Button size="sm" className="w-full rounded-2xl bg-primary hover:bg-primary/90">
              Explore Now
            </Button>
          </CardContent>
        </Card>
      </div>

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
