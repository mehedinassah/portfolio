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
            <p className="section-kicker">Who I am</p>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-inksoft md:text-base">
              <p>
                I'm Mehedi, a soon-to-be CS graduate from Dhaka. I got into Full-Stack Web Development mainly because
                I've always loved the idea of making cool stuff for the internet. Back in undergrad, the courses I
                genuinely enjoyed were always the web design and Android development ones, so naturally I just kept
                going deeper into it.
              </p>
              <p>
                Now I mostly build things because I enjoy it. I stay up way too late chasing random ideas, spend hours
                fixing one stupid error, and the moment things finally work, I immediately start thinking about the next
                thing I want to build.
              </p>
              <p>
                For me, coding never really felt like "work." It's more like a cycle of curiosity, frustration,
                experimenting, rebuilding, and somehow enjoying every part of it anyway.
              </p>
            </div>
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
            {techStack.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border-b-2 border-r-2 border-line px-7 py-4 font-display text-lg uppercase transition-colors hover:bg-accent hover:text-paper"
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
