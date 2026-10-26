
/**
 * GuruMaatri Innovations
 * Service Types, Data & Utility Functions
 *
 * File: src/types/service.ts
 */

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */

export type ServiceId = string;

export type ServiceStatus =
  | "active"
  | "coming-soon"
  | "inactive";

export type ServiceCategory =
  | "Web Development"
  | "App Development"
  | "UI/UX Design"
  | "AI & Automation"
  | "E-commerce"
  | "Digital Marketing"
  | "Cloud & DevOps"
  | "Consulting";

export type ServiceFilterCategory =
  | "All"
  | ServiceCategory;

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceTechnology {
  name: string;
  category?:
    | "frontend"
    | "backend"
    | "database"
    | "design"
    | "cloud"
    | "deployment"
    | "automation"
    | "other";
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServicePricing {
  label: string;
  startingPrice?: number;
  currency?: string;
  billingPeriod?: "project" | "hour" | "month";
  description?: string;
  customQuote?: boolean;
}

export interface ServiceLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Service {
  id: ServiceId;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;

  category: ServiceCategory;
  status: ServiceStatus;

  icon: string;
  image?: string;
  alt?: string;

  features: ServiceFeature[];
  technologies: ServiceTechnology[];
  benefits: string[];
  process: ServiceProcessStep[];

  pricing?: ServicePricing;
  faqs?: ServiceFAQ[];
  links?: ServiceLink[];

  featured: boolean;
  order: number;

  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface ServiceCardData {
  id: ServiceId;
  slug: string;
  title: string;
  description: string;
  category: ServiceCategory;
  icon: string;
  image?: string;
  features: string[];
  featured: boolean;
  href: string;
}

export interface ServiceFilters {
  category?: ServiceFilterCategory;
  status?: ServiceStatus;
  featured?: boolean;
  search?: string;
}

export type ServiceSortOption =
  | "featured"
  | "alphabetical"
  | "category";

/* ─────────────────────────────────────────────
   Categories
───────────────────────────────────────────── */

export const SERVICE_CATEGORIES: ServiceFilterCategory[] = [
  "All",
  "Web Development",
  "App Development",
  "UI/UX Design",
  "AI & Automation",
  "E-commerce",
  "Digital Marketing",
  "Cloud & DevOps",
  "Consulting",
];

/* ─────────────────────────────────────────────
   Service Data
───────────────────────────────────────────── */

/**
 * Update the descriptions and technologies to match
 * the services your company actually delivers.
 */

export const SERVICES: Service[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "Modern, responsive websites built around your business goals.",
    description:
      "Build fast, accessible, responsive websites that communicate your brand, provide a smooth user experience, and support business growth.",
    category: "Web Development",
    status: "active",
    icon: "Code2",
    features: [
      {
        title: "Responsive Design",
        description:
          "Layouts designed for mobile, tablet, and desktop screens.",
        icon: "MonitorSmartphone",
      },
      {
        title: "Performance Optimization",
        description:
          "Efficient assets and rendering practices for a smoother experience.",
        icon: "Gauge",
      },
      {
        title: "SEO-Friendly Structure",
        description:
          "Semantic page structure and technical SEO foundations.",
        icon: "Search",
      },
      {
        title: "Maintainable Code",
        description:
          "Reusable components and a clear project structure.",
        icon: "Layers",
      },
    ],
    technologies: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Vite", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Node.js", category: "backend" },
    ],
    benefits: [
      "Consistent experience across screen sizes",
      "Clear presentation of products and services",
      "Easier future maintenance and expansion",
      "A foundation for measurable business goals",
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description:
          "Understand your goals, audience, and website requirements.",
      },
      {
        step: 2,
        title: "Planning & Design",
        description:
          "Define page structure, user journeys, and visual direction.",
      },
      {
        step: 3,
        title: "Development",
        description:
          "Build responsive pages and integrate the agreed functionality.",
      },
      {
        step: 4,
        title: "Testing & Launch",
        description:
          "Check responsiveness, accessibility, and essential user flows before launch.",
      },
    ],
    faqs: [
      {
        question: "Will my website work on mobile devices?",
        answer:
          "The website is designed and tested for supported mobile, tablet, and desktop screen sizes.",
      },
      {
        question: "Can I update the website later?",
        answer:
          "Yes. The implementation can be structured to support future content and feature updates.",
      },
      {
        question: "How long does website development take?",
        answer:
          "Timelines depend on the number of pages, design complexity, integrations, and content readiness.",
      },
    ],
    featured: true,
    order: 1,
    seo: {
      title: "Web Development Services | GuruMaatri Innovations",
      description:
        "Explore responsive website development solutions from GuruMaatri Innovations.",
      keywords: [
        "web development",
        "responsive websites",
        "React development",
      ],
    },
  },

  {
    id: "app-development",
    slug: "app-development",
    title: "App Development",
    shortDescription:
      "Application experiences designed around real user needs.",
    description:
      "Plan and build application experiences with a focus on usability, maintainability, and the needs of your target audience.",
    category: "App Development",
    status: "active",
    icon: "Smartphone",
    features: [
      {
        title: "User-Centred Experience",
        description:
          "Application flows designed around user tasks and expectations.",
        icon: "Users",
      },
      {
        title: "API Integration",
        description:
          "Connect applications with compatible backend services and APIs.",
        icon: "Network",
      },
      {
        title: "Scalable Architecture",
        description:
          "Organize features to make future improvements easier.",
        icon: "Workflow",
      },
    ],
    technologies: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "REST APIs", category: "backend" },
      { name: "Node.js", category: "backend" },
    ],
    benefits: [
      "Convenient access to important workflows",
      "Consistent and intuitive user interactions",
      "Integration with suitable business systems",
    ],
    process: [
      {
        step: 1,
        title: "Requirements",
        description:
          "Identify target users, features, and technical constraints.",
      },
      {
        step: 2,
        title: "Experience Design",
        description:
          "Plan application navigation and key screens.",
      },
      {
        step: 3,
        title: "Implementation",
        description:
          "Develop the agreed features and integrations.",
      },
      {
        step: 4,
        title: "Quality Assurance",
        description:
          "Validate key workflows and supported devices.",
      },
    ],
    featured: true,
    order: 2,
  },

  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "Clear, thoughtful digital experiences that put users first.",
    description:
      "Create intuitive interfaces and user journeys that make digital products easier to understand and use.",
    category: "UI/UX Design",
    status: "active",
    icon: "Palette",
    features: [
      {
        title: "Wireframes",
        description:
          "Map page structure and key user interactions.",
        icon: "LayoutTemplate",
      },
      {
        title: "Visual Design",
        description:
          "Develop typography, spacing, colour, and component styles.",
        icon: "Palette",
      },
      {
        title: "Prototypes",
        description:
          "Explore important user flows before implementation.",
        icon: "MousePointerClick",
      },
    ],
    technologies: [
      { name: "Figma", category: "design" },
      { name: "Design Systems", category: "design" },
      { name: "Responsive Design", category: "design" },
    ],
    benefits: [
      "More understandable navigation",
      "Consistent visual language",
      "Early feedback on user journeys",
    ],
    process: [
      {
        step: 1,
        title: "Research",
        description:
          "Understand the audience and the problems the product must solve.",
      },
      {
        step: 2,
        title: "Wireframing",
        description:
          "Outline page layouts and user flows.",
      },
      {
        step: 3,
        title: "Visual Design",
        description:
          "Create the interface and reusable design components.",
      },
      {
        step: 4,
        title: "Handoff",
        description:
          "Prepare design specifications for implementation.",
      },
    ],
    featured: true,
    order: 3,
  },

  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI & Automation",
    shortDescription:
      "Practical automation for repetitive workflows and business tasks.",
    description:
      "Identify suitable workflows for automation and integrate AI-powered capabilities where they provide practical value.",
    category: "AI & Automation",
    status: "active",
    icon: "BrainCircuit",
    features: [
      {
        title: "Workflow Automation",
        description:
          "Reduce repetitive manual steps in supported processes.",
        icon: "Workflow",
      },
      {
        title: "AI Integrations",
        description:
          "Connect suitable AI services to defined product workflows.",
        icon: "BrainCircuit",
      },
      {
        title: "Process Monitoring",
        description:
          "Design appropriate logging and error-handling practices.",
        icon: "Activity",
      },
    ],
    technologies: [
      { name: "REST APIs", category: "backend" },
      { name: "TypeScript", category: "backend" },
      { name: "Python", category: "automation" },
      { name: "AI APIs", category: "automation" },
    ],
    benefits: [
      "Less repetitive manual work",
      "More consistent process execution",
      "Clearer opportunities to improve operations",
    ],
    process: [
      {
        step: 1,
        title: "Workflow Assessment",
        description:
          "Identify repetitive tasks and integration requirements.",
      },
      {
        step: 2,
        title: "Solution Design",
        description:
          "Select an appropriate automation approach.",
      },
      {
        step: 3,
        title: "Integration",
        description:
          "Implement the agreed workflow and error handling.",
      },
      {
        step: 4,
        title: "Evaluation",
        description:
          "Test reliability and review outcomes against agreed goals.",
      },
    ],
    featured: true,
    order: 4,
  },

  {
    id: "ecommerce-development",
    slug: "ecommerce-development",
    title: "E-commerce Development",
    shortDescription:
      "Online shopping experiences built for usability and growth.",
    description:
      "Develop online storefronts with clear product discovery, responsive shopping flows, and appropriate commerce integrations.",
    category: "E-commerce",
    status: "active",
    icon: "ShoppingCart",
    features: [
      {
        title: "Product Catalogues",
        description:
          "Organize product listings and categories.",
        icon: "Package",
      },
      {
        title: "Shopping Experience",
        description:
          "Build clear product, cart, and checkout journeys.",
        icon: "ShoppingBag",
      },
      {
        title: "Commerce Integrations",
        description:
          "Integrate supported payment and order-management services.",
        icon: "CreditCard",
      },
    ],
    technologies: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "REST APIs", category: "backend" },
      { name: "Payment APIs", category: "backend" },
    ],
    benefits: [
      "Accessible online product discovery",
      "A consistent shopping experience",
      "Integration with suitable commerce tools",
    ],
    process: [
      {
        step: 1,
        title: "Commerce Planning",
        description:
          "Define products, customer journeys, and business rules.",
      },
      {
        step: 2,
        title: "Storefront Design",
        description:
          "Design catalogue, product, cart, and checkout screens.",
      },
      {
        step: 3,
        title: "Integration",
        description:
          "Connect required commerce services and workflows.",
      },
      {
        step: 4,
        title: "Testing",
        description:
          "Test product discovery, checkout, and order flows.",
      },
    ],
    featured: true,
    order: 5,
  },

  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription:
      "A data-informed approach to reaching your online audience.",
    description:
      "Plan digital marketing activities around your audience, business objectives, and measurable campaign goals.",
    category: "Digital Marketing",
    status: "active",
    icon: "ChartNoAxesCombined",
    features: [
      {
        title: "SEO Foundations",
        description:
          "Improve site structure and content discoverability.",
        icon: "Search",
      },
      {
        title: "Campaign Planning",
        description:
          "Define audience, messaging, and campaign objectives.",
        icon: "Target",
      },
      {
        title: "Performance Reporting",
        description:
          "Review available campaign data against defined goals.",
        icon: "ChartNoAxesCombined",
      },
    ],
    technologies: [
      { name: "Google Analytics", category: "other" },
      { name: "Search Console", category: "other" },
      { name: "SEO Tools", category: "other" },
    ],
    benefits: [
      "Clearer marketing objectives",
      "Improved visibility into campaign performance",
      "More structured content and SEO planning",
    ],
    process: [
      {
        step: 1,
        title: "Audit",
        description:
          "Review the existing digital presence and available data.",
      },
      {
        step: 2,
        title: "Strategy",
        description:
          "Set priorities, audiences, and measurable objectives.",
      },
      {
        step: 3,
        title: "Execution",
        description:
          "Deliver the agreed content and campaign activities.",
      },
      {
        step: 4,
        title: "Measurement",
        description:
          "Review performance and identify improvement opportunities.",
      },
    ],
    featured: false,
    order: 6,
  },

  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortDescription:
      "Deployment and delivery workflows tailored to your application.",
    description:
      "Improve deployment workflows, environment configuration, and operational practices using suitable cloud and DevOps tools.",
    category: "Cloud & DevOps",
    status: "active",
    icon: "CloudCog",
    features: [
      {
        title: "Deployment Setup",
        description:
          "Configure a suitable deployment workflow.",
        icon: "CloudUpload",
      },
      {
        title: "CI/CD Workflows",
        description:
          "Automate appropriate build and delivery steps.",
        icon: "GitBranch",
      },
      {
        title: "Operational Reliability",
        description:
          "Establish practical checks and error visibility.",
        icon: "ShieldCheck",
      },
    ],
    technologies: [
      { name: "Git", category: "deployment" },
      { name: "GitHub Actions", category: "deployment" },
      { name: "Docker", category: "deployment" },
      { name: "Cloud Platforms", category: "cloud" },
    ],
    benefits: [
      "More repeatable deployments",
      "Clearer release workflows",
      "Better visibility into operational issues",
    ],
    process: [
      {
        step: 1,
        title: "Infrastructure Review",
        description:
          "Review the current application and hosting setup.",
      },
      {
        step: 2,
        title: "Workflow Planning",
        description:
          "Choose suitable build and deployment steps.",
      },
      {
        step: 3,
        title: "Configuration",
        description:
          "Implement the agreed environment and delivery workflow.",
      },
      {
        step: 4,
        title: "Verification",
        description:
          "Validate deployments and document the workflow.",
      },
    ],
    featured: false,
    order: 7,
  },

  {
    id: "technology-consulting",
    slug: "technology-consulting",
    title: "Technology Consulting",
    shortDescription:
      "Practical guidance for digital products and technology decisions.",
    description:
      "Evaluate project requirements, technology options, and implementation priorities to help teams make informed decisions.",
    category: "Consulting",
    status: "active",
    icon: "Lightbulb",
    features: [
      {
        title: "Technical Assessment",
        description:
          "Review requirements, constraints, and existing systems.",
        icon: "ClipboardCheck",
      },
      {
        title: "Architecture Guidance",
        description:
          "Compare implementation approaches and trade-offs.",
        icon: "Workflow",
      },
      {
        title: "Roadmap Planning",
        description:
          "Prioritize features and delivery milestones.",
        icon: "Route",
      },
    ],
    technologies: [
      { name: "Technical Architecture", category: "other" },
      { name: "API Design", category: "backend" },
      { name: "Performance Review", category: "other" },
    ],
    benefits: [
      "More informed technology decisions",
      "Clearer implementation priorities",
      "Better understanding of technical trade-offs",
    ],
    process: [
      {
        step: 1,
        title: "Initial Discussion",
        description:
          "Understand the business goals and current challenges.",
      },
      {
        step: 2,
        title: "Assessment",
        description:
          "Review requirements and relevant technical constraints.",
      },
      {
        step: 3,
        title: "Recommendations",
        description:
          "Present suitable approaches and trade-offs.",
      },
      {
        step: 4,
        title: "Action Plan",
        description:
          "Outline practical next steps and priorities.",
      },
    ],
    featured: false,
    order: 8,
  },
];

