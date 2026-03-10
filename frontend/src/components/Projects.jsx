import { useEffect, useRef, useState } from "react";
import { staticProjects } from "../data/staticData";

function ProjectCard({ project, index }) {
  return (
    <div
      className="group gradient-border rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl cursor-default"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Card top accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background:
            project.category === "Android"
              ? "linear-gradient(90deg, #3DDC84, #00d4ff)"
              : "linear-gradient(90deg, #00d4ff, #8b5cf6)",
        }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{project.emoji}</div>
            <div>
              <span
                className="text-xs font-mono px-2 py-1 rounded-md"
                style={{
                  color: project.category === "Android" ? "#3DDC84" : "#00d4ff",
                  background:
                    project.category === "Android"
                      ? "rgba(61,220,132,0.1)"
                      : "rgba(0,212,255,0.1)",
                }}
              >
                {project.category}
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                title="View on GitHub"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 hover:bg-[#00d4ff]/20 flex items-center justify-center transition-colors"
                title="Live Demo"
              >
                <svg
                  className="w-4 h-4 text-[#00d4ff]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:text-gradient transition-all">
          {project.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-5 font-body">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-white/50 border border-white/5 font-mono hover:text-white/70 hover:bg-white/8 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom links */}
        <div className="mt-5 pt-4 border-t border-white/5 flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-white/40 hover:text-white transition-colors flex items-center gap-1.5 font-mono"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View Code
          </a>
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#00d4ff]/60 hover:text-[#00d4ff] transition-colors flex items-center gap-1.5 font-mono"
            >
              <span>↗</span> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const ref = useRef(null);
  const categories = ["All", "Web", "Android"];

  const filtered =
    filter === "All"
      ? staticProjects
      : staticProjects.filter((p) => p.category === filter);

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
    <section id="projects" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#4f8ef7]/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto section-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase mb-3"></p>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
              Things I've Built
            </h2>
            <p className="text-white/40 max-w-lg font-body">
              Real projects with real code. Click GitHub to see source.
            </p>
          </div>

          {/* Filter */}
          <div className="flex gap-2 p-1 rounded-xl bg-[#0d1424] border border-white/5 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? "bg-[#00d4ff] text-[#030712] font-semibold"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-[#0d1424] border border-white/5">
            <p className="text-white/50 font-body">
              Want to see all my code? Check my GitHub profile.
            </p>
            <a
              href="https://github.com/mehedinassah"
              target="_blank"
              rel="noreferrer"
              className="btn-primary flex items-center gap-2 rounded-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View All on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
