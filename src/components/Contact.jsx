import { useState } from "react";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, subject, message } = formData;

    const mailSubject = encodeURIComponent(
      subject || `Portfolio Contact from ${name}`,
    );

    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href =
      `mailto:${personal.email}?subject=${mailSubject}&body=${mailBody}`;

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="border-t border-slate-800 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* ================================
            CONTACT HEADING
        ================================= */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s Connect
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            I&apos;m always open to meaningful conversations, learning
            opportunities, collaborations, and exciting technology projects.
          </p>
        </div>

        {/* ================================
            CONTACT CARDS
        ================================= */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Email */}
          <a
            href={`mailto:${personal.email}`}
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
              <Mail size={22} />
            </div>

            <h3 className="mt-5 font-semibold text-white">
              Email
            </h3>

            <p className="mt-2 break-all text-sm text-slate-400 group-hover:text-sky-400">
              {personal.email}
            </p>

            <ArrowUpRight
              size={18}
              className="mt-5 text-slate-500 transition group-hover:text-sky-400"
            />
          </a>

          {/* GitHub */}
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sm font-bold text-sky-400">
              GH
            </div>

            <h3 className="mt-5 font-semibold text-white">
              GitHub
            </h3>

            <p className="mt-2 text-sm text-slate-400 group-hover:text-sky-400">
              View my repositories
            </p>

            <ArrowUpRight
              size={18}
              className="mt-5 text-slate-500 transition group-hover:text-sky-400"
            />
          </a>

          {/* LinkedIn */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sm font-bold text-sky-400">
              in
            </div>

            <h3 className="mt-5 font-semibold text-white">
              LinkedIn
            </h3>

            <p className="mt-2 text-sm text-slate-400 group-hover:text-sky-400">
              Connect with me
            </p>

            <ArrowUpRight
              size={18}
              className="mt-5 text-slate-500 transition group-hover:text-sky-400"
            />
          </a>
        </div>

        {/* ================================
            LOCATION
        ================================= */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
          <MapPin size={16} />
          <span>{personal.location}</span>
        </div>

        {/* ================================
            CONTACT FORM
        ================================= */}
        <div className="mx-auto mt-16 max-w-3xl">

          {/* Form Heading */}
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              Send a Message
            </p>

            

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Fill out the form below and I&apos;ll get back to you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="sr-only"
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="h-16 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-5 text-base text-white outline-none placeholder:text-slate-500 transition duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="sr-only"
              >
                Your Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="h-16 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-5 text-base text-white outline-none placeholder:text-slate-500 transition duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="sr-only"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="h-16 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-5 text-base text-white outline-none placeholder:text-slate-500 transition duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="sr-only"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                className="min-h-[180px] w-full resize-y rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-4 text-base text-white outline-none placeholder:text-slate-500 transition duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="group flex h-16 w-full items-center justify-center gap-3 rounded-xl bg-violet-500 px-6 text-base font-bold text-white shadow-lg shadow-violet-500/10 transition duration-300 hover:bg-violet-400 hover:shadow-violet-500/20 active:scale-[0.99]"
            >
              Send Message

              <Send
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

            {/* Success Message */}
            {submitted && (
              <p className="text-center text-sm font-medium text-emerald-400">
                Your email app should open now. Thank you for reaching out!
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}