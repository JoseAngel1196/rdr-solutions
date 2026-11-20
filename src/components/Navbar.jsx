"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { PiList, PiX } from "react-icons/pi";

import { navLinks } from "@/content/site";

const visibleLinks = navLinks.filter((link) => !link.hidden);

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(22,38,74,0.08)]"
          : "bg-mist"
      }`}
    >
      <div className="page-x flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" aria-label="RDR Solutions home" className="shrink-0">
          <Image
            src="/assets/images/Logo.webp"
            width={315}
            height={90}
            alt="RDR Solutions"
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {visibleLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[0.95rem] font-medium text-harbor/80 transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="btn-signal !px-5 !py-2.5 text-sm">
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="md:hidden -mr-2 rounded-full p-2 text-harbor"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <PiX size={28} /> : <PiList size={28} />}
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="md:hidden h-[calc(100dvh-4.5rem)] bg-white"
      >
        <ul className="page-x flex flex-col gap-1 pt-6">
          {visibleLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-harbor/10 py-4 font-serif text-3xl text-harbor"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-8">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-signal w-full"
            >
              Get in touch
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
