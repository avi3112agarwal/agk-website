import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anantglobalkpo.com"),
  title: {
    default:
      "Anant Global KPO — Offshore Accounting Partner for CPA Firms & Businesses",
    template: "%s · Anant Global KPO",
  },
  description:
    "Chartered Accountant-led accounting outsourcing for CPA firms, accounting firms, real estate, e-commerce and SMEs. Bookkeeping, AP/AR, payroll, reporting, FP&A and Virtual CFO support.",
  keywords: [
    "accounting outsourcing",
    "bookkeeping outsourcing",
    "CPA firm outsourcing",
    "offshore accounting",
    "virtual CFO",
    "AP AR outsourcing",
    "QuickBooks bookkeeping",
    "Xero outsourcing",
    "Yardi accounting",
    "AppFolio bookkeeping",
  ],
  openGraph: {
    title:
      "Anant Global KPO — Offshore Accounting Partner for CPA Firms & Businesses",
    description:
      "Scale your accounting operations without increasing overhead. Dedicated CA-led teams for CPA firms, real estate, e-commerce and SMEs.",
    type: "website",
    siteName: "Anant Global KPO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anant Global KPO — Offshore Accounting Partner",
    description:
      "CA-led accounting outsourcing for CPA firms and growing businesses.",
  },
  robots: { index: true, follow: true },
};

// Explicit viewport — ensures the site scales properly on phones and
// supports up-to-5x pinch zoom for accessibility.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1E40AF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-white text-ink-900 antialiased">
        <Navbar />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
