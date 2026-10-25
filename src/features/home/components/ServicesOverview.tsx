
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Code2,
  Layers3,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  accent: string;
  glow: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and scalable web applications built to deliver seamless user experiences and support your business goals.",
    icon: Code2,
    tags: ["Business Websites", "Web Applications", "Custom Solutions"],
    accent: "from-violet-400 to-indigo-400",
    glow: "bg-violet-500/15",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Thoughtful, intuitive interfaces that bring your brand to life and make every interaction feel simple, purposeful, and memorable.",
    icon: Palette,
    tags: ["User Research", "Interface Design", "Prototyping"],
    accent: "from-fuchsia-400 to-pink-400",
    glow: "bg-fuchsia-500/15",
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Explore intelligent digital solutions that streamline repetitive tasks, improve workflows, and help your team work more efficiently.",
    icon: Bot,
    tags: ["AI Integration", "Workflow Automation", "Smart Tools"],
    accent: "from-cyan-300 to-blue-400",
    glow: "bg-cyan-500/15",
  },
  {
    number: "04",
    title: "Mobile-Responsive Solutions",
    description:
      "Digital experiences designed to adapt beautifully across mobile phones, tablets, laptops, and larger screens.",
    icon: Smartphone,
    tags: ["Responsive Layouts", "Mobile UX", "Cross-Device Design"],
    accent: "from-emerald-300 to-teal-400",
    glow: "bg-emerald-500/15",
  },
  {
    number: "05",
    title: "SEO & Performance",
    description:
      "Build a stronger technical foundation with performance-minded development, search-friendly structure, and a better user experience.",
    icon: Search,
    tags: ["Technical SEO", "Speed Optimization", "Site Structure"],
    accent: "from-amber-300 to-orange-400",
    glow: "bg-amber-500/15",
  },
  {
    number: "06",
    title: "Maintenance & Support",
    description:
      "Keep your digital presence dependable with ongoing improvements, troubleshooting, updates, and practical technical support.",
    icon: ShieldCheck,
    tags: ["Updates", "Bug Fixes", "Ongoing Improvements"],
    accent: "from-rose-300 to-red-400",
    glow: "bg-rose-500/15",
  },
];

interface ServiceOverviewProps {
  className?: string;
}

export default function ServiceOverview({
  className = "",
}: ServiceOverviewProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className={`relative isolate overflow-hidden bg-[#080911] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32 ${className}`}
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-96 w-[80%] -translate-x-1/2 rounded-full bg-violet-600/[0.09] blur-[130px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-6 md:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/[0.08] px-4 py-2">
              <Sparkles size={15} className="text-violet-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">
                What We Do
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-6xl">
              Digital solutions
              <br className="hidden sm:block" /> for a{" "}
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                bigger vision.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              From your first digital idea to the next stage of growth, we
              combine creative thinking and modern technology to build
              solutions around your business needs.
            </p>
          </div>

          <Link
            to="/services"
            className="group inline-flex min-h-12 shrink-0 items-center gap-2 self-start rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-white/25 hover:bg-white/[0.07] lg:self-auto"
          >
            Explore All Services
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

        {/* Service cards */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : (index % 3) * 0.1,
                  ease: "easeOut",
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045] sm:p-7"
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full ${service.glow} opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Card header */}
                <div className="relative mb-7 flex items-center justify-between">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 rounded-2xl ${service.glow} blur-xl transition-transform duration-300 group-hover:scale-150`}
                    />

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#11121e]">
                      <Icon
                        size={25}
                        strokeWidth={1.7}
                        className={`bg-gradient-to-br ${service.accent} text-transparent`}
                        style={{
                          color: "currentColor",
                        }}
                      />
                    </div>
                  </div>

                  <span className="text-3xl font-light tracking-tighter text-white/[0.15] transition-colors group-hover:text-white/35">
                    {service.number}
                  </span>
                </div>

                {/* Card content */}
                <h3 className="relative text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {service.title}
                </h3>

                <p className="relative mt-4 flex-1 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-[11px] font-medium text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card link */}
                <div className="relative mt-7 border-t border-white/[0.08] pt-5">
                  <Link
                    to="/services"
                    aria-label={`Explore ${service.title} services`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
                  >
                    Explore Service
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>

                {/* Bottom accent */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-6 bottom-0 h-px bg-gradient-to-r ${service.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-70`}
                />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-5 rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-400/[0.07] text-cyan-200">
              <Zap size={22} />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Looking for something more specific?
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                Tell us about your idea and let's find the right digital
                solution for your goals.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            Discuss Your Project
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-slate-600">
          <Layers3 size={14} />
          <span>Thoughtfully designed. Purposefully built.</span>
        </div>
      </div>
    </section>
  );
}
