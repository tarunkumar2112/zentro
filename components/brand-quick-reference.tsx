/**
 * Brand Quick Reference
 * Quick copy-paste examples for developers
 */

export function BrandQuickReference() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl mb-2">Zudio Brand Quick Reference</h1>
        <p className="blinker-regular text-muted-foreground">
          Copy-paste examples for common patterns
        </p>
      </div>

      {/* Quick Examples Grid */}
      <div className="grid gap-8">
        
        {/* Hero Section */}
        <section className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="font-heading text-2xl">Hero Section</h2>
          <div className="bg-background rounded-md p-8 text-center space-y-4">
            <h1 className="font-heading text-5xl md:text-7xl">
              Zudio
            </h1>
            <p className="blinker-semibold text-xl text-muted-foreground">
              Performance Meets Style
            </p>
            <button className="bg-primary hover:bg-primary-hover transition-all blinker-bold px-8 py-4 rounded-md shadow-lg shadow-primary/20 hover:shadow-primary-hover/40">
              Shop Collection
            </button>
          </div>
          <pre className="bg-background p-4 rounded text-sm overflow-x-auto">
{`<section className="text-center py-20">
  <h1 className="font-heading text-7xl">Zudio</h1>
  <p className="blinker-semibold text-xl text-muted-foreground">
    Performance Meets Style
  </p>
  <button className="bg-primary hover:bg-primary-hover 
    transition-all blinker-bold px-8 py-4 rounded-md 
    shadow-lg shadow-primary/20">
    Shop Collection
  </button>
</section>`}
          </pre>
        </section>

        {/* Product Card */}
        <section className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="font-heading text-2xl">Product Card</h2>
          <div className="max-w-sm">
            <div className="bg-muted rounded-lg aspect-square mb-4 flex items-center justify-center">
              <span className="text-muted-foreground">Product Image</span>
            </div>
            <div className="space-y-2">
              <span className="bg-primary/20 text-primary border border-primary/30 blinker-semibold px-2 py-1 rounded text-xs">
                NEW
              </span>
              <h3 className="font-heading text-xl">Premium Hoodie</h3>
              <p className="blinker-regular text-sm text-muted-foreground">
                Comfortable cotton blend
              </p>
              <div className="flex items-center justify-between">
                <span className="blinker-bold text-2xl">$49.99</span>
                <button className="bg-primary hover:bg-primary-hover transition-colors blinker-semibold px-4 py-2 rounded-md text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <pre className="bg-background p-4 rounded text-sm overflow-x-auto">
{`<div className="bg-card rounded-lg p-4">
  <img src="..." className="rounded-lg mb-4" />
  <span className="bg-primary/20 text-primary 
    border border-primary/30 blinker-semibold 
    px-2 py-1 rounded text-xs">
    NEW
  </span>
  <h3 className="font-heading text-xl">Premium Hoodie</h3>
  <p className="blinker-regular text-sm text-muted-foreground">
    Comfortable cotton blend
  </p>
  <div className="flex items-center justify-between">
    <span className="blinker-bold text-2xl">$49.99</span>
    <button className="bg-primary hover:bg-primary-hover 
      transition-colors blinker-semibold px-4 py-2 rounded-md">
      Add to Cart
    </button>
  </div>
</div>`}
          </pre>
        </section>

        {/* Navigation Bar */}
        <section className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="font-heading text-2xl">Navigation Bar</h2>
          <div className="bg-background rounded-md p-4">
            <div className="flex items-center justify-between">
              <span className="font-heading text-2xl">Zudio</span>
              <nav className="flex gap-6">
                <a href="#" className="blinker-semibold hover:text-primary transition-colors">
                  Shop
                </a>
                <a href="#" className="blinker-semibold hover:text-primary transition-colors">
                  Collections
                </a>
                <a href="#" className="blinker-semibold hover:text-primary transition-colors">
                  About
                </a>
              </nav>
              <button className="bg-primary hover:bg-primary-hover transition-colors blinker-semibold px-4 py-2 rounded-md">
                Cart (0)
              </button>
            </div>
          </div>
          <pre className="bg-background p-4 rounded text-sm overflow-x-auto">
{`<nav className="flex items-center justify-between p-4">
  <span className="font-heading text-2xl">Zudio</span>
  <div className="flex gap-6">
    <a className="blinker-semibold hover:text-primary 
      transition-colors">Shop</a>
    <a className="blinker-semibold hover:text-primary 
      transition-colors">Collections</a>
  </div>
  <button className="bg-primary hover:bg-primary-hover 
    transition-colors blinker-semibold px-4 py-2 rounded-md">
    Cart (0)
  </button>
</nav>`}
          </pre>
        </section>

        {/* Status Badges */}
        <section className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="font-heading text-2xl">Status Badges</h2>
          <div className="flex gap-3 flex-wrap">
            <span className="bg-success/20 text-success border border-success/30 blinker-semibold px-3 py-1 rounded-full text-sm">
              In Stock
            </span>
            <span className="bg-warning/20 text-warning border border-warning/30 blinker-semibold px-3 py-1 rounded-full text-sm">
              Low Stock
            </span>
            <span className="bg-destructive/20 text-destructive border border-destructive/30 blinker-semibold px-3 py-1 rounded-full text-sm">
              Out of Stock
            </span>
            <span className="bg-primary/20 text-primary border border-primary/30 blinker-semibold px-3 py-1 rounded-full text-sm">
              New Arrival
            </span>
          </div>
          <pre className="bg-background p-4 rounded text-sm overflow-x-auto">
{`<span className="bg-success/20 text-success 
  border border-success/30 blinker-semibold 
  px-3 py-1 rounded-full text-sm">
  In Stock
</span>

<span className="bg-warning/20 text-warning 
  border border-warning/30 blinker-semibold 
  px-3 py-1 rounded-full text-sm">
  Low Stock
</span>

<span className="bg-destructive/20 text-destructive 
  border border-destructive/30 blinker-semibold 
  px-3 py-1 rounded-full text-sm">
  Out of Stock
</span>`}
          </pre>
        </section>

        {/* Featured Card with Glow */}
        <section className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="font-heading text-2xl">Featured Card (Glassmorphism)</h2>
          <div className="relative overflow-hidden rounded-xl p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-hover/20"></div>
            <div className="relative backdrop-blur-xl bg-card/50 border border-border/50 rounded-lg p-6 shadow-2xl shadow-primary/10">
              <span className="bg-primary/30 text-primary border border-primary/50 blinker-bold px-3 py-1 rounded-full text-xs uppercase">
                Featured
              </span>
              <h3 className="font-heading text-3xl mt-4 mb-2">
                Limited Edition
              </h3>
              <p className="blinker-regular text-muted-foreground mb-4">
                Exclusive collection with premium materials and craftsmanship.
              </p>
              <button className="bg-primary hover:bg-primary-hover transition-all blinker-bold px-6 py-3 rounded-md shadow-lg shadow-primary/30 hover:shadow-primary-hover/40 w-full">
                Explore Collection
              </button>
            </div>
          </div>
          <pre className="bg-background p-4 rounded text-sm overflow-x-auto">
{`<div className="relative overflow-hidden rounded-xl p-8">
  <div className="absolute inset-0 bg-gradient-to-br 
    from-primary/20 via-transparent to-primary-hover/20">
  </div>
  <div className="relative backdrop-blur-xl bg-card/50 
    border border-border/50 rounded-lg p-6 shadow-2xl">
    <span className="bg-primary/30 text-primary 
      border border-primary/50 blinker-bold 
      px-3 py-1 rounded-full text-xs">
      FEATURED
    </span>
    <h3 className="font-heading text-3xl">Limited Edition</h3>
    <p className="blinker-regular text-muted-foreground">
      Exclusive collection
    </p>
    <button className="bg-primary hover:bg-primary-hover 
      transition-all blinker-bold px-6 py-3 rounded-md 
      shadow-lg shadow-primary/30">
      Explore Collection
    </button>
  </div>
</div>`}
          </pre>
        </section>

      </div>
    </div>
  );
}
