
import { useMemo, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Globe,
  Layers3,
  Search,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";

type CaseStudy = {
  id: number;
  title: string;
  category: string;
  clientType: string;
  description: string;
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
  tags: string[];
  icon: typeof Globe;
  accent: string;
  visual: string;
};

const categories = [
  "All Projects",
  "Web Development",
  "Mobile Apps",
  "E-Commerce",
  "AI & Automation",
];

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Modern Business Website",
    category: "Web Development",
    clientType: "Business Website",
    description:
      "A modern digital experience designed to communicate the brand clearly and turn visitors into potential customers.",
    challenge:
      "The business needed a professional online presence, clearer service information, and a smoother way for customers to get in touch.",
    solution:
      "We designed a responsive website with structured service pages, clear calls to action, and a user-friendly browsing experience.",
    results: [
      { value: "Responsive", label: "Across devices" },
      { value: "SEO-ready", label: "Site structure" },
      { value: "UX-focused", label: "User experience" },
    ],
    tags: ["React", "TypeScript", "Tailwind CSS"],
    icon: Globe,
    accent: "from-blue-600 to-indigo-600",
    visual: "website",
  },
  {
    id: 2,
    title: "Smart Shopping Experience",
    category: "E-Commerce",
    clientType: "Online Store",
    description:
      "A streamlined shopping experience with product discovery, intuitive navigation, and a conversion-focused interface.",
    challenge:
      "Customers needed a simpler way to explore products, understand product details, and move through the shopping journey.",
    solution:
      "We planned a clean storefront with organized product categories, clear product information, and a checkout-ready user journey.",
    results: [
      { value: "Simplified", label: "Product discovery" },
      { value: "Mobile-first", label: "Shopping design" },
      { value: "Scalable", label: "Store structure" },
    ],
    tags: ["E-Commerce", "UI/UX", "Responsive Design"],
    icon: ShoppingCart,
    accent: "from-violet-600 to-purple-600",
    visual: "commerce",
  },
  {
    id: 3,
    title: "Mobile App Concept",
    category: "Mobile Apps",
    clientType: "Mobile Application",
    description:
      "A mobile-first application concept focused on simple navigation, accessible interactions, and a consistent visual system.",
    challenge:
      "The product idea needed a clear interface that would help users complete important tasks without unnecessary complexity.",
    solution:
      "We organized the core user flows, designed reusable interface patterns, and prioritized usability across mobile screen sizes.",
    results: [
      { value: "User-first", label: "Design approach" },
      { value: "Reusable", label: "UI components" },
      { value: "Mobile-ready", label: "Experience" },
    ],
    tags: ["Mobile UI", "Prototyping", "UX Design"],
    icon: Smartphone,
    accent: "from-cyan-600 to-blue-600",
    visual: "mobile",
  },
  {
    id: 4,
    title: "AI-Powered Workflow",
    category: "AI & Automation",
    clientType: "AI & Automation",
    description:
      "A workflow concept designed to reduce repetitive tasks and help teams manage information more efficiently.",
    challenge:
      "Repeated manual processes were taking time away from higher-value work and making routine operations harder to manage.",
    solution:
      "We mapped the workflow, identified automation opportunities, and outlined an AI-assisted process with human review where needed.",
    results: [
      { value: "Workflow", label: "Process mapping" },
      { value: "AI-assisted", label: "Task support" },
      { value: "Human-led", label: "Review process" },
    ],
    tags: ["AI", "Automation", "Workflow Design"],
    icon: Workflow,
    accent: "from-fuchsia-600 to-indigo-600",
    visual: "ai",
  },
  {
    id: 5,
    title: "Business Dashboard",
    category: "Web Development",
    clientType: "Web Application",
    description:
      "A dashboard concept that brings important business information into a structured, easy-to-scan interface.",
    challenge:
      "Users needed a clearer way to review key information and navigate between related business operations.",
    solution:
      "We designed a modular dashboard layout with summary cards, organized navigation, and visual data presentation.",
    results: [
      { value: "Centralized", label: "Information layout" },
      { value: "Modular", label: "Dashboard UI" },
      { value: "Clearer", label: "Data hierarchy" },
    ],
    tags: ["React", "Dashboard", "Data Visualization"],
    icon: BarChart3,
    accent: "from-emerald-600 to-teal-600",
    visual: "dashboard",
  },
  {
    id: 6,
    title: "Digital Product Launch",
    category: "Web Development",
    clientType: "Product Landing Page",
    description:
      "A polished landing-page concept that explains a digital product and guides visitors toward a clear next step.",
    challenge:
      "The product needed a concise story, a consistent visual identity, and a straightforward path from discovery to inquiry.",
    solution:
      "We structured the page around product benefits, feature highlights, trust-building content, and prominent calls to action.",
    results: [
      { value: "Focused", label: "Product messaging" },
      { value: "Consistent", label: "Brand experience" },
      { value: "Action-led", label: "Page structure" },
    ],
    tags: ["Landing Page", "UI/UX", "Conversion Design"],
    icon: Layers3,
    accent: "from-orange-500 to-rose-600",
    visual: "product",
  },
];

