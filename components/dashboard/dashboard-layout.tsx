"use client"

import { ReactNode } from "react"
import { DashboardSidebar } from "./dashboard-sidebar"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface DashboardLayoutProps {
  children: ReactNode
  user?: {
    name: string
    email: string
    avatar?: string
  }
}

export function DashboardLayout({ children, user }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar - Fixed */}
      <div className="hidden lg:block lg:w-64">
        <DashboardSidebar user={user} />
      </div>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="lg:hidden fixed top-4 left-4 z-50 rounded-2xl"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <DashboardSidebar user={user} />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-8">
          {children}
        </div>
      </main>
    </div>
  )
}
