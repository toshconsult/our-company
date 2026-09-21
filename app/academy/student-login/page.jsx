"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { fadeUp } from "@/lib/motion-variants";
import { SITE } from "@/lib/site-config";

export default function StudentLoginPage() {
  return (
    <main className="flex w-full items-center justify-center bg-white px-8 py-24 lg:px-12">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[440px] rounded-[18px] border border-[#f0f0f0] p-9 text-center shadow-sm"
      >
        <GraduationCap className="mx-auto h-10 w-10 text-[#c83db6]" />
        <h1 className="mt-4 text-[20px] font-medium text-black">Student Login</h1>
        <p className="mt-3 text-[13px] leading-[1.7] text-[#777777]">
          A dedicated student portal isn&apos;t live yet. If you&apos;re enrolled in
          a current course, reach out to your instructor or email{" "}
          <a href={`mailto:${SITE.email}`} className="text-[#c83db6]">
            {SITE.email}
          </a>{" "}
          for access to your course materials.
        </p>
        <Link
          href="/courses"
          className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[9px] bg-[#f6a000] px-6 text-[13px] font-medium text-white no-underline hover:bg-[#e99500]"
        >
          Browse Courses
        </Link>
      </motion.div>
    </main>
  );
}
