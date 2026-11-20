import Image from "next/image";

import { trust } from "@/content/site";

// Renders only when the real founder content exists (see `trust` in site.js).
const Trust = () => {
  const { lead, founder, facts } = trust;
  if (!founder.name || !founder.title || !founder.bio || !founder.photo) {
    return null;
  }

  return (
    <section
      id="about"
      aria-labelledby="trust-title"
      className="bg-white pb-20 md:pb-28 lg:pb-36"
    >
      <div className="page-x">
        <div className="grid gap-10 border-t border-harbor/10 pt-20 md:grid-cols-12 md:gap-12 md:pt-28 lg:pt-36">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-mist">
              <Image
                src={founder.photo}
                alt={`${founder.name}, ${founder.title}`}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center md:col-span-7">
            <h2 id="trust-title" className="text-sm font-semibold uppercase tracking-[0.08em] text-brand">
              Who&apos;s behind RDR
            </h2>
            <p className="mt-6 max-w-[28ch] font-serif text-2xl leading-tight text-harbor sm:text-3xl md:text-[2.5rem]">
              {lead}
            </p>
            <p className="mt-10 text-lg font-semibold text-harbor">{founder.name}</p>
            <p className="text-base text-ink/70">{founder.title}</p>
            <p className="mt-4 max-w-[56ch] text-lg leading-relaxed text-ink/80">
              {founder.bio}
            </p>

            {facts.length === 3 && (
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-harbor/10 pt-8">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex flex-col-reverse">
                    <dt className="mt-1 text-sm text-ink/70">{fact.label}</dt>
                    <dd className="font-serif text-3xl text-harbor md:text-4xl">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
