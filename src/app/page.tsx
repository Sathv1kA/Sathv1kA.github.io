import Link from "next/link";
import Hero from "@/components/Hero";
import AnimateIn from "@/components/AnimateIn";

const featuredProjects = [
  {
    name: "CLARA",
    tagline:
      "Full-stack portfolio risk dashboard — live P&L, VaR, Monte Carlo, real-time alerts",
    tech: ["React.js", "Python", "Alpha Vantage", "EmailJS"],
    badge: "🥇 IBM Hackathon · 1st Place",
    badgeStyle: "text-yellow-700 bg-yellow-50 border-yellow-200",
  },
  {
    name: "TokenLens",
    tagline: "Detect LLM API calls across 6 SDKs and estimate token costs per repo",
    tech: ["Python", "FastAPI", "TypeScript"],
    badge: "🥈 Anthropic OSU Hackathon · 2nd Place",
    badgeStyle: "text-[#7a7a7a] bg-[#f5f5f7] border-[#e0e0e0]",
  },
  {
    name: "NYC Housing Insights",
    tagline:
      "Dashboard for 27,039 NYC real estate transactions with XGBoost model (R²=0.9903)",
    tech: ["React", "TypeScript", "XGBoost"],
    badge: "DATA_IO Hackathon",
    badgeStyle: "text-purple-700 bg-purple-50 border-purple-200",
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <Hero />

      {/* Selected Work */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <AnimateIn>
          <div className="flex items-end justify-between mb-10">
            <h2
              className="font-heading text-3xl font-semibold text-[#1d1d1f]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Selected Work
            </h2>
            <Link
              href="/projects"
              className="text-sm text-[#0066cc] hover:text-[#0071e3] transition-colors duration-200"
            >
              View all →
            </Link>
          </div>
        </AnimateIn>

        <div className="space-y-3">
          {featuredProjects.map((project, i) => (
            <AnimateIn key={project.name} delay={i * 80}>
              <Link
                href="/projects"
                className="group flex items-center justify-between rounded-[18px] border border-[#e0e0e0] bg-white px-6 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0066cc]/30 hover:shadow-sm"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3
                      className="font-heading text-[#1d1d1f] font-semibold"
                      style={{ letterSpacing: "-0.374px" }}
                    >
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
                  <p
                    className="text-[#7a7a7a] text-sm leading-relaxed"
                    style={{ letterSpacing: "-0.224px" }}
                  >
                    {project.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0 ml-6">
                  <div className="hidden sm:flex gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[#e0e0e0] bg-[#f5f5f7] px-2 py-0.5 text-xs text-[#333333]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#7a7a7a] transition-colors duration-200 group-hover:text-[#0066cc]">
                    →
                  </span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <AnimateIn>
          <div className="rounded-[18px] border border-[#e0e0e0] bg-white p-8 md:p-12">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h2
                  className="font-heading text-2xl font-semibold text-[#1d1d1f] mb-3"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Curious by nature, builder by habit
                </h2>
                <p
                  className="text-[#7a7a7a] text-sm leading-relaxed max-w-lg"
                  style={{ letterSpacing: "-0.224px" }}
                >
                  Sophomore at Ohio State studying Finance, Math, and CS. I love
                  learning — picking up new skills, exploring ideas, and building
                  things that actually work. 3.92 GPA · AI &amp; Automation
                  Intern @ Nationwide · 2× Hackathon Winner · U.S. Patent Holder.
                </p>
              </div>
              <div className="flex md:flex-col gap-3">
                <Link
                  href="/about"
                  className="rounded-full bg-[#0066cc] hover:bg-[#0071e3] active:scale-95 px-[22px] py-[11px] text-center text-sm font-normal text-white transition-all duration-200"
                >
                  About Me
                </Link>
                <Link
                  href="/about#contact"
                  className="rounded-full border border-[#e0e0e0] px-[22px] py-[11px] text-center text-sm font-normal text-[#0066cc] transition-all duration-200 hover:border-[#0066cc]/40"
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
