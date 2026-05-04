import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Inventory Management System",
    icon: "📦",
    gradient: "from-purple-600/30 to-blue-600/30",
    border: "border-purple-500/20",
    desc: "Full-stack dashboard with product CRUD, stock tracking and order management. Built the React frontend and Node.js/MongoDB backend with JWT authentication.",
    tech: ["React", "Node.js", "MongoDB"],
    featured: true,
    live: "https://inventory-management-system-hazel-seven.vercel.app",
  },
  {
    title: "Hospital Management System",
    icon: "🏥",
    gradient: "from-red-600/30 to-pink-600/30",
    border: "border-red-500/20",
    desc: "Full-stack system for patient records, doctor scheduling and appointment booking. Built REST APIs with NestJS and managed data with PostgreSQL.",
    tech: ["React", "NestJS", "PostgreSQL"],
    featured: true,
    github: "https://github.com/sadaashraf/-Hospital-Management-System",
  },
  {
    title: "Todo Application",
    icon: "✅",
    gradient: "from-green-600/30 to-teal-600/30",
    border: "border-green-500/20",
    desc: "Task manager with JWT authentication, protected routes, task CRUD and priority filtering. Deployed live on Vercel.",
    tech: ["React", "NestJS", "PostgreSQL"],
    featured: true,
    github: "https://github.com/sadaashraf/todo",
    live: "https://todo-chi-seven-26.vercel.app",
  },
  {
    title: "Currency Converter",
    icon: "💱",
    gradient: "from-yellow-600/30 to-orange-600/30",
    border: "border-yellow-500/20",
    desc: "Real-time currency conversion using a live exchange rate API. Built with React hooks and a clean, responsive UI.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/sadaashraf/Currency-converter",
    live: "https://currency-converter-khaki-one.vercel.app",
  },
  {
    title: "Donation Tracker",
    icon: "💰",
    gradient: "from-cyan-600/30 to-blue-600/30",
    border: "border-cyan-500/20",
    desc: "Donation tracking app to manage donors, campaigns and contribution records with a dashboard and real-time totals.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/sadaashraf/donation-tracker",
  },
  {
    title: "Inventory Backend API",
    icon: "⚙️",
    gradient: "from-slate-600/30 to-gray-600/30",
    border: "border-slate-500/20",
    desc: "RESTful API built with NestJS and TypeScript covering authentication, product management and order processing with PostgreSQL and TypeORM.",
    tech: ["NestJS", "PostgreSQL", "TypeScript"],
    github: "https://github.com/sadaashraf/inventory-backend",
  },
];

const techColors = {
  "React": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
  "MongoDB": "bg-green-600/10 text-green-500 border-green-600/20",
  "NestJS": "bg-red-500/10 text-red-400 border-red-500/20",
  "PostgreSQL": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Tailwind CSS": "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
  "JavaScript": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "TypeScript": "bg-blue-400/10 text-blue-300 border-blue-400/20",
};

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24 bg-gradient-to-b from-[#080C14] via-[#0d1220] to-[#080C14]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-purple-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">What I've Built</p>
          <h2 className="text-3xl md:text-4xl font-bold">My <span className="gradient-text">Projects</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className={`group relative flex flex-col bg-[#0d1220] border ${project.border} rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 min-h-[340px]`}
            >
              {project.featured && (
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-semibold bg-gradient-to-r from-purple-600 to-blue-500 rounded-full">
                  Featured
                </div>
              )}

              <div className={`relative h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="text-5xl" role="img" aria-label={project.title}>{project.icon}</span>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white hover:bg-purple-500/40 hover:border-purple-400 transition"
                  >
                    <FiGithub size={16} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Demo`}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white hover:bg-blue-500/40 hover:border-blue-400 transition"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-sm font-bold mb-2 group-hover:text-purple-300 transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-2 py-0.5 rounded-full border font-medium ${techColors[tech] || "bg-white/5 text-gray-400 border-white/10"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/sadaashraf?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition text-sm font-medium"
          >
            <FiGithub size={15} />
            View All on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
