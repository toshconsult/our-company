"use client";
import { useEffect, useRef, useState } from "react";
import { CALENDLY_URL } from "@/lib/site-config";

/**
 * Renders Calendly's official inline widget when NEXT_PUBLIC_CALENDLY_URL
 * is configured. When it isn't, this renders nothing rather than an
 * embed pointed at a fake or placeholder URL — per the rule that the site
 * must never imply a calendar integration exists when it doesn't.
 */
export default function CalendlyEmbed({ className = "" }) {
  const containerRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!CALENDLY_URL) return;

    const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (existing) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  if (!CALENDLY_URL) return null;

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget ${className}`}
      data-url={CALENDLY_URL}
      style={{ minWidth: "280px", height: "700px" }}
    >
      {!scriptLoaded && (
        <div className="flex h-full w-full items-center justify-center text-[13px] text-[#999999]">
          Loading available times…
        </div>
      )}
    </div>
  );
}
