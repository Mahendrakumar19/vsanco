"use client";

import { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Application Error]:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4 bg-surface-muted">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-card border border-border shadow-card">
        <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h1 className="text-xl font-bold text-ink">Something went wrong</h1>
        <p className="text-sm text-muted mt-2 leading-relaxed">
          An unexpected operational error occurred while rendering this page.
        </p>

        <div className="pt-6">
          <Button onClick={() => reset()} className="w-full gap-2">
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
