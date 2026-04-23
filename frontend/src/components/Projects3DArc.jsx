import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { staticProjects } from "../data/staticData";

const accentColors = [
  { name: "teal", bg: "bg-teal-500/20", border: "border-teal-500/50", glow: "shadow-teal-500/40" },
  { name: "blue", bg: "bg-blue-500/20", border: "border-blue-500/50", glow: "shadow-blue-500/40" },
  { name: "violet", bg: "bg-violet-500/20", border: "border-violet-500/50", glow: "shadow-violet-500/40" },
  { name: "emerald", bg: "bg-emerald-500/20", border: "border-emerald-500/50", glow: "shadow-emerald-500/40" },
  { name: "amber", bg: "bg-amber-500/20", border: "border-amber-500/50", glow: "shadow-amber-500/40" },
];

function Project3DCard({ project, index, isCenter, isSide, position, onClick, colors }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const arcPositions = {
    center: { x: 0, y: 0, z: 100, rotateZ: 0, scale: 1.1 },
    left2: { x: -180, y: 40, z: -50, rotateZ: 15, scale: 0.75 },
    left1: { x: -110, y: 20, z: -20, rotateZ: 8, scale: 0.85 },
    right1: { x: 110, y: 20, z: -20, rotateZ: -8, scale: 0.85 },
    right2: { x: 180, y: 40, z: -50, rotateZ: -15, scale: 0.75 },
  };

  const pos = arcPositions[position];

  useEffect(() => {
    if (cardRef.current && isHovered) {
      gsap.to(cardRef.current, {
        y: -15,
        boxShadow: `0 30px 60px rgba(59, 130, 246, 0.4)`,
        duration: 0.3,
      });
    } else if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3)`,
        duration: 0.3,
      });
    }
  }, [isHovered]);

  const containerVariants = {
    hidden: { opacity: 0, x: position.includes("left") ? -100 : 100, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: Math.abs(index - 2) * 0.1,
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1200px) translateX(${pos.x}px) translateY(${pos.y}px) translateZ(${pos.z}px) rotateZ(${pos.rotateZ}deg) scale(${pos.scale})`,
      }}
      className="absolute w-full cursor-pointer transition-all"
      onClick={() => onClick(index)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`p-6 md:p-8 rounded-xl backdrop-blur-sm border ${colors.border} ${colors.bg} 
        transition-all duration-300 h-full min-h-[320px] flex flex-col
        ${isHovered ? "border-opacity-100" : "border-opacity-50"}`}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="text-3xl mb-2 opacity-70 group-hover:opacity-100 transition-opacity">
              {project.emoji}
            </div>
            <h3 className="font-bold text-lg text-white leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Category Badge */}
        <span className="inline-flex text-xs px-2 py-1 rounded-md bg-white/5 text-white/70 font-mono mb-3 w-fit">
          {project.category}
        </span>

        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-white/50 font-mono">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs px-2 py-0.5 text-white/40 font-mono">+{project.techStack.length - 3}</span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-white/10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs text-white/60 hover:text-white transition-colors font-mono"
            >
              Code →
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs text-white/60 hover:text-white transition-colors font-mono ml-auto"
            >
              Live →
            </a>
          )}
        </div>

        {/* Center indicator */}
        {isCenter && (
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
        )}
      </div>
    </motion.div>
  );
}

export default function Projects3DArc() {
  const [projects, setProjects] = useState(staticProjects);
  const [centerIndex, setCenterIndex] = useState(0);
  const containerRef = useRef(null);

  const getPositions = (center) => {
    const positions = ["left2", "left1", "center", "right1", "right2"];
    return positions.map((pos, i) => {
      const projectIndex = (center - 2 + i + projects.length) % projects.length;
      return { position: pos, index: projectIndex };
    });
  };

  const handleCardClick = (clickedIndex) => {
    const newCenter = clickedIndex;
    setCenterIndex(newCenter);
  };

  const handleNavDot = (index) => {
    setCenterIndex(index);
  };

  const positionMap = getPositions(centerIndex);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("section-visible");
        });
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen pt-20 pb-20 px-4 md:px-8 bg-gradient-to-b from-slate-950 to-slate-900 
      border-t-4 border-blue-500/50 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 mb-4">
            <span className="text-xs font-mono text-blue-400">FEATURED WORK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects that <span className="text-blue-400">Matter</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Click any project to explore, or use the dots below to navigate
          </p>
        </motion.div>

        {/* 3D Arc Container */}
        <div
          ref={containerRef}
          className="relative h-96 md:h-96 mb-12 flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          <AnimatePresence mode="wait">
            {positionMap.map(({ position, index }) => (
              <Project3DCard
                key={`${index}-${centerIndex}`}
                project={projects[index]}
                index={index}
                isCenter={position === "center"}
                isSide={position !== "center"}
                position={position}
                onClick={() => handleCardClick(index)}
                colors={accentColors[index % accentColors.length]}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {projects.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => handleNavDot(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === centerIndex
                  ? "bg-blue-400 w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Project Info */}
        <motion.div
          key={centerIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold text-white mb-2">
            {projects[centerIndex].title}
          </h3>
          <p className="text-white/70 text-sm mb-4">
            {projects[centerIndex].description}
          </p>
          <div className="flex flex-wrap gap-2">
            {projects[centerIndex].techStack.map((tech) => (
              <span key={tech} className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
