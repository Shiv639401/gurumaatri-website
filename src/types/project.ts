
/**
 * GuruMaatri Innovations
 * Project Portfolio Types & Data
 *
 * File: src/types/project.ts
 */

/* ─────────────────────────────────────────────
   Project Types
───────────────────────────────────────────── */

export type ProjectId = string;

export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "planned";

export type ProjectCategory =
  | "Web Development"
  | "Web Application"
  | "E-commerce"
  | "Mobile Application"
  | "UI/UX Design"
  | "AI & Automation"
  | "Digital Marketing"
  | "Other";

export type ProjectFilterCategory =
  | "All"
  | ProjectCategory;

export type ProjectLinkType =
  | "live"
  | "github"
  | "case-study"
  | "demo";

export type ProjectLink = {
  type: ProjectLinkType;
  label: string;
  url: string;
  external?: boolean;
};

/* ─────────────────────────────────────────────
   Technology Stack
───────────────────────────────────────────── */

export interface ProjectTechnology {
  name: string;
  category?:
    | "frontend"
    | "backend"
    | "database"
    | "design"
    | "deployment"
    | "other";
}

/* ─────────────────────────────────────────────
   Project Metrics
───────────────────────────────────────────── */

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

/* ─────────────────────────────────────────────
   Main Project Interface
───────────────────────────────────────────── */

export interface Project {
  id: ProjectId;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;

  category: ProjectCategory;
  status: ProjectStatus;

  client?: string;
  industry?: string;
  duration?: string;
  year?: number;

  thumbnail: string;
  image?: string;
  gallery?: string[];
  alt?: string;

  technologies: ProjectTechnology[];
  features: string[];
  challenges?: string[];
  solutions?: string[];
  results?: ProjectMetric[];

  links?: ProjectLink[];

  featured: boolean;
  published: boolean;
  order: number;

  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

/* ─────────────────────────────────────────────
   Project Card Interface
───────────────────────────────────────────── */

export interface ProjectCardData {
  id: ProjectId;
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  thumbnail: string;
  alt: string;
  technologies: string[];
  featured: boolean;
  href?: string;
  liveUrl?: string;
}

/* ─────────────────────────────────────────────
   Project Filtering & Sorting
───────────────────────────────────────────── */

export interface ProjectFilters {
  category?: ProjectFilterCategory;
  status?: ProjectStatus;
  featured?: boolean;
  search?: string;
}

export type ProjectSortOption =
  | "featured"
  | "newest"
  | "oldest"
  | "alphabetical";

/* ─────────────────────────────────────────────
   Project Categories
───────────────────────────────────────────── */

export const PROJECT_CATEGORIES: ProjectFilterCategory[] = [
  "All",
  "Web Development",
  "Web Application",
  "E-commerce",
  "Mobile Application",
  "UI/UX Design",
  "AI & Automation",
  "Digital Marketing",
  "Other",
];

/* ─────────────────────────────────────────────
   Project Status Labels
───────────────────────────────────────────── */

export const PROJECT_STATUS_LABELS: Record<
  ProjectStatus,
  string
> = {
  completed: "Completed",
  "in-progress": "In Progress",
  planned: "Planned",
};

/* ─────────────────────────────────────────────
   Portfolio Data
───────────────────────────────────────────── */

/**
 * Replace demo content with verified client projects,
 * real screenshots, and actual project URLs before publishing.
 */

export const PROJECTS: Project[] = [
  {
    id: "gurumaatri-website",
    slug: "gurumaatri-innovations-website",
    title: "GuruMaatri Innovations",
    shortDescription:
      "A modern digital presence for a technology and innovation company.",
    description:
      "A responsive company website designed to showcase digital services, communicate the brand, and help potential clients explore project solutions.",
    category: "Web Development",
    status: "in-progress",
    client: "GuruMaatri Innovations",
    industry: "Technology",
    thumbnail: "/images/projects/gurumaatri-website.webp",
    image: "/images/projects/gurumaatri-website.webp",
    alt: "GuruMaatri Innovations company website preview",
    technologies: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Vite", category: "deployment" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "React Router", category: "frontend" },
    ],
    features: [
      "Responsive layouts for desktop, tablet, and mobile",
      "Reusable React components",
      "Service and project presentation",
      "Contact and inquiry experience",
      "Search-engine-friendly page structure",
    ],
    links: [
      {
        type: "live",
        label: "Visit Website",
        url: "https://www.gurumaatriinnovations.in",
        external: true,
      },
    ],
    featured: true,
    published: true,
    order: 1,
  },
];

