import { motion } from "framer-motion";

const groups = [
  {
    no: "01",
    title: "Languages",
    items: ["Java", "Kotlin", "JavaScript", "TypeScript", "Python", "C"],
    summary: "The languages I work in day to day.",
  },
  {
    no: "02",
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML & CSS"],
    summary: "Fast, responsive, accessible interfaces.",
  },
  {
    no: "03",
    title: "Backend",
    items: ["Spring Boot", "Node.js", "REST APIs"],
    summary: "Java and Node services and APIs.",
  },
  {
    no: "04",
    title: "Mobile",
    items: ["Android SDK", "Jetpack", "Flutter"],
    summary: "Native Android in Kotlin, plus Flutter.",
  },
  {
    no: "05",
    title: "Data & AI",
    items: ["PyTorch", "OpenCV", "Pandas", "NumPy"],
    summary: "Model experiments and image processing.",
  },
  {
    no: "06",
    title: "CS Foundations",
    items: ["Data Structures", "Algorithms", "OOP", "DBMS / SQL", "OS", "Networks"],
    summary: "The fundamentals under the code.",
  },
  {
    no: "07",
    title: "Tools & Cloud",
    items: ["Git & GitHub", "Docker", "Firebase", "Vercel"],
    summary: "Building, deploying, and debugging the stack.",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function TechnicalArsenal() {
  return (
    <section id="skills" className="section-shell border-t-2 border-line py-20 text-ink md:py-28">
      <div className="mx-auto max-w-[100rem] px-4 md:px-8">
        <div className="border-b-2 border-line pb-8">
          <p className="section-kicker">The stack</p>
          <h2 className="section-heading">
            Tools I actually<br />reach for.
          </h2>
        </div>

        <div className="grid border-l-2 border-t-2 border-line sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.06, ease }}
              className="group flex flex-col border-b-2 border-r-2 border-line p-6 transition-colors hover:bg-ink hover:text-paper"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-inkfaint group-hover:text-paper/60">
                  {group.no}
                </span>
                <span className="h-2.5 w-2.5 bg-accent" />
              </div>
              <h3 className="mt-3 font-display text-2xl uppercase leading-none">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-inksoft group-hover:text-paper/75">{group.summary}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-current px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
