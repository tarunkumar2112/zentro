"use client"

import { useState } from "react"
import Image from "next/image"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Trash2, X } from "lucide-react"

interface WishlistItem {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  inStock: boolean
  category: string
}

export default function WishlistPage() {
  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    avatar: undefined,
  }

  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: "1",
      name: "Tech Hoodie",
      price: 83.00,
      originalPrice: 120.00,
      image: "/products/product-4.png",
      inStock: true,
      category: "Hoodies"
    },
    {
      id: "2",
      name: "Performance Runner",
      price: 33.00,
      image: "/products/product-5.png",
      inStock: true,
      category: "Footwear"
    },
    {
      id: "3",
      name: "Essential Logo Tee",
      price: 29.00,
      image: "/products/product-3.png",
      inStock: false,
      category: "T-Shirts"
    },
    {
      id: "4",
      name: "Cropped Windbreaker",
      price: 35.00,
      image: "/products/product-2.png",
      inStock: true,
      category: "Jackets"
    },
    {
      id: "5",
      name: "Oversized Z Graphic Tee",
      price: 45.00,
      image: "/products/product-1.png",
      inStock: true,
      category: "T-Shirts"
    },
  ])

  const removeItem = (id: string) => {
    setWishlistItems(items => items.filter(item => item.id !== id))
  }

  const addToCart = (item: WishlistItem) => {
    // Add to cart logic here
    console.log("Adding to cart:", item)
  }

  const clearWishlist = () => {
    if (confirm("Are you sure you want to clear your entire wishlist?")) {
      setWishlistItems([])
    }
  }

  return (
    <DashboardLayout user={user}>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-heading text-foreground mb-2">Wishlist</h1>
            <p className="text-muted-foreground">
              {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"} saved
            </p>
          </div>
          {wishlistItems.length > 0 && (
            <Button 
              variant="outline" 
              onClick={clearWishlist}
              className="rounded-2xl"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          )}
        </div>

        {/* Wishlist Items */}
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="rounded-3xl border-border overflow-hidden group">
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative aspect-square bg-muted">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {!item.inStock && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="bg-background text-foreground px-4 py-2 rounded-2xl font-semibold">
                          Out of Stock
                        </span>
                      </div>
                    )}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-background/90 hover:bg-background transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{item.category}</p>
                      <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-heading text-primary">
                          ${item.price.toFixed(2)}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${item.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    <Button
                      onClick={() => addToCart(item)}
                      disabled={!item.inStock}
                      className="w-full rounded-2xl"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {item.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="rounded-3xl border-border">
            <CardContent className="p-12">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-6 rounded-full bg-muted">
                    <Heart className="h-12 w-12 text-muted-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-heading text-foreground">Your wishlist is empty</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Save your favorite items to view them later
                </p>
                <Button className="rounded-2xl">
                  Start Shopping
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  )
}
