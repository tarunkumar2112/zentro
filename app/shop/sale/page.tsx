"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NewsletterSection } from "@/components/newsletter-section";
import Image from "next/image";
import Link from "next/link";
import { Heart, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "1",
    name: "Oversized Z Graphic Tee",
    category: "Men's T-Shirt",
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    image: "/products/product-1.png",
    colors: ["#000000", "#7C3AED"],
  },
  {
    id: "3",
    name: "Essential Logo Tee",
    category: "Men's T-Shirt",
    price: 24.99,
    originalPrice: 34.99,
    discount: 29,
    image: "/products/product-3.png",
    colors: ["#D4A574", "#000000", "#F5F5F5"],
  },
  {
    id: "4",
    name: "Performance Hoodie",
    category: "Men's Hoodie",
    price: 54.99,
    originalPrice: 74.99,
    discount: 27,
    image: "/products/product-4.png",
    colors: ["#000000", "#27272A", "#F5F5F5"],
  },
  {
    id: "7",
    name: "Athletic Sports Bra",
    category: "Women's Activewear",
    price: 34.99,
    originalPrice: 49.99,
    discount: 30,
    image: "/products/product-2.png",
    colors: ["#000000", "#F5F5F5"],
  },
  {
    id: "8",
    name: "Classic Crew Neck",
    category: "Men's T-Shirt",
    price: 29.99,
    originalPrice: 44.99,
    discount: 33,
    image: "/products/product-1.png",
    colors: ["#000000", "#7C3AED", "#F5F5F5"],
  },
  {
    id: "17",
    name: "Performance Cap",
    category: "Headwear",
    price: 19.99,
    originalPrice: 29.99,
    discount: 33,
    image: "/products/product-1.png",
    colors: ["#000000", "#7C3AED"],
  },
  {
    id: "20",
    name: "Sport Socks (3-Pack)",
    category: "Socks",
    price: 16.99,
    originalPrice: 24.99,
    discount: 32,
    image: "/products/product-1.png",
    colors: ["#000000", "#F5F5F5"],
  },
  {
    id: "12",
    name: "Seamless Tank Top",
    category: "Women's Tank Top",
    price: 27.99,
    originalPrice: 39.99,
    discount: 30,
    image: "/products/product-2.png",
    colors: ["#000000", "#D4A574", "#F5F5F5"],
  },
];

export default function SalePage() {
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
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-destructive/10 to-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-destructive blinker-semibold text-sm uppercase tracking-wider mb-4">
            LIMITED TIME ONLY
          </p>
          <h1 className="font-heading text-5xl lg:text-7xl mb-4">
            Sale <span className="text-destructive">Up to 40% Off</span>
          </h1>
          <p className="blinker-regular text-xl text-muted-foreground max-w-2xl">
            Don't miss out on incredible deals on your favorite ZENTRO gear
          </p>
        </div>
      </section>

      {/* Filters & Sort */}
      <section className="py-6 border-b border-border sticky top-[72px] bg-background z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 border border-border hover:border-primary rounded-lg px-4 py-2 blinker-semibold text-sm transition-colors">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <p className="blinker-regular text-sm text-muted-foreground">
                {products.length} Products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative bg-card rounded-lg overflow-hidden aspect-[3/4] mb-4">
                  <Link href={`/product/${product.id}`} className="relative block w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover"
                    />
                  </Link>

                  {/* Sale Badge */}
                  <div className="absolute top-3 left-3 bg-destructive text-white blinker-bold text-xs px-3 py-1 rounded-full uppercase z-10">
                    -{product.discount}%
                  </div>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors z-10"
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

                  <button className="absolute bottom-3 left-3 right-3 bg-primary hover:bg-primary-hover text-primary-foreground blinker-semibold text-sm py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all">
                    Quick Add
                  </button>
                </div>

                <div className="space-y-2">
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

                  <Link href={`/product/${product.id}`}>
                    <h3 className="blinker-semibold text-base hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="blinker-regular text-sm text-muted-foreground">
                      {product.category}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="blinker-bold text-lg text-destructive">
                        ${product.price.toFixed(2)}
                      </p>
                      <p className="blinker-regular text-sm text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
