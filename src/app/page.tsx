import Link from "next/link";
import Hero from "@/components/Hero";
import AnimateIn from "@/components/AnimateIn";

const featuredProjects = [
  {
    name: "CLARA",
    tagline: "Full-stack portfolio risk dashboard — live P&L, VaR, Monte Carlo, real-time alerts",
    tech: ["React.js", "Python", "Alpha Vantage", "EmailJS"],
    badge: "IBM Hackathon · 1st Place",
    badgeStyle: "text-yellow-600 bg-yellow-50 border-yellow-200",
  },
  {
    name: "TokenLens",
    tagline: "Detect LLM API calls across 6 SDKs and estimate token costs per repo",
    tech: ["Python", "FastAPI", "TypeScript"],
    badge: "Anthropic Hackathon · 2nd Place",
    badgeStyle: "text-slate-500 bg-slate-100 border-slate-300",
  },
  {
    name: "NYC Housing Insights",
    tagline:
      "Dashboard for 27,039 NYC real estate transactions with XGBoost model (R²=0.9903)",
    tech: ["React", "TypeScript", "XGBoost"],
    badge: "DATA_IO Hackathon",
    badgeStyle: "text-purple-600 bg-purple-50 border-purple-200",
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <Hero />

      {/* Selected Work */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <AnimateIn>
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-heading text-3xl font-bold text-slate-800">
              Selected Work
            </h2>
            <Link
              href="/projects"
              className="text-sm text-blue-500 hover:text-blue-600 transition-colors duration-200"
            >
              View all →
            </Link>
          </div>
        </AnimateIn>

        <div className="space-y-4">
          {featuredProjects.map((project, i) => (
            <AnimateIn key={project.name} delay={i * 80}>
              <Link
                href="/projects"
                className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white px-6 py-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-heading text-slate-800 font-semibold">
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
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0 ml-6">
                  <div className="hidden sm:flex gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs text-blue-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-slate-400 transition-colors duration-200 group-hover:text-blue-500">
                    →
                  </span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <AnimateIn>
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h2 className="font-heading text-2xl font-bold text-slate-800 mb-3">
                  Curious by nature, builder by habit
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed max-w-lg">
                  Sophomore at Ohio State studying Finance, Math, and CS. I love learning — picking up new skills, exploring ideas, and building things that actually work. 3.92 GPA · AI &amp; Automation Intern @ Nationwide · 2× Hackathon Winner · U.S. Patent Holder.
                </p>
              </div>
              <div className="flex md:flex-col gap-3">
                <Link
                  href="/about"
                  className="rounded-lg bg-blue-500 hover:bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors duration-200 shadow-sm"
                >
                  About Me
                </Link>
                <Link
                  href="/about#contact"
                  className="rounded-lg border border-slate-200 px-5 py-2.5 text-center text-sm font-medium text-slate-600 transition-colors duration-200 hover:border-blue-300 hover:text-blue-600"
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
