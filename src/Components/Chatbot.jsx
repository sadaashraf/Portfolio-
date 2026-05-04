import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";

const BOT_NAME = "Ashraf's Assistant";

const knowledge = [
  {
    keys: ["hi", "hello", "hey", "sup", "yo", "hola", "greet"],
    reply: "Hey there! 👋 I'm Ashraf's portfolio assistant. Ask me about his skills, experience, projects, education, or how to contact him!",
  },
  {
    keys: ["name", "who", "introduce", "yourself", "about"],
    reply: "I'm the assistant for Muhammad Ashraf — a MERN Stack Developer based in Islamabad, Pakistan 🇵🇰 with 1 year of professional experience building full-stack web applications.",
  },
  {
    keys: ["experience", "years", "background", "career", "work history", "professional"],
    reply: "Muhammad Ashraf has 1 year of hands-on professional experience. He has built and deployed full-stack applications including:\n\n📦 Inventory Management System\n🏥 Hospital Management System\n✅ Todo App with JWT Auth\n💱 Currency Converter\n💰 Donation Tracker\n⚙️ Inventory Backend API\n\nAll projects are live on Vercel or available on GitHub.",
  },
  {
    keys: ["skill", "tech", "stack", "technolog", "know", "tools", "language"],
    reply: "Ashraf's full tech stack:\n\n⚛️ Frontend — React, TypeScript, JavaScript, Tailwind CSS\n🟢 Backend — Node.js, NestJS, Express.js\n🗄️ Database — MongoDB, PostgreSQL\n🔧 Tools — Git, GitHub, Postman, TypeORM\n🔐 Auth — JWT Authentication",
  },
  {
    keys: ["react", "frontend", "ui", "tailwind", "typescript", "javascript", "css"],
    reply: "On the frontend, Ashraf builds with React, TypeScript, and Tailwind CSS. He focuses on clean, responsive, and visually polished UIs with smooth user experiences. ⚛️",
  },
  {
    keys: ["backend", "nestjs", "node", "api", "server", "express", "rest", "endpoint"],
    reply: "On the backend, Ashraf builds REST APIs with Node.js, NestJS, and Express. He handles JWT authentication, middleware, guards, and database integration with MongoDB & PostgreSQL. 🟢",
  },
  {
    keys: ["database", "mongodb", "postgresql", "postgres", "sql", "nosql", "typeorm"],
    reply: "Ashraf works with both SQL and NoSQL databases:\n\n🍃 MongoDB — used with Node.js/Express projects\n🐘 PostgreSQL — used with NestJS + TypeORM projects",
  },
  {
    keys: ["project", "built", "app", "application", "work", "demo", "live"],
    reply: "Ashraf's projects:\n\n📦 Inventory Management System — React + Node.js + MongoDB (Live on Vercel)\n🏥 Hospital Management System — React + NestJS + PostgreSQL\n✅ Todo App — React + NestJS + JWT Auth (Live on Vercel)\n💱 Currency Converter — React + Live Exchange Rate API (Live on Vercel)\n💰 Donation Tracker — React + Tailwind CSS\n⚙️ Inventory Backend API — NestJS + PostgreSQL + TypeORM\n\nSee the Projects section for GitHub links & live demos!",
  },
  {
    keys: ["inventory"],
    reply: "📦 Inventory Management System\nFull-stack dashboard with product CRUD, stock tracking and order management.\nStack: React + Node.js + MongoDB + JWT Auth\n🔗 Live: inventory-management-system-hazel-seven.vercel.app\n🐙 GitHub: github.com/sadaashraf/inventory-management-system",
  },
  {
    keys: ["hospital"],
    reply: "🏥 Hospital Management System\nFull-stack system for patient records, doctor scheduling and appointment booking.\nStack: React + NestJS + PostgreSQL\n🐙 GitHub: github.com/sadaashraf/-Hospital-Management-System",
  },
  {
    keys: ["todo"],
    reply: "✅ Todo Application\nTask manager with JWT authentication, protected routes, CRUD and priority filtering.\nStack: React + NestJS + PostgreSQL\n🔗 Live: todo-chi-seven-26.vercel.app\n🐙 GitHub: github.com/sadaashraf/todo",
  },
  {
    keys: ["currency"],
    reply: "💱 Currency Converter\nReal-time currency conversion using a live exchange rate API.\nStack: React + JavaScript\n🔗 Live: currency-converter-khaki-one.vercel.app\n🐙 GitHub: github.com/sadaashraf/Currency-converter",
  },
  {
    keys: ["education", "degree", "university", "study", "college", "qualification", "student"],
    reply: "Ashraf has a strong foundation in computer science. He continuously upskills by building real-world projects and staying current with modern web technologies and industry best practices. 📚",
  },
  {
    keys: ["contact", "email", "reach", "hire", "connect", "message", "get in touch"],
    reply: "You can reach Muhammad Ashraf at:\n\n📧 nayeemashraf92@gmail.com\n💼 linkedin.com/in/muhammad-ashraf-198863324\n🐙 github.com/sadaashraf\n\nOr scroll to the Contact section and send a message directly! 😊",
  },
  {
    keys: ["available", "open to work", "looking", "opportunity", "job", "position", "role", "hire"],
    reply: "Yes! Ashraf is actively looking for new opportunities. He's open to:\n\n✅ Full-time roles\n✅ Freelance projects\n✅ Remote & on-site positions\n\nFeel free to reach out at nayeemashraf92@gmail.com 📩",
  },
  {
    keys: ["location", "where", "based", "city", "country", "islamabad", "pakistan", "remote"],
    reply: "Ashraf is based in Islamabad, Pakistan 🇵🇰 and is open to both remote and on-site roles worldwide.",
  },
  {
    keys: ["github", "repository", "repo", "code", "source"],
    reply: "Ashraf's GitHub: 🐙 github.com/sadaashraf\n\nHe has repositories for all his major projects including the Inventory System, Hospital Management System, Todo App, Currency Converter, and more!",
  },
  {
    keys: ["linkedin"],
    reply: "Ashraf's LinkedIn: 💼 linkedin.com/in/muhammad-ashraf-198863324\n\nFeel free to connect with him there!",
  },
  {
    keys: ["cv", "resume", "download"],
    reply: "You can download Ashraf's CV using the 'Download CV' button in the Hero section at the top of the page! 📄",
  },
  {
    keys: ["jwt", "auth", "authentication", "security", "login"],
    reply: "Ashraf has hands-on experience with JWT authentication — implementing login, registration, protected routes, guards, and token refresh flows in both NestJS and Node.js/Express backends. 🔐",
  },
  {
    keys: ["strength", "best", "good at", "speciality", "specialty", "expert"],
    reply: "Ashraf's key strengths:\n\n💪 Building full-stack apps end-to-end\n🎨 Clean, responsive UI with React & Tailwind\n🔗 REST API design with NestJS & Node.js\n🗄️ Both SQL (PostgreSQL) and NoSQL (MongoDB)\n🚀 Deploying apps live on Vercel",
  },
];

