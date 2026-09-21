"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";

const VARIANTS = {
  primary: "bg-[#f6a000] text-white hover:bg-[#e99500]",
  secondary: "bg-[#c83db6] text-white hover:bg-[#b32fa1]",
  outline:
    "border border-[#c83db6] bg-white text-[#c83db6] hover:bg-[#c83db6] hover:text-white",
};

/**
 * A single button component that covers every CTA on the site:
 * - pass `href` to render a real, working Next.js <Link>
 * - pass `type="submit"` (no href) to use it inside a <form>
 * - pass `loading` to show a spinner + disable it during async work
 *
 * Every CTA everywhere else on the old site was a bare <motion.button>
 * with no href and no onClick — decorative animation, zero conversion
 * value. This component makes "does it actually go anywhere" impossible
 * to forget.
 */
export default function CTAButton({
  href,
  children,
  variant = "primary",
  showArrow = true,
  loading = false,
  className = "",
  ...props
}) {
  const classes = `inline-flex h-[52px] items-center justify-center gap-3 rounded-[9px] px-7 text-[14px] font-medium shadow-sm transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${VARIANTS[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : showArrow ? (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  const motionProps = {
    whileHover: loading ? {} : { scale: 1.03 },
    whileTap: loading ? {} : { scale: 0.97 },
    transition: { duration: 0.15 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="group inline-block">
        <Link href={href} className={classes} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      disabled={loading}
      className={`group ${classes}`}
      {...props}
    >
      {content}
    </motion.button>
  );
}
