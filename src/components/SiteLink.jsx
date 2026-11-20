"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export const MAIN_SITE = "https://rdrsolution.com";

// On tienda.rdrsolution.com only the shop lives at "/", so links to the rest
// of the site (including "/#section" anchors) must point at the main domain.
export const useSiteHref = () => {
  const [onShopHost, setOnShopHost] = useState(false);

  useEffect(() => {
    setOnShopHost(window.location.hostname.startsWith("tienda."));
  }, []);

  return (href) => {
    if (!onShopHost || !href.startsWith("/")) return href;
    if (href === "/tienda") return "/";
    return `${MAIN_SITE}${href}`;
  };
};

const SiteLink = ({ href, ...props }) => {
  const siteHref = useSiteHref();
  return <Link href={siteHref(href)} {...props} />;
};

export default SiteLink;
