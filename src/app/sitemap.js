const base = "https://rdrsolution.com";

export default function sitemap() {
  return ["", "/tienda", "/contact", "/join"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}
