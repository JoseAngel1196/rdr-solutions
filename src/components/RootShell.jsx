import { Figtree, Newsreader } from "next/font/google";

import { Toaster } from "sonner";

import "@/app/globals.css";
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

const skipLabel = { en: "Skip to content", es: "Saltar al contenido" };

// Shared <html> shell for the two root layouts: the English site and the
// Spanish shop each set their own document language.
export default function RootShell({ lang, children }) {
  return (
    <html lang={lang} className={`${figtree.variable} ${newsreader.variable}`}>
      <body className="bg-mist font-sans text-ink antialiased flex flex-col min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-harbor focus:px-5 focus:py-3 focus:text-white"
        >
          {skipLabel[lang]}
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
