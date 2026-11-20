import Image from "next/image";

import { PiArrowSquareOut, PiCursorClick, PiPackage } from "react-icons/pi";

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

const steps = [
  { icon: PiCursorClick, text: "Elige tu producto en el catálogo." },
  { icon: PiArrowSquareOut, text: "Toca “Comprar” y se abre la tienda oficial de FuXion." },
  { icon: PiPackage, text: "FuXion procesa el pago y el envío." },
];

const heroShots = [
  { src: "/tienda/vera.webp", alt: "Vera+" },
  { src: "/tienda/golden-flx.webp", alt: "Golden FLX" },
  { src: "/tienda/beauty-in.webp", alt: "Beauty-In" },
];

export default function TiendaPage() {
  return (
    <div lang="es" className="bg-sage">
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
          </div>

          <div className="lg:col-span-6" aria-hidden="true">
            <div className="grid grid-cols-5 grid-rows-2 gap-3 sm:gap-4">
              <div className="relative col-span-3 row-span-2 aspect-[4/5] overflow-hidden rounded-[28px] bg-white">
                <Image src={heroShots[0].src} alt="" fill priority sizes="(min-width: 1024px) 360px, 60vw" className="object-contain p-4" />
              </div>
              {heroShots.slice(1).map((shot) => (
                <div key={shot.src} className="relative col-span-2 overflow-hidden rounded-[24px] bg-white">
                  <Image src={shot.src} alt="" fill sizes="(min-width: 1024px) 240px, 40vw" className="object-contain p-3" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="page-x mt-14">
          <ol className="grid gap-3 rounded-[24px] bg-white/70 p-5 ring-1 ring-leaf/10 sm:grid-cols-3 sm:gap-6 sm:p-6">
            {steps.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-base text-ink/85">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sprout text-leaf">
                  <Icon size={20} aria-hidden="true" />
                </span>
                {text}
              </li>
            ))}
          </ol>
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
