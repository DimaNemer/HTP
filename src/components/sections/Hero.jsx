"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronRight, ShieldCheck, Activity, BarChart2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const revealLeft = useScrollReveal();
  const revealRight = useScrollReveal({ duration: 1000 });

  return (
   <section className="relative min-h-[100vh] flex items-center pt-28 md:pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/image copy 3.png"
          alt="Cyber background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-primary/72 sm:bg-primary/78" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        <div ref={revealLeft} className="flex flex-col gap-5 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-white">
            Shine Light. <br />
            <span className="text-white underline decoration-accent decoration-4 underline-offset-4">
              Total Control
            </span>{" "}
            <br />
            of Cyber &amp; AI Risk
          </h1>

          <p className="text-white font-semibold text-base sm:text-lg mt-1 border-l-4 border-white/60 pl-4 inline-block lg:max-w-md mx-auto lg:mx-0 text-left">
            Protecting what matters the most.
          </p>

          <p className="text-white/100 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 font-semibold">
            We cut through complexity in cyber security, AI, geopolitical, and third-party risk.
            Reduce noise and turn intelligence into practical resilience.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center md:items-center lg:items-start md:justify-center lg:justify-start gap-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-2 bg-cta hover:bg-ctaHover active:bg-[#C91F00] text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-lg shadow-[0_4px_14px_rgba(255,42,0,0.25)] hover:shadow-[0_8px_24px_rgba(255,42,0,0.35)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Consultation
              <ChevronRight className="w-5 h-5" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-white/85 hover:text-white font-semibold text-sm sm:text-base transition-colors border-b border-white/40 pb-0.5 hover:text-htpRedHover"
            >
              Learn About Us
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div ref={revealRight} className="relative flex items-center justify-center mt-2 lg:mt-0">
          <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-sm mb-6 sm:mb-8">
            <div className="relative z-10 bg-white rounded-2xl p-5 sm:p-6 md:p-7 shadow-2xl border border-borderLight">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-[10px] sm:text-xs text-textMuted uppercase tracking-wide mb-1 font-medium text-htpRed">
                    Global Security Score
                  </p>
                  <h3 className="text-3xl sm:text-[34px] md:text-4xl font-black text-primary leading-none">
                    98.4<span className="text-accent text-base sm:text-lg">%</span>
                  </h3>
                </div>

                <div className="p-2.5 sm:p-3 bg-accent/10 rounded-xl">
                  <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-htpRed" />
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Threat Detection", val: "Active", icon: Activity },
                  { label: "AI Risk Mitigation", val: "Optimal", icon: BarChart2 },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center gap-3 p-3 sm:p-4 bg-secondary rounded-xl border border-borderLight"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-htpRed shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-primary leading-snug">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-htpRed px-2 py-1 bg-htpRed/10 rounded-full shrink-0">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] sm:text-xs text-textMuted text-center mt-5 pt-4 border-t border-borderLight">
                Real-time monitoring &amp; risk intelligence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}