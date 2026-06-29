import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NewsletterSection } from "@/components/newsletter-section";
import { Briefcase, Heart, TrendingUp, Users } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-primary blinker-semibold text-sm uppercase tracking-wider mb-4">
            JOIN OUR TEAM
          </p>
          <h1 className="font-heading text-5xl lg:text-7xl mb-6">
            Careers at ZENTRO
          </h1>
          <p className="blinker-regular text-xl text-muted-foreground max-w-2xl mx-auto">
            Join a team of passionate individuals dedicated to redefining the
            future of performance apparel
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            Why Work With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Culture First",
                description:
                  "We believe in creating an inclusive, supportive environment where everyone can thrive",
              },
              {
                icon: TrendingUp,
                title: "Growth Opportunities",
                description:
                  "Continuous learning and development programs to help you reach your full potential",
              },
              {
                icon: Users,
                title: "Collaborative Team",
                description:
                  "Work with talented, passionate people who inspire and challenge you every day",
              },
              {
                icon: Briefcase,
                title: "Work-Life Balance",
                description:
                  "Flexible schedules, remote options, and generous time off to recharge",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all text-center"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="blinker-bold text-xl mb-3">{benefit.title}</h3>
                <p className="blinker-regular text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            Benefits & Perks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Competitive salary and equity",
              "Comprehensive health insurance",
              "401(k) with company match",
              "Unlimited PTO policy",
              "Remote work options",
              "Learning & development budget",
              "Gym membership reimbursement",
              "Employee product discounts",
              "Team offsites and events",
              "Mental health support",
              "Parental leave",
              "Commuter benefits",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-background border border-border rounded-xl p-4"
              >
                <div className="mt-1">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="blinker-regular">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            Open Positions
          </h2>

          <div className="space-y-4">
            {[
              {
                title: "Senior Product Designer",
                department: "Design",
                location: "Remote (US)",
                type: "Full-time",
              },
              {
                title: "Full Stack Engineer",
                department: "Engineering",
                location: "New York, NY",
                type: "Full-time",
              },
              {
                title: "Marketing Manager",
                department: "Marketing",
                location: "Remote (Global)",
                type: "Full-time",
              },
              {
                title: "Customer Success Specialist",
                department: "Support",
                location: "Los Angeles, CA",
                type: "Full-time",
              },
              {
                title: "Supply Chain Analyst",
                department: "Operations",
                location: "New York, NY",
                type: "Full-time",
              },
            ].map((job, index) => (
              <a
                key={index}
                href={`/careers/${job.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="block bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <h3 className="blinker-bold text-xl mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="bg-primary hover:bg-primary-hover transition-colors blinker-bold px-6 py-3 rounded-lg whitespace-nowrap self-start lg:self-center">
                    View Details
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading text-3xl lg:text-5xl mb-6">
            Don't See the Right Role?
          </h2>
          <p className="blinker-regular text-xl text-muted-foreground mb-8">
            We're always looking for talented people. Send us your resume and
            we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:careers@zentro.com"
            className="inline-block bg-primary hover:bg-primary-hover text-white blinker-bold py-4 px-8 rounded-lg transition-colors shadow-lg shadow-primary/20"
          >
            Send Your Resume
          </a>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <Footer />
    </div>
  );
}
