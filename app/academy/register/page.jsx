
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { API_BASE_URL } from "@/lib/site-config";

const API_URL = `${API_BASE_URL}/course-registrations`;

const courses = [
  "Web Development",
  "Graphic Design",
  "Digital Marketing",
  "UI/UX Design",
  "Data Analysis",
];

const courseTypes = ["Online", "Physical", "Hybrid"];

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    course: "",
    course_type: "",
    city: "",
    state: "",
    other: "",
    reason: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const payload = {
        full_name: formData.full_name,
        email: formData.email,
        course: formData.course,
        city: formData.city,
        state: formData.state,
        other: formData.other,
        reason: formData.reason,
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        throw new Error(
          errorData?.detail ||
            "Something went wrong. Please try again."
        );
      }

      await response.json();

      setSuccess(true);

      setFormData({
        full_name: "",
        email: "",
        course: "",
        course_type: "",
        city: "",
        state: "",
        other: "",
        reason: "",
      });
    } catch (err) {
      setError(
        err.message || "Unable to submit your registration."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <main className="min-h-screen w-full mt-25 bg-[#fafafa] text-[#222]">
      {/* PAGE CONTAINER */}
      <div
        className="
          mx-auto
          w-[92%]
          max-w-[900px]
          pb-[70px]
          pt-[30px]
          mt-0

          max-[768px]:pt-[20px]

          max-[480px]:w-[94%]
          max-[480px]:pt-[15px]
        "
      >
        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            mt-0
            rounded-[14px]
            border
            border-[#e8e8e8]
            bg-white
            p-[40px]
            shadow-[0_10px_35px_rgba(0,0,0,0.05)]

            max-[768px]:p-[30px]

            max-[480px]:p-[20px]
          "
        >
          {/* HEADER */}
          <div className="mb-[35px]">
            <div
              className="
                flex
                min-h-[50px]
                items-center
                rounded-[8px]
                bg-[#fff8d8]
                px-[20px]
              "
            >
              <h1
                className="
                  text-[16px]
                  font-semibold
                  text-[#d99400]

                  max-[480px]:text-[14px]
                "
              >
                Register For Our Training
              </h1>
            </div>

            <p
              className="
                mt-[15px]
                max-w-[650px]
                text-[13px]
                leading-[1.7]
                text-[#777]

                max-[480px]:text-[12px]
              "
            >
              Fill in your details below to register for your
              selected training. Make sure your information is
              correct before submitting the form.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit}>
            {/* FULL NAME + EMAIL */}
            <div
              className="
                grid
                grid-cols-2
                gap-x-[28px]

                max-[600px]:grid-cols-1
                max-[600px]:gap-x-0
              "
            >
              <Input
                label="Full Name"
                name="full_name"
                type="text"
                placeholder="Enter your full name"
                value={formData.full_name}
                onChange={handleChange}
                required
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* COURSE */}
            <div className="mb-[27px] w-full">
              <Select
                label="Choose Course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select a course</option>

                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </Select>
            </div>

            {/* STATE + CITY */}
            <div
              className="
                grid
                grid-cols-2
                gap-x-[28px]

                max-[600px]:grid-cols-1
                max-[600px]:gap-x-0
              "
            >
              <Input
                label="State"
                name="state"
                type="text"
                placeholder="Enter your state"
                value={formData.state}
                onChange={handleChange}
                required
              />

              <Input
                label="City"
                name="city"
                type="text"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            {/* COURSE TYPE + OTHERS */}
            <div
              className="
                grid
                grid-cols-2
                gap-x-[28px]

                max-[600px]:grid-cols-1
                max-[600px]:gap-x-0
              "
            >
              <div className="mb-[27px] w-full">
                <Select
                  label="Course Type"
                  name="course_type"
                  value={formData.course_type}
                  onChange={handleChange}
                >
                  <option value="">Select course type</option>

                  {courseTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Select>
              </div>

              <Input
                label="Other Information"
                name="other"
                type="text"
                placeholder="Any additional information"
                value={formData.other}
                onChange={handleChange}
              />
            </div>

            {/* REASON */}
            <div className="mb-[30px] w-full">
              <label
                htmlFor="reason"
                className="
                  mb-[8px]
                  block
                  text-[14px]
                  font-semibold
                  text-[#333]

                  max-[480px]:text-[12px]
                "
              >
                Why Do You Want To Learn This Course?
              </label>

              <p
                className="
                  mb-[10px]
                  text-[14px]
                  leading-[1.6]
                  text-[#777]

                  max-[480px]:text-[11px]
                "
              >
                This question is meant to help us familiarize
                ourselves with your interests and specific skills.
              </p>

              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us why you want to learn this course..."
                className="
                  w-full
                  resize-none
                  rounded-[6px]
                  border
                  border-[#dcdcdc]
                  bg-white
                  px-[14px]
                  py-[12px]
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

                  max-[480px]:text-[12px]
                "
              />
            </div>

            {/* SUCCESS MESSAGE */}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                  mb-[20px]
                  rounded-[7px]
                  border
                  border-green-100
                  bg-green-50
                  p-[14px]
                  text-[14px]
                  text-green-600
                "
              >
                Registration submitted successfully. Our team
                will get back to you within 24 hours.
              </motion.div>
            )}

            {/* ERROR MESSAGE */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                  mb-[20px]
                  rounded-[7px]
                  border
                  border-red-100
                  bg-red-50
                  p-[14px]
                  text-[13px]
                  text-red-500
                "
              >
                {error}
              </motion.div>
            )}

            {/* SUBMIT DESCRIPTION */}
            <p
              className="
                mb-[14px]
                text-[14px]
                leading-[1.6]
                text-[#777]

                max-[480px]:text-[11px]
              "
            >
              Submit your application for our team to review.
              Our team will get back to you within 24 hours.
            </p>

            {/* SUBMIT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="
                h-[46px]
                min-w-[135px]
                rounded-[7px]
                bg-[#f6a000]
                px-[25px]
                text-[13px]
                font-semibold
                text-white
                shadow-[0_5px_15px_rgba(246,160,0,0.18)]
                transition
                duration-200

                hover:bg-[#e99500]
                hover:shadow-[0_7px_20px_rgba(246,160,0,0.25)]

                disabled:cursor-not-allowed
                disabled:opacity-60

                max-[480px]:h-[45px]
                max-[480px]:w-full
              "
            >
              {loading ? "Submitting..." : "Submit Application"}
            </motion.button>
          </form>
        </motion.div>

        {/* BACK HOME */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-[30px] text-center"
        >
          <Link
            href="/"
            className="
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
            ← Back To Home
          </Link>
        </motion.div>
      </div>
    </main>
    </>
  );
}

/* =========================================================
   INPUT COMPONENT
========================================================= */

function Input({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div className="mb-[27px] w-full">
      <label
        htmlFor={name}
        className="
          mb-[8px]
          block
          text-[13px]
          font-semibold
          text-[#333]

          max-[480px]:text-[12px]
        "
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="
          h-[46px]
          w-full
          rounded-[6px]
          border
          border-[#dcdcdc]
          bg-white
          px-[14px]
          text-[13px]
          text-[#333]
          placeholder:text-[#aaa]
          outline-none
          transition
          duration-200

          hover:border-[#c8c8c8]

          focus:border-[#f6a000]
          focus:ring-4
          focus:ring-[#f6a000]/10

          max-[480px]:h-[44px]
          max-[480px]:text-[12px]
        "
      />
    </div>
  );
}

/* =========================================================
   SELECT COMPONENT
========================================================= */

function Select({
  label,
  name,
  value,
  onChange,
  required = false,
  children,
}) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="
          mb-[8px]
          block
          text-[13px]
          font-semibold
          text-[#333]

          max-[480px]:text-[12px]
        "
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="
          h-[46px]
          w-full
          rounded-[6px]
          border
          border-[#dcdcdc]
          bg-white
          px-[14px]
          text-[13px]
          text-[#333]
          outline-none
          transition
          duration-200

          hover:border-[#c8c8c8]

          focus:border-[#f6a000]
          focus:ring-4
          focus:ring-[#f6a000]/10

          max-[480px]:h-[44px]
          max-[480px]:text-[12px]
        "
      >
        {children}
      </select>
    </div>
  );
}
