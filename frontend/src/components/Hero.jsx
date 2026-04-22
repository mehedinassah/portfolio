import { motion } from "framer-motion";
import SystemStatus from "./SystemStatus";
import { ArrowRight } from "lucide-react";

const roles = ["Software Developer", "Full-Stack Engineer", "AI Enthusiast"];

export default function Hero() {
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* System Status Badge */}
        <motion.div className="mb-8 flex justify-center" variants={itemVariants}>
          <SystemStatus />
        </motion.div>

        {/* Main Name */}
        <motion.h1
          className="font-display font-700 text-5xl md:text-7xl leading-tight mb-6 tracking-tight"
          variants={itemVariants}
        >
          <span className="text-white">Mehedi Hassan</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-accent-slate-light mb-3 font-500"
          variants={itemVariants}
        >
          Building elegant solutions with{" "}
          <span className="text-white font-600">JavaScript, Java & Python</span>
        </motion.p>

        {/* Roles */}
        <motion.div className="flex flex-wrap justify-center gap-2 mb-10" variants={itemVariants}>
          {roles.map((role, idx) => (
            <span
              key={idx}
              className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-accent-slate/10 text-accent-slate-light border border-accent-slate/20 font-mono"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="btn-primary flex items-center gap-2 group"
          >
            View My Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-outline flex items-center gap-2"
          >
            Get In Touch <span>↗</span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div className="grid grid-cols-3 gap-6 md:gap-12 mb-16" variants={itemVariants}>
          {[
            { value: "15+", label: "Projects Completed" },
            { value: "2+", label: "Years Building" },
            { value: "100%", label: "Passion Driven" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-700 text-accent-blue mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-accent-slate font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-xs text-accent-slate mb-3 font-mono uppercase tracking-wider">
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Java",
              "MongoDB",
              "TailwindCSS",
              "Python",
              "AI/ML",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-md bg-accent-slate/5 text-accent-slate-light border border-accent-slate/20 font-mono hover:bg-accent-slate/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* GitHub Link */}
        <motion.div className="mt-12 flex justify-center" variants={itemVariants}>
          <a
            href="https://github.com/mehedinassah"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-accent-slate hover:text-white transition-colors text-sm font-mono"
          >
            <span>🐙</span>
            View on GitHub
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-accent-slate font-mono uppercase tracking-widest">
            Scroll to explore
          </span>
          <div className="w-5 h-8 border border-accent-slate/20 rounded-full flex items-center justify-center">
            <div className="w-0.5 h-1.5 bg-accent-slate/60 rounded-full animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
