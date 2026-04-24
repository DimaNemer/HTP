"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const revealCenter = useScrollReveal();

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center pt-26 md:pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/image copy 3.png"
          alt="Cyber background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-primary/72 sm:bg-primary/78" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />

      {/* Extra gradient to darken the bright middle/lower area */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10 flex justify-center">
        <div ref={revealCenter} className="flex flex-col items-center gap-5 text-center max-w-4xl mx-auto">

          {/* Original sizes restored */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Shine Light. <br />
            <span className="text-white decoration-accent decoration-4">
              Total Control
            </span>{" "}
            <br />
            of Cyber &amp; AI Risk
          </h1>

          {/* Original size restored + readability treatment */}
          <p className="text-white font-bold text-lg xl:text-xl 2xl:text-2xl mt-2 border-l-4 border-white pl-5 max-w-md text-left tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-black/20 pr-4 py-2 rounded-r-lg backdrop-blur-[2px]">
            Protecting what matters most.
          </p>

          {/* Original size restored + readability treatment */}
          <p className="text-white text-base xl:text-lg 2xl:text-xl leading-relaxed max-w-xl xl:max-w-2xl font-semibold mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-black/20 px-6 py-3 rounded-xl backdrop-blur-[2px]">
          ‘’Enterprise scale or scaling fast, we’ll walk besides you’’ <br></br>
          Our independent experts cut through cyber, AI, and third-party risk to deliver practical, actionable risk mitigation.  
           </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-2 bg-cta hover:bg-ctaHover active:bg-[#C91F00] text-white font-bold text-sm sm:text-base xl:text-lg px-6 sm:px-7 xl:px-9 py-3.5 xl:py-4 rounded-lg shadow-[0_4px_14px_rgba(255,42,0,0.25)] hover:shadow-[0_8px_24px_rgba(255,42,0,0.35)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Consultation
              <ChevronRight className="w-5 h-5" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm sm:text-base xl:text-lg transition-colors border-b border-white/60 pb-0.5 hover:text-htpRedHover drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
            >
              Learn About Us
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}