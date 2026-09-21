"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion-variants";
import CTAButton from "../../components/ui/CTAButton";
import { WORK_PROJECTS, WORK_FILTER_TAGS } from "../../components/data/work-projects";
import { SERVICES } from "@/lib/site-config";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return WORK_PROJECTS;
    return WORK_PROJECTS.filter((p) => p.filterTags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <main className="w-full bg-white">
      <section className="bg-gradient-to-b from-[#fdf6ff] to-white px-8 py-20 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-[760px] text-center"
        >
          <p className="text-[13px] font-medium text-[#f6a000]">OUR WORK</p>
          <h1 className="mt-4 text-[32px] font-medium leading-[1.2] text-black sm:text-[40px]">
            Real products we&apos;ve built
          </h1>
          <p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-[1.7] text-[#777777]">
            A closer look at what we&apos;ve built and the problems each project
            was built to solve. Where a result hasn&apos;t been independently
            verified, we say so rather than guess.
          </p>
        </motion.div>

        {/* FILTERS */}
        <div className="mx-auto mt-10 flex max-w-[900px] flex-wrap justify-center gap-2">
          {["All", ...WORK_FILTER_TAGS].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveFilter(tag)}
              className={`rounded-full border px-4 py-1.5 text-[12px] font-medium transition-colors ${
                activeFilter === tag
                  ? "border-[#c83db6] bg-[#c83db6] text-white"
                  : "border-[#e5d5e5] bg-white text-[#555555] hover:border-[#c83db6] hover:text-[#c83db6]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section className="px-8 pb-24 lg:px-12">
        <div className="mx-auto max-w-[1000px] space-y-16">
          {visibleProjects.map((project) => {
            const related = SERVICES.filter((s) => project.relatedServices.includes(s.slug));

            return (
              <motion.article
                key={project.slug}
                id={project.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="scroll-mt-[130px] rounded-[20px] border border-[#f0f0f0] p-8 shadow-sm sm:p-10"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#fff9df] px-4 py-1.5 text-[11px] font-medium text-black">
                    {project.industry}
                  </span>
                  <span className="rounded-full bg-[#fdf6ff] px-4 py-1.5 text-[11px] font-medium text-[#c83db6]">
                    {project.type}
                  </span>
                </div>

                <h2 className="mt-5 text-[24px] font-medium text-black">{project.name}</h2>
                <p className="mt-3 max-w-[640px] text-[13.5px] leading-[1.7] text-[#777777]">
                  {project.context}
                </p>

                {/* No verified screenshots exist for these projects yet —
                    an honest placeholder rather than a fabricated image. */}
                <div className="mt-6 flex h-[100px] w-full items-center justify-center rounded-[12px] border border-dashed border-[#e5e5e5] bg-[#fafafa] text-[11px] text-[#aaaaaa]">
                  Screenshots available on request
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-[13px] font-medium uppercase tracking-wide text-[#999999]">
                      The Challenge
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.7] text-[#555555]">{project.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-[13px] font-medium uppercase tracking-wide text-[#999999]">
                      Our Approach
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.7] text-[#555555]">{project.approach}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-[13px] font-medium uppercase tracking-wide text-[#999999]">
                    Solution
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.7] text-[#555555]">{project.solution}</p>
                </div>

                <div className="mt-8">
                  <h3 className="text-[13px] font-medium uppercase tracking-wide text-[#999999]">
                    Key Capabilities
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.capabilities.map((f) => (
                      <span key={f} className="rounded-full border border-[#f0f0f0] bg-white px-3.5 py-1.5 text-[12px] text-[#555555]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-[13px] font-medium uppercase tracking-wide text-[#999999]">
                    Technology Stack
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((t) => (
                      <span key={t} className="rounded-full bg-[#fdf3e4] px-3.5 py-1.5 text-[12px] font-medium text-[#f6a000]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-[13px] font-medium uppercase tracking-wide text-[#999999]">
                    Our Role
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.7] text-[#555555]">{project.role}</p>
                </div>

                <p className="mt-8 rounded-[12px] bg-[#fafafa] p-5 text-[13px] leading-[1.7] text-[#555555]">
                  {project.outcome}
                </p>

                {related.length > 0 && (
                  <div className="mt-6 flex flex-wrap items-center gap-2 text-[12px] text-[#999999]">
                    <span>Related:</span>
                    {related.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="rounded-full border border-[#e5e5e5] px-3 py-1 text-[#555555] no-underline transition-colors hover:border-[#c83db6] hover:text-[#c83db6]"
                      >
                        {s.shortName}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <CTAButton href="/book-a-call" className="h-[46px] px-7 text-[13px]">
            Start Your Project
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
