import { useEffect, useRef } from "react";
import { experience, education } from "../data/staticData";

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("section-visible");
        }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#10b981]/5 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto section-hidden">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase mb-3"></p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white">
            My Journey
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="font-display font-bold text-white/80 text-lg mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#00d4ff]/20 flex items-center justify-center text-xs text-[#00d4ff]">
                💼
              </span>
              Experience
            </h3>

            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  className="gradient-border p-6 rounded-2xl hover:bg-white/1 transition-colors"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-display font-bold text-white text-lg">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#00d4ff] text-sm font-medium">
                          {exp.company}
                        </span>
                        <span className="text-white/20 text-xs">•</span>
                        <span className="text-white/40 text-xs font-mono">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-white/30 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 mt-4">
                    {exp.description.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm text-white/50"
                      >
                        <span className="text-[#00d4ff] mt-0.5 shrink-0">▸</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Open for work banner */}
            <div className="mt-6 p-4 rounded-xl border border-[#10b981]/20 bg-[#10b981]/5 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shrink-0" />
              <p className="text-[#10b981]/80 text-sm">
                <span className="font-semibold">Open to work</span> — actively seeking
                opportunities.
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-display font-bold text-white/80 text-lg mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#8b5cf6]/20 flex items-center justify-center text-xs">
                🎓
              </span>
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="gradient-border p-6 rounded-2xl hover:bg-white/1 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-display font-bold text-white text-base leading-snug">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#8b5cf6] text-sm font-medium">
                          {edu.institution}
                        </span>
                        <span className="text-white/20 text-xs">•</span>
                        <span className="text-white/40 text-xs font-mono">
                          {edu.location}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-white/30 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed mt-4">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills highlight */}
            <div className="mt-6 p-5 rounded-xl bg-[#0d1424] border border-white/5">
              <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-4">
                Continuously Learning
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "System Design",
                  "DSA",
                  "Cloud (AWS)",
                  "REST APIs",
                  "Docker",
                  "API Integration",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-white/50 border border-white/5 font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
