import { Lock } from "lucide-react";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   Realistic browser-frame website previews.
   Pure CSS mini-sites sized with container-query units (cqw) so each
   preview stays proportionally correct at any width. These represent
   example project concepts, not real clients.
------------------------------------------------------------------- */

export function BrowserFrame({
  url,
  label,
  children,
  className = "",
  aspect = "aspect-[16/11]",
}: {
  url: string;
  label: string;
  children: ReactNode;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`@container relative overflow-hidden rounded-lg border border-ink/10 bg-white shadow-[0_30px_60px_-28px_rgba(33,26,22,0.35),0_10px_24px_-14px_rgba(33,26,22,0.22)] ${className}`}
    >
      {/* Chrome */}
      <div className="flex items-center gap-2.5 border-b border-ink/[0.07] bg-[#faf7f2] px-3.5 py-[9px]">
        <div className="flex gap-[4px]" aria-hidden="true">
          <span className="size-[8px] rounded-full bg-[#ddaba3]" />
          <span className="size-[8px] rounded-full bg-[#e7d0a4]" />
          <span className="size-[8px] rounded-full bg-[#a9c9ad]" />
        </div>
        <div className="mx-auto flex w-[52%] items-center justify-center gap-1.5 rounded-md bg-white px-2.5 py-[4px] ring-1 ring-ink/[0.06]">
          <Lock className="size-[8px] text-taupe" aria-hidden="true" />
          <span className="truncate text-[9px] tracking-wide text-taupe">
            {url}
          </span>
        </div>
        <div className="w-9" aria-hidden="true" />
      </div>
      {/* Website content — cropped by aspect */}
      <div className={`relative w-full overflow-hidden ${aspect}`}>
        {children}
      </div>
    </div>
  );
}

/* ------------------------------ Restaurant ------------------------------ */

