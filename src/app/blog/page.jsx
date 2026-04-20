"use client";

import { useState } from "react";
import { ExternalLink, BookOpen, Linkedin, Youtube, Mic, Newspaper, FileText } from "lucide-react";

const insights = [
  {
    type: "Newsletter",
    typeColor: "bg-accent/10 text-accent",
    icon: BookOpen,
    title: "What Is Geopolitical Risk and Why Does It Matter?",
    description:
      "An accessible deep-dive into geopolitical risk what it means for businesses today, why it's often underestimated, and how organisations can build resilience against threats they can't always see coming.",
    source: "Harshini's Newsletter",
    cta: "Read Now",
    href: "https://harshinis-newsletter-175e6e.beehiiv.com/p/what-is-geopolitical-risk-and-why-does-it-matter",
  },
  {
    type: "LinkedIn",
    typeColor: "bg-blue-50 text-blue-700",
    icon: Linkedin,
    title: "Geopolitical, Maritime and Cyber Risk",
    description:
      "A LinkedIn post exploring the convergence of geopolitical, maritime, and cyber risk and why organisations operating in global supply chains need to think about all three together.",
    source: "LinkedIn Harshini Carey",
    cta: "View Post",
    href: "https://www.linkedin.com/posts/harshini-carey-0a107b4_geopolitical-maritime-and-cyber-risk-ugcPost-7441871601077358592--beP/",
  },
  {
    type: "Newsletter",
    typeColor: "bg-accent/10 text-accent",
    icon: BookOpen,
    title: "M&A and Cybersecurity: The Risk No One Talks About Enough",
    description:
      "Mergers and acquisitions introduce hidden cybersecurity exposures that rarely make it into the due diligence checklist. This piece breaks down the risks, the gaps, and what to do about them.",
    source: "Harshini's Newsletter",
    cta: "Read Now",
    href: "https://harshinis-newsletter-175e6e.beehiiv.com/p/m-a-and-cybersecurity-the-risk-no-one-talks-about-enough",
  },
  {
    type: "Speaker",
    typeColor: "bg-htpRed/10 text-htpRed",
    icon: Mic,
    title: "Keynote Speaker: Empowering Women Entrepreneurs in the Age of AI",
    description:
      "Harshini was invited as a keynote speaker at this Innovate UK Business Connect event exploring how AI is reshaping entrepreneurship and what it means for the next generation of business leaders.",
    source: "Innovate UK Business Connect & Google",
    cta: "View Event",
    href: "https://iuk-business-connect.org.uk/events/empowering-women-entrepreneurs-in-the-age-of-ai/",
  },
  {
    type: "Speaker",
    typeColor: "bg-htpRed/10 text-htpRed",
    icon: Youtube,
    title: "Speaker: University of Birmingham Security in the Age of AI, Crypto and Quantum",
    description:
      "A live session at the University of Birmingham covering the future of security across three of the most transformative technologies of our time: artificial intelligence, cryptocurrency, and quantum computing.",
    source: "University of Birmingham YouTube Live",
    cta: "Watch Now",
    href: "https://www.youtube.com/live/tbF8P_KhidQ",
  },
  {
    type: "Article",
    typeColor: "bg-emerald-50 text-emerald-700",
    icon: Newspaper,
    title: "Security Think Tank: Expect More from GenAI in 2024",
    description:
      "Published in Computer Weekly's Security Think Tank series a forward-looking piece on what generative AI means for cybersecurity practitioners, and the higher standard organisations should be demanding from AI tools.",
    source: "Computer Weekly",
    cta: "Read Article",
    href: "https://www.computerweekl.com/opinion/Security-Think-Tank-Expect-more-from-GenAI-in-2024",
  },
  {
    type: "Article",
    typeColor: "bg-emerald-50 text-emerald-700",
    icon: FileText,
    title: "New Security Model: 'Secure GDPR' Voices of GDPR",
    description:
      "Featured in the Voices of GDPR series on Compare the Cloud introducing a new model for thinking about GDPR compliance through a security-first lens, rather than treating data protection as a legal checkbox.",
    source: "Compare the Cloud",
    cta: "Watch Now",
    href: "https://www.comparethecloud.net/watch/voices-of-gdpr/new-model-security-gdpr-voices-gdpr-kmd-neupart-uks-harshini-carey",
  },
  {
    type: "Press",
    typeColor: "bg-amber-50 text-amber-700",
    icon: Newspaper,
    title: "TechRound's Top 50 Cybersecurity Startups 2021",
    description:
      "HTP Consultancy was recognised in TechRound's Top 50 Cybersecurity Startups a testament to the firm's early impact and growing reputation in the UK cybersecurity landscape.",
    source: "TechRound",
    cta: "Read Article",
    href: "https://techround.co.uk/news/amperity-accelerates-european-growth-with-new-london-office/",
  },
];

