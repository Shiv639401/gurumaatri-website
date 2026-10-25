
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  Globe,
  Layers3,
  Lightbulb,
  MessageCircle,
  RefreshCw,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Wallet,
  Zap,
} from "lucide-react";

type ServiceId =
  | "website"
  | "ecommerce"
  | "mobile"
  | "ai"
  | "software";

type Complexity = "basic" | "standard" | "advanced";
type Timeline = "flexible" | "normal" | "urgent";

type ServiceOption = {
  id: ServiceId;
  title: string;
  description: string;
  icon: typeof Globe;
  basePrice: number;
};

type FeatureOption = {
  id: string;
  title: string;
  description: string;
  price: number;
};

const services: ServiceOption[] = [
  {
    id: "website",
    title: "Website Development",
    description: "Business websites, landing pages and web experiences.",
    icon: Globe,
    basePrice: 15000,
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Online stores, product catalogs and shopping experiences.",
    icon: ShoppingCart,
    basePrice: 30000,
  },
  {
    id: "mobile",
    title: "Mobile App",
    description: "Mobile application concepts and product development.",
    icon: Smartphone,
    basePrice: 50000,
  },
  {
    id: "ai",
    title: "AI & Automation",
    description: "AI assistants, intelligent workflows and automation.",
    icon: Bot,
    basePrice: 35000,
  },
  {
    id: "software",
    title: "Custom Software",
    description: "Dashboards, portals and custom business applications.",
    icon: Code2,
    basePrice: 45000,
  },
];

const features: FeatureOption[] = [
  {
    id: "auth",
    title: "User accounts & authentication",
    description: "Sign-up, login and user profiles.",
    price: 8000,
  },
  {
    id: "admin",
    title: "Admin dashboard",
    description: "Manage content, users or business data.",
    price: 12000,
  },
  {
    id: "payments",
    title: "Payment integration",
    description: "Online payment workflow and checkout integration.",
    price: 10000,
  },
  {
    id: "integrations",
    title: "Third-party integrations",
    description: "Connect external services and business tools.",
    price: 8000,
  },
  {
    id: "seo",
    title: "SEO & analytics setup",
    description: "Foundational SEO and analytics configuration.",
    price: 5000,
  },
  {
    id: "chat",
    title: "Chat or AI assistant",
    description: "Conversational support or an AI-powered interface.",
    price: 15000,
  },
];

const complexityOptions: {
  id: Complexity;
  title: string;
  description: string;
  multiplier: number;
}[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Essential pages and straightforward functionality.",
    multiplier: 1,
  },
  {
    id: "standard",
    title: "Standard",
    description: "Custom design, more functionality and integrations.",
    multiplier: 1.5,
  },
  {
    id: "advanced",
    title: "Advanced",
    description: "Complex workflows and more demanding requirements.",
    multiplier: 2.2,
  },
];

const timelineOptions: {
  id: Timeline;
  title: string;
  description: string;
  multiplier: number;
}[] = [
  {
    id: "flexible",
    title: "Flexible",
    description: "I can work around a suitable delivery plan.",
    multiplier: 1,
  },
  {
    id: "normal",
    title: "Standard timeline",
    description: "A balanced schedule for planning and delivery.",
    multiplier: 1,
  },
  {
    id: "urgent",
    title: "Priority timeline",
    description: "I need to explore a faster delivery schedule.",
    multiplier: 1.2,
  },
];

const steps = [
  { number: 1, label: "Project type" },
  { number: 2, label: "Features" },
  { number: 3, label: "Timeline" },
  { number: 4, label: "Estimate" },
];

