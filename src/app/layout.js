import { Poppins, Fraunces } from "next/font/google";

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
  return (
    <html lang="en" className="bg-[#3E5D9D] scroll-smooth">
      <body className={`${poppins.variable} ${fraunces.variable}`}>
        {children}
      </body>
    </html>
  );
}
