import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-heading text-5xl lg:text-7xl mb-6">
            Privacy Policy
          </h1>
          <p className="blinker-regular text-muted-foreground mb-12">
            Last updated: January 1, 2026
          </p>

          <div className="space-y-8 blinker-regular">
            <section>
              <h2 className="blinker-bold text-2xl mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                ZENTRO ("we," "our," or "us") respects your privacy and is
                committed to protecting your personal data. This privacy policy
                explains how we collect, use, and share your information when you
                visit our website or make a purchase from us.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect several types of information:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>
                  • <strong>Personal Information:</strong> Name, email address,
                  phone number, shipping and billing address, payment information
                </li>
                <li>
                  • <strong>Account Information:</strong> Username, password,
                  purchase history, preferences
                </li>
                <li>
                  • <strong>Automatically Collected Data:</strong> IP address,
                  browser type, device information, cookies, usage data
                </li>
              </ul>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Process and fulfill your orders</li>
                <li>• Communicate with you about your orders and account</li>
                <li>• Send marketing communications (with your consent)</li>
                <li>• Improve our website and services</li>
                <li>• Prevent fraud and enhance security</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">
                4. Information Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may share your information with trusted third parties who help
                us operate our business, including payment processors, shipping
                providers, and marketing platforms. We never sell your personal
                information to third parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">
                5. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your
                experience, analyze site traffic, and deliver personalized content.
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to
                protect your personal data against unauthorized access, alteration,
                disclosure, or destruction. However, no internet transmission is
                completely secure, so we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Access your personal data</li>
                <li>• Correct inaccurate data</li>
                <li>• Request deletion of your data</li>
                <li>• Object to processing of your data</li>
                <li>• Withdraw consent for marketing communications</li>
                <li>• Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">
                8. Children's Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under 16. We do not
                knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">
                9. International Transfers
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries
                other than your own. We ensure appropriate safeguards are in place
                for such transfers.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify
                you of significant changes by posting the new policy on this page
                and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this privacy policy or our data
                practices, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: privacy@zentro.com</p>
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
