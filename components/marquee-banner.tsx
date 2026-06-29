"use client";

export function MarqueeBanner() {
  const announcements = [
    "🎉 NEW ARRIVALS: Summer Collection Now Live",
    "🚚 Free Shipping on Orders Over $50",
    "💜 Use Code ZENTRO10 for 10% Off Your First Order",
    "⚡ Limited Time: Buy 2 Get 1 Free on Select Items",
  ];

  return (
    <div className="bg-primary text-primary-foreground overflow-hidden py-2 relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Duplicate content for seamless loop */}
        {[...announcements, ...announcements].map((text, index) => (
          <span
            key={index}
            className="blinker-semibold text-sm mx-8 inline-flex items-center"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
