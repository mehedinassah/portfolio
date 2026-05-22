import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Hero3D() {
  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, years: 0, passion: 0 });

  useEffect(() => {
    // Mouse tracking for parallax
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

      // Parallax effect on floating elements
      gsap.to(".hero-float", {
        x: x * 30,
        y: y * 30,
        duration: 0.8,
        overwrite: "auto",
      });

      // 3D tilt on main container
      gsap.to(".hero-bg", {
        rotateX: y * 3,
        rotateY: x * 3,
        duration: 1,
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate counters on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters
            gsap.to(counters, {
              projects: 15,
              years: 2,
              passion: 100,
              duration: 2.5,
              snap: { projects: 1, years: 1, passion: 1 },
              onUpdate: () => {
                setCounters({ ...counters });
              },
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Background with perspective */}
      <div className="absolute inset-0 -z-10 perspective">
        <div
          className="hero-bg absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Animated gradient mesh background */}
          <motion.div
            className="absolute inset-0"
            initial={{
              background:
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            }}
            animate={{
              background: isHovered
                ? "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.25) 0%, transparent 50%)"
                : "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            }}
            transition={{ duration: 3 }}
          />

          {/* Floating animated blur balls */}
          <motion.div
            className="hero-float absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px]"
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="hero-float absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-slate/15 rounded-full blur-[100px]"
            animate={{
              y: [0, -40, 0],
              x: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="hero-float absolute top-1/2 right-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-[90px]"
            animate={{
              y: [0, 30, 0],
              x: [0, -40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        ref={containerRef}
        className="max-w-5xl mx-auto text-center z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Status Badge with glow animation */}
        <motion.div
          className="mb-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/30 backdrop-blur-md relative"
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-emerald-500"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-accent-blue text-xs font-mono">Open to opportunities</span>
        </motion.div>

        {/* Main Title with gradient and animation */}
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.h1 className="font-display font-900 text-7xl md:text-8xl lg:text-9xl text-white mb-4 leading-none">
            Hi, I'm
          </motion.h1>
          <motion.h1
            className="font-display font-900 text-7xl md:text-8xl lg:text-9xl leading-none"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="gradient-text">Mehedi Hassan</span>
          </motion.h1>
        </motion.div>

        {/* Animated Role Badges */}
        <motion.div className="flex flex-wrap justify-center gap-3 mb-10" variants={itemVariants}>
          {["Full-Stack Developer", "Android Engineer", "AI Innovator"].map((role, idx) => (
            <motion.span
              key={idx}
              className="px-5 py-3 rounded-lg bg-accent-blue/10 text-accent-slate-light text-sm font-mono border border-accent-blue/30 backdrop-blur-sm cursor-pointer"
              whileHover={{
                scale: 1.08,
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)",
              }}
              transition={{ delay: idx * 0.1 }}
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* Animated Description */}
        <motion.p
          className="text-xl md:text-2xl text-accent-slate mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Building <span className="text-accent-blue font-600">scalable solutions</span> with
          cutting-edge tech. Passionate about{" "}
          <span className="text-accent-blue font-600">3D interactions</span>,{" "}
          <span className="text-accent-blue font-600">clean code</span>, and creating
          products that users absolutely love.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-20" variants={itemVariants}>
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="group relative px-10 py-4 rounded-lg font-bold text-lg text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-blue via-blue-500 to-accent-blue"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-blue to-blue-600 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <span className="relative flex items-center justify-center gap-2">
              Explore My Work
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("contact")}
            className="px-10 py-4 rounded-lg font-bold text-lg text-accent-blue border-2 border-accent-blue/50 hover:border-accent-blue hover:bg-accent-blue/10 transition-all backdrop-blur-sm"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Animated Stats with Real Counters */}
        <motion.div
          className="grid grid-cols-3 gap-6 md:gap-12 mb-16 p-10 rounded-2xl bg-accent-slate/5 backdrop-blur-md border border-accent-blue/20"
          variants={itemVariants}
        >
          {[
            { value: counters.projects, label: "Projects", suffix: "+" },
            { value: counters.years, label: "Years", suffix: "+" },
            { value: counters.passion, label: "Passion", suffix: "%" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ delay: idx * 0.1 }}
            >
              <motion.div className="text-4xl md:text-5xl font-900 text-accent-blue mb-3">
                {Math.ceil(stat.value)}
                {stat.suffix}
              </motion.div>
              <div className="text-sm md:text-base text-accent-slate font-mono uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-xs text-accent-slate mb-6 font-mono uppercase tracking-widest">
            ✨ Tech Arsenal
          </p>
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {["React", "Next.js", "Node.js", "Java", "MongoDB", "TailwindCSS", "Python", "GSAP", "3D"].map(
              (tech, idx) => (
                <motion.span
                  key={tech}
                  className="text-xs px-4 py-2 rounded-full bg-accent-blue/10 text-accent-slate-light border border-accent-blue/30 font-mono cursor-pointer backdrop-blur-sm"
                  whileHover={{
                    scale: 1.12,
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                    boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
                  }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>
        </motion.div>

        {/* GitHub Link */}
        <motion.div className="mt-10 flex justify-center" variants={itemVariants}>
          <motion.a
            href="https://github.com/mehedinassah"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-accent-slate hover:text-accent-blue transition-colors text-sm font-mono"
            whileHover={{ scale: 1.1, x: 5 }}
          >
            <span className="text-lg">🐙</span>
            View on GitHub
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="text-accent-slate text-xs font-mono">Scroll to explore</span>
        <motion.div
          className="w-1 h-8 rounded-full border border-accent-blue/50"
          animate={{ height: [8, 12, 8] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <motion.div
            className="w-full bg-accent-blue rounded-full"
            animate={{ height: ["20%", "60%", "20%"] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
