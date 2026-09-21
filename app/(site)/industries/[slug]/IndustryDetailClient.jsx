"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { fadeUp } from "@/lib/motion-variants";
import CTAButton from "../../../components/ui/CTAButton";
import { SERVICES } from "@/lib/site-config";
import { WORK_PROJECTS } from "../../../components/data/work-projects";

export default function IndustryDetailClient({ industry, details }) {
  const relevantServices = SERVICES.filter((s) => details.relevantServices.includes(s.slug));
  const relatedWork = WORK_PROJECTS.filter(
    (p) =>
      p.industry.toLowerCase().includes(industry.name.toLowerCase().split(" ")[0]) ||
      p.relatedServices?.some((s) => details.relevantServices.includes(s))
  ).slice(0, 2);
  const fallbackWork = relatedWork.length ? relatedWork : WORK_PROJECTS.slice(0, 2);

  return (
    <main className="w-full bg-white">
      <section className="bg-gradient-to-b from-[#fff9df] to-white px-8 py-20 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-[760px] text-center"
        >
          <p className="text-[13px] font-medium text-[#f6a000]">INDUSTRIES</p>
          <h1 className="mt-4 text-[30px] font-medium leading-[1.2] text-black sm:text-[38px]">
            {industry.name}
          </h1>
          <p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-[1.7] text-[#777777]">
            {details.intro}
          </p>
          <div className="mt-7 flex justify-center">
            <CTAButton href="/book-a-call" className="h-[46px] px-7 text-[13px]">
              Book a Discovery Call
            </CTAButton>
          </div>
        </motion.div>
      </section>

      <section className="px-8 py-16 lg:px-12">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-[18px] font-medium text-black">Common challenges</h2>
            <ul className="mt-5 space-y-3">
              {details.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[13px] leading-[1.6] text-[#555555]">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#c83db6]" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[18px] font-medium text-black">How we help</h2>
            <ul className="mt-5 space-y-3">
              {details.howWeHelp.map((h) => (
                <li key={h} className="flex items-start gap-3 text-[13px] leading-[1.6] text-[#555555]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f6a000]" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#fdf6ff] px-8 py-16 lg:px-12">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-[18px] font-medium text-black">Relevant services</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {relevantServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="block rounded-[12px] bg-white p-5 text-[13px] font-medium text-black no-underline shadow-sm transition-transform hover:-translate-y-1"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 lg:px-12">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-[18px] font-medium text-black">Relevant work</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {fallbackWork.map((project) => (
              <Link
                key={project.slug}
                href={`/work#${project.slug}`}
                className="block rounded-[14px] border border-[#f0f0f0] bg-white p-6 shadow-sm no-underline transition-transform hover:-translate-y-1"
              >
                <p className="text-[11px] font-medium uppercase tracking-wide text-[#f6a000]">
                  {project.industry}
                </p>
                <h3 className="mt-2 text-[15px] font-medium text-black">{project.name}</h3>
                <p className="mt-2 text-[12.5px] leading-[1.6] text-[#777777]">{project.context}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#c83db6] to-[#a52a99] px-8 py-16 lg:px-12">
        <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">
          <h2 className="text-[24px] font-medium text-white sm:text-[28px]">
            Let&apos;s talk about your {industry.name.toLowerCase()} project
          </h2>
          <CTAButton
            href="/book-a-call"
            variant="secondary"
            className="mt-7 h-[48px] bg-white px-7 text-[13px] !text-[#c83db6] hover:bg-white/90"
          >
            Book a Discovery Call
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
