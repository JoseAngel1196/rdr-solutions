"use client";
import { useEffect } from "react";

import { Poppins, Fraunces } from "next/font/google";
import { AnimatePresence } from "framer-motion";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-fraunces",
});

export const metadata = {
  title: "RDR Solutions",
  description:
    "Tailored consumer product solutions for supermarkets and independent stores",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <html lang="en" className="bg-[#3E5D9D]">
      <AnimatePresence>
        <body className={`${poppins.variable} ${fraunces.variable}`}>
          {children}
        </body>
      </AnimatePresence>
    </html>
  );
}
