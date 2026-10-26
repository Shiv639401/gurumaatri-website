
export type NavigationItem = {
  label: string;
  to: string;
};

export type ServiceNavigationItem = {
  number: string;
  title: string;
  description: string;
  to: string;
  icon: "web" | "app" | "design" | "growth";
};

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "Case Studies",
    to: "/case-studies",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Blog",
    to: "/blog",
  },
];

export const services: ServiceNavigationItem[] = [
  {
    number: "01",
    title: "Website Development",
    description: "Premium websites built for your business.",
    to: "/services",
    icon: "web",
  },
  {
    number: "02",
    title: "Web Applications",
    description: "Modern, scalable digital products.",
    to: "/services",
    icon: "app",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description: "Intuitive experiences people enjoy.",
    to: "/services",
    icon: "design",
  },
  {
    number: "04",
    title: "SEO & Digital Growth",
    description: "Help the right customers find you.",
    to: "/services",
    icon: "growth",
  },
];

export const utilityNavigation: NavigationItem[] = [
  {
    label: "Pricing",
    to: "/pricing",
  },
  {
    label: "Project Estimator",
    to: "/estimator",
  },
  {
    label: "AI Consultant",
    to: "/ai-consultant",
  },
  {
    label: "FAQs",
    to: "/faq",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export default navigation;
