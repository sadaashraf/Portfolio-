import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "NestJS", level: 85 },
  { name: "NodeJS", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "PostgreSQL", level: 70 }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-10 py-24 bg-slate-900"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">
        My <span className="text-purple-500">Skills</span>
      </h2>

      <div className="max-w-2xl mx-auto space-y-8 bg-slate-900/60 backdrop-blur-md p-8 rounded-xl border border-slate-800">

        {skills.map((skill) => (
          <div key={skill.name}>

            <div className="flex justify-between mb-2">
              <p className="font-medium">{skill.name}</p>
              <span className="text-sm text-gray-400">
                {skill.level}%
              </span>
            </div>

            <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2 }}
                className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Skills;