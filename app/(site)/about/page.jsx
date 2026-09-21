import { SITE } from "@/lib/site-config";
import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us",
  description: `${SITE.name} — founded ${SITE.founded} by ${SITE.founder}, based in Ilorin, Nigeria. Our story, values, and approach.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us | ${SITE.shortName}`,
    description: `Founded ${SITE.founded} by ${SITE.founder}. Based in Ilorin, Nigeria.`,
    url: `${SITE.url}/about`,
  },
};

export default function Page() {
  return <AboutClient />;
}
