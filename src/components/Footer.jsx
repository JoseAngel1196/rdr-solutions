import Image from "next/image";

import { contact, navLinks } from "@/content/site";
import CurrentYear from "./CurrentYear";
import SiteLink from "./SiteLink";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="on-dark border-t border-white/10 bg-harbor text-white/75">
      <div className="page-x flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="shrink-0">
          <SiteLink href="/" aria-label="RDR Solutions home" className="inline-block">
            <Image
              src="/assets/images/LogoBlue.webp"
              alt="RDR Solutions"
              width={316}
              height={89}
              className="h-9 w-auto"
            />
          </SiteLink>
          <p className="mt-3 font-serif text-lg text-white">
            From the factory to the shelf.
          </p>
          <address className="mt-2 max-w-[38ch] text-sm not-italic leading-relaxed">
            {contact.address}
          </address>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
            {navLinks
              .filter((link) => !link.hidden)
              .map((link) => (
                <li key={link.href}>
                  <SiteLink href={link.href} className="hover:text-white">
                    {link.label}
                  </SiteLink>
                </li>
              ))}
            <li>
              <SiteLink href="/contact" className="hover:text-white">
                Contact
              </SiteLink>
            </li>
            <li>
              <SiteLink href="/join" className="hover:text-white">
                Join our team
              </SiteLink>
            </li>
          </ul>
        </nav>

        <SocialLinks tone="dark" />
      </div>

      <div className="page-x">
        <div className="border-t border-white/10 py-6 text-sm text-white/60">
          Copyright © <CurrentYear /> RDR Solutions, LLC
        </div>
      </div>
    </footer>
  );
};

export default Footer;
