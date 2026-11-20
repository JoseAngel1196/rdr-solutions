import Image from "next/image";

import { brands } from "@/content/site";

// Size every logo to the same visual area so wide and tall marks feel equal.
const logoWidth = (ratio) => `calc(var(--logo-unit) * ${Math.sqrt(ratio).toFixed(3)})`;

const Brands = () => {
  return (
    <section
      id="brands"
      aria-labelledby="brands-title"
      className="bg-white py-20 md:py-28"
    >
      <div className="page-x">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="brands-title"
            className="font-serif text-4xl leading-[1.05] tracking-[-0.015em] text-harbor md:col-span-7 md:text-[3.5rem]"
          >
            The brands we work with
          </h2>
          <p className="max-w-[46ch] text-lg leading-relaxed text-ink/75 md:col-span-5">
            A strong distribution network representing global brands alongside
            strong regional and local ones.
          </p>
        </div>

        <ul
          className="mt-14 flex flex-wrap justify-center border-t border-harbor/10 [--logo-unit:52px] sm:[--logo-unit:58px] lg:[--logo-unit:66px]"
          aria-label="Brand portfolio"
        >
          {brands.map((brand) => (
            <li
              key={brand.name}
              className="brand-cell flex h-32 w-1/2 items-center justify-center border-b border-harbor/10 px-4 sm:h-36 sm:w-1/3 lg:h-40 lg:w-1/5"
            >
              <Image
                src={`/assets/images/Brands/${brand.file}`}
                alt={brand.name}
                width={400}
                height={Math.round(400 / brand.ratio)}
                sizes="(min-width: 1024px) 190px, 150px"
                className="brand-logo h-auto max-w-full"
                style={{ width: logoWidth(brand.ratio) }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Brands;
