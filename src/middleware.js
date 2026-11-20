import { NextResponse } from "next/server";

const MAIN_SITE = "https://rdrsolution.com";

// tienda.rdrsolution.com serves the /tienda page at its root. Every other
// page belongs to the main domain, so those requests are sent there.
export function middleware(request) {
  const host = request.headers.get("host") || "";
  if (!host.startsWith("tienda.")) return NextResponse.next();

  const { pathname, search } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.rewrite(new URL(`/tienda${search}`, request.url));
  }
  if (pathname === "/tienda") {
    return NextResponse.redirect(new URL(`/${search}`, request.url), 308);
  }
  return NextResponse.redirect(`${MAIN_SITE}${pathname}${search}`, 308);
}

export const config = {
  // Skip Next internals, API routes and any file with an extension
  // (images, icons, robots.txt, sitemap.xml...).
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
