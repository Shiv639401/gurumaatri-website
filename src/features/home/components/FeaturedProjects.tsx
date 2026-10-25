

import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  ExternalLink,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

export interface FeaturedProjectProps {
  title?: string;
  category?: string;
  description?: string;
  image?: string;
  technologies?: string[];
  projectUrl?: string;
  className?: string;
}

export default function FeaturedProject({
  title = "Digital Experiences That Drive Growth",
  category = "Featured Project",
  description = "A modern digital experience designed to strengthen brand identity, improve user engagement, and turn visitors into customers.",
  image,
  technologies = ["React", "TypeScript", "Tailwind CSS", "UI/UX Design"],
  projectUrl,
  className = "",
}: FeaturedProjectProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#080b12] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24 ${className}`}
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-violet-600/15 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end"
        >
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
              <Sparkles size={14} />
              Our Work
            </span>

            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ideas transformed into{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                digital impact.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-400 sm:text-base">
            Explore how thoughtful design and technology come together to
            create meaningful digital experiences.
          </p>
        </motion.div>

        {/* Featured project card */}
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20"
        >
          <div className="grid lg:grid-cols-2">
            {/* Project visual */}
            <div className="relative min-h-[280px] overflow-hidden sm:min-h-[380px] lg:min-h-[500px]">
              {image ? (
                <img
                  src={image}
                  alt={`${title} project preview`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-950 via-[#15152c] to-cyan-950 p-6 sm:p-10">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
                      backgroundSize: "36px 36px",
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute h-56 w-56 rounded-full bg-violet-500/30 blur-[70px] sm:h-72 sm:w-72"
                  />

                  <div className="relative w-full max-w-md -rotate-2 rounded-2xl border border-white/15 bg-[#101421]/90 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-500 group-hover:rotate-0 sm:p-6">
                    <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-rose-400" />
                        <span className="h-3 w-3 rounded-full bg-amber-300" />
                        <span className="h-3 w-3 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-xs text-slate-500">
                        Project Preview
                      </span>
                    </div>

                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400">
                        <Layers3 size={22} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{title}</p>
                        <p className="mt-1 text-xs text-slate-400">
                          Designed for the future
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="h-20 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] sm:h-24"
                        />
                      ))}
                    </div>

                    <div className="space-y-3">
                      <div className="h-2 w-full rounded-full bg-white/10" />
                      <div className="h-2 w-3/4 rounded-full bg-white/10" />
                      <div className="mt-4 h-10 w-32 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500" />
                    </div>
                  </div>

                  <div className="absolute bottom-5 right-5 rounded-xl border border-white/15 bg-black/30 px-4 py-3 backdrop-blur-md sm:bottom-8 sm:right-8">
                    <p className="text-xs text-slate-400">Built with</p>
                    <p className="mt-1 text-sm font-semibold">Innovation</p>
                  </div>
                </div>
              )}

              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {category}
                </span>
              </div>
            </div>

            {/* Project information */}
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12 xl:p-14">
              <span className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Strategy · Design · Development
              </span>

              <h3 className="max-w-xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                {title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                {description}
              </p>

              {/* Technology tags */}
              <div className="mt-7">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Technologies & Services
                </p>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-violet-400/40 hover:text-violet-300 sm:text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {projectUrl ? (
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-violet-100"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-violet-100"
                  >
                    Start a Similar Project
                    <ArrowRight size={17} />
                  </Link>
                )}

                <Link
                  to="/portfolio"
                  className="group/link inline-flex min-h-12 items-center gap-2 px-2 py-3 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  Explore Portfolio
                  <ArrowDownRight
                    size={17}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
