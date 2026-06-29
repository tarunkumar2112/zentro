import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CollectionCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  theme: "purple" | "blue" | "beige" | "gold";
}

const collections: CollectionCard[] = [
  {
    id: "performance",
    title: "PERFORMANCE",
    subtitle: "Built to Move",
    image: "/homepage/collections/performance.png",
    href: "/collection/performance",
    theme: "purple",
  },
  {
    id: "streetwear",
    title: "STREETWEAR",
    subtitle: "Everyday, Elevated",
    image: "/homepage/collections/streetwear.png",
    href: "/collection/streetwear",
    theme: "blue",
  },
  {
    id: "essentials",
    title: "ESSENTIALS",
    subtitle: "Timeless Everyday Wear",
    image: "/homepage/collections/essentials.png",
    href: "/collection/essentials",
    theme: "beige",
  },
  {
    id: "limited",
    title: "LIMITED EDITION",
    subtitle: "Exclusive Drops",
    image: "/homepage/collections/limited.png",
    href: "/collection/limited",
    theme: "gold",
  },
];

const themeColors = {
  purple: "from-primary/80 to-primary-hover/60",
  blue: "from-blue-600/80 to-blue-400/60",
  beige: "from-amber-900/80 to-amber-700/60",
  gold: "from-yellow-600/80 to-orange-500/60",
};

const buttonColors = {
  purple: "bg-primary hover:bg-primary-hover",
  blue: "bg-blue-600 hover:bg-blue-500",
  beige: "bg-amber-900 hover:bg-amber-800",
  gold: "bg-yellow-600 hover:bg-yellow-500",
};

export function CollectionsSection() {
  return (
    <section className="w-full bg-background pt-12 lg:pt-16">
      {/* Section Header */}
      <div className="container mx-auto px-4 pb-8 lg:pb-12">
        <h2 className="font-heading text-4xl lg:text-6xl">
          Shop by Collection
        </h2>
      </div>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={collection.href}
            className="group relative overflow-hidden aspect-[5/6] bg-muted"
          >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${themeColors[collection.theme]} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 lg:p-6">
                <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <h3 className="blinker-bold text-lg lg:text-xl mb-1 text-white uppercase tracking-wide">
                    {collection.title}
                  </h3>
                  <p className="blinker-regular text-sm lg:text-base text-white/90 mb-3">
                    {collection.subtitle}
                  </p>

                  {/* Arrow Button */}
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${buttonColors[collection.theme]} transition-all duration-300 group-hover:scale-110 shadow-lg`}
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-colors duration-500 pointer-events-none"></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
