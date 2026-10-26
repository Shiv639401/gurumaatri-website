
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import {
  services,
  serviceCategories,
  type Service,
} from "../../../data/services";

interface ServiceGridProps {
  items?: Service[];
  showFilters?: boolean;
  showSearch?: boolean;
  showHeader?: boolean;
  title?: string;
  description?: string;
  className?: string;
  initialCategory?: string;
  limit?: number;
}

function createServiceSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon: LucideIcon = service.icon;
  const serviceSlug = createServiceSlug(service.title);

  const features = (service.features ?? []).slice(0, 3);

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/[0.06] sm:p-7"
      style={{
        animationDelay: `${Math.min(index * 70, 350)}ms`,
      }}
    >
      {/* Decorative hover effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 transition-transform duration-300 group-hover:scale-x-100"
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-700 transition-all duration-300 group-hover:border-indigo-200 group-hover:from-indigo-600 group-hover:to-violet-600 group-hover:text-white">
          <Icon size={27} strokeWidth={1.7} aria-hidden="true" />
        </div>

        <span className="flex h-9 min-w-9 items-center justify-center rounded-xl bg-slate-50 px-2 text-xs font-bold tracking-wider text-slate-400 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-700">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {service.category && (
        <div className="mt-6">
          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
            {service.category}
          </span>
        </div>
      )}

      <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-indigo-700">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {service.shortDescription || service.description}
      </p>

      {features.length > 0 && (
        <ul className="mt-5 space-y-2.5">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
            >
              <CheckCircle2
                size={16}
                className="mt-1 shrink-0 text-indigo-600"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {service.technologies?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {service.technologies.slice(0, 3).map((technology) => (
            <span
              key={technology}
              className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500"
            >
              {technology}
            </span>
          ))}
          {service.technologies.length > 3 && (
            <span className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500">
              +{service.technologies.length - 3}
            </span>
          )}
        </div>
      )}

      <div className="mt-auto pt-7">
        <div className="mb-5 h-px bg-slate-100 transition-colors group-hover:bg-indigo-100" />

        <Link
          to={`/services/${serviceSlug}`}
          aria-label={`Explore ${service.title} service`}
          className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-4"
        >
          Explore Service
          <ArrowRight
            size={17}
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}

export default function ServiceGrid({
  items,
  showFilters = true,
  showSearch = true,
  showHeader = true,
  title = "Solutions built around your vision.",
  description = "From digital experiences to business automation, explore solutions designed to help your business move forward.",
  className = "",
  initialCategory = "All",
  limit,
}: ServiceGridProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const sourceServices = items ?? services;

  const categories = useMemo(() => {
    const availableCategories = new Set(
      sourceServices.map((service) => service.category)
    );

    return serviceCategories.filter(
      (category) => category === "All" || availableCategories.has(category)
    );
  }, [sourceServices]);

  const filteredServices = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const matchingServices = sourceServices.filter((service) => {
      const matchesCategory =
        activeCategory === "All" || service.category === activeCategory;

      const searchableText = [
        service.title,
        service.shortDescription,
        service.description,
        service.category,
        ...(service.features ?? []),
        ...(service.technologies ?? []),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });

    return typeof limit === "number" && limit > 0
      ? matchingServices.slice(0, limit)
      : matchingServices;
  }, [sourceServices, activeCategory, searchQuery, limit]);

  return (
    <section className={`relative py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        {showHeader && (
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
              <Sparkles size={14} aria-hidden="true" />
              What We Do
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {description}
            </p>
          </div>
        )}

        {/* Search and category filters */}
        {(showSearch || showFilters) && (
          <div className="mb-8 flex flex-col gap-5">
            {showSearch && (
              <div className="mx-auto w-full max-w-xl">
                <label htmlFor="service-grid-search" className="sr-only">
                  Search services
                </label>

                <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 shadow-sm transition focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/10">
                  <Search
                    size={19}
                    className="shrink-0 text-slate-400"
                    aria-hidden="true"
                  />

                  <input
                    id="service-grid-search"
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search services or technologies..."
                    className="h-full w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            )}

            {showFilters && categories.length > 0 && (
              <div
                className="flex flex-wrap items-center justify-center gap-2"
                aria-label="Filter services by category"
              >
                {categories.map((category) => {
                  const isActive = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveCategory(category)}
                      className={[
                        "rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
                        isActive
                          ? "border-slate-950 bg-slate-950 text-white shadow-sm"
                          : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700",
                      ].join(" ")}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Results count */}
        <div
          className="mb-5 flex items-center justify-between gap-3 text-sm text-slate-500"
          aria-live="polite"
        >
          <span>
            {filteredServices.length}{" "}
            {filteredServices.length === 1 ? "service" : "services"} found
          </span>

          {(searchQuery || activeCategory !== "All") && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="font-semibold text-indigo-700 transition hover:text-indigo-900"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Services grid */}
        {filteredServices.length > 0 ? (
          <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
              <Search size={25} aria-hidden="true" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              No matching services found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
              Try a different search term or select another category to
              explore our services.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Show All Services
            </button>
          </div>
        )}
      </div>
    </section>
  );
}