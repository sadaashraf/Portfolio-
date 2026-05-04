import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCheck, FiAlertCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";

// ── EmailJS config ──────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Create a service (Gmail) → copy Service ID below
// 3. Create an email template → copy Template ID below
// 4. Go to Account → API Keys → copy Public Key below
const EMAILJS_SERVICE_ID = "service_w6c6mvd";
const EMAILJS_TEMPLATE_ID = "template_1gi5sxr";
const EMAILJS_PUBLIC_KEY = "tbt3V7QGFyWVL_ex2";
// ────────────────────────────────────────────────────────────────

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="px-6 py-28 bg-[#0d1220]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3">Let's Talk</p>
          <h2 className="text-4xl font-bold">Get In <span className="gradient-text">Touch</span></h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto text-sm">
            Open to full-time roles, freelance projects and collaborations. I usually respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {[
                { icon: <FiMail size={18} />, label: "Email", value: "nayeemashraf92@gmail.com", href: "mailto:nayeemashraf92@gmail.com" },
                { icon: <FiMapPin size={18} />, label: "Location", value: "Islamabad, Pakistan — Open to Remote" },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-gray-300 hover:text-purple-400 transition">{value}</a>
                    ) : (
                      <p className="text-sm text-gray-300">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { icon: <FiGithub size={18} />, href: "https://github.com/sadaashraf", label: "GitHub" },
                { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/muhammad-ashraf-198863324/", label: "LinkedIn" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
              <p className="text-sm text-green-300 font-medium">Available for new opportunities</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 bg-white/5 p-8 rounded-2xl border border-white/5"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                name="from_name"
                required
                className="col-span-2 sm:col-span-1 bg-white/5 border border-white/10 p-3 rounded-xl text-sm text-white focus:border-purple-500 focus:bg-purple-500/5 outline-none transition placeholder:text-gray-500"
                placeholder="Your Name"
              />
              <input
                name="from_email"
                type="email"
                required
                className="col-span-2 sm:col-span-1 bg-white/5 border border-white/10 p-3 rounded-xl text-sm text-white focus:border-purple-500 focus:bg-purple-500/5 outline-none transition placeholder:text-gray-500"
                placeholder="Email Address"
              />
            </div>
            <input
              name="subject"
              required
              className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-sm text-white focus:border-purple-500 focus:bg-purple-500/5 outline-none transition placeholder:text-gray-500"
              placeholder="Subject"
            />
            <textarea
              name="message"
              rows="5"
              required
              className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-sm text-white focus:border-purple-500 focus:bg-purple-500/5 outline-none transition placeholder:text-gray-500 resize-none"
              placeholder="Your Message"
            />

            {/* Status messages */}
            {status === "success" && (
              <div className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 border border-green-500/20 p-3 rounded-xl">
                <FiCheck size={16} /> Message sent! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 p-3 rounded-xl">
                <FiAlertCircle size={16} /> Something went wrong. Please email me directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 py-3 rounded-xl font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-purple-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <FiSend size={16} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
