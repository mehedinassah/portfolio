import { useEffect, useRef, useState } from "react";
import { staticSkills } from "../data/staticData";

function SkillBar({ name, proficiency, delay = 0 }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), delay);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const colorMap = {
    90: "#00d4ff",
    85: "#4f8ef7",
    80: "#4f8ef7",
    75: "#8b5cf6",
    70: "#8b5cf6",
    65: "#10b981",
    60: "#10b981",
  };
  const closest = Object.keys(colorMap).reduce((prev, curr) =>
    Math.abs(curr - proficiency) < Math.abs(prev - proficiency) ? curr : prev
  );
  const color = colorMap[closest] || "#00d4ff";

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono transition-all duration-300" style={{ color }}>
          {animated ? `${proficiency}%` : "0%"}
        </span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animated ? `${proficiency}%` : "0%",
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: animated ? `0 0 8px ${color}60` : "none",
          }}
        />
      </div>
    </div>
  );
}

const categoryConfig = {
  Languages: { icon: "{ }", color: "#00d4ff", desc: "Core programming languages" },
  Frameworks: { icon: "⚙️", color: "#8b5cf6", desc: "Libraries & frameworks" },
  Tools: { icon: "🛠", color: "#10b981", desc: "Dev tools & platforms" },
};

export default function Skills() {
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
    <section id="skills" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00d4ff]/5 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto section-hidden">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase mb-3"></p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            What I Work With
          </h2>
          <p className="text-white/40 max-w-lg font-body">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(staticSkills).map(([category, skills]) => {
            const config = categoryConfig[category];
            return (
              <div
                key={category}
                className="gradient-border p-6 rounded-2xl hover:bg-white/1 transition-colors"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: `${config.color}15`, color: config.color }}
                  >
                    {config.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base">
                      {category}
                    </h3>
                    <p className="text-white/30 text-xs">{config.desc}</p>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      proficiency={skill.proficiency}
                      delay={i * 100}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom: Key highlights */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Android Dev", sub: "Kotlin / Flutter", color: "#3DDC84" },
            { label: "Backend Dev", sub: "Java + Spring Boot", color: "#6DB33F" },
            { label: "Frontend Dev", sub: "React + Next.js", color: "#61DAFB" },
            { label: "AI Integration", sub: "OpenAI + Gemini", color: "#8b5cf6" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-xl bg-[#0d1424] border border-white/5 hover:border-white/10 transition-colors"
            >
              <div
                className="w-2 h-2 rounded-full mb-3"
                style={{ backgroundColor: item.color }}
              />
              <div className="text-white/80 text-sm font-semibold">{item.label}</div>
              <div className="text-white/30 text-xs mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
