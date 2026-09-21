"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer, cardAnimation } from "@/lib/motion-variants";
import CTAButton from "../../components/ui/CTAButton";
import SectionHeading from "../../components/ui/SectionHeading";
import { SERVICES } from "@/lib/site-config";

export default function ServicesPage() {
  return (
    <main className="w-full bg-white">
      <section className="bg-gradient-to-b from-[#fdf6ff] to-white px-8 py-20 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-[800px] text-center"
        >
          <p className="text-[13px] font-medium text-[#f6a000]">SERVICES</p>
          <h1 className="mt-4 text-[32px] font-medium leading-[1.2] text-black sm:text-[40px]">
            Everything you need to build and grow online
          </h1>
          <p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-[1.7] text-[#777777]">
            From a first business website to a custom internal platform —
            pick the service that matches where your business is right now.
          </p>
        </motion.div>
      </section>

      <section className="px-8 pb-24 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.slug}
              variants={cardAnimation}
              whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(200,61,182,0.1)" }}
              className="flex flex-col rounded-[16px] border border-[#f0f0f0] bg-white p-7 shadow-sm"
            >
              <h2 className="text-[17px] font-medium text-black">{service.name}</h2>
              <p className="mt-3 flex-1 text-[12.5px] leading-[1.7] text-[#777777]">
                {service.summary}
              </p>
              <p className="mt-5 text-[12px] font-medium text-[#c83db6]">
                Request a tailored proposal
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#f6a000] no-underline"
              >
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <p className="mx-auto mt-10 max-w-[700px] text-center text-[12px] text-[#999999]">
          Project cost depends on scope, features, integrations, and
          timeline — book a discovery call and we&apos;ll put together a
          tailored proposal.
        </p>

        <div className="mt-8 flex justify-center">
          <CTAButton href="/book-a-call" className="h-[46px] px-7 text-[13px]">
            Book a Discovery Call
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
