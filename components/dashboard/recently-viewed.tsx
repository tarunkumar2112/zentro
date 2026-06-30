"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RecentlyViewedItem {
  id: string
  name: string
  image: string
}

interface RecentlyViewedProps {
  items: RecentlyViewedItem[]
}

export function RecentlyViewed({ items }: RecentlyViewedProps) {
  return (
    <Card className="rounded-3xl border-border">
      <CardHeader>
        <CardTitle className="font-heading text-xl">Recently Viewed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {items.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-32">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted mb-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <p className="text-xs text-muted-foreground truncate">{item.name}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
