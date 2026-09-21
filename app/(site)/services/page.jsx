import { SITE } from "@/lib/site-config";
import ServicesIndexClient from "./ServicesIndexClient";

export const metadata = {
  title: "Services",
  description:
    "Websites, e-commerce, custom software, mobile apps, AI & automation, and ongoing website growth & support — see what Toshconsult builds.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Services | ${SITE.shortName}`,
    description:
      "Websites, e-commerce, custom software, mobile apps, AI & automation, and ongoing website growth & support.",
    url: `${SITE.url}/services`,
  },
};

export default function Page() {
  return <ServicesIndexClient />;
}
