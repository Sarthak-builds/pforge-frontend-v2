import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* This file defines a utility function `cn` that standardizes how CSS class names are combined and resolved in a project using Tailwind CSS.

* It imports `clsx`, which takes multiple class name inputs of different types and converts them into a single space-separated string while ignoring invalid or falsy values.
* It imports `twMerge`, which understands Tailwind CSS rules and removes conflicting or duplicate utility classes, keeping only the correct final ones.

The function `cn(...inputs: ClassValue[])`:

* Accepts any number of class name inputs (strings, arrays, objects, conditionals, etc.) with proper TypeScript typing via `ClassValue`.
* Passes those inputs to `clsx` to normalize them into one class string.
* Then passes that result to `twMerge` to resolve Tailwind-specific conflicts.
* Returns the final optimized class string.

In essence, it is a small wrapper that combines flexible class handling (`clsx`) with Tailwind-aware conflict resolution (`tailwind-merge`) into a single reusable function.
*/