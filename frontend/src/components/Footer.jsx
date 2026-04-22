import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/mehedinassah",
      emoji: "🐙",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mehedi-hassan-2b4689278",
      emoji: "💼",
    },
    {
      name: "Email",
      url: "mailto:idehemnassah@gmail.com",
      emoji: "📧",
    },
  ];

  return (
    <footer className="border-t border-accent-slate/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display font-700 text-lg mb-2">
              <span className="gradient-text">MH</span>
              <span className="text-accent-slate ml-2 text-sm font-mono">.dev</span>
            </div>
            <p className="text-accent-slate text-sm">
              Full-stack developer building products that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-accent-slate text-xs font-mono uppercase tracking-wider mb-4">
              Navigate
            </p>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-accent-slate hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-accent-slate text-xs font-mono uppercase tracking-wider mb-4">
              Connect
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.name}
                    className="w-10 h-10 rounded-lg card flex items-center justify-center text-lg hover:text-accent-blue hover:bg-accent-blue/5 transition-all"
                  >
                    {link.emoji}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-slate/10 pt-8">
          {/* Copyright & Credits */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-accent-slate">
            <p>
              © {year} Mehedi Hassan. Built with{" "}
              <span className="inline-flex items-center gap-1">
                React <Heart size={12} className="text-red-500" /> Spring Boot
              </span>
              .
            </p>
            <p>
              Designed for performance and user experience · Hosted on Vercel & AWS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
