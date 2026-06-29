import Image from "next/image";
import Link from "next/link";

export function LifestyleBanner() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        <Image
          src="/homepage/lifestyle-bg.png"
          alt="ZENTRO Lifestyle Background"
          fill
          sizes="100vw"
          className="object-cover opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-2xl">
          {/* Label */}
          <p className="text-primary blinker-semibold text-sm uppercase tracking-wider mb-4">
            LIVE IN MOTION
          </p>

          {/* Main Heading */}
          <h2 className="font-heading text-5xl lg:text-7xl xl:text-8xl mb-6 leading-tight">
            MOVE FREELY.
            <br />
            <span className="text-primary">DRESS FEARLESSLY.</span>
          </h2>

          {/* Description */}
          <div className="space-y-2 mb-8 text-lg">
            <p className="blinker-regular text-white/90">
              High-performance comfort.
            </p>
            <p className="blinker-regular text-white/90">
              Street-ready style.
            </p>
            <p className="blinker-regular text-white/90">
              Designed for wherever life takes you.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/collection/lifestyle"
            className="inline-flex items-center gap-2 border-2 border-primary bg-transparent hover:bg-primary text-primary hover:text-primary-foreground transition-all blinker-bold px-8 py-4 rounded-md text-lg group"
          >
            EXPLORE COLLECTION
            <svg
              className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Features Icons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <p className="blinker-bold text-sm text-white">PERFORMANCE</p>
              <p className="blinker-regular text-xs text-white/70">FABRICS</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="blinker-bold text-sm text-white">PREMIUM</p>
              <p className="blinker-regular text-xs text-white/70">QUALITY</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="blinker-bold text-sm text-white">WORLDWIDE</p>
              <p className="blinker-regular text-xs text-white/70">SHIPPING</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <div>
              <p className="blinker-bold text-sm text-white">EASY</p>
              <p className="blinker-regular text-xs text-white/70">RETURNS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
