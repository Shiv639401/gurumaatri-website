
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  Crown,
  HelpCircle,
  Layers3,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

type BillingCycle = "monthly" | "yearly";

const plans = [
  {
    name: "Starter",
    description: "For small businesses ready to build their digital presence.",
    icon: Rocket,
    monthly: 14999,
    yearly: 149990,
    popular: false,
    badge: "A strong beginning",
    features: [
      "Business website development",
      "Up to 5 core pages",
      "Responsive mobile-first design",
      "Basic on-page SEO setup",
      "Contact form integration",
      "Performance optimization",
      "Basic analytics integration",
      "Project progress updates",
    ],
    unavailable: [
      "Advanced third-party integrations",
      "Dedicated priority support",
    ],
  },
  {
    name: "Growth",
    description: "For ambitious brands looking for more capability and flexibility.",
    icon: Zap,
    monthly: 29999,
    yearly: 299990,
    popular: true,
    badge: "Most popular",
    features: [
      "Everything in Starter",
      "Up to 10 core pages",
      "Custom UI/UX experience",
      "CMS or blog integration",
      "Advanced SEO foundations",
      "Lead capture optimization",
      "Third-party integrations",
      "Enhanced analytics setup",
      "Priority project communication",
    ],
    unavailable: ["Complex custom enterprise systems"],
  },
  {
    name: "Scale",
    description: "For complex requirements, custom products, and growing teams.",
    icon: Crown,
    monthly: 59999,
    yearly: 599990,
    popular: false,
    badge: "Built to scale",
    features: [
      "Everything in Growth",
      "Custom product architecture",
      "Advanced workflows and integrations",
      "Custom dashboards or functionality",
      "Scalable application foundations",
      "Security-focused implementation",
      "Advanced performance planning",
      "Dedicated project coordination",
      "Tailored delivery roadmap",
    ],
    unavailable: [],
  },
];

const comparison = [
  { feature: "Responsive design", starter: true, growth: true, scale: true },
  { feature: "Custom UI/UX", starter: "Basic", growth: true, scale: true },
  { feature: "SEO setup", starter: "Basic", growth: "Advanced", scale: "Advanced" },
  { feature: "CMS integration", starter: false, growth: true, scale: true },
  { feature: "Custom integrations", starter: false, growth: "Standard", scale: "Advanced" },
  { feature: "Custom application features", starter: false, growth: "Selected", scale: "Extensive" },
  { feature: "Priority communication", starter: false, growth: true, scale: true },
];