const TYPE_ORDER = ["All", "Newsletter", "Article", "Speaker", "LinkedIn", "Press"];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? insights
      : insights.filter((i) => i.type === activeFilter);

  return (
    <main className="min-h-screen bg-background text-textMain">

      {/* ── Hero with background image ── */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background image — add /blog.jpg to your public folder */}
        <img
          src="/felix_merler-pathway-5812488.jpg"
          alt="Insights background"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        {/* Layered overlay matching your site's hero style */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-primary/55 to-primary/80 z-0" />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 z-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-44 pb-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-htpRed animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-htpRed">
              Insights & Press
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
            Thoughts, Talks <br />
            <span className="underline decoration-htpRed decoration-4 underline-offset-4">
              & Publications
            </span>
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Articles, newsletters, speaker appearances, and press features all in one place.
          </p>
        </div>
      </section>

      {/* ── Sticky Filter Bar ── */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-borderLight shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <span className="text-xs font-semibold text-textMuted uppercase tracking-widest whitespace-nowrap mr-2">
            Filter:
          </span>
          {TYPE_ORDER.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap border transition-all duration-200 ${
                activeFilter === type
                  ? "bg-htpRed border-htpRed text-white"
                  : "bg-secondary border-borderLight text-primary hover:border-htpRed hover:text-htpRed"
              }`}
            >
              {type}
              {type !== "All" && (
                <span className="ml-1.5 text-xs opacity-60">
                  ({insights.filter((i) => i.type === type).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── Cards Grid ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-sm text-textMuted mb-8">
            Showing <span className="font-semibold text-primary">{filtered.length}</span> item
            {filtered.length !== 1 ? "s" : ""}
            {activeFilter !== "All" && (
              <> in <span className="font-semibold text-primary">{activeFilter}</span></>
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-borderLight rounded-2xl p-7 flex flex-col hover:border-htpRed/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${item.typeColor}`}>
                      {item.type}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-htpRed/10 transition-colors">
                      <Icon className="w-4 h-4 text-textMuted group-hover:text-htpRed transition-colors" />
                    </div>
                  </div>

                  <h2 className="text-base font-bold text-primary leading-snug mb-3 group-hover:text-htpRed transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-sm text-textMuted leading-relaxed flex-grow mb-5">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-borderLight">
                    <span className="text-xs text-textMuted font-medium">{item.source}</span>
                    <span className="flex items-center gap-1.5 text-htpRed text-sm font-semibold group-hover:gap-2.5 transition-all">
                      {item.cta}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-textMuted">
              <p className="text-lg font-medium">No items in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="py-16 bg-secondary border-t border-borderLight">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <div className="p-4 bg-htpRed/10 rounded-2xl w-fit mx-auto mb-5">
            <BookOpen className="w-7 h-7 text-htpRed" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            Stay ahead of the curve.
          </h2>
          <p className="text-textMuted text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Subscribe to Harshini's newsletter for practical insights on cyber security, geopolitical risk, and AI delivered straight to your inbox.
          </p>
          <a
            href="https://harshinis-newsletter-175e6e.beehiiv.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cta hover:bg-ctaHover text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_4px_14px_rgba(255,42,0,0.25)] hover:shadow-[0_8px_24px_rgba(255,42,0,0.35)] hover:-translate-y-0.5"
          >
            Subscribe to Newsletter
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

    </main>
  );
}