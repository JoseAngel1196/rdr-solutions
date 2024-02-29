"use client";

import dynamic from "next/dynamic";

import { useState, useEffect } from "react";

const Navbar = dynamic(() => import("./Navbar"), { ssr: false });

const NavbarWrapper = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const goToSection = (section) => {
    const sectionId = document.getElementById(section);

    sectionId?.scrollIntoView({ behavior: "smooth" });
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
    <Navbar
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      goToSection={goToSection}
    />
  );
};

export default NavbarWrapper;
