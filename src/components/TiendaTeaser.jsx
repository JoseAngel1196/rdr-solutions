import Image from "next/image";

import { PiArrowRight } from "react-icons/pi";

import SiteLink from "./SiteLink";

const shots = ["/tienda/vera.webp", "/tienda/golden-flx.webp", "/tienda/beauty-in.webp"];

// Kept away from the brand portfolio on purpose: FuXion is a separate,
// personal line of the business, not one of the brands RDR represents.
const TiendaTeaser = () => {
  return (
    <section aria-labelledby="tienda-teaser-title" className="py-16 md:py-20">
      <div className="page-x">
        <div className="grid gap-10 rounded-[28px] bg-sage px-6 py-10 md:grid-cols-12 md:items-center md:px-12 md:py-12">
          <div className="md:col-span-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-leaf">La Tienda</p>
            <h2
              id="tienda-teaser-title"
              className="mt-3 text-balance font-serif text-3xl leading-tight text-harbor md:text-[2.5rem]"
            >
              FuXion wellness, from Andrés Rosa
            </h2>
            <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-ink/80">
              Shakes, teas and drinks from the FuXion catalog. Browse online
              and buy in FuXion&apos;s official store.
            </p>
            <SiteLink href="/tienda/en" className="btn mt-6 bg-leaf text-white hover:bg-[#244a37]">
              Visit La Tienda
              <PiArrowRight size={16} aria-hidden="true" />
            </SiteLink>
          </div>

          <div className="grid grid-cols-3 gap-3 md:col-span-6 md:gap-4" aria-hidden="true">
            {shots.map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-[20px] bg-[#F4F1EA]">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 180px, 30vw"
                  className="object-contain p-2 mix-blend-multiply md:p-4"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TiendaTeaser;
