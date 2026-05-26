import AnimateIn from "./AnimateIn";

const projects = [
  {
    name: "CLARA",
    tagline: "Full-stack portfolio risk dashboard — live P&L, VaR, Monte Carlo, real-time alerts",
    description:
      "Built at IBM's Buckeye Hackathon (1st place). Tracks 100+ assets with live P&L, beta exposure, and tail-risk analytics (VaR, ES, Monte Carlo). Real-time data pipeline via Alpha Vantage and NewsAPI fires breach alerts within 3 seconds via EmailJS across 50+ monitored thresholds. SR 11-7–aligned AI governance layer with 25+ exportable audit reports.",
    tech: ["React.js", "Python", "Alpha Vantage", "EmailJS", "Monte Carlo"],
    link: "https://github.com/Sathv1kA/CLARA",
    badge: "🥇 IBM Hackathon · 1st Place",
    badgeStyle: "text-yellow-600 bg-yellow-50 border-yellow-200",
    featured: true,
  },
  {
    name: "TokenLens",
    tagline: "Detect LLM API calls across 6 SDKs and estimate token costs per repo",
    description:
      "Full-stack AI cost analyzer with <200ms average response time via FastAPI. Hybrid regex/AST detection pipeline supports 14 models, reducing estimated API costs by 30%+ per repo with token estimates accurate to ±10% via tiktoken.",
    tech: ["Python", "FastAPI", "TypeScript"],
    link: "https://github.com/Sathv1kA/LLMeter",
    badge: "🥈 Anthropic OSU Hackathon · 2nd Place",
    badgeStyle: "text-slate-500 bg-slate-100 border-slate-300",
    featured: false,
  },
  {
    name: "Network Anomaly Detection",
    tagline: "ML anomaly detection on 500K+ network events at sub-20ms latency",
    description:
      "Isolation Forest and LSTM autoencoder ensemble flags irregular packet patterns with 96.1% precision. FastAPI inference layer with real-time Kafka streaming sustains sub-20ms detection latency at 800+ events/sec with structured audit trails for post-incident review.",
    tech: ["Python", "Kafka", "FastAPI", "PyTorch", "scikit-learn"],
    link: "https://github.com/Sathv1kA",
    badge: null,
    badgeStyle: "",
    featured: false,
  },
  {
    name: "AI Log Parsing CLI",
    tagline: "Classify log severity with fine-tuned BERT, generate incident summaries via LLM",
    description:
      "Python CLI tool that classifies error severity using a fine-tuned BERT model and generates natural language incident summaries via the OpenAI API with sub-2s end-to-end latency. Processes 100K+ log lines per run, reducing manual triage time by ~60%.",
    tech: ["Python", "BERT", "OpenAI API"],
    link: "https://github.com/Sathv1kA",
    badge: null,
    badgeStyle: "",
    featured: false,
  },
  {
    name: "NYC Housing Insights",
    tagline: "Dashboard for 27,039 NYC real estate transactions with XGBoost model (R²=0.9903)",
    description:
      "Full-stack data visualization dashboard with XGBoost + Random Forest models (R²=0.9903, MAE=$33K). Covers 173 ZIP codes, $1.23M avg price, interactive maps, and borough comparisons.",
    tech: ["React", "TypeScript", "Tailwind CSS", "XGBoost"],
    link: "https://github.com/Sathv1kA/NYC-Housing-Insights-DataIO-Hackathon",
    badge: "DATA_IO Hackathon",
    badgeStyle: "text-purple-600 bg-purple-50 border-purple-200",
    featured: false,
  },
];

function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs text-blue-600">
      {label}
    </span>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <AnimateIn>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-800 mb-12">
          Projects
        </h2>
      </AnimateIn>

      <div className="space-y-5">
        {/* Featured project */}
        <AnimateIn delay={80}>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <h3 className="font-heading text-slate-800 font-bold text-xl">
                {featured.name}
              </h3>
              {featured.badge && (
                <span
                  className={`rounded-full border px-2.5 py-1 text-xs font-mono ${featured.badgeStyle}`}
                >
                  {featured.badge}
                </span>
              )}
            </div>
            <p className="text-slate-700 text-sm font-medium mb-2">
              {featured.tagline}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
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
                className="text-xs font-mono text-slate-400 transition-colors hover:text-blue-500"
              >
                → GitHub
              </a>
            </div>
          </div>
        </AnimateIn>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <AnimateIn key={project.name} delay={160 + i * 80}>
              <div className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading text-slate-800 font-semibold text-lg">
                    {project.name}
                  </h3>
                  {project.badge && (
                    <span
                      className={`rounded-full border px-2.5 py-1 text-xs font-mono ${project.badgeStyle}`}
                    >
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="text-slate-700 text-sm font-medium mb-2">
                  {project.tagline}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
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
                    className="text-xs font-mono text-slate-400 transition-colors hover:text-blue-500"
                  >
                    → GitHub
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
