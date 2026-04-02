export function Hero() {
  return (
    <section
      className="px-4 py-10 md:px-6 md:py-12 lg:py-[60px]"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-content text-center">
        <h1
          id="hero-heading"
          className="mx-auto max-w-4xl text-[2rem] font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl md:text-5xl md:leading-[1.1] lg:text-[4.5rem] lg:leading-[1.05] xl:text-[72px] xl:leading-[1.05]"
        >
          Human Gesture is a community for design leaders who are still{" "}
          <span className="text-accent-dark">building</span> things.
        </h1>
        <div className="mx-auto mt-4 flex w-full max-w-2xl flex-col gap-4 text-left md:mt-5">
          <div className="w-full opacity-90">
            <p className="m-0 text-pretty font-normal text-[24px] leading-[32px] text-text-primary">
              As AI generates more of what we interact with, the intentional
              human act — the one with a point of view behind it — becomes the
              scarce and valuable thing.
            </p>
          </div>
          <div className="w-full opacity-90">
            <p className="m-0 text-pretty font-normal text-[24px] leading-[32px] text-text-primary">
              Human Gesture exists at that intersection. It&apos;s where design
              leaders come to figure out what we protect, what we let go, and what
              craft means now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
