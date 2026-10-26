
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Layers3,
  Lightbulb,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  
} from "lucide-react";
import { services } from  "../../../data/services";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your goals, audience, requirements, and project scope.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "We plan the user experience and create a clear implementation roadmap.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build your solution with a focus on usability, performance, and maintainability.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We test the implementation and help prepare your solution for launch.",
    icon: Rocket,
  },
];

const defaultFeatures = [
  "Responsive and accessible layouts",
  "Performance-conscious implementation",
  "Clean and maintainable code",
  "Testing before launch",
];

function getServiceSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function ServiceDetails() {
  const { slug, id } = useParams<{ slug?: string; id?: string }>();
  const routeValue = slug ?? id ?? "";

  const service = services.find((item) => {
    const itemWithSlug = item as (typeof item) & { slug?: string };

    return (
      item.id === routeValue ||
      itemWithSlug.slug === routeValue ||
      getServiceSlug(item.title) === routeValue
    );
  });

  if (!service) {
    return (
      <main className="min-h-[70vh] bg-white px-4 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <Layers3 size={30} aria-hidden="true" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Service not found
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Let's find the right solution for you.
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            The requested service may have moved or the URL may be incorrect.
            Explore our available services to find what you need.
          </p>

          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Explore Services
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </main>
    );
  }

  const Icon = service.icon;
  

  const relatedServices = services
    .filter((item) => item.id !== service.id)
    .slice(0, 3);

  const features =
    service.features?.length > 0
      ? service.features
      : defaultFeatures;

  const technologies = service.technologies ?? [];
  const benefits = service.benefits ?? [];

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-slate-400"
          >
            <Link
              to="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <ChevronRight size={15} aria-hidden="true" />

            <Link
              to="/services"
              className="transition hover:text-white"
            >
              Services
            </Link>

            <ChevronRight size={15} aria-hidden="true" />

            <span className="max-w-48 truncate text-indigo-300">
              {service.title}
            </span>
          </nav>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-indigo-200 backdrop-blur">
                <Sparkles size={15} aria-hidden="true" />
                GuruMaatri Innovations
              </div>

              <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {service.title}
                <span className="mt-2 block bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  Built around your goals.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {service.description}
              </p>

              {service.shortDescription && (
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                  {service.shortDescription}
                </p>
              )}

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Discuss Your Project
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>

                <Link
                  to="/estimator"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Estimate Your Project
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <Check
                    size={16}
                    className="text-emerald-400"
                    aria-hidden="true"
                  />
                  Goal-oriented planning
                </span>

                <span className="inline-flex items-center gap-2">
                  <Check
                    size={16}
                    className="text-emerald-400"
                    aria-hidden="true"
                  />
                  Tailored solutions
                </span>
              </div>
            </div>

            {/* Visual service card */}
            <div className="relative mx-auto w-full max-w-lg">
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/10 blur-2xl"
              />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Service Overview
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-indigo-300">
                    <Workflow size={18} aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-indigo-300/20 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-indigo-200 shadow-lg shadow-indigo-950/20">
                  <Icon size={36} strokeWidth={1.5} aria-hidden="true" />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-white">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {service.shortDescription || service.description}
                </p>

                <div className="my-6 h-px bg-white/10" />

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <Target
                      size={20}
                      className="text-indigo-300"
                      aria-hidden="true"
                    />
                    <p className="mt-3 text-sm font-semibold text-white">
                      Business focused
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Aligned with your objectives
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <ShieldCheck
                      size={20}
                      className="text-emerald-300"
                      aria-hidden="true"
                    />
                    <p className="mt-3 text-sm font-semibold text-white">
                      Quality minded
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Built with care and testing
                    </p>
                  </div>
                </div>

                {service.category && (
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-slate-400">
                      Service category
                    </span>

                    <span className="rounded-full border border-indigo-300/20 bg-indigo-300/10 px-3 py-1.5 text-xs font-medium text-indigo-200">
                      {service.category}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              What You Get
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Everything designed with purpose.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Explore the key capabilities included in our{" "}
              {service.title.toLowerCase()} service.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={`${feature}-${index}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 transition group-hover:bg-indigo-600 group-hover:text-white">
                  <Check size={21} aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-base font-semibold leading-6 text-slate-900">
                  {feature}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Considered as part of a solution tailored to your project
                  requirements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      {benefits.length > 0 && (
        <section className="border-y border-slate-100 bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Why This Service
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Built to create meaningful value.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-600">
                Every project has different priorities. We use your goals,
                audience, and technical requirements to shape the right
                approach.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-indigo-700 transition hover:text-indigo-900"
              >
                Tell us about your project
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={`${benefit}-${index}`}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Check size={19} aria-hidden="true" />
                  </span>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {benefit}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Incorporated according to the agreed project scope.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies */}
      {technologies.length > 0 && (
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Technology Stack
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              The right tools for the right solution.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Technologies are selected according to project scope,
              functionality, performance, and future maintenance needs.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50/50"
                >
                  <Code2
                    size={16}
                    className="text-indigo-600"
                    aria-hidden="true"
                  />
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Our Process
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From idea to implementation.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              A structured approach keeps expectations clear throughout the
              project lifecycle.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => {
              const StepIcon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-indigo-400/40 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-indigo-300">
                      {step.number}
                    </span>

                    <StepIcon
                      size={21}
                      className="text-slate-300"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-7 text-lg font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                  Explore More
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  More ways we can help.
                </h2>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-semibold text-indigo-700 transition hover:text-indigo-900"
              >
                All services
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((relatedService) => {
                const RelatedIcon = relatedService.icon;
                const relatedSlug = getServiceSlug(relatedService.title);

                return (
                  <Link
                    key={relatedService.id}
                    to={`/services/${relatedSlug}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/50"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 transition group-hover:bg-indigo-600 group-hover:text-white">
                        <RelatedIcon size={23} aria-hidden="true" />
                      </span>

                      <ArrowRight
                        size={19}
                        className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                      {relatedService.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-7 text-slate-600">
                      {relatedService.shortDescription ||
                        relatedService.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700">
                      Explore service
                      <ChevronRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-700 to-violet-800 px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 right-1/3 h-72 w-72 rounded-full bg-fuchsia-400/15 blur-3xl"
          />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-100">
                <MessageCircle size={14} aria-hidden="true" />
                Let's build something meaningful
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to discuss your next project?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-indigo-100">
                Tell us what you want to achieve. We will help you explore
                an approach that fits your needs and project scope.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-800 transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-700"
              >
                Contact Us
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
