"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer, cardAnimation } from "@/lib/motion-variants";
import CTAButton from "../../components/ui/CTAButton";
import { INDUSTRIES } from "@/lib/site-config";
import { INDUSTRY_DETAILS } from "../../components/data/industry-details";

export default function IndustriesPage() {
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
          <h1 className="mt-4 text-[32px] font-medium leading-[1.2] text-black sm:text-[40px]">
            Built for how your industry actually works
          </h1>
          <p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-[1.7] text-[#777777]">
            Different industries face different digital challenges — here&apos;s
            how we approach the ones we work with most.
          </p>
        </motion.div>
      </section>

      <section className="px-8 pb-24 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-[1080px] grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry.slug}
              variants={cardAnimation}
              whileHover={{ y: -6 }}
              className="rounded-[16px] border border-[#f0f0f0] bg-white p-7 shadow-sm"
            >
              <h2 className="text-[17px] font-medium text-black">{industry.name}</h2>
              <p className="mt-3 text-[12.5px] leading-[1.7] text-[#777777]">
                {INDUSTRY_DETAILS[industry.slug]?.intro}
              </p>
              <Link
                href={`/industries/${industry.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#f6a000] no-underline"
              >
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 flex justify-center">
          <CTAButton href="/book-a-call" className="h-[46px] px-7 text-[13px]">
            Book a Discovery Call
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
