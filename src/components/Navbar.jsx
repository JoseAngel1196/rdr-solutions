"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ activeSection, setActiveSection, goToSection }) => {
  const navRef = useRef(null);

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

  return (
    <header className="flex justify-between items-center pt-[30px] pb-[10px]">
      <Image
        src={"/assets/images/Logo.webp"}
        width={315}
        height={90}
        alt="logo"
        priority
        className="w-[140px] h-[40px] cursor-pointer ml-12"
      />

      <nav ref={navRef} className="flex justify-end gap-[50px] mr-8 lg:mr-0">
        <Link
          href={"#Home"}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("Home");
            hideNavbar();
            goToSection("Home");
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
          href={"#OurProducts"}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("OurProducts");
            hideNavbar();
            goToSection("OurProducts");
          }}
          className={
            activeSection === "OurProducts"
              ? "text-center text-[#6C9DD7] text-[1.5rem] md:text-base font-semibold leading-normal cursor-pointer bg-white md:bg-none rounded-2xl md:rounded-none px-5 md:px-0 py-1 md:py-0"
              : "text-center text-white md:text-[#3E5D9D] text-[1.5rem] md:text-base font-semibold leading-normal hover:text-[#6C9DD7] transition-all duration-300 cursor-pointer"
          }
        >
          Our Products
        </Link>

        <Link
          href={"#ContactUs"}
          onClick={(e) => {
            e.preventDefault();
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

        <Link
          href={"#JoinOurTeam"}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("JoinOurTeam");
            hideNavbar();
            goToSection("JoinOurTeam");
          }}
          className={
            activeSection === "JoinOurTeam"
              ? "text-center text-[#6C9DD7] text-[1.5rem] md:text-base font-semibold leading-normal cursor-pointer bg-white md:bg-none rounded-2xl md:rounded-none px-5 md:px-0 py-1 md:py-0"
              : "text-center text-white md:text-[#3E5D9D] text-[1.5rem] md:text-base font-semibold leading-normal hover:text-[#6C9DD7] transition-all duration-300 cursor-pointer"
          }
        >
          Join Our Team
        </Link>

        <button className="nav-btn nav-close-btn" onClick={hideNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button
        type="button"
        title="menuIcon"
        onClick={showNavbar}
        className="nav-btn mr-10"
      >
        <FaBars color="#3E5D9D" />
      </button>
    </header>
  );
};

export default Navbar;
