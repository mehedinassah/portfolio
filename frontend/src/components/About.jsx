import { motion } from "framer-motion";
import Education from "./Education";

const techStack = [
  "Java (backend)",
  "Kotlin & Android",
  "Spring Boot",
  "React / Next.js",
  "Firebase / Cloud",
  "Python (ML)",
];

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <section id="about" className="section-shell border-t-2 border-line py-20 text-ink md:py-28">
      <div className="mx-auto max-w-[100rem] px-4 md:px-8">
        <div className="border-b-2 border-line pb-8">
          <p className="section-kicker">About</p>
          <h2 className="section-heading">
            Curious by<br />default.
          </h2>
        </div>

        <div className="grid border-x-2 border-b-2 border-line lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease }}
            className="border-b-2 border-line p-7 lg:border-b-0 lg:border-r-2"
          >
            <p className="section-kicker">How I work</p>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-inksoft">
              {[
                "Late-night experimentation is part of the process, not a side effect.",
                "I prefer systems that are legible, debuggable, and honest about their limits.",
                "Aesthetic choices should help comprehension, not hide weak structure.",
              ].map((item, i) => (
                <li key={item} className="flex gap-3">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div>
            <Education />
          </div>
        </div>

        <div className="border-x-2 border-b-2 border-line">
          <p className="border-b-2 border-line px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-inkfaint">
            // core toolkit
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((item, i) => (
              <li
                key={item}
                className={`flex items-center gap-3 px-7 py-4 font-display text-lg uppercase transition-colors hover:bg-accent hover:text-paper ${
                  i % 3 !== 2 ? "lg:border-r-2" : ""
                } ${i < techStack.length - (techStack.length % 3 || 3) ? "border-b-2" : ""} border-line`}
              >
                <span className="font-mono text-xs text-accent">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
