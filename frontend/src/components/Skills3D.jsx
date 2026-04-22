import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { staticSkills } from "../data/staticData";

function SkillsCube({ skills, category }) {
  const cubeRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => ({
        x: prev.x + 2,
        y: prev.y + 3,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={cubeRef}
      className="w-40 h-40 relative"
      style={{
        transformStyle: "preserve-3d",
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
      animate={{ rotateX: rotation.x, rotateY: rotation.y }}
      transition={{ type: "linear", duration: 0 }}
    >
      {/* Cube faces */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-40 h-40 bg-gradient-to-br from-accent-blue/30 to-accent-slate/10 border border-accent-blue/50 flex items-center justify-center backdrop-blur-sm"
          style={{
            transform: [
              "rotateY(0deg) translateZ(80px)",
              "rotateY(180deg) translateZ(80px)",
              "rotateY(90deg) translateZ(80px)",
              "rotateY(-90deg) translateZ(80px)",
              "rotateX(90deg) translateZ(80px)",
              "rotateX(-90deg) translateZ(80px)",
            ][i],
          }}
        >
          <div className="text-center">
            <p className="text-accent-blue font-mono text-xs uppercase mb-2">
              {["Front", "Back", "Right", "Left", "Top", "Bottom"][i]}
            </p>
            <p className="text-white font-bold">{skills[i % skills.length]?.name}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default function Skills3D() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = Object.entries(staticSkills);
  const [selectedSkills, setSelectedSkills] = useState(categories[0][1]);

  useEffect(() => {
    setSelectedSkills(categories[activeCategory][1]);
  }, [activeCategory]);

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
    <section id="skills" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
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
            Technical Skills
          </p>
          <h2 className="font-display font-900 text-5xl md:text-6xl text-white mb-4">
            3D Skill Matrix
          </h2>
          <p className="text-lg text-accent-slate max-w-2xl mx-auto">
            Interactive skill showcase with rotating 3D visualizations
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((cat, idx) => (
            <motion.button
              key={cat[0]}
              onClick={() => setActiveCategory(idx)}
              className={`px-6 py-3 rounded-lg font-mono text-sm font-bold transition-all ${
                activeCategory === idx
                  ? "bg-gradient-to-r from-accent-blue to-blue-600 text-white shadow-lg shadow-accent-blue/30"
                  : "bg-accent-slate/10 text-accent-slate-light border border-accent-slate/30 hover:border-accent-blue/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat[0]}
            </motion.button>
          ))}
        </motion.div>

        {/* 3D Cube Display */}
        <motion.div
          className="flex justify-center mb-16 min-h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SkillsCube
            skills={selectedSkills}
            category={categories[activeCategory][0]}
          />
        </motion.div>

        {/* Skills Grid with Animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {selectedSkills.slice(0, 6).map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="group p-5 rounded-xl bg-accent-slate/5 border border-accent-blue/20 hover:border-accent-blue/50 transition-all backdrop-blur-sm cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
              }}
              variants={itemVariants}
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-white group-hover:text-accent-blue transition-colors">
                  {skill.name}
                </h4>
                <span className="text-xs px-2 py-1 rounded bg-accent-blue/30 text-accent-slate-light font-mono">
                  {skill.proficiency}%
                </span>
              </div>
              <p className="text-xs text-accent-slate mb-4">{skill.category}</p>

              {/* Animated Progress Bar */}
              <div className="w-full h-2 rounded-full bg-accent-slate/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-blue to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  transition={{ delay: idx * 0.1, duration: 1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Badges */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {[
            { emoji: "🚀", title: "Full-Stack", desc: "React, Node, Databases" },
            { emoji: "📱", title: "Mobile", desc: "Android, Kotlin, Flutter" },
            { emoji: "🤖", title: "AI/ML", desc: "Python, TensorFlow, APIs" },
            { emoji: "☁️", title: "Cloud & DevOps", desc: "AWS, MongoDB, Firebase" },
          ].map((exp, idx) => (
            <motion.div
              key={exp.title}
              className="p-6 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-slate/5 border border-accent-blue/30 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
              }}
            >
              <motion.div
                className="text-4xl mb-3"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
              >
                {exp.emoji}
              </motion.div>
              <h4 className="font-bold text-white mb-2">{exp.title}</h4>
              <p className="text-xs text-accent-slate">{exp.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
