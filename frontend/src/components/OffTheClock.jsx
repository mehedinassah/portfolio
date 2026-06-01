import { motion } from "framer-motion";
import { Film, Gamepad2, Trophy } from "lucide-react";
import NowPlaying from "./NowPlaying";
import MovieSuggest from "./MovieSuggest";

const hobbies = [
  {
    icon: Film,
    title: "Films",
    blurb:
      "I've been watching films since I was literally 6 or 7. Thousands watched, and a thousand more to go. Try to stump me below.",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    blurb:
      "Not a hardcore gamer, but I've definitely played quite a few. Currently on GTA Online, Raid Shadow Legends, and Crimson Desert.",
  },
  {
    icon: Trophy,
    title: "Sports",
    blurb:
      "Supporting Argentina and Barça since FOREVER. Visca Barça, visca Catalunya. And I love me some UFC fights too.",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function OffTheClock() {
  return (
    <section id="life" className="section-shell border-t-2 border-line py-20 text-ink md:py-28">
      <div className="mx-auto max-w-[100rem] px-4 md:px-8">
        <div className="grid gap-6 border-b-2 border-line pb-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="section-kicker">Off the clock</p>
            <h2 className="section-heading">
              When I'm not<br />coding.
            </h2>
          </div>
          <p className="section-copy text-sm md:text-base">
            How to prove I'm not a robot? I do other stuff too.
          </p>
        </div>

        {/* hobbies */}
        <div className="grid border-x-2 border-b-2 border-line md:grid-cols-3">
          {hobbies.map((h, index) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.07, ease }}
                className={`group p-7 transition-colors hover:bg-ink hover:text-paper ${
                  index < 2 ? "border-b-2 border-line md:border-b-0 md:border-r-2" : ""
                }`}
              >
                <Icon size={22} className="text-accent" />
                <h3 className="mt-4 font-display text-2xl uppercase leading-none">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-inksoft group-hover:text-paper/75">{h.blurb}</p>
              </motion.div>
            );
          })}
        </div>

        {/* now playing + movie game */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease }}
          >
            <NowPlaying />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08, ease }}
          >
            <MovieSuggest />
          </motion.div>
        </div>

        {/* tiny personal footnote */}
        <p className="mt-6 flex items-center gap-2 border-2 border-line bg-paper2 px-5 py-3 font-mono text-xs text-inksoft">
          <span className="text-accent">psst:</span> I prefer chaa over coffee btw, if anyone's wondering. 🍵
        </p>
      </div>
    </section>
  );
}
