import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
  },
};

export default function Page() {
  return <HomeClient />;
}
