
"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const scaleUp = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const App = () => {
  return (
    <>
    <div className="min-h-screen overflow-hidden bg-white text-[#202027]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-white px-6 pb-8 pt-3 md:pb-12 md:pt-6">

        {/* Background blobs — static; a constantly-drifting background
            reads as noise rather than polish on a B2B page. */}
        <div className="absolute -left-20 -top-24 h-34 w-64 rounded-full bg-purple-100/70 blur-3xl" />

        <div className="absolute -right-20 -top-16 h-34 w-64 rounded-full bg-purple-100/70 blur-3xl" />

        <motion.div
          className="relative mx-auto mt-35 max-w-5xl text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl font-bold leading-tight md:text-5xl"
          >
            Discover Our Story. Who We
            <br />
            Are And What We Stand For
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-[12px] leading-5 text-gray-600 md:text-sm md:leading-6"
          >
            Get to know our story, our values and what makes us different.
            <br />
            We are committed to delivering innovative technology solutions.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] text-gray-500"
          >
            <span>
              <strong className="text-gray-900">Founded</strong> 2021
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
              <strong className="text-gray-900">Founder</strong> Abdulmaleeq Ismaheel
            </span>
            <span className="hidden sm:inline">•</span>
            
            <span className="hidden sm:inline">•</span>
            <span>
              <strong className="text-gray-900">Registered</strong> RC 8781223
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section className="bg-[#FEF3C780] px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <motion.p
            className="mb-8 text-center text-sm font-semibold text-gray-700 md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            Our Trusted Clients
          </motion.p>

          <motion.div
            className="
              grid
              grid-cols-1
              items-center
              justify-items-center
              gap-10
              sm:grid-cols-1
              sm:gap-10
              md:flex
              md:flex-wrap
              md:items-center
              md:justify-between
              md:gap-8
            "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >

            {[
              ["/mamtos.png", "Mamtos", "h-11"],
              ["/alpha.png", "Alpha", "h-6"],
              ["/adalo.png", "Adalo", "h-8"],
              ["/mamtos.png", "Mamtos", "h-11"],
              ["/alpha.png", "Alpha", "h-6"],
            ].map(([src, alt, height], index) => (
              <motion.img
                key={index}
                src={src}
                alt={alt}
                className={`${height} w-auto object-contain`}
                variants={scaleUp}
                whileHover={{
                  scale: 1.12,
                  y: -5,
                }}
                transition={{
                  duration: 0.25,
                }}
             
              loading="lazy"
              decoding="async"
            />
            ))}

          </motion.div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <main className="mx-auto max-w-6xl px-6">

        {/* ================= MISSION ================= */}
        <section className="grid items-center gap-8 py-10 md:grid-cols-2 md:gap-16 md:py-14">

          <motion.div
            className="overflow-hidden rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
          >
            <motion.img
              src="/img1.png"
              alt="Office"
              className="h-[220px] w-full object-cover md:h-[300px]"
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.5,
              }}
           
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}
          >
            <h2 className="text-2xl font-bold md:text-3xl">
              Our Mission
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-gray-600 md:text-sm md:leading-7">
              At our company, technology is at the heart of everything we do.
              We are passionate about creating innovative solutions that help
              businesses overcome challenges and achieve their goals.
            </p>

            <p className="mt-3 text-[12px] leading-6 text-gray-600 md:text-sm md:leading-7">
              We combine creativity, technology and expertise to deliver
              products and services that create meaningful impact for our
              clients and their customers.
            </p>
          </motion.div>

        </section>

        {/* ================= ADVANTAGES ================= */}
        <section className="pb-14 md:pb-18">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="text-[19px] font-semibold text-orange-400 md:text-xs">
              Advantages Of Our Services
            </p>

            <h2 className="mt-1 text-3xl font-bold leading-tight md:text-3xl">
              Innovative Solution At
              <br />
              Techsolutions
            </h2>

            <p className="mt-3 max-w-xl text-[12px] leading-6 text-gray-600 md:text-sm md:leading-7">
              We provide modern digital solutions that help businesses improve
              their operations, reach more customers and grow successfully.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 grid gap-9 md:grid-cols-2 md:gap-x-20 md:gap-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >

            {/* Advantage 1 */}
            <motion.div
              className="flex gap-4"
              variants={cardAnimation}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-md bg-purple-50 text-purple-500">
                <img src="/comp.png" alt=""
              loading="lazy"
              decoding="async"
            />
              </div>

              <div>
                <h3 className="text-[15px] font-bold md:text-xs">
                  COMPREHENSIVE SOFTWARE
                  <br />
                  DEVELOPMENT SERVICES
                </h3>

                <p className="mt-2 text-15px text-gray-600 md:text-xs md:leading-6">
                  Our team provides complete software development solutions
                  tailored to your business needs.
                </p>
              </div>
            </motion.div>

            {/* Advantage 2 */}
            <motion.div
              className="flex gap-4"
              variants={cardAnimation}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-400">
                <img src="/expert.png" alt=""
              loading="lazy"
              decoding="async"
            />
              </div>

              <div>
                <h3 className="text-[15px] font-bold md:text-xs">
                  EXPERT TRAINING
                </h3>

                <p className="mt-2 text-15px text-gray-600 md:text-xs md:leading-6">
                  We provide practical training that helps individuals develop
                  valuable technology skills.
                </p>
              </div>
            </motion.div>

            {/* Advantage 3 */}
            <motion.div
              className="flex gap-4"
              variants={cardAnimation}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-400">
                <img src="/star.png" alt=""
              loading="lazy"
              decoding="async"
            />
              </div>

              <div>
                <h3 className="text-[15px] font-bold md:text-xs">
                  INNOVATIVE SOLUTIONS
                </h3>

                <p className="mt-2 text-15px text-gray-600 md:text-xs md:leading-6">
                  We use modern technology and creative thinking to solve
                  complex business problems.
                </p>
              </div>
            </motion.div>

            {/* Advantage 4 */}
            <motion.div
              className="flex gap-4"
              variants={cardAnimation}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-md bg-purple-50 text-purple-500">
                <img src="/expect.png" alt=""
              loading="lazy"
              decoding="async"
            />
              </div>

              <div>
                <h3 className="text-[15px] font-bold md:text-xs">
                  EXCEPTIONAL CUSTOMER
                  <br />
                  EXPERIENCE
                </h3>

                <p className="mt-2 text-15px text-gray-600 md:text-xs md:leading-6">
                  We focus on delivering quality solutions while ensuring
                  our customers have an excellent experience.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="pb-16 md:pb-20">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="text-2xl font-semibold text-orange-400 md:text-xs">
              Services
            </p>

            <h2 className="mt-1 text-2xl font-bold md:text-3xl">
              Our Services
            </h2>

            <p className="mt-3 max-w-xl text-[12px] leading-6 text-gray-600 md:text-sm md:leading-7">
              We provide a wide range of technology services designed to help
              businesses improve, grow and succeed.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 grid gap-4 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >

            {/* Service 1 */}
            <motion.div
              className="flex gap-4 rounded-lg border border-gray-100 bg-white p-5"
              variants={cardAnimation}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-md bg-purple-50 text-purple-500">
                <img className="h-8" src="/22.png" alt=""
              loading="lazy"
              decoding="async"
            />
              </div>

              <div>
                <h3 className="text-[15px] font-Evolventa font-bold md:text-xs">
                  MOBILE APP DEVELOPMENT
                </h3>

                <p className="mt-2 text-[18px] leading-5 text-gray-600 md:text-xs md:leading-6">
                  Build modern mobile applications that are fast, reliable
                  and easy to use.
                </p>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="flex gap-4 rounded-lg border border-gray-100 bg-white p-5"
              variants={cardAnimation}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-400">
                <img className="h-8" src="/24.png" alt=""
              loading="lazy"
              decoding="async"
            />
              </div>

              <div>
                <h3 className="text-[15px] font-Evolventa font-bold md:text-xs">
                  WEBSITE DEVELOPMENT
                </h3>

                <p className="mt-2 text-[18px] leading-5 text-gray-600 md:text-xs md:leading-6">
                  Responsive websites designed to give your business a strong
                  online presence.
                </p>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="flex gap-4 rounded-lg border border-gray-100 bg-white p-5"
              variants={cardAnimation}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-md bg-purple-50 text-purple-500">
                <img className="h-8" src="/dig.png" alt=""
              loading="lazy"
              decoding="async"
            />
              </div>

              <div>
                <h3 className="text-[15px] font-bold md:text-xs">
                  DIGITAL MARKETING
                </h3>

                <p className="mt-2 text-[18px] leading-5 text-gray-600 md:text-xs md:leading-6">
                  Helping businesses reach more customers through effective
                  digital marketing strategies.
                </p>
              </div>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              className="flex gap-4 rounded-lg border border-gray-100 bg-white p-5"
              variants={cardAnimation}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-400">
                <img className="h-8" src="/ux.png" alt=""
              loading="lazy"
              decoding="async"
            />
              </div>

              <div>
                <h3 className="text-[15px] font-bold md:text-xs">
                  UI/UX DESIGN
                </h3>

                <p className="mt-2 text-[18px] leading-5 text-gray-600 md:text-xs md:leading-6">
                  Beautiful and intuitive interfaces that provide a great
                  user experience.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </section>

        {/* ================= TEAM ================= */}
        <section className="border-t border-gray-100 py-14 md:py-18">

          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="text-[11px] font-semibold text-orange-400 md:text-xs">
              Team
            </p>

            <h2 className="mt-1 text-2xl font-bold md:text-3xl">
              Our Teams
            </h2>

            <p className="mt-3 max-w-md text-[12px] leading-6 text-gray-600 md:text-sm">
              Meet the talented people behind our innovative solutions and
              exceptional service.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-5 sm:grid-cols-2 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >

            {/* Team 1 */}
            <motion.div
              className="relative overflow-hidden rounded-lg"
              variants={scaleUp}
              whileHover={{
                y: -8,
              }}
            >
              <motion.img
                src="/TOSH.jpg"
                alt="Team member"
                className="h-97 w-full object-cover"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.5,
                }}
             
              loading="lazy"
              decoding="async"
            />

              <div className="absolute bottom-3 left-3 right-3 rounded-md bg-white px-4 py-3 text-center shadow-sm">
                <h3 className="text-[11px] font-bold">
                  Abdulmaleeq Ismaheel
                </h3>

                <p className="mt-1 text-[13px] text-gray-500">
                  CEO & FOUNDER
                </p>
              </div>
            </motion.div>

            {/* Team 2 */}
            <motion.div
              className="relative overflow-hidden justify-center rounded-lg"
              variants={scaleUp}
              whileHover={{
                y: -8,
              }}
            >
              <motion.img
                src="/aunty.jpeg"
                alt="Team member"
                className="h-97 w-full object-cover"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.5,
                }}
             
              loading="lazy"
              decoding="async"
            />

              <div className="absolute bottom-3 left-3 right-3 rounded-md bg-white px-4 py-3 text-center shadow-sm">
                <h3 className="text-[11px] font-bold">
                  Tijani Fathia
                </h3>

                <p className="mt-1 text-[13px] text-gray-500">
                  Data scientist
                </p>
              </div>
            </motion.div>

            {/* Team 3 */}
            <motion.div
              className="relative overflow-hidden rounded-lg"
              variants={scaleUp}
              whileHover={{
                y: -8,
              }}
            >
              <motion.img
                src="/punk1.jpg"
                alt="Team member"
                className="h-97 w-full object-cover"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.5,
                }}
             
              loading="lazy"
              decoding="async"
            />

              <div className="absolute bottom-3 left-3 right-3 rounded-md bg-white px-4 py-3 text-center shadow-sm">
                <h3 className="text-[11px] font-bold">
                  Abdul Kadir Mubarak
                </h3>

                <p className="mt-1 text-[13px] text-gray-500">
                  FullStack Developer
                </p>
              </div>
            </motion.div>

          </motion.div>
        </section>

      </main>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#fff8e5] px-6 py-14 md:py-18">

        <div className="mx-auto max-w-5xl">

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-bold md:text-3xl">
              What People Are Saying
            </h2>

            <p className="mx-auto mt-3 max-w-md text-[12px] leading-6 text-gray-600 md:text-sm">
              Hear from some of the people who have experienced our services
              and solutions.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >

            {/* Testimonial 1 */}
            <motion.div
              className="rounded-lg bg-white p-6 shadow-sm"
              variants={fadeLeft}
              whileHover={{
                y: -6,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex items-center gap-3">

                <img
                  src="/ib.png"
                  alt="Customer"
                  className="h-9 w-9 rounded-full object-cover"
               
              loading="lazy"
              decoding="async"
            />

                <div>
                  <h3 className="text-[11px] font-bold">
                    IBRAHIM OMOTOSHO
                  </h3>
                </div>

              </div>

              <p className="mt-4 text-[12px] leading-6 text-gray-600">
                &ldquo;The team delivered exactly what we needed. Their attention
                to detail and professionalism was outstanding.&rdquo;
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="rounded-lg bg-white p-6 shadow-sm"
              variants={fadeRight}
              whileHover={{
                y: -6,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex items-center gap-3">

                <img
                  src="/mo.png"
                  alt="Customer"
                  className="h-9 w-9 rounded-full object-cover"
               
              loading="lazy"
              decoding="async"
            />

                <div>
                  <h3 className="text-[11px] font-bold">
                    KOREDE MOHAMMED
                  </h3>
                </div>

              </div>

              <p className="mt-4 text-[12px] leading-6 text-gray-600">
                &ldquo;Working with them was a great experience. The final product
                was modern, clean and exactly what we envisioned.&rdquo;
              </p>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-10 md:py-14">

        <motion.div
          className="mx-auto max-w-5xl rounded-lg bg-[#c326c9] px-6 py-10 text-center shadow-sm md:px-10 md:py-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleUp}
        >

          <motion.h2
            variants={fadeUp}
            className="text-2xl font-bold text-white md:text-3xl"
          >
            LIKE TO JOIN US?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-3 max-w-md text-[12px] leading-6 text-white/90 md:text-sm"
          >
            Become part of our team and help us create innovative solutions
            that make a difference.
          </motion.p>

          <motion.button
            variants={fadeUp}
            className="mt-5 cursor-pointer rounded-full bg-white px-6 py-2.5 text-[11px] font-semibold text-purple-600"
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Join Our Team
          </motion.button>

        </motion.div>

      </section>

    </div>
    </>
  );
};

export default App;

