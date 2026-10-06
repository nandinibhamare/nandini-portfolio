import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#home"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight"
        >
         <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent transition duration-300">
          Nandini
        </span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-sky-400"
            >
              {item.label}
            </a>
          ))}

          <a
            href={portfolioData.personal.resume}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-sky-400/40 px-4 py-2 text-sm font-medium text-sky-300 transition hover:bg-sky-400 hover:text-slate-950"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 p-2 text-slate-200 lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-sm text-slate-300 hover:text-sky-400"
              >
                {item.label}
              </a>
            ))}

            <a
              href={portfolioData.personal.resume}
              target="_blank"
              rel="noreferrer"
              className="flex w-fit items-center gap-2 rounded-lg bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}