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
    id: "17",
    name: "Performance Cap",
    category: "Headwear",
    price: 29.99,
    image: "/products/product-1.png",
    colors: ["#000000", "#7C3AED"],
  },
  {
    id: "18",
    name: "Training Backpack",
    category: "Bags",
    price: 79.99,
    image: "/products/product-4.png",
    colors: ["#000000", "#27272A"],
  },
  {
    id: "19",
    name: "Gym Duffle Bag",
    category: "Bags",
    price: 99.99,
    image: "/products/product-4.png",
    colors: ["#000000", "#7C3AED", "#F5F5F5"],
  },
  {
    id: "20",
    name: "Sport Socks (3-Pack)",
    category: "Socks",
    price: 24.99,
    image: "/products/product-1.png",
    colors: ["#000000", "#F5F5F5"],
  },
  {
    id: "21",
    name: "Performance Headband",
    category: "Headwear",
    price: 14.99,
    image: "/products/product-1.png",
    colors: ["#000000", "#7C3AED", "#F5F5F5"],
  },
  {
    id: "22",
    name: "Water Bottle (32oz)",
    category: "Accessories",
    price: 34.99,
    image: "/products/product-3.png",
    colors: ["#000000", "#7C3AED"],
  },
  {
    id: "23",
    name: "Wrist Bands (Pair)",
    category: "Accessories",
    price: 12.99,
    image: "/products/product-1.png",
    colors: ["#000000", "#F5F5F5", "#7C3AED"],
  },
  {
    id: "24",
    name: "Crossbody Bag",
    category: "Bags",
    price: 59.99,
    image: "/products/product-4.png",
    colors: ["#000000", "#27272A"],
  },
];

export default function AccessoriesPage() {
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

      <section className="py-12 lg:py-16 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-primary blinker-semibold text-sm uppercase tracking-wider mb-4">
            COMPLETE YOUR LOOK
          </p>
          <h1 className="font-heading text-5xl lg:text-7xl mb-4">Accessories</h1>
          <p className="blinker-regular text-xl text-muted-foreground max-w-2xl">
            The perfect finishing touches for your active lifestyle
          </p>
        </div>
      </section>

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

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors z-10"
                  >
                    <Heart
                      className={`w-5 h-5 ${
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
                    <p className="blinker-bold text-lg mt-1">
                      ${product.price.toFixed(2)}
                    </p>
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
