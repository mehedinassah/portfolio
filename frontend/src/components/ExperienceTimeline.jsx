import { motion } from "framer-motion";
import { experience, education } from "../data/staticData";

function TimelineCard({ item, index, isEducation = false }) {
  const itemVariants = {
    hidden: { opacity: 0, x: isEducation ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.1, duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="mb-8 relative"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Timeline Dot */}
      <motion.div
        className="absolute -left-8 md:-left-12 top-2 w-5 h-5 rounded-full bg-accent-blue border-4 border-bg-primary z-10"
        animate={{ boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.7)", "0 0 0 10px rgba(59, 130, 246, 0)"] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Timeline Line */}
      {index < (isEducation ? education.length - 1 : experience.length - 1) && (
        <motion.div
          className="absolute -left-5 md:-left-9 top-12 w-0.5 h-16 bg-gradient-to-b from-accent-blue to-transparent"
          initial={{ height: 0 }}
          whileInView={{ height: 64 }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        />
      )}

      {/* Card Content */}
      <motion.div
        className="ml-8 md:ml-12 p-6 rounded-xl bg-accent-slate/5 border border-accent-blue/20 backdrop-blur-sm hover:border-accent-blue/50 transition-all"
        whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.15)" }}
      >
        <div className="flex justify-between items-start mb-3">
          <div>
            <h4 className="text-lg font-bold text-white">
              {item.title}
            </h4>
            <p className="text-accent-blue font-mono text-sm">
              {item.company || item.school}
            </p>
          </div>
          <motion.span
            className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {item.period}
          </motion.span>
        </div>

        {item.location && (
          <p className="text-accent-slate text-sm mb-3">📍 {item.location}</p>
        )}

        {typeof item.description === "string" ? (
          <p className="text-accent-slate text-sm leading-relaxed">
            {item.description}
          </p>
        ) : (
          <ul className="text-accent-slate text-sm space-y-2">
            {item.description.map((desc, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-accent-blue">▸</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
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
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]"
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          <p className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-4">
            Career Journey
          </p>
          <h2 className="font-display font-900 text-5xl md:text-6xl text-white">
            Experience & Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-8">
          {/* Professional Experience */}
          <div className="relative">
            <motion.h3
              className="text-2xl font-bold text-white mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              💼 Professional
            </motion.h3>

            <div className="relative md:pr-6">
              {/* Left border line */}
              <div className="absolute -left-5 md:-left-9 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-blue to-transparent opacity-30" />

              {experience.map((exp, idx) => (
                <TimelineCard
                  key={exp.id}
                  item={exp}
                  index={idx}
                  isEducation={false}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="relative">
            <motion.h3
              className="text-2xl font-bold text-white mb-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              🎓 Education
            </motion.h3>

            <div className="relative md:pl-6">
              {/* Right border line */}
              <div className="absolute -left-5 md:-left-9 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-blue to-transparent opacity-30" />

              {education.map((edu, idx) => (
                <TimelineCard
                  key={edu.id}
                  item={edu}
                  index={idx}
                  isEducation={true}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Continuous Learning Badge */}
        <motion.div
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-accent-blue/10 to-accent-slate/5 border border-accent-blue/30 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-3xl mb-3"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            ⚡
          </motion.div>
          <h4 className="text-lg font-bold text-white mb-2">Continuous Learning</h4>
          <p className="text-accent-slate">
            Always exploring new technologies and methodologies to stay ahead in the rapidly evolving tech landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
