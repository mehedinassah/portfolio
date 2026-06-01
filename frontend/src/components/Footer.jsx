import DhakaTime from "./DhakaTime";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/mehedinassah" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mehedinas" },
    {
      name: "Email",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=idehemnassah@gmail.com&su=Website%20project%20inquiry",
    },
  ];

  return (
    <footer className="border-t-2 border-line bg-ink text-paper">
      <div className="mx-auto max-w-[100rem] px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 border-b border-paper/20 pb-10 md:grid-cols-[1.4fr_0.6fr] md:items-end">
          <div>
            <p className="font-display text-[clamp(2.5rem,7vw,5rem)] uppercase leading-[0.95]">
              Mehedi<br />Hassan<span className="text-accent">.</span>
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-paper/60">
              Full-stack &amp; Android developer from Dhaka. I build websites for fun, and I'm always up for a new
              project.
            </p>
          </div>

          <div className="flex flex-col gap-px md:items-end">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm uppercase tracking-[0.16em] text-paper/70 transition-colors hover:text-accent"
              >
                {link.name} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-paper/40 sm:text-[10px] md:flex-row md:items-center md:justify-between md:gap-2 md:text-[11px] md:tracking-[0.18em]">
          <p>© {year} Mehedi Hassan · built with React</p>
          <DhakaTime />
        </div>
      </div>
    </footer>
  );
}
