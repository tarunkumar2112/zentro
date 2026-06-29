"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NewsletterSection } from "@/components/newsletter-section";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: "Orders & Payment",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are secure and encrypted.",
        },
        {
          question: "How can I track my order?",
          answer:
            "Once your order ships, you'll receive a confirmation email with a tracking number. You can also track your order by logging into your account and visiting 'Order History'.",
        },
        {
          question: "Can I modify or cancel my order after placing it?",
          answer:
            "You can modify or cancel your order within 1 hour of placing it by contacting our support team. After this window, orders enter our fulfillment process and cannot be changed.",
        },
        {
          question: "Do you offer gift cards?",
          answer:
            "Yes! ZENTRO gift cards are available in denominations of $25, $50, $100, and $200. They never expire and can be used for any purchase on our website.",
        },
      ],
    },
    {
      category: "Products & Sizing",
      questions: [
        {
          question: "How do I find my size?",
          answer:
            "Visit our Size Guide page for detailed measurements and fit recommendations. Each product page also includes specific sizing information. If you're between sizes, we generally recommend sizing up.",
        },
        {
          question: "Are your products true to size?",
          answer:
            "Yes, our products are designed to fit true to size. However, some items may have a more relaxed or fitted cut. Check the product description for fit details, and read customer reviews for real-world sizing feedback.",
        },
        {
          question: "What materials are your products made from?",
          answer:
            "We use premium, performance-grade materials including moisture-wicking polyester, breathable nylon, sustainable cotton blends, and innovative technical fabrics. Full material details are listed on each product page.",
        },
        {
          question: "How do I care for my ZENTRO products?",
          answer:
            "Most items are machine washable in cold water on a gentle cycle. Hang dry or tumble dry on low heat. Avoid fabric softeners and bleach. Always check the care label for specific instructions.",
        },
      ],
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          question: "Do you offer free shipping?",
          answer:
            "Yes! We offer free standard shipping on all orders over $75 within the United States. For orders under $75, standard shipping is $5.99.",
        },
        {
          question: "How long does shipping take?",
          answer:
            "Standard shipping takes 5-7 business days, Express shipping takes 2-3 business days, and Next Day Delivery is available for orders placed by 2PM EST. International shipping times vary by location.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes, we ship to over 100 countries worldwide. International shipping rates and delivery times vary by destination. Customers are responsible for any customs duties or import taxes.",
        },
        {
          question: "What if my package is lost or damaged?",
          answer:
            "All shipments are fully insured. If your package is lost or arrives damaged, contact us immediately at support@zentro.com and we'll send a replacement or issue a full refund.",
        },
      ],
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "We offer a 30-day return policy. Items must be unworn, unwashed, with all tags attached, and in original condition. Returns are free within the US. Visit our Returns page for complete details.",
        },
        {
          question: "How do I exchange an item?",
          answer:
            "Log in to your account, go to 'Order History', and select 'Exchange' for the item you'd like to swap. Choose your new size or color, and we'll ship it as soon as we receive your original item.",
        },
        {
          question: "Can I return sale items?",
          answer:
            "Yes, sale items can be returned within 30 days for a full refund, unless they're marked as 'Final Sale' or 'Non-Returnable'.",
        },
        {
          question: "How long does it take to process a refund?",
          answer:
            "Refunds are processed within 3-5 business days of receiving your return. It may take an additional 5-10 business days for the refund to appear in your account, depending on your bank.",
        },
      ],
    },
    {
      category: "Account & Rewards",
      questions: [
        {
          question: "Do I need an account to place an order?",
          answer:
            "No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, view order history, and earn rewards points with every purchase.",
        },
        {
          question: "How does the rewards program work?",
          answer:
            "Earn 1 point for every $1 spent. When you reach 100 points, you'll receive a $10 reward that can be used on your next purchase. Plus, get exclusive early access to sales and new releases!",
        },
        {
          question: "I forgot my password. How do I reset it?",
          answer:
            "Click 'Forgot Password?' on the login page and enter your email address. We'll send you a link to reset your password. If you don't receive the email within a few minutes, check your spam folder.",
        },
        {
          question: "Can I update my account information?",
          answer:
            "Yes! Log in to your account and go to 'Account Settings' to update your email, password, shipping addresses, and payment methods.",
        },
      ],
    },
    {
      category: "Sustainability & Ethics",
      questions: [
        {
          question: "Is ZENTRO committed to sustainability?",
          answer:
            "Absolutely! We're committed to reducing our environmental impact through sustainable materials, eco-friendly packaging, ethical manufacturing, and carbon-neutral shipping options.",
        },
        {
          question: "Where are your products made?",
          answer:
            "Our products are manufactured in certified facilities that meet strict ethical and quality standards. We partner with factories that provide fair wages, safe working conditions, and sustainable practices.",
        },
        {
          question: "Do you use recycled materials?",
          answer:
            "Yes! Many of our products incorporate recycled polyester, organic cotton, and other sustainable materials. Look for the 'Eco-Friendly' badge on product pages.",
        },
        {
          question: "How can I recycle my old ZENTRO products?",
          answer:
            "We offer a recycling program where you can send back worn-out ZENTRO items. We'll recycle them responsibly and give you 15% off your next purchase as a thank you!",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-primary blinker-semibold text-sm uppercase tracking-wider mb-4">
            HELP CENTER
          </p>
          <h1 className="font-heading text-5xl lg:text-7xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="blinker-regular text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about orders, shipping, returns, and
            more
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="font-heading text-3xl lg:text-4xl mb-8">
                  {category.category}
                </h2>

                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = faqCategories
                      .slice(0, categoryIndex)
                      .reduce((acc, cat) => acc + cat.questions.length, 0) + questionIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={questionIndex}
                        className="bg-card border border-border rounded-2xl overflow-hidden transition-all"
                      >
                        <button
                          onClick={() =>
                            setOpenIndex(isOpen ? null : globalIndex)
                          }
                          className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-card/80 transition-colors"
                        >
                          <h3 className="blinker-bold text-lg lg:text-xl pr-8">
                            {faq.question}
                          </h3>
                          <ChevronDown
                            className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                            <p className="blinker-regular text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading text-3xl lg:text-5xl mb-6">
            Still Have Questions?
          </h2>
          <p className="blinker-regular text-xl text-muted-foreground mb-8">
            Our support team is here to help you 7 days a week
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary hover:bg-primary-hover text-white blinker-bold py-4 px-8 rounded-lg transition-colors shadow-lg shadow-primary/20"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@zentro.com"
              className="bg-card border border-border hover:border-primary text-foreground blinker-bold py-4 px-8 rounded-lg transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <Footer />
    </div>
  );
}
