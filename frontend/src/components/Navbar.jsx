import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#projects", index: "01" },
  { label: "Stack", href: "#skills", index: "02" },
  { label: "Life", href: "#life", index: "03" },
  { label: "About", href: "#about", index: "04" },
  { label: "Contact", href: "#contact", index: "05" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = ["hero", ...navLinks.map((item) => item.href.slice(1))];
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
      // sort by actual page position so highlighting is correct regardless of link order
      const ordered = ids
        .map((id) => ({ id, top: document.getElementById(id)?.offsetTop ?? Infinity }))
        .sort((a, b) => a.top - b.top);
      let current = ordered[0]?.id ?? "hero";
      for (const section of ordered) {
        if (window.scrollY >= section.top - 140) current = section.id;
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "auto", block: "start" });
  };

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div
        className={`flex items-stretch justify-between border-b-2 border-line bg-paper transition-shadow ${
          scrolled ? "shadow-[0_2px_0_0_#131210]" : ""
        }`}
      >
        <button
          onClick={() => handleNav("#hero")}
          className="flex items-center gap-3 border-r-2 border-line px-4 py-3 text-left transition-colors hover:bg-ink hover:text-paper md:px-6"
          aria-label="Go to home"
        >
          <span className="grid h-9 w-9 place-items-center bg-accent font-display text-lg leading-none text-paper">
            M
          </span>
          <span className="hidden sm:block">
            <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-inkfaint">mehedi hassan</span>
            <span className="block font-display text-sm uppercase tracking-wide">Full-stack · Android</span>
          </span>
        </button>

        <ul className="hidden items-stretch md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.label} className="border-l-2 border-line">
                <button
                  onClick={() => handleNav(link.href)}
                  className={`flex h-full items-center gap-2 px-5 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors ${
                    isActive ? "bg-ink text-paper" : "text-ink hover:bg-accent hover:text-paper"
                  }`}
                >
                  <span className="text-[9px] opacity-60">{link.index}</span>
                  {link.label}
                </button>
              </li>
            );
          })}
          <li className="border-l-2 border-line">
            <a
              href="/resume.html"
              className="flex h-full items-center px-5 font-mono text-[12px] uppercase tracking-[0.12em] text-ink transition-colors hover:bg-accent hover:text-paper"
            >
              Resume ↗
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="border-l-2 border-line px-4 text-ink transition-colors hover:bg-ink hover:text-paper md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-b-2 border-line bg-paper md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className={`flex w-full items-center gap-3 border-b border-line/20 px-5 py-4 text-left font-mono text-sm uppercase tracking-[0.12em] ${
                activeSection === link.href.slice(1) ? "bg-ink text-paper" : "text-ink"
              }`}
            >
              <span className="text-[10px] opacity-60">{link.index}</span>
              {link.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            className="flex w-full items-center px-5 py-4 font-mono text-sm uppercase tracking-[0.12em] text-ink"
          >
            Resume ↗
          </a>
        </div>
      ) : null}
    </nav>
  );
}
