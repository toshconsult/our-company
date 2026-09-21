"use client";

import React, { useState } from "react";

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

      {/* =========================================
          HEADER
      ========================================= */}

      <section className="relative h-[155px] w-full overflow-hidden bg-gradient-to-r from-[#fff4e7] via-[#fff9df] to-[#fcecef]">

        {/* Decorative shapes */}

        <div className="absolute left-[5%] top-[55px] h-[70px] w-[70px] rotate-45 border border-[#f4dda0] opacity-50" />

        <div className="absolute left-[13%] top-[90px] h-[55px] w-[55px] rotate-45 border border-[#f4dda0] opacity-40" />

        <div className="absolute left-[24%] top-[5px] h-[40px] w-[40px] rotate-45 border border-[#f4dda0] opacity-40" />

        <div className="absolute right-[20%] top-[5px] h-[65px] w-[65px] rotate-45 border border-[#f4dda0] opacity-40" />

        <div className="absolute right-[8%] top-[90px] h-[65px] w-[65px] rotate-45 border border-[#efd8c0] opacity-40" />


        {/* Header Content */}

        <div className="relative z-10 flex flex-col items-center pt-[10px]">

          <h1 className="text-center text-[23px] font-bold tracking-tight md:text-[24px]">
            Frequently Asked Questions
          </h1>

          <div className="mt-3 flex items-center gap-2 text-[10px] text-gray-500">

            <span>Home</span>

            <span className="text-gray-400">
              ›
            </span>

            <span>FAQ</span>

          </div>

        </div>

      </section>


      {/* =========================================
          FAQ CONTENT
      ========================================= */}

      <section className="px-5 py-[45px] md:px-8 md:py-[55px]">

        <div className="mx-auto max-w-[580px]">


          {/* GET HELP */}

          <div className="mb-[35px]">

            <p className="mb-2 text-[10px] font-medium uppercase tracking-wide text-[#ff9800]">
              FAQ
            </p>

            <h2 className="mb-3 text-[21px] font-medium">
              Get Help
            </h2>

            <p className="max-w-[380px] text-[9px] leading-[1.7] text-gray-500">
              Find answers to common questions about our classes, courses
              and services. Click a question below to see the answer.
            </p>

          </div>


          {/* =========================================
              FAQ TITLE
          ========================================= */}

          <div className="mb-[20px] rounded-[7px] bg-[#fff7d8] px-[22px] py-[14px]">

            <p className="text-[10px] font-semibold uppercase tracking-wide text-[#ff9800]">
              Frequently Asked Questions
            </p>

          </div>


          {/* =========================================
              FAQ LIST
          ========================================= */}

          <div className="space-y-[12px]">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className={`overflow-hidden rounded-[7px] border bg-white transition-all duration-300 ${
                  openIndex === index
                    ? "border-[#ffd89a] shadow-md"
                    : "border-[#f0e7ed] shadow-sm"
                }`}
              >

                {/* QUESTION */}

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-[20px] py-[18px] text-left"
                >

                  <span className="text-[10px] font-medium text-gray-600 md:text-[11px]">
                    {faq.question}
                  </span>

                  <span
                    className={`ml-4 flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[20px] font-light transition-all duration-300 ${
                      openIndex === index
                        ? "bg-[#ff9800] text-white"
                        : "border border-gray-200 bg-white text-black"
                    }`}
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>

                </button>


                {/* ANSWER */}

                <div
                  className={`grid transition-all duration-300 ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >

                  <div className="overflow-hidden">

                    <div className="border-t border-[#f5edf0] px-[20px] pb-[18px] pt-[14px]">

                      <p className="text-[9px] leading-[1.8] text-gray-500">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          GET IN TOUCH
      ========================================= */}

      <section className="border-t border-[#f1ecef] bg-[#fffdf9]">

        <div className="flex flex-col items-center px-5 py-[45px] text-center">

          <h2 className="mb-2 text-[15px] font-semibold text-[#ff9800]">
            GET IN TOUCH
          </h2>

          <p className="max-w-[330px] text-[9px] leading-[1.8] text-gray-500">
            Can&apos;t find the answer you&apos;re looking for? Contact us and
            we&apos;ll be happy to help you with any questions you may have.
          </p>

          <button
            type="button"
            className="mt-[20px] rounded-[7px] bg-[#ff9800] px-[28px] py-[10px] text-[9px] font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ed8b00] hover:shadow-lg"
          >
            Contact Us
          </button>

        </div>

      </section>

    </main>
  );
};

export default Faq;