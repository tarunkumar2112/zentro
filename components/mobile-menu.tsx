"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-card border-l border-border z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-heading text-2xl">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              <div>
                <h3 className="blinker-bold text-sm text-muted-foreground mb-3 uppercase">
                  Shop
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/shop/new-arrivals"
                      className="blinker-semibold text-lg hover:text-primary transition-colors block"
                      onClick={onClose}
                    >
                      New Arrivals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop/mens"
                      className="blinker-semibold text-lg hover:text-primary transition-colors block"
                      onClick={onClose}
                    >
                      Men&apos;s
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop/womens"
                      className="blinker-semibold text-lg hover:text-primary transition-colors block"
                      onClick={onClose}
                    >
                      Women&apos;s
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop/accessories"
                      className="blinker-semibold text-lg hover:text-primary transition-colors block"
                      onClick={onClose}
                    >
                      Accessories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop/sale"
                      className="blinker-semibold text-lg text-destructive hover:text-destructive/80 transition-colors block"
                      onClick={onClose}
                    >
                      Sale
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="blinker-bold text-sm text-muted-foreground mb-3 uppercase">
                  More
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/collections"
                      className="blinker-semibold text-lg hover:text-primary transition-colors block"
                      onClick={onClose}
                    >
                      Collections
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="blinker-semibold text-lg hover:text-primary transition-colors block"
                      onClick={onClose}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="blinker-semibold text-lg hover:text-primary transition-colors block"
                      onClick={onClose}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-border">
            <button className="w-full bg-primary hover:bg-primary-hover transition-colors blinker-bold py-3 rounded-md mb-3">
              Sign In
            </button>
            <button className="w-full border border-border hover:bg-card transition-colors blinker-semibold py-3 rounded-md">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
