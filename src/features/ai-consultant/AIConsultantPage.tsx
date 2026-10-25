
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  Code2,
  Globe,
  Lightbulb,
  MessageCircle,
  Plus,
  RefreshCw,
  Rocket,
  Send,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  WandSparkles,
  Workflow,
  Zap,
} from "lucide-react";

type GoalId =
  | "website"
  | "ecommerce"
  | "mobile"
  | "automation"
  | "ai"
  | "software";

type Message = {
  id: string;
  role: "assistant" | "user";
  text: string;
  suggestions?: string[];
};

type Goal = {
  id: GoalId;
  title: string;
  description: string;
  icon: typeof Globe;
};

type GoalDetail = {
  title: string;
  summary: string;
  solution: string;
  steps: string[];
  features: string[];
  timeline: string;
  budget: string;
};

/**
 * Unique IDs prevent React key collisions when multiple messages
 * are added within the same millisecond.
 */
let messageSequence = 0;

function createMessageId(): string {
  messageSequence += 1;
  return `${Date.now()}-${messageSequence}`;
}

const goals: Goal[] = [
  {
    id: "website",
    title: "Build a website",
    description: "Create a professional digital presence.",
    icon: Globe,
  },
  {
    id: "ecommerce",
    title: "Sell online",
    description: "Launch or improve an online store.",
    icon: ShoppingCart,
  },
  {
    id: "mobile",
    title: "Build a mobile app",
    description: "Create an app for customers or teams.",
    icon: Smartphone,
  },
  {
    id: "automation",
    title: "Automate workflows",
    description: "Reduce repetitive manual tasks.",
    icon: Workflow,
  },
  {
    id: "ai",
    title: "Use AI in my business",
    description: "Explore assistants and AI-powered tools.",
    icon: Bot,
  },
  {
    id: "software",
    title: "Build custom software",
    description: "Create dashboards, portals or business tools.",
    icon: Code2,
  },
];

const goalDetails: Record<GoalId, GoalDetail> = {
  website: {
    title: "A conversion-focused business website",
    summary:
      "A clear, fast and responsive website can explain your offering, build trust and turn visitors into qualified inquiries.",
    solution:
      "Start with a responsive business website and a clear path from landing page to inquiry. Expand functionality as you learn what your audience needs.",
    steps: [
      "Define your audience, offering and primary conversion goal.",
      "Plan the sitemap, page structure and content.",
      "Design and develop responsive pages.",
      "Test performance, forms, accessibility and launch readiness.",
    ],
    features: [
      "Responsive page layouts",
      "Clear calls to action",
      "Contact or lead-generation forms",
      "SEO foundations and analytics",
    ],
    timeline: "About 2–6 weeks",
    budget: "₹15,000–₹60,000",
  },
  ecommerce: {
    title: "An online store built around your customers",
    summary:
      "A well-structured shopping experience makes it easier for customers to discover products, check out and return.",
    solution:
      "Begin with a product catalogue, dependable checkout and straightforward order management. Choose a platform based on your product range and operational needs.",
    steps: [
      "Define your catalogue, customer journey and shipping rules.",
      "Choose a suitable commerce platform and payment provider.",
      "Build product pages, cart and checkout.",
      "Test orders, notifications, mobile usability and security.",
    ],
    features: [
      "Product catalogue and search",
      "Shopping cart and checkout",
      "Payment integration",
      "Order management and analytics",
    ],
    timeline: "About 4–10 weeks",
    budget: "₹30,000–₹1,50,000+",
  },
  mobile: {
    title: "A mobile app focused on a real user need",
    summary:
      "The right mobile experience starts with a specific user problem, a focused feature set and a plan for validating demand.",
    solution:
      "Map the core user journey first. Consider a focused MVP before investing in a larger application with multiple workflows.",
    steps: [
      "Define target users and the primary use case.",
      "Prioritize MVP features and user flows.",
      "Create interface prototypes and application architecture.",
      "Develop, test and plan the release process.",
    ],
    features: [
      "User onboarding and profiles",
      "Core app workflows",
      "API and backend integration",
      "Testing and release preparation",
    ],
    timeline: "About 8–16+ weeks",
    budget: "₹50,000–₹3,00,000+",
  },
  automation: {
    title: "A smarter, more automated workflow",
    summary:
      "Automation can reduce repetitive work, improve consistency and give your team more time for tasks that need human judgment.",
    solution:
      "Identify one high-volume, repetitive process and automate it first. Measure time saved and reliability before expanding to other workflows.",
    steps: [
      "Map the current process and identify bottlenecks.",
      "List the tools, triggers and data involved.",
      "Build a small automation with error handling.",
      "Test edge cases and monitor the results.",
    ],
    features: [
      "Workflow and trigger setup",
      "Tool and API integrations",
      "Notifications and task routing",
      "Logging and error handling",
    ],
    timeline: "About 2–8 weeks",
    budget: "₹20,000–₹1,00,000+",
  },
  ai: {
    title: "A practical AI solution for your business",
    summary:
      "AI can help with customer questions, internal knowledge discovery, document workflows and other clearly defined tasks.",
    solution:
      "Choose one measurable use case and test it with real examples. Add appropriate data access controls, human review and evaluation before relying on it in production.",
    steps: [
      "Define the task, users and success criteria.",
      "Review the available data and privacy requirements.",
      "Prototype the AI workflow and evaluate its outputs.",
      "Add safeguards, monitoring and a deployment plan.",
    ],
    features: [
      "AI assistant or chat interface",
      "Knowledge-base integration where appropriate",
      "Workflow or API integration",
      "Evaluation and human-review controls",
    ],
    timeline: "About 3–10 weeks",
    budget: "₹35,000–₹2,00,000+",
  },
  software: {
    title: "Custom software that fits your operations",
    summary:
      "Purpose-built software can bring scattered processes into one place, improve visibility and help teams work more consistently.",
    solution:
      "Start with the essential workflow, roles and data model. Build a usable first release, then extend it based on actual usage.",
    steps: [
      "Map users, roles and business processes.",
      "Define the data model and core workflows.",
      "Build the interface, backend and integrations.",
      "Test permissions, reliability and deployment readiness.",
    ],
    features: [
      "Role-based user access",
      "Custom dashboards and workflows",
      "Data management and reporting",
      "API integrations and testing",
    ],
    timeline: "About 6–16+ weeks",
    budget: "₹45,000–₹3,00,000+",
  },
};

