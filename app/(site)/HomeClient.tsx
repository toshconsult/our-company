"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleUp,
  staggerContainer,
  cardAnimation,
} from "@/lib/motion-variants";
import CTAButton from "../components/ui/CTAButton";
import SectionHeading from "../components/ui/SectionHeading";
import { SERVICES, PRICING_FACTORS, INDUSTRIES } from "@/lib/site-config";
import { WORK_PROJECTS } from "../components/data/work-projects";
import {
  ArrowUpRight,
  Search,
  PenTool,
  Code2,
  TrendingUp,
} from "lucide-react";

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="pointer-events-none absolute -left-[180px] -top-[120px] h-[500px] w-[550px] rounded-full bg-[#f9e7fa] blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute -bottom-[180px] -right-[150px] h-[500px] w-[550px] rounded-full bg-[#f5ddf7] blur-[110px]"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1180px] items-center px-8 pb-[105px] pt-[100px] lg:px-12 xl:px-0">
        <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          <motion.div variants={fadeLeft} initial="hidden" animate="visible" className="max-w-[560px]">
            <motion.h1
              variants={fadeLeft}
              className="text-[38px] font-bold leading-[1.12] tracking-[-1.5px] text-black sm:text-[46px] lg:text-[50px]"
            >
              We Build Websites & Digital Systems That Help Businesses Grow
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[540px] text-[14px] leading-[1.65] text-[#777777] sm:text-[15px]"
            >
              We design and develop high-performance websites, web
              applications, and digital solutions that help ambitious
              businesses attract customers, improve operations, and grow
              online.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="/book-a-call" className="w-full sm:w-auto text-[15px]">
                Book a Discovery Call
              </CTAButton>
              <CTAButton href="/work" variant="outline" showArrow={false} className="w-full sm:w-auto text-[15px]">
                View Our Work
              </CTAButton>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" animate="visible" className="flex justify-center lg:justify-end">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[520px] overflow-hidden rounded-[15px] border-[3px] border-[#c52db4]"
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                <Image
                  src="/images/hero.png"
                  alt="Toshconsult engineers building a digital product"
                  width={520}
                  height={385}
                  priority
                  className="h-[320px] w-full object-cover sm:h-[360px] lg:h-[385px]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* CLIENT / PROJECT LOGOS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative flex min-h-[105px] items-center bg-[#fff9df]"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid w-full max-w-[1050px] grid-cols-2 items-center justify-items-center gap-8 px-8 sm:grid-cols-3 lg:flex lg:justify-between"
        >
          {[
            ["/images/Matmos logo.png", "Matmos", "max-h-[42px]"],
            ["/images/ALPHABILLS STRAIGHT.png", "Alphabills", "max-h-[38px]"],
            ["/images/adalo.png", "TismaBit", "max-h-[35px]"],
            ["/images/airrand.png", "AirRand", "max-h-[45px]"],
            ["/images/paytonaira.png", "Paytonaira", "max-h-[38px]"],
          ].map(([src, alt, height]) => (
            <motion.div key={alt} variants={scaleUp} whileHover={{ scale: 1.1 }}>
              <Image src={src} alt={alt} width={160} height={45} className={`${height} w-auto object-contain`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   BUSINESS PROBLEMS & OUTCOMES
========================================================= */

const outcomes = [
  {
    title: "Attract more customers",
    text: "A fast, well-structured website that's built to be found, and built to convert the traffic it gets.",
  },
  {
    title: "Look credible to serious buyers",
    text: "A slow, dated, or broken site actively costs you trust before a prospect ever talks to you.",
  },
  {
    title: "Spend less time on manual work",
    text: "Custom software and automation that takes repetitive operational work off your team's plate.",
  },
  {
    title: "Keep growing after launch",
    text: "A website is a starting point, not a finish line — ongoing support keeps it improving.",
  },
];

function Outcomes() {
  return (
    <section className="w-full bg-white px-8 py-24 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow="WHY IT MATTERS"
          title="Your website and software should be doing more for your business"
          description="Most businesses lose customers not because the product is wrong, but because the digital experience around it is slow, unclear, or simply doesn't exist yet."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {outcomes.map((o) => (
            <motion.div
              key={o.title}
              variants={cardAnimation}
              whileHover={{ y: -6 }}
              className="rounded-[14px] border border-[#f0e6f0] bg-[#fdfaff] p-6"
            >
              <h3 className="text-[15px] font-medium text-black">{o.title}</h3>
              <p className="mt-3 text-[12.5px] leading-[1.7] text-[#777777]">{o.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   CORE SERVICES
========================================================= */

function Services() {
  return (
    <section className="w-full bg-[#fdf6ff] px-8 py-24 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Core services"
          description="From a first business website to a custom internal platform, we build the digital layer your business runs on."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.slug}
              variants={cardAnimation}
              whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(200,61,182,0.1)" }}
              className="flex flex-col rounded-[16px] bg-white p-7 shadow-sm"
            >
              <h3 className="text-[17px] font-medium text-black">{service.name}</h3>
              <p className="mt-3 flex-1 text-[12.5px] leading-[1.7] text-[#777777]">
                {service.summary}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#f6a000] no-underline"
              >
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-end">
          <CTAButton href="/services" showArrow={false} variant="outline" className="h-[42px] px-6 text-[12px]">
            View All Services
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SELECTED WORK
========================================================= */

function SelectedWork() {
  return (
    <section className="w-full bg-white px-8 py-24 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Recent projects"
          description="A look at what we've built — real products, built to solve real problems."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {WORK_PROJECTS.slice(0, 3).map((project) => (
            <motion.div
              key={project.slug}
              variants={cardAnimation}
              whileHover={{ y: -8 }}
              className="rounded-[16px] border border-[#f0f0f0] bg-white p-6 shadow-sm"
            >
              <p className="text-[11px] font-medium uppercase tracking-wide text-[#f6a000]">
                {project.industry}
              </p>
              <h3 className="mt-2 text-[16px] font-medium text-black">{project.name}</h3>
              <p className="mt-3 text-[12.5px] leading-[1.7] text-[#777777]">
                {project.context}
              </p>
              <Link
                href={`/work#${project.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#c83db6] no-underline"
              >
                View project <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-end">
          <CTAButton href="/work" showArrow={false} variant="outline" className="h-[42px] px-6 text-[12px]">
            See All Work
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INDUSTRIES
========================================================= */

function Industries() {
  return (
    <section className="w-full bg-[#fff9df] px-8 py-24 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow="INDUSTRIES"
          title="Built for how your industry actually works"
          align="center"
          className="mx-auto max-w-[650px]"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {INDUSTRIES.map((industry) => (
            <motion.div key={industry.slug} variants={scaleUp} whileHover={{ scale: 1.06, y: -3 }}>
              <Link
                href={`/industries/${industry.slug}`}
                className="block rounded-full border border-[#f0d9a0] bg-white px-6 py-3 text-[13px] font-medium text-black no-underline transition-colors hover:border-[#f6a000] hover:text-[#f6a000]"
              >
                {industry.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  { icon: Search, title: "Discover", text: "We learn your business, your customers, and what the site or system actually needs to do." },
  { icon: PenTool, title: "Design", text: "Clear, purposeful design — structured around the outcome, not decoration for its own sake." },
  { icon: Code2, title: "Build", text: "Development in focused milestones, with working versions you can see and react to along the way." },
  { icon: TrendingUp, title: "Grow", text: "Launch is a starting point — we keep the product improving with real usage and feedback." },
];

function Process() {
  return (
    <section className="w-full bg-white px-8 py-24 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading eyebrow="HOW WE WORK" title="A straightforward process" align="center" className="mx-auto max-w-[650px]" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step, i) => (
            <motion.div key={step.title} variants={cardAnimation} className="relative text-center">
              <div className="mx-auto flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#fdf3e4]">
                <step.icon className="h-6 w-6 text-[#f6a000]" />
              </div>
              <p className="mt-4 text-[11px] font-medium text-[#c83db6]">STEP {i + 1}</p>
              <h3 className="mt-1 text-[15px] font-medium text-black">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-[220px] text-[12.5px] leading-[1.7] text-[#777777]">
                {step.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   HOW PROJECT COST IS DETERMINED
========================================================= */

function PricingApproach() {
  return (
    <section className="w-full bg-[#fdf6ff] px-8 py-24 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow="INVESTMENT"
          title="How project cost is determined"
          description="We don't publish fixed prices, because two projects with the same label can cost very differently depending on scope. Here's what actually affects cost."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PRICING_FACTORS.map((factor) => (
            <motion.div
              key={factor}
              variants={cardAnimation}
              className="flex items-center gap-3 rounded-[12px] bg-white px-5 py-4 text-[13px] text-[#333333] shadow-sm"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#f6a000]" />
              {factor}
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-[12px] text-[#999999]">
          On a discovery call, we&apos;ll talk through your requirements and
          follow up with a tailored proposal — no naira, pound, or dollar
          figure quoted before we understand the project.
        </p>

        <div className="mt-6 flex justify-center">
          <CTAButton href="/book-a-call" className="h-[44px] px-7 text-[12.5px]">
            Book a Discovery Call
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CLOSING CTA
========================================================= */

function ConsultationBanner() {
  return (
    <section className="w-full bg-gradient-to-br from-[#c83db6] to-[#a52a99] px-8 py-20 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto flex max-w-[720px] flex-col items-center text-center"
      >
        <h2 className="text-[26px] font-medium leading-[1.2] text-white sm:text-[32px]">
          Ready to talk about your project?
        </h2>
        <p className="mt-4 max-w-[500px] text-[13px] leading-[1.7] text-white/80">
          Tell us what you&apos;re trying to build or fix — we&apos;ll walk you
          through how we&apos;d approach it and what it would take.
        </p>

        <CTAButton href="/book-a-call" variant="secondary" className="mt-8 w-full max-w-[270px] bg-white !text-[#c83db6] hover:bg-white/90">
          Book a Discovery Call
        </CTAButton>
      </motion.div>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Outcomes />
      <Services />
      <SelectedWork />
      <Industries />
      <Process />
      <PricingApproach />
      <ConsultationBanner />
    </main>
  );
}