/* ─────────────────────────────────────────────
   Service Utilities
───────────────────────────────────────────── */

export const ACTIVE_SERVICES: Service[] = SERVICES
  .filter((service) => service.status === "active")
  .sort((a, b) => a.order - b.order);

export const FEATURED_SERVICES: Service[] = SERVICES
  .filter(
    (service) =>
      service.featured && service.status === "active",
  )
  .sort((a, b) => a.order - b.order);

export function getServiceById(
  id: ServiceId,
): Service | undefined {
  return SERVICES.find((service) => service.id === id);
}

export function getServiceBySlug(
  slug: string,
): Service | undefined {
  return SERVICES.find(
    (service) =>
      service.slug === slug && service.status === "active",
  );
}

export function filterServices(
  services: Service[],
  filters: ServiceFilters = {},
): Service[] {
  const searchTerm = filters.search?.trim().toLowerCase();

  return services.filter((service) => {
    if (service.status === "inactive") {
      return false;
    }

    if (
      filters.category &&
      filters.category !== "All" &&
      service.category !== filters.category
    ) {
      return false;
    }

    if (
      filters.status &&
      service.status !== filters.status
    ) {
      return false;
    }

    if (
      filters.featured !== undefined &&
      service.featured !== filters.featured
    ) {
      return false;
    }

    if (searchTerm) {
      const searchableText = [
        service.title,
        service.shortDescription,
        service.description,
        service.category,
        ...service.technologies.map((item) => item.name),
        ...service.features.map((item) => item.title),
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

export function sortServices(
  services: Service[],
  sortBy: ServiceSortOption = "featured",
): Service[] {
  const sorted = [...services];

  switch (sortBy) {
    case "alphabetical":
      return sorted.sort((a, b) =>
        a.title.localeCompare(b.title),
      );

    case "category":
      return sorted.sort(
        (a, b) =>
          a.category.localeCompare(b.category) ||
          a.order - b.order,
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

export function toServiceCardData(
  service: Service,
): ServiceCardData {
  return {
    id: service.id,
    slug: service.slug,
    title: service.title,
    description: service.shortDescription,
    category: service.category,
    icon: service.icon,
    image: service.image,
    features: service.features.map((feature) => feature.title),
    featured: service.featured,
    href: `/services/${service.slug}`,
  };
}
