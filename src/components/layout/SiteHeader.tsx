"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ShieldCheck,
  Network,
  PhoneCall,
  MessageSquare,
  Users,
  Cloud,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SOLUTION_CATEGORIES } from "@/content/solutions";
import { VsancoLogo, TataTeleLogo } from "@/components/ui/Logos";

const iconMap: Record<string, React.ReactNode> = {
  Network: <Network className="w-5 h-5 text-brand-blue" />,
  PhoneCall: <PhoneCall className="w-5 h-5 text-brand-blue" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-brand-blue" />,
  Users: <Users className="w-5 h-5 text-brand-blue" />,
  Cloud: <Cloud className="w-5 h-5 text-brand-blue" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-brand-blue" />,
  Cpu: <Cpu className="w-5 h-5 text-brand-blue" />,
};

export const SiteHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname || "";
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSolutionsOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close solutions dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Top Partner Announcement Bar with Tata Tele Business Services Branding */}
      <div className="bg-navy text-slate-300 text-xs py-2 px-4 border-b border-navy-light/60">
        <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Vsanco Technologies</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-200">
              Authorised Partner Of TATA Tele Business Services
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href="https://wa.me/919871000000?text=Hello%20Vsanco%20Technologies,%20I%20would%20like%20to%20inquire%20about%20Tata%20Tele%20Business%20Services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>WhatsApp: +91-98710-00000</span>
            </a>
            <span className="hidden sm:inline text-slate-500">•</span>
            <a
              href="tel:18002661800"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-brand-cyan" />
              <span>Toll-Free: 1800-266-1800</span>
            </a>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-300">
              Noida Sector 32 Feasibility Desk
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md ${
          scrolled
            ? "shadow-sm border-b border-border/80 py-2.5"
            : "border-b border-border py-3.5"
        }`}
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Tata Tele Business Lockup */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/" aria-label="Vsanco Technologies Home">
              <VsancoLogo variant="dark" />
            </Link>

            {/* Original Tata Tele Business Services Logo Badge */}
            <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Authorised Partner
                </span>
                <TataTeleLogo variant="color" size="sm" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-ink">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath === "/"
                  ? "text-brand-blue bg-blue-50/50"
                  : "hover:text-brand-blue hover:bg-surface-muted"
              }`}
            >
              Home
            </Link>

            {/* Solutions Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                onMouseEnter={() => setSolutionsOpen(true)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  currentPath.startsWith("/solutions")
                    ? "text-brand-blue bg-blue-50/50"
                    : "hover:text-brand-blue hover:bg-surface-muted"
                }`}
                aria-expanded={solutionsOpen}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    solutionsOpen ? "rotate-180 text-brand-blue" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Desktop Mega Menu Dropdown */}
              {solutionsOpen && (
                <div
                  onMouseLeave={() => setSolutionsOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] bg-white rounded-card shadow-elevated border border-border p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="col-span-2 pb-3 mb-1 border-b border-border flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-ink text-sm">
                        Tata Tele Business Services Solutions
                      </h3>
                      <p className="text-xs text-muted">
                        Internet leased lines, cloud telephony, WhatsApp API, and cybersecurity
                      </p>
                    </div>
                    <Link
                      href="/solutions"
                      className="text-xs font-semibold text-brand-blue hover:underline flex items-center gap-1"
                    >
                      View All Solutions <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {SOLUTION_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/solutions/${cat.slug}`}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-surface-muted transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-blue-50 border border-blue-100/60 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        {iconMap[cat.iconName] || <Network className="w-5 h-5 text-brand-blue" />}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-ink group-hover:text-brand-blue transition-colors">
                          {cat.name}
                        </div>
                        <p className="text-xs text-muted line-clamp-1 mt-0.5">
                          {cat.headline}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/industries"
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath.startsWith("/industries")
                  ? "text-brand-blue bg-blue-50/50"
                  : "hover:text-brand-blue hover:bg-surface-muted"
              }`}
            >
              Industries
            </Link>

            <Link
              href="/resources"
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath.startsWith("/resources")
                  ? "text-brand-blue bg-blue-50/50"
                  : "hover:text-brand-blue hover:bg-surface-muted"
              }`}
            >
              Resources
            </Link>

            <Link
              href="/faqs"
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath === "/faqs"
                  ? "text-brand-blue bg-blue-50/50"
                  : "hover:text-brand-blue hover:bg-surface-muted"
              }`}
            >
              FAQs
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath === "/about"
                  ? "text-brand-blue bg-blue-50/50"
                  : "hover:text-brand-blue hover:bg-surface-muted"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath === "/contact"
                  ? "text-brand-blue bg-blue-50/50"
                  : "hover:text-brand-blue hover:bg-surface-muted"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="/request-a-quote" size="sm" variant="primary">
              Request a Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="/request-a-quote"
              size="sm"
              variant="primary"
              className="px-3 py-1.5 text-xs"
            >
              Quote
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ink hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Accordion Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-150">
            {/* Mobile Tata Tele Logo Lockup */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">Authorised Partner of:</span>
              <TataTeleLogo variant="color" size="sm" />
            </div>

            <div className="space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-lg font-medium text-ink hover:bg-surface-muted"
              >
                Home
              </Link>

              {/* Mobile Solutions Section */}
              <div className="py-2">
                <div className="px-3 text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                  Solutions
                </div>
                <div className="space-y-1 pl-2">
                  {SOLUTION_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/solutions/${cat.slug}`}
                      className="block px-3 py-1.5 text-sm text-ink hover:text-brand-blue font-medium rounded-lg hover:bg-surface-muted"
                    >
                      {cat.name}
                    </Link>
                  ))}
                  <Link
                    href="/solutions"
                    className="block px-3 py-1.5 text-sm font-semibold text-brand-blue"
                  >
                    All Solutions Overview →
                  </Link>
                </div>
              </div>

              <Link
                href="/industries"
                className="block px-3 py-2 rounded-lg font-medium text-ink hover:bg-surface-muted"
              >
                Solutions by Industry
              </Link>
              <Link
                href="/resources"
                className="block px-3 py-2 rounded-lg font-medium text-ink hover:bg-surface-muted"
              >
                Resources & Guides
              </Link>
              <Link
                href="/faqs"
                className="block px-3 py-2 rounded-lg font-medium text-ink hover:bg-surface-muted"
              >
                Frequently Asked Questions
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-lg font-medium text-ink hover:bg-surface-muted"
              >
                About Vsanco Technologies
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-lg font-medium text-ink hover:bg-surface-muted"
              >
                Contact & Feasibility Check
              </Link>
            </div>

            <div className="pt-3 border-t border-border">
              <Button href="/request-a-quote" className="w-full" size="md">
                Request a Formal Quotation
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
