
"use client";

import React from "react";
import { motion } from "framer-motion";

const App = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const benefits = [
    {
      image: "/first.png",
      title: "EXPLORE INSPIRATION",
      text: "Discover creative ideas and practical resources designed to help you grow.",
      bg: "bg-purple-50",
    },
    {
      image: "/second.png",
      title: "MODERN EXPERIENCE",
      text: "Learn through a simple, engaging and modern learning experience.",
      bg: "bg-orange-50",
    },
    {
      image: "/third.png",
      title: "COLLABORATIVE LEARNING",
      text: "Connect with other learners and develop valuable practical skills.",
      bg: "bg-orange-50",
    },
    {
      image: "/fourth.png",
      title: "INTERACTIVE MODULES",
      text: "Enjoy structured modules designed for effective and flexible learning.",
      bg: "bg-purple-50",
    },
  ];

  const courses = [
    {
      image: "/front.png",
      title: "FRONT-END DEVELOPMENT",
      description:
        "Learn modern HTML, CSS, JavaScript and responsive web development from the ground up.",
      color: "bg-orange-400",
      hover: "hover:bg-orange-500",
    },
    {
      image: "/back.png",
      title: "BACK-END DEVELOPMENT",
      description:
        "Build powerful server-side applications, APIs and databases using modern technologies.",
      color: "bg-purple-600",
      hover: "hover:bg-purple-700",
    },
    {
      image: "/python.png",
      title: "PYTHON FULL-STACK DEVELOPMENT",
      description:
        "Master Python, backend development and full-stack application development.",
      color: "bg-orange-400",
      hover: "hover:bg-orange-500",
    },
    {
      image: "/ui.png",
      title: "UI/UX DESIGN",
      description:
        "Create beautiful interfaces and intuitive digital experiences using modern design principles.",
      color: "bg-purple-600",
      hover: "hover:bg-purple-700",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React JS",
    "Tailwind CSS",
    "GIT & GITHUB",
    "Bootstrap",
  ];

  return (
    <>

      <div className="min-h-screen overflow-hidden bg-white text-[#202027]">

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-[#fff8e5] px-6 py-20 md:py-24">

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute -left-20 -top-20 h-56 w-80 rounded-full bg-purple-100/70 blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -right-20 -top-16 h-56 w-80 rounded-full bg-purple-100/70 blur-3xl"
          />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative mx-auto mt-20 max-w-6xl text-center"
          >
            <motion.h1
              variants={fadeUp}
              className="font-Raleway text-[45px] font-bold leading-tight md:text-6xl"
            >
              All Courses For Students
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg md:leading-8"
            >
              Get To Know Our Tools And Our Mission To Provide Exceptional
              Service
              <br />
              and Quality Products
            </motion.p>
          </motion.div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="px-6 py-16 md:py-20">

          <div className="mx-auto max-w-6xl">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="text-sm font-semibold text-orange-400 md:text-base">
                Benefits
              </p>

              <h2 className="mt-2 font-Raleway text-[40px] font-semibold md:text-4xl">
                Best Place To Learn Growth
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                Get access to practical courses and resources designed to help
                you develop your skills and grow professionally.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">

              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardAnimation}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="rounded-xl border border-gray-100 bg-white p-7 text-center shadow-sm"
                >

                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-xl ${benefit.bg}`}
                  >
                    <img
                      className="h-8"
                      src={benefit.image}
                      alt={benefit.title}
                   
              loading="lazy"
              decoding="async"
            />
                  </motion.div>

                  <h3 className="mt-5 text-sm font-bold md:text-base">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {benefit.text}
                  </p>

                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* COURSES SECTION */}
        <section className="px-6 pb-20 md:pb-24">

          <div className="mx-auto max-w-5xl">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="pl-0 text-sm font-semibold text-orange-400 md:pl-16 md:text-base">
                All Courses
              </p>

              <h2 className="mt-2 pl-0 font-Raleway text-[40px] font-semibold md:pl-16 md:text-4xl">
                Available Courses
              </h2>

              <p className="mt-4 max-w-2xl pl-0 text-sm leading-7 text-gray-600 md:pl-16 md:text-base md:leading-8">
                Learn from carefully structured courses created to help you
                develop valuable digital skills.
              </p>
            </motion.div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-7">

              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={cardAnimation}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0px 15px 35px rgba(0,0,0,0.12)",
                  }}
                  className="grid gap-7 rounded-xl border border-gray-100 bg-white p-5 shadow-md md:grid-cols-[270px_1fr]"
                >

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden rounded-lg"
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-60 w-full object-cover md:h-full"
                   
              loading="lazy"
              decoding="async"
            />
                  </motion.div>

                  <div className="py-2">

                    <h3 className="text-lg font-bold md:text-xl">
                      {course.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                      {course.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">

                      {skills.slice(0, 5).map((skill) => (
                        <span
                          key={skill}
                          className="text-[13px] font-semibold text-black"
                        >
                          ● {skill}
                        </span>
                      ))}

                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-5">

                      <div className="flex flex-wrap gap-5">

                        {skills.slice(5).map((skill) => (
                          <span
                            key={skill}
                            className="text-[13px] font-semibold text-black"
                          >
                            ● {skill}
                          </span>
                        ))}

                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`ml-auto cursor-pointer rounded-lg ${course.color} ${course.hover} px-6 py-3 text-sm font-semibold text-white transition`}
                      >
                        Learn More
                      </motion.button>

                    </div>

                  </div>

                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-[#fff8e5] px-6 py-16 md:py-20">

          <div className="mx-auto max-w-6xl">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <h2 className="text-center text-3xl font-bold md:text-4xl">
                What Our Students Are Saying
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-7 text-gray-600 md:text-base">
                Hear from students who have experienced our courses and
                grown their skills.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardAnimation}
                whileHover={{ y: -8 }}
                className="rounded-xl bg-white p-7 shadow-sm"
              >

                <div className="flex items-center gap-4">

                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src="/ib.png"
                    alt="Student"
                    className="h-12 w-12 rounded-full object-cover"
                 
              loading="lazy"
              decoding="async"
            />

                  <h3 className="text-sm font-bold">
                    IBRAHIM OMOTOSHO
                  </h3>

                </div>

                <p className="mt-5 text-sm leading-7 text-gray-600">
                  &ldquo;The courses are easy to follow and extremely practical.
                  I gained confidence in my skills very quickly.&rdquo;
                </p>

              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardAnimation}
                whileHover={{ y: -8 }}
                className="rounded-xl bg-white p-7 shadow-sm"
              >

                <div className="flex items-center gap-4">

                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src="/mo.png"
                    alt="Student"
                    className="h-12 w-12 rounded-full object-cover"
                 
              loading="lazy"
              decoding="async"
            />

                  <h3 className="text-sm font-bold">
                    KOREDE MOHAMMED
                  </h3>

                </div>

                <p className="mt-5 text-sm leading-7 text-gray-600">
                  &ldquo;I really enjoyed the learning experience. Everything
                  is simple, organized and easy to understand.&rdquo;
                </p>

              </motion.div>

            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="px-6 py-12 md:py-16">

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl rounded-2xl bg-[#c326c9] px-6 py-14 text-center shadow-md md:px-10 md:py-16"
          >

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-white md:text-4xl"
            >
              LIKE TO JOIN US?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/90 md:text-base"
            >
              Become part of our learning community and build the
              skills you need for your future.
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.08,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="mt-7 cursor-pointer rounded-full bg-white px-8 py-3 text-sm font-semibold text-purple-600 transition hover:bg-gray-100"
            >
              Apply Now
            </motion.button>

          </motion.div>

        </section>

      </div>

    </>
  );
};

export default App;