
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers3,
  MessageCircle,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";

type CTASectionProps = {
  eyebrow?: string;
  title?: string;
  highlightedTitle?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "light" | "dark";
};

export default function CTASection({
  eyebrow = "LET'S BUILD SOMETHING GREAT",
  title = "Your next big idea",
  highlightedTitle = "starts right here.",
  description = "Whether you need a modern website, a custom web application, or a smarter digital experience, let's turn your vision into something meaningful.",
  primaryLabel = "Start Your Project",
  primaryHref = "/contact",
  secondaryLabel = "Explore Our Services",
  secondaryHref = "/services",
  variant = "light",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      aria-labelledby="guru-cta-heading"
      className={[
        "relative isolate overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24",
        isDark ? "bg-slate-950" : "bg-white",
      ].join(" ")}
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={[
            "absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl sm:h-96 sm:w-96",
            isDark ? "bg-indigo-600/25" : "bg-indigo-200/50",
          ].join(" ")}
        />
        <div
          className={[
            "absolute -bottom-32 -left-20 h-80 w-80 rounded-full blur-3xl",
            isDark ? "bg-violet-600/20" : "bg-violet-200/45",
          ].join(" ")}
        />
        <div
          className={[
            "absolute inset-0 opacity-50",
            isDark
              ? "bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.12),transparent_65%)]"
              : "bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.07),transparent_65%)]",
          ].join(" ")}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className={[
            "relative overflow-hidden rounded-[2rem] border",
            isDark
              ? "border-white/10 bg-white/[0.04] shadow-2xl shadow-indigo-950/30"
              : "border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 shadow-xl shadow-indigo-950/[0.06]",
          ].join(" ")}
        >
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute -right-10 top-0 h-64 w-64 rounded-full border border-indigo-300/25 sm:-right-4 sm:h-80 sm:w-80" />
          <div className="pointer-events-none absolute -right-2 top-8 h-48 w-48 rounded-full border border-violet-300/25 sm:right-10 sm:h-64 sm:w-64" />

          <div className="relative grid items-center gap-10 p-7 sm:p-10 md:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:p-16">
            {/* Left content */}
            <div className="relative z-10">
              <div
                className={[
                  "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[10px] font-extrabold tracking-[0.16em] sm:text-xs",
                  isDark
                    ? "border-indigo-400/25 bg-indigo-400/10 text-indigo-200"
                    : "border-indigo-200 bg-white/80 text-indigo-700 shadow-sm",
                ].join(" ")}
              >
                <Sparkles className="h-4 w-4" />
                {eyebrow}
              </div>

              <h2
                id="guru-cta-heading"
                className={[
                  "mt-6 max-w-2xl text-3xl font-extrabold leading-[1.12] tracking-[-0.055em] sm:text-4xl md:text-5xl lg:text-[3.5rem]",
                  isDark ? "text-white" : "text-slate-950",
                ].join(" ")}
              >
                {title}{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                  {highlightedTitle}
                </span>
              </h2>

              <p
                className={[
                  "mt-5 max-w-xl text-sm leading-7 sm:text-base sm:leading-8",
                  isDark ? "text-slate-300" : "text-slate-600",
                ].join(" ")}
              >
                {description}
              </p>

              {/* Benefits */}
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {[
                  "Thoughtful design",
                  "Responsive development",
                  "Clear communication",
                ].map((benefit) => (
                  <span
                    key={benefit}
                    className={[
                      "inline-flex items-center gap-2 text-xs font-semibold sm:text-sm",
                      isDark ? "text-slate-200" : "text-slate-700",
                    ].join(" ")}
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-500" />
                    {benefit}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to={primaryHref}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-600/25"
                >
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to={secondaryHref}
                  className={[
                    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-bold transition duration-300",
                    isDark
                      ? "border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10"
                      : "border-slate-200 bg-white/80 text-slate-800 hover:border-indigo-200 hover:bg-white hover:text-indigo-700",
                  ].join(" ")}
                >
                  {secondaryLabel}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>

              <p
                className={[
                  "mt-5 text-xs leading-5",
                  isDark ? "text-slate-400" : "text-slate-500",
                ].join(" ")}
              >
                Have questions first? Explore our services or get in touch
                with our team.
              </p>
            </div>

            {/* Right visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              {/* Main visual card */}
              <div
                className={[
                  "relative overflow-hidden rounded-3xl border p-5 shadow-2xl sm:p-7",
                  isDark
                    ? "border-white/10 bg-slate-900/90 shadow-black/20"
                    : "border-white bg-white/90 shadow-indigo-950/10 backdrop-blur-xl",
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p
                      className={[
                        "text-xs font-semibold",
                        isDark ? "text-slate-400" : "text-slate-500",
                      ].join(" ")}
                    >
                      YOUR NEXT PROJECT
                    </p>
                    <h3
                      className={[
                        "mt-1.5 text-lg font-extrabold tracking-tight sm:text-xl",
                        isDark ? "text-white" : "text-slate-900",
                      ].join(" ")}
                    >
                      Built with purpose.
                    </h3>
                  </div>

                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/25">
                    <Layers3 className="h-6 w-6" />
                  </div>
                </div>

                {/* Abstract project preview */}
                <div className="relative mt-6 overflow-hidden rounded-2xl border border-indigo-100/70 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-4 sm:p-5">
                  <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-violet-200/50 blur-2xl" />

                  <div className="relative flex items-center gap-2 border-b border-indigo-100 pb-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <div className="ml-2 h-2.5 w-24 rounded-full bg-indigo-100 sm:w-32" />
                  </div>

                  <div className="relative grid grid-cols-[1fr_0.8fr] gap-3 pt-5">
                    <div className="flex flex-col justify-center">
                      <div className="h-2.5 w-4/5 rounded-full bg-slate-800" />
                      <div className="mt-2 h-2.5 w-3/5 rounded-full bg-indigo-500" />
                      <div className="mt-4 h-2 w-full rounded-full bg-slate-200" />
                      <div className="mt-2 h-2 w-5/6 rounded-full bg-slate-200" />
                      <div className="mt-4 flex items-center gap-2">
                        <div className="h-7 w-20 rounded-lg bg-indigo-600" />
                        <div className="h-7 w-12 rounded-lg border border-indigo-200 bg-white" />
                      </div>
                    </div>

                    <div className="relative flex min-h-36 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-500 p-3">
                      <div className="absolute -right-7 -top-7 h-20 w-20 rounded-full border border-white/20" />
                      <div className="absolute -bottom-8 -left-4 h-20 w-20 rounded-full bg-violet-300/30 blur-xl" />

                      <div className="relative w-full rounded-xl border border-white/30 bg-white/15 p-3 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/20 text-white">
                            <Code2 className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <div className="h-2 w-4/5 rounded-full bg-white/90" />
                            <div className="mt-1.5 h-1.5 w-3/5 rounded-full bg-white/50" />
                          </div>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-1.5">
                          <div className="h-9 rounded-md bg-white/20" />
                          <div className="h-9 rounded-md bg-white/30" />
                          <div className="h-9 rounded-md bg-white/15" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service highlights */}
                <div className="mt-4 grid grid-cols-3 gap-2.5">
                  {[
                    { icon: Code2, label: "Websites" },
                    { icon: Layers3, label: "Web Apps" },
                    { icon: Zap, label: "Smart Ideas" },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className={[
                          "flex min-w-0 flex-col items-center gap-2 rounded-xl border px-2 py-3 text-center",
                          isDark
                            ? "border-white/10 bg-white/[0.04]"
                            : "border-slate-100 bg-white",
                        ].join(" ")}
                      >
                        <Icon className="h-5 w-5 text-indigo-500" />
                        <span
                          className={[
                            "text-[10px] font-bold sm:text-xs",
                            isDark ? "text-slate-200" : "text-slate-700",
                          ].join(" ")}
                        >
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Floating message card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={[
                  "absolute -bottom-5 -left-2 flex max-w-[245px] items-center gap-3 rounded-2xl border p-3.5 shadow-xl sm:-left-5 sm:p-4",
                  isDark
                    ? "border-white/10 bg-slate-900 text-white"
                    : "border-white bg-white text-slate-900 shadow-slate-900/10",
                ].join(" ")}
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-extrabold">Let's collaborate</p>
                  <p
                    className={[
                      "mt-1 text-[10px] leading-4",
                      isDark ? "text-slate-400" : "text-slate-500",
                    ].join(" ")}
                  >
                    Your idea. Our expertise.
                  </p>
                </div>

                <Send className="ml-1 h-4 w-4 shrink-0 text-indigo-500" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
