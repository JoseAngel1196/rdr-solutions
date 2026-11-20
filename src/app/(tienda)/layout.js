import RootShell from "@/components/RootShell";
import { siteMetadata, siteViewport } from "@/content/metadata";

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function TiendaLayout({ children }) {
  return <RootShell lang="es">{children}</RootShell>;
}
