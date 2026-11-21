import TiendaPage from "@/components/tienda/TiendaPage";

const title = "La Tienda — FuXion products from Andrés Rosa";
const description =
  "FuXion product catalog from Andrés Rosa, Independent FuXion Distributor. Purchases are processed in FuXion's official store.";

export const metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/tienda/en",
    languages: { es: "/tienda", en: "/tienda/en" },
  },
  openGraph: {
    type: "website",
    url: "/tienda/en",
    siteName: "RDR Solutions",
    title,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <TiendaPage locale="en" />;
}
