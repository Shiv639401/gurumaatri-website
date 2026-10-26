
/**
 * GuruMaatri Innovations
 * Shared TypeScript types and interfaces.
 *
 * Keep reusable, project-wide type definitions here.
 * Feature-specific types should stay close to their features.
 */

/* -------------------------------------------------------------------------- */
/* Primitive and utility types                                                */
/* -------------------------------------------------------------------------- */

export type ID = string;

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type Maybe<T> = T | null | undefined;

export type ValueOf<T> = T[keyof T];

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type AsyncStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

export type SortDirection = "asc" | "desc";

export type ThemeMode = "light" | "dark" | "system";

/* -------------------------------------------------------------------------- */
/* API types                                                                  */
/* -------------------------------------------------------------------------- */

export interface ApiSuccessResponse<T> {
  success: true;
  message?: string;
  data: T;
}

export interface ApiFailureResponse {
  success: false;
  message: string;
  code?: string;
  errors?: Record<string, string | string[]>;
}

export type ApiResponse<T> =
  | ApiSuccessResponse<T>
  | ApiFailureResponse;

export interface ApiErrorDetails {
  message: string;
  status?: number;
  code?: string;
  details?: unknown;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface SortParams {
  sortBy?: string;
  sortDirection?: SortDirection;
}

/* -------------------------------------------------------------------------- */
/* Common UI states                                                           */
/* -------------------------------------------------------------------------- */

export interface AsyncState<T> {
  data: T | null;
  status: AsyncStatus;
  error: string | null;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface SelectOption<TValue extends string = string> {
  label: string;
  value: TValue;
  description?: string;
  disabled?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

export interface MetaData {
  title: string;
  description: string;
  canonicalUrl?: string;
  image?: string;
  noIndex?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Navigation types                                                           */
/* -------------------------------------------------------------------------- */

export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  children?: NavigationItem[];
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  label?: string;
}

/* -------------------------------------------------------------------------- */
/* Service and project types                                                  */
/* -------------------------------------------------------------------------- */

export type ServiceCategory =
  | "Development"
  | "Design"
  | "Growth"
  | "Automation";

export interface ServiceSummary {
  id: string;
  number?: string;
  title: string;
  shortDescription: string;
  description?: string;
  category: ServiceCategory;
  features?: string[];
  technologies?: string[];
  benefits?: string[];
  href: string;
  featured?: boolean;
}

export type ProjectStatus =
  | "concept"
  | "in-progress"
  | "completed";

export interface ProjectSummary {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image?: string;
  href?: string;
  featured?: boolean;
  status?: ProjectStatus;
}

/* -------------------------------------------------------------------------- */
/* Contact and form types                                                     */
/* -------------------------------------------------------------------------- */

export type FormStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error";

export interface ContactFormValues {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
}

export interface FormResult {
  success: boolean;
  message: string;
}

export interface FormFieldError {
  field: string;
  message: string;
}

/* -------------------------------------------------------------------------- */
/* Estimator types                                                            */
/* -------------------------------------------------------------------------- */

export type EstimatorProjectType =
  | "website"
  | "web-app"
  | "ui-ux"
  | "ecommerce"
  | "mobile"
  | "seo"
  | "automation"
  | "other";

export type ProjectComplexity =
  | "basic"
  | "standard"
  | "advanced"
  | "enterprise";

export type ProjectTimeline =
  | "urgent"
  | "standard"
  | "flexible";

export interface EstimateFeature {
  id: string;
  name: string;
  description?: string;
  price?: number;
  selected?: boolean;
}

export interface ProjectEstimate {
  projectType: EstimatorProjectType;
  complexity: ProjectComplexity;
  timeline: ProjectTimeline;
  selectedFeatures: string[];
  currency: string;
  minPrice: number;
  maxPrice: number;
  estimatedDays?: number;
}

/* -------------------------------------------------------------------------- */
/* Pricing types                                                              */
/* -------------------------------------------------------------------------- */

export interface PricingFeature {
  text: string;
  included?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number | string;
  currency?: string;
  period?: string;
  features: Array<string | PricingFeature>;
  popular?: boolean;
  badge?: string;
  ctaText?: string;
  href?: string;
}

/* -------------------------------------------------------------------------- */
/* FAQ types                                                                  */
/* -------------------------------------------------------------------------- */

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface FAQCategory {
  label: string;
  value: string;
}

/* -------------------------------------------------------------------------- */
/* Event and interaction types                                                */
/* -------------------------------------------------------------------------- */

export interface ClickableItem {
  label: string;
  href: string;
  disabled?: boolean;
}

export interface ToastMessage {
  id: string;
  title?: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
}

/* -------------------------------------------------------------------------- */
/* Shared component props                                                     */
/* -------------------------------------------------------------------------- */

export interface BaseComponentProps {
  className?: string;
  children?: import("react").ReactNode;
}

export interface DisabledProps {
  disabled?: boolean;
}

export interface TestableProps {
  "data-testid"?: string;
}
