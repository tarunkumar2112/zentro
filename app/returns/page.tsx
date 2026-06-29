import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NewsletterSection } from "@/components/newsletter-section";
import { RotateCcw, ShieldCheck, Calendar, Truck } from "lucide-react";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-primary blinker-semibold text-sm uppercase tracking-wider mb-4">
            HASSLE-FREE
          </p>
          <h1 className="font-heading text-5xl lg:text-7xl mb-6">
            Returns & Exchanges
          </h1>
          <p className="blinker-regular text-xl text-muted-foreground max-w-2xl mx-auto">
            Not completely satisfied? We've got you covered with our easy return
            and exchange policy
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Calendar,
                title: "30-Day Returns",
                description: "Full refund within 30 days of purchase",
              },
              {
                icon: RotateCcw,
                title: "Free Exchanges",
                description: "Exchange for different size or color",
              },
              {
                icon: ShieldCheck,
                title: "Quality Guarantee",
                description: "100% satisfaction guaranteed",
              },
              {
                icon: Truck,
                title: "Easy Process",
                description: "Simple online return process",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="blinker-bold text-xl mb-2">{benefit.title}</h3>
                <p className="blinker-regular text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Return Policy */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            Our Return Policy
          </h2>

          <div className="bg-background border border-border rounded-2xl p-8 lg:p-12 mb-8">
            <h3 className="blinker-bold text-2xl mb-6">Eligible Returns</h3>
            <div className="space-y-4 blinker-regular text-muted-foreground">
              <p className="leading-relaxed">
                We accept returns within <strong className="text-foreground">30 days</strong> of the original purchase date. Items must be:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Unworn, unwashed, and in original condition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>With all original tags attached</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>In original packaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Free from odors, stains, or damage</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-background border border-border rounded-2xl p-8 lg:p-12 mb-8">
            <h3 className="blinker-bold text-2xl mb-6">Non-Returnable Items</h3>
            <div className="space-y-4 blinker-regular text-muted-foreground">
              <p className="leading-relaxed">
                For hygiene and safety reasons, the following items cannot be returned:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="text-destructive mr-3">✗</span>
                  <span>Underwear, swimwear, and intimate apparel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-3">✗</span>
                  <span>Face masks and personal protective equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-3">✗</span>
                  <span>Final sale or clearance items</span>
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-3">✗</span>
                  <span>Gift cards and digital products</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Return */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            How to Return an Item
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Initiate Your Return",
                description:
                  "Log in to your account and go to 'Order History'. Select the item(s) you wish to return and click 'Request Return'. You'll receive a return authorization number and prepaid shipping label via email.",
              },
              {
                step: "02",
                title: "Pack Your Item",
                description:
                  "Carefully pack the item(s) in the original packaging with all tags attached. Include a copy of your order confirmation or packing slip.",
              },
              {
                step: "03",
                title: "Ship Your Return",
                description:
                  "Attach the prepaid shipping label to your package and drop it off at any authorized shipping location. Keep your tracking number for reference.",
              },
              {
                step: "04",
                title: "Receive Your Refund",
                description:
                  "Once we receive and inspect your return (typically 3-5 business days), we'll process your refund. Refunds are issued to the original payment method within 5-10 business days.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="font-heading text-5xl text-primary">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="blinker-bold text-2xl mb-3">{step.title}</h3>
                    <p className="blinker-regular text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exchanges */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            Exchanges
          </h2>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 lg:p-12">
            <h3 className="blinker-bold text-2xl mb-4">
              Free Size & Color Exchanges
            </h3>
            <p className="blinker-regular text-muted-foreground leading-relaxed mb-6">
              Need a different size or color? Exchanges are completely free and
              easy! Simply follow the return process and select "Exchange"
              instead of "Return". We'll ship your replacement item as soon as we
              receive your original item.
            </p>
            <p className="blinker-semibold text-lg">
              Pro Tip: To get your new item faster, you can place a new order for
              the item you want and return the original item separately. This way,
              you won't have to wait for us to receive your return!
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            Return FAQs
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to get my refund?",
                answer:
                  "Refunds are typically processed within 3-5 business days of receiving your return. It may take an additional 5-10 business days for the refund to appear in your account, depending on your bank.",
              },
              {
                question: "Can I return sale items?",
                answer:
                  "Yes, items purchased during a sale can be returned for a full refund, as long as they meet our return criteria. However, final sale items marked as 'non-returnable' cannot be returned.",
              },
              {
                question: "What if I received a defective item?",
                answer:
                  "We're sorry to hear that! If you receive a defective or damaged item, contact us immediately. We'll send you a replacement at no cost or issue a full refund, including shipping charges.",
              },
              {
                question: "Do I have to pay for return shipping?",
                answer:
                  "Returns within the US are free with our prepaid shipping label. For international returns, return shipping costs are the customer's responsibility unless the item is defective or incorrect.",
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
