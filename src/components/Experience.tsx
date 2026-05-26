import AnimateIn from "./AnimateIn";

const experiences = [
  {
    date: "May 2026 – Present",
    company: "Nationwide",
    role: "AI & Automation Intern",
    badge: "Current",
    badgeStyle: "text-green-700 bg-green-50 border-green-200",
    accentColor: "border-green-400",
    bullets: [
      "Engineered two Insight Engine enhancements within Nationwide's Retirement Solutions platform, improving search relevance scores by 23% and reducing average query response time from 1.4s to 0.8s for 400+ internal users",
      "Implemented AI Development Lifecycle (AI DLC) governance controls across 3 production workflows, generating automated evaluation reports and audit trails that reduced manual AI review time by 40%",
    ],
  },
  {
    date: "Aug 2025 – Apr 2026",
    company: "Nationwide",
    role: "Investment Controllership Co-op",
    badge: "Co-op",
    badgeStyle: "text-blue-700 bg-blue-50 border-blue-200",
    accentColor: "border-blue-400",
    bullets: [
      "Created and presented a Power BI dashboard to the Vice President, analyzing $100B+ in investments, cutting manual reporting time by 30% and accelerating executive level decision making on statutory versus GAAP accounting differences",
      "Built a financial model on $50M+ in investments to identify new income recognition for residual tranches, uncovering approximately $5M in incremental income, improving forecasting accuracy under updated statutory accounting guidance",
    ],
  },
  {
    date: "2021",
    company: "U.S. Patent & Trademark Office",
    role: "Named Inventor",
    badge: "USPTO",
    badgeStyle: "text-slate-600 bg-slate-50 border-slate-200",
    accentColor: "border-slate-300",
    bullets: ["Awarded U.S. Patent #20210396625 — Building Strain Monitoring System"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <AnimateIn>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-800 mb-12">
          Experience
        </h2>
      </AnimateIn>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <AnimateIn key={i} delay={i * 100}>
            <div
              className={`rounded-lg border border-slate-200 border-l-4 ${exp.accentColor} bg-white px-8 py-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`}
            >
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-heading text-slate-900 font-bold text-2xl leading-tight">
                    {exp.company}
                  </h3>
                  <p className="mt-1 text-blue-600 font-medium text-base">
                    {exp.role}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0 pt-1">
                  <span
                    className={`text-xs px-3 py-1 rounded-full border font-medium ${exp.badgeStyle}`}
                  >
                    {exp.badge}
                  </span>
                  <span className="text-slate-500 text-sm font-mono">
                    {exp.date}
                  </span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-slate-600 text-sm leading-relaxed flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
