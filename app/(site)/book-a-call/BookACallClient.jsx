"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { fadeUp } from "@/lib/motion-variants";
import { API_BASE_URL, SITE, CALENDLY_URL } from "@/lib/site-config";
import CalendlyEmbed from "../../components/ui/CalendlyEmbed";

const expectations = [
  "A short conversation about what you're trying to build or fix",
  "Honest input on scope, approach, and rough timeline",
  "No pressure — if we're not the right fit, we'll say so",
];

export default function BookACallPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: "",
    phone: "",
    preferred_time: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const message = [
      formData.company && `Company: ${formData.company}`,
      formData.phone && `Phone/WhatsApp: ${formData.phone}`,
      formData.preferred_time && `Preferred time: ${formData.preferred_time}`,
      "",
      "Requested a discovery call via /book-a-call (no Calendly slot selected).",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await fetch(`${API_BASE_URL}/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.full_name,
          email: formData.email,
          message,
        }),
      });

      if (!response.ok) throw new Error("Something went wrong. Please try again.");

      setSuccess("Thanks — we've got your request and will reach out to schedule a time.");
      setFormData({ full_name: "", email: "", company: "", phone: "", preferred_time: "" });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-white">
      <section className="px-8 pt-20 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-[720px] text-center"
        >
          <p className="text-[13px] font-medium text-[#f6a000]">BOOK A DISCOVERY CALL</p>
          <h1 className="mt-4 text-[30px] font-medium leading-[1.2] text-black sm:text-[36px]">
            Let&apos;s talk about your project
          </h1>
          <p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-[1.7] text-[#777777]">
            {CALENDLY_URL
              ? "Pick a time that works for you below — no back-and-forth needed."
              : "We don't yet have an automated scheduling link set up — fill in the form below and we'll follow up directly by email or WhatsApp to find a time that works."}
          </p>
        </motion.div>
      </section>

      {CALENDLY_URL ? (
        <section className="px-8 py-10 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-[900px] overflow-hidden rounded-[18px] border border-[#f0f0f0] shadow-sm"
          >
            <CalendlyEmbed />
          </motion.div>
          <p className="mx-auto mt-4 max-w-[600px] text-center text-[12px] text-[#999999]">
            Trouble loading the scheduler?{" "}
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-[#c83db6]">
              Open it directly
            </a>
            , or reach us on WhatsApp below.
          </p>
        </section>
      ) : null}

      <section className="px-8 pb-20 pt-10 lg:px-12">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-14 lg:grid-cols-2">

          {/* LEFT: what to expect */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h2 className="text-[18px] font-medium text-black">What to expect</h2>

            <ul className="mt-6 space-y-4">
              {expectations.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] leading-[1.6] text-[#555555]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#c83db6]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-[10px] border border-[#e8e0e5] px-5 py-3 text-[13px] font-medium text-[#111111] no-underline transition-colors hover:border-[#25D366] hover:text-[#1ea952]"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                WhatsApp Us
              </a>
              <a
                href={SITE.phoneHref}
                className="flex items-center justify-center gap-2 rounded-[10px] border border-[#e8e0e5] px-5 py-3 text-[13px] font-medium text-[#111111] no-underline transition-colors hover:border-[#ff9800] hover:text-[#ff9800]"
              >
                <Phone className="h-4 w-4 text-[#ff9800]" />
                {SITE.phone}
              </a>
            </div>
          </motion.div>

          {/* RIGHT: fallback request form — always available, not just when Calendly is missing */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="rounded-[18px] border border-[#f0f0f0] bg-white p-7 shadow-sm sm:p-9"
          >
            <h2 className="mb-5 text-[15px] font-medium text-black">
              {CALENDLY_URL ? "Prefer we reach out instead?" : "Request a call"}
            </h2>

            {success ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="h-10 w-10 text-[#22c55e]" />
                <p className="mt-4 text-[14px] text-[#333333]">{success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-[12.5px] font-medium text-[#333333]">Full name</label>
                  <input
                    required
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    className="w-full rounded-[8px] border border-[#e0e0e0] px-4 py-2.5 text-[13px] outline-none focus:border-[#c83db6]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[12.5px] font-medium text-[#333333]">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-[8px] border border-[#e0e0e0] px-4 py-2.5 text-[13px] outline-none focus:border-[#c83db6]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-[12.5px] font-medium text-[#333333]">Company</label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-[8px] border border-[#e0e0e0] px-4 py-2.5 text-[13px] outline-none focus:border-[#c83db6]"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[12.5px] font-medium text-[#333333]">Phone / WhatsApp</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-[8px] border border-[#e0e0e0] px-4 py-2.5 text-[13px] outline-none focus:border-[#c83db6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[12.5px] font-medium text-[#333333]">
                    Preferred day/time
                  </label>
                  <input
                    name="preferred_time"
                    placeholder="e.g. Weekday afternoons (please note your timezone)"
                    value={formData.preferred_time}
                    onChange={handleChange}
                    className="w-full rounded-[8px] border border-[#e0e0e0] px-4 py-2.5 text-[13px] outline-none focus:border-[#c83db6]"
                  />
                </div>

                {error && <p className="text-[12.5px] text-red-600">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-[46px] w-full items-center justify-center rounded-[9px] bg-[#f6a000] text-[13px] font-medium text-white transition-colors hover:bg-[#e99500] disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Request a Call"}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </main>
  );
}
