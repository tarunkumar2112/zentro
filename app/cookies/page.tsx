import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-heading text-5xl lg:text-7xl mb-6">
            Cookie Policy
          </h1>
          <p className="blinker-regular text-muted-foreground mb-12">
            Last updated: January 1, 2026
          </p>

          <div className="space-y-8 blinker-regular">
            <section>
              <h2 className="blinker-bold text-2xl mb-4">1. What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your device when
                you visit a website. They help the website remember your actions
                and preferences over time, enhancing your browsing experience.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ZENTRO uses cookies for various purposes:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>
                  • <strong>Essential Cookies:</strong> Required for the website to
                  function properly, including shopping cart and checkout processes
                </li>
                <li>
                  • <strong>Performance Cookies:</strong> Help us understand how
                  visitors use our site to improve performance
                </li>
                <li>
                  • <strong>Functional Cookies:</strong> Remember your preferences
                  like language and region
                </li>
                <li>
                  • <strong>Marketing Cookies:</strong> Track your visits across
                  websites to deliver relevant advertisements
                </li>
              </ul>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">
                3. Types of Cookies We Use
              </h2>
              
              <div className="space-y-6 mt-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="blinker-bold text-xl mb-3">Essential Cookies</h3>
                  <p className="text-muted-foreground mb-3">
                    These cookies are necessary for the website to function and
                    cannot be switched off.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• Session management</li>
                    <li>• Shopping cart functionality</li>
                    <li>• Payment processing</li>
                    <li>• Security features</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="blinker-bold text-xl mb-3">Analytics Cookies</h3>
                  <p className="text-muted-foreground mb-3">
                    These cookies help us understand how visitors interact with our
                    website.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• Google Analytics</li>
                    <li>• Page view tracking</li>
                    <li>• User behavior analysis</li>
                    <li>• Performance metrics</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="blinker-bold text-xl mb-3">Marketing Cookies</h3>
                  <p className="text-muted-foreground mb-3">
                    These cookies track your browsing habits to deliver personalized
                    advertising.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• Facebook Pixel</li>
                    <li>• Google Ads</li>
                    <li>• Retargeting campaigns</li>
                    <li>• Social media integration</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">
                4. Third-Party Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may use third-party services that set cookies on your device:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Google Analytics for website analytics</li>
                <li>• Facebook and Instagram for social media features</li>
                <li>• Payment processors for secure transactions</li>
                <li>• Email marketing platforms for newsletter management</li>
                <li>• Customer support tools for live chat</li>
              </ul>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">
                5. Managing Your Cookie Preferences
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have several options to manage cookies:
              </p>
              
              <div className="bg-card border border-border rounded-xl p-6 mb-4">
                <h3 className="blinker-bold text-lg mb-3">Browser Settings</h3>
                <p className="text-muted-foreground">
                  Most browsers allow you to refuse or delete cookies. The method
                  varies by browser. Check your browser's help menu for specific
                  instructions.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 mb-4">
                <h3 className="blinker-bold text-lg mb-3">Cookie Preference Center</h3>
                <p className="text-muted-foreground">
                  Use our cookie preference center (accessed via the banner on your
                  first visit) to customize which types of cookies you accept.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="blinker-bold text-lg mb-3">Opt-Out Tools</h3>
                <p className="text-muted-foreground">
                  You can opt out of interest-based advertising through:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground ml-6">
                  <li>• Network Advertising Initiative (NAI)</li>
                  <li>• Digital Advertising Alliance (DAA)</li>
                  <li>• Your Online Choices (Europe)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">
                6. Impact of Disabling Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Disabling cookies may affect your experience on our website. You may
                not be able to use certain features like adding items to your cart,
                checking out, or accessing your account. Essential cookies cannot be
                disabled as they are necessary for the site to function.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">7. Cookie Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies have different retention periods:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground ml-6">
                <li>
                  • <strong>Session Cookies:</strong> Deleted when you close your
                  browser
                </li>
                <li>
                  • <strong>Persistent Cookies:</strong> Remain on your device for a
                  set period (ranging from days to years)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">
                8. Updates to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. Check this page periodically for updates.
              </p>
            </section>

            <section>
              <h2 className="blinker-bold text-2xl mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about our use of cookies, please contact us
                at:
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
