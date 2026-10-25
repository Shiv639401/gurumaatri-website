
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Code2,
  Lightbulb,
  Rocket,
  Search,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Search;
  color: string;
  glow: string;
  deliverables: string[];
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand the vision",
    description:
      "We start by understanding your business, audience, challenges, and goals to establish a clear direction for your project.",
    icon: Search,
    color: "from-violet-400 to-purple-500",
    glow: "bg-violet-500/15",
    deliverables: ["Project discovery", "Goal alignment", "Clear direction"],
  },
  {
    number: "02",
    title: "Strategize & Design",
    subtitle: "Plan with purpose",
    description:
      "We shape the strategy, map the user journey, and develop a thoughtful design that aligns with your brand and business objectives.",
    icon: Lightbulb,
    color: "from-fuchsia-400 to-pink-500",
    glow: "bg-fuchsia-500/15",
    deliverables: ["Project roadmap", "UI/UX direction", "Design concepts"],
  },
  {
    number: "03",
    title: "Build & Refine",
    subtitle: "Bring ideas to life",
    description:
      "We turn approved concepts into responsive digital experiences, refining the details with a focus on usability, quality, and performance.",
    icon: Code2,
    color: "from-cyan-400 to-blue-500",
    glow: "bg-cyan-500/15",
    deliverables: ["Development", "Quality checks", "Responsive experience"],
  },
  {
    number: "04",
    title: "Launch & Grow",
    subtitle: "Make the next move",
    description:
      "After final checks, we help prepare your solution for launch so you can move forward with a stronger digital foundation.",
    icon: Rocket,
    color: "from-emerald-400 to-teal-500",
    glow: "bg-emerald-500/15",
    deliverables: ["Launch preparation", "Final review", "Growth-ready solution"],
  },
];

export default function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      className="relative isolate overflow-hidden bg-[#080911] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-80 w-[80%] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.08] blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/[0.08] px-4 py-2">
            <Sparkles size={15} className="text-violet-300" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">
              How We Work
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-6xl">
            From first idea
            <br className="hidden sm:block" /> to{" "}
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              something extraordinary.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Great digital experiences don't happen by accident. Our structured,
            collaborative process brings clarity to every stage, from the first
            conversation to the final launch.
          </p>
        </motion.div>

        {/* Process timeline */}
        <div className="relative">
          {/* Desktop connector */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-gradient-to-r from-violet-400/10 via-fuchsia-400/40 to-emerald-400/10 lg:block"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 28 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : index * 0.12,
                    ease: "easeOut",
                  }}
                  className="group relative flex flex-col rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.045] sm:p-7"
                >
                  {/* Step icon */}
                  <div className="relative z-10 mb-7 flex items-center justify-between">
                    <div
                      className={`relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${step.color} bg-opacity-10 shadow-lg transition-transform duration-300 group-hover:-translate-y-1`}
                    >
                      <div
                        className={`absolute inset-0 rounded-2xl ${step.glow} blur-xl`}
                      />
                      <div className="absolute inset-0 rounded-2xl bg-[#0d0e19]/70" />
                      <Icon
                        size={25}
                        strokeWidth={1.7}
                        className={`relative bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}
                        style={{ color: "inherit" }}
                      />
                    </div>

                    <span className="text-4xl font-light tracking-tighter text-white/[0.13] transition-colors duration-300 group-hover:text-white/30">
                      {step.number}
                    </span>
                  </div>

                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {step.subtitle}
                  </p>

                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>

                  <div className="my-6 border-t border-white/[0.08]" />

                  <ul className="space-y-3">
                    {step.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-2.5 text-xs leading-5 text-slate-300 sm:text-sm"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-slate-300">
                          <Check size={10} strokeWidth={2.5} />
                        </span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>

                  {/* Hover accent */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r ${step.color} opacity-0 transition-opacity duration-300 group-hover:opacity-70`}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 flex flex-col gap-6 rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:p-10"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-300/15 bg-violet-400/[0.08] text-violet-200">
              <Target size={23} />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Every great project starts with a conversation.
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                Tell us where you want to go. We'll help you explore the next
                steps and find the right direction for your project.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080911]"
          >
            Start Your Project
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Optional next-section hint */}
        <div className="mt-8 hidden items-center justify-center gap-2 text-xs text-slate-600 md:flex">
          <span>Thoughtful process</span>
          <ArrowDownRight size={14} />
          <span>Meaningful results</span>
        </div>
      </div>
    </section>
  );
}
