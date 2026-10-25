
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Code2,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { submitLead } from "../../services/lead.service";

const services = [
  "Website Development",
  "UI/UX Design",
  "Mobile App Development",
  "AI & Automation",
  "E-commerce Solutions",
  "Custom Software",
  "Other / Not Sure Yet",
];

const contactHighlights = [
  {
    icon: Globe2,
    title: "Work without borders",
    description:
      "Digital experiences designed for modern businesses and global audiences.",
  },
  {
    icon: Layers3,
    title: "Built around your goals",
    description:
      "A solution shaped by your requirements, users, and business priorities.",
  },
  {
    icon: ShieldCheck,
    title: "Clarity at every step",
    description:
      "A structured approach to scope, communication, and project delivery.",
  },
];

const faqs = [
  {
    question: "What should I include in my inquiry?",
    answer:
      "Tell us what you want to build, who it is for, your key features, and any target timeline or budget. A rough idea is absolutely fine.",
  },
  {
    question: "Can you help if I only have an idea?",
    answer:
      "Yes. You can start with a concept, a business problem, or a reference you like. The first step is to define the problem and explore the right solution.",
  },
  {
    question: "Do you work on existing websites and apps?",
    answer:
      "Yes. An inquiry can cover a new project, an existing product, a redesign, performance improvements, integrations, or ongoing development.",
  },
];

type InquiryForm = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
};

type Notice = {
  type: "success" | "error";
  message: string;
};

