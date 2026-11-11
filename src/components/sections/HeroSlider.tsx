"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  PhoneCall,
  Activity,
  Send,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TataTeleLogo } from "@/components/ui/Logos";

interface SlideData {
  id: string;
  image: string;
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

const SLIDES: SlideData[] = [
  {
    id: "smart-internet",
    image: "/images/banners/slide-smart-internet.jpg",
    badge: "Flagship Dedicated Connectivity",
    title: "Tata Smart Internet",
    titleHighlight: "Leased Line Solutions",
    subtitle:
      "Enterprise-grade 1:1 symmetric fiber bandwidth with built-in cloud security, 99.5% uptime SLA, and zero contention ratio.",
    features: [
      "1:1 Symmetric Speeds (Up to 10 Gbps)",
      "99.5%+ Committed SLA Uptime",
      "DNS Security & Anti-DDoS Protection",
      "Direct Billing from Tata Teleservices",
    ],
    ctaText: "Check Bandwidth Feasibility",
    ctaHref: "/solutions/smart-internet-leased-line",
  },
  {
    id: "smartflo",
    image: "/images/banners/slide-smartflo.jpg",
    badge: "Next-Gen Cloud Telephony",
    title: "Smartflo Unified",
    titleHighlight: "Communication Suite",
    subtitle:
      "Replace legacy PBX hardware with intelligent cloud communication—multi-level IVR, mobile/web softphones, and seamless CRM integrations.",
    features: [
      "No Hardware / CAPEX Required",
      "Intelligent IVR & Call Flow Routing",
      "Zoho, Salesforce & LeadSquared Sync",
      "Real-Time Executive Call Analytics",
    ],
    ctaText: "Explore Smartflo Features",
    ctaHref: "/solutions/smartflo-cloud-telephony",
  },
  {
    id: "sdwan",
    image: "/images/banners/slide-sdwan.jpg",
    badge: "Intelligent Hybrid Networking",
    title: "Enterprise Managed",
    titleHighlight: "SD-WAN & MPLS",
    subtitle:
      "Connect distributed branch offices, warehouses, and multi-cloud infrastructure with sub-second failover and dynamic traffic prioritization.",
    features: [
      "Centralized Cloud NOC Orchestration",
      "Sub-Second Automatic Link Failover",
      "Zero-Touch Branch Deployment",
      "Integrated Layer 7 Application Control",
    ],
    ctaText: "Explore SD-WAN Architecture",
    ctaHref: "/solutions/managed-sd-wan",
  },
  {
    id: "cyber-security",
    image: "/images/banners/slide-cyber-security.jpg",
    badge: "Multi-Layered Threat Defense",
    title: "Cyber Security &",
    titleHighlight: "Endpoint Protection",
    subtitle:
      "Safeguard corporate networks, remote workforces, and SaaS applications with unified threat management and proactive threat intelligence.",
    features: [
      "Virtual UTM & Cloud Firewall",
      "Email Security & Anti-Phishing",
      "Secure Web Gateway & DNS Filter",
      "Regulatory Compliance Assurance",
    ],
    ctaText: "View Security Solutions",
    ctaHref: "/solutions/cyber-security-services",
  },
  {
    id: "cloud-telephony",
    image: "/images/banners/slide-cloud-telephony.jpg",
    badge: "Customer Engagement & Scalability",
    title: "Enterprise SIP Trunk &",
    titleHighlight: "Toll-Free 1800 Services",
    subtitle:
      "Carrier-grade voice infrastructure supporting thousands of concurrent channels, pan-India toll-free access, and official WhatsApp Business API.",
    features: [
      "Scalable from 10 to 1500+ Channels",
      "Memorable Vanity 1800 Numbers",
      "Official Meta WhatsApp Business API",
      "TRAI & DLT Compliant Messaging",
    ],
    ctaText: "Request Voice Channels",
    ctaHref: "/solutions/sip-trunk",
  },
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    solution: "Smart Internet Leased Line",
    city: "Noida / NCR",
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          businessEmail: formData.email,
          companyName: "Enterprise Lead (Hero Banner)",
          solutionOfInterest: formData.solution,
          locationCity: formData.city,
          message: `Hero quick callback requested for ${formData.solution} in ${formData.city}`,
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to submit request. Please try again.");
      }