const quickPrompts = [
  "I want to grow my business online",
  "How can I automate repetitive work?",
  "I have an app idea but don't know where to start",
  "I want to use AI to improve customer support",
];

function createRecommendation(
  goal: GoalId,
  userContext = "",
): Message {
  const detail = goalDetails[goal];

  const contextLine = userContext.trim()
    ? `\n\nBased on what you shared — "${userContext.trim()}" — validate the most important user need before committing to the full scope.`
    : "";

  return {
    id: createMessageId(),
    role: "assistant",
    text: [
      `## ${detail.title}`,
      "",
      detail.summary,
      "",
      "**Recommended approach**",
      detail.solution + contextLine,
      "",
      "**Suggested roadmap**",
      ...detail.steps.map(
        (step, index) => `${index + 1}. ${step}`,
      ),
      "",
      "**Features to consider**",
      ...detail.features.map((feature) => `• ${feature}`),
      "",
      "**Indicative planning range**",
      `• Timeline: ${detail.timeline}`,
      `• Budget: ${detail.budget}`,
      "",
      "These are broad planning estimates, not a quote or delivery guarantee. Actual scope, complexity, integrations and third-party costs can change both.",
    ].join("\n"),
    suggestions: [
      "Make the plan more affordable",
      "What should my MVP include?",
      "Help me plan the first phase",
    ],
  };
}

