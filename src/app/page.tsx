import { EmailCaptureSection } from "@/components/email-capture-section";
import { Footer } from "@/components/footer";
import { Founder } from "@/components/founder";
import { Hero } from "@/components/hero";
import { LogoWordmark } from "@/components/logo-wordmark";
import { Pillars } from "@/components/pillars";
import { PullQuote } from "@/components/pull-quote";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav
        brand={<LogoWordmark />}
      >
        <li>
          <a
            className="text-sm text-text-primary transition-colors hover:text-accent-dark md:text-base"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-sm text-text-primary transition-colors hover:text-accent-dark md:text-base"
            href="#connect"
          >
            Contact
          </a>
        </li>
      </Nav>
      <main className="flex min-h-0 flex-1 flex-col" id="main-content">
        <Hero />
        <Founder />
        <Pillars />
        <PullQuote />
        <EmailCaptureSection />
      </main>
      <Footer />
    </>
  );
}
