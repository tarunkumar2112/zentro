"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight, Home } from "lucide-react";
import Image from "next/image";

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Image (Desktop Only) */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/auth/auth.png"
          alt="ZENTRO"
          fill
          className="object-cover"
          sizes="50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
      </div>

      {/* Right Side - Success Message */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md">
          {/* Back to Home - Mobile Only */}
          <Link
            href="/"
            className="lg:hidden inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 blinker-regular text-sm"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-2xl text-center">
            {/* Success Icon */}
            <div className="inline-flex p-6 bg-primary/10 rounded-full mb-6">
              <CheckCircle className="w-16 h-16 text-primary" />
            </div>

            {/* Header */}
            <Link href="/" className="inline-block mb-6">
              <h1 className="font-heading text-4xl lg:text-5xl bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                ZENTRO
              </h1>
            </Link>

            <h2 className="font-heading text-3xl lg:text-4xl mb-4">
              Welcome to ZENTRO!
            </h2>
            <p className="blinker-regular text-muted-foreground mb-8">
              Your account has been successfully created. Check your email to verify
              your account and start shopping.
            </p>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                href="/auth/login"
                className="w-full h-12 flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground blinker-bold text-base rounded-lg shadow-lg shadow-primary/20 transition-colors"
              >
                Sign In to Your Account
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="w-full h-12 flex items-center justify-center border border-border hover:bg-card blinker-semibold rounded-lg transition-colors"
              >
                Back to Home
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="blinker-regular text-sm text-muted-foreground">
                Didn&apos;t receive the email?{" "}
                <button className="text-primary hover:text-primary-hover font-semibold underline-offset-4 hover:underline">
                  Resend verification email
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
