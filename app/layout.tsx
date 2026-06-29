import type { Metadata } from "next";
import { Carter_One, Blinker } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { PageTransition } from "@/components/page-transition";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ZENTRO - Modern E-commerce",
  description: "Shop the latest trends in fashion and lifestyle at ZENTRO",
};

const carterOne = Carter_One({
  weight: "400",
  variable: "--font-carter-one",
  display: "swap",
  subsets: ["latin"],
});

const blinker = Blinker({
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-blinker",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${blinker.variable} ${carterOne.variable} ${blinker.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