function createGeneralReply(text: string): Message {
  const normalized = text.toLowerCase();

  let reply =
    "A good starting point is to define the business problem, the people affected and the outcome you want. From there, compare a small first release with a more complete solution. What is the main result you want to achieve?";

  if (
    normalized.includes("budget") ||
    normalized.includes("affordable") ||
    normalized.includes("cheap") ||
    normalized.includes("cost") ||
    normalized.includes("price")
  ) {
    reply =
      "To control costs, start with an MVP: one primary user journey, essential features and a clear success metric. Defer advanced dashboards, complex integrations and optional automation until the core solution is validated. These budget ranges are indicative only; use the project estimator for a rough planning breakdown.";
  } else if (
    normalized.includes("mvp") ||
    normalized.includes("first phase") ||
    normalized.includes("start")
  ) {
    reply =
      "For an MVP, focus on three things: the main user problem, the smallest feature set that solves it, and a way to measure success. Write down what must be included for launch and what can wait. Then prototype the journey, test it with users and build in short, reviewable phases.";
  } else if (
    normalized.includes("ai") ||
    normalized.includes("artificial intelligence")
  ) {
    reply =
      "For an AI project, first identify a task where AI can save time or improve access to information. Prepare representative examples, define how output quality will be evaluated, and decide when a human must review results. Data privacy, reliability and ongoing model costs should be considered before production deployment.";
  } else if (
    normalized.includes("timeline") ||
    normalized.includes("how long") ||
    normalized.includes("urgent")
  ) {
    reply =
      "Delivery time depends on scope, team availability, integrations and review cycles. A small website may take weeks, while a custom application can take several months. Define the must-have features first, then agree on milestones and acceptance criteria before setting a launch date.";
  } else if (
    normalized.includes("website") ||
    normalized.includes("online")
  ) {
    reply =
      "For a stronger online presence, begin with a clear value proposition, a mobile-friendly experience, useful service or product pages, and one primary conversion action. Add analytics so you can understand what visitors do. Choose the platform based on your content, integrations and maintenance needs.";
  } else if (
    normalized.includes("automation") ||
    normalized.includes("repetitive")
  ) {
    reply =
      "Start by choosing a repetitive workflow with clear inputs and outputs. Map the current steps, identify exceptions, and estimate how much time the process consumes. Automate a small part first, add error notifications and measure time saved before expanding the workflow.";
  } else if (
    normalized.includes("contact") ||
    normalized.includes("talk to") ||
    normalized.includes("human") ||
    normalized.includes("team")
  ) {
    reply =
      "You can contact the GuruMaatri Innovations team to discuss your requirements. Share your main objective, must-have features, approximate budget and preferred timeline if you know them.";
  }

  return {
    id: createMessageId(),
    role: "assistant",
    text: `${reply}\n\nFor a more tailored recommendation, select a project goal below or tell me a little about your business and what you want to improve.`,
    suggestions: [
      "Recommend a project type",
      "Make the plan more affordable",
      "What should my MVP include?",
    ],
  };
}

function formatMessage(text: string) {
  return text.split("\n").map((line, index) => {
    if (line.startsWith("## ")) {
      return (
        <h3
          key={index}
          className="mb-3 mt-2 text-lg font-semibold tracking-tight text-slate-900"
        >
          {line.slice(3)}
        </h3>
      );
    }

    if (line.startsWith("**") && line.endsWith("**")) {
      return (
        <p
          key={index}
          className="mb-2 mt-4 font-semibold text-slate-900"
        >
          {line.slice(2, -2)}
        </p>
      );
    }

    if (/^\d+\.\s/.test(line)) {
      return (
        <p
          key={index}
          className="my-2 pl-1 text-sm leading-6 text-slate-700"
        >
          {line}
        </p>
      );
    }

    if (line.startsWith("• ")) {
      return (
        <p
          key={index}
          className="my-1.5 flex gap-2 text-sm leading-6 text-slate-700"
        >
          <Check
            size={15}
            className="mt-1 shrink-0 text-emerald-600"
          />
          <span>{line.slice(2)}</span>
        </p>
      );
    }

    if (!line.trim()) {
      return <div key={index} className="h-2" />;
    }

    return (
      <p
        key={index}
        className="text-sm leading-7 text-slate-700"
      >
        {line}
      </p>
    );
  });
}

