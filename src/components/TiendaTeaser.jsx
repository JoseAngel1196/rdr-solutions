import SiteLink from "./SiteLink";

// Kept away from the brand portfolio on purpose: FuXion is a separate,
// personal line of the business, not one of the brands RDR represents.
const TiendaTeaser = () => {
  return (
    <section aria-labelledby="tienda-teaser-title" className="bg-sage py-16 md:py-20">
      <div className="page-x grid gap-8 md:grid-cols-12 md:items-center">
        <div className="md:col-span-8">
          <h2
            id="tienda-teaser-title"
            className="font-serif text-3xl leading-tight text-harbor md:text-[2.5rem]"
          >
            La Tienda: FuXion wellness products
          </h2>
          <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-ink/80">
            Browse the FuXion catalog from Andrés Rosa, Independent FuXion
            Distributor. Purchases are processed in FuXion&apos;s official
            store. The catalog is in Spanish.
          </p>
        </div>
        <div className="md:col-span-4 md:justify-self-end">
          <SiteLink href="/tienda" lang="es" className="btn bg-leaf text-white hover:bg-[#244a37]">
            Visitar La Tienda
          </SiteLink>
        </div>
      </div>
    </section>
  );
};

export default TiendaTeaser;
