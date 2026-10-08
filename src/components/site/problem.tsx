import { Reveal } from "./reveal";

/**
 * Problem — text-first editorial. No cards, no icons.
 */
export function Problem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="bg-pearl"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="meta-label text-sky-700">The problem</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="problem-heading"
                className="mt-4 text-balance text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-[1.14] tracking-[-0.02em] text-ink"
              >
                Your business has enough to worry about. Your website should
                not be one of them.
              </h2>
            </Reveal>
          </div>
          <div className="lg:pt-1">
            <Reveal delay={0.14}>
              <p className="max-w-[30rem] text-[17px] leading-[1.7] text-muted-ink md:text-[18px]">
                You should not have to become a web expert just to get a good
                website. You should not have to deal with confusing setup,
                large agency fees, or things you do not need.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-[30rem] border-l-2 border-sky-400 pl-4 text-[17px] font-medium leading-[1.6] text-ink md:text-[18px]">
                Tell me what you need. I will help you sort the rest.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
