import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NewsletterSection } from "@/components/newsletter-section";
import Image from "next/image";
import { Target, Zap, Heart, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black">
          <Image
            src="/homepage/lifestyle-bg.png"
            alt="ZENTRO About Background"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-primary blinker-semibold text-sm uppercase tracking-wider mb-4">
              ABOUT US
            </p>
            <h1 className="font-heading text-5xl lg:text-7xl mb-6 text-white">
              Welcome to ZENTRO
            </h1>
            <p className="blinker-regular text-xl lg:text-2xl text-white/90 leading-relaxed">
              Where performance meets style. We're not just another fashion brand
              — we're a movement dedicated to empowering athletes, creators, and
              dreamers to push beyond their limits.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl lg:text-6xl mb-6">
                Our Mission
              </h2>
              <p className="blinker-regular text-lg text-muted-foreground mb-6 leading-relaxed">
                At ZENTRO, we believe that everyone deserves to look and feel
                their best while pursuing their passions. Our mission is to
                create premium, high-performance apparel that seamlessly blends
                cutting-edge technology with contemporary design.
              </p>
              <p className="blinker-regular text-lg text-muted-foreground leading-relaxed">
                From the gym to the streets, from the office to the outdoors,
                ZENTRO is designed for the modern individual who refuses to
                compromise on quality, comfort, or style.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: "Precision",
                  description: "Every detail matters in our designs",
                },
                {
                  icon: Zap,
                  title: "Performance",
                  description: "Built for those who push limits",
                },
                {
                  icon: Heart,
                  title: "Passion",
                  description: "Crafted with love and dedication",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "Uncompromising quality standards",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card transition-colors"
                >
                  <value.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="blinker-bold text-xl mb-2">{value.title}</h3>
                  <p className="blinker-regular text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading text-4xl lg:text-6xl mb-8">Our Story</h2>
          <p className="blinker-regular text-lg text-muted-foreground mb-6 leading-relaxed">
            Founded in 2024, ZENTRO emerged from a simple observation: the modern
            athlete needed more than just performance gear. They needed apparel
            that could transition seamlessly from training sessions to social
            gatherings, from intense workouts to casual weekends.
          </p>
          <p className="blinker-regular text-lg text-muted-foreground mb-6 leading-relaxed">
            Our founders, passionate athletes and designers themselves,
            envisioned a brand that would bridge the gap between technical
            sportswear and contemporary fashion. Thus, ZENTRO was born — a brand
            that celebrates the intersection of functionality and aesthetics.
          </p>
          <p className="blinker-regular text-lg text-muted-foreground leading-relaxed">
            Today, ZENTRO is trusted by thousands of athletes, fitness
            enthusiasts, and style-conscious individuals around the world. We
            continue to innovate, pushing the boundaries of what activewear can
            be.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-6xl mb-4">
              What We Stand For
            </h2>
            <p className="blinker-regular text-lg text-muted-foreground max-w-2xl mx-auto">
              Our values guide every decision we make, from design to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainability",
                description:
                  "We're committed to reducing our environmental impact through eco-friendly materials and ethical manufacturing practices.",
              },
              {
                title: "Innovation",
                description:
                  "We constantly explore new technologies and materials to create products that enhance your performance and comfort.",
              },
              {
                title: "Community",
                description:
                  "We believe in building a supportive community of individuals who inspire and motivate each other to achieve greatness.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8 hover:border-primary/50 transition-all"
              >
                <h3 className="blinker-bold text-2xl mb-4">{value.title}</h3>
                <p className="blinker-regular text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
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
