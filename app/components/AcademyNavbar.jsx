"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap } from "lucide-react";
import { SITE } from "@/lib/site-config";

const navItems = [
  { name: "Courses", href: "/courses" },
  { name: "Kids Coding", href: "/kids-coding" },
  { name: "Careers & Internships", href: "/careers" },
  { name: "Register", href: "/register" },
];

export default function AcademyNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 h-[80px] w-full border-b border-[#f0f0f0] bg-white">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <GraduationCap className="h-6 w-6 text-[#c83db6]" />
          <span className="text-[15px] font-medium text-black">Toshconsult Academy</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Academy">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] text-[#333333] no-underline transition-colors hover:text-[#c83db6]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={SITE.url}
            className="text-[12px] text-[#999999] no-underline transition-colors hover:text-[#333333]"
          >
            Toshconsult.com ↗
          </a>
          <Link
            href="/student-login"
            className="flex h-[38px] items-center justify-center whitespace-nowrap rounded-[9px] bg-[#c83db6] px-5 text-[12px] font-medium text-white no-underline transition-colors hover:bg-[#b32fa1]"
          >
            Student Login
          </Link>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen((o) => !o)}
          className="flex h-[35px] w-[35px] items-center justify-center rounded-[5px] border border-gray-300 md:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-[80px] w-full overflow-hidden border-b border-[#f0f0f0] bg-white md:hidden"
          >
            <nav className="flex flex-col px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-gray-100 py-3 text-[14px] text-[#111111] no-underline last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/student-login"
                className="mt-3 flex h-[42px] items-center justify-center rounded-[9px] bg-[#c83db6] text-[13px] text-white no-underline"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Student Login
              </Link>
              <a href={SITE.url} className="mt-3 text-center text-[12px] text-[#999999] no-underline">
                Toshconsult.com ↗
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
