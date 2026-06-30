"use client"

import { Search, Bell, Settings as SettingsIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface AdminHeaderProps {
  title?: string
  subtitle?: string
}

export function AdminHeader({ title, subtitle }: AdminHeaderProps) {
  return (
    <header className="h-16 border-b border-border bg-card sticky top-0 z-40">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left - Title */}
        {title && (
          <div>
            <h1 className="text-xl font-heading text-foreground">{title}</h1>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}

        {!title && <div />}

        {/* Right - Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative w-64 hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 rounded-2xl bg-background"
            />
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="rounded-2xl relative">
            <Bell className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs rounded-full"
            >
              3
            </Badge>
          </Button>

          {/* Settings */}
          <Button variant="ghost" size="icon" className="rounded-2xl">
            <SettingsIcon className="h-5 w-5" />
          </Button>

          {/* Admin Avatar */}
          <Avatar className="h-9 w-9 cursor-pointer">
            <AvatarImage src={undefined} alt="Admin" />
            <AvatarFallback className="bg-primary text-primary-foreground">
              A
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
