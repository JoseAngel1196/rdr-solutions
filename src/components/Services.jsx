"use client";

import { useState } from "react";

import { PiPlus } from "react-icons/pi";

import { services, servicesIntro } from "@/content/site";

const ServiceCard = ({ service }) => {
  const [open, setOpen] = useState(false);
  const panelId = `${service.id}-details`;
  const hasDetails = service.details.length > 0;

  return (
    <li
      data-open={open}
      className="flex flex-col rounded-[20px] border border-harbor/[0.08] bg-white p-7 sm:p-10"
    >
      <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-brand">
        {service.title}
      </h3>
      <p className="mt-4 font-serif text-2xl leading-snug text-harbor">
        {service.benefit}
      </p>
      <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink/75">
        {service.description}
      </p>

      {hasDetails && (
        <div className="mt-auto pt-6">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full text-base font-semibold text-brand hover:text-harbor"
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
        </div>
      )}
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
            {servicesIntro}
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
