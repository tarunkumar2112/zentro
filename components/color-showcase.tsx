/**
 * Color Showcase Component
 * Displays the Zudio brand color palette
 */

export function ColorShowcase() {
  return (
    <div className="space-y-8 p-8 bg-background text-foreground">
      {/* Brand Colors */}
      <section>
        <h2 className="font-heading text-3xl mb-6">Zudio Color Palette</h2>
        
        {/* Background Colors */}
        <div className="mb-8">
          <h3 className="blinker-semibold text-xl mb-4 text-muted-foreground">
            Surfaces
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="h-24 bg-background border border-border rounded-lg flex items-center justify-center">
                <span className="blinker-regular text-sm">Background</span>
              </div>
              <p className="blinker-regular text-sm text-muted-foreground">
                #09090B
              </p>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-card border border-border rounded-lg flex items-center justify-center">
                <span className="blinker-regular text-sm">Card</span>
              </div>
              <p className="blinker-regular text-sm text-muted-foreground">
                #18181B
              </p>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-muted border border-border rounded-lg flex items-center justify-center">
                <span className="blinker-regular text-sm">Muted</span>
              </div>
              <p className="blinker-regular text-sm text-muted-foreground">
                #27272A
              </p>
            </div>
          </div>
        </div>

        {/* Primary Colors */}
        <div className="mb-8">
          <h3 className="blinker-semibold text-xl mb-4 text-muted-foreground">
            Primary (Purple)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-24 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="blinker-semibold text-sm">Primary</span>
              </div>
              <p className="blinker-regular text-sm text-muted-foreground">
                #7C3AED
              </p>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-primary-hover rounded-lg flex items-center justify-center shadow-lg shadow-primary-hover/20">
                <span className="blinker-semibold text-sm">Primary Hover</span>
              </div>
              <p className="blinker-regular text-sm text-muted-foreground">
                #8B5CF6
              </p>
            </div>
          </div>
        </div>

        {/* Status Colors */}
        <div className="mb-8">
          <h3 className="blinker-semibold text-xl mb-4 text-muted-foreground">
            Status Colors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="h-24 bg-success rounded-lg flex items-center justify-center shadow-lg shadow-success/20">
                <span className="blinker-semibold text-sm">Success</span>
              </div>
              <p className="blinker-regular text-sm text-muted-foreground">
                #10B981
              </p>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-warning rounded-lg flex items-center justify-center shadow-lg shadow-warning/20">
                <span className="blinker-semibold text-sm text-black">
                  Warning
                </span>
              </div>
              <p className="blinker-regular text-sm text-muted-foreground">
                #F59E0B
              </p>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-destructive rounded-lg flex items-center justify-center shadow-lg shadow-destructive/20">
                <span className="blinker-semibold text-sm">Danger</span>
              </div>
              <p className="blinker-regular text-sm text-muted-foreground">
                #EF4444
              </p>
            </div>
          </div>
        </div>

        {/* Text Colors */}
        <div className="mb-8">
          <h3 className="blinker-semibold text-xl mb-4 text-muted-foreground">
            Typography
          </h3>
          <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
            <p className="blinker-regular text-foreground text-lg">
              Primary Text (#FAFAFA) - High contrast, main content
            </p>
            <p className="blinker-regular text-muted-foreground text-lg">
              Muted Text (#A1A1AA) - Secondary information, labels
            </p>
          </div>
        </div>
      </section>

      {/* Component Examples */}
      <section>
        <h3 className="font-heading text-2xl mb-6">Component Examples</h3>
        
        <div className="space-y-6">
          {/* Buttons */}
          <div className="space-y-4">
            <h4 className="blinker-semibold text-lg text-muted-foreground">
              Buttons
            </h4>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-primary hover:bg-primary-hover transition-colors blinker-semibold px-6 py-3 rounded-md shadow-lg shadow-primary/20">
                Primary Button
              </button>
              <button className="bg-card hover:bg-muted transition-colors border border-border blinker-semibold px-6 py-3 rounded-md">
                Secondary Button
              </button>
              <button className="bg-success hover:bg-success/90 transition-colors blinker-semibold px-6 py-3 rounded-md shadow-lg shadow-success/20">
                Success Button
              </button>
              <button className="bg-destructive hover:bg-destructive/90 transition-colors blinker-semibold px-6 py-3 rounded-md shadow-lg shadow-destructive/20">
                Delete Button
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            <h4 className="blinker-semibold text-lg text-muted-foreground">
              Cards
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                <h5 className="font-heading text-xl">Product Card</h5>
                <p className="blinker-regular text-muted-foreground">
                  This is a card with border and dark background
                </p>
                <button className="bg-primary hover:bg-primary-hover transition-colors blinker-semibold px-4 py-2 rounded-md w-full">
                  Add to Cart
                </button>
              </div>
              <div className="bg-card border border-primary/30 rounded-lg p-6 space-y-3 shadow-lg shadow-primary/10">
                <h5 className="font-heading text-xl text-primary">
                  Featured Card
                </h5>
                <p className="blinker-regular text-muted-foreground">
                  Card with purple glow and accent border
                </p>
                <button className="border border-primary hover:bg-primary transition-colors blinker-semibold px-4 py-2 rounded-md w-full">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="space-y-4">
            <h4 className="blinker-semibold text-lg text-muted-foreground">
              Badges & Tags
            </h4>
            <div className="flex gap-3 flex-wrap">
              <span className="bg-primary/20 text-primary border border-primary/30 blinker-semibold px-3 py-1 rounded-full text-sm">
                New Arrival
              </span>
              <span className="bg-success/20 text-success border border-success/30 blinker-semibold px-3 py-1 rounded-full text-sm">
                In Stock
              </span>
              <span className="bg-warning/20 text-warning border border-warning/30 blinker-semibold px-3 py-1 rounded-full text-sm">
                Limited
              </span>
              <span className="bg-destructive/20 text-destructive border border-destructive/30 blinker-semibold px-3 py-1 rounded-full text-sm">
                Sale
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Glassmorphism Example */}
      <section>
        <h3 className="font-heading text-2xl mb-6">Premium Effects</h3>
        <div className="relative overflow-hidden rounded-xl p-8 border border-border">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-hover/20"></div>
          
          {/* Glassmorphism card */}
          <div className="relative backdrop-blur-xl bg-card/50 border border-border/50 rounded-lg p-6 shadow-2xl">
            <h4 className="font-heading text-2xl mb-2">Glassmorphism Card</h4>
            <p className="blinker-regular text-muted-foreground mb-4">
              Subtle purple glows with glassmorphism accents create a premium,
              modern aesthetic perfect for highlighting featured products or
              hero sections.
            </p>
            <button className="bg-primary hover:bg-primary-hover transition-all blinker-bold px-6 py-3 rounded-md shadow-lg shadow-primary/30 hover:shadow-primary-hover/40">
              Explore Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
