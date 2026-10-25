
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Compass,
  Gauge,
  Globe,
  Layers3,
  Palette,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

type ServiceCategory =
  | "All"
  | "Website Development"
  | "Web Applications"
  | "UI/UX Design"
  | "SEO & Digital Growth";

type BusinessGoal =
  | "online-presence"
  | "build-product"
  | "improve-experience"
  | "grow-visibility";

interface Recommendation {
  id: string;
  number: string;
  title: Exclude<ServiceCategory, "All">;
  category: string;
  description: string;
  outcome: string;
  icon: LucideIcon;
  features: string[];
  tags: string[];
  href: string;
  accent: "indigo" | "violet" | "sky" | "emerald";
  goals: BusinessGoal[];
}

interface RecommendationPanelProps {
  eyebrow?: string;
  title?: string;
  highlightedTitle?: string;
  description?: string;
  showGoalSelector?: boolean;
  limit?: number;
}

const serviceRecommendations: Recommendation[] = [
  {
    id: "website",
    number: "01",
    title: "Website Development",
    category: "DIGITAL PRESENCE",
    description:
      "Build a memorable online presence with a website that communicates your value, earns trust and guides visitors towards action.",
    outcome: "A professional digital home for your brand.",
    icon: Globe,
    features: [
      "Business & corporate websites",
      "Landing pages and lead generation",
      "Responsive mobile-first layouts",
      "Performance and SEO foundations",
    ],
    tags: ["Business websites", "Landing pages", "Responsive design"],
    href: "/contact",
    accent: "indigo",
    goals: ["online-presence", "grow-visibility"],
  },
  {
    id: "applications",
    number: "02",
    title: "Web Applications",
    category: "DIGITAL PRODUCTS",
    description:
      "Turn complex business workflows into accessible web applications with intuitive interfaces and maintainable architecture.",
    outcome: "Digital tools designed around your workflow.",
    icon: Code2,
    features: [
      "Custom business applications",
      "Admin panels and dashboards",
      "REST API integrations",
      "Authentication and role-based access",
    ],
    tags: ["React", "API integration", "Dashboards"],
    href: "/contact",
    accent: "violet",
    goals: ["build-product"],
  },
  {
    id: "design",
    number: "03",
    title: "UI/UX Design",
    category: "EXPERIENCE DESIGN",
    description:
      "Make every interaction feel clear and intentional with user-centred layouts, thoughtful visual systems and consistent components.",
    outcome: "A clearer experience for your customers.",
    icon: Palette,
    features: [
      "Website and application UI",
      "User flows and wireframes",
      "Responsive design systems",
      "Developer-ready design handoff",
    ],
    tags: ["User flows", "Wireframes", "Design systems"],
    href: "/contact",
    accent: "sky",
    goals: ["improve-experience", "build-product"],
  },
  {
    id: "growth",
    number: "04",
    title: "SEO & Digital Growth",
    category: "ORGANIC DISCOVERY",
    description:
      "Create a stronger foundation for organic discovery with technically sound pages, meaningful content structure and measurable improvements.",
    outcome: "A website better prepared for discovery.",
    icon: TrendingUp,
    features: [
      "Technical SEO foundations",
      "On-page optimisation",
      "Metadata and content structure",
      "Analytics and tracking setup",
    ],
    tags: ["Technical SEO", "On-page SEO", "Analytics"],
    href: "/contact",
    accent: "emerald",
    goals: ["grow-visibility", "online-presence"],
  },
];

const goalOptions: {
  id: BusinessGoal;
  label: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    id: "online-presence",
    label: "Build my online presence",
    description: "Create or refresh a business website",
    icon: Globe,
  },
  {
    id: "build-product",
    label: "Build a digital product",
    description: "Develop an app or custom workflow",
    icon: Workflow,
  },
  {
    id: "improve-experience",
    label: "Improve user experience",
    description: "Make my website or product easier to use",
    icon: Target,
  },
  {
    id: "grow-visibility",
    label: "Grow online visibility",
    description: "Improve search foundations and discovery",
    icon: TrendingUp,
  },
];

