import AnimateIn from "./AnimateIn";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "Solidity", "C#"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui", "Flask"],
  },
  {
    label: "ML / Data",
    skills: ["XGBoost", "Random Forest", "scikit-learn", "pandas", "NumPy"],
  },
  {
    label: "Finance / Quant",
    skills: [
      "Black-Scholes",
      "Options Pricing",
      "Financial Risk Modeling",
      "Quantitative Analysis",
    ],
  },
  {
    label: "Tools",
    skills: ["Git / GitHub", "VS Code", "Claude Code", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <AnimateIn>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12">
          Tech Stack
        </h2>
      </AnimateIn>

      <div className="space-y-8">
        {skillGroups.map((group, i) => (
          <AnimateIn key={group.label} delay={i * 60}>
            <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] gap-4 items-start">
              <p className="text-slate-600 text-xs font-mono pt-1 uppercase tracking-wider">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-slate-400 border border-slate-700/80 bg-slate-800/30 px-3 py-1 rounded-full hover:border-blue-500/40 hover:text-slate-300 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
