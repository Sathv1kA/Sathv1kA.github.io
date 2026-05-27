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
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <AnimateIn delay={100}>
        <div className="flex flex-col-reverse md:flex-row gap-10 items-start mb-12">
          <p
            className="text-[#333333] max-w-2xl"
            style={{
              fontSize: "17px",
              lineHeight: "1.47",
              letterSpacing: "-0.374px",
            }}
          >
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
              className="w-32 h-32 rounded-full object-cover border border-[#e0e0e0]"
            />
          </div>
        </div>
      </AnimateIn>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((stat, i) => (
          <AnimateIn key={stat.label} delay={i * 80}>
            <div className="rounded-[18px] border border-[#e0e0e0] bg-white p-4 text-center transition-all duration-200 hover:border-[#0066cc]/30 hover:shadow-sm">
              <p
                className="font-heading text-lg font-semibold text-[#1d1d1f] mb-1"
                style={{ letterSpacing: "-0.374px" }}
              >
                {stat.value}
              </p>
              <p
                className="text-[#7a7a7a] text-xs leading-tight"
                style={{ letterSpacing: "-0.12px" }}
              >
                {stat.label}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
