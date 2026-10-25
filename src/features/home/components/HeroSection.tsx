
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
 
  MonitorSmartphone,
  Palette,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Fast, scalable digital products",
    className: "left-0 top-10 sm:-left-8 sm:top-16",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Experiences people remember",
    className: "right-0 top-0 sm:-right-5 sm:top-2",
  },
  {
    icon: Zap,
    title: "AI & Automation",
    description: "Smarter ways to grow",
    className: "bottom-0 left-8 sm:left-0",
  },
];

const stats = [
  { value: "01", label: "Ideas to reality" },
  { value: "02", label: "Design meets technology" },
  { value: "03", label: "Built for growth" },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section className="relative isolate overflow-hidden bg-[#080911] text-white">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(109,40,217,0.20),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_60%,rgba(6,182,212,0.10),transparent_40%)]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
      </div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[110px]"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 35, 0], y: [0, 25, 0], scale: [1, 1.12, 1] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-40 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
        animate={
          reduceMotion ? undefined : { x: [0, -25, 0], y: [0, 35, 0] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-14 px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-12 lg:pb-24 lg:pt-28">
        {/* Left: Hero copy */}
        <div className="relative z-10 max-w-3xl">
          <motion.div
            {...reveal(0.05)}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-medium tracking-wide text-slate-300 sm:text-sm">
              Your next big idea starts here
            </span>

            <Sparkles size={14} className="text-violet-300" />
          </motion.div>

          <motion.h1
            {...reveal(0.15)}
            className="text-[clamp(2.8rem,7.1vw,5.8rem)] font-semibold leading-[1.04] tracking-[-0.065em]"
          >
            We build
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                digital
              </span>
              <motion.span
                aria-hidden="true"
                className="absolute -bottom-1 left-1 h-[3px] rounded-full bg-gradient-to-r from-violet-400 to-cyan-300"
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  delay: reduceMotion ? 0 : 0.9,
                }}
              />
            </span>{" "}
            <br className="hidden sm:block" />
            <span className="text-slate-200">that moves</span>
            <br />
            <span className="text-slate-200">you forward.</span>
          </motion.h1>

          <motion.p
            {...reveal(0.28)}
            className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9"
          >
            At GuruMaatri Innovations, we turn ambitious ideas into
            meaningful digital experiences through thoughtful design,
            powerful technology, and solutions built for your next stage
            of growth.
          </motion.p>

          {/* Primary actions */}
          <motion.div
            {...reveal(0.38)}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Link
              to="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080911]"
            >
              Let's Build Something
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/portfolio"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-6 py-4 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Explore Our Work
              <ArrowUpRight
                size={18}
                className="text-slate-400 transition-colors group-hover:text-white"
              />
            </Link>
          </motion.div>

          {/* Trust points */}
          <motion.div
            {...reveal(0.48)}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.09] pt-6"
          >
            {[
              "Thoughtful design",
              "Modern technology",
              "Growth-focused solutions",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs text-slate-400 sm:text-sm"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                  <ArrowRight size={10} />
                </span>
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Animated technology composition */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: reduceMotion ? 0 : 0.2,
          }}
          className="relative mx-auto w-full max-w-[540px] lg:ml-auto"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[510px]">
            {/* Orbit rings */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-[7%] rounded-full border border-violet-300/15"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              aria-hidden="true"
              className="absolute inset-[16%] rounded-full border border-dashed border-cyan-300/15"
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />

            <div
              aria-hidden="true"
              className="absolute inset-[23%] rounded-full bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-cyan-500/20 blur-3xl"
            />

            {/* Hero artwork: premium 3D visual */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -12, 0],
                      rotateY: [0, 2, 0, -2, 0],
                      rotateZ: [0, 0.6, 0, -0.6, 0],
                    }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 z-10 w-[82%] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
              style={{ perspective: 1000 }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-[12%] rounded-full bg-violet-500/25 blur-[55px]"
              />
              <img
                src="/images/hero/hero-visual.png"
                alt="Abstract three-dimensional technology artwork for GuruMaatri Innovations"
                width={900}
                height={900}
                fetchPriority="high"
                decoding="async"
                className="relative z-10 h-auto w-full select-none object-contain drop-shadow-[0_25px_55px_rgba(99,102,241,0.32)] [transform:translateZ(35px)]"
              />
            </motion.div>

            {/* Floating service cards */}
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  className={`absolute z-20 w-[190px] max-w-[53%] rounded-2xl border border-white/10 bg-[#111321]/90 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:w-[220px] sm:p-4 ${item.className}`}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: [0, index % 2 === 0 ? -9 : 9, 0],
                        }
                  }
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-300/15 bg-gradient-to-br from-violet-500/20 to-cyan-500/10 text-violet-200">
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <p className="truncate text-xs font-semibold text-white sm:text-sm">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[10px] leading-5 text-slate-400 sm:text-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Small decorative nodes */}
            <motion.div
              aria-hidden="true"
              className="absolute right-[19%] top-[31%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)]"
              animate={reduceMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />

            <motion.div
              aria-hidden="true"
              className="absolute bottom-[24%] left-[20%] h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_18px_rgba(240,171,252,0.8)]"
              animate={reduceMotion ? undefined : { scale: [1, 1.5, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="absolute right-[6%] top-[44%] hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] text-slate-400 backdrop-blur-lg sm:flex">
              <MonitorSmartphone size={13} className="text-cyan-300" />
              Responsive by design
            </div>

            <div className="absolute bottom-[17%] right-[10%] hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] text-slate-400 backdrop-blur-lg sm:flex">
              <Sparkles size={13} className="text-violet-300" />
              Built for what’s next
            </div>
          </div>

          <motion.div
            {...reveal(0.6)}
            className="mx-auto mt-3 grid max-w-lg grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-2 py-5 sm:px-4"
          >
            {stats.map((stat) => (
              <div key={stat.value} className="px-2 text-center sm:px-3">
                <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-white lg:flex"
        animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Discover more
        </span>
        <ArrowDown size={15} />
      </motion.a>
    </section>
  );
}
