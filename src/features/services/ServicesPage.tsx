
import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    category: "DIGITAL PRESENCE",
    title: "Website Development",
    description:
      "Build a memorable online presence with a website that communicates your value, earns trust and guides visitors towards action.",
    features: [
      "Business & corporate websites",
      "Landing pages & lead generation",
      "Responsive mobile-first layouts",
      "Performance & SEO foundations",
    ],
    outcome: "A professional digital home for your brand.",
    icon: "website",
    gradient: "from-indigo-600 to-blue-500",
    soft: "bg-indigo-50",
    text: "text-indigo-700",
  },
  {
    number: "02",
    category: "DIGITAL PRODUCTS",
    title: "Web Applications",
    description:
      "Turn complex business workflows into accessible web applications with intuitive interfaces and maintainable architecture.",
    features: [
      "Custom business applications",
      "Admin panels & dashboards",
      "REST API integrations",
      "Authentication & role-based access",
    ],
    outcome: "Digital tools designed around your workflow.",
    icon: "application",
    gradient: "from-violet-600 to-purple-500",
    soft: "bg-violet-50",
    text: "text-violet-700",
  },
  {
    number: "03",
    category: "EXPERIENCE DESIGN",
    title: "UI/UX Design",
    description:
      "Make every interaction feel clear and intentional with user-centred layouts, thoughtful visual systems and consistent components.",
    features: [
      "Website & application UI",
      "User flows & wireframes",
      "Responsive design systems",
      "Developer-ready design handoff",
    ],
    outcome: "A clearer experience for your customers.",
    icon: "design",
    gradient: "from-sky-500 to-cyan-500",
    soft: "bg-sky-50",
    text: "text-sky-700",
  },
  {
    number: "04",
    category: "ORGANIC DISCOVERY",
    title: "SEO & Digital Growth",
    description:
      "Create a stronger foundation for organic discovery with technically sound pages, meaningful content structure and measurable improvements.",
    features: [
      "Technical SEO foundations",
      "On-page optimisation",
      "Metadata & content structure",
      "Analytics and tracking setup",
    ],
    outcome: "A website better prepared for discovery.",
    icon: "growth",
    gradient: "from-emerald-500 to-teal-500",
    soft: "bg-emerald-50",
    text: "text-emerald-700",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals and the problem your digital solution needs to solve.",
  },
  {
    number: "02",
    title: "Plan & design",
    description:
      "We define the scope, organise the experience and establish a clear direction before development.",
  },
  {
    number: "03",
    title: "Build & validate",
    description:
      "We develop responsively, test key interactions and refine the experience against agreed requirements.",
  },
  {
    number: "04",
    title: "Launch & improve",
    description:
      "We prepare your project for launch and discuss any ongoing support or future improvements you need.",
  },
];

