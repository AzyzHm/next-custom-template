/**
 * Merge Tailwind class names conditionally, filtering out falsy values.
 * Kept dependency-free (no clsx/tailwind-merge) to keep the template minimal;
 * swap in `clsx` + `tailwind-merge` if your project grows more complex class logic.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
