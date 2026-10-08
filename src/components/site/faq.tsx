"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./reveal";

const FAQS = [
  {
    question: "Is this only an AI generated website?",
    answer:
      "No. I use AI assisted tools to help me work faster, but the website is planned, designed and built around your business.",
  },
  {
    question: "Do I have to pay Amintra every month?",
    answer:
      "No. For suitable website projects, there is no monthly hosting fee from Amintra after launch. Your domain and hosting costs are paid directly to the provider.",
  },
  {
    question: "What do I pay after the website is live?",
    answer:
      "You pay for your domain and any hosting service you choose. The exact cost depends on the setup.",
  },
  {
    question: "Can I use my own domain?",
    answer:
      "Yes. Your domain can be set up in your own name and kept under your control.",
  },
  {
    question: "Will the website work on phones?",
    answer:
      "Yes. The website will be built for phones, tablets and computers.",
  },
  {
    question: "Can you match my brand?",
    answer:
      "Yes. I can build around your logo, colours, images, content and style.",
  },
  {
    question: "Can you add AI chat or automation?",
    answer:
      "Yes. These can be added when they are useful for your business.",
  },
  {
    question: "How quickly can it be ready?",
    answer:
      "Many simple business websites can be ready within a few days. The exact time depends on the project.",
  },
  {
    question: "What happens if I need changes later?",
    answer:
      "I can help with website updates, new pages and other changes as your business grows.",
  },
];

function FaqItem({
  faq,
  index,
  open,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const buttonId = `faq-question-${index}`;
  const panelId = `faq-answer-${index}`;

  return (
    <div className="border-t border-line last:border-b">
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 md:py-6"
      >
        <span
          className={`text-[16.5px] font-medium leading-[1.5] tracking-[-0.01em] transition-colors duration-200 md:text-[17.5px] ${
            open ? "text-sky-800" : "text-ink group-hover:text-sky-700"
          }`}
        >
          {faq.question}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`size-5 shrink-0 text-muted-ink transition-transform duration-300 ease-out ${
            open ? "rotate-180 text-sky-600" : ""
          }`}
        />
      </button>
      {open && (
        <motion.div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="max-w-[46rem] pb-6 pr-8 text-[15.5px] leading-[1.7] text-muted-ink md:pb-7">
            {faq.answer}
          </p>
        </motion.div>
      )}
    </div>
  );
}

/**
 * FAQ — clean accordion, one question open at a time.
 */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[52rem]">
          <div className="max-w-[34rem]">
            <Reveal>
              <p className="meta-label text-sky-700">FAQ</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="faq-heading"
                className="mt-4 text-balance text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-[1.14] tracking-[-0.02em] text-ink"
              >
                A few questions you may have.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="mt-10 md:mt-12">
              {FAQS.map((faq, i) => (
                <FaqItem
                  key={faq.question}
                  faq={faq}
                  index={i}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
