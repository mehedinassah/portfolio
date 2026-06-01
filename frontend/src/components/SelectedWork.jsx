import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "banauAI",
    tag: "ai · web",
    blurb: "An AI-powered web app built on a modern TypeScript + React stack, focused on fast product iteration.",
    tech: ["TypeScript", "React", "Vite", "AI"],
    github: "https://github.com/mehedinassah/banauAI",
    live: null,
  },
  {
    title: "Top-Line",
    tag: "web · react",
    blurb: "A storefront-style site for the Topline Wear concept, built with React and TypeScript and deployed on Vercel.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/mehedinassah/Top-Line",
    live: "https://toplinewear.vercel.app/",
  },
  {
    title: "Smart Geo Landmarks",
    tag: "android · kotlin",
    blurb: "Android app to save, map, and revisit geo-tagged landmarks, with visit tracking that works offline. MVVM throughout.",
    tech: ["Kotlin", "Android", "Maps SDK", "MVVM"],
    github: "https://github.com/mehedinassah/smart-geo-landmarks",
    live: null,
  },
  {
    title: "eSIM Travel App",
    tag: "android · kotlin",
    blurb: "An Android app for travel connectivity workflows, built mobile-first with Kotlin and a REST-backed architecture.",
    tech: ["Kotlin", "Android", "MVVM", "REST API"],
    github: "https://github.com/mehedinassah/eSIM-Travel-App",
    live: null,
  },
  {
    title: "VangtiChai",
    tag: "android · kotlin",
    blurb: "A handy Kotlin Android utility that breaks an amount down into exact change. Quick, offline, no clutter.",
    tech: ["Kotlin", "Android"],
    github: "https://github.com/mehedinassah/VangtiChai",
    live: null,
  },
  {
    title: "Daily Challenge",
    tag: "web · javascript",
    blurb: "A web app that generates random day-to-day life challenges. A small, fun vanilla-JS project.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/mehedinassah/Daily-Challange",
    live: null,
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function SelectedWork() {
  return (
    <section id="projects" className="section-shell border-t-2 border-line py-20 text-ink md:py-28">
      <div className="mx-auto max-w-[100rem] px-4 md:px-8">
        <div className="border-b-2 border-line pb-8">
          <p className="section-kicker">Selected work</p>
          <h2 className="section-heading">
            Things I've<br />built.
          </h2>
        </div>

        {/* project grid */}
        <div className="grid border-l-2 border-t-2 border-line md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.06, ease }}
              className="group flex flex-col border-b-2 border-r-2 border-line p-6 transition-colors hover:bg-ink hover:text-paper md:p-7"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-3xl leading-none text-line/25 transition-colors group-hover:text-accent">
                  0{index + 1}
                </span>
                <span className="border border-current px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] opacity-70">
                  {project.tag}
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl uppercase leading-none">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-inksoft group-hover:text-paper/80">
                {project.blurb}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border border-current px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.16em]">
                <a
                  className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code <ArrowUpRight size={13} />
                </a>
                {project.live ? (
                  <a
                    className="inline-flex items-center gap-1 text-accent underline-offset-4 hover:underline"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live <ArrowUpRight size={13} />
                  </a>
                ) : (
                  <span className="opacity-40">demo n/a</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
