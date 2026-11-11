"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
} from "lucide-react";
import { SOLUTIONS_DATA } from "@/content/solutions";
import { Badge } from "@/components/ui/Badge";

export const SolutionsCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 360;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const carouselSlugs = [
    "smart-internet-leased-line",
    "smartflo-cloud-telephony",
    "managed-sd-wan",
    "sip-trunk",
    "toll-free-services",
    "cyber-security-services",
    "whatsapp-business-platform",
    "microsoft-365",
  ];

  const carouselSolutions = carouselSlugs
    .map((slug) => SOLUTIONS_DATA[slug])
    .filter(Boolean);

  return (
    <section className="py-16 sm:py-20 bg-surface border-b border-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              Brixbyte-Style Enterprise Portfolio Slider
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              Popular Tata Tele Business Services
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Explore certified enterprise telecom, cloud communication, and managed network solutions with guaranteed SLAs.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous Solutions"
              className="p-2.5 rounded-full border border-slate-300 hover:border-brand-blue hover:bg-blue-50 text-slate-600 hover:text-brand-blue transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next Solutions"
              className="p-2.5 rounded-full border border-slate-300 hover:border-brand-blue hover:bg-blue-50 text-slate-600 hover:text-brand-blue transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Carousel Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {carouselSolutions.map((sol) => (
            <div
              key={sol.slug}
              className="w-[300px] sm:w-[340px] shrink-0 snap-start bg-white rounded-2xl border border-slate-200 hover:border-brand-blue/50 p-6 flex flex-col justify-between shadow-subtle hover:shadow-card transition-all group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="blue">
                    {sol.categoryName}
                  </Badge>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    TTBS Certified
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-ink group-hover:text-brand-blue transition-colors leading-snug mb-2">
                  <Link href={`/solutions/${sol.slug}`}>{sol.name}</Link>
                </h3>

                {/* Short Description */}
                <p className="text-xs text-slate-600 line-clamp-3 mb-5 leading-relaxed">
                  {sol.shortSummary}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                  {sol.businessBenefits.slice(0, 3).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="text-xs font-bold text-brand-blue hover:text-brand-blue-dark inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`/request-a-quote?solution=${encodeURIComponent(sol.name)}`}
                  className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-blue-50 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
