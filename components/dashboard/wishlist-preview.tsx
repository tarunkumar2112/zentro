"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface WishlistItem {
  id: string
  name: string
  price: number
  image: string
}

interface WishlistPreviewProps {
  items: WishlistItem[]
}

export function WishlistPreview({ items }: WishlistPreviewProps) {
  return (
    <Card className="rounded-3xl border-border">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="font-heading text-xl">Wishlist Preview</CardTitle>
        <Link href="/dashboard/wishlist">
          <Button variant="ghost" size="sm" className="rounded-2xl">
            View All
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.id} className="group relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted mb-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <button className="absolute top-2 right-2 p-2 rounded-full bg-background/80 hover:bg-background">
                  <Heart className="h-4 w-4 text-primary fill-primary" />
                </button>
              </div>
              <h3 className="text-sm font-medium text-foreground mb-1 truncate">
                {item.name}
              </h3>
              <p className="text-sm text-primary font-semibold">
                ${item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
