const testimonials = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "Professional Runner",
    rating: 5,
    text: "The Performance Runner X changed my training completely. Best shoes I've ever worn for long-distance running.",
    avatar: "MC",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Fitness Coach",
    rating: 5,
    text: "ZENTRO's quality is unmatched. My clients love their gear and I recommend it to everyone.",
    avatar: "SW",
  },
  {
    id: 3,
    name: "David Park",
    role: "Gym Owner",
    rating: 5,
    text: "We exclusively stock ZENTRO at our facility. The durability and style are exactly what our members need.",
    avatar: "DP",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Yoga Instructor",
    rating: 5,
    text: "The fabric quality is incredible. Breathable, comfortable, and looks amazing. Worth every penny.",
    avatar: "ER",
  },
  {
    id: 5,
    name: "James Thompson",
    role: "Basketball Player",
    rating: 5,
    text: "Finally found gear that keeps up with my intensity. ZENTRO understands what athletes need.",
    avatar: "JT",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    role: "Marathon Runner",
    rating: 5,
    text: "Ran my personal best in ZENTRO gear. The performance boost is real and noticeable.",
    avatar: "LA",
  },
  {
    id: 7,
    name: "Michael Brown",
    role: "CrossFit Athlete",
    rating: 5,
    text: "Tough workouts demand tough gear. ZENTRO delivers every single time without fail.",
    avatar: "MB",
  },
  {
    id: 8,
    name: "Rachel Green",
    role: "Personal Trainer",
    rating: 5,
    text: "My go-to brand for training. Stylish enough for the street, tough enough for the gym.",
    avatar: "RG",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-4 max-w-7xl mb-12 lg:mb-16 text-center">
        <p className="text-primary blinker-semibold text-sm uppercase tracking-wider mb-4">
          TESTIMONIALS
        </p>
        <h2 className="font-heading text-4xl lg:text-6xl text-white mb-4">
          What People Are
          <br />
          <span className="text-primary">Saying About Us</span>
        </h2>
        <p className="blinker-regular text-lg text-white/60 max-w-2xl mx-auto">
          Trusted by thousands of athletes, fitness enthusiasts, and
          professionals worldwide.
        </p>
      </div>

      {/* Marquee Row 1 - Left to Right */}
      <div className="relative mb-6">
        <div className="flex gap-6 animate-marquee-left hover:pause">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`left-${index}`}
              className="flex-shrink-0 w-[400px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-primary"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="blinker-regular text-white/90 text-base leading-relaxed mb-6">
                &quot;{testimonial.text}&quot;
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="blinker-bold text-primary text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="blinker-semibold text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="blinker-regular text-white/50 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Right to Left */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee-right hover:pause">
          {[...testimonials.reverse(), ...testimonials].map(
            (testimonial, index) => (
              <div
                key={`right-${index}`}
                className="flex-shrink-0 w-[400px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-primary"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="blinker-regular text-white/90 text-base leading-relaxed mb-6">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="blinker-bold text-primary text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="blinker-semibold text-white text-sm">
                      {testimonial.name}
                    </p>
                    <p className="blinker-regular text-white/50 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
