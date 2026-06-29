import {
  Zap,
  Shield,
  Truck,
  RefreshCw,
  Award,
  Users,
  Leaf,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Performance Fabrics",
    description:
      "Advanced moisture-wicking and breathable materials designed for peak performance and all-day comfort.",
  },
  {
    icon: Shield,
    title: "Premium Quality",
    description:
      "Rigorously tested materials and construction. Every piece is built to last through countless workouts and washes.",
  },
  {
    icon: Truck,
    title: "Fast & Free Shipping",
    description:
      "Free worldwide shipping on orders over $50. Express delivery available. Track your order every step of the way.",
  },
  {
    icon: RefreshCw,
    title: "Easy 30-Day Returns",
    description:
      "Not satisfied? Return any item within 30 days for a full refund. No questions asked, hassle-free process.",
  },
  {
    icon: Award,
    title: "Athlete Approved",
    description:
      "Designed and tested by professional athletes. Performance-driven designs that meet the demands of champions.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Join thousands of athletes worldwide. Share your journey, get inspired, and connect with like-minded individuals.",
  },
  {
    icon: Leaf,
    title: "Sustainable Materials",
    description:
      "Committed to reducing our environmental impact. Using recycled and eco-friendly materials whenever possible.",
  },
  {
    icon: Heart,
    title: "Designed for You",
    description:
      "Every product is crafted with you in mind. From sizing to style, we prioritize your comfort and confidence.",
  },
];

export function WhyZentroSection() {
  return (
    <section className="py-20 lg:py-28 bg-black relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-hover/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary blinker-semibold text-sm uppercase tracking-wider mb-4">
            WHY ZENTRO
          </p>
          <h2 className="font-heading text-4xl lg:text-6xl xl:text-7xl text-white mb-6">
            Performance Meets
            <br />
            <span className="text-primary">Excellence</span>
          </h2>
          <p className="blinker-regular text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
            We&apos;re not just about athletic wear. We&apos;re about pushing
            boundaries, breaking limits, and empowering you to be your best
            self—on and off the field.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 h-full transition-all duration-500 hover:bg-white/10 hover:border-primary/30 hover:transform hover:scale-105">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="blinker-bold text-lg lg:text-xl text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="blinker-regular text-sm lg:text-base text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-2xl transition-all duration-500 -z-10 blur-xl"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover transition-all blinker-bold px-8 py-4 rounded-md text-lg shadow-lg shadow-primary/20 hover:shadow-primary-hover/40 group"
            >
              Learn More About Us
              <span className="transform transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/shop"
              className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-primary hover:bg-primary/10 transition-all blinker-semibold px-8 py-4 rounded-md text-lg text-white"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
