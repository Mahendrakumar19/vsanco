import { MetadataRoute } from "next";
import { SOLUTION_CATEGORIES, SOLUTIONS_DATA } from "@/content/solutions";
import { INDUSTRIES_DATA } from "@/content/industries";
import { RESOURCES_DATA } from "@/content/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vsanco.com";
  const now = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/solutions",
    "/industries",
    "/resources",
    "/faqs",
    "/contact",
    "/request-a-quote",
    "/privacy-policy",
    "/terms",
    "/partner-disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Solution categories
  const categoryRoutes: MetadataRoute.Sitemap = SOLUTION_CATEGORIES.map(
    (cat) => ({
      url: `${baseUrl}/solutions/${cat.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })
  );

  // Solution detail pages
  const solutionRoutes: MetadataRoute.Sitemap = Object.keys(SOLUTIONS_DATA).map(
    (slug) => ({
      url: `${baseUrl}/solutions/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })
  );

  // Industry detail pages
  const industryRoutes: MetadataRoute.Sitemap = Object.keys(INDUSTRIES_DATA).map(
    (slug) => ({
      url: `${baseUrl}/industries/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  // Resource guide pages
  const resourceRoutes: MetadataRoute.Sitemap = Object.keys(RESOURCES_DATA).map(
    (slug) => ({
      url: `${baseUrl}/resources/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...solutionRoutes,
    ...industryRoutes,
    ...resourceRoutes,
  ];
}
