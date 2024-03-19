"use client";

import { useEffect } from "react";

import Home from "@/components/Home";
import OurBrands from "@/components/OurBrands";
import OurServices from "@/components/OurServices";
import ContactUs from "@/components/ContactUs";
import Diagram from "@/components/Diagram";

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Home />
      <div className="overflow-x-hidden">
        <OurBrands />
        <OurServices />
        <Diagram />
        <ContactUs />
      </div>
    </>
  );
}
