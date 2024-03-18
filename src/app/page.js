"use client";

import { useEffect } from "react";

import Home from "@/components/Home";
import OurBrands from "@/components/OurBrands";
import OurServices from "@/components/OurServices";
import ContactUs from "@/components/ContactUs";

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Home />
      <OurBrands />
      <OurServices />
      <ContactUs />
    </div>
  );
}
