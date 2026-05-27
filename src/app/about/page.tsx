import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main id="main-content" className="pt-[44px]">
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-4">
        <AnimateIn>
          <p
            className="mb-3 text-xs font-mono uppercase text-[#0066cc]/80"
            style={{ letterSpacing: "0.1em" }}
          >
            About
          </p>
          <h1
            className="font-heading text-5xl md:text-6xl font-semibold text-[#1d1d1f] mb-3"
            style={{ letterSpacing: "-0.03em" }}
          >
            About Me
          </h1>
          <p
            className="text-[#7a7a7a] text-base"
            style={{ letterSpacing: "-0.374px" }}
          >
            Finance · Mathematics · Computer Science — The Ohio State University
          </p>
        </AnimateIn>
      </div>

      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