export function RestaurantSite() {
  return (
    <div className="h-full bg-[#241a12] text-[#f3ead9]">
      <div className="flex items-center justify-between px-[4cqw] pb-[2.4cqw] pt-[3cqw]">
        <span className="font-display text-[2.7cqw] leading-none">
          Juniper <span className="text-ember-400">&amp;</span> Vine
        </span>
        <nav
          className="flex items-center gap-[2.6cqw] text-[1.3cqw] font-medium text-[#f3ead9]/65"
          aria-hidden="true"
        >
          <span>Menu</span>
          <span>Private dining</span>
          <span>Find us</span>
        </nav>
        <span className="rounded-full border border-[#f3ead9]/35 px-[2.4cqw] py-[1.05cqw] text-[1.25cqw] font-semibold">
          Reserve
        </span>
      </div>

      <div className="grid grid-cols-[1.02fr_0.98fr] items-center gap-[3cqw] px-[4cqw] pt-[1cqw]">
        <div>
          <p className="text-[1.1cqw] font-bold uppercase tracking-[0.3em] text-ember-400">
            Open fire · Seasonal
          </p>
          <p className="mt-[1.6cqw] font-display text-[4.2cqw] leading-[1.02]">
            Cooking over fire, <span className="italic">served with care</span>.
          </p>
          <p className="mt-[1.8cqw] max-w-[88%] text-[1.4cqw] leading-[1.55] text-[#f3ead9]/65">
            A neighbourhood kitchen and wine room in the old print works — big
            flavours, low waste, warm service.
          </p>
          <div className="mt-[2.6cqw] flex items-center gap-[2.2cqw]">
            <span className="rounded-full bg-ember-500 px-[3cqw] py-[1.35cqw] text-[1.35cqw] font-semibold text-white transition-colors duration-200 hover:bg-ember-600">
              Book a table
            </span>
            <span className="text-[1.35cqw] font-semibold text-[#f3ead9]/85 underline decoration-ember-400/60 underline-offset-4">
              View menu
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[0.86] w-full overflow-hidden rounded-md bg-[radial-gradient(120%_100%_at_20%_15%,#e8a366_0%,#c85c32_42%,#5f2c14_100%)]">
            <div className="absolute left-1/2 top-1/2 aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f3ead9]/40" />
            <div className="absolute left-1/2 top-1/2 aspect-square w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3ead9]/15" />
            <div className="absolute -left-[10%] top-[6%] size-[42%] rounded-full bg-[#f6d8b8]/30 blur-[2.4cqw]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[2cqw] px-[4cqw] pb-[4cqw] pt-[3.2cqw]">
        {["Dinner, Wed–Sun", "Private dining room", "Natural wine list"].map(
          (item) => (
            <div
              key={item}
              className="rounded-md border border-[#f3ead9]/15 px-[2.2cqw] py-[1.9cqw]"
            >
              <p className="text-[1.3cqw] font-semibold">{item}</p>
              <div className="mt-[1.2cqw] h-[2px] w-[42%] rounded bg-ember-500/70" />
            </div>
          ),
        )}
      </div>
    </div>
  );
}

/* ------------------------------ Real estate ------------------------------ */

export function RealEstateSite() {
  return (
    <div className="h-full bg-[#f6f1e7] text-[#221c15]">
      <div className="flex items-center justify-between px-[4cqw] pb-[2.4cqw] pt-[3cqw]">
        <span className="font-display text-[2.7cqw] leading-none">
          Marlowe <span className="text-ember-500">&amp;</span> Co.
        </span>
        <nav
          className="flex items-center gap-[2.6cqw] text-[1.3cqw] font-medium text-[#221c15]/60"
          aria-hidden="true"
        >
          <span>Buy</span>
          <span>Sell</span>
          <span>Valuations</span>
          <span>About</span>
        </nav>
        <span className="rounded-full bg-[#221c15] px-[2.6cqw] py-[1.15cqw] text-[1.25cqw] font-semibold text-[#f6f1e7]">
          Book a valuation
        </span>
      </div>

      <div className="grid grid-cols-[1.05fr_0.95fr] items-center gap-[3cqw] px-[4cqw] pt-[1cqw]">
        <div>
          <p className="text-[1.1cqw] font-bold uppercase tracking-[0.3em] text-ember-600">
            Buy · Sell · Value
          </p>
          <p className="mt-[1.6cqw] font-display text-[4.3cqw] leading-[1.02]">
            Homes with character, handled with{" "}
            <span className="italic">care</span>.
          </p>
          <p className="mt-[1.8cqw] max-w-[86%] text-[1.4cqw] leading-[1.55] text-[#221c15]/60">
            Independent estate agency for period homes and considered modern
            living, across the city and its green edges.
          </p>
          <div className="mt-[2.6cqw] flex items-center gap-[2.2cqw]">
            <span className="rounded-full bg-[#221c15] px-[3cqw] py-[1.35cqw] text-[1.35cqw] font-semibold text-[#f6f1e7] transition-opacity duration-200 hover:opacity-85">
              View listings
            </span>
            <span className="text-[1.35cqw] font-semibold text-[#221c15]/80 underline decoration-ember-500/50 underline-offset-4">
              Sell with us
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[0.9] w-full overflow-hidden rounded-md bg-[linear-gradient(160deg,#8b9377_0%,#5c6650_55%,#3c4434_100%)]">
            <div className="absolute inset-x-[10%] bottom-0 top-[38%] rounded-t-[999px] bg-[#f6f1e7]/18" />
            <div className="absolute inset-[8%] rounded-md border border-[#f6f1e7]/25" />
            <div className="absolute -right-[8%] top-[-6%] size-[46%] rounded-full bg-[#e9e2cf]/35 blur-[2.2cqw]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[2cqw] px-[4cqw] pb-[4cqw] pt-[3.2cqw]">
        {["3 bed · Garden flat", "4 bed · Terrace house", "2 bed · Mews"].map(
          (item) => (
            <div
              key={item}
              className="overflow-hidden rounded-md bg-white ring-1 ring-[#221c15]/[0.07]"
            >
              <div className="h-[5.4cqw] w-full bg-[linear-gradient(140deg,#d8cdb4_0%,#a8a58a_60%,#6d7258_100%)]" />
              <div className="px-[1.8cqw] py-[1.6cqw]">
                <p className="text-[1.3cqw] font-semibold">{item}</p>
                <p className="mt-[0.7cqw] text-[1.15cqw] text-[#221c15]/55">
                  Guide price on request
                </p>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

/* ------------------------------ Consulting ------------------------------ */

export function ConsultingSite() {
  return (
    <div className="h-full bg-white text-[#1d1a17]">
      <div className="flex items-center justify-between px-[4cqw] pb-[2.2cqw] pt-[2.8cqw]">
        <span className="flex items-baseline gap-[1cqw]">
          <span className="text-[2.2cqw] font-extrabold tracking-[-0.02em]">
            Northpoint
          </span>
          <span className="text-[1.1cqw] font-bold uppercase tracking-[0.24em] text-ember-600">
            Advisory
          </span>
        </span>
        <nav
          className="flex items-center gap-[2.6cqw] text-[1.3cqw] font-medium text-[#1d1a17]/60"
          aria-hidden="true"
        >
          <span>Approach</span>
          <span>Sectors</span>
          <span>Insights</span>
          <span>Contact</span>
        </nav>
        <span className="rounded-full border border-[#1d1a17]/25 px-[2.4cqw] py-[1.05cqw] text-[1.25cqw] font-semibold">
          Start a project
        </span>
      </div>

      <div className="grid grid-cols-[1.08fr_0.92fr] items-center gap-[3.4cqw] px-[4cqw] pt-[1.2cqw]">
        <div>
          <p className="text-[1.1cqw] font-bold uppercase tracking-[0.3em] text-ember-600">
            Strategy &amp; operations
          </p>
          <p className="mt-[1.6cqw] font-display text-[4.5cqw] leading-[1.0]">
            Clear advice for <span className="italic">complex</span> decisions.
          </p>
          <p className="mt-[1.8cqw] max-w-[88%] text-[1.4cqw] leading-[1.55] text-[#1d1a17]/60">
            We help owners and leadership teams plan with confidence — from
            first diagnosis to practical, measurable change.
          </p>
          <div className="mt-[2.6cqw] flex items-center gap-[2.2cqw]">
            <span className="rounded-full bg-[#1d1a17] px-[3cqw] py-[1.35cqw] text-[1.35cqw] font-semibold text-white transition-opacity duration-200 hover:opacity-85">
              Book a consultation
            </span>
            <span className="text-[1.35cqw] font-semibold text-[#1d1a17]/80 underline decoration-ember-500/50 underline-offset-4">
              Our approach
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[1.4cqw]">
          {["Strategy", "Operations", "Growth", "People"].map((item, i) => (
            <div
              key={item}
              className="rounded-md border border-[#1d1a17]/12 px-[2cqw] py-[2.4cqw]"
            >
              <p className="text-[1.1cqw] font-bold text-ember-600">
                0{i + 1}
              </p>
              <p className="mt-[1cqw] text-[1.5cqw] font-semibold">{item}</p>
              <div className="mt-[1.4cqw] h-[2px] w-[38%] rounded bg-[#1d1a17]/15" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-[2cqw] px-[4cqw] pt-[3.2cqw]">
        <span className="text-[1.15cqw] font-bold uppercase tracking-[0.22em] text-[#1d1a17]/45">
          Sectors
        </span>
        {["Retail", "Healthcare", "Logistics", "Professional services"].map(
          (s) => (
            <span key={s} className="text-[1.3cqw] font-medium text-[#1d1a17]/70">
              {s}
            </span>
          ),
        )}
      </div>

      <div className="grid grid-cols-3 gap-[2cqw] px-[4cqw] pb-[4cqw] pt-[2.4cqw]">
        {["Diagnosis", "Roadmap", "Delivery"].map((item, i) => (
          <div
            key={item}
            className="rounded-md bg-[#f6f1e7] px-[2.2cqw] py-[1.9cqw] ring-1 ring-[#1d1a17]/[0.06]"
          >
            <p className="text-[1.1cqw] font-bold text-ember-600">
              0{i + 1}
            </p>
            <p className="mt-[0.8cqw] text-[1.35cqw] font-semibold">{item}</p>
            <div className="mt-[1.2cqw] h-[2px] w-[42%] rounded bg-[#1d1a17]/15" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Beauty ------------------------------ */

export function BeautySite() {
  return (
    <div className="h-full bg-[#f4ebe3] text-[#2b2019]">
      <div className="flex items-center justify-between px-[4cqw] pb-[2.4cqw] pt-[3cqw]">
        <span className="font-display text-[2.9cqw] italic leading-none">
          Lumen
        </span>
        <nav
          className="flex items-center gap-[2.6cqw] text-[1.3cqw] font-medium text-[#2b2019]/60"
          aria-hidden="true"
        >
          <span>Skin</span>
          <span>Hair</span>
          <span>Nails</span>
          <span>Studio</span>
        </nav>
        <span className="rounded-full bg-[#2b2019] px-[2.6cqw] py-[1.15cqw] text-[1.25cqw] font-semibold text-[#f4ebe3]">
          Book
        </span>
      </div>

      <div className="grid grid-cols-[1.05fr_0.95fr] items-center gap-[3cqw] px-[4cqw] pt-[1cqw]">
        <div>
          <p className="text-[1.1cqw] font-bold uppercase tracking-[0.3em] text-ember-600">
            Skin · Hair · Nails
          </p>
          <p className="mt-[1.6cqw] font-display text-[4.4cqw] leading-[1.02]">
            Quiet luxury for your{" "}
            <span className="italic text-ember-600">everyday</span>.
          </p>
          <p className="mt-[1.8cqw] max-w-[86%] text-[1.4cqw] leading-[1.55] text-[#2b2019]/60">
            A calm studio in the heart of town — considered treatments, honest
            advice and unhurried appointments.
          </p>
          <div className="mt-[2.6cqw] flex items-center gap-[2.2cqw]">
            <span className="rounded-full bg-ember-500 px-[3cqw] py-[1.35cqw] text-[1.35cqw] font-semibold text-white transition-colors duration-200 hover:bg-ember-600">
              Book an appointment
            </span>
            <span className="text-[1.35cqw] font-semibold text-[#2b2019]/80 underline decoration-ember-500/50 underline-offset-4">
              Treatment list
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[0.88] w-full overflow-hidden rounded-t-full bg-[linear-gradient(170deg,#efc9b8_0%,#d99a83_45%,#9c5f52_100%)]">
            <div className="absolute inset-[8%] rounded-t-full border border-white/30" />
            <div className="absolute -left-[12%] top-[10%] size-[52%] rounded-full bg-white/35 blur-[2.2cqw]" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-[1.6cqw] px-[4cqw] pb-[4cqw] pt-[3.2cqw]">
        {["Facials", "Cut & colour", "Manicure", "Bridal"].map((chip) => (
          <span
            key={chip}
            className="rounded-full bg-white px-[2.2cqw] py-[1cqw] text-[1.3cqw] font-semibold ring-1 ring-[#2b2019]/[0.08]"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Local service ------------------------------ */

export function LocalServiceSite() {
  return (
    <div className="h-full bg-[#26231c] text-[#efe9dc]">
      <div className="flex items-center justify-between px-[4cqw] pb-[2.4cqw] pt-[3cqw]">
        <span className="text-[2.2cqw] font-extrabold tracking-[0.08em]">
          IRONLINE
        </span>
        <nav
          className="flex items-center gap-[2.6cqw] text-[1.3cqw] font-medium text-[#efe9dc]/65"
          aria-hidden="true"
        >
          <span>Projects</span>
          <span>Services</span>
          <span>About</span>
        </nav>
        <span className="rounded-full border border-[#efe9dc]/35 px-[2.4cqw] py-[1.05cqw] text-[1.25cqw] font-semibold">
          Get a quote
        </span>
      </div>

      <div className="grid grid-cols-[1.04fr_0.96fr] items-center gap-[3cqw] px-[4cqw] pt-[1cqw]">
        <div>
          <p className="text-[1.1cqw] font-bold uppercase tracking-[0.3em] text-ember-400">
            Landscaping · Stonework
          </p>
          <p className="mt-[1.6cqw] font-display text-[4.4cqw] leading-[1.02]">
            Outdoor spaces, built to{" "}
            <span className="italic text-ember-400">last</span>.
          </p>
          <p className="mt-[1.8cqw] max-w-[86%] text-[1.4cqw] leading-[1.55] text-[#efe9dc]/65">
            Design and build for gardens, patios and driveways — quoted
            properly, scheduled clearly, finished with pride.
          </p>
          <div className="mt-[2.6cqw] flex items-center gap-[2.2cqw]">
            <span className="rounded-full bg-ember-500 px-[3cqw] py-[1.35cqw] text-[1.35cqw] font-semibold text-white transition-colors duration-200 hover:bg-ember-600">
              Get a quote
            </span>
            <span className="text-[1.35cqw] font-semibold text-[#efe9dc]/85 underline decoration-ember-400/60 underline-offset-4">
              Recent projects
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[0.9] w-full overflow-hidden rounded-md bg-[linear-gradient(155deg,#7a8261_0%,#57624a_48%,#333b2b_100%)]">
            <div className="absolute inset-x-[8%] bottom-[-12%] h-[46%] rounded-t-[999px] bg-[#26231c]/55" />
            <div className="absolute -left-[8%] top-[-8%] size-[48%] rounded-full bg-[#c9cf9f]/25 blur-[2.4cqw]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[2cqw] px-[4cqw] pb-[4cqw] pt-[3.2cqw]">
        {["Patios & terraces", "Driveways", "Full garden design"].map(
          (item) => (
            <div
              key={item}
              className="rounded-md border border-[#efe9dc]/15 px-[2.2cqw] py-[1.9cqw]"
            >
              <p className="text-[1.3cqw] font-semibold">{item}</p>
              <div className="mt-[1.2cqw] h-[2px] w-[42%] rounded bg-ember-500/80" />
            </div>
          ),
        )}
      </div>
    </div>
  );
}

/* ------------------------------ Phone frame ------------------------------ */

export function PhoneFrame({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`@container relative ${className}`}>
      <div
        role="img"
        aria-label={label}
        className="relative aspect-[9/19] w-full overflow-hidden rounded-[9cqw] bg-[#141210] p-[2.4cqw] shadow-[0_36px_70px_-34px_rgba(33,26,22,0.55)] ring-1 ring-ink/20"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[6.6cqw] bg-white">
          {/* Dynamic island */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[2.1cqw] z-20 h-[2.3cqw] w-[19cqw] -translate-x-1/2 rounded-full bg-[#141210]"
          />
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------- Mobile: restaurant ------------------------- */

export function RestaurantMobile() {
  return (
    <div className="h-full bg-[#241a12] text-[#f3ead9]">
      <div className="flex items-center justify-between px-[6cqw] pb-[3cqw] pt-[8.5cqw]">
        <span className="font-display text-[4.6cqw] leading-none">
          Juniper <span className="text-ember-400">&amp;</span> Vine
        </span>
        <span className="flex flex-col gap-[1.1cqw]" aria-hidden="true">
          <span className="h-[0.5cqw] w-[5.5cqw] rounded bg-[#f3ead9]/80" />
          <span className="h-[0.5cqw] w-[5.5cqw] rounded bg-[#f3ead9]/80" />
        </span>
      </div>

      <div className="px-[6cqw] pt-[1.5cqw]">
        <p className="text-[2cqw] font-bold uppercase tracking-[0.28em] text-ember-400">
          Open fire · Seasonal
        </p>
        <p className="mt-[2.2cqw] font-display text-[8.6cqw] leading-[1.02]">
          Cooking over fire, <span className="italic">served with care</span>.
        </p>
        <p className="mt-[2.6cqw] text-[3cqw] leading-[1.55] text-[#f3ead9]/65">
          A neighbourhood kitchen and wine room in the old print works.
        </p>
        <span className="mt-[3.6cqw] inline-block rounded-full bg-ember-500 px-[7cqw] py-[2.6cqw] text-[3cqw] font-semibold text-white transition-colors duration-200 hover:bg-ember-600">
          Book a table
        </span>
      </div>

      <div className="mt-[4.5cqw] px-[6cqw]">
        <div className="relative aspect-[1.18] w-full overflow-hidden rounded-[2cqw] bg-[radial-gradient(120%_100%_at_20%_15%,#e8a366_0%,#c85c32_42%,#5f2c14_100%)]">
          <div className="absolute left-1/2 top-1/2 aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f3ead9]/40" />
          <div className="absolute -left-[10%] top-[6%] size-[44%] rounded-full bg-[#f6d8b8]/30 blur-[3cqw]" />
        </div>
      </div>

      <div className="px-[6cqw] pb-[6cqw] pt-[4.5cqw]">
        <p className="text-[2cqw] font-bold uppercase tracking-[0.28em] text-[#f3ead9]/50">
          This week
        </p>
        {["Charred leeks, hazelnut butter", "Wood-fired chicken, jus"].map(
          (item) => (
            <div
              key={item}
              className="mt-[2.6cqw] flex items-center justify-between border-b border-[#f3ead9]/12 pb-[2.6cqw]"
            >
              <span className="text-[3.1cqw] font-medium">{item}</span>
              <span
                aria-hidden="true"
                className="h-[2px] w-[6cqw] rounded bg-ember-500/70"
              />
            </div>
          ),
        )}
        <p className="mt-[3.4cqw] text-[2.7cqw] font-medium text-[#f3ead9]/55">
          Walk-ins welcome · Wed to Sun
        </p>
      </div>
    </div>
  );
}

/* --------------------------- Mobile: beauty --------------------------- */

export function BeautyMobile() {
  return (
    <div className="h-full bg-[#f4ebe3] text-[#2b2019]">
      <div className="flex items-center justify-between px-[6cqw] pb-[3cqw] pt-[8.5cqw]">
        <span className="font-display text-[5.4cqw] italic leading-none">
          Lumen
        </span>
        <span className="flex flex-col gap-[1.1cqw]" aria-hidden="true">
          <span className="h-[0.5cqw] w-[5.5cqw] rounded bg-[#2b2019]/80" />
          <span className="h-[0.5cqw] w-[5.5cqw] rounded bg-[#2b2019]/80" />
        </span>
      </div>

      <div className="px-[6cqw] pt-[1.5cqw]">
        <p className="text-[2cqw] font-bold uppercase tracking-[0.28em] text-ember-600">
          Skin · Hair · Nails
        </p>
        <p className="mt-[2.2cqw] font-display text-[8.8cqw] leading-[1.02]">
          Quiet luxury for your{" "}
          <span className="italic text-ember-600">everyday</span>.
        </p>
        <p className="mt-[2.6cqw] text-[3cqw] leading-[1.55] text-[#2b2019]/60">
          Considered treatments, honest advice and unhurried appointments.
        </p>
        <span className="mt-[3.6cqw] inline-block rounded-full bg-ember-500 px-[7cqw] py-[2.6cqw] text-[3cqw] font-semibold text-white transition-colors duration-200 hover:bg-ember-600">
          Book an appointment
        </span>
      </div>

      <div className="mt-[4.5cqw] px-[6cqw]">
        <div className="relative aspect-[0.92] w-full overflow-hidden rounded-t-full bg-[linear-gradient(170deg,#efc9b8_0%,#d99a83_45%,#9c5f52_100%)]">
          <div className="absolute inset-[8%] rounded-t-full border border-white/30" />
          <div className="absolute -left-[12%] top-[10%] size-[52%] rounded-full bg-white/35 blur-[2.2cqw]" />
        </div>
      </div>

      <div className="mt-[4.5cqw] flex flex-wrap gap-[1.8cqw] px-[6cqw]">
        {["Facials", "Cut & colour", "Manicure", "Bridal"].map((chip) => (
          <span
            key={chip}
            className="rounded-full bg-white px-[3.4cqw] py-[1.7cqw] text-[2.7cqw] font-semibold ring-1 ring-[#2b2019]/10"
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="px-[6cqw] pb-[6cqw] pt-[4.5cqw]">
        <p className="text-[2cqw] font-bold uppercase tracking-[0.28em] text-[#2b2019]/50">
          Popular treatments
        </p>
        {[
          ["Signature facial", "60 min"],
          ["Cut & finish", "75 min"],
        ].map(([name, time]) => (
          <div
            key={name}
            className="mt-[2.8cqw] flex items-center justify-between rounded-[2cqw] bg-white px-[4cqw] py-[3.2cqw] ring-1 ring-[#2b2019]/[0.07]"
          >
            <span className="text-[3.1cqw] font-semibold">{name}</span>
            <span className="text-[2.7cqw] font-medium text-[#2b2019]/55">
              {time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------- Mobile: fashion --------------------------- */

export function FashionMobile() {
  return (
    <div className="h-full bg-[#161311] text-[#f5f1ea]">
      <div className="flex items-center justify-between px-[6cqw] pb-[3cqw] pt-[8.5cqw]">
        <span className="font-display text-[4.2cqw] leading-none tracking-[0.14em]">
          ATELIER NORD
        </span>
        <span className="flex flex-col gap-[1.1cqw]" aria-hidden="true">
          <span className="h-[0.5cqw] w-[5.5cqw] rounded bg-[#f5f1ea]/80" />
          <span className="h-[0.5cqw] w-[5.5cqw] rounded bg-[#f5f1ea]/80" />
        </span>
      </div>

      <div className="px-[6cqw] pt-[2cqw] text-left">
        <p className="text-[2cqw] font-bold uppercase tracking-[0.3em] text-ember-400">
          New collection
        </p>
        <p className="mt-[2cqw] font-display text-[10cqw] leading-[1.0]">
          The <span className="italic">Autumn</span> Edit.
        </p>
        <span className="mt-[3.4cqw] inline-block rounded-full bg-[#f5f1ea] px-[7cqw] py-[2.6cqw] text-[3cqw] font-semibold text-[#161311] transition-colors duration-200 hover:bg-white">
          Shop the collection
        </span>
      </div>

      <div className="grid grid-cols-2 gap-[2.4cqw] px-[6cqw] pt-[4.5cqw]">
        {[
          ["Wool overcoat", "linear-gradient(165deg,#4a423b_0%,#2b2622_70%,#1c1916_100%)"],
          ["Silk scarf", "linear-gradient(165deg,#d9c9b4_0%,#b09a7f_60%,#8a7357_100%)"],
          ["Knit sweater", "linear-gradient(165deg,#8a5a44_0%,#5f3a2b_60%,#3c241a_100%)"],
          ["Linen shirt", "linear-gradient(165deg,#6e675e_0%,#4a443c_60%,#2e2a25_100%)"],
        ].map(([name, gradient]) => (
          <div key={name}>
            <div
              className="aspect-[0.78] w-full overflow-hidden rounded-[1.8cqw]"
              style={{ background: gradient }}
            />
            <p className="mt-[1.8cqw] text-[2.8cqw] font-semibold">{name}</p>
          </div>
        ))}
      </div>

      <div className="mx-[6cqw] mb-[5cqw] mt-[4cqw] rounded-[2cqw] bg-[#221d19] p-[4cqw]">
        <p className="font-display text-[3.6cqw] leading-[1.1]">
          The <span className="italic text-ember-400">Winter</span> preview.
        </p>
        <p className="mt-[1.4cqw] text-[2.6cqw] leading-[1.5] text-[#f5f1ea]/60">
          Join the list for first access.
        </p>
        <span className="mt-[2.6cqw] inline-block rounded-full border border-[#f5f1ea]/40 px-[4cqw] py-[1.7cqw] text-[2.6cqw] font-semibold">
          Join the list
        </span>
      </div>
    </div>
  );
}

/* ------------------------------ Fashion ------------------------------ */

export function FashionSite() {
  return (
    <div className="h-full bg-[#161311] text-[#f5f1ea]">
      <div className="flex items-center justify-between px-[4cqw] pb-[2.4cqw] pt-[3cqw]">
        <span className="font-display text-[2.6cqw] leading-none tracking-[0.14em]">
          ATELIER NORD
        </span>
        <nav
          className="flex items-center gap-[2.6cqw] text-[1.3cqw] font-medium text-[#f5f1ea]/60"
          aria-hidden="true"
        >
          <span>Collection</span>
          <span>Lookbook</span>
          <span>Stockists</span>
        </nav>
        <span className="rounded-full border border-[#f5f1ea]/35 px-[2.4cqw] py-[1.05cqw] text-[1.25cqw] font-semibold">
          Shop
        </span>
      </div>

      <div className="px-[4cqw] pt-[1.4cqw] text-center">
        <p className="text-[1.1cqw] font-bold uppercase tracking-[0.34em] text-ember-400">
          New collection
        </p>
        <p className="mt-[1.4cqw] font-display text-[4.8cqw] leading-[1.0]">
          The <span className="italic">Autumn</span> Edit.
        </p>
        <div className="mt-[2.4cqw] flex items-center justify-center gap-[2.2cqw]">
          <span className="rounded-full bg-[#f5f1ea] px-[3cqw] py-[1.35cqw] text-[1.35cqw] font-semibold text-[#161311] transition-colors duration-200 hover:bg-white">
            Shop the collection
          </span>
          <span className="text-[1.35cqw] font-semibold text-[#f5f1ea]/85 underline decoration-ember-400/60 underline-offset-4">
            View lookbook
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[2cqw] px-[4cqw] pb-[4cqw] pt-[3cqw]">
        {[
          ["Wool overcoat", "linear-gradient(165deg,#4a423b_0%,#2b2622_70%,#1c1916_100%)"],
          ["Silk scarf", "linear-gradient(165deg,#d9c9b4_0%,#b09a7f_60%,#8a7357_100%)"],
          ["Cashmere knit", "linear-gradient(165deg,#8a5a44_0%,#5f3a2b_60%,#3c241a_100%)"],
        ].map(([name, gradient]) => (
          <div key={name}>
            <div
              className="aspect-[0.68] w-full overflow-hidden rounded-md"
              style={{ background: gradient }}
            />
            <p className="mt-[1.2cqw] text-center text-[1.4cqw] font-semibold">
              {name}
            </p>
            <p className="mt-[0.5cqw] text-center text-[1.15cqw] text-[#f5f1ea]/55">
              New season
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
