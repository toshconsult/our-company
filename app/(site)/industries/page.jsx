import { SITE } from "@/lib/site-config";
import IndustriesIndexClient from "./IndustriesIndexClient";

export const metadata = {
  title: "Industries",
  description:
    "How Toshconsult builds for real estate, professional services, healthcare, education, and startups.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: `Industries | ${SITE.shortName}`,
    description:
      "How Toshconsult builds for real estate, professional services, healthcare, education, and startups.",
    url: `${SITE.url}/industries`,
  },
};

export default function Page() {
  return <IndustriesIndexClient />;
}
