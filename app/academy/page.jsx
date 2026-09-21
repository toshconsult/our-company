"use client";
import Link from "next/link";
import { SITE } from "@/lib/site-config";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer, cardAnimation } from "@/lib/motion-variants";

const academyLinks = [
  { name: "Courses", href: "/courses", description: "Browse available course tracks." },
  { name: "Register for a Course", href: "/register", description: "Sign up for an upcoming course." },
  { name: "Kids Coding", href: "/kids-coding", description: "A dedicated track for younger learners." },
  { name: "Careers & Internships", href: "/careers", description: "Open roles and internship opportunities." },
  { name: "Student Login", href: "/student-login", description: "Existing students, sign in here." },
];

export default function AcademyPage() {
  return (
    <main className="w-full bg-white">
      <section className="bg-gradient-to-b from-[#fdf6ff] to-white px-8 py-20 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-[760px] text-center"
        >
          <p className="text-[13px] font-medium text-[#c83db6]">TOSHCONSULT ACADEMY</p>
          <h1 className="mt-4 text-[32px] font-medium leading-[1.2] text-black sm:text-[40px]">
            Practical technology training
          </h1>
          <p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-[1.7] text-[#777777]">
            Toshconsult Academy is our training arm — practical technology
            training designed to help students build real-world digital
            skills. It&apos;s separate from our client work, but shares the
            same team.
          </p>
        </motion.div>
      </section>

      <section className="px-8 pb-24 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-[900px] grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {academyLinks.map((link) => (
            <motion.div key={link.href} variants={cardAnimation} whileHover={{ y: -6 }}>
              <Link
                href={link.href}
                className="block h-full rounded-[14px] border border-[#f0f0f0] bg-white p-6 no-underline shadow-sm"
              >
                <h2 className="text-[15px] font-medium text-black">{link.name}</h2>
                <p className="mt-2 text-[12.5px] leading-[1.6] text-[#777777]">{link.description}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#f6a000]">
                  Explore <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <p className="mx-auto mt-10 max-w-[600px] text-center text-[12.5px] text-[#999999]">
          Looking for web design, software, or digital services for your
          business instead?{" "}
          <a href={SITE.url} className="font-medium text-[#c83db6]">
            Visit the main Toshconsult site
          </a>
          .
        </p>
      </section>
    </main>
  );
}
