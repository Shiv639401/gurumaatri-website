
export type FAQCategory =
  | "General"
  | "Services"
  | "Pricing & Payments"
  | "Process & Support";

export interface FAQItem {
  question: string;
  answer: string;
  category: FAQCategory;
}

export const faqCategories = [
  "All Questions",
  "General",
  "Services",
  "Pricing & Payments",
  "Process & Support",
] as const;

export const faqItems: FAQItem[] = [
  // General
  {
    category: "General",
    question: "What is GuruMaatri Innovations?",
    answer:
      "GuruMaatri Innovations focuses on digital solutions that help businesses strengthen their online presence through website development, web applications, UI/UX design, e-commerce solutions, and digital growth services.",
  },
  {
    category: "General",
    question: "Who can work with GuruMaatri Innovations?",
    answer:
      "We welcome enquiries from startups, entrepreneurs, small and medium-sized businesses, and established organizations looking to build, improve, or scale their digital presence.",
  },
  {
    category: "General",
    question: "How can I start a project?",
    answer:
      "Contact us with a brief overview of your business, goals, required features, and expected timeline. We can discuss your requirements, clarify the project scope, and identify the next steps.",
  },
  {
    category: "General",
    question: "How can I contact your team?",
    answer:
      "You can use the contact form on our website to share your project details. Please include accurate contact information and a clear description of how we can help.",
  },

  // Services
  {
    category: "Services",
    question: "What services do you offer?",
    answer:
      "Our service areas include website development, custom web applications, UI/UX design, responsive website improvements, and SEO foundations. Additional integrations or automation can be discussed according to your project requirements.",
  },
  {
    category: "Services",
    question: "Can you build a custom website for my business?",
    answer:
      "Yes, we can discuss a website tailored to your brand, audience, and business goals. Depending on the agreed scope, it may include custom page layouts, responsive design, contact forms, integrations, and SEO-friendly structure.",
  },
  {
    category: "Services",
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can review your existing website and discuss improvements to its visual design, navigation, mobile experience, accessibility, loading performance, and content structure.",
  },
  {
    category: "Services",
    question: "Do you develop web applications?",
    answer:
      "We can discuss custom web applications such as business tools, dashboards, administrative interfaces, and interactive digital products. Features, integrations, and technical requirements are determined during project planning.",
  },
  {
    category: "Services",
    question: "Do you provide UI/UX design services?",
    answer:
      "UI/UX work can include user flows, wireframes, interface design, responsive layouts, prototypes, and consistent design systems, depending on the needs of your project.",
  },
  {
    category: "Services",
    question: "Can you help improve my website's SEO?",
    answer:
      "We can help establish technical and on-page SEO foundations, including page metadata, heading structure, crawlability considerations, and performance improvements. Search rankings and traffic growth cannot be guaranteed.",
  },
  {
    category: "Services",
    question: "Will my website work on mobile devices?",
    answer:
      "Responsive design is an important part of a modern website. The implementation should be tested across relevant screen sizes and browsers to help ensure that layouts, navigation, and interactive elements work correctly.",
  },

  // Pricing & Payments
  {
    category: "Pricing & Payments",
    question: "How much does a website cost?",
    answer:
      "The cost depends on the number of pages, design complexity, functionality, integrations, content requirements, and timeline. We discuss your requirements before preparing a project-specific estimate.",
  },
  {
    category: "Pricing & Payments",
    question: "Do you offer fixed-price projects?",
    answer:
      "A fixed-price project may be suitable when the requirements and deliverables are clearly defined. The pricing model and payment milestones should be agreed upon before development begins.",
  },
  {
    category: "Pricing & Payments",
    question: "Are domain and hosting costs included?",
    answer:
      "Domain registration, hosting, premium tools, third-party subscriptions, and other recurring expenses depend on the project agreement. These costs should be clarified before the project starts.",
  },
  {
    category: "Pricing & Payments",
    question: "Will there be additional charges if requirements change?",
    answer:
      "Changes that affect the agreed scope, functionality, or timeline may require a revised estimate. Any additional cost or schedule change should be discussed and approved before the extra work begins.",
  },

  // Process & Support
  {
    category: "Process & Support",
    question: "What is your development process?",
    answer:
      "A typical process includes requirement discovery, planning, design, development, testing, review, and launch preparation. The exact stages depend on the project's complexity and agreed deliverables.",
  },
  {
    category: "Process & Support",
    question: "How long does a project take?",
    answer:
      "The timeline depends on project scope, required features, integrations, content readiness, and feedback cycles. We can provide a more useful estimate after reviewing your requirements.",
  },
  {
    category: "Process & Support",
    question: "Can I request changes during development?",
    answer:
      "Yes, feedback can be incorporated during agreed review stages. Larger changes may affect cost or delivery dates, so their impact should be discussed before implementation.",
  },
  {
    category: "Process & Support",
    question: "Do you provide support after launch?",
    answer:
      "Post-launch maintenance, bug fixes, monitoring, and future enhancements can be discussed as part of your project agreement. The included support period and any ongoing charges should be confirmed in advance.",
  },
  {
    category: "Process & Support",
    question: "Will I own my website and source code?",
    answer:
      "Ownership, source-code handover, third-party licences, and access credentials should be specified in the project agreement. Please confirm the applicable terms before work begins.",
  },
  {
    category: "Process & Support",
    question: "How do I report a problem with my website?",
    answer:
      "Contact us with the affected page URL, a description of the issue, steps to reproduce it, and a screenshot if available. Support availability and response times depend on your project agreement.",
  },
];

export default faqItems;
