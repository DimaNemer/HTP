"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const revealGlobal = useScrollReveal();

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div ref={revealGlobal} className="flex flex-col gap-7">
          <div>
            <p className="text-htpRed uppercase tracking-widest text-lg font-bold mb-3" >Direct Impact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Why Choose HTP?
            </h2>
          </div>

      <div className="text-lg text-textMain leading-relaxed space-y-1">
  <p>We simplify Cyber security, AI, and third-party risk.</p>
  <p>No jargon.</p>
  <p>No noise.</p>
  <p>Just clear insight into what really matters for your business.</p>
</div>

          <p className="text-lg text-textMain leading-relaxed">
            With over 25 years of experience working with FTSE 250 companies, SMEs, and startups across technology, defence, aviation, finance, energy, and manufacturing, we turn complex threats into practical action.
          </p>

          <blockquote className="border-l-4 border-accent pl-6 py-4 bg-secondary rounded-r-xl">
            <p className="text-primary italic font-medium leading-relaxed">
              "We believe protecting your business should feel as instinctive as protecting your family. That's why we focus on fundamental, sensible cyber security hygiene that reduces risk from malware, phishing, and hostile actors."
            </p>
          </blockquote>
        </div>

        {/* Right: Benefit Cards */}
        <div className="grid gap-5">
          {[
            { title: "Simplified Strategy", desc: "No excessive noise, just actionable strategies that work." },
            { title: "Cross-Industry Excellence", desc: "Proven track record across FTSE 250, startups, and defence." },
            { title: "Fundamental Hygiene", desc: "Focus on core protections that eliminate the vast majority of threats." },
            { title: "Agile Resilience", desc: "Stay ahead in a fast-changing threat landscape without disruption." },
          ].map((item, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const itemReveal = useScrollReveal({ duration: 500 });
            return (
              // @ts-ignore
              <div
                ref={itemReveal}
                style={{ transitionDelay: `${index * 100}ms` }}
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl border border-borderLight card-hover shadow-sm"
              >
                <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-htpRed" />
                </div>
                <div>
                  <h3 className="text-primary font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-textMuted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
