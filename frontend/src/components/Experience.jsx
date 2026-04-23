import { useRef } from "react";
import { motion } from "framer-motion";

import { experience, education } from "../data/staticData";

function TimelineCard({ item, isExperience, index }) {
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute -left-12 top-2 w-4 h-4 bg-accent-blue rounded-full border-2 border-bg-primary" />
      {/* Timeline line */}
      <div className="absolute -left-8 top-8 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue/30 to-transparent" />

      <div className="card p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4 gap-4">
          <div className="flex-1">
            <h3 className="font-display font-600 text-white text-lg group-hover:text-accent-blue transition-colors">
              {item.role || item.degree}
            </h3>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="text-accent-blue text-sm font-500">
                {item.company || item.institution}
              </span>
              {(item.location) && (
                <>
                  <span className="text-white/20">•</span>
                  <span className="text-accent-slate text-xs font-mono">
                    {item.location}
                  </span>
                </>
              )}
            </div>
          </div>
          <span className="text-xs font-mono text-accent-slate px-3 py-1.5 rounded-md bg-accent-slate/10 border border-accent-slate/20 whitespace-nowrap">
            {item.period}
          </span>
        </div>

        {/* Description or Bullet Points */}
        {item.description && typeof item.description === "string" ? (
          <p className="text-accent-slate text-sm leading-relaxed mt-4">{item.description}</p>
        ) : (
          <ul className="space-y-2 mt-4">
            {item.description?.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-accent-slate">
                <span className="text-accent-blue mt-0.5 shrink-0 font-bold">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-24 md:py-32 px-6 relative overflow-hidden">
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
            Journey & Timeline
          </p>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-accent-slate max-w-xl">
            A timeline of professional growth, learning, and achievements that shaped my engineering
            career.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience Column */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-xl">💼</span>
              <h3 className="font-display font-600 text-white text-xl">Professional</h3>
            </motion.div>

            <div className="space-y-8 pl-6 relative">
              {experience.map((exp, i) => (
                <TimelineCard key={i} item={exp} isExperience index={i} />
              ))}
            </div>

            {/* Open to Work Badge */}
            <motion.div
              className="mt-8 p-4 card border-accent-blue/30 bg-accent-blue/5 flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-accent-blue text-sm">
                <span className="font-600">Available for full-time roles</span> — Let's build
                something great!
              </p>
            </motion.div>
          </div>

          {/* Education Column */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-xl">🏆</span>
              <h3 className="font-display font-600 text-white text-xl">Academic</h3>
            </motion.div>

            <div className="space-y-8 pl-6 relative">
              {education.map((edu, i) => (
                <TimelineCard key={i} item={edu} isExperience={false} index={i} />
              ))}
            </div>

            {/* Continuous Learning */}
            <motion.div
              className="mt-8 p-6 card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-accent-slate text-xs font-mono uppercase tracking-wider mb-4">
                Continuous Learning
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "System Design",
                  "DSA",
                  "Cloud (AWS)",
                  "REST APIs",
                  "Docker",
                  "API Integration",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-md bg-accent-slate/5 text-accent-slate border border-accent-slate/10 font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
