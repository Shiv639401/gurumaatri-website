
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, Code2 } from "lucide-react";
import { Link } from "react-router";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon?: React.ElementType;
  features?: string[];
  href?: string;
  accent?: "indigo" | "blue" | "violet" | "emerald";
};

type ServiceCardProps = {
  service: Service;
  index?: number;
};

const accentStyles = {
  indigo: {
    icon: "bg-indigo-50 text-indigo-600",
    glow: "group-hover:bg-indigo-100",
    border: "group-hover:border-indigo-200",
    link: "text-indigo-600",
  },
  blue: {
    icon: "bg-blue-50 text-blue-600",
    glow: "group-hover:bg-blue-100",
    border: "group-hover:border-blue-200",
    link: "text-blue-600",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600",
    glow: "group-hover:bg-violet-100",
    border: "group-hover:border-violet-200",
    link: "text-violet-600",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    glow: "group-hover:bg-emerald-100",
    border: "group-hover:border-emerald-200",
    link: "text-emerald-600",
  },
};

export default function ServiceCard({
  service,
  index = 0,
}: ServiceCardProps) {
  const Icon = service.icon ?? Code2;
  const accent = accentStyles[service.accent ?? "indigo"];
  const href = service.href ?? "/contact";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.08, 0.4),
        ease: "easeOut",
      }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${accent.border}`}
    >
      {/* Decorative background */}
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-slate-50 transition-colors duration-300 ${accent.glow}`}
      />

      {/* Service icon */}
      <div
        className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${accent.icon}`}
      >
        <Icon size={27} strokeWidth={1.8} />
      </div>

      {/* Service content */}
      <div className="relative flex flex-1 flex-col">
        <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-indigo-700">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          {service.description}
        </p>

        {/* Features */}
        {service.features && service.features.length > 0 && (
          <ul className="mt-5 space-y-3">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm text-slate-600"
              >
                <CheckCircle2
                  size={17}
                  className={`mt-0.5 shrink-0 ${accent.link}`}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Learn more link */}
        <div className="mt-auto pt-7">
          <Link
            to={href}
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3 ${accent.link}`}
          >
            Learn More
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
