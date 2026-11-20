import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/content/site";
import CurrentYear from "./CurrentYear";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="on-dark border-t border-white/10 bg-harbor text-white/75">
      <div className="page-x flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <Link href="/" aria-label="RDR Solutions home" className="shrink-0">
          <Image
            src="/assets/images/LogoBlue.webp"
            alt="RDR Solutions"
            width={316}
            height={89}
            className="h-9 w-auto"
          />
        </Link>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
            {navLinks
              .filter((link) => !link.hidden)
              .map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/join" className="hover:text-white">
                Join our team
              </Link>
            </li>
          </ul>
        </nav>

        <SocialLinks tone="dark" />
      </div>

      <div className="page-x border-t border-white/10 py-6 text-sm text-white/60">
        Copyright © <CurrentYear /> RDR Solutions, LLC
      </div>
    </footer>
  );
};

export default Footer;
