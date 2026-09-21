import { SITE } from "@/lib/site-config";
import InsightsClient from "./InsightsClient";

export const metadata = {
  title: "Insights",
  description: `Articles and updates from ${SITE.name}.`,
  alternates: { canonical: "/insights" },
  openGraph: {
    title: `Insights | ${SITE.shortName}`,
    description: `Articles and updates from ${SITE.name}.`,
    url: `${SITE.url}/insights`,
  },
};

export default function Page() {
  return <InsightsClient />;
}
