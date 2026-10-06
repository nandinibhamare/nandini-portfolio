import { ArrowDown, Download, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-72px)] overflow-hidden px-6 py-20 sm:py-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute right-10 top-40 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.35fr_0.65fr]">
        {/* LEFT CONTENT */}
        <div>
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

            <span className="text-sm font-medium text-slate-300">
              Open to learning & opportunities
            </span>
          </div>

          {/* Small Heading */}
          <p className="mb-6 mt-10 text-sm font-bold uppercase tracking-[0.35em] text-violet-300">
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1 className="text-6xl font-black leading-[0.95] tracking-[-0.04em] text-slate-100 sm:text-7xl md:text-8xl lg:text-[88px]">
            Nandini
            <br />
            <span className="text-slate-100">Bhamare</span>
          </h1>

          {/* Role */}
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xl font-semibold sm:text-2xl">
            <span className="text-slate-200">MCA Student</span>

            <span className="text-slate-600">/</span>

            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-blue-400 bg-clip-text text-transparent">
              Aspiring Software Developer
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I enjoy turning ideas into thoughtful digital experiences.
            I&apos;m building my skills in frontend development and exploring
            how technology can solve real-world problems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-6 py-3.5 text-sm font-bold text-slate-950 transition duration-300 hover:bg-violet-200"
            >
              View My Work
              <ArrowDown size={17} />
            </a>

            <a
              href={personal.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3.5 text-sm font-semibold text-slate-200 transition duration-300 hover:border-violet-400/50 hover:text-violet-300"
            >
              <Download size={17} />
              Download Resume
            </a>

            
          </div>

          {/* Social Links */}
          <div className="mt-7 flex items-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-500 transition hover:text-violet-300"
            >
              GitHub ↗
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-500 transition hover:text-violet-300"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

       
        {/* RIGHT - PROFILE PHOTO */}
  <div className="flex justify-center lg:justify-end">
    <div className="relative">
      {/* Soft Glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-violet-500/10 blur-3xl" />

      {/* Profile Photo */}
      <div className="relative h-[360px] w-[300px] overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900 shadow-2xl sm:h-[430px] sm:w-[350px]">
       <img
        src={personal.photo}
        alt={`${personal.name} profile`}
        className="h-full w-full object-cover object-center"
      />
      </div>
      </div>
      </div>
      </div>
    </section>
  );
}