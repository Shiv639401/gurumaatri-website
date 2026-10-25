
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "link";

type ButtonSize = "sm" | "md" | "lg" | "xl" | "icon";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type NativeButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: never;
  };

type AnchorButtonProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
    href: string;
  };

export type ButtonProps = NativeButtonProps | AnchorButtonProps;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold " +
  "whitespace-nowrap transition-all duration-200 ease-out " +
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/20 " +
  "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 " +
  "aria-disabled:pointer-events-none";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-indigo-600 text-white shadow-sm shadow-indigo-600/20 " +
    "hover:bg-indigo-700 hover:shadow-md hover:shadow-indigo-600/25",

  secondary:
    "bg-slate-100 text-slate-900 hover:bg-slate-200 " +
    "border border-slate-200",

  outline:
    "border border-indigo-200 bg-white text-indigo-700 " +
    "hover:border-indigo-300 hover:bg-indigo-50",

  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-indigo-700",

  danger:
    "bg-red-600 text-white shadow-sm hover:bg-red-700",

  link:
    "rounded-none bg-transparent p-0 text-indigo-600 underline-offset-4 " +
    "hover:text-indigo-800 hover:underline",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
  xl: "min-h-14 px-8 text-base",
  icon: "size-11 p-0",
};

function Spinner() {
  return (
    <svg
      className="size-4 shrink-0 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-90"
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function isAnchorProps(
  props: ButtonProps,
): props is AnchorButtonProps {
  return "href" in props && typeof props.href === "string";
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = "primary",
    size = "md",
    loading = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    children,
    className = "",
    ...rest
  } = props;

  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading ? (
        <Spinner />
      ) : leftIcon ? (
        <span className="inline-flex shrink-0 items-center">{leftIcon}</span>
      ) : null}

      <span>{children}</span>

      {!loading && rightIcon ? (
        <span className="inline-flex shrink-0 items-center">{rightIcon}</span>
      ) : null}
    </>
  );

  if (isAnchorProps(props)) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a
        {...anchorProps}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        aria-disabled={loading || undefined}
        onClick={
          loading
            ? (event) => event.preventDefault()
            : anchorProps.onClick
        }
      >
        {content}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      {...buttonProps}
      ref={ref as React.Ref<HTMLButtonElement>}
      type={buttonProps.type ?? "button"}
      className={classes}
      disabled={buttonProps.disabled || loading}
      aria-busy={loading || undefined}
    >
      {content}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
