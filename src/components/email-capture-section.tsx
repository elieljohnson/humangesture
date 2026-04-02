import { JoinForm } from "@/components/join-form";

export function EmailCaptureSection() {
  return (
    <section
      id="connect"
      className="mt-auto scroll-mt-6 border-t border-text-primary/10 bg-bg-primary px-4 py-10 md:px-6 md:py-12 lg:py-[60px]"
      aria-labelledby="join-heading"
    >
      <div className="mx-auto max-w-content text-center">
        <h2
          id="join-heading"
          className="text-2xl font-bold tracking-tight text-text-primary md:text-3xl"
        >
          Join the list.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-text-secondary md:mt-4 md:text-lg">
          Monthly conversations for practitioners. Occasional notes from Eliel on
          what he&apos;s reading, building, and thinking about. First call coming
          soon.
        </p>
        <JoinForm />
      </div>
    </section>
  );
}
