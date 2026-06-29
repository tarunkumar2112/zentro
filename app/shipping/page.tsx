import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NewsletterSection } from "@/components/newsletter-section";
import { Package, Truck, Globe, Clock } from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-primary blinker-semibold text-sm uppercase tracking-wider mb-4">
            DELIVERY
          </p>
          <h1 className="font-heading text-5xl lg:text-7xl mb-6">
            Shipping Information
          </h1>
          <p className="blinker-regular text-xl text-muted-foreground max-w-2xl mx-auto">
            Fast, reliable shipping to get your ZENTRO gear to you as quickly as
            possible
          </p>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            Shipping Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Truck,
                title: "Standard Shipping",
                time: "5-7 Business Days",
                price: "$5.99",
                description: "Reliable delivery to your doorstep",
              },
              {
                icon: Package,
                title: "Express Shipping",
                time: "2-3 Business Days",
                price: "$12.99",
                description: "Faster delivery for urgent orders",
              },
              {
                icon: Clock,
                title: "Next Day Delivery",
                time: "1 Business Day",
                price: "$24.99",
                description: "Order by 2PM for next-day arrival",
              },
            ].map((option, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <option.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="blinker-bold text-2xl mb-2">{option.title}</h3>
                <p className="text-primary blinker-semibold text-lg mb-2">
                  {option.time}
                </p>
                <p className="font-heading text-3xl mb-4">{option.price}</p>
                <p className="blinker-regular text-muted-foreground">
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          {/* Free Shipping Banner */}
          <div className="bg-gradient-to-r from-primary to-primary-hover rounded-2xl p-8 lg:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <Globe className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="font-heading text-3xl lg:text-5xl text-white mb-4">
                Free Standard Shipping
              </h3>
              <p className="blinker-regular text-xl text-white/90">
                On all orders over $75 within the United States
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Details */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            Shipping Details
          </h2>

          <div className="space-y-8">
            <div className="bg-background border border-border rounded-2xl p-8">
              <h3 className="blinker-bold text-2xl mb-4">Processing Time</h3>
              <p className="blinker-regular text-muted-foreground leading-relaxed">
                Orders are typically processed within 1-2 business days. You'll
                receive a confirmation email once your order has been shipped
                with tracking information.
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8">
              <h3 className="blinker-bold text-2xl mb-4">
                International Shipping
              </h3>
              <p className="blinker-regular text-muted-foreground leading-relaxed mb-4">
                We ship to over 100 countries worldwide. International delivery
                times vary by location:
              </p>
              <ul className="space-y-2 blinker-regular text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Canada: 7-10 business days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Europe: 10-14 business days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Asia: 12-16 business days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Australia: 10-14 business days</span>
                </li>
              </ul>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8">
              <h3 className="blinker-bold text-2xl mb-4">Order Tracking</h3>
              <p className="blinker-regular text-muted-foreground leading-relaxed">
                Once your order ships, you'll receive a tracking number via
                email. You can track your package in real-time through our
                shipping partner's website or directly in your ZENTRO account.
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8">
              <h3 className="blinker-bold text-2xl mb-4">
                Customs & Import Duties
              </h3>
              <p className="blinker-regular text-muted-foreground leading-relaxed">
                International orders may be subject to customs duties and import
                taxes, which are the responsibility of the recipient. These
                charges vary by country and are not included in our shipping
                costs.
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8">
              <h3 className="blinker-bold text-2xl mb-4">
                Shipping Restrictions
              </h3>
              <p className="blinker-regular text-muted-foreground leading-relaxed">
                We currently ship to all 50 US states, APO/FPO addresses, and
                most international destinations. Unfortunately, we cannot ship
                to PO boxes for express and next-day delivery options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            Shipping FAQs
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my shipping address after placing an order?",
                answer:
                  "You can modify your shipping address within 1 hour of placing your order by contacting our support team. After this window, orders enter our fulfillment process and cannot be changed.",
              },
              {
                question: "Do you offer expedited shipping?",
                answer:
                  "Yes! We offer both Express (2-3 days) and Next Day Delivery options. Select your preferred shipping method at checkout.",
              },
              {
                question: "What if my package is lost or damaged?",
                answer:
                  "All shipments are fully insured. If your package is lost or arrives damaged, contact us immediately and we'll send a replacement or issue a full refund.",
              },
              {
                question: "Can I track my international order?",
                answer:
                  "Absolutely! All international orders include full tracking from our warehouse to your door.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 lg:p-8"
              >
                <h3 className="blinker-bold text-xl mb-3">{faq.question}</h3>
                <p className="blinker-regular text-muted-foreground leading-relaxed">
                  {faq.answer}
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
