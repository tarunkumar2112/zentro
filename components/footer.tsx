"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo variant="gradient" size="lg" className="mb-4" />
            <p className="blinker-regular text-muted-foreground mb-6 max-w-sm">
              Your destination for premium fashion and lifestyle products.
              Quality meets style at ZENTRO.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-md transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-md transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-md transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-md transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="blinker-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/shop/new-arrivals"
                  className="blinker-regular text-muted-foreground hover:text-primary transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/mens"
                  className="blinker-regular text-muted-foreground hover:text-primary transition-colors"
                >
                  Men&apos;s
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/womens"
                  className="blinker-regular text-muted-foreground hover:text-primary transition-colors"
                >
                  Women&apos;s
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/accessories"
                  className="blinker-regular text-muted-foreground hover:text-primary transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/sale"
                  className="blinker-regular text-destructive hover:text-destructive/80 transition-colors"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="blinker-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="blinker-regular text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="blinker-regular text-muted-foreground hover:text-primary transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="blinker-regular text-muted-foreground hover:text-primary transition-colors"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="blinker-regular text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="blinker-regular text-muted-foreground hover:text-primary transition-colors"
                >
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="blinker-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="blinker-regular text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="blinker-regular text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="blinker-regular text-muted-foreground hover:text-primary transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="blinker-regular text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="blinker-regular text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand Statement Section */}
        <div className="border-t border-border py-16">
          <div className="text-center">
            <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent cursor-pointer transition-all duration-500 hover:scale-110 hover:tracking-wider inline-block">
              ZENTRO
            </h2>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="blinker-regular">
                123 Fashion Street, NY 10001
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="blinker-regular">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="blinker-regular">support@zentro.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="blinker-regular text-sm text-muted-foreground">
              © {currentYear} ZENTRO. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="blinker-regular text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="blinker-regular text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/cookies"
                className="blinker-regular text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
