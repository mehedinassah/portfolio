import { staticProjects } from "../data/staticData";
import StackedCardCarousel from "./StackedCardCarousel";

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

      <StackedCardCarousel projects={projects} />

      {/* Info Text */}
      <div className="max-w-6xl mx-auto mt-12 text-center">
        <p className="text-gray-400 text-sm">
          Hover left or right side to glide through cards • {projects.length} projects total
        </p>
      </div>
    </section>
  );
}
