import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Hero Card */}
        <div className="relative group overflow-hidden aspect-square bg-muted">
          {/* Left Hero Image */}
          <Image
            src="/homepage/hero/left-hero.png"
            alt="ZENTRO Performance Sneakers"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
            priority
          />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-8 lg:p-12 z-10">
              <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <p className="text-xs lg:text-sm blinker-semibold text-primary mb-2 uppercase tracking-wider">
                  New Collection
                </p>
                <h2 className="font-heading text-3xl lg:text-5xl mb-4 leading-tight">
                  Performance
                  <br />
                  Meets Style
                </h2>
                <p className="blinker-regular text-muted-foreground mb-6 max-w-md">
                  Discover our latest athletic collection designed for peak
                  performance and ultimate comfort.
                </p>
                <Link
                  href="/collection/performance"
                  className="inline-block bg-primary hover:bg-primary-hover transition-all blinker-bold px-8 py-4 rounded-md shadow-lg shadow-primary/20 hover:shadow-primary-hover/40 hover:scale-105"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none z-[5]"></div>
          </div>

          {/* Right Hero Card */}
          <div className="relative group overflow-hidden aspect-square bg-muted">
            {/* Right Hero Image */}
            <Image
              src="/homepage/hero/right-hero.png"
              alt="ZENTRO Collection Models"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
              priority
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-8 lg:p-12 z-10">
              <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <p className="text-xs lg:text-sm blinker-semibold text-destructive mb-2 uppercase tracking-wider">
                  Limited Edition
                </p>
                <h2 className="font-heading text-3xl lg:text-5xl mb-4 leading-tight">
                  Raise
                  <br />
                  Your Game
                </h2>
                <p className="blinker-regular text-muted-foreground mb-6 max-w-md">
                  Exclusive collaboration bringing bold designs and premium
                  quality to athletes worldwide.
                </p>
                <Link
                  href="/collection/limited"
                  className="inline-block border-2 border-foreground hover:bg-foreground hover:text-background transition-all blinker-bold px-8 py-4 rounded-md hover:scale-105"
                >
                  Explore Collection
                </Link>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-destructive/0 group-hover:bg-destructive/10 transition-colors duration-700 pointer-events-none z-[5]"></div>
          </div>
        </div>
    </section>
  );
}