const currency = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export default function EstimatorPage() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<ServiceId | "">("");
  const [complexity, setComplexity] = useState<Complexity>("standard");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "seo",
  ]);
  const [timeline, setTimeline] = useState<Timeline>("normal");
  const [projectName, setProjectName] = useState("");
  const [notes, setNotes] = useState("");
  const [showBreakdown, setShowBreakdown] = useState(true);

  const selectedService = services.find((item) => item.id === service);
  const selectedComplexity = complexityOptions.find(
    (item) => item.id === complexity
  );
  const selectedTimeline = timelineOptions.find(
    (item) => item.id === timeline
  );

  const estimate = useMemo(() => {
    const base = selectedService?.basePrice ?? 0;

    const featureTotal = features
      .filter((feature) => selectedFeatures.includes(feature.id))
      .reduce((sum, feature) => sum + feature.price, 0);

    const complexityMultiplier =
      complexityOptions.find((item) => item.id === complexity)?.multiplier ??
      1;

    const timelineMultiplier =
      timelineOptions.find((item) => item.id === timeline)?.multiplier ?? 1;

    const subtotal = Math.round(
      (base + featureTotal) * complexityMultiplier * timelineMultiplier
    );

    return {
      base,
      featureTotal,
      subtotal,
      low: Math.round((subtotal * 0.85) / 1000) * 1000,
      high: Math.round((subtotal * 1.2) / 1000) * 1000,
    };
  }, [complexity, selectedFeatures, timeline, selectedService]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const nextStep = () => {
    if (step === 1 && !service) return;
    setStep((current) => Math.min(current + 1, 4));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetEstimator = () => {
    setStep(1);
    setService("");
    setComplexity("standard");
    setSelectedFeatures(["seo"]);
    setTimeline("normal");
    setProjectName("");
    setNotes("");
    setShowBreakdown(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.25),transparent_42%),radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.12),transparent_40%)]" />

        <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-indigo-200">
              <Sparkles size={15} />
              Interactive project planner
            </div>

            <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn your idea into
              <span className="block bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
                a clearer estimate.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Tell us what you're building, select the features you need,
              and explore an indicative project budget in just a few steps.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-cyan-300" />
                Personalized scope
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-cyan-300" />
                Live estimate
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-cyan-300" />
                No payment required
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ESTIMATOR WORKSPACE */}
      <section className="px-4 py-10 sm:px-8 sm:py-14 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Progress */}
          <div className="mx-auto mb-8 max-w-4xl">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-slate-800">
                Project estimator
              </p>
              <p className="text-sm text-slate-500">Step {step} of 4</p>
            </div>

            <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 transition-all duration-500"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {steps.map((item) => {
                const active = step === item.number;
                const complete = step > item.number;

                return (
                  <div key={item.number} className="flex items-center gap-2">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition ${
                        complete
                          ? "bg-emerald-100 text-emerald-700"
                          : active
                            ? "bg-indigo-600 text-white"
                            : "bg-white text-slate-400 ring-1 ring-slate-200"
                      }`}
                    >
                      {complete ? <Check size={15} /> : item.number}
                    </div>
                    <span
                      className={`hidden text-xs font-medium sm:block sm:text-sm ${
                        active ? "text-indigo-700" : "text-slate-500"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl items-start gap-7 lg:grid-cols-[minmax(0,1fr)_350px]">
            {/* WIZARD */}
            <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
              {step === 1 && (
                <div>
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-indigo-600">
                      STEP 01 · PROJECT TYPE
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      What are we building together?
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">
                      Choose the option that best describes your project.
                      You can discuss a different scope with the team later.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {services.map((item) => {
                      const Icon = item.icon;
                      const selected = service === item.id;

                      return (
                        <button
                          type="button"
                          key={item.id}
                          aria-pressed={selected}
                          onClick={() => setService(item.id)}
                          className={`group relative flex min-h-40 flex-col rounded-2xl border p-5 text-left transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                            selected
                              ? "border-indigo-500 bg-indigo-50/70 ring-2 ring-indigo-500/10"
                              : "border-slate-200 bg-white hover:border-indigo-200"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div
                              className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${
                                selected
                                  ? "bg-indigo-600 text-white"
                                  : "bg-slate-100 text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-700"
                              }`}
                            >
                              <Icon size={21} />
                            </div>

                            <span
                              className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                                selected
                                  ? "border-indigo-600 bg-indigo-600 text-white"
                                  : "border-slate-300 text-transparent"
                              }`}
                            >
                              <Check size={12} />
                            </span>
                          </div>

                          <h3 className="mt-4 font-semibold">{item.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {item.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                    <div className="flex gap-3">
                      <Lightbulb
                        size={20}
                        className="mt-0.5 shrink-0 text-blue-700"
                      />
                      <p className="text-sm leading-6 text-blue-950">
                        Not sure which category fits? Select the closest
                        option for now, then explain your idea in the final
                        step.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-indigo-600">
                      STEP 02 · SCOPE & FEATURES
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      What should your project include?
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">
                      Choose a complexity level and select the additional
                      capabilities that matter to you.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-4 font-semibold">Project complexity</h3>
                    <div className="grid gap-3">
                      {complexityOptions.map((item) => {
                        const selected = complexity === item.id;

                        return (
                          <button
                            type="button"
                            key={item.id}
                            aria-pressed={selected}
                            onClick={() => setComplexity(item.id)}
                            className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${
                              selected
                                ? "border-indigo-500 bg-indigo-50/70"
                                : "border-slate-200 hover:border-indigo-200"
                            }`}
                          >
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                                selected
                                  ? "bg-indigo-600 text-white"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {item.id === "basic" ? (
                                <Layers3 size={19} />
                              ) : item.id === "standard" ? (
                                <Code2 size={19} />
                              ) : (
                                <Zap size={19} />
                              )}
                            </div>

                            <div className="min-w-0 flex-1">
                              <p className="font-semibold">{item.title}</p>
                              <p className="mt-1 text-sm leading-6 text-slate-600">
                                {item.description}
                              </p>
                            </div>

                            <div
                              className={`h-5 w-5 shrink-0 rounded-full border ${
                                selected
                                  ? "border-[6px] border-indigo-600"
                                  : "border-slate-300"
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-9">
                    <div className="mb-4">
                      <h3 className="font-semibold">Additional features</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        Select as many as you need. Leave the rest unchecked.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {features.map((item) => {
                        const selected = selectedFeatures.includes(item.id);

                        return (
                          <label
                            key={item.id}
                            className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                              selected
                                ? "border-indigo-400 bg-indigo-50/60"
                                : "border-slate-200 hover:border-indigo-200"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={selected}
                              onChange={() => toggleFeature(item.id)}
                              className="mt-1 h-4 w-4 accent-indigo-600"
                            />

                            <span className="min-w-0 flex-1">
                              <span className="block text-sm font-semibold text-slate-900">
                                {item.title}
                              </span>
                              <span className="mt-1 block text-xs leading-5 text-slate-600">
                                {item.description}
                              </span>
                              <span className="mt-2 block text-sm font-semibold text-indigo-700">
                                +{currency(item.price)}
                              </span>
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-indigo-600">
                      STEP 03 · DELIVERY
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      What's your ideal timeline?
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">
                      Choose a delivery preference. Actual schedules depend
                      on the final scope, availability and project dependencies.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {timelineOptions.map((item) => {
                      const selected = timeline === item.id;

                      return (
                        <button
                          type="button"
                          key={item.id}
                          aria-pressed={selected}
                          onClick={() => setTimeline(item.id)}
                          className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition ${
                            selected
                              ? "border-indigo-500 bg-indigo-50/70 ring-2 ring-indigo-500/10"
                              : "border-slate-200 hover:border-indigo-200"
                          }`}
                        >
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                              selected
                                ? "bg-indigo-600 text-white"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {item.id === "urgent" ? (
                              <Zap size={21} />
                            ) : item.id === "normal" ? (
                              <Clock3 size={21} />
                            ) : (
                              <Layers3 size={21} />
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                              {item.description}
                            </p>
                            {item.id === "urgent" && (
                              <p className="mt-2 text-xs font-medium text-amber-700">
                                The estimator applies a sample priority
                                allowance.
                              </p>
                            )}
                          </div>

                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                              selected
                                ? "border-indigo-600 bg-indigo-600 text-white"
                                : "border-slate-300 text-transparent"
                            }`}
                          >
                            <Check size={12} />
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                    <div className="flex gap-3">
                      <ShieldCheck
                        size={21}
                        className="mt-0.5 shrink-0 text-indigo-700"
                      />
                      <div>
                        <h3 className="font-semibold">A realistic plan matters</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          Rushed delivery can require additional coordination
                          and resources. The final delivery schedule and any
                          associated costs should be agreed upon before work
                          starts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-indigo-600">
                      STEP 04 · YOUR PROJECT
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      Your estimate is ready to explore.
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">
                      Add a few optional details to help us understand your
                      idea before you request a more accurate quote.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-blue-50 p-5 sm:p-7">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-indigo-700 shadow-sm">
                        <Wallet size={23} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-indigo-800">
                          Indicative project range
                        </p>
                        <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                          {currency(estimate.low)}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          to {currency(estimate.high)}
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-600">
                      This is a planning estimate based on your selections,
                      not a formal quote or guaranteed final price.
                    </p>
                  </div>

                  <div className="mt-7 space-y-5">
                    <div>
                      <label
                        htmlFor="project-name"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Project name
                        <span className="font-normal text-slate-400">
                          {" "}(optional)
                        </span>
                      </label>
                      <input
                        id="project-name"
                        type="text"
                        maxLength={120}
                        value={projectName}
                        onChange={(event) =>
                          setProjectName(event.target.value)
                        }
                        placeholder="e.g. My business website"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="project-notes"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Additional details
                        <span className="font-normal text-slate-400">
                          {" "}(optional)
                        </span>
                      </label>
                      <textarea
                        id="project-notes"
                        rows={5}
                        maxLength={2000}
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                        placeholder="Describe your goals, target audience, inspiration or any important requirements..."
                        className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3.5 text-sm leading-7 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                      />
                      <p className="mt-1 text-right text-xs text-slate-400">
                        {notes.length}/2000 characters
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl border border-slate-200 p-5">
                    <h3 className="font-semibold">Ready for the next step?</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Continue to the contact page to discuss your project
                      and request a confirmed quote.
                    </p>
                    <Link
                      to="/contact"
                      className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                    >
                      Discuss my project
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              )}

              {/* NAVIGATION */}
              <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-6">
                <button
                  type="button"
                  onClick={step === 1 ? resetEstimator : previousStep}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  {step === 1 ? (
                    <RefreshCw size={16} />
                  ) : (
                    <ArrowLeft size={16} />
                  )}
                  {step === 1 ? "Reset" : "Back"}
                </button>

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={step === 1 && !service}
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {step === 3 ? "View my estimate" : "Continue"}
                    <ArrowRight size={17} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Edit project
                    <RefreshCw size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* LIVE SUMMARY */}
            <aside className="lg:sticky lg:top-8">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="bg-slate-950 p-6 text-white">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-indigo-200">
                        <Rocket size={21} />
                      </div>
                      <div>
                        <h2 className="font-semibold">Project summary</h2>
                        <p className="mt-1 text-xs text-slate-400">
                          Updates as you build
                        </p>
                      </div>
                    </div>
                    <Sparkles size={19} className="text-indigo-300" />
                  </div>

                  <div className="mt-7">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Estimated range
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight">
                      {currency(estimate.low)}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      to {currency(estimate.high)}
                    </p>
                  </div>

                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300 transition-all duration-500"
                      style={{
                        width: `${Math.min((step / 4) * 100, 100)}%`,
                      }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-slate-400">
                    Configuration {step} of 4
                  </p>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold">Your selections</h3>
                    <button
                      type="button"
                      onClick={() => setShowBreakdown((current) => !current)}
                      aria-expanded={showBreakdown}
                      className="text-sm font-medium text-indigo-700 hover:text-indigo-500"
                    >
                      {showBreakdown ? "Hide" : "Show"}
                    </button>
                  </div>

                  {showBreakdown && (
                    <div className="mt-5 space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs text-slate-500">Project type</p>
                          <p className="mt-1 text-sm font-medium text-slate-800">
                            {selectedService?.title ?? "Not selected"}
                          </p>
                        </div>
                        {selectedService && (
                          <CheckCircle2
                            size={17}
                            className="shrink-0 text-emerald-600"
                          />
                        )}
                      </div>

                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs text-slate-500">Complexity</p>
                          <p className="mt-1 text-sm font-medium text-slate-800">
                            {selectedComplexity?.title ?? "Standard"}
                          </p>
                        </div>
                        <ChevronRight
                          size={17}
                          className="shrink-0 text-slate-400"
                        />
                      </div>

                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs text-slate-500">Timeline</p>
                          <p className="mt-1 text-sm font-medium text-slate-800">
                            {selectedTimeline?.title ?? "Standard timeline"}
                          </p>
                        </div>
                        <Clock3
                          size={17}
                          className="shrink-0 text-slate-400"
                        />
                      </div>

                      <div className="border-t border-slate-100 pt-4">
                        <p className="text-xs text-slate-500">
                          Additional features
                        </p>
                        {selectedFeatures.length > 0 ? (
                          <ul className="mt-3 space-y-2.5">
                            {features
                              .filter((item) =>
                                selectedFeatures.includes(item.id)
                              )
                              .map((item) => (
                                <li
                                  key={item.id}
                                  className="flex items-start gap-2 text-sm text-slate-700"
                                >
                                  <Check
                                    size={15}
                                    className="mt-0.5 shrink-0 text-emerald-600"
                                  />
                                  <span>{item.title}</span>
                                </li>
                              ))}
                          </ul>
                        ) : (
                          <p className="mt-2 text-sm text-slate-400">
                            No additional features selected.
                          </p>
                        )}
                      </div>

                      <div className="border-t border-slate-100 pt-4">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Estimate breakdown
                        </p>
                        <div className="space-y-2.5 text-sm">
                          <div className="flex justify-between gap-3">
                            <span className="text-slate-600">Base project</span>
                            <span className="font-medium text-slate-800">
                              {currency(estimate.base)}
                            </span>
                          </div>
                          <div className="flex justify-between gap-3">
                            <span className="text-slate-600">Features</span>
                            <span className="font-medium text-slate-800">
                              {currency(estimate.featureTotal)}
                            </span>
                          </div>
                          <div className="flex justify-between gap-3">
                            <span className="text-slate-600">Complexity</span>
                            <span className="font-medium text-slate-800">
                              ×{selectedComplexity?.multiplier ?? 1}
                            </span>
                          </div>
                          <div className="flex justify-between gap-3">
                            <span className="text-slate-600">Timeline factor</span>
                            <span className="font-medium text-slate-800">
                              ×{selectedTimeline?.multiplier ?? 1}
                            </span>
                          </div>
                          <div className="flex justify-between gap-3 border-t border-slate-100 pt-3 font-semibold">
                            <span>Planning subtotal</span>
                            <span className="text-indigo-700">
                              {currency(estimate.subtotal)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-4">
                    <div className="flex gap-2.5">
                      <ShieldCheck
                        size={18}
                        className="mt-0.5 shrink-0 text-amber-700"
                      />
                      <p className="text-xs leading-6 text-amber-950">
                        Planning estimate only. Final costs depend on detailed
                        requirements, delivery scope, taxes and third-party
                        services.
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/pricing"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    Compare pricing plans
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                <MessageCircle
                  size={20}
                  className="mt-0.5 shrink-0 text-indigo-700"
                />
                <div>
                  <p className="font-semibold">Need a custom solution?</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Discuss requirements that don't fit these options.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:text-indigo-500"
                  >
                    Contact the team
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-700 p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-indigo-100">
              Your next step starts here
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              An estimate is just the beginning.
            </h2>
            <p className="mt-3 leading-7 text-indigo-100">
              Let's refine your idea into a clear scope, realistic plan and
              project proposal.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            Start a conversation
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
