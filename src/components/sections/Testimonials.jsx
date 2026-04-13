"use client";

import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quoteTitle: `"Always ready to help"`,
    quote: `Harshini was our main contact for our vulnerability management solutions at Mill Hill. She was always available to answer questions and took us through the whole process from test/trial to deployment. Despite ours being a relatively small implementation we were always looked after, with regular communication and site visits. Would welcome the opportunity to work with Harshini on future projects.`,
    role: "System and Network Administrator",
    company: "Biomedical Discovery Institute",
    initials: "SN",
  },
  {
    quoteTitle: `"A Game Changer for Our Pre-IPO Readiness"`,
    quote: `With HTP's cybersecurity testing and risk assessment experts matched to our comprehensive requirement at very short notice, we were able to demonstrate robust security controls to investors and regulators ahead of our IPO. Their strategic guidance was crucial in securing our digital assets.`,
    role: "CEO",
    company: "Tech Startup",
    initials: "CE",
  },
  {
    quoteTitle: `"Unmatched Expertise & Precision"`,
    quote: `We needed a trusted consultancy with experience dealing with high-profile VIPs. The cybersecurity testing teams provided an in-depth vulnerability assessment that identified critical security gaps we hadn't even considered. Their proactive approach helped us strengthen our defences before a potential breach. Highly recommended!`,
    role: "CTO",
    company: "Social Media Company",
    initials: "CT",
  },
];

export default function Testimonials() {
  const revealTitle = useScrollReveal();
  const sliderRef = useRef(null);

  const scrollCards = (direction) => {
    if (!sliderRef.current) return;
    const amount = window.innerWidth < 768 ? 320 : 420;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <div ref={revealTitle} className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-htpRed uppercase tracking-widest text-sm sm:text-base font-bold mb-3">
            Proven Results
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Client Feedback
          </h2>
          <p className="mt-4 text-textMain text-base sm:text-lg leading-relaxed">
            Hear what our clients say about working with HTP Consultancy.
          </p>
        </div>
<div className="flex justify-center gap-3 mb-8 lg:hidden">
  <button
    onClick={() => scrollCards("left")}
    className="w-11 h-11 rounded-full border border-borderLight bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
    aria-label="Previous testimonials"
  >
    <ChevronLeft className="w-5 h-5" />
  </button>

  <button
    onClick={() => scrollCards("right")}
    className="w-11 h-11 rounded-full border border-borderLight bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
    aria-label="Next testimonials"
  >
    <ChevronRight className="w-5 h-5" />
  </button>
</div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-7">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-borderLight p-8 shadow-sm flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-htpRed text-htpRed" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-htpRed/30 mb-3" />

              <div className="mb-8 flex-grow">
                <h3 className="text-primary text-lg font-bold mb-3 leading-snug">
                  {item.quoteTitle}
                </h3>
                <p className="text-textMain text-sm leading-relaxed">
                  {item.quote}
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-borderLight pt-6">
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-bold text-accent text-sm flex-shrink-0">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-primary font-semibold text-sm">{item.role}</h4>
                  <p className="text-textMuted text-xs mt-0.5">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={sliderRef}
          className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[48%] bg-white rounded-2xl border border-borderLight p-6 shadow-sm flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-htpRed text-htpRed" />
                ))}
              </div>

              <Quote className="w-7 h-7 text-htpRed/30 mb-3" />

              <div className="mb-6 flex-grow">
                <h3 className="text-primary text-base sm:text-lg font-bold mb-3 leading-snug">
                  {item.quoteTitle}
                </h3>
                <p className="text-textMain text-sm leading-relaxed">
                  {item.quote}
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-borderLight pt-5">
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-bold text-accent text-sm flex-shrink-0">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-primary font-semibold text-sm">{item.role}</h4>
                  <p className="text-textMuted text-xs mt-0.5">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}