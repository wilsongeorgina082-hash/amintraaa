import { Reveal } from "./reveal";

const AI_ITEMS = [
  {
    title: "AI Chatbots",
    body: "Help visitors get answers, find information and know what to do next.",
  },
  {
    title: "AI Automation",
    body: "Help with repeat tasks such as follow-ups, notifications and enquiries.",
  },
];

/**
 * AI & Automation — a focused, text-first interlude. No dashboards,
 * no technical graphics. The section explains when AI helps and when
 * it does not, then hands the decision back to the business owner.
 */
export function AiAutomation() {
  return (
    <section
      id="ai-automation"
      aria-labelledby="ai-heading"
      className="border-y border-line/70 bg-surface/60"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[40rem] text-center">
          <Reveal>
            <p className="meta-label text-sky-700">AI &amp; Automation</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="ai-heading"
              className="mt-4 text-balance text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-[1.14] tracking-[-0.02em] text-ink"
            >
              Your website can do more when your business needs more.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-[16.5px] leading-[1.7] text-muted-ink">
              A website gives people somewhere to go. Sometimes you also need
              help with the work that happens after they arrive.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-4 text-[16.5px] leading-[1.7] text-muted-ink">
              Maybe people ask the same questions again and again. Maybe new
              enquiries need a quick reply. Maybe you want some repeat work to
              happen without doing it yourself every time. That is where AI
              and automation can help.
            </p>
          </Reveal>
        </div>

        {/* Two quiet offers — thin separators, no cards, no icons */}
        <div className="mx-auto mt-12 grid max-w-[52rem] gap-x-12 gap-y-8 sm:grid-cols-2 md:mt-14">
          {AI_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <div className="border-t border-line pt-5">
                <h3 className="text-[18px] font-medium tracking-[-0.01em] text-ink md:text-[19px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-muted-ink">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing message + final line */}
        <div className="mx-auto mt-12 max-w-[34rem] text-center md:mt-14">
          <Reveal>
            <p className="text-[16px] leading-[1.7] text-muted-ink">
              I do not add AI just because it is popular. I use it when it can
              make things easier for you or your customers.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-[clamp(1.25rem,2.2vw,1.6rem)] font-medium leading-[1.35] tracking-[-0.01em] text-ink">
              Website first. <span className="text-sky-700">AI where it helps.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
