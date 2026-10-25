
import { useMemo, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  Cpu,
  Lightbulb,
  Search,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  icon: typeof Code2;
  gradient: string;
  featured?: boolean;
};

const categories = [
  "All Articles",
  "Web Development",
  "UI/UX Design",
  "AI & Automation",
  "Business & Tech",
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Build a Modern Website for Your Business",
    excerpt:
      "Learn the essential elements of a modern business website, from responsive layouts and clear messaging to performance and user experience.",
    category: "Web Development",
    date: "Oct 12, 2026",
    readTime: "6 min read",
    author: "GuruMaatri Team",
    tags: ["Website", "React", "Business"],
    icon: Code2,
    gradient: "from-indigo-600 via-blue-600 to-cyan-500",
    featured: true,
  },
  {
    id: 2,
    title: "Why Responsive Web Design Matters",
    excerpt:
      "Explore how mobile-friendly layouts improve usability and help create a consistent experience across phones, tablets, and desktops.",
    category: "Web Development",
    date: "Oct 08, 2026",
    readTime: "5 min read",
    author: "GuruMaatri Team",
    tags: ["Responsive", "Mobile", "UX"],
    icon: Code2,
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    id: 3,
    title: "UI/UX Design Principles Every Business Should Know",
    excerpt:
      "Discover practical design principles that make digital products easier to navigate, understand, and use.",
    category: "UI/UX Design",
    date: "Oct 03, 2026",
    readTime: "7 min read",
    author: "GuruMaatri Team",
    tags: ["UI Design", "UX", "Design"],
    icon: Lightbulb,
    gradient: "from-violet-600 to-fuchsia-600",
  },
  {
    id: 4,
    title: "Practical Ways to Use AI in Your Business",
    excerpt:
      "Identify everyday workflows where AI assistance may save time, organize information, and support better decisions.",
    category: "AI & Automation",
    date: "Sep 27, 2026",
    readTime: "8 min read",
    author: "GuruMaatri Team",
    tags: ["AI", "Automation", "Productivity"],
    icon: Cpu,
    gradient: "from-fuchsia-600 to-indigo-600",
  },
  {
    id: 5,
    title: "Choosing the Right Technology for Your Startup",
    excerpt:
      "A practical guide to evaluating technology choices based on product needs, team capability, maintainability, and budget.",
    category: "Business & Tech",
    date: "Sep 21, 2026",
    readTime: "6 min read",
    author: "GuruMaatri Team",
    tags: ["Startup", "Technology", "Planning"],
    icon: TrendingUp,
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    id: 6,
    title: "Website Performance: What to Improve First",
    excerpt:
      "Understand the basics of page speed, optimized images, efficient code, and how to prioritize performance improvements.",
    category: "Web Development",
    date: "Sep 15, 2026",
    readTime: "7 min read",
    author: "GuruMaatri Team",
    tags: ["Performance", "SEO", "Development"],
    icon: Code2,
    gradient: "from-orange-500 to-rose-600",
  },
  {
    id: 7,
    title: "How to Plan a Better E-Commerce Experience",
    excerpt:
      "Learn how product organization, useful product details, mobile-friendly shopping, and a simple checkout flow work together.",
    category: "UI/UX Design",
    date: "Sep 09, 2026",
    readTime: "5 min read",
    author: "GuruMaatri Team",
    tags: ["E-Commerce", "Shopping", "UX"],
    icon: Lightbulb,
    gradient: "from-pink-600 to-rose-600",
  },
  {
    id: 8,
    title: "Automation vs. Manual Work: Where to Start",
    excerpt:
      "Find repeatable processes in your business and learn how to evaluate whether automation is worth implementing.",
    category: "AI & Automation",
    date: "Sep 02, 2026",
    readTime: "6 min read",
    author: "GuruMaatri Team",
    tags: ["Automation", "Workflow", "AI"],
    icon: Cpu,
    gradient: "from-cyan-600 to-blue-700",
  },
];

