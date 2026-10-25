
import { useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Layers3,
  Sparkles,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { PortfolioProject } from "./PortfolioGrid";

export interface ProjectPreviewModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectPreviewModal({
  project,
  isOpen,
  onClose,
}: ProjectPreviewModalProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          key="project-preview-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-3 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-preview-title"
            aria-describedby="project-preview-description"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 24, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 12, scale: 0.98 }
            }
            transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
            className="relative my-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0e121b] shadow-2xl shadow-black/50 sm:rounded-3xl"
          >
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                <Sparkles size={15} />
                Project showcase
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project preview"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <X size={19} />
              </button>
            </div>

            {/* Project visual */}
            <div className="relative mx-4 mt-4 overflow-hidden rounded-xl border border-white/10 bg-[#171d29] sm:mx-7 sm:mt-6 sm:rounded-2xl">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="max-h-[340px] min-h-[190px] w-full object-cover sm:min-h-[260px]"
                />
              ) : (
                <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500/20 via-violet-500/15 to-[#10141d] px-6 py-12 sm:min-h-[300px]">
                  <div className="absolute h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

                  <div className="relative max-w-xl text-center">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-cyan-300">
                      <Layers3 size={27} />
                    </div>

                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/80">
                      {project.category}
                    </p>

                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                      {project.title}
                    </h2>

                    <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/60 sm:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              )}

              {project.featured && (
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-black/50 px-3 py-2 text-xs font-medium text-cyan-200 backdrop-blur-md">
                  <Sparkles size={13} />
                  Featured project
                </div>
              )}
            </div>

            {/* Project information */}
            <div className="grid gap-8 p-5 sm:p-7 md:grid-cols-[1fr_250px] md:gap-10">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-3 py-1.5 text-xs font-medium text-cyan-200">
                  <Globe2 size={13} />
                  {project.category}
                </div>

                <h2
                  id="project-preview-title"
                  className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
                >
                  {project.title}
                </h2>

                <p
                  id="project-preview-description"
                  className="mt-4 text-sm leading-7 text-white/65 sm:text-base"
                >
                  {project.description}
                </p>

                {project.technologies &&
                  project.technologies.length > 0 && (
                    <div className="mt-7">
                      <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                        <Layers3 size={16} className="text-cyan-300" />
                        Technologies & tools
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/75"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
              </div>

              {/* Action panel */}
              <aside className="h-fit rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5">
                <h3 className="text-sm font-semibold text-white">
                  Interested in a project like this?
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  Let&apos;s discuss your goals and create a solution tailored
                  to your business.
                </p>

                <div className="my-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-white/65">
                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-cyan-300"
                    />
                    Tailored project planning
                  </div>

                  <div className="flex items-center gap-2 text-xs text-white/65">
                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-cyan-300"
                    />
                    Modern technology solutions
                  </div>

                  <div className="flex items-center gap-2 text-xs text-white/65">
                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-cyan-300"
                    />
                    Responsive user experiences
                  </div>
                </div>

                <Link
                  to="/contact"
                  onClick={onClose}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-4 py-3 text-sm font-semibold text-[#071018] transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Start a Project
                  <ArrowUpRight size={17} />
                </Link>

                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    View Live Website
                    <ExternalLink size={15} />
                  </a>
                )}
              </aside>
            </div>

            {/* Bottom footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] px-5 py-4 sm:px-7">
              <p className="text-xs text-white/40">
                GuruMaatri Innovations · Digital experiences built with purpose
              </p>

              <button
                type="button"
                onClick={onClose}
                className="text-sm font-medium text-white/60 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Close preview
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
