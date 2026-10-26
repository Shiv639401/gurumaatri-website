
import {
  Code2,
  Palette,
  ShoppingCart,
  Smartphone,
  Workflow,
  Search,
  Check,
  ArrowUpRight,
} from "lucide-react";

const projectTypes = [
  {
    id: "website",
    title: "Website Development",
    description:
      "Professional, responsive websites for your business.",
    icon: Code2,
    tag: "Popular",
  },
  {
    id: "web-app",
    title: "Web Application",
    description:
      "Interactive platforms, dashboards, and custom tools.",
    icon: Workflow,
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "Intuitive interfaces and user-focused experiences.",
    icon: Palette,
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Online storefronts and product shopping experiences.",
    icon: ShoppingCart,
  },
  {
    id: "mobile",
    title: "Mobile-Responsive Website",
    description:
      "Optimised experiences across phones and tablets.",
    icon: Smartphone,
  },
  {
    id: "seo",
    title: "SEO & Digital Growth",
    description:
      "Technical SEO and search visibility improvements.",
    icon: Search,
  },
  {
    id: "automation",
    title: "Business Automation",
    description:
      "Streamlined workflows and third-party integrations.",
    icon: Workflow,
  },
  {
    id: "other",
    title: "Something Else",
    description:
      "Have a unique idea? Let's discuss your requirements.",
    icon: ArrowUpRight,
  },
] as const;

export type ProjectTypeId =
  (typeof projectTypes)[number]["id"];

type ProjectTypeSelectorProps = {
  value: string;
  onChange: (value: ProjectTypeId) => void;
};

export default function ProjectTypeSelector({
  value,
  onChange,
}: ProjectTypeSelectorProps) {
  return (
    <section
      aria-labelledby="project-type-heading"
      className="w-full"
    >
      <div className="mb-7">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          STEP 01
        </span>

        <h2
          id="project-type-heading"
          className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
        >
          What are we building?
        </h2>

        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
          Choose the service that best matches your vision.
          You can refine your project requirements in the next steps.
        </p>
      </div>

      <div
        role="radiogroup"
        aria-labelledby="project-type-heading"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {projectTypes.map((project) => {
          const Icon = project.icon;
          const selected = value === project.id;

          return (
            <button
              key={project.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(project.id)}
              className={[
                "group relative flex min-h-[145px] w-full flex-col rounded-2xl border p-4 text-left",
                "transition-all duration-200 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
                selected
                  ? "border-indigo-500 bg-indigo-50/70 shadow-[0_8px_30px_rgba(79,70,229,0.10)]"
                  : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md",
              ].join(" ")}
            >
              <div className="flex w-full items-start justify-between gap-3">
                <span
                  className={[
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
                    selected
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-700",
                  ].join(" ")}
                >
                  <Icon size={21} aria-hidden="true" />
                </span>

                <span className="flex items-center gap-2">
                  {"tag" in project && (
                    <span className="rounded-full bg-violet-100 px-2 py-1 text-[10px] font-semibold text-violet-700">
                      {project.tag}
                    </span>
                  )}

                  <span
                    className={[
                      "flex h-5 w-5 items-center justify-center rounded-full border transition-all",
                      selected
                        ? "border-indigo-600 bg-indigo-600 text-white"
                        : "border-slate-300 bg-white text-transparent",
                    ].join(" ")}
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                </span>
              </div>

              <span className="mt-4 block text-sm font-semibold text-slate-900">
                {project.title}
              </span>

              <span className="mt-1 block text-xs leading-5 text-slate-500">
                {project.description}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-xs text-slate-400">
        Select one option to continue with your estimate.
      </p>
    </section>
  );
}
