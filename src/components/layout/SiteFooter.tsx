import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink, ShieldAlert } from "lucide-react";
import { SOLUTION_CATEGORIES } from "@/content/solutions";
import { VsancoLogo, TataTeleLogo } from "@/components/ui/Logos";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-navy text-slate-300 pt-16 pb-12 border-t border-navy-light mt-auto">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-light/60">
          {/* Brand & Partner Summary Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <VsancoLogo variant="light" />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed pr-6">
              Vsanco Technologies is an authorized partner of Tata Tele Business Services
              (TTBS), delivering enterprise-grade Internet Leased Lines, Smartflo Cloud
              Telephony, IVR solutions, and private networking to organizations across
              India.
            </p>

            <div className="pt-2">
              <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 inline-flex items-center gap-3">
                <span className="text-[11px] font-semibold text-slate-300">
                  Authorised Partner of:
                </span>
                <TataTeleLogo variant="white" size="sm" />
              </div>
            </div>

            <div className="pt-2 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Sales & Feasibility: 1800-266-1800 / +91-98710-00000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Enterprise Inquiries: sales@vsanco.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span>
                  Regus, Logix City Centre, Sector 32 (Near Noida City Centre Metro Station),
                  Noida, Uttar Pradesh 201301, India
                </span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm">
              {SOLUTION_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/solutions/${cat.slug}`}
                    className="hover:text-brand-cyan transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/solutions"
                  className="text-brand-cyan font-medium hover:underline inline-flex items-center gap-1"
                >
                  All Solutions Index →
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              By Industry
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/industries/it-ites"
                  className="hover:text-brand-cyan transition-colors"
                >
                  IT & Software Services
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/bfsi-fintech"
                  className="hover:text-brand-cyan transition-colors"
                >
                  BFSI & FinTech
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/healthcare"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Healthcare & Hospitals
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/manufacturing"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Manufacturing & Supply Chain
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/education"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Education & EdTech
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/retail-ecommerce"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Retail & E-Commerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Legal Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-cyan transition-colors">
                  About Vsanco Technologies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-brand-cyan transition-colors">
                  Knowledge Base & Guides
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-brand-cyan transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-cyan transition-colors">
                  Noida Office & Feasibility
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-brand-cyan transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-cyan transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/partner-disclaimer"
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                  Partner & Brand Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Channel Partner Disclaimer Callout */}
        <div className="py-6 my-6 border-b border-navy-light/60 bg-navy-dark/70 rounded-xl p-4 sm:p-5 text-xs text-slate-300 leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-slate-200">
              Important Channel Partner and Intellectual Property Disclaimer:
            </p>
            <p>
              Vsanco Technologies is an independent, authorized channel partner marketing solutions
              provided by Tata Tele Business Services (Tata Teleservices Limited / Tata
              Teleservices (Maharashtra) Limited). Vsanco Technologies is not Tata Tele Business
              Services itself, nor a subsidiary or joint venture of the Tata Group. Tata,
              Tata Tele Business Services, TTBS, Smartflo, and associated logos and product
              names are registered trademarks of their respective owners. Final service
              feasibility, delivery, service level agreements, and billing are subject to
              direct contracting with Tata Teleservices Limited.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Official TTBS Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-2">
          <p>© {new Date().getFullYear()} Vsanco Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.tatatelebusiness.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Visit Official TTBS Corporate Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