const QUICK_REPLIES = ["Skills", "Projects", "Experience", "Contact", "Available?"];

function getBotReply(input) {
  const lower = input.toLowerCase();
  for (const { keys, reply } of knowledge) {
    if (keys.some((k) => lower.includes(k))) return reply;
  }
  return "Hmm, I'm not sure about that. Try asking about Ashraf's skills, projects, experience, location, or contact info! 😊";
}

function Message({ msg }) {
  const isBot = msg.from === "bot";
  return (
    <div className={`flex gap-2 ${isBot ? "justify-start" : "justify-end"}`}>
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-xs shrink-0 mt-1">
          🤖
        </div>
      )}
      <div
        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
          isBot
            ? "bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm"
            : "bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-tr-sm"
        }`}
      >
        {msg.text}
      </div>
    </div>
  );
}

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! 👋 I'm Ashraf's assistant. Ask me about his skills, projects, or how to contact him!" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text) => {
    const userMsg = text || input.trim();
    if (!userMsg) return;
    setInput("");
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: getBotReply(userMsg) }]);
    }, 800);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30 text-white"
        aria-label="Toggle chatbot"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <FiX size={22} /> : <FiMessageCircle size={22} />}
          </motion.span>
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-[#080C14]" />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] flex flex-col rounded-2xl border border-white/10 bg-[#0d1220] shadow-2xl shadow-black/50 overflow-hidden"
            style={{ maxHeight: "min(560px, calc(100vh - 120px))" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-600/20 to-blue-500/20 border-b border-white/5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-base shrink-0">
                🤖
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white">{BOT_NAME}</p>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Online
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white transition p-1"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ minHeight: 0, maxHeight: "360px" }}>
              {messages.map((msg, i) => (
                <Message key={i} msg={msg} />
              ))}
              {typing && (
                <div className="flex gap-2 justify-start">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-xs shrink-0 mt-1">
                    🤖
                  </div>
                  <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-purple-400"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <div className="px-4 pb-2 flex gap-2 flex-wrap">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-xs px-3 py-1 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 pb-4 pt-1">
              <div className="flex gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus-within:border-purple-500 transition">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent text-sm text-gray-200 placeholder:text-gray-500 outline-none"
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim()}
                  className="text-purple-400 hover:text-purple-300 disabled:opacity-30 transition"
                >
                  <FiSend size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
