import { productLines, products } from "@/data/fuxion-products";
import { lineNamesEn, productsEn } from "@/data/fuxion-products.en";

export const LOCALES = ["es", "en"];

export const tiendaPath = (locale) => (locale === "en" ? "/tienda/en" : "/tienda");

// Interface copy. Product wording lives in the data files.
export const copy = {
  es: {
    distributor: "Distribuidor Independiente FuXion — Andrés Rosa",
    title: "Bienestar que empieza desde adentro.",
    intro:
      "Explora el catálogo de productos FuXion: bebidas, tés y batidos para cada momento de tu día. Cuando encuentres el tuyo, cómpralo directamente en la tienda oficial de FuXion.",
    seeProducts: "Ver productos",
    howTo: "Elige tu producto, toca «Comprar» y finaliza en la tienda oficial de FuXion.",
    catalog: "Catálogo",
    filterLabel: "Filtrar por línea",
    all: "Todos",
    count: (n) => `${n} ${n === 1 ? "producto" : "productos"}`,
    details: "Ver detalles",
    buy: "Comprar",
    buyLabel: (name) => `Comprar ${name} en la tienda oficial de FuXion (se abre en una pestaña nueva)`,
    close: "Cerrar",
    flavors: (list) => `Sabores: ${list.join(" · ")}`,
    flavor: (one) => `Sabor ${one.toLowerCase()}`,
    benefitsHeading: "Según el catálogo FuXion, ayuda a:",
    ingredients: "Ingredientes",
    contents: "Contenido",
    storeNote:
      "Se abre la tienda oficial de FuXion (en inglés) en una pestaña nueva. Verás a Andrés Rosa como tu patrocinador.",
    fda: "Estas declaraciones no han sido evaluadas por la FDA. Estos productos no están destinados a diagnosticar, tratar, curar o prevenir ninguna enfermedad.",
    noticesLabel: "Avisos",
    noticeDistributor: "Andrés Rosa · Distribuidor Independiente FuXion",
    noticePurchases:
      "Las compras, el pago y el envío se procesan en la tienda oficial de FuXion. Precios en USD según el catálogo FuXion USA vigente; el precio final se confirma al comprar.",
    noticeTranslation: null,
    whatsappMessage: "Hola Andrés, tengo una pregunta sobre los productos FuXion.",
    whatsappLabel: "¿Tienes preguntas? Escríbenos por WhatsApp",
    whatsappText: "¿Tienes preguntas?",
    languageLabel: "Idioma",
  },
  en: {
    distributor: "Independent FuXion Distributor — Andrés Rosa",
    title: "Wellness that starts from within.",
    intro:
      "Explore the FuXion product catalog: drinks, teas and shakes for every moment of your day. When you find yours, buy it directly in FuXion's official store.",
    seeProducts: "See products",
    howTo: "Choose your product, tap “Buy” and check out in FuXion's official store.",
    catalog: "Catalog",
    filterLabel: "Filter by line",
    all: "All",
    count: (n) => `${n} ${n === 1 ? "product" : "products"}`,
    details: "See details",
    buy: "Buy",
    buyLabel: (name) => `Buy ${name} in FuXion's official store (opens in a new tab)`,
    close: "Close",
    flavors: (list) => `Flavors: ${list.join(" · ")}`,
    flavor: (one) => `${one} flavor`,
    benefitsHeading: "According to the FuXion catalog, it helps you:",
    ingredients: "Ingredients",
    contents: "Contents",
    storeNote: "Opens FuXion's official store in a new tab. You'll see Andrés Rosa as your sponsor.",
    fda: "These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.",
    noticesLabel: "Notices",
    noticeDistributor: "Andrés Rosa · Independent FuXion Distributor",
    noticePurchases:
      "Purchases, payment and shipping are processed in FuXion's official store. Prices in USD from the current FuXion USA catalog; the final price is confirmed at checkout.",
    noticeTranslation: "Product descriptions are an English translation of FuXion's official Spanish catalog.",
    whatsappMessage: "Hi Andrés, I have a question about FuXion products.",
    whatsappLabel: "Questions? Message us on WhatsApp",
    whatsappText: "Questions?",
    languageLabel: "Language",
  },
};

const missing = products.filter((p) => !productsEn[p.slug]).map((p) => p.slug);
if (missing.length) {
  throw new Error(`Missing English text for: ${missing.join(", ")}`);
}

export const localizedProducts = (locale) =>
  locale === "en" ? products.map((p) => ({ ...p, ...productsEn[p.slug] })) : products;

export const localizedLines = (locale) =>
  locale === "en" ? productLines.map((l) => ({ ...l, ...lineNamesEn[l.id] })) : productLines;
