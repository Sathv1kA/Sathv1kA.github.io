import AnimateIn from "./AnimateIn";

const links = [
  {
    label: "Email",
    value: "sathvik.allipuram@gmail.com",
    href: "mailto:sathvik.allipuram@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Sathv1kA",
    href: "https://github.com/Sathv1kA",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sathvik-allipuram",
    href: "https://linkedin.com/in/sathvik-allipuram",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">

      <div className="space-y-4">
        {links.map((link, i) => (
          <AnimateIn key={link.label} delay={i * 80}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between border border-slate-800/80 hover:border-blue-500/30 bg-[#0d1526]/40 rounded-xl px-6 py-4 group transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-6">
                <span className="text-slate-600 text-xs font-mono w-16 uppercase tracking-wider">
                  {link.label}
                </span>
                <span className="text-slate-400 group-hover:text-white text-sm transition-colors duration-200">
                  {link.value}
                </span>
              </div>
              <span className="text-slate-700 group-hover:text-blue-400 text-sm transition-colors duration-200">
                ↗
              </span>
            </a>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
