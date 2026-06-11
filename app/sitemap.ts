import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://digiemu.ch";

  const routes = [
    "",
    "/standard",
    "/core",
    "/proof",
    "/enterprise",
    "/use-cases",
    "/licensing",
    "/company",
    "/impressum",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}