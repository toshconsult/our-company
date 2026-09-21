import { SITE } from "@/lib/site-config";
import WorkClient from "./WorkClient";

export const metadata = {
  title: "Our Work",
  description:
    "Case studies from Toshconsult's work — TrustPadi, Postam, and DaylightInfo — with real technologies and capabilities, no invented results.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: `Our Work | ${SITE.shortName}`,
    description: "Real products Toshconsult has built, with the problems they were built to solve.",
    url: `${SITE.url}/work`,
  },
};

export default function Page() {
  return <WorkClient />;
}
