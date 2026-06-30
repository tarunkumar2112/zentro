"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { MarqueeBanner } from "./marquee-banner";
import { SearchOverlay } from "./search-overlay";
import { CartSidebar } from "./cart-sidebar";
import { MegaMenu } from "./mega-menu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const cartItemCount = 2;

  return (
    <header className="sticky top-0 z-30 bg-background border-b border-border">
      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 hover:bg-card rounded-md transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="lg:flex-shrink-0">
            <Logo variant="default" size="lg" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/shop/new-arrivals"
              className="blinker-semibold text-sm hover:text-primary transition-colors relative group py-2"
            >
              New Arrivals
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <button
              onMouseEnter={() => setActiveMegaMenu("mens")}
              onMouseLeave={() => setActiveMegaMenu(null)}
              className="blinker-semibold text-sm hover:text-primary transition-colors relative group py-2"
            >
              Men&apos;s
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  activeMegaMenu === "mens" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
            <button
              onMouseEnter={() => setActiveMegaMenu("womens")}
              onMouseLeave={() => setActiveMegaMenu(null)}
              className="blinker-semibold text-sm hover:text-primary transition-colors relative group py-2"
            >
              Women&apos;s
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  activeMegaMenu === "womens" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
            <button
              onMouseEnter={() => setActiveMegaMenu("accessories")}
              onMouseLeave={() => setActiveMegaMenu(null)}
              className="blinker-semibold text-sm hover:text-primary transition-colors relative group py-2"
            >
              Accessories
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  activeMegaMenu === "accessories" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
            <button
              onMouseEnter={() => setActiveMegaMenu("collections")}
              onMouseLeave={() => setActiveMegaMenu(null)}
              className="blinker-semibold text-sm hover:text-primary transition-colors relative group py-2"
            >
              Collections
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  activeMegaMenu === "collections" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
            <Link
              href="/shop/sale"
              className="blinker-bold text-sm text-destructive hover:text-destructive/80 transition-colors py-2"
            >
              Sale
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 hover:bg-card rounded-md transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account Button - Hidden on mobile */}
            <Link
              href="/dashboard"
              className="hidden lg:block p-2 hover:bg-card rounded-md transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 hover:bg-card rounded-md transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs blinker-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mega Menu - Desktop Only */}
        {activeMegaMenu && (
          <div
            onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
            onMouseLeave={() => setActiveMegaMenu(null)}
            className="hidden lg:block"
          >
            <MegaMenu
              isOpen={true}
              menuType={activeMegaMenu as "shop" | "mens" | "womens" | "accessories" | "collections"}
            />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}
