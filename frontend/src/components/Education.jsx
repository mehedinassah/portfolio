import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const education = [
  {
    year: "2022 to 2026",
    place: "BRAC University",
    title: "BSc in Computer Science",
    current: true,
  },
  {
    year: "2020",
    place: "Birshreshtha Munshi Abdur Rouf Public College",
    title: "Higher Secondary Certificate (HSC)",
  },
  {
    year: "2018",
    place: "Motijheel Govt. Boys' High School",
    title: "Secondary School Certificate (SSC)",
  },
];

export default function Education() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.6"],
  });
  const drawn = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineScale = prefersReducedMotion ? 1 : drawn;

  return (
    <div className="p-7">
      <p className="section-kicker">Education</p>

      <div ref={ref} className="relative mt-6 pl-9">
        {/* faint full track */}
        <div className="absolute bottom-1 left-[7px] top-1 w-0.5 bg-line/15" aria-hidden="true" />
        {/* accent line that draws in on scroll */}
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute bottom-1 left-[7px] top-1 w-0.5 origin-top bg-accent"
          aria-hidden="true"
        />

        {education.map((item, i) => (
          <motion.div
            key={item.place}
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.12, ease }}
            className="relative pb-8 last:pb-0"
          >
            <span
              className={`absolute -left-9 top-1 grid h-4 w-4 place-items-center border-2 border-line ${
                item.current ? "bg-accent" : "bg-paper"
              }`}
            >
              {item.current && !prefersReducedMotion ? (
                <span className="h-1.5 w-1.5 animate-ping rounded-full bg-paper" />
              ) : null}
            </span>

            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{item.year}</p>
            <h4 className="mt-1 font-display text-2xl uppercase leading-none">{item.place}</h4>
            <p className="mt-1.5 text-sm font-semibold text-ink">{item.title}</p>
            {item.note ? <p className="mt-1 text-sm leading-relaxed text-inksoft">{item.note}</p> : null}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
