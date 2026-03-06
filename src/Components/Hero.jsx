import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative py-32 text-center overflow-hidden">

      {/* animated gradient circles */}
      <motion.div
        animate={{ x: [0, 50, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600 opacity-30 blur-[120px]"
      />

      <motion.div
        animate={{ x: [0, -50, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600 opacity-30 blur-[120px]"
      />

      <div className="relative">

        <h1 className="text-6xl font-bold">
          Muhammad
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            {" "}Ashraf
          </span>
        </h1>

        <p className="text-gray-400 mt-4">
          MERN Stack Developer | React & NestJS
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">

          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg hover:opacity-90 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-slate-600 rounded-lg hover:border-purple-500 transition"
          >
            Contact Me
          </a>

        </div>

      </div>

    </section>
  );
};

export default Hero;