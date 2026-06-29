import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { CollectionsSection } from "@/components/collections-section";
import { LoadingScreen } from "@/components/loading-screen";

// Lazy load below-the-fold sections
const NewArrivalsSection = dynamic(() => import("@/components/new-arrivals-section").then(mod => ({ default: mod.NewArrivalsSection })), {
  loading: () => <div className="h-96 bg-background" />,
});

const LifestyleBanner = dynamic(() => import("@/components/lifestyle-banner").then(mod => ({ default: mod.LifestyleBanner })), {
  loading: () => <div className="h-96 bg-background" />,
});

const BestsellerSection = dynamic(() => import("@/components/bestseller-section").then(mod => ({ default: mod.BestsellerSection })), {
  loading: () => <div className="h-96 bg-background" />,
});

const WhyZentroSection = dynamic(() => import("@/components/why-zentro-section").then(mod => ({ default: mod.WhyZentroSection })), {
  loading: () => <div className="h-96 bg-background" />,
});

const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="h-96 bg-background" />,
});

const InstagramSection = dynamic(() => import("@/components/instagram-section").then(mod => ({ default: mod.InstagramSection })), {
  loading: () => <div className="h-64 bg-background" />,
});

const NewsletterSection = dynamic(() => import("@/components/newsletter-section").then(mod => ({ default: mod.NewsletterSection })), {
  loading: () => <div className="h-96 bg-background" />,
});

export default function HomePage() {
  return (
    <>
      {/* Loading Screen - Only shows on first visit */}
      <LoadingScreen />
      
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        {/* Hero Section - Priority Load */}
        <HeroSection />
        
        {/* Collections Section - Priority Load */}
        <CollectionsSection />
        
        {/* Below-the-fold sections - Lazy loaded */}
        <NewArrivalsSection />
        <LifestyleBanner />
        <BestsellerSection />
        <WhyZentroSection />
        <TestimonialsSection />
        <InstagramSection />
        <NewsletterSection />

        <Footer />
      </div>
    </>
  );
}
