import { ArrowUp, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Copyright */}
        <div>
          <p className="text-sm font-semibold text-white">
            {personal.name}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Building with curiosity, purpose and technology.
          </p>
        </div>

        {/* Social / Contact Links */}
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-sky-400"
          >
            <Mail size={16} />
            Email
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-400 transition hover:text-sky-400"
          >
            GitHub
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-400 transition hover:text-sky-400"
          >
            LinkedIn
          </a>

          {/* Back to Top */}
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-sky-500/50 hover:text-sky-400"
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
          </button>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mx-auto mt-8 max-w-6xl border-t border-slate-900 pt-6 text-center">
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}