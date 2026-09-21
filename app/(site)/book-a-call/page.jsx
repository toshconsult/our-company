import { SITE } from "@/lib/site-config";
import BookACallClient from "./BookACallClient";

export const metadata = {
  title: "Book a Discovery Call",
  description:
    "Request a strategy call with Toshconsult to talk through your website, software, or digital project.",
  alternates: { canonical: "/book-a-call" },
  openGraph: {
    title: `Book a Discovery Call | ${SITE.shortName}`,
    description: "Request a strategy call to talk through your project.",
    url: `${SITE.url}/book-a-call`,
  },
};

export default function Page() {
  return <BookACallClient />;
}
