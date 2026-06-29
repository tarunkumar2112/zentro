import Link from "next/link";

interface LogoProps {
  variant?: "default" | "gradient" | "glow";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Logo({ variant = "default", size = "md", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl md:text-5xl",
  };

  const variantClasses = {
    default: "text-foreground",
    gradient: "bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent",
    glow: "text-primary drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]",
  };

  return (
    <Link href="/" className="inline-block">
      <h1
        className={`font-heading ${sizeClasses[size]} ${variantClasses[variant]} transition-transform hover:scale-105 ${className}`}
      >
        ZENTRO
      </h1>
    </Link>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className="inline-block">
      <span
        className={`font-heading text-3xl text-primary transition-transform hover:scale-110 ${className}`}
      >
        Z
      </span>
    </Link>
  );
}
