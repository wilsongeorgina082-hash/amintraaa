import { Reveal } from "./reveal";

const STEPS = [
  {
    number: "01",
    title: "Tell me what you need",
    body: "Tell me about your business and what you want your website to do.",
  },
  {
    number: "02",
    title: "I build the website",
    body: "I take what we discuss and turn it into the website.",
  },
  {
    number: "03",
    title: "You review it",
    body: "You look through the site and tell me what needs to change.",
  },
  {
    number: "04",
    title: "We launch",
    body: "I help connect everything and get the website live.",
  },
];

/**
 * How It Works — simple visual flow. Large numbers, short text,
 * thin separators.
 */
export function Process() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="process-heading"
      className="bg-pearl"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="max-w-[36rem]">
          <Reveal>
            <p className="meta-label text-sky-700">How it works</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="process-heading"
              className="mt-4 text-balance text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-[1.14] tracking-[-0.02em] text-ink"
            >
              Getting your website live can be simple.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={0.06 * i}>
              <div className="border-t border-line pt-5">
                <span
                  aria-hidden="true"
                  className="block text-[clamp(2.4rem,4vw,3.2rem)] font-medium leading-none tracking-[-0.02em] text-sky-300"
                >
                  {step.number}
                </span>
                <h3 className="mt-4 text-[17px] font-medium leading-[1.4] tracking-[-0.01em] text-ink md:text-[18px]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.6] text-muted-ink">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
