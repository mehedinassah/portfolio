import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { staticProjects } from "../data/staticData";

function ProjectCard3D({ project, index }) {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / rect.height;
    const y = (e.clientX - rect.left - rect.width / 2) / rect.width;

    setRotation({ x: x * 15, y: y * 15 });

    gsap.to(cardRef.current, {
      rotateX: x * 15,
      rotateY: y * 15,
      duration: 0.6,
    });
  };

  const handleMouseLeave = () => {
    if (!isFlipped) {
      setRotation({ x: 0, y: 0 });
      gsap.to(cardRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
      });
    }
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    gsap.to(cardRef.current, {
      rotateY: isFlipped ? 0 : 180,
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className="h-80 cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Front of card */}
      <motion.div
        className="w-full h-full rounded-xl bg-gradient-to-br from-accent-slate/10 to-accent-blue/10 border border-accent-blue/30 p-6 flex flex-col justify-between backdrop-blur-sm relative overflow-hidden"
        style={{
          backfaceVisibility: "hidden",
        }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-transparent opacity-0 group-hover:opacity-100"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Card content */}
        <div className="relative z-10">
          <motion.div
            className="text-4xl mb-3"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            {project.emoji}
          </motion.div>
          <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
          <p className="text-accent-slate text-sm line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 relative z-10">
          {project.techStack.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 rounded bg-accent-blue/30 text-accent-slate-light font-mono"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs px-2 py-1 rounded bg-accent-slate/20 text-accent-slate-light font-mono">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Flip indicator */}
        <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue text-xs">
          ↗
        </div>
      </motion.div>

      {/* Back of card */}
      <motion.div
        className="w-full h-full rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-slate/10 border border-accent-blue/30 p-6 flex flex-col justify-between backdrop-blur-sm absolute"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        <div>
          <h4 className="text-accent-blue font-bold mb-3 text-sm uppercase tracking-wider">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1.5 rounded-full bg-accent-blue/30 text-accent-slate-light font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-4 border-t border-accent-blue/20">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 px-3 py-2 rounded bg-accent-blue/30 text-accent-blue text-center text-xs font-mono hover:bg-accent-blue/50 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              Code
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 px-3 py-2 rounded bg-accent-blue/30 text-accent-blue text-center text-xs font-mono hover:bg-accent-blue/50 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              Live
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects3D() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/3 left-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-accent-slate/5 rounded-full blur-[100px]"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <p className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-4">
            Featured Work
          </p>
          <h2 className="font-display font-900 text-5xl md:text-6xl text-white mb-4">
            3D Project Showcase
          </h2>
          <p className="text-lg text-accent-slate max-w-2xl mx-auto">
            Click cards to reveal tech stack. Built with 3D transforms and interactive animations.
          </p>
        </motion.div>

        {/* 3D Flip Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {staticProjects.slice(0, 6).map((project, idx) => (
            <ProjectCard3D key={project.id} project={project} index={idx} />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/mehedinassah"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white bg-gradient-to-r from-accent-blue to-blue-600 hover:shadow-lg hover:shadow-accent-blue/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>🐙</span>
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
