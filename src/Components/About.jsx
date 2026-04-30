import { motion } from "framer-motion";
import { FiCode, FiServer, FiLayout, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

const stats = [
  { value: "6+", label: "Projects" },
  { value: "9+", label: "Technologies" },
  { value: "1", label: "Year Experience" },
];

const stack = [
  { icon: <FiLayout size={16} />, label: "Frontend", desc: "React, TypeScript, Tailwind CSS" },
  { icon: <FiServer size={16} />, label: "Backend", desc: "Node.js, NestJS, Express" },
  { icon: <FiCode size={16} />, label: "Database", desc: "MongoDB, PostgreSQL" },
];

const About = () => {
  return (
    <section id="about" className="px-6 py-24 bg-gradient-to-b from-[#080C14] via-[#0d1220] to-[#080C14]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-purple-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">Who I Am</p>
          <h2 className="text-3xl md:text-4xl font-bold">About <span className="gradient-text">Me</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {/* Terminal */}
            <div className="rounded-2xl border border-white/10 overflow-hidden shadow-xl shadow-purple-500/5">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-gray-500 font-mono">about.js</span>
              </div>
              <div className="p-5 font-mono text-sm space-y-1 bg-[#0a0e1a] leading-relaxed">
                <p><span className="text-purple-400">const</span> <span className="text-cyan-300">dev</span> <span className="text-white">= {"{"}</span></p>
                <p className="pl-4"><span className="text-blue-300">name</span><span className="text-white">:</span> <span className="text-green-300">'Muhammad Ashraf'</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-blue-300">role</span><span className="text-white">:</span> <span className="text-green-300">'MERN Stack Developer'</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-blue-300">experience</span><span className="text-white">:</span> <span className="text-green-300">'1 Year'</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-blue-300">location</span><span className="text-white">:</span> <span className="text-green-300">'Islamabad, PK'</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-blue-300">available</span><span className="text-white">:</span> <span className="text-orange-300">true</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-blue-300">openTo</span><span className="text-white">:</span> <span className="text-green-300">'Remote & On-site'</span><span className="text-white">,</span></p>
                <p><span className="text-white">{"}"}</span></p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-xl font-bold gradient-text">{value}</p>
                  <p className="text-xs text-gray-400 mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* GitHub card */}
            <a
              href="https://github.com/sadaashraf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <FiGithub size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold group-hover:text-purple-300 transition">github.com/sadaashraf</p>
                <p className="text-xs text-gray-500 mt-0.5">View all repositories →</p>
              </div>
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-gray-300 leading-relaxed">
              I'm a <span className="text-white font-semibold">MERN Stack Developer</span> with 1 year of
              hands-on experience. I've built and deployed full-stack applications including an
              Inventory System, Hospital Management System, and a Todo App with JWT auth — all live on Vercel.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              I focus on writing clean, maintainable code and building UIs that are both functional and
              visually polished. I'm actively looking for a role where I can grow and contribute to a real product.
            </p>

            <div className="grid gap-2.5">
              {stack.map(({ icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{label}</p>
                    <p className="text-xs text-gray-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl font-semibold text-sm hover:opacity-90 transition"
              >
                <FiDownload size={14} />
                Download CV
              </a>
              <a
                href="https://github.com/sadaashraf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-xl text-sm text-gray-300 hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition"
              >
                <FiGithub size={14} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-ashraf-198863324/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-xl text-sm text-gray-300 hover:border-blue-500 hover:text-white hover:bg-blue-500/10 transition"
              >
                <FiLinkedin size={14} />
                LinkedIn
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
