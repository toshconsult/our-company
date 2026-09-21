"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "When Is The Class Taking Place",
      answer:
        "The class takes place according to the scheduled timetable. Please check your class schedule for the exact date and time.",
    },
    {
      question: "How Can I Join The Class",
      answer:
        "You can join the class by logging into your student account and selecting the class from your dashboard.",
    },
    {
      question: "Where Can I Find My Class Schedule",
      answer:
        "Your class schedule can be found in your student dashboard or through the timetable provided by the school.",
    },
    {
      question: "How Do I Register For A Course",
      answer:
        "To register for a course, select the course you want and follow the registration instructions provided.",
    },
    {
      question: "Can I Change My Course",
      answer:
        "Yes. You can request to change your course by contacting the school administration or support team.",
    },
    {
      question: "How Can I Contact My Instructor",
      answer:
        "You can contact your instructor through the contact information provided on your course or student dashboard.",
    },
    {
      question: "Where Can I Get More Information",
      answer:
        "For more information, please contact our support team and we will be happy to assist you.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="m-0 min-h-screen bg-white p-0 text-black">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section
        className="
          relative
          h-[155px]
          w-full
          overflow-hidden
          bg-gradient-to-r
          from-[#fff4e7]
          via-[#fff9df]
          to-[#fcecef]
        "
      >

        {/* =================================================
            DECORATIVE SHAPES
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
            rotate: 20,
          }}
          animate={{
            opacity: 0.5,
            x: 0,
            rotate: 45,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            absolute
            left-[5%]
            top-[55px]
            h-[70px]
            w-[70px]
            border
            border-[#f4dda0]
          "
        />

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
            rotate: 20,
          }}
          animate={{
            opacity: 0.4,
            x: 0,
            rotate: 45,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="
            absolute
            left-[13%]
            top-[90px]
            h-[55px]
            w-[55px]
            border
            border-[#f4dda0]
          "
        />

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
            rotate: 20,
          }}
          animate={{
            opacity: 0.4,
            y: 0,
            rotate: 45,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="
            absolute
            left-[24%]
            top-[5px]
            h-[40px]
            w-[40px]
            border
            border-[#f4dda0]
          "
        />

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
            rotate: 20,
          }}
          animate={{
            opacity: 0.4,
            y: 0,
            rotate: 45,
          }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="
            absolute
            right-[20%]
            top-[5px]
            h-[65px]
            w-[65px]
            border
            border-[#f4dda0]
          "
        />

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
            rotate: 20,
          }}
          animate={{
            opacity: 0.4,
            x: 0,
            rotate: 45,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            absolute
            right-[8%]
            top-[90px]
            h-[65px]
            w-[65px]
            border
            border-[#efd8c0]
          "
        />


        {/* =================================================
            HEADER CONTENT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            pt-[10px]
          "
        >

          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              text-center
              text-[23px]
              font-bold
              tracking-tight
              md:text-[24px]
            "
          >
            Frequently Asked Questions
          </motion.h1>


          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="
              mt-3
              flex
              items-center
              gap-2
              text-[10px]
              text-gray-500
            "
          >
            <span>Home</span>

            <span className="text-gray-400">
              ›
            </span>

            <span>FAQ</span>
          </motion.div>

        </motion.div>

      </section>


      {/* =====================================================
          FAQ CONTENT
      ===================================================== */}

      <section
        className="
          px-5
          py-[45px]
          md:px-8
          md:py-[55px]
        "
      >

        <div className="mx-auto max-w-[580px]">


          {/* =================================================
              GET HELP
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-[35px]"
          >

            <p
              className="
                mb-2
                text-[10px]
                font-medium
                uppercase
                tracking-wide
                text-[#ff9800]
              "
            >
              FAQ
            </p>


            <h2
              className="
                mb-3
                text-[21px]
                font-medium
              "
            >
              Get Help
            </h2>


            <p
              className="
                max-w-[380px]
                text-[9px]
                leading-[1.7]
                text-gray-500
              "
            >
              Find answers to common questions about our classes,
              courses and services. Click a question below to see
              the answer.
            </p>

          </motion.div>


          {/* =================================================
              FAQ TITLE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              mb-[20px]
              origin-left
              rounded-[7px]
              bg-[#fff7d8]
              px-[22px]
              py-[14px]
            "
          >

            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-wide
                text-[#ff9800]
              "
            >
              Frequently Asked Questions
            </p>

          </motion.div>


          {/* =================================================
              FAQ LIST
          ================================================= */}

          <div className="space-y-[12px]">

            {faqs.map((faq, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -2,
                }}
                className={`
                  overflow-hidden
                  rounded-[7px]
                  border
                  bg-white
                  transition-all
                  duration-300
                  ${
                    openIndex === index
                      ? "border-[#ffd89a] shadow-md"
                      : "border-[#f0e7ed] shadow-sm"
                  }
                `}
              >

                {/* =================================================
                    QUESTION
                ================================================= */}

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    px-[20px]
                    py-[18px]
                    text-left
                  "
                >

                  <span
                    className="
                      text-[10px]
                      font-medium
                      text-gray-600
                      md:text-[11px]
                    "
                  >
                    {faq.question}
                  </span>


                  {/* PLUS / MINUS BUTTON */}

                  <motion.span
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                      scale: openIndex === index ? 1.05 : 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`
                      ml-4
                      flex
                      h-[28px]
                      w-[28px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      text-[20px]
                      font-light
                      ${
                        openIndex === index
                          ? "bg-[#ff9800] text-white"
                          : "border border-gray-200 bg-white text-black"
                      }
                    `}
                  >
                    {openIndex === index ? "−" : "+"}
                  </motion.span>

                </button>


                {/* =================================================
                    ANSWER
                ================================================= */}

                <AnimatePresence initial={false}>

                  {openIndex === index && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >

                      <div
                        className="
                          border-t
                          border-[#f5edf0]
                          px-[20px]
                          pb-[18px]
                          pt-[14px]
                        "
                      >

                        <motion.p
                          initial={{
                            opacity: 0,
                            y: -8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.25,
                            delay: 0.05,
                          }}
                          className="
                            text-[9px]
                            leading-[1.8]
                            text-gray-500
                          "
                        >
                          {faq.answer}
                        </motion.p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GET IN TOUCH
      ===================================================== */}

      <section
        className="
          border-t
          border-[#f1ecef]
          bg-[#fffdf9]
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            flex
            flex-col
            items-center
            px-5
            py-[45px]
            text-center
          "
        >

          <motion.h2
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mb-2
              text-[15px]
              font-semibold
              text-[#ff9800]
            "
          >
            GET IN TOUCH
          </motion.h2>


          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              max-w-[330px]
              text-[9px]
              leading-[1.8]
              text-gray-500
            "
          >
            Can&apos;t find the answer you&apos;re looking for? Contact us
            and we&apos;ll be happy to help you with any questions you
            may have.
          </motion.p>


          {/* CONTACT BUTTON */}

          <motion.button
            type="button"
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="
              mt-[20px]
              rounded-[7px]
              bg-[#ff9800]
              px-[28px]
              py-[10px]
              text-[9px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-[#ed8b00]
              hover:shadow-lg
            "
          >
            Contact Us
          </motion.button>

        </motion.div>

      </section>

    </main>
  );
};

export default Faq;