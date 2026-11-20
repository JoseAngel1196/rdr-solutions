"use client";

import { useState } from "react";

import {
  PiBrowser,
  PiHandshake,
  PiLightbulb,
  PiPlus,
  PiTruck,
  PiUsersThree,
} from "react-icons/pi";

import { mission, services } from "@/content/site";

const icons = {
  consulting: PiHandshake,
  "commercial-execution": PiLightbulb,
  "sourcing-strategies": PiTruck,
  websites: PiBrowser,
  "business-partners": PiUsersThree,
};

const ServiceRow = ({ service }) => {
  const [open, setOpen] = useState(false);
  const Icon = icons[service.id];
  const panelId = `${service.id}-details`;
  const hasDetails = service.details.length > 0;

  return (
    <li
      data-open={open}
      className="grid gap-5 border-t border-harbor/15 py-9 md:grid-cols-12 md:gap-8 md:py-12"
    >
      <div className="flex items-start gap-5 md:col-span-5">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-brand ring-1 ring-harbor/10">
          <Icon size={28} aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-serif text-[1.75rem] leading-tight text-harbor md:text-[2rem]">
            {service.title}
          </h3>
          <p className="mt-2 text-lg font-medium text-brand">{service.benefit}</p>
        </div>
      </div>

      <div className="md:col-span-7 md:pt-1">
        <p className="max-w-[60ch] text-lg leading-relaxed text-ink/80">
          {service.description}
        </p>

        {hasDetails && (
          <>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((v) => !v)}
              className="mt-5 inline-flex items-center gap-2 rounded-full text-base font-semibold text-brand hover:text-harbor"
            >
              <PiPlus className="service-toggle-icon" size={18} aria-hidden="true" />
              {open ? "Hide what's included" : "What's included"}
            </button>

            <div className="service-body" id={panelId} aria-hidden={!open}>
              <div>
                <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {service.details.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base leading-snug text-ink/85"
                    >
                      <span
                        className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-sky"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </li>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="py-20 md:py-28"
    >
      <div className="page-x">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="services-title"
            className="font-serif text-4xl leading-[1.05] tracking-[-0.015em] text-harbor md:col-span-7 md:text-[3.5rem]"
          >
            Our services
          </h2>
          <p className="max-w-[46ch] text-lg leading-relaxed text-ink/75 md:col-span-5">
            {mission}
          </p>
        </div>

        <ul className="mt-14 border-b border-harbor/15">
          {services.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
