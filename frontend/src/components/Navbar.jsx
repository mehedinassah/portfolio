import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4 px-6">
      <div className="max-w-6xl mx-auto glass rounded-xl py-4 px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="font-display font-700 text-lg tracking-tight hover:text-accent-blue transition-colors"
          >
            <span className="gradient-text">MH</span>
            <span className="text-accent-slate ml-1 text-xs font-mono">.dev</span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? "text-accent-blue bg-accent-blue/10"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* GitHub & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mehedinassah"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:block btn-primary text-xs"
            >
              GitHub ↗
            </a>
            <button
              className="md:hidden p-2 rounded-lg glass text-white/70 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 pt-2 border-t border-white/10 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.href.slice(1)
                    ? "text-accent-blue bg-accent-blue/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://github.com/mehedinassah"
              target="_blank"
              rel="noreferrer"
              className="mt-2 btn-primary text-xs text-center py-3"
            >
              GitHub ↗
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
