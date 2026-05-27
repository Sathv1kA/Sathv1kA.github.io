export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#1d1d1f" }}
    >
      {/* Bottom wave → parchment */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-20 block"
        >
          <path
            d="M0,40 C240,80 480,10 720,45 C960,80 1200,20 1440,45 L1440,80 L0,80 Z"
            fill="#f5f5f7"
          />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 flex items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full min-w-0 pt-[44px] pb-28">
          {/* Left: text */}
          <div className="min-w-0">
            <p
              className="text-[#86868b] text-sm font-medium mb-5 opacity-0 animate-fade-up tracking-wide"
              style={{ animationDelay: "0.1s" }}
            >
              CS · Finance · Mathematics · Ohio State University
            </p>
            <h1
              className="font-heading font-semibold text-white leading-tight mb-2 opacity-0 animate-fade-up break-words"
              style={{
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                letterSpacing: "-0.02em",
                animationDelay: "0.2s",
              }}
            >
              Hi, I am Sathvik
            </h1>
            <p
              className="font-heading font-semibold text-[#2997ff] mb-6 opacity-0 animate-fade-up"
              style={{
                fontSize: "clamp(1.3rem, 3.5vw, 1.9rem)",
                letterSpacing: "-0.01em",
                animationDelay: "0.28s",
              }}
            >
              ML &amp; Fintech Developer
            </p>
            <p
              className="text-[#86868b] max-w-md mb-8 opacity-0 animate-fade-up"
              style={{
                fontSize: "17px",
                lineHeight: "1.47",
                letterSpacing: "-0.374px",
                animationDelay: "0.38s",
              }}
            >
              Curious builder who loves to learn — from ML systems to fintech
              products to anything in between. AI &amp; Automation Intern @
              Nationwide · 2× Hackathon Winner · U.S. Patent Holder.
            </p>

            {/* Social icons */}
            <div
              className="flex items-center gap-5 mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.46s" }}
            >
              <a
                href="https://github.com/Sathv1kA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#86868b] hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/sathvik-allipuram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#86868b] hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:sathvik.allipuram@gmail.com"
                className="text-[#86868b] hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.56s" }}
            >
              <a
                href="/resume.pdf"
                download
                className="bg-[#0066cc] hover:bg-[#0071e3] active:scale-95 text-white px-[22px] py-[11px] rounded-full font-normal transition-all duration-200"
                style={{ fontSize: "17px", letterSpacing: "-0.374px" }}
              >
                Resume
              </a>
              <a
                href="/projects"
                className="border border-white/25 hover:border-white/50 active:scale-95 text-white px-[22px] py-[11px] rounded-full font-normal transition-all duration-200"
                style={{ fontSize: "17px", letterSpacing: "-0.374px" }}
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right: code window */}
          <div
            className="hidden md:block opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
            aria-hidden="true"
          >
            <div className="relative">
              <div className="bg-black/50 rounded-[18px] p-5 border border-white/10">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-[#7a7a7a] text-xs font-mono">
                    profile.py
                  </span>
                </div>
                <div className="font-mono text-sm space-y-1 leading-relaxed">
                  <p>
                    <span className="text-purple-400">class </span>
                    <span className="text-green-400">Sathvik</span>
                    <span className="text-[#7a7a7a]">:</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#2997ff]">school</span>
                    <span className="text-[#7a7a7a]"> = </span>
                    <span className="text-orange-300">&quot;Ohio State&quot;</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#2997ff]">gpa</span>
                    <span className="text-[#7a7a7a]"> = </span>
                    <span className="text-yellow-400">3.92</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#2997ff]">focus</span>
                    <span className="text-[#7a7a7a]"> = </span>
                    <span className="text-orange-300">&quot;ML &amp; Fintech&quot;</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#2997ff]">wins</span>
                    <span className="text-[#7a7a7a]"> = [</span>
                  </p>
                  <p className="pl-8">
                    <span className="text-orange-300">&quot;IBM Hackathon 🥇&quot;</span>
                    <span className="text-[#7a7a7a]">,</span>
                  </p>
                  <p className="pl-8">
                    <span className="text-orange-300">
                      &quot;Anthropic Hackathon 🥈&quot;
                    </span>
                    <span className="text-[#7a7a7a]">,</span>
                  </p>
                  <p className="pl-8">
                    <span className="text-orange-300">&quot;USPTO Patent&quot;</span>
                    <span className="text-[#7a7a7a]">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#7a7a7a]">]</span>
                  </p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-[#0066cc] text-white text-xs font-mono px-3 py-1.5 rounded-full">
                Interning @ Nationwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
