const pillars = [
  {
    id: "01",
    title: "Intentional Acts",
    body: "Design has always been the discipline of making choices on behalf of other people. That doesn't change when AI is doing more of the making. It gets more important.",
  },
  {
    id: "02",
    title: "Radical Agency",
    body: "The leaders in the room are the ones still making things themselves. Not simply managing people who make things.",
  },
  {
    id: "03",
    title: "Continuous Craft",
    body: "Taste compounds. Judgment compounds. The practitioners who stay close to the work, across every tool generation, are the ones whose instincts you can trust.",
  },
] as const;

export function Pillars() {
  return (
    <section
      id="pillars"
      className="scroll-mt-6 bg-bg-section px-4 py-10 md:px-6 md:py-12 lg:py-[60px]"
      aria-labelledby="pillars-heading"
    >
      <div className="mx-auto max-w-content">
        <p
          id="pillars-heading"
          className="text-xs font-bold uppercase tracking-[0.1em] text-accent-dark md:text-sm"
        >
          What we care about
        </p>
        <div className="mt-5 grid gap-6 md:mt-7 md:grid-cols-3 md:gap-4">
          {pillars.map((pillar) => (
            <article key={pillar.id} className="flex flex-col">
              <h3 className="text-xl font-bold leading-snug text-text-primary md:text-2xl">
                <span className="block text-2xl md:text-3xl">
                  <span className="text-text-primary">{pillar.id}</span>
                  <span className="text-accent-dark">/</span>
                </span>
                {pillar.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-text-primary md:mt-3">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
