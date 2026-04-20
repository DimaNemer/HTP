"use client";

import { useState, useRef, useEffect } from "react";
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
  {
    quoteTitle: `"Add 4th testimonial title here"`,
    quote: `Add the 4th testimonial text here.`,
    role: "Role here",
    company: "Company here",
    initials: "XX",
  },
];

/* ─── Single card ───────────────────────────────────────────────────────────── */
function TestimonialCard({ item }) {
  return (
    <div className="bg-white rounded-2xl border border-borderLight p-8 shadow-sm flex flex-col h-full">
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
        <p className="text-textMain text-sm leading-relaxed">{item.quote}</p>
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
  );
}

/* ─── Navigation controls (arrows + dots) ───────────────────────────────────── */
function NavControls({ current, total, onPrev, onNext, onDot }) {
  return (
    <div className="flex items-center justify-center gap-5 mt-10">
      {/* Prev arrow */}
      <button
        onClick={onPrev}
        className="w-11 h-11 rounded-full border border-borderLight bg-white text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 flex items-center justify-center shadow-sm disabled:opacity-30"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onDot(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2.5 bg-htpRed"
                : "w-2.5 h-2.5 bg-borderLight hover:bg-textMuted"
            }`}
          />
        ))}
      </div>

      {/* Next arrow */}
      <button
        onClick={onNext}
        className="w-11 h-11 rounded-full border border-borderLight bg-white text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 flex items-center justify-center shadow-sm disabled:opacity-30"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────────── */
export default function Testimonials() {
  const revealTitle = useScrollReveal();

  // Desktop: show 3 at a time, page through groups
  const DESKTOP_PER_PAGE = 3;
  const desktopTotal = Math.ceil(testimonials.length / DESKTOP_PER_PAGE);
  const [desktopPage, setDesktopPage] = useState(0);

  const desktopSlice = testimonials.slice(
    desktopPage * DESKTOP_PER_PAGE,
    desktopPage * DESKTOP_PER_PAGE + DESKTOP_PER_PAGE
  );

  const prevDesktop = () => setDesktopPage((p) => (p - 1 + desktopTotal) % desktopTotal);
  const nextDesktop = () => setDesktopPage((p) => (p + 1) % desktopTotal);

  // Mobile: show 1 at a time
  const [mobileIndex, setMobileIndex] = useState(0);
  const sliderRef = useRef(null);

  const scrollToIndex = (index) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.children[index];
    if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setMobileIndex(index);
  };

  const prevMobile = () => scrollToIndex((mobileIndex - 1 + testimonials.length) % testimonials.length);
  const nextMobile = () => scrollToIndex((mobileIndex + 1) % testimonials.length);

  // Sync dot on scroll
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const handler = () => {
      const index = Math.round(el.scrollLeft / el.offsetWidth);
      setMobileIndex(index);
    };
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12">

        {/* Header */}
        <div ref={revealTitle} className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-xs font-bold text-htpRed uppercase tracking-widest mb-3">
            Proven Results
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Client Feedback
          </h2>
          <p className="mt-4 text-textMain text-base sm:text-lg leading-relaxed">
            Hear what our clients say about working with HTP Consultancy.
          </p>
        </div>

        {/* ── Desktop: 3-up grid with pagination ── */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-3 gap-7">
            {desktopSlice.map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
            {/* Fill empty slots so grid doesn't collapse */}
            {desktopSlice.length < DESKTOP_PER_PAGE &&
              Array.from({ length: DESKTOP_PER_PAGE - desktopSlice.length }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
          </div>
          <NavControls
            current={desktopPage}
            total={desktopTotal}
            onPrev={prevDesktop}
            onNext={nextDesktop}
            onDot={setDesktopPage}
          />
        </div>

        {/* ── Mobile: 1-up horizontal scroll ── */}
        <div className="lg:hidden">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="snap-start shrink-0 w-[88%] sm:w-[70%] md:w-[48%]"
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
          <NavControls
            current={mobileIndex}
            total={testimonials.length}
            onPrev={prevMobile}
            onNext={nextMobile}
            onDot={scrollToIndex}
          />
        </div>

      </div>
    </section>
  );
}