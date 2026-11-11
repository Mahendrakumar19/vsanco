import React from "react";
import Link from "next/link";
import {
  Network,
  PhoneCall,
  MessageSquare,
  Users,
  Cloud,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Check,
} from "lucide-react";
import { SOLUTION_CATEGORIES, SOLUTIONS_DATA } from "@/content/solutions";
import { Badge } from "@/components/ui/Badge";

const categoryIcons: Record<string, React.ReactNode> = {
  Network: <Network className="w-6 h-6 text-brand-blue" />,
  PhoneCall: <PhoneCall className="w-6 h-6 text-brand-blue" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-brand-blue" />,
  Users: <Users className="w-6 h-6 text-brand-blue" />,
  Cloud: <Cloud className="w-6 h-6 text-brand-blue" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-blue" />,
  Cpu: <Cpu className="w-6 h-6 text-brand-blue" />,
};

interface SolutionCategoryGridProps {
  limit?: number;
  showAllLink?: boolean;
}

export const SolutionCategoryGrid: React.FC<SolutionCategoryGridProps> = ({
  limit,
  showAllLink = true,
}) => {
  const displayedCategories = limit
    ? SOLUTION_CATEGORIES.slice(0, limit)
    : SOLUTION_CATEGORIES;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="blue" className="mb-3">
            Authorized TTBS Portfolio
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Enterprise Solutions Grounded in Official TTBS Capability
          </h2>
          <p className="text-base text-muted mt-3 leading-relaxed">
            Translate complex telecommunications offerings into dependable business
            outcomes. Browse approved categories or consult our certified engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCategories.map((cat) => (
            <div
              key={cat.slug}
              className="bg-white border border-border rounded-card p-6 sm:p-7 shadow-card hover:shadow-hover transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    {categoryIcons[cat.iconName]}
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    {cat.solutions.length} Products
                  </span>
                </div>

                <h3 className="text-lg font-bold text-ink group-hover:text-brand-blue transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs font-medium text-brand-blue mt-0.5">
                  {cat.headline}
                </p>
                <p className="text-sm text-muted mt-2.5 leading-relaxed">
                  {cat.description}
                </p>

                <div className="mt-5 pt-4 border-t border-border space-y-2">
                  <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider block mb-2">
                    Key Offerings:
                  </span>
                  {cat.solutions.slice(0, 3).map((solSlug) => {
                    const sol = SOLUTIONS_DATA[solSlug];
                    if (!sol) return null;
                    return (
                      <Link
                        key={solSlug}
                        href={`/solutions/${solSlug}`}
                        className="flex items-center gap-2 text-xs text-slate-700 hover:text-brand-blue hover:underline transition-colors"
                      >
                        <Check className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                        <span className="truncate">{sol.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <Link
                  href={`/solutions/${cat.slug}`}
                  className="text-xs font-bold text-brand-blue group-hover:text-brand-hover inline-flex items-center gap-1.5"
                >
                  <span>Explore Category</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={`/request-a-quote?solution=${encodeURIComponent(cat.slug)}`}
                  className="text-xs font-medium text-slate-500 hover:text-ink transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {showAllLink && limit && limit < SOLUTION_CATEGORIES.length && (
          <div className="text-center mt-12">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 font-bold text-sm text-brand-blue hover:text-brand-hover"
            >
              <span>View All 7 TTBS Solution Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
