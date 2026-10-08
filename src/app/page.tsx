import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { Problem } from "@/components/site/problem";
import { Services } from "@/components/site/services";
import { Numbers } from "@/components/site/numbers";
import { Work } from "@/components/site/work";
import { AiAutomation } from "@/components/site/ai-automation";
import { About } from "@/components/site/about";
import { DomainHosting } from "@/components/site/domain-hosting";
import { Process } from "@/components/site/process";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Numbers />
        <Work />
        <AiAutomation />
        <About />
        <DomainHosting />
        <Process />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
