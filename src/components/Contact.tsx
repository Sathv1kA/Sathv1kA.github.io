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
    <section id="contact" className="max-w-5xl mx-auto px-6 pb-24">
      <AnimateIn>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-800 mb-12">
          Contact
        </h2>
      </AnimateIn>

      <div className="space-y-4">
        {links.map((link, i) => (
          <AnimateIn key={link.label} delay={i * 80}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white px-6 py-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-6">
                <span className="text-slate-500 text-xs font-mono w-16 uppercase tracking-wider">
                  {link.label}
                </span>
                <span className="text-slate-700 group-hover:text-slate-900 text-sm transition-colors duration-200">
                  {link.value}
                </span>
              </div>
              <span className="text-sm text-slate-400 transition-colors duration-200 group-hover:text-blue-500">
                ↗
              </span>
            </a>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
