import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload, FiSend, FiMessageCircle } from "react-icons/fi";

const roles = ["MERN Stack Developer", "React Developer", "NestJS Developer", "Full Stack Engineer"];

const HERO_MESSAGES = [
  { from: "bot", text: "👋 Hi! I'm Ashraf's assistant. Ask me anything!" },
];

const HERO_SUGGESTIONS = ["Experience?", "Tech stack?", "Open to remote?"];

const heroReplies = {
  experience: "1 year building full-stack apps — Inventory System, Hospital Management, Todo App with JWT Auth. All live on Vercel! 🚀",
  stack: "React · TypeScript · NestJS · Node.js · MongoDB · PostgreSQL · Tailwind CSS · JWT ⚛️",
  remote: "Yes! Based in Islamabad 🇵🇰 — fully open to remote & on-site roles worldwide. Actively looking!",
  default: "Great question! Use the chat button (bottom-right) for more details. 😊",
};

function getHeroReply(text) {
  const t = text.toLowerCase();
  if (t.includes("experience") || t.includes("year")) return heroReplies.experience;
  if (t.includes("stack") || t.includes("tech") || t.includes("skill")) return heroReplies.stack;
  if (t.includes("remote") || t.includes("location") || t.includes("open")) return heroReplies.remote;
  return heroReplies.default;
}

function HeroChat() {
  const [messages, setMessages] = useState(HERO_MESSAGES);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = (text) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput("");
    setMessages((p) => [...p, { from: "user", text: msg }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((p) => [...p, { from: "bot", text: getHeroReply(msg) }]);
    }, 700);
  };

  return (
    <div className="max-w-md mx-auto mb-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden text-left">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 border-b border-white/5 bg-white/5">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-xs">🤖</div>
        <div>
          <p className="text-xs font-semibold text-white">Ashraf's Assistant</p>
          <p className="text-[10px] text-green-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />Online
          </p>
        </div>
        <FiMessageCircle size={14} className="ml-auto text-purple-400" />
      </div>

      {/* Messages */}
      <div className="px-4 py-3 space-y-2 max-h-48 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <p className={`text-xs px-3 py-1.5 rounded-xl leading-relaxed max-w-[85%] whitespace-pre-line ${
              m.from === "user"
                ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-tr-sm"
                : "bg-white/5 border border-white/10 text-gray-300 rounded-tl-sm"
            }`}>{m.text}</p>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <span className="bg-white/5 border border-white/10 px-3 py-2 rounded-xl rounded-tl-sm flex gap-1 items-center">
              {[0,1,2].map((i) => (
                <motion.span key={i} className="w-1 h-1 rounded-full bg-purple-400"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </span>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick replies */}
      <div className="px-4 pb-2 flex gap-1.5 flex-wrap">
        {HERO_SUGGESTIONS.map((s) => (
          <button key={s} onClick={() => send(s)}
            className="text-[11px] px-2.5 py-1 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition">
            {s}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="px-4 pb-3">
        <div className="flex gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus-within:border-purple-500 transition">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent text-xs text-gray-200 placeholder:text-gray-500 outline-none"
          />
          <button onClick={() => send()} disabled={!input.trim()}
            className="text-purple-400 hover:text-purple-300 disabled:opacity-30 transition">
            <FiSend size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

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
    <section id="home" className="hero-grid relative flex items-center justify-center text-center overflow-hidden">

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

      <div className="relative z-10 px-6 max-w-2xl mx-auto pt-32 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile photo */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full border-2 border-purple-500/50 bg-gradient-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center text-4xl shadow-lg shadow-purple-500/20">
              👨‍💻
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
            Muhammad <span className="gradient-text">Ashraf</span>
          </h1>

          <div className="h-9 flex items-center justify-center gap-1.5 text-lg md:text-xl text-gray-300 font-medium mb-8">
            <span>{displayed}</span>
            <span className="animate-blink text-purple-400">|</span>
          </div>

          <HeroChat />

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
              { icon: <FiGithub size={22} />, href: "https://github.com/sadaashraf", label: "GitHub" },
              { icon: <FiLinkedin size={22} />, href: "https://www.linkedin.com/in/muhammad-ashraf-198863324/", label: "LinkedIn" },
              { icon: <FiMail size={22} />, href: "mailto:nayeemashraf92@gmail.com", label: "Email" },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/15 text-gray-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-200"
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
