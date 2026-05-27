import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import Projects from "@/components/Projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main id="main-content" className="pt-16">
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-4">
        <AnimateIn>
          <p className="mb-3 text-xs font-mono uppercase tracking-widest text-blue-500/80">
            Work
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-slate-800 mb-3">
            Projects
          </h1>
          <p className="text-slate-500 text-base max-w-md">
            Things I&apos;ve built — from hackathon winners to open-source tools.
          </p>
        </AnimateIn>
      </div>

      <Projects />
    </main>
  );
}
