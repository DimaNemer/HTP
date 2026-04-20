
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, Send, CheckCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";   
const LinkedInSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
/* ─── Service Options ──────────────────────────────────────────────────────── */
const SERVICE_OPTIONS = [
  { value: "", label: "Select a service..." },
  { value: "Fractional Services", label: "Fractional CISO & Board Advisory" },
  { value: "Security Testing", label: "Security Testing (Red / Blue / Purple Team)" },
  { value: "Pre-IPO Readiness", label: "Pre-IPO Readiness" },
  { value: "Compliance & Risk Mitigation", label: "Compliance & Risk Mitigation" },
  { value: "Multiple Services", label: "Multiple Services" },
  { value: "General Inquiry", label: "General Inquiry / Not sure yet" },
];

const MULTI_SERVICES = [
  "Fractional CISO & Board Advisory",
  "Security Testing (Red / Blue / Purple Team)",
  "Pre-IPO Readiness",
  "Compliance & Risk Mitigation",
];

/* ─── Inner form — reads searchParams ─────────────────────────────────────── */
function ContactForm() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    multiServices: [],
    message: "",
  });

  const [status, setStatus] = useState("idle");

  /* Auto-fill service from URL param e.g. /contact?service=Security+Testing */
  useEffect(() => {
    const param = searchParams.get("service");
    if (param) {
      const match = SERVICE_OPTIONS.find((o) => o.value === param);
      if (match) setFormData((prev) => ({ ...prev, service: match.value }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Reset multi-select when service changes away from "Multiple Services"
      ...(name === "service" && value !== "Multiple Services" ? { multiServices: [] } : {}),
    }));
  };

  const toggleMultiService = (val) => {
    setFormData((prev) => ({
      ...prev,
      multiServices: prev.multiServices.includes(val)
        ? prev.multiServices.filter((v) => v !== val)
        : [...prev.multiServices, val],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        multiServices: [],
        message: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error"); // you can safely set it mapped to 'idle' later if you don't have visual error logic
      setTimeout(() => setStatus("idle"), 5000);
      alert("Failed to send your message. Please try again or email us directly.");
    }
  };

  const showMultiPicker = formData.service === "Multiple Services";

  return (
    <div
      id="contact-form"
      className="lg:col-span-7 scroll-mt-32 bg-white p-8 md:p-10 lg:p-12 rounded-2xl shadow-sm border border-[#D9E4EC]"
    >
      <h2 className="text-2xl font-bold text-[#0B1F3A] mb-2">Send Us a Message</h2>
      <p className="text-[#64748B] text-sm mb-8">We'll get back to you within one business day.</p>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-semibold text-[#0B1F3A]">
              First Name <span className="text-[#cf4227]">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-[#F4F8FC] border border-[#D9E4EC] rounded-xl px-4 py-3.5 text-[#0B1F3A] placeholder:text-[#64748B] focus:outline-none focus:border-[#0A4F6E] focus:ring-2 focus:ring-[#0A4F6E]/20 transition-all text-sm"
              placeholder="John"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-semibold text-[#0B1F3A]">
              Last Name <span className="text-[#cf4227]">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-[#F4F8FC] border border-[#D9E4EC] rounded-xl px-4 py-3.5 text-[#0B1F3A] placeholder:text-[#64748B] focus:outline-none focus:border-[#0A4F6E] focus:ring-2 focus:ring-[#0A4F6E]/20 transition-all text-sm"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold text-[#0B1F3A]">
            Email Address <span className="text-[#cf4227]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#F4F8FC] border border-[#D9E4EC] rounded-xl px-4 py-3.5 text-[#0B1F3A] placeholder:text-[#64748B] focus:outline-none focus:border-[#0A4F6E] focus:ring-2 focus:ring-[#0A4F6E]/20 transition-all text-sm"
            placeholder="john@company.com"
          />
        </div>

        {/* Company */}
        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-semibold text-[#0B1F3A]">
            Company / Industry <span className="text-[#cf4227]">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-[#F4F8FC] border border-[#D9E4EC] rounded-xl px-4 py-3.5 text-[#0B1F3A] placeholder:text-[#64748B] focus:outline-none focus:border-[#0A4F6E] focus:ring-2 focus:ring-[#0A4F6E]/20 transition-all text-sm"
            placeholder="Acme Corp"
          />
        </div>

        {/* Service dropdown */}
        <div className="space-y-2">
          <label htmlFor="service" className="block text-sm font-semibold text-[#0B1F3A]">
            Service you're interested in <span className="text-[#cf4227]">*</span>
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full appearance-none bg-[#F4F8FC] border border-[#D9E4EC] rounded-xl px-4 py-3.5 text-[#0B1F3A] focus:outline-none focus:border-[#0A4F6E] focus:ring-2 focus:ring-[#0A4F6E]/20 transition-all text-sm pr-10"
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
          </div>

          {/* Auto-fill notice */}
          {formData.service && formData.service !== "" && formData.service !== "General Inquiry" && formData.service !== "Multiple Services" && (
            <p className="text-xs text-[#0A4F6E] flex items-center gap-1.5 mt-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#0A4F6E]" />
              Service pre-selected based on your interest. You can change it anytime.
            </p>
          )}
        </div>

        {/* Multi-service picker — expands when "Multiple Services" is selected */}
        {showMultiPicker && (
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-[#0B1F3A]">
              Which services are you interested in? <span className="text-[#cf4227]">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MULTI_SERVICES.map((svc) => {
                const checked = formData.multiServices.includes(svc);
                return (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => toggleMultiService(svc)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium text-left transition-all duration-150 ${
                      checked
                        ? "border-[#cf4227] bg-[#cf4227]/5 text-[#cf4227]"
                        : "border-[#D9E4EC] bg-[#F4F8FC] text-[#334155] hover:border-[#0A4F6E]"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border ${
                        checked ? "bg-[#cf4227] border-[#cf4227]" : "border-[#D9E4EC] bg-white"
                      }`}
                    >
                      {checked && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    {svc}
                  </button>
                );
              })}
            </div>
            {formData.multiServices.length === 0 && (
              <p className="text-xs text-[#cf4227]">Please select at least one service.</p>
            )}
          </div>
        )}

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-semibold text-[#0B1F3A]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-[#F4F8FC] border border-[#D9E4EC] rounded-xl px-4 py-3.5 text-[#0B1F3A] placeholder:text-[#64748B] focus:outline-none focus:border-[#0A4F6E] focus:ring-2 focus:ring-[#0A4F6E]/20 transition-all resize-y text-sm"
            placeholder="Tell us about your needs we'll take it from there."
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting" || (showMultiPicker && formData.multiServices.length === 0)}
            className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-base transition-all duration-300 ${
              status === "success"
                ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                : "bg-[#cf4227] hover:bg-[#E02400] active:bg-[#C91F00] text-white shadow-[0_4px_14px_rgba(255,42,0,0.25)] hover:shadow-[0_8px_24px_rgba(255,42,0,0.35)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            }`}
          >
            {status === "submitting" ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : status === "success" ? (
              <>
                <CheckCircle className="w-5 h-5 text-emerald-500" /> Message Sent Successfully!
              </>
            ) : (
              <>
                Send Message <Send className="w-5 h-5" />
              </>
            )}
          </button>
          <p className="text-xs text-[#64748B] text-center mt-3">
            All enquiries are confidential. We respond within 1 business day.
          </p>
        </div>

      </form>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">

      {/* ── Hero ── */}
  <section className="relative min-h-[82vh] sm:min-h-[90vh] md:min-h-screen flex items-end overflow-hidden">
  <img
    src="/contact.jpg"
    alt="HTP Consultancy contact"
    className="absolute inset-0 w-full h-full object-cover object-[52%_center] xs:object-[54%_center] sm:object-[56%_center] md:object-[58%_center] lg:object-center"
  />
  <div className="absolute inset-0 bg-[#0B1F3A]/72" />
  <div className="absolute inset-0 bg-gradient-to-br from-[#0A4F6E]/10 via-transparent to-transparent" />
  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#FFFFFF]" />

  <div className="relative z-10 w-full pb-28 pt-32 md:pt-40 px-6 md:px-12 text-center">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
        Let's{" "}
        <span className="text-white underline decoration-[#cf4227] decoration-4 underline-offset-4">
          Connect
        </span>
      </h1>
   <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-black/20 px-6 py-3 rounded-xl backdrop-blur-[2px]">
  Whether you're looking to protect your business or explore new opportunities, our team is ready to help.
</p>
      <div className="mt-10">
        <a
          href="#contact-form"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#cf4227] hover:bg-[#c43318] active:bg-[#c43318] px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-[0_4px_14px_rgba(255,42,0,0.25)] hover:shadow-[0_8px_24px_rgba(255,42,0,0.35)] hover:-translate-y-0.5 transition-all duration-300"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </div>
</section>

      {/* ── Contact Info + Form ── */}
      <section className="pt-11 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">

            {/* Left: Info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] leading-tight mb-4">
                  Contact <span className="text-[#cf4227]">Us</span>
                </h2>
                <p className="text-[#334155] text-base leading-relaxed max-w-md">
                  A better future is possible. Contact us to learn more about our mission and work, or to become involved yourself.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#cf4227]/10 border border-[#cf4227]/20 rounded-xl flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#cf4227]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">Phone</h3>
                    <a href="tel:+447966520303" className="text-[#0B1F3A] font-medium hover:text-[#0A4F6E] transition-colors">
                      +44 7966 520303
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#cf4227]/10 border border-[#cf4227]/20 rounded-xl flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#cf4227]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">Email</h3>
                    <a href="mailto:hc@htpconsultancy.com" className="text-[#0B1F3A] font-medium hover:text-[#0A4F6E] transition-colors">
                      hc@htpconsultancy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#cf4227]/10 border border-[#cf4227]/20 rounded-xl flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#cf4227]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">Location</h3>
                    <p className="text-[#0B1F3A] font-medium">London, UK</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-4">Connect With Us</h3>
                <Link
                  href="https://www.linkedin.com/company/htp-consultancy/"
                  target="_blank"
                  className="inline-flex items-center gap-3 p-4 bg-white hover:bg-[#F4F8FC] border border-[#D9E4EC] rounded-xl text-[#0B1F3A] hover:text-[#0A4F6E] transition-all duration-300 group w-fit shadow-sm"
                >
                  <div className="p-2 bg-[#cf4227]/10 rounded-lg group-hover:bg-[#cf4227]/20 transition-colors">
                    <LinkedInSVG  className="w-5 h-5 text-[#cf4227]" />
                  </div>
                  <span className="font-semibold text-sm pr-1">HTP Consultancy</span>
                </Link>
              </div>

              {/* Trust badge */}
              <div className="p-6 bg-[#F4F8FC] rounded-2xl border border-[#D9E4EC]">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0A4F6E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0B1F3A] font-semibold text-sm mb-1">Free 1-Hour Consultation</p>
                    <p className="text-[#64748B] text-xs leading-relaxed">
                      We offer a complimentary 1-hour session to understand your needs and define your goals no commitment required.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service quick links */}
              <div>
                <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-4">
                  Enquire about a specific service
                </h3>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Fractional CISO & Board Advisory", value: "Fractional Services" },
                    { label: "Security Testing", value: "Security Testing" },
                    { label: "Pre-IPO Readiness", value: "Pre-IPO Readiness" },
                    { label: "Compliance & Risk Mitigation", value: "Compliance & Risk Mitigation" },
                  ].map((svc) => (
                    <a
                      key={svc.value}
                      href={`#contact-form`}
                      onClick={() => {
                        // shallow update so form reacts
                        const url = new URL(window.location.href);
                        url.searchParams.set("service", svc.value);
                        window.history.replaceState({}, "", url.toString());
                        window.dispatchEvent(new PopStateEvent("popstate"));
                      }}
                      className="flex items-center justify-between px-4 py-3 rounded-xl border border-[#D9E4EC] bg-white hover:border-[#cf4227] hover:text-[#cf4227] text-[#334155] text-sm font-medium transition-all duration-150 group"
                    >
                      {svc.label}
                      <ChevronDown className="w-4 h-4 -rotate-90 text-[#D9E4EC] group-hover:text-[#cf4227] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Smart Form */}
            <Suspense fallback={<div className="lg:col-span-7 h-96 bg-[#F4F8FC] rounded-2xl animate-pulse" />}>
              <ContactForm />
            </Suspense>

          </div>
        </div>
      </section>
    </main>
  );
}