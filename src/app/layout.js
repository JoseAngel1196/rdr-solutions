import { Figtree, Newsreader } from "next/font/google";

import { Toaster } from "sonner";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const title = "RDR Solutions — From the factory to the shelf, one partner";
const description =
  "Consulting, commercial execution and sourcing for consumer brands that want to grow in retail, plus the website to match.";

export const metadata = {
  metadataBase: new URL("https://rdrsolution.com"),
  title: {
    default: title,
    template: "%s | RDR Solutions",
  },
  description,
  applicationName: "RDR Solutions",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "RDR Solutions",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport = {
  themeColor: "#16264A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree.variable} ${newsreader.variable}`}>
      <body className="bg-mist font-sans text-ink antialiased flex flex-col min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-harbor focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
