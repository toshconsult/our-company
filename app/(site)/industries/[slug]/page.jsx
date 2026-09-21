import { notFound } from "next/navigation";
import { SITE, INDUSTRIES } from "@/lib/site-config";
import { INDUSTRY_DETAILS } from "../../../components/data/industry-details";
import IndustryDetailClient from "./IndustryDetailClient";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }) {
  const industry = INDUSTRIES.find((i) => i.slug === params.slug);
  const details = INDUSTRY_DETAILS[params.slug];
  if (!industry) return {};
  return {
    title: `${industry.name} — Industries`,
    description: details?.intro,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.name} | ${SITE.shortName}`,
      description: details?.intro,
      url: `${SITE.url}/industries/${industry.slug}`,
    },
  };
}

export default function IndustryDetailPage({ params }) {
  const industry = INDUSTRIES.find((i) => i.slug === params.slug);
  const details = INDUSTRY_DETAILS[params.slug];

  if (!industry || !details) {
    notFound();
  }

  return <IndustryDetailClient industry={industry} details={details} />;
}
