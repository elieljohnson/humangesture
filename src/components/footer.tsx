import { LogoWordmark } from "@/components/logo-wordmark";

const LINKEDIN_HREF = "https://www.linkedin.com/in/elieljohnson";

export function Footer() {
  return (
    <footer className="border-t border-text-primary/10 bg-bg-primary">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-4 py-6 md:flex-row md:items-end md:justify-between md:gap-6 md:px-6">
        <div className="text-center md:text-left">
          <LogoWordmark className="justify-center md:justify-start" />
          <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
            Copyright © 2026 Eliel Johnson · Handmade with help from agents
          </p>
        </div>
        <a
          href={LINKEDIN_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-sm text-text-primary transition-colors hover:text-accent-dark md:text-right"
        >
          LinkedIn
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </div>
    </footer>
  );
}
