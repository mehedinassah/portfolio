import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "home", href: "#hero" },
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
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
    // Set initial active section to "hero" if at top
    setActiveSection("hero");
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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3"
      style={{
        background: "rgba(17,24,39,0.75)",
        backdropFilter: "blur(10px)",
        borderBottom: "0.5px solid rgba(251,113,133,0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#hero")}
            className="tracking-tight"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "15px" }}
          >
            <span style={{ color: "#fb7185" }}>MH</span>
            <span style={{ color: "#fb7185", opacity: 0.5 }}>.dev</span>
          </button>

          {/* Desktop Nav */}
          <ul
            className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px" }}
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`transition-colors duration-200 ${
                    activeSection === link.href.slice(1)
                      ? ""
                      : ""
                  }`}
                  style={{ color: activeSection === link.href.slice(1) ? "#fb7185" : "#9ca3af" }}
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
              className="hidden sm:inline-flex items-center rounded-md px-4 py-2 text-white"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                background: "linear-gradient(135deg, #fb7185, #f43f5e)",
              }}
            >
              GitHub ↗
            </a>
            <button
              className="md:hidden p-2.5 rounded-lg text-white/80 hover:text-white transition-colors"
              style={{ border: "0.5px solid rgba(251,113,133,0.2)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t flex flex-col gap-1 max-h-[70vh] overflow-y-auto"
            style={{ borderColor: "rgba(251,113,133,0.15)" }}
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-left px-3 py-3 rounded-lg transition-all"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: activeSection === link.href.slice(1) ? "#fb7185" : "#9ca3af",
                  background: activeSection === link.href.slice(1) ? "rgba(251,113,133,0.08)" : "transparent",
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://github.com/mehedinassah"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-md text-center py-3 text-white"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                background: "linear-gradient(135deg, #fb7185, #f43f5e)",
              }}
            >
              GitHub ↗
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
