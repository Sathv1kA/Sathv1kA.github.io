import AnimateIn from "./AnimateIn";

const experiences = [
  {
    date: "Summer 2026",
    company: "Nationwide",
    role: "Technology Intern",
    badge: "Incoming",
    badgeStyle: "text-green-400 bg-green-500/10 border-green-500/30",
    description:
      "Selected for Nationwide's competitive Technology internship program. Starting summer 2026 in Columbus, OH.",
  },
  {
    date: "2025",
    company: "IBM Fintech Hackathon",
    role: "1st Place Winner",
    badge: "🥇 Winner",
    badgeStyle: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
    description:
      "Built CLARA — an ML platform for financial risk analysis — and took 1st place competing against teams across the region.",
  },
  {
    date: "2021",
    company: "U.S. Patent & Trademark Office",
    role: "Patent Holder",
    badge: "USPTO",
    badgeStyle: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    description: "Awarded U.S. Patent #20210396625.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <AnimateIn>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12">
          Experience
        </h2>
      </AnimateIn>

      <div className="space-y-5">
        {experiences.map((exp, i) => (
          <AnimateIn key={i} delay={i * 100}>
            <div className="border border-slate-800/80 hover:border-blue-500/30 bg-[#0d1526]/60 rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-heading text-white font-semibold text-lg">
                    {exp.company}
                  </h3>
                  <p className="text-blue-400 text-sm mt-0.5">{exp.role}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full border font-mono ${exp.badgeStyle}`}
                  >
                    {exp.badge}
                  </span>
                  <span className="text-slate-600 text-xs font-mono">
                    {exp.date}
                  </span>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
