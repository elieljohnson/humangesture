import Image from "next/image";

export function Founder() {
  return (
    <section
      id="about"
      className="scroll-mt-6 bg-bg-primary px-4 py-10 md:px-6 md:py-12 lg:py-[60px]"
      aria-labelledby="origin-label"
    >
      <div className="mx-auto grid max-w-content gap-5 md:grid-cols-2 md:items-start md:gap-6">
        <figure className="w-full md:max-w-none">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden bg-text-primary/[0.06] md:mx-0 md:max-w-none lg:aspect-[3/2]">
            <Image
              src="/hero-eliel.png"
              alt="Eliel Johnson at an event, portrait with natural light"
              fill
              className="object-cover object-[center_25%]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </figure>
        <div className="flex min-w-0 flex-col space-y-3 md:space-y-4">
          <p
            id="origin-label"
            className="text-xs font-bold uppercase tracking-[0.1em] text-accent-dark md:text-sm"
          >
            Origin story
          </p>
          <p className="text-lg font-medium leading-relaxed text-text-primary md:text-xl">
            I started this because I needed the room and it didn&apos;t exist.
          </p>
          <p className="text-base leading-relaxed text-text-primary md:text-lg md:leading-relaxed">
            I&apos;m Eliel Johnson, design executive, founder of the CVS AI
            Design Lab, and someone who never stopped building things.
            Twenty-five years leading design at scale taught me that the judgment
            layer is what matters. Right now, that judgment is exactly what&apos;s
            under pressure.
          </p>
          <p className="text-base font-bold leading-relaxed text-text-primary md:text-lg md:leading-relaxed">
            Human Gesture is the community that emerged from those conversations.
          </p>
        </div>
      </div>
    </section>
  );
}
