"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { API_BASE_URL } from "@/lib/site-config";

const courses = [
  "Web Development",
  "Graphic Design",
  "Digital Marketing",
  "UI/UX Design",
  "Data Analysis",
];

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    course: "",
    state: "",
    city: "",
    courseType: "",
    others: "",
    reason: "",
  });

  const [job, setJob] = useState(null);
  const [jobLoading, setJobLoading] = useState(true);
  const [jobError, setJobError] = useState("");


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const jobId = params.get("jobId");

    if (!jobId) {
      setJobLoading(false);
      setJobError("No job was selected.");
      return;
    }

    const getJob = async () => {
      try {
        setJobLoading(true);
        setJobError("");

        const response = await fetch(
          `${API_BASE_URL}/jobs/${jobId}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        
        setJob(data);
      } catch (error) {
        console.error("GET JOB ERROR:", error);

        setJobError(
          "Unable to load the selected job. Please go back and try again."
        );
      } finally {
        setJobLoading(false);
      }
    };

    getJob();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(window.location.search);

    const jobId = params.get("jobId");

    const applicationData = {
      jobId,
      jobTitle: job?.title || job?.job_title || "",
      company: job?.company || "",
      ...formData,
    };

    
    alert("Application submitted successfully!");
  };

  return (
    <>
    <div className="min-h-screen w-full bg-[#fafafa]">
      <main
        className="
          mx-auto
          w-[92%]
          max-w-[900px]
          pb-[80px]
          pt-10
          mt-10

          max-[480px]:w-[94%]
        "
      >


        <div
          className="
            rounded-[14px]
            border
            border-[#e8e8e8]
            bg-white
            p-[45px]
            mt-30px
            shadow-[0_10px_35px_rgba(0,0,0,0.05)]

            max-[768px]:p-[32px]

            max-[480px]:p-[22px]
          "
        >

          <div className="mb-[40px]">
            <h1
              className="
                mb-[20px]
                flex
                min-h-[52px]
                items-center
                rounded-[8px]
                bg-[#fff8d8]
                px-[20px]
                text-[16px]
                font-semibold
                text-[#d99400]

                max-[480px]:text-[14px]
              "
            >
              Apply For A Job
            </h1>

            <p
              className="
                max-w-[650px]
                text-[14px]
                leading-[1.7]
                text-[#777]

                max-[480px]:text-[13px]
              "
            >
              Fill in your details below to apply for the selected job.
              Make sure your information is correct before submitting the
              form.
            </p>
          </div>


          {jobLoading && (
            <div className="mb-[30px] rounded-[8px] border border-gray-100 bg-gray-50 p-[18px]">
              <p className="text-[13px] text-gray-500">
                Loading selected job...
              </p>
            </div>
          )}

          {!jobLoading && jobError && (
            <div className="mb-[30px] rounded-[8px] border border-red-100 bg-red-50 p-[18px]">
              <p className="text-[13px] text-red-500">
                {jobError}
              </p>
            </div>
          )}

          {!jobLoading && !jobError && job && (
            <div className="mb-[30px] rounded-[10px] border border-orange-100 bg-orange-50 p-[20px]">
              <p className="text-[12px] font-semibold uppercase tracking-wide text-orange-500">
                Applying For
              </p>

              <h2 className="mt-[6px] text-[20px] font-semibold text-gray-900">
                {job.title ||
                  job.job_title ||
                  "Untitled Position"}
              </h2>

              {job.company && (
                <p className="mt-[5px] text-[14px] text-gray-500">
                  {job.company}
                </p>
              )}

              {job.location && (
                <p className="mt-[3px] text-[13px] text-gray-400">
                  {job.location}
                </p>
              )}
            </div>
          )}


          <form onSubmit={handleSubmit}>
            {/* FULL NAME + EMAIL */}

            <div
              className="
                grid
                grid-cols-2
                gap-x-[30px]

                max-[600px]:grid-cols-1
                max-[600px]:gap-x-0
              "
            >
              {/* FULL NAME */}

              <div className="mb-[28px] w-full">
                <label
                  htmlFor="fullName"
                  className="
                    mb-[9px]
                    block
                    text-[13px]
                    font-semibold
                    text-[#333]

                    max-[480px]:text-[12px]
                  "
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="
                    h-[48px]
                    w-full
                    rounded-[6px]
                    border
                    border-[#dcdcdc]
                    bg-white
                    px-[14px]
                    text-[14px]
                    text-[#333]
                    placeholder:text-[#aaa]
                    outline-none
                    transition
                    duration-200

                    hover:border-[#c8c8c8]

                    focus:border-[#f6a000]
                    focus:ring-4
                    focus:ring-[#f6a000]/10

                    max-[480px]:h-[46px]
                    max-[480px]:text-[13px]
                  "
                />
              </div>

              {/* EMAIL */}

              <div className="mb-[28px] w-full">
                <label
                  htmlFor="email"
                  className="
                    mb-[9px]
                    block
                    text-[13px]
                    font-semibold
                    text-[#333]

                    max-[480px]:text-[12px]
                  "
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    h-[48px]
                    w-full
                    rounded-[6px]
                    border
                    border-[#dcdcdc]
                    bg-white
                    px-[14px]
                    text-[14px]
                    text-[#333]
                    placeholder:text-[#aaa]
                    outline-none
                    transition
                    duration-200

                    hover:border-[#c8c8c8]

                    focus:border-[#f6a000]
                    focus:ring-4
                    focus:ring-[#f6a000]/10

                    max-[480px]:h-[46px]
                    max-[480px]:text-[13px]
                  "
                />
              </div>
            </div>

            <div
              className="
                grid
                grid-cols-2
                gap-x-[30px]

                max-[600px]:grid-cols-1
                max-[600px]:gap-x-0
              "
            >
              {/* STATE */}

              <div className="mb-[28px] w-full">
                <label
                  htmlFor="state"
                  className="
                    mb-[9px]
                    block
                    text-[13px]
                    font-semibold
                    text-[#333]

                    max-[480px]:text-[12px]
                  "
                >
                  State
                </label>

                <input
                  id="state"
                  name="state"
                  type="text"
                  placeholder="Enter your state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="
                    h-[48px]
                    w-full
                    rounded-[6px]
                    border
                    border-[#dcdcdc]
                    bg-white
                    px-[14px]
                    text-[14px]
                    text-[#333]
                    placeholder:text-[#aaa]
                    outline-none
                    transition
                    duration-200

                    hover:border-[#c8c8c8]

                    focus:border-[#f6a000]
                    focus:ring-4
                    focus:ring-[#f6a000]/10

                    max-[480px]:h-[46px]
                    max-[480px]:text-[13px]
                  "
                />
              </div>

              {/* CITY */}

              <div className="mb-[28px] w-full">
                <label
                  htmlFor="city"
                  className="
                    mb-[9px]
                    block
                    text-[13px]
                    font-semibold
                    text-[#333]

                    max-[480px]:text-[12px]
                  "
                >
                  City
                </label>

                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="
                    h-[48px]
                    w-full
                    rounded-[6px]
                    border
                    border-[#dcdcdc]
                    bg-white
                    px-[14px]
                    text-[14px]
                    text-[#333]
                    placeholder:text-[#aaa]
                    outline-none
                    transition
                    duration-200

                    hover:border-[#c8c8c8]

                    focus:border-[#f6a000]
                    focus:ring-4
                    focus:ring-[#f6a000]/10

                    max-[480px]:h-[46px]
                    max-[480px]:text-[13px]
                  "
                />
              </div>
            </div>

            <div
              className="
                grid
                grid-cols-2
                gap-x-[30px]

                max-[600px]:grid-cols-1
                max-[600px]:gap-x-0
              "
            >


              {/* OTHER INFORMATION */}

              <div className="mb-[28px]  w-full">
                <label
                  htmlFor="others"
                  className="
                    mb-[9px]
                    block
                    text-[13px]
                    font-semibold
                    text-[#333]

                    max-[480px]:text-[12px]
                  "
                >
                  Other Information
                </label>

                <input
                  id="others"
                  name="others"
                  type="text"
                  placeholder="Any additional information"
                  value={formData.others}
                  onChange={handleChange}
                  className="
                    h-[48px]
                    w-full
                    rounded-[6px]
                    border
                    border-[#dcdcdc]
                    bg-white
                    px-[14px]
                    text-[14px]
                    text-[#333]
                    placeholder:text-[#aaa]
                    outline-none
                    transition
                    duration-200

                    hover:border-[#c8c8c8]

                    focus:border-[#f6a000]
                    focus:ring-4
                    focus:ring-[#f6a000]/10

                    max-[480px]:h-[46px]
                    max-[480px]:text-[13px]
                  "
                />
              </div>
            </div>


            <div className="mb-[32px] w-full">
              <label
                htmlFor="reason"
                className="
                  mb-[9px]
                  block
                  text-[13px]
                  font-semibold
                  text-[#333]

                  max-[480px]:text-[12px]
                "
              >
                Tell us about yourself?
              </label>

              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Tell us briefly about yourself..."
                rows="5"
                className="
                  w-full
                  resize-none
                  rounded-[6px]
                  border
                  border-[#dcdcdc]
                  bg-white
                  px-[14px]
                  py-[13px]
                  text-[14px]
                  leading-[1.6]
                  text-[#333]
                  placeholder:text-[#aaa]
                  outline-none
                  transition
                  duration-200

                  hover:border-[#c8c8c8]

                  focus:border-[#f6a000]
                  focus:ring-4
                  focus:ring-[#f6a000]/10

                  max-[480px]:text-[13px]
                "
              />

              <p
                className="
                  mb-[28px]
                  text-[13px]
                  leading-[1.6]
                  text-[#777]
                  max-[480px]:text-[12px]
                "
              >
                Submit your application for our team to review. Our team
                will get back to you within 24 hours.
              </p>
            </div>


            <button
              type="submit"
              className="
                h-[50px]
                min-w-[140px]
                rounded-[7px]
                bg-[#f6a000]
                px-[28px]
                text-[14px]
                font-semibold
                text-white
                shadow-[0_5px_15px_rgba(246,160,0,0.2)]
                transition
                duration-200
                cursor-pointer
                hover:bg-[#e99500]
                hover:shadow-[0_7px_20px_rgba(246,160,0,0.3)]

                active:scale-[0.98]

                max-[480px]:h-[48px]
                max-[480px]:w-full
              "
            >
              Submit Application
            </button>
          </form>
        </div>

        <Link
          href="/"
          className="
            mx-auto
            mt-[35px]
            block
            w-fit
            text-[13px]
            font-medium
            text-[#e9a51a]
            underline
            underline-offset-4
            transition
            duration-200

            hover:text-[#d99400]
          "
        >
          ← Back to home
        </Link>
      </main>
    </div>
    </>
  );
}