"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { PiArrowUpRight, PiX } from "react-icons/pi";

import {
  buyUrl,
  formatPrice,
  productLines,
  products,
} from "@/data/fuxion-products";

const firstSentence = (text) => {
  const match = text.match(/^.*?[.!?](\s|$)/);
  return (match ? match[0] : text).trim();
};

const flavorLabel = (flavor) =>
  flavor.length > 1 ? `Sabores: ${flavor.join(" · ")}` : flavor.length ? `Sabor ${flavor[0].toLowerCase()}` : null;

const BuyButton = ({ product, className = "" }) => (
  <a
    href={buyUrl(product)}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Comprar ${product.name} en la tienda oficial de FuXion (se abre en una pestaña nueva)`}
    className={`btn bg-leaf !px-5 !py-2.5 text-sm text-white hover:bg-[#244a37] ${className}`}
  >
    Comprar
    <PiArrowUpRight size={16} aria-hidden="true" />
  </a>
);

const ProductImage = ({ product, sizes, priority = false, className = "" }) => (
  <div
    className={`relative overflow-hidden ${product.imageTone === "dark" ? "bg-[#111]" : "bg-white"} ${className}`}
  >
    <Image
      src={product.image}
      alt={product.name}
      fill
      sizes={sizes}
      priority={priority}
      className={product.imageTone === "dark" ? "object-cover" : "object-contain p-3"}
    />
  </div>
);

const ProductCard = ({ product, onOpen }) => (
  <li className="group relative flex flex-col overflow-hidden rounded-[20px] border border-harbor/[0.08] bg-white">
    <ProductImage
      product={product}
      sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 92vw"
      className="aspect-[4/3] w-full"
    />
    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <h3 className="font-serif text-2xl leading-tight text-harbor">
        <button
          type="button"
          onClick={() => onOpen(product)}
          aria-haspopup="dialog"
          className="text-left after:absolute after:inset-0 after:rounded-[20px] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-[3px] focus-visible:after:outline-offset-[-3px] focus-visible:after:outline-brand"
        >
          {product.name}
        </button>
      </h3>
      <p className="mt-1 text-sm font-semibold text-leaf">{product.tagline}</p>
      <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-ink/75">
        {firstSentence(product.description)}
      </p>
      <span className="mt-3 text-sm font-semibold text-brand underline-offset-4 group-hover:underline" aria-hidden="true">
        Ver detalles
      </span>
    </div>
    <div className="relative z-10 flex items-center justify-between gap-3 border-t border-harbor/[0.08] px-5 py-4 sm:px-6">
      <p className="text-sm text-ink/75">
        <span className="block text-lg font-semibold text-harbor">{formatPrice(product.price)}</span>
        {product.size}
      </p>
      <BuyButton product={product} />
    </div>
  </li>
);

const ProductDrawer = ({ product, onClose }) => {
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

  const flavor = product ? flavorLabel(product.flavor) : null;

  return (
    <dialog
      ref={ref}
      aria-labelledby="drawer-title"
      onClick={(e) => e.target === ref.current && ref.current.close()}
      className="drawer m-0 ml-auto h-[100dvh] max-h-[100dvh] w-full max-w-xl bg-white p-0 text-ink backdrop:bg-harbor/50"
    >
      {product && (
        <div className="flex min-h-full flex-col" lang="es">
          <div className="sticky top-0 z-10 flex justify-end bg-white/90 p-3 backdrop-blur">
            <button
              type="button"
              onClick={() => ref.current.close()}
              className="flex h-11 w-11 items-center justify-center rounded-full text-harbor hover:bg-sage"
              aria-label="Cerrar"
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
              <span className="text-ink/75"> · {product.size}</span>
            </p>
            {flavor && <p className="mt-1 text-sm text-ink/75">{flavor}</p>}

            <p className="mt-6 leading-relaxed text-ink/85">{product.description}</p>

            {product.benefits.length > 0 && (
              <>
                <h3 className="mt-6 text-sm font-semibold text-harbor">
                  Según el catálogo FuXion, ayuda a:
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

            <h3 className="mt-6 text-sm font-semibold text-harbor">
              {product.slug === "10-14-active" ? "Contenido" : "Ingredientes"}
            </h3>
            <p className="mt-2 leading-relaxed text-ink/85">{product.ingredients}</p>

            {product.notes?.map((note) => (
              <p key={note} className="mt-4 text-sm text-ink/70">
                {note}
              </p>
            ))}
          </div>

          <div className="sticky bottom-0 border-t border-harbor/[0.08] bg-white px-5 py-4 sm:px-8">
            <BuyButton product={product} className="w-full !py-3.5 !text-base" />
            <p className="mt-2 text-center text-xs text-ink/70">
              Se abre la tienda oficial de FuXion en una pestaña nueva.
            </p>
          </div>
        </div>
      )}
    </dialog>
  );
};

const Catalog = () => {
  const [filter, setFilter] = useState("todos");
  const [selected, setSelected] = useState(null);

  const visibleLines = productLines.filter(
    (line) => filter === "todos" || line.id === filter
  );
  const chips = [{ id: "todos", chip: "Todos" }, ...productLines];

  return (
    <section id="catalogo" aria-labelledby="catalogo-title" className="pb-20 md:pb-28">
      <div className="page-x">
        <h2
          id="catalogo-title"
          className="font-serif text-4xl leading-[1.05] tracking-[-0.015em] text-harbor md:text-[3.25rem]"
        >
          Catálogo
        </h2>

        <div
          role="group"
          aria-label="Filtrar por línea"
          className="no-scrollbar -mx-5 mt-6 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {chips.map((chip) => {
            const active = filter === chip.id;
            return (
              <button
                key={chip.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(chip.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
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

        <div className="mt-10 space-y-16">
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
                    {items.length} {items.length === 1 ? "producto" : "productos"}
                  </span>
                </h3>
                <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((product) => (
                    <ProductCard key={product.slug} product={product} onOpen={setSelected} />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>

      <ProductDrawer product={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Catalog;
