"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldAlert, Briefcase, Rocket, FileCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Security Testing",
    description: "Tailored security testing across applications, code, physical systems, and social engineering, delivered by experienced ethical hackers.",
    icon: ShieldAlert,
    href: "/what-we-do#security-testing",  // anchors directly to Security Testing section
  },
  {
    title: "Fractional Services",
    description: "Flexible cyber and AI advisory support with access to experienced specialists, tailored to your organisation's needs.",
    icon: Briefcase,
    href: "/what-we-do#fractional",  // anchors directly to Fractional Services section
  },
  {
    title: "Pre-IPO Readiness",
    description: "Ensure your security posture and compliance frameworks meet the demands of public markets.",
    icon: Rocket,
    href: "/what-we-do#ipo-readiness",  // anchors directly to IPO Readiness section
  },
  {
    title: "Compliance & Risk Mitigation",
    description: "Support to identify and reduce risks across cyber security, artificial intelligence, and geopolitical areas.",
    icon: FileCheck,
    href: "/what-we-do#compliance",  // anchors directly to Compliance section
  },
];

export default function Services() {
  const titleReveal = useScrollReveal();

  return (
    <section className="py-28 bg-secondary relative z-10">
      {/* Subtle top wave divider */}
      <div className="container mx-auto px-6 md:px-12">
        <div ref={titleReveal} className="mb-16 text-center">
          <p className="text-[#FF2A00] uppercase tracking-widest text-m font-bold mb-3">
            Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            What We Offer
          </h2>
          <p className="mt-5 text-textMain max-w-2xl text-lg mx-auto leading-relaxed">
            Delivering clear, practical security guidance to safeguard your organisation and reduce real risk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const cardReveal = useScrollReveal({ duration: 600, threshold: 0.1 });
            return (
              <div
                key={index}
                // @ts-ignore
                ref={cardReveal}
                style={{ transitionDelay: `${index * 150}ms` }}
                className="group bg-white border border-borderLight rounded-2xl p-8 card-hover flex flex-col h-full shadow-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-htpRed" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-textMuted text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="flex items-center gap-2 text-[#FF2A00] font-semibold text-sm mt-auto group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}