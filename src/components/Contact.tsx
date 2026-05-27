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
    <section id="contact" className="max-w-5xl mx-auto px-6 pb-20">
      <AnimateIn>
        <h2
          className="font-heading text-3xl font-semibold text-[#1d1d1f] mb-10"
          style={{ letterSpacing: "-0.02em" }}
        >
          Contact
        </h2>
      </AnimateIn>

      <div className="space-y-3">
        {links.map((link, i) => (
          <AnimateIn key={link.label} delay={i * 80}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between rounded-[18px] border border-[#e0e0e0] bg-white px-6 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0066cc]/30 hover:shadow-sm"
            >
              <div className="flex items-center gap-6">
                <span
                  className="text-[#7a7a7a] text-xs font-mono w-16 uppercase"
                  style={{ letterSpacing: "0.08em" }}
                >
                  {link.label}
                </span>
                <span
                  className="text-[#1d1d1f] group-hover:text-[#0066cc] text-sm transition-colors duration-200"
                  style={{ letterSpacing: "-0.224px" }}
                >
                  {link.value}
                </span>
              </div>
              <span className="text-sm text-[#7a7a7a] transition-colors duration-200 group-hover:text-[#0066cc]">
                ↗
              </span>
            </a>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
