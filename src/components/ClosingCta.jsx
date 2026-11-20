import Image from "next/image";
import Link from "next/link";

import { PiEnvelopeSimple, PiMapPin, PiPhone } from "react-icons/pi";

import { contact } from "@/content/site";
import SocialLinks from "./SocialLinks";

const ClosingCta = () => {
  return (
    <section
      id="ContactUs"
      aria-labelledby="closing-title"
      className="on-dark relative isolate overflow-hidden bg-harbor py-24 text-white md:py-32"
    >
      <Image
        src="/assets/images/photos/retail-aisle.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-[0.18] mix-blend-luminosity"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-harbor via-harbor/90 to-harbor/60"
        aria-hidden="true"
      />

      <div className="page-x grid gap-14 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2
            id="closing-title"
            className="max-w-[16ch] font-serif text-[2.75rem] leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:text-7xl"
          >
            Let&apos;s talk about your idea or your business
          </h2>
          <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-white/80 sm:text-xl">
            Have an idea or a project in mind and need help? Reach out. We would
            love to hear about it and find the right solution with you.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-signal">
              Get in touch
            </Link>
            <a href={`mailto:${contact.email}`} className="btn-ghost-dark">
              Email {contact.email}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <ul className="space-y-5 border-t border-white/15 pt-8 text-lg text-white/85">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 hover:text-white"
              >
                <PiEnvelopeSimple size={24} className="shrink-0 text-sky" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.phoneHref}
                className="flex items-center gap-4 hover:text-white"
              >
                <PiPhone size={24} className="shrink-0 text-sky" aria-hidden="true" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={contact.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:text-white"
              >
                <PiMapPin size={24} className="mt-0.5 shrink-0 text-sky" aria-hidden="true" />
                {contact.address}
              </a>
            </li>
          </ul>
          <SocialLinks className="mt-8" tone="dark" />
        </div>
      </div>
    </section>
  );
};

export default ClosingCta;
