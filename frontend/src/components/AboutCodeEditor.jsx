import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "about",
    label: "about.json",
    icon: "📄",
    content: (
      <div className="font-mono text-sm space-y-4">
        <div className="text-accent-slate">
          <span className="text-accent-blue">{"{"}</span>
        </div>
        <div className="pl-4">
          <div>
            <span className="text-purple-400">"name"</span>
            <span className="text-accent-slate">: </span>
            <span className="text-emerald-400">"Mehedi Hassan"</span>
            <span className="text-accent-slate">,</span>
          </div>
          <div>
            <span className="text-purple-400">"title"</span>
            <span className="text-accent-slate">: </span>
            <span className="text-emerald-400">"Full-Stack Developer & AI Innovator"</span>
            <span className="text-accent-slate">,</span>
          </div>
          <div>
            <span className="text-purple-400">"location"</span>
            <span className="text-accent-slate">: </span>
            <span className="text-emerald-400">"Dhaka, Bangladesh"</span>
            <span className="text-accent-slate">,</span>
          </div>
          <div>
            <span className="text-purple-400">"passion"</span>
            <span className="text-accent-slate">: </span>
            <span className="text-emerald-400">"Building scalable systems and pushing technological boundaries"</span>
            <span className="text-accent-slate">,</span>
          </div>
          <div>
            <span className="text-purple-400">"years_experience"</span>
            <span className="text-accent-slate">: </span>
            <span className="text-orange-400">2</span>
            <span className="text-accent-slate">,</span>
          </div>
          <div>
            <span className="text-purple-400">"focus_areas"</span>
            <span className="text-accent-slate">: [</span>
          </div>
          <div className="pl-4">
            <div>
              <span className="text-emerald-400">"Full-Stack Development"</span>
              <span className="text-accent-slate">,</span>
            </div>
            <div>
              <span className="text-emerald-400">"AI/ML Integration"</span>
              <span className="text-accent-slate">,</span>
            </div>
            <div>
              <span className="text-emerald-400">"System Architecture"</span>
              <span className="text-accent-slate">,</span>
            </div>
            <div>
              <span className="text-emerald-400">"Performance Optimization"</span>
            </div>
          </div>
          <div>
            <span className="text-accent-slate">]</span>
          </div>
        </div>
        <div className="text-accent-slate">
          <span className="text-accent-blue">{"}"}</span>
        </div>
      </div>
    ),
  },
  {
    id: "skills",
    label: "skills.ts",
    icon: "⚙️",
    content: (
      <div className="font-mono text-sm space-y-3">
        <div>
          <span className="text-purple-400">interface</span>
          <span className="text-accent-slate"> </span>
          <span className="text-cyan-400">SkillSet</span>
          <span className="text-accent-slate"> {`{`}</span>
        </div>
        <div className="pl-4 space-y-2">
          <div>
            <span className="text-purple-400">frontend</span>
            <span className="text-accent-slate">: </span>
            <span className="text-emerald-400">["React", "Tailwind", "Framer Motion", "Next.js"]</span>
          </div>
          <div>
            <span className="text-purple-400">backend</span>
            <span className="text-accent-slate">: </span>
            <span className="text-emerald-400">["Node.js", "Express", "Java", "Python"]</span>
          </div>
          <div>
            <span className="text-purple-400">databases</span>
            <span className="text-accent-slate">: </span>
            <span className="text-emerald-400">["MongoDB", "PostgreSQL", "Firebase", "Supabase"]</span>
          </div>
          <div>
            <span className="text-purple-400">tools</span>
            <span className="text-accent-slate">: </span>
            <span className="text-emerald-400">["Git", "Docker", "AWS", "Firebase"]</span>
          </div>
          <div>
            <span className="text-purple-400">specialization</span>
            <span className="text-accent-slate">: </span>
            <span className="text-emerald-400">["AI/ML", "Real-time Systems", "3D Web"]</span>
          </div>
        </div>
        <div>
          <span className="text-accent-slate">{`}`}</span>
        </div>
      </div>
    ),
  },
  {
    id: "experience",
    label: "experience.log",
    icon: "📜",
    content: (
      <div className="font-mono text-sm space-y-3">
        <div>
          <span className="text-orange-400">[2024-PRESENT]</span>
          <span className="text-accent-slate"> </span>
          <span className="text-accent-blue">Full-Stack Developer</span>
        </div>
        <div className="pl-4 space-y-1 text-accent-slate">
          <div>• Building scalable web applications with React & Node.js</div>
          <div>• Implementing AI-powered features and integrations</div>
          <div>• Optimizing system performance and architecture</div>
        </div>

        <div className="pt-2">
          <span className="text-orange-400">[2023-2024]</span>
          <span className="text-accent-slate"> </span>
          <span className="text-accent-blue">Junior Developer (Freelance)</span>
        </div>
        <div className="pl-4 space-y-1 text-accent-slate">
          <div>• Delivered 15+ client projects with focus on quality</div>
          <div>• Specialized in responsive UI and real-time applications</div>
          <div>• Mentored by senior engineers on best practices</div>
        </div>

        <div className="pt-4 text-accent-slate text-xs italic">
          Always learning. Always building. Always improving.
        </div>
      </div>
    ),
  },
];

export default function AboutCodeEditor() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="about" className="section-about py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]" animate={{ y: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity }} />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <p className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-4">Who am I?</p>
          <h2 className="font-display font-900 text-5xl md:text-6xl text-white">About Me</h2>
        </motion.div>

        <motion.div className="rounded-lg border border-accent-blue/30 backdrop-blur-sm overflow-hidden bg-accent-slate/5 shadow-2xl" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
          <div className="flex items-center border-b border-accent-blue/20 bg-accent-slate/10 px-4 py-2 overflow-x-auto">
            {tabs.map((tab, idx) => (
              <button key={tab.id} onClick={() => setActiveTab(idx)} className={`px-4 py-2 text-sm font-mono flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${activeTab === idx ? "border-accent-blue text-accent-blue" : "border-transparent text-accent-slate hover:text-accent-slate-light"}`}>
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="p-8 min-h-96 bg-gradient-to-br from-accent-slate/5 via-accent-blue/5 to-accent-slate/10">
            <AnimatePresence mode="wait">
              <motion.div key={tabs[activeTab].id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                {tabs[activeTab].content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Projects Built", value: "15+" },
            { label: "Years Experience", value: "2" },
            { label: "Happy Clients", value: "20+" },
            { label: "Commits", value: "1000+" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-accent-slate/5 border border-accent-blue/20 text-center hover:border-accent-blue/50 transition-all"
            >
              <div className="text-accent-blue font-bold text-2xl">{stat.value}</div>
              <div className="text-accent-slate text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
