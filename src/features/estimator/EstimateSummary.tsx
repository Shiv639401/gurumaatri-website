
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type EstimateSummaryProps = {
  step: number;
  service?: {
    id: string;
    title: string;
  };
  complexity: {
    title: string;
    multiplier: number;
  };
  timeline: {
    title: string;
    multiplier: number;
  };
  selectedFeatures: string[];
  features: {
    id: string;
    title: string;
    price: number;
  }[];
  estimate: {
    base: number;
    featureTotal: number;
    subtotal: number;
    low: number;
    high: number;
  };
  currency: (amount: number) => string;
};

export default function EstimateSummary({
  step,
  service,
  complexity,
  timeline,
  selectedFeatures,
  features,
  estimate,
  currency,
}: EstimateSummaryProps) {
  const [showBreakdown, setShowBreakdown] = useState(true);

  const chosenFeatures = features.filter((feature) =>
    selectedFeatures.includes(feature.id)
  );

  return (
    <aside
      aria-label="Live project estimate summary"
      className="lg:sticky lg:top-8"
    >
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        {/* Header */}
        <div className="bg-slate-950 p-6 text-white">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-indigo-200">
                <Rocket size={21} aria-hidden="true" />
              </div>

              <div>
                <h2 className="font-semibold">Project summary</h2>
                <p className="mt-1 text-xs text-slate-400">
                  Updates as you build
                </p>
              </div>
            </div>

            <Sparkles
              size={19}
              className="text-indigo-300"
              aria-hidden="true"
            />
          </div>

          {/* Estimated range */}
          <div className="mt-7">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Estimated range
            </p>

            <p className="mt-2 text-2xl font-semibold tracking-tight">
              {currency(estimate.low)}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              to {currency(estimate.high)}
            </p>
          </div>

          {/* Progress */}
          <div
            className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10"
            role="progressbar"
            aria-label="Estimator progress"
            aria-valuemin={1}
            aria-valuemax={4}
            aria-valuenow={Math.min(Math.max(step, 1), 4)}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300 transition-all duration-500"
              style={{
                width: `${(Math.min(Math.max(step, 1), 4) / 4) * 100}%`,
              }}
            />
          </div>

          <p className="mt-2 text-xs text-slate-400">
            Configuration {Math.min(Math.max(step, 1), 4)} of 4
          </p>
        </div>

        {/* Selections */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold">Your selections</h3>

            <button
              type="button"
              onClick={() =>
                setShowBreakdown((current) => !current)
              }
              aria-expanded={showBreakdown}
              aria-controls="estimate-breakdown"
              className="rounded-md text-sm font-medium text-indigo-700 transition hover:text-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              {showBreakdown ? "Hide" : "Show"}
            </button>
          </div>

          {showBreakdown && (
            <div
              id="estimate-breakdown"
              className="mt-5 space-y-4"
            >
              {/* Project type */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-slate-500">
                    Project type
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-800">
                    {service?.title ?? "Not selected"}
                  </p>
                </div>

                {service && (
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-emerald-600"
                    aria-label="Selected"
                  />
                )}
              </div>

              {/* Complexity */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-slate-500">
                    Complexity
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-800">
                    {complexity.title}
                  </p>
                </div>

                <ChevronRight
                  size={17}
                  className="shrink-0 text-slate-400"
                  aria-hidden="true"
                />
              </div>

              {/* Timeline */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-slate-500">
                    Timeline
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-800">
                    {timeline.title}
                  </p>
                </div>

                <Clock3
                  size={17}
                  className="shrink-0 text-slate-400"
                  aria-hidden="true"
                />
              </div>

              {/* Features */}
              <div className="border-t border-slate-100 pt-4">
                <p className="text-xs text-slate-500">
                  Additional features
                </p>

                {chosenFeatures.length > 0 ? (
                  <ul className="mt-3 space-y-2.5">
                    {chosenFeatures.map((feature) => (
                      <li
                        key={feature.id}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0 text-emerald-600"
                          aria-hidden="true"
                        />

                        <span>{feature.title}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-slate-400">
                    No additional features selected.
                  </p>
                )}
              </div>

              {/* Cost breakdown */}
              <div className="border-t border-slate-100 pt-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Estimate breakdown
                </p>

                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-600">
                      Base project
                    </span>

                    <span className="font-medium text-slate-800">
                      {currency(estimate.base)}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-600">
                      Features
                    </span>

                    <span className="font-medium text-slate-800">
                      {currency(estimate.featureTotal)}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-600">
                      Complexity
                    </span>

                    <span className="font-medium text-slate-800">
                      ×{complexity.multiplier}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-600">
                      Timeline factor
                    </span>

                    <span className="font-medium text-slate-800">
                      ×{timeline.multiplier}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3 border-t border-slate-100 pt-3 font-semibold">
                    <span>Planning subtotal</span>

                    <span className="text-indigo-700">
                      {currency(estimate.subtotal)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-4">
            <div className="flex gap-2.5">
              <ShieldCheck
                size={18}
                className="mt-0.5 shrink-0 text-amber-700"
                aria-hidden="true"
              />

              <p className="text-xs leading-6 text-amber-950">
                Planning estimate only. Final costs depend on
                detailed requirements, delivery scope, taxes,
                and third-party services.
              </p>
            </div>
          </div>

          {/* Pricing link */}
          <Link
            to="/pricing"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Explore pricing
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
