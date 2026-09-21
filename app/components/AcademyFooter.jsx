import Link from "next/link";
import { SITE } from "@/lib/site-config";

export default function AcademyFooter() {
  return (
    <footer className="w-full border-t border-[#f0f0f0] bg-white px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-[13px] font-medium text-black">Toshconsult Academy</p>
          <p className="mt-1 text-[12px] text-[#999999]">
            Practical technology training from the team at Toshconsult Technologies.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-[12px] text-[#777777]">
          <Link href="/courses" className="no-underline hover:text-[#c83db6]">Courses</Link>
          <Link href="/careers" className="no-underline hover:text-[#c83db6]">Careers</Link>
          <a href={`mailto:${SITE.email}`} className="no-underline hover:text-[#c83db6]">{SITE.email}</a>
          <a href={SITE.url} className="no-underline hover:text-[#c83db6]">Toshconsult.com ↗</a>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-[1200px] text-center text-[11px] text-[#bbbbbb] sm:text-left">
        © {new Date().getFullYear()} {SITE.name} ({SITE.registration}). All rights reserved.
      </p>
    </footer>
  );
}
