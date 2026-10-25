
/**
 * GuruMaatri Innovations
 * Reusable Form Validation Utilities
 *
 * Compatible with React + TypeScript + Vite.
 * No external dependencies required.
 */

/* -------------------------------------------------------------------------- */
/* TYPES                                                                      */
/* -------------------------------------------------------------------------- */

export type ValidationResult = {
  isValid: boolean;
  error: string;
};

export type FormErrors<T extends Record<string, unknown>> = Partial<
  Record<keyof T, string>
>;

export type Validator<T = unknown> = (
  value: T,
  values?: Record<string, unknown>
) => string | null;

export type ValidationSchema<T extends Record<string, unknown>> = Partial<
  Record<keyof T, Validator[]>
>;

/* -------------------------------------------------------------------------- */
/* CONSTANTS                                                                  */
/* -------------------------------------------------------------------------- */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_DIGITS_REGEX = /^\d{10}$/;

const NAME_REGEX = /^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u;

const DEFAULT_MESSAGES = {
  required: "This field is required.",
  email: "Please enter a valid email address.",
  phone: "Please enter a valid 10-digit phone number.",
  name: "Please enter a valid name.",
  message: "Please provide a little more detail.",
  url: "Please enter a valid HTTP or HTTPS URL.",
  minLength: (min: number) => `Please enter at least ${min} characters.`,
  maxLength: (max: number) => `Please enter no more than ${max} characters.`,
};

/* -------------------------------------------------------------------------- */
/* BASIC HELPERS                                                              */
/* -------------------------------------------------------------------------- */

/** Safely converts a value to trimmed text. */
export function normalizeText(value: unknown): string {
  if (typeof value !== "string" && typeof value !== "number") {
    return "";
  }

  return String(value).trim();
}

/** Checks whether a value has meaningful content. */
export function isRequired(value: unknown): boolean {
  if (value === null || value === undefined) return false;

  if (typeof value === "string") {
    return value.trim().length > 0;
  }

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  if (typeof value === "number") {
    return Number.isFinite(value);
  }

  if (typeof value === "boolean") {
    return true;
  }

  return true;
}

/** Checks basic email syntax. Does not verify deliverability. */
export function isValidEmail(value: unknown): boolean {
  const email = normalizeText(value);

  return email.length <= 254 && EMAIL_REGEX.test(email);
}

/**
 * Accepts Indian 10-digit mobile numbers, optionally prefixed with +91 or 91.
 * For international phone validation, use a dedicated phone-number library.
 */
export function isValidPhone(value: unknown): boolean {
  const phone = normalizeText(value);

  if (!phone) return false;

  const digits = phone.replace(/[\s()-]/g, "");
  const normalized = digits.startsWith("+91")
    ? digits.slice(3)
    : digits.startsWith("91") && digits.length === 12
      ? digits.slice(2)
      : digits;

  return PHONE_DIGITS_REGEX.test(normalized) && /^[6-9]/.test(normalized);
}

/** Checks whether a value is a valid HTTP(S) URL. */
export function isValidUrl(value: unknown): boolean {
  const input = normalizeText(value);

  if (!input) return false;

  try {
    const url = new URL(input);

    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

/** Checks whether a name contains reasonable characters. */
export function isValidName(value: unknown): boolean {
  const name = normalizeText(value);

  return (
    name.length >= 2 &&
    name.length <= 100 &&
    NAME_REGEX.test(name)
  );
}

/* -------------------------------------------------------------------------- */
/* INDIVIDUAL VALIDATORS                                                      */
/* -------------------------------------------------------------------------- */

/** Required field validator. */
export function required(
  message = DEFAULT_MESSAGES.required
): Validator {
  return (value) => (isRequired(value) ? null : message);
}

/** Email validator. */
export function email(
  message = DEFAULT_MESSAGES.email
): Validator {
  return (value) => {
    const text = normalizeText(value);

    // Optional empty fields are allowed; combine with required() if mandatory.
    if (!text) return null;

    return isValidEmail(text) ? null : message;
  };
}

/** Indian mobile phone validator. */
export function phone(
  message = DEFAULT_MESSAGES.phone
): Validator {
  return (value) => {
    const text = normalizeText(value);

    if (!text) return null;

    return isValidPhone(text) ? null : message;
  };
}

/** Name validator. */
export function name(
  message = DEFAULT_MESSAGES.name
): Validator {
  return (value) => {
    const text = normalizeText(value);

    if (!text) return null;

    return isValidName(text) ? null : message;
  };
}

/** Minimum string length validator. */
export function minLength(
  min: number,
  message = DEFAULT_MESSAGES.minLength(min)
): Validator {
  if (!Number.isInteger(min) || min < 0) {
    throw new RangeError("minLength: min must be a non-negative integer.");
  }

  return (value) => {
    if (value == null || value === "") return null;

    return typeof value === "string" && value.trim().length < min
      ? message
      : null;
  };
}

/** Maximum string length validator. */
export function maxLength(
  max: number,
  message = DEFAULT_MESSAGES.maxLength(max)
): Validator {
  if (!Number.isInteger(max) || max < 0) {
    throw new RangeError("maxLength: max must be a non-negative integer.");
  }

  return (value) => {
    if (value == null) return null;

    return typeof value === "string" && value.length > max
      ? message
      : null;
  };
}

/** URL validator. */
export function url(
  message = DEFAULT_MESSAGES.url
): Validator {
  return (value) => {
    const text = normalizeText(value);

    if (!text) return null;

    return isValidUrl(text) ? null : message;
  };
}

/** Numeric minimum validator. */
export function minValue(
  min: number,
  message = `Value must be at least ${min}.`
): Validator {
  return (value) => {
    if (value === "" || value === null || value === undefined) {
      return null;
    }

    const number = typeof value === "number" ? value : Number(value);

    if (!Number.isFinite(number)) {
      return "Please enter a valid number.";
    }

    return number < min ? message : null;
  };
}

/** Numeric maximum validator. */
export function maxValue(
  max: number,
  message = `Value must be no more than ${max}.`
): Validator {
  return (value) => {
    if (value === "" || value === null || value === undefined) {
      return null;
    }

    const number = typeof value === "number" ? value : Number(value);

    if (!Number.isFinite(number)) {
      return "Please enter a valid number.";
    }

    return number > max ? message : null;
  };
}

/** Allows only values included in a predefined list. */
export function oneOf(
  allowedValues: readonly unknown[],
  message = "Please select a valid option."
): Validator {
  return (value) => {
    if (value === "" || value === null || value === undefined) {
      return null;
    }

    return allowedValues.includes(value) ? null : message;
  };
}

/** Validates a message or project description. */
export function message(
  min = 10,
  max = 2000
): Validator {
  return (value) => {
    const text = normalizeText(value);

    if (!text) return null;
    if (text.length < min) return DEFAULT_MESSAGES.message;
    if (text.length > max) return DEFAULT_MESSAGES.maxLength(max);

    return null;
  };
}

/* -------------------------------------------------------------------------- */
/* VALIDATE ONE FIELD                                                         */
/* -------------------------------------------------------------------------- */

/**
 * Runs validators in order and returns the first error.
 * Returns null when the field passes all validators.
 */
export function validateField(
  value: unknown,
  validators: Validator[],
  values?: Record<string, unknown>
): string | null {
  for (const validator of validators) {
    const error = validator(value, values);

    if (error) return error;
  }

  return null;
}

/**
 * Returns a consistent result object for a single value.
 */
export function getValidationResult(
  value: unknown,
  validators: Validator[],
  values?: Record<string, unknown>
): ValidationResult {
  const error = validateField(value, validators, values);

  return {
    isValid: error === null,
    error: error ?? "",
  };
}

/* -------------------------------------------------------------------------- */
/* VALIDATE COMPLETE FORM                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Validates every field declared in the schema.
 * Fields without validators are ignored.
 */
export function validateForm<T extends Record<string, unknown>>(
  values: T,
  schema: ValidationSchema<T>
): FormErrors<T> {
  const errors: FormErrors<T> = {};

  for (const key of Object.keys(schema) as (keyof T)[]) {
    const validators = schema[key];

    if (!validators) continue;

    const error = validateField(
      values[key],
      validators,
      values
    );

    if (error) {
      errors[key] = error;
    }
  }

  return errors;
}

/** Returns true when the error object contains no errors. */
export function isFormValid<T extends Record<string, unknown>>(
  errors: FormErrors<T>
): boolean {
  return Object.values(errors).every((error) => !error);
}

/** Returns the number of fields currently containing validation errors. */
export function countErrors<T extends Record<string, unknown>>(
  errors: FormErrors<T>
): number {
  return Object.values(errors).filter(Boolean).length;
}

/* -------------------------------------------------------------------------- */
/* READY-TO-USE GURUMAATRI FORM SCHEMAS                                       */
/* -------------------------------------------------------------------------- */

/** Contact page validation rules. */
export const contactValidation = {
  name: [required("Please enter your name."), name()],
  email: [required("Please enter your email."), email()],
  phone: [phone()],
  subject: [
    required("Please enter a subject."),
    minLength(3),
    maxLength(120),
  ],
  message: [
    required("Please tell us about your project."),
    message(10, 2000),
  ],
} satisfies ValidationSchema<{
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}>;

/** Project estimator validation rules. */
export const estimatorValidation = {
  projectName: [
    required("Please enter a project name."),
    minLength(2),
    maxLength(100),
  ],
  projectType: [
    required("Please select a project type."),
  ],
  budget: [
    required("Please select or enter a budget."),
    minValue(0, "Budget cannot be negative."),
  ],
  email: [
    required("Please enter your email."),
    email(),
  ],
  description: [
    maxLength(2000),
  ],
} satisfies ValidationSchema<{
  projectName: string;
  projectType: string;
  budget: number | string;
  email: string;
  description: string;
}>;

/** AI consultant lead form validation rules. */
export const aiConsultantValidation = {
  name: [required("Please enter your name."), name()],
  email: [required("Please enter your email."), email()],
  businessType: [
    required("Please select your business type."),
  ],
  challenge: [
    required("Please describe your business challenge."),
    message(10, 2000),
  ],
} satisfies ValidationSchema<{
  name: string;
  email: string;
  businessType: string;
  challenge: string;
}>;

/* -------------------------------------------------------------------------- */
/* ACCESSIBLE FORM ERROR HELPERS                                              */
/* -------------------------------------------------------------------------- */

/** Returns the standard ID for an input's validation message. */
export function getErrorId(fieldName: string): string {
  return `${fieldName}-error`;
}

/** Returns props commonly needed for accessible form fields. */
export function getFieldAccessibility(
  fieldName: string,
  error?: string
): {
  "aria-invalid": boolean;
  "aria-describedby"?: string;
} {
  return {
    "aria-invalid": Boolean(error),
    ...(error ? { "aria-describedby": getErrorId(fieldName) } : {}),
  };
}