const faqs = [
  {
    question: "How do I choose the right service?",
    answer:
      "Start with your business goal. Choose Website Development for your online presence, Web Applications for interactive workflows, UI/UX Design to improve an existing experience, or SEO & Digital Growth to strengthen discoverability. If you are unsure, tell us about your project through the contact page.",
  },
  {
    question: "How much does a website or application cost?",
    answer:
      "Pricing depends on the scope, number of pages, features, integrations, design requirements and delivery timeline. We prefer to understand your requirements first and then provide a project-specific estimate instead of promising one price for every project.",
  },
  {
    question: "How long will my project take?",
    answer:
      "Timelines depend on complexity, feedback cycles, content readiness and integrations. A focused website generally requires less work than a custom application. We will discuss milestones and a realistic schedule once the scope is understood.",
  },
  {
    question: "Can you work with my existing website?",
    answer:
      "Potentially, yes. We can discuss redesigns, responsive improvements, performance, UI refinements and new features. The best approach depends on your current technology, code quality and access to the existing project.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Post-launch support, maintenance, monitoring and future enhancements can be discussed as part of your project agreement. The available scope, response expectations and charges should be agreed before work begins.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Responsive layouts are part of the intended implementation. Before launch, the site should be tested across relevant screen sizes, browsers, keyboard interactions and real devices.",
  },
];

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceIcon({
  type,
  className = "h-7 w-7",
}: {
  type: string;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "website":
      return (
        <svg {...common}>
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M3 9h18M7 6.5h.01M10 6.5h.01M8 13h8M8 16h5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "application":
      return (
        <svg {...common}>
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M3 9h18M8 13h3v4H8zM14 13h3M14 16h3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "design":
      return (
        <svg {...common}>
          <path
            d="m14 4 6 6M4 20l4.5-1 11-11a2.1 2.1 0 0 0-3-3l-11 11L4 20Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path
            d="M4 17 9 12l3 3 7-8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 7h5v5M4 21h16"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[1.8px] text-indigo-700 shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-1.4px] text-slate-900 sm:text-4xl lg:text-[46px]">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-violet-200/30 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-40 -z-10 h-[400px] w-[400px] rounded-full bg-sky-100/50 blur-[100px]"
        />

        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/90 px-3.5 py-2 shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-black text-white">
                G
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-[1.5px] text-slate-600">
                Services by GuruMaatri
              </span>
            </div>

            <h1 className="mt-7 max-w-3xl text-[42px] font-extrabold leading-[1.08] tracking-[-2px] text-slate-950 sm:text-5xl lg:text-[64px] lg:tracking-[-3px]">
              Digital solutions.
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-500 bg-clip-text text-transparent">
                Real business intent.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              From your first business website to a custom web application,
              we help turn your ideas into clear, useful and thoughtfully
              built digital experiences.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-600/25"
              >
                Discuss your project
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50/50 hover:text-indigo-700"
              >
                Explore our work
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-slate-500">
              <span className="inline-flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-emerald-600" />
                Responsive-first thinking
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-emerald-600" />
                Scope-led planning
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-emerald-600" />
                Clear communication
              </span>
            </div>
          </div>

          {/* Decorative service overview */}
          <div className="relative mx-auto w-full max-w-[500px]">
            <div
              aria-hidden="true"
              className="absolute inset-5 rounded-[36px] bg-gradient-to-br from-indigo-200/50 to-violet-200/40 blur-2xl"
            />

            <div className="relative rounded-[30px] border border-white bg-white/90 p-4 shadow-[0_28px_90px_rgba(49,46,129,0.12)] sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-sm font-black text-white">
                    G
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-800">
                      Your digital roadmap
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-400">
                      From concept to launch
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-bold text-emerald-700">
                  PROJECT OVERVIEW
                </span>
              </div>

              <div className="mt-5 rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-600 p-5 text-white sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[1.8px] text-indigo-100">
                  Build with purpose
                </p>
                <h2 className="mt-3 max-w-xs text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                  One clear vision. The right digital tools.
                </h2>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-indigo-100">
                    Strategy · Design · Development
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                    <ArrowIcon />
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <Link
                    key={service.number}
                    to="/services"
                    className="group rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-900/5"
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${service.soft} ${service.text}`}
                    >
                      <ServiceIcon type={service.icon} className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-xs font-extrabold leading-5 text-slate-800 transition group-hover:text-indigo-700">
                      {service.title}
                    </p>
                    <p className="mt-1 text-[10px] font-medium text-slate-400">
                      Explore service ↗
                    </p>
                  </Link>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                  <CheckIcon />
                </span>
                <div>
                  <p className="text-xs font-extrabold text-slate-800">
                    Built around your requirements
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-slate-500">
                    Scope, priorities and deliverables agreed before work begins.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-[25%] hidden rounded-2xl border border-white bg-white px-4 py-3 shadow-xl shadow-indigo-900/10 sm:block lg:-right-8">
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Our approach
              </p>
              <p className="mt-1 text-sm font-extrabold text-indigo-700">
                Thoughtful by design
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION STRIP */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-5 px-5 py-7 sm:grid-cols-3 sm:px-8 lg:px-10">
          {[
            {
              title: "Business-first thinking",
              text: "Start with the problem, not just the technology.",
            },
            {
              title: "Experience-led design",
              text: "Make interfaces intuitive, consistent and useful.",
            },
            {
              title: "Practical delivery",
              text: "Agree the scope, milestones and expectations upfront.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <CheckIcon />
              </span>
              <div>
                <h2 className="text-sm font-extrabold text-slate-800">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-slate-50/70 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeading
            eyebrow="What we can build"
            title="The right solution for your next move."
            description="Explore our core services. Each project is scoped around your actual requirements, audience, available resources and goals."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:gap-6">
            {services.map((service) => (
              <article
                key={service.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_5px_24px_rgba(15,23,42,0.025)] transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_22px_55px_rgba(49,46,129,0.09)] sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-gradient-to-br ${service.gradient} opacity-[0.055] blur-2xl transition duration-300 group-hover:opacity-[0.12]`}
                />

                <div className="relative flex items-start justify-between gap-4">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.soft} ${service.text} transition duration-300 group-hover:scale-105`}
                  >
                    <ServiceIcon type={service.icon} />
                  </span>
                  <span className="text-3xl font-black tracking-[-1.5px] text-slate-100 transition group-hover:text-indigo-100">
                    {service.number}
                  </span>
                </div>

                <div className="relative mt-6">
                  <p
                    className={`text-[10px] font-extrabold uppercase tracking-[1.7px] ${service.text}`}
                  >
                    {service.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-[27px]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>
                </div>

                <div className="relative mt-6 border-t border-slate-100 pt-5">
                  <p className="text-[10px] font-extrabold uppercase tracking-[1.5px] text-slate-400">
                    What we can work on
                  </p>
                  <ul className="mt-4 grid gap-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-xs leading-5 text-slate-600 sm:text-[13px]"
                      >
                        <span
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${service.soft} ${service.text}`}
                        >
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-6 rounded-2xl bg-slate-50 p-4">
                  <p className="text-[9px] font-extrabold uppercase tracking-[1.5px] text-slate-400">
                    Intended outcome
                  </p>
                  <p className="mt-1.5 text-xs font-bold leading-5 text-slate-700">
                    {service.outcome}
                  </p>
                </div>

                <div className="relative mt-6">
                  <Link
                    to="/contact"
                    className={`group/link inline-flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-bold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50/60 hover:text-indigo-700`}
                  >
                    Discuss this service
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-6 text-slate-400">
            Final deliverables, integrations and timelines are confirmed after
            reviewing your project requirements.
          </p>
        </div>
      </section>

      {/* CHOOSE YOUR GOAL */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/70 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[1.7px] text-indigo-700">
                Start with your goal
              </span>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-1.4px] text-slate-900 sm:text-4xl lg:text-[44px]">
                Not sure what you need?
                <span className="mt-1 block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Start here.
                </span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                You do not need a technical specification to begin. Start
                with what you want to achieve, and we can discuss the most
                appropriate solution.
              </p>
              <Link
                to="/contact"
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-indigo-700"
              >
                Tell us your goal
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: "I need a professional business website",
                  description:
                    "Start with Website Development to establish your digital presence.",
                  number: "01",
                  to: "/services",
                },
                {
                  title: "I want to digitise a business process",
                  description:
                    "Explore Web Applications for workflows, dashboards and custom functionality.",
                  number: "02",
                  to: "/services",
                },
                {
                  title: "My existing website needs improvement",
                  description:
                    "Consider UI/UX improvements, responsive refinements and performance work.",
                  number: "03",
                  to: "/contact",
                },
                {
                  title: "I want better organic discoverability",
                  description:
                    "Discuss technical SEO, content structure and measurement foundations.",
                  number: "04",
                  to: "/contact",
                },
              ].map((item) => (
                <Link
                  key={item.number}
                  to={item.to}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-indigo-200 hover:bg-indigo-50/30 hover:shadow-lg hover:shadow-indigo-900/5 sm:p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-xs font-extrabold text-indigo-700 transition group-hover:bg-indigo-600 group-hover:text-white">
                    {item.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-extrabold leading-6 text-slate-800 group-hover:text-indigo-700">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs leading-6 text-slate-500">
                      {item.description}
                    </span>
                  </span>
                  <ArrowIcon className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-600" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gradient-to-b from-indigo-50/60 to-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeading
            eyebrow="How we work"
            title="A clearer path from idea to launch."
            description="A structured process helps align expectations, reduce avoidable confusion and keep the project focused on agreed priorities."
          />

          <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-indigo-200 via-violet-300 to-indigo-200 lg:block"
            />

            {process.map((step) => (
              <article key={step.number} className="relative">
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-indigo-100 bg-white text-sm font-black text-indigo-700 shadow-md shadow-indigo-900/5">
                    {step.number}
                  </span>
                  <div className="lg:mt-5">
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/70 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[1.7px] text-indigo-700">
              Good to know
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-1.3px] text-slate-900 sm:text-4xl">
              Questions before we get started?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Here are answers to common questions about choosing a service,
              estimating a project and planning delivery.
            </p>
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-700 hover:text-violet-700"
            >
              Ask us a question
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const expanded = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    expanded
                      ? "border-indigo-200 bg-indigo-50/30"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={`service-faq-${index}`}
                      onClick={() =>
                        setOpenFaq(expanded ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="text-sm font-bold leading-6 text-slate-800 sm:text-base">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition ${
                          expanded
                            ? "rotate-45 bg-indigo-600 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4"
                        >
                          <path
                            d="M12 5v14M5 12h14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {expanded && (
                    <div
                      id={`service-faq-${index}`}
                      className="px-5 pb-5 sm:px-6"
                    >
                      <p className="border-t border-indigo-100 pt-4 text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[30px] bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 px-6 py-12 text-white shadow-[0_25px_80px_rgba(79,70,229,0.20)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-28 h-80 w-80 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -top-16 h-64 w-64 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 left-[35%] h-80 w-80 rounded-full bg-violet-400/20 blur-3xl"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[1.7px] text-indigo-100">
                Your next step starts here
              </span>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-1.3px] sm:text-4xl lg:text-[48px]">
                Let’s build something meaningful.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base">
                Share your idea, your goals and what you need to achieve.
                We can discuss a practical approach for your project.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50"
              >
                Start a project
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/estimator"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20"
              >
                Project estimator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
