import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { staticSkills } from "../data/staticData";

function SkillsCube({ skills, category, cubeSize = 300 }) {
  const cubeRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => ({ x: prev.x + 2, y: prev.y + 3 }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ perspective: "1500px", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
      <motion.div ref={cubeRef} style={{ width: `${cubeSize}px`, height: `${cubeSize}px`, position: "relative", transformStyle: "preserve-3d", transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`, transformOrigin: "center center" }} animate={{ rotateX: rotation.x, rotateY: rotation.y }} transition={{ type: "linear", duration: 0 }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{ position: "absolute", width: `${cubeSize}px`, height: `${cubeSize}px`, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(59, 130, 246, 0.6)", backgroundColor: "rgba(59, 130, 246, 0.1)", backdropFilter: "blur(10px)", transformOrigin: "center center", transform: [ `rotateY(0deg) translateZ(${cubeSize / 2}px)`, `rotateY(180deg) translateZ(${cubeSize / 2}px)`, `rotateY(90deg) translateZ(${cubeSize / 2}px)`, `rotateY(-90deg) translateZ(${cubeSize / 2}px)`, `rotateX(90deg) translateZ(${cubeSize / 2}px)`, `rotateX(-90deg) translateZ(${cubeSize / 2}px)`, ][i] }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "rgb(59, 130, 246)", fontFamily: "monospace", fontSize: cubeSize < 260 ? "10px" : "12px", textTransform: "uppercase", marginBottom: "16px", letterSpacing: "2px", margin: 0 }}>{["Front", "Back", "Right", "Left", "Top", "Bottom"][i]}</p>
              <p style={{ color: "white", fontWeight: "bold", fontSize: cubeSize < 260 ? "18px" : "24px", margin: 0 }}>{skills[i % skills.length]?.name}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills3D() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = Object.entries(staticSkills);
  const [selectedSkills, setSelectedSkills] = useState(categories[0][1]);
  const [cubeSize, setCubeSize] = useState(typeof window !== "undefined" && window.innerWidth < 640 ? 220 : 300);

  useEffect(() => {
    setSelectedSkills(categories[activeCategory][1]);
  }, [activeCategory]);

  useEffect(() => {
    const onResize = () => setCubeSize(window.innerWidth < 640 ? 220 : 300);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section id="skills" className="section-skills py-16 md:py-32 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]" animate={{ y: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity }} />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-16 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-4">Technical Skills</p>
          <h2 className="font-display font-900 text-3xl sm:text-4xl md:text-6xl text-white mb-4 leading-tight">3D Skill Matrix</h2>
          <p className="text-sm sm:text-base md:text-lg text-accent-slate max-w-2xl mx-auto">Interactive skill showcase with rotating 3D visualizations</p>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-16">
          {categories.map((cat, idx) => (
            <motion.button key={cat[0]} onClick={() => setActiveCategory(idx)} className={`px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-mono text-xs md:text-sm font-bold transition-all ${activeCategory === idx ? "bg-gradient-to-r from-accent-blue to-blue-600 text-white shadow-lg" : "bg-accent-slate/10 text-accent-slate-light border border-accent-slate/30 hover:border-accent-blue/50"}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{cat[0]}</motion.button>
          ))}
        </motion.div>

        <motion.div className="flex justify-center items-center min-h-[340px] sm:min-h-[420px] md:min-h-[640px]" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <SkillsCube skills={selectedSkills} category={categories[activeCategory][0]} cubeSize={cubeSize} />
        </motion.div>
      </div>
    </section>
  );
}
