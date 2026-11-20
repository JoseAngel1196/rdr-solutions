import Image from "next/image";

import Catalog from "@/components/tienda/Catalog";
import WhatsAppButton from "@/components/tienda/WhatsAppButton";
import { CATALOG_EDITION } from "@/data/fuxion-products";

const title = "Tienda FuXion — Andrés Rosa";
const description =
  "Catálogo de productos FuXion de Andrés Rosa, Distribuidor Independiente FuXion. Las compras se procesan en la tienda oficial de FuXion.";

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/tienda" },
  openGraph: {
    type: "website",
    url: "/tienda",
    siteName: "RDR Solutions",
    title,
    description,
    locale: "es_US",
  },
  twitter: { card: "summary_large_image", title, description },
};

const heroShots = [
  { src: "/tienda/vera.webp", alt: "Vera+" },
  { src: "/tienda/golden-flx.webp", alt: "Golden FLX" },
  { src: "/tienda/beauty-in.webp", alt: "Beauty-In" },
];

export default function TiendaPage() {
  return (
    <div className="bg-sage">
      <section aria-labelledby="tienda-title" className="overflow-hidden pb-14 pt-10 md:pb-20 md:pt-16">
        <div className="page-x grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-leaf ring-1 ring-leaf/15">
              Distribuidor Independiente FuXion — Andrés Rosa
            </p>
            <h1
              id="tienda-title"
              className="hero-rise mt-6 max-w-[14ch] font-serif text-[clamp(42px,5.5vw,68px)] leading-[1.02] tracking-[-0.02em] text-harbor"
            >
              Bienestar que empieza desde adentro.
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink/80">
              Explora el catálogo de productos FuXion: bebidas, tés y batidos
              para cada momento de tu día. Cuando encuentres el tuyo, cómpralo
              directamente en la tienda oficial de FuXion.
            </p>
            <a href="#catalogo" className="btn mt-8 bg-leaf text-white hover:bg-[#244a37]">
              Ver productos
            </a>
            <p className="mt-4 text-sm text-ink/75">
              Elige tu producto, toca «Comprar» y finaliza en la tienda oficial
              de FuXion.
            </p>
          </div>

          <div className="lg:col-span-6" aria-hidden="true">
            {/* Three equal tiles so the products read at a similar scale. */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {heroShots.map((shot, i) => (
                <div
                  key={shot.src}
                  className={`relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[#F4F1EA] ${
                    i === 2 ? "col-span-2 mx-auto w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.5rem)]" : ""
                  }`}
                >
                  <Image
                    src={shot.src}
                    alt=""
                    fill
                    priority={i === 0}
                    sizes="(min-width: 1024px) 300px, 45vw"
                    className="object-contain p-6 mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      <Catalog />

      <section aria-label="Avisos" className="border-t border-leaf/10 bg-white py-12">
        <div className="page-x">
          <div className="max-w-3xl space-y-3 text-sm leading-relaxed text-ink/75">
          <p className="font-semibold text-harbor">
            Distribuidor Independiente FuXion. Las compras se procesan en la
            tienda oficial de FuXion.
          </p>
          <p>
            Estas declaraciones no han sido evaluadas por la FDA. Estos
            productos no están destinados a diagnosticar, tratar, curar o
            prevenir ninguna enfermedad.
          </p>
          <p>
            Precios en dólares estadounidenses según el {CATALOG_EDITION}. El
            precio final se confirma en la tienda oficial de FuXion.
          </p>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
