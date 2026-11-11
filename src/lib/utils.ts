import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  // Normalize whitespace and common separators
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  return cleaned;
}
