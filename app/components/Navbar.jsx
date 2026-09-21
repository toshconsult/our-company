"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { SERVICES, INDUSTRIES } from "@/lib/site-config";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: SERVICES.map((s) => ({ name: s.shortName, href: `/services/${s.slug}` })),
  },
  { name: "Work", href: "/work" },
  {
    name: "Industries",
    href: "/industries",
    children: INDUSTRIES.map((i) => ({ name: i.name, href: `/industries/${i.slug}` })),
  },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

function DesktopDropdown({ item, isActive }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const show = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  if (!item.children) {
    return (
      <Link
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        className={`relative whitespace-nowrap p-0 text-[13px] font-normal no-underline outline-none transition-colors hover:text-[#f6a000] ${
          isActive ? "text-[#f6a000]" : "text-[#111111]"
        }`}
      >
        {item.name}
        {isActive && (
          <motion.span
            layoutId="nav-underline"
            className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#f6a000]"
          />
        )}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <Link
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        aria-expanded={open}
        className={`flex items-center gap-1 whitespace-nowrap text-[13px] font-normal no-underline outline-none transition-colors hover:text-[#f6a000] ${
          isActive ? "text-[#f6a000]" : "text-[#111111]"
        }`}
      >
        {item.name}
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full z-50 mt-3 w-[240px] -translate-x-1/2 rounded-[10px] border border-[#f0f0f0] bg-white p-2 shadow-lg"
          >
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block rounded-[7px] px-3 py-2 text-[13px] text-[#333333] no-underline transition-colors hover:bg-[#fdf3e4] hover:text-[#f6a000]"
              >
                {child.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 h-[100px] w-full transition-shadow duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm"
          : "bg-gradient-to-r from-[#f9e7fa] via-white to-white shadow-sm"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 lg:px-[45px]">

        {/* ================= LOGO ================= */}
        <Link href="/" className="shrink-0" aria-label="Toshconsult home">
          <Image
            src="/images/logo.png"
            alt="Toshconsult Technologies"
            width={105}
            height={45}
            priority
            className="block h-auto w-[95px] object-contain lg:w-[105px]"
          />
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden items-center gap-[26px] xl:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return <DesktopDropdown key={item.name} item={item} isActive={isActive} />;
          })}
        </nav>

        {/* ================= RIGHT SIDE: CTA ================= */}
        <div className="hidden items-center gap-5 xl:flex">
          <Link
            href="/book-a-call"
            className="flex h-[38px] items-center justify-center whitespace-nowrap rounded-[10px] bg-[#f6a000] px-5 text-[12px] font-medium text-white no-underline outline-none transition duration-200 hover:bg-[#e99500]"
          >
            Book a Discovery Call
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="flex h-[35px] w-[35px] items-center justify-center rounded-[5px] border border-gray-300 xl:hidden"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

      </div>

      {/* ================= MOBILE DROPDOWN MENU ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-0 top-[100px] max-h-[calc(100vh-100px)] w-full overflow-y-auto bg-white shadow-md xl:hidden"
          >
            <nav className="flex flex-col items-stretch px-6 py-4" aria-label="Mobile primary">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 py-2 last:border-0">
                  <Link
                    href={item.href}
                    className="block py-2 text-[15px] text-[#111111] no-underline hover:text-[#f6a000]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-3 flex flex-col gap-1 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-1 text-[13px] text-[#777777] no-underline hover:text-[#f6a000]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}


              <Link
                href="/book-a-call"
                className="mt-2 flex h-[42px] w-full items-center justify-center rounded-[10px] bg-[#f6a000] text-[13px] text-white no-underline hover:bg-[#e99500]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Discovery Call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
