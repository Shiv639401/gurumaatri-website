
/**
 * GuruMaatri Innovations
 * Contact & Lead Types
 *
 * File: src/types/contact.ts
 */

/* ─────────────────────────────────────────────
   Common Contact Types
───────────────────────────────────────────── */

export type ContactId = string;

export type ContactStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error";

export type ContactSubject =
  | "Website Development"
  | "Web Application"
  | "Mobile App Development"
  | "UI/UX Design"
  | "Digital Marketing"
  | "AI & Automation"
  | "E-commerce Development"
  | "Consultation"
  | "Other";

export type ContactBudget =
  | "Under ₹25,000"
  | "₹25,000 – ₹50,000"
  | "₹50,000 – ₹1,00,000"
  | "₹1,00,000 – ₹3,00,000"
  | "₹3,00,000+"
  | "Not decided";

/* ─────────────────────────────────────────────
   Contact Form
───────────────────────────────────────────── */

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: ContactSubject | string;
  message: string;
  budget?: ContactBudget | string;
  website?: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
  budget?: string;
  website?: string;
  general?: string;
}

export interface ContactFormState {
  values: ContactFormData;
  errors: ContactFormErrors;
  status: ContactStatus;
  message: string;
}

/* ─────────────────────────────────────────────
   Contact API
───────────────────────────────────────────── */

export interface ContactSubmissionPayload extends ContactFormData {
  source?: string;
  pageUrl?: string;
}

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  id?: ContactId;
  data?: {
    id?: ContactId;
    status?: "received" | "pending" | "processed";
  };
}

export interface ContactApiError {
  message: string;
  statusCode?: number;
  errors?: ContactFormErrors;
}

/* ─────────────────────────────────────────────
   Contact Information
───────────────────────────────────────────── */

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
  description?: string;
}

export interface ContactSocialLink {
  name: string;
  href: string;
  label: string;
}

export interface ContactOffice {
  name: string;
  address: string;
  city?: string;
  country?: string;
  mapUrl?: string;
}

/* ─────────────────────────────────────────────
   Contact Form Defaults
───────────────────────────────────────────── */

export const CONTACT_FORM_INITIAL_VALUES: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "Website Development",
  message: "",
  budget: "Not decided",
  website: "",
};

export const CONTACT_FORM_INITIAL_STATE: ContactFormState = {
  values: CONTACT_FORM_INITIAL_VALUES,
  errors: {},
  status: "idle",
  message: "",
};

/* ─────────────────────────────────────────────
   Select Options
───────────────────────────────────────────── */

export const CONTACT_SUBJECT_OPTIONS: {
  label: string;
  value: ContactSubject;
}[] = [
  { label: "Website Development", value: "Website Development" },
  { label: "Web Application", value: "Web Application" },
  { label: "Mobile App Development", value: "Mobile App Development" },
  { label: "UI/UX Design", value: "UI/UX Design" },
  { label: "Digital Marketing", value: "Digital Marketing" },
  { label: "AI & Automation", value: "AI & Automation" },
  { label: "E-commerce Development", value: "E-commerce Development" },
  { label: "Consultation", value: "Consultation" },
  { label: "Other", value: "Other" },
];

export const CONTACT_BUDGET_OPTIONS: {
  label: string;
  value: ContactBudget;
}[] = [
  { label: "Under ₹25,000", value: "Under ₹25,000" },
  { label: "₹25,000 – ₹50,000", value: "₹25,000 – ₹50,000" },
  { label: "₹50,000 – ₹1,00,000", value: "₹50,000 – ₹1,00,000" },
  { label: "₹1,00,000 – ₹3,00,000", value: "₹1,00,000 – ₹3,00,000" },
  { label: "₹3,00,000+", value: "₹3,00,000+" },
  { label: "Not decided", value: "Not decided" },
];

/* ─────────────────────────────────────────────
   Validation
───────────────────────────────────────────── */

export function validateContactForm(
  values: ContactFormData,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const name = values.name.trim();
  const email = values.email.trim();
  const phone = values.phone?.trim() ?? "";
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < 2) {
    errors.name = "Name must contain at least 2 characters.";
  } else if (name.length > 100) {
    errors.name = "Name cannot exceed 100 characters.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (phone && !/^[+()\d\s.-]{7,25}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (values.company && values.company.trim().length > 150) {
    errors.company = "Company name cannot exceed 150 characters.";
  }

  if (!subject) {
    errors.subject = "Please select a project subject.";
  } else if (subject.length > 100) {
    errors.subject = "Subject cannot exceed 100 characters.";
  }

  if (!message) {
    errors.message = "Please describe your project.";
  } else if (message.length < 10) {
    errors.message = "Message must contain at least 10 characters.";
  } else if (message.length > 5000) {
    errors.message = "Message cannot exceed 5000 characters.";
  }

  if (values.budget && values.budget.length > 100) {
    errors.budget = "Please select a valid budget range.";
  }

  if (values.website?.trim()) {
    try {
      const url = new URL(values.website.trim());

      if (!["http:", "https:"].includes(url.protocol)) {
        errors.website = "Please enter a valid website URL.";
      }
    } catch {
      errors.website = "Please enter a valid website URL.";
    }
  }

  return errors;
}

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */

export function isContactFormValid(
  values: ContactFormData,
): boolean {
  return Object.keys(validateContactForm(values)).length === 0;
}

export function createContactPayload(
  values: ContactFormData,
): ContactSubmissionPayload {
  return {
    name: values.name.trim(),
    email: values.email.trim().toLowerCase(),
    phone: values.phone?.trim() || undefined,
    company: values.company?.trim() || undefined,
    subject: values.subject.trim(),
    message: values.message.trim(),
    budget: values.budget || undefined,
    website: values.website?.trim() || undefined,
    source: "website-contact-form",
  };
}
