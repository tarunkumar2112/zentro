/**
 * Font Examples Component
 * This shows how to use the Zudio brand fonts
 */

export function FontExamples() {
  return (
    <div className="space-y-8 p-8">
      {/* Carter One - Headings */}
      <section>
        <h2 className="text-sm font-body text-muted-foreground mb-4">
          Carter One - Headings & Hero Text
        </h2>
        <div className="space-y-4">
          <h1 className="font-heading text-6xl">Zudio</h1>
          <h1 className="carter-one-regular text-5xl">
            Performance Meets Style
          </h1>
          <h2 className="font-heading text-4xl">Shop New Arrivals</h2>
          <h3 className="font-heading text-3xl">Featured Collection</h3>
        </div>
      </section>

      {/* Blinker - Body Text */}
      <section>
        <h2 className="text-sm font-body text-muted-foreground mb-4">
          Blinker - Paragraphs & Buttons
        </h2>
        <div className="space-y-4">
          <p className="blinker-thin text-lg">
            Thin (100) - Elegant and minimal text
          </p>
          <p className="blinker-extralight text-lg">
            Extra Light (200) - Very light body text
          </p>
          <p className="blinker-light text-lg">
            Light (300) - Light body text
          </p>
          <p className="blinker-regular text-lg">
            Regular (400) - Standard body text for descriptions
          </p>
          <p className="blinker-semibold text-lg">
            Semibold (600) - Emphasized text
          </p>
          <p className="blinker-bold text-lg">Bold (700) - Strong emphasis</p>
          <p className="blinker-extrabold text-lg">
            Extra Bold (800) - Very strong
          </p>
          <p className="blinker-black text-lg">Black (900) - Maximum impact</p>
        </div>
      </section>

      {/* Tailwind Classes */}
      <section>
        <h2 className="text-sm font-body text-muted-foreground mb-4">
          Using Tailwind Classes
        </h2>
        <div className="space-y-4">
          <p className="font-heading text-2xl">
            Using <code>font-heading</code> class
          </p>
          <p className="font-body text-lg">
            Using <code>font-body</code> class (default)
          </p>
          <p className="font-carter text-2xl">
            Using <code>font-carter</code> class
          </p>
          <p className="font-blinker text-lg font-semibold">
            Using <code>font-blinker</code> with weight
          </p>
        </div>
      </section>

      {/* Button Examples */}
      <section>
        <h2 className="text-sm font-body text-muted-foreground mb-4">
          Button Examples
        </h2>
        <div className="flex gap-4 flex-wrap">
          <button className="blinker-semibold bg-primary text-primary-foreground px-6 py-3 rounded-md">
            Shop Now
          </button>
          <button className="blinker-bold bg-secondary text-secondary-foreground px-6 py-3 rounded-md">
            Learn More
          </button>
          <button className="blinker-extrabold border-2 border-primary text-primary px-6 py-3 rounded-md">
            View Collection
          </button>
        </div>
      </section>
    </div>
  );
}
