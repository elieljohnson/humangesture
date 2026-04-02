import type { ComponentPropsWithoutRef } from "react";

type LogoWordmarkProps = ComponentPropsWithoutRef<"a">;

/**
 * Wordmark from Figma node 1:93 — IBM Plex Sans 20 / 28, tracking -0.5px,
 * slash Bold accent-mid (#d2691e), words Medium text-primary.
 * @see https://www.figma.com/design/BS4QBzePuswaPeSIZdgxo1/?node-id=1-93
 */
export function LogoWordmark({
  className = "",
  href = "/",
  ...props
}: LogoWordmarkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-[2px] text-[20px] font-medium lowercase leading-[28px] tracking-[-0.5px] text-text-primary transition-opacity hover:opacity-80 ${className}`}
      {...props}
    >
      <span className="font-medium">human</span>
      <span className="font-bold text-accent-mid">/</span>
      <span className="font-medium">gesture</span>
    </a>
  );
}
