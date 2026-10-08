import { MoveDown } from "lucide-react";
import { Reveal } from "./reveal";

/**
 * Domain & Hosting — "Keep control". After launch the client pays the
 * domain and hosting provider directly, not Amintra. Simple vertical
 * flow: your domain, your hosting, your website.
 */
export function DomainHosting() {
  return (
    <section
      id="domain-hosting"
      aria-labelledby="domain-hosting-heading"
      className="border-y border-line/70 bg-surface/70"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="meta-label text-sky-700">Keep control</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="domain-hosting-heading"
                className="mt-4 text-balance text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-[1.14] tracking-[-0.02em] text-ink"
              >
                Your website should not become another monthly bill.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-[30rem] text-[16.5px] leading-[1.7] text-muted-ink">
                I build the website, help set it up, connect your domain, and
                get it online. After launch, you do not pay Amintra a monthly
                hosting fee for suitable website projects.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-[30rem] text-[16.5px] leading-[1.7] text-muted-ink">
                You pay your domain and hosting provider directly. Your domain
                stays in your own name. You keep control of the setup.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-5 max-w-[30rem] border-l-2 border-sky-400 pl-4 text-[16.5px] font-medium leading-[1.6] text-ink">
                For a basic domain, the yearly cost can sometimes be around
                $11, depending on the domain name, extension and provider.
              </p>
            </Reveal>
          </div>

          {/* Simple vertical flow: your domain, your hosting, your website */}
          <Reveal delay={0.12}>
            <div className="mx-auto flex w-full max-w-[22rem] flex-col items-stretch justify-center">
              <Node title="Your domain" />
              <Arrow />
              <Node title="Your hosting" />
              <Arrow />
              <Node title="Your website" accent />
            </div>
            <p className="mx-auto mt-7 max-w-[24rem] text-center text-[15px] leading-[1.65] text-muted-ink">
              Everything is set up in your own name, so your website stays
              yours.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Node({ title, accent = false }: { title: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-xl border px-6 py-5 text-center ${
        accent
          ? "border-sky-600 bg-sky-600 text-white shadow-[0_20px_44px_-26px_rgba(36,79,105,0.65)]"
          : "border-line bg-white text-ink"
      }`}
    >
      <p className="text-[15.5px] font-medium tracking-[-0.01em] md:text-[17px]">
        {title}
      </p>
    </div>
  );
}

function Arrow() {
  return (
    <div
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center py-1.5"
    >
      <MoveDown className="size-5 text-sky-600" strokeWidth={1.75} />
    </div>
  );
}
