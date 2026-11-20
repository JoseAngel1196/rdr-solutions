// Single source for the site's copy and links, so sections stay consistent.

export const servicesIntro =
  "Simple solutions built around your needs, your priorities and your budget.";

export const contact = {
  // TODO(client): confirm the email domain before launch. The site uses
  // rdrsolution.com (no "s") while the brand is RDR Solutions.
  email: "info@rdrsolution.com",
  phone: "(305) 542-9612",
  phoneHref: "tel:+13055429612",
  address: "175 SW 7th St, Suite 1815, Miami, FL 33130, USA",
  mapHref: "https://maps.app.goo.gl/hU1Npt2drATq1ogC7",
  // TODO(client): realistic reply time in business days. The line under the
  // contact form renders only when this is a number.
  replyDays: null,
};

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/rdrsolutions/" },
  { name: "Facebook", href: "https://www.facebook.com/rdrsolutions/" },
  {
    name: "X (Twitter)",
    href: "https://x.com/llcrdr630",
  },
  {
    name: "LinkedIn",
    // TODO(client): company page URL. The old link pointed to a personal
    // profile; the icon stays hidden until this is set.
    href: null,
  },
];

// TODO(client): the real step-by-step process, from first call to product on
// shelf, as [{ title, text }]. "How we work" and its nav link stay hidden
// while this is empty.
export const processSteps = [];

// `hidden: true` keeps a link reserved in the nav without showing it yet.
export const navLinks = [
  { label: "Brands", href: "/#brands" },
  { label: "Services", href: "/#services" },
  { label: "How we work", href: "/#how-we-work", hidden: processSteps.length === 0 },
  { label: "Shop", href: "/shop", hidden: true },
];

// Every photo on the site comes from here, so swapping one is a one-line change.
// TODO(client): replace the Unsplash stock shot with real photography (team,
// warehouse, shelf sets, trade shows). `position` is the CSS object-position
// used to frame it inside the logo-mark mask.
export const photos = {
  hero: {
    src: "/assets/images/photos/warehouse-aisle.jpg",
    position: "50% 30%",
  },
};

// Content marked TODO(client) is waiting on real information from RDR.
// Anything left null/empty renders nothing on the site.

// TODO(client): the exact relationship with these brands (authorized
// distributor, representative, ...) and the markets it covers. Avoid "work
// with" / "partner" wording until confirmed.
export const brandsRelationship = null;

// `ratio` is width / height of the trimmed logo file. `scale` evens out visual
// weight inside the 160x64 logo box: solid-box and very wide marks are pulled
// down, light script marks nudged up.
export const brands = [
  { name: "Colgate", file: "Colgate_logo.webp", ratio: 3.95, group: "global", scale: 0.85 },
  { name: "Palmolive", file: "Palmolive_logo.webp", ratio: 3.25, group: "global", scale: 0.85 },
  { name: "Fabuloso", file: "Fabuloso_logo.webp", ratio: 2.33, group: "global", scale: 0.9 },
  { name: "Ajax", file: "Ajax_logo.webp", ratio: 1.21, group: "global", scale: 0.95 },
  { name: "Suavitel", file: "Suavitel_logo.webp", ratio: 2.15, group: "global", scale: 1 },
  { name: "Fiori Bruna", file: "Fiori_Bruna_Logo.webp", ratio: 8.35, group: "regional", scale: 1 },
  { name: "Bambú", file: "Bambu_logo.webp", ratio: 2.8, group: "regional", scale: 0.85 },
  { name: "Guarina", file: "Guarina_logo.webp", ratio: 1.45, group: "regional", scale: 0.85 },
  { name: "Lavador", file: "Lavador_logo.webp", ratio: 3.36, group: "regional", scale: 0.9 },
  { name: "Magnifico", file: "Magnifico_logo.webp", ratio: 1.93, group: "regional", scale: 0.9 },
  { name: "L'Dorado", file: "LDorado_logo.webp", ratio: 1.43, group: "regional", scale: 0.95 },
  { name: "Ardil", file: "Ardil_logo.webp", ratio: 2.84, group: "regional", scale: 0.8 },
  { name: "Tips Calbaq", file: "Tips_calbaq_logo.webp", ratio: 1.67, group: "regional", scale: 0.8 },
];

export const services = [
  {
    id: "consulting",
    title: "Consulting",
    benefit: "Senior expertise, on call when you need it.",
    description:
      "Specialists in marketing, finance, accounting and real estate, available to your business.",
    details: [
      "Marketing",
      "Financial advisory",
      "Accounting & taxes",
      "Real estate",
    ],
  },
  {
    id: "commercial-execution",
    title: "Commercial Execution",
    benefit: "Get your products priced, placed and noticed.",
    description:
      "The 5 Ps and innovation: we help you develop new products, set the right price and activate them in the retail environment.",
    details: [
      "New product development",
      "Price study & price strategy",
      "Distribution and network opportunities",
      "Activation by retail environment",
    ],
  },
  {
    id: "sourcing-strategies",
    title: "Sourcing Strategies",
    benefit: "Move product from the factory to the shelf.",
    description:
      "Logistics, contract manufacturing and distribution, planned together so your supply chain runs as one.",
    details: [
      "Logistics: warehouse, transportation and freight forwarding",
      "Contract manufacturing",
      "Distribution: DSD / networking",
    ],
  },
  {
    id: "websites",
    title: "Website development",
    benefit: "An online presence that works for your business.",
    description:
      "Elevate your business in the digital era. Our developers create a captivating online presence that engages your audience, drives growth and achieves tangible results.",
    // TODO(client): what a website project includes. The toggle stays hidden
    // while this list is empty.
    details: [],
  },
];

// "Who's behind RDR". The section renders only once the founder's name, title,
// bio and photo are all filled in.
export const trust = {
  lead: "More than 25 years of successful, high-performance professionals who have worked with leading global organizations in the USA and abroad.",
  founder: {
    name: null, // TODO(client)
    title: null, // TODO(client)
    bio: null, // TODO(client): about three lines
    photo: null, // TODO(client): path under /public, 4:5 portrait
  },
  // TODO(client): e.g. { value: "...", label: "Years in business" },
  // markets served, number of brands. Shown only when all three exist.
  facts: [],
};

// TODO(client): a one-line description of RDR's role at each link
// (`description`, renders only when filled). Also confirm what separates
// "Customers" from the last link; it was "Consumers" and is shown as
// "Shoppers" until clarified.
export const chain = [
  { id: "suppliers", label: "Suppliers", description: null },
  { id: "distribution", label: "Distribution network", description: null },
  { id: "retailers", label: "Retailers", description: null },
  { id: "customers", label: "Customers", description: null },
  { id: "shoppers", label: "Shoppers", description: null },
];
