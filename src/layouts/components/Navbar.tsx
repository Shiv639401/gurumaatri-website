
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

const services = [
  {
    number: "01",
    title: "Website Development",
    description: "Premium websites built for your business.",
    to: "/services",
    icon: "web",
  },
  {
    number: "02",
    title: "Web Applications",
    description: "Modern, scalable digital products.",
    to: "/services",
    icon: "app",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description: "Intuitive experiences people enjoy.",
    to: "/services",
    icon: "design",
  },
  {
    number: "04",
    title: "SEO & Digital Growth",
    description: "Help the right customers find you.",
    to: "/services",
    icon: "growth",
  },
];

function BrandMark() {
  return (
    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-500 text-white shadow-lg shadow-indigo-600/20 transition duration-300 group-hover:rotate-[-4deg] group-hover:scale-105">
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

function ChevronDown({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
      <span
        className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
          open ? "translate-y-[3.5px] rotate-45" : ""
        }`}
      />
      <span
        className={`h-0.5 rounded-full bg-current transition-all duration-300 ${
          open ? "w-0 opacity-0" : "w-3.5"
        }`}
      />
      <span
        className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
          open ? "-translate-y-[3.5px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

function ServiceIcon({ type }: { type: string }) {
  const common = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "web":
      return (
        <svg {...common}>
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M3 9h18M7 6.5h.01M10 6.5h.01M8 13h8M8 16h5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "app":
      return (
        <svg {...common}>
          <rect
            x="4"
            y="3"
            width="16"
            height="18"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M9 7h6M9 17h6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "design":
      return (
        <svg {...common}>
          <path
            d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path
            d="M4 17 9 12l3 3 7-8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 7h5v5M4 21h16"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!mobileOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative whitespace-nowrap rounded-xl px-3 py-2 text-[13px] font-semibold transition-colors duration-200 ${
      isActive
        ? "bg-indigo-50 text-indigo-700"
        : "text-slate-600 hover:bg-slate-50 hover:text-indigo-700"
    }`;

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 shadow-[0_4px_24px_rgba(15,23,42,0.025)] backdrop-blur-2xl">
      {/* Subtle top accent */}
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400"
      />

      <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        {/* Brand */}
        <Link
          to="/"
          className="group flex min-w-0 shrink-0 items-center gap-3 rounded-xl outline-offset-4"
          aria-label="GuruMaatri Innovations — Home"
        >
          <BrandMark />

          <span className="flex min-w-0 flex-col">
            <span className="whitespace-nowrap text-[16px] font-extrabold leading-tight tracking-[-0.65px] text-slate-900 sm:text-[17px]">
              GuruMaatri
              <span className="text-indigo-600"> Innovations</span>
            </span>
            <span className="mt-1 text-[9px] font-bold uppercase tracking-[2.3px] text-slate-400 sm:text-[10px]">
              Design. Develop. Grow.
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 xl:flex"
        >
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((current) => !current)}
              onKeyDown={(event) => {
                if (event.key === "Escape") setServicesOpen(false);
              }}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-[13px] font-semibold transition-colors ${
                servicesOpen || isServicesActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-indigo-700"
              }`}
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[620px] -translate-x-1/2 pt-4">
                <div className="overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_24px_80px_rgba(30,41,59,0.16)]">
                  <div className="mb-4 flex items-end justify-between gap-4 px-1">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[2px] text-indigo-600">
                        What we do
                      </p>
                      <h2 className="mt-1 text-lg font-extrabold tracking-tight text-slate-900">
                        Digital solutions for growth
                      </h2>
                    </div>
                    <Link
                      to="/services"
                      onClick={() => setServicesOpen(false)}
                      className="group inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-violet-600"
                    >
                      All services
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.number}
                        to={service.to}
                        onClick={() => setServicesOpen(false)}
                        className="group flex gap-3 rounded-2xl border border-transparent p-3 transition-all duration-200 hover:border-indigo-100 hover:bg-indigo-50/60"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                          <ServiceIcon type={service.icon} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[13px] font-bold text-slate-800 group-hover:text-indigo-700">
                            {service.title}
                          </span>
                          <span className="mt-1 block text-[11px] leading-5 text-slate-500">
                            {service.description}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3.5 text-white">
                    <div>
                      <p className="text-sm font-bold">
                        Have a project in mind?
                      </p>
                      <p className="mt-0.5 text-[11px] text-indigo-100">
                        Let’s explore what we can build together.
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      onClick={() => setServicesOpen(false)}
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-white px-3 py-2 text-xs font-bold text-indigo-700 transition hover:bg-indigo-50"
                    >
                      Discuss project
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navigation.slice(1).map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link
            to="/estimator"
            className="hidden rounded-xl px-3 py-2.5 text-[12px] font-bold text-slate-600 transition hover:text-indigo-700 2xl:inline-flex"
          >
            Estimate a project
          </Link>

          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-[13px] font-bold text-white shadow-lg shadow-indigo-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-600/25 focus-visible:outline-indigo-500"
          >
            Let’s Talk
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile/tablet menu toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="gm-mobile-navigation"
          onClick={() => {
            setMobileOpen((current) => !current);
            setServicesOpen(false);
          }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-indigo-500 xl:hidden"
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile/tablet navigation */}
      {mobileOpen && (
        <div
          id="gm-mobile-navigation"
          className="absolute inset-x-0 top-full z-50 border-t border-slate-200 bg-white shadow-[0_24px_50px_rgba(15,23,42,0.12)] xl:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-h-[calc(100dvh-80px)] w-full max-w-[1440px] overflow-y-auto px-4 pb-6 pt-4 sm:px-6"
          >
            <div className="mb-4 rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-4">
              <p className="text-[10px] font-extrabold uppercase tracking-[2px] text-indigo-600">
                GuruMaatri Innovations
              </p>
              <p className="mt-2 max-w-xs text-lg font-extrabold leading-6 tracking-tight text-slate-900">
                Thoughtful digital experiences. Built for your next stage.
              </p>
            </div>

            <div className="space-y-1">
              <NavLink
                to="/"
                end
                onClick={() => {
                  setMobileOpen(false);
                  setServicesOpen(false);
                }}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                Home
                <ArrowUpRight className="h-4 w-4 opacity-50" />
              </NavLink>

              <div className="overflow-hidden rounded-xl">
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((current) => !current)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold ${
                    isServicesActive || servicesOpen
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="ml-3 mt-1 space-y-1 border-l-2 border-indigo-100 pb-2 pl-3">
                    {services.map((service) => (
                      <Link
                        key={service.number}
                        to={service.to}
                        onClick={() => {
                          setMobileOpen(false);
                          setServicesOpen(false);
                        }}
                        className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                          <ServiceIcon type={service.icon} />
                        </span>
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navigation.slice(1).map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => {
                    setMobileOpen(false);
                    setServicesOpen(false);
                  }}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold ${
                      isActive
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {item.label}
                  <ArrowUpRight className="h-4 w-4 opacity-40" />
                </NavLink>
              ))}

              <NavLink
                to="/pricing"
                onClick={() => {
                  setMobileOpen(false);
                  setServicesOpen(false);
                }}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                Pricing
                <ArrowUpRight className="h-4 w-4 opacity-40" />
              </NavLink>

              <NavLink
                to="/faq"
                onClick={() => {
                  setMobileOpen(false);
                  setServicesOpen(false);
                }}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                FAQs
                <ArrowUpRight className="h-4 w-4 opacity-40" />
              </NavLink>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link
                to="/estimator"
                onClick={() => {
                  setMobileOpen(false);
                  setServicesOpen(false);
                }}
                className="flex items-center justify-center rounded-xl border border-slate-200 px-3 py-3.5 text-center text-sm font-bold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                Project Estimator
              </Link>
              <Link
                to="/contact"
                onClick={() => {
                  setMobileOpen(false);
                  setServicesOpen(false);
                }}
                className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:shadow-xl"
              >
                Let’s Talk
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <p className="mt-5 text-center text-[11px] leading-5 text-slate-400">
              Have an idea? Let’s turn it into something meaningful.
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
