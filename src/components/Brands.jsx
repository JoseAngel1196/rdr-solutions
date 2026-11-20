import Image from "next/image";

import { brands, brandsRelationship } from "@/content/site";

const groups = [
  { id: "global", label: "Global brands", cols: "md:grid-cols-5" },
  { id: "regional", label: "Regional & local brands", cols: "md:grid-cols-4" },
];

const BrandGrid = ({ id, label, cols }) => {
  const items = brands.filter((brand) => brand.group === id);
  return (
    <div>
      <h3 className="text-base font-semibold text-harbor">{label}</h3>
      <ul
        className={`mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-harbor/10 bg-harbor/10 ${cols}`}
      >
        {items.map((brand) => (
          <li
            key={brand.name}
            className="brand-cell flex h-28 items-center justify-center bg-white px-4 last:odd:col-span-2 md:h-32 md:last:odd:col-span-1"
          >
            <Image
              src={`/assets/images/Brands/${brand.file}`}
              alt={brand.name}
              width={320}
              height={Math.round(320 / brand.ratio)}
              sizes="160px"
              className="brand-logo h-16 w-40 max-w-full object-contain"
              style={{ transform: `scale(${brand.scale})` }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Brands = () => {
  return (
    <section
      id="brands"
      aria-labelledby="brands-title"
      className="bg-white py-20 md:py-28 lg:py-36"
    >
      <div className="page-x">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="brands-title"
            className="font-serif text-4xl leading-[1.05] tracking-[-0.015em] text-harbor md:col-span-7 md:text-[3.5rem]"
          >
            Brand portfolio
          </h2>
          {brandsRelationship && (
            <p className="max-w-[46ch] text-lg leading-relaxed text-ink/75 md:col-span-5">
              {brandsRelationship}
            </p>
          )}
        </div>

        <div className="mt-14 space-y-12">
          {groups.map((group) => (
            <BrandGrid key={group.id} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
