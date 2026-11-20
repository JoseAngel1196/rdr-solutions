const title = "RDR Solutions — From the factory to the shelf, one partner";
const description =
  "Consulting, commercial execution and sourcing for consumer brands that want to grow in retail, plus the website to match.";

export const siteMetadata = {
  metadataBase: new URL("https://rdrsolution.com"),
  title: {
    default: title,
    template: "%s | RDR Solutions",
  },
  description,
  applicationName: "RDR Solutions",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "RDR Solutions",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const siteViewport = {
  themeColor: "#16264A",
};
