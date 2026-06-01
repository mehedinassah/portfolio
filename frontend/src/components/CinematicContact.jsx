import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/mehedinassah",
    href: "https://github.com/mehedinassah",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/mehedinas",
    href: "https://www.linkedin.com/in/mehedinas",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    value: "idehemnassah@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=idehemnassah@gmail.com&su=Website%20project%20inquiry",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function CinematicContact() {
  return (
    <section id="contact" className="section-shell border-t-2 border-line py-20 text-ink md:py-28">
      <div className="mx-auto max-w-[100rem] px-4 md:px-8">
        <div className="border-b-2 border-line pb-8">
          <p className="section-kicker">Contact</p>
          <h2 className="font-display text-[clamp(3rem,11vw,9rem)] uppercase leading-[0.92]">
            Let's build<br />
            some<span className="text-accent">thing.</span>
          </h2>
          <p className="section-copy mt-6 text-sm md:text-base">
            You have a website you want built? I got you. Just reach out to me. I might reply way faster than you can
            imagine.
          </p>
        </div>

        <div className="grid border-x-2 border-b-2 border-line md:grid-cols-3">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.title}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease }}
                className={`group flex items-center justify-between p-7 transition-colors hover:bg-ink hover:text-paper ${
                  index < 2 ? "border-b-2 border-line md:border-b-0 md:border-r-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <Icon className="text-lg text-accent" />
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-inkfaint group-hover:text-paper/60">
                      {link.title}
                    </p>
                  </div>
                  <p className="mt-3 font-display text-lg uppercase leading-none">{link.value}</p>
                </div>
                <ArrowUpRight size={20} className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