function ProjectVisual({
  study,
}: {
  study: CaseStudy;
}) {

  return (
    <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden bg-slate-100 p-6 sm:min-h-[280px]">
      <div
        className={`absolute -right-12 -top-16 h-52 w-52 rounded-full bg-gradient-to-br ${study.accent} opacity-15 blur-3xl`}
      />
      <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-indigo-300/30 blur-3xl" />

      {study.visual === "website" && (
        <div className="relative w-full max-w-[340px] -rotate-2 rounded-2xl border border-white bg-white p-3 shadow-2xl shadow-slate-300/60 transition-transform duration-500 group-hover:rotate-0">
          <div className="flex items-center gap-1.5 border-b border-slate-100 pb-3">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <div className="ml-3 h-2.5 flex-1 rounded-full bg-slate-100" />
          </div>
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-3 p-3">
            <div className="space-y-3 py-3">
              <div className="h-2 w-14 rounded-full bg-indigo-100" />
              <div className="h-4 w-full rounded bg-slate-800" />
              <div className="h-4 w-4/5 rounded bg-slate-800" />
              <div className="h-2 w-full rounded bg-slate-200" />
              <div className="h-2 w-4/5 rounded bg-slate-200" />
              <div className="mt-4 h-7 w-24 rounded-lg bg-indigo-600" />
            </div>
            <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br ${study.accent} p-5`}>
              <Globe className="h-14 w-14 text-white" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 px-3 pb-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-8 rounded-lg bg-slate-100" />
            ))}
          </div>
        </div>
      )}

      {study.visual === "commerce" && (
        <div className="relative grid w-full max-w-[340px] grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className={`rounded-2xl border border-white bg-white p-3 shadow-lg transition-transform duration-300 group-hover:-translate-y-1 ${
                item % 2 === 0 ? "translate-y-4" : ""
              }`}
            >
              <div className={`flex h-20 items-center justify-center rounded-xl bg-gradient-to-br ${study.accent} bg-opacity-10`}>
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <div className="mt-3 h-2 w-3/4 rounded-full bg-slate-300" />
              <div className="mt-2 h-2 w-1/2 rounded-full bg-slate-100" />
            </div>
          ))}
        </div>
      )}

      {study.visual === "mobile" && (
        <div className="relative flex items-center gap-5">
          <div className="w-[125px] -rotate-6 rounded-[26px] border-[5px] border-slate-800 bg-white p-2 shadow-2xl transition-transform duration-500 group-hover:-rotate-3">
            <div className={`flex h-36 items-center justify-center rounded-[18px] bg-gradient-to-br ${study.accent}`}>
              <Smartphone className="h-10 w-10 text-white" />
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-2 rounded-full bg-slate-200" />
              <div className="h-2 w-3/4 rounded-full bg-slate-100" />
              <div className="h-7 rounded-lg bg-indigo-600" />
            </div>
          </div>
          <div className="w-[125px] translate-y-5 rotate-6 rounded-[26px] border-[5px] border-slate-800 bg-white p-2 shadow-2xl transition-transform duration-500 group-hover:rotate-3">
            <div className="flex h-20 items-center justify-center rounded-[18px] bg-indigo-50">
              <CheckCircle2 className="h-9 w-9 text-indigo-600" />
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-2 rounded-full bg-slate-200" />
              <div className="h-2 w-3/4 rounded-full bg-slate-100" />
              <div className="mt-4 h-12 rounded-xl bg-slate-50" />
              <div className="h-7 rounded-lg bg-indigo-600" />
            </div>
          </div>
        </div>
      )}

      {study.visual === "ai" && (
        <div className="relative flex w-full max-w-[340px] items-center justify-center">
          <div className="absolute h-44 w-44 rounded-full border border-indigo-200" />
          <div className="absolute h-32 w-32 rounded-full border border-indigo-200/70" />
          <div className={`relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${study.accent} shadow-xl`}>
            <Sparkles className="h-11 w-11 text-white" />
          </div>
          <div className="absolute left-3 top-4 rounded-xl border border-slate-100 bg-white p-3 shadow-lg">
            <Zap className="h-5 w-5 text-amber-500" />
          </div>
          <div className="absolute right-2 top-10 rounded-xl border border-slate-100 bg-white p-3 shadow-lg">
            <Workflow className="h-5 w-5 text-indigo-600" />
          </div>
          <div className="absolute bottom-0 left-10 rounded-xl border border-slate-100 bg-white p-3 shadow-lg">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          </div>
        </div>
      )}

      {study.visual === "dashboard" && (
        <div className="relative w-full max-w-[340px] rotate-1 rounded-2xl border border-white bg-white p-4 shadow-2xl transition-transform duration-500 group-hover:rotate-0">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="h-3 w-24 rounded-full bg-slate-800" />
              <div className="mt-2 h-2 w-16 rounded-full bg-slate-200" />
            </div>
            <div className="rounded-lg bg-emerald-50 p-2">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-xl bg-slate-50 p-3">
                <div className="h-2 w-full rounded-full bg-slate-200" />
                <div className="mt-3 h-4 w-4/5 rounded bg-slate-700" />
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-24 items-end gap-2 rounded-xl bg-slate-50 p-3">
            {[35, 60, 45, 80, 55, 95, 70, 85].map((height, index) => (
              <div
                key={index}
                className={`flex-1 rounded-t-md bg-gradient-to-t ${study.accent} opacity-80`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      )}

      {study.visual === "product" && (
        <div className="relative w-full max-w-[340px] rounded-2xl border border-white bg-white p-4 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
          <div className={`flex min-h-[135px] items-center justify-center rounded-xl bg-gradient-to-br ${study.accent}`}>
            <div className="rounded-2xl border border-white/30 bg-white/15 p-6 backdrop-blur-sm">
              <Layers3 className="h-12 w-12 text-white" />
            </div>
          </div>
          <div className="mt-4 h-3 w-2/3 rounded-full bg-slate-800" />
          <div className="mt-3 h-2 w-full rounded-full bg-slate-100" />
          <div className="mt-2 h-2 w-4/5 rounded-full bg-slate-100" />
          <div className="mt-4 flex items-center justify-between">
            <div className="h-8 w-24 rounded-lg bg-indigo-600" />
            <ArrowUpRight className="h-5 w-5 text-indigo-600" />
          </div>
        </div>
      )}
    </div>
  );
}

function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const Icon = study.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
    >
      <ProjectVisual study={study} />

      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
            {study.category}
          </span>
          <span className="text-xs font-medium text-slate-400">
            {study.clientType}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-indigo-700">
          {study.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {study.description}
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              The challenge
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {study.challenge}
            </p>
          </div>
          <div className="rounded-xl bg-indigo-50/70 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-500">
              Our approach
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              {study.solution}
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {study.results.map((result) => (
            <div
              key={result.label}
              className="rounded-xl border border-slate-100 p-3"
            >
              <p className="text-sm font-bold text-slate-900">
                {result.value}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                {result.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Icon className="h-4 w-4 text-indigo-600" />
            Project overview
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-all hover:gap-3"
          >
            Similar project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudies = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return caseStudies.filter((study) => {
      const matchesCategory =
        activeCategory === "All Projects" ||
        study.category === activeCategory;

      const searchableText = [
        study.title,
        study.category,
        study.clientType,
        study.description,
        ...study.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        query.length === 0 || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.3),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.2),transparent_40%)]" />

        <div className="absolute right-[10%] top-16 -z-10 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute right-[13%] top-20 -z-10 h-48 w-48 rounded-full border border-white/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm font-medium text-indigo-200">
              <Sparkles className="h-4 w-4" />
              Our Work & Case Studies
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ideas into
              <span className="block bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
                impactful digital
              </span>
              experiences.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore how thoughtful design, modern development, and
              intelligent technology can help businesses build better
              digital experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:bg-indigo-500"
              >
                Explore projects
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Discuss your idea
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                User-focused design
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Modern technology
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 blur-2xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Digital solutions
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    From concept to launch
                  </p>
                </div>
                <div className="rounded-xl bg-indigo-500/20 p-3">
                  <Code2 className="h-6 w-6 text-indigo-300" />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  {
                    icon: Globe,
                    title: "Web experiences",
                    detail: "Fast, responsive, scalable",
                    color: "bg-blue-500/15 text-blue-300",
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile solutions",
                    detail: "Designed around users",
                    color: "bg-violet-500/15 text-violet-300",
                  },
                  {
                    icon: Workflow,
                    title: "AI & automation",
                    detail: "Smarter ways to work",
                    color: "bg-cyan-500/15 text-cyan-300",
                  },
                ].map((item, index) => {
                  const ItemIcon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.35 + index * 0.12,
                      }}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className={`rounded-xl p-3 ${item.color}`}>
                        <ItemIcon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          {item.detail}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-500" />
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-blue-500/10 p-4">
                <div className="rounded-xl bg-indigo-400/20 p-2.5">
                  <Zap className="h-5 w-5 text-indigo-200" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Built for real-world needs
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Purposeful design. Practical technology.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Selected work
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Solutions built around real needs.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 md:justify-self-end">
            Every project starts with understanding the problem. Our approach
            combines strategy, thoughtful user experience, and reliable
            technology to shape digital solutions around specific goals.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              icon: Code2,
              title: "Thoughtful development",
              description:
                "Modern, maintainable solutions designed around project needs.",
            },
            {
              icon: Sparkles,
              title: "Purposeful design",
              description:
                "Clear interfaces that make digital experiences easier to use.",
            },
            {
              icon: TrendingUp,
              title: "Business-focused",
              description:
                "Practical decisions aligned with customer and business goals.",
            },
          ].map((item, index) => {
            const ItemIcon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50"
              >
                <div className="inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600">
                  <ItemIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Case Studies & Filters */}
      <section
        id="case-studies"
        className="scroll-mt-20 bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
                Case study library
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Explore our approach.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Browse project concepts across web, mobile, commerce, and
                automation.
              </p>
            </div>

            <div className="relative w-full lg:max-w-xs">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search projects or technologies..."
                aria-label="Search case studies"
                className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
              />
            </div>
          </div>

          <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`shrink-0 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:text-indigo-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mb-6 mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-500" aria-live="polite">
              Showing{" "}
              <span className="font-semibold text-slate-900">
                {filteredStudies.length}
              </span>{" "}
              {filteredStudies.length === 1 ? "project" : "projects"}
            </p>

            {(activeCategory !== "All Projects" ||
              searchQuery.length > 0) && (
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All Projects");
                  setSearchQuery("");
                }}
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Clear filters
              </button>
            )}
          </div>

          {filteredStudies.length > 0 ? (
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
              {filteredStudies.map((study, index) => (
                <CaseStudyCard
                  key={study.id}
                  study={study}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                <Search className="h-6 w-6 text-slate-500" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                No matching projects found
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Try another search term or select a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All Projects");
                  setSearchQuery("");
                }}
                className="mt-6 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                Show all projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            How we work
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From first conversation to final delivery.
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            A clear, collaborative process helps keep every project focused
            on its intended outcome.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Discover",
              description:
                "Understand your business, audience, challenges, and goals.",
            },
            {
              number: "02",
              title: "Plan & design",
              description:
                "Define the solution, user journeys, and implementation plan.",
            },
            {
              number: "03",
              title: "Build & refine",
              description:
                "Develop the experience and improve it through feedback.",
            },
            {
              number: "04",
              title: "Launch & support",
              description:
                "Prepare for delivery and identify future improvements.",
            },
          ].map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative rounded-2xl border border-slate-200 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-indigo-100">
                  {step.number}
                </span>
                {index < 3 && (
                  <ArrowRight className="hidden h-5 w-5 text-indigo-300 lg:block" />
                )}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-indigo-200">
                <Sparkles className="h-4 w-4" />
                Your project could be next
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Have an idea worth building?
              </h2>
              <p className="mt-4 max-w-xl leading-8 text-slate-300">
                Let's discuss your goals and explore the right digital
                solution for your business.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Explore services
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
