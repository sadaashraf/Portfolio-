import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-10 border-t border-slate-800 bg-black">

      <p className="text-gray-400 mb-4">
        © 2026 Muhammad Ashraf. All rights reserved.
      </p>

      <div className="flex justify-center gap-6 text-gray-400">

        <a
          href="https://www.linkedin.com/in/muhammad-ashraf-198863324/"
          className="hover:text-purple-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/sadaashraf"
          className="hover:text-purple-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

      </div>

    </footer>
  );
};

export default Footer;