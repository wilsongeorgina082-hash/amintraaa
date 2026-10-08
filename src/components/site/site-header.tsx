"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

const NAV_LINKS = [
  { label: "My Work", href: "#work" },
  { label: "What You Get", href: "#what-you-get" },
  { label: "About Me", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  /**
   * Mobile-menu navigation. preventDefault + programmatic scroll:
   * the native fragment scroll gets canceled when React unmounts the
   * clicked anchor while the menu closes, so we scroll ourselves.
   * scrollIntoView respects the 88px scroll-padding-top on <html>.
   */
  const goTo = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      event.preventDefault();
      setOpen(false);
      requestAnimationFrame(() => {
        document
          .querySelector(href)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      window.history.replaceState(null, "", href);
    },
    [],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-pearl/90 shadow-[0_10px_30px_-26px_rgba(23,33,43,0.4)] backdrop-blur-md"
          : "border-b border-transparent bg-pearl"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 md:h-[72px] md:px-8 lg:px-12">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-2 text-[14px] font-medium text-muted-ink transition-colors duration-200 hover:text-ink"
            >
              {link.label}
              <span
                aria-hidden="true"
                className="absolute -bottom-0.5 left-0 h-px w-0 bg-sky-500 transition-all duration-300 ease-out group-hover:w-full"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden h-10 items-center rounded-full bg-sky-600 px-5 text-[14px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-[0_14px_28px_-16px_rgba(36,79,105,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 sm:inline-flex"
          >
            Get My Website
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-ink/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Menu panel is absolutely positioned under the sticky header so
          opening it never shifts the page layout. It unmounts instantly on
          close (no exit animation) so nothing runs concurrently with the
          programmatic scroll — smooth-scroll anchors stay reliable. */}
      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 top-full overflow-hidden border-b border-line bg-pearl/95 backdrop-blur-md lg:hidden"
        >
            <nav
              aria-label="Mobile"
              className="flex flex-col px-5 pb-6 pt-1 md:px-8"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => goTo(event, link.href)}
                  className="border-b border-line/70 py-3.5 text-[16px] font-medium text-ink transition-colors duration-200 hover:text-sky-700"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(event) => goTo(event, "#contact")}
                className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-sky-600 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-sky-700"
              >
                Get My Website
              </a>
            </nav>
          </motion.div>
      )}
    </header>
  );
}