const faqs = [
  {
    question: "Are these fixed prices for every project?",
    answer:
      "No. The displayed prices are illustrative starting estimates for this template, not a confirmed quote from GuruMaatri Innovations. Final pricing depends on scope, features, integrations, content, and delivery requirements.",
  },
  {
    question: "Can I request a custom package?",
    answer:
      "Absolutely. If your requirements do not fit a listed plan, share your goals and preferred features. A tailored scope can be discussed for your project.",
  },
  {
    question: "Does the price include hosting and domain charges?",
    answer:
      "Hosting, domains, paid themes, third-party subscriptions, and other external services may incur additional charges. Confirm these inclusions in your project proposal before starting.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "The final scope can be adjusted before work begins. For an ongoing engagement, changes to deliverables or priorities should be agreed upon with the project team.",
  },
  {
    question: "How do I get an exact estimate?",
    answer:
      "Use the contact form to explain your project, or visit the estimator page if it is available in your application. The team can then review your requirements and determine the appropriate scope.",
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(price);
}

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <CheckCircle2
        size={19}
        className="mx-auto text-emerald-600"
        aria-label="Included"
      />
    );
  }

  if (value === false) {
    return (
      <span className="text-slate-300" aria-label="Not included">
        —
      </span>
    );
  }

  return (
    <span className="text-sm font-medium text-slate-700">{value}</span>
  );
}

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.24),transparent_42%),radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.12),transparent_40%)]" />
        <div className="absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />
        <div className="absolute -right-4 top-24 -z-10 h-56 w-56 rounded-full border border-indigo-400/20 sm:h-72 sm:w-72" />

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 text-center sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:py-28">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-indigo-200">
            <Sparkles size={15} />
            Transparent pricing. Thoughtful solutions.
          </div>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
            The right solution
            <span className="block bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
              for your next big move.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Explore flexible starting packages for your digital journey.
            Whether you're launching a website or building a custom product,
            find a starting point that fits your goals.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#pricing-plans"
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-50"
            >
              Explore packages
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Discuss your project
              <MessageCircle size={17} />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Check size={16} className="text-cyan-300" />
              Flexible scope
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-cyan-300" />
              Clear deliverables
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-cyan-300" />
              Custom proposals available
            </span>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="flex gap-4 rounded-2xl border border-slate-200 p-5 sm:p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
              <Layers3 size={21} />
            </div>
            <div>
              <h2 className="font-semibold">Scope that makes sense</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Choose a starting package and refine it around your needs.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl border border-slate-200 p-5 sm:p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <Code2 size={21} />
            </div>
            <div>
              <h2 className="font-semibold">Technology with purpose</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Focus on features that support your users and business goals.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl border border-slate-200 p-5 sm:p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
              <ShieldCheck size={21} />
            </div>
            <div>
              <h2 className="font-semibold">Clear expectations</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Align deliverables, costs, and timelines before work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section
        id="pricing-plans"
        className="scroll-mt-20 bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Pricing plans
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Start where you are.
              <span className="block text-slate-400">Build where you want to go.</span>
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Compare the packages below and choose the starting point closest
              to your requirements.
            </p>

            <div className="mt-8 inline-flex items-center gap-1 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                aria-pressed={billing === "monthly"}
                className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                  billing === "monthly"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBilling("yearly")}
                aria-pressed={billing === "yearly"}
                className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                  billing === "yearly"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                Yearly
                <span
                  className={`ml-2 rounded-md px-1.5 py-1 text-[10px] ${
                    billing === "yearly"
                      ? "bg-white/20 text-white"
                      : "bg-emerald-50 text-emerald-700"
                  }`}
                >
                  10 months*
                </span>
              </button>
            </div>

            <p className="mt-3 text-xs leading-5 text-slate-500">
              *Illustrative yearly amounts shown as 10 times the monthly
              estimate. Confirm actual billing terms before purchase.
            </p>
          </div>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const price =
                billing === "monthly" ? plan.monthly : plan.yearly;

              return (
                <article
                  key={plan.name}
                  className={`relative flex flex-col rounded-3xl border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                    plan.popular
                      ? "border-indigo-500 shadow-xl shadow-indigo-950/10 lg:scale-[1.025]"
                      : "border-slate-200 shadow-sm"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                      {plan.badge}
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
                      <Icon size={23} />
                    </div>
                    {!plan.popular && (
                      <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">{plan.name}</h3>
                  <p className="mt-2 min-h-14 text-sm leading-6 text-slate-600">
                    {plan.description}
                  </p>

                  <div className="mt-7 border-b border-slate-100 pb-7">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Illustrative starting estimate
                    </p>
                    <div className="mt-3 flex flex-wrap items-baseline gap-x-2">
                      <span className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        ₹{formatPrice(price)}
                      </span>
                      <span className="text-sm text-slate-500">
                        / {billing === "monthly" ? "month" : "year"}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-500">
                      Final quote depends on scope and deliverables.
                    </p>
                  </div>

                  <div className="mt-7">
                    <p className="text-sm font-semibold text-slate-900">
                      What's included
                    </p>
                    <ul className="mt-5 space-y-3.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-emerald-600"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.unavailable.length > 0 && (
                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">
                        Not included by default
                      </p>
                      <ul className="space-y-2">
                        {plan.unavailable.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                          >
                            <span className="mt-0.5">—</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-auto pt-8">
                    <Link
                      to="/contact"
                      className={`group flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                        plan.popular
                          ? "bg-indigo-600 text-white hover:bg-indigo-700"
                          : "border border-slate-200 bg-white text-slate-900 hover:border-indigo-300 hover:bg-indigo-50"
                      }`}
                    >
                      Discuss this package
                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                    <p className="mt-3 text-center text-xs text-slate-500">
                      No payment is taken on this page.
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-500">
            Prices are sample content for the website template and do not
            represent verified GuruMaatri Innovations rates. Hosting, domain,
            taxes, paid tools, and third-party charges should be agreed upon
            separately where applicable.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Compare packages
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              See what fits your needs.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A quick side-by-side overview of the sample package features.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[650px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-5 py-5 text-sm font-semibold text-slate-800 sm:px-7">
                    Feature
                  </th>
                  <th className="px-4 py-5 text-center text-sm font-semibold text-slate-800">
                    Starter
                  </th>
                  <th className="bg-indigo-50/70 px-4 py-5 text-center text-sm font-semibold text-indigo-800">
                    Growth
                  </th>
                  <th className="px-4 py-5 text-center text-sm font-semibold text-slate-800">
                    Scale
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-t border-slate-100 transition hover:bg-slate-50/70"
                  >
                    <td className="px-5 py-4 text-sm text-slate-700 sm:px-7">
                      {row.feature}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <FeatureValue value={row.starter} />
                    </td>
                    <td className="bg-indigo-50/40 px-4 py-4 text-center">
                      <FeatureValue value={row.growth} />
                    </td>
                    <td className="px-4 py-4 text-center">
                      <FeatureValue value={row.scale} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-6 text-slate-500">
            Feature availability is indicative. Confirm the final scope in
            your proposal or statement of work.
          </p>
        </div>
      </section>

      {/* CUSTOM PROJECT CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300">
                <Sparkles size={16} />
                Need something different?
              </div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Your vision doesn't have to fit a template.
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                Tell us your requirements and explore a tailored approach for
                your business, product, or next digital experience.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-50"
              >
                Request a custom quote
                <ArrowRight size={17} />
              </Link>
              <Link
                to="/estimator"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Project estimator
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
              <HelpCircle size={24} />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Frequently asked questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A little more clarity.
              <span className="block text-slate-400">Before you begin.</span>
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Still unsure which package is right for you? Start a conversation
              and discuss your requirements before committing to a scope.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-700 transition hover:text-indigo-500"
            >
              Ask us a question
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div key={faq.question} className="py-5">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setActiveFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 text-left"
                  >
                    <span className="text-base font-semibold leading-7 text-slate-900 sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-indigo-700 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <p className="max-w-2xl pr-8 pt-4 text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