const initialForm: InquiryForm = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<InquiryForm>(initialForm);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [notice, setNotice] = useState<Notice | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof InquiryForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setNotice(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    setNotice(null);
    setIsSubmitting(true);

    try {
      await submitLead(
        {
          "Full name": form.name.trim(),
          "Email address": form.email.trim(),
          "Company / Brand": form.company.trim() || "Not provided",
          "Requested service": form.service,
          "Estimated budget": form.budget || "Not specified",
          "Target timeline": form.timeline || "Not specified",
          "Project details": form.message.trim(),
          "Lead source": "GuruMaatri Contact Page",
        },
        "New GuruMaatri project inquiry"
      );

      setNotice({
        type: "success",
        message:
          "Thank you! Your inquiry has been submitted. We will review your project details.",
      });

      setForm(initialForm);
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setNotice({
        type: "error",
        message:
          error instanceof Error && error.message
            ? `We couldn't send your inquiry. ${error.message}`
            : "We couldn't send your inquiry right now. Please try again or contact us by email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.24),transparent_42%),radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.13),transparent_40%)]" />

        <div className="absolute right-[-100px] top-16 -z-10 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />
        <div className="absolute right-[-45px] top-28 -z-10 h-56 w-56 rounded-full border border-indigo-400/20 sm:h-72 sm:w-72" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-indigo-200">
              <Sparkles size={15} />
              Let's create something meaningful
            </div>

            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Your next big idea
              <span className="mt-2 block bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
                starts here.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Have a vision, a challenge, or just the beginning of an idea?
              Tell us about it. Let's explore how thoughtful design and
              technology can move your business forward.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-50"
              >
                Start a conversation
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Explore our work
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-300" />
                Clear project scope
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-300" />
                Tailored solutions
              </span>
            </div>
          </div>

          {/* Decorative project card */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] bg-indigo-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-300">
                    The next chapter
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    Let's build your vision
                  </h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-400/15 text-indigo-200">
                  <MessageCircle size={23} />
                </div>
              </div>

              <div className="space-y-3 py-6">
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300">
                    <Code2 size={21} />
                  </div>
                  <div>
                    <p className="font-medium text-white">
                      Technology that works
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Thoughtful engineering, built to scale.
                    </p>
                  </div>
                  <ArrowUpRight
                    className="ml-auto shrink-0 text-slate-500"
                    size={18}
                  />
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
                    <Layers3 size={21} />
                  </div>
                  <div>
                    <p className="font-medium text-white">
                      Experiences people love
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Design that makes every interaction count.
                    </p>
                  </div>
                  <ArrowUpRight
                    className="ml-auto shrink-0 text-slate-500"
                    size={18}
                  />
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Zap size={21} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Ideas into action</p>
                    <p className="mt-1 text-sm text-slate-400">
                      From an early concept to a working product.
                    </p>
                  </div>
                  <ArrowUpRight
                    className="ml-auto shrink-0 text-slate-500"
                    size={18}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-indigo-500/20 to-cyan-500/10 p-4">
                <div>
                  <p className="text-sm font-medium text-white">
                    Every great project starts with a conversation.
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Share your idea with us.
                  </p>
                </div>
                <ArrowDownRight
                  className="shrink-0 text-indigo-200"
                  size={24}
                />
              </div>
            </div>

            <div className="absolute -left-4 top-20 hidden rounded-2xl border border-white/10 bg-slate-900 p-3 shadow-xl sm:block">
              <Sparkles size={22} className="text-cyan-300" />
            </div>
            <div className="absolute -right-3 bottom-20 hidden rounded-2xl border border-white/10 bg-slate-900 p-3 shadow-xl sm:block">
              <Globe2 size={22} className="text-indigo-300" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INTRO */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Get in touch
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Let's turn your
                <span className="block text-slate-400">challenge into</span>
                an opportunity.
              </h2>
            </div>

            <div className="max-w-2xl lg:pt-8">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Great work begins with understanding. Share what you're
                planning, what isn't working, or what you want to achieve.
                We'll have a clearer starting point for discussing the right
                approach for your project.
              </p>
              <a
                href="#contact-form"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-700 transition hover:text-indigo-500"
              >
                Tell us about your project
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {contactHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/5 sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 transition group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section
        id="contact-form"
        className="scroll-mt-20 bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <aside>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Project inquiry
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Tell us what
                <span className="block text-indigo-600">you're imagining.</span>
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                A few details will help us understand your needs and what
                you're looking to accomplish.
              </p>

              <div className="mt-9 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-indigo-700">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Start with the idea</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Describe the problem you want to solve or the product
                      you want to create.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-indigo-700">
                    <Clock3 size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Share your timeline</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Let us know whether you're exploring, planning, or
                      ready to get started.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-indigo-700">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Remote-friendly collaboration
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Include your time zone or location if it's useful for
                      planning communication.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-9 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5">
                <div className="flex items-center gap-2 text-indigo-800">
                  <ShieldCheck size={19} />
                  <span className="font-semibold">
                    Your project, your priorities
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Please avoid including passwords, payment details, or other
                  confidential information in this form.
                </p>
              </div>
            </aside>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Project details
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fields marked with * are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Full name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Work email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Company / brand
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      maxLength={120}
                      value={form.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      placeholder="Your company (optional)"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Service you're interested in *
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      required
                      value={form.service}
                      onChange={(e) => updateField("service", e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                    >
                      <option value="" disabled>
                        Choose a service
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-budget"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Estimated budget
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={form.budget}
                      onChange={(e) => updateField("budget", e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                    >
                      <option value="">Select a range (optional)</option>
                      <option value="Under ₹25,000">Under ₹25,000</option>
                      <option value="₹25,000–₹75,000">₹25,000–₹75,000</option>
                      <option value="₹75,000–₹2,00,000">
                        ₹75,000–₹2,00,000
                      </option>
                      <option value="₹2,00,000+">₹2,00,000+</option>
                      <option value="Need guidance">Need guidance</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-timeline"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Target timeline
                    </label>
                    <select
                      id="contact-timeline"
                      name="timeline"
                      value={form.timeline}
                      onChange={(e) => updateField("timeline", e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                    >
                      <option value="">Choose a timeline (optional)</option>
                      <option value="As soon as possible">
                        As soon as possible
                      </option>
                      <option value="Within 2–4 weeks">
                        Within 2–4 weeks
                      </option>
                      <option value="Within 1–3 months">
                        Within 1–3 months
                      </option>
                      <option value="Flexible">Flexible</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Tell us about your project *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="What are you looking to build? What goals or challenges should we know about?"
                    className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm leading-7 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                  <p className="mt-2 text-right text-xs text-slate-400">
                    {form.message.length}/3000 characters
                  </p>
                </div>

                {notice && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`rounded-xl border p-4 text-sm leading-6 ${
                      notice.type === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                        : "border-red-200 bg-red-50 text-red-800"
                    }`}
                  >
                    {notice.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 px-6 py-4 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? "Sending inquiry..." : "Submit project inquiry"}
                  <Send
                    size={17}
                    className={isSubmitting ? "animate-pulse" : "transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"}
                  />
                </button>

                <p className="text-xs leading-6 text-slate-500">
                  Your project details will be submitted through our configured
                  email service. Please do not include passwords or payment
                  information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Before you reach out
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A few things
              <span className="block text-slate-400">you might wonder.</span>
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Have another question? Include it in your project inquiry so it
              can be considered alongside your requirements.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm font-medium text-slate-700">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-700">
                <Mail size={19} />
              </div>
              Let's start with your questions.
            </div>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div key={faq.question} className="py-5">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 text-left"
                  >
                    <span className="text-base font-semibold leading-7 text-slate-900 sm:text-lg">
                      {faq.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-xl text-indigo-700">
                      {isOpen ? "−" : "+"}
                    </span>
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

      {/* FINAL CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300">
                <Sparkles size={16} />
                Your idea deserves a starting point
              </div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to make something
                <span className="block text-indigo-300">extraordinary?</span>
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Explore our capabilities and past work, then tell us what
                you'd like to create next.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-50"
              >
                Start a project
                <ArrowRight size={17} />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Our services
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
