import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, AlertCircle } from "lucide-react";

async function ErrorContent({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      {params?.error ? (
        <p className="text-sm text-muted-foreground">
          Code error: {params.error}
        </p>
      ) : (
        <p className="text-sm text-muted-foreground">
          An unspecified error occurred.
        </p>
      )}
    </>
  );
}

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>;
}) {
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

      {/* Right Side - Error Message */}
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

          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-2xl">
            {/* Error Icon */}
            <div className="inline-flex p-6 bg-destructive/10 rounded-full mb-6">
              <AlertCircle className="w-16 h-16 text-destructive" />
            </div>

            {/* Header */}
            <Link href="/" className="inline-block mb-6">
              <h1 className="font-heading text-4xl lg:text-5xl bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                ZENTRO
              </h1>
            </Link>

            <h2 className="font-heading text-3xl lg:text-4xl mb-4">
              Oops! Something went wrong
            </h2>
            
            <div className="mb-8">
              <Suspense>
                <ErrorContent searchParams={searchParams} />
              </Suspense>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                href="/auth/login"
                className="w-full h-12 flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground blinker-bold text-base rounded-lg shadow-lg shadow-primary/20 transition-colors"
              >
                Try Signing In Again
              </Link>
              <Link
                href="/"
                className="w-full h-12 flex items-center justify-center border border-border hover:bg-card blinker-semibold rounded-lg transition-colors"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
