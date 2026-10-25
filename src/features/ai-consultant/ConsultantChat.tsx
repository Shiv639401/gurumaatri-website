
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Bot,
  Code2,
  Globe,
  MessageCircle,
  Minimize2,
  Plus,
  Send,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  User,
  Workflow,
  X,
  Zap,
} from "lucide-react";

type ChatRole = "assistant" | "user";

interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
  timestamp: Date;
}

interface ConsultantChatProps {
  assistantName?: string;
  subtitle?: string;
  initiallyOpen?: boolean;
  welcomeMessage?: string;
  showLauncher?: boolean;
}

const quickPrompts = [
  {
    label: "Build a website",
    icon: Globe,
    message: "I want to build a professional business website.",
  },
  {
    label: "Create an app",
    icon: Smartphone,
    message: "I want to build a mobile app. Where should I start?",
  },
  {
    label: "Sell online",
    icon: ShoppingCart,
    message: "I want to launch an e-commerce store.",
  },
  {
    label: "Automate work",
    icon: Workflow,
    message: "How can I automate repetitive business tasks?",
  },
  {
    label: "Explore AI",
    icon: Bot,
    message: "How can I use AI in my business?",
  },
  {
    label: "Custom software",
    icon: Code2,
    message: "I need custom software for my business.",
  },
];

const makeMessage = (
  role: ChatRole,
  text: string,
): ChatMessage => ({
  id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
  role,
  text,
  timestamp: new Date(),
});

function matchesAny(text: string, terms: string[]): boolean {
  return terms.some((term) => text.includes(term));
}

