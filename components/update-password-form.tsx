"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Lock, Home } from "lucide-react";
import Image from "next/image";

export function UpdatePasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });
      if (error) throw error;
      router.push("/auth/login");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("min-h-screen bg-background flex", className)} {...props}>
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

      {/* Right Side - Form */}
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
            {/* Header */}
            <div className="mb-8 text-center">
              <Link href="/" className="inline-block mb-6">
                <h1 className="font-heading text-4xl lg:text-5xl bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                  ZENTRO
                </h1>
              </Link>
              <h2 className="font-heading text-3xl lg:text-4xl mb-2">
                Update Password
              </h2>
              <p className="blinker-regular text-muted-foreground">
                Enter your new password below
              </p>
            </div>

            <form onSubmit={handleUpdatePassword}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="password" className="blinker-semibold">
                    New Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 bg-background border-border focus:border-primary blinker-regular"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="confirmPassword" className="blinker-semibold">
                    Confirm New Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-12 bg-background border-border focus:border-primary blinker-regular"
                  />
                </div>
                {error && (
                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-3">
                    <p className="text-sm text-destructive blinker-regular">{error}</p>
                  </div>
                )}
                <Button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary-hover blinker-bold text-base shadow-lg shadow-primary/20"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Updating...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Lock className="w-5 h-5" />
                      Update Password
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
