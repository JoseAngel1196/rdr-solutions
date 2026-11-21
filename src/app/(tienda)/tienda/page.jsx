import TiendaPage from "@/components/tienda/TiendaPage";

const title = "Tienda FuXion — Andrés Rosa";
const description =
  "Catálogo de productos FuXion de Andrés Rosa, Distribuidor Independiente FuXion. Las compras se procesan en la tienda oficial de FuXion.";

export const metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/tienda",
    languages: { es: "/tienda", en: "/tienda/en" },
  },
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

export default function Page() {
  return <TiendaPage locale="es" />;
}
