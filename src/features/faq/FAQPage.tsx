
import { useMemo, useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ChevronDown,
  CircleHelp,
  Code2,
  CreditCard,
  LifeBuoy,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const categories = [
  "All Questions",
  "General",
  "Services",
  "Pricing & Payments",
  "Process & Support",
];

const faqItems: FAQItem[] = [
  {
    category: "General",
    question: "What is GuruMaatri Innovations?",
    answer:
      "GuruMaatri Innovations focuses on digital solutions that help businesses establish and improve their online presence. Depending on your requirements, a project may include website development, web applications, e-commerce solutions, UI/UX design, or AI-assisted workflows.",
  },
  {
    category: "General",
    question: "What types of businesses do you work with?",
    answer:
      "We can discuss projects for startups, small and medium-sized businesses, entrepreneurs, and established organizations. The right solution depends on your goals, audience, budget, and technical requirements.",
  },
  {
    category: "General",
    question: "How do I get started with a project?",
    answer:
      "Start by contacting us with a brief description of your idea, business goals, expected features, and preferred timeline. We can then discuss the scope and determine the next steps.",
  },
  {
    category: "Services",
    question: "What services do you offer?",
    answer:
      "Our digital service offerings can include website development, custom web applications, e-commerce experiences, responsive UI/UX design, mobile application planning, and AI or workflow automation solutions. Final deliverables depend on the agreed project scope.",
  },
  {
    category: "Services",
    question: "Can you build a custom website for my business?",
    answer:
      "Yes, we can discuss a website tailored to your brand, audience, and business objectives. The scope may include responsive layouts, service pages, contact forms, integrations, and search-engine-friendly structure.",
  },
  {
    category: "Services",
    question: "Can you redesign my existing website?",
    answer:
      "Yes. A redesign can focus on visual consistency, mobile responsiveness, navigation, content structure, accessibility, and performance. We would first review your current website and identify the improvements that best fit your goals.",
  },
  {
    category: "Services",
    question: "Do you provide e-commerce development?",
    answer:
      "E-commerce projects can include product listings, category navigation, shopping-cart experiences, payment integration planning, and order-management workflows. Platform selection and the exact features depend on your requirements.",
  },
  {
    category: "Services",
    question: "Can you integrate AI into my business?",
    answer:
      "AI may help with tasks such as information retrieval, customer-support workflows, content assistance, or repetitive process automation. We can assess whether AI is appropriate for your use case, including data privacy, reliability, and human-review requirements.",
  },
  {
    category: "Pricing & Payments",
    question: "How much does a website or application cost?",
    answer:
      "Pricing depends on project complexity, required features, integrations, design needs, and delivery timeline. After understanding your requirements, we can discuss an appropriate scope and provide a project estimate.",
  },
  {
    category: "Pricing & Payments",
    question: "Do you offer fixed-price projects?",
    answer:
      "A fixed-price arrangement may be suitable when the requirements and deliverables are clearly defined. Projects with evolving requirements may need milestone-based or separately scoped work. The commercial arrangement should be agreed before development begins.",
  },
  {
    category: "Pricing & Payments",
    question: "Are hosting and domain costs included?",
    answer:
      "Hosting, domain registration, premium services, third-party subscriptions, and other recurring costs depend on the project agreement. We recommend identifying these costs upfront so you know which expenses are one-time and which are recurring.",
  },
  {
    category: "Pricing & Payments",
    question: "Will I know the project cost before work starts?",
    answer:
      "The intended scope, deliverables, estimated timeline, and applicable charges should be discussed before work begins. If requirements change, any impact on cost or schedule should be reviewed and agreed upon separately.",
  },
  {
    category: "Process & Support",
    question: "What is your typical development process?",
    answer:
      "A typical project moves through discovery and requirement gathering, planning, design, development, testing, review, and delivery. The exact process varies according to the project and the agreed milestones.",
  },
  {
    category: "Process & Support",
    question: "How long does a project take?",
    answer:
      "The timeline depends on scope, design complexity, integrations, content readiness, feedback cycles, and testing requirements. A small website may take considerably less time than a complex application. We can provide a more useful estimate after reviewing your requirements.",
  },
  {
    category: "Process & Support",
    question: "Will my website work on mobile devices?",
    answer:
      "Responsive design is an important consideration for modern websites. The agreed implementation should be tested across relevant screen sizes and browsers to provide a consistent experience on desktop, tablet, and mobile.",
  },
  {
    category: "Process & Support",
    question: "Can I request changes during development?",
    answer:
      "Yes, feedback is an important part of the process. Small adjustments and significant scope changes can have different cost and timeline implications, so requested changes should be reviewed and agreed upon before implementation.",
  },
  {
    category: "Process & Support",
    question: "Do you provide support after launch?",
    answer:
      "Post-launch support, maintenance, bug fixes, and future enhancements can be discussed as part of the project agreement. Please confirm the available support period, response expectations, and any ongoing fees before signing off on the project.",
  },
  {
    category: "Process & Support",
    question: "Will I own my website and its source code?",
    answer:
      "Ownership, source-code handover, third-party licences, and access credentials should be clearly specified in the project agreement. Ask for these terms to be confirmed before work begins so expectations are clear for everyone.",
  },
];

const categoryIcons: Record<string, typeof CircleHelp> = {
  "All Questions": CircleHelp,
  General: Sparkles,
  Services: Code2,
  "Pricing & Payments": CreditCard,
  "Process & Support": LifeBuoy,
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    faqItems[0]?.question ?? null
  );

  const filteredFAQs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return faqItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All Questions" ||
        item.category === activeCategory;

      const matchesSearch =
        query.length === 0 ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setOpenQuestion(null);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.3),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.18),transparent_45%)]" />

        <div className="absolute right-[10%] top-10 -z-10 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute right-[13%] top-14 -z-10 h-48 w-48 rounded-full border border-white/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm font-medium text-indigo-200">
              <Sparkles className="h-4 w-4" />
              Frequently Asked Questions
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Questions?
              <span className="block bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
                We've got answers.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Find answers about our digital services, project timelines,
              pricing, development process, and ongoing support.
            </p>

            <a
              href="#faq-list"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:bg-indigo-500"
            >
              Browse FAQs
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Clear expectations
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                Project guidance
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 blur-2xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-indigo-500/20 p-4">
                  <CircleHelp className="h-8 w-8 text-indigo-200" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">
                    Need a quick answer?
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Start with the topic you're interested in and explore
                    the questions that matter to your project.
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {[
                  { icon: Code2, label: "Services & solutions" },
                  { icon: CreditCard, label: "Budget & pricing" },
                  { icon: Workflow, label: "Process & timelines" },
                ].map((item, index) => {
                  const ItemIcon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.25 + index * 0.1,
                      }}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <ItemIcon className="h-5 w-5 text-indigo-300" />
                      <span className="text-sm font-medium text-slate-200">
                        {item.label}
                      </span>
                      <ArrowRight className="ml-auto h-4 w-4 text-slate-500" />
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm text-slate-400">
                  Still unsure? We're happy to discuss your requirements.
                </p>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition hover:text-white"
                >
                  Contact our team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ list */}
      <section
        id="faq-list"
        className="scroll-mt-20 bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Help centre
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What would you like to know?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Search for an answer or select a category to narrow down your
              questions.
            </p>
          </div>

          {/* Search */}
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setOpenQuestion(null);
                }}
                placeholder="Search questions, services, pricing..."
                aria-label="Search frequently asked questions"
                className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-12 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setOpenQuestion(null);
                  }}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Categories */}
          <div className="mt-7 flex gap-2 overflow-x-auto pb-2 lg:justify-center">
            {categories.map((category) => {
              const CategoryIcon = categoryIcons[category];

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  aria-pressed={activeCategory === category}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    activeCategory === category
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:text-indigo-700"
                  }`}
                >
                  <CategoryIcon className="h-4 w-4" />
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mx-auto mt-8 max-w-4xl">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm text-slate-500" aria-live="polite">
                <span className="font-semibold text-slate-900">
                  {filteredFAQs.length}
                </span>{" "}
                {filteredFAQs.length === 1 ? "question" : "questions"} found
              </p>

              {openQuestion && filteredFAQs.some(
                (item) => item.question === openQuestion
              ) && (
                <button
                  type="button"
                  onClick={() => setOpenQuestion(null)}
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Close answer
                </button>
              )}
            </div>

            {filteredFAQs.length > 0 ? (
              <div className="space-y-3">
                {filteredFAQs.map((item, index) => {
                  const isOpen = openQuestion === item.question;
                  const answerId = `faq-answer-${index}`;

                  return (
                    <motion.article
                      key={item.question}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: 0.3,
                        delay: Math.min(index * 0.025, 0.15),
                      }}
                      className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                        isOpen
                          ? "border-indigo-200 shadow-md shadow-indigo-50"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <button
                        type="button"
                        id={`faq-question-${index}`}
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() =>
                          setOpenQuestion(isOpen ? null : item.question)
                        }
                        className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                            isOpen
                              ? "bg-indigo-600 text-white"
                              : "bg-indigo-50 text-indigo-600"
                          }`}
                        >
                          <CircleHelp className="h-5 w-5" />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-xs font-semibold uppercase tracking-wider text-indigo-600">
                            {item.category}
                          </span>
                          <span className="mt-1 block text-sm font-bold leading-6 text-slate-900 sm:text-base">
                            {item.question}
                          </span>
                        </span>

                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-indigo-600" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={answerId}
                            role="region"
                            aria-labelledby={`faq-question-${index}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              height: { duration: 0.25 },
                              opacity: { duration: 0.2 },
                            }}
                            className="overflow-hidden"
                          >
                            <div className="ml-[4.5rem] border-t border-slate-100 pb-6 pr-5 pt-4 sm:ml-[5.25rem] sm:pr-8">
                              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                                {item.answer}
                              </p>
                              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-400">
                                <CheckCircleIcon />
                                Helpful project information
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.article>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                  <Search className="h-6 w-6 text-slate-500" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  No answers found
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Try different keywords or choose another category.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory("All Questions");
                    setSearchQuery("");
                    setOpenQuestion(null);
                  }}
                  className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="absolute -bottom-28 left-1/4 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-indigo-200">
                <MessageCircle className="h-4 w-4" />
                Let's talk about your project
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Didn't find your answer?
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                Every project is different. Tell us what you're planning, and
                let's discuss the right next step for your business.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function CheckCircleIcon() {
  return (
    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
      <ShieldCheck className="h-3 w-3" />
    </span>
  );
}
