import Link from "next/link";
import Hero from "@/components/Hero";
import AnimateIn from "@/components/AnimateIn";

const featuredProjects = [
  {
    name: "CLARA",
    tagline: "ML platform for financial risk analysis",
    tech: ["Python", "ML"],
    link: "https://github.com/Sathv1kA/CLARA",
    badge: "🥇 IBM Hackathon · 1st Place",
    badgeStyle: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
  },
  {
    name: "LLMeter",
    tagline: "Estimate LLM API costs across providers from any GitHub repo",
    tech: ["TypeScript"],
    link: "https://github.com/Sathv1kA/LLMeter",
    badge: null,
    badgeStyle: "",
  },
  {
    name: "NYC Housing Insights",
    tagline: "Dashboard for 27,039 NYC real estate transactions with XGBoost model (R²=0.9903)",
    tech: ["React", "TypeScript", "XGBoost"],
    link: "https://github.com/Sathv1kA/NYC-Housing-Insights-DataIO-Hackathon",
    badge: "DATA_IO Hackathon",
    badgeStyle: "text-purple-400 bg-purple-500/10 border-purple-500/30",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Selected Work */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <AnimateIn>
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-heading text-3xl font-bold text-white">
              Selected Work
            </h2>
            <Link
              href="/projects"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              View all →
            </Link>
          </div>
        </AnimateIn>

        <div className="space-y-4">
          {featuredProjects.map((project, i) => (
            <AnimateIn key={project.name} delay={i * 80}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-slate-800/80 hover:border-blue-500/30 bg-[#0d1526]/60 rounded-xl px-6 py-4 group transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-heading text-white font-semibold">
                      {project.name}
                    </h3>
                    {project.badge && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border font-mono ${project.badgeStyle}`}
                      >
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-sm">{project.tagline}</p>
                </div>

                <div className="flex items-center gap-4 shrink-0 ml-6">
                  <div className="hidden sm:flex gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-blue-400/70 border border-blue-500/20 px-2 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-slate-600 group-hover:text-blue-400 transition-colors duration-200">
                    ↗
                  </span>
                </div>
              </a>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <AnimateIn>
          <div className="border border-slate-800/60 rounded-2xl p-8 md:p-12 bg-[#0d1526]/40">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-3">
                  Finance + CS @ Ohio State
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                  Building at the intersection of software and finance — from
                  ML-powered risk platforms to quantitative pricing tools and
                  full-stack fintech apps. 3.92 GPA · IBM Hackathon Winner ·
                  U.S. Patent Holder · Incoming Nationwide Technology Intern.
                </p>
              </div>
              <div className="flex md:flex-col gap-3">
                <Link
                  href="/about"
                  className="px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium rounded-lg transition-colors text-center"
                >
                  About Me
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-colors text-center"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>
    </main>
  );
}
