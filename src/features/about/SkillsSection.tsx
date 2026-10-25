
import { motion } from "motion/react";
import {
  Code2,
  Palette,
  Database,
  Wrench,
  Layers3,
  CheckCircle2,
} from "lucide-react";

type Skill = {
  name: string;
  level: number;
};

type SkillCategory = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  skills: Skill[];
  accent: "indigo" | "blue" | "violet" | "emerald";
};

type SkillsSectionProps = {
  eyebrow?: string;
  title?: string;
  highlightedTitle?: string;
  description?: string;
  categories?: SkillCategory[];
};

const defaultCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive and interactive user experiences.",
    icon: Code2,
    accent: "indigo",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    id: "design",
    title: "UI/UX & Design",
    description: "Creating clean, accessible, and user-friendly interfaces.",
    icon: Palette,
    accent: "violet",
    skills: [
      { name: "Responsive Design", level: 90 },
      { name: "Wireframing", level: 75 },
      { name: "Prototyping", level: 70 },
      { name: "Design Systems", level: 75 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Data",
    description: "Working with application logic and structured data.",
    icon: Database,
    accent: "blue",
    skills: [
      { name: "REST APIs", level: 80 },
      { name: "Node.js", level: 70 },
      { name: "Database Design", level: 70 },
      { name: "Authentication", level: 75 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "Using modern tools to build and maintain projects.",
    icon: Wrench,
    accent: "emerald",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Vite", level: 85 },
      { name: "Debugging", level: 80 },
      { name: "Performance Optimization", level: 75 },
    ],
  },
];

const accentStyles = {
  indigo: {
    icon: "bg-indigo-50 text-indigo-600",
    bar: "bg-gradient-to-r from-indigo-600 to-blue-500",
    border: "hover:border-indigo-200",
  },
  blue: {
    icon: "bg-blue-50 text-blue-600",
    bar: "bg-gradient-to-r from-blue-600 to-cyan-500",
    border: "hover:border-blue-200",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600",
    bar: "bg-gradient-to-r from-violet-600 to-fuchsia-500",
    border: "hover:border-violet-200",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    bar: "bg-gradient-to-r from-emerald-600 to-teal-500",
    border: "hover:border-emerald-200",
  },
};

export default function SkillsSection({
  eyebrow = "Our Expertise",
  title = "Skills That Power",
  highlightedTitle = "Great Solutions",
  description = "We bring together modern technologies, thoughtful design, and reliable development practices to build impactful digital experiences.",
  categories = defaultCategories,
}: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-violet-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 shadow-sm">
            <Layers3 size={15} />
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

        {/* Skill category cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-7">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const accent = accentStyles[category.accent];

            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 ${accent.border}`}
              >
                {/* Category heading */}
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${accent.icon}`}
                  >
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Individual skills */}
                <div className="mt-7 space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <span className="text-sm font-medium text-slate-700">
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold tabular-nums text-slate-500">
                          {skill.level}%
                        </span>
                      </div>

                      <div
                        className="h-2 overflow-hidden rounded-full bg-slate-100"
                        role="progressbar"
                        aria-label={skill.name}
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: 0.2 + index * 0.08,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full ${accent.bar}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mt-8 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3"
        >
          <CheckCircle2 size={18} className="text-indigo-600" />
          <p className="text-sm leading-6 text-slate-600">
            Continuous learning, practical problem-solving, and quality-focused
            development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
