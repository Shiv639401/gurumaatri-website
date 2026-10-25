
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  FolderOpen,
  Sparkles,
} from "lucide-react";

export interface PortfolioProject {
  id: string | number;
  title: string;
  category: string;
  description: string;
  image?: string;
  technologies?: string[];
  projectUrl?: string;
  featured?: boolean;
}

export interface PortfolioGridProps {
  projects: PortfolioProject[];
  activeCategory?: string;
  searchQuery?: string;
  className?: string;
  onProjectClick?: (project: PortfolioProject) => void;
}

const categoryStyles: Record<string, string> = {
  "Web Development": "border-blue-400/20 bg-blue-400/10 text-blue-300",
  "UI/UX Design": "border-violet-400/20 bg-violet-400/10 text-violet-300",
  "E-Commerce": "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  Branding: "border-amber-400/20 bg-amber-400/10 text-amber-300",
  "AI & Automation": "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-300",
};

const fallbackGradients = [
  "from-blue-500/25 via-cyan-500/10 to-transparent",
  "from-violet-500/25 via-fuchsia-500/10 to-transparent",
  "from-emerald-500/25 via-teal-500/10 to-transparent",
  "from-orange-500/25 via-rose-500/10 to-transparent",
];

function matchesSearch(project: PortfolioProject, query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) return true;

  const searchableContent = [
    project.title,
    project.category,
    project.description,
    ...(project.technologies ?? []),
  ]
    .join(" ")
    .toLowerCase();

  return searchableContent.includes(normalizedQuery);
}

export default function PortfolioGrid({
  projects,
  activeCategory = "All",
  searchQuery = "",
  className = "",
  onProjectClick,
}: PortfolioGridProps) {
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = projects.filter((project) => {
    const categoryMatches =
      activeCategory === "All" || project.category === activeCategory;

    return categoryMatches && matchesSearch(project, searchQuery);
  });

  return (
    <section
      className={`w-full ${className}`}
      aria-label="Portfolio projects"
    >
      {/* Results header */}
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            <Sparkles size={14} />
            Our selected work
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Projects that make an impact
          </h2>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-white/65">
          <FolderOpen size={15} className="text-cyan-300" />
          <span>
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </span>
        </div>
      </div>

      {/* Project cards */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const gradient =
              fallbackGradients[index % fallbackGradients.length];

            const categoryClass =
              categoryStyles[project.category] ??
              "border-white/10 bg-white/5 text-white/70";

            return (
              <motion.article
                key={project.id}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 20 }
                }
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : (index % 3) * 0.08,
                  ease: "easeOut",
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#10141d] transition-colors duration-300 hover:border-cyan-300/30 hover:bg-[#131925]"
              >
                {/* Image / visual preview */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-[#171d29]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),transparent_55%)]" />

                      <div className="absolute inset-5 flex flex-col rounded-xl border border-white/10 bg-[#0b0f17]/70 p-4 backdrop-blur-sm sm:inset-6 sm:p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-rose-400/80" />
                            <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                          </div>

                          <Code2
                            size={17}
                            className="text-white/40"
                          />
                        </div>

                        <div className="my-auto">
                          <div className="mb-3 h-1.5 w-12 rounded-full bg-cyan-300/70" />

                          <div className="max-w-[90%] text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
                            {project.title}
                          </div>

                          <div className="mt-3 line-clamp-2 max-w-[95%] text-xs leading-5 text-white/55 sm:text-sm">
                            {project.description}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <span className="h-1.5 w-12 rounded-full bg-white/15" />
                          <span className="h-1.5 w-8 rounded-full bg-white/10" />
                          <span className="h-1.5 w-10 rounded-full bg-white/10" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080b11]/70 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-40" />

                  <div className="absolute left-4 top-4">
                    <span
                      className={`inline-flex rounded-full border px-3 py-1.5 text-[11px] font-medium backdrop-blur-md ${categoryClass}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-amber-300/25 bg-black/45 px-3 py-1.5 text-[11px] font-medium text-amber-200 backdrop-blur-md">
                      <Sparkles size={12} />
                      Featured
                    </div>
                  )}

                  <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowDownRight size={19} />
                  </div>
                </div>

                {/* Project details */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-cyan-200 sm:text-xl">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                    />
                  </div>

                  <p className="mb-5 line-clamp-3 text-sm leading-6 text-white/60">
                    {project.description}
                  </p>

                  {/* Technology tags */}
                  {project.technologies &&
                    project.technologies.length > 0 && (
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((technology) => (
                          <span
                            key={technology}
                            className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[11px] text-white/60"
                          >
                            {technology}
                          </span>
                        ))}

                        {project.technologies.length > 4 && (
                          <span className="px-1 py-1 text-[11px] text-white/40">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    )}

                  {/* Footer action */}
                  <div className="mt-auto border-t border-white/[0.08] pt-4">
                    {onProjectClick ? (
                      <button
                        type="button"
                        onClick={() => onProjectClick(project)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                      >
                        Explore project
                        <ArrowUpRight size={16} />
                      </button>
                    ) : project.projectUrl ? (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                      >
                        View live project
                        <ExternalLink size={15} />
                      </a>
                    ) : (
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                      >
                        Build something similar
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      ) : (
        /* Empty state */
        <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.025] px-6 py-16 text-center sm:py-20">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/50">
            <FolderOpen size={25} />
          </div>

          <h3 className="text-lg font-semibold text-white">
            No projects found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/55">
            We couldn&apos;t find any projects matching your search. Try a
            different keyword or select another category.
          </p>
        </div>
      )}
    </section>
  );
}
