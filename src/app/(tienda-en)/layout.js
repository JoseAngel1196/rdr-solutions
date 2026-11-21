import RootShell from "@/components/RootShell";
import { siteMetadata, siteViewport } from "@/content/metadata";

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function TiendaEnLayout({ children }) {
  return <RootShell lang="en">{children}</RootShell>;
}
