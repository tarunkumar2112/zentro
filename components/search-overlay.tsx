"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, TrendingUp } from "lucide-react";
import Link from "next/link";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const trendingSearches = [
    "Hoodies",
    "Summer Collection",
    "Sneakers",
    "Accessories",
    "Sale Items",
  ];

  const recentSearches = ["Black T-Shirt", "Running Shoes", "Denim Jacket"];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "unset";
      setSearchQuery("");
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 py-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, brands, or categories..."
              className="w-full bg-card border-2 border-border focus:border-primary rounded-lg py-4 pl-14 pr-4 text-lg blinker-regular placeholder:text-muted-foreground focus:outline-none transition-colors"
            />
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-card rounded-lg transition-colors"
            aria-label="Close search"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search Content */}
        <div className="flex-1 overflow-y-auto">
          {searchQuery === "" ? (
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {/* Trending Searches */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="blinker-semibold text-lg">Trending Now</h3>
                </div>
                <div className="space-y-2">
                  {trendingSearches.map((search) => (
                    <button
                      key={search}
                      onClick={() => setSearchQuery(search)}
                      className="block w-full text-left px-4 py-3 rounded-lg hover:bg-card transition-colors blinker-regular"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Searches */}
              <div>
                <h3 className="blinker-semibold text-lg mb-4">
                  Recent Searches
                </h3>
                <div className="space-y-2">
                  {recentSearches.map((search) => (
                    <button
                      key={search}
                      onClick={() => setSearchQuery(search)}
                      className="block w-full text-left px-4 py-3 rounded-lg hover:bg-card transition-colors blinker-regular text-muted-foreground"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl">
              <p className="blinker-regular text-muted-foreground mb-4">
                Searching for &quot;{searchQuery}&quot;...
              </p>
              {/* Search Results - Connect to your search logic */}
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Link
                    href={`/product/${i}`}
                    key={i}
                    onClick={onClose}
                    className="flex gap-4 p-4 rounded-lg hover:bg-card transition-colors"
                  >
                    <div className="w-20 h-20 bg-muted rounded-md flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="blinker-semibold text-lg mb-1">
                        Sample Product {i}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Product description goes here
                      </p>
                      <p className="blinker-bold text-primary">$49.99</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground text-center blinker-regular">
            Press <kbd className="px-2 py-1 bg-card rounded text-xs">ESC</kbd>{" "}
            to close
          </p>
        </div>
      </div>
    </div>
  );
}
