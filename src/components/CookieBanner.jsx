"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("htp-cookie-consent");
    if (!choice) setVisible(true);

    // Allow footer to reopen it
    const handler = () => setVisible(true);
    window.addEventListener("open-cookie-banner", handler);

    return () => window.removeEventListener("open-cookie-banner", handler);
  }, []);

  const accept = () => {
    localStorage.setItem("htp-cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("htp-cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
      <div className="w-full max-w-2xl rounded-2xl bg-primary border border-white/10 shadow-2xl">
        <div className="px-6 md:px-8 py-6">

          <div className="flex items-start gap-3">
            <div className="shrink-0 mt-0.5 w-10 h-10 rounded-full bg-htpRed/10 border border-htpRed/30 flex items-center justify-center text-lg">
              🍪
            </div>

            <div className="flex-1">
              <p className="text-base font-semibold text-white mb-2">
                We use cookies
              </p>

              <p className="text-sm text-[#94afc8] leading-relaxed">
                HTP Consultancy uses essential cookies to keep the site running
                and optional analytics cookies to understand how visitors use our
                site. We never sell your data.{" "}
                <Link
                  href="/privacy"
                  className="underline text-white hover:text-htpRed transition-colors"
                >
                  Read our Privacy &amp; Cookie Policy
                </Link>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={reject}
                  className="text-sm font-semibold text-[#94afc8] hover:text-white border border-white/20 hover:border-white/50 px-4 py-3 rounded-lg transition-all duration-200"
                >
                  Reject non-essential
                </button>

                <button
                  onClick={accept}
                  className="text-sm font-semibold bg-htpRed hover:bg-ctaHover text-white px-5 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}