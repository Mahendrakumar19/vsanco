import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4 bg-surface-muted">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-card border border-border shadow-card">
        <span className="text-4xl font-extrabold text-brand-blue">404</span>
        <h1 className="text-2xl font-bold text-ink mt-3">Page Not Found</h1>
        <p className="text-sm text-muted mt-2 leading-relaxed">
          The page or solution you are looking for might have been updated, moved, or is temporarily unavailable.
        </p>

        <div className="pt-6 space-y-3">
          <Button href="/" className="w-full gap-2">
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Button>
          <Button href="/solutions" variant="outline" className="w-full gap-2">
            <Search className="w-4 h-4" />
            <span>Browse Solutions Directory</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
