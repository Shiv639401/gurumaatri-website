
import {
  Code2,
  Palette,
  Smartphone,
  Search,
  ShoppingCart,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory =
  | "Development"
  | "Design"
  | "Growth"
  | "Automation";

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ServiceCategory;
  icon: LucideIcon;
  features: string[];
  technologies: string[];
  benefits: string[];
  href: string;
  featured?: boolean;
}

export const serviceCategories = [
  "All",
  "Development",
  "Design",
  "Growth",
  "Automation",
] as const;

export const services: Service[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Design & Development",
    shortDescription:
      "Modern, responsive websites built around your brand and business goals.",
    description:
      "We create tailored website experiences that combine thoughtful design, responsive layouts, clear navigation, and maintainable frontend development.",
    category: "Development",
    icon: Code2,
    features: [
      "Custom business websites",
      "Responsive page layouts",
      "Landing pages",
      "Website redesign",
      "Performance optimisation",
      "SEO-friendly page structure",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
    ],
    benefits: [
      "Consistent brand presentation",
      "Better cross-device usability",
      "Clearer customer journeys",
      "Maintainable website structure",
    ],
    href: "/services",
    featured: true,
  },
  {
    id: "web-applications",
    number: "02",
    title: "Web Application Development",
    shortDescription:
      "Interactive digital products designed for real business workflows.",
    description:
      "We develop web application interfaces around your requirements, from interactive dashboards to custom business tools. Backend systems and integrations are scoped separately when required.",
    category: "Development",
    icon: Workflow,
    features: [
      "Interactive application interfaces",
      "Dashboard and admin UI",
      "Reusable components",
      "API integration",
      "Application state management",
      "Responsive application layouts",
    ],
    technologies: [
      "React",
      "TypeScript",
      "REST APIs",
      "Modern JavaScript",
    ],
    benefits: [
      "Streamlined user workflows",
      "Reusable interface components",
      "Flexible feature development",
      "Consistent application experience",
    ],
    href: "/services",
    featured: true,
  },
  {
    id: "ui-ux-design",
    number: "03",
    title: "UI/UX Design",
    shortDescription:
      "Intuitive interfaces that make digital experiences clearer and easier to use.",
    description:
      "We plan and design user experiences with a focus on information hierarchy, accessibility, consistency, and straightforward interaction patterns.",
    category: "Design",
    icon: Palette,
    features: [
      "User flows and wireframes",
      "Interface design",
      "Responsive design systems",
      "Prototypes",
      "Website redesign concepts",
      "Usability improvements",
    ],
    technologies: [
      "Figma",
      "Design Systems",
      "Responsive Design",
      "Accessibility Principles",
    ],
    benefits: [
      "Clearer navigation",
      "Consistent visual language",
      "More understandable interfaces",
      "Improved usability",
    ],
    href: "/services",
    featured: true,
  },
  {
    id: "mobile-responsive-design",
    number: "04",
    title: "Mobile-Responsive Solutions",
    shortDescription:
      "Digital experiences designed to adapt across phones, tablets, and desktops.",
    description:
      "We build and refine responsive layouts so that navigation, content, images, and interactive elements remain usable across a range of screen sizes.",
    category: "Development",
    icon: Smartphone,
    features: [
      "Mobile-first layouts",
      "Responsive navigation",
      "Touch-friendly interactions",
      "Flexible images and grids",
      "Cross-browser checks",
      "Viewport-specific refinements",
    ],
    technologies: [
      "CSS",
      "React",
      "Tailwind CSS",
      "Responsive Testing",
    ],
    benefits: [
      "Consistent multi-device experience",
      "More accessible navigation",
      "Improved content readability",
      "Fewer layout inconsistencies",
    ],
    href: "/services",
  },
  {
    id: "seo-optimisation",
    number: "05",
    title: "SEO & Digital Growth",
    shortDescription:
      "A stronger technical foundation to help search engines understand your website.",
    description:
      "We improve on-page and technical SEO foundations through structured content, meaningful metadata, crawlability checks, and performance-conscious implementation.",
    category: "Growth",
    icon: Search,
    features: [
      "Page titles and metadata",
      "Heading structure review",
      "Internal linking improvements",
      "Image alternative text",
      "Sitemap and robots checks",
      "Technical SEO review",
    ],
    technologies: [
      "Google Search Console",
      "Web Performance Tools",
      "Structured Metadata",
      "Analytics Integrations",
    ],
    benefits: [
      "Clearer page structure",
      "Improved search engine discoverability",
      "More useful page metadata",
      "Better technical visibility",
    ],
    href: "/services",
  },
  {
    id: "ecommerce-development",
    number: "06",
    title: "E-commerce Development",
    shortDescription:
      "Online storefront experiences built around product discovery and customer usability.",
    description:
      "We design storefront interfaces that help customers browse products, understand product details, and move through a clear shopping journey. Payments and order management depend on the chosen platform and scope.",
    category: "Development",
    icon: ShoppingCart,
    features: [
      "Storefront design",
      "Product catalogue interfaces",
      "Category and product pages",
      "Cart experience",
      "Responsive shopping layouts",
      "Third-party commerce integration",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Commerce APIs",
      "Payment Provider Integrations",
    ],
    benefits: [
      "Organised product presentation",
      "Simpler product discovery",
      "Mobile-friendly shopping",
      "A consistent storefront experience",
    ],
    href: "/services",
  },
  {
    id: "business-automation",
    number: "07",
    title: "Business Workflow Automation",
    shortDescription:
      "Reduce repetitive manual work by connecting tools and simplifying workflows.",
    description:
      "We help identify repetitive business tasks and plan suitable automation or integrations. The available solutions depend on your current tools, data, security requirements, and workflow.",
    category: "Automation",
    icon: Workflow,
    features: [
      "Workflow discovery",
      "Third-party tool integrations",
      "Form and lead workflow planning",
      "API-based automation",
      "Process documentation",
      "Error-handling considerations",
    ],
    technologies: [
      "REST APIs",
      "Webhooks",
      "Automation Platforms",
      "TypeScript",
    ],
    benefits: [
      "Less repetitive manual work",
      "More consistent workflows",
      "Better information handoffs",
      "Clearer process visibility",
    ],
    href: "/services",
  },
];

export default services;
