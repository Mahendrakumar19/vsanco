import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Server,
  PhoneCall,
  MessageSquare,
  Globe,
  Zap,
  Building2,
  Stethoscope,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Factory,
} from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnerTrustStrip } from "@/components/sections/PartnerTrustStrip";
import { QuickFeasibilityCheck } from "@/components/sections/QuickFeasibilityCheck";
import { SolutionCategoryGrid } from "@/components/sections/SolutionCategoryGrid";
import { SolutionFinderWizard } from "@/components/sections/SolutionFinderWizard";
import { HowEngagementWorks } from "@/components/sections/HowEngagementWorks";
import { ComparisonMatrix } from "@/components/sections/ComparisonMatrix";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FAQ_DATA } from "@/content/faqs";

export default function HomePage() {
  const homeFaqs = FAQ_DATA.flatMap((g) => g.items).slice(0, 5);

  const businessChallenges = [
    {
      title: "Shared Broadband Dropping During Work Hours",
      description:
        "High contention ratios cause video calls to freeze, file transfers to stall, and CRM timeouts.",
      solutionName: "Smart Internet Leased Line",
      solutionHref: "/solutions/smart-internet-leased-line",
      solutionOutcome: "1:1 dedicated symmetric bandwidth backed by 99.5%+ uptime SLA.",
    },
    {
      title: "Clunky Hardware EPABX & Lost Customer Inquiries",
      description:
        "Physical desk phones cannot support remote reps, lack IVR agility, and provide zero CRM visibility.",
      solutionName: "Smartflo Cloud Telephony",
      solutionHref: "/solutions/smartflo-cloud-telephony",
      solutionOutcome: "Web & mobile softphones, intelligent IVR, call recording, and CRM sync.",
    },
    {
      title: "Low Email Open Rates & DLT Registration Headaches",
      description:
        "Critical notifications get lost in spam folders and enterprise SMS requires complex TRAI DLT compliance.",
      solutionName: "WhatsApp Business API & Smart SMS",
      solutionHref: "/solutions/whatsapp-business-platform",
      solutionOutcome: "Official WhatsApp messaging with 80%+ open rates and hands-on DLT support.",
    },
    {
      title: "Managing Unreliable Multi-Branch & Factory Networks",
      description:
        "Connecting disparate retail branches or manufacturing plants across India leads to billing chaos and downtime.",
      solutionName: "Managed SD-WAN & MPLS",
      solutionHref: "/solutions/managed-sd-wan",
      solutionOutcome: "Dynamic traffic routing with sub-second failover and centralized cloud NOC visibility.",
    },
  ];

  const industryTiles = [
    {
      name: "IT & ITeS",
      slug: "it-ites",
      icon: <Briefcase className="w-5 h-5 text-brand-blue" />,
      tag: "Software & BPOs",
    },
    {
      name: "BFSI & FinTech",
      slug: "bfsi-fintech",
      icon: <ShieldCheck className="w-5 h-5 text-brand-blue" />,
      tag: "High Compliance",
    },
    {
      name: "Healthcare",
      slug: "healthcare",
      icon: <Stethoscope className="w-5 h-5 text-brand-blue" />,
      tag: "24x7 Patient Care",
    },
    {
      name: "Manufacturing",
      slug: "manufacturing",
      icon: <Factory className="w-5 h-5 text-brand-blue" />,
      tag: "Plant & Logistics",
    },
    {
      name: "Education",
      slug: "education",
      icon: <GraduationCap className="w-5 h-5 text-brand-blue" />,
      tag: "Campus Networks",
    },
    {
      name: "Retail & E-Com",
      slug: "retail-ecommerce",
      icon: <ShoppingBag className="w-5 h-5 text-brand-blue" />,
      tag: "Store POS & WhatsApp",
    },
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Partner Trust Strip */}
      <PartnerTrustStrip />

      {/* 2b. Instant Feasibility Checker (Inspired by Brixbyte / TTBS) */}
      <QuickFeasibilityCheck />

      {/* 3. Business Challenges to Solutions Mapping */}
      <section className="py-16 sm:py-24 bg-white border-b border-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Engineered For Reliability
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mt-1.5">
              Solve Mission-Critical Telecommunications Bottlenecks
            </h2>
            <p className="text-base text-muted mt-2">
              Every offering in our portfolio maps directly to an operational business challenge faced by Indian enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessChallenges.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-muted/50 border border-border rounded-card p-6 sm:p-8 flex flex-col justify-between hover:border-brand-blue/60 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                      Operational Challenge
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-border/80 bg-white -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-card">
                  <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider block mb-1">
                    Certified TTBS Resolution:
                  </span>
                  <div className="text-sm font-bold text-ink mb-1">
                    {item.solutionName}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {item.solutionOutcome}
                  </p>
                  <Link
                    href={item.solutionHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-hover"
                  >
                    <span>Read Solution Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Solutions Grid */}
      <SolutionCategoryGrid limit={6} />

      {/* 5. Featured Spotlight: Smartflo Cloud Telephony */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-navy via-navy to-navy-dark text-white relative overflow-hidden">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <Badge variant="cyan" className="bg-sky-400/20 text-sky-200 border-sky-400/30">
                Featured Flagship Offering
              </Badge>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Modernize Business Telephony with Smartflo Cloud Communication
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Smartflo replaces rigid physical EPABX boards and expensive line cards with an intelligent, cloud-hosted voice ecosystem. Equip your sales, support, and executive teams to make and receive calls from any computer or mobile phone with automated CRM synchronization.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Native Salesforce & Zoho CRM Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Intelligent Visual IVR Designer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>100% Cloud Call Recording</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Live Supervisor Whispering & Barging</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Button
                  href="/request-a-quote?solution=smartflo-cloud-telephony"
                  size="md"
                  variant="cyan"
                  className="gap-2"
                >
                  <span>Request Smartflo Demo & Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  href="/solutions/smartflo-cloud-telephony"
                  size="md"
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Explore Capabilities
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 border border-white/15 rounded-card p-6 backdrop-blur-md">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-cyan mb-3">
                Live Capability Snapshot
              </div>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between">
                  <span>Call Setup Latency</span>
                  <span className="font-mono font-bold text-emerald-300">&lt; 150 ms</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between">
                  <span>Concurrent Channels</span>
                  <span className="font-mono font-bold text-sky-200">Scalable to 1000+</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between">
                  <span>Agent Deployment Mode</span>
                  <span className="font-mono font-bold text-white">Browser / Mobile App</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between">
                  <span>Call Data Sovereignty</span>
                  <span className="font-mono font-bold text-emerald-300">100% Hosted in India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Technical Benchmark & Comparison Matrix (Inspired by Brixbyte & TTBS) */}
      <ComparisonMatrix />

      {/* 6. Interactive Solution Finder Wizard */}
      <SolutionFinderWizard />

      {/* 7. How Engagement Works */}
      <HowEngagementWorks />

      {/* 8. Industries Grid */}
      <section className="py-16 sm:py-24 bg-surface-muted/50 border-t border-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                Tailored By Vertical
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mt-1">
                Solutions Grounded in Sector Needs
              </h2>
            </div>
            <Link
              href="/industries"
              className="text-xs sm:text-sm font-bold text-brand-blue hover:underline inline-flex items-center gap-1"
            >
              <span>View All Industries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industryTiles.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="bg-white border border-border rounded-xl p-5 hover:border-brand-blue hover:shadow-card transition-all text-center flex flex-col items-center justify-between group"
              >
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-brand-blue group-hover:text-white transition-colors mb-3">
                  {ind.icon}
                </div>
                <h3 className="font-bold text-sm text-ink group-hover:text-brand-blue transition-colors">
                  {ind.name}
                </h3>
                <span className="text-[11px] text-muted mt-1">{ind.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={homeFaqs} />
          <div className="text-center mt-8">
            <Link
              href="/faqs"
              className="text-xs sm:text-sm font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
            >
              <span>Have more questions? Read our full FAQ Knowledge Base</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Closing CTA */}
      <ClosingCTA />
    </>
  );
}