      setFormSubmitted(true);
    } catch (err: unknown) {
      setFormError(
        err instanceof Error ? err.message : "Something went wrong. Please call 1800-266-1800."
      );
    } finally {
      setFormSubmitting(false);
    }
  };

  const active = SLIDES[currentSlide];

  return (
    <section
      className="relative bg-navy-dark overflow-hidden text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides Container */}
      <div className="relative min-h-[620px] sm:min-h-[660px] lg:min-h-[700px] flex items-center">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Slide Background Image with subtle zoom on active */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center scale-105 transition-transform duration-7000 ease-out"
                style={{
                  transform: isActive ? "scale(1.04)" : "scale(1)",
                  transition: "transform 6s ease-out",
                }}
              />

              {/* Multi-layered High-Contrast Gradient Overlay for Crisp Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/40 lg:to-navy-dark/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/60" />
            </div>
          );
        })}

        {/* Hero Content & Overlaid Callback Form Grid */}
        <div className="relative z-20 max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Column: Dynamic Slide Information */}
            <div className="lg:col-span-7 space-y-5">
              {/* Official Tata Partner Indicator */}
              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  Authorised Partner:
                </span>
                <TataTeleLogo variant="white" size="sm" />
              </div>

              {/* Dynamic Slide Badge */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  {active.badge}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
                {active.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-200 to-white block sm:inline">
                  {active.titleHighlight}
                </span>
              </h1>

              {/* Subtitle / Value Proposition */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
                {active.subtitle}
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-slate-200">
                {active.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <Button
                  href={active.ctaHref}
                  size="lg"
                  variant="cyan"
                  className="gap-2 text-navy font-bold shadow-lg shadow-sky-500/20"
                >
                  <span>{active.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  href="/solutions"
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  View All Solutions
                </Button>
              </div>
            </div>

            {/* Right Column: Brixbyte-style Fast Callback / Feasibility Form Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/30 text-ink">
                {/* Form Header */}
                <div className="border-b border-slate-200 pb-3.5 mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                      Quick Feasibility Desk
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Response
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-ink">Request a Call Back</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Share your requirements to verify local TTBS fiber coverage & custom quotes.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="font-bold text-lg text-ink">Thank You!</h4>
                    <p className="text-xs text-slate-600 max-w-xs mx-auto">
                      Our TTBS enterprise specialist will reach out to you within 30 minutes to discuss feasibility.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-semibold text-brand-blue hover:underline pt-2 block mx-auto"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    {formError && (
                      <div className="p-2.5 rounded-lg bg-red-50 text-red-700 text-xs border border-red-200">
                        {formError}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-3 py-2 rounded-lg text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white text-slate-800 placeholder:text-slate-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full px-3 py-2 rounded-lg text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white text-slate-800 placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-3 py-2 rounded-lg text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white text-slate-800 placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Solution Required
                        </label>
                        <select
                          value={formData.solution}
                          onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white text-slate-800"
                        >
                          <option value="Smart Internet Leased Line">Smart Internet Leased Line</option>
                          <option value="Smartflo Cloud Telephony">Smartflo Cloud Telephony</option>
                          <option value="Managed SD-WAN / MPLS">Managed SD-WAN / MPLS</option>
                          <option value="SIP Trunk & Toll-Free">SIP Trunk & Toll-Free</option>
                          <option value="Cyber Security Suite">Cyber Security Suite</option>
                          <option value="WhatsApp Business Platform">WhatsApp Business API</option>
                          <option value="Microsoft 365 / Google Workspace">M365 / Google Workspace</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Location / City
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Noida, Delhi NCR"
                          className="w-full px-3 py-2 rounded-lg text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white text-slate-800 placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={formSubmitting}
                        className="w-full justify-center bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-2.5 rounded-lg shadow-md transition-all gap-2"
                      >
                        {formSubmitting ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Request Call Back Now</span>
                          </>
                        )}
                      </Button>
                    </div>

                    <p className="text-[10px] text-slate-500 text-center leading-tight pt-1">
                      🔒 Zero spam. Official TTBS authorized partner feasibility desk.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 hidden sm:flex items-center justify-center shadow-lg hover:scale-105"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 hidden sm:flex items-center justify-center shadow-lg hover:scale-105"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Slide Indicators (Dots / Bars) */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {SLIDES.map((slide, idx) => {
            const isCurrent = idx === currentSlide;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Jump to slide ${idx + 1}: ${slide.title}`}
                className={`transition-all duration-300 rounded-full ${
                  isCurrent
                    ? "w-8 sm:w-10 h-2.5 bg-brand-cyan shadow-md shadow-sky-500/50"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