function getAssistantReply(input: string): string {
  const text = input.toLowerCase().trim();
  const normalized = text.replace(/[^\w\s-]/g, " ").replace(/\s+/g, " ");

  const words = new Set(normalized.split(" "));

  if (
    matchesAny(normalized, [
      "hello",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
      "namaste",
    ]) ||
    words.has("hi")
  ) {
    return "Hello! 👋 Welcome to GuruMaatri Innovations.\n\nI can help you explore business websites, e-commerce stores, mobile apps, custom software, AI and workflow automation.\n\nWhat are you planning to build?";
  }

  if (
    matchesAny(normalized, [
      "price",
      "pricing",
      "budget",
      "cost",
      "affordable",
      "how much",
      "charges",
      "rate",
      "quotation",
      "quote",
    ])
  ) {
    return "Project cost depends on the features, design, integrations and delivery scope.\n\nA useful first step is to identify your essential features and separate them from things that can be added later.\n\nYou can use our Project Estimator for an initial planning estimate, or contact our team to discuss your requirements.\n\nDo you have a budget range in mind?";
  }

  if (
    matchesAny(normalized, [
      "e-commerce",
      "ecommerce",
      "online store",
      "sell online",
      "shopping website",
      "shopping cart",
      "payment gateway",
      "online shop",
    ]) ||
    words.has("shopify")
  ) {
    return "For an e-commerce project, I recommend planning these essentials first:\n\n1. Product catalogue and product pages\n2. Shopping cart and checkout\n3. Payment gateway integration\n4. Order and inventory management\n5. Mobile-friendly design and analytics\n\nThe best setup depends on your products and business model.\n\nHow many products do you expect to sell, and do you already have a preferred payment provider?";
  }

  if (
    matchesAny(normalized, [
      "mobile app",
      "mobile application",
      "android app",
      "ios app",
      "iphone app",
      "app development",
      "application development",
    ])
  ) {
    return "For a mobile app, start with the problem it should solve and the people who will use it.\n\nA practical first phase includes:\n\n1. Defining the core user journey\n2. Selecting essential MVP features\n3. Designing interface prototypes\n4. Choosing the right development approach\n5. Planning backend and integrations\n\nWill your app be for customers, employees, or a wider public audience?";
  }

  if (
    matchesAny(normalized, [
      "website",
      "web design",
      "landing page",
      "web development",
      "business site",
      "redesign",
      "wordpress",
    ])
  ) {
    return "A strong business website should clearly explain what you offer, build trust, work smoothly on mobile and make the next action obvious.\n\nI'd suggest starting with:\n\n1. A clear homepage and service pages\n2. Responsive design\n3. Contact and lead-generation forms\n4. Performance and SEO foundations\n5. Analytics to understand visitor behaviour\n\nDo you need a new website, a redesign, or a landing page for a specific campaign?";
  }

  if (
    matchesAny(normalized, [
      "automation",
      "automate",
      "repetitive",
      "workflow",
      "manual tasks",
      "integrate tools",
      "business process",
    ])
  ) {
    return "Workflow automation works best when you start with a repetitive process that has clear rules.\n\nA sensible approach is to map the current process, identify manual steps, connect the tools involved, and test the automation with appropriate error handling.\n\nWhich task takes the most time in your business—for example, lead follow-ups, data entry, reports, appointment reminders, or customer support?";
  }

  if (
    matchesAny(normalized, [
      "artificial intelligence",
      " ai ",
      "chatbot",
      "customer support",
      "generative ai",
      "machine learning",
      "ai tool",
      "ai in my business",
    ]) ||
    normalized === "ai" ||
    normalized.startsWith("ai ")
  ) {
    return "AI can be useful for customer support, internal knowledge search, document processing and selected repetitive workflows.\n\nI'd start with one clearly defined use case, a small test set, privacy and access controls, and a way for a person to review uncertain outputs.\n\nWhat would you like AI to do first: answer customer questions, help your team find information, process documents, or automate a workflow?";
  }

  if (
    matchesAny(normalized, [
      "custom software",
      "software development",
      "dashboard",
      "admin panel",
      "business portal",
      "web application",
      "custom app",
      "management system",
      "crm",
      "erp",
    ])
  ) {
    return "Custom software should be designed around your actual business workflow rather than adding complexity you don't need.\n\nA good first phase is to define:\n\n1. Who will use the system\n2. The main workflow it needs to support\n3. The information it needs to store\n4. Reports, permissions and integrations\n\nWhat process are you trying to improve, and who will use the software?";
  }

  if (
    matchesAny(normalized, [
      "seo",
      "google ranking",
      "search ranking",
      "visibility",
      "website traffic",
      "organic traffic",
      "search engine",
    ])
  ) {
    return "For better organic visibility, start with technically accessible pages, useful content that matches search intent, clear page titles and descriptions, fast loading and mobile usability.\n\nSEO takes time, and rankings or traffic improvements cannot be guaranteed.\n\nIs your website already live, or are you planning SEO for a new website?";
  }

  if (
    matchesAny(normalized, [
      "estimator",
      "estimate",
      "project cost calculator",
      "calculate cost",
      "project budget",
    ])
  ) {
    return "Our Project Estimator is a useful starting point for organising your requirements and getting an initial planning estimate.\n\nThe final quote depends on the confirmed scope, integrations, content, design and delivery requirements.\n\nUse the button below to open the estimator.";
  }

  if (
    matchesAny(normalized, [
      "consultant",
      "human",
      "real person",
      "talk to someone",
      "talk to your team",
      "contact",
      "speak to someone",
      "sales team",
    ])
  ) {
    return "Absolutely! For advice specific to your project, the best next step is to share your goals and key requirements with the GuruMaatri Innovations team.\n\nOpen our Contact page to describe your project. Include your expected features, target users and preferred timeline if you know them.";
  }

  if (
    matchesAny(normalized, [
      "thank",
      "thanks",
      "thank you",
    ])
  ) {
    return "You're welcome! 😊\n\nIf you share a little more about your idea, I can help you organise the requirements and identify a sensible first step.";
  }

  if (
    matchesAny(normalized, [
      "privacy",
      "secure",
      "security",
      "password",
      "personal information",
    ])
  ) {
    return "It's best not to share passwords, payment details, confidential documents or other sensitive information in this chat.\n\nFor a project involving personal or business data, security, access permissions and privacy requirements should be discussed during project planning.\n\nTell me about the type of solution you need without including sensitive information.";
  }

  return "I can help you plan your next digital project with GuruMaatri Innovations.\n\nWe can discuss business websites, e-commerce, mobile apps, custom software, AI and workflow automation.\n\nTo give you a more useful recommendation, tell me:\n\n1. What are you trying to achieve?\n2. Who will use the solution?\n3. What is the biggest challenge you need to solve?\n\nYou can also choose one of the quick-start options when starting a new chat.";
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function AssistantAvatar({ small = false }: { small?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-200/50 ${
        small ? "h-8 w-8 rounded-xl" : "h-11 w-11"
      }`}
    >
      <Sparkles size={small ? 16 : 21} />
    </div>
  );
}

function TypingIndicator() {
  return (
    <div
      className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-slate-200 bg-white px-4 py-3"
      aria-label="Assistant is typing"
      role="status"
    >
      {[0, 1, 2].map((item) => (
        <motion.span
          key={item}
          className="h-1.5 w-1.5 rounded-full bg-indigo-500"
          animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            delay: item * 0.15,
          }}
        />
      ))}
      <span className="ml-1 text-xs text-slate-500">
        Thinking...
      </span>
    </div>
  );
}

export default function ConsultantChat({
  assistantName = "GuruMaatri Assistant",
  subtitle = "Digital project guidance",
  initiallyOpen = false,
  welcomeMessage = "Hi there! 👋 I'm your GuruMaatri digital consultant. Tell me what you're planning, and I'll help you figure out the next step.",
  showLauncher = true,
}: ConsultantChatProps) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    makeMessage("assistant", welcomeMessage),
  ]);

  const messageEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const responseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const showQuickPrompts =
    messages.length === 1 && messages[0]?.role === "assistant";

  const showEstimatorLink = messages.some((message) =>
    message.text.toLowerCase().includes("project estimator"),
  );

  const clearResponseTimer = () => {
    if (responseTimerRef.current !== null) {
      clearTimeout(responseTimerRef.current);
      responseTimerRef.current = null;
    }
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 180);

    return () => window.clearTimeout(focusTimer);
  }, [isOpen]);

  useEffect(() => {
    return () => {
      clearResponseTimer();
    };
  }, []);

  const sendMessage = (rawText: string) => {
    const text = rawText.trim();

    if (!text || isTyping) return;

    clearResponseTimer();

    setMessages((current) => [
      ...current,
      makeMessage("user", text),
    ]);

    setInput("");
    setIsTyping(true);

    responseTimerRef.current = setTimeout(() => {
      setMessages((current) => [
        ...current,
        makeMessage("assistant", getAssistantReply(text)),
      ]);

      setIsTyping(false);
      responseTimerRef.current = null;
    }, 650);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  const handleInputKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const startNewChat = () => {
    clearResponseTimer();
    setIsTyping(false);
    setInput("");
    setMessages([makeMessage("assistant", welcomeMessage)]);

    window.setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <>
      {/* Floating chat launcher */}
      {showLauncher && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setIsOpen((current) => !current)}
          aria-label={
            isOpen ? "Close consultant chat" : "Open consultant chat"
          }
          aria-expanded={isOpen}
          aria-controls="gm-consultant-chat-panel"
          className="gm-no-print fixed bottom-5 right-5 z-[100] flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 p-2.5 pr-5 text-white shadow-xl shadow-indigo-950/20 transition hover:shadow-2xl hover:shadow-indigo-950/25 sm:bottom-7 sm:right-7"
        >
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10">
            {isOpen ? <X size={21} /> : <MessageCircle size={22} />}

            {!isOpen && (
              <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-indigo-600 bg-emerald-400" />
            )}
          </span>

          <span className="text-left">
            <span className="block text-sm font-extrabold">
              {isOpen ? "Close chat" : "Let's talk"}
            </span>
            <span className="mt-0.5 block text-[10px] font-medium text-indigo-100">
              Digital project assistant
            </span>
          </span>
        </motion.button>
      )}

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            id="gm-consultant-chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            role="dialog"
            aria-label={assistantName}
            aria-modal="false"
            className={`gm-no-print fixed z-[101] flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-950/20 ${
              showLauncher
                ? "inset-x-3 bottom-[5.5rem] h-[min(690px,calc(100dvh-7rem))] sm:inset-auto sm:bottom-24 sm:right-7 sm:h-[min(690px,calc(100dvh-8rem))] sm:w-[410px]"
                : "inset-2 h-[calc(100dvh-1rem)] sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[min(720px,calc(100dvh-3rem))] sm:w-[430px]"
            }`}
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-700 to-violet-700 px-5 pb-5 pt-5 text-white">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full border-[24px] border-white/5"
              />

              <div className="relative flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                      <Sparkles size={23} />
                    </div>
                    <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-indigo-700 bg-emerald-400" />
                  </div>

                  <div className="min-w-0">
                    <h2 className="truncate text-sm font-extrabold sm:text-base">
                      {assistantName}
                    </h2>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-indigo-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-1">
                  <button
                    type="button"
                    onClick={startNewChat}
                    aria-label="Start a new chat"
                    title="New conversation"
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Plus size={19} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Minimize chat"
                    title="Minimize"
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Minimize2 size={17} />
                  </button>
                </div>
              </div>

              <div className="relative mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2.5">
                <ShieldCheck
                  size={15}
                  className="shrink-0 text-emerald-300"
                />
                <p className="text-[11px] leading-4 text-indigo-50">
                  Share your project goals—avoid passwords or sensitive information.
                </p>
              </div>
            </div>

            {/* Conversation */}
            <div
              className="flex-1 space-y-4 overflow-y-auto bg-slate-50/70 px-4 py-5 sm:px-5"
              aria-live="polite"
              aria-relevant="additions text"
              aria-label="Chat messages"
            >
              <div className="flex items-center justify-center">
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Your project conversation
                </span>
              </div>

              {messages.map((message) => {
                const isAssistant = message.role === "assistant";

                return (
                  <div
                    key={message.id}
                    className={`flex items-end gap-2.5 ${
                      isAssistant ? "justify-start" : "justify-end"
                    }`}
                  >
                    {isAssistant && <AssistantAvatar small />}

                    <div
                      className={`flex max-w-[85%] flex-col ${
                        isAssistant ? "items-start" : "items-end"
                      }`}
                    >
                      <div
                        className={`rounded-2xl px-4 py-3 text-[13px] leading-6 ${
                          isAssistant
                            ? "rounded-bl-sm border border-slate-200 bg-white text-slate-700 shadow-sm"
                            : "rounded-br-sm bg-indigo-600 text-white shadow-sm shadow-indigo-200"
                        }`}
                      >
                        <p className="whitespace-pre-wrap break-words">
                          {message.text}
                        </p>
                      </div>

                      <span className="mt-1.5 px-1 text-[10px] text-slate-400">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>

                    {!isAssistant && (
                      <div
                        aria-hidden="true"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-200 text-slate-600"
                      >
                        <User size={16} />
                      </div>
                    )}
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-end gap-2.5">
                  <AssistantAvatar small />
                  <TypingIndicator />
                </div>
              )}

              {showQuickPrompts && !isTyping && (
                <div className="pl-10">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">
                    Quick start
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {quickPrompts.map((prompt) => {
                      const Icon = prompt.icon;

                      return (
                        <button
                          key={prompt.label}
                          type="button"
                          onClick={() => sendMessage(prompt.message)}
                          className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-white px-3 py-2 text-[11px] font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                        >
                          <Icon size={13} />
                          {prompt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {showEstimatorLink && (
                <div className="pl-10">
                  <Link
                    to="/estimator"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                  >
                    Open Project Estimator
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}

              {messages.some((message) =>
                message.text.toLowerCase().includes("contact page"),
              ) && (
                <div className="pl-10">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 focus-visible:outline-none focus-visible:underline"
                  >
                    Talk to our team
                    <ArrowRight size={13} />
                  </Link>
                </div>
              )}

              <div ref={messageEndRef} />
            </div>

            {/* Composer */}
            <div className="border-t border-slate-200 bg-white p-3.5 sm:p-4">
              <form onSubmit={handleSubmit} className="relative">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Tell us about your project..."
                  aria-label="Type your message"
                  maxLength={1500}
                  autoComplete="off"
                  className="gm-input !rounded-2xl !py-3.5 !pl-4 !pr-14 !text-sm"
                  disabled={isTyping}
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  aria-label="Send message"
                  className="absolute right-1.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  <Send size={17} />
                </button>
              </form>

              <div className="mt-2.5 flex items-center justify-between gap-3 px-1">
                <span className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <Zap size={11} className="text-indigo-400" />
                  Project guidance assistant
                </span>

                <span
                  className="text-[10px] text-slate-400"
                  aria-live="off"
                >
                  {input.length}/1500
                </span>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
