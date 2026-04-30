import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080C14] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-5">

        <div>
          <p className="text-base font-bold gradient-text">Muhammad Ashraf</p>
          <p className="text-xs text-gray-500 mt-0.5">MERN Stack Developer · Islamabad, Pakistan</p>
        </div>

        <div className="flex gap-2">
          {[
            { icon: <FiGithub size={16} />, href: "https://github.com/sadaashraf", label: "GitHub" },
            { icon: <FiLinkedin size={16} />, href: "https://www.linkedin.com/in/muhammad-ashraf-198863324/", label: "LinkedIn" },
            { icon: <FiMail size={16} />, href: "mailto:nayeemashraf92@gmail.com", label: "Email" },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition"
            >
              {icon}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <p className="text-xs text-gray-500">© {year} Muhammad Ashraf. All rights reserved.</p>
          <a
            href="#home"
            aria-label="Back to top"
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition"
          >
            <FiArrowUp size={15} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
