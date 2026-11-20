export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://rdrsolution.com/sitemap.xml",
  };
}
