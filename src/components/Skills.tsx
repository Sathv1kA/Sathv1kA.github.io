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
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <AnimateIn>
        <h2
          className="font-heading text-3xl font-semibold text-[#1d1d1f] mb-10"
          style={{ letterSpacing: "-0.02em" }}
        >
          Tech Stack
        </h2>
      </AnimateIn>

      <div className="space-y-7">
        {skillGroups.map((group, i) => (
          <AnimateIn key={group.label} delay={i * 60}>
            <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] gap-4 items-start">
              <p
                className="text-[#7a7a7a] text-xs pt-1 uppercase tracking-wider font-mono"
                style={{ letterSpacing: "0.08em" }}
              >
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#e0e0e0] bg-white px-3 py-1 text-xs text-[#333333] transition-all duration-200 hover:border-[#0066cc]/40 hover:text-[#0066cc]"
                    style={{ letterSpacing: "-0.12px" }}
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
