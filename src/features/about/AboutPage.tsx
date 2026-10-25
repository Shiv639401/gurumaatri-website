import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Compass,
  Cpu,
  Heart,
  Lightbulb,
  Mail,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

const profile = {
  name: "Shivam Mishra",
  role: "Founder & Digital Solutions Creator",
  image: "/images/founder.jpeg.png",
  email: "hello@gurumaatri.com",
};

const principles = [
  {
    number: "01",
    title: "Purpose over appearance",
    description:
      "A digital product should do more than look beautiful. It should solve a meaningful problem and make the experience easier for its users.",
    icon: Target,
  },
  {
    number: "02",
    title: "Curiosity creates progress",
    description:
      "I believe in exploring new ideas, learning through experimentation and finding practical ways to turn concepts into working solutions.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Technology with intention",
    description:
      "The right technology is the one that fits the problem, supports the people using it and creates a foundation that can evolve.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Trust through clarity",
    description:
      "Clear communication, realistic expectations and thoughtful execution should be part of every digital collaboration.",
    icon: ShieldCheck,
  },
];

const capabilities = [
  {
    number: "01",
    title: "Web Development",
    description: "Responsive websites and modern digital experiences.",
    icon: MonitorSmartphone,
    color: "indigo",
  },
  {
    number: "02",
    title: "Application Development",
    description: "Interactive interfaces and purposeful web applications.",
    icon: Code2,
    color: "cyan",
  },
  {
    number: "03",
    title: "Digital Strategy",
    description: "A clearer direction from idea to implementation.",
    icon: Compass,
    color: "violet",
  },
  {
    number: "04",
    title: "AI & Automation",
    description: "Exploring smarter workflows and useful AI applications.",
    icon: Workflow,
    color: "emerald",
  },
];

const journey = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "Start with the goal, understand the people involved and identify what the solution actually needs to accomplish.",
  },
  {
    number: "02",
    title: "Shape the experience",
    description:
      "Plan the structure, user journey and visual direction before turning the idea into an interface.",
  },
  {
    number: "03",
    title: "Build with intention",
    description:
      "Develop a responsive, maintainable solution with attention to usability, details and performance.",
  },
  {
    number: "04",
    title: "Improve continuously",
    description:
      "Review the result, learn from feedback and identify opportunities to make the experience better.",
  },
];

const capabilityIconColor: Record<string, string> = {
  indigo: "bg-indigo-50 text-indigo-700 group-hover:bg-indigo-600",
  cyan: "bg-cyan-50 text-cyan-700 group-hover:bg-cyan-600",
  violet: "bg-violet-50 text-violet-700 group-hover:bg-violet-600",
  emerald: "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600",
};

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-700 shadow-sm backdrop-blur sm:text-xs">
      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
      {children}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
}

