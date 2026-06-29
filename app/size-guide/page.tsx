import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NewsletterSection } from "@/components/newsletter-section";
import { Ruler, User, ShoppingBag } from "lucide-react";

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-primary blinker-semibold text-sm uppercase tracking-wider mb-4">
            FIND YOUR FIT
          </p>
          <h1 className="font-heading text-5xl lg:text-7xl mb-6">Size Guide</h1>
          <p className="blinker-regular text-xl text-muted-foreground max-w-2xl mx-auto">
            Use our comprehensive size charts to find your perfect fit
          </p>
        </div>
      </section>

      {/* How to Measure */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            How to Measure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: User,
                title: "Chest",
                description:
                  "Measure around the fullest part of your chest, keeping the tape horizontal",
              },
              {
                icon: Ruler,
                title: "Waist",
                description:
                  "Measure around your natural waistline, keeping the tape comfortably loose",
              },
              {
                icon: ShoppingBag,
                title: "Hips",
                description:
                  "Measure around the fullest part of your hips, about 8 inches below your waist",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="blinker-bold text-xl mb-3">{item.title}</h3>
                <p className="blinker-regular text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center max-w-4xl mx-auto">
            <p className="blinker-semibold text-lg">
              <strong className="text-primary">Pro Tip:</strong> For the most
              accurate measurements, have someone help you measure. Keep the tape
              measure snug but not tight, and measure over light clothing or
              underwear.
            </p>
          </div>
        </div>
      </section>

      {/* Men's Size Charts */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            Men's Sizing
          </h2>

          {/* Tops */}
          <div className="mb-16">
            <h3 className="blinker-bold text-2xl mb-6">Tops (Inches)</h3>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="blinker-bold text-left p-4">Size</th>
                      <th className="blinker-bold text-left p-4">Chest</th>
                      <th className="blinker-bold text-left p-4">Waist</th>
                      <th className="blinker-bold text-left p-4">
                        Sleeve Length
                      </th>
                    </tr>
                  </thead>
                  <tbody className="blinker-regular">
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">XS</td>
                      <td className="p-4 text-muted-foreground">32-34</td>
                      <td className="p-4 text-muted-foreground">26-28</td>
                      <td className="p-4 text-muted-foreground">32</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">S</td>
                      <td className="p-4 text-muted-foreground">34-36</td>
                      <td className="p-4 text-muted-foreground">28-30</td>
                      <td className="p-4 text-muted-foreground">33</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">M</td>
                      <td className="p-4 text-muted-foreground">38-40</td>
                      <td className="p-4 text-muted-foreground">32-34</td>
                      <td className="p-4 text-muted-foreground">34</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">L</td>
                      <td className="p-4 text-muted-foreground">42-44</td>
                      <td className="p-4 text-muted-foreground">36-38</td>
                      <td className="p-4 text-muted-foreground">35</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">XL</td>
                      <td className="p-4 text-muted-foreground">46-48</td>
                      <td className="p-4 text-muted-foreground">40-42</td>
                      <td className="p-4 text-muted-foreground">36</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">XXL</td>
                      <td className="p-4 text-muted-foreground">50-52</td>
                      <td className="p-4 text-muted-foreground">44-46</td>
                      <td className="p-4 text-muted-foreground">37</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Bottoms */}
          <div>
            <h3 className="blinker-bold text-2xl mb-6">Bottoms (Inches)</h3>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="blinker-bold text-left p-4">Size</th>
                      <th className="blinker-bold text-left p-4">Waist</th>
                      <th className="blinker-bold text-left p-4">Hips</th>
                      <th className="blinker-bold text-left p-4">Inseam</th>
                    </tr>
                  </thead>
                  <tbody className="blinker-regular">
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">XS</td>
                      <td className="p-4 text-muted-foreground">28-30</td>
                      <td className="p-4 text-muted-foreground">34-36</td>
                      <td className="p-4 text-muted-foreground">30</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">S</td>
                      <td className="p-4 text-muted-foreground">30-32</td>
                      <td className="p-4 text-muted-foreground">36-38</td>
                      <td className="p-4 text-muted-foreground">32</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">M</td>
                      <td className="p-4 text-muted-foreground">32-34</td>
                      <td className="p-4 text-muted-foreground">38-40</td>
                      <td className="p-4 text-muted-foreground">32</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">L</td>
                      <td className="p-4 text-muted-foreground">36-38</td>
                      <td className="p-4 text-muted-foreground">42-44</td>
                      <td className="p-4 text-muted-foreground">34</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">XL</td>
                      <td className="p-4 text-muted-foreground">40-42</td>
                      <td className="p-4 text-muted-foreground">46-48</td>
                      <td className="p-4 text-muted-foreground">34</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">XXL</td>
                      <td className="p-4 text-muted-foreground">44-46</td>
                      <td className="p-4 text-muted-foreground">50-52</td>
                      <td className="p-4 text-muted-foreground">34</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women's Size Charts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            Women's Sizing
          </h2>

          {/* Tops */}
          <div className="mb-16">
            <h3 className="blinker-bold text-2xl mb-6">Tops (Inches)</h3>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="blinker-bold text-left p-4">Size</th>
                      <th className="blinker-bold text-left p-4">Bust</th>
                      <th className="blinker-bold text-left p-4">Waist</th>
                      <th className="blinker-bold text-left p-4">Hips</th>
                    </tr>
                  </thead>
                  <tbody className="blinker-regular">
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">XS</td>
                      <td className="p-4 text-muted-foreground">30-32</td>
                      <td className="p-4 text-muted-foreground">23-25</td>
                      <td className="p-4 text-muted-foreground">33-35</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">S</td>
                      <td className="p-4 text-muted-foreground">32-34</td>
                      <td className="p-4 text-muted-foreground">25-27</td>
                      <td className="p-4 text-muted-foreground">35-37</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">M</td>
                      <td className="p-4 text-muted-foreground">34-36</td>
                      <td className="p-4 text-muted-foreground">27-29</td>
                      <td className="p-4 text-muted-foreground">37-39</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">L</td>
                      <td className="p-4 text-muted-foreground">36-39</td>
                      <td className="p-4 text-muted-foreground">29-32</td>
                      <td className="p-4 text-muted-foreground">39-42</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">XL</td>
                      <td className="p-4 text-muted-foreground">39-42</td>
                      <td className="p-4 text-muted-foreground">32-35</td>
                      <td className="p-4 text-muted-foreground">42-45</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">XXL</td>
                      <td className="p-4 text-muted-foreground">42-45</td>
                      <td className="p-4 text-muted-foreground">35-38</td>
                      <td className="p-4 text-muted-foreground">45-48</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Bottoms */}
          <div>
            <h3 className="blinker-bold text-2xl mb-6">Bottoms (Inches)</h3>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="blinker-bold text-left p-4">Size</th>
                      <th className="blinker-bold text-left p-4">Waist</th>
                      <th className="blinker-bold text-left p-4">Hips</th>
                      <th className="blinker-bold text-left p-4">Inseam</th>
                    </tr>
                  </thead>
                  <tbody className="blinker-regular">
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">XS</td>
                      <td className="p-4 text-muted-foreground">23-25</td>
                      <td className="p-4 text-muted-foreground">33-35</td>
                      <td className="p-4 text-muted-foreground">28</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">S</td>
                      <td className="p-4 text-muted-foreground">25-27</td>
                      <td className="p-4 text-muted-foreground">35-37</td>
                      <td className="p-4 text-muted-foreground">28</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">M</td>
                      <td className="p-4 text-muted-foreground">27-29</td>
                      <td className="p-4 text-muted-foreground">37-39</td>
                      <td className="p-4 text-muted-foreground">29</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">L</td>
                      <td className="p-4 text-muted-foreground">29-32</td>
                      <td className="p-4 text-muted-foreground">39-42</td>
                      <td className="p-4 text-muted-foreground">29</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">XL</td>
                      <td className="p-4 text-muted-foreground">32-35</td>
                      <td className="p-4 text-muted-foreground">42-45</td>
                      <td className="p-4 text-muted-foreground">30</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 blinker-semibold">XXL</td>
                      <td className="p-4 text-muted-foreground">35-38</td>
                      <td className="p-4 text-muted-foreground">45-48</td>
                      <td className="p-4 text-muted-foreground">30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fit Guide */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl lg:text-5xl mb-12 text-center">
            Fit Guide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Regular Fit",
                description:
                  "Follows the lines of your body with a comfortable, relaxed fit. Not too tight, not too loose.",
              },
              {
                title: "Slim Fit",
                description:
                  "Tailored closer to the body for a modern, streamlined silhouette. Still comfortable for movement.",
              },
              {
                title: "Relaxed Fit",
                description:
                  "Generous cut with extra room throughout. Perfect for maximum comfort and layering.",
              },
            ].map((fit, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-2xl p-6 text-center"
              >
                <h3 className="blinker-bold text-xl mb-3">{fit.title}</h3>
                <p className="blinker-regular text-muted-foreground">
                  {fit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading text-3xl lg:text-5xl mb-6">
            Still Need Help?
          </h2>
          <p className="blinker-regular text-xl text-muted-foreground mb-8">
            Between sizes or have questions about fit? Our customer service team
            is here to help!
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-hover text-white blinker-bold py-4 px-8 rounded-lg transition-colors shadow-lg shadow-primary/20"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <Footer />
    </div>
  );
}
