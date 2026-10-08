import { Reveal } from "./reveal";

const SERVICES = [
  {
    number: "01",
    title: "Website Design",
    body: "A clean and thoughtful design built around your business.",
  },
  {
    number: "02",
    title: "Website Build",
    body: "A working website made for phones, tablets and computers.",
  },
  {
    number: "03",
    title: "Domain Setup",
    body: "Your domain is set up in your own name.",
  },
  {
    number: "04",
    title: "Hosting Setup",
    body: "I help you choose a suitable place to host your website.",
  },
  {
    number: "05",
    title: "Website Updates",
    body: "I can help keep your website up to date as your business changes.",
  },
];

/**
 * What You Get — simple editorial list with thin separators.
 */
export function Services() {
  return (
    <section
      id="what-you-get"
      aria-labelledby="services-heading"
      className="border-y border-line/70 bg-surface/60"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="meta-label text-sky-700">What you get</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="services-heading"
                className="mt-4 text-balance text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-[1.14] tracking-[-0.02em] text-ink"
              >
                I take care of the website. You stay focused on the business.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-[26rem] text-[16.5px] leading-[1.7] text-muted-ink">
                I learn about your business, shape the website around it, and
                help you get everything online.
              </p>
            </Reveal>
          </div>

          <div>
            {SERVICES.map((service, i) => (
              <Reveal key={service.number} delay={0.05 * i}>
                <div className="group border-t border-line/90 py-6 last:border-b md:py-7">
                  <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 md:grid-cols-[64px_minmax(0,1fr)] md:gap-x-8">
                    <span
                      aria-hidden="true"
                      className="text-[13px] font-semibold leading-none text-sky-600"
                    >
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-[19px] font-medium tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-sky-700 md:text-[21px]">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 max-w-[30rem] text-[14.5px] leading-[1.65] text-muted-ink">
                        {service.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
