
/**
 * GuruMaatri Innovations
 * Shared TypeScript Utilities
 *
 * React + TypeScript + Vite
 * No external dependencies required.
 */

/* -------------------------------------------------------------------------- */
/* 1. CLASS NAME UTILITIES                                                    */
/* -------------------------------------------------------------------------- */

export type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[]
  | Record<string, unknown>;

/**
 * Combines conditional class names.
 *
 * Example:
 * cn("p-4", isActive && "bg-cyan-500", { hidden: !isVisible })
 *
 * Note: This combines classes; it does not resolve conflicting Tailwind classes.
 */
export function cn(...values: ClassValue[]): string {
  const classes: string[] = [];

  function collect(value: ClassValue): void {
    if (!value) return;

    if (typeof value === "string" || typeof value === "number") {
      const result = String(value).trim();
      if (result) classes.push(result);
      return;
    }

    if (Array.isArray(value)) {
      value.forEach(collect);
      return;
    }

    if (typeof value === "object") {
      Object.entries(value).forEach(([key, enabled]) => {
        if (enabled) classes.push(key);
      });
    }
  }

  values.forEach(collect);

  return classes.join(" ");
}

/* -------------------------------------------------------------------------- */
/* 2. STRING UTILITIES                                                        */
/* -------------------------------------------------------------------------- */

/** Safely trims a string and falls back to an empty string. */
export function cleanText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/** Converts text into a URL-friendly slug. */
export function slugify(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Capitalizes the first character. */
export function capitalize(value: string): string {
  const text = cleanText(value);
  if (!text) return "";

  return text.charAt(0).toLocaleUpperCase() + text.slice(1);
}

/** Converts a string into title case. */
export function titleCase(value: string): string {
  return cleanText(value).replace(/\b[\p{L}\p{N}]/gu, (char) =>
    char.toLocaleUpperCase()
  );
}

/** Truncates text without exceeding the requested character limit. */
export function truncate(
  value: string,
  maxLength = 120,
  suffix = "..."
): string {
  const text = cleanText(value);
  const limit = Math.max(0, Math.floor(maxLength));

  if (text.length <= limit) return text;
  if (limit === 0) return "";

  if (suffix.length >= limit) {
    return suffix.slice(0, limit);
  }

  return text.slice(0, limit - suffix.length).trimEnd() + suffix;
}

/** Checks whether a string contains meaningful content. */
export function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

/* -------------------------------------------------------------------------- */
/* 3. NUMBER & CURRENCY UTILITIES                                             */
/* -------------------------------------------------------------------------- */

export interface CurrencyOptions {
  locale?: string;
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

/**
 * Formats money for pricing cards, project estimates and dashboards.
 *
 * Default: Indian Rupees (INR).
 */
export function formatCurrency(
  amount: number,
  options: CurrencyOptions = {}
): string {
  if (!Number.isFinite(amount)) return "—";

  const {
    locale = "en-IN",
    currency = "INR",
    minimumFractionDigits = 0,
    maximumFractionDigits = 2,
  } = options;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(amount);
}

/** Formats a number using the Indian numbering system by default. */
export function formatNumber(
  value: number,
  locale = "en-IN",
  maximumFractionDigits = 2
): string {
  if (!Number.isFinite(value)) return "—";

  return new Intl.NumberFormat(locale, {
    maximumFractionDigits,
  }).format(value);
}

/** Converts a valid numeric input into a number or returns a fallback. */
export function toNumber(value: unknown, fallback = 0): number {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : fallback;
  }

  if (typeof value !== "string" || !value.trim()) {
    return fallback;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

/** Restricts a number to a specified range. */
export function clamp(value: number, min: number, max: number): number {
  if (min > max) {
    throw new RangeError("clamp: min cannot be greater than max.");
  }

  return Math.min(max, Math.max(min, value));
}

/** Calculates a percentage without dividing by zero. */
export function percentage(value: number, total: number): number {
  if (!Number.isFinite(value) || !Number.isFinite(total) || total === 0) {
    return 0;
  }

  return (value / total) * 100;
}

/* -------------------------------------------------------------------------- */
/* 4. DATE UTILITIES                                                          */
/* -------------------------------------------------------------------------- */

/** Converts supported date values into a valid Date or null. */
export function toValidDate(
  value: string | number | Date | null | undefined
): Date | null {
  if (value == null) return null;

  const date = value instanceof Date ? new Date(value.getTime()) : new Date(value);

  return Number.isNaN(date.getTime()) ? null : date;
}

/** Formats dates using the selected locale. */
export function formatDate(
  value: string | number | Date | null | undefined,
  options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  },
  locale = "en-IN"
): string {
  const date = toValidDate(value);

  if (!date) return "—";

  return new Intl.DateTimeFormat(locale, options).format(date);
}

/** Returns a date and time together. */
export function formatDateTime(
  value: string | number | Date | null | undefined,
  locale = "en-IN"
): string {
  return formatDate(
    value,
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    },
    locale
  );
}

/* -------------------------------------------------------------------------- */
/* 5. URL & EMAIL UTILITIES                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Validates an email's basic format.
 * Actual deliverability must be checked by your email provider.
 */
export function isValidEmail(value: string): boolean {
  const email = cleanText(value);

  if (!email || email.length > 254) return false;

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Accepts HTTP(S) URLs only.
 * Returns a normalized URL string or null for invalid/unsafe input.
 */
export function safeHttpUrl(
  value: string,
  baseUrl?: string
): string | null {
  const input = cleanText(value);
  if (!input) return null;

  try {
    const url = baseUrl
      ? new URL(input, baseUrl)
      : new URL(input);

    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return null;
    }

    return url.href;
  } catch {
    return null;
  }
}

/** Safely creates a mailto link from an email address. */
export function createMailto(email: string, subject = ""): string | null {
  const normalizedEmail = cleanText(email);

  if (!isValidEmail(normalizedEmail)) return null;

  const query = subject
    ? `?subject=${encodeURIComponent(subject)}`
    : "";

  return `mailto:${normalizedEmail}${query}`;
}

/* -------------------------------------------------------------------------- */
/* 6. ARRAY & OBJECT UTILITIES                                                */
/* -------------------------------------------------------------------------- */

/** Removes duplicate primitive values while preserving order. */
export function unique<T>(items: readonly T[]): T[] {
  return [...new Set(items)];
}

/** Splits an array into chunks of a given size. */
export function chunk<T>(items: readonly T[], size: number): T[][] {
  if (!Number.isInteger(size) || size < 1) {
    throw new RangeError("chunk: size must be a positive integer.");
  }

  const result: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size));
  }

  return result;
}

