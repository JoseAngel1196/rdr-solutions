"use client";

import { useEffect, useRef, useState } from "react";

import {
  PiShoppingCart,
  PiStorefront,
  PiTruck,
  PiUserCircle,
  PiWarehouse,
} from "react-icons/pi";

import { chain } from "@/content/site";

const icons = {
  suppliers: PiTruck,
  distribution: PiWarehouse,
  retailers: PiStorefront,
  customers: PiUserCircle,
  shoppers: PiShoppingCart,
};

// The supply chain as one line: product flows along the navy line, and RDR
// (amber) runs underneath every link.
const Network = () => {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="network"
      aria-labelledby="network-title"
      className="py-20 md:py-28"
    >
      <div className="page-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="network-title"
            className="font-serif text-4xl leading-[1.05] tracking-[-0.015em] text-harbor md:text-[3.5rem]"
          >
            Connected to every link in your supply chain
          </h2>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-ink/75">
            <li className="flex items-center gap-2">
              <span className="h-0.5 w-8 bg-harbor" aria-hidden="true" />
              Product flow
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-8 rounded-full bg-signal" aria-hidden="true" />
              RDR Solutions
            </li>
          </ul>
        </div>

        <div ref={ref} data-revealed={revealed} className="relative mt-14">
          {/* Rails: vertical on mobile, horizontal from md up. Node centres sit
              at 28px (mobile x) and 10%..90% / 28px (desktop). */}
          <span
            className="absolute bottom-0 left-6 top-0 w-2 rounded-full bg-signal md:hidden"
            aria-hidden="true"
          />
          <span
            className="absolute bottom-7 left-[27px] top-7 w-0.5 bg-harbor md:hidden"
            aria-hidden="true"
          />
          <span
            className="absolute left-0 right-0 top-6 hidden h-2 rounded-full bg-signal md:block"
            aria-hidden="true"
          />
          <span
            className="absolute left-[10%] right-[10%] top-[27px] hidden h-0.5 bg-harbor md:block"
            aria-hidden="true"
          />

          <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
            {chain.map((node, i) => {
              const Icon = icons[node.id];
              return (
                <li
                  key={node.id}
                  className="chain-step flex items-center gap-5 md:flex-col md:items-center md:gap-4 md:text-center"
                  style={{ transitionDelay: `${i * 110}ms` }}
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-harbor bg-white text-brand">
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-serif text-xl leading-tight text-harbor">
                      {node.label}
                    </p>
                    {node.description && (
                      <p className="mt-1 text-base leading-snug text-ink/75">
                        {node.description}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Network;
