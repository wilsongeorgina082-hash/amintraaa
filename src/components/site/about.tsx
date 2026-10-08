import Image from "next/image";
import { Reveal } from "./reveal";

/**
 * About Me — large editorial portrait + the founder's story,
 * told simply, like one person talking to one business owner.
 */
export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden border-t border-line/70 bg-white"
    >
      <div className="relative mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-20">
          {/* ——— Founder portrait ——— */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <figure className="relative">
              {/* Sky-blue accent — quiet brand echo behind the portrait */}
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 z-0 h-20 w-20 rounded-lg bg-sky-400 md:-right-4 md:-top-4 md:h-24 md:w-24"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 z-0 h-full w-full rounded-lg border border-line"
              />
              <div className="relative z-10 overflow-hidden rounded-lg border border-ink/10 shadow-[0_36px_70px_-44px_rgba(23,33,43,0.55)]">
                <Image
                  src="/founder.jpg"
                  alt="The founder of Amintra, wearing a rich burgundy outfit in a warm, softly lit room"
                  width={1122}
                  height={1402}
                  sizes="(min-width: 1024px) 38vw, (min-width: 640px) 70vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="relative z-10 mt-5 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-sky-500" />
                <span className="meta-label text-muted-ink">
                  The founder of Amintra
                </span>
              </figcaption>
            </figure>
          </div>

          {/* ——— Story ——— */}
          <div className="max-w-[40rem]">
            <Reveal>
              <p className="meta-label text-sky-700">About me</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                id="about-heading"
                className="mt-4 text-balance text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-[1.14] tracking-[-0.02em] text-ink"
              >
                I am here to make the website part easier for you.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[18px] font-medium text-sky-800">
                I am the person behind Amintra.
              </p>
            </Reveal>

            <div className="mt-7 space-y-5 text-[16px] leading-[1.75] text-muted-ink">
              <Reveal delay={0.12}>
                <p className="text-[17px] leading-[1.7] text-ink/85">
                  I started Amintra because I know that getting a website can
                  feel like a lot.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p>
                  You already have a business to run. You have customers to
                  serve, work to finish, and many things that need your
                  attention.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p>
                  Then there is the website. Suddenly, you have to think about
                  design, pages, domains, hosting, forms, mobile screens, and
                  all the small things that come with getting online. It can
                  feel like one more problem to carry.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="text-[17px] leading-[1.7] text-ink/85">
                  That is why I built Amintra. I want to make this part easier
                  for you.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  I take the time to understand your business, what you offer,
                  who you serve, and what you want your website to do. Then I
                  turn that into a website that fits your business instead of
                  forcing your business into a ready-made template. I also
                  help with the part behind the scenes, from your domain and
                  hosting to getting the site live.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p>
                  You do not need to become a web expert. You do not need to
                  spend your time learning tools that have nothing to do with
                  running your business. You tell me what you need, and I help
                  you bring it to life.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <p>
                  I care about more than making a website look good. I want
                  your website to help people understand your business, trust
                  what you offer, and know what to do next.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <p className="text-[17px] leading-[1.7] text-ink/85">
                  Because your website is part of your business. It should
                  help you move forward. That is the thinking behind Amintra.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.28}>
              <p className="mt-9 border-l-2 border-sky-400 pl-5 text-[clamp(1.15rem,2vw,1.45rem)] font-medium leading-[1.4] tracking-[-0.01em] text-ink">
                You focus on the business. I will help with the website.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
