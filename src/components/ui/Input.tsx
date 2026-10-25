import {
  forwardRef,
  useId,
  useState,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "default" | "filled" | "glass";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  successMessage?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClassName?: string;
  inputClassName?: string;
  variant?: InputVariant;
  size?: InputSize;
  clearable?: boolean;
  floatingLabel?: boolean;
}

const sizeStyles: Record<InputSize, string> = {
  sm: "min-h-10 px-3 text-sm",
  md: "min-h-12 px-4 text-sm sm:text-base",
  lg: "min-h-14 px-4 sm:px-5 text-base",
};

const variantStyles: Record<InputVariant, string> = {
  default: "border-slate-200 bg-white",
  filled: "border-transparent bg-slate-50 hover:bg-slate-100/80",
  glass: "border-white/80 bg-white/75 shadow-sm backdrop-blur-xl",
};

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      label,
      hint,
      error,
      successMessage,
      leftIcon,
      rightIcon,
      containerClassName,
      inputClassName,
      variant = "default",
      size = "md",
      clearable = false,
      floatingLabel = false,
      type = "text",
      value,
      defaultValue,
      disabled,
      required,
      readOnly,
      className,
      onChange,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? `gm-input-${generatedId}`;
    const hintId = `${inputId}-hint`;
    const errorId = `${inputId}-error`;
    const successId = `${inputId}-success`;

    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [uncontrolledValue, setUncontrolledValue] = useState(
      String(defaultValue ?? ""),
    );

    const isControlled = value !== undefined;
    const currentValue = isControlled ? String(value ?? "") : uncontrolledValue;
    const hasValue = currentValue.length > 0;
    const isPassword = type === "password";
    const actualType = isPassword && showPassword ? "text" : type;
    const hasError = Boolean(error);
    const hasSuccess = Boolean(successMessage) && !hasError;

    const describedBy = [
      hint ? hintId : undefined,
      error ? errorId : undefined,
      hasSuccess ? successId : undefined,
      props["aria-describedby"],
    ]
      .filter(Boolean)
      .join(" ") || undefined;

    function handleClear() {
      if (disabled || readOnly) return;

      if (!isControlled) {
        setUncontrolledValue("");
      }

      const input = document.getElementById(inputId) as HTMLInputElement | null;

      if (input) {
        const nativeSetter = Object.getOwnPropertyDescriptor(
          HTMLInputElement.prototype,
          "value",
        )?.set;

        nativeSetter?.call(input, "");
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }

    return (
      <div className={cn("w-full", containerClassName)}>
        {label && !floatingLabel && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            {label}
            {required && (
              <span className="ml-1 text-rose-500" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute left-3.5 top-1/2 z-10 -translate-y-1/2 text-slate-400 transition-colors [&>svg]:h-5 [&>svg]:w-5",
                focused && "text-indigo-600",
                hasError && "text-rose-500",
              )}
            >
              {leftIcon}
            </span>
          )}

          {floatingLabel && label && (
            <label
              htmlFor={inputId}
              className={cn(
                "pointer-events-none absolute z-10 origin-left transition-all duration-200",
                leftIcon ? "left-11" : "left-4",
                focused || hasValue
                  ? "top-2 text-[10px] font-semibold text-indigo-600"
                  : "top-1/2 -translate-y-1/2 text-sm text-slate-500",
                hasError && (focused || hasValue) && "text-rose-600",
              )}
            >
              {label}
              {required && <span className="ml-1">*</span>}
            </label>
          )}

          <input
            ref={ref}
            id={inputId}
            name={name}
            type={actualType}
            value={isControlled ? value : undefined}
            defaultValue={isControlled ? undefined : defaultValue}
            disabled={disabled}
            required={required}
            readOnly={readOnly}
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy}
            onChange={(event) => {
              if (!isControlled) {
                setUncontrolledValue(event.target.value);
              }
              onChange?.(event);
            }}
            onFocus={(event) => {
              setFocused(true);
              onFocus?.(event);
            }}
            onBlur={(event) => {
              setFocused(false);
              onBlur?.(event);
            }}
            className={cn(
              "block w-full rounded-xl border font-medium text-slate-900 outline-none",
              "placeholder:font-normal placeholder:text-slate-400",
              "transition-[border-color,box-shadow,background-color] duration-200",
              "focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-500/10",
              "disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 disabled:opacity-80",
              "read-only:cursor-default",
              sizeStyles[size],
              variantStyles[variant],
              Boolean(leftIcon) && "pl-11",
              Boolean(rightIcon || isPassword || (clearable && hasValue)) && "pr-11",
              Boolean(floatingLabel && label) && "pb-1 pt-5",
              hasError
                ? "border-rose-400 focus-visible:border-rose-500 focus-visible:ring-rose-500/10"
                : hasSuccess
                  ? "border-emerald-400 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/10"
                  : "hover:border-slate-300",
              className,
              inputClassName,
            )}
            {...props}
          />

          {rightIcon && !isPassword && !clearable && (
            <span
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 [&>svg]:h-5 [&>svg]:w-5"
              aria-hidden="true"
            >
              {rightIcon}
            </span>
          )}

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((previous) => !previous)}
              disabled={disabled}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-indigo-50 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed"
            >
              {showPassword ? (
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="m3 3 18 18M10.6 10.7a2 2 0 0 0 2.7 2.7M9.9 5.2A10.8 10.8 0 0 1 12 5c5.2 0 8.5 4.5 9.5 7-.4 1-1.3 2.3-2.7 3.5M6.2 6.3C3.9 7.7 2.8 9.8 2.5 12c.5 1.2 2.1 4.2 6.1 5.6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              )}
            </button>
          )}

          {clearable && hasValue && !isPassword && !rightIcon && (
            <button
              type="button"
              onClick={handleClear}
              disabled={disabled || readOnly}
              aria-label="Clear input"
              className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                <path
                  d="m5 5 10 10M15 5 5 15"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>

        {(hint || error || hasSuccess) && (
          <div className="mt-2 space-y-1">
            {error ? (
              <p
                id={errorId}
                role="alert"
                className="flex items-start gap-1.5 text-xs font-medium leading-5 text-rose-600"
              >
                <span aria-hidden="true">!</span>
                {error}
              </p>
            ) : hasSuccess ? (
              <p
                id={successId}
                className="flex items-start gap-1.5 text-xs font-medium leading-5 text-emerald-600"
              >
                <span aria-hidden="true">✓</span>
                {successMessage}
              </p>
            ) : null}

            {hint && !error && (
              <p id={hintId} className="text-xs leading-5 text-slate-500">
                {hint}
              </p>
            )}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
