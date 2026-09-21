"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE, SOCIAL_LINKS, SERVICES } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const socialAnimation = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const socialLinks = [
  { name: "Instagram", href: SOCIAL_LINKS.instagram, icon: "/images/instagram.png" },
  { name: "Twitter", href: SOCIAL_LINKS.twitter, icon: "/images/twitter.png" },
  { name: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: "/images/linkedin.png" },
  { name: "Facebook", href: SOCIAL_LINKS.facebook, icon: "/images/facebook.png" },
];

const footerColumns = [
  {
    title: "Services",
    links: SERVICES.map((s) => ({ label: s.shortName, href: `/services/${s.slug}` })),
  },
  {
    title: "Company",
    links: [
      { label: "Work", href: "/work" },
      { label: "Industries", href: "/industries" },
      { label: "About Us", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Book a Discovery Call", href: "/book-a-call" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative min-h-[397px] w-full overflow-hidden bg-white">
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[100px] -top-[100px] h-[300px] w-[350px] rounded-full bg-[#f8e8fa] blur-[80px]" />
        <div className="absolute -bottom-[130px] -right-[100px] h-[320px] w-[380px] rounded-full bg-[#f5def6] blur-[85px]" />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative mx-auto w-full max-w-[879px] px-4 sm:px-0">

        {/* ================= TOP CONTACT SECTION ================= */}
        <motion.div
          className="flex flex-col items-start justify-between gap-8 pt-[40px] sm:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <motion.div
            className="space-y-[12px] text-[12px] font-normal text-[#777777]"
            variants={fadeUp}
          >
            <motion.div className="flex items-start" variants={itemAnimation}>
              <span className="mr-[10px] min-w-[65px] font-medium text-[#111111]">
                Address:
              </span>
              <span>{SITE.address}</span>
            </motion.div>

            <motion.div className="flex items-start" variants={itemAnimation}>
              <span className="mr-[10px] min-w-[65px] font-medium text-[#111111]">
                Phone No:
              </span>
              <a href={SITE.phoneHref} className="hover:text-[#111111]">
                {SITE.phone}
              </a>
            </motion.div>

            <motion.div className="flex items-start" variants={itemAnimation}>
              <span className="mr-[10px] min-w-[65px] font-medium text-[#111111]">
                Email:
              </span>
              <a href={`mailto:${SITE.email}`} className="hover:text-[#111111]">
                {SITE.email}
              </a>
            </motion.div>
          </motion.div>

          {/* ================= SOCIAL ICONS ================= */}
          <motion.div
            className="flex items-center gap-[15px] pt-[5px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Toshconsult on ${social.name}`}
                variants={socialAnimation}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={25}
                  height={25}
                  className="h-[25px] w-[25px] object-contain"
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ================= LOGO ================= */}
        <motion.div
          className="mt-[25px]"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/" aria-label="Toshconsult home">
            <Image
              src="/images/logo.png"
              alt="Toshconsult Technologies"
              width={105}
              height={55}
              className="h-auto w-[62px] object-contain"
            />
          </Link>
        </motion.div>

        {/* ================= FOOTER COLUMNS ================= */}
        <motion.div
          className="mt-[35px] grid grid-cols-1 gap-8 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {footerColumns.map((column) => (
            <motion.div key={column.title} variants={fadeUp}>
              <h3 className="mb-[21px] text-[15px] font-medium text-[#111111]">
                {column.title}
              </h3>

              <div className="space-y-[11px] text-[11px] font-normal text-[#777777]">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block transition-colors duration-200 hover:text-[#111111]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= COPYRIGHT ================= */}
        <motion.div
          className="mt-[54px] pb-[32px] text-left"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[11px] font-normal text-[#777777]">
            Copyright © {new Date().getFullYear()} {SITE.name} ({SITE.registration}) | All Rights Reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
