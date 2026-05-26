import AnimateIn from "./AnimateIn";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Next.js", "FastAPI", "Tailwind CSS", "shadcn/ui"],
  },
  {
    label: "ML / Data",
    skills: ["PyTorch", "TensorFlow", "XGBoost", "scikit-learn", "pandas", "NumPy", "BERT"],
  },
  {
    label: "Infrastructure",
    skills: ["Kafka", "Docker", "Git / GitHub", "Linux / Unix"],
  },
  {
    label: "Finance / Tools",
    skills: ["Power BI", "Bloomberg", "Excel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <AnimateIn>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-800 mb-12">
          Tech Stack
        </h2>
      </AnimateIn>

      <div className="space-y-8">
        {skillGroups.map((group, i) => (
          <AnimateIn key={group.label} delay={i * 60}>
            <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] gap-4 items-start">
              <p className="text-slate-400 text-xs font-mono pt-1 uppercase tracking-wider">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm transition-all duration-200 hover:border-blue-300 hover:text-blue-600"
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
