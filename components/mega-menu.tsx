"use client";

import { useState } from "react";
import Link from "next/link";

interface MegaMenuProps {
  isOpen: boolean;
  menuType: "shop" | "mens" | "womens" | "accessories" | "collections";
}

export function MegaMenu({ isOpen, menuType }: MegaMenuProps) {
  if (!isOpen) return null;

  const renderShopMenu = () => (
    <div className="grid grid-cols-5 gap-8">
      {/* Featured Section with Image */}
      <div className="col-span-1">
        <div className="space-y-4">
          <div className="bg-muted rounded-lg overflow-hidden aspect-[3/4] mb-4">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              Featured Image
            </div>
          </div>
          <Link
            href="/featured"
            className="block text-center blinker-semibold text-sm hover:text-primary transition-colors"
          >
            Shop All Featured
          </Link>
        </div>
      </div>

      {/* Shop by Category */}
      <div>
        <h3 className="blinker-bold text-sm mb-4 text-primary uppercase">
          Shop by Category
        </h3>
        <ul className="space-y-3">
          <li>
            <Link
              href="/shop/tops"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Tops
            </Link>
          </li>
          <li>
            <Link
              href="/shop/bottoms"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Pants & Leggings
            </Link>
          </li>
          <li>
            <Link
              href="/shop/shoes"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Shoes
            </Link>
          </li>
          <li>
            <Link
              href="/shop/innerwear"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Innerwear
            </Link>
          </li>
          <li>
            <Link
              href="/shop/hoodies"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Hoodies & Sweatshirts
            </Link>
          </li>
          <li>
            <Link
              href="/shop/jackets"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Jackets & Vests
            </Link>
          </li>
          <li>
            <Link
              href="/shop/shorts"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Shorts
            </Link>
          </li>
        </ul>
      </div>

      {/* Shop by Sport */}
      <div>
        <h3 className="blinker-bold text-sm mb-4 text-primary uppercase">
          Shop by Sport
        </h3>
        <ul className="space-y-3">
          <li>
            <Link
              href="/sport/running"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Running
            </Link>
          </li>
          <li>
            <Link
              href="/sport/training"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Training
            </Link>
          </li>
          <li>
            <Link
              href="/sport/golf"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Golf
            </Link>
          </li>
          <li>
            <Link
              href="/sport/basketball"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Basketball
            </Link>
          </li>
          <li>
            <Link
              href="/sport/yoga"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Yoga
            </Link>
          </li>
          <li>
            <Link
              href="/sport/hiking"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Hiking
            </Link>
          </li>
          <li>
            <Link
              href="/sport/cycling"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Cycling
            </Link>
          </li>
        </ul>
      </div>

      {/* Shop by Collection */}
      <div>
        <h3 className="blinker-bold text-sm mb-4 text-primary uppercase">
          Shop by Collection
        </h3>
        <ul className="space-y-3">
          <li>
            <Link
              href="/collection/premium"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Premium Collection
            </Link>
          </li>
          <li>
            <Link
              href="/collection/athletic"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Athletic Series
            </Link>
          </li>
          <li>
            <Link
              href="/collection/lifestyle"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Lifestyle
            </Link>
          </li>
          <li>
            <Link
              href="/collection/performance"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Performance Pro
            </Link>
          </li>
          <li>
            <Link
              href="/collection/essentials"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Essentials
            </Link>
          </li>
          <li>
            <Link
              href="/collection/limited"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Limited Edition
            </Link>
          </li>
        </ul>
      </div>

      {/* Accessories */}
      <div>
        <h3 className="blinker-bold text-sm mb-4 text-primary uppercase">
          Accessories
        </h3>
        <ul className="space-y-3">
          <li>
            <Link
              href="/accessories/bags"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Bags & Backpacks
            </Link>
          </li>
          <li>
            <Link
              href="/accessories/hats"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Hats & Caps
            </Link>
          </li>
          <li>
            <Link
              href="/accessories/socks"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Socks
            </Link>
          </li>
          <li>
            <Link
              href="/accessories/gloves"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Gloves
            </Link>
          </li>
          <li>
            <Link
              href="/accessories/belts"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Belts
            </Link>
          </li>
          <li>
            <Link
              href="/accessories/water-bottles"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Water Bottles
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  const renderMensMenu = () => (
    <div className="grid grid-cols-4 gap-8">
      <div>
        <h3 className="blinker-bold text-sm mb-4 text-primary uppercase">
          Clothing
        </h3>
        <ul className="space-y-3">
          <li>
            <Link
              href="/mens/t-shirts"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              T-Shirts
            </Link>
          </li>
          <li>
            <Link
              href="/mens/hoodies"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Hoodies
            </Link>
          </li>
          <li>
            <Link
              href="/mens/jackets"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Jackets
            </Link>
          </li>
          <li>
            <Link
              href="/mens/pants"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Pants
            </Link>
          </li>
          <li>
            <Link
              href="/mens/shorts"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Shorts
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="blinker-bold text-sm mb-4 text-primary uppercase">
          Footwear
        </h3>
        <ul className="space-y-3">
          <li>
            <Link
              href="/mens/sneakers"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Sneakers
            </Link>
          </li>
          <li>
            <Link
              href="/mens/running-shoes"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Running Shoes
            </Link>
          </li>
          <li>
            <Link
              href="/mens/training-shoes"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Training Shoes
            </Link>
          </li>
          <li>
            <Link
              href="/mens/sandals"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Sandals & Slides
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="blinker-bold text-sm mb-4 text-primary uppercase">
          Featured
        </h3>
        <ul className="space-y-3">
          <li>
            <Link
              href="/mens/new-arrivals"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              New Arrivals
            </Link>
          </li>
          <li>
            <Link
              href="/mens/bestsellers"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Best Sellers
            </Link>
          </li>
          <li>
            <Link
              href="/mens/sale"
              className="blinker-regular text-sm text-destructive hover:text-destructive/80 transition-colors"
            >
              Sale
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-muted rounded-lg p-6 flex flex-col justify-center items-center">
        <p className="blinker-bold text-center mb-2">Men&apos;s Collection</p>
        <p className="text-sm text-muted-foreground text-center mb-4">
          Discover our latest styles
        </p>
        <Link
          href="/mens"
          className="bg-primary hover:bg-primary-hover transition-colors blinker-semibold px-6 py-2 rounded-md text-sm"
        >
          Shop All
        </Link>
      </div>
    </div>
  );

  const renderWomensMenu = () => (
    <div className="grid grid-cols-4 gap-8">
      <div>
        <h3 className="blinker-bold text-sm mb-4 text-primary uppercase">
          Clothing
        </h3>
        <ul className="space-y-3">
          <li>
            <Link
              href="/womens/tops"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Tops & Tees
            </Link>
          </li>
          <li>
            <Link
              href="/womens/sports-bras"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Sports Bras
            </Link>
          </li>
          <li>
            <Link
              href="/womens/hoodies"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Hoodies
            </Link>
          </li>
          <li>
            <Link
              href="/womens/leggings"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Leggings
            </Link>
          </li>
          <li>
            <Link
              href="/womens/shorts"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Shorts
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="blinker-bold text-sm mb-4 text-primary uppercase">
          Footwear
        </h3>
        <ul className="space-y-3">
          <li>
            <Link
              href="/womens/sneakers"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Sneakers
            </Link>
          </li>
          <li>
            <Link
              href="/womens/running-shoes"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Running Shoes
            </Link>
          </li>
          <li>
            <Link
              href="/womens/training-shoes"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Training Shoes
            </Link>
          </li>
          <li>
            <Link
              href="/womens/sandals"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Sandals
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="blinker-bold text-sm mb-4 text-primary uppercase">
          Featured
        </h3>
        <ul className="space-y-3">
          <li>
            <Link
              href="/womens/new-arrivals"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              New Arrivals
            </Link>
          </li>
          <li>
            <Link
              href="/womens/bestsellers"
              className="blinker-regular text-sm hover:text-primary transition-colors"
            >
              Best Sellers
            </Link>
          </li>
          <li>
            <Link
              href="/womens/sale"
              className="blinker-regular text-sm text-destructive hover:text-destructive/80 transition-colors"
            >
              Sale
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-muted rounded-lg p-6 flex flex-col justify-center items-center">
        <p className="blinker-bold text-center mb-2">Women&apos;s Collection</p>
        <p className="text-sm text-muted-foreground text-center mb-4">
          Explore the latest trends
        </p>
        <Link
          href="/womens"
          className="bg-primary hover:bg-primary-hover transition-colors blinker-semibold px-6 py-2 rounded-md text-sm"
        >
          Shop All
        </Link>
      </div>
    </div>
  );

  const menus = {
    shop: renderShopMenu(),
    mens: renderMensMenu(),
    womens: renderWomensMenu(),
    accessories: renderShopMenu(),
    collections: renderShopMenu(),
  };

  return (
    <div className="absolute left-0 right-0 top-full bg-card border-b border-border shadow-xl z-40">
      <div className="container mx-auto px-4 py-8">{menus[menuType]}</div>
    </div>
  );
}
