"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, HelpCircle, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQ_DATA, FAQGroup } from "@/content/faqs";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Button } from "@/components/ui/Button";

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "0-0": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter groups and items
  const filteredGroups = FAQ_DATA.map((group) => {
    if (selectedCategory !== "all" && group.categorySlug !== selectedCategory) {
      return null;
    }

    const filteredItems = group.items.filter((item) => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
      );
    });

    if (filteredItems.length === 0) return null;

    return {
      ...group,
      items: filteredItems,
    };
  }).filter(Boolean) as FAQGroup[];

  return (
    <>
      <div className="bg-surface-muted border-b border-border py-4">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />
        </div>
      </div>

      {/* Header */}
      <section className="bg-navy text-white py-16 sm:py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              Find transparent answers regarding Tata Tele Business Services partner
              designation, site feasibility surveys, billing policies, SLAs, and technical
              provisioning.
            </p>

            {/* Search Input */}
            <div className="mt-8 relative max-w-xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword (e.g. SLA, feasibility, Smartflo, DLT, billing)..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-ink text-sm shadow-lg border border-border focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Categorized Accordion Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-border">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                selectedCategory === "all"
                  ? "bg-brand-blue text-white"
                  : "bg-surface-muted text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Topics
            </button>
            {FAQ_DATA.map((g) => (
              <button
                key={g.categorySlug}
                type="button"
                onClick={() => setSelectedCategory(g.categorySlug)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  selectedCategory === g.categorySlug
                    ? "bg-brand-blue text-white"
                    : "bg-surface-muted text-slate-600 hover:bg-slate-200"
                }`}
              >
                {g.category}
              </button>
            ))}
          </div>

          {/* Render Groups */}
          {filteredGroups.length === 0 ? (
            <div className="text-center py-16 bg-surface-muted rounded-card border border-border">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="font-bold text-ink">No matching questions found</h3>
              <p className="text-xs text-muted mt-1">
                Try searching with different terms or contact our sales specialists directly.
              </p>
              <Button href="/contact" size="sm" className="mt-4">
                Contact Advisory Desk
              </Button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredGroups.map((group, gIdx) => (
                <div key={group.categorySlug} className="space-y-4">
                  <h2 className="text-xl font-bold text-ink border-l-4 border-brand-blue pl-3">
                    {group.category}
                  </h2>

                  <div className="space-y-3">
                    {group.items.map((item, itemIdx) => {
                      const itemId = `${gIdx}-${itemIdx}`;
                      const isOpen = !!openItems[itemId];

                      return (
                        <div
                          key={itemIdx}
                          className="border border-border rounded-xl bg-white overflow-hidden shadow-subtle transition-colors"
                        >
                          <button
                            type="button"
                            onClick={() => toggleItem(itemId)}
                            className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-ink hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:bg-surface-muted"
                            aria-expanded={isOpen}
                          >
                            <span>{item.question}</span>
                            <ChevronDown
                              className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                                isOpen ? "rotate-180 text-brand-blue" : ""
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-border/50 bg-slate-50/40">
                              {item.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
