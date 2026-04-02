export function PullQuote() {
  return (
    <section
      className="w-full bg-bg-section px-4 pb-10 pt-2 md:px-6 md:pb-12 md:pt-3 lg:pb-[60px] lg:pt-4"
      aria-labelledby="mandate-heading"
    >
      <div className="mx-auto max-w-content">
        <div className="max-w-3xl border-l border-text-primary/25 pl-6 text-left md:pl-8 md:max-w-4xl">
          <p
            id="mandate-heading"
            className="text-xs font-bold uppercase tracking-[0.1em] text-accent-dark md:text-sm"
          >
            The mandate
          </p>
          <blockquote className="mt-3 md:mt-4">
            <p className="text-[1.5rem] font-bold leading-snug tracking-tight text-text-primary sm:text-2xl md:text-3xl md:leading-[1.2] lg:text-4xl lg:leading-[1.15]">
              The price of admission is simple:
              <br />
              show up with something you&apos;re building.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
