"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";

export default function CTA() {
  const reveal = useScrollReveal();

  return (
   <section className="relative py-20 overflow-hidden bg-primary mb-10">
      {/* Decorative accent blobs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-3xl">
       <div ref={reveal} className="flex flex-col items-center gap-5">
          {/* Icon badge — white bg for visibility on dark section */}
        <div className="p-3 bg-white/10 border border-white/20 rounded-xl text-htpRed">
        <ShieldCheck className="w-8 h-8 text-htpRed" />
        </div>

       <p className="text-white/75 uppercase tracking-widest text-sm font-bold">
            Get Started Today
          </p>

       <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Ready to Secure Your Business?
          </h2>
          <p className="text-base text-white/80 leading-relaxed max-w-xl">
            Talk to our experts today. No commitment required. Let us show you how practical security hygiene translates to true operational resilience.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cta hover:bg-ctaHover active:bg-[#C91F00] text-white font-bold rounded-lg shadow-[0_4px_14px_rgba(255,42,0,0.25)] hover:shadow-[0_8px_24px_rgba(255,42,0,0.35)] hover:-translate-y-0.5 transition-all duration-300 text-base"
            >
              Book Free Consultation <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
             className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cta hover:bg-ctaHover active:bg-[#C91F00] text-white font-bold rounded-lg shadow-[0_4px_14px_rgba(255,42,0,0.25)] hover:shadow-[0_8px_24px_rgba(255,42,0,0.35)] hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