function ArticleArtwork({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  const Icon = post.icon;

  return (
    <div
      className={`relative isolate flex items-center justify-center overflow-hidden bg-gradient-to-br ${post.gradient} ${
        featured ? "min-h-[260px] sm:min-h-[340px]" : "min-h-[210px]"
      }`}
    >
      <div className="absolute -left-10 -top-12 -z-10 h-48 w-48 rounded-full border border-white/20" />
      <div className="absolute -bottom-20 -right-10 -z-10 h-56 w-56 rounded-full border border-white/20" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />

      <div
        className={`relative flex items-center justify-center rounded-[2rem] border border-white/25 bg-white/10 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105 ${
          featured ? "h-32 w-32 sm:h-40 sm:w-40" : "h-24 w-24"
        }`}
      >
        <Icon
          className={`text-white ${
            featured ? "h-16 w-16 sm:h-20 sm:w-20" : "h-12 w-12"
          }`}
          strokeWidth={1.35}
        />
      </div>

      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
        <Sparkles className="h-3.5 w-3.5" />
        Insights by GuruMaatri
      </div>

      {featured && (
        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
          Featured Article
        </div>
      )}
    </div>
  );
}

function BlogCard({
  post,
  index,
}: {
  post: BlogPost;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.4,
        delay: (index % 3) * 0.07,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
    >
      <ArticleArtwork post={post} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-400">
            <Clock3 className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-indigo-700">
          {post.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
          {post.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-500"
            >
              #{tag.replace(/\s+/g, "")}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-slate-700">
              {post.author}
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
              <CalendarDays className="h-3.5 w-3.5" />
              {post.date}
            </p>
          </div>

          <Link
            to="/contact"
            aria-label={`Discuss a project related to ${post.title}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
          >
            Explore
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All Articles" ||
        post.category === activeCategory;

      const searchableText = [
        post.title,
        post.excerpt,
        post.category,
        post.author,
        ...post.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        query.length === 0 || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const visiblePosts = filteredPosts.filter(
    (post) => post.id !== featuredPost?.id
  );

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.3),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.2),transparent_40%)]" />

        <div className="absolute right-[10%] top-12 -z-10 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute right-[13%] top-16 -z-10 h-48 w-48 rounded-full border border-white/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm font-medium text-indigo-200">
              <Sparkles className="h-4 w-4" />
              The GuruMaatri Blog
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ideas that inspire.
              <span className="block bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
                Insights that help.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore practical insights on web development, user experience,
              AI, automation, and building better digital products.
            </p>

            <a
              href="#latest-articles"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:bg-indigo-500"
            >
              Read latest articles
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Practical guidance
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Digital innovation
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 blur-2xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
              <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                <div className="rounded-2xl bg-indigo-500/20 p-3">
                  <BookOpen className="h-7 w-7 text-indigo-200" />
                </div>
                <div>
                  <p className="font-bold text-white">Knowledge & ideas</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Learn. Explore. Build.
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  {
                    icon: Code2,
                    title: "Web development",
                    detail: "Modern tools and techniques",
                    color: "text-blue-300 bg-blue-500/15",
                  },
                  {
                    icon: Lightbulb,
                    title: "Design & experience",
                    detail: "Better interfaces for users",
                    color: "text-violet-300 bg-violet-500/15",
                  },
                  {
                    icon: Cpu,
                    title: "AI & automation",
                    detail: "Smarter digital workflows",
                    color: "text-cyan-300 bg-cyan-500/15",
                  },
                ].map((item, index) => {
                  const ItemIcon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.25 + index * 0.1,
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
                      <ChevronRight className="h-4 w-4 text-slate-500" />
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-blue-500/10 p-4">
                <p className="text-sm font-semibold text-white">
                  Keep learning. Keep creating.
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Ideas and resources for your digital journey.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
                Editor's pick
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Featured article
              </h2>
            </div>
            <span className="hidden items-center gap-2 text-sm font-medium text-slate-500 sm:flex">
              <Sparkles className="h-4 w-4 text-indigo-500" />
              Selected insight
            </span>
          </div>

          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
            <div className="group">
              <ArticleArtwork post={featuredPost} featured />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
                  {featuredPost.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock3 className="h-3.5 w-3.5" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                {featuredPost.title}
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                {featuredPost.excerpt}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                <CalendarDays className="h-4 w-4" />
                {featuredPost.date}
                <span className="text-slate-300">•</span>
                {featuredPost.author}
              </div>

              <a
                href="#latest-articles"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                Explore articles
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Articles & filters */}
      <section
        id="latest-articles"
        className="scroll-mt-20 bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
                The knowledge hub
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Latest articles
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
                Discover ideas, practical guides, and technology insights
                for your next digital project.
              </p>
            </div>

            <div className="relative w-full lg:max-w-xs">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search articles..."
                aria-label="Search blog articles"
                className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-11 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
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

          <div className="mb-6 mt-6 flex items-center justify-between gap-3">
            <p className="text-sm text-slate-500" aria-live="polite">
              Showing{" "}
              <span className="font-semibold text-slate-900">
                {visiblePosts.length}
              </span>{" "}
              {visiblePosts.length === 1 ? "article" : "articles"}
            </p>

            {(activeCategory !== "All Articles" ||
              searchQuery.length > 0) && (
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All Articles");
                  setSearchQuery("");
                }}
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Clear filters
              </button>
            )}
          </div>

          {visiblePosts.length > 0 ? (
            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visiblePosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                <Search className="h-6 w-6 text-slate-500" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                No articles found
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                Try different keywords or select another category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All Articles");
                  setSearchQuery("");
                }}
                className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                Show all articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="absolute -bottom-28 left-1/4 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-indigo-200">
                <Lightbulb className="h-4 w-4" />
                Have a project in mind?
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Turn your next idea into reality.
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Let's talk about your business goals and explore a digital
                solution that fits your needs.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                Start a conversation
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
