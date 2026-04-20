"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldAlert, Briefcase, Rocket, FileCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Security Testing",
    description: "Tailored security testing across applications, code, physical systems, and social engineering, delivered by experienced ethical hackers.",
    icon: ShieldAlert,
    href: "/what-we-do#security-testing",
  },
  {
    title: "Fractional Services",
    description: "Flexible cyber and AI advisory support with access to experienced specialists, tailored to your organisation's needs.",
    icon: Briefcase,
    href: "/what-we-do#fractional",
  },
  {
    title: "Pre-IPO Readiness",
    description: "Ensure your security posture and compliance frameworks meet the demands of public markets.",
    icon: Rocket,
    href: "/what-we-do#ipo-readiness",
  },
  {
    title: "Compliance & Risk Mitigation",
    description: "Support to identify and reduce risks across cyber security, artificial intelligence, and geopolitical areas.",
    icon: FileCheck,
    href: "/what-we-do#compliance",
  },
];

export default function Services() {
  const titleReveal = useScrollReveal();

  return (
    <section className="py-28 bg-secondary relative z-10">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div ref={titleReveal} className="mb-16 text-center">
          <p className="text-md font-bold text-htpRed uppercase tracking-widest mb-3">
            Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            What We Offer
          </h2>
          <p className="mt-5 text-textMain max-w-2xl text-base mx-auto leading-relaxed">
            Delivering clear, practical security guidance to safeguard your organisation and reduce real risk.
          </p>
        </div>

        {/* Cards — equal height via grid rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 grid-rows-1">
          {services.map((service, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const cardReveal = useScrollReveal({ duration: 600, threshold: 0.1 });
            return (
              <div
                key={index}
                // @ts-ignore
                ref={cardReveal}
                style={{ transitionDelay: `${index * 150}ms` }}
                className="group bg-white border border-borderLight rounded-2xl p-8 card-hover flex flex-col shadow-sm"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <service.icon className="w-7 h-7 text-htpRed" />
                </div>

                {/* Title — min-h ensures all titles take same vertical space
                    even if one wraps to 2 lines and another doesn't */}
                <h3 className="text-base font-bold text-primary mb-4 min-h-[3.5rem] flex items-start leading-snug">
                  {service.title}
                </h3>

                {/* Description — flex-grow + min-h keeps spacing consistent */}
                <p className="text-textMuted text-sm leading-relaxed flex-grow min-h-[5.5rem]">
                  {service.description}
                </p>

                {/* CTA — pinned to bottom with top border as visual separator */}
                <div className="pt-6 mt-auto border-t border-borderLight">
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-htpRed font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}