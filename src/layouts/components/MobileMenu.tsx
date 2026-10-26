
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Menu,
  Palette,
  Search,
  ShoppingCart,
  Smartphone,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";

interface MobileMenuLink {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

interface MobileMenuProps {
  logo?: string;
  brandName?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  showServices?: boolean;
}

const navigationLinks: MobileMenuLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks: MobileMenuLink[] = [
  {
    label: "Web Development",
    href: "/services/web-development",
    description: "Modern, high-performance websites",
    icon: Code2,
  },
  {
    label: "UI/UX Design",
    href: "/services/ui-ux-design",
    description: "Thoughtful digital experiences",
    icon: Palette,
  },
  {
    label: "Mobile Development",
    href: "/services/mobile-responsive-design",
    description: "Responsive mobile-first solutions",
    icon: Smartphone,
  },
  {
    label: "E-commerce",
    href: "/services/ecommerce-development",
    description: "Online stores built to convert",
    icon: ShoppingCart,
  },
  {
    label: "SEO & Growth",
    href: "/services/seo-optimisation",
    description: "Improve visibility and reach",
    icon: Search,
  },
  {
    label: "Business Automation",
    href: "/services/business-automation",
    description: "Smarter workflows for your business",
    icon: Workflow,
  },
];

export default function MobileMenu({
  logo,
  brandName = "GuruMaatri",
  ctaLabel = "Let's Talk",
  ctaHref = "/contact",
  className = "",
  showServices = true,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();

  const isServicesRoute = location.pathname.startsWith("/services");

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    closeMenu();
    // Close the drawer after route changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navLinkClass = (active: boolean) =>
    [
      "flex min-h-12 items-center justify-between rounded-xl px-4 py-3",
      "text-sm font-semibold transition-colors duration-200",
      active
        ? "bg-violet-50 text-violet-700"
        : "text-slate-700 hover:bg-slate-50 hover:text-violet-700",
    ].join(" ");

  return (
    <div className={`md:hidden ${className}`}>
      {/* Mobile header controls */}
      <div className="flex items-center justify-between gap-3">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2"
          aria-label={`${brandName} home`}
        >
          {logo ? (
            <img
              src={logo}
              alt={`${brandName} logo`}
              className="h-10 w-auto max-w-[180px] object-contain"
            />
          ) : (
            <span className="truncate text-lg font-extrabold tracking-tight text-slate-950">
              {brandName}
              <span className="text-violet-600">.</span>
            </span>
          )}
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          className={[
            "relative z-[70] inline-flex h-11 w-11 shrink-0",
            "items-center justify-center rounded-xl border border-slate-200",
            "bg-white text-slate-900 shadow-sm",
            "transition-colors hover:bg-slate-50",
            "focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-violet-500 focus-visible:ring-offset-2",
          ].join(" ")}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="gurumaatri-mobile-navigation"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <Menu
              size={22}
              strokeWidth={2}
              className={`absolute transition-all duration-200 ${
                isOpen
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <X
              size={22}
              strokeWidth={2}
              className={`absolute transition-all duration-200 ${
                isOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Overlay */}
      <button
        type="button"
        aria-label="Close navigation overlay"
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
        className={[
          "fixed inset-0 z-[60] bg-slate-950/50",
          "backdrop-blur-[2px] transition-opacity duration-300",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/* Slide-in drawer */}
      <aside
        id="gurumaatri-mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={[
          "fixed inset-y-0 right-0 z-[65]",
          "flex h-[100dvh] w-[min(88vw,400px)] flex-col",
          "border-l border-slate-200 bg-white shadow-2xl",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-2"
            tabIndex={isOpen ? 0 : -1}
          >
            {logo ? (
              <img
                src={logo}
                alt={`${brandName} logo`}
                className="h-9 w-auto max-w-[170px] object-contain"
              />
            ) : (
              <span className="text-lg font-extrabold tracking-tight text-slate-950">
                {brandName}
                <span className="text-violet-600">.</span>
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            aria-label="Close navigation menu"
          >
            <X size={21} />
          </button>
        </div>

        {/* Scrollable navigation */}
        <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-5">
          <p className="mb-3 px-4 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Navigation
          </p>

          <div className="space-y-1">
            {navigationLinks.map((item) => {
              if (item.label === "Services" && showServices) {
                return (
                  <div key={item.href}>
                    <div className="flex items-center gap-1">
                      <NavLink
                        to={item.href}
                        end
                        onClick={closeMenu}
                        tabIndex={isOpen ? 0 : -1}
                        className={() =>
                          navLinkClass(isServicesRoute)
                        }
                      >
                        <span>All Services</span>
                        <ArrowUpRight size={17} />
                      </NavLink>

                      <button
                        type="button"
                        onClick={() =>
                          setServicesOpen((previous) => !previous)
                        }
                        tabIndex={isOpen ? 0 : -1}
                        aria-label={
                          servicesOpen
                            ? "Collapse service links"
                            : "Expand service links"
                        }
                        aria-expanded={servicesOpen}
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                      >
                        <ArrowDown
                          size={17}
                          className={`transition-transform duration-200 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                        servicesOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-3 mt-2 space-y-1 border-l border-violet-100 pl-3">
                          {serviceLinks.map((service) => {
                            const Icon = service.icon;

                            return (
                              <NavLink
                                key={service.href}
                                to={service.href}
                                onClick={closeMenu}
                                tabIndex={isOpen && servicesOpen ? 0 : -1}
                                className={({ isActive }) =>
                                  [
                                    "flex items-start gap-3 rounded-xl p-3",
                                    "transition-colors duration-200",
                                    isActive
                                      ? "bg-violet-50 text-violet-700"
                                      : "text-slate-700 hover:bg-slate-50",
                                  ].join(" ")
                                }
                              >
                                {Icon && (
                                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                                    <Icon size={17} />
                                  </span>
                                )}

                                <span className="min-w-0 flex-1">
                                  <span className="block text-sm font-semibold">
                                    {service.label}
                                  </span>
                                  {service.description && (
                                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                                      {service.description}
                                    </span>
                                  )}
                                </span>

                                <ChevronRight
                                  size={16}
                                  className="mt-1 shrink-0 text-slate-400"
                                />
                              </NavLink>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  onClick={closeMenu}
                  tabIndex={isOpen ? 0 : -1}
                  className={({ isActive }) => navLinkClass(isActive)}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={17} className="opacity-60" />
                </NavLink>
              );
            })}
          </div>

          {/* Contact callout */}
          <div className="mt-7 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 p-5 text-white">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10">
              <Check size={19} />
            </div>

            <h3 className="text-lg font-bold">
              Have a project in mind?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Let&apos;s discuss your idea and find the right digital solution
              for your business.
            </p>

            <Link
              to={ctaHref}
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-violet-950"
            >
              {ctaLabel}
              <ArrowRight size={17} />
            </Link>
          </div>
        </nav>

        {/* Drawer footer */}
        <div className="border-t border-slate-100 px-5 py-4">
          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} {brandName}. All rights reserved.
          </p>
        </div>
      </aside>
    </div>
  );
}
