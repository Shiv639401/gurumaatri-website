
/**
 * GuruMaatri Innovations — Central Lead Service
 *
 * Sends website inquiries to a configured email inbox using FormSubmit.
 * No custom backend required.
 *
 * Setup:
 * 1. Add VITE_LEADS_EMAIL to .env.local in the project root.
 * 2. Restart the development server.
 * 3. Submit a real test form.
 * 4. Complete FormSubmit email verification if requested.
 */

const LEADS_EMAIL = (
  import.meta.env.VITE_LEADS_EMAIL ?? ""
).trim();

export type LeadFields = Record<
  string,
  string | number | boolean | null | undefined
>;

interface FormSubmitResponse {
  success?: boolean | string;
  message?: string;
  [key: string]: unknown;
}

/**
 * Validate the email configuration before attempting delivery.
 */
function validateConfiguration(): void {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!LEADS_EMAIL || !emailPattern.test(LEADS_EMAIL)) {
    throw new Error(
      "Lead delivery is not configured correctly. Add a valid VITE_LEADS_EMAIL to your .env.local file and restart the dev server."
    );
  }
}

/**
 * Clean user-provided values and prevent form fields from overriding
 * FormSubmit configuration fields such as _subject and _captcha.
 */
function sanitizeFields(
  fields: LeadFields
): Record<string, string> {
  const cleanFields: Record<string, string> = {};

  for (const [key, value] of Object.entries(fields)) {
    if (key.startsWith("_")) continue;
    if (value === null || value === undefined) continue;

    const cleanKey = key.trim();

    if (!cleanKey) continue;

    cleanFields[cleanKey] = String(value).trim();
  }

  return cleanFields;
}

/**
 * Submit a website lead to the configured inbox.
 *
 * Example:
 * await submitLead(
 *   {
 *     "Full name": name,
 *     "Email address": email,
 *     "Project details": message,
 *   },
 *   "New contact inquiry"
 * );
 */
export async function submitLead(
  fields: LeadFields,
  subject: string
): Promise<void> {
  validateConfiguration();

  const cleanFields = sanitizeFields(fields);
  const cleanSubject = subject.trim();

  if (Object.keys(cleanFields).length === 0) {
    throw new Error("Please enter your inquiry details.");
  }

  if (!cleanSubject) {
    throw new Error("An email subject is required.");
  }

  const payload = {
    ...cleanFields,
    _subject: cleanSubject,
    _template: "table",
    _captcha: "true",
  };

  let response: Response;

  try {
    response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(LEADS_EMAIL)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
  } catch {
    throw new Error(
      "Network error. Check your internet connection and try again."
    );
  }

  let result: FormSubmitResponse | null = null;

  try {
    result = (await response.json()) as FormSubmitResponse;
  } catch {
    // The response was not valid JSON.
  }

  if (!response.ok || !result) {
    throw new Error(
      "The email service could not process your inquiry. Please try again later."
    );
  }

  const successful =
    result.success === true || result.success === "true";

  if (!successful) {
    throw new Error(
      typeof result.message === "string" && result.message.trim()
        ? result.message
        : "Your inquiry could not be submitted. Check your email configuration and try again."
    );
  }
}
