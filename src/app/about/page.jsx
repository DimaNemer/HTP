import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle,
  ChevronRight,
  BookOpen,
  Heart,
  Activity,
  Layers,
  Settings,
  Target,
} from "lucide-react";

export const metadata = {
  title: "About Us | HTP Consultancy",
  description:
    "HTP Consultancy was founded by Harshini Carey. We deliver modern, pragmatic cyber security advisory.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-20 bg-background text-textMain overflow-hidden">

      {/* 1. Hero Section */}
     <section className="relative w-full min-h-[80vh] flex items-center justify-center pt-40 md:pt-56 pb-24 overflow-hidden">
  <Image
    src="/image.png"
    alt="Strategic Cyber Infrastructure"
    fill
    priority
    className="object-cover object-center scale-105 brightness-110 contrast-110"
  />

  <div className="absolute inset-0 bg-primary/30" />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/40 z-0" />

  <div className="container mx-auto px-6 md:px-12 relative z-10 flex justify-center md:justify-start">
    <div className="max-w-4xl text-left">
      
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8 w-fit">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span className="text-xs font-semibold uppercase tracking-widest text-htpRed">
          About HTP Consultancy
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6 md:mb-8 text-white tracking-tight">
        Passion. Experience. <br />
        <span className="underline decoration-accent decoration-4 underline-offset-4">
          Integrity.
        </span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-white/85 font-light max-w-2xl leading-relaxed">
        "Our DNA is protecting what matters the most — your most valuable digital assets."
      </p>

    </div>
  </div>
</section>

      {/* 2. Who We Are */}
     <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
      
      {/* Left Side - Content */}
      <div className="max-w-2xl">
        <h2 className="text-lg font-bold text-htpRed tracking-[0.22em] uppercase mb-5 text-center">
          Who We Are
        </h2>

        <p className="text-3xl md:text-4xl font-semibold text-primary leading-tight mb-6">
          HTP Consultancy was founded by Harshini Carey, a strategic cyber
          security leader with over 25 years of hands-on experience.
        </p>

        <p className="text-textMain text-base md:text-lg leading-relaxed mb-8">
          After building a trusted reputation for solving complex problems and
          translating security into clear business outcomes, she established
          her consultancy to support boards and fast-growing organisations
          with a modern, pragmatic approach.
        </p>

        <div className="h-1 w-20 bg-htpRed rounded-full" />
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center lg:justify-center">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 bg-[#0A4F6E]/10 rounded-3xl blur-2xl" />
          <img
            src="/whoweare.png"
            alt="Harshini Carey"
            className="relative w-full h-auto object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* 3. What We Do — Cards */}
      <section className="py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-lg font-bold text-htpRed tracking-widest uppercase mb-4">
              What We Do
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-primary leading-tight max-w-4xl mx-auto">
              Cyber security and risk advisory tailored to your organisation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {[
              {
                title: "Cyber Security Advisory",
                desc: "Strategic guidance to protect digital assets and manage evolving cyber risks.",
                icon: Target,
              },
              {
                title: "Fractional Board Services",
                desc: "On-demand executive-level expertise to support governance and decision-making.",
                icon: Layers,
              },
              {
                title: "Pre-IPO & Compliance",
                desc: "Preparing organisations for regulatory, investor, and market expectations.",
                icon: Settings,
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border border-borderLight bg-white card-hover shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-htpRed" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-textMuted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-textMain text-base md:text-lg mt-12 max-w-3xl mx-auto leading-relaxed">
            We work with tech startups, FTSE-listed companies, and government
            entities, helping organisations secure their platforms while
            enabling growth.
          </p>
        </div>
      </section>

      {/* 4. Experience Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-lg font-bold text-htpRed tracking-widest uppercase mb-4">
            Experience &amp; Credibility
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-primary leading-snug max-w-4xl mx-auto mb-5">
            We have supported organisations across startups, FTSE companies, and
            government sectors.
          </p>
          <p className="text-textMain text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-14">
            Recent client projects include a $250 million social media company,
            central government, pharmaceutical manufacturing, consultancies, and
            more.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: "$250M", desc: "Social media company project environment" },
              { stat: "Government", desc: "Experience supporting central government organisations" },
              { stat: "Pharma", desc: "Projects across pharmaceutical manufacturing and consultancies" },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border border-borderLight bg-secondary card-hover">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3">{item.stat}</h3>
                <p className="text-textMuted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Approach */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-lg font-bold text-htpRed tracking-widest uppercase mb-4">Our Approach</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary leading-snug max-w-4xl mx-auto">
              Delivering practical outcomes without unnecessary complexity.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {[
              {
                title: "Simplifying Complexity",
                desc: "Simplifying complex requirements to ensure clear, executable strategies.",
                icon: Layers,
              },
              {
                title: "Proportionate Solutions",
                desc: "Aligning requirements with proportionate information security solutions.",
                icon: Settings,
              },
              {
                title: "Practical Outcomes",
                desc: "Delivering practical outcomes without unnecessary complexity.",
                icon: Target,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-borderLight p-8 rounded-2xl card-hover shadow-sm flex flex-col items-start"
              >
                <div className="p-3 bg-accent/10 rounded-xl mb-6">
                  <item.icon className="w-7 h-7 text-htpRed" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-textMuted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Meet Harshini Carey */}
     <section id="founder" className="bg-white border-y border-borderLight py-16 md:py-18 mb-16 relative">
  <div className="container mx-auto px-6 md:px-12">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

      {/* Image */}
      <div className="lg:col-span-5 flex justify-center">
  <div className="relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-sm h-[260px] sm:h-[300px] md:h-[340px] lg:h-[400px] rounded-3xl border border-borderLight overflow-hidden shadow-xl bg-secondary group">
    <Image
      src="/harshini.png"
      alt="Harshini Carey"
      fill
      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
      sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 300px, 380px"
      priority
    />
  </div>
</div>

      {/* Content */}
      <div className="lg:col-span-7">
        <p className="text-sm font-bold text-htpRed tracking-widest uppercase mb-3">
          Founder
        </p>

       <h2 className="text-2xl md:text-[30px] lg:text-[34px] font-bold text-primary mb-5 leading-tight">
          Meet Harshini Carey, <br className="hidden lg:block" />
          Founder of HTP Consultancy
        </h2>

       <div className="space-y-4 text-base md:text-[17px] text-textMain leading-relaxed mb-5">
          <p>
            With over 25 years of global experience across Europe and the
            Americas, Harshini has held senior roles at organisations
            including the London Stock Exchange and KMD Neupart.
          </p>
          <p>
            Her background spans cyber security, compliance, and risk,
            supported by a strong network across geopolitical intelligence
            and emerging threats.
          </p>
          <p>
            Driven by resilience and real-world experience, she built HTP
            Consultancy to deliver measurable impact.
          </p>
        </div>

        <blockquote className="border-l-4 border-accent pl-5 py-3 mb-6 bg-secondary rounded-r-xl">
          <p className="text-base text-primary/90 font-medium italic mb-2">
            "We love working with all types of clients — from startups to FTSE and government entities."
          </p>
          <p className="text-sm text-textMuted italic">
            "Our expertise lies in simplifying client requirements and aligning them with effective solutions."
          </p>
        </blockquote>

        <Link
          href="/story"
          className="inline-flex items-center gap-2 bg-cta hover:bg-ctaHover text-white px-7 py-3 rounded-lg font-bold transition-all duration-300 hover:-translate-y-0.5"
        >
          Read Her Story
        </Link>
      </div>

    </div>
  </div>
</section>
      {/* 7. Board Level Expertise */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="text-center mb-12">
          <p className="text-lg font-bold text-htpRed tracking-widest uppercase mb-4">
            Board Level Expertise
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary leading-snug max-w-4xl mx-auto">
            Comprehensive oversight and strategic governance.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            "Fractional CISO and information security advisory across cyber security, geopolitical and emerging threats",
            "Board-level oversight of complex cyber programmes",
            "Development of enterprise cyber risk strategies aligned with ISO 27002 and NIST CSF v2",
            "Third-party and supply chain risk governance across SaaS and critical vendors",
            "Independent evaluation of cyber security technologies to support investment decisions",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-borderLight p-7 rounded-2xl card-hover shadow-sm flex items-start gap-4"
            >
              <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-htpRed" />
              </div>
              <p className="text-textMain text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-2xl font-bold text-htpRed tracking-widest uppercase mb-4">Our DNA</p>
            <h2 className="text-xl md:text-2xl font-semibold text-primary leading-snug max-w-3xl mx-auto">
              The core values that drive our integrity and innovation.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {[
              {
                title: "Integrity",
                desc: "We operate with strong moral principles and accountability.",
                icon: Award,
              },
              {
                title: "Sincerity & Authenticity",
                desc: "We are committed to delivering real impact for our clients.",
                icon: Heart,
              },
              {
                title: "Innovation",
                desc: "We value original thinking and practical solutions to complex challenges.",
                icon: Activity,
              },
            ].map((val, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-10 bg-white border border-borderLight rounded-2xl card-hover shadow-sm"
              >
                <div className="p-4 bg-accent/10 rounded-full mb-6">
                  <val.icon className="w-7 h-7 text-htpRed" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{val.title}</h3>
                <p className="text-textMuted text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Community Partners */}
      <section className="container mx-auto px-6 md:px-12 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden border border-borderLight shadow-sm">
            <Image
              src="/charity.png"
              alt="Community support"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-sm font-bold text-accent tracking-widest uppercase mb-4">
            Community Partners
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5">
            Community Driven
          </h2>
          <p className="text-textMain mb-10 leading-relaxed text-base md:text-lg max-w-xl mx-auto">
            We believe in giving back. With every single project we undertake, we actively support dedicated charities that make a meaningful difference.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://www.childactionlanka.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-borderLight rounded-full text-primary font-semibold hover:border-accent hover:text-accent transition-all w-full sm:w-auto bg-white shadow-sm card-hover"
            >
              Child Action Lanka
            </a>
            <a
              href="https://rainbowcentresrilanka.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-borderLight rounded-full text-primary font-semibold hover:border-accent hover:text-accent transition-all w-full sm:w-auto bg-white shadow-sm card-hover"
            >
              Rainbow Centre Sri Lanka
            </a>
          </div>
        </div>
      </section>

      {/* 10. Research & Advisory */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="max-w-5xl mx-auto rounded-3xl border border-borderLight bg-secondary px-8 py-16 md:px-16 md:py-20 text-center">
          <div className="p-4 bg-accent/10 rounded-2xl w-fit mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-htpRed" />
          </div>

          <p className="text-sm font-bold text-accent tracking-widest uppercase mb-4">
            Research &amp; Advisory
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Latest Insights and News
          </h2>
          <p className="text-base md:text-lg text-textMain leading-relaxed max-w-3xl mx-auto mb-10">
            We share insights on cyber security, AI risk, and emerging threats to help organisations stay ahead.
          </p>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-htpRed font-semibold hover:gap-4 transition-all border-b-2 border-accent pb-1"
          >
            Visit Our Blog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="bg-primary py-24">
        <div className="container mx-auto px-6 md:px-12 flex justify-center text-center">
          <div className="max-w-3xl flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Let's make cyber security work for your organisation.
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-10 leading-relaxed max-w-xl">
              We offer a one-hour free consultation to understand your needs,
              define your goals, and align solutions to your budget.
            </p>
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-2 bg-cta hover:bg-ctaHover active:bg-[#C91F00] text-white font-bold py-4 px-8 rounded-lg shadow-[0_4px_14px_rgba(255,42,0,0.25)] hover:shadow-[0_8px_24px_rgba(255,42,0,0.35)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Consultation <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}