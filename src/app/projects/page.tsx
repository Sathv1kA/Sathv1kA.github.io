import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import Projects from "@/components/Projects";

export const metadata: Metadata = { title: "Projects — Sathvik Allipuram" };

export default function ProjectsPage() {
  return (
    <main className="pt-16">
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-4">
        <AnimateIn>
          <p className="text-blue-400/70 text-xs font-mono tracking-widest uppercase mb-3">
            Work
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-3">
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
