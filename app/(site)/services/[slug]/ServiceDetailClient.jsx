"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp, staggerContainer, cardAnimation } from "@/lib/motion-variants";
import CTAButton from "../../../components/ui/CTAButton";
import { WORK_PROJECTS } from "../../../components/data/work-projects";

export default function ServiceDetailClient({ service, details }) {
  const relatedWork = WORK_PROJECTS.filter((p) =>
    p.relatedServices?.includes(service.slug)
  ).slice(0, 2);
  const fallbackWork = relatedWork.length ? relatedWork : WORK_PROJECTS.slice(0, 2);

  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#fdf6ff] to-white px-8 py-20 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-[760px] text-center"
        >
          <p className="text-[13px] font-medium text-[#f6a000]">SERVICES</p>
          <h1 className="mt-4 text-[30px] font-medium leading-[1.2] text-black sm:text-[38px]">
            {service.name}
          </h1>
          <p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-[1.7] text-[#777777]">
            {details.whatItIs}
          </p>
          <p className="mt-4 text-[13px] font-medium text-[#c83db6]">Request a tailored proposal</p>
          <div className="mt-7 flex justify-center">
            <CTAButton href="/book-a-call" className="h-[46px] px-7 text-[13px]">
              Book a Discovery Call
            </CTAButton>
          </div>
        </motion.div>
      </section>

      {/* WHO IT'S FOR + PROBLEMS SOLVED */}
      <section className="px-8 py-16 lg:px-12">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[18px] font-medium text-black">Who it&apos;s for</h2>
            <ul className="mt-5 space-y-3">
              {details.whoItsFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] leading-[1.6] text-[#555555]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f6a000]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[18px] font-medium text-black">Problems this solves</h2>
            <ul className="mt-5 space-y-3">
              {details.problemsSolved.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] leading-[1.6] text-[#555555]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#c83db6]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="bg-[#fdf6ff] px-8 py-16 lg:px-12">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-[18px] font-medium text-black">What&apos;s included</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {details.deliverables.map((item) => (
              <motion.div
                key={item}
                variants={cardAnimation}
                className="rounded-[10px] bg-white px-5 py-4 text-[13px] text-[#333333] shadow-sm"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS + TECH */}
      <section className="px-8 py-16 lg:px-12">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-[18px] font-medium text-black">Process</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {details.process.map((step, i) => (
                <span
                  key={step}
                  className="rounded-full border border-[#f0d9a0] bg-[#fff9df] px-4 py-2 text-[12px] font-medium text-black"
                >
                  {i + 1}. {step}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[18px] font-medium text-black">Relevant technologies</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {details.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#f0f0f0] bg-white px-4 py-2 text-[12px] text-[#555555]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELEVANT WORK */}
      <section className="bg-[#fdf6ff] px-8 py-16 lg:px-12">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-[18px] font-medium text-black">Relevant work</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {fallbackWork.map((project) => (
              <Link
                key={project.slug}
                href={`/work#${project.slug}`}
                className="block rounded-[14px] bg-white p-6 shadow-sm no-underline transition-transform hover:-translate-y-1"
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

      {/* FAQs */}
      <section className="px-8 py-16 lg:px-12">
        <div className="mx-auto max-w-[780px]">
          <h2 className="text-[18px] font-medium text-black">Frequently asked questions</h2>
          <div className="mt-6 space-y-5">
            {details.faqs.map((faq) => (
              <div key={faq.q} className="rounded-[12px] border border-[#f0f0f0] p-5">
                <p className="text-[13.5px] font-medium text-black">{faq.q}</p>
                <p className="mt-2 text-[12.5px] leading-[1.7] text-[#777777]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#c83db6] to-[#a52a99] px-8 py-16 lg:px-12">
        <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">
          <h2 className="text-[24px] font-medium text-white sm:text-[28px]">
            Let&apos;s talk about your {service.name.toLowerCase()} project
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
