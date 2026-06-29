import Image from "next/image";
import { Instagram } from "lucide-react";

const instagramPosts = [
  {
    id: 1,
    image: "/homepage/instagram/instagram-1.png",
    url: "https://instagram.com/zentro",
  },
  {
    id: 2,
    image: "/homepage/instagram/instagram-2.png",
    url: "https://instagram.com/zentro",
  },
  {
    id: 3,
    image: "/homepage/instagram/instagram-3.png",
    url: "https://instagram.com/zentro",
  },
  {
    id: 4,
    image: "/homepage/instagram/instagram-4.png",
    url: "https://instagram.com/zentro",
  },
  {
    id: 5,
    image: "/homepage/instagram/instagram-5.png",
    url: "https://instagram.com/zentro",
  },
  {
    id: 6,
    image: "/homepage/instagram/instagram-6.png",
    url: "https://instagram.com/zentro",
  },
];

export function InstagramSection() {
  return (
    <section className="w-full bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 max-w-7xl py-12 lg:py-16 text-center">
        <p className="text-primary blinker-semibold text-sm uppercase tracking-wider mb-4">
          FOLLOW US
        </p>
        <h2 className="font-heading text-4xl lg:text-6xl mb-4">
          @ZENTRO on Instagram
        </h2>
        <p className="blinker-regular text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Join our community and tag us to be featured
        </p>
        <a
          href="https://instagram.com/zentro"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-primary hover:from-pink-600 hover:via-purple-600 hover:to-primary-hover transition-all blinker-bold px-8 py-4 rounded-md shadow-lg"
        >
          <Instagram className="w-5 h-5" />
          Follow on Instagram
        </a>
      </div>

      {/* Instagram Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square group overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <Image
              src={post.image}
              alt={`ZENTRO Instagram Post ${post.id}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="transform scale-50 group-hover:scale-100 transition-transform duration-300">
                <Instagram className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 ring-2 ring-primary/0 group-hover:ring-primary/50 transition-all duration-300"></div>
          </a>
        ))}
      </div>
    </section>
  );
}
