
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Sparkles,
  Zap,
} from "lucide-react";

export interface PricingFeature {
  text: string;
  included?: boolean;
}

export interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: (string | PricingFeature)[];
  ctaText?: string;
  href?: string;
  popular?: boolean;
  badge?: string;
  originalPrice?: string;
  className?: string;
}

export default function PricingCard({
  name,
  description,
  price,
  period = "project",
  features,
  ctaText = "Get Started",
  href = "/contact",
  popular = false,
  badge = "Most Popular",
  originalPrice,
  className = "",
}: PricingCardProps) {
  const normalizedFeatures = features.map((feature) =>
    typeof feature === "string"
      ? { text: feature, included: true }
      : { text: feature.text, included: feature.included ?? true }
  );

  return (
    <article
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-3xl",
        "border p-6 transition-all duration-300 sm:p-7",
        popular
          ? "border-indigo-400/60 bg-slate-950 text-white shadow-2xl shadow-indigo-950/20"
          : "border-slate-200 bg-white text-slate-900 shadow-sm hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/60",
        className,
      ].join(" ")}
    >
      {/* Decorative background */}
      {popular && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl"
          />
        </>
      )}

      <div className="relative z-10 flex h-full flex-col">
        {/* Plan badge */}
        {popular && (
          <div className="mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-indigo-200">
              <Sparkles size={14} aria-hidden="true" />
              {badge}
            </span>
          </div>
        )}

        {/* Plan information */}
        <div>
          <h3
            className={[
              "text-xl font-bold tracking-tight sm:text-2xl",
              popular ? "text-white" : "text-slate-900",
            ].join(" ")}
          >
            {name}
          </h3>

          <p
            className={[
              "mt-3 min-h-12 text-sm leading-6",
              popular ? "text-slate-300" : "text-slate-500",
            ].join(" ")}
          >
            {description}
          </p>
        </div>

        {/* Pricing */}
        <div
          className={[
            "my-7 border-b pb-7",
            popular ? "border-white/10" : "border-slate-100",
          ].join(" ")}
        >
          {originalPrice && (
            <p
              className={[
                "mb-1 text-sm line-through",
                popular ? "text-slate-400" : "text-slate-400",
              ].join(" ")}
            >
              {originalPrice}
            </p>
          )}

          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span
              className={[
                "text-4xl font-extrabold tracking-tight sm:text-5xl",
                popular ? "text-white" : "text-slate-950",
              ].join(" ")}
            >
              {price}
            </span>

            {period && (
              <span
                className={[
                  "text-sm",
                  popular ? "text-slate-400" : "text-slate-500",
                ].join(" ")}
              >
                / {period}
              </span>
            )}
          </div>

          <div
            className={[
              "mt-3 flex items-center gap-2 text-xs",
              popular ? "text-slate-400" : "text-slate-500",
            ].join(" ")}
          >
            <Zap
              size={14}
              className={popular ? "text-indigo-300" : "text-indigo-600"}
              aria-hidden="true"
            />
            Clear scope. Transparent pricing.
          </div>
        </div>

        {/* CTA */}
        <Link
          to={href}
          className={[
            "inline-flex min-h-12 w-full items-center justify-center gap-2",
            "rounded-xl px-5 py-3 text-sm font-semibold",
            "transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
            popular
              ? "bg-white text-slate-950 hover:bg-indigo-50"
              : "bg-slate-950 text-white hover:bg-indigo-700",
          ].join(" ")}
        >
          {ctaText}
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>

        {/* Features */}
        <div className="mt-7">
          <h4
            className={[
              "mb-4 text-xs font-bold uppercase tracking-[0.16em]",
              popular ? "text-slate-300" : "text-slate-500",
            ].join(" ")}
          >
            What&apos;s included
          </h4>

          <ul className="space-y-3.5">
            {normalizedFeatures.map((feature, index) => (
              <li
                key={`${feature.text}-${index}`}
                className={[
                  "flex items-start gap-3 text-sm leading-5",
                  feature.included
                    ? popular
                      ? "text-slate-200"
                      : "text-slate-600"
                    : popular
                      ? "text-slate-500"
                      : "text-slate-400",
                ].join(" ")}
              >
                <span
                  className={[
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                    feature.included
                      ? popular
                        ? "bg-indigo-400/20 text-indigo-200"
                        : "bg-indigo-50 text-indigo-700"
                      : popular
                        ? "bg-white/5 text-slate-500"
                        : "bg-slate-100 text-slate-400",
                  ].join(" ")}
                >
                  <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                </span>

                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1" />
      </div>
    </article>
  );
}
