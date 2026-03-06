import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-5 bg-black/70 backdrop-blur-md border-b border-slate-800">

      {/* Logo */}
      <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        MA
      </h1>

      {/* Links */}
      <ul className="hidden md:flex gap-8 text-gray-400">

        <li className="hover:text-purple-400 transition">
          <a href="#home">Home</a>
        </li>

        <li className="hover:text-purple-400 transition">
          <a href="#about">About</a>
        </li>

        <li className="hover:text-purple-400 transition">
          <a href="#skills">Skills</a>
        </li>

        <li className="hover:text-purple-400 transition">
          <a href="#projects">Projects</a>
        </li>

        <li className="hover:text-purple-400 transition">
          <a href="#contact">Contact</a>
        </li>

      </ul>

      {/* Button */}
      <a
        href="#contact"
        className="bg-gradient-to-r from-purple-600 to-blue-500 px-5 py-2 rounded-lg hover:opacity-90 transition"
      >
        Hire Me
      </a>

    </nav>
  );
};

export default Navbar;