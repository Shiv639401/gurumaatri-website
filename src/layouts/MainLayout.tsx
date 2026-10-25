
import { useState } from "react";
import FloatingContact from "./components/FloatingContact";
import { Link, NavLink, Outlet } from "react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  { label: "Website Development", to: "/services" },
  { label: "Web Applications", to: "/services" },
  { label: "UI/UX Design", to: "/services" },
  { label: "E-Commerce Solutions", to: "/services" },
  { label: "SEO & Digital Growth", to: "/services" },
];

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Portfolio", to: "/portfolio" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Frequently Asked Questions", to: "/faq" },
  { label: "Blog & Insights", to: "/blog" },
];

function BrandLogo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="GuruMaatri Innovations home"
      className="group inline-flex min-w-0 shrink-0 items-center"
    >
      <img
        src="/gurumaatri-logo.png"
        alt="GuruMaatri Innovations — Learn, Grow, Innovate"
        width={220}
        height={100}
        className="h-auto w-[170px] max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:w-[195px] lg:w-[220px]"
      />
    </Link>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:min-h-[84px] lg:px-8">
        <BrandLogo onClick={closeMenu} />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                [
                  "relative rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-all duration-200 xl:px-3.5 xl:text-sm",
                  isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-indigo-700",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-indigo-600" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="group inline-flex min-h-11 items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-600/25"
          >
            Let's Talk
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 transition hover:border-indigo-200 hover:bg-indigo-50 lg:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-xl shadow-slate-900/5 sm:px-6 lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-7xl flex-col gap-1"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  [
                    "flex min-h-11 items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition",
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-indigo-700",
                  ].join(" ")
                }
              >
                {item.label}
                <ChevronRight className="h-4 w-4 opacity-50" />
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[#fafaff]">
      <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-indigo-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-violet-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-7 pt-12 sm:px-8 sm:pt-16 lg:px-10">
        <div className="grid gap-10 border-b border-slate-200 pb-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1fr] lg:gap-12">
          <div>
            <BrandLogo />

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              We create thoughtful digital experiences, modern websites and
              useful web applications that help businesses move forward.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3.5 py-2 text-xs font-semibold text-indigo-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Thoughtful design. Purposeful technology.
            </div>
          </div>

          <div>
            <h2 className="text-sm font-extrabold text-slate-950">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.to + item.label}>
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:translate-x-1 hover:text-indigo-700"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-indigo-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-extrabold text-slate-950">
              Our Services
            </h2>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((item, index) => (
                <li key={`${item.label}-${index}`}>
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:translate-x-1 hover:text-indigo-700"
                  >
                    <Code2 className="h-3.5 w-3.5 text-indigo-500" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-extrabold text-slate-950">
              Get in Touch
            </h2>

            <p className="mt-5 text-sm leading-6 text-slate-600">
              Have an idea? Let's discuss the right digital solution for your
              goals.
            </p>

            <div className="mt-4 space-y-4">
              <Link
                to="/contact"
                className="flex items-start gap-3 text-sm text-slate-600 transition hover:text-indigo-700"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                <span>Send us a project enquiry</span>
              </Link>

              <div className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                <span>India · Available for remote projects</span>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 pt-1 text-sm font-bold text-indigo-700 hover:text-indigo-900"
              >
                Contact our team
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} GuruMaatri Innovations. All rights reserved.
          </p>

          <p className="inline-flex items-center gap-1.5">
            Built with care
            <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600" />
            for a better web.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-lg bg-indigo-600 px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content" className="min-w-0 flex-1">
        <Outlet />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