export default function AIConsultantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: createMessageId(),
      role: "assistant",
      text: [
        "Hi! I'm your project planning assistant for GuruMaatri Innovations. ✨",
        "",
        "I can help you explore digital solutions, organize your requirements and identify sensible next steps.",
        "",
        "**What would you like to achieve?**",
        "",
        "Choose a goal below, try a suggested question, or describe your idea in your own words.",
      ].join("\n"),
    },
  ]);

  const [input, setInput] = useState("");
  const [selectedGoal, setSelectedGoal] = useState<GoalId | "">("");
  const [showGoals, setShowGoals] = useState(true);

  const conversationEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    conversationEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

  const addMessage = (message: Message) => {
    setMessages((current) => [...current, message]);
  };

  const selectGoal = (goal: GoalId) => {
    const selected = goals.find((item) => item.id === goal);

    setSelectedGoal(goal);
    setShowGoals(false);

    addMessage({
      id: createMessageId(),
      role: "user",
      text: `I want help with: ${selected?.title ?? goal}`,
    });

    addMessage(createRecommendation(goal));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = input.trim();

    if (!text) return;

    addMessage({
      id: createMessageId(),
      role: "user",
      text,
    });

    addMessage(createGeneralReply(text));

    setInput("");
    setShowGoals(true);
  };

  const resetConversation = () => {
    setMessages([
      {
        id: createMessageId(),
        role: "assistant",
        text: [
          "Let's start fresh! Tell me what you want to build or improve, and we'll explore the options together.",
          "",
          "**What would you like to achieve?**",
        ].join("\n"),
      },
    ]);

    setSelectedGoal("");
    setInput("");
    setShowGoals(true);
  };

  const contactSummary = [
    "I'd like to discuss a project with GuruMaatri Innovations.",
    selectedGoal
      ? `My selected goal: ${goals.find((item) => item.id === selectedGoal)?.title ?? selectedGoal}`
      : "",
    "Please help me validate the scope, budget and next steps.",
  ]
    .filter(Boolean)
    .join("\n");

  const contactUrl = `/contact?message=${encodeURIComponent(contactSummary)}`;

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.27),transparent_43%),radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.13),transparent_40%)]" />

        <div className="absolute right-[-70px] top-10 -z-10 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />
        <div className="absolute right-[-20px] top-24 -z-10 h-52 w-52 rounded-full border border-indigo-400/20 sm:h-72 sm:w-72" />

        <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-indigo-200">
              <WandSparkles size={16} />
              Your digital strategy companion
            </div>

            <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Big ideas deserve
              <span className="block bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
                a smarter starting point.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore digital opportunities, clarify your requirements and
              build a practical starting roadmap for your business.
            </p>

            <a
              href="#consultant"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
            >
              Explore your options
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Clarify the goal",
                description: "Start with the problem you want to solve.",
              },
              {
                icon: Lightbulb,
                title: "Explore solutions",
                description: "Compare practical digital approaches.",
              },
              {
                icon: Rocket,
                title: "Plan the next step",
                description: "Turn a rough idea into an action plan.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-left backdrop-blur-sm"
                >
                  <Icon size={22} className="text-indigo-300" />
                  <h2 className="mt-4 font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultant */}
      <section
        id="consultant"
        className="scroll-mt-8 px-4 py-12 sm:px-8 sm:py-16 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-7 lg:grid-cols-[minmax(0,1fr)_310px]">
          {/* Chat panel */}
          <div className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 p-5 sm:p-6">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-600/20">
                  <Bot size={25} />
                </div>

                <div className="min-w-0">
                  <h2 className="font-semibold">AI Project Consultant</h2>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Interactive project planning
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={resetConversation}
                className="flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:text-sm"
                aria-label="Reset conversation"
              >
                <RefreshCw size={14} />
                <span className="hidden sm:inline">Reset chat</span>
              </button>
            </div>

            <div
              aria-live="polite"
              aria-relevant="additions"
              className="max-h-[650px] min-h-[390px] space-y-6 overflow-y-auto bg-gradient-to-b from-slate-50/80 to-white p-4 sm:p-7"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                      <Sparkles size={18} />
                    </div>
                  )}

                  <div
                    className={`min-w-0 max-w-[90%] rounded-2xl p-4 sm:max-w-[85%] sm:p-5 ${
                      message.role === "user"
                        ? "rounded-tr-sm bg-indigo-600 text-white"
                        : "rounded-tl-sm border border-slate-200 bg-white shadow-sm"
                    }`}
                  >
                    {message.role === "user" ? (
                      <p className="whitespace-pre-wrap break-words text-sm leading-7">
                        {message.text}
                      </p>
                    ) : (
                      <div>{formatMessage(message.text)}</div>
                    )}

                    {message.suggestions &&
                      message.role === "assistant" && (
                        <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                          {message.suggestions.map((suggestion) => (
                            <button
                              key={suggestion}
                              type="button"
                              onClick={() => {
                                setInput(suggestion);
                                inputRef.current?.focus();
                              }}
                              className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-2 text-left text-xs font-medium text-indigo-800 transition hover:border-indigo-300 hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                  </div>

                  {message.role === "user" && (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-200 text-slate-600">
                      <MessageCircle size={17} />
                    </div>
                  )}
                </div>
              ))}

              <div ref={conversationEndRef} />
            </div>

            {/* Goal selector */}
            {showGoals && (
              <div className="border-t border-slate-100 px-4 py-5 sm:px-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-slate-800">
                    Choose your project goal
                  </h3>
                  <span className="text-xs text-slate-400">
                    Select one
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {goals.map((goal) => {
                    const Icon = goal.icon;
                    const active = selectedGoal === goal.id;

                    return (
                      <button
                        key={goal.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => selectGoal(goal.id)}
                        className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                          active
                            ? "border-indigo-400 bg-indigo-50"
                            : "border-slate-200 hover:border-indigo-200"
                        }`}
                      >
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                            active
                              ? "bg-indigo-600 text-white"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          <Icon size={19} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-slate-900">
                            {goal.title}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-slate-600">
                            {goal.description}
                          </p>
                        </div>

                        <ChevronDown
                          size={15}
                          className="-rotate-90 shrink-0 text-slate-400"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Chat input */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-slate-100 bg-white p-4 sm:p-6"
            >
              <label
                htmlFor="consultant-message"
                className="sr-only"
              >
                Describe your business goal or question
              </label>

              <div className="flex items-end gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-2 transition focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/10">
                <textarea
                  ref={inputRef}
                  id="consultant-message"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" &&
                      !event.shiftKey &&
                      !event.nativeEvent.isComposing
                    ) {
                      event.preventDefault();
                      event.currentTarget.form?.requestSubmit();
                    }
                  }}
                  rows={2}
                  maxLength={1500}
                  placeholder="Describe your idea, challenge or business goal..."
                  className="max-h-36 min-h-12 flex-1 resize-y bg-transparent px-3 py-2 text-sm leading-6 outline-none placeholder:text-slate-400"
                />

                <button
                  type="submit"
                  disabled={!input.trim()}
                  aria-label="Send message"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  <Send size={18} />
                </button>
              </div>

              <div className="mt-2 flex items-center justify-between gap-3 px-1">
                <p className="text-xs leading-5 text-slate-400">
                  Enter to send · Shift + Enter for a new line
                </p>
                <span className="shrink-0 text-xs text-slate-400">
                  {input.length}/1500
                </span>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-8">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                  <Lightbulb size={23} />
                </div>

                <h2 className="mt-5 text-xl font-semibold">
                  Get more from your idea
                </h2>

                <p className="mt-2 text-sm leading-6 text-indigo-100">
                  Start with a specific goal. The clearer the problem,
                  the easier it is to explore useful solutions.
                </p>
              </div>

              <div className="p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  Try asking
                </h3>

                <div className="mt-3 space-y-2">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => {
                        setInput(prompt);
                        inputRef.current?.focus();
                      }}
                      className="flex w-full items-start gap-3 rounded-xl border border-slate-100 p-3 text-left text-sm leading-6 text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                      <Plus
                        size={16}
                        className="mt-1 shrink-0 text-indigo-600"
                      />
                      <span>{prompt}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <ShieldCheck size={22} />
              </div>

              <h2 className="mt-4 font-semibold">
                Practical recommendations
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Use these suggestions as a starting point. Validate
                technical, financial and business decisions against your
                real requirements.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Zap size={22} />
              </div>

              <h2 className="mt-4 font-semibold">
                Ready for a real quote?
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Discuss the project scope, delivery expectations and
                budget with the team.
              </p>

              <Link
                to={contactUrl}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 transition hover:text-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Continue to contact
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl bg-slate-950 p-7 sm:p-10 lg:flex-row lg:items-center lg:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-indigo-300">
              From idea to implementation
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let's create something that moves you forward.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Explore our services, review our work, or start a
              conversation about your next project.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              Explore services
              <ArrowRight size={17} />
            </Link>

            <Link
              to={contactUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              Contact us
              <MessageCircle size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
