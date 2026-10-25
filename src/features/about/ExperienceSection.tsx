
import { motion } from "motion/react";
import {
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Users,
} from "lucide-react";

type ExperienceItem = {
  year: string;
  title: string;
  description: string;
};

type ExperienceSectionProps = {
  eyebrow?: string;
  title?: string;
  highlightedTitle?: string;
  description?: string;
  yearsOfExperience?: string;
  projectsCompleted?: string;
  happyClients?: string;
  items?: ExperienceItem[];
};

const defaultItems: ExperienceItem[] = [
  {
    year: "Discovery",
    title: "Understanding Your Vision",
    description:
      "We learn about your business, goals, audience, and challenges before planning the right digital solution.",
  },
  {
    year: "Strategy",
    title: "Planning the Right Approach",
    description:
      "We create a practical roadmap with clear priorities, thoughtful design, and the right technology.",
  },
  {
    year: "Development",
    title: "Building with Quality",
    description:
      "We turn ideas into responsive, reliable digital experiences with a focus on usability and performance.",
  },
  {
    year: "Delivery",
    title: "Launching and Improving",
    description:
      "We help bring your solution to life and identify opportunities for ongoing improvements.",
  },
];

export default function ExperienceSection({
  eyebrow = "Our Experience",
  title = "Experience That",
  highlightedTitle = "Creates Impact",
  description = "We combine thoughtful strategy, creative design, and modern technology to help businesses move forward.",
  yearsOfExperience = "5+",
  projectsCompleted = "25+",
  happyClients = "20+",
  items = defaultItems,
}: ExperienceSectionProps) {
  const stats = [
    {
      icon: Clock3,
      value: yearsOfExperience,
      label: "Years of Experience",
    },
    {
      icon: BriefcaseBusiness,
      value: projectsCompleted,
      label: "Projects Completed",
    },
    {
      icon: Users,
      value: happyClients,
      label: "Happy Clients",
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-violet-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
            <Award size={15} />
            {eyebrow}
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {title}{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
              {highlightedTitle}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {description}
          </p>
        </motion.div>

        {/* Experience statistics */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-16 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon size={23} />
                </div>

                <div>
                  <p className="text-3xl font-bold tracking-tight text-slate-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Experience / process timeline */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
              How We Work
            </span>

            <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              From your first idea to a solution built for growth.
            </h3>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Every project starts with understanding what matters to you.
              Our structured approach helps keep the work focused, transparent,
              and aligned with your business objectives.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Clear communication throughout the project",
                "User-focused design and development",
                "Quality checks at every important stage",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-indigo-600"
                  />
                  <p className="text-sm leading-6 text-slate-700 sm:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-indigo-500 via-violet-400 to-slate-200" />

            <div className="space-y-5">
              {items.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  className="relative flex gap-4"
                >
                  <div className="relative z-10 mt-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-indigo-600 text-white shadow-md">
                    <span className="text-xs font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-md sm:p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                      {item.year}
                    </span>

                    <h4 className="mt-2 text-lg font-bold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
