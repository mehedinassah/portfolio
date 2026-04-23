import { staticProjects } from "../data/staticData";
import { ExternalLink } from "lucide-react";

export default function ProjectsCarousel() {
  const projects = staticProjects;

  return (
    <section id="projects" className="section-projects py-20 px-6 relative">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg mb-4">
          <span className="text-blue-400 text-sm font-medium">FEATURED WORK</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Projects that <span className="text-blue-400">Matter</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Click any project to explore, or use the dots below to navigate
        </p>
      </div>

      {/* Carousel Container */}
      <div className="max-w-6xl mx-auto relative">
        {/* Carousel List */}
        <ul className="projects-carousel">
          {projects.map((project, index) => {
            // Accent colors for each project
            const accentColors = [
              { border: "border-teal-500/50", bg: "bg-teal-500/10", text: "text-teal-400" },
              { border: "border-blue-500/50", bg: "bg-blue-500/10", text: "text-blue-400" },
              { border: "border-violet-500/50", bg: "bg-violet-500/10", text: "text-violet-400" },
              { border: "border-emerald-500/50", bg: "bg-emerald-500/10", text: "text-emerald-400" },
              { border: "border-amber-500/50", bg: "bg-amber-500/10", text: "text-amber-400" },
            ];
            const color = accentColors[index % accentColors.length];

            return (
              <li
                key={project.id}
                className={`projects-carousel-item ${index === 0 ? "scroll-start" : ""}`}
              >
                {/* Card */}
                <div className={`project-card border ${color.border} ${color.bg}`}>
                  {/* Icon & Title */}
                  <div className="mb-4">
                    <div className="text-5xl mb-3">{project.emoji}</div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${color.text} ${color.bg} border border-current/30`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2 py-1 rounded bg-white/10 border border-white/20 text-gray-300`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded bg-white/10 border border-white/20 text-gray-400">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2 border-t border-white/10">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="text-lg">↗</span>
                      Code
                    </a>
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Info Text */}
      <div className="max-w-6xl mx-auto mt-12 text-center">
        <p className="text-gray-400 text-sm">
          Scroll or use navigation arrows • {projects.length} projects total
        </p>
      </div>
    </section>
  );
}
