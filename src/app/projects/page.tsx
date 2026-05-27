import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import Projects from "@/components/Projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main id="main-content" className="pt-[44px]">
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-4">
        <AnimateIn>
          <p
            className="mb-3 text-xs font-mono uppercase text-[#0066cc]/80"
            style={{ letterSpacing: "0.1em" }}
          >
            Work
          </p>
          <h1
            className="font-heading text-5xl md:text-6xl font-semibold text-[#1d1d1f] mb-3"
            style={{ letterSpacing: "-0.03em" }}
          >
            Projects
          </h1>
          <p
            className="text-[#7a7a7a] text-base max-w-md"
            style={{ letterSpacing: "-0.374px" }}
          >
            Things I&apos;ve built — from hackathon winners to open-source tools.
          </p>
        </AnimateIn>
      </div>

      <Projects />
    </main>
  );
}
