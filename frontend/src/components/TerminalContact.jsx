import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const TerminalContact = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "$ contact --me" },
    { type: "system", text: "Welcome to Mehedi Hassan's contact terminal 🚀" },
    { type: "system", text: "Type 'help' for available commands" },
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const commands = {
    help: {
      output: [
        "Available commands:",
        "  email          - Show email address",
        "  linkedin       - Show LinkedIn profile",
        "  github         - Show GitHub profile",
        "  location       - Show location",
        "  availability   - Check availability status",
        "  connect        - Send me a message",
        "  clear          - Clear terminal",
        "  help           - Show this help menu",
      ],
    },
    email: {
      output: ["📧 Email: mehedi.hassan.dev@gmail.com"],
    },
    linkedin: {
      output: ["💼 LinkedIn: linkedin.com/in/mehedi-hassan-dev"],
    },
    github: {
      output: ["🐙 GitHub: github.com/mehedinassah"],
    },
    location: {
      output: ["📍 Location: Dhaka, Bangladesh"],
    },
    availability: {
      output: [
        "⏰ Status: Available",
        "🎯 Looking for: Full-time, Freelance, Contract roles",
        "💬 Open to: Startups, Scale-ups, Innovative projects",
      ],
    },
  };

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();

    // Add user input to history
    setHistory((prev) => [...prev, { type: "user", text: `$ ${cmd}` }]);

    if (trimmed === "clear") {
      setHistory([]);
    } else if (trimmed === "connect") {
      setHistory((prev) => [
        ...prev,
        { type: "system", text: "Opening contact form..." },
        { type: "system", text: "📬 Redirecting to email" },
      ]);
      setTimeout(() => {
        window.location.href = "mailto:mehedi.hassan.dev@gmail.com?subject=Let's%20Connect!";
      }, 1000);
    } else if (commands[trimmed]) {
      setHistory((prev) => [
        ...prev,
        ...commands[trimmed].output.map((line) => ({ type: "output", text: line })),
      ]);
    } else if (trimmed === "") {
      // Empty input, do nothing
    } else {
      setHistory((prev) => [
        ...prev,
        { type: "error", text: `command not found: ${trimmed}` },
        { type: "system", text: "Type 'help' for available commands" },
      ]);
    }

    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]"
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h2 className="font-display font-900 text-5xl md:text-6xl text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-accent-slate">
            Open to opportunities, collaborations, and conversations. Hit me up!
          </p>
        </motion.div>

        {/* Terminal Container */}
        <motion.div
          className="rounded-lg border border-accent-blue/30 backdrop-blur-sm overflow-hidden bg-accent-slate/10 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-accent-slate/20 border-b border-accent-blue/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-accent-slate font-mono">mehedi@portfolio:~$</span>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="p-6 h-96 overflow-y-auto font-mono text-sm bg-gradient-to-b from-transparent to-accent-blue/5 space-y-2"
          >
            {history.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-2 ${
                  line.type === "user"
                    ? "text-accent-blue"
                    : line.type === "error"
                    ? "text-red-400"
                    : line.type === "output"
                    ? "text-emerald-400"
                    : "text-accent-slate-light"
                }`}
              >
                {line.type === "user" || line.type === "system" ? (
                  <>
                    {line.type === "system" && <span className="text-accent-blue">$</span>}
                    <span>{line.text}</span>
                  </>
                ) : (
                  <span>{line.text}</span>
                )}
              </motion.div>
            ))}

            {/* Blinking Cursor */}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-accent-blue"
            />
          </div>

          {/* Terminal Input */}
          <form onSubmit={handleSubmit} className="border-t border-accent-blue/20 p-4 flex gap-2">
            <span className="text-accent-blue font-mono">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help' to see commands..."
              className="flex-1 bg-transparent text-white font-mono outline-none placeholder-accent-slate/50"
              autoFocus
            />
          </form>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: "📧",
              title: "Email",
              value: "mehedi.hassan.dev@gmail.com",
              href: "mailto:mehedi.hassan.dev@gmail.com",
            },
            {
              icon: "💼",
              title: "LinkedIn",
              value: "linkedin.com/in/mehedi-hassan-dev",
              href: "https://linkedin.com/in/mehedi-hassan-dev",
            },
            {
              icon: "🐙",
              title: "GitHub",
              value: "github.com/mehedinassah",
              href: "https://github.com/mehedinassah",
            },
          ].map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-lg bg-accent-slate/5 border border-accent-blue/20 hover:border-accent-blue/50 transition-all group"
              whileHover={{ scale: 1.05, borderColor: "rgb(59, 130, 246)" }}
            >
              <div className="text-3xl mb-2">{link.icon}</div>
              <h4 className="text-white font-bold mb-1">{link.title}</h4>
              <p className="text-accent-slate text-sm group-hover:text-accent-blue transition-colors truncate">
                {link.value}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalContact;
