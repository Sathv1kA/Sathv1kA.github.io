import AnimateIn from "./AnimateIn";

const projects = [
  {
    name: "CLARA",
    tagline: "ML platform for financial risk analysis",
    description:
      "Built at IBM's Fintech Hackathon — an end-to-end machine learning platform that analyzes financial risk using predictive models. Took 1st place competing against teams across the region.",
    tech: ["Python", "Machine Learning", "Financial Risk Modeling"],
    link: "https://github.com/Sathv1kA/CLARA",
    badge: "🥇 IBM Fintech Hackathon · 1st Place",
    badgeStyle: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
    featured: true,
  },
  {
    name: "LLMeter",
    tagline: "Estimate LLM API costs across providers from a GitHub repo",
    description:
      "Analyzes any GitHub repository to detect LLM API calls and estimates token costs across OpenAI, Anthropic, Gemini, and other providers.",
    tech: ["TypeScript"],
    link: "https://github.com/Sathv1kA/LLMeter",
    badge: null,
    badgeStyle: "",
    featured: false,
  },
  {
    name: "NYC Housing Insights",
    tagline: "Interactive dashboard for 27,039 NYC real estate transactions",
    description:
      "Full-stack data visualization dashboard with XGBoost + Random Forest models (R²=0.9903, MAE=$33K). Covers 173 ZIP codes, $1.23M avg price, interactive maps, and borough comparisons.",
    tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "XGBoost"],
    link: "https://github.com/Sathv1kA/NYC-Housing-Insights-DataIO-Hackathon",
    badge: "DATA_IO Hackathon",
    badgeStyle: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    featured: false,
  },
];

function TechBadge({ label }: { label: string }) {
  return (
    <span className="text-xs text-blue-400/80 border border-blue-500/20 bg-blue-500/5 px-2.5 py-0.5 rounded-full">
      {label}
    </span>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">

      <div className="space-y-5">
        {/* Featured project */}
        <AnimateIn delay={80}>
          <div className="border border-yellow-500/20 hover:border-yellow-500/40 bg-[#0d1526]/60 rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-900/10">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <h3 className="font-heading text-white font-bold text-xl">
                {featured.name}
              </h3>
              <span
                className={`text-xs px-2.5 py-1 rounded-full border font-mono ${featured.badgeStyle}`}
              >
                {featured.badge}
              </span>
            </div>
            <p className="text-slate-400 text-sm font-medium mb-2">
              {featured.tagline}
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              {featured.description}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-blue-400 transition-colors font-mono"
              >
                → code
              </a>
            </div>
          </div>
        </AnimateIn>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <AnimateIn key={project.name} delay={160 + i * 80}>
              <div className="border border-slate-800/80 hover:border-blue-500/30 bg-[#0d1526]/60 rounded-xl p-6 h-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/10">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading text-white font-semibold text-lg">
                    {project.name}
                  </h3>
                  {project.badge && (
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full border font-mono ${project.badgeStyle}`}
                    >
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm font-medium mb-2">
                  {project.tagline}
                </p>
                <p className="text-slate-500 text-xs leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 hover:text-blue-400 transition-colors font-mono"
                  >
                    → code
                  </a>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
