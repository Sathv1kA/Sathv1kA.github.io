export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/[0.07] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-700/[0.05] rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 w-full pt-20 pb-32">
        {/* Label */}
        <p
          className="opacity-0 animate-fade-up flex items-center gap-3 text-xs text-blue-400 font-mono tracking-widest uppercase mb-8"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="w-8 h-px bg-blue-400/60" />
          CS · Finance · Mathematics — The Ohio State University
        </p>

        {/* Name */}
        <h1
          className="opacity-0 animate-fade-up font-heading font-extrabold text-white leading-[0.93] tracking-tight mb-8"
          style={{
            fontSize: "clamp(3.2rem, 10vw, 6.5rem)",
            animationDelay: "0.2s",
          }}
        >
          Sathvik
          <br />
          Allipuram
        </h1>

        {/* Tagline */}
        <p
          className="opacity-0 animate-fade-up text-slate-400 text-base md:text-lg max-w-lg leading-relaxed mb-12"
          style={{ animationDelay: "0.38s" }}
        >
          ML &amp; Fintech builder · Incoming Nationwide Technology Intern ·
          IBM Hackathon Winner
        </p>

        {/* CTAs */}
        <div
          className="opacity-0 animate-fade-up flex flex-wrap gap-3"
          style={{ animationDelay: "0.52s" }}
        >
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="https://github.com/Sathv1kA"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-700 hover:border-blue-500/60 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-200"
          >
            GitHub ↗
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-slate-700 hover:border-blue-500/60 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-200"
          >
            Resume ↓
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="opacity-0 animate-fade-up absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animationDelay: "0.9s" }}
      >
        <span className="text-slate-600 text-[10px] font-mono tracking-widest uppercase">
          scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
