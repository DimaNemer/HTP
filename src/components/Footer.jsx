"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ExternalLink } from "lucide-react";
const LinkedInSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Blog & Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Fractional CISO & Board Advisory", href: "/what-we-do#fractional" },
  { label: "Security Testing", href: "/what-we-do#security-testing" },
  { label: "Pre-IPO Readiness", href: "/what-we-do#ipo-readiness" },
  { label: "Compliance & Risk Mitigation", href: "/what-we-do#compliance" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">

      {/* ── Main footer grid ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-3">
            <Link href="/" className="flex items-center group w-fit">
              <div className="relative w-36 h-8 md:w-40 md:h-9 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="HTP Consultancy Logo"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>

            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              We cut through complexity in cyber security, AI, geopolitical, and third-party risk, making it clear, practical, and actionable.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/company/htp-consultancy/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-htpRed flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInSVG  className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-htpRed opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-4">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group leading-snug"
                  >
                    <span className="w-1 h-1 rounded-full bg-htpRed opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-4">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hc@htpconsultancy.com"
                  className="flex items-start gap-3 text-white/55 hover:text-white text-sm transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-htpRed/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-htpRed" />
                  </div>
                  hc@htpconsultancy.com
                </a>
              </li>

              <li>
                <div className="flex items-start gap-3 text-white/55 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-htpRed" />
                  </div>
                  London, UK
                </div>
              </li>

              <li>
                <Link
                  href="https://www.linkedin.com/company/htp-consultancy/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-white/55 hover:text-white text-sm transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-htpRed/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <LinkedInSVG  className="w-3.5 h-3.5 text-htpRed" />
                  </div>
                  HTP Consultancy on LinkedIn
                </Link>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-5 p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/70 text-xs mb-3 leading-relaxed">
                Get cyber security insights straight to your inbox.
              </p>

              <a
                href="https://harshinis-newsletter-175e6e.beehiiv.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-htpRed hover:text-white text-xs font-semibold transition-colors duration-200"
              >
                Subscribe to Newsletter
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
 {/* ── Bottom bar ── */}
<div className="border-t border-white/10">
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/35">

    {/* Copyright */}
    <p>
      &copy; {new Date().getFullYear()} HTP Cybersecurity Consultancy. All rights reserved.
    </p>

    {/* Legal Links */}
    <div className="flex items-center gap-4">
      <Link
        href="/privacy"
        className="hover:text-white transition-colors"
      >
        Privacy Policy
      </Link>

      <span className="opacity-30">|</span>

      <Link
        href="/terms"
        className="hover:text-white transition-colors"
      >
        Terms & Conditions
      </Link>

        <span className="opacity-30">|</span>
<Link
  href="#"
  onClick={(e) => {
    e.preventDefault();
    window.dispatchEvent(new Event("open-cookie-banner"));
  }}
  className="hover:text-white transition-colors"
>
  Cookies
</Link>
     

    </div>

  </div>
</div>

    </footer>
  );
}