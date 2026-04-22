import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

function AnimatedCodePiece({ code, index, total }) {
  const angle = (index / total) * Math.PI * 2;
  const radius = 150;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute w-32 text-center"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.div
        className="px-3 py-1.5 rounded-lg bg-accent-blue/20 border border-accent-blue/50 backdrop-blur-sm font-mono text-xs text-accent-blue"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
      >
        {code}
      </motion.div>
    </motion.div>
  );
}

function FloatingTerminal() {
  const terminalRef = useRef(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    const handleMouseMove = (e) => {
      const rect = terminalRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 20;
      const y = (e.clientY - rect.top - rect.height / 2) / 20;

      gsap.to(terminalRef.current, {
        rotateX: -y,
        rotateY: x,
        duration: 0.8,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={terminalRef}
      className="relative w-96 h-48 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-slate/5 border border-accent-blue/30 backdrop-blur-sm overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-accent-slate/10 border-b border-accent-blue/20">
        <div className="w-2 h-2 rounded-full bg-red-500"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm space-y-1">
        <div className="text-accent-blue">$ <span className="text-accent-slate">initializing_mehedi.exe</span></div>
        <div className="text-emerald-400">✓ Core systems online</div>
        <div className="text-accent-blue">$ <span className="text-accent-slate">fullstack_dev | ai_builder</span></div>
        <div className="text-emerald-400">✓ Initialization complete</div>
      </div>

      {/* Animated Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.3)",
            "0 0 40px rgba(59, 130, 246, 0.6)",
            "0 0 20px rgba(59, 130, 246, 0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
}

export default function HeroAdvanced() {
  const codeSnippets = [
    "const build = () => scale",
    "async innovate()",
    "fn deploy() {}",
    "interface Solution",
    "< Engineer />",
    "// quality code",
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]"
          animate={{ y: [0, 60, 0], x: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent-slate/5 rounded-full blur-[100px]"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <p className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-4">
                Full-Stack Developer & AI Innovator
              </p>
              <h1 className="font-display font-900 text-6xl md:text-7xl text-white mb-4 leading-tight">
                Building{" "}
                <span className="bg-gradient-to-r from-accent-blue to-blue-600 bg-clip-text text-transparent">
                  scalable systems,
                </span>
                <br />
                not just interfaces.
              </h1>
            </motion.div>

            <motion.p
              className="text-lg text-accent-slate max-w-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Engineer. Innovator. Problem Solver. I transform complex challenges into elegant, scalable solutions that make an impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 rounded-lg font-bold text-white bg-gradient-to-r from-accent-blue to-blue-600 hover:shadow-lg hover:shadow-accent-blue/50 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work →
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-lg font-bold text-white border-2 border-accent-blue/50 hover:border-accent-blue hover:bg-accent-blue/10 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: 3D Terminal + Orbiting Code */}
          <motion.div
            className="relative h-96 md:h-full md:min-h-96"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FloatingTerminal />

            {/* Orbiting Code Snippets */}
            <div className="absolute inset-0 flex items-center justify-center">
              {codeSnippets.map((code, idx) => (
                <AnimatedCodePiece
                  key={idx}
                  code={code}
                  index={idx}
                  total={codeSnippets.length}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-accent-slate uppercase tracking-widest">Scroll to explore</span>
          <svg className="w-5 h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
