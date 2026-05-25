import AnimateIn from "./AnimateIn";

const stats = [
  { value: "3.92", label: "GPA" },
  { value: "Patent", label: "USPTO #20210396625" },
  { value: "IBM 🥇", label: "Hackathon Winner" },
  { value: "Nationwide", label: "Incoming Intern" },
];

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <AnimateIn delay={100}>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mb-12">
          I&apos;m a junior at Ohio State studying Finance, Mathematics, and
          Computer Science with a 3.92 GPA. I build at the intersection of
          software and finance — from ML-powered risk platforms to quantitative
          pricing tools and full-stack fintech apps. I hold a U.S. patent, won
          1st place at IBM&apos;s Fintech Hackathon, and am joining Nationwide
          as a Technology Intern this summer. I&apos;m actively targeting Summer
          2027 software engineering, quant finance, and fintech internships.
        </p>
      </AnimateIn>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <AnimateIn key={stat.label} delay={i * 80}>
            <div className="border border-blue-500/20 bg-blue-500/5 rounded-xl p-4 text-center hover:border-blue-500/40 transition-colors duration-200">
              <p className="font-heading text-lg font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-slate-500 text-xs leading-tight">{stat.label}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
