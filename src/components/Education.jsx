import { GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Education
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Academic background
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {portfolioData.education.map((item) => (
            <article
              key={item.degree}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-sky-400/10 p-3 text-sky-400">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <h3 className="font-semibold leading-6 text-white">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-sm text-sky-400">
                    {item.institution}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    {item.duration}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
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