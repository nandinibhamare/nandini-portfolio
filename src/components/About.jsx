import { CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            A learner focused on building practical solutions.
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            {about.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {about.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-sky-400"
              />

              <p className="text-sm leading-6 text-slate-300">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}