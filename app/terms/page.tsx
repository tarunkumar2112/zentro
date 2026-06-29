import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-heading text-5xl lg:text-7xl mb-6">
            Terms of Service
          </h1>
          <p className="blinker-regular text-muted-foreground mb-12">
            Last updated: January 1, 2026
          </p>

          <div className="space-y-8 blinker-regular">
            <section>
              <h2 className="blinker-bold text-2xl mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the ZENTRO website and services, you agree
                to be bound by these Terms of Service. If you do not agree to these
                terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">2. Use of Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may use our services only for lawful purposes and in accordance
                with these terms. You agree not to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>
                  • Violate any applicable laws or regulations
                </li>
                <li>
                  • Infringe on intellectual property rights
                </li>
                <li>
                  • Transmit harmful or malicious code
                </li>
                <li>
                  • Attempt to gain unauthorized access to our systems
                </li>
                <li>
                  • Use automated systems to access the site (except with permission)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">3. Account Registration</h2>
              <p className="text-muted-foreground leading-relaxed">
                To make purchases, you must create an account. You are responsible
                for maintaining the confidentiality of your account credentials and
                for all activities that occur under your account. Notify us
                immediately of any unauthorized use.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">
                4. Product Information and Pricing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to provide accurate product descriptions and pricing.
                However, we do not warrant that product descriptions, images, or
                other content is accurate, complete, or error-free. We reserve the
                right to correct any errors and to change or update information at
                any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">5. Orders and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                All orders are subject to acceptance and availability. We reserve
                the right to refuse or cancel any order for any reason. Payment
                must be received before your order is processed. We accept major
                credit cards, PayPal, and other payment methods as indicated on our
                site.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">6. Shipping and Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                We ship to addresses within the United States and select
                international locations. Shipping times are estimates and not
                guaranteed. Risk of loss and title for items pass to you upon
                delivery to the carrier.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">7. Returns and Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our return policy is detailed on our Returns & Exchanges page. In
                general, we accept returns within 30 days of purchase for unworn,
                unwashed items with tags attached. Refunds are issued to the
                original payment method.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">
                8. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on the ZENTRO website, including text, graphics, logos,
                images, and software, is the property of ZENTRO or its licensors
                and is protected by copyright, trademark, and other intellectual
                property laws. You may not use, copy, or distribute any content
                without our prior written permission.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">9. User Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you submit reviews, comments, or other content to our site, you
                grant us a non-exclusive, royalty-free, perpetual license to use,
                reproduce, and display that content. You represent that you own or
                have the rights to any content you submit.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">
                10. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, ZENTRO shall not be liable
                for any indirect, incidental, special, consequential, or punitive
                damages arising from your use of our services. Our total liability
                shall not exceed the amount you paid for products or services.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">11. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold ZENTRO harmless from any claims,
                damages, or expenses arising from your violation of these terms or
                your use of our services.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">
                12. Dispute Resolution
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes arising from these terms or your use of our services
                shall be resolved through binding arbitration in accordance with the
                rules of the American Arbitration Association. You waive any right
                to a jury trial or to participate in a class action.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">13. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance with
                the laws of the State of New York, without regard to its conflict
                of law provisions.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">14. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. We will
                notify you of significant changes by posting the updated terms on
                this page with a new "Last updated" date. Your continued use of our
                services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">15. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms of Service, please contact
                us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: legal@zentro.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Fashion Ave, New York, NY 10001</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
