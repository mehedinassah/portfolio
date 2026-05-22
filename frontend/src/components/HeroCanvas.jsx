import { motion } from "framer-motion";

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function HeroAdvanced() {
  return (
    <section
      id="hero"
      className="hero relative min-h-screen overflow-hidden flex flex-col"
      style={{
        backgroundColor: "#111827",
        backgroundImage:
          "radial-gradient(circle, rgba(251,113,133,0.12) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="hero-body relative z-10 flex-1 flex items-center px-[60px]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 lg:flex-row lg:items-center">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className="leading-none tracking-[-2px]"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
            >
              <span
                className="block"
                style={{ fontSize: "clamp(42px, 6vw, 72px)", color: "#f9fafb" }}
              >
                Mehedi
              </span>
              <span
                className="block"
                style={{
                  fontSize: "clamp(42px, 6vw, 72px)",
                  background: "linear-gradient(135deg, #fb7185, #f43f5e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Hassan
              </span>
            </h1>

            <p
              className="mt-5"
              style={{ fontSize: "15px", color: "#e5e7eb", maxWidth: "340px" }}
            >
              Backend Engineer building scalable systems.
            </p>

            <p
              className="mt-4"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                color: "#6b7280",
                maxWidth: "320px",
                lineHeight: 1.6,
              }}
            >
              I design and build efficient APIs, systems, and real-world applications. CS student from Dhaka, passionate about system design and clean code.
            </p>

            <p
              className="mt-6"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "#4b5563",
                letterSpacing: "0.04em",
              }}
            >
              20+ projects <span style={{ color: "#fb7185" }}>·</span> Backend-focused{" "}
              <span style={{ color: "#fb7185" }}>·</span> System design
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollToSection("projects")}
                className="rounded-[7px] px-5 py-2.5 text-white"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  background: "linear-gradient(135deg, #fb7185, #f43f5e)",
                }}
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="rounded-[7px] px-5 py-2.5"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#fb7185",
                  background: "transparent",
                  border: "1px solid rgba(251,113,133,0.5)",
                }}
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          <motion.div
            className="relative h-[420px] w-[320px] flex-[0_0_320px] overflow-visible"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <div className="relative z-[2] mx-auto h-[380px] w-[280px]">
              <img
                src="/me.png"
                alt="Mehedi Hassan"
                className="h-[380px] w-[280px] object-cover object-top rounded-t-[12px]"
                style={{ boxShadow: "0 0 60px rgba(251,113,133,0.15)" }}
              />
              <div
                className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full"
                style={{ background: "linear-gradient(to top, #111827 0%, transparent 100%)" }}
              />
            </div>

            <div
              className="status-card absolute bottom-[40px] left-[-20px] z-[10] rounded-[9px] px-3.5 py-2.5"
              style={{
                background: "rgba(31,41,55,0.85)",
                backdropFilter: "blur(8px)",
                border: "0.5px solid rgba(251,113,133,0.2)",
              }}
            >
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "9px",
                  color: "#fb7185",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                System Status
              </p>
              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="h-[5px] w-[5px] rounded-full" style={{ background: "#fb7185" }} />
                <span style={{ fontSize: "10px", color: "#d1d5db" }}>Production</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="h-[5px] w-[5px] rounded-full" style={{ background: "#fb7185" }} />
                <span style={{ fontSize: "10px", color: "#d1d5db" }}>Zero Downtime</span>
              </div>
              <p
                className="mt-1.5"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "#6b7280",
                }}
              >
                Uptime: 99.9%
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
