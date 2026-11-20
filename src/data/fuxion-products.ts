// FuXion catalog for /tienda. All product wording is taken from the official
// FuXion USA catalog (Catálogo español US, edición N° 240715). Update prices
// here; nothing else on the page needs to change.
//
// Benefits that claim to prevent, treat or reduce the risk of a condition are
// intentionally left out, even where the catalog includes them.

// The bare store link (ifuxion.com/Andresantorosa) first asks the visitor to
// pick a customer type; choosing "cliente preferente" lands on this product
// list, so we link straight to it.
export const STORE_URL = "https://ifuxion.com/andresantorosa/enrollment/products";

// TODO(client): WhatsApp number in international format, digits only
// (e.g. "13055551234"). While empty, the button opens WhatsApp with the
// message prefilled and lets the visitor pick a contact.
export const WHATSAPP_NUMBER = "";

// Each line's category page in the FuXion store, used when a product has no
// productUrl of its own.
export const LINE_STORE_URL: Record<ProductLineId, string> = {
  limpia: "https://ifuxion.com/andresantorosa/enrollment/products/1134",
  regenera: "https://ifuxion.com/andresantorosa/enrollment/products/1135",
  revitaliza: "https://ifuxion.com/andresantorosa/enrollment/products/1136",
  inmunologica: "https://ifuxion.com/andresantorosa/enrollment/products/1138",
  peso: "https://ifuxion.com/andresantorosa/enrollment/products/1139",
  "anti-edad": "https://ifuxion.com/andresantorosa/enrollment/products/1140",
  "vigor-mental": "https://ifuxion.com/andresantorosa/enrollment/products/1141",
  sport: "https://ifuxion.com/andresantorosa/enrollment/products/1142",
};

export const CATALOG_EDITION = "Catálogo FuXion USA, edición N° 240715";

export type ProductLineId =
  | "limpia"
  | "regenera"
  | "revitaliza"
  | "inmunologica"
  | "peso"
  | "anti-edad"
  | "vigor-mental"
  | "sport";

export interface ProductLine {
  id: ProductLineId;
  /** Name as printed in the catalog index. */
  name: string;
  /** Short label for the filter chips. */
  chip: string;
}

export interface FuxionProduct {
  slug: string;
  name: string;
  line: ProductLineId;
  tagline: string;
  description: string;
  /** Official "ayuda a…" points, minus any disease/risk claims. */
  benefits: string[];
  ingredients: string;
  /** USD, as printed in the catalog. */
  price: number;
  size: string;
  /** One entry per flavour; empty when the catalog lists none. */
  flavor: string[];
  image: string;
  /** Catalog footnotes referenced by (*) in the text. */
  notes?: string[];
  /** Direct product link in the FuXion store; falls back to STORE_URL. */
  productUrl?: string;
}

export const productLines: ProductLine[] = [
  { id: "limpia", name: "Limpia tu cuerpo", chip: "Limpia tu cuerpo" },
  { id: "regenera", name: "Regenera tus células", chip: "Regenera tus células" },
  { id: "revitaliza", name: "Revitaliza tu energía", chip: "Revitaliza tu energía" },
  { id: "inmunologica", name: "Línea inmunológica", chip: "Inmunológica" },
  { id: "peso", name: "Línea control de peso y medidas", chip: "Control de peso" },
  { id: "anti-edad", name: "Línea anti-edad", chip: "Anti-edad" },
  { id: "vigor-mental", name: "Línea vigor mental", chip: "Vigor mental" },
  { id: "sport", name: "Línea sport", chip: "Sport" },
];

const DIETA = "(*) Junto a una dieta balanceada y ejercicio.";

