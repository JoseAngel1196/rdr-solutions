import Image from "next/image";
import Link from "next/link";

// The hero visual rebuilds the chevron from the RDR mark: the rising leg is a
// window onto the warehouse, the falling leg is the logo's lighter blue.
const Chevron = () => (
  <div className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[30rem] lg:max-w-[36rem]">
    <div
      className="hero-leg-left absolute inset-0"
      style={{
        maskImage: "url(/assets/images/chevron-mask.svg)",
        WebkitMaskImage: "url(/assets/images/chevron-mask.svg)",
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
      }}
    >
      <Image
        src="/assets/images/photos/warehouse-aisle.jpg"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 36rem, (min-width: 640px) 30rem, 22rem"
        quality={55}
        className="object-cover object-[50%_30%]"
      />
      <div className="absolute inset-0 bg-brand/25 mix-blend-multiply" />
    </div>

    <svg
      viewBox="0 0 560 560"
      className="hero-leg-right absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <line
        x1="326"
        y1="184"
        x2="448"
        y2="322"
        stroke="#16264A"
        strokeOpacity="0.28"
        strokeWidth="140"
        strokeLinecap="round"
      />
      <line
        x1="336"
        y1="192"
        x2="452"
        y2="322"
        stroke="#6C9DD7"
        strokeWidth="132"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16 lg:pb-28"
    >
      <div className="page-x grid items-center gap-12 md:grid-cols-12 md:gap-6 lg:gap-8">
        <div className="md:col-span-7">
          <h1
            id="hero-title"
            className="hero-rise max-w-[14ch] font-serif text-[2.75rem] leading-[1.02] tracking-[-0.02em] text-harbor sm:text-6xl md:text-[3.6rem] lg:text-[5.25rem]"
            style={{ animationDelay: "80ms" }}
          >
            Boosting growth with fast and affordable solutions
          </h1>
          <p
            className="hero-rise mt-6 max-w-[34ch] text-lg leading-relaxed text-ink/80 sm:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            Designed to fit your business needs. Consulting, commercial
            execution, sourcing and websites, from one partner.
          </p>
          <div
            className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "320ms" }}
          >
            <Link href="/contact" className="btn-signal">
              Let&apos;s grow together
            </Link>
            <Link href="/#services" className="btn-ghost">
              See our services
            </Link>
          </div>
        </div>

        <div className="md:col-span-5">
          <Chevron />
        </div>
      </div>
    </section>
  );
};

export default Hero;
