import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { contactApi } from "../data/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

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
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.response?.data?.message || "Got it. Will get back to you soon!");
      setTimeout(() => {
        setStatus("idle");
        setErrorMsg("");
      }, 3000);
    }
  };

  const contactMethods = [
    { emoji: "📧", label: "Email", value: "idehemnassah@gmail.com", href: "mailto:idehemnassah@gmail.com" },
    { emoji: "💼", label: "LinkedIn", value: "mehedinas", href: "https://www.linkedin.com/in/mehedinas" },
    { emoji: "🐙", label: "GitHub", value: "mehedinassah", href: "https://github.com/mehedinassah" },
    { emoji: "📍", label: "Location", value: "Dhaka, Bangladesh", href: null },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          <p className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-accent-slate max-w-2xl mx-auto">
            Have a project in mind, want to collaborate, or just want to say hi? My inbox is
            always open. I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {contactMethods.map((method, idx) => {
              return (
                <motion.div
                  key={method.label}
                  className="card p-5"
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-lg">
                      {method.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-accent-slate text-xs font-mono uppercase tracking-wide mb-1">
                        {method.label}
                      </p>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="text-white hover:text-accent-blue transition-colors text-sm truncate block"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{method.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Response Time */}
            <motion.div className="card p-5 border-emerald-500/20 bg-emerald-500/5" variants={itemVariants}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-600 text-xs font-mono font-semibold">FAST RESPONSE</span>
              </div>
              <p className="text-accent-slate text-sm">
                I reply to messages within 24 hours
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-accent-slate text-xs font-mono uppercase tracking-wide mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-accent-slate/5 border border-accent-slate/10 rounded-lg px-4 py-3 text-white/80 text-sm placeholder-accent-slate/40 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-accent-slate text-xs font-mono uppercase tracking-wide mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-accent-slate/5 border border-accent-slate/10 rounded-lg px-4 py-3 text-white/80 text-sm placeholder-accent-slate/40 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-accent-slate text-xs font-mono uppercase tracking-wide mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, opportunity, or idea..."
                    rows={5}
                    className="w-full bg-accent-slate/5 border border-accent-slate/10 rounded-lg px-4 py-3 text-white/80 text-sm placeholder-accent-slate/40 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all resize-none"
                    required
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.div
                    className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-sm flex items-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span className="font-bold">✓</span>
                    Message sent! I'll get back to you soon.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-sm flex items-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span className="font-bold">✓</span>
                    {errorMsg}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
