"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { API_BASE_URL, SITE, PROJECT_TYPES, BUDGET_RANGES, BUDGET_CURRENCIES, TIMELINE_OPTIONS } from "@/lib/site-config";

export default function Page() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    project_type: "",
    challenge: "",
    budget: "",
    budget_currency: "",
    timeline: "",
    preferred_contact: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // ==========================================
  // HANDLE INPUT
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccess("");
    setError("");
  };

  // ==========================================
  // SUBMIT CONTACT FORM
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const projectDetails = [
        formData.company && `Company: ${formData.company}`,
        formData.country && `Country: ${formData.country}`,
        formData.phone && `Phone/WhatsApp: ${formData.phone}`,
        formData.project_type && `Project type: ${formData.project_type}`,
        formData.challenge && `Main business challenge: ${formData.challenge}`,
        formData.budget && `Budget: ${formData.budget}${formData.budget_currency ? ` (${formData.budget_currency})` : ""}`,
        formData.timeline && `Desired timeline: ${formData.timeline}`,
        formData.preferred_contact && `Preferred contact method: ${formData.preferred_contact}`,
      ]
        .filter(Boolean)
        .join("\n");

      const response = await fetch(
        `${API_BASE_URL}/contact/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            full_name: formData.full_name,
            email: formData.email,
            message: projectDetails
              ? `${projectDetails}\n\n${formData.message}`
              : formData.message,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(
          "Your message has been sent successfully. We will get back to you soon."
        );

        setFormData({
          full_name: "",
          email: "",
          company: "",
          country: "",
          phone: "",
          project_type: "",
          challenge: "",
          budget: "",
          budget_currency: "",
          timeline: "",
          preferred_contact: "",
          message: "",
        });
      } else {
        if (data.detail) {
          if (Array.isArray(data.detail)) {
            const errorMessage = data.detail
              .map((item) => item.msg)
              .join(", ");

            setError(errorMessage);
          } else {
            setError(data.detail);
          }
        } else {
          setError("Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      console.error("Contact API error:", err);

      setError(
        "Unable to send your message right now. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white text-[#111111]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          flex
          min-h-[260px]
          w-full
          flex-col
          items-center
          justify-center
          overflow-hidden
          bg-gradient-to-r
          from-[#fceaf7]
          via-white
          to-[#faedf4]
          px-5
        "
      >

        {/* LEFT DECORATION */}

        <motion.div
          initial={{
            opacity: 0,
            x: -80,
            rotate: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 45,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="
            absolute
            left-[5%]
            top-[150px]
            h-[100px]
            w-[100px]
            border
            border-[#e8b82d]/20
          "
        >
          <div
            className="
              absolute
              left-[17px]
              top-[17px]
              h-[65px]
              w-[65px]
              border
              border-[#e8b82d]/15
            "
          />
        </motion.div>


        {/* RIGHT DECORATION */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
            rotate: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 45,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
            absolute
            right-[3%]
            top-[145px]
            h-[90px]
            w-[90px]
            border
            border-[#ec93a9]/20
          "
        >
          <div
            className="
              absolute
              left-[15px]
              top-[15px]
              h-[58px]
              w-[58px]
              border
              border-[#ec93a9]/15
            "
          />
        </motion.div>


        {/* TITLE */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            z-10
            m-0
            mb-4
            text-center
            text-[30px]
            font-bold
            leading-tight
            sm:text-[34px]
            md:text-[38px]
          "
        >
          Contact Us For More...
        </motion.h1>


        {/* BREADCRUMB */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="
            relative
            z-10
            flex
            items-center
            gap-2
            text-[13px]
            text-[#777777]
          "
        >
          <span>Home</span>

          <span className="text-[#aaa]">
            &gt;
          </span>

          <span>Contact</span>
        </motion.div>

      </section>


      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <section
        className="
          mx-auto
          min-h-[850px]
          w-full
          max-w-[1100px]
          px-5
          py-[70px]
          sm:px-8
          md:px-12
          md:py-[90px]
        "
      >

        {/* CONTACT LABEL */}

        <motion.span
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-3
            block
            text-[13px]
            font-semibold
            uppercase
            tracking-wide
            text-[#ff9800]
          "
        >
          Contact
        </motion.span>


        {/* HEADING */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            m-0
            mb-5
            text-[28px]
            font-semibold
            leading-tight
            sm:text-[32px]
          "
        >
          Send Us Your Message.
        </motion.h2>


        {/* DESCRIPTION */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            m-0
            max-w-[650px]
            text-[14px]
            leading-[1.8]
            text-[#666666]
            sm:text-[15px]
          "
        >
          Have a project in mind or a question about our services? Fill in
          the form below and a member of our team will get back to you
          within one business day — or reach us directly using the details
          on the right.
        </motion.p>


        {/* =====================================================
            QUICK CONTACT OPTIONS
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 grid w-full max-w-[700px] grid-cols-1 gap-4 sm:grid-cols-3"
        >
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-[10px] border border-[#e8e0e5] bg-white px-4 py-3 text-[13px] font-medium text-[#111111] transition-colors duration-200 hover:border-[#25D366] hover:text-[#1ea952]"
          >
            <MessageCircle className="h-5 w-5 shrink-0 text-[#25D366]" />
            Chat on WhatsApp
          </a>

          <a
            href={SITE.phoneHref}
            className="flex items-center gap-3 rounded-[10px] border border-[#e8e0e5] bg-white px-4 py-3 text-[13px] font-medium text-[#111111] transition-colors duration-200 hover:border-[#ff9800] hover:text-[#ff9800]"
          >
            <Phone className="h-5 w-5 shrink-0 text-[#ff9800]" />
            {SITE.phone}
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-3 rounded-[10px] border border-[#e8e0e5] bg-white px-4 py-3 text-[13px] font-medium text-[#111111] transition-colors duration-200 hover:border-[#c83db6] hover:text-[#c83db6]"
          >
            <Mail className="h-5 w-5 shrink-0 text-[#c83db6]" />
            {SITE.email}
          </a>
        </motion.div>


        {/* =====================================================
            FORM HEADER
        ===================================================== */}

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
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-[55px]
            mb-[35px]
            flex
            min-h-[60px]
            w-full
            max-w-[700px]
            origin-left
            items-center
            rounded-[8px]
            bg-[#fff7d9]
            px-5
            sm:px-6
          "
        >
          <span
            className="
              text-[12px]
              font-bold
              tracking-wide
              text-[#ff9800]
              sm:text-[13px]
            "
          >
            FILL THE FORM BELOW
          </span>
        </motion.div>


        {/* =====================================================
            FORM
        ===================================================== */}

        <motion.form
          onSubmit={handleSubmit}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            w-full
            max-w-[600px]
          "
        >

          {/* FULL NAME */}

          <div className="mb-[28px] flex w-full flex-col">

            <label
              htmlFor="full_name"
              className="
                mb-2
                text-[12px]
                font-medium
                uppercase
                tracking-wide
                text-[#555555]
              "
            >
              Full Name
            </label>

            <input
              id="full_name"
              name="full_name"
              type="text"
              value={formData.full_name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="
                h-[52px]
                w-full
                rounded-[7px]
                border
                border-[#e8e0e5]
                bg-white
                px-4
                text-[14px]
                text-[#222222]
                outline-none
                transition-all
                duration-200
                placeholder:text-[#aaa]
                focus:border-[#ff9800]
                focus:ring-2
                focus:ring-[#ff9800]/10
              "
            />

          </div>


          {/* EMAIL */}

          <div className="mb-[28px] flex w-full flex-col">

            <label
              htmlFor="email"
              className="
                mb-2
                text-[12px]
                font-medium
                uppercase
                tracking-wide
                text-[#555555]
              "
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="
                h-[52px]
                w-full
                rounded-[7px]
                border
                border-[#e8e0e5]
                bg-white
                px-4
                text-[14px]
                text-[#222222]
                outline-none
                transition-all
                duration-200
                placeholder:text-[#aaa]
                focus:border-[#ff9800]
                focus:ring-2
                focus:ring-[#ff9800]/10
              "
            />

          </div>


          {/* COMPANY + COUNTRY */}

          <div className="mb-[28px] grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col">
              <label
                htmlFor="company"
                className="mb-2 text-[12px] font-medium uppercase tracking-wide text-[#555555]"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
                className="h-[52px] w-full rounded-[7px] border border-[#e8e0e5] bg-white px-4 text-[14px] text-[#222222] outline-none transition-all duration-200 placeholder:text-[#aaa] focus:border-[#ff9800] focus:ring-2 focus:ring-[#ff9800]/10"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="country"
                className="mb-2 text-[12px] font-medium uppercase tracking-wide text-[#555555]"
              >
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                value={formData.country}
                onChange={handleChange}
                placeholder="e.g. United Kingdom, Nigeria"
                className="h-[52px] w-full rounded-[7px] border border-[#e8e0e5] bg-white px-4 text-[14px] text-[#222222] outline-none transition-all duration-200 placeholder:text-[#aaa] focus:border-[#ff9800] focus:ring-2 focus:ring-[#ff9800]/10"
              />
            </div>
          </div>


          {/* PHONE + PREFERRED CONTACT METHOD */}

          <div className="mb-[28px] grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="mb-2 text-[12px] font-medium uppercase tracking-wide text-[#555555]"
              >
                Phone / WhatsApp <span className="normal-case text-[#999]">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 080..."
                className="h-[52px] w-full rounded-[7px] border border-[#e8e0e5] bg-white px-4 text-[14px] text-[#222222] outline-none transition-all duration-200 placeholder:text-[#aaa] focus:border-[#ff9800] focus:ring-2 focus:ring-[#ff9800]/10"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="preferred_contact"
                className="mb-2 text-[12px] font-medium uppercase tracking-wide text-[#555555]"
              >
                Preferred Contact Method
              </label>
              <select
                id="preferred_contact"
                name="preferred_contact"
                value={formData.preferred_contact}
                onChange={handleChange}
                className="h-[52px] w-full rounded-[7px] border border-[#e8e0e5] bg-white px-4 text-[14px] text-[#222222] outline-none transition-all duration-200 focus:border-[#ff9800] focus:ring-2 focus:ring-[#ff9800]/10"
              >
                <option value="">No preference</option>
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Phone call">Phone call</option>
              </select>
            </div>
          </div>


          {/* PROJECT TYPE */}

          <div className="mb-[28px] flex w-full flex-col">
            <label
              htmlFor="project_type"
              className="mb-2 text-[12px] font-medium uppercase tracking-wide text-[#555555]"
            >
              Project Type
            </label>
            <select
              id="project_type"
              name="project_type"
              value={formData.project_type}
              onChange={handleChange}
              className="h-[52px] w-full rounded-[7px] border border-[#e8e0e5] bg-white px-4 text-[14px] text-[#222222] outline-none transition-all duration-200 focus:border-[#ff9800] focus:ring-2 focus:ring-[#ff9800]/10"
            >
              <option value="">Select a project type</option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>


          {/* MAIN BUSINESS CHALLENGE */}

          <div className="mb-[28px] flex w-full flex-col">
            <label
              htmlFor="challenge"
              className="mb-2 text-[12px] font-medium uppercase tracking-wide text-[#555555]"
            >
              Main Business Challenge <span className="normal-case text-[#999]">(optional)</span>
            </label>
            <input
              id="challenge"
              name="challenge"
              type="text"
              value={formData.challenge}
              onChange={handleChange}
              placeholder="What's the core problem you're trying to solve?"
              className="h-[52px] w-full rounded-[7px] border border-[#e8e0e5] bg-white px-4 text-[14px] text-[#222222] outline-none transition-all duration-200 placeholder:text-[#aaa] focus:border-[#ff9800] focus:ring-2 focus:ring-[#ff9800]/10"
            />
          </div>


          {/* BUDGET + CURRENCY */}

          <div className="mb-[28px] grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col">
              <label
                htmlFor="budget"
                className="mb-2 text-[12px] font-medium uppercase tracking-wide text-[#555555]"
              >
                Estimated Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="h-[52px] w-full rounded-[7px] border border-[#e8e0e5] bg-white px-4 text-[14px] text-[#222222] outline-none transition-all duration-200 focus:border-[#ff9800] focus:ring-2 focus:ring-[#ff9800]/10"
              >
                <option value="">Select a range</option>
                {BUDGET_RANGES.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="budget_currency"
                className="mb-2 text-[12px] font-medium uppercase tracking-wide text-[#555555]"
              >
                Currency
              </label>
              <select
                id="budget_currency"
                name="budget_currency"
                value={formData.budget_currency}
                onChange={handleChange}
                className="h-[52px] w-full rounded-[7px] border border-[#e8e0e5] bg-white px-4 text-[14px] text-[#222222] outline-none transition-all duration-200 focus:border-[#ff9800] focus:ring-2 focus:ring-[#ff9800]/10"
              >
                <option value="">Select currency</option>
                {BUDGET_CURRENCIES.map((currency) => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>
          </div>


          {/* TIMELINE */}

          <div className="mb-[28px] flex w-full flex-col">
            <label
              htmlFor="timeline"
              className="mb-2 text-[12px] font-medium uppercase tracking-wide text-[#555555]"
            >
              Desired Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="h-[52px] w-full rounded-[7px] border border-[#e8e0e5] bg-white px-4 text-[14px] text-[#222222] outline-none transition-all duration-200 focus:border-[#ff9800] focus:ring-2 focus:ring-[#ff9800]/10"
            >
              <option value="">Select a timeline</option>
              {TIMELINE_OPTIONS.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>


          {/* MESSAGE */}

          <div className="mb-[28px] flex w-full flex-col">

            <label
              htmlFor="message"
              className="
                mb-2
                text-[12px]
                font-medium
                uppercase
                tracking-wide
                text-[#555555]
              "
            >
              Project Description
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your project, goals, and anything else that's relevant..."
              className="
                min-h-[170px]
                w-full
                resize-y
                rounded-[7px]
                border
                border-[#e8e0e5]
                bg-white
                p-4
                text-[14px]
                leading-[1.6]
                text-[#222222]
                outline-none
                transition-all
                duration-200
                placeholder:text-[#aaa]
                focus:border-[#ff9800]
                focus:ring-2
                focus:ring-[#ff9800]/10
              "
            />

          </div>


          {/* SUCCESS */}

          {success && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                mb-6
                rounded-[7px]
                border
                border-green-200
                bg-green-50
                px-4
                py-3
                text-[13px]
                leading-[1.6]
                text-green-700
              "
            >
              {success}
            </motion.div>
          )}


          {/* ERROR */}

          {error && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                mb-6
                rounded-[7px]
                border
                border-red-200
                bg-red-50
                px-4
                py-3
                text-[13px]
                leading-[1.6]
                text-red-600
              "
            >
              {error}
            </motion.div>
          )}


          {/* SEND BUTTON */}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={
              !loading
                ? {
                    y: -3,
                    scale: 1.03,
                  }
                : {}
            }
            whileTap={
              !loading
                ? {
                    scale: 0.97,
                  }
                : {}
            }
            className="
              min-h-[48px]
              min-w-[125px]
              rounded-[7px]
              bg-[#ff9800]
              px-6
              text-[13px]
              font-semibold
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:bg-[#e99500]
              hover:shadow-md
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading ? "Sending..." : "Send Now"}
          </motion.button>

        </motion.form>

      </section>


      {/* =====================================================
          FAQ SECTION
      ===================================================== */}

      <section
        className="
          flex
          min-h-[400px]
          w-full
          items-center
          justify-center
          border-t
          border-[#f3ebf0]
          bg-white
          px-5
          text-center
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
          className="w-full max-w-[700px]"
        >

          <h2
            className="
              m-0
              mb-4
              text-[20px]
              font-bold
              text-[#ff9800]
            "
          >
            READ OUR FAQ
          </h2>


          <p
            className="
              mx-auto
              mb-7
              max-w-[600px]
              text-[13px]
              leading-[1.8]
              text-[#666666]
              sm:text-[14px]
            "
          >
            Still have questions about pricing, timelines, or how we work?
            Our FAQ page covers the questions we get asked the most before
            a project kicks off.
          </p>


          <motion.div
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/faq"
              className="
                inline-flex
                min-h-[45px]
                items-center
                rounded-[7px]
                bg-[#ff9800]
                px-7
                text-[13px]
                font-medium
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:bg-[#e99500]
                hover:shadow-md
              "
            >
              Read Our FAQ
            </Link>
          </motion.div>

        </motion.div>

      </section>

    </div>
  );
}