const categories: {
  label: ServiceCategory;
  icon: LucideIcon;
}[] = [
  { label: "All", icon: Layers3 },
  { label: "Website Development", icon: Globe },
  { label: "Web Applications", icon: Code2 },
  { label: "UI/UX Design", icon: Palette },
  { label: "SEO & Digital Growth", icon: TrendingUp },
];

const accentClasses = {
  indigo: {
    icon: "bg-indigo-50 text-indigo-700 ring-indigo-100",
    label: "bg-indigo-50 text-indigo-700",
    line: "from-indigo-600 to-blue-500",
    button: "bg-indigo-600 hover:bg-indigo-700",
  },
  violet: {
    icon: "bg-violet-50 text-violet-700 ring-violet-100",
    label: "bg-violet-50 text-violet-700",
    line: "from-violet-600 to-purple-500",
    button: "bg-violet-600 hover:bg-violet-700",
  },
  sky: {
    icon: "bg-sky-50 text-sky-700 ring-sky-100",
    label: "bg-sky-50 text-sky-700",
    line: "from-sky-500 to-cyan-500",
    button: "bg-sky-600 hover:bg-sky-700",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    label: "bg-emerald-50 text-emerald-700",
    line: "from-emerald-500 to-teal-500",
    button: "bg-emerald-600 hover:bg-emerald-700",
  },
} satisfies Record<
  Recommendation["accent"],
  { icon: string; label: string; line: string; button: string }
>;

