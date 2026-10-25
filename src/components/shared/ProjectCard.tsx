
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  Layers3,
  Sparkles,
} from "lucide-react";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  technologies?: string[];
  href?: string;
  liveUrl?: string;
  featured?: boolean;
  accent?: "indigo" | "violet" | "blue" | "emerald" | "rose" | "amber";
};

type ProjectCardProps = {
  project: Project;
  index?: number;
  className?: string;
};

const accents = {
  indigo: {
    badge: "bg-indigo-50 text-indigo-700 ring-indigo-100",
    glow: "from-indigo-500/20 via-blue-500/10 to-violet-500/20",
    icon: "bg-indigo-600",
    line: "from-indigo-500 to-violet-500",
    dot: "bg-indigo-500",
  },
  violet: {
    badge: "bg-violet-50 text-violet-700 ring-violet-100",
    glow: "from-violet-500/20 via-fuchsia-500/10 to-indigo-500/20",
    icon: "bg-violet-600",
    line: "from-violet-500 to-fuchsia-500",
    dot: "bg-violet-500",
  },
  blue: {
    badge: "bg-blue-50 text-blue-700 ring-blue-100",
    glow: "from-blue-500/20 via-cyan-500/10 to-indigo-500/20",
    icon: "bg-blue-600",
    line: "from-blue-500 to-cyan-500",
    dot: "bg-blue-500",
  },
  emerald: {
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    glow: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    icon: "bg-emerald-600",
    line: "from-emerald-500 to-teal-500",
    dot: "bg-emerald-500",
  },
  rose: {
    badge: "bg-rose-50 text-rose-700 ring-rose-100",
    glow: "from-rose-500/20 via-pink-500/10 to-violet-500/20",
    icon: "bg-rose-600",
    line: "from-rose-500 to-pink-500",
    dot: "bg-rose-500",
  },
  amber: {
    badge: "bg-amber-50 text-amber-700 ring-amber-100",
    glow: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    icon: "bg-amber-600",
    line: "from-amber-500 to-orange-500",
    dot: "bg-amber-500",
  },
};

function ProjectPreview({
  project,
  accent,
}: {
  project: Project;
  accent: (typeof accents)[keyof typeof accents];
}) {
  return (
    <div className="relative aspect-[1.55/1] overflow-hidden rounded-t-[1.2rem] bg-slate-100">
      {/* Project screenshot */}
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accent.glow}`}
        >
          <div className="absolute inset-0 bg-white/40" />

          {/* Browser window illustration */}
          <div className="absolute inset-x-[9%] top-[12%] overflow-hidden rounded-xl border border-white/90 bg-white/95 shadow-xl shadow-slate-900/10 transition-transform duration-500 group-hover:-translate-y-1">
            <div className="flex h-7 items-center gap-1.5 border-b border-slate-100 px-3">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <div className="ml-3 h-2 w-1/3 rounded-full bg-slate-100" />
            </div>

            <div className="grid min-h-36 grid-cols-[1fr_0.85fr] gap-3 p-4 sm:min-h-40 sm:p-5">
              <div className="flex flex-col justify-center">
                <div className="h-2.5 w-4/5 rounded-full bg-slate-800" />
                <div
                  className={`mt-2 h-2.5 w-3/5 rounded-full ${accent.dot}`}
                />
                <div className="mt-4 h-1.5 w-full rounded-full bg-slate-200" />
                <div className="mt-2 h-1.5 w-4/5 rounded-full bg-slate-200" />
                <div
                  className={`mt-4 h-6 w-16 rounded-md ${accent.icon}`}
                />
              </div>

              <div
                className={`relative flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br ${accent.line}`}
              >
                <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full border border-white/30" />
                <div className="absolute -bottom-5 -left-3 h-16 w-16 rounded-full bg-white/10 blur-sm" />
                <Layers3 className="relative h-12 w-12 text-white/90 drop-shadow-md sm:h-14 sm:w-14" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg border border-white/80 bg-white/90 px-3 py-2 text-[10px] font-bold text-slate-700 shadow-lg backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            Project concept
          </div>
        </div>
      )}

      {/* Preview overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute left-4 top-4">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1.5 text-[10px] font-bold shadow-sm ring-1 ring-inset backdrop-blur-md sm:text-xs ${accent.badge}`}
        >
          {project.category}
        </span>
      </div>

      {project.featured && (
        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-2.5 py-1.5 text-[10px] font-bold text-slate-800 shadow-sm backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          Featured
        </div>
      )}

      <div className="absolute bottom-4 right-4 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-white text-slate-900 opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowUpRight className="h-5 w-5" />
      </div>
    </div>
  );
}

export default function ProjectCard({
  project,
  index = 0,
  className = "",
}: ProjectCardProps) {
  const accent = accents[project.accent ?? "indigo"];
  const detailsHref = project.href ?? "/contact";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.07, 0.28),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group min-w-0 ${className}`}
    >
      <div className="h-full overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/[0.08]">
        <ProjectPreview project={project} accent={accent} />

        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600">
                Selected work
              </p>

              <h3 className="mt-2 text-lg font-extrabold leading-snug tracking-tight text-slate-950 transition-colors group-hover:text-indigo-700 sm:text-xl">
                {project.title}
              </h3>
            </div>

            <span
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 ${accent.icon}`}
            >
              <ArrowDownRight className="h-5 w-5" />
            </span>
          </div>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
            {project.description}
          </p>

          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1.5 text-[10px] font-semibold text-slate-600 sm:text-xs"
                >
                  {technology}
                </span>
              ))}

              {project.technologies.length > 4 && (
                <span className="rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1.5 text-[10px] font-semibold text-slate-500">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          )}

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
            <Link
              to={detailsHref}
              className="inline-flex items-center gap-2 text-xs font-bold text-indigo-700 transition-colors hover:text-indigo-900 sm:text-sm"
            >
              View Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title} live website`}
                className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-indigo-700"
              >
                Live Preview
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <span className="text-[10px] font-medium text-slate-400">
                Design & development
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
