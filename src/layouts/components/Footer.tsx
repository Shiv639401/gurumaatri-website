
import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  { label: "Website Development", to: "/services" },
  { label: "Web Applications", to: "/services" },
  { label: "UI/UX Design", to: "/services" },
  { label: "SEO & Digital Growth", to: "/services" },
];

const exploreLinks = [
  { label: "Our Portfolio", to: "/portfolio" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About Us", to: "/about" },
  { label: "Blog & Resources", to: "/blog" },
];

const resourceLinks = [
  { label: "Project Estimator", to: "/estimator" },
  { label: "Pricing", to: "/pricing" },
  { label: "Frequently Asked Questions", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
];

function BrandMark() {
  return (
    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-500 text-white shadow-lg shadow-indigo-600/20">
      <span
        aria-hidden="true"
        className="absolute -right-2 -top-2 h-7 w-7 rounded-full border border-white/30"
      />
      <span className="relative text-2xl font-black tracking-tighter">G</span>
      <span className="absolute bottom-[9px] right-[9px] h-1.5 w-1.5 rounded-full bg-violet-200" />
    </span>
  );
}

function ArrowUpRight({ className = "h-4 w-4" }: { className?: string }) {
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

function ChevronRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
    >
      <path
        d="m9 18 6-6-6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialIcon({ type }: { type: string }) {
  const common = {
    className: "h-[17px] w-[17px]",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "linkedin":
      return (
        <svg {...common}>
          <path
            d="M6.5 9v9M6.5 6.5v.01M11 18v-5a3 3 0 0 1 6 0v5M11 10v8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="17.5" cy="6.8" r="1" fill="currentColor" />
        </svg>
      );
    case "github":
      return (
        <svg {...common}>
          <path
            d="M9 19c-4.3 1.3-4.3-2.2-6-2.5M15 21v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.4 6a4.3 4.3 0 0 0-.1-3S17.2 2.7 15 4.2a13 13 0 0 0-6 0C6.8 2.7 5.7 3 5.7 3A4.3 4.3 0 0 0 5.6 6a4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.8 5.7 5.5 6A3 3 0 0 0 9 17.6V21"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg {...common}>
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
}

function FooterLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-1.5 text-[13px] leading-6 text-slate-500 transition-colors duration-200 hover:text-indigo-700 focus-visible:rounded-sm focus-visible:outline-indigo-500"
    >
      <ChevronRight />
      {children}
    </Link>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    // Replace this placeholder with your real business email before launch.
    const businessEmail = "ssgroup062026@gmail.com";

    try {
      await navigator.clipboard.writeText(businessEmail);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${businessEmail}`;
    }
  };

  const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Frontend demonstration only: no email is stored or sent.
    setEmail("");
    window.alert(
      "Newsletter signup is not connected yet. Please connect an email marketing service before launch.",
    );
  };

  return (
    <footer className="relative mt-0 overflow-hidden border-t border-slate-200/80 bg-white">
      {/* Decorative ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-100/60 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-violet-100/50 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Premium CTA panel */}
        <div className="relative -mt-px overflow-hidden rounded-b-[28px] border-x border-b border-indigo-100/80 bg-gradient-to-br from-indigo-50/90 via-white to-violet-50/80 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border border-indigo-200/40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-1 top-[-90px] h-64 w-64 rounded-full border border-violet-200/50"
          />

          <div className="relative flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[1.7px] text-indigo-700 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Have a project in mind?
              </span>

              <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-[-1px] text-slate-900 sm:text-3xl lg:text-[40px] lg:leading-[1.15]">
                Your next big idea
                <br className="hidden sm:block" /> deserves a{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-500 bg-clip-text text-transparent">
                  remarkable digital home.
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Let’s discuss your goals, understand your vision and explore
                the right digital solution for your business.
              </p>
            </div>

            <div className="relative flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-600/25 focus-visible:outline-indigo-500"
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:bg-white hover:text-indigo-700"
              >
                Explore our work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              to="/"
              aria-label="GuruMaatri Innovations home"
              className="group inline-flex items-center gap-3 rounded-xl"
            >
              <BrandMark />
              <span>
                <span className="block text-[17px] font-extrabold tracking-[-0.6px] text-slate-900">
                  GuruMaatri{" "}
                  <span className="text-indigo-600">Innovations</span>
                </span>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[2.2px] text-slate-400">
                  Design. Develop. Grow.
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              We help businesses build thoughtful websites, modern web
              applications and better digital experiences — with a focus on
              usability, performance and growth.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] font-bold text-slate-600">
                Web Development
              </span>
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] font-bold text-slate-600">
                UI/UX
              </span>
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] font-bold text-slate-600">
                Digital Growth
              </span>
            </div>

            {/* Update URLs with your real social profiles */}
            <div className="mt-6">
              <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[1.7px] text-slate-400">
                Follow our journey
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  <SocialIcon type="linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  <SocialIcon type="instagram" />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  <SocialIcon type="github" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold uppercase tracking-[1.6px] text-slate-900">
              Services
            </h3>
            <div className="mt-5 flex flex-col items-start gap-3">
              {services.map((item) => (
                <FooterLink key={item.label} to={item.to}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold uppercase tracking-[1.6px] text-slate-900">
              Explore
            </h3>
            <div className="mt-5 flex flex-col items-start gap-3">
              {exploreLinks.map((item) => (
                <FooterLink key={item.label} to={item.to}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold uppercase tracking-[1.6px] text-slate-900">
              Resources
            </h3>
            <div className="mt-5 flex flex-col items-start gap-3">
              {resourceLinks.map((item) => (
                <FooterLink key={item.label} to={item.to}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xs font-extrabold uppercase tracking-[1.6px] text-slate-900">
              Let’s connect
            </h3>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Have a question or an idea? We’d love to hear what you’re
              planning.
            </p>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="group mt-4 flex w-full items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left transition hover:border-indigo-200 hover:bg-indigo-50/50"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="m4 7 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Email us
                </span>
                <span className="mt-1 block break-all text-[11px] font-bold text-slate-700 group-hover:text-indigo-700">
                  {copiedEmail ? "Copied!" : "ssgroup062026@gmail.com"}
                </span>
                <span className="mt-1 block text-[10px] text-slate-400">
                  {copiedEmail ? "Email copied to clipboard" : "Click to copy"}
                </span>
              </span>
            </button>

            <Link
              to="/contact"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 transition hover:text-violet-700"
            >
              Contact details
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            {/* Newsletter UI is a frontend demo until a provider is connected */}
            <form onSubmit={handleNewsletterSubmit} className="mt-7">
              <label
                htmlFor="gm-newsletter-email"
                className="text-[10px] font-extrabold uppercase tracking-[1.5px] text-slate-500"
              >
                Occasional insights
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="gm-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  required
                  autoComplete="email"
                  className="min-w-0 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-violet-600 focus-visible:outline-indigo-500"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-[10px] leading-5 text-slate-400">
                No spam. Newsletter integration required before launch.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom legal and utility bar */}
        <div className="border-t border-slate-200/80 py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-slate-500">
              © {new Date().getFullYear()}{" "}
              <span className="font-bold text-slate-700">
                GuruMaatri Innovations
              </span>
              . All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                to="/privacy-policy"
                className="text-xs text-slate-500 transition hover:text-indigo-700"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-xs text-slate-500 transition hover:text-indigo-700"
              >
                Terms of Use
              </Link>
              <a
                href="#main-content"
                className="group inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 transition hover:text-indigo-700"
              >
                Back to top
                <span className="transition-transform group-hover:-translate-y-0.5">
                  ↑
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
