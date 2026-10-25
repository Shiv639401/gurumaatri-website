
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

interface HomeCTAProps {
  className?: string;
}

const benefits = [
  "Solutions tailored to your goals",
  "Modern design and technology",
  "A clear path from idea to launch",
];

export default function HomeCTA({ className = "" }: HomeCTAProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={`relative isolate overflow-hidden bg-[#080911] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32 ${className}`}
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(124,58,237,0.20),transparent_60%)]" />
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-violet-600/15 blur-[110px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 30%, black 75%, transparent)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: "easeOut",
          }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-12 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          {/* Decorative glow */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-violet-500/15 blur-[90px]"
            animate={
              reduceMotion
                ? undefined
                : { scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_0.7fr] lg:gap-16">
            {/* Main message */}
            <div>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-4 py-2"
              >
                <Sparkles size={15} className="text-violet-300" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-200">
                  Your next chapter starts here
                </span>
              </motion.div>

              <motion.h2
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-6xl"
              >
                Ready to turn your
                <br className="hidden sm:block" />{" "}
                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                  big idea into reality?
                </span>
              </motion.h2>

              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
              >
                Let's create something meaningful together. Whether you need a
                powerful website, a smarter digital solution, or a fresh idea
                brought to life, GuruMaatri Innovations is ready to help you
                take the next step.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <Link
                  to="/contact"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#11111b]"
                >
                  <MessageCircle size={18} />
                  Let's Talk About Your Project
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/estimator"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  Estimate Your Project
                  <ArrowUpRight
                    size={18}
                    className="text-slate-400 transition-colors group-hover:text-white"
                  />
                </Link>
              </motion.div>

              <p className="mt-5 text-xs leading-6 text-slate-500 sm:text-sm">
                Have an idea? Let's explore what's possible.
              </p>
            </div>

            {/* Benefits panel */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl border border-white/10 bg-[#0d0e19]/85 p-6 shadow-xl shadow-black/20 sm:p-8">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      The way forward
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                      Built around you.
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-400/10 text-violet-200">
                    <Zap size={22} />
                  </div>
                </div>

                <div className="space-y-5">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={
                        reduceMotion ? false : { opacity: 0, x: 12 }
                      }
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: 0.25 + index * 0.1,
                      }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/10 text-emerald-300">
                        <Check size={14} strokeWidth={2.5} />
                      </span>

                      <p className="text-sm leading-6 text-slate-300 sm:text-base">
                        {benefit}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="my-7 border-t border-white/[0.08]" />

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-200">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      One idea. Endless possibilities.
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Let's make your next move count.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div
                aria-hidden="true"
                className="absolute -bottom-2 -right-2 -z-10 h-24 w-24 rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-500/20 blur-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
