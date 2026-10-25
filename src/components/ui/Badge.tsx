import type { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "outline"
  | "gradient"
  | "glass";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: ReactNode;
  dot?: boolean;
  pulse?: boolean;
  icon?: ReactNode;
  removable?: boolean;
  onRemove?: () => void;
}

const baseStyles =
  "inline-flex max-w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-full border font-semibold leading-none transition-all duration-300 ease-out focus-within:ring-2 focus-within:ring-indigo-500/30";

const sizeStyles: Record<BadgeSize, string> = {
  sm: "min-h-6 px-2.5 py-1 text-[10px] tracking-wide",
  md: "min-h-7 px-3 py-1.5 text-xs",
  lg: "min-h-9 px-4 py-2 text-sm",
};

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "border-slate-200 bg-slate-100 text-slate-700 hover:border-slate-300 hover:bg-slate-200/80",
  primary:
    "border-indigo-200/80 bg-indigo-50 text-indigo-700 hover:border-indigo-300 hover:bg-indigo-100",
  secondary:
    "border-violet-200/80 bg-violet-50 text-violet-700 hover:border-violet-300 hover:bg-violet-100",
  success:
    "border-emerald-200/80 bg-emerald-50 text-emerald-700 hover:border-emerald-300 hover:bg-emerald-100",
  warning:
    "border-amber-200/80 bg-amber-50 text-amber-800 hover:border-amber-300 hover:bg-amber-100",
  danger:
    "border-rose-200/80 bg-rose-50 text-rose-700 hover:border-rose-300 hover:bg-rose-100",
  info:
    "border-sky-200/80 bg-sky-50 text-sky-700 hover:border-sky-300 hover:bg-sky-100",
  outline:
    "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/70 hover:text-indigo-700",
  gradient:
    "border-indigo-200/60 bg-gradient-to-r from-indigo-50 via-violet-50 to-fuchsia-50 text-indigo-800 shadow-sm shadow-indigo-950/[0.03] hover:-translate-y-0.5 hover:shadow-md hover:shadow-indigo-950/[0.06]",
  glass:
    "border-white/80 bg-white/75 text-slate-700 shadow-sm shadow-slate-900/[0.04] backdrop-blur-xl hover:bg-white",
};

const dotStyles: Record<BadgeVariant, string> = {
  default: "bg-slate-500",
  primary: "bg-indigo-500",
  secondary: "bg-violet-500",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500",
  info: "bg-sky-500",
  outline: "bg-indigo-500",
  gradient: "bg-gradient-to-r from-indigo-500 to-fuchsia-500",
  glass: "bg-indigo-500",
};

function mergeClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function Badge({
  variant = "primary",
  size = "md",
  children,
  dot = false,
  pulse = false,
  icon,
  removable = false,
  onRemove,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={mergeClasses(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        "motion-reduce:transition-none",
        className,
      )}
      {...props}
    >
      {dot && (
        <span className="relative inline-flex h-2 w-2 shrink-0">
          {pulse && (
            <span
              aria-hidden="true"
              className={mergeClasses(
                "absolute inset-0 animate-ping rounded-full opacity-50 motion-reduce:animate-none",
                dotStyles[variant],
              )}
            />
          )}
          <span
            aria-hidden="true"
            className={mergeClasses(
              "relative h-2 w-2 rounded-full",
              dotStyles[variant],
            )}
          />
        </span>
      )}

      {icon && (
        <span className="inline-flex shrink-0 items-center justify-center [&>svg]:h-3.5 [&>svg]:w-3.5">
          {icon}
        </span>
      )}

      <span className="truncate">{children}</span>

      {removable && (
        <button
          type="button"
          aria-label="Remove badge"
          onClick={onRemove}
          className="ml-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full opacity-70 transition hover:bg-black/10 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            className="h-3 w-3"
          >
            <path
              d="m4 4 8 8M12 4l-8 8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </span>
  );
}