"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldAlert,
  Briefcase,
  Rocket,
  FileCheck,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

/* ─── Service Data ─────────────────────────────────────────────────────────── */
const services = [
  {
    id: "fractional",
    icon: Briefcase,
    badge: "Fractional Services",
    title: "Board ready cyber leadership without the full-time cost.",
    subtitle: "Fractional CISO & Board Advisory",
    intro:
      "CISO and Cybersecurity Board advisory roles for organisations that need high level security leadership and governance, delivered on a part-time, retainer, or project basis, without the overhead of a permanent hire.",
    whatIsIt:
      "Think of us as your on call security executive. Many organisations need senior cybersecurity leadership but can't justify a full-time CISO. Our Fractional CISO service gives you access to board level security expertise: strategy, governance, risk, and compliance, at a fraction of the cost.",
    whoIsItFor:
      "Mid sized companies, startups scaling up, or firms preparing for compliance audits, fundraising, or public listing, who need strategic security leadership without a permanent hire.",
    howItWorks:
      "We start with a scoping call to understand your needs. We then agree on a retainer or project scope, sign an NDA, and your dedicated advisor starts within days.",
    includes: [
      {
        title: "Cybersecurity Strategy Development",
        desc: "Create and align a security roadmap with your business objectives.",
      },
      {
        title: "Board & Executive Reporting",
        desc: "Translate cyber risk and security posture into board level insights and dashboards. No jargon.",
      },
      {
        title: "Risk Management & Assessment",
        desc: "Identify vulnerabilities, prioritise threats, and build mitigation plans including geopolitical and third-party risks.",
      },
      {
        title: "Security Program Leadership",
        desc: "Lead or advise on overall program direction without a full-time CISO.",
      },
      {
        title: "Interim Security Leadership",
        desc: "Temporarily fill gaps (e.g., CISO leaves) while hiring or during transformation.",
      },
    ],
    whyItMatters:
      "Cyber threats don't pause while you're between hires. A single breach or compliance gap can cost far more than a year of advisory services. Our fractional model gives you expert oversight exactly when and where you need it, proactively, not reactively.",
    stats: [
      { num: "$4.9M", label: "Average cost of a data breach in 2024" },
      { num: "68%", label: "Of SMEs lack a dedicated security leader" },
      { num: "90 days", label: "Average time to hire a full-time CISO" },
    ],
    contactValue: "Fractional Services",
  },
  {
    id: "security-testing",
    icon: ShieldAlert,
    badge: "Security Testing",
    title: "Find your weaknesses before attackers do.",
    subtitle: "Red Team, Blue & Purple Teaming",
    intro:
      "Tailored security testing across applications, code, physical systems, and social engineering, delivered by experienced ethical hackers who think and behave like real world adversaries.",
    whatIsIt:
      "Security testing means deliberately probing your systems, people, and processes to find vulnerabilities before real attackers do. We use the same tools and mindset as cybercriminals, and we work for you.",
    whoIsItFor:
      "Any organisation that stores sensitive data, runs customer facing applications, or operates critical infrastructure. If you haven't tested your defences recently, you don't truly know how secure you are.",
    howItWorks:
      "We agree on scope and rules of engagement, sign an NDA, then conduct a structured engagement covering offensive testing, defensive analysis, or both. You receive a clear, actionable report with prioritised findings.",
    includes: [
      {
        title: "Offensive (Red Team)",
        desc: "Proactive ethical hacking that mimics real cyber attacks, exploiting vulnerabilities to eliminate the guesswork of what may happen during an actual breach.",
      },
      {
        title: "Defensive (Blue Team)",
        desc: "A reactive approach focused on prevention, detection, and response, analysing your environment to detect potential network flaws before they're exploited.",
      },
      {
        title: "Purple Teaming",
        desc: "A collaborative approach combining Red and Blue teams to maximise learning, where attackers and defenders work together to improve your security posture continuously.",
      },
      {
        title: "Application & Code Testing",
        desc: "Deep-dive testing of web applications, APIs, and source code to surface logic flaws, injection points, and authentication weaknesses.",
      },
      {
        title: "Physical & Social Engineering",
        desc: "Testing the human element through phishing simulations, pretexting, and physical access attempts to assess your people and processes.",
      },
    ],
    whyItMatters:
      "Most organisations only discover vulnerabilities after they've been exploited. Regular testing flips this, giving you a clear picture of your real risk exposure and the confidence to act before an incident occurs.",
    stats: [
      { num: "74%", label: "Of breaches involve a human element" },
      { num: "277 days", label: "Average time to identify a breach" },
      { num: "60%", label: "Of SMEs close within 6 months of a cyberattack" },
    ],
    contactValue: "Security Testing",
  },
  {
    id: "ipo-readiness",
    icon: Rocket,
    badge: "Pre-IPO Readiness",
    title: "Go public with confidence, not cyber risk.",
    subtitle: "Cybersecurity Controls & Risk for Pre-IPO Companies",
    intro:
      "As companies prepare for an IPO, they face heightened scrutiny from investors, regulators, and stakeholders. Cybersecurity gaps can jeopardise valuation, delay the process, and expose the company to regulatory penalties and reputational damage.",
    whatIsIt:
      "Pre-IPO cybersecurity readiness means ensuring your security posture, compliance frameworks, and governance structures meet the demands of public markets, before investors and regulators look under the hood.",
    whoIsItFor:
      "Companies preparing for a public listing, late-stage startups approaching Series C or D, and finance teams managing due diligence processes who need to demonstrate robust security governance.",
    howItWorks:
      "We conduct a comprehensive security assessment against IPO-relevant frameworks, identify gaps, build a prioritised remediation roadmap, and prepare your documentation for regulatory and investor scrutiny.",
    includes: [
      {
        title: "Cyber Risk Assessments",
        desc: "Comprehensive security audits to identify and prioritise vulnerabilities across your entire environment.",
      },
      {
        title: "Governance & Compliance Alignment",
        desc: "Implement frameworks like NIST CSF V.2, ISO 27001, SOC 2, and industry specific regulations required by investors and regulators.",
      },
      {
        title: "Incident Response & Crisis Management",
        desc: "Develop a robust incident response plan and test it through simulations, so you're ready for anything.",
      },
      {
        title: "Third-Party Vendor Risk Management",
        desc: "Strengthen vendor risk assessments and contract security clauses across your supply chain.",
      },
      {
        title: "SEC Cybersecurity Disclosure Readiness",
        desc: "Ensure compliance with SEC cybersecurity risk disclosure requirements and investor reporting obligations.",
      },
      {
        title: "M&A Security Gap Analysis",
        desc: "Identify legacy system vulnerabilities and poor integration strategies that could create hidden cybersecurity risks.",
      },
    ],
    whyItMatters:
      "A strong cybersecurity posture enhances investor confidence, mitigates legal and financial risks, and ensures a smooth, secure transition to a publicly traded company. Investors are increasingly sophisticated, and gaps discovered in due diligence can kill a deal.",
    stats: [
      { num: "83%", label: "Of IPO investors consider cybersecurity in due diligence" },
      { num: "$5.9M", label: "Average regulatory fine for pre-IPO data breaches" },
      { num: "40%", label: "Of M&A deals uncovered a cyber incident post-close" },
    ],
    contactValue: "Pre-IPO Readiness",
  },
  {
    id: "compliance",
    icon: FileCheck,
    badge: "Compliance & Risk",
    title: "Stay compliant. Stay resilient. Stay ahead.",
    subtitle: "Compliance Oversight & Risk Mitigation",
    intro:
      "Whether you run an app, small business, eCommerce website, or FTSE 250, all businesses need to minimise their legal liability and risk. We make compliance clear, manageable, and tailored to your world.",
    whatIsIt:
      "Compliance and risk mitigation means knowing exactly what regulations apply to your business, building the policies and controls to meet them, and having a trusted advisor help you stay ahead of an ever changing regulatory landscape.",
    whoIsItFor:
      "Any business handling customer data, financial transactions, or operating in regulated industries, from early stage startups navigating GDPR for the first time, to established enterprises preparing for ISO 27001 certification.",
    howItWorks:
      "We assess your current compliance posture, identify gaps against relevant frameworks, build a tailored risk management plan complete with policies and due diligence, and support you through audits and certifications.",
    includes: [
      {
        title: "Compliance Oversight",
        desc: "Expert guidance on GDPR, Cyber Essentials, HIPAA, SOC 2, ISO 27001, PCI-DSS and other regulatory frameworks relevant to your industry.",
      },
      {
        title: "Policy & Standards Development",
        desc: "Draft and maintain security policies and procedures that are practical, enforceable, and audit-ready.",
      },
      {
        title: "Regulatory Audit Preparation",
        desc: "Prepare for certifications, audits and regulatory reviews, so you walk in confident, not scrambling.",
      },
      {
        title: "Third-Party & Vendor Risk Management",
        desc: "Assess and mitigate supply chain and vendor security risks, including geopolitical, emerging, and sector specific risks.",
      },
      {
        title: "AI & Emerging Tech Risk",
        desc: "Identify and manage risks introduced by AI-driven processes, automation tools, and emerging technologies in your environment.",
      },
    ],
    whyItMatters:
      "Non-compliance isn't just a legal risk, it's a business risk. Fines, reputational damage, and lost contracts can result from gaps you didn't know existed. We help you worry less about liabilities so you can concentrate on growing your business.",
    stats: [
      { num: "€20M", label: "Maximum GDPR fine or 4% of global turnover" },
      { num: "56%", label: "Of businesses lack a formal risk management framework" },
      { num: "3x", label: "More likely to win enterprise contracts with ISO 27001" },
    ],
    contactValue: "Compliance & Risk Mitigation",
  },
];