export const products: FuxionProduct[] = [
  // ── Limpia tu cuerpo ──────────────────────────────────────────────
  {
    slug: "flora-liv",
    name: "Flora Liv",
    line: "limpia",
    tagline: "¡Protege tu organismo desde adentro!",
    description:
      "Bacterias probióticas, cuya acción en el intestino se potencia con la ayuda de la fibra prebiótica, así como las vitaminas y minerales que contiene.",
    benefits: [
      "Regenerar y equilibrar la flora intestinal, necesaria para la correcta asimilación de los nutrientes.",
      "Mantener activo tu sistema de defensa.",
    ],
    ingredients: "Cultivos probióticos + Fibra prebiótica + Pulpa de granadilla + Aguaymanto",
    price: 53.0,
    size: "28 sobres × 5 g",
    flavor: ["Granadilla"],
    image: "/tienda/flora-liv.webp",
  },
  {
    slug: "liquid-fiber",
    name: "Liquid Fiber",
    line: "limpia",
    tagline: "¡Nutrición prebiótica, para un sistema digestivo puntual!",
    description:
      "Fibra soluble y micronutrientes que, en conjunto, nutren la flora intestinal y trabajan sinérgicamente dentro de tu organismo.",
    benefits: [
      "Contribuye a normalizar la frecuencia de las evacuaciones intestinales de manera natural.",
      "Mejorar el balance de la flora intestinal.",
      "Promover la salud digestiva.",
    ],
    ingredients: "Fibras prebiótica + Vitaminas + Minerales",
    price: 44.0,
    size: "28 sobres × 5 g",
    flavor: ["Limón"],
    image: "/tienda/liquid-fiber.webp",
  },
  {
    slug: "guindon-x",
    name: "Guindon X",
    line: "limpia",
    tagline: "¡Libera el tránsito en tu sistema digestivo!",
    description: "Té herbal a base de fibras solubles.",
    benefits: [
      "Sentirte más liviano sin las molestias de la hinchazón abdominal.",
      "Tener un adecuado tránsito intestinal.",
      "Liberarte de desechos perjudiciales para tu organismo.",
    ],
    ingredients:
      "Mix de fibras (psyllium, inulina de achicoria, mucílago de linaza) + Extracto de guindón + Kelp + Anís estrella",
    price: 44.0,
    size: "Doypack · 28 × 5 g",
    flavor: ["Guindón"],
    image: "/tienda/guindon-x.webp",
  },
  {
    slug: "berry-balance",
    name: "Berry Balance",
    line: "limpia",
    tagline: "¡Protege tu organismo y mantenlo en perfecto equilibrio!",
    description:
      "Delicioso concentrado de antioxidantes extraídos de bayas (berries) que ayudan a mantener saludable tu sistema urinario de manera natural y más completa.",
    benefits: [
      "Evitar la retención de líquidos.",
      "Promover el equilibrio del pH de la flora que protege el tracto urinario.",
    ],
    ingredients:
      "Cranberry + Concentrado de berries y frutas tropicales + Infusión de piña + Bacterias probióticas + Antocianina + Calcio orgánico + Vitaminas C y E",
    price: 55.0,
    size: "28 sobres × 5 g",
    flavor: ["Cranberry piña"],
    image: "/tienda/berry-balance.webp",
  },
  {
    slug: "alpha-balance",
    name: "αBalance",
    line: "limpia",
    tagline: "¡Mantén tu cuerpo balanceado, limpio y desintoxicado!",
    description:
      "Bebida saludable con ingredientes reconocidos como alcalinizantes que ayudan a promover la limpieza de elementos tóxicos de tu organismo para que puedas vivir sano y con energía.",
    benefits: [
      "Mantener tu organismo balanceado, limpio y desintoxicado.",
      "Liberarte de residuos y toxinas perjudiciales para tu organismo.",
      "Tener más energía para que tu cuerpo funcione correctamente.",
    ],
    ingredients:
      "Alfalfa + Algas (chlorella + espirulina) + Pasto de trigo (libre de gluten) + Espinaca + Manzana verde + Limón + Jengibre + Minerales (magnesio + zinc)",
    price: 44.0,
    size: "28 sobres × 5 g",
    flavor: ["Manzana verde"],
    image: "/tienda/alpha-balance.webp",
  },
  {
    slug: "rexet",
    name: "Rexet",
    line: "limpia",
    tagline: "¡Prepara y reinicia tu cuerpo!",
    description:
      "Refresco efervescente con ingredientes que contribuyen a reactivarte mientras promueven una función detox y ayudan al correcto funcionamiento del hígado.",
    benefits: [
      "Mantener óptimas las funciones metabólicas del hígado.",
      "Mantener el cuerpo en equilibrio, favoreciendo la eliminación de las toxinas.",
      "Promover la función depurativa desde el sistema digestivo.",
    ],
    ingredients:
      "Mix de extractos vegetales (tuna roja, hierbaluisa o limonaria, clorofila, acerola, cúrcuma, perejil, alcachofa), mix péptidos y aminoácidos: colágeno hidrolizado, taurina, cisteína, colágeno, mix de vitaminas y minerales: complejo B (vit B1, B2, niacinamida, B6, B9 (ácido fólico), B12), magnesio, zinc",
    price: 44.0,
    size: "28 sobres × 5 g",
    flavor: ["Tuna roja"],
    image: "/tienda/rexet.webp",
  },

  // ── Regenera tus células ──────────────────────────────────────────
  {
    slug: "biopro-tect",
    name: "Biopro+ Tect",
    line: "regenera",
    tagline: "¡Activa tu sistema natural de protección!",
    description:
      "Delicioso batido instantáneo a base de la proteína de la más alta calidad: Bioprotein+ con Colostrum®, formulación patentada por FuXion® con 100% de Valor Biológico. Complemento de una sana nutrición diaria que activa y potencia el sistema de defensas del organismo.",
    benefits: [
      "Elevar cualitativa y cuantitativamente el perfil proteico de la dieta diaria.",
      "Mejorar los procesos de regeneración celular.",
      "Mantener saludable el sistema de defensas del organismo.",
      "Fortalecer los huesos.",
    ],
    ingredients:
      "Bioprotein+ con Colostrum® + Bioferrín® + Aminoácidos + Calcio lácteo + DHA y ARA",
    price: 41.0,
    size: "14 sobres × 25 g",
    flavor: ["Vainilla"],
    image: "/tienda/biopro-tect.webp",
  },
  {
    slug: "protein-active",
    name: "Protein Active",
    line: "regenera",
    tagline: "¡Dale a tu cuerpo nutrición avanzada!",
    description:
      "Proteína activa de origen 100% vegetal, de alta biodisponibilidad y digestibilidad que complementa perfectamente tu alimentación diaria para mantener una salud óptima. Bioprotein Active® es una combinación de proteína activa a base de proteínas de algas y vegetales germinados procesados a bajas temperaturas; lo que permite que los germinados se mantengan en pleno proceso de desarrollo y crecimiento convirtiéndola en un alimento vivo, con nutrientes activos.",
    benefits: [
      "Una asimilación óptima de aminoácidos esenciales, lo que le permitirá a tu cuerpo regenerar sus tejidos en menor tiempo.",
      "Elevar cualitativa y cuantitativamente el perfil proteico de la dieta diaria de forma más eficaz.",
      "Reducir el daño oxidativo que afecta tu sistema natural de defensa y tu desempeño mental.",
    ],
    ingredients:
      "Bioprotein Active® (proteína de quinua germinada, de arroz germinado, de arveja, de algas) + Aminoácidos + Vitaminas + DHA y ARA + Aceite de coco",
    price: 48.0,
    size: "14 sobres × 25 g",
    flavor: ["Vainilla y canela", "Chocolate con avellanas"],
    image: "/tienda/protein-active.webp",
  },

  // ── Revitaliza tu energía ─────────────────────────────────────────
  {
    slug: "vita-xtra-t",
    name: "Vita Xtra T+",
    line: "revitaliza",
    tagline: "¡Recupera tu vitalidad cada día!",
    description:
      "Bebida rica en antioxidantes y energizantes a partir de extractos frutales. Su fórmula potencia el efecto energizante del Té Verde y el Acai Berry con extracto de Guayusa, fruto de la Amazonía ecuatoriana; la resistencia física otorgada por el Micelio de Cordyceps y la Maca, es ahora reforzada con Goji Berry; y el efecto antioxidante de las antocianinas del maíz morado, con la vitamina C del limón. ¡Bebida con un delicioso sabor a refresco de maíz morado!",
    benefits: [
      "Mantenerte alerta y de buen ánimo.",
      "Mejorar tu rendimiento físico y desempeño diario en general.",
      "Reducir la oxidación de las células y la proliferación de radicales libres que pueden afectar tu metabolismo y tu sistema inmune.",
    ],
    ingredients:
      "Guayusa + Té verde + Acai berry + Goji berry + Micelio de cordyceps + Maca + Ginseng + Antocianina de maíz morado",
    price: 44.0,
    size: "28 sobres × 5 g",
    flavor: ["Chicha morada"],
    image: "/tienda/vita-xtra-t.webp",
  },
  {
    slug: "nutraday",
    name: "Nutraday",
    line: "revitaliza",
    tagline: "¡Brinda a tu cuerpo los nutrientes que necesita!",
    description:
      "Delicioso refresco natural sabor a fresa, con los micronutrientes que tu familia y tú necesitan para ayudar a mantener la vitalidad y fortalecer sus defensas. Está potenciado con Extracto de Moringa [fuente natural de hierro y calcio]. Este delicioso mix es el alimento ideal para complementar la nutrición de tu familia, desde tus hijos a tus abuelos.",
    benefits: [
      "Complementar tu nutrición con la dosis adecuada de antioxidantes, vitaminas y minerales.",
      "Mantener en estado óptimo tu sistema inmunológico.",
      "Tener un óptimo desarrollo físico y mental.",
    ],
    ingredients:
      "Extracto de moringa + Guayaba + Limón + Albahaca + Camu camu + Acai berry + Acerola + Quinua germinada (fuentes naturales de antioxidantes, 12 vitaminas y 5 minerales orgánicos)",
    price: 44.0,
    size: "28 sobres × 5 g",
    flavor: ["Natural a fresa"],
    image: "/tienda/nutraday.webp",
  },

  // ── Línea inmunológica ────────────────────────────────────────────
  {
    slug: "vera",
    name: "Vera+",
    line: "inmunologica",
    tagline: "¡Refuerza tu cuerpo de manera inteligente!",
    description:
      "Combinación herbal con ingredientes que ayudan a fortalecer y mantener activo a tu sistema inmunológico.",
    benefits: [
      "Mantener activas las defensas naturales.",
      "Reducir el daño oxidativo que ocasiona el deterioro celular.",
    ],
    ingredients:
      "Extracto de aloe vera + Beta glucanos + Mix de aminoácidos (N-acetilcisteína + Glicina + L-glutamina) + Extracto de hoja de oliva + Amalaki (vitamina C)",
    price: 55.0,
    // TODO(client): confirm the pack format (box or doypack).
    size: "28 sobres × 5 g",
    flavor: ["Menta"],
    image: "/tienda/vera.webp",
  },
  {
    slug: "ganomas-cappuccino",
    name: "Ganomas Cappuccino",
    line: "inmunologica",
    tagline: "¡Optimiza tu sistema de protección!",
    description:
      "Delicioso café cappuccino elaborado con extracto de Ganoderma Lucidum, hongo silvestre de Asia, usado ancestralmente como el secreto de la longevidad por su gran poder antioxidante a nivel celular.",
    benefits: [
      "Reducir el daño oxidativo que afecta tu sistema natural de protección.",
      "Modular un funcionamiento normal de tus defensas naturales.",
    ],
    ingredients: "Extracto de Ganoderma Lucidum + Quillay + Micronutrientes",
    price: 29.5,
    size: "28 sobres × 7.5 g",
    flavor: ["Cappuccino"],
    image: "/tienda/ganomas-cappuccino.webp",
  },

  // ── Control de peso y medidas ─────────────────────────────────────
  {
    slug: "thermo-t3",
    name: "Thermo T3",
    line: "peso",
    tagline: "¡Transforma la grasa en energía!",
    description:
      "Delicioso mix de tres tés con limón y extractos vegetales que promueve un óptimo metabolismo, generando energía a partir de la grasa acumulada en el cuerpo, por lo que contribuye a la reducción de medidas y la pérdida de peso (*), para lograr un organismo más saludable.",
    benefits: [
      "Reducir medidas, al reducir la acumulación de grasa en el organismo (*).",
      "Aumentar tu resistencia, por lo que es recomendable que lo consumas antes de una rutina de ejercicio.",
    ],
    ingredients:
      "Mix de tés (verde, negro y rojo) + Cetonas de frambuesa + Garcinia cambogia + L-carnitina + Café verde + Ácido alfa lipoico + Vitamina B6 + Cromo",
    price: 44.0,
    size: "Doypack · 28 × 5 g",
    flavor: ["Té limón"],
    image: "/tienda/thermo-t3.webp",
    notes: [DIETA],
  },
  {
    slug: "nocarb-t",
    name: "Nocarb-T",
    line: "peso",
    tagline: "¡Mantén los carbohidratos a raya!",
    description:
      "Deliciosa bebida, a base de Té verde y fibras solubles de Achicoria y Manzana que ayudan a reducir la absorción de carbohidratos.",
    benefits: [
      "Controlar los carbohidratos de tu dieta.",
      "Reducir la acumulación de grasa en el organismo.",
    ],
    ingredients:
      "Fibras solubles (fibra de yacón + Fibra de acacia + Inulina de achicoria + Pectina de manzana) + Verdolaga + Canela + Té verde + Cromo",
    price: 44.0,
    size: "Doypack · 28 × 5 g",
    flavor: ["Té manzana y canela"],
    image: "/tienda/nocarb-t.webp",
    notes: [DIETA],
  },
  {
    slug: "cafe-cafe-fit",
    name: "Café & Café Fit",
    line: "peso",
    tagline: "¡Date un gusto sin perder la línea!",
    description:
      "Irresistible café gourmet tostado. Enriquecidos con extracto de café verde, formulación única con ácidos clorogénicos asociados al metabolismo de la glucosa y la grasa; apoyando así el control de medidas y peso corporal para lograr un organismo más saludable. Ideal para incorporarlo en una dieta baja en calorías.",
    benefits: [
      "Reducir la sensación de cansancio y fatiga.",
      "Reducir la sensación de apetito.",
      "Apoyar un programa de control de peso y medidas (*).",
    ],
    ingredients: "Café tostado liofilizado + Extracto de café verde",
    price: 44.0,
    size: "28 sobres × 5 g",
    flavor: [],
    image: "/tienda/cafe-cafe-fit.webp",
    notes: [DIETA],
  },
  {
    slug: "chocolate-fit",
    name: "Chocolate Fit",
    line: "peso",
    tagline: "¡Mantente en forma deliciosamente!",
    description:
      "Chocolate Fit es una deliciosa bebida hecha a base de chocolate negro del Amazonas, crema no láctea y especias. Enriquecido con ácidos clorogénicos del café verde y CLA (Ácido Linoleico Conjugado), ingredientes que promueven la reducción de medidas (*).",
    benefits: [
      "Reducir medidas corporales, al acelerar el metabolismo de las grasas (*).",
    ],
    ingredients:
      "Cacao puro del Amazonas + Proteína vegetal + Café verde + CLA + Cromo orgánico",
    price: 29.5,
    size: "14 sobres × 15 g",
    flavor: [],
    image: "/tienda/chocolate-fit.webp",
    notes: [DIETA],
  },
  {
    slug: "biopro-fit",
    name: "Biopro+ Fit",
    line: "peso",
    tagline: "¡Mejora tu nutrición y reduce medidas!",
    description:
      "Delicioso batido proteico con Bioprotein Colostrum, fórmula patentada por FuXion, combinación de proteínas de alto valor biológico y alta biodisponibilidad con bajas calorías. Enriquecido con Prolibra y nutrientes que contribuyen a la nutrición muscular a nivel celular, promoviendo una tonificación adecuada de los músculos (*).",
    benefits: ["Mantener una nutrición celular adecuada."],
    ingredients:
      "Bioprotein+ con Colostrum® + Prolibra® + Aminoácidos + Tamarindo malabar + Vitaminas + DHA y ARA",
    price: 37.0,
    size: "14 sobres × 25 g",
    flavor: ["Vainilla"],
    image: "/tienda/biopro-fit.webp",
    notes: ["(*) Con una dieta balanceada y ejercicio."],
  },
  {
    slug: "protein-active-fit",
    name: "Protein Active Fit",
    line: "peso",
    tagline: "¡Mejora tu nutrición y reduce medidas!",
    description:
      "Proteína activa de origen 100% vegetal, de alta biodisponibilidad, potenciada con Tamarindo Malabar, L-Carnitina, Vitaminas del Complejo B, Cromo y Zinc en molécula orgánica, que contribuyen a mantener óptimo tu metabolismo energético y promover la reducción de grasa corporal con su fórmula baja en calorías, libre de alérgenos y de alto valor biológico. Gracias a la combinación de sus ingredientes germinados, tu cuerpo recibirá los nutrientes intactos que te ofrece cada componente.",
    benefits: [
      "Controlar tu peso y reducir medidas, mientras tonificas músculos (*).",
      "Asimilar de manera óptima aminoácidos esenciales, lo que le permitirá a tu cuerpo lograr una mejor tonicidad.",
      "Reducir la sensación de apetito gracias a la proteína vegetal, la cual asimilarás de manera más rápida y efectiva.",
    ],
    ingredients:
      "Bioprotein Active® (proteína de quinua germinada, de arveja, de arroz germinado y de algas) + Aminoácidos esenciales + L-carnitina + Tamarindo malabar + Vitaminas + Calcio, cromo y zinc en molécula orgánica",
    price: 49.5,
    size: "14 sobres × 25 g",
    flavor: ["Vainilla y canela", "Chocolate con avellanas"],
    image: "/tienda/protein-active-fit.webp",
    notes: [DIETA],
  },
  {
    slug: "10-14-active",
    name: "10/14 Active",
    line: "peso",
    tagline: "¡Pierde esas libras de más y gana salud! (*)",
    description:
      "Programa de nutrición integral que te ayudará a adquirir hábitos saludables de alimentación y estilo de vida, mientras reduces libras de más, tonificas tus músculos y ganas vitalidad (*).",
    benefits: [],
    ingredients:
      "4 Prunex1 + 28 Protein Active Fit vainilla & canela + 14 Vita Xtra T+ + 14 Thermo T3 + 14 Nocarb-T",
    price: 170.0,
    size: "Caja pack",
    flavor: [],
    image: "/tienda/10-14-active.webp",
    notes: [DIETA],
  },

  // ── Anti-edad ─────────────────────────────────────────────────────
  {
    slug: "probal",
    name: "Probal",
    line: "anti-edad",
    tagline: "¡Protege tu balance vital!",
    description:
      "Delicioso té herbal que combina aminoácidos, extractos vegetales, vitaminas y minerales para apoyar el bienestar femenino.",
    benefits: [
      "Reforzar la salud femenina.",
      "Mantener tu balance durante la menopausia.",
    ],
    ingredients:
      "Aguaje en polvo + Dong quai + Orégano + Té negro + L-triptófano + Marigold + Camu-camu + Limón + Magnesio + Calcio",
    price: 55.0,
    size: "28 sobres × 5 g",
    flavor: ["Orégano y cedrón"],
    image: "/tienda/probal.webp",
  },
  {
    slug: "passion",
    name: "Passion",
    line: "anti-edad",
    tagline: "¡Incrementa tu vigor!",
    description:
      "Combinación de aminoácidos, extractos vegetales y minerales en molécula orgánica que mejoran tu vigor y energía.",
    benefits: [
      "Mejorar la vitalidad gracias a la L-arginina, isoleucina y glutamina, potentes aminoácidos.",
      "Incrementar la energía por su contenido de maca, ginseng y teína del té negro.",
      "Vigorizar el cuerpo gracias a su contenido de jalea real y zinc orgánico.",
    ],
    ingredients: "Aminoácidos + Extracto de jalea real + Maca + Ginseng + Zinc orgánico",
    price: 44.0,
    size: "28 sobres × 5 g",
    flavor: ["Guaraná"],
    image: "/tienda/passion.webp",
  },
  {
    slug: "youth-elixir-hgh",
    name: "Youth Elixir",
    line: "anti-edad",
    tagline: "¡Mantén un cuerpo joven por más tiempo!",
    description:
      "Combinación natural de aminoácidos y antioxidantes como el resveratrol, extraído de la uva del vino y súper frutas como blue-berries, sauco y amalaki que trabajan sinérgicamente para reducir los radicales libres.",
    benefits: [
      "Aumentar la vitalidad, la elasticidad de la piel y mejorar la calidad del sueño.",
    ],
    ingredients: "Aminoácidos + Antioxidantes + Resveratrol + Optiberry®",
    price: 44.0,
    size: "28 sobres × 5 g",
    flavor: ["Uva vino"],
    image: "/tienda/youth-elixir-hgh.webp",
  },
  {
    slug: "golden-flx",
    name: "Golden FLX",
    line: "anti-edad",
    tagline: "¡Protege tu organismo desde adentro!",
    description:
      "Delicioso té de especias con leche de coco, hecho a base de extracto de cúrcuma orgánica certificada de efecto antioxidante y protector. Los curcuminoides extraídos de la cúrcuma trabajan en sinergia con el jengibre, el cardamomo y la pimienta negra para mantener la flexibilidad de las articulaciones.",
    benefits: [
      "Contribuir a mejorar la flexibilidad y movilidad de articulaciones.",
      "Ayudar a controlar los procesos oxidativos.",
    ],
    ingredients: "Cardamomo + Leche de coco + Pimienta negra + Canela",
    price: 48.5,
    size: "28 sobres × 5 g",
    flavor: ["Vainilla"],
    image: "/tienda/golden-flx.webp",
  },
  {
    slug: "beauty-in",
    name: "Beauty-In",
    line: "anti-edad",
    tagline: "¡El secreto de la verdadera belleza viene desde adentro!",
    description:
      "Delicioso refresco nutritivo de guayaba con una potente combinación de péptidos de colágeno bioactivo que nutren tu piel desde adentro, para que luzca radiante y juvenil, por más tiempo. BEAUTY-IN utiliza péptidos bioactivos de colágeno (cuatro veces más potente que el colágeno convencional), que estimula a las células de la piel a producir más colágeno y elastina, trabajando en sinergia con los antioxidantes y vitaminas presentes en su formulación para una piel rejuvenecida.",
    benefits: [
      "Mejorar la estructura de la dermis, para una piel con mayor elasticidad, más firme y uniforme.",
      "Fortalecer el cabello y uñas.",
    ],
    ingredients:
      "Péptidos de colágeno bioactivo optimizado + Coenzima Q10 + Sesbania (biotina natural) + Concentrado de súper frutas exóticas (vitaminas C y E) + Zinc",
    price: 55.0,
    size: "Doypack · 28 × 5 g",
    flavor: ["Súper frutas exóticas"],
    image: "/tienda/beauty-in.webp",
  },

  // ── Vigor mental ──────────────────────────────────────────────────
  {
    slug: "on",
    name: "ON",
    line: "vigor-mental",
    tagline: "¡Mente activa y alerta!",
    description:
      "Deliciosa bebida nutritiva con ingredientes que ayudan a activar tu mente y mantenerla alerta. On está hecho a base de una combinación de aminoácidos como la Taurina y el GABA, con extractos vegetales como la Yerba Mate y el Acai Berry que trabajan en sinergia con las vitaminas, minerales y ácidos grasos esenciales para contribuir a una adecuada función cognitiva.",
    benefits: [
      "Mantener tu mente activa y alerta.",
      "Nutrir tu cerebro y mejorar tu función neuronal. (*)",
      "Reforzar tu función cognitiva.",
    ],
    ingredients:
      "GABA + Taurina + Extracto de yerba mate + Acai berry + Camu camu + Vitamina C + Vitaminas del complejo B + Minerales en molécula orgánica (magnesio, hierro, zinc) + DHA + ARA",
    price: 44.0,
    size: "28 sobres × 5 g",
    flavor: ["Mix frutal"],
    image: "/tienda/on.webp",
    notes: [
      "(*) Vitaminas B1, B2 y B6 contribuyen al funcionamiento normal del sistema nervioso y Vitaminas B1 y B6 contribuyen a la función psicológica normal.",
    ],
  },
  {
    slug: "off",
    name: "OFF",
    line: "vigor-mental",
    tagline: "¡Tranquilo y enfocado!",
    description:
      "Deliciosa bebida nutritiva a base de aminoácidos esenciales y extractos de frutos conocidos por contribuir a mantener la sensación de equilibrio bajo condiciones de presión y optimizar los procesos cognitivos naturales manteniendo el enfoque sin producir somnolencia.",
    benefits: [
      "Mantener la sensación de equilibrio frente al estrés del día a día.",
      "Mantener la concentración y enfoque en momentos de gran tensión.",
      "Mejorar la capacidad de relajación.",
    ],
    ingredients:
      "Aminoácidos (L-teanina, glicina, triptófano) + Extracto de súper frutas (ashwagandha, amalaki y limón) + Magnesio en molécula orgánica + Vitaminas del complejo B",
    price: 44.0,
    // TODO(client): confirm the pack format (box or doypack).
    size: "28 sobres × 5 g",
    flavor: ["Durazno mandarina"],
    image: "/tienda/off.webp",
  },

  // ── Sport ─────────────────────────────────────────────────────────
  {
    slug: "pre-sport",
    name: "Pre Sport Pro Edition",
    line: "sport",
    tagline: "¡Prepara tu cuerpo para darlo todo!",
    description:
      "Bebida isotónica, rehidratante y energizante natural que prepara al cuerpo para la actividad deportiva intensa y mejora su rendimiento durante el ejercicio.",
    benefits: [
      "Mantener la hidratación corporal gracias a su aporte de electrolitos.",
      "Aumentar la resistencia, al promover la vasodilatación (mejora la nutrición y la oxigenación muscular).",
      "Reducir la fatiga y mejorar el desempeño deportivo gracias a la energía extra que brinda a tu cuerpo.",
    ],
    ingredients:
      "Aminoácidos (citrulina de sandía + β-alanina de beterraga + L-creatina nitrato) + Mix isotónico (dextrosa, potasio, sodio y zinc) + Hierba mate",
    price: 48.5,
    size: "28 sobres × 5 g",
    flavor: ["Sandía"],
    image: "/tienda/pre-sport.webp",
  },
  {
    slug: "xtra-mile",
    name: "Xtra Mile Pro Edition",
    line: "sport",
    tagline: "¡Energía para dar la milla extra!",
    description:
      "Bebida isotónica de resistencia a base de Palatinose®, carbohidrato de bajo índice glicémico obtenido a partir de la betarraga, que brinda energía balanceada y sostenida en el tiempo. Además, su mix isotónico está hecho a base de agua de coco amazónico, 6 minerales (Potasio, Sodio, Calcio, Zinc, Cromo y Magnesio) y Sal de Maras, lo que permitirá que tu hidratación sea más eficiente, evitando la fatiga.",
    benefits: [
      "Mantener la energía de manera sostenida.",
      "Reducir la fatiga durante el ejercicio.",
    ],
    ingredients:
      "Palatinose® + Agua de coco amazónico + Sal de Maras + Mix de electrolitos (potasio, sodio, calcio y magnesio) + Minerales (zinc y cromo)",
    price: 44.0,
    size: "28 sobres × 5 g",
    flavor: ["Naranja"],
    image: "/tienda/xtra-mile.webp",
  },
  {
    slug: "post-sport",
    name: "Post Sport Pro Edition",
    line: "sport",
    tagline: "¡Ayuda a tu cuerpo a recuperarse luego del ejercicio!",
    description:
      "Bebida deportiva a base de aminoácidos, agua de coco y antioxidantes que ayudan a la recuperación del cuerpo después del ejercicio. Rica en aminoácidos de cadena ramificada (BCAAs) que promueven la recuperación, el incremento y fortalecimiento de los músculos.",
    benefits: [
      "Reparar, incrementar y fortalecer las fibras musculares.",
      "Reponer los electrolitos de forma natural, gracias al agua de coco.",
      "Neutralizar el efecto catabólico producido durante el ejercicio intenso, gracias a los antioxidantes contenidos en la granada, acerola, romero y antocianinas.",
    ],
    ingredients: "Aminoácidos (BCAAs + Glutamina) + Acerola + Granada + Agua de coco",
    price: 48.5,
    size: "28 sobres × 5 g",
    flavor: ["Granada"],
    image: "/tienda/post-sport.webp",
  },
  {
    slug: "protein-active-sport",
    name: "Protein Active Sport Pro Edition",
    line: "sport",
    tagline: "¡Ejercicio saludable y músculos tonificados!",
    description:
      "Proteína activa de origen 100% vegetal que promueve la regeneración celular y el desarrollo saludable de la masa muscular, al nutrirlos con aminoácidos esenciales que estimulan la recuperación muscular después del ejercicio intenso. Su proteína germinada la convierte en un alimento vivo, lo que te permitirá lograr los mejores resultados en menor tiempo.",
    benefits: [
      "Mantener el perfil proteico adecuado para la dieta de un deportista.",
      "Mejorar la recuperación y aporte de oxígeno al músculo.",
      "Generar masa muscular magra y marcada en menos tiempo. (*)",
    ],
    ingredients:
      "Bioprotein Active® (proteína de arveja, de quinua germinada, de arroz germinado, de algas) + Aminoácidos esenciales + Vitaminas + L-glutamina + BCAAs",
    price: 53.0,
    size: "14 sobres × 25 g",
    flavor: ["Vainilla y canela", "Chocolate con avellanas"],
    image: "/tienda/protein-active-sport.webp",
    notes: [DIETA],
  },
  {
    slug: "biopro-sport",
    name: "Biopro+ Sport Pro Edition",
    line: "sport",
    tagline: "¡Ejercicio saludable y músculos tonificados!",
    description:
      "Batido proteico que ayuda a nutrir tus músculos adecuadamente para evitar su deterioro y promover un sano desarrollo de tu cuerpo, gracias a Bioprotein+ con Colostrum®, fórmula proteica patentada de FuXion, enriquecida con Actinos® y aminoácidos.",
    benefits: [
      "Incrementar el flujo sanguíneo y el rendimiento gracias a Actinos®, formulación de péptidos patentada.",
      "Generar masa muscular magra y marcada en menos tiempo. (*)",
      "Mejorar la recuperación y aporte de oxígeno al músculo.",
    ],
    ingredients:
      "Bioprotein+ con Colostrum® + Actinos® + Aminoácidos + Calcio lácteo + DHA y ARA",
    price: 46.0,
    size: "14 sobres × 25 g",
    flavor: ["Vainilla"],
    image: "/tienda/biopro-sport.webp",
    notes: [DIETA],
  },
];

export const buyUrl = (product: FuxionProduct) =>
  product.productUrl || LINE_STORE_URL[product.line] || STORE_URL;

export const formatPrice = (price: number) => `$${price.toFixed(2)}`;
