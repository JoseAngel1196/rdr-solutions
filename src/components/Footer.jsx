"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const pathname = usePathname();
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsWideScreen(window.innerWidth >= 1536);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer
      className={`${
        pathname === "/contact" ? "bg-[#3E5D9D] 2xl:bg-white" : "bg-[#3E5D9D]"
      } flex flex-col md:flex-row justify-center md:justify-between items-center py-[24px] px-[20px] gap-[24px] text-white mt-auto lg:max-h-[100px] shadow-inner`}
    >
      <Image
        alt="logo"
        src={`${
          pathname === "/contact"
            ? isWideScreen
              ? "/assets/images/Logo.webp"
              : "/assets/images/LogoBlue.webp"
            : "/assets/images/LogoBlue.webp"
        }`}
        width={315}
        height={90}
        priority
        className="w-[167px] h-[45px]"
      />

      <span className={`${pathname === "/contact" && "2xl:text-[#3E5D9D]"}`}>
        Copyright © {new Date().getFullYear()} -{" "}
        <span className="font-bold underline">RDR Solutions, LLC</span>
      </span>

      <span className="flex flex-row items-center gap-[20px]">
        <Link
          href="https://www.instagram.com/rdrsolutions/"
          className={`${
            pathname === "/contact" ? "bg-[#3E5D9D]" : "bg-white"
          } p-[7px] rounded-full`}
          target="_blank"
        >
          <AiFillInstagram
            width={16}
            height={16}
            color={pathname === "/contact" ? "#fff" : "#3E5D9D"}
          />
        </Link>

        <Link
          href="https://www.facebook.com/rdrsolutions/"
          className={`${
            pathname === "/contact" ? "bg-[#3E5D9D]" : "bg-white"
          } p-[7px] rounded-full`}
          target="_blank"
        >
          <AiFillFacebook
            width={16}
            height={16}
            color={pathname === "/contact" ? "#fff" : "#3E5D9D"}
          />
        </Link>

        <Link
          href="https://twitter.com/llcrdr630?s=11&t=FRwx8M6iJRKTDiuo61CEpw"
          className={`${
            pathname === "/contact" ? "bg-[#3E5D9D]" : "bg-white"
          } p-[7px] rounded-full`}
          target="_blank"
        >
          <RiTwitterXFill
            width={16}
            height={16}
            color={pathname === "/contact" ? "#fff" : "#3E5D9D"}
          />
        </Link>

        <Link
          href="https://www.linkedin.com/in/rdr-solutions-llc-4b8333191/"
          className={`${
            pathname === "/contact" ? "bg-[#3E5D9D]" : "bg-white"
          } p-[7px] rounded-full`}
          target="_blank"
        >
          <AiFillLinkedin
            width={16}
            height={16}
            color={pathname === "/contact" ? "#fff" : "#3E5D9D"}
          />
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
