import { Poppins, Fraunces } from "next/font/google";

import { Toaster } from "sonner";

import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";

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
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${fraunces.variable} bg-[#3E5D9D] scroll-smooth flex flex-col min-h-screen`}
      >
        <NavbarWrapper />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
