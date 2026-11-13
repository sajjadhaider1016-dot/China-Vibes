import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];

  const lastModified = new Date();
  return ["/", "/shop", "/categories", "/about", "/contact"].map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified,
  }));
}
