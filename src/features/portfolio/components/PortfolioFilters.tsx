
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownUp,
  Check,
  Filter,
  LayoutGrid,
  Search,
  X,
} from "lucide-react";
import { useState } from "react";

export interface PortfolioFiltersProps {
  categories?: string[];
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  projectCounts?: Record<string, number>;
  totalProjects?: number;
  className?: string;
}

const DEFAULT_CATEGORIES = [
  "All",
  "Web Development",
  "UI/UX Design",
  "E-Commerce",
  "Branding",
  "AI & Automation",
];

export default function PortfolioFilters({
  categories = DEFAULT_CATEGORIES,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  projectCounts = {},
  totalProjects,
  className = "",
}: PortfolioFiltersProps) {
  const reduceMotion = useReducedMotion();

  const [internalCategory, setInternalCategory] = useState("All");
  const [internalSearch, setInternalSearch] = useState("");

  const selectedCategory = activeCategory ?? internalCategory;
  const currentSearch = searchQuery ?? internalSearch;

  const selectCategory = (category: string) => {
    if (activeCategory === undefined) {
      setInternalCategory(category);
    }
    onCategoryChange?.(category);
  };

  const updateSearch = (query: string) => {
    if (searchQuery === undefined) {
      setInternalSearch(query);
    }
    onSearchChange?.(query);
  };

  const hasSearch = currentSearch.trim().length > 0;
  const hasActiveFilter = selectedCategory !== "All" || hasSearch;

  const displayedCount =
    totalProjects ??
    projectCounts[selectedCategory] ??
    projectCounts["All"];

  return (
    <section
      aria-label="Portfolio filters"
      className={`relative w-full ${className}`}
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0b0c15] p-5 shadow-xl shadow-black/10 sm:p-7 lg:p-8">
        {/* Subtle background accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet-600/[0.10] blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-64 rounded-full bg-cyan-500/[0.06] blur-[80px]"
        />

        <div className="relative">
          {/* Heading and count */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                <Filter size={14} />
                Find Your Inspiration
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Explore our work
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                Discover projects by category or search for a particular
                solution.
              </p>
            </div>

            {displayedCount !== undefined && (
              <div className="flex w-fit items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-400/10 text-violet-300">
                  <LayoutGrid size={18} />
                </div>

                <div>
                  <p className="text-lg font-semibold leading-tight text-white">
                    {displayedCount}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-slate-500">
                    {selectedCategory === "All"
                      ? "Total projects"
                      : "Matching projects"}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Search */}
          <div className="mt-7">
            <label
              htmlFor="portfolio-project-search"
              className="mb-2 block text-xs font-medium text-slate-400"
            >
              Search projects
            </label>

            <div className="group flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-[#080911]/80 px-4 transition-colors focus-within:border-violet-400/50 focus-within:ring-2 focus-within:ring-violet-400/10">
              <Search
                size={18}
                className="shrink-0 text-slate-500 transition-colors group-focus-within:text-violet-300"
              />

              <input
                id="portfolio-project-search"
                type="search"
                value={currentSearch}
                onChange={(event) => updateSearch(event.target.value)}
                placeholder="Search by project name, service or technology..."
                className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-600"
              />

              {hasSearch && (
                <button
                  type="button"
                  onClick={() => updateSearch("")}
                  aria-label="Clear search"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Category filters */}
          <div className="mt-7">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Browse by category
              </p>

              <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <ArrowDownUp size={12} />
                Choose a category
              </span>
            </div>

            <div
              role="group"
              aria-label="Project category"
              className="flex flex-wrap gap-2"
            >
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                const count =
                  category === "All"
                    ? projectCounts["All"] ?? totalProjects
                    : projectCounts[category];

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => selectCategory(category)}
                    className={`relative inline-flex min-h-11 items-center gap-2 overflow-hidden rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c15] ${
                      isActive
                        ? "border-violet-400/40 bg-violet-500/15 text-white"
                        : "border-white/[0.08] bg-white/[0.025] text-slate-400 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="portfolio-active-filter"
                        className="absolute inset-0 rounded-xl border border-violet-300/20 bg-gradient-to-r from-violet-500/10 to-cyan-500/[0.06]"
                        transition={{
                          duration: reduceMotion ? 0 : 0.25,
                        }}
                      />
                    )}

                    {isActive ? (
                      <Check
                        size={14}
                        className="relative text-violet-300"
                      />
                    ) : null}

                    <span className="relative">{category}</span>

                    {count !== undefined && (
                      <span
                        className={`relative rounded-md px-1.5 py-0.5 text-[10px] tabular-nums ${
                          isActive
                            ? "bg-violet-300/10 text-violet-200"
                            : "bg-white/[0.06] text-slate-500"
                        }`}
                      >
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active filters and reset */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-5">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="mr-1">Active filters:</span>

              {selectedCategory !== "All" && (
                <span className="rounded-lg border border-violet-300/15 bg-violet-400/[0.08] px-2.5 py-1.5 text-violet-200">
                  {selectedCategory}
                </span>
              )}

              {hasSearch && (
                <span className="max-w-48 truncate rounded-lg border border-cyan-300/15 bg-cyan-400/[0.07] px-2.5 py-1.5 text-cyan-200">
                  Search: {currentSearch}
                </span>
              )}

              {!hasActiveFilter && (
                <span className="text-slate-400">All projects</span>
              )}
            </div>

            {hasActiveFilter && (
              <button
                type="button"
                onClick={() => {
                  selectCategory("All");
                  updateSearch("");
                }}
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                <X size={14} />
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
