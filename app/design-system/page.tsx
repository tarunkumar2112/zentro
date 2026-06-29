import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ColorShowcase } from "@/components/color-showcase";
import { FontExamples } from "@/components/font-examples";
import { BrandQuickReference } from "@/components/brand-quick-reference";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 max-w-7xl mx-auto py-12 px-4 w-full">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <h1 className="font-heading text-6xl md:text-8xl">Zudio</h1>
          <p className="blinker-regular text-xl text-muted-foreground">
            Design System Preview
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <a
              href="#colors"
              className="blinker-semibold text-sm px-4 py-2 rounded-md border border-border hover:bg-card transition-colors"
            >
              Colors
            </a>
            <a
              href="#fonts"
              className="blinker-semibold text-sm px-4 py-2 rounded-md border border-border hover:bg-card transition-colors"
            >
              Fonts
            </a>
            <a
              href="#examples"
              className="blinker-semibold text-sm px-4 py-2 rounded-md bg-primary hover:bg-primary-hover transition-colors"
            >
              Examples
            </a>
          </div>
        </div>

        {/* Quick Reference */}
        <div id="examples" className="mb-16">
          <BrandQuickReference />
        </div>

        {/* Divider */}
        <div className="border-t border-border my-16"></div>

        {/* Color Showcase */}
        <div id="colors" className="mb-16">
          <ColorShowcase />
        </div>

        {/* Divider */}
        <div className="border-t border-border my-16"></div>

        {/* Font Examples */}
        <div id="fonts">
          <FontExamples />
        </div>
      </div>
      <Footer />
    </div>
  );
}
