import AnimateIn from "./AnimateIn";

const projects = [
  {
    name: "CLARA",
    tagline:
      "Full-stack portfolio risk dashboard — live P&L, VaR, Monte Carlo, real-time alerts",
    description:
      "Built at IBM's Buckeye Hackathon (1st place). Tracks 100+ assets with live P&L, beta exposure, and tail-risk analytics (VaR, ES, Monte Carlo). Real-time data pipeline via Alpha Vantage and NewsAPI fires breach alerts within 3 seconds via EmailJS across 50+ monitored thresholds. SR 11-7–aligned AI governance layer with 25+ exportable audit reports.",
    tech: ["React.js", "Python", "Alpha Vantage", "EmailJS", "Monte Carlo"],
    link: "https://github.com/Sathv1kA/CLARA",
    badge: "🥇 IBM Hackathon · 1st Place",
    badgeStyle: "text-yellow-700 bg-yellow-50 border-yellow-200",
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
    badgeStyle: "text-[#7a7a7a] bg-[#f5f5f7] border-[#e0e0e0]",
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
    tagline:
      "Classify log severity with fine-tuned BERT, generate incident summaries via LLM",
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
    tagline:
      "Dashboard for 27,039 NYC real estate transactions with XGBoost model (R²=0.9903)",
    description:
      "Full-stack data visualization dashboard with XGBoost + Random Forest models (R²=0.9903, MAE=$33K). Covers 173 ZIP codes, $1.23M avg price, interactive maps, and borough comparisons.",
    tech: ["React", "TypeScript", "Tailwind CSS", "XGBoost"],
    link: "https://github.com/Sathv1kA/NYC-Housing-Insights-DataIO-Hackathon",
    badge: "DATA_IO Hackathon",
    badgeStyle: "text-purple-700 bg-purple-50 border-purple-200",
    featured: false,
  },
];

function TechBadge({ label }: { label: string }) {
  return (
    <span
      className="rounded-full border border-[#e0e0e0] bg-[#f5f5f7] px-2.5 py-0.5 text-xs text-[#333333]"
      style={{ letterSpacing: "-0.12px" }}
    >
      {label}
    </span>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <AnimateIn>
        <h2
          className="font-heading text-3xl font-semibold text-[#1d1d1f] mb-10"
          style={{ letterSpacing: "-0.02em" }}
        >
          Projects
        </h2>
      </AnimateIn>

      <div className="space-y-4">
        {/* Featured project */}
        <AnimateIn delay={80}>
          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-[18px] border border-[#e0e0e0] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0066cc]/30 hover:shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <h3
                className="font-heading text-[#1d1d1f] font-semibold text-xl"
                style={{ letterSpacing: "-0.374px" }}
              >
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
            <div className="flex flex-wrap gap-2 mb-3">
              {featured.tech.map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>
            <p
              className="text-[#1d1d1f] text-sm font-medium mb-2"
              style={{ letterSpacing: "-0.374px" }}
            >
              {featured.tagline}
            </p>
            <p
              className="text-[#7a7a7a] text-sm leading-relaxed mb-4"
              style={{ letterSpacing: "-0.224px" }}
            >
              {featured.description}
            </p>
            <div className="flex justify-end">
              <span
                className="text-xs font-mono text-[#7a7a7a] transition-colors group-hover:text-[#0066cc]"
                style={{ letterSpacing: "-0.12px" }}
              >
                → GitHub
              </span>
            </div>
          </a>
        </AnimateIn>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-4">
          {rest.map((project, i) => (
            <AnimateIn key={project.name} delay={160 + i * 80}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full block rounded-[18px] border border-[#e0e0e0] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0066cc]/30 hover:shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3
                    className="font-heading text-[#1d1d1f] font-semibold text-lg"
                    style={{ letterSpacing: "-0.374px" }}
                  >
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
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>
                <p
                  className="text-[#1d1d1f] text-sm font-medium mb-2"
                  style={{ letterSpacing: "-0.374px" }}
                >
                  {project.tagline}
                </p>
                <p
                  className="text-[#7a7a7a] text-sm leading-relaxed mb-4"
                  style={{ letterSpacing: "-0.224px" }}
                >
                  {project.description}
                </p>
                <div className="flex justify-end">
                  <span
                    className="text-xs font-mono text-[#7a7a7a] transition-colors group-hover:text-[#0066cc]"
                    style={{ letterSpacing: "-0.12px" }}
                  >
                    → GitHub
                  </span>
                </div>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
