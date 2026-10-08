"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * True full-screen editorial hero. The founder photo is the background —
 * no mockups, no floating cards. The complete copy group (eyebrow,
 * headline, body and buttons) sits as ONE unit at the exact center of
 * the viewport: the section spans 100svh (slid under the sticky header
 * so it starts at the very top of the viewport) and a single flex
 * centering rule places the group — no padding offsets, no absolute
 * positioning, equal breathing room above and below on every viewport.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative isolate -mt-16 flex min-h-[100svh] items-center justify-center overflow-hidden px-5 md:-mt-[72px] md:px-8"
    >
      {/* Founder photo — the hero visual (landscape version with the
          room extended; the founder herself is untouched). Rendered a
          touch oversized and bottom-anchored so her face sits in the
          upper third — the empty ceiling above her head is clipped. */}
      <div className="absolute inset-x-0 bottom-0 -z-20 h-[115%]">
        <Image
          src="/founder-hero.jpg"
          alt="The founder of Amintra, smiling warmly in a softly lit room"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* Soft overlay — keeps the photo visible, makes text readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(23,33,43,0.28)_0%,rgba(23,33,43,0.3)_42%,rgba(23,33,43,0.54)_100%)]"
      />

      {/* Copy — one complete group, centered horizontally and vertically */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[760px] text-center"
      >
        <p className="meta-label text-sky-200">
          Welcome to Amintra
        </p>
        <h1 className="mt-4 text-balance text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.14] tracking-[-0.02em] text-white">
          You built the business. Your website should show it.
        </h1>
        <p className="mx-auto mt-4 max-w-[580px] text-pretty text-[16px] leading-relaxed text-white/85 md:text-[17px]">
          Your business deserves a website that looks professional, feels
          like you, and makes it easy for people to take the next step. I
          design and build websites for business owners who want a strong
          online presence without the usual stress and extra cost.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-sky-600 px-7 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-500 hover:shadow-[0_18px_36px_-18px_rgba(23,33,43,0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
          >
            Get My Website
          </a>
          <a
            href="#work"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/55 px-7 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
          >
            See My Work
          </a>
        </div>
      </motion.div>
    </section>
  );
}
