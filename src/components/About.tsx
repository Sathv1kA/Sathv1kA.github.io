import Image from "next/image";
import AnimateIn from "./AnimateIn";

const stats = [
  { value: "3.92", label: "GPA" },
  { value: "Patent", label: "USPTO #20210396625" },
  { value: "2× 🏆", label: "IBM · Anthropic Hackathons" },
  { value: "Nationwide", label: "AI & Automation Intern" },
];

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <AnimateIn delay={100}>
        <div className="flex flex-col-reverse md:flex-row gap-10 items-start mb-12">
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
            Sophomore at Ohio State triple-majoring in Finance, Math, and CS —
            not because I had to, but because I genuinely like all three. I
            learn fastest by building: I&apos;ve shipped ML risk tools, LLM
            analyzers, and real estate dashboards; interned at Nationwide twice;
            won two hackathons; and somehow ended up with a U.S. patent. Always
            working on something. Open to Summer 2027 SWE internships.
          </p>
          <div className="shrink-0">
            <Image
              src="/profile.jpg"
              alt="Sathvik Allipuram"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover border-2 border-slate-200 shadow-md"
            />
          </div>
        </div>
      </AnimateIn>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <AnimateIn key={stat.label} delay={i * 80}>
            <div className="rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:border-blue-300 hover:shadow-md">
              <p className="font-heading text-lg font-bold text-slate-800 mb-1">
                {stat.value}
              </p>
              <p className="text-slate-600 text-xs leading-tight">{stat.label}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
