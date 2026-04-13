import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const credentials = [
  { org: "London Stock Exchange", role: "Senior security role" },
  { org: "KMD Neupart", role: "Denmark's largest IT supplier" },
  { org: "Europe & the Americas", role: "Global leadership experience" },
];

const tags = [
  "Cyber security",
  "Compliance",
  "Risk management",
  "Geopolitical intelligence",
  "Pre-IPO advisory",
  "Fractional board",
  "Emerging threats",
];

const stats = [
  { value: "25+", label: "Years of experience" },
  { value: "3", label: "Continents served" },
  { value: "FTSE & Gov", label: "Client range" },
];

export const metadata = {
  title: "Our Story — HTP Consultancy",
};

StoryPage.noNavbar = true;

export default function StoryPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <div className="bg-primary px-8 pt-6 pb-14">
        <Link
          href="/about#founder"
          className="inline-flex items-center gap-2 text-[#94afc8] hover:text-white text-sm font-medium mb-8 transition-colors duration-200 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1 " />
          Back to About us
        </Link>
        <div className="flex items-center gap-10 flex-wrap">
          <div className="w-28 h-28 rounded-full bg-accent flex items-center justify-center text-4xl font-bold text-secondary border-2 border-white/10 shrink-0">
            HC
          </div>
          <div>
            <p className="text-xs font-bold text-htpRed tracking-[2px] uppercase mb-2">
              Founder &amp; Principal Consultant
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-1">
              Harshini Carey
            </h1>
            <p className="text-sm text-[#94afc8]">
              HTP Consultancy — Cyber Security, Compliance &amp; Risk Advisory
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 grid lg:grid-cols-[1fr_260px] gap-12 items-start">

        {/* Story */}
        <div className="space-y-10">

          {/* Section 1 */}
          <div>
            <p className="text-[10px] font-bold text-htpRed tracking-[2px] uppercase mb-1">
              Our story
            </p>
            <h2 className="text-xl font-bold text-primary border-b border-borderLight pb-3 mb-4">
              How HTP Consultancy began
            </h2>
            <div className="space-y-4 text-sm text-textMain leading-relaxed">
              <p>
                HTP Consultancy was founded by Harshini Carey — a strategic
                cyber security leader with over 25 years of hands-on experience
                across technology and risk. After building a trusted reputation
                for solving complex problems and translating security into clear
                business outcomes, she established her own consultancy to support
                boards and fast-growing organisations with a modern, pragmatic
                approach.
              </p>
              <p>
                The consultancy provides Cyber Security and Emerging Risk
                advisory, Fractional Board services tailored to each client's
                needs, and Pre-IPO and Compliance risk mitigation. HTP works with
                tech startups, FTSE-listed companies, and government entities
                alike — bringing the same rigour and clarity to every engagement,
                regardless of scale.
              </p>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="border-l-4 border-accent pl-5 py-3 bg-secondary rounded-r-xl">
            <p className="text-sm text-primary/90 font-medium italic leading-relaxed">
              "We love working with all types of clients — startups, FTSE, and
              government entities. While startups scale quickly, we help secure
              their platforms without slowing growth, embedding security from day
              one, just as Facebook and Google did. Our expertise lies in
              simplifying requirements and aligning them with proportionate,
              effective information security solutions."
            </p>
          </blockquote>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-primary border-b border-borderLight pb-3 mb-4">
              A career built on real-world complexity
            </h2>
            <div className="space-y-4 text-sm text-textMain leading-relaxed">
              <p>
                Harshini held senior roles across Europe and the Americas —
                including at the London Stock Exchange and KMD Neupart,
                Denmark's largest IT supplier. Her background spans cyber
                security, compliance, and risk, supported by an extensive network
                across geopolitical intelligence, emerging threats, and regulatory
                affairs.
              </p>
              <p>
                She is driven to deliver measurable impact by safeguarding
                organisations while working effectively within their operating
                realities — reducing risk without adding unnecessary complexity.
              </p>
            </div>
          </div>

          {/* Personal story card */}
          <div className="bg-card border border-borderLight rounded-xl p-5">
            <p className="text-xs font-bold text-accent uppercase tracking-[1.5px] mb-3">
              The person behind the practice
            </p>
            <p className="text-sm text-textMain leading-relaxed">
              Harshini's resilience is personal as well as professional. A war
              child who lost her father at age 13, she set up her first business
              — a home jewellery venture to support her own education — and was
              raised by strong women who shaped her sense of purpose. That
              foundation drives everything she does today.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-primary border-b border-borderLight pb-3 mb-4">
              Values that shape every engagement
            </h2>
            <div className="space-y-4 text-sm text-textMain leading-relaxed">
              <p>
                Shaped by a background rooted in military service, healthcare,
                and entrepreneurship, Harshini brings a deeply embedded "protect
                what matters" mindset to her work. Discipline, sound judgement,
                empathy, and a strong work ethic underpin every engagement —
                alongside a clear belief that effective governance and security
                should enable progress, not impede it.
              </p>
              <p>
                At board level, this translates into proportionate risk
                management, practical decision-making, and outcomes that
                strengthen resilience while making leadership's job easier.
                Multiple clients have praised HTP's ability to cut through
                complexity and deliver results that hold up in the real world.
              </p>
            </div>
          </div>

          <hr className="border-borderLight" />

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-primary border-b border-borderLight pb-3 mb-4">
              What sets HTP apart
            </h2>
            <div className="space-y-4 text-sm text-textMain leading-relaxed">
              <p>
                Our strength lies in simplifying client requirements and aligning
                them with effective, proportionate information security solutions.
                For startups scaling at speed, we embed security early without
                slowing momentum. For boards and executives, we translate
                technical risk into language that drives confident decisions. For
                regulated industries, we navigate compliance without losing sight
                of commercial reality.
              </p>
            </div>
          </div>

        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-4 lg:sticky lg:top-6">

          {/* Stats */}
          <div className="bg-secondary border border-borderLight rounded-xl p-5">
            <p className="text-[11px] font-bold text-textMuted uppercase tracking-[1.2px] mb-4">
              At a glance
            </p>
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center py-3 ${i < stats.length - 1 ? "border-b border-borderLight" : ""}`}
              >
                <div className="text-2xl font-bold text-primary">{s.value}</div>
                <div className="text-xs text-textMuted mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Career */}
          <div className="bg-secondary border border-borderLight rounded-xl p-5">
            <p className="text-[11px] font-bold text-textMuted uppercase tracking-[1.2px] mb-4">
              Career highlights
            </p>
            <div className="space-y-3">
              {credentials.map((c) => (
                <div key={c.org} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-primary leading-tight">
                      {c.org}
                    </div>
                    <div className="text-xs text-textMuted mt-0.5">{c.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="bg-secondary border border-borderLight rounded-xl p-5">
            <p className="text-[11px] font-bold text-textMuted uppercase tracking-[1.2px] mb-3">
              Expertise
            </p>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-medium bg-card text-accent px-2.5 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-secondary border border-borderLight rounded-xl p-5">
            <p className="text-[11px] font-bold text-textMuted uppercase tracking-[1.2px] mb-3">
              Ready to work together?
            </p>
            <p className="text-xs text-textMuted leading-relaxed mb-4">
              Whether you are a startup scaling fast or a board seeking a trusted
              advisor, we are here to help.
            </p>
            <Link
              href="/contact"
              className="block text-center bg-cta hover:bg-ctaHover text-white text-sm font-bold px-5 py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
          </div>

        </aside>
      </div>
    </main>
  );
}