/** Groups items using a key selector. */
export function groupBy<T, K extends string | number>(
  items: readonly T[],
  getKey: (item: T) => K
): Record<K, T[]> {
  const groups = {} as Record<K, T[]>;

  for (const item of items) {
    const key = getKey(item);

    if (!Object.prototype.hasOwnProperty.call(groups, key)) {
      groups[key] = [];
    }

    groups[key].push(item);
  }

  return groups;
}

/** Sorts a copy of an array by a selected string or numeric value. */
export function sortBy<T>(
  items: readonly T[],
  getValue: (item: T) => string | number,
  direction: "asc" | "desc" = "asc"
): T[] {
  return [...items].sort((a, b) => {
    const first = getValue(a);
    const second = getValue(b);

    let comparison: number;

    if (typeof first === "number" && typeof second === "number") {
      comparison = first - second;
    } else {
      comparison = String(first).localeCompare(String(second));
    }

    return direction === "asc" ? comparison : -comparison;
  });
}

/* -------------------------------------------------------------------------- */
/* 7. DEBOUNCE & THROTTLE                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Delays function execution until calls stop for the given duration.
 * Useful for search inputs and filters.
 *
 * Note: Call cancel() when the associated component is unmounted if needed.
 */
export function debounce<T extends (...args: never[]) => void>(
  callback: T,
  delay = 300
): ((...args: Parameters<T>) => void) & { cancel: () => void } {
  let timer: ReturnType<typeof setTimeout> | undefined;

  const debounced = ((...args: Parameters<T>) => {
    if (timer !== undefined) clearTimeout(timer);

    timer = setTimeout(() => {
      timer = undefined;
      callback(...args);
    }, Math.max(0, delay));
  }) as ((...args: Parameters<T>) => void) & { cancel: () => void };

  debounced.cancel = () => {
    if (timer !== undefined) clearTimeout(timer);
    timer = undefined;
  };

  return debounced;
}

/**
 * Executes at most once per interval.
 * Useful for repeated event handlers.
 */
export function throttle<T extends (...args: never[]) => void>(
  callback: T,
  interval = 300
): (...args: Parameters<T>) => void {
  let lastRun = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    const wait = Math.max(0, interval - (now - lastRun));

    if (wait === 0) {
      if (timer !== undefined) clearTimeout(timer);
      timer = undefined;
      lastRun = now;
      callback(...args);
      return;
    }

    if (timer !== undefined) return;

    timer = setTimeout(() => {
      timer = undefined;
      lastRun = Date.now();
      callback(...args);
    }, wait);
  };
}

/* -------------------------------------------------------------------------- */
/* 8. CLIPBOARD UTILITIES                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Copies text to the clipboard when the browser allows it.
 * Usually requires HTTPS or localhost and a user-triggered action.
 */
export async function copyToClipboard(value: string): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}

/* -------------------------------------------------------------------------- */
/* 9. FILE SIZE UTILITIES                                                     */
/* -------------------------------------------------------------------------- */

/** Converts bytes into a readable size. */
export function formatBytes(bytes: number, decimals = 1): string {
  if (!Number.isFinite(bytes) || bytes < 0) return "—";
  if (bytes === 0) return "0 Bytes";

  const units = ["Bytes", "KB", "MB", "GB", "TB"];
  const index = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1
  );

  const size = bytes / 1024 ** index;

  return `${size.toFixed(
    index === 0 ? 0 : Math.max(0, Math.floor(decimals))
  )} ${units[index]}`;
}

/* -------------------------------------------------------------------------- */
/* 10. ENVIRONMENT & BROWSER HELPERS                                          */
/* -------------------------------------------------------------------------- */

/** Returns true when running inside a browser. */
export function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

/** Reads a Vite environment variable with a fallback. */
export function getEnv(
  key: string,
  fallback = ""
): string {
  const env = import.meta.env as Record<string, unknown>;
  const value = env[key];

  return typeof value === "string" && value.length > 0
    ? value
    : fallback;
}

/** Generates a lightweight unique ID for UI keys and temporary references. */
export function createId(prefix = "gm"): string {
  const randomPart =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;

  return `${prefix}-${randomPart}`;
}
