import Image from "next/image";
import Link from "next/link";

import { brands } from "@/content/site";

const globalBrands = brands.filter((brand) => brand.group === "global");

// The hero visual rebuilds the RDR logo mark: the rising leg is a window onto
// the warehouse, the falling leg is the logo's lighter blue.
const LogoMark = () => (
  <div className="relative aspect-[560/640] w-[245px] sm:w-[300px] lg:w-[420px] xl:w-[560px]">
    <div
      className="mark-leg-rise absolute inset-0 bg-brand"
      style={{
        maskImage: "url(/assets/images/chevron-mask.svg)",
        WebkitMaskImage: "url(/assets/images/chevron-mask.svg)",
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
      }}
    >
      <div className="mark-photo absolute inset-0">
        <Image
          src="/assets/images/photos/warehouse-aisle.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 1280px) 560px, (min-width: 1024px) 420px, (min-width: 640px) 300px, 245px"
          quality={55}
          className="object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0 bg-brand/25 mix-blend-multiply" />
      </div>
    </div>

    <svg
      viewBox="0 0 560 640"
      className="mark-leg-fall absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <line
        x1="344"
        y1="206"
        x2="458"
        y2="364"
        stroke="#16264A"
        strokeOpacity="0.28"
        strokeWidth="158"
        strokeLinecap="round"
      />
      <line
        x1="354"
        y1="214"
        x2="462"
        y2="364"
        stroke="#6C9DD7"
        strokeWidth="150"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

const BrandStrip = () => (
  <div className="mt-12">
    <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-harbor/70">
      Brands in our network
    </p>
    <ul className="no-scrollbar -mx-5 mt-4 flex snap-x snap-mandatory items-center gap-10 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      {globalBrands.map((brand) => (
        <li key={brand.name} className="shrink-0 snap-start">
          <Image
            src={`/assets/images/Brands/${brand.file}`}
            alt={brand.name}
            width={Math.round(32 * brand.ratio)}
            height={32}
            className="h-8 w-auto"
          />
        </li>
      ))}
    </ul>
  </div>
);

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-16 pt-8 md:pb-24 md:pt-14 lg:pb-28"
    >
      <div className="page-x grid items-center gap-10 sm:grid-cols-[minmax(0,1fr)_300px] sm:gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_560px]">
        <div className="sm:order-2">
          <LogoMark />
        </div>

        <div className="min-w-0 sm:order-1">
          <h1
            id="hero-title"
            className="hero-rise max-w-[13ch] font-serif text-[clamp(44px,6vw,76px)] leading-none tracking-[-0.02em] text-harbor"
            style={{ animationDelay: "80ms" }}
          >
            From the factory to the shelf, one partner.
          </h1>
          <p
            className="hero-rise mt-6 max-w-[40ch] text-lg leading-relaxed text-ink/80 sm:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            Consulting, commercial execution and sourcing for consumer brands
            that want to grow in retail — plus the website to match.
          </p>
          <div
            className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{ animationDelay: "320ms" }}
          >
            <Link href="/contact" className="btn-signal">
              Let&apos;s grow together
            </Link>
            <Link href="/#services" className="btn-ghost">
              See our services
            </Link>
          </div>
          <div className="hero-rise" style={{ animationDelay: "440ms" }}>
            <BrandStrip />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
