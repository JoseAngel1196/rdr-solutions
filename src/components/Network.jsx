"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import {
  PiCaretDown,
  PiCaretRight,
  PiPersonSimpleWalk,
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
  consumers: PiPersonSimpleWalk,
};

// Rebuilds the original supply-chain diagram: product flows left to right and
// RDR connects to every link from underneath.
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
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="network-title"
            className="font-serif text-4xl leading-[1.05] tracking-[-0.015em] text-harbor md:col-span-7 md:text-[3.5rem]"
          >
            Connected to every link in your supply chain
          </h2>
          <p className="max-w-[46ch] text-lg leading-relaxed text-ink/75 md:col-span-5">
            From suppliers to the people who buy your products, RDR works
            alongside each step to keep your business moving.
          </p>
        </div>

        <div ref={ref} data-revealed={revealed} className="mt-14">
          <ol className="grid gap-3 lg:grid-cols-[repeat(5,minmax(0,1fr))] lg:gap-0">
            {chain.map((node, i) => {
              const Icon = icons[node.id];
              const last = i === chain.length - 1;
              return (
                <li
                  key={node.id}
                  className="chain-step relative flex flex-col items-center lg:px-3"
                  style={{ transitionDelay: `${i * 110}ms` }}
                >
                  <div className="flex w-full items-center gap-4 rounded-2xl lg:flex-1 bg-white px-5 py-4 ring-1 ring-harbor/10 lg:flex-col lg:gap-3 lg:px-4 lg:py-7 lg:text-center">
                    <Icon size={32} className="shrink-0 text-brand" aria-hidden="true" />
                    <span className="font-serif text-xl leading-tight text-harbor">
                      {node.label}
                    </span>
                  </div>
                  {!last && (
                    <>
                      <PiCaretDown
                        className="my-1 text-sky lg:hidden"
                        size={20}
                        aria-hidden="true"
                      />
                      <PiCaretRight
                        className="absolute -right-2.5 top-[3.75rem] hidden text-sky lg:block"
                        size={20}
                        aria-hidden="true"
                      />
                    </>
                  )}
                  <span
                    className="hidden h-10 border-l-2 border-dotted border-brand/50 lg:block"
                    aria-hidden="true"
                  />
                </li>
              );
            })}
          </ol>

          <div
            className="chain-step mt-6 flex flex-col items-center gap-4 rounded-2xl bg-harbor px-6 py-7 text-center lg:mx-3 lg:mt-0 lg:flex-row lg:justify-center lg:gap-6"
            style={{ transitionDelay: "600ms" }}
          >
            <Image
              src="/assets/images/LogoBlue.webp"
              alt="RDR Solutions"
              width={316}
              height={89}
              className="h-9 w-auto"
            />
            <p className="text-lg text-white/85">
              works with each link, from sourcing to the shelf.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
