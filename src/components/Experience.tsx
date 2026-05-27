import AnimateIn from "./AnimateIn";

const experiences = [
  {
    date: "May 2026 – Present",
    company: "Nationwide",
    role: "AI & Automation Intern",
    badge: "Current",
    badgeStyle: "text-green-700 bg-green-50 border-green-200",
    accentColor: "#34d399",
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
    badgeStyle: "text-[#0066cc] bg-blue-50 border-blue-200",
    accentColor: "#0066cc",
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
    badgeStyle: "text-[#7a7a7a] bg-[#f5f5f7] border-[#e0e0e0]",
    accentColor: "#d2d2d7",
    bullets: ["Awarded U.S. Patent #20210396625 — Building Strain Monitoring System"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
      <AnimateIn>
        <h2
          className="font-heading text-3xl font-semibold text-[#1d1d1f] mb-10"
          style={{ letterSpacing: "-0.02em" }}
        >
          Experience
        </h2>
      </AnimateIn>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <AnimateIn key={i} delay={i * 100}>
            <div
              className="rounded-[18px] border border-[#e0e0e0] bg-white px-8 py-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
              style={{ borderLeftWidth: "3px", borderLeftColor: exp.accentColor }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h3
                    className="font-heading text-[#1d1d1f] font-semibold text-xl leading-tight"
                    style={{ letterSpacing: "-0.374px" }}
                  >
                    {exp.company}
                  </h3>
                  <p
                    className="mt-1 text-[#0066cc] font-normal text-base"
                    style={{ letterSpacing: "-0.374px" }}
                  >
                    {exp.role}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0 pt-1">
                  <span
                    className={`text-xs px-3 py-1 rounded-full border font-normal ${exp.badgeStyle}`}
                  >
                    {exp.badge}
                  </span>
                  <span
                    className="text-[#7a7a7a] text-sm font-mono"
                    style={{ letterSpacing: "-0.224px" }}
                  >
                    {exp.date}
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5">
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-3"
                    style={{
                      fontSize: "17px",
                      lineHeight: "1.47",
                      letterSpacing: "-0.374px",
                      color: "#333333",
                    }}
                  >
                    <span
                      className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: exp.accentColor }}
                    />
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
