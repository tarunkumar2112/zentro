"use client";

import { useEffect } from "react";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Sample cart items - connect to your state management
const sampleCartItems = [
  {
    id: 1,
    name: "Premium Hoodie",
    price: 79.99,
    quantity: 2,
    image: "",
    size: "L",
    color: "Black",
  },
  {
    id: 2,
    name: "Classic T-Shirt",
    price: 29.99,
    quantity: 1,
    image: "",
    size: "M",
    color: "White",
  },
];

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
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

  const subtotal = sampleCartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 10.0;
  const total = subtotal + shipping;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-primary" />
              <h2 className="font-heading text-2xl">Shopping Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Close cart"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {sampleCartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <p className="blinker-regular text-muted-foreground mb-4">
                  Your cart is empty
                </p>
                <button
                  onClick={onClose}
                  className="bg-primary hover:bg-primary-hover transition-colors blinker-semibold px-6 py-3 rounded-md"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {sampleCartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-background border border-border rounded-lg p-4"
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-muted rounded-md flex-shrink-0 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">
                          Image
                        </span>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="blinker-semibold text-lg mb-1 truncate">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.color} • Size {item.size}
                        </p>
                        <p className="blinker-bold text-primary text-lg">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      {/* Remove Button */}
                      <button
                        className="p-2 hover:bg-muted rounded-md transition-colors h-fit"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5 text-destructive" />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-muted-foreground blinker-regular">
                        Quantity
                      </span>
                      <div className="flex items-center gap-3">
                        <button className="p-1 hover:bg-muted rounded-md transition-colors">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="blinker-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button className="p-1 hover:bg-muted rounded-md transition-colors">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Totals & Checkout */}
          {sampleCartItems.length > 0 && (
            <div className="border-t border-border p-6 space-y-4">
              {/* Totals */}
              <div className="space-y-2">
                <div className="flex justify-between blinker-regular">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between blinker-regular">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between blinker-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Buttons */}
              <div className="space-y-3">
                <Link
                  href="/checkout"
                  onClick={onClose}
                  className="block w-full bg-primary hover:bg-primary-hover transition-colors blinker-bold py-4 rounded-md text-center shadow-lg shadow-primary/20"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={onClose}
                  className="w-full border border-border hover:bg-background transition-colors blinker-semibold py-3 rounded-md"
                >
                  Continue Shopping
                </button>
              </div>

              {/* Free Shipping Notice */}
              <p className="text-xs text-center text-muted-foreground blinker-regular">
                🚚 Free shipping on orders over $50
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
