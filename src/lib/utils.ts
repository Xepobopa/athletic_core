import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Merge Tailwind classes without duplicates
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
