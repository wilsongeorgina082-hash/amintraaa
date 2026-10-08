"use client";

import { useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "./reveal";
import {
  BeautyMobile,
  BeautySite,
  BrowserFrame,
  ConsultingSite,
  FashionMobile,
  FashionSite,
  LocalServiceSite,
  PhoneFrame,
  RealEstateSite,
  RestaurantMobile,
  RestaurantSite,
} from "./showcase";

type Project = {
  category: string;
  title: string;
  blurb: string;
  description: string;
  includes: string[];
  desktop: ReactNode;
  mobile?: ReactNode;
  mobileLabel?: string;
};

const PROJECTS: Project[] = [
  {
    category: "Restaurant",
    title: "Restaurant Website",
    blurb:
      "A clear and inviting website for menus, bookings and important details.",
    description:
      "A warm restaurant website with menu highlights, reservations, location and the story of the kitchen.",
    includes: ["Menu", "Reservations", "Location and hours", "Story"],
    desktop: (
      <BrowserFrame url="juniperandvine.com" label="Restaurant website preview">
        <RestaurantSite />
      </BrowserFrame>
    ),
    mobile: (
      <PhoneFrame label="Restaurant website, mobile preview">
        <RestaurantMobile />
      </PhoneFrame>
    ),
    mobileLabel: "On mobile",
  },
  {
    category: "Real Estate",
    title: "Real Estate Website",
    blurb:
      "A simple way for people to explore properties and make an enquiry.",
    description:
      "A clean property website with featured homes, easy browsing and a clear way to enquire.",
    includes: ["Featured listing", "Property cards", "Enquiry button"],
    desktop: (
      <BrowserFrame
        url="marloweandco.com"
        label="Real estate website preview"
        aspect="aspect-[16/12]"
      >
        <RealEstateSite />
      </BrowserFrame>
    ),
  },
  {
    category: "Beauty",
    title: "Beauty Website",
    blurb:
      "A polished online home for services, bookings and brand identity.",
    description:
      "A calm salon website with services, a gallery and booking that is always one tap away.",
    includes: ["Services", "Gallery", "Booking button"],
    desktop: (
      <BrowserFrame
        url="lumenstudio.com"
        label="Beauty business website preview"
        aspect="aspect-[16/12]"
      >
        <BeautySite />
      </BrowserFrame>
    ),
    mobile: (
      <PhoneFrame label="Beauty business website, mobile preview">
        <BeautyMobile />
      </PhoneFrame>
    ),
    mobileLabel: "On mobile",
  },
  {
    category: "Professional Services",
    title: "Professional Services Website",
    blurb:
      "A clear and trustworthy website that helps people understand the service.",
    description:
      "A clear professional website that explains services simply and makes contact easy.",
    includes: ["Services", "About", "Contact button"],
    desktop: (
      <BrowserFrame
        url="northpointadvisory.com"
        label="Consulting website preview"
        aspect="aspect-[16/12]"
      >
        <ConsultingSite />
      </BrowserFrame>
    ),
  },
  {
    category: "Local Business",
    title: "Local Business Website",
    blurb:
      "A practical website that makes the business easy to find and contact.",
    description:
      "A simple service website with clear offers, the service area and a quick way to get a quote.",
    includes: ["Services", "Service area", "Quote button"],
    desktop: (
      <BrowserFrame
        url="ironlinebuilds.com"
        label="Service business website preview"
        aspect="aspect-[16/12]"
      >
        <LocalServiceSite />
      </BrowserFrame>
    ),
  },
  {
    category: "Fashion",
    title: "Fashion Website",
    blurb:
      "A visual website designed to give the brand a strong online presence.",
    description:
      "An editorial fashion website with strong product presentation and refined typography.",
    includes: ["Product pages", "Lookbook", "Stockists"],
    desktop: (
      <BrowserFrame
        url="ateliernord.com"
        label="Fashion website preview"
        aspect="aspect-[16/12]"
      >
        <FashionSite />
      </BrowserFrame>
    ),
    mobile: (
      <PhoneFrame label="Fashion website, mobile preview">
        <FashionMobile />
      </PhoneFrame>
    ),
    mobileLabel: "On mobile",
  },
];

function ProjectVisual({
  project,
  phonePosition,
  onOpen,
  title,
  compact = false,
}: {
  project: Project;
  phonePosition?: "left" | "right";
  onOpen: () => void;
  title: string;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open a larger view of the ${title} preview`}
      className="group relative block w-full cursor-pointer rounded-lg text-left focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-sky-600"
    >
      <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
        {project.desktop}

        {project.mobile && phonePosition && (
          <div
            className={`absolute -bottom-[4%] z-20 transition-transform duration-500 ease-out group-hover:-translate-y-2 ${
              compact ? "w-[26%] min-w-[104px]" : "w-[21%] min-w-[120px]"
            } ${phonePosition === "right" ? "right-[2.5%]" : "left-[2.5%]"}`}
          >
            {project.mobile}
          </div>
        )}

        {/* Hover reveal bar */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex translate-y-3 items-center justify-between rounded-b-lg bg-espresso/90 px-5 py-3.5 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 text-[13px] font-medium text-white/90">
            <Maximize2 aria-hidden="true" className="size-3.5" />
            Open larger view
          </span>
          <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-sky-300">
            View project
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </span>
        </div>
      </div>
    </button>
  );
}

function ProjectMeta({
  project,
  index,
  compact = false,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline gap-4 border-t border-line pt-4 sm:gap-5 ${
        compact ? "mt-4" : "mt-6 md:mt-8"
      }`}
    >
      <span
        aria-hidden="true"
        className="text-[13px] font-semibold text-sky-600"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <p className="meta-label text-muted-ink">{project.category}</p>
        <h3
          className={`mt-1.5 font-medium tracking-[-0.01em] text-ink ${
            compact ? "text-[17px]" : "text-[20px] md:text-[22px]"
          }`}
        >
          {project.title}
        </h3>
        {!compact && (
          <p className="mt-1.5 max-w-[32rem] text-[15px] leading-[1.6] text-muted-ink">
            {project.blurb}
          </p>
        )}
      </div>
    </div>
  );
}

