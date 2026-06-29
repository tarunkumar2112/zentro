import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NewsletterSection } from "@/components/newsletter-section";
import { Leaf, Recycle, Heart, Globe } from "lucide-react";

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-primary blinker-semibold text-sm uppercase tracking-wider mb-4">
            OUR COMMITMENT
          </p>
          <h1 className="font-heading text-5xl lg:text-7xl mb-6">
            Sustainability at ZENTRO
          </h1>
          <p className="blinker-regular text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a better future through responsible practices and sustainable
            innovation
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading text-3xl lg:text-5xl mb-8">Our Mission</h2>
          <p className="blinker-regular text-xl text-muted-foreground leading-relaxed">
            At ZENTRO, we believe that creating high-performance apparel shouldn't
            come at the cost of our planet. We're committed to reducing our
            environmental impact while delivering products that empower athletes
            and individuals to perform at their best.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            Our Sustainability Pillars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "Sustainable Materials",
                description:
                  "70% of our products use recycled, organic, or sustainably sourced materials",
              },
              {
                icon: Recycle,
                title: "Circular Economy",
                description:
                  "Take-back programs and recycling initiatives to extend product lifecycle",
              },
              {
                icon: Heart,
                title: "Ethical Production",
                description:
                  "Fair wages, safe conditions, and transparency across our supply chain",
              },
              {
                icon: Globe,
                title: "Carbon Neutral",
                description:
                  "Committed to carbon neutrality by 2028 through reduction and offset programs",
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="blinker-bold text-xl mb-4">{pillar.title}</h3>
                <p className="blinker-regular text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            What We're Doing
          </h2>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
              <h3 className="blinker-bold text-2xl mb-4">
                Sustainable Materials Program
              </h3>
              <p className="blinker-regular text-muted-foreground leading-relaxed mb-4">
                We've partnered with leading material scientists to develop
                innovative, eco-friendly fabrics that don't compromise on
                performance. Our materials include:
              </p>
              <ul className="space-y-3 blinker-regular text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>
                    <strong>Recycled Polyester:</strong> Made from post-consumer
                    plastic bottles, reducing waste and energy consumption
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>
                    <strong>Organic Cotton:</strong> Grown without harmful
                    pesticides, using 91% less water than conventional cotton
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>
                    <strong>Tencel Lyocell:</strong> Biodegradable fabric made from
                    sustainably harvested wood pulp
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
              <h3 className="blinker-bold text-2xl mb-4">
                ZENTRO Recycling Program
              </h3>
              <p className="blinker-regular text-muted-foreground leading-relaxed">
                Send us your worn-out ZENTRO products (from any season, any
                condition) and we'll recycle them responsibly. As a thank you,
                you'll receive 15% off your next purchase. We've already diverted
                over 50,000 items from landfills through this program.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
              <h3 className="blinker-bold text-2xl mb-4">
                Carbon Offset & Reduction
              </h3>
              <p className="blinker-regular text-muted-foreground leading-relaxed">
                We're committed to achieving carbon neutrality by 2028. We've
                already reduced our carbon footprint by 35% through renewable
                energy in our facilities, optimized logistics, and sustainable
                packaging. For emissions we can't eliminate yet, we invest in
                verified carbon offset projects focused on reforestation and
                renewable energy.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
              <h3 className="blinker-bold text-2xl mb-4">Ethical Manufacturing</h3>
              <p className="blinker-regular text-muted-foreground leading-relaxed">
                Every ZENTRO factory is audited annually for fair labor practices,
                safe working conditions, and environmental compliance. We work only
                with certified facilities that share our values and provide fair
                wages, reasonable hours, and safe environments for all workers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            Our Progress
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stat: "70%",
                label: "Sustainable Materials",
                description: "Products made with eco-friendly fabrics",
              },
              {
                stat: "35%",
                label: "Carbon Reduction",
                description: "Since 2020 baseline",
              },
              {
                stat: "50K+",
                label: "Items Recycled",
                description: "Through our take-back program",
              },
              {
                stat: "100%",
                label: "Renewable Energy",
                description: "At our owned facilities",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-2xl p-8 text-center"
              >
                <p className="font-heading text-5xl text-primary mb-3">
                  {item.stat}
                </p>
                <h3 className="blinker-bold text-lg mb-2">{item.label}</h3>
                <p className="blinker-regular text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            Our 2030 Goals
          </h2>

          <div className="space-y-6">
            {[
              {
                year: "2026",
                goal: "Achieve 85% sustainable materials across all products",
              },
              {
                year: "2027",
                goal: "Eliminate single-use plastics in all packaging",
              },
              {
                year: "2028",
                goal: "Reach carbon neutrality across operations and supply chain",
              },
              {
                year: "2030",
                goal: "100% circular products with full recyclability",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6 bg-card border border-border rounded-xl p-6"
              >
                <div className="bg-primary/10 px-4 py-2 rounded-lg flex-shrink-0">
                  <p className="font-heading text-2xl text-primary">{item.year}</p>
                </div>
                <p className="blinker-regular text-lg pt-2">{item.goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <Footer />
    </div>
  );
}
