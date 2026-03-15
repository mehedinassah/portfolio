import { useState, useEffect } from "react";

const roles = [
  "Software Developer",
  "Android Developer",
  "Web Developer",
  "Full-Stack Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [typing, charIndex, roleIndex]);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00d4ff]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#8b5cf6]/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4f8ef7]/5 blur-[150px] pointer-events-none" />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-1 h-1 rounded-full"
          style={{
            background: i % 3 === 0 ? "#00d4ff" : i % 3 === 1 ? "#8b5cf6" : "#4f8ef7",
            left: `${10 + i * 7.5}%`,
            top: `${15 + (i % 5) * 15}%`,
            opacity: 0.3 + (i % 4) * 0.1,
            animationDuration: `${4 + i * 0.8}s`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
          <span className="text-sm font-mono text-[#00d4ff]/80 tracking-wide">
            Available for Full-time, Part-time, Remote & On-site
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display font-extrabold text-6xl md:text-8xl leading-none mb-4 tracking-tight">
          <span className="text-white">Mehedi</span>
          <br />
          <span className="text-gradient">Hassan</span>
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-base md:text-lg text-white/50 mb-8 tracking-wide">
          Software Developer&nbsp;
          <span className="text-[#00d4ff]/60">|</span>&nbsp;
          <span className="text-[#00d4ff]">Android</span>
          <span className="text-white/30"> • </span>
          <span className="text-[#4f8ef7]">Full-Stack</span>
          <span className="text-white/30"> • </span>
          <span className="text-[#8b5cf6]">AI</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => handleScroll("projects")}
            className="btn-primary text-base px-8 py-4 rounded-xl font-display w-full sm:w-auto"
          >
            View My Projects →
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="btn-outline text-base px-8 py-4 rounded-xl font-display w-full sm:w-auto"
          >
            Contact Me
          </button>
          <a
            href="https://github.com/mehedinassah"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-mono"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub Profile
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: "8+", label: "Projects Built" },
            { value: "4+", label: "Years Coding" },
            { value: "∞", label: "Curiosity" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-extrabold text-3xl text-gradient">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs font-mono mt-1 tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs font-mono tracking-widest uppercase">
          scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#00d4ff]/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
