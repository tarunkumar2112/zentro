"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NewsletterSection } from "@/components/newsletter-section";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-primary blinker-semibold text-sm uppercase tracking-wider mb-4">
            GET IN TOUCH
          </p>
          <h1 className="font-heading text-5xl lg:text-7xl mb-6">Contact Us</h1>
          <p className="blinker-regular text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Mail,
                title: "Email Us",
                content: "support@zentro.com",
                link: "mailto:support@zentro.com",
              },
              {
                icon: Phone,
                title: "Call Us",
                content: "+1 (555) 123-4567",
                link: "tel:+15551234567",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: "123 Fashion Ave, New York, NY 10001",
                link: null,
              },
              {
                icon: Clock,
                title: "Working Hours",
                content: "Mon - Fri: 9AM - 6PM EST",
                link: null,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="blinker-bold text-lg mb-2">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="blinker-regular text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="blinker-regular text-muted-foreground">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ZENTRO Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl lg:text-6xl mb-4">
              Send Us a Message
            </h2>
            <p className="blinker-regular text-lg text-muted-foreground">
              Fill out the form below and our team will get back to you within 24
              hours
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="blinker-semibold text-sm mb-2 block"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 blinker-regular focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="blinker-semibold text-sm mb-2 block"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 blinker-regular focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="phone"
                  className="blinker-semibold text-sm mb-2 block"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 blinker-regular focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="blinker-semibold text-sm mb-2 block"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 blinker-regular focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Status</option>
                  <option value="product">Product Question</option>
                  <option value="return">Returns & Exchanges</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label
                htmlFor="message"
                className="blinker-semibold text-sm mb-2 block"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 blinker-regular focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white blinker-bold py-4 px-8 rounded-lg transition-colors shadow-lg shadow-primary/20"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <Footer />
    </div>
  );
}
