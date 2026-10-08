import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm",
  display: "swap",
});

/* Kept ONLY for the rendered portfolio previews — each mini-site
   has its own brand typography. All Amintra UI uses DM Sans. */
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amintra — Websites made simple",
  description:
    "I make clean, professional websites for business owners — without the stress, confusion or big agency fees. You focus on your business. I will help with the website.",
  keywords: [
    "Amintra",
    "web design",
    "business websites",
    "landing pages",
    "website redesign",
    "domain and hosting setup",
    "affordable web designer",
  ],
  authors: [{ name: "Amintra" }],
  creator: "Amintra",
  openGraph: {
    title: "Amintra — Websites made simple",
    description:
      "Clean, professional websites for business owners. You focus on your business. I will help with the website.",
    siteName: "Amintra",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Amintra — Websites made simple",
    description:
      "Clean, professional websites for business owners — without the agency fees.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f7f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${instrumentSerif.variable} font-sans antialiased bg-pearl text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
