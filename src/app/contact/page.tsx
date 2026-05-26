import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import Contact from "@/components/Contact";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="pt-16">
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-4">
        <AnimateIn>
          <p className="mb-3 text-xs font-mono uppercase tracking-widest text-blue-500/80">
            Connect
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-slate-800 mb-3">
            Get In Touch
          </h1>
          <p className="text-slate-500 text-base max-w-sm">
            Open to internship opportunities, interesting projects, and
            conversations about fintech and ML.
          </p>
        </AnimateIn>
      </div>

      <Contact />
    </main>
  );
}
