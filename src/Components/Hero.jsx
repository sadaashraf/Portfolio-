import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from "react-icons/fi";

const roles = ["MERN Stack Developer", "React Developer", "NestJS Developer", "Full Stack Engineer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      <motion.div
        animate={{ x: [0, 60, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-purple-700 opacity-20 blur-[140px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -60, 40, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-blue-700 opacity-20 blur-[140px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-purple-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for hire
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
            Muhammad <span className="gradient-text">Ashraf</span>
          </h1>

          <div className="h-9 flex items-center justify-center gap-1.5 text-lg md:text-xl text-gray-300 font-medium mb-5">
            <span>{displayed}</span>
            <span className="animate-blink text-purple-400">|</span>
          </div>

          <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed text-sm md:text-base">
            1 year of experience building full-stack web apps with React, NestJS and Node.js.
            Based in Islamabad — open to remote and on-site roles.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a
              href="#projects"
              className="px-7 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/20"
            >
              View Projects
            </a>
            <a
              href="/cv.pdf"
              download
              className="px-7 py-3 border border-white/15 rounded-xl font-semibold text-sm text-gray-300 hover:border-purple-500/60 hover:text-white hover:bg-purple-500/10 transition-all duration-200 flex items-center gap-2"
            >
              <FiDownload size={15} />
              Download CV
            </a>
          </div>

          <div className="flex justify-center gap-3">
            {[
              { icon: <FiGithub size={18} />, href: "https://github.com/sadaashraf", label: "GitHub" },
              { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/muhammad-ashraf-198863324/", label: "LinkedIn" },
              { icon: <FiMail size={18} />, href: "mailto:nayeemashraf92@gmail.com", label: "Email" },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-purple-400 transition"
      >
        <FiArrowDown size={22} />
      </motion.a>

    </section>
  );
};

export default Hero;
