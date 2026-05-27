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
            I&apos;m a sophomore at Ohio State studying Finance, Mathematics,
            and Computer Science with a 3.92 GPA. I&apos;m driven by curiosity
            and a love of learning — I enjoy exploring new ideas, picking up new
            skills, and building things that work. I completed a financial co-op
            at Nationwide analyzing $100B+ in investments, currently intern on
            their AI &amp; Automation team, hold a U.S. patent, and won 1st at
            the IBM Buckeye Hackathon and 2nd at the Anthropic OSU Claude
            Hackathon. Actively targeting Summer 2027 software engineering and
            tech internships.
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
