import Image from "next/image";

import SiteLink from "@/components/SiteLink";
import Catalog from "./Catalog";
import WhatsAppButton from "./WhatsAppButton";
import { copy, tiendaPath } from "./locale";

const heroShots = ["/tienda/vera.webp", "/tienda/golden-flx.webp", "/tienda/beauty-in.webp"];

const languages = [
  { locale: "es", label: "Español" },
  { locale: "en", label: "English" },
];

const LanguageSwitch = ({ locale, label }) => (
  <nav aria-label={label} className="mb-6 flex gap-1 text-sm font-semibold">
    {languages.map((lang) =>
      lang.locale === locale ? (
        <span key={lang.locale} aria-current="page" className="rounded-full bg-leaf px-3 py-1.5 text-white">
          {lang.label}
        </span>
      ) : (
        <SiteLink
          key={lang.locale}
          href={tiendaPath(lang.locale)}
          hrefLang={lang.locale}
          lang={lang.locale}
          className="rounded-full px-3 py-1.5 text-leaf hover:bg-white"
        >
          {lang.label}
        </SiteLink>
      )
    )}
  </nav>
);

// Shared body of /tienda (Spanish) and /tienda/en (English).
export default function TiendaPage({ locale }) {
  const t = copy[locale];

  return (
    <div className="bg-sage">
      <section aria-labelledby="tienda-title" className="overflow-hidden pb-14 pt-8 md:pb-20 md:pt-12">
        <div className="page-x grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <LanguageSwitch locale={locale} label={t.languageLabel} />
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-leaf ring-1 ring-leaf/15">
              {t.distributor}
            </p>
            <h1
              id="tienda-title"
              className="hero-rise mt-6 max-w-[14ch] font-serif text-[clamp(42px,5.5vw,68px)] leading-[1.02] tracking-[-0.02em] text-harbor"
            >
              {t.title}
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink/80">{t.intro}</p>
            <a href="#catalogo" className="btn mt-8 bg-leaf text-white hover:bg-[#244a37]">
              {t.seeProducts}
            </a>
            <p className="mt-4 text-sm text-ink/75">{t.howTo}</p>
          </div>

          <div className="lg:col-span-6" aria-hidden="true">
            {/* Three equal tiles so the products read at a similar scale. */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {heroShots.map((src, i) => (
                <div
                  key={src}
                  className={`relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[#F4F1EA] ${
                    i === 2 ? "col-span-2 mx-auto w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.5rem)]" : ""
                  }`}
                >
                  <Image
                    src={src}
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

      <Catalog locale={locale} />

      <section aria-label={t.noticesLabel} className="border-t border-leaf/15 bg-sage py-8">
        <div className="page-x">
          <div className="max-w-3xl space-y-2 text-[13px] leading-relaxed text-ink/75">
            {/* TODO(client): append " · ID 3540969" (Andrés's FuXion distributor
                ID, shown on his store page) only once he approves showing it. */}
            <p className="font-semibold text-harbor">{t.noticeDistributor}</p>
            {/* Prices come from CATALOG_EDITION in src/data/fuxion-products.ts. */}
            <p>{t.noticePurchases}</p>
            {t.noticeTranslation && <p>{t.noticeTranslation}</p>}
            <p>{t.fda}</p>
          </div>
        </div>
      </section>

      <WhatsAppButton locale={locale} />
    </div>
  );
}
