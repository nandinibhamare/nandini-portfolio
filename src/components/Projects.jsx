import { ExternalLink, FolderGit2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const projects = portfolioData.projects || [];

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-violet-300">
            Selected Work
          </p>

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-slate-100 sm:text-5xl">
                Projects
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                A selection of academic, internship, machine learning, and
                development projects I have worked on.
              </p>
            </div>

            <span className="text-sm font-medium text-slate-600">
              {String(projects.length).padStart(2, "0")} Projects
            </span>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-5">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:border-violet-400/30 hover:bg-slate-900/80 sm:p-8"
            >
              {/* Hover Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl transition duration-500 group-hover:bg-violet-500/10" />

              <div className="relative grid gap-7 lg:grid-cols-[90px_1fr_auto] lg:items-start">
                {/* Project Number */}
                <div>
                  <span className="text-sm font-bold tracking-widest text-violet-300">
                    {project.number}
                  </span>
                </div>

                {/* Project Details */}
                <div>
                  {/* Type */}
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    {project.type}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-100 transition group-hover:text-violet-200 sm:text-3xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {(project.tags || []).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Status */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                    <span className="text-xs font-medium text-slate-500">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Link */}
                <div className="lg:pt-1">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition duration-300 hover:border-violet-400/40 hover:text-violet-300"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-xl border border-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-600">
                      In Development
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Icon */}
              <div className="absolute bottom-6 right-6 hidden text-slate-800 transition duration-300 group-hover:text-violet-500/20 sm:block">
                <FolderGit2 size={70} strokeWidth={1} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}