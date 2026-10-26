
/**
 * GuruMaatri Innovations
 * Contact and lead submission service.
 *
 * Uses the centralized API client from src/lib/api.ts.
 *
 * Expected backend endpoint:
 * POST /api/contact
 */

import api from "./api";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type ContactEnquiryType =
  | "general"
  | "web-development"
  | "web-application"
  | "ui-ux-design"
  | "mobile-development"
  | "ecommerce"
  | "seo"
  | "automation"
  | "other";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  enquiryType?: ContactEnquiryType;
  budget?: string;
  timeline?: string;
  website?: string;
}

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  submissionId?: string;
}

export interface ContactServiceOptions {
  signal?: AbortSignal;
  timeout?: number;
}

/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */

export class ContactValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ContactValidationError";

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

function normalizeString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validateContactForm(data: ContactFormData): ContactFormData {
  const name = normalizeString(data.name);
  const email = normalizeString(data.email).toLowerCase();
  const message = normalizeString(data.message);

  if (!name) {
    throw new ContactValidationError("Please enter your name.");
  }

  if (name.length > 100) {
    throw new ContactValidationError(
      "Your name must be 100 characters or fewer."
    );
  }

  if (!email) {
    throw new ContactValidationError("Please enter your email address.");
  }

  if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    throw new ContactValidationError(
      "Please enter a valid email address."
    );
  }

  if (!message) {
    throw new ContactValidationError("Please enter your message.");
  }

  if (message.length < 10) {
    throw new ContactValidationError(
      "Please provide a little more detail (at least 10 characters)."
    );
  }

  if (message.length > 5000) {
    throw new ContactValidationError(
      "Your message must be 5000 characters or fewer."
    );
  }

  const phone = normalizeString(data.phone);

  if (phone && !/^[+()\d\s.-]{7,25}$/.test(phone)) {
    throw new ContactValidationError(
      "Please enter a valid phone number."
    );
  }

  const allowedEnquiryTypes: ContactEnquiryType[] = [
    "general",
    "web-development",
    "web-application",
    "ui-ux-design",
    "mobile-development",
    "ecommerce",
    "seo",
    "automation",
    "other",
  ];

  if (
    data.enquiryType &&
    !allowedEnquiryTypes.includes(data.enquiryType)
  ) {
    throw new ContactValidationError(
      "Please select a valid enquiry type."
    );
  }

  return {
    name,
    email,
    phone: phone || undefined,
    company: normalizeString(data.company) || undefined,
    subject: normalizeString(data.subject) || undefined,
    message,
    enquiryType: data.enquiryType ?? "general",
    budget: normalizeString(data.budget) || undefined,
    timeline: normalizeString(data.timeline) || undefined,
    website: normalizeString(data.website) || undefined,
  };
}

/* -------------------------------------------------------------------------- */
/* API service                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Submit a contact enquiry to the backend.
 *
 * Requires POST /api/contact to exist on your server.
 */
export async function submitContactForm(
  formData: ContactFormData,
  options: ContactServiceOptions = {}
): Promise<ContactSubmissionResponse> {
  const validatedData = validateContactForm(formData);

  const response = await api.post<ContactSubmissionResponse>(
    "/api/contact",
    validatedData,
    {
      signal: options.signal,
      timeout: options.timeout ?? 15000,
    }
  );

  if (!response || typeof response.success !== "boolean") {
    throw new Error("The server returned an unexpected response.");
  }

  if (!response.success) {
    throw new Error(
      response.message || "Your enquiry could not be submitted."
    );
  }

  return response;
}

/**
 * Optional helper to check whether the API reports successful delivery.
 *
 * Requires GET /api/contact/health to exist on your backend.
 */
export async function checkContactServiceHealth(
  options: ContactServiceOptions = {}
): Promise<{ status: string }> {
  return api.get<{ status: string }>("/api/contact/health", {
    signal: options.signal,
    timeout: options.timeout ?? 10000,
  });
}

const contactService = {
  submitContactForm,
  checkContactServiceHealth,
};

export default contactService;