/* ─────────────────────────────────────────────
   Featured Projects
───────────────────────────────────────────── */

export const FEATURED_PROJECTS: Project[] =
  PROJECTS.filter(
    (project) => project.featured && project.published,
  ).sort((a, b) => a.order - b.order);

/* ─────────────────────────────────────────────
   Published Projects
───────────────────────────────────────────── */

export const PUBLISHED_PROJECTS: Project[] =
  PROJECTS.filter((project) => project.published).sort(
    (a, b) => a.order - b.order,
  );

/* ─────────────────────────────────────────────
   Find Project
───────────────────────────────────────────── */

export function getProjectBySlug(
  slug: string,
): Project | undefined {
  return PROJECTS.find(
    (project) =>
      project.slug === slug && project.published,
  );
}

export function getProjectById(
  id: ProjectId,
): Project | undefined {
  return PROJECTS.find(
    (project) => project.id === id,
  );
}

/* ─────────────────────────────────────────────
   Filter Projects
───────────────────────────────────────────── */

export function filterProjects(
  projects: Project[],
  filters: ProjectFilters = {},
): Project[] {
  const searchTerm = filters.search
    ?.trim()
    .toLowerCase();

  return projects.filter((project) => {
    if (!project.published) {
      return false;
    }

    if (
      filters.category &&
      filters.category !== "All" &&
      project.category !== filters.category
    ) {
      return false;
    }

    if (
      filters.status &&
      project.status !== filters.status
    ) {
      return false;
    }

    if (
      filters.featured !== undefined &&
      project.featured !== filters.featured
    ) {
      return false;
    }

    if (searchTerm) {
      const searchableText = [
        project.title,
        project.shortDescription,
        project.description,
        project.category,
        project.industry ?? "",
        ...project.technologies.map(
          (technology) => technology.name,
        ),
      ]
        .join(" ")
        .toLowerCase();

      if (!searchableText.includes(searchTerm)) {
        return false;
      }
    }

    return true;
  });
}

/* ─────────────────────────────────────────────
   Sort Projects
───────────────────────────────────────────── */

export function sortProjects(
  projects: Project[],
  sortBy: ProjectSortOption = "featured",
): Project[] {
  const sorted = [...projects];

  switch (sortBy) {
    case "newest":
      return sorted.sort(
        (a, b) => (b.year ?? 0) - (a.year ?? 0),
      );

    case "oldest":
      return sorted.sort(
        (a, b) => (a.year ?? 0) - (b.year ?? 0),
      );

    case "alphabetical":
      return sorted.sort((a, b) =>
        a.title.localeCompare(b.title),
      );

    case "featured":
    default:
      return sorted.sort(
        (a, b) =>
          Number(b.featured) - Number(a.featured) ||
          a.order - b.order,
      );
  }
}

/* ─────────────────────────────────────────────
   Convert Project to Card Data
───────────────────────────────────────────── */

export function toProjectCardData(
  project: Project,
): ProjectCardData {
  const liveLink = project.links?.find(
    (link) => link.type === "live",
  );

  return {
    id: project.id,
    slug: project.slug,
    title: project.title,
    description: project.shortDescription,
    category: project.category,
    thumbnail: project.thumbnail,
    alt: project.alt ?? project.title,
    technologies: project.technologies.map(
      (technology) => technology.name,
    ),
    featured: project.featured,
    href: `/projects/${project.slug}`,
    liveUrl: liveLink?.url,
  };
}
