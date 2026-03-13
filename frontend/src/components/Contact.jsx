import { useEffect, useRef, useState } from "react";
import { contactApi } from "../data/api";

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("section-visible");
        }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      await contactApi.send(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 2000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.response?.data?.message || "Got it. Will get back to you ASAP!");
      setTimeout(() => {
        setStatus("idle");
        setErrorMsg("");
      }, 2000);
    }
  };

  const inputClass =
    "w-full bg-[#0d1424] border border-white/10 rounded-xl px-4 py-3.5 text-white/80 text-sm placeholder-white/20 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/20 transition-all font-body";

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#8b5cf6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto section-hidden">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase mb-3"></p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-white/40 max-w-lg font-body">
            Looking for a dedicated developer? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-white/60 leading-relaxed font-body">
              Whether you have a project in mind, want to discuss opportunities, or just
              want to say hi — my inbox is always open.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "ididehemnassah@gmail.com",
                  href: "mailto:ididehemnassah@gmail.com",
                  color: "#00d4ff",
                },
                {
                  icon: "💼",
                  label: "LinkedIn",
                  value: "linkedin.com/in/mehedi-hassan-2b4689278",
                  href: "https://www.linkedin.com/in/mehedi-hassan-2b4689278/",
                  color: "#4f8ef7",
                },
                {
                  icon: "🐙",
                  label: "GitHub",
                  value: "github.com/mehedinassah",
                  href: "https://github.com/mehedinassah",
                  color: "#8b5cf6",
                },
                {
                  icon: "📍",
                  label: "Location",
                  value: "Dhaka, Bangladesh",
                  href: null,
                  color: "#10b981",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0d1424] border border-white/5 hover:border-white/10 transition-colors group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ background: `${item.color}15` }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/30 text-xs font-mono uppercase tracking-wider">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-white/70 text-sm hover:text-white transition-colors group-hover:text-[#00d4ff]"
                        style={{ "--hover-c": item.color }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white/70 text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response time badge */}
            <div className="p-4 rounded-xl border border-[#10b981]/20 bg-[#10b981]/5">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-[#10b981] text-xs font-mono font-semibold">
                  Fast Response
                </span>
              </div>
              <p className="text-white/40 text-xs">
                I typically respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-3">
            <div className="gradient-border p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/40 text-xs font-mono uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Voirob"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs font-mono uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="voirob@company.com"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/40 text-xs font-mono uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className={inputClass + " resize-none"}
                    required
                  />
                </div>

                {/* Success/Error states */}
                {status === "success" && (
                  <div className="p-4 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-sm flex items-center gap-2">
                    <span>✓</span>
                    Message sent! I'll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-sm flex items-center gap-2 transition-all duration-500">
                    <span>✓</span>
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full py-4 rounded-xl text-base font-display flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-[#030712]/30 border-t-[#030712] animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span>→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
