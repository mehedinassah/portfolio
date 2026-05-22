import { motion } from "framer-motion";

const techStack = [
  { name: "Java", category: "Backend" },
  { name: "Kotlin", category: "Mobile" },
  { name: "Spring Boot", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Android", category: "Mobile" },
  { name: "Firebase", category: "Backend" },
  { name: "Python", category: "AI/ML" },
  { name: "TailwindCSS", category: "Frontend" },
];

export default function About() {
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
    <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <p className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Section */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Profile Image */}
            <motion.div className="relative w-48 h-48 md:w-64 md:h-64" variants={itemVariants}>
              <div className="w-full h-full rounded-lg overflow-hidden border border-accent-slate/20 shadow-lg">
                <img
                  src="/me.png"
                  alt="Mehedi Hassan"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Available Badge */}
              <motion.div
                className="absolute bottom-4 right-4 flex items-center gap-2 bg-bg-primary/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-emerald-500/20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-500/80 text-xs font-mono">Available</span>
              </motion.div>
            </motion.div>

            {/* About Text */}
            <motion.p
              className="text-white/70 text-lg leading-relaxed"
              variants={itemVariants}
            >
              Hi! I'm <span className="text-white font-600">Mehedi Hassan</span>, a Computer
              Science student passionate about building{" "}
              <span className="text-accent-blue font-500">scalable, user-centric software</span>.
            </motion.p>

            <motion.p className="text-accent-slate leading-relaxed" variants={itemVariants}>
              I specialize in <span className="text-white font-500">Android development</span>,
              {" "}
              <span className="text-white font-500">full-stack web applications</span>, and
              integrating <span className="text-white font-500">AI/ML technologies</span> into
              products.
            </motion.p>

            <motion.p className="text-accent-slate leading-relaxed" variants={itemVariants}>
              My goal is to create <span className="text-white font-500">impactful solutions</span>
              {" "}
              that solve real problems and scale globally. I'm currently looking for opportunities
              to collaborate on exciting projects.
            </motion.p>

            {/* Quick Facts */}
            <motion.div className="grid grid-cols-2 gap-4 pt-6" variants={itemVariants}>
              {[
                { label: "Location", value: "Dhaka, Bangladesh" },
                { label: "Focus", value: "Remote & On-site" },
                { label: "Expertise", value: "Android + Web + AI" },
                { label: "Status", value: "Available Now" },
              ].map((item) => (
                <div key={item.label} className="card p-4">
                  <p className="text-accent-slate text-xs font-mono uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  <p className="text-white font-500 text-sm">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="mb-8" variants={itemVariants}>
              <p className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-6">
                Tech Stack
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {techStack.map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    className="card p-4 text-center group hover:bg-accent-slate/5 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                  >
                    <h4 className="text-white font-600 text-sm">{tech.name}</h4>
                    <p className="text-accent-slate text-xs mt-1.5 font-mono">{tech.category}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div className="card p-6" variants={itemVariants}>
              <p className="text-accent-slate text-xs font-mono uppercase tracking-widest mb-4">
                What Drives Me
              </p>
              <ul className="space-y-3">
                {[
                  "Building products that users love",
                  "Clean, maintainable code practices",
                  "Continuous learning and growth",
                  "Contributing to open source",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-accent-slate text-sm">
                    <span className="w-1 h-1 rounded-full bg-accent-blue flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
