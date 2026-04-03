import type { ReactNode } from "react";

type NavProps = {
  brand?: ReactNode;
  children?: ReactNode;
};

export function Nav({ brand, children }: NavProps) {
  return (
    <header className="border-b border-text-primary/10 bg-bg-primary">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-content items-center justify-between gap-6 px-4 py-4 md:px-6"
      >
        <div className="flex min-w-0 shrink-0 items-center">{brand}</div>
        <div className="flex shrink-0 flex-wrap items-center justify-end gap-4 md:gap-8">
          {children != null ? (
            <ul className="flex flex-wrap items-center justify-end gap-4 md:gap-8">
              {children}
            </ul>
          ) : null}
          <a
            href="#connect"
            className="hidden shrink-0 items-center justify-center whitespace-nowrap rounded-sm bg-accent-dark px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent-mid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark md:inline-flex"
          >
            Join the list
          </a>
        </div>
      </nav>
    </header>
  );
}