function ProfileCard() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div
        aria-hidden="true"
        className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-indigo-500/35 via-violet-500/20 to-cyan-400/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-3 top-12 h-24 w-24 rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-xl sm:-right-7 sm:h-32 sm:w-32"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-4 -left-3 h-24 w-24 rounded-full border border-cyan-300/20 bg-cyan-300/10 blur-sm sm:-left-7 sm:h-32 sm:w-32"
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] p-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:rounded-[2.5rem] sm:p-4">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-indigo-200 via-slate-200 to-cyan-100">
          {!imageFailed ? (
            <img
              src={profile.image}
              alt={`${profile.name}, ${profile.role} at GuruMaatri Innovations`}
              className="h-[390px] w-full object-cover object-center sm:h-[510px]"
              loading="eager"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div
              role="img"
              aria-label="Founder photo placeholder"
              className="flex h-[390px] flex-col items-center justify-center gap-4 text-indigo-900 sm:h-[510px]"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/70 shadow-xl">
                <BriefcaseBusiness size={42} />
              </div>
              <p className="px-6 text-center text-sm font-semibold">
                Add your photo at public/images/founder.jpeg.png
              </p>
            </div>
          )}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/10"
          />

          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/40 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur-md sm:left-6 sm:top-6 sm:text-xs">
            <Sparkles size={14} className="text-cyan-300" />
            The person behind the vision
          </div>

          <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300 sm:text-xs">
              GuruMaatri Innovations
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {profile.name}
            </h2>
            <p className="mt-2 text-sm text-slate-200 sm:text-base">
              {profile.role}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Creative Thinking", "Technology", "Problem Solving"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-medium text-white backdrop-blur sm:text-[10px]"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 px-1 pb-1 pt-4 sm:gap-3 sm:px-2 sm:pt-5">
          {[
            { icon: Target, title: "Purpose", subtitle: "Start with why" },
            { icon: Code2, title: "Craft", subtitle: "Build with care" },
            { icon: Rocket, title: "Progress", subtitle: "Keep improving" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.045] p-2.5 sm:rounded-2xl sm:p-3"
              >
                <Icon size={17} className="text-cyan-300 sm:size-5" />
                <p className="mt-3 text-xs font-bold text-white sm:text-sm">
                  {item.title}
                </p>
                <p className="mt-1 text-[9px] leading-4 text-slate-400 sm:text-[10px]">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute -left-2 top-1/3 hidden -translate-x-1/2 rounded-2xl border border-white/15 bg-slate-900/90 p-4 shadow-xl backdrop-blur-xl sm:block lg:-left-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
            <Lightbulb size={20} />
          </span>
          <div>
            <p className="text-xs font-bold text-white">Ideas into action</p>
            <p className="mt-1 text-[10px] text-slate-400">
              Think. Create. Improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#080B18] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_18%,rgba(99,102,241,0.28),transparent_38%),radial-gradient(ellipse_at_88%_68%,rgba(6,182,212,0.18),transparent_36%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage: "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:py-24">
          <div data-reveal className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-indigo-200 backdrop-blur sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-cyan-300" />
              </span>
              Meet the mind behind the mission
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.06] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              I believe good ideas deserve
              <span className="mt-2 block bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text pb-2 text-transparent">
                exceptional execution.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              I’m building GuruMaatri Innovations around a simple belief:
              technology should make ideas clearer, experiences better and
              business problems easier to solve.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              My focus is bringing together creative thinking, modern web
              development and practical digital solutions to turn concepts
              into experiences people can actually use.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-950/30 transition hover:-translate-y-1 hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300/40"
              >
                Let’s build something
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#my-story"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.06]"
              >
                Get to know me
                <ArrowDown size={17} />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-slate-300 sm:text-sm">
              {[
                "Thoughtful problem solving",
                "User-first experiences",
                "Continuous learning",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check size={15} className="text-cyan-300" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 font-black text-white">
                GM
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  GuruMaatri Innovations
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Digital thinking with a human purpose.
                </p>
              </div>
            </div>
          </div>

          <div data-reveal className="reveal reveal-delay">
            <ProfileCard />
          </div>
        </div>

        <a
          href="#my-story"
          aria-label="Scroll to my story"
          className="relative mx-auto mb-7 flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 transition hover:text-white"
        >
          Discover the story
          <ArrowDown size={14} />
        </a>

        <div className="h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
      </section>

      {/* PERSONAL STORY */}
      <section
        id="my-story"
        className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div data-reveal className="reveal">
            <Eyebrow>Beyond the screen</Eyebrow>

            <h2 className="mt-6 text-3xl font-extrabold leading-[1.12] tracking-[-0.045em] sm:text-5xl">
              I’m interested in what technology can{" "}
              <span className="text-indigo-600">make possible.</span>
            </h2>

            <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400" />

            <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
              <Sparkles size={25} className="text-cyan-300" />
              <p className="mt-5 text-xl font-semibold leading-8 sm:text-2xl">
                “The best digital experiences make complicated things feel
                simple.”
              </p>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300">
                A principle I work by
              </p>
            </div>
          </div>

          <div
            data-reveal
            className="reveal reveal-delay space-y-5 text-sm leading-8 text-slate-600 sm:text-base"
          >
            <p>
              I’m the person behind GuruMaatri Innovations, a digital solutions
              initiative focused on creating useful, modern and thoughtfully
              designed online experiences.
            </p>
            <p>
              I’m interested in the intersection of design, development and
              problem solving: understanding what people need, figuring out how
              technology can help and creating a solution that feels clear and
              intuitive.
            </p>
            <p>
              For me, a project is not simply a collection of pages or
              features. It is an opportunity to understand a challenge,
              organise an idea and create something with a purpose.
            </p>
            <p>
              Through GuruMaatri Innovations, I want to approach digital work
              with curiosity, care and a willingness to keep improving. Every
              project is a chance to learn, refine the process and build a
              better experience.
            </p>

            <div className="flex flex-wrap gap-3 pt-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700"
              >
                What I work on
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                Explore the portfolio
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative overflow-hidden bg-[#F7F8FF] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <div data-reveal className="reveal">
            <SectionTitle
              eyebrow="What I’m focused on"
              title={
                <>
                  Different skills.
                  <span className="block text-indigo-600">
                    One connected vision.
                  </span>
                </>
              }
              description="The goal is to connect thoughtful design, useful technology and practical execution into a cohesive digital experience."
            />
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  data-reveal
                  className="reveal group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/[0.06] sm:p-7"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition duration-300 group-hover:text-white ${capabilityIconColor[item.color]}`}
                    >
                      <Icon size={23} />
                    </span>
                    <span className="text-xs font-bold tracking-widest text-slate-300">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-6 h-1 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 group-hover:w-20" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PERSONAL PRINCIPLES */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="reveal">
            <SectionTitle
              eyebrow="What guides me"
              title={
                <>
                  Principles behind
                  <span className="block text-indigo-600">the process.</span>
                </>
              }
              description="The way a solution is approached matters as much as the final interface. These principles help keep the work grounded."
            />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  data-reveal
                  className="reveal group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/[0.05] sm:p-7"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 -top-6 text-7xl font-black tracking-tighter text-slate-50 transition group-hover:text-indigo-50"
                  >
                    {item.number}
                  </span>

                  <div className="relative">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/20 transition duration-300 group-hover:rotate-3 group-hover:scale-105">
                      <Icon size={22} />
                    </span>

                    <h3 className="mt-7 text-lg font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-[#080B18] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div data-reveal className="reveal">
            <Eyebrow>From idea to execution</Eyebrow>

            <h2 className="mt-6 text-3xl font-extrabold leading-[1.12] tracking-[-0.045em] sm:text-5xl">
              Think clearly.
              <br />
              Create carefully.
              <br />
              <span className="text-indigo-300">Keep improving.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-slate-400 sm:text-base">
              A clear process helps turn an early idea into a focused plan, a
              usable experience and a solution that can evolve over time.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-white transition hover:text-cyan-300"
            >
              Start a conversation
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                <Heart size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Built around people
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Technology should feel useful.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-10 left-6 top-10 w-px bg-gradient-to-b from-indigo-400 via-cyan-400/50 to-transparent sm:left-7"
            />

            <div className="space-y-3">
              {journey.map((item, index) => (
                <article
                  key={item.number}
                  data-reveal
                  className="reveal group relative flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-indigo-400/40 hover:bg-white/[0.07] sm:gap-6 sm:p-7"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo-300/20 bg-[#121932] text-sm font-bold text-indigo-300 transition group-hover:bg-indigo-500 group-hover:text-white sm:h-14 sm:w-14">
                    {item.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="hidden shrink-0 text-slate-500 transition group-hover:text-cyan-300 sm:block"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div
          data-reveal
          className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-700 px-6 py-12 text-white shadow-2xl shadow-indigo-900/15 sm:px-10 sm:py-16 lg:rounded-[2.5rem] lg:px-16 lg:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border-[35px] border-white/[0.07]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 left-1/3 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl"
          />

          <div className="relative grid items-center gap-9 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-100">
                <Zap size={16} />
                Let’s make something meaningful
              </div>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                Have an idea?
                <span className="block text-indigo-200">
                  Let’s explore what’s possible.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base sm:leading-8">
                Tell me what you’re thinking about. We can discuss your goals,
                understand the problem and explore a practical way forward.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-indigo-700 transition hover:-translate-y-1 hover:bg-indigo-50"
              >
                Let’s talk
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.08] px-6 py-3 text-sm font-bold text-white transition hover:bg-white/[0.15]"
              >
                Explore my work
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="border-t border-slate-200 bg-[#F8F9FF] px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-slate-900">
              GuruMaatri Innovations
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Thoughtful design. Purposeful technology.
            </p>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 transition hover:text-indigo-900"
          >
            <Mail size={17} />
            {profile.email}
            <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(.2,.7,.2,1);
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-delay {
          transition-delay: 140ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .reveal.is-visible {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}