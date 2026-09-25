import type { MetadataRoute } from "next";
import { caseStudyProjects } from "@/lib/projects";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://numo-digital.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/work", "/about", "/contact", "/privacy", "/terms"];

  return [
    ...pages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/work" || path === "/services" ? 0.9 : 0.7,
    })),
    ...caseStudyProjects.map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