export function Work() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const current = openIndex !== null ? PROJECTS[openIndex] : null;

  return (
    <section id="work" aria-labelledby="work-heading" className="relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8 md:py-24 lg:px-12">
        {/* Section header */}
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="meta-label text-sky-700">My work</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="work-heading"
                className="mt-4 max-w-[20ch] text-balance text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-[1.14] tracking-[-0.02em] text-ink"
              >
                Websites made for different businesses.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <p className="max-w-[30rem] text-[16.5px] leading-[1.7] text-muted-ink lg:justify-self-end">
              A restaurant, a coach, a real estate business, and a local
              service company all need different things. I build each website
              around the business and the people it serves.
            </p>
          </Reveal>
        </div>

        {/* Featured projects */}
        <div className="mt-14 grid gap-x-8 gap-y-14 md:mt-16 md:grid-cols-12 md:gap-y-20">
          {/* 01 — Restaurant: full-width feature with mobile overlap */}
          <Reveal className="md:col-span-12" y={30}>
            <article>
              <ProjectVisual
                project={PROJECTS[0]}
                phonePosition="right"
                onOpen={() => setOpenIndex(0)}
                title={PROJECTS[0].title}
              />
              <ProjectMeta project={PROJECTS[0]} index={0} />
            </article>
          </Reveal>

          {/* 02 — Real estate: wide asymmetric */}
          <Reveal className="md:col-span-7" y={30} delay={0.05}>
            <article>
              <ProjectVisual
                project={PROJECTS[1]}
                onOpen={() => setOpenIndex(1)}
                title={PROJECTS[1].title}
              />
              <ProjectMeta project={PROJECTS[1]} index={1} />
            </article>
          </Reveal>

          {/* 03 — Beauty: narrow column with mobile overlap */}
          <Reveal className="md:col-span-5 md:mt-20" y={30} delay={0.1}>
            <article>
              <ProjectVisual
                project={PROJECTS[2]}
                phonePosition="right"
                onOpen={() => setOpenIndex(2)}
                title={PROJECTS[2].title}
              />
              <ProjectMeta project={PROJECTS[2]} index={2} />
            </article>
          </Reveal>
        </div>

        {/* Supporting work — smaller pieces */}
        <Reveal y={24}>
          <div className="mt-16 md:mt-20">
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.slice(3).map((project, i) => (
                <article key={project.title}>
                  <ProjectVisual
                    project={project}
                    onOpen={() => setOpenIndex(i + 3)}
                    title={project.title}
                    compact
                  />
                  <ProjectMeta project={project} index={i + 3} compact />
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Closing line + CTA */}
        <Reveal delay={0.05}>
          <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-line pt-7 md:mt-16 md:flex-row md:items-center">
            <p className="max-w-[34rem] text-[15.5px] leading-[1.65] text-muted-ink">
              Need a website for your business? Tell me what you do, and I
              will show you what it could look like.
            </p>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 text-[15px] font-medium text-ink transition-colors duration-200 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600"
            >
              Start your project
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Larger project view */}
      <Dialog
        open={openIndex !== null}
        onOpenChange={(open) => {
          if (!open) setOpenIndex(null);
        }}
      >
        {current && (
          <DialogContent className="max-h-[92svh] max-w-[calc(100%-1.5rem)] gap-0 overflow-y-auto rounded-lg border-line bg-pearl p-0 sm:max-w-[min(92vw,1080px)]">
            <DialogTitle className="sr-only">
              {current.title} — larger preview
            </DialogTitle>
            <DialogDescription className="sr-only">
              {current.description}
            </DialogDescription>

            <div className="grid lg:grid-cols-[1.55fr_1fr]">
              {/* Preview */}
              <div className="flex items-center justify-center bg-sky-100 p-5 sm:p-8">
                <div className="flex w-full items-start justify-center gap-5">
                  <div className="min-w-0 flex-1">{current.desktop}</div>
                  {current.mobile && (
                    <div className="hidden w-[140px] shrink-0 pt-6 sm:block">
                      {current.mobile}
                      {current.mobileLabel && (
                        <p className="meta-label mt-3 text-center text-[9px] text-muted-ink">
                          {current.mobileLabel}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Meta panel */}
              <div className="border-t border-line p-6 sm:p-8 lg:border-l lg:border-t-0 lg:pr-10">
                <p className="meta-label text-sky-700">{current.category}</p>
                <h3 className="mt-3 text-[clamp(1.5rem,2.4vw,1.9rem)] font-medium leading-[1.15] tracking-[-0.01em] text-ink">
                  {current.title}
                </h3>
                <p className="mt-4 text-[15.5px] leading-[1.7] text-muted-ink">
                  {current.description}
                </p>

                <p className="meta-label mt-7 text-muted-ink">
                  What is included
                </p>
                <ul className="mt-3">
                  {current.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-t border-line/80 py-2.5 text-[14.5px] font-medium text-ink/80"
                    >
                      <span
                        aria-hidden="true"
                        className="size-[5px] shrink-0 rounded-full bg-sky-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <DialogClose asChild>
                  <a
                    href="#contact"
                    className="group mt-8 inline-flex h-12 items-center gap-2.5 rounded-full bg-sky-600 px-6 text-[14.5px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Start a project like this
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </DialogClose>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
