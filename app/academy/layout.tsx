import type { Metadata } from "next";
import AcademyNavbar from "../components/AcademyNavbar";
import AcademyFooter from "../components/AcademyFooter";

// The Academy has its own metadata, separate from the main agency site —
// it is a distinct product, not a section of Toshconsult's agency
// positioning, so it shouldn't inherit the agency's title template.
export const metadata: Metadata = {
  title: {
    default: "Toshconsult Academy | Practical Technology Training",
    template: "%s | Toshconsult Academy",
  },
  description:
    "Practical technology training designed to help students build real-world digital skills, from Toshconsult Technologies.",
};

export default function AcademyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AcademyNavbar />
      <div className="flex-1 pt-[80px]">{children}</div>
      <AcademyFooter />
    </>
  );
}