function RecommendationCard({
  service,
  index,
}: {
  service: Recommendation;
  index: number;
}) {
  const Icon = service.icon;
  const styles = accentClasses[service.accent];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/5"
    >
      <div
        className={`h-1 w-full bg-gradient-to-r ${styles.line}`}
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${styles.icon}`}
          >
            <Icon size={23} strokeWidth={1.8} />
          </div>

          <span className="text-xs font-bold tracking-[0.14em] text-slate-300">
            {service.number}
          </span>
        </div>

        <p className="mt-5 text-[10px] font-extrabold tracking-[0.16em] text-indigo-600">
          {service.category}
        </p>

        <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950 transition-colors group-hover:text-indigo-700">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {service.description}
        </p>

        <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
            <Sparkles size={14} className="text-indigo-500" />
            Intended outcome
          </p>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
            {service.outcome}
          </p>
        </div>

        <div className="mt-5">
          <p className="mb-3 text-sm font-bold text-slate-900">
            What we can explore
          </p>

          <ul className="space-y-2.5">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm leading-5 text-slate-600"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check size={11} strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${styles.label}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <Link
            to={service.href}
            className={`group/link inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 ${styles.button}`}
          >
            Discuss this service
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function RecommendationPanel({
  eyebrow = "FIND YOUR NEXT STEP",
  title = "The right digital solution",
  highlightedTitle = "starts with your goal.",
  description = "Tell us what you want to achieve. Explore the services that best align with your business needs and decide where to begin.",
  showGoalSelector = true,
  limit,
}: RecommendationPanelProps) {
  const [selectedGoal, setSelectedGoal] = useState<BusinessGoal | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<ServiceCategory>("All");
  const [search, setSearch] = useState("");

  const filteredServices = useMemo(() => {
    const query = search.trim().toLowerCase();

    const results = serviceRecommendations.filter((service) => {
      const matchesCategory =
        activeCategory === "All" || service.title === activeCategory;

      const matchesGoal =
        selectedGoal === null || service.goals.includes(selectedGoal);

      const searchableContent = [
        service.title,
        service.category,
        service.description,
        service.outcome,
        ...service.features,
        ...service.tags,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        matchesGoal &&
        (!query || searchableContent.includes(query))
      );
    });

    return typeof limit === "number"
      ? results.slice(0, Math.max(0, limit))
      : results;
  }, [activeCategory, selectedGoal, search, limit]);

  const resetFilters = () => {
    setSelectedGoal(null);
    setActiveCategory("All");
    setSearch("");
  };

  return (
    <section
      id="recommendations"
      className="gm-section relative isolate overflow-hidden bg-slate-50"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-36 -z-10 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-36 -z-10 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl"
      />

      <div className="gm-container">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <span className="gm-eyebrow">
            <Sparkles size={15} />
            {eyebrow}
          </span>

          <h2 className="gm-heading-xl mt-5 text-slate-950">
            {title}{" "}
            <span className="gm-gradient-text">{highlightedTitle}</span>
          </h2>

          <p className="gm-lead mx-auto mt-5">{description}</p>

          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Check size={14} className="text-emerald-600" />
              Goal-oriented discovery
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Gauge size={14} className="text-indigo-600" />
              Clear service scope
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap size={14} className="text-violet-600" />
              Practical next steps
            </span>
          </div>
        </motion.div>

        {/* Goal selector */}
        {showGoalSelector && (
          <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-5 flex items-start gap-3">
              <div className="gm-icon-box">
                <Compass size={21} />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-950">
                  What are you trying to achieve?
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Select a goal to narrow down the relevant services.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {goalOptions.map((goal) => {
                const Icon = goal.icon;
                const selected = selectedGoal === goal.id;

                return (
                  <button
                    key={goal.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() =>
                      setSelectedGoal(selected ? null : goal.id)
                    }
                    className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                      selected
                        ? "border-indigo-300 bg-indigo-50 ring-2 ring-indigo-100"
                        : "border-slate-200 bg-white hover:border-indigo-200 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        selected
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon size={19} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold leading-5 text-slate-900">
                        {goal.label}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        {goal.description}
                      </span>
                    </span>

                    {selected && (
                      <Check
                        size={16}
                        className="mt-1 shrink-0 text-indigo-600"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Search */}
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-lg font-extrabold text-slate-950">
              Explore our services
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              {filteredServices.length}{" "}
              {filteredServices.length === 1 ? "service" : "services"} found
            </p>
          </div>

          <div className="relative w-full lg:max-w-sm">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search services, features..."
              aria-label="Search services"
              className="gm-input !rounded-xl !py-3 !pl-11 !pr-10"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Category filters */}
        <div className="mb-7 flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const active = activeCategory === category.label;

            return (
              <button
                key={category.label}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveCategory(category.label)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold transition sm:text-sm ${
                  active
                    ? "border-indigo-600 bg-indigo-600 text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:text-indigo-700"
                }`}
              >
                <Icon size={15} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {filteredServices.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${selectedGoal}-${search}-${limit}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredServices.map((service, index) => (
                <RecommendationCard
                  key={service.id}
                  service={service}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="gm-surface px-6 py-14 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
                <Search size={24} />
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                No matching services found
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Try a different search term or reset your filters to explore
                all services.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="gm-btn gm-btn-primary mt-6"
              >
                Show all services
                <ArrowRight size={16} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Consultation CTA */}
        <div className="relative mt-10 overflow-hidden rounded-3xl bg-slate-950 p-6 sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"
          />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-indigo-200">
                <Sparkles size={14} />
                NEED A LITTLE GUIDANCE?
              </span>

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Not sure which service fits your idea?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Start a conversation about your goals, requirements and
                priorities. We can discuss the right direction for your
                project.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                to="/ai-consultant"
                className="gm-btn border border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                Explore AI Consultant
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="gm-btn bg-white text-slate-950 hover:bg-indigo-50"
              >
                Discuss your project
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-xs leading-6 text-slate-400">
          Suggestions are based on the goal you select. Final scope, pricing
          and delivery timelines depend on your project requirements.
        </p>
      </div>
    </section>
  );
}
