import { staticProjects } from "../data/staticData";
import StackedCardCarousel from "./StackedCardCarousel";

export default function ProjectsCarousel() {
  const projects = staticProjects;

  return (
    <section id="projects" className="section-projects py-16 md:py-20 px-4 md:px-6 relative">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8 md:mb-12">
        <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg mb-3 md:mb-4">
          <span className="text-blue-400 text-xs md:text-sm font-medium">FEATURED WORK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
          Projects that <span className="text-blue-400">Matter</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg">
          Tap cards or use controls to explore projects.
        </p>
      </div>

      <StackedCardCarousel projects={projects} />

      {/* Info Text */}
      <div className="max-w-6xl mx-auto mt-8 md:mt-12 text-center px-2">
        <p className="text-gray-400 text-xs sm:text-sm">
          Swipe mindset: use Prev/Next on mobile, hover zones on desktop • {projects.length} projects
        </p>
      </div>
    </section>
  );
}
