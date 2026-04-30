import { motion } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiMongodb, SiPostgresql,
  SiTailwindcss, SiGit, SiJavascript, SiTypescript,
  SiNestjs, SiExpress, SiGithub, SiPostman
} from "react-icons/si";

const categories = [
  {
    label: "Frontend",
    skills: [
      { icon: <SiJavascript size={26} />, name: "JavaScript", color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/20" },
      { icon: <SiTypescript size={26} />, name: "TypeScript", color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20" },
      { icon: <SiReact size={26} />, name: "React", color: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/20" },
      { icon: <SiTailwindcss size={26} />, name: "Tailwind CSS", color: "text-cyan-300", bg: "bg-cyan-300/10 border-cyan-300/20" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { icon: <SiNodedotjs size={26} />, name: "Node.js", color: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
      { icon: <SiNestjs size={26} />, name: "NestJS", color: "text-red-400", bg: "bg-red-400/10 border-red-400/20" },
      { icon: <SiExpress size={26} />, name: "Express", color: "text-gray-300", bg: "bg-gray-300/10 border-gray-300/20" },
      { icon: <SiMongodb size={26} />, name: "MongoDB", color: "text-green-500", bg: "bg-green-500/10 border-green-500/20" },
      { icon: <SiPostgresql size={26} />, name: "PostgreSQL", color: "text-blue-500", bg: "bg-blue-500/10 border-blue-500/20" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { icon: <SiGit size={26} />, name: "Git", color: "text-orange-400", bg: "bg-orange-400/10 border-orange-400/20" },
      { icon: <SiGithub size={26} />, name: "GitHub", color: "text-white", bg: "bg-white/10 border-white/20" },
      { icon: <SiPostman size={26} />, name: "Postman", color: "text-orange-500", bg: "bg-orange-500/10 border-orange-500/20" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-24 bg-[#0d1220]">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-purple-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & <span className="gradient-text">Technologies</span></h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {categories.map(({ label, skills }, ci) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4 pl-1">{label}</p>
              <div className="flex flex-wrap gap-3">
                {skills.map(({ icon, name, color, bg }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border ${bg} hover:scale-105 transition-all duration-200 cursor-default group`}
                  >
                    <span className={`${color} group-hover:scale-110 transition-transform duration-200`}>{icon}</span>
                    <span className="text-sm text-gray-300 font-medium">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
