import * as React from "react";
import { cn } from "../../lib/cn";

export function Badge({ className, variant = "default", ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "secondary" | "outline" }) {
  const variants = {
    default: "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900",
    secondary: "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white",
    outline: "border border-neutral-300 dark:border-neutral-700",
  } as const;
  return <span className={cn("inline-flex items-center rounded-xl px-2.5 py-1 text-xs", variants[variant], className)} {...props} />;
}