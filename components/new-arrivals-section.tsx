"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Plus } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  colors: string[];
  isNew: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "Oversized Z Graphic Tee",
    category: "Men's T-Shirt",
    price: 39.99,
    image: "/products/product-1.png",
    colors: ["#000000", "#7C3AED"],
    isNew: true,
  },
  {
    id: "2",
    name: "Cropped Windbreaker",
    category: "Women's Jacket",
    price: 69.99,
    image: "/products/product-2.png",
    colors: ["#000000", "#F5F5F5", "#27272A"],
    isNew: true,
  },
  {
    id: "3",
    name: "Essential Logo Tee",
    category: "Men's T-Shirt",
    price: 34.99,
    image: "/products/product-3.png",
    colors: ["#D4A574", "#000000", "#F5F5F5"],
    isNew: true,
  },
  {
    id: "4",
    name: "Performance Hoodie",
    category: "Men's Hoodie",
    price: 74.99,
    image: "/products/product-4.png",
    colors: ["#000000", "#27272A", "#F5F5F5"],
    isNew: true,
  },
  {
    id: "5",
    name: "Zentro Performance Run",
    category: "Men's Shoes",
    price: 119.99,
    image: "/products/product-5.png",
    colors: ["#000000", "#7C3AED", "#FFFFFF"],
    isNew: true,
  },
];

export function NewArrivalsSection() {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div>
            <p className="text-primary blinker-semibold text-sm uppercase tracking-wider mb-2">
              Just Dropped
            </p>
            <h2 className="font-heading text-4xl lg:text-6xl">NEW ARRIVALS</h2>
            <p className="blinker-regular text-muted-foreground mt-2">
              The latest styles. Fresh designs. Limited stock.
            </p>
          </div>
          <Link
            href="/shop/new-arrivals"
            className="inline-flex items-center gap-2 border-2 border-foreground hover:bg-foreground hover:text-background transition-all blinker-semibold px-6 py-3 rounded-md group"
          >
            View All New Arrivals
            <span className="transform transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Product Card */}
              <div className="relative bg-card rounded-lg overflow-hidden aspect-[3/4] mb-4">
                {/* Product Image */}
                <Link href={`/product/${product.id}`} className="relative block w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover"
                  />
                </Link>

                {/* NEW Badge */}
                {product.isNew && (
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground blinker-bold text-xs px-3 py-1 rounded-full uppercase">
                    New
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      wishlist.has(product.id)
                        ? "fill-destructive text-destructive"
                        : "text-foreground"
                    }`}
                  />
                </button>

                {/* Add to Cart Button - Shows on Hover */}
                <button className="absolute bottom-3 right-3 w-10 h-10 bg-primary hover:bg-primary-hover rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-primary/20">
                  <Plus className="w-5 h-5 text-primary-foreground" />
                </button>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                {/* Color Options */}
                <div className="flex gap-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="w-6 h-6 rounded-full border-2 border-border hover:border-foreground transition-colors"
                      style={{ backgroundColor: color }}
                      aria-label={`Color option ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Product Details */}
                <Link href={`/product/${product.id}`}>
                  <h3 className="blinker-semibold text-base hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="blinker-regular text-sm text-muted-foreground">
                    {product.category}
                  </p>
                  <p className="blinker-bold text-lg mt-1">
                    ${product.price.toFixed(2)}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="blinker-bold text-sm mb-1">New Styles Every Week</h4>
            <p className="blinker-regular text-xs text-muted-foreground">
              Fresh drops. All season.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="blinker-bold text-sm mb-1">Premium Quality</h4>
            <p className="blinker-regular text-xs text-muted-foreground">
              Designed to last.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="blinker-bold text-sm mb-1">Fast & Free Shipping</h4>
            <p className="blinker-regular text-xs text-muted-foreground">
              On orders over $50.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h4 className="blinker-bold text-sm mb-1">Easy Returns</h4>
            <p className="blinker-regular text-xs text-muted-foreground">
              30-day return policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
