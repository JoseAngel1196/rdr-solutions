"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState("Home");

  const goToSection = (section) => {
    const sectionId = document.getElementById(section);

    sectionId?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    navRef.current.classList.remove("justify-end");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
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
    <header className="bg-white sticky top-0 z-[5] flex justify-between items-center p-5 font-sans">
      <Image
        onClick={() => router.push("/")}
        src={"/assets/images/Logo.webp"}
        width={315}
        height={90}
        alt="logo"
        priority
        className="w-[140px] h-[40px] cursor-pointer md:ml-5 lg:ml-12"
      />

      <nav ref={navRef} className="flex justify-end gap-[20px] lg:gap-[50px]">
        <Link
          href={"/#Home"}
          onClick={() => {
            handleNavClick("Home");
            hideNavbar();
            goToSection("Home");
            window.scrollTo(0, 0);
          }}
          className={
            activeSection === "Home"
              ? "text-center text-[#6C9DD7] text-[1.5rem] md:text-base font-semibold leading-normal cursor-pointer bg-white md:bg-none rounded-2xl md:rounded-none px-5 md:px-0 py-1 md:py-0"
              : "text-center text-white md:text-[#3E5D9D] text-[1.5rem] md:text-base font-semibold leading-normal hover:text-[#6C9DD7] transition-all duration-300 cursor-pointer"
          }
        >
          Home
        </Link>

        <Link
          href={"/#brands"}
          onClick={() => {
            handleNavClick("brands");
            hideNavbar();
            goToSection("brands");
          }}
          className={
            activeSection === "brands"
              ? "text-center text-[#6C9DD7] text-[1.5rem] md:text-base font-semibold leading-normal cursor-pointer bg-white md:bg-none rounded-2xl md:rounded-none px-5 md:px-0 py-1 md:py-0"
              : "text-center text-white md:text-[#3E5D9D] text-[1.5rem] md:text-base font-semibold leading-normal hover:text-[#6C9DD7] transition-all duration-300 cursor-pointer"
          }
        >
          Our Brands
        </Link>

        <Link
          href={"/#services"}
          onClick={() => {
            handleNavClick("services");
            hideNavbar();
            goToSection("services");
          }}
          className={
            activeSection === "services"
              ? "text-center text-[#6C9DD7] text-[1.5rem] md:text-base font-semibold leading-normal cursor-pointer bg-white md:bg-none rounded-2xl md:rounded-none px-5 md:px-0 py-1 md:py-0"
              : "text-center text-white md:text-[#3E5D9D] text-[1.5rem] md:text-base font-semibold leading-normal hover:text-[#6C9DD7] transition-all duration-300 cursor-pointer"
          }
        >
          Our Services
        </Link>

        <Link
          href={pathname === "/" ? "/#ContactUs" : "/contact"}
          onClick={() => {
            handleNavClick("ContactUs");
            hideNavbar();
            goToSection("ContactUs");
          }}
          className={
            activeSection === "ContactUs"
              ? "text-center text-[#6C9DD7] text-[1.5rem] md:text-base font-semibold leading-normal cursor-pointer bg-white md:bg-none rounded-2xl md:rounded-none px-5 md:px-0 py-1 md:py-0"
              : "text-center text-white md:text-[#3E5D9D] text-[1.5rem] md:text-base font-semibold leading-normal hover:text-[#6C9DD7] transition-all duration-300 cursor-pointer"
          }
        >
          Contact Us
        </Link>

        <button className="nav-btn nav-close-btn" onClick={hideNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button
        type="button"
        title="menuIcon"
        onClick={showNavbar}
        className="nav-btn"
      >
        <FaBars color="#3E5D9D" />
      </button>
    </header>
  );
};

export default Navbar;
