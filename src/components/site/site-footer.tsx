import { Mail, MessageCircle } from "lucide-react";
import { Logo } from "./logo";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "What You Get", href: "#what-you-get" },
  { label: "AI & Automation", href: "#ai-automation" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About Me", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const WHATSAPP_URL =
  "https://wa.me/2349032558738?text=Hello%20Amintra%21%20I%20would%20like%20to%20talk%20about%20a%20website%20for%20my%20business.";

/**
 * Footer — very quiet, single-level. Logo left, links middle,
 * contact right, copyright below. One subtle top border.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-pearl">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-14 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo />
            <p className="mt-3 text-[14.5px] text-muted-ink">
              Websites made simple.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14.5px] font-medium text-muted-ink transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Two compact contact boxes — the number and the address
              live only inside the links, never as visible text. */}
          <div className="flex flex-col gap-2.5 md:items-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-line bg-white px-4 text-[14px] font-medium text-ink transition-all duration-200 hover:border-sky-400 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              <MessageCircle aria-hidden="true" className="size-4 text-sky-600" />
              Chat on WhatsApp
            </a>
            <a
              href="mailto:amintraart@gmail.com"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-line bg-white px-4 text-[14px] font-medium text-ink transition-all duration-200 hover:border-sky-400 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              <Mail aria-hidden="true" className="size-4 text-sky-600" />
              Email Me
            </a>
          </div>
        </div>

        <div className="mt-9 border-t border-line/70 pt-5">
          <p className="text-[13.5px] text-muted-ink">
            &copy; 2026 Amintra.
          </p>
        </div>
      </div>
    </footer>
  );
}
