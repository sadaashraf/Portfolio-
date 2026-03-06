import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="px-10 py-24 bg-gradient-to-b from-black via-slate-900 to-black"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Illustration */}
        <div className="flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=280&v=4" // stable online image
            className="w-[350px] rounded-xl shadow-lg border border-slate-700"
            alt="developer illustration"
          />
        </div>

        {/* About text */}
        <div className="bg-slate-900/60 backdrop-blur-md p-8 rounded-xl border border-slate-800">

          <h2 className="text-3xl font-bold mb-6">
            About <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I am a MERN Stack developer who builds modern web applications using
            React, Node.js, NestJS, PostgreSQL and MongoDB. I focus on creating
            scalable, clean and high-performance applications.
          </p>

          <p className="text-gray-400 mt-4">
            I enjoy solving real-world problems and building modern user
            interfaces with great performance and clean architecture.
          </p>

          <div className="mt-6 flex gap-4">
            <span className="px-4 py-1 text-sm bg-purple-600/20 border border-purple-500 rounded-full">
              MERN Stack
            </span>

            <span className="px-4 py-1 text-sm bg-blue-600/20 border border-blue-500 rounded-full">
              Backend APIs
            </span>

            <span className="px-4 py-1 text-sm bg-green-600/20 border border-green-500 rounded-full">
              UI Development
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;