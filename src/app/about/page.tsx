import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main id="main-content" className="pt-16">
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-4">
        <AnimateIn>
          <p className="mb-3 text-xs font-mono uppercase tracking-widest text-blue-500/80">
            About
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-slate-800 mb-3">
            About Me
          </h1>
          <p className="text-slate-500 text-base">
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
