import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { staticSkills } from "../data/staticData";

function SkillCard({ skill, index, category, color }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.08,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="group"
    >
      <div className="card p-4 tactile-card">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h4 className="text-white font-500 text-sm group-hover:text-accent-blue transition-colors">
              {skill.name}
            </h4>
            <p className="text-accent-slate text-xs mt-1">{category}</p>
          </div>
          <div className="text-xs font-mono text-accent-slate-light px-2 py-1 rounded bg-accent-slate/10">
            {skill.proficiency}%
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-accent-slate/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categoryConfig = {
    Languages: { color: "#3b82f6", desc: "Programming languages" },
    Frameworks: { color: "#8b5cf6", desc: "Libraries & frameworks" },
    Tools: { color: "#10b981", desc: "Development tools" },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          <p className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-3">
            Skill Stack
          </p>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white mb-4">
            Technologies & Tools
          </h2>
          <p className="text-accent-slate max-w-xl">
            A comprehensive toolkit built over years of hands-on development. Each skill is honed
            through real-world projects and continuous learning.
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {Object.entries(staticSkills).map(([category, skills], categoryIdx) => {
            const config = categoryConfig[category] || { color: "#3b82f6" };

            return (
              <div key={category} className="group">
                {/* Category Header */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: categoryIdx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: config.color }}
                    />
                    <h3 className="font-display font-600 text-white text-lg">{category}</h3>
                    <p className="text-accent-slate text-sm ml-auto">{config.desc}</p>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skills.map((skill, idx) => (
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        index={idx}
                        category={category}
                        color={config.color}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Connector line between categories */}
                {categoryIdx < Object.keys(staticSkills).length - 1 && (
                  <motion.div
                    className="h-12 flex items-center justify-center my-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.5 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-0.5 h-full bg-gradient-to-b from-accent-slate/30 via-accent-blue/30 to-accent-slate/0" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Expertise Badges */}
        <motion.div
          className="mt-16 pt-12 border-t border-accent-slate/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-slate text-sm mb-6 font-mono uppercase tracking-wider">
            Key Expertise Areas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Full-Stack", detail: "MERN & Java Spring" },
              { label: "Android Dev", detail: "Kotlin & Flutter" },
              { label: "AI Integration", detail: "LLMs & APIs" },
              { label: "Cloud & DB", detail: "Firebase & MongoDB" },
            ].map((item) => (
              <motion.div
                key={item.label}
                className="p-4 card rounded-lg hover:bg-accent-slate/5 transition-colors"
                whileHover={{ y: -2 }}
              >
                <div className="text-white font-600 text-sm">{item.label}</div>
                <div className="text-accent-slate text-xs mt-2">{item.detail}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
