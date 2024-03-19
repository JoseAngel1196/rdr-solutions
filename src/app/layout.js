import { Poppins, Fraunces } from "next/font/google";

import { Toaster } from "sonner";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
});

export const metadata = {
  title: "RDR Solutions",
  description:
    "Boosting growth with fast and affordable solutions designed to fit your business needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${fraunces.variable} bg-[#3E5D9D] scroll-smooth flex flex-col min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
