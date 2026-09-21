import { notFound } from "next/navigation";
import { SITE, SERVICES } from "@/lib/site-config";
import { SERVICE_DETAILS } from "../../../components/data/service-details";
import ServiceDetailClient from "./ServiceDetailClient";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${SITE.shortName}`,
      description: service.summary,
      url: `${SITE.url}/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  const details = SERVICE_DETAILS[params.slug];

  if (!service || !details) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    description: service.summary,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: "NG",
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceDetailClient service={service} details={details} />
    </>
  );
}
