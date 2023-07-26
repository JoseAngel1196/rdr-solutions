"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import AboutUs from "@/components/AboutUs";
import LogoBar from "@/components/LogoBar";

export default function Index() {
  const [activeSection, setActiveSection] = useState("Home");

  const goToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          if (sectionId !== activeSection?.id) {
            setActiveSection(entry.target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [activeSection]);

  return (
    <div className="bg-white max-w-screen-xl mx-auto">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        goToSection={goToSection}
      />

      <Home />
      <AboutUs />
      <LogoBar />
    </div>
  );
}
