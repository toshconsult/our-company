import type { MetadataRoute } from "next";
import { SITE, SERVICES, INDUSTRIES } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/work",
    "/industries",
    "/insights",
    "/faq",
    "/contact",
    "/book-a-call",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified: now,
  }));

  const industryRoutes = INDUSTRIES.map((i) => ({
    url: `${SITE.url}/industries/${i.slug}`,
    lastModified: now,
  }));

  // The Academy is a separate product on its own subdomain
  // (academy.toshconsult.com) with its own sitemap — intentionally not
  // included here.

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes];
}
