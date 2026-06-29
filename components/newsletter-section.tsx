"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import Image from "next/image";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="relative w-full bg-card border-t border-border overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Newsletter Content */}
        <div className="flex items-center py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-xl">
            <div className="mb-6">
              <Mail className="w-12 h-12 text-primary mb-4" />
              <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl mb-4">
                Join Our Newsletter
              </h2>
              <p className="blinker-regular text-lg text-muted-foreground">
                Get 10% off your first order and stay updated on exclusive
                drops, new arrivals, and special offers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 bg-background border-2 border-border focus:border-primary rounded-md px-6 py-4 blinker-regular text-lg focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-hover transition-all blinker-bold px-8 py-4 rounded-md shadow-lg shadow-primary/20 hover:shadow-primary-hover/40 hover:scale-105 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground blinker-regular">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </form>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="blinker-bold text-primary">10% Off</p>
                <p className="text-sm text-muted-foreground blinker-regular">
                  First Order
                </p>
              </div>
              <div className="space-y-1">
                <p className="blinker-bold text-primary">Exclusive Access</p>
                <p className="text-sm text-muted-foreground blinker-regular">
                  New Drops
                </p>
              </div>
              <div className="space-y-1">
                <p className="blinker-bold text-primary">Early Sale</p>
                <p className="text-sm text-muted-foreground blinker-regular">
                  Access
                </p>
              </div>
              <div className="space-y-1">
                <p className="blinker-bold text-primary">Style Tips</p>
                <p className="text-sm text-muted-foreground blinker-regular">
                  Weekly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative aspect-square lg:aspect-auto lg:h-full bg-muted min-h-[400px] lg:min-h-[600px]">
          <Image
            src="/homepage/newsletter/right-image.png"
            alt="ZENTRO Team Collection"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="eager"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
