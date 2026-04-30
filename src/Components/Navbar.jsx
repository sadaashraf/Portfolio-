import { useState, useEffect } from "react";

const links = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const current = links.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 100 && bottom >= 100;
      });
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080C14]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="#home" className="text-xl font-bold gradient-text tracking-wider">
          Portfolio
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-1">
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${
                  active === id
                    ? "text-white bg-purple-500/10 border border-purple-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {id}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:block px-5 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg hover:opacity-90 transition"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1220] border-t border-white/5 px-6 py-4 flex flex-col gap-2">
          {links.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2 rounded-lg text-sm capitalize transition ${
                active === id ? "text-white bg-purple-500/10" : "text-gray-400"
              }`}
            >
              {id}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
