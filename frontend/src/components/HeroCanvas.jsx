import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const quickStats = [
  { no: "01", label: "Stack", value: "React + Spring Boot", detail: "Java REST APIs · deployed on Vercel" },
  { no: "02", label: "Mobile", value: "Kotlin + MVVM", detail: "Android apps · maps & offline" },
  { no: "03", label: "Currently", value: "Final-year CS", detail: "BRAC University, Dhaka" },
];

const marquee = [
  "FULL-STACK",
  "ANDROID",
  "SPRING BOOT",
  "REACT",
  "KOTLIN",
  "TYPESCRIPT",
  "NEXT.JS",
  "FIREBASE",
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
}

const ease = [0.22, 1, 0.36, 1];

export default function HeroAdvanced({ skipBootAnimation = false }) {
  const prefersReducedMotion = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: skipBootAnimation ? 0.5 : 0.8, delay, ease },
  });

  return (
    <section id="hero" className="section-shell relative overflow-hidden pt-16 text-ink">
      <div className="mx-auto max-w-[100rem] px-4 pt-10 md:px-8 md:pt-16">
        {/* top meta row */}
        <motion.div
          {...reveal(0)}
          className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-line pb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-inksoft"
        >
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 bg-accent" />
            Mehedi Hassan · Dhaka, Bangladesh
          </span>
          <span className="hidden sm:block">CS @ BRAC University</span>
          <span>Available for work</span>
        </motion.div>

        <div className="grid gap-8 pt-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
          {/* headline column */}
          <div>
            <motion.p {...reveal(0.05)} className="section-kicker">
              Full-stack &amp; Android developer
            </motion.p>

            <h1 className="font-display text-[clamp(3.4rem,12vw,11rem)] uppercase leading-[0.92] tracking-[0.01em]">
              <motion.span {...reveal(0.1)} className="block">
                Full-stack
              </motion.span>
              <motion.span {...reveal(0.18)} className="block">
                &amp; Android
              </motion.span>
              <motion.span {...reveal(0.26)} className="block">
                develo<span className="text-accent">per.</span>
              </motion.span>
            </h1>

            <motion.p {...reveal(0.34)} className="mt-7 max-w-2xl text-base leading-relaxed text-inksoft md:text-lg">
              I build websites for fun.
            </motion.p>

            <motion.div {...reveal(0.42)} className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => scrollToSection("projects")} className="cta-primary">
                View Work <ArrowRight size={14} />
              </button>
              <button onClick={() => scrollToSection("contact")} className="cta-secondary">
                Contact
              </button>
              <a href="/resume.html" className="cta-secondary">
                Resume <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* portrait column */}
          <motion.aside {...reveal(0.2)} className="lg:pt-2">
            <div className="relative w-full max-w-sm lg:ml-auto">
              <div className="absolute -right-3 -top-3 z-0 h-full w-full border-2 border-accent" aria-hidden="true" />
              <div className="relative z-10 border-2 border-line bg-paper2">
                <img
                  src="/me.png"
                  alt="Mehedi Hassan portrait"
                  className="aspect-[4/5] w-full object-cover object-top grayscale contrast-110 transition-[filter] duration-500 hover:grayscale-0"
                />
                <div className="flex items-center justify-between border-t-2 border-line px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em]">
                  <span>fig. 01</span>
                  <span className="text-accent">// mehedi.h</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* marquee strip */}
      <motion.div
        {...reveal(0.5)}
        className="mt-10 overflow-hidden border-y-2 border-line bg-ink py-3 text-paper"
      >
        <div className={prefersReducedMotion ? "flex justify-center" : "marquee-track"}>
          {[...marquee, ...marquee].map((word, i) => (
            <span key={i} className="mx-6 font-display text-xl uppercase tracking-wide">
              {word} <span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* quick stats: hard grid cells */}
      <div className="mx-auto max-w-[100rem] px-4 md:px-8">
        <div className="grid border-x-2 border-b-2 border-line md:grid-cols-3">
          {quickStats.map((item, index) => (
            <motion.div
              key={item.label}
              {...reveal(0.55 + index * 0.07)}
              className={`group p-6 transition-colors hover:bg-ink hover:text-paper ${
                index < 2 ? "border-b-2 border-line md:border-b-0 md:border-r-2" : ""
              }`}
            >
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-inkfaint group-hover:text-paper/60">
                <span>{item.label}</span>
                <span>{item.no}</span>
              </div>
              <p className="mt-3 font-display text-2xl uppercase leading-none">{item.value}</p>
              <p className="mt-2 font-mono text-[11px] leading-relaxed text-inksoft group-hover:text-paper/70">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
