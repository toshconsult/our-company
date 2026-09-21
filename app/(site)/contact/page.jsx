import { SITE } from "@/lib/site-config";
import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact",
  description:
    "Tell us about your project — website, e-commerce, custom software, mobile app, or automation — and we'll get back to you within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${SITE.shortName}`,
    description: "Tell us about your project and we'll get back to you within one business day.",
    url: `${SITE.url}/contact`,
  },
};

export default function Page() {
  return <ContactClient />;
}
