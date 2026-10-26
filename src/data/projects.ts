
export type ProjectCategory =
  | "Websites"
  | "Web Applications"
  | "UI/UX Design"
  | "E-commerce";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
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
}

export const projectCategories = [
  "All",
  "Websites",
  "Web Applications",
  "UI/UX Design",
  "E-commerce",
] as const;

export const projects: Project[] = [
  {
    id: 1,
    title: "Fluffy Event",
    category: "Web Applications",
    description:
      "An event management experience designed to simplify event planning, package discovery, and customer enquiries.",
    year: "2026",
    color: "#F4EAFE",
    accent: "#8B5CF6",
    label: "EVENT EXPERIENCE",
    initials: "FE",
    services: [
      "Web Development",
      "Responsive UI",
      "Booking Experience",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    challenge:
      "Create a polished digital experience where customers can explore event packages and understand the next steps.",
    solution:
      "Build a responsive interface with clear package presentation, structured content, and prominent enquiry actions.",
    outcome:
      "A concept for presenting event services and guiding visitors towards an enquiry. Performance and conversion improvements should be measured after launch.",
    featured: true,
  },
  {
    id: 2,
    title: "Architecture Studio",
    category: "Websites",
    description:
      "A refined portfolio concept for an architecture and construction business, focused on projects, credibility, and enquiries.",
    year: "Concept",
    color: "#E7F0FF",
    accent: "#356AE6",
    label: "ARCHITECTURE",
    initials: "AS",
    services: [
      "Website Design",
      "Project Gallery",
      "SEO Structure",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
    ],
    challenge:
      "Present construction services and project work in a premium, easy-to-navigate format.",
    solution:
      "Use an editorial layout, spacious project previews, clear service sections, and contact-focused navigation.",
    outcome:
      "A visual direction for a professional architecture website. This is a concept preview, not a claim of a completed client deployment.",
  },
  {
    id: 3,
    title: "Commerce Atelier",
    category: "E-commerce",
    description:
      "A storefront concept with product discovery, clear product cards, and a streamlined shopping journey.",
    year: "Concept",
    color: "#FCEBDD",
    accent: "#D97735",
    label: "DIGITAL COMMERCE",
    initials: "CA",
    services: [
      "Storefront UI",
      "Product Discovery",
      "Mobile Layout",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    challenge:
      "Make a product catalogue attractive, organised, and easy to browse across screen sizes.",
    solution:
      "Create a storefront concept with product-led visuals, category navigation, and a clear action hierarchy.",
    outcome:
      "A storefront design direction. Payments, inventory, checkout, and order management require backend integrations.",
  },
  {
    id: 4,
    title: "Finova Dashboard",
    category: "UI/UX Design",
    description:
      "A finance dashboard concept bringing key metrics, transaction summaries, and data visualisation into one interface.",
    year: "Concept",
    color: "#DDF7EF",
    accent: "#12866A",
    label: "FINTECH DASHBOARD",
    initials: "FD",
    services: [
      "Dashboard UI",
      "Information Architecture",
      "Design System",
    ],
    technologies: ["React", "TypeScript", "Data UI"],
    challenge:
      "Organise information-heavy screens so users can scan important figures without losing context.",
    solution:
      "Use a clear visual hierarchy, modular metric cards, simple navigation, and consistent spacing.",
    outcome:
      "A dashboard UI concept. Live financial data, authentication, and permissions are not included in this visual preview.",
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
    services: [
      "Brand-led UI",
      "Website Design",
      "Mobile Experience",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
    ],
    challenge:
      "Balance a distinctive brand identity with practical service information and straightforward navigation.",
    solution:
      "Combine soft colour accents, editorial typography, and focused calls to action in a responsive layout.",
    outcome:
      "A concept for a service-led brand website, ready for further content and business-specific customisation.",
  },
  {
    id: 6,
    title: "TaskFlow Workspace",
    category: "Web Applications",
    description:
      "A productivity application concept featuring a structured workspace, task cards, and clear status indicators.",
    year: "Concept",
    color: "#E4EDFF",
    accent: "#4F65D9",
    label: "PRODUCTIVITY",
    initials: "TF",
    services: [
      "Application UI",
      "Component Design",
      "Responsive Layout",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    challenge:
      "Present tasks and workflow states clearly while keeping the interface compact and easy to navigate.",
    solution:
      "Design a modular workspace with visual status cues, structured cards, and reusable interface patterns.",
    outcome:
      "A frontend application concept. Persistent tasks, collaboration, and user accounts require a connected backend.",
  },
];

export default projects;
