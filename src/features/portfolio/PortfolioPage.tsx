
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

type ProjectCategory =
  | "All"
  | "Websites"
  | "Web Applications"
  | "UI/UX Design"
  | "E-commerce";

type Project = {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  year: string;
  color: string;
  accent: string;
  label: string;
  initials: string;
  services: string[];
  technologies: string[];
  challenge: string;
  solution: string;
  outcome: string;
  featured?: boolean;
};

const categories: ProjectCategory[] = [
  "All",
  "Websites",
  "Web Applications",
  "UI/UX Design",
  "E-commerce",
];

const projects: Project[] = [
  {
    id: 1,
    title: "Fluffy Event",
    category: "Web Applications",
    description:
      "An event management experience designed to simplify event planning, package discovery and customer enquiries.",
    year: "2026",
    color: "#F4EAFE",
    accent: "#8B5CF6",
    label: "EVENT EXPERIENCE",
    initials: "FE",
    services: ["Web Development", "Responsive UI", "Booking Experience"],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    challenge:
      "Create a polished digital experience where customers can explore event packages and understand the next steps.",
    solution:
      "Build a responsive interface with clear package presentation, structured content and prominent enquiry actions.",
    outcome:
      "A foundation for presenting event services and guiding visitors towards an enquiry. Performance and conversion improvements should be measured after launch.",
    featured: true,
  },
  {
    id: 2,
    title: "Architecture Studio",
    category: "Websites",
    description:
      "A refined portfolio concept for an architecture and construction business, focused on projects, credibility and enquiries.",
    year: "Concept",
    color: "#E7F0FF",
    accent: "#356AE6",
    label: "ARCHITECTURE",
    initials: "AS",
    services: ["Website Design", "Project Gallery", "SEO Structure"],
    technologies: ["React", "Tailwind CSS", "Responsive Design"],
    challenge:
      "Present construction services and project work in a premium, easy-to-navigate format.",
    solution:
      "Use an editorial layout, spacious project previews, clear service sections and contact-focused navigation.",
    outcome:
      "A visual direction for a professional architecture website. This is a concept preview, not a claim of a completed client deployment.",
  },
  {
    id: 3,
    title: "Commerce Atelier",
    category: "E-commerce",
    description:
      "A storefront concept with product discovery, clear product cards and a streamlined shopping journey.",
    year: "Concept",
    color: "#FCEBDD",
    accent: "#D97735",
    label: "DIGITAL COMMERCE",
    initials: "CA",
    services: ["Storefront UI", "Product Discovery", "Mobile Layout"],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    challenge:
      "Make a product catalogue attractive, organised and easy to browse across screen sizes.",
    solution:
      "Create a storefront concept with product-led visuals, category navigation and a clear action hierarchy.",
    outcome:
      "A storefront design direction. Payments, inventory, checkout and order management require backend integrations.",
  },
  {
    id: 4,
    title: "Finova Dashboard",
    category: "UI/UX Design",
    description:
      "A finance dashboard concept bringing key metrics, transaction summaries and data visualisation into one interface.",
    year: "Concept",
    color: "#DDF7EF",
    accent: "#12866A",
    label: "FINTECH DASHBOARD",
    initials: "FD",
    services: ["Dashboard UI", "Information Architecture", "Design System"],
    technologies: ["React", "TypeScript", "Data UI"],
    challenge:
      "Organise information-heavy screens so users can scan important figures without losing context.",
    solution:
      "Use a clear visual hierarchy, modular metric cards, simple navigation and consistent spacing.",
    outcome:
      "A dashboard UI concept. Live financial data, authentication and permissions are not included in this visual preview.",
  },
  {
    id: 5,
    title: "Wellness Space",
    category: "Websites",
    description:
      "A welcoming website concept for a wellness brand, with service discovery and a calm, approachable visual identity.",
    year: "Concept",
    color: "#FBE6ED",
    accent: "#C44778",
    label: "WELLNESS BRAND",
    initials: "WS",
    services: ["Brand-led UI", "Website Design", "Mobile Experience"],
    technologies: ["React", "Tailwind CSS", "Responsive Design"],
    challenge:
      "Balance a distinctive brand identity with practical service information and straightforward navigation.",
    solution:
      "Combine soft colour accents, editorial typography and focused calls to action in a responsive layout.",
    outcome:
      "A concept for a service-led brand website, ready for further content and business-specific customisation.",
  },
  {
    id: 6,
    title: "TaskFlow Workspace",
    category: "Web Applications",
    description:
      "A productivity application concept featuring a structured workspace, task cards and clear status indicators.",
    year: "Concept",
    color: "#E4EDFF",
    accent: "#4F65D9",
    label: "PRODUCTIVITY",
    initials: "TF",
    services: ["Application UI", "Component Design", "Responsive Layout"],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    challenge:
      "Present tasks and workflow states clearly while keeping the interface compact and easy to navigate.",
    solution:
      "Design a modular workspace with visual status cues, structured cards and reusable interface patterns.",
    outcome:
      "A frontend application concept. Persistent tasks, collaboration and user accounts require a connected backend.",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 shrink-0"
    >
      {diagonal ? (
        <path
          d="M7 17 17 7M7 7h10v10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M4 12h15m-6-6 6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="m12 2 2.2 6.1L20 10l-5.8 2.1L12 18l-2.2-5.9L4 10l5.8-1.9L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrowserPreview({ project }: { project: Project }) {
  const isEvent = project.id === 1;
  const isArchitecture = project.id === 2;
  const isCommerce = project.id === 3;
  const isFinance = project.id === 4;
  const isWellness = project.id === 5;

  return (
    <div
      className="relative h-full min-h-[245px] overflow-hidden rounded-[18px] p-4 sm:min-h-[275px] sm:p-6"
      style={{ backgroundColor: project.color }}
    >
      <div className="relative mx-auto max-w-[390px]">
        <div className="overflow-hidden rounded-xl border border-white/80 bg-white shadow-[0_18px_55px_rgba(37,46,80,0.12)] transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex h-8 items-center gap-1.5 border-b border-slate-100 px-3">
            <span className="h-2 w-2 rounded-full bg-rose-300" />
            <span className="h-2 w-2 rounded-full bg-amber-300" />
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            <div className="ml-3 h-3 w-24 rounded-full bg-slate-100" />
            <div className="ml-auto h-3 w-8 rounded-full bg-slate-100" />
          </div>

          <div className="p-4 sm:p-5">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-[9px] font-black text-white"
                  style={{ backgroundColor: project.accent }}
                >
                  {project.initials}
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-800">
                    {project.title}
                  </div>
                  <div className="mt-0.5 text-[7px] text-slate-400">
                    Digital experience
                  </div>
                </div>
              </div>
              <span
                className="rounded-full px-2 py-1 text-[7px] font-semibold"
                style={{
                  color: project.accent,
                  backgroundColor: project.color,
                }}
              >
                Explore
              </span>
            </div>

            {isEvent && (
              <>
                <div className="text-[8px] font-bold tracking-[0.2em] text-slate-400">
                  CELEBRATE DIFFERENTLY
                </div>
                <div className="mt-2 max-w-[220px] text-[23px] font-black leading-[1.05] tracking-tight text-slate-900 sm:text-[27px]">
                  Moments made
                  <br />
                  <span style={{ color: project.accent }}>memorable.</span>
                </div>
                <p className="mt-2 max-w-[200px] text-[8px] leading-4 text-slate-500">
                  Discover event experiences created around your special
                  moments.
                </p>
                <div
                  className="mt-4 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[8px] font-bold text-white"
                  style={{ backgroundColor: project.accent }}
                >
                  Explore experiences <ArrowIcon />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {["Celebrate", "Connect", "Create"].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-lg p-2"
                      style={{
                        backgroundColor: index === 1 ? "#F7F1FF" : "#F8F9FC",
                      }}
                    >
                      <div
                        className="mb-2 h-7 rounded-md"
                        style={{
                          backgroundColor: [
                            "#E6D5FC",
                            "#D8C7F7",
                            "#F4D9E8",
                          ][index],
                        }}
                      />
                      <div className="text-[8px] font-bold text-slate-700">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {isArchitecture && (
              <>
                <div className="text-[8px] font-semibold tracking-[0.16em] text-slate-400">
                  SPACES WITH PURPOSE
                </div>
                <div className="mt-2 max-w-[220px] text-[24px] font-black leading-[1.05] tracking-tight text-slate-900">
                  Design that
                  <br />
                  <span style={{ color: project.accent }}>speaks.</span>
                </div>
                <div className="mt-4 flex h-24 items-end gap-2 overflow-hidden rounded-lg bg-slate-100 px-3 pt-3">
                  <div className="h-[78%] w-[28%] bg-slate-300" />
                  <div className="h-full w-[28%] bg-slate-200" />
                  <div className="h-[60%] w-[28%] bg-slate-400" />
                  <div className="h-[90%] w-[16%] bg-slate-300" />
                </div>
                <div className="mt-3 flex justify-between">
                  <div className="h-2 w-24 rounded bg-slate-200" />
                  <div
                    className="h-2 w-12 rounded"
                    style={{ backgroundColor: project.accent }}
                  />
                </div>
              </>
            )}

            {isCommerce && (
              <>
                <div className="text-[8px] font-semibold tracking-[0.16em] text-slate-400">
                  THE CURATED EDIT
                </div>
                <div className="mt-2 text-[22px] font-black tracking-tight text-slate-900">
                  Find your next
                  <br />
                  <span style={{ color: project.accent }}>favourite.</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    ["#EEDBCB", "#BB9C83"],
                    ["#E6E5F3", "#AAA6D2"],
                    ["#D8E6DB", "#8CA891"],
                  ].map(([background, productColor]) => (
                    <div key={background}>
                      <div
                        className="flex h-16 items-center justify-center rounded-lg"
                        style={{ backgroundColor: background }}
                      >
                        <div
                          className="h-10 w-7 rounded-t-xl rounded-b-md"
                          style={{ backgroundColor: productColor }}
                        />
                      </div>
                      <div className="mt-2 h-1.5 w-full rounded bg-slate-200" />
                      <div className="mt-1.5 h-1.5 w-1/2 rounded bg-slate-100" />
                    </div>
                  ))}
                </div>
              </>
            )}

            {isFinance && (
              <>
                <div className="text-[8px] font-semibold tracking-[0.16em] text-slate-400">
                  YOUR OVERVIEW
                </div>
                <div className="mt-2 text-[19px] font-black tracking-tight text-slate-900">
                  Dashboard
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {["Revenue", "Activity", "Growth"].map((item) => (
                    <div key={item} className="rounded-md bg-slate-50 p-2">
                      <div className="text-[7px] text-slate-400">{item}</div>
                      <div className="mt-1 text-[10px] font-bold text-slate-800">
                        --
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex h-16 items-end gap-2 rounded-lg bg-slate-50 px-3 py-2">
                  {[35, 52, 42, 74, 60, 88, 67, 100, 78].map((height, i) => (
                    <div
                      key={`${height}-${i}`}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${height}%`,
                        backgroundColor:
                          i === 7 ? project.accent : `${project.accent}45`,
                      }}
                    />
                  ))}
                </div>
              </>
            )}

            {isWellness && (
              <>
                <div className="text-[8px] font-semibold tracking-[0.16em] text-slate-400">
                  MAKE SPACE FOR YOU
                </div>
                <div className="mt-2 text-[23px] font-black leading-[1.05] tracking-tight text-slate-900">
                  A little more
                  <br />
                  <span style={{ color: project.accent }}>balance.</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ backgroundColor: project.color }}
                  >
                    <SparkleIcon />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-full rounded bg-slate-100" />
                    <div className="h-2 w-4/5 rounded bg-slate-100" />
                    <div className="h-2 w-3/5 rounded bg-slate-100" />
                  </div>
                </div>
                <div
                  className="mt-4 h-7 w-28 rounded-lg"
                  style={{ backgroundColor: project.accent }}
                />
              </>
            )}

            {!isEvent &&
              !isArchitecture &&
              !isCommerce &&
              !isFinance &&
              !isWellness && (
                <>
                  <div className="text-[8px] font-semibold tracking-[0.16em] text-slate-400">
                    WORK SMARTER
                  </div>
                  <div className="mt-2 text-[23px] font-black leading-[1.05] tracking-tight text-slate-900">
                    Focus on
                    <br />
                    <span style={{ color: project.accent }}>what matters.</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    {[
                      ["Plan the week", "72%"],
                      ["Design review", "48%"],
                      ["Project launch", "86%"],
                    ].map(([item, width]) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-lg border border-slate-100 p-2"
                      >
                        <div
                          className="h-3 w-3 rounded"
                          style={{ backgroundColor: project.color }}
                        />
                        <span className="flex-1 text-[8px] font-semibold text-slate-700">
                          {item}
                        </span>
                        <div className="h-1.5 w-12 rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width,
                              backgroundColor: project.accent,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 rounded-full border border-white/80 bg-white/85 px-3 py-1.5 text-[9px] font-bold tracking-wide text-slate-600 shadow-sm backdrop-blur sm:bottom-5 sm:left-5">
        UI CONCEPT PREVIEW
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-3 backdrop-blur-sm sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="my-auto w-full max-w-3xl overflow-hidden rounded-[24px] bg-white shadow-2xl sm:rounded-[28px]"
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-7">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
            Project overview
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-2xl text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            ×
          </button>
        </div>

        <div className="grid gap-6 p-5 sm:p-8 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div
              className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl"
              style={{ backgroundColor: project.color }}
            >
              <div className="px-4 text-center">
                <div
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl text-2xl font-black text-white shadow-lg"
                  style={{ backgroundColor: project.accent }}
                >
                  {project.initials}
                </div>
                <div className="mt-4 text-xs font-bold tracking-[0.15em] text-slate-500">
                  {project.label}
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-800">
                  {project.title}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  {project.year}
                </div>
              </div>
            </div>

            <h3 className="mb-3 mt-5 text-sm font-bold text-slate-900">
              Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {service}
                </span>
              ))}
            </div>

            <h3 className="mb-3 mt-5 text-sm font-bold text-slate-900">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              {project.category} · {project.year}
            </div>

            <h2
              id="project-modal-title"
              className="mt-3 text-3xl font-black tracking-tight text-slate-950"
            >
              {project.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {project.description}
            </p>

            <div className="mt-6 space-y-5">
              {[
                ["The challenge", project.challenge],
                ["Our approach", project.solution],
                ["Project status & outcome", project.outcome],
              ].map(([heading, content]) => (
                <div key={heading}>
                  <h3 className="text-sm font-bold text-slate-900">
                    {heading}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    {content}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              onClick={onClose}
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 sm:w-auto"
            >
              Discuss a similar project <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [search, setSearch] = useState("");

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const visibleProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;

    const query = search.trim().toLowerCase();

    const searchableText = [
      project.title,
      project.category,
      project.description,
      project.year,
      project.label,
      ...project.services,
      ...project.technologies,
    ]
      .join(" ")
      .toLowerCase();

    return matchesCategory && (!query || searchableText.includes(query));
  });

  const featuredProject = projects.find((project) => project.featured);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate border-b border-slate-100">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at 12% 12%, rgba(129,140,248,0.13), transparent 35%), radial-gradient(ellipse at 88% 22%, rgba(196,181,253,0.20), transparent 34%)",
          }}
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/85 px-3.5 py-2 text-xs font-bold tracking-wide text-indigo-700 shadow-sm">
              <SparkleIcon />
              OUR WORK & CREATIVE THINKING
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-5xl md:text-6xl lg:text-[68px]">
              Ideas deserve
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                extraordinary
              </span>
              <br />
              execution.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore digital experiences, modern website concepts and
              application interfaces designed around clarity, usability and
              business goals.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                Explore our work <ArrowIcon />
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-indigo-200 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                Start a project <ArrowIcon diagonal />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Business-focused design
              </span>
              <span>Responsive experiences</span>
              <span>Modern technology</span>
            </div>
          </div>

          {featuredProject && (
            <button
              type="button"
              onClick={() => setSelectedProject(featuredProject)}
              className="group relative w-full rounded-[28px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-4"
              aria-label={`View ${featuredProject.title} project details`}
            >
              <div className="absolute -inset-3 -z-10 rounded-[34px] bg-gradient-to-br from-indigo-100 via-violet-100 to-fuchsia-100 blur-xl transition duration-500 group-hover:blur-2xl" />
              <div className="rounded-[28px] border border-white bg-white p-3 shadow-[0_24px_80px_rgba(56,45,110,0.13)] sm:p-4">
                <div className="flex items-center justify-between gap-3 px-2 pb-4 pt-2">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">
                      Featured project
                    </div>
                    <div className="mt-1 text-base font-bold text-slate-900">
                      {featuredProject.title}
                    </div>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-700">
                    <ArrowIcon diagonal />
                  </span>
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <BrowserPreview project={featuredProject} />
                </div>
                <div className="flex items-center justify-between gap-4 px-2 pb-2 pt-4">
                  <p className="text-xs leading-5 text-slate-500">
                    {featuredProject.description}
                  </p>
                  <span className="shrink-0 rounded-full bg-violet-50 px-3 py-1.5 text-[10px] font-bold text-violet-700">
                    View case
                  </span>
                </div>
              </div>
            </button>
          )}
        </div>
      </section>

      {/* SUMMARY */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { value: "01", label: "Featured project" },
            { value: "06", label: "Portfolio concepts" },
            { value: "04", label: "Project categories" },
            { value: "100%", label: "Responsive approach" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:p-5"
            >
              <div className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                {item.value}
              </div>
              <div className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs leading-5 text-slate-400">
          Portfolio previews include illustrative concepts. These examples do
          not imply verified client results or completed deployments.
        </p>
      </section>

      {/* PROJECT GALLERY */}
      <section
        id="projects"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600">
              SELECTED WORK
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] text-slate-950 sm:text-4xl md:text-5xl">
              Digital work with
              <span className="text-indigo-600"> purpose.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Browse website designs, application concepts and digital
              experiences. Filter the collection to find work relevant to your
              next idea.
            </p>
          </div>

          <label className="relative block w-full lg:max-w-xs">
            <span className="sr-only">Search projects</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            >
              <circle
                cx="10.8"
                cy="10.8"
                r="6.8"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="m16 16 4 4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search projects or technologies"
              className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
            />
          </label>
        </div>

        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const count =
              category === "All"
                ? projects.length
                : projects.filter((project) => project.category === category)
                    .length;

            return (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 sm:px-5 sm:text-sm ${
                  isActive
                    ? "border-slate-950 bg-slate-950 text-white shadow-md shadow-slate-900/10"
                    : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              >
                {category}
                <span className="ml-2 opacity-70">{count}</span>
              </button>
            );
          })}
        </div>

        <div
          aria-live="polite"
          className="mb-4 mt-5 text-xs text-slate-500"
        >
          Showing {visibleProjects.length}{" "}
          {visibleProjects.length === 1 ? "project" : "projects"}
        </div>

        {visibleProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                className="group flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-[0_24px_65px_rgba(41,44,90,0.10)]"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View ${project.title} project details`}
                  className="relative block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500"
                >
                  <BrowserPreview project={project} />
                  <span className="absolute right-7 top-7 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 opacity-0 shadow-md transition duration-300 group-hover:opacity-100">
                    <ArrowIcon diagonal />
                  </span>
                </button>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-[10px] font-bold text-indigo-700">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-medium text-slate-400">
                      {project.year}
                    </span>
                    {project.featured && (
                      <span className="rounded-full bg-amber-50 px-2.5 py-1.5 text-[10px] font-bold text-amber-700">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-xl font-black tracking-tight text-slate-950 transition group-hover:text-indigo-700">
                    {project.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-slate-100 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 transition hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-4"
                    >
                      Explore project <ArrowIcon />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
              <SparkleIcon />
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900">
              No matching projects
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Try a different keyword or reset the category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-5 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* PROCESS */}
      <section className="border-y border-slate-100 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600">
              HOW WE APPROACH PROJECTS
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
              From first idea to
              <span className="text-indigo-600"> launch.</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              A structured process helps turn your business requirements into a
              clear digital experience.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discover",
                description:
                  "Understand your goals, audience, requirements and priorities.",
              },
              {
                number: "02",
                title: "Design",
                description:
                  "Plan the user journey, visual direction and page structure.",
              },
              {
                number: "03",
                title: "Develop",
                description:
                  "Build a responsive experience with maintainable components.",
              },
              {
                number: "04",
                title: "Deliver",
                description:
                  "Test the agreed scope and prepare for deployment and handover.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 transition hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-950/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black tracking-tight text-indigo-100">
                    {step.number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="relative isolate overflow-hidden rounded-[30px] bg-slate-950 px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 -z-10 h-80 w-80 rounded-full bg-indigo-500/30 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/4 -z-10 h-72 w-72 rounded-full bg-violet-500/20 blur-[90px]"
          />

          <div className="grid items-center gap-9 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-indigo-200">
                <SparkleIcon />
                YOUR IDEA COULD BE NEXT
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                Have a vision?
                <br />
                Let&apos;s build something
                <span className="text-indigo-300"> meaningful.</span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Tell us about your business, the problem you want to solve and
                the digital experience you want to create.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Discuss your project <ArrowIcon />
              </Link>
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Explore services <ArrowIcon diagonal />
              </Link>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-5 text-xs leading-5 text-slate-400">
            Clear scope. Thoughtful design. Responsive development.
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
        />
      )}
    </main>
  );
}
