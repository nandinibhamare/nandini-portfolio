import { Code2, Database, Server, Wrench } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const icons = {
  Frontend: Code2,
  Backend: Server,
  Database,
  Tools: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Technologies I work with
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {portfolioData.skills.map((skillGroup) => {
            const Icon = icons[skillGroup.category] || Code2;

            return (
              <div
                key={skillGroup.category}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-sky-400/10 p-3 text-sky-400">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-semibold text-white">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}