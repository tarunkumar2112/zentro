"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  colors: string[];
  isBestSeller: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "Performance Hoodie",
    category: "Men's Hoodie",
    price: 89.0,
    rating: 4.9,
    reviews: 186,
    image: "/products/product-4.png",
    colors: ["#000000", "#27272A", "#F5F5F5"],
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Active Sports Bra",
    category: "Women's Sports Bra",
    price: 49.0,
    rating: 4.8,
    reviews: 342,
    image: "/products/product-2.png",
    colors: ["#000000", "#F5F5F5"],
    isBestSeller: true,
  },
  {
    id: "3",
    name: "Performance Tee",
    category: "Men's T-Shirt",
    price: 39.0,
    rating: 4.7,
    reviews: 215,
    image: "/products/product-3.png",
    colors: ["#000000", "#D4A574", "#F5F5F5"],
    isBestSeller: true,
  },
  {
    id: "4",
    name: "Performance Cap",
    category: "Accessories",
    price: 29.0,
    rating: 4.9,
    reviews: 98,
    image: "/products/product-1.png",
    colors: ["#000000", "#7C3AED"],
    isBestSeller: true,
  },
  {
    id: "5",
    name: "Track Pants",
    category: "Men's Pants",
    price: 69.0,
    rating: 4.8,
    reviews: 134,
    image: "/products/product-5.png",
    colors: ["#000000", "#27272A"],
    isBestSeller: true,
  },
];

export function BestsellerSection() {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const featuredProduct = products[0];
  const otherProducts = products.slice(1);

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
        <div className="text-center mb-12">
          <p className="text-primary blinker-semibold text-sm uppercase tracking-wider mb-2">
            BEST SELLER
          </p>
          <h2 className="font-heading text-4xl lg:text-6xl mb-4">
            Performance Runner X
          </h2>
          <p className="blinker-regular text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineered for athletes. Designed for everyday movement.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Featured Product - Left */}
          <div className="relative group">
            <div className="relative bg-card rounded-2xl overflow-hidden aspect-square">
              {/* Featured Product Image */}
              <Image
                src="/homepage/hero/left-hero.png"
                alt={featuredProduct.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Best Seller Badge */}
              <div className="absolute top-6 left-6 bg-primary text-primary-foreground blinker-bold text-xs px-4 py-2 rounded-full uppercase">
                Best Seller
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(featuredProduct.id)}
                className="absolute top-6 right-6 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
              >
                <Heart
                  className={`w-6 h-6 transition-colors ${
                    wishlist.has(featuredProduct.id)
                      ? "fill-destructive text-destructive"
                      : "text-foreground"
                  }`}
                />
              </button>
            </div>

            {/* Featured Product Info */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="blinker-semibold text-sm">
                  {featuredProduct.rating} ({featuredProduct.reviews})
                </span>
              </div>
              <h3 className="font-heading text-3xl mb-2">
                {featuredProduct.name}
              </h3>
              <p className="blinker-regular text-muted-foreground mb-4">
                {featuredProduct.category}
              </p>
              <p className="font-heading text-4xl mb-6">
                ${featuredProduct.price.toFixed(2)}
              </p>

              {/* Size Selection */}
              <div className="mb-6">
                <p className="blinker-semibold text-sm mb-3 uppercase">Size</p>
                <div className="flex gap-2">
                  {["40", "41", "42", "43", "44"].map((size) => (
                    <button
                      key={size}
                      className={`w-12 h-12 border-2 rounded-md hover:border-primary transition-colors blinker-semibold text-sm ${
                        size === "42"
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <p className="blinker-semibold text-sm mb-3 uppercase">Color</p>
                <div className="flex gap-3">
                  {featuredProduct.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`w-10 h-10 rounded-full border-2 hover:scale-110 transition-transform ${
                        index === 0 ? "border-primary" : "border-border"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-primary hover:bg-primary-hover transition-colors blinker-bold py-4 rounded-md flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="w-14 h-14 border-2 border-border hover:border-primary rounded-md flex items-center justify-center transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid - Right */}
          <div className="grid grid-cols-2 gap-4">
            {otherProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group"
              >
                <div className="relative bg-card rounded-lg overflow-hidden aspect-[3/4] mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Wishlist */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product.id);
                    }}
                    className="absolute top-3 right-3 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors z-10"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        wishlist.has(product.id)
                          ? "fill-destructive text-destructive"
                          : "text-foreground"
                      }`}
                    />
                  </button>

                  {/* Quick Add */}
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="absolute bottom-3 left-3 right-3 bg-primary hover:bg-primary-hover opacity-0 group-hover:opacity-100 transition-all blinker-semibold text-sm py-2 rounded-md"
                  >
                    Quick Add
                  </button>
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="blinker-semibold text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  <h3 className="blinker-semibold text-sm group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="blinker-bold text-base">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
