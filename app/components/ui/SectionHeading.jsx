"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion-variants";

export default function SectionHeading({
  eyebrow,
  title,
  description = "",
  align = "left",
  className = "",
}) {
  const alignClasses = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`${alignClasses} ${className}`}
    >
      {eyebrow && (
        <p className="text-[14px] font-medium text-[#f2a000]">{eyebrow}</p>
      )}
      <h2 className="mt-4 text-[30px] font-medium leading-[1.15] text-black sm:text-[34px]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-[650px] text-[13px] leading-[1.6] text-[#777777] sm:text-[14px] mx-auto lg:mx-0">
          {description}
        </p>
      )}
    </motion.div>
  );
}