/* ─── Sticky Service Nav ───────────────────────────────────────────────────── */
function ServiceNav() {
  return (
    <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-borderLight shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide">
        <span className="text-xs font-semibold text-textMuted uppercase tracking-widest whitespace-nowrap mr-2">
          Jump to:
        </span>
        {services.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium text-primary border border-borderLight hover:border-htpRed hover:text-htpRed whitespace-nowrap transition-all duration-200 bg-secondary hover:bg-white"
          >
            <s.icon className="w-3.5 h-3.5" />
            {s.badge}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── Single Service Section ───────────────────────────────────────────────── */
function ServiceSection({ service, index }) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={service.id}
      className={`py-20 md:py-28 scroll-mt-16 ${isEven ? "bg-white" : "bg-secondary"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4 text-center justify-center">
            <div className="w-10 h-10 rounded-xl bg-htpRed/10 flex items-center justify-center flex-shrink-0">
              <service.icon className="w-5 h-5 text-htpRed" />
            </div>
            <span className="text-lg font-bold text-htpRed uppercase tracking-[0.2em]">
              {service.badge}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-3 max-w-3xl text-center mx-auto">
            {service.title}
          </h2>
          <p className="text-textMuted text-lg max-w-2xl leading-relaxed text-center mx-auto">
            {service.intro}
          </p>
        </div>

        {/* Three info cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-borderLight rounded-2xl p-7">
            <p className="text-lg font-bold text-htpRed uppercase tracking-widest mb-3">
              What is this?
            </p>
            <p className="text-textMain text-sm leading-relaxed">{service.whatIsIt}</p>
          </div>
          <div className="bg-white border border-borderLight rounded-2xl p-7">
            <p className="text-lg font-bold text-htpRed uppercase tracking-widest mb-3">
              Who is it for?
            </p>
            <p className="text-textMain text-sm leading-relaxed">{service.whoIsItFor}</p>
          </div>
          <div className="bg-white border border-borderLight rounded-2xl p-7">
            <p className="text-lg font-bold text-htpRed uppercase tracking-widest mb-3">
              How it works
            </p>
            <p className="text-textMain text-sm leading-relaxed">{service.howItWorks}</p>
          </div>
        </div>

        {/* What's included */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6">What's included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {service.includes.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white border border-borderLight rounded-2xl p-6 hover:border-htpRed/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="mt-0.5 flex-shrink-0">
                  <div className="w-5 h-5 rounded-full bg-htpRed/10 flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-htpRed" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">{item.title}</p>
                  <p className="text-sm text-textMuted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why it matters + Stats */}
        <div className="rounded-2xl bg-primary p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-2xl font-bold text-htpRed uppercase tracking-widest mb-3">
                Why it matters
              </p>
              <p className="text-white/90 text-base leading-relaxed">
                {service.whyItMatters}
              </p>
              <Link
               href={`/contact?service=${encodeURIComponent(service.contactValue)}#contact-form`}
                className="mt-6 inline-flex items-center gap-2 bg-cta hover:bg-ctaHover text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,42,0,0.35)]"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {service.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-htpRed mb-1">
                    {stat.num}
                  </p>
                  <p className="text-white/50 text-xs leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen bg-background text-textMain overflow-hidden">

      {/* 1. Hero — unchanged */}
  <section className="relative w-full min-h-[80vh] flex items-center justify-center text-center pt-40 md:pt-56 pb-24 overflow-hidden">
  <Image
    src="/whatwedo.jpg"
    alt="Cyber Security Risk Management"
    fill
    priority
    className="object-cover object-[62%_center] sm:object-center scale-105"
  />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/70 z-0" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8 w-fit mx-auto">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse mt-2" />
              <span className="text-m font-semibold uppercase tracking-widest text-htpRed">
                What We Do
              </span>
            </div>
           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6 sm:mb-8 text-white tracking-tight">
              Simplifying Risk. <br />
              <span className="underline decoration-accent decoration-4 underline-offset-4">
                Safeguarding Digital Assets.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/85 font-light max-w-2xl mx-auto leading-relaxed">
              Protecting what matters most with clear, practical cyber security
              and risk advisory tailored to your organisation.
            </p>
          </div>
        </div>
      </section>


      {/* 2. Intro — unchanged */}
    <section className="py-14 md:py-16 bg-secondary">
  <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

      {/* LEFT CONTENT */}
      <div className="max-w-2xl">
        <p className="text-xl md:text-2xl font-bold text-htpRed tracking-[0.18em] uppercase mb-3 text-center">
          What We Do
        </p>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary leading-tight mb-4">
          We simplify cyber security, AI, and third party risk.
        </h2>

        <p className="text-base md:text-lg text-primary font-medium leading-relaxed mb-3">
          No jargon. No noise. Just clear insight into what really matters.
        </p>

        <p className="text-textMain text-sm md:text-base leading-relaxed mb-3">
          With over 25 years of experience working with FTSE 250 companies,
          SMEs, and startups across multiple industries, we turn complex
          threats into practical action.
        </p>

       
        <div className="text-textMain text-sm md:text-base leading-relaxed space-y-3 mb-5">
          <p>
            We focus on clear, sensible cyber security hygiene that reduces risk
            and helps you stay resilient in a fast changing world; we there is a gap often scaleup and startup businesses are given advised catered to FTSE giants.
          </p>

          <p>
            We want help founders sleep better by putting the right cyber security foundations in place without slowing them down or blowing the budget.
          </p>

          <p>
            Supporting females in this space. Cyber awareness should be as natural, easy to understand and accessible as financial awareness and women should feel fully empowered to lead it.
          </p>
        </div>

        <div className="h-1 w-16 bg-htpRed rounded-full" />
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative w-full max-w-[240px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px]">
          <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-xl" />

          <div className="relative overflow-hidden rounded-2xl border border-borderLight bg-white shadow-[0_15px_40px_rgba(11,31,58,0.08)]">
            <img
              src="/whatwedo.png"
              alt="HTP Consultancy cyber security advisory"
              className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover object-center"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* 3. Our Work — BEFORE services */}
    <section className="py-20 md:py-24 bg-white">
  <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-12 text-center">
    <div className="bg-secondary border border-borderLight rounded-3xl px-8 py-14 md:px-12 md:py-16 shadow-[0_20px_60px_rgba(11,31,58,0.08)]">
      <div className="p-4 bg-accent/10 rounded-2xl w-fit mx-auto mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-htpRed"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10M7 11h10M7 15h6" />
        </svg>
      </div>

      <p className="text-2xl font-bold text-htpRed tracking-[0.22em] uppercase mb-4">
        Our Work
      </p>

      <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-6">
        See the depth behind our work.
      </h2>

      <p className="text-textMain text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
        Want to know more details about the work we produce? Explore one of our
        sample reporting styles to understand how we present risk, insights, and
        strategic findings in a clear, decision ready way.
      </p>

      {/* Updated Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <a
          href="https://static1.squarespace.com/static/61598a827c12262d11d6f93c/t/67e1ac0c04bec05dfce20f7e/1744539311928/HTP+Consultancy+-+Sample+Report+V1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-cta hover:bg-ctaHover text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-[0_4px_14px_rgba(255,42,0,0.25)] hover:shadow-[0_8px_24px_rgba(255,42,0,0.35)] hover:-translate-y-0.5 hover:scale-[1.03]"
        >
          View Sample Report
        </a>

        <a
          href="AI_Framework_Concise.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center border-2 border-cta text-cta font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-cta hover:text-white"
        >
          View Sample Report 2
        </a>
      </div>

      <p className="text-sm text-textMuted mt-4">
        Real client style reporting. Delivered in a clear, board ready format.
      </p>
    </div>
  </div>
</section>

      {/* 4. Sticky Service Nav */}
      <ServiceNav />

      {/* 5. All 4 Service Sections */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

    </main>
  );
}