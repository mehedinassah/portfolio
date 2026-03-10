import { useEffect, useRef } from "react";

const techStack = [
  { name: "Java", color: "#f89820" },
  { name: "Kotlin", color: "#7F52FF" },
  { name: "Spring Boot", color: "#6DB33F" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Android", color: "#3DDC84" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Python", color: "#3776AB" },
  { name: "Git", color: "#F05032" },
  { name: "REST API", color: "#00d4ff" },
  { name: "Tailwind CSS", color: "#38BDF8" },
  { name: "MVVM", color: "#8b5cf6" },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("section-visible");
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto section-hidden">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase mb-3"></p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Bio */}
          <div className="space-y-6">
            {/* Avatar placeholder */}
            <div className="w-20 h-20 rounded-2xl gradient-border flex items-center justify-center text-4xl mb-8">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center text-5xl">
                👨‍💻
              </div>
            </div>

            <p className="text-white/70 text-lg leading-relaxed font-body">
              Hi, I'm <span className="text-white font-semibold">Mehedi Hassan</span>, a
              CS undergrad developer passionate about building{" "}
              <span className="text-[#00d4ff]">simple, scalable, and useful</span>{" "}
              software.
            </p>
            <p className="text-white/60 leading-relaxed font-body">
              I create <span className="text-[#3DDC84] font-medium">Android apps</span>,{" "}
              <span className="text-[#61DAFB] font-medium">
                full-stack web applications
              </span>{" "}
              and explore{" "}
              <span className="text-[#8b5cf6] font-medium">AI-powered products</span>.
            </p>
            <p className="text-white/60 leading-relaxed font-body">
              I'm looking for opportunities to build{" "}
              <span className="text-white/80 font-medium">
                impactful software used globally
              </span>
              .
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Location", value: "Bangladesh 🇧🇩", icon: "📍" },
                { label: "Focus", value: "Remote & On-site", icon: "🌍" },
                { label: "Speciality", value: "Android + Web", icon: "💻" },
                { label: "Status", value: "Available Now", icon: "🟢" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="gradient-border p-4 rounded-xl hover:bg-white/2 transition-colors"
                >
                  <div className="text-xl mb-1">{item.icon}</div>
                  <div className="text-white/40 text-xs font-mono uppercase tracking-wider mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-white/80 text-sm font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tech Stack Grid */}
          <div>
            <p className="text-white/40 text-sm font-mono uppercase tracking-widest mb-6">
              Tech Stack
            </p>
            <div className="grid grid-cols-3 gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="group gradient-border p-3 rounded-xl hover:scale-105 transition-all duration-200 cursor-default"
                  style={{ "--hover-color": tech.color }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-2 transition-all duration-200"
                    style={{ backgroundColor: tech.color, opacity: 0.7 }}
                  />
                  <div className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>

            {/* What I build */}
            <div className="mt-8 p-5 rounded-xl bg-[#0d1424] border border-white/5">
              <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-4">
                What I Build
              </p>
              <div className="space-y-3">
                {[
                  { icon: "📱", title: "Android Apps", desc: "Native Kotlin with MVVM" },
                  { icon: "🌐", title: "Web Apps", desc: "React + Spring Boot APIs" },
                  { icon: "🤖", title: "AI Tools", desc: "LLM-powered applications" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="text-white/80 text-sm font-medium">
                        {item.title}
                      </div>
                      <div className="text-white/40 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
