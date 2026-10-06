import { Briefcase } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Professional experience
          </h2>
        </div>

        <div className="space-y-6">
          {portfolioData.experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="flex gap-5">
                <div className="hidden rounded-xl bg-sky-400/10 p-3 text-sky-400 sm:block">
                  <Briefcase size={22} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-white">
                      {item.role}
                    </h3>

                    <span className="text-sm text-sky-400">
                      {item.duration}
                    </span>
                  </div>

                  <p className="mt-2 font-medium text-slate-300">
                    {item.company}
                  </p>

                  <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}