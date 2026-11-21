"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { PiArrowUpRight, PiX } from "react-icons/pi";

import { buyUrl, formatPrice } from "@/data/fuxion-products";
import { copy, localizedLines, localizedProducts } from "./locale";

// Header (72px) + sticky chip bar; used to land results just below both.
const HEADER_HEIGHT = 72;

// Keep the unit attached to its number ("5 g" never splits across lines).
const formatSize = (size) => size.replace(/ g\b/g, " g");

const flavorLabel = (flavor, t) =>
  flavor.length > 1 ? t.flavors(flavor) : flavor.length ? t.flavor(flavor[0]) : null;

const BuyButton = ({ product, t, className = "" }) => (
  <a
    href={buyUrl(product)}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={t.buyLabel(product.name)}
    className={`btn min-h-11 bg-leaf !px-5 !py-2.5 text-sm text-white hover:bg-[#244a37] ${className}`}
  >
    {t.buy}
    <PiArrowUpRight size={16} aria-hidden="true" />
  </a>
);

// Packshots have white backgrounds; multiply blends them into the tile.
const ProductImage = ({ product, sizes, className = "" }) => (
  <div className={`relative overflow-hidden bg-[#F4F1EA] ${className}`}>
    <Image
      src={product.image}
      alt={product.name}
      fill
      sizes={sizes}
      className="object-contain p-6 mix-blend-multiply"
    />
  </div>
);

const ProductCard = ({ product, t, onOpen }) => (
  <li className="group relative flex flex-col overflow-hidden rounded-[20px] border border-harbor/[0.08] bg-white">
    <ProductImage
      product={product}
      sizes="(min-width: 1024px) 400px, 50vw"
      className="aspect-square w-full sm:aspect-[4/3]"
    />
    <div className="flex flex-1 flex-col p-3 sm:p-6">
      <h3 className="font-serif text-lg leading-tight text-harbor sm:text-2xl">
        <button
          type="button"
          onClick={() => onOpen(product)}
          aria-haspopup="dialog"
          className="text-left after:absolute after:inset-0 after:rounded-[20px] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-[3px] focus-visible:after:outline-offset-[-3px] focus-visible:after:outline-brand"
        >
          {product.name}
        </button>
      </h3>
      <p className="mt-1 hidden text-sm font-semibold text-leaf sm:block">{product.tagline}</p>
      <span
        className="mt-3 hidden text-sm font-semibold text-brand underline-offset-4 group-hover:underline sm:inline"
        aria-hidden="true"
      >
        {t.details}
      </span>
    </div>
    <div className="relative z-10 flex flex-col gap-3 px-3 pb-3 sm:flex-row sm:items-center sm:justify-between sm:border-t sm:border-harbor/[0.08] sm:px-6 sm:py-4">
      <p className="text-sm text-ink/75">
        <span className="block text-base font-semibold text-harbor sm:text-lg">
          {formatPrice(product.price)}
        </span>
        <span className="whitespace-nowrap text-xs sm:text-sm">{formatSize(product.size)}</span>
      </p>
      <BuyButton product={product} t={t} className="w-full sm:w-auto" />
    </div>
  </li>
);

const ProductDrawer = ({ product, t, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (product && !dialog.open) dialog.showModal();
    if (!product && dialog.open) dialog.close();
  }, [product]);

  useEffect(() => {
    const dialog = ref.current;
    const handleClose = () => onClose();
    dialog?.addEventListener("close", handleClose);
    return () => dialog?.removeEventListener("close", handleClose);
  }, [onClose]);

  const flavor = product ? flavorLabel(product.flavor, t) : null;

  return (
    <dialog
      ref={ref}
      aria-labelledby="drawer-title"
      onClick={(e) => e.target === ref.current && ref.current.close()}
      className="drawer m-0 ml-auto h-[100dvh] max-h-[100dvh] w-full max-w-xl bg-white p-0 text-ink backdrop:bg-harbor/50"
    >
      {product && (
        <div className="flex min-h-full flex-col">
          <div className="sticky top-0 z-10 flex justify-end bg-white/90 p-3 backdrop-blur">
            <button
              type="button"
              onClick={() => ref.current.close()}
              className="flex h-11 w-11 items-center justify-center rounded-full text-harbor hover:bg-sage"
              aria-label={t.close}
            >
              <PiX size={24} aria-hidden="true" />
            </button>
          </div>

          <ProductImage product={product} sizes="576px" className="mx-5 aspect-[4/3] rounded-[20px] sm:mx-8" />

          <div className="flex-1 px-5 pb-8 pt-6 sm:px-8">
            <h2 id="drawer-title" className="font-serif text-3xl leading-tight text-harbor">
              {product.name}
            </h2>
            <p className="mt-1 font-semibold text-leaf">{product.tagline}</p>

            <p className="mt-4 text-lg text-harbor">
              <span className="font-semibold">{formatPrice(product.price)}</span>
              <span className="whitespace-nowrap text-ink/75"> · {formatSize(product.size)}</span>
            </p>
            {flavor && <p className="mt-1 text-sm text-ink/75">{flavor}</p>}

            <p className="mt-6 leading-relaxed text-ink/85">{product.description}</p>

            {product.benefits.length > 0 && (
              <>
                <h3 className="mt-6 text-sm font-semibold text-harbor">
                  {t.benefitsHeading}
                </h3>
                <ul className="mt-3 space-y-2">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 leading-snug text-ink/85">
                      <span className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <details className="group/details mt-6 rounded-xl bg-sage/60 px-4 py-3">
              <summary className="cursor-pointer text-sm font-semibold text-harbor">
                {product.slug === "10-14-active" ? t.contents : t.ingredients}
              </summary>
              <p className="mt-2 leading-relaxed text-ink/85">{product.ingredients}</p>
              {product.notes?.map((note) => (
                <p key={note} className="mt-3 text-sm text-ink/70">
                  {note}
                </p>
              ))}
            </details>

            <p className="mt-6 text-xs leading-relaxed text-ink/70">{t.fda}</p>
          </div>

          <div className="sticky bottom-0 border-t border-harbor/[0.08] bg-white px-5 py-4 sm:px-8">
            <BuyButton product={product} t={t} className="w-full !py-3.5 !text-base" />
            <p className="mt-2 text-center text-xs text-ink/70">{t.storeNote}</p>
          </div>
        </div>
      )}
    </dialog>
  );
};

const Catalog = ({ locale = "es" }) => {
  const t = copy[locale];
  const products = localizedProducts(locale);
  const productLines = localizedLines(locale);
  const [filter, setFilter] = useState("todos");
  const [selected, setSelected] = useState(null);
  const barRef = useRef(null);
  const resultsRef = useRef(null);

  const visibleLines = productLines.filter(
    (line) => filter === "todos" || line.id === filter
  );
  const chips = [{ id: "todos", chip: t.all }, ...productLines];

  const choose = (id) => {
    setFilter(id);
    const results = resultsRef.current;
    if (!results) return;
    const offset = HEADER_HEIGHT + (barRef.current?.offsetHeight ?? 0) + 8;
    const top = results.getBoundingClientRect().top + window.scrollY - offset;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="catalogo" aria-labelledby="catalogo-title" className="pb-24 md:pb-28">
      <div className="page-x">
        <h2
          id="catalogo-title"
          className="font-serif text-4xl leading-[1.05] tracking-[-0.015em] text-harbor md:text-[3.25rem]"
        >
          {t.catalog}
        </h2>

        <div
          ref={barRef}
          className="sticky top-[72px] z-20 -mx-5 mt-4 bg-sage/95 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
        >
          <div
            role="group"
            aria-label={t.filterLabel}
            className="no-scrollbar flex gap-2 overflow-x-auto pr-8 lg:flex-wrap lg:pr-0"
          >
            {chips.map((chip) => {
              const active = filter === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => choose(chip.id)}
                  className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-leaf text-white"
                      : "bg-white text-harbor ring-1 ring-inset ring-leaf/20 hover:ring-leaf/50"
                  }`}
                >
                  {chip.chip}
                </button>
              );
            })}
          </div>
          <span
            className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-sage lg:hidden"
            aria-hidden="true"
          />
        </div>

        <div ref={resultsRef} className="mt-8 space-y-14 sm:space-y-16">
          {visibleLines.map((line) => {
            const items = products.filter((p) => p.line === line.id);
            return (
              <section key={line.id} aria-labelledby={`linea-${line.id}`}>
                <h3
                  id={`linea-${line.id}`}
                  className="flex items-baseline gap-3 font-serif text-2xl text-harbor md:text-3xl"
                >
                  {line.name}
                  <span className="font-sans text-sm font-normal text-ink/70">
                    {t.count(items.length)}
                  </span>
                </h3>
                <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
                  {items.map((product) => (
                    <ProductCard key={product.slug} product={product} t={t} onOpen={setSelected} />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>

      <ProductDrawer product={selected} t={t} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Catalog